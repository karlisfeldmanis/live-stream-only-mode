# live-stream-only-mode

A JavaScript snippet that hides all UI elements on live casino streaming platforms and shows **only the video feed** in fullscreen.

Tested on: **live.onairent.com** (Evolution Gaming and similar platforms).

---

## Quick Start — paste this one-liner into the browser console

```js
fetch('https://raw.githubusercontent.com/karlisfeldmanis/live-stream-only-mode/main/stream-only-mode.js').then(r=>r.text()).then(eval)
```

That's it. Open DevTools (F12), go to the **Console** tab, paste and press **Enter**.

To restore the UI, simply **reload the page**.

---

## Bookmarklet

Create a bookmark with this as the URL for one-click activation:

```
javascript:fetch('https://raw.githubusercontent.com/karlisfeldmanis/live-stream-only-mode/main/stream-only-mode.js').then(r=>r.text()).then(eval)
```

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
