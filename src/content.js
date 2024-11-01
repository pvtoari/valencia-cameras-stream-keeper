(function() {
    'use strict';

    const scriptContent = `
        (function() {
            if (typeof window.myTimer === 'function') {
                clearTimeout(window.myTimer);
                window.alert = function(message) {
                    if (message === 'Video Closed') {
                        console.log("[Bypasser] Avoiding alert");
                    } else {
                        window.alert(message);
                    }
                };
            }

            const originalClose = window.lanaccessWsmPlayer.WsmPlayer.prototype.close;
            window.lanaccessWsmPlayer.WsmPlayer.prototype.close = function() {
                console.log("[Bypasser] Bypassed close stream attempt");
            };
        })();
    `;

    const injectedScript = document.createElement('script');
    injectedScript.textContent = scriptContent;
    document.head.appendChild(injectedScript);
})();
