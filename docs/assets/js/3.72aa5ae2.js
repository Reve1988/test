(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,n,e){},324:function(t,n,e){},325:function(t,n,e){},326:function(t,n,e){},327:function(t,n,e){},328:function(t,n,e){"use strict";e(323)},329:function(t,n,e){"use strict";e(48),e(35);var a={name:"Navigation",data:function(){return{categories:[]}},mounted:function(){this.categories=this.getCategories(this.$site.pages)},methods:{getCategories:function(t){var n=this;return t.filter((function(t){return"CategoryIndex"===t.frontmatter.layout})).map((function(t){return{name:t.frontmatter.title,path:n.$withBase(t.path)}}))},moveToHome:function(){location.href=this.$withBase("/")}}},i=(e(328),e(47)),o=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"navigation-height"}),t._v(" "),e("nav",{staticClass:"navigation"},[e("b-container",[e("b-row",{staticClass:"navigation-height flex-between"},[e("div",{staticClass:"navigation-item navigation-title",on:{click:t.moveToHome}},[t._v("\n          Blog Title\n        ")]),t._v(" "),e("b-dropdown",{staticClass:"navigation-item navigation-right",attrs:{text:"Category",right:"",size:"sm",variant:"outline-primary"}},t._l(t.categories,(function(n){return e("b-dropdown-item",{attrs:{href:n.path}},[t._v("\n            "+t._s(n.name)+"\n          ")])})),1)],1)],1)],1)])}),[],!1,null,null,null);n.a=o.exports},330:function(t,n,e){"use strict";e(324)},331:function(t,n,e){"use strict";e(325)},332:function(t,n,e){"use strict";e(326)},333:function(t,n,e){"use strict";e(327)},334:function(t,n,e){},335:function(t,n,e){"use strict";var a=e(329),i={name:"Cover.vue",mounted:function(){this.$refs.coverImage.style.backgroundImage="url('".concat(this.$withBase("/img/cover-image.jpg"),"')")}},o=(e(330),e(47)),s=Object(o.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"cover"},[n("div",{ref:"coverImage"})])}),[],!1,null,"2dec2ac3",null).exports,r={name:"Footer"},c=(e(331),Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer"},[n("b-container",[this._v("\n    Copyrightⓒ2021 Revelope All rights reserved.\n  ")])],1)}),[],!1,null,"3f2700d6",null).exports),u={name:"CommonLayout",components:{Navigation:a.a,Cover:s,CommonFooter:c}},l=(e(332),Object(o.a)(u,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"layout"},[n("b-container",[n("b-row",[n("navigation")],1),this._v(" "),n("b-row",[n("cover")],1),this._v(" "),n("b-row",[this._t("default")],2)],1),this._v(" "),n("common-footer")],1)}),[],!1,null,null,null));n.a=l.exports},336:function(t,n,e){"use strict";var a={name:"Contents"},i=(e(333),e(47)),o=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content-box"},[this._t("default")],2)}),[],!1,null,"2ba2a742",null);n.a=o.exports},337:function(t,n,e){"use strict";e(334)},338:function(t,n,e){"use strict";e(48),e(35),e(36),e(37);var a={name:"PostCard.vue",props:{pages:[]},data:function(){return{posts:[]}},watch:{pages:function(t){this.posts=this.getPosts(t)}},methods:{getPosts:function(t){var n=this;return t.filter((function(t){return"Post"===t.frontmatter.layout})).map((function(t){return{title:t.frontmatter.title,path:t.path,description:t.frontmatter.description,image:t.frontmatter.image?n.$withBase(t.frontmatter.image):"",date:t.frontmatter.date}}))},goToPost:function(t){location.href=this.$withBase(t)}}},i=(e(337),e(47)),o=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post-card-box"},t._l(t.posts,(function(n,a){return e("b-card",{staticClass:"card overflow-hidden",class:{"margin-bottom-0":a===t.posts.length-1},attrs:{"no-body":""},on:{click:function(e){return t.goToPost(n.path)}}},[e("b-row",{attrs:{"no-gutters":""}},[n.image?e("b-col",{staticClass:"card-img-box",attrs:{md:"3"}},[e("b-card-img",{staticClass:"card-img",attrs:{src:n.image,alt:"Post image"}})],1):t._e(),t._v(" "),e("b-col",{attrs:{md:n.image?9:12}},[e("b-card-body",{attrs:{title:n.title}},[e("b-card-text",[t._v("\n            "+t._s(n.description)),e("br"),t._v("\n            "+t._s(n.date)+"\n          ")])],1)],1)],1)],1)})),1)}),[],!1,null,"149f0075",null);n.a=o.exports},343:function(t,n,e){"use strict";e.r(n);var a=e(335),i=e(336),o=e(338),s={name:"CategoryIndex",components:{CommonLayout:a.a,Contents:i.a,PostCard:o.a},data:function(){return{pages:[]}},mounted:function(){this.pages=this.$pagination.pages}},r=e(47),c=Object(r.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("common-layout",[n("contents",[n("post-card",{attrs:{pages:this.pages}})],1)],1)}),[],!1,null,null,null);n.default=c.exports}}]);