/**
 * Client-Side Internationalization (i18n) Controller
 * Manages language switching, local storage persistence, and element updates.
 */

(function ($) {
    "use strict";

    // Helper to get nested translation values if needed
    function getTranslation(lang, key) {
        if (window.portfolioTranslations && window.portfolioTranslations[lang]) {
            return window.portfolioTranslations[lang][key];
        }
        return null;
    }

    // Function to apply translation across the page
    function applyLanguage(lang) {
        // 1. Save state in local storage
        localStorage.setItem('risyandi_lang', lang);

        // 2. Update HTML tag locale
        $('html').attr('lang', lang);

        // 3. Update all data-i18n elements
        $('[data-i18n]').each(function () {
            var $element = $(this);
            var key = $element.attr('data-i18n');
            var translation = getTranslation(lang, key);

            if (translation !== null && translation !== undefined) {
                // If the key expects HTML content, render as html, else text
                if (key === 'hero.first' || key === 'footer.copyright' || key.indexOf('.first') !== -1 && $element.find('a').length > 0) {
                    $element.html(translation);
                } else {
                    $element.text(translation);
                }
            }
        });

        // 4. Update placeholder tags
        $('[data-i18n-placeholder]').each(function () {
            var $element = $(this);
            var key = $element.attr('data-i18n-placeholder');
            var translation = getTranslation(lang, key);

            if (translation !== null && translation !== undefined) {
                $element.attr('placeholder', translation);
            }
        });

        // 5. Update success messages on form returns
        $('[data-i18n-success]').each(function () {
            var $element = $(this);
            var key = $element.attr('data-i18n-success');
            var translation = getTranslation(lang, key);

            if (translation !== null && translation !== undefined) {
                $element.attr('data-success', translation);
            }
        });

        // 6. Update inputs using value attribute
        $('[data-i18n-val]').each(function () {
            var $element = $(this);
            var key = $element.attr('data-i18n-val');
            var translation = getTranslation(lang, key);

            if (translation !== null && translation !== undefined) {
                $element.val(translation);
            }
        });

        // 7. Update SEO meta tags & Page Title dynamically
        var pageTitle = lang === 'id' 
            ? "Risyandi | Software Engineer, Pesepeda Bahagia Dan Nomaden Digital."
            : "Risyandi | Software Engineer, The Happy Cyclist And A Digital Nomad.";
        
        var pageDesc = lang === 'id'
            ? "Risyandi | Seorang minimalis, antusias teknologi, dan nomaden digital dari Indonesia."
            : "Risyandi | A minimalist, tech enthusiast, and a digital nomad from Indonesia.";

        document.title = pageTitle;
        $('meta[name="title"]').attr('content', pageTitle);
        $('meta[property="og:title"]').attr('content', pageTitle);
        $('meta[name="twitter:title"]').attr('content', pageTitle);

        $('meta[name="description"]').attr('content', pageDesc);
        $('meta[property="og:description"]').attr('content', pageDesc);
        $('meta[name="twitter:description"]').attr('content', pageDesc);

        // 8. Sync switcher UI states (both desktop and mobile switcher classes)
        $('.lang_btn').removeClass('active');
        $('.lang_btn[data-lang="' + lang + '"]').addClass('active');

        // 9. Re-trigger dynamic script plugins:
        // - Footer year: re-populates `.year-footer` tag which gets overwritten by footer.copyright HTML rewrite.
        if (typeof window.edina_getyear_footer === 'function') {
            window.edina_getyear_footer();
        }
        // - Typed.js: destroys previous instance if existing and restarts with translated word array.
        if (typeof window.edina_tm_animate_text === 'function') {
            window.edina_tm_animate_text();
        }
    }

    // Initialize detection and bind triggers
    $(document).ready(function () {
        // Detect system preferred locale, default to english
        var preferredLang = 'en';
        var storedLang = localStorage.getItem('risyandi_lang');

        if (storedLang === 'en' || storedLang === 'id') {
            preferredLang = storedLang;
        } else {
            var browserLocale = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
            if (browserLocale.indexOf('id') === 0 || browserLocale.indexOf('in') === 0) {
                preferredLang = 'id';
            }
        }

        // Apply translations initially
        applyLanguage(preferredLang);

        // Bind interactive event triggers (delegated to support replacement structures)
        $(document).on('click', '.lang_btn', function (e) {
            e.preventDefault();
            var targetLang = $(this).attr('data-lang');
            if (targetLang === 'en' || targetLang === 'id') {
                applyLanguage(targetLang);
            }
        });
    });

})(jQuery);
