/**
     * @name NSFWGateBypassBD
     * @author Kauht/Nia
     * @description  Sets Discord age gate to teen, preventing NSFW access. Modified for BetterDiscord.
     * @version 1.0.1
     * @source https://github.com/Nia-Cao/NSFWGateBypass
*/
    module.exports = class SuckMyGate {

        start() {

            'use strict';

            const interval = setInterval(() => {
              try {
                const modules = Object.values(webpackChunkdiscord_app.push([[Symbol()], {}, r => r.c]));
                const userModule = modules.find(m => m?.exports?.default?.__proto__?.getCurrentUser);
                if (userModule) {
                  userModule.exports.default.getCurrentUser().ageVerificationStatus = 2;
                  clearInterval(interval);
                }
              } catch (e) {}
  }, 500);

        }

        stop() {
        };
}
