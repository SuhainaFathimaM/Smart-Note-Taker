document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["summary"], (result) => {
    const summary = result.summary || "No summary available.";
    document.getElementById("summary").innerText = summary;
  });

  document.getElementById("download").addEventListener("click", () => {
    chrome.storage.local.get(["summary"], (result) => {
      const blob = new Blob([result.summary], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "smart_note.txt";
      a.click();
      URL.revokeObjectURL(url);
    });
  });
});
