!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.constructor===Symbol?"symbol":typeof e}var n="Expected a function",o=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return d.Date.now()};function y(e,t,o){var r,i,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=p();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?b(n,u-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function h(){var e=p(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(w,t),s?y(e):a}(c);if(d)return f=setTimeout(w,t),y(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=S(t)||0,g(o)&&(s=!!o.leading,u=(d="maxWait"in o)?m(S(o.maxWait)||0,t):u,v="trailing"in o?!!o.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?a:O(p())},h}function g(e){var n=void 0===e?"undefined":t(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(e))||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=a.test(e);return l||f.test(e)?c(e.slice(2),l?2:8):u.test(e)?o:+e}var j=document.querySelector(".feedback-form"),w=j.querySelector('input[name="email"]'),O=j.querySelector('textarea[name="message"]');j.querySelector('button[type="submit"]');j.addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",JSON.stringify({email:w.value,message:O.value}))})),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");w.value=e.email||"",O.value=e.message||""})),j.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log({email:w.value,message:O.value}),w.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.87dfbfc1.js.map