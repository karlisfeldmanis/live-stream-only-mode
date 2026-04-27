# live-stream-only-mode

A JavaScript snippet that hides all UI elements on live casino streaming platforms and shows **only the video feed** in fullscreen.

Tested on: **live.onairent.com** (Evolution Gaming and similar platforms).

---

## Quick Start — Bookmarklet (recommended)

Create a new bookmark in your browser and paste the following as the URL:

```
javascript:fetch('https://raw.githubusercontent.com/karlisfeldmanis/live-stream-only-mode/main/stream-only-mode.js').then(r=>r.text()).then(eval)
```

Then click the bookmark on any supported page for one-click activation. Reload the page to restore the UI.

This is the recommended method — it avoids the browser's self-XSS warning when pasting into the console (see below).

---

## Alternative — paste this one-liner into the browser console

```js
fetch('https://raw.githubusercontent.com/karlisfeldmanis/live-stream-only-mode/main/stream-only-mode.js').then(r=>r.text()).then(eval)
```

Open DevTools (F12), go to the **Console** tab, paste and press **Enter**.

**First-time paste warning:** Chromium-based browsers (Chrome, Edge, Brave) block console paste by default and show:

> Warning: Don't paste code into the DevTools Console that you don't understand or haven't reviewed yourself…  Please type 'allow pasting' below and press Enter to allow pasting.

If you see this, type `allow pasting` into the console and press **Enter**. You can then paste the one-liner above. The setting persists for the current DevTools session.

To restore the UI, simply **reload the page**.

---

## How it works

The one-liner fetches the full script from this repository at runtime and executes it. Any updates to the script are picked up automatically.

The full script (stream-only-mode.js) does the following:

1. Finds the video element on the page.
2. Hides all sibling UI elements (betting panel, scoreboard, toolbar, balance bar, etc.) using visibility: hidden.
3. Positions the stream container as a fixed fullscreen overlay (100vw x 100vh, z-index 9999).
4. Stretches the video to fill with object-fit: cover.

---

## Restore UI

Reload the page - all changes are in-memory only and do not persist.
