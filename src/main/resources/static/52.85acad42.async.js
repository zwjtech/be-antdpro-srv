(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{AOKL:function(e,a,t){"use strict";var n=t("mZ4U");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("TDo/");var l=n(t("ok0S"));t("0+V6");var d=n(t("3vto"));t("ZUEu");var r=n(t("A+px"));t("QOaD");var i=n(t("oSJN")),s=t("lvdA"),f=n(t("2w0b")),o=t("d+nf"),u=n(t("o0dW")),c=n(t("jWm5")),m=function(e){var a=e.data,t=e.currentTabKey;return f.default.createElement(i.default,{gutter:8,style:{width:138,margin:"8px 0"},type:"flex"},f.default.createElement(r.default,{span:12},f.default.createElement(u.default,{title:a.name,subTitle:f.default.createElement(s.FormattedMessage,{id:"dashboardanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(100*a.cvr,"%"),theme:t!==a.name?"light":void 0})),f.default.createElement(r.default,{span:12,style:{paddingTop:36}},f.default.createElement(o.Pie,{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:100*a.cvr,height:64})))},p=d.default.TabPane,y=function(e){var a=e.activeKey,t=e.loading,n=e.offlineData,r=e.offlineChartData,i=e.handleTabChange;return f.default.createElement(l.default,{loading:t,className:c.default.offlineCard,bordered:!1,style:{marginTop:32}},f.default.createElement(d.default,{activeKey:a,onChange:i},n.map(function(e){return f.default.createElement(p,{tab:f.default.createElement(m,{data:e,currentTabKey:a}),key:e.name},f.default.createElement("div",{style:{padding:"0 24px"}},f.default.createElement(o.TimelineChart,{height:400,data:r,titleMap:{y1:(0,s.formatMessage)({id:"dashboardanalysis.analysis.traffic"}),y2:(0,s.formatMessage)({id:"dashboardanalysis.analysis.payments"})}})))})))},v=y;a.default=v}}]);