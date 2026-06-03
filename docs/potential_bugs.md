# Potential Bugs & Quality Issues

This document highlights critical HTML/CSS syntax violations, configuration conflicts, deprecated URLs, and console errors present in the current codebase.

---

## 1. HTML Syntax & Configuration Issues

### Duplicate ID Attributes on Single Element
* **Location:** [index.html](../index.html#L708)
* **Code:**
  ```html
  <input id="name" type="text" class="form-control" id='full-name' name="name" required placeholder="Enter your full name here">
  ```
* **Issue:** The element has both `id="name"` and `id='full-name'`. An HTML element must only contain one ID. Having duplicate ID definitions violates W3C specifications, leads to unexpected DOM behavior, and may prevent jQuery selectors (e.g., `jQuery(".contact_form #name")`) from parsing correctly in some engines.

### Typos in Viewport Meta Tag
* **Location:** [index.html](../index.html#L11)
* **Code:**
  ```html
  <meta content="width=device-width, inital-scale=1, minimum-scale=1, maximum-scale=5" name="viewport" />
  ```
* **Issue:** `inital-scale` is misspelled. It should be `initial-scale`. This typo may prevent some mobile web browsers from executing the proper scaling behavior on load, leading to layout bugs.

### Conflicting Character Encodings
* **Location:** [index.html](../index.html#L8-L9)
* **Code:**
  ```html
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  ```
* **Issue:** The site declares two conflicting character encodings back-to-back. The page is written in UTF-8, but declaring `ISO-8859-1` right after can cause rendering issues with special characters in older user-agents and confuses search indexers.

---

## 2. Invalid CSS Properties

### Invalid `alt` attributes inside CSS
* **Location:** [css/style.css](../css/style.css#L559) & [css/style.css](../css/style.css#L1939)
* **Code:**
  ```css
  .edina_tm_universal_box_wrap .overlay_image.hero {
      background-image: url(..//img/hero/2.webp);
      alt: "hero images";
  }
  ```
* **Issue:** `alt` is a HTML element attribute, not a valid CSS property. Declaring it inside CSS blocks causes standard stylesheet parsers to mark them as invalid and ignore them. Alt text must be set on visual elements in HTML.

---

## 3. Deprecated Integrations & Dead Links

### Broken Social Links (Firebase Dynamic Links Deprecation)
* **Location:** [index.html](../index.html#L85-L91) & [index.html](../index.html#L185-L197)
* **URLs:** `https://boboko.page.link/...`
* **Issue:** All social links for Facebook, Twitter, LinkedIn, and Instagram use `page.link` domains, which are powered by **Google Firebase Dynamic Links**. Google deprecated this service and officially shut it down on **August 25, 2025**. All links pointing to this domain now fail to redirect, meaning **none of the social links on the portfolio function anymore**.

---

## 4. Console Errors & Execution Conflicts

### Missing Form Submission Endpoint (`404 Not Found`)
* **Location:** [js/init.js](../js/init.js#L367)
* **Code:**
  ```javascript
  jQuery.post("modal/contact.php", { ... })
  ```
* **Issue:** The AJAX logic attempts to post form contents to `modal/contact.php`. However, there is no `/modal` directory or `contact.php` script present in the repository. Submitting the form triggers a `404 Not Found` network console error.

### Form Submission Execution Conflict
* **Location:** [js/init.js](../js/init.js#L352-L392) & [js/init.js](../js/init.js#L589-L594)
* **Issue:** Clicking "Send Message" triggers two separate listeners concurrently:
  1. The custom AJAX call to the non-existent `modal/contact.php`.
  2. The `clickSend()` function which triggers a click on `#send-message-yes`, submitting the form directly via HTML standard browser POST navigation to `https://formsubmit.co/hello@risyandi.com`.
  
  Since the form executes a full browser redirect, the AJAX call is aborted mid-flight. Furthermore, if jQuery validation fails and the AJAX alert slides down, the programmatic submit trigger may bypass jQuery validation and attempt form submission anyway, leading to overlapping tooltips.

### Browser Autoplay Blocker Error
* **Location:** [index.html](../index.html#L754)
* **Code:**
  ```html
  <audio autoplay="true" src="background_sound.mp3"></audio>
  ```
* **Issue:** Modern browsers (Chrome, Safari, Firefox) implement strict autoplay policies. Audio play is blocked by default until a user makes an active interaction (like a click) on the document. This results in the console error:
  `Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.`
