(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"/FG7":function(e,t,a){e.exports={row:"antd-pro-pages-account-settings-components-geographic-view-row",item:"antd-pro-pages-account-settings-components-geographic-view-item"}},"6s3o":function(e,t,a){e.exports={main:"antd-pro-pages-account-settings-style-main",leftMenu:"antd-pro-pages-account-settings-style-leftMenu",right:"antd-pro-pages-account-settings-style-right",title:"antd-pro-pages-account-settings-style-title"}},"9NX4":function(e,t,a){e.exports={baseView:"antd-pro-pages-account-settings-components-base-view-baseView",left:"antd-pro-pages-account-settings-components-base-view-left",right:"antd-pro-pages-account-settings-components-base-view-right",avatar_title:"antd-pro-pages-account-settings-components-base-view-avatar_title",avatar:"antd-pro-pages-account-settings-components-base-view-avatar",button_view:"antd-pro-pages-account-settings-components-base-view-button_view"}},EymU:function(e,t,a){"use strict";var n=a("fbTi"),i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("eNqb");var s=i(a("Jk0Q")),r=i(a("43Yg")),c=i(a("/tCh")),u=i(a("scpF")),o=i(a("O/V9")),l=i(a("8aBX")),d=a("lvdA"),f=a("vGWC"),m=n(a("2w0b")),g=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,u.default)(this,(0,o.default)(t).apply(this,arguments)),e.getData=function(){return[{title:(0,d.formatMessage)({id:"accountsettings.binding.taobao"},{}),description:(0,d.formatMessage)({id:"accountsettings.binding.taobao-description"},{}),actions:[m.default.createElement("a",{key:"Bind"},m.default.createElement(d.FormattedMessage,{id:"accountsettings.binding.bind",defaultMessage:"Bind"}))],avatar:m.default.createElement(f.TaobaoOutlined,{className:"taobao"})},{title:(0,d.formatMessage)({id:"accountsettings.binding.alipay"},{}),description:(0,d.formatMessage)({id:"accountsettings.binding.alipay-description"},{}),actions:[m.default.createElement("a",{key:"Bind"},m.default.createElement(d.FormattedMessage,{id:"accountsettings.binding.bind",defaultMessage:"Bind"}))],avatar:m.default.createElement(f.AlipayOutlined,{className:"alipay"})},{title:(0,d.formatMessage)({id:"accountsettings.binding.dingding"},{}),description:(0,d.formatMessage)({id:"accountsettings.binding.dingding-description"},{}),actions:[m.default.createElement("a",{key:"Bind"},m.default.createElement(d.FormattedMessage,{id:"accountsettings.binding.bind",defaultMessage:"Bind"}))],avatar:m.default.createElement(f.DingdingOutlined,{className:"dingding"})}]},e}return(0,l.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return m.default.createElement(m.Fragment,null,m.default.createElement(s.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return m.default.createElement(s.default.Item,{actions:e.actions},m.default.createElement(s.default.Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),t}(m.Component),p=g;t.default=p},GEA7:function(e,t,a){e.exports={area_code:"antd-pro-pages-account-settings-components-phone-view-area_code",phone_number:"antd-pro-pages-account-settings-components-phone-view-phone_number"}},HF3q:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5gzX");var i=n(a("PgYa")),s=n(a("2w0b")),r=n(a("GEA7")),c=function(e){var t=e.value,a=e.onChange,n=["",""];return t&&(n=t.split("-")),s.default.createElement(s.default.Fragment,null,s.default.createElement(i.default,{className:r.default.area_code,value:n[0],onChange:function(e){a&&a("".concat(e.target.value,"-").concat(n[1]))}}),s.default.createElement(i.default,{className:r.default.phone_number,onChange:function(e){a&&a("".concat(n[0],"-").concat(e.target.value))},value:n[1]}))},u=c;t.default=u},W8w3:function(e,t,a){"use strict";var n=a("fbTi"),i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Noz4");var s=i(a("AnGa")),r=i(a("43Yg")),c=i(a("/tCh")),u=i(a("scpF")),o=i(a("O/V9")),l=i(a("8aBX"));a("vUNy");var d=i(a("M6FO")),f=n(a("2w0b")),m=a("XLjY"),g=i(a("/FG7")),p=d.default.Option,v={label:"",key:""},y=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,u.default)(this,(0,o.default)(t).apply(this,arguments)),e.componentDidMount=function(){var t=e.props.dispatch;t&&t({type:"accountSettings/fetchProvince"})},e.getCityOption=function(){var t=e.props.city;return t?e.getOption(t):[]},e.getOption=function(e){return!e||e.length<1?f.default.createElement(p,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map(function(e){return f.default.createElement(p,{key:e.id,value:e.id},e.name)})},e.selectProvinceItem=function(t){var a=e.props,n=a.dispatch,i=a.onChange;n&&n({type:"accountSettings/fetchCity",payload:t.key}),i&&i({province:t,city:v})},e.selectCityItem=function(t){var a=e.props,n=a.value,i=a.onChange;n&&i&&i({province:n.province,city:t})},e}return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,n=t.value;!e.value&&n&&n.province&&a&&a({type:"accountSettings/fetchCity",payload:n.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return e?this.getOption(e):[]}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:v,city:v};var t=e.province,a=e.city;return{province:t||v,city:a||v}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,n=this.props.loading;return f.default.createElement(s.default,{spinning:n,wrapperClassName:g.default.row},f.default.createElement(d.default,{className:g.default.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),f.default.createElement(d.default,{className:g.default.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),t}(f.Component),h=(0,m.connect)(function(e){var t=e.accountSettings,a=e.loading,n=t.province,i=t.city;return{province:n,city:i,loading:a.models.accountSettings}})(y);t.default=h},gjzA:function(e,t,a){"use strict";var n=a("fbTi"),i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("eNqb");var s=i(a("Jk0Q")),r=i(a("43Yg")),c=i(a("/tCh")),u=i(a("scpF")),o=i(a("O/V9")),l=i(a("8aBX")),d=a("lvdA"),f=n(a("2w0b")),m={strong:f.default.createElement("span",{className:"strong"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.strong",defaultMessage:"Strong"})),medium:f.default.createElement("span",{className:"medium"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.medium",defaultMessage:"Medium"})),weak:f.default.createElement("span",{className:"weak"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.weak",defaultMessage:"Weak"}),"Weak")},g=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,u.default)(this,(0,o.default)(t).apply(this,arguments)),e.getData=function(){return[{title:(0,d.formatMessage)({id:"accountsettings.security.password"},{}),description:f.default.createElement(f.Fragment,null,(0,d.formatMessage)({id:"accountsettings.security.password-description"}),"\uff1a",m.strong),actions:[f.default.createElement("a",{key:"Modify"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.modify",defaultMessage:"Modify"}))]},{title:(0,d.formatMessage)({id:"accountsettings.security.phone"},{}),description:"".concat((0,d.formatMessage)({id:"accountsettings.security.phone-description"},{}),"\uff1a138****8293"),actions:[f.default.createElement("a",{key:"Modify"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.modify",defaultMessage:"Modify"}))]},{title:(0,d.formatMessage)({id:"accountsettings.security.question"},{}),description:(0,d.formatMessage)({id:"accountsettings.security.question-description"},{}),actions:[f.default.createElement("a",{key:"Set"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.set",defaultMessage:"Set"}))]},{title:(0,d.formatMessage)({id:"accountsettings.security.email"},{}),description:"".concat((0,d.formatMessage)({id:"accountsettings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[f.default.createElement("a",{key:"Modify"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.modify",defaultMessage:"Modify"}))]},{title:(0,d.formatMessage)({id:"accountsettings.security.mfa"},{}),description:(0,d.formatMessage)({id:"accountsettings.security.mfa-description"},{}),actions:[f.default.createElement("a",{key:"bind"},f.default.createElement(d.FormattedMessage,{id:"accountsettings.security.bind",defaultMessage:"Bind"}))]}]},e}return(0,l.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.getData();return f.default.createElement(f.Fragment,null,f.default.createElement(s.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return f.default.createElement(s.default.Item,{actions:e.actions},f.default.createElement(s.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(f.Component),p=g;t.default=p},hDGE:function(e,t,a){"use strict";var n=a("fbTi"),i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5gzX");var s=i(a("PgYa"));a("W30E");var r=i(a("qVcM")),c=i(a("43Yg")),u=i(a("/tCh")),o=i(a("scpF")),l=i(a("O/V9")),d=i(a("8aBX"));a("lloV");var f=i(a("EZJh"));a("iDLE");var m=i(a("zU+0"));a("vUNy");var g=i(a("M6FO")),p=a("vGWC"),v=a("AdBF");a("Ymw7");var y=a("lvdA"),h=n(a("2w0b")),M=a("XLjY"),b=i(a("W8w3")),E=i(a("HF3q")),w=i(a("9NX4")),k=v.Form.Item,F=g.default.Option,C=function(e){var t=e.avatar;return h.default.createElement(h.Fragment,null,h.default.createElement("div",{className:w.default.avatar_title},h.default.createElement(y.FormattedMessage,{id:"accountsettings.basic.avatar",defaultMessage:"Avatar"})),h.default.createElement("div",{className:w.default.avatar},h.default.createElement("img",{src:t,alt:"avatar"})),h.default.createElement(m.default,{showUploadList:!1},h.default.createElement("div",{className:w.default.button_view},h.default.createElement(f.default,null,h.default.createElement(p.UploadOutlined,null),h.default.createElement(y.FormattedMessage,{id:"accountsettings.basic.change-avatar",defaultMessage:"Change avatar"})))))},N=function(e,t,a){var n=t.province,i=t.city;n.key||a("Please input your province!"),i.key||a("Please input your city!"),a()},O=function(e,t,a){var n=t.split("-");n[0]||a("Please input your area code!"),n[1]||a("Please input your phone number!"),a()},U=function(e){function t(){var e;return(0,c.default)(this,t),e=(0,o.default)(this,(0,l.default)(t).apply(this,arguments)),e.view=void 0,e.setBaseInfo=function(){var t=e.props,a=t.currentUser,n=t.form;a&&Object.keys(n.getFieldsValue()).forEach(function(e){var t={};t[e]=a[e]||null,n.setFieldsValue(t)})},e.getViewDom=function(t){e.view=t},e.handlerSubmit=function(t){t.preventDefault();var a=e.props.form;a.validateFields(function(e){e||r.default.success((0,y.formatMessage)({id:"accountsettings.basic.update.success"}))})},e}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e){if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return t}return""}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return h.default.createElement("div",{className:w.default.baseView,ref:this.getViewDom},h.default.createElement("div",{className:w.default.left},h.default.createElement(v.Form,{layout:"vertical",hideRequiredMark:!0},h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.email"})},e("email",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.email-message"},{})}]})(h.default.createElement(s.default,null))),h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.nickname"})},e("name",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.nickname-message"},{})}]})(h.default.createElement(s.default,null))),h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.profile"})},e("profile",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.profile-message"},{})}]})(h.default.createElement(s.default.TextArea,{placeholder:(0,y.formatMessage)({id:"accountsettings.basic.profile-placeholder"}),rows:4}))),h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.country"})},e("country",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.country-message"},{})}]})(h.default.createElement(g.default,{style:{maxWidth:220}},h.default.createElement(F,{value:"China"},"\u4e2d\u56fd")))),h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.geographic"})},e("geographic",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.geographic-message"},{})},{validator:N}]})(h.default.createElement(b.default,null))),h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.address"})},e("address",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.address-message"},{})}]})(h.default.createElement(s.default,null))),h.default.createElement(k,{label:(0,y.formatMessage)({id:"accountsettings.basic.phone"})},e("phone",{rules:[{required:!0,message:(0,y.formatMessage)({id:"accountsettings.basic.phone-message"},{})},{validator:O}]})(h.default.createElement(E.default,null))),h.default.createElement(f.default,{type:"primary",onClick:this.handlerSubmit},h.default.createElement(y.FormattedMessage,{id:"accountsettings.basic.update",defaultMessage:"Update Information"})))),h.default.createElement("div",{className:w.default.right},h.default.createElement(C,{avatar:this.getAvatarURL()})))}}]),t}(h.Component),_=(0,M.connect)(function(e){var t=e.accountSettings;return{currentUser:t.currentUser}})(v.Form.create()(U));t.default=_},mzst:function(e,t,a){"use strict";var n=a("fbTi"),i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("43Yg")),r=i(a("/tCh")),c=i(a("scpF")),u=i(a("O/V9")),o=i(a("8aBX"));a("88nM");var l=i(a("zy+P")),d=n(a("2w0b")),f=a("lvdA"),m=a("Hs+e"),g=a("XLjY"),p=i(a("hDGE")),v=i(a("EymU")),y=i(a("qGDb")),h=i(a("gjzA")),M=i(a("6s3o")),b=l.default.Item,E=function(e){function t(e){var a;(0,s.default)(this,t),a=(0,c.default)(this,(0,u.default)(t).call(this,e)),a.main=void 0,a.getMenu=function(){var e=a.state.menuMap;return Object.keys(e).map(function(t){return d.default.createElement(b,{key:t},e[t])})},a.getRightTitle=function(){var e=a.state,t=e.selectKey,n=e.menuMap;return n[t]},a.selectKey=function(e){a.setState({selectKey:e})},a.resize=function(){a.main&&requestAnimationFrame(function(){if(a.main){var e="inline",t=a.main.offsetWidth;a.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),a.setState({mode:e})}})},a.renderChildren=function(){var e=a.state.selectKey;switch(e){case"base":return d.default.createElement(p.default,null);case"security":return d.default.createElement(h.default,null);case"binding":return d.default.createElement(v.default,null);case"notification":return d.default.createElement(y.default,null);default:break}return null};var n={base:d.default.createElement(f.FormattedMessage,{id:"accountsettings.menuMap.basic",defaultMessage:"Basic Settings"}),security:d.default.createElement(f.FormattedMessage,{id:"accountsettings.menuMap.security",defaultMessage:"Security Settings"}),binding:d.default.createElement(f.FormattedMessage,{id:"accountsettings.menuMap.binding",defaultMessage:"Account Binding"}),notification:d.default.createElement(f.FormattedMessage,{id:"accountsettings.menuMap.notification",defaultMessage:"New Message Notification"})};return a.state={mode:"inline",menuMap:n,selectKey:"base"},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"accountSettings/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.currentUser;if(!t.userid)return"";var a=this.state,n=a.mode,i=a.selectKey;return d.default.createElement(m.GridContent,null,d.default.createElement("div",{className:M.default.main,ref:function(t){t&&(e.main=t)}},d.default.createElement("div",{className:M.default.leftMenu},d.default.createElement(l.default,{mode:n,selectedKeys:[i],onClick:function(t){var a=t.key;return e.selectKey(a)}},this.getMenu())),d.default.createElement("div",{className:M.default.right},d.default.createElement("div",{className:M.default.title},this.getRightTitle()),this.renderChildren())))}}]),t}(d.Component),w=(0,g.connect)(function(e){var t=e.accountSettings;return{currentUser:t.currentUser}})(E);t.default=w},qGDb:function(e,t,a){"use strict";var n=a("fbTi"),i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("eNqb");var s=i(a("Jk0Q"));a("cl/V");var r=i(a("2Tbc")),c=i(a("43Yg")),u=i(a("/tCh")),o=i(a("scpF")),l=i(a("O/V9")),d=i(a("8aBX")),f=n(a("2w0b")),m=a("lvdA"),g=function(e){function t(){var e;return(0,c.default)(this,t),e=(0,o.default)(this,(0,l.default)(t).apply(this,arguments)),e.getData=function(){var e=f.default.createElement(r.default,{checkedChildren:(0,m.formatMessage)({id:"accountsettings.settings.open"}),unCheckedChildren:(0,m.formatMessage)({id:"accountsettings.settings.close"}),defaultChecked:!0});return[{title:(0,m.formatMessage)({id:"accountsettings.notification.password"},{}),description:(0,m.formatMessage)({id:"accountsettings.notification.password-description"},{}),actions:[e]},{title:(0,m.formatMessage)({id:"accountsettings.notification.messages"},{}),description:(0,m.formatMessage)({id:"accountsettings.notification.messages-description"},{}),actions:[e]},{title:(0,m.formatMessage)({id:"accountsettings.notification.todo"},{}),description:(0,m.formatMessage)({id:"accountsettings.notification.todo-description"},{}),actions:[e]}]},e}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.getData();return f.default.createElement(f.Fragment,null,f.default.createElement(s.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return f.default.createElement(s.default.Item,{actions:e.actions},f.default.createElement(s.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(f.Component),p=g;t.default=p}}]);