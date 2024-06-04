/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f3e7e80b332bb01bf6da9da68f63e5d1"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e06f978d.css",
    "revision": "5ed20f2d620cc087c653dbc676061214"
  },
  {
    "url": "assets/img/all_requests.07421357.png",
    "revision": "0742135792a369e56fb73ed24c2c1a7e"
  },
  {
    "url": "assets/img/all_users.0ae22e50.png",
    "revision": "0ae22e50022d14666c6418141b139c8c"
  },
  {
    "url": "assets/img/delete_after.17ff5fa7.png",
    "revision": "17ff5fa73ec61598ba0d4c74c764ef37"
  },
  {
    "url": "assets/img/delete_before.b8abc450.png",
    "revision": "b8abc4500ea13f21f6ef951684a19e78"
  },
  {
    "url": "assets/img/new_request.293bcc0a.png",
    "revision": "293bcc0a03fc7e2ccab657426dff4463"
  },
  {
    "url": "assets/img/post_after.04e770e3.png",
    "revision": "04e770e3d9a5a91d6074909148b12624"
  },
  {
    "url": "assets/img/put_after.8b71e4cc.png",
    "revision": "8b71e4ccaceaa294ea30876d9b46354c"
  },
  {
    "url": "assets/img/relayshema.e5a2192d.png",
    "revision": "e5a2192d15b9948462f4d71eea65120f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_delete.295507c6.png",
    "revision": "295507c6889cb29a762244ca06566e6e"
  },
  {
    "url": "assets/img/user_id.5ed40745.png",
    "revision": "5ed407450c7ffc271b4bf636ec5ed39c"
  },
  {
    "url": "assets/img/user_update.45f6b0d7.png",
    "revision": "45f6b0d78c04fb64f0379733c6ab8703"
  },
  {
    "url": "assets/js/1.a80b2b59.js",
    "revision": "2e87dd5ead3b26ba90cbc5adc82b03ad"
  },
  {
    "url": "assets/js/10.f21021c7.js",
    "revision": "8a10bcc79aefb767d08e5f8e186a09cf"
  },
  {
    "url": "assets/js/13.bd8f6948.js",
    "revision": "39d7f3f192e2c0b6412d8513da36b03f"
  },
  {
    "url": "assets/js/14.deb64674.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.6e89d410.js",
    "revision": "2e7250645916b920ea40883cdd8a40d1"
  },
  {
    "url": "assets/js/16.21d24439.js",
    "revision": "caeaca9b569d58a414fe9b12e44d11e6"
  },
  {
    "url": "assets/js/17.63ad3c40.js",
    "revision": "a3ade768ceca8e5ec70e7420649b379a"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.a397d310.js",
    "revision": "fd1731f864c4ec7766ce2f121376d5f4"
  },
  {
    "url": "assets/js/20.b49ae591.js",
    "revision": "4152e7e3767d8e1110555ca1c65a2e35"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.e6f7603b.js",
    "revision": "fccc81ab70871e8529e4c2a56791bbe5"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.419e4330.js",
    "revision": "1e2f9e99cd1e3925bf8b83a89b24c018"
  },
  {
    "url": "assets/js/28.62f931df.js",
    "revision": "7ddc6713416d777ba77c6a9ad25633ab"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.07757fd2.js",
    "revision": "899ecbb3a35d91e876a857044298679c"
  },
  {
    "url": "assets/js/31.8c06fd9e.js",
    "revision": "4048b957d0df391aa1f58868f7358c64"
  },
  {
    "url": "assets/js/32.8d8c5532.js",
    "revision": "8bc1653a30826fa5dbc13dedb5b03b13"
  },
  {
    "url": "assets/js/33.4a4c73cf.js",
    "revision": "654b5357c3649064fa375e18deb3a1ca"
  },
  {
    "url": "assets/js/34.e39bac83.js",
    "revision": "568702a0d7e0f6eccc43460011d524d8"
  },
  {
    "url": "assets/js/35.c2a4fe4b.js",
    "revision": "02da14af4fa3af4871b16f023973827d"
  },
  {
    "url": "assets/js/36.17ddacbb.js",
    "revision": "48d2bc416d1e94fc512a581448fe0fcf"
  },
  {
    "url": "assets/js/37.44bc865e.js",
    "revision": "bba0f44598ab5c7cb8fbb7c4421ceb41"
  },
  {
    "url": "assets/js/38.f59fe3b0.js",
    "revision": "8960335a87576fa6b831a8c85b31add6"
  },
  {
    "url": "assets/js/39.c0275ff0.js",
    "revision": "8a7536e5e4409069db9e5abe410d0035"
  },
  {
    "url": "assets/js/4.afba3b63.js",
    "revision": "da393dbb945a10dc9d5b94e9b186075e"
  },
  {
    "url": "assets/js/40.9d31b63a.js",
    "revision": "f0f1c0d831512c8a41675168ba4e909d"
  },
  {
    "url": "assets/js/42.a63a72bb.js",
    "revision": "6b509812d90a57753792f0ff3aeea795"
  },
  {
    "url": "assets/js/5.b1f744da.js",
    "revision": "ca01d5a1e8807e3f12d6054da85799cd"
  },
  {
    "url": "assets/js/6.caee52eb.js",
    "revision": "24b6e8be48777cd1a3acffcdffc5f76e"
  },
  {
    "url": "assets/js/7.cc432872.js",
    "revision": "335a19e2e6dd44dbac46c4b2031c2b68"
  },
  {
    "url": "assets/js/8.bc7ffb1f.js",
    "revision": "0fe08a6c0fd376970ce3f5c411864c68"
  },
  {
    "url": "assets/js/9.631fa0d4.js",
    "revision": "7668ef4476f618f98a408ed226472642"
  },
  {
    "url": "assets/js/app.88ff6ea3.js",
    "revision": "15d98ce4eb3d592f4c1383eef187ad26"
  },
  {
    "url": "assets/js/vendors~docsearch.a7214ad1.js",
    "revision": "4fdfc9c801456fc8bade32dc84c522d5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c9784ffc5ec4d6704f54a30c8e9b2d02"
  },
  {
    "url": "design/index.html",
    "revision": "6ce3684071867d61bab48457da24c9c9"
  },
  {
    "url": "index.html",
    "revision": "b01a79cfde0697fe892bf4809f942a7d"
  },
  {
    "url": "intro/index.html",
    "revision": "15042baa4aa841553ae9916819024518"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "4cb93c57d234abfe48b6d8a2a653062e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "11e1d2a85b9ecbcb3f488d728efaa2c3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3c636ecdc0ac33892543362b30edc5e5"
  },
  {
    "url": "software/index.html",
    "revision": "f4a730c37a64298968b1399ab311a3ae"
  },
  {
    "url": "software/src/index.html",
    "revision": "d388dd4b270c8fc39432c26d6580a91d"
  },
  {
    "url": "test/index.html",
    "revision": "caa9d1fb9f0931d6aa1f7cc82f00e6e9"
  },
  {
    "url": "use cases/index.html",
    "revision": "6820803ffd3b13a8962eb01ba3e6675a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
