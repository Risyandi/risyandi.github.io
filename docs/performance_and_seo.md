# Performance & SEO Enhancements

This document lists actionable suggestions to improve the page load speed, responsiveness, Core Web Vitals, and search engine crawlability of the website **without changing the layout or visible textual content**.

---

## 1. Performance Optimizations

### Defer or Toggle the Large Background Audio Payload
* **Impact:** High (Saves 1.04 MB of initial load bandwidth)
* **Description:** The `background_sound.mp3` file is 1.04MB. Because it attempts to load on startup, it competes with HTML, CSS, and image assets for network bandwidth. Since modern browsers block autoplay audio by default, this file is downloaded but never heard.
* **Suggestion:** Remove the default `<audio autoplay>` tag, or defer its loading and play it only if the user explicitly clicks a "Music On/Off" toggle button.

### Implement Native Image Lazy Loading (`loading="lazy"`)
* **Impact:** High (Improves First Contentful Paint and page weight)
* **Description:** Below-the-fold images (such as portfolio items, blog thumbnails, and partner logos) are downloaded immediately on load.
* **Suggestion:** Add `loading="lazy"` to all image tags below the hero section:
  ```html
  <img src="img/portfolio/600x600.webp" alt="portfolio 1" loading="lazy" />
  ```

### Fix Font Preconnect Syntax
* **Impact:** Medium (Reduces DNS resolution time)
* **Description:** The Google Fonts links combine two actions into a single `rel` attribute:
  ```html
  <link href="https://fonts.googleapis.com/...&display=swap" rel="stylesheet preconnect" crossorigin>
  ```
  Combining `stylesheet` and `preconnect` in one `rel` tag is non-standard and is ignored by some browsers.
* **Suggestion:** Separate them into separate resource hints:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css?family=Montserrat:...&display=swap" rel="stylesheet">
  ```

### Minify Production Assets (CSS & JS)
* **Impact:** Medium
* **Description:** The core custom stylesheets and scripts are served unminified:
  * `css/style.css` (~54 KB)
  * `js/init.js` (~15 KB)
* **Suggestion:** Run minification tools to create `style.min.css` and `init.min.js`, shaving off unnecessary spacing, comments, and structure.

---

## 2. SEO Enhancements

### Establish a Proper Heading Hierarchy (Missing `<h1>` & `<h2>` Tags)
* **Impact:** Critical (Essential for search crawler indexing)
* **Description:** The website has **no `<h1>` or `<h2>` tags**. Headings represent the structural outline of the page for search engine indexing.
  * The main page introduction is a paragraph: `<p class="first">Hi, folks...</p>`.
  * Section titles like "About Me" and "Amazing Services" use generic styled text in `<span>` tags.
  * Portfolio and blog item headings jump straight to `<h3>`.
* **Suggestion:** 
  1. Wrap the primary introduction in an `<h1>`:
     ```html
     <h1 class="first">Hi, folks.<br>I'm Risyandi...</h1>
     ```
  2. Change section titles to `<h2>`:
     ```html
     <h2 class="title_wrap"><span>About Me</span></h2>
     ```

### descriptive Image Alt Attributes & Typos
* **Impact:** Medium (Improves image search traffic)
* **Description:** Image alt tags are currently generic or contain typos:
  * Misspelled `alt="fortopolio 2"` instead of `alt="portfolio 2"`.
  * Generic `alt="images blog small"` and `alt="images blog big"`.
* **Suggestion:** Update alt attributes to describe the exact work. E.g.:
  * Change `alt="fortopolio 2"` to `alt="Bolalob Website Revamp Portfolio"`.
  * Change `alt="images blog small"` to `alt="Spotify Desktop AdBlocker Article Thumbnail"`.

### Correct Meta Configuration Tags
* **Impact:** Low
* **Description:** As highlighted in the bugs log:
  1. Correct the misspelled `<meta content="... inital-scale=1 ...">` viewport tag to `initial-scale=1`.
  2. Remove the conflicting `<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">` tag.
* **Result:** Assures search engine crawlers that the page is fully responsive and encoded in standard UTF-8.

### Social Meta Graph Image Personalization
* **Impact:** Low (Improves Click-Through Rate)
* **Description:** The `og:image` and `twitter:image` tags point to a third-party stock photo:
  `https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?...`
* **Suggestion:** Host a custom branded screenshot or social sharing banner image in the repo and reference it dynamically.
