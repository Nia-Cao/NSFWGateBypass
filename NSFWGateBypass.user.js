// ==UserScript==
// @name         NSFWGateBypass
// @namespace    https://skibidisalad.github.io/
// @version      1.0
// @description  Bypass Discord's age verification/NSFW gate
// @author       SkibidiSalad
// @match        https://discord.com/*
// @grant        none
// @run-at       document-start
// @updateURL    https://skibidisalad.github.io/NSFWGateBypass/NSFWGateBypass.user.js
// @downloadURL  https://skibidisalad.github.io/NSFWGateBypass/NSFWGateBypass.user.js
// ==/UserScript==

(function() {
  'use strict';

  const interval = setInterval(() => {
    try {
      const modules = Object.values(webpackChunkdiscord_app.push([[Symbol()], {}, r => r.c]));
      const userModule = modules.find(m => m?.exports?.default?.__proto__?.getCurrentUser);
      if (userModule) {
        userModule.exports.default.getCurrentUser().ageVerificationStatus = 3;
        clearInterval(interval);
      }
    } catch (e) {}
  }, 500);
})();
