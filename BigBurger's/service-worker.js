/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Pictures/10025758.jpg","8cef58e4d892f79cfbc028558c323cf2"],["Pictures/10503130_P01.jpg","38e9119e867f566d035ff3e3a116cd49"],["Pictures/28181-jupiler-logo.png","8b435ad5584534958696f6860f0a925b"],["Pictures/817988.jpg","6a8ade76c11087b66d171af8a039ff93"],["Pictures/Apercu/accueil-grand.png","122785614ad54af0bddf7d933338665c"],["Pictures/Apercu/accueil-moyen.png","6f284f754c473c56d0c8245d675d8b88"],["Pictures/Apercu/accueil-petit.png","4ea2f7a261d574613afd61f07226c0c3"],["Pictures/Apercu/carte-grand.png","dd37aebb16d2cceb62a48f93f1a2f2b7"],["Pictures/Apercu/carte-moyen.png","bb366359180e5a6cf8463893137b9c72"],["Pictures/Apercu/carte-petit.png","5cc903ec758f61347579052a9f32ee98"],["Pictures/Apercu/contact-grand.png","0c0328b52fe52a2d1d18872f2e57e323"],["Pictures/Apercu/contact-moyen.png","78adf2e33479ca082cb04f98f9ea4cd7"],["Pictures/Apercu/contact-petit.png","fdf0744997e12d72b1f29e9d09aeba4b"],["Pictures/Apercu/header-nav-grand.png","5dafb8cd3d420b08236e9faeb7fd32aa"],["Pictures/Apercu/header-nav-moyen.png","d3adf3b4f829d527066c5a84d83b24dc"],["Pictures/Apercu/header-nav-petit.png","5bc7925df843ad65417dbd00823aaa98"],["Pictures/Apercu/photos-grand.png","c922f5a8bc4a37a2482b9eecdafa353d"],["Pictures/Apercu/photos-moyen.png","84966acb368b5d0398b71aabee799a43"],["Pictures/Apercu/photos-petit.png","894e3df8660d5dc57aed92aa31159abb"],["Pictures/Apercu/restaurants-grand.png","3f7ac1096ddb71033343969f1e5eeaaa"],["Pictures/Apercu/restaurants-moyen.png","512069d874a585c456fac602048b3761"],["Pictures/Apercu/restaurants-petit.png","06946af10224cc22fac3f8fe270018b4"],["Pictures/Download-Girls-Images-4k-Background-HD-Wallpaper-brunette_hamburger_white_blue_eyes_food_77165_5616x3744-1920x1280.jpg","15faf7fb6186d1fdd0102e1a1abe7e28"],["Pictures/G15022_KFC_47-sauces-all-Enviro_0688_RGB-copy.jpg","0f19557cfe2c02c085e4985307332ccd"],["Pictures/Hamburger-French-fries-ConvertImage.png","ae6c97e8c41ad782e49a1df236aa3d9b"],["Pictures/american_background_barbecue_big_bread_bun_burger_chicken-806775.jpg!d.jpeg","271ed0d29879d8ff5d517d081ed123f9"],["Pictures/b83e3206-f74a-459d-bfc6-c5718dc9bcd0.jpg","bad1ed4c679fb5293f8f2bb824080fb3"],["Pictures/bouffe-resto-mauvaise-recc81putation6.jpg","c76249103f666a90a83c1be7b69e41bb"],["Pictures/burger_fastfood_food_food_photography_hamburger_macro-971538.jpg!d.jpeg","dac1bff482d4ad31f523d3659cffd0bc"],["Pictures/crispy-fish-burger-with-jalapeno-tartare-sauce-50247496.jpg","9afb2600bd69b377aa9a1b5a8ea4dd82"],["Pictures/depositphotos_50289965-stock-photo-exterior-of-brussels-central-main.jpg","bc553f72c3b98935e3bace1cea887c31"],["Pictures/fanta-sprite-coke.jpg","5ef5210fc825726709d39ca9bccaee7a"],["Pictures/photo-1412665.jpg!d.jpeg","50ec6c9feae9d0987163050be17c023d"],["Pictures/texture-1496898_960_720.jpg","09175da36ef0d3094d5d6bdb015e7261"],["bootstrap.min.css","a7022c6fa83d91db67738d6e3cd3252d"],["carte.html","ceb5843998a332c85af5ac5862442683"],["contact.html","9026054e5faad7a63f9c8a5caa13f3a7"],["index.html","a746a0156b458e5b4947ebbfa01edc29"],["link.js","c25b8e3014c412eb188e8662511c6657"],["notes.md","3aa864b514fba57291278feddadd21c3"],["npm-debug.log","1734700d0892eceaacdb2819952bc809"],["photos1.html","67546e32949d5a7479719d9d1d6ddaee"],["photos2.html","3df2b429c747f5656b470404be738b6c"],["photos3.html","d74c45f53607d6363745d78707ec1a43"],["photos4.html","3cc063a3aacbd201c981cfee70a8fd14"],["restaurants.html","18f5a0d8758d9854378ea88d603b5466"],["style.css","2a3eea772c5a2726104ace64ffdbc1de"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







