(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{ZEvJ:function(e,t,a){"use strict";var n=a("fbTi"),r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5gzX");var c=r(a("PgYa")),l=r(a("43Yg")),i=r(a("/tCh")),o=r(a("scpF")),s=r(a("O/V9")),u=r(a("8aBX")),p=n(a("2w0b")),d=a("Hs+e"),h=a("XLjY"),f=r(a("rA3V")),b=function(e){function t(){var e;return(0,l.default)(this,t),e=(0,o.default)(this,(0,s.default)(t).apply(this,arguments)),e.handleTabChange=function(t){var a=e.props.match,n="/"===a.url?"":a.url;switch(t){case"articles":f.default.push("".concat(n,"/articles"));break;case"applications":f.default.push("".concat(n,"/applications"));break;case"projects":f.default.push("".concat(n,"/projects"));break;default:break}},e.handleFormSubmit=function(e){console.log(e)},e.getTabKey=function(){var t=e.props,a=t.match,n=t.location,r="/"===a.path?"":a.path,c=n.pathname.replace("".concat(r,"/"),"");return c&&"/"!==c?c:"articles"},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=[{key:"articles",tab:"\u6587\u7ae0"},{key:"projects",tab:"\u9879\u76ee"},{key:"applications",tab:"\u5e94\u7528"}],t=p.default.createElement("div",{style:{textAlign:"center"}},p.default.createElement(c.default.Search,{placeholder:"\u8bf7\u8f93\u5165",enterButton:"\u641c\u7d22",size:"large",onSearch:this.handleFormSubmit,style:{maxWidth:522,width:"100%"}})),a=this.props.children;return p.default.createElement(d.PageHeaderWrapper,{content:t,tabList:e,tabActiveKey:this.getTabKey(),onTabChange:this.handleTabChange},a)}}]),t}(p.Component),m=(0,h.connect)()(b);t.default=m}}]);