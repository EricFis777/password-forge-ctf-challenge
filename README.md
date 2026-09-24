# Password Forge - CTF Challenge

A small Chrome extension for a **manual QA and security review challenge**. It looks like a password generator and contains intentionally imperfect behaviour. The repository is the test target; the challenge brief is in [CHALLENGE.md](CHALLENGE.md).

**Training build:** generated passwords are not suitable for real accounts. Use dummy data and do not store or paste genuine credentials during testing.

## Install on Chrome for Windows

1. Download this repository as a ZIP and extract it, or clone it.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Select **Load unpacked** and choose the folder containing `manifest.json`.
4. Pin Password Forge if you want easy access to its popup.

The extension has no backend, accounts, content scripts or site access. It uses local extension storage for settings and clipboard access for Copy. It is intentionally unpublished on the Chrome Web Store.

## Challenge rules

Start with [CHALLENGE.md](CHALLENGE.md). Avoid looking at `popup.js` until after your manual testing pass. Report observations with reproducible steps; do not assume that every suspicious behaviour is a defect.

## Project status

Version 0.1.0 is a challenge build. The answer key is intentionally omitted so others can try it blind. Contributions that reveal findings should use a separate branch or private notes until the challenge is complete.

License: MIT.
