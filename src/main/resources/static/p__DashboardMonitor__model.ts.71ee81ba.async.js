(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{TlID:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.queryTags=c;var n=r(a("Ico4")),u=r(a("UWy3")),s=r(a("sy1d"));function c(){return o.apply(this,arguments)}function o(){return o=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/tags"));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}},wmSF:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mK77")),u=r(a("Ico4")),s=a("TlID"),c={namespace:"dashboardMonitor",state:{tags:[]},effects:{fetchTags:u.default.mark(function e(t,a){var r,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.call,n=a.put,e.next=3,r(s.queryTags);case 3:return c=e.sent,e.next=6,n({type:"saveTags",payload:c.list});case 6:case"end":return e.stop()}},e)})},reducers:{saveTags:function(e,t){return(0,n.default)({},e,{tags:t.payload})}}},o=c;t.default=o}}]);