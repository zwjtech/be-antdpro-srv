(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{SUTt:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DVPr");var r=n(a("EzV3"));a("eNqb");var d=n(a("Jk0Q"));a("ZUEu");var u=n(a("A+px"));a("QOaD");var i=n(a("oSJN"));a("TDo/");var s=n(a("ok0S"));a("kwwi");var o=n(a("4X9j"));a("lloV");var c=n(a("EZJh"));a("rn3l");var f=n(a("c9yN"));a("88nM");var m=n(a("zy+P"));a("tswM");var p=n(a("ICcd"));a("CaXA");var E=n(a("1Ccs"));a("jOap");var v=n(a("kB/H")),h=n(a("mK77")),b=n(a("43Yg")),y=n(a("/tCh")),g=n(a("scpF")),C=n(a("O/V9")),w=n(a("8aBX"));a("5gzX");var k=n(a("PgYa"));a("vUNy");var S=n(a("M6FO"));a("PWbc");var x=n(a("jQ2f")),B=a("vGWC"),L=a("AdBF");a("Ymw7");var D=l(a("2w0b")),O=a("Hs+e"),I=a("XLjY"),M=a("QQMY"),N=n(a("a/LZ")),F=n(a("aCFg")),T=L.Form.Item,Y=x.default.Button,j=x.default.Group,V=S.default.Option,A=k.default.Search,z=k.default.TextArea,H=function(e){function t(){var e;return(0,b.default)(this,t),e=(0,g.default)(this,(0,C.default)(t).apply(this,arguments)),e.state={visible:!1,done:!1,current:void 0},e.formLayout={labelCol:{span:7},wrapperCol:{span:13}},e.addBtn=void 0,e.showModal=function(){e.setState({visible:!0,current:void 0})},e.showEditModal=function(t){e.setState({visible:!0,current:t})},e.handleDone=function(){setTimeout(function(){return e.addBtn&&e.addBtn.blur()},0),e.setState({done:!1,visible:!1})},e.handleCancel=function(){setTimeout(function(){return e.addBtn&&e.addBtn.blur()},0),e.setState({visible:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,l=a.dispatch,n=a.form,r=e.state.current,d=r?r.id:"";setTimeout(function(){return e.addBtn&&e.addBtn.blur()},0),n.validateFields(function(t,a){t||(e.setState({done:!0}),l({type:"listBasicList/submit",payload:(0,h.default)({id:d},a)}))})},e.deleteItem=function(t){var a=e.props.dispatch;a({type:"listBasicList/submit",payload:{id:t}})},e}return(0,w.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"listBasicList/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.listBasicList.list,l=t.loading,n=this.props.form.getFieldDecorator,h=this.state,b=h.visible,y=h.done,g=h.current,C=void 0===g?{}:g,w=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&v.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},x=y?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},I=function(e){var t=e.title,a=e.value,l=e.bordered;return D.default.createElement("div",{className:F.default.headerInfo},D.default.createElement("span",null,t),D.default.createElement("p",null,a),l&&D.default.createElement("em",null))},H=D.default.createElement("div",{className:F.default.extraContent},D.default.createElement(j,{defaultValue:"all"},D.default.createElement(Y,{value:"all"},"\u5168\u90e8"),D.default.createElement(Y,{value:"progress"},"\u8fdb\u884c\u4e2d"),D.default.createElement(Y,{value:"waiting"},"\u7b49\u5f85\u4e2d")),D.default.createElement(A,{className:F.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),P={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},J=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,r=t.status;return D.default.createElement("div",{className:F.default.listContent},D.default.createElement("div",{className:F.default.listContentItem},D.default.createElement("span",null,"Owner"),D.default.createElement("p",null,a)),D.default.createElement("div",{className:F.default.listContentItem},D.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),D.default.createElement("p",null,(0,N.default)(l).format("YYYY-MM-DD HH:mm"))),D.default.createElement("div",{className:F.default.listContentItem},D.default.createElement(E.default,{percent:n,status:r,strokeWidth:6,style:{width:180}})))},Q=function(e){var t=e.item;return D.default.createElement(p.default,{overlay:D.default.createElement(m.default,{onClick:function(e){var a=e.key;return w(a,t)}},D.default.createElement(m.default.Item,{key:"edit"},"\u7f16\u8f91"),D.default.createElement(m.default.Item,{key:"delete"},"\u5220\u9664"))},D.default.createElement("a",null,"\u66f4\u591a ",D.default.createElement(B.DownOutlined,null)))},q=function(){return y?D.default.createElement(f.default,{status:"success",title:"\u64cd\u4f5c\u6210\u529f",subTitle:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",extra:D.default.createElement(c.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:F.default.formResult}):D.default.createElement(L.Form,{onSubmit:e.handleSubmit},D.default.createElement(T,Object.assign({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:C.title})(D.default.createElement(k.default,{placeholder:"\u8bf7\u8f93\u5165"}))),D.default.createElement(T,Object.assign({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:C.createdAt?(0,N.default)(C.createdAt):null})(D.default.createElement(o.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),D.default.createElement(T,Object.assign({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:C.owner})(D.default.createElement(S.default,{placeholder:"\u8bf7\u9009\u62e9"},D.default.createElement(V,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),D.default.createElement(V,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),D.default.createElement(T,Object.assign({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:C.subDescription})(D.default.createElement(z,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return D.default.createElement(D.default.Fragment,null,D.default.createElement(O.PageHeaderWrapper,null,D.default.createElement("div",{className:F.default.standardList},D.default.createElement(s.default,{bordered:!1},D.default.createElement(i.default,null,D.default.createElement(u.default,{sm:8,xs:24},D.default.createElement(I,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),D.default.createElement(u.default,{sm:8,xs:24},D.default.createElement(I,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),D.default.createElement(u.default,{sm:8,xs:24},D.default.createElement(I,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),D.default.createElement(s.default,{className:F.default.listCard,bordered:!1,title:"\u57fa\u672c\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:H},D.default.createElement(c.default,{type:"dashed",style:{width:"100%",marginBottom:8},onClick:this.showModal,ref:function(t){e.addBtn=(0,M.findDOMNode)(t)}},D.default.createElement(B.PlusOutlined,null),"\u6dfb\u52a0"),D.default.createElement(d.default,{size:"large",rowKey:"id",loading:l,pagination:P,dataSource:a,renderItem:function(t){return D.default.createElement(d.default.Item,{actions:[D.default.createElement("a",{key:"edit",onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),D.default.createElement(Q,{key:"more",item:t})]},D.default.createElement(d.default.Item.Meta,{avatar:D.default.createElement(r.default,{src:t.logo,shape:"square",size:"large"}),title:D.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),D.default.createElement(J,{data:t}))}})))),D.default.createElement(v.default,Object.assign({title:y?null:"\u4efb\u52a1".concat(C?"\u7f16\u8f91":"\u6dfb\u52a0"),className:F.default.standardListForm,width:640,bodyStyle:y?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:b},x),q()))}}]),t}(D.Component),P=(0,I.connect)(function(e){var t=e.listBasicList,a=e.loading;return{listBasicList:t,loading:a.models.listBasicList}})(L.Form.create()(H));t.default=P},aCFg:function(e,t,a){e.exports={standardList:"antd-pro-pages-list-basic-list-style-standardList",headerInfo:"antd-pro-pages-list-basic-list-style-headerInfo",listContent:"antd-pro-pages-list-basic-list-style-listContent",listContentItem:"antd-pro-pages-list-basic-list-style-listContentItem",extraContentSearch:"antd-pro-pages-list-basic-list-style-extraContentSearch",listCard:"antd-pro-pages-list-basic-list-style-listCard",standardListForm:"antd-pro-pages-list-basic-list-style-standardListForm",formResult:"antd-pro-pages-list-basic-list-style-formResult"}}}]);