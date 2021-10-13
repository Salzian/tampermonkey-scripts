// ==UserScript==
// @name         GitHub SSO Auto Login
// @namespace    https://manipulieraffe.salzian.dev/
// @version      1.0.0
// @description  Automatically logs you into your SSO provider on GitHub.
// @author       Fabian "Salzian" Fritzsche
// @match        https://github.com/*/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let orgSsoPanel = document.querySelector(".org-sso .org-sso-panel");

    if (orgSsoPanel) {
        document.querySelector(".org-sso-panel > form > button")?.click();
    }
})();