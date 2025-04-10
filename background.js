//  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

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarizeText",
    title: "Summarize this",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "summarizeText") {
    const selectedText = info.selectionText;
    const summary = await getSummary(selectedText);
    chrome.storage.local.set({ summary });
    chrome.action.openPopup();  // Opens popup.html to show the summary
  }
});

async function getSummary(text) {
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
      method: "POST",
      headers: {
        "Authorization": `Bearer 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`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: text })
    });

    const data = await response.json();
    console.log("API Response:", data);

    if (Array.isArray(data) && data[0]?.summary_text) {
      return data[0].summary_text.trim();
    } else if (data?.error) {
      return `API Error: ${data.error}`;
    } else {
      return "Unexpected API response. Please try again.";
    }

  } catch (err) {
    console.error("Fetch Error:", err);
    return "Failed to fetch summary. Please check your internet or API key.";
  }
}

