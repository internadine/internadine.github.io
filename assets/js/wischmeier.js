// JavaScript source code

var gaProperty = 'UA-102848389-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
        window[disableStr] = true;
    }
function gaOptout() {
        document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
}
