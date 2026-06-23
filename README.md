# Vijay Industries — Website

## Structure
This site uses **folder-based clean URLs**. Each page lives in its own folder as `index.html`,
e.g. `/about-us/index.html` is served automatically at `/about-us/` by any standard web server
(Apache, Nginx, Netlify, GitHub Pages, etc.) — no special configuration required.

```
/                          -> index.html (homepage)
/about-us/                 -> about-us/index.html
/contact/                  -> contact/index.html
/inquiry/                  -> inquiry/index.html
/rotating-air-rings/       -> rotating-air-rings/index.html
... (one folder per page)
```

All internal links, the navigation menu, footer, and sidebar use root-absolute paths
(e.g. `/about-us/`, `/assets/css/style.css`) so they work correctly regardless of how deep
the current page is nested.

An `.htaccess` file is included as a safety net for Apache hosts (forces trailing slashes,
handles any stray `.html` requests). It is not required on Nginx, Netlify, Vercel, or
GitHub Pages, which serve folder/`index.html` URLs natively.

## Forms
Both the Contact page, the Inquiry page, and the product-page "Inquire Now" popup submit
via [W3Forms](https://web3forms.com) using the access key embedded in each form. Submissions
are sent by email to the address registered with that W3Forms account — no backend code needed.

## Inquiry Popup
Every product page includes "Inquire Now" buttons that open a popup form. The product name
is automatically filled into a hidden field so the inquiry email shows exactly which product
the visitor was viewing.

## Images
Product photos in `assets/img/products/` are cropped from genuine Vijay Industries factory
and product photography (no stock or placeholder images).
