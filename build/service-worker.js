"use strict";var precacheConfig=[["/index.html","2e119362898ed6935ea3c9385c13a67c"],["/static/css/main.de8ae42b.css","38d5183811bb0074d83b3aa125609be8"],["/static/js/main.d5e6a08f.js","e330f4546d47586e28cbf140dfc8844c"],["/static/media/business1.ff327e05.png","ff327e056722759b92cf0320317fbcdc"],["/static/media/business2.6de762c8.png","6de762c8b73fa0d64654c33db4cd3ced"],["/static/media/business3.87a669e9.png","87a669e98cd23329fbbc3632ad719947"],["/static/media/css-zen2.a8bac22b.png","a8bac22b6e6327502199ffe859e0106f"],["/static/media/css-zen3.4e9e04d8.png","4e9e04d8b7c3a6db7a898d6e32592101"],["/static/media/me.1291fd10.jpg","1291fd1098f087d8387a84da491df273"],["/static/media/rpg1.5234ac2c.png","5234ac2cd46a441a1b4137124d7931a5"],["/static/media/rpg2.f36fa7f0.png","f36fa7f074d079f0512f03106af5ca83"],["/static/media/rpg3.86562c61.png","86562c61b5ee4c3e7d7ea3a2220893f1"],["/static/media/trivia1.b70fd87b.png","b70fd87b7b6246b6e95b007c1b0fc01a"],["/static/media/trivia2.9edc0c5d.png","9edc0c5d7a8e61b7aafd2e5d75378404"],["/static/media/yahtzeeclone1.b8658547.png","b8658547716fcea6918f18188e2ece33"],["/static/media/yahtzeeclone2.a502a0b5.png","a502a0b50193033eae8987c6e8a4fe91"],["/static/media/yahtzeeclone3.3018603b.png","3018603b5e0f3cde168b0da5712a4d88"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});