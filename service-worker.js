if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-f929b32b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"config.json",revision:"8c4ca74784ccc322a177ec2dfa0458ad"},{url:"favicon.ico",revision:"a27d41ac67571252c44885c6a7f90bf1"},{url:"img/blank_back_s.jpg",revision:"855731b93ff84e7f52f460214281a2b0"},{url:"img/blank_front_s.jpg",revision:"b5ac938afd07710b74d818cfe860d384"},{url:"img/fairy_n.png",revision:"5e596ff2d26dbda5013a4d1d025d1653"},{url:"img/fairy_n_s.jpg",revision:"0519b046dc41417cfdd868fb382a8b49"},{url:"img/fairy_pr.png",revision:"5d744e8c4060e333712a80f893d3bae0"},{url:"img/fairy_pr_s.jpg",revision:"e18538ab5665fb34bcb17e4d95cfd660"},{url:"img/fairy_r.png",revision:"5a360a1233810e92e076472571d436db"},{url:"img/fairy_r_s.jpg",revision:"515c7d78f31bc0b7b761632d46f2e428"},{url:"img/flower_n.png",revision:"da4a51145b2f174a29c76808a43f74d3"},{url:"img/flower_n_s.jpg",revision:"2865b4f9fad6a1c7d408162f587b3b55"},{url:"img/flower_r.png",revision:"0abe48b44472a576d8444521cabdf26d"},{url:"img/flower_r_s.jpg",revision:"87acf23d85143098ca7fccaad1931d90"},{url:"img/horoscope_n.png",revision:"d91ad785de2a71c39f1ecd3c15a65571"},{url:"img/horoscope_n_s.jpg",revision:"290b9365a7b83233c2025137d3feca71"},{url:"img/horoscope_pr.png",revision:"95fb9f12e32d467ae90b3103c2711d2b"},{url:"img/horoscope_pr_s.jpg",revision:"db928146d77b3e8325930090e85f4ac0"},{url:"img/horoscope_r.png",revision:"5bf736082ab4edd6c0e060e03512bde0"},{url:"img/horoscope_r_s.jpg",revision:"edc53b4444059d5a089836e0c4ebab9e"},{url:"img/jewel_n.png",revision:"a42f7059eebf6cb895a7003395049b33"},{url:"img/jewel_n_s.jpg",revision:"b69b8142835b1fbed2c4f25661e669ca"},{url:"img/jewel_pr.png",revision:"d12216fb394755e6fb57a889c12dc839"},{url:"img/jewel_pr_s.jpg",revision:"db3f32fd625dd20836a2e8bf52a3f750"},{url:"img/jewel_r.png",revision:"d29d9d594478ff3a52832cb134c0f746"},{url:"img/jewel_r_s.jpg",revision:"e74a89eb2b8acf3a619ed7d367cf6644"},{url:"img/meltyhouse_n.png",revision:"af727a630943b1f7eb44d25a6adc92d3"},{url:"img/meltyhouse_n_s.jpg",revision:"e5607612937528382ee824c9e77bd835"},{url:"img/music_n.png",revision:"abb67e8d3ecafce3667f2077f817ef63"},{url:"img/music_n_s.jpg",revision:"db105b548b3c1fcc6f2130fec6f811d8"},{url:"img/music_pr.png",revision:"828134bd1ebbe1d96ffe2ec31b2c8a55"},{url:"img/music_pr_s.jpg",revision:"fcd9d9fadd08571d25188238a9dc8133"},{url:"img/music_r.png",revision:"6cda7f35061fc09c035833e9aa510cd4"},{url:"img/music_r_s.jpg",revision:"0e86c7e084a95f27009c9805a97d52c4"},{url:"img/story_n.png",revision:"8130c3dfaf32b3017c267f4a41532fd1"},{url:"img/story_n_s.jpg",revision:"136db19825e4e33e4e51833832a701c6"},{url:"img/story_pr.png",revision:"0a634264ec556172166fed998b8eb7ea"},{url:"img/story_pr_s.jpg",revision:"07ac4f8c8e355575fc5f195e0e8125ea"},{url:"img/story_r.png",revision:"6d235510f627f73db85ae2a22bf8aa9b"},{url:"img/story_r_s.jpg",revision:"b3a4139f9dd739cebc16d5eede28cd4d"},{url:"img/sweets_n.png",revision:"420146279bd56c9b5a68f5dce874777c"},{url:"img/sweets_n_s.jpg",revision:"888b626f775859246e22c2d4aec1546d"},{url:"img/sweets_pr.png",revision:"e33cf9836d2aa0391b9bd60136381f7f"},{url:"img/sweets_pr_s.jpg",revision:"36c7da2a85e8a124a6e189d18248f77e"},{url:"img/sweets_r.png",revision:"807c4d74d1d6f8231c43f3486ad85e23"},{url:"img/sweets_r_s.jpg",revision:"c385853b95f152d37777d0986b4c6530"},{url:"index.html",revision:"65cd584a03a25f5e404428e11d62cc27"},{url:"logo128.png",revision:"82e9153f7f23db079912c2b2e5640022"},{url:"logo512.png",revision:"60269bfc4f366051dbe64486beb037f6"},{url:"main.js",revision:"c2c86bd7929c9a5d45f13064929c5285"},{url:"manifest.json",revision:"9ec1858840756790f9d320abe73854b3"}],{}),e.registerRoute(/https?:\/\/www.aikatsu.com\/.*/,new e.CacheFirst({cacheName:"aikatsu-com",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
