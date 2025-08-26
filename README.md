# Bookstore Demo for Web Scraping Tutorial

This project provides two demo bookstore sites for practicing web scraping:

- **Static Site:** Pure HTML, easy to scrape with libraries like Beautiful Soup (Python), HtmlAgilityPack (.NET), etc.
- **Dynamic Site:** Renders book data using JavaScript in the browser. Requires browser automation tools like Selenium, Playwright, or Puppeteer.

---

## 📁 Folder Structure & File Descriptions

```
bookstore-demo-to-scrape/
│
├── assets/
│   └── style.css                # Shared CSS styles for landing page and sites
│
├── dynamic-site/
│   ├── index.html               # Dynamic bookstore homepage
│   ├── script.js                # JS to render books from books.json
│   ├── books.json               # Book data (used by script.js)
│   └── assets/
│       └── book-cover.png       # Book cover image
│
├── static-site/
│   ├── index.html               # Static bookstore homepage (all books in HTML)
│   ├── script.js                # (Optional) JS for static site
│   ├── assets/
│       ├── style.css            # CSS for static site
│       └── book-cover.png       # Book cover image
│
├── scripts/
│   └── script.js                # JS for landing page (currently empty)
│
├── .vscode/
│   └── launch.json              # VS Code launch config for Chrome
│
├── index.html                   # Landing page with navigation buttons
├── README.md                    # This file
└── ...other files...
```

---

## 🚀 How to Run the Project in Your Browser

You can run this project locally in several ways:

### 1. Using `npx http-server` (Node.js required)

```sh
npx http-server -c-1
```
- Starts a local server in the current directory.
- Open the provided URL (usually `http://localhost:8080`) in your browser.

### 2. Using Visual Studio Code

- Open the project folder in VS Code.
- Right-click `index.html` and select **"Open with Live Server"** (requires the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).
- Or use the `.vscode/launch.json` to launch Chrome against `http://localhost:8080`.

### 3. Double-click the HTML file

- Double-click `index.html` to open it directly in your browser.
- Note: Some features (like dynamic site JS) may not work correctly due to browser security restrictions when opening files directly.

### 4. Using Python's SimpleHTTPServer

```sh
python -m http.server
```
- Starts a server at `http://localhost:8000`.

---

## 🕵️‍♂️ Scraping Guidance

- **Static Site:**  
  Use HTML parsing libraries such as:
  - [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/) (Python)
  - [HtmlAgilityPack](https://html-agility-pack.net/) (.NET)
  - [Cheerio](https://cheerio.js.org/) (Node.js)

- **Dynamic Site:**  
  Since content is rendered by JavaScript, use browser automation tools:
  - [Selenium](https://www.selenium.dev/)
  - [Playwright](https://playwright.dev/)
  - [Puppeteer](https://pptr.dev/)

---

## 🎯 Purpose

This project is designed to help learners understand the differences between scraping static and dynamic websites, and to provide a hands-on learning experience with real-world web scraping scenarios.