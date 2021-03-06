---
---
{%- include js/vendor/jquery/jquery-3.6.0.min.js -%}
{%- include js/plugins/jquery.fitvids.js -%}
{%- include js/main.min.js -%}
{%- include js/extras.js -%}
{%- include js/vendor/vanilla-lazyload/lazyload.min.js -%}
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});
{% if jekyll.environment == "production" %}
// minified version of https://earthly.dev/assets/js/analytics.js
// requires full jquery
function setCookie(e,t,r){var i="";if(r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),i="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}function getCookie(e){for(var t=e+"=",r=document.cookie.split(";"),i=0;i<r.length;i++){for(var o=r[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function uuidv4(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}function getAnalyticCookie(){cookieName="earthlyID";var e=getCookie(cookieName);return null==e&&(e=uuidv4()),setCookie(cookieName,e,36500),e}jQuery.ajax({type:"POST",url:"https://api.earthly.dev/analytics",data:JSON.stringify({key:"website",url:window.location.href,referrer:document.referrer,earthlyID:getAnalyticCookie()})});
{% endif %}