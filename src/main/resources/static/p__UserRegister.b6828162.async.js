(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{Wmya:function(e,t,r){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}},rZhS:function(e,t,r){"use strict";var a=r("fbTi"),s=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("lloV");var l=s(r("EZJh"));r("ZUEu");var i=s(r("A+px"));r("QOaD");var n=s(r("oSJN"));r("SgaC");var u=s(r("pjoe"));r("W30E");var o=s(r("qVcM"));r("CaXA");var d=s(r("1Ccs")),c=s(r("mK77")),f=s(r("43Yg")),g=s(r("/tCh")),m=s(r("scpF")),p=s(r("O/V9")),h=s(r("8aBX"));r("5gzX");var v=s(r("PgYa"));r("vUNy");var E=s(r("M6FO")),w=r("AdBF");r("Ymw7");var y=r("lvdA"),b=a(r("2w0b")),M=s(r("h5Yw")),F=r("XLjY"),S=s(r("rA3V")),k=s(r("Wmya")),C=w.Form.Item,P=E.default.Option,N=v.default.Group,x={ok:b.default.createElement("div",{className:k.default.success},b.default.createElement(y.FormattedMessage,{id:"userregister.strength.strong"})),pass:b.default.createElement("div",{className:k.default.warning},b.default.createElement(y.FormattedMessage,{id:"userregister.strength.medium"})),poor:b.default.createElement("div",{className:k.default.error},b.default.createElement(y.FormattedMessage,{id:"userregister.strength.short"}))},q={ok:"success",pass:"normal",poor:"exception"},z=function(e){function t(){var e;return(0,f.default)(this,t),e=(0,m.default)(this,(0,p.default)(t).apply(this,arguments)),e.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},e.interval=void 0,e.onGetCaptcha=function(){var t=59;e.setState({count:t}),e.interval=window.setInterval(function(){t-=1,e.setState({count:t}),0===t&&clearInterval(e.interval)},1e3)},e.getPasswordStatus=function(){var t=e.props.form,r=t.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},e.handleSubmit=function(t){t.preventDefault();var r=e.props,a=r.form,s=r.dispatch;a.validateFields({force:!0},function(t,r){if(!t){var a=e.state.prefix;s({type:"userRegister/submit",payload:(0,c.default)({},r,{prefix:a})})}})},e.checkConfirm=function(t,r,a){var s=e.props.form;r&&r!==s.getFieldValue("password")?a((0,y.formatMessage)({id:"userregister.password.twice"})):a()},e.checkPassword=function(t,r,a){var s=e.state,l=s.visible,i=s.confirmDirty;if(r)if(e.setState({help:""}),l||e.setState({visible:!!r}),r.length<6)a("error");else{var n=e.props.form;r&&i&&n.validateFields(["confirm"],{force:!0}),a()}else e.setState({help:(0,y.formatMessage)({id:"userregister.password.required"}),visible:!!r}),a("error")},e.changePrefix=function(t){e.setState({prefix:t})},e.renderPasswordProgress=function(){var t=e.props.form,r=t.getFieldValue("password"),a=e.getPasswordStatus();return r&&r.length?b.default.createElement("div",{className:k.default["progress-".concat(a)]},b.default.createElement(d.default,{status:q[a],className:k.default.progress,strokeWidth:6,percent:10*r.length>100?100:10*r.length,showInfo:!1})):null},e}return(0,h.default)(t,e),(0,g.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.userRegister,r=e.form,a=r.getFieldValue("mail");"ok"===t.status&&(o.default.success("\u6ce8\u518c\u6210\u529f\uff01"),S.default.push({pathname:"/user/register-result",state:{account:a}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,a=t.getFieldDecorator,s=this.state,o=s.count,d=s.prefix,c=s.help,f=s.visible;return b.default.createElement("div",{className:k.default.main},b.default.createElement("h3",null,b.default.createElement(y.FormattedMessage,{id:"userregister.register.register"})),b.default.createElement(w.Form,{onSubmit:this.handleSubmit},b.default.createElement(C,null,a("mail",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userregister.email.required"})},{type:"email",message:(0,y.formatMessage)({id:"userregister.email.wrong-format"})}]})(b.default.createElement(v.default,{size:"large",placeholder:(0,y.formatMessage)({id:"userregister.email.placeholder"})}))),b.default.createElement(C,{help:c},b.default.createElement(u.default,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:b.default.createElement("div",{style:{padding:"4px 0"}},x[this.getPasswordStatus()],this.renderPasswordProgress(),b.default.createElement("div",{style:{marginTop:10}},b.default.createElement(y.FormattedMessage,{id:"userregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:f},a("password",{rules:[{validator:this.checkPassword}]})(b.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"userregister.password.placeholder"})})))),b.default.createElement(C,null,a("confirm",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userregister.confirm-password.required"})},{validator:this.checkConfirm}]})(b.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"userregister.confirm-password.placeholder"})}))),b.default.createElement(C,null,b.default.createElement(N,{compact:!0},b.default.createElement(E.default,{size:"large",value:d,onChange:this.changePrefix,style:{width:"20%"}},b.default.createElement(P,{value:"86"},"+86"),b.default.createElement(P,{value:"87"},"+87")),a("mobile",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userregister.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,y.formatMessage)({id:"userregister.phone-number.wrong-format"})}]})(b.default.createElement(v.default,{size:"large",style:{width:"80%"},placeholder:(0,y.formatMessage)({id:"userregister.phone-number.placeholder"})})))),b.default.createElement(C,null,b.default.createElement(n.default,{gutter:8},b.default.createElement(i.default,{span:16},a("captcha",{rules:[{required:!0,message:(0,y.formatMessage)({id:"userregister.verification-code.required"})}]})(b.default.createElement(v.default,{size:"large",placeholder:(0,y.formatMessage)({id:"userregister.verification-code.placeholder"})}))),b.default.createElement(i.default,{span:8},b.default.createElement(l.default,{size:"large",disabled:!!o,className:k.default.getCaptcha,onClick:this.onGetCaptcha},o?"".concat(o," s"):(0,y.formatMessage)({id:"userregister.register.get-verification-code"}))))),b.default.createElement(C,null,b.default.createElement(l.default,{size:"large",loading:r,className:k.default.submit,type:"primary",htmlType:"submit"},b.default.createElement(y.FormattedMessage,{id:"userregister.register.register"})),b.default.createElement(M.default,{className:k.default.login,to:"/user/login"},b.default.createElement(y.FormattedMessage,{id:"userregister.register.sign-in"})))))}}]),t}(b.Component),V=(0,F.connect)(function(e){var t=e.userRegister,r=e.loading;return{userRegister:t,submitting:r.effects["userRegister/submit"]}})(w.Form.create()(z));t.default=V}}]);