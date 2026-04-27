# live-stream-only-mode

A JavaScript snippet / bookmarklet that hides all UI elements on live casino streaming platforms and shows **only the video feed** in fullscreen.

Tested on: **live.onairent.com** (Evolution Gaming and similar platforms).

---

## Usage

### Option 1 — Browser Console (quickest)

1. Open the live game in your browser.
2. Press `F12` to open DevTools and go to the **Console** tab.
3. Copy the contents of [`stream-only-mode.js`](./stream-only-mode.js) and paste it into the console.
4. Press **Enter**.

To restore the UI, simply **reload the page**.

---

### Option 2 — Bookmarklet

1. Create a new browser bookmark.
2. Set the **URL** to:

```
javascript:(function(){const v=document.querySelector('video');if(!v){return;}const s=v.closest('.gbsa'),g=document.querySelector('.Haba'),p=document.querySelector('.des.dea');if(g)Array.from(g.children).forEach(c=>{if(!c.contains(v)&&c.tagName!=='STYLE'){c.style.visibility='hidden';c.style.pointerEvents='none';}});if(p)Array.from(p.children).forEach(c=>{if(!c.contains(v)){c.style.visibility='hidden';c.style.pointerEvents='none';}});if(s){s.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background:#000';}v.style.width='100%';v.style.height='100%';v.style.objectFit='cover';})();
```

3. While on the live game page, click the bookmarklet to activate stream-only mode.

---

## How it works

1. Finds the video element on the page.
2. Hides all sibling UI elements (betting panel, scoreboard, toolbar, balance bar, etc.) using visibility: hidden.
3. Positions the stream container as a fixed fullscreen overlay (100vw x 100vh, z-index 9999).
4. Stretches the video to fill with object-fit: cover.

---

## Restore UI

Reload the page - all changes are in-memory only and do not persist.
