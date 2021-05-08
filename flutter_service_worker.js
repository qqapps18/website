'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "995911e90aa15c4895441c41d827733d",
"index.html": "ffc831de89dd3367faebb15f623e15a4",
"/": "ffc831de89dd3367faebb15f623e15a4",
"main.dart.js": "55fb2ffa42df3aa30861f1a356084c87",
"README.md": "a36a854c138c21086d70c62c87031837",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5216231e5e8af071456c0a2aab9577cd",
".git/config": "69af1f5bc7bbbdb1f5d739e2d1afa7cc",
".git/objects/3e/a52d4f7b8aa4219a317b7d2091805509a3b00a": "5a95d7f674ada18bb286798d676ed72c",
".git/objects/50/47eb63bb817bc5eff61b17c718e0caf124badd": "97064c2ff43656dbd5514c178febf89b",
".git/objects/57/b64143b1fb62585623e383bd573f216b62cfed": "6ff3d136ecf3b25672768487b5e44021",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/67/852f104c478c566e09f81e0f3e66246ef88a2d": "32a24b3fed884c6bc12d941b56b77ddb",
".git/objects/02/aa36af59ff06cbb9ec1257d6af5f78f270403f": "95636a090bb5d68407b491d5950d2a02",
".git/objects/b2/d196c2e491b57313e9134d25eb7776c066ad69": "7a82863f9c3f86eb7a99a71ee0230a90",
".git/objects/a2/49dc76475dc4a23c6beb02609c13f2036a53d8": "1b9ac189169e2de6037f4e72d827d8eb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c6/765fdf834374d63952a6529372e26c37e39525": "7547d7dafa7bafb1f6ac6d061cfe323e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/1bf96c85f677358cff91f26f4c42e7dd81d829": "5a53b874b5c1d1e83d6d10013a00c995",
".git/objects/16/93fb25ec471bf345309a04907c69bd455154be": "1b82370c9af92c704dee6f95d9aab052",
".git/objects/1f/71b498cd99b9909546866871f095728b02bd5c": "17a2b8c403ef9204c967d428f2f44e77",
".git/objects/8f/42f6d8f49fc58bc0768505f6fdc5597baf25b0": "6cca8603058b9aac7d7dc0a4e2b0aed1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/66093eaf28bfc1aa890e34dd3bf0e36100ee91": "c3a8e66909ef03c16e19e7e00e5fdfd5",
".git/objects/98/d9bfdfc5f9b82bf52b7cb05832e9f82920d3ee": "0dcc4aa8fa7da0ae26d2593cbe5a4f13",
".git/objects/3f/532a470551cd34050bac83a482c9bb54af2527": "ad97dced8dbc9b82e9aa12d68930e2be",
".git/objects/5e/10d2db06d84fe648926c3e46ad0eb8e52cbfeb": "8411aea3c6ef9c5ccf476bd0501e21cd",
".git/objects/ba/7b70deed84fc3e32f8fda7aed1dd821d02d583": "e283b8d8daefb8a985f218a8ec676e76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/5be135d7ced36fc8002c1e084d0c90d65b960e": "e6e38db957aed341299a07b99a09026c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/f54f9b26d5bcfafc724d74b5b240b4cf1e9864": "fd791dc79ac9142ed7314cffa1109352",
".git/objects/f8/b44c396714fce4247be3eb13e70fc4995a00f0": "fec33574de4fe8ee4ad1a8eb6c17becf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2dac864e078a1244b8960b1b67709b8",
".git/logs/refs/heads/master": "a2dac864e078a1244b8960b1b67709b8",
".git/logs/refs/remotes/origin/master": "9d31dcda99b2181b7b59d0437c1dc967",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "35bbdc5ae0c03b418fac407efedce539",
".git/refs/remotes/origin/master": "35bbdc5ae0c03b418fac407efedce539",
".git/index": "8710ad032f7f6e2f9d7489427f8feca2",
".git/COMMIT_EDITMSG": "cb616825fa3ed5a6c6eb06a9074a8c96",
".git/FETCH_HEAD": "c37aefd3f9876493e2bec93506e6f58f",
"assets/images/logoappstore.png": "e1ac266027b9c5c38d2f272fbbfe59c7",
"assets/images/qqapps18logo.png": "c751a3b33319c858a2b11dc66bf2681b",
"assets/images/logo.png": "4dbd9b933a0eade72fce585cdf57567b",
"assets/images/logoplaystore.png": "1c8dae7199b430941139579a8780c896",
"assets/AssetManifest.json": "75a370906ef5859c7a24628565cf23c4",
"assets/NOTICES": "7cbd73b61d5a8a9e4d23852114640f68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/qqapps18logo.png": "c751a3b33319c858a2b11dc66bf2681b",
"assets/assets/logo.png": "4dbd9b933a0eade72fce585cdf57567b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
