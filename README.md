# 🧠 Smart Notes Taker - Chrome Extension

A simple Chrome extension to **summarize selected text** on any webpage using the **Hugging Face API** and save the summary as a downloadable note.

---

## 🚀 Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer Mode** (top right corner).
4. Click **Load unpacked**.
5. Select the `smart-notes-taker` directory.

✅ Done! Now right-click on any selected text and choose **"Summarize this"**.

---

## 🔐 Setup Hugging Face API Key

1. Go to [Hugging Face](https://huggingface.co/join) and create an account.
2. Navigate to **Settings → Access Tokens**.
3. Create a new token and copy it.
4. In `background.js`, replace:

```js
"Authorization": "Bearer YOUR_API_KEY_HERE"
