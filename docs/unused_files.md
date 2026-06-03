# Unused Files Analysis

This document provides a detailed list of files currently present in the codebase that are **not utilized** by the live website. Cleaning up these files will reduce repository size, speed up deployment transfers, and maintain a clean project structure.

---

## 1. Unused Scripts (`/js`)

These scripts are tracked in the repository but are not referenced or loaded in [index.html](../index.html):

* `js/ie8.js` (No longer loaded; provides legacy IE8 alerts)
* `js/modernizr.custom.js` (Legacy browser capability detection; not imported)

---

## 2. Unused Library Stylesheets & Assets (`/main-pages/assets/owl-carousel`)

The website uses the minified versions of the core Owl Carousel stylesheet and script. The following assets are loaded by neither HTML nor CSS:

* `main-pages/assets/owl-carousel/assets/owl.carousel.css` (Non-minified style; `owl.carousel.min.css` is used instead)
* `main-pages/assets/owl-carousel/assets/owl.theme.default.css` (Default theme; unused by custom styles)
* `main-pages/assets/owl-carousel/assets/owl.theme.default.min.css` (Minified default theme; unused)
* `main-pages/assets/owl-carousel/assets/owl.theme.green.css` (Green theme; unused)
* `main-pages/assets/owl-carousel/assets/owl.theme.green.min.css` (Minified green theme; unused)
* `main-pages/assets/owl-carousel/assets/owl.video.play.png` (Video play button overlay; video feature not used in slides)
* `main-pages/assets/owl-carousel/assets/ajax-loader.gif` (Loading animation; unused)

---

## 3. Redundant Images (`/img`)

The website has transitioned to loading WebP formats for many assets, leaving legacy `.jpg`, `.png`, or alternative WebP mockups untouched.

### `/img/about/`
* `img/about/1.jpg` (WebP version `1.webp` is loaded in CSS)
* `img/about/2.jpg` (Completely unused)
* `img/about/2.webp` (Completely unused)
* `img/about/3.jpg` (WebP version `3.webp` is loaded in CSS)

### `/img/blog/`
* `img/blog/1.jpg` (WebP used in HTML)
* `img/blog/2.jpg` (WebP used in HTML)
* `img/blog/3.jpg` (WebP used in HTML)
* `img/blog/1170x450.jpg` (WebP version used in HTML)
* `img/blog/500x350.jpg` (Completely unused resolution)
* `img/blog/500x350.webp` (Completely unused resolution)

### `/img/clients/` (Entire folder is unused)
* `img/clients/1.jpg`
* `img/clients/1.webp`
* `img/clients/2.jpg`
* `img/clients/2.webp`
* `img/clients/3.jpg`
* `img/clients/3.webp`

### `/img/hero/`
* `img/hero/1.jpg` (Completely unused)
* `img/hero/1.webp` (Completely unused)
* `img/hero/2.jpg` (WebP version `2.webp` is loaded in CSS)
* `img/hero/image.png` (Completely unused placeholder)
* `img/hero/image.webp` (Completely unused placeholder)

### `/img/jarallax/`
* `img/jarallax/1.jpg` (WebP version `1.webp` is loaded in CSS)
* `img/jarallax/2.jpg` (WebP version `2.webp` is loaded in CSS)

### `/img/logo/`
* `img/logo/logo.png` (WebP version `logo.webp` is loaded in HTML and Favicon)

### `/img/partners/`
* `img/partners/1.png` (WebP used in HTML)
* `img/partners/2.png` (WebP used in HTML)
* `img/partners/3.png` (WebP used in HTML)
* `img/partners/4.png` (WebP used in HTML)

### `/img/portfolio/`
* `img/portfolio/1.jpg` to `9.jpg` (WebP versions `1.webp` to `9.webp` are loaded in HTML zoom links and CSS background rules)
* `img/portfolio/600x600.jpg` (WebP version `600x600.webp` is loaded in HTML)

---

## 4. Unused Vector Graphics (`/img/svg`)

The website includes a vector library with dozens of SVG files, but only **6 SVGs** are actively loaded inside [index.html](../index.html):

1. `img/svg/camera-diaphragm.svg` (Photography service)
2. `img/svg/new-tab.svg` (Website Development service)
3. `img/svg/layers.svg` (AdTech service)
4. `img/svg/share.svg` (Social Media Management service)
5. `img/svg/adobe-illustrator.svg` (Graphic Design service)
6. `img/svg/seo-performance-marketing-graphic.svg` (Digital Marketing service)

**All other SVG files** in `img/svg/` (approx. 90+ files) are unused and can be safely deleted. These include files like:
* `arrow-right.svg`, `arrow.svg`, `atari.svg`, `bookmark.svg`, `car.svg`, `gps-fixed-indicator.svg`, `heart.svg`, `quotes.svg`, etc.
