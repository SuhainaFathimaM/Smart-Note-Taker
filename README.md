# 🧠 Smart Notes Taker - Chrome Extension

A simple Chrome extension to **summarize selected text** on any webpage using the **Hugging Face API** and save the summary as a downloadable note.

<img src="Screenshot 2025-04-10 231233.png" alt="Screenshot" width="400"/>
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
```

## 📂 Project Structure

```yaml
smart-notes-taker/
├── background.js        # Handles context menu and API calls
├── manifest.json        # Chrome extension configuration
├── popup.html           # Popup UI for showing summary
├── popup.js             # Script for popup functionality
├── style.css            # Styling for popup
├── icon.png             # Extension icon
└── README.md            # Project documentation
```

---

## ✨ Example Usage

<img src="Screenshot 2025-04-10 231156.png" alt="Screenshot" width="400"/>



- Select any paragraph or text on a webpage.  
- Right-click → Click on **Summarize this**.  
- A popup appears with the generated summary.  
- Click **Download Note** to save it as a `.txt` file.

---

## 💡 Contribution

Pull requests are welcome!  
Feel free to open issues or suggest features.

**To contribute:**

```bash
Fork the repository
git checkout -b feature-name
git commit -m "Add new feature"
git push origin feature-name
Open a pull request 🚀
```

## 📄 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

**Suhaina Fathima M**  
Connect with me on [LinkedIn](https://www.linkedin.com/suhaina-fathima-m) or check out my [GitHub](https://github.com/SuhainaFathimaM)

---

## 🌟 Acknowledgments

- [Hugging Face](https://huggingface.co) for providing free inference APIs  
- [OpenAI](https://openai.com) GPT technology for guidance  
- [Chrome Developers](https://developer.chrome.com/docs/extensions/) community for documentation and examples

