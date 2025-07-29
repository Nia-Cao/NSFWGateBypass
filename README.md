# NSFWGateBypass

Bypass Discord's age verification and NSFW gates using a lightweight userscript.

This script overrides the `ageVerificationStatus` field in Discord’s internal modules, allowing access to age-restricted channels without manual verification.

Modification by Nia for BetterDiscord. Sets status to teen to remove any bugging messages to verify.

---

## Supported Platforms

This script works on the following platforms:

- Web (discord.com)
- Progressive Web App (PWA)
- Discord Desktop App (via modification)
- Mobile browsers (Android only, with Firefox)
- Any Chromium or Firefox-based browser with userscript support

---

## Installation

### 1. Install a Userscript Manager

Depending on your browser, install one of the following:

#### **Google Chrome / Brave / Chromium (Windows, macOS, Linux)**
- [Violentmonkey (recommended)](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
- [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

#### **Mozilla Firefox**
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
- [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (may not fully work)

#### **Microsoft Edge**
- [Violentmonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)
- [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

#### **Android (Mobile)**
- Use [Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix) with [Violentmonkey](https://violentmonkey.github.io/get-it/)
- Some Chromium-based browsers like Kiwi or Yandex + Tampermonkey may work

#### **iOS**
- Not supported due to iOS extension limitations

---

### 2. Install the Script

Click the link below to install the script:

[**Install NSFWGateBypass**](https://github.com/SaltSaladd/NSFWGateBypass/raw/refs/heads/main/NSFWGateBypass.user.js)

Your userscript manager should open an install dialog. Confirm and enable the script.

---

## Running on Discord Desktop (Windows/macOS/Linux)

Userscripts **do not run** natively in the Discord desktop app. However, you can still use this script with a modification:

### Option 1: Use the Web App Instead
- Visit [https://discord.com/app](https://discord.com/app) in your browser
- Use a userscript manager like Violentmonkey to run the script
- You’ll get full functionality without modifying Discord itself

### Option 2: Inject Script into Discord Desktop (Advanced)
**Warning: Modifying Discord’s desktop files can break updates and violate ToS.**

1. Locate the Discord installation folder:
   - **Windows**: `C:\Users\YourName\AppData\Local\Discord\app-<version>`
   - **macOS**: `/Applications/Discord.app/Contents/Resources/app`
2. Open `index.js` or `main.js` (depending on version)
3. Inject the script manually by appending it into the file, or use a mod loader like [Powercord](https://powercord.dev/) or [GooseMod](https://goosemod.com/) to manage injections.
4. Restart Discord.

> Use this at your own risk. If unsure, stick to using the Web version.

---

## How It Works

The script hooks into Discord’s internal Webpack modules and modifies the user object:

```js
getCurrentUser().ageVerificationStatus = 3
