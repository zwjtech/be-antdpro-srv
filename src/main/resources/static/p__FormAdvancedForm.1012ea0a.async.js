(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"/ET0":function(e,t,a){"use strict";var l=a("fbTi"),r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("BG4o")),d=r(a("43Yg")),u=r(a("/tCh")),o=r(a("scpF")),f=r(a("O/V9")),c=r(a("8aBX")),i=l(a("2w0b")),m=a("Hs+e"),s=r(a("iczh")),p=r(a("GuXj")),v=function(e){function t(){var e;return(0,d.default)(this,t),e=(0,o.default)(this,(0,f.default)(t).apply(this,arguments)),e.getWidth=function(e){var t=e.collapsed,a=e.isMobile,l=e.siderWidth,r=document.querySelector(".ant-layout-sider");if(r)return a?void 0:"calc(100% - ".concat(t?80:l||256,"px)")},e}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,l=t.className,r=t.extra,d=(0,n.default)(t,["children","className","extra"]);return i.default.createElement(m.RouteContext.Consumer,null,function(t){return i.default.createElement("div",Object.assign({className:(0,s.default)(l,p.default.toolbar),style:{width:e.getWidth(t),transition:"0.3s all"}},d),i.default.createElement("div",{className:p.default.left},r),i.default.createElement("div",{className:p.default.right},a))})}}]),t}(i.Component);t.default=v},"16mx":function(e,t,a){"use strict";var l=a("fbTi"),r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("lloV");var n=r(a("EZJh"));a("TxB3");var d=r(a("J6Pl"));a("W30E");var u=r(a("qVcM")),o=r(a("rXjv")),f=r(a("mK77"));a("4jff");var c=r(a("8VPR"));a("S4YW");var i=r(a("6VbW"));a("5gzX");var m=r(a("PgYa")),s=r(a("43Yg")),p=r(a("/tCh")),v=r(a("scpF")),g=r(a("O/V9")),E=r(a("8aBX")),h=a("vGWC"),y=l(a("2w0b")),k=r(a("DweE")),b=r(a("26TL")),w=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,v.default)(this,(0,g.default)(t).call(this,e)),a.clickedCancel=!1,a.index=0,a.cacheOriginData={},a.columns=[{title:"\u6210\u5458\u59d3\u540d",dataIndex:"name",key:"name",width:"20%",render:function(e,t){return t.editable?y.default.createElement(m.default,{value:e,autoFocus:!0,onChange:function(e){return a.handleFieldChange(e,"name",t.key)},onKeyPress:function(e){return a.handleKeyPress(e,t.key)},placeholder:"\u6210\u5458\u59d3\u540d"}):e}},{title:"\u5de5\u53f7",dataIndex:"workId",key:"workId",width:"20%",render:function(e,t){return t.editable?y.default.createElement(m.default,{value:e,onChange:function(e){return a.handleFieldChange(e,"workId",t.key)},onKeyPress:function(e){return a.handleKeyPress(e,t.key)},placeholder:"\u5de5\u53f7"}):e}},{title:"\u6240\u5c5e\u90e8\u95e8",dataIndex:"department",key:"department",width:"40%",render:function(e,t){return t.editable?y.default.createElement(m.default,{value:e,onChange:function(e){return a.handleFieldChange(e,"department",t.key)},onKeyPress:function(e){return a.handleKeyPress(e,t.key)},placeholder:"\u6240\u5c5e\u90e8\u95e8"}):e}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){var l=a.state.loading;return t.editable&&l?null:t.editable?t.isNew?y.default.createElement("span",null,y.default.createElement("a",{onClick:function(e){return a.saveRow(e,t.key)}},"\u6dfb\u52a0"),y.default.createElement(i.default,{type:"vertical"}),y.default.createElement(c.default,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return a.remove(t.key)}},y.default.createElement("a",null,"\u5220\u9664"))):y.default.createElement("span",null,y.default.createElement("a",{onClick:function(e){return a.saveRow(e,t.key)}},"\u4fdd\u5b58"),y.default.createElement(i.default,{type:"vertical"}),y.default.createElement("a",{onClick:function(e){return a.cancel(e,t.key)}},"\u53d6\u6d88")):y.default.createElement("span",null,y.default.createElement("a",{onClick:function(e){return a.toggleEditable(e,t.key)}},"\u7f16\u8f91"),y.default.createElement(i.default,{type:"vertical"}),y.default.createElement(c.default,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return a.remove(t.key)}},y.default.createElement("a",null,"\u5220\u9664")))}}],a.toggleEditable=function(e,t){e.preventDefault();var l=a.state.data,r=void 0===l?[]:l,n=r.map(function(e){return(0,f.default)({},e)}),d=a.getRowByKey(t,n);d&&(d.editable||(a.cacheOriginData[t]=(0,f.default)({},d)),d.editable=!d.editable,a.setState({data:n}))},a.newMember=function(){var e=a.state.data,t=void 0===e?[]:e,l=t.map(function(e){return(0,f.default)({},e)});l.push({key:"NEW_TEMP_ID_".concat(a.index),workId:"",name:"",department:"",editable:!0,isNew:!0}),a.index+=1,a.setState({data:l})},a.state={data:e.value,loading:!1,value:e.value},a}return(0,E.default)(t,e),(0,p.default)(t,[{key:"getRowByKey",value:function(e,t){var a=this.state.data,l=void 0===a?[]:a;return(t||l).filter(function(t){return t.key===e})[0]}},{key:"remove",value:function(e){var t=this.state.data,a=void 0===t?[]:t,l=this.props.onChange,r=a.filter(function(t){return t.key!==e});this.setState({data:r}),l&&l(r)}},{key:"handleKeyPress",value:function(e,t){"Enter"===e.key&&this.saveRow(e,t)}},{key:"handleFieldChange",value:function(e,t,a){var l=this.state.data,r=void 0===l?[]:l,n=(0,o.default)(r),d=this.getRowByKey(a,n);d&&(d[t]=e.target.value,this.setState({data:n}))}},{key:"saveRow",value:function(e,t){var a=this;e.persist(),this.setState({loading:!0}),setTimeout(function(){if(a.clickedCancel)a.clickedCancel=!1;else{var l=a.getRowByKey(t)||{};if(!l.workId||!l.name||!l.department)return u.default.error("\u8bf7\u586b\u5199\u5b8c\u6574\u6210\u5458\u4fe1\u606f\u3002"),e.target.focus(),void a.setState({loading:!1});delete l.isNew,a.toggleEditable(e,t);var r=a.state.data,n=void 0===r?[]:r,d=a.props.onChange;d&&d(n),a.setState({loading:!1})}},500)}},{key:"cancel",value:function(e,t){var a=this;this.clickedCancel=!0,e.preventDefault();var l=this.state.data,r=void 0===l?[]:l,n=(0,o.default)(r),d=[];d=n.map(function(e){if(e.key===t&&a.cacheOriginData[t]){var l=(0,f.default)({},e,a.cacheOriginData[t],{editable:!1});return delete a.cacheOriginData[t],l}return e}),this.setState({data:d}),this.clickedCancel=!1}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.data;return y.default.createElement(y.Fragment,null,y.default.createElement(d.default,{loading:t,columns:this.columns,dataSource:a,pagination:!1,rowClassName:function(e){return e.editable?b.default.editable:""}}),y.default.createElement(n.default,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:this.newMember},y.default.createElement(h.PlusOutlined,null),"\u65b0\u589e\u6210\u5458"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return(0,k.default)(e.value,t.value)?null:{data:e.value,value:e.value}}}]),t}(y.Component),C=w;t.default=C},"26TL":function(e,t,a){e.exports={card:"antd-pro-pages-form-advanced-form-style-card",heading:"antd-pro-pages-form-advanced-form-style-heading",steps:"antd-pro-pages-form-advanced-form-style-steps",errorIcon:"antd-pro-pages-form-advanced-form-style-errorIcon",anticon:"antd-pro-pages-form-advanced-form-style-anticon",errorPopover:"antd-pro-pages-form-advanced-form-style-errorPopover",errorListItem:"antd-pro-pages-form-advanced-form-style-errorListItem",errorField:"antd-pro-pages-form-advanced-form-style-errorField",editable:"antd-pro-pages-form-advanced-form-style-editable",advancedForm:"antd-pro-pages-form-advanced-form-style-advancedForm",optional:"antd-pro-pages-form-advanced-form-style-optional"}},"7ymE":function(e,t,a){"use strict";var l=a("fbTi"),r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("lloV");var n=r(a("EZJh"));a("I0Cv");var d=r(a("qQHP"));a("5gzX");var u=r(a("PgYa"));a("ZUEu");var o=r(a("A+px"));a("QOaD");var f=r(a("oSJN"));a("TDo/");var c=r(a("ok0S"));a("SgaC");var i=r(a("pjoe")),m=r(a("43Yg")),s=r(a("/tCh")),p=r(a("scpF")),v=r(a("O/V9")),g=r(a("8aBX"));a("kwwi");var E=r(a("4X9j"));a("vUNy");var h=r(a("M6FO")),y=a("AdBF");a("Ymw7");var k=a("vGWC"),b=l(a("2w0b")),w=a("Hs+e"),C=a("XLjY"),F=r(a("16mx")),I=r(a("/ET0")),x=r(a("26TL")),N=h.default.Option,P=E.default.RangePicker,O={name:"\u4ed3\u5e93\u540d",url:"\u4ed3\u5e93\u57df\u540d",owner:"\u4ed3\u5e93\u7ba1\u7406\u5458",approver:"\u5ba1\u6279\u4eba",dateRange:"\u751f\u6548\u65e5\u671f",type:"\u4ed3\u5e93\u7c7b\u578b",name2:"\u4efb\u52a1\u540d",url2:"\u4efb\u52a1\u63cf\u8ff0",owner2:"\u6267\u884c\u4eba",approver2:"\u8d23\u4efb\u4eba",dateRange2:"\u751f\u6548\u65e5\u671f",type2:"\u4efb\u52a1\u7c7b\u578b"},R=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],q=function(e){function t(){var e;return(0,m.default)(this,t),e=(0,p.default)(this,(0,v.default)(t).apply(this,arguments)),e.getErrorInfo=function(){var t=e.props.form.getFieldsError,a=t(),l=Object.keys(a).filter(function(e){return a[e]}).length;if(!a||0===l)return null;var r=function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)},n=Object.keys(a).map(function(e){if(!a[e])return null;var t=a[e]||[];return b.default.createElement("li",{key:e,className:x.default.errorListItem,onClick:function(){return r(e)}},b.default.createElement(k.CloseCircleOutlined,{className:x.default.errorIcon}),b.default.createElement("div",{className:x.default.errorMessage},t[0]),b.default.createElement("div",{className:x.default.errorField},O[e]))});return b.default.createElement("span",{className:x.default.errorIcon},b.default.createElement(i.default,{title:"\u8868\u5355\u6821\u9a8c\u4fe1\u606f",content:n,overlayClassName:x.default.errorPopover,trigger:"click",getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e}},b.default.createElement(k.CloseCircleOutlined,null)),l)},e.validate=function(){var t=e.props,a=t.form.validateFieldsAndScroll,l=t.dispatch;a(function(e,t){e||l({type:"formAdvancedForm/submitAdvancedForm",payload:t})})},e}return(0,g.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.submitting;return b.default.createElement(b.default.Fragment,null,b.default.createElement(w.PageHeaderWrapper,{content:"\u9ad8\u7ea7\u8868\u5355\u5e38\u89c1\u4e8e\u4e00\u6b21\u6027\u8f93\u5165\u548c\u63d0\u4ea4\u5927\u6279\u91cf\u6570\u636e\u7684\u573a\u666f\u3002"},b.default.createElement(c.default,{title:"\u4ed3\u5e93\u7ba1\u7406",className:x.default.card,bordered:!1},b.default.createElement(y.Form,{layout:"vertical",hideRequiredMark:!0},b.default.createElement(f.default,{gutter:16},b.default.createElement(o.default,{lg:6,md:12,sm:24},b.default.createElement(y.Form.Item,{label:O.name},t("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"}]})(b.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"})))),b.default.createElement(o.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},b.default.createElement(y.Form.Item,{label:O.url},t("url",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(b.default.createElement(u.default,{style:{width:"100%"},addonBefore:"http://",addonAfter:".com",placeholder:"\u8bf7\u8f93\u5165"})))),b.default.createElement(o.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},b.default.createElement(y.Form.Item,{label:O.owner},t("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(b.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},b.default.createElement(N,{value:"xiao"},"\u4ed8\u6653\u6653"),b.default.createElement(N,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),b.default.createElement(f.default,{gutter:16},b.default.createElement(o.default,{lg:6,md:12,sm:24},b.default.createElement(y.Form.Item,{label:O.approver},t("approver",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(b.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},b.default.createElement(N,{value:"xiao"},"\u4ed8\u6653\u6653"),b.default.createElement(N,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),b.default.createElement(o.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},b.default.createElement(y.Form.Item,{label:O.dateRange},t("dateRange",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u751f\u6548\u65e5\u671f"}]})(b.default.createElement(P,{placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"],style:{width:"100%"}})))),b.default.createElement(o.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},b.default.createElement(y.Form.Item,{label:O.type},t("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(b.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},b.default.createElement(N,{value:"private"},"\u79c1\u5bc6"),b.default.createElement(N,{value:"public"},"\u516c\u5f00")))))))),b.default.createElement(c.default,{title:"\u4efb\u52a1\u7ba1\u7406",className:x.default.card,bordered:!1},b.default.createElement(y.Form,{layout:"vertical",hideRequiredMark:!0},b.default.createElement(f.default,{gutter:16},b.default.createElement(o.default,{lg:6,md:12,sm:24},b.default.createElement(y.Form.Item,{label:O.name2},t("name2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(b.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"})))),b.default.createElement(o.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},b.default.createElement(y.Form.Item,{label:O.url2},t("url2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(b.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"})))),b.default.createElement(o.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},b.default.createElement(y.Form.Item,{label:O.owner2},t("owner2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(b.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},b.default.createElement(N,{value:"xiao"},"\u4ed8\u6653\u6653"),b.default.createElement(N,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),b.default.createElement(f.default,{gutter:16},b.default.createElement(o.default,{lg:6,md:12,sm:24},b.default.createElement(y.Form.Item,{label:O.approver2},t("approver2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(b.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},b.default.createElement(N,{value:"xiao"},"\u4ed8\u6653\u6653"),b.default.createElement(N,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),b.default.createElement(o.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},b.default.createElement(y.Form.Item,{label:O.dateRange2},t("dateRange2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(b.default.createElement(d.default,{placeholder:"\u63d0\u9192\u65f6\u95f4",style:{width:"100%"},getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e}})))),b.default.createElement(o.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},b.default.createElement(y.Form.Item,{label:O.type2},t("type2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(b.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},b.default.createElement(N,{value:"private"},"\u79c1\u5bc6"),b.default.createElement(N,{value:"public"},"\u516c\u5f00")))))))),b.default.createElement(c.default,{title:"\u6210\u5458\u7ba1\u7406",bordered:!1},t("members",{initialValue:R})(b.default.createElement(F.default,null)))),b.default.createElement(I.default,null,this.getErrorInfo(),b.default.createElement(n.default,{type:"primary",onClick:this.validate,loading:a},"\u63d0\u4ea4")))}}]),t}(b.Component),S=(0,C.connect)(function(e){var t=e.loading;return{submitting:t.effects["formAdvancedForm/submitAdvancedForm"]}})(y.Form.create()(q));t.default=S},GuXj:function(e,t,a){e.exports={toolbar:"antd-pro-pages-form-advanced-form-components-footer-toolbar-index-toolbar",left:"antd-pro-pages-form-advanced-form-components-footer-toolbar-index-left",right:"antd-pro-pages-form-advanced-form-components-footer-toolbar-index-right"}}}]);