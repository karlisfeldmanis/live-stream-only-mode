/**
 * Live Stream Only Mode
 * Hides all UI elements and shows only the live video stream fullscreen.
 * Works on live.onairent.com (Evolution Gaming / similar platforms).
 *
 * Usage:
 *   1. Open the browser DevTools console (F12 -> Console)
 *   2. Paste this entire script and press Enter
 *      OR save as a bookmarklet (see README for instructions)
 *
 * To restore the UI: simply reload the page.
 */

(function () {
  'use strict';

  const video = document.querySelector('video');
  if (!video) {
    console.warn('[StreamOnly] No video element found on this page.');
    return;
  }

  // 1. Find the stream wrapper container
  const streamContainer = video.closest('.gbsa');
  const gameRoot        = document.querySelector('.Haba');
  const pageRoot        = document.querySelector('.des.dea');

  // 2. Hide all UI siblings inside the game root
  if (gameRoot) {
    Array.from(gameRoot.children).forEach(function (child) {
      if (!child.contains(video) && child.tagName !== 'STYLE') {
        child.style.visibility   = 'hidden';
        child.style.pointerEvents = 'none';
      }
    });
  }

  // 3. Hide top-level page wrapper siblings
  if (pageRoot) {
    Array.from(pageRoot.children).forEach(function (child) {
      if (!child.contains(video)) {
        child.style.visibility   = 'hidden';
        child.style.pointerEvents = 'none';
      }
    });
  }

  // 4. Expand stream container to fill the full viewport
  if (streamContainer) {
    streamContainer.style.position   = 'fixed';
    streamContainer.style.top        = '0';
    streamContainer.style.left       = '0';
    streamContainer.style.width      = '100vw';
    streamContainer.style.height     = '100vh';
    streamContainer.style.zIndex     = '9999';
    streamContainer.style.background = '#000';
  }

  // 5. Make the video fill its container
  video.style.width     = '100%';
  video.style.height    = '100%';
  video.style.objectFit = 'cover';

  console.log('[StreamOnly] Stream-only mode activated. Reload to restore UI.');
})();
