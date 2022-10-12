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
    "url": "404.html",
    "revision": "795bbd676de080435b89e4f2f3d0f237"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.3f241eeb.js",
    "revision": "2558768c5b23f2850eb3b56601acdc30"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.68a1a284.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.5b359dcc.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.131a043d.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.0838841b.js",
    "revision": "6f8e3b7826c5b3e0f01fcda3856d2c85"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4aa0899a07b4cbe7a9ee1f38139c236d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2c0a50b124124e466863eed83c014a61"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4e56efa060e8194ec8e5400ef09a78e4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a79783d5549b74fb4392054f3351a1fa"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9624a4685689a9d31091c2b46705af79"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7af74f54f5687f2c02212275e1ac39b3"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c03090d46c0b3a22db7dd07f25b54463"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "fbceb55a6d6e868a8e6880b414bea726"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "cf132548cc0d695c0fc50de56afa2fb6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f7c8cbf137a0e0b273019949715b9eb6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2f523e58aa82fdae3ac51d0ebda1d19b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8ac30176f9cdbd6096dee52d235e0897"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "67e22bcf26b2211c42ba7aa542a2ac59"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c9c52fd95549ecb014469e990a2b6288"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "97bf71c618e81054b4c52ae38e65983f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "fb20c844c862036d5aa2e3452f6a0499"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "dbf62e0641e4c081b4e4b7abea018a86"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "14d14fb17aaff89bc20c8009821c523e"
  },
  {
    "url": "timeline/index.html",
    "revision": "220ca2dab3f4b05936e88b41d4f62d8a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "df6a36188223ddd1a2dfb615125425fd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bf90988b6344ae2a7e6f9846f93c9fc3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6f6d8f03b52feaa838b5bb60ff7b2835"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1e7e30e8dc237663ec252e1cd7602776"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d0b29624f2b29a0ebd4bc8aa98181d0b"
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
