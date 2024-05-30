/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Import Workbox from CDN
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js");

// Claim clients immediately
clientsClaim();

// Listen for messages from the client to skip waiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Precache all of the assets generated by your build process
precacheAndRoute(self.__WB_MANIFEST);

// Use StaleWhileRevalidate strategy for navigation requests to ensure fresh content
registerRoute(
  ({ request }) => request.mode === "navigate",
  new StaleWhileRevalidate({
    cacheName: "pages-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Use StaleWhileRevalidate strategy for images and other assets
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Do not cache API calls, they should always go to the network
// No route registered for API calls

// Fallback for other requests
registerRoute(
  ({ request }) => request.destination !== "image" && request.mode !== "navigate" && !request.url.includes('/api/'),
  new StaleWhileRevalidate({
    cacheName: "default-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);
