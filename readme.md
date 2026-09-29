# Mama Maendeleo Resort Website

A modern accommodation website for Mama Maendeleo Resort, Lamu.
Features booking, services, rates, and location info.

## Features

- Responsive landing page with hero section and navigation
- Booking enquiry form (EmailJS; requires deployment configuration)
- Services and rates showcase
- Swahili dining, free Wi-Fi, and more
- Node.js/Express server for hosting the site

## Structure

- home.html — Main landing page
- index.html — Alternate homepage
- services .html — Services details
- css/style.css — Custom styles
- images/ — Resort images
- script.js — Handles navbar behavior
- server.js — Express server for Node.js hosting
- package.json — Project dependencies

## Usage

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```
3. Visit the server URL. The main page is served at `/`.

## Booking

- Fill the booking form on the website.
- Enquiries are sent through EmailJS after its service, template, and public key values are configured in `home.html`.

## Deployment

For a Node.js host, install dependencies with `npm ci` and use `npm start` as the start command. The server listens on the host-provided `PORT` and serves `home.html` at `/`.

For GitHub Pages or another static host, `server.js` does not run; the root `index.html` redirects to `home.html`. Booking still requires the EmailJS library to load and the four EmailJS values in `home.html` to be replaced with values from your EmailJS account.
# Maendeleo_Resort
