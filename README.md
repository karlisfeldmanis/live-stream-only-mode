# live-stream-only-mode

A JavaScript snippet that hides all UI elements on live casino streaming platforms and shows **only the video feed** in fullscreen.

Tested on: **live.onairent.com** (Evolution Gaming and similar platforms).

---

## Quick Start — paste this one-liner into the browser console

```js
fetch('https://raw.githubusercontent.com/karlisfeldmanis/live-stream-only-mode/main/stream-only-mode.js').then(r=>r.text()).then(eval)
```

### Step-by-step

1. Open the page (e.g. https://live.onairent.com/) and open DevTools — press **F12** (or **Cmd+Option+I** on macOS).
2. Click the **Console** tab.
3. The first time you try to paste, Chrome / Edge / Brave will show:

   > Warning: Don't paste code into the DevTools Console that you don't understand or haven't reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type 'allow pasting' below and press Enter to allow pasting.

4. **Do not paste yet.** Click into the console prompt and **type** these two words by hand:

   ```
   allow pasting
   ```

   Then press **Enter**. (Pasting `allow pasting` does not work — the browser requires you to type it.)
5. Now paste the one-liner above and press **Enter**. The script will run.
6. The "allow pasting" permission lasts for the current DevTools session. If you fully close DevTools and reopen it, you may need to type `allow pasting` again.

To restore the UI, simply **reload the page**.

---

## Bookmarklet (optional, one-click activation)

If you'd rather not use the console every time, save this as a bookmark:

- **Name:** `Stream Only`
- **URL:** paste exactly this, including `javascript:`

  ```
  javascript:fetch('https://raw.githubusercontent.com/karlisfeldmanis/live-stream-only-mode/main/stream-only-mode.js').then(r=>r.text()).then(eval)
  ```

Then click the bookmark on any supported page. Bookmarklets do not trigger the "allow pasting" warning.

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
