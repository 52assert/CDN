(window["webpackJsonp_cloud-ebl-app"]=window["webpackJsonp_cloud-ebl-app"]||[]).push([["views-invoice-RecordPage-vue"],{1815:function(e,t,n){"use strict";n("b550"),n("d79d")},"3e6a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["createTextVNode"])(" 新建 "),o=Object(c["createTextVNode"])(" 发送 "),r=Object(c["createTextVNode"])(" 发票编号 "),i=Object(c["createTextVNode"])(" 客户名称 "),u=Object(c["createTextVNode"])(" 确认 "),d=Object(c["createTextVNode"])(" 驳回 "),s=Object(c["createTextVNode"])(" 发票编号 "),l=Object(c["createTextVNode"])(" 客户名称 ");function b(e,t,n,b,h,p){var f=Object(c["resolveComponent"])("a-button"),j=Object(c["resolveComponent"])("a-col"),O=Object(c["resolveComponent"])("a-select-option"),v=Object(c["resolveComponent"])("a-select"),m=Object(c["resolveComponent"])("a-input-search"),x=Object(c["resolveComponent"])("a-input-group"),y=Object(c["resolveComponent"])("a-row"),C=Object(c["resolveComponent"])("BaseTableEditable"),w=Object(c["resolveComponent"])("a-tab-pane"),g=Object(c["resolveComponent"])("a-tabs"),k=Object(c["resolveComponent"])("a-textarea"),V=Object(c["resolveComponent"])("a-modal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(g,{activeKey:e.currentKey,"onUpdate:activeKey":t[7]||(t[7]=function(t){return e.currentKey=t})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{key:"send",tab:"我发送的"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{class:"header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:e.addInvoice},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["onClick"]),Object(c["createVNode"])(f,{disabled:0===e.ids.length,type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:e.send},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["disabled","onClick"])]})),_:1}),Object(c["createVNode"])(j,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{compact:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{value:e.searchType,"onUpdate:value":t[1]||(t[1]=function(t){return e.searchType=t}),placeholder:"选择搜索条件",style:{width:"110px"},onChange:e.handleSelectChange},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{value:"code"},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createVNode"])(O,{value:"buyer"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]})),_:1},8,["value","onChange"]),Object(c["createVNode"])(m,{value:e.searchExp,"onUpdate:value":t[2]||(t[2]=function(t){return e.searchExp=t}),style:{width:"80%"},placeholder:"请输入搜索内容","enter-button":"",onSearch:e.onSearch},null,8,["value","onSearch"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{columns:e.columns,sourceData:e.souceData,destPath:"/invoiceRecordDtl",type:"send",onSelected:e.setIds},null,8,["columns","sourceData","onSelected"])]})),_:1}),Object(c["createVNode"])(w,{key:"receive",tab:"我接收的"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{class:"header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:t[3]||(t[3]=function(t){return e.handleReceivedInvoice("adopt")})},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(f,{type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:t[4]||(t[4]=function(t){return e.rejectReasonModal=!0})},{default:Object(c["withCtx"])((function(){return[d]})),_:1})]})),_:1}),Object(c["createVNode"])(j,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{compact:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{value:e.searchReceivedType,"onUpdate:value":t[5]||(t[5]=function(t){return e.searchReceivedType=t}),placeholder:"选择搜索条件",style:{width:"110px"},onChange:e.handleSelectChange},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{value:"code"},{default:Object(c["withCtx"])((function(){return[s]})),_:1}),Object(c["createVNode"])(O,{value:"buyer"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]})),_:1},8,["value","onChange"]),Object(c["createVNode"])(m,{value:e.searchExp,"onUpdate:value":t[6]||(t[6]=function(t){return e.searchExp=t}),style:{width:"80%"},placeholder:"请输入搜索内容","enter-button":"",onSearch:e.onSearch},null,8,["value","onSearch"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{columns:e.columns,sourceData:e.souceReceivedData,destPath:"/invoiceRecordDtl",type:"receive",onSelected:e.setIds},null,8,["columns","sourceData","onSelected"])]})),_:1})]})),_:1},8,["activeKey"]),Object(c["createVNode"])(V,{visible:e.rejectReasonModal,"onUpdate:visible":t[9]||(t[9]=function(t){return e.rejectReasonModal=t}),centered:"",closable:!1,"mask-closable":!1,onOk:t[10]||(t[10]=function(t){return e.handleReceivedInvoice("reject")}),okText:"确定",cancelText:"取消"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{value:e.reason,"onUpdate:value":t[8]||(t[8]=function(t){return e.reason=t}),placeholder:"请输入驳回原因",rows:8},null,8,["value"])]})),_:1},8,["visible"])],64)}n("4160"),n("a434"),n("159b"),n("368b");var h=n("56cd"),p=(n("04f3"),n("ed3b")),f=(n("1815"),n("e32c")),j=(n("50ac"),n("9a63")),O=(n("e1f5"),n("5efb")),v=n("9096"),m=n("4f48"),x=n("5f70"),y=n.n(x),C=Object(c["defineComponent"])({components:{"a-button":O["a"],"a-row":j["a"],"a-col":f["a"],"a-modal":p["a"],BaseTableEditable:v["a"]},setup:function(){var e=Object(c["ref"])("send"),t=Object(c["ref"])(""),n=Object(c["ref"])(""),a=Object(c["ref"])(""),o=Object(c["reactive"])([]),r=Object(c["reactive"])([{title:"序号",dataIndex:"key",key:"key",width:70},{title:"发票编码",dataIndex:"code",key:"code",ellipsis:!0},{title:"购票方",dataIndex:"buyer",key:"buyer",ellipsis:!0},{title:"开票日期",dataIndex:"date",key:"date",ellipsis:!0},{title:"发票金额",dataIndex:"amount",key:"amount",ellipsis:!0},{title:"状态",dataIndex:"status",key:"status",ellipsis:!0},{title:"备注",dataIndex:"remark",key:"remark",ellipsis:!0},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),i=Object(c["reactive"])([]),u=Object(c["reactive"])([]),d=Object(c["ref"])(!1),s=Object(c["ref"])(""),l=function(e){switch(e){case"draft":return"草稿";case"published":return"已发送";case"confirmed":return"已确认";case"rejected":return"已驳回";case"untreated":return"未处理";default:return e}},b=function(){Object(m["e"])().then((function(e){i.splice(0),e.content.forEach((function(e){i.push({key:String(i.length+1),id:e.id,code:e.code,buyer:e.buyer,date:y()(e.date).format("YYYY-MM-DD"),amount:e.amount,status:l(e.status),remark:e.remark,rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){h["a"].error({message:"错误",description:e}),console.debug(e)}))},p=function(){Object(m["f"])().then((function(e){u.splice(0),e.content.forEach((function(e){u.push({key:String(u.length+1),id:e.id,code:e.code,buyer:e.buyer,date:y()(e.date).format("YYYY-MM-DD"),amount:e.amount,status:l(e.status),remark:e.remark,rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){h["a"].error({message:"错误",description:e}),console.debug(e)}))},f=function(e,t){Object(m["g"])({expCondition:e,expContent:t}).then((function(e){i.splice(0),e.content.forEach((function(e){i.push({key:String(i.length+1),id:e.id,code:e.code,buyer:e.buyer,date:y()(e.date).format("YYYY-MM-DD"),amount:e.amount,status:l(e.status),remark:e.remark,rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){h["a"].error({message:"错误",description:e}),console.debug(e)}))},j=function(e,t){Object(m["h"])({expCondition:e,expContent:t}).then((function(e){u.splice(0),e.content.forEach((function(e){u.push({key:String(u.length+1),id:e.id,code:e.code,buyer:e.buyer,date:y()(e.date).format("YYYY-MM-DD"),amount:e.amount,status:l(e.status),remark:e.remark,rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){h["a"].error({message:"错误",description:e}),console.debug(e)}))};return{currentKey:e,searchExp:a,searchType:t,searchReceivedType:n,ids:o,columns:r,souceData:i,souceReceivedData:u,rejectReasonModal:d,reason:s,textFormat:l,getAllInvoice:b,getAllReceivedInvoice:p,searchInvoiceByExp:f,searchInvoiceReceivedByExp:j}},watch:{currentKey:{handler:function(e){switch(e){case"send":this.searchType="code",this.getAllInvoice(),this.searchExp="";break;case"receive":this.searchReceivedType="code",this.getAllReceivedInvoice(),this.searchExp="";break;default:break}},immediate:!0}},methods:{setIds:function(e){var t=this;t.ids.splice(0),null!==e&&e.forEach((function(e){t.ids.push(e.id)}))},handleReceivedInvoice:function(e){var t=this,n={ids:t.ids,result:e,reason:t.reason};Object(m["b"])(n).then((function(e){t.rejectReasonModal=!1,200===e.code&&h["a"].success({message:"成功",description:"已处理"})})).catch((function(e){h["a"].error({message:"错误",description:e}),console.debug(e)}))},send:function(){var e=this;Object(m["i"])(e.ids).then((function(t){e.rejectReasonModal=!1,200===t.code&&h["a"].success({message:"成功",description:"发送成功"})})).catch((function(e){h["a"].error({message:"错误",description:e}),console.debug(e)}))},addInvoice:function(){this.$router.push({path:"/invoiceRecordDtl"})},handleSelectChange:function(e,t){this.searchType=e},onSearch:function(e){switch(this.currentKey){case"send":this.searchInvoiceByExp(this.searchType,this.searchExp);break;case"receive":this.searchInvoiceReceivedByExp(this.searchType,this.searchExp);break;default:break}}}});n("a9c8");C.render=b;t["default"]=C},"4f48":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return b})),n.d(t,"i",(function(){return h})),n.d(t,"b",(function(){return p}));var c=n("b32d"),a="http://cloud.dowaycn.com/Gateway/EblService/api/v1/invoice";function o(e){return Object(c["a"])({url:a+"/loadById",method:"get",params:e})}function r(e){return Object(c["a"])({url:a+"/loadByIdReceived",method:"get",params:e})}function i(){return Object(c["a"])({url:a+"/queryAll",method:"get"})}function u(){return Object(c["a"])({url:a+"/queryAllReceived",method:"get"})}function d(e){return Object(c["a"])({url:a+"/searchByExp",method:"post",data:e})}function s(e){return Object(c["a"])({url:a+"/searchReceivedByExp",method:"post",data:e})}function l(e){return Object(c["a"])({url:a+"/add",method:"post",data:e})}function b(e){return Object(c["a"])({url:a+"/update",method:"post",data:e})}function h(e){return Object(c["a"])({url:a+"/sendInvoice",method:"post",data:e})}function p(e){return Object(c["a"])({url:a+"/handleReceiveInvoice",method:"post",data:e})}},"50ac":function(e,t,n){"use strict";n("b550"),n("d79d")},"9a63":function(e,t,n){"use strict";var c=n("290c");c["a"].install=function(e){e.component(c["a"].name,c["a"])},t["a"]=c["a"]},a9c8:function(e,t,n){"use strict";n("da13")},da13:function(e,t,n){},e32c:function(e,t,n){"use strict";var c=n("da05");c["b"].install=function(e){e.component(c["b"].name,c["b"])},t["a"]=c["b"]}}]);