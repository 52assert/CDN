(window["webpackJsonp_cloud-ebl-app"]=window["webpackJsonp_cloud-ebl-app"]||[]).push([["views-delivery-RecordPage-vue"],{"48ba":function(e,t,n){},8418:function(e,t,n){"use strict";var c=n("c04e"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var r=c(t);r in e?a.f(e,r,o(0,n)):e[r]=n}},a13b:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return b}));var c=n("b32d"),a="http://cloud.dowaycn.com/Gateway/EblService/api/v1/delivery";function o(e){return Object(c["a"])({url:a+"/loadById",method:"get",params:e})}function r(e){return Object(c["a"])({url:a+"/loadByIdReceived",method:"get",params:e})}function i(e){return Object(c["a"])({url:a+"/generateStatement",method:"post",data:e})}function u(){return Object(c["a"])({url:a+"/queryAll",method:"get"})}function s(e){return Object(c["a"])({url:a+"/adds",method:"post",data:e})}function d(e){return Object(c["a"])({url:a+"/sendDeliveryOrder",method:"post",data:e})}function l(){return Object(c["a"])({url:a+"/searchReceivedDelivery",method:"get"})}function h(e){return Object(c["a"])({url:a+"/handleReceiveDeliveryOrder",method:"post",data:e})}function b(e){return Object(c["a"])({url:a+"/deliveryImport",method:"post",data:e})}},a434:function(e,t,n){"use strict";var c=n("23e7"),a=n("23cb"),o=n("a691"),r=n("50c4"),i=n("7b0b"),u=n("65f0"),s=n("8418"),d=n("1dde"),l=n("ae40"),h=d("splice"),b=l("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,j=9007199254740991,O="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!h||!b},{splice:function(e,t){var n,c,d,l,h,b,v=i(this),m=r(v.length),x=a(e,m),y=arguments.length;if(0===y?n=c=0:1===y?(n=0,c=m-x):(n=y-2,c=p(f(o(t),0),m-x)),m+n-c>j)throw TypeError(O);for(d=u(v,c),l=0;l<c;l++)h=x+l,h in v&&s(d,l,v[h]);if(d.length=c,n<c){for(l=x;l<m-c;l++)h=l+c,b=l+n,h in v?v[b]=v[h]:delete v[b];for(l=m;l>m-c+n;l--)delete v[l-1]}else if(n>c)for(l=m-c;l>x;l--)h=l+c-1,b=l+n-1,h in v?v[b]=v[h]:delete v[b];for(l=0;l<n;l++)v[l+x]=arguments[l+2];return v.length=m-c+n,d}})},e3f9:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["createTextVNode"])(" 发送 "),o=Object(c["createTextVNode"])(" 生成对账单 "),r=Object(c["createTextVNode"])(" 送货单号 "),i=Object(c["createTextVNode"])(" 客户名称 "),u=Object(c["createTextVNode"])(" 确认 "),s=Object(c["createTextVNode"])(" 驳回 "),d=Object(c["createTextVNode"])(" 送货单号 "),l=Object(c["createTextVNode"])(" 客户名称 "),h=Object(c["createTextVNode"])(" Custom ");function b(e,t,n,b,f,p){var j=Object(c["resolveComponent"])("a-button"),O=Object(c["resolveComponent"])("a-col"),v=Object(c["resolveComponent"])("a-select-option"),m=Object(c["resolveComponent"])("a-select"),x=Object(c["resolveComponent"])("a-input-search"),y=Object(c["resolveComponent"])("a-input-group"),C=Object(c["resolveComponent"])("a-row"),g=Object(c["resolveComponent"])("BaseTableEditable"),w=Object(c["resolveComponent"])("a-tab-pane"),D=Object(c["resolveComponent"])("a-tabs"),V=Object(c["resolveComponent"])("a-textarea"),N=Object(c["resolveComponent"])("a-modal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(D,{onChange:e.query},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{key:"send",tab:"我发送的"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{class:"header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{disabled:0===e.ids.length,type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:e.send},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["disabled","onClick"]),Object(c["createVNode"])(j,{type:"primary",onClick:e.generateStatement,style:{margin:"0px 10px 10px 10px"}},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["onClick"])]})),_:1}),Object(c["createVNode"])(O,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{compact:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{value:e.searchType1,"onUpdate:value":t[1]||(t[1]=function(t){return e.searchType1=t}),placeholder:"选择搜索条件",style:{width:"110px"},onChange:e.handleSelectChange},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{value:"1"},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createVNode"])(v,{value:"2"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]})),_:1},8,["value","onChange"]),Object(c["createVNode"])(x,{value:e.searchExp,"onUpdate:value":t[2]||(t[2]=function(t){return e.searchExp=t}),style:{width:"80%"},placeholder:"请输入搜索内容","enter-button":"",onSearch:e.onSearch},null,8,["value","onSearch"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(g,{columns:e.columns,sourceData:e.souceData,destPath:"/deliveryRecordDtl",type:"send",onSelected:e.setIds},null,8,["columns","sourceData","onSelected"])]})),_:1}),Object(c["createVNode"])(w,{key:"receive",tab:"我接收的"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{class:"header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:t[3]||(t[3]=function(t){return e.handleReceivedDeliveryOrder("adopt")})},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(j,{type:"primary",style:{margin:"0px 10px 10px 10px"},onClick:t[4]||(t[4]=function(t){return e.rejectReasonModal=!0})},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]})),_:1}),Object(c["createVNode"])(O,{span:12},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{compact:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{value:e.searchType2,"onUpdate:value":t[5]||(t[5]=function(t){return e.searchType2=t}),placeholder:"选择搜索条件",style:{width:"110px"},onChange:e.handleSelectChange},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{value:"1"},{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(v,{value:"2"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]})),_:1},8,["value","onChange"]),Object(c["createVNode"])(x,{value:e.searchExp,"onUpdate:value":t[6]||(t[6]=function(t){return e.searchExp=t}),style:{width:"80%"},placeholder:"请输入搜索内容","enter-button":"",onSearch:e.onSearch},{enterButton:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(j,{style:{background:"#5259E5",border:"0px"}},{default:Object(c["withCtx"])((function(){return[h]})),_:1})]})),_:1},8,["value","onSearch"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(g,{columns:e.columns,sourceData:e.souceReceivedData,destPath:"/deliveryRecordDtl",type:"receive",onSelected:e.setIds},null,8,["columns","sourceData","onSelected"])]})),_:1})]})),_:1},8,["onChange"]),Object(c["createVNode"])(N,{visible:e.rejectReasonModal,"onUpdate:visible":t[8]||(t[8]=function(t){return e.rejectReasonModal=t}),centered:"",closable:!1,"mask-closable":!1,onOk:t[9]||(t[9]=function(t){return e.handleReceivedDeliveryOrder("reject")}),okText:"确定",cancelText:"取消"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{value:e.reason,"onUpdate:value":t[7]||(t[7]=function(t){return e.reason=t}),placeholder:"请输入驳回原因",rows:8},null,8,["value"])]})),_:1},8,["visible"])],64)}n("4160"),n("a434"),n("159b"),n("368b");var f=n("56cd"),p=(n("04f3"),n("ed3b")),j=(n("1815"),n("e32c")),O=(n("50ac"),n("9a63")),v=(n("e1f5"),n("5efb")),m=(n("1c85"),n("ccb9")),x=n("9096"),y=n("a13b"),C=n("5f70"),g=n.n(C),w=Object(c["defineComponent"])({components:{BaseTableEditable:x["a"],"a-tabs":m["a"],"a-button":v["a"],"a-row":O["a"],"a-col":j["a"],"a-modal":p["a"]},setup:function(){var e=Object(c["reactive"])([{title:"序号",dataIndex:"key",key:"key"},{title:"送货单号",dataIndex:"code",key:"code"},{title:"收货方名称",dataIndex:"shipTo",key:"shipTo",ellipsis:!0},{title:"收货方联系人",dataIndex:"contacts",key:"contacts",ellipsis:!0},{title:"联系方式",dataIndex:"tel",key:"tel",ellipsis:!0},{title:"送货金额",dataIndex:"amount",key:"amount",ellipsis:!0},{title:"送货日期",dataIndex:"deliveryDate",key:"deliveryDate",ellipsis:!0},{title:"状态",dataIndex:"status",key:"status",ellipsis:!0},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),t=Object(c["reactive"])([]),n=Object(c["reactive"])([]),a=Object(c["reactive"])([]),o=Object(c["ref"])(!1),r=Object(c["ref"])(""),i=function(e){switch(e){case"draft":return"草稿";case"published":return"已发送";case"confirmed":return"已确认";case"rejected":return"已驳回";case"untreated":return"未处理";default:return e}};return Object(c["onMounted"])((function(){Object(y["g"])().then((function(e){e.content.forEach((function(e){t.push({key:String(t.length+1),id:e.id,code:e.code,shipTo:e.shipTo,contacts:e.contacts,tel:e.tel,amount:e.amount,orderDate:g()(e.orderDate).format("YYYY-MM-DD"),deliveryDate:g()(e.deliveryDate).format("YYYY-MM-DD"),status:i(e.status),rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)}))})),{columns:e,souceData:t,ids:a,souceReceivedData:n,rejectReasonModal:o,reason:r,textFormat:i}},data:function(){return{searchExp:"",searchType1:"1",searchType2:"1",selectByCode:!1,selectByCustName:!1}},methods:{query:function(e){var t=this;"send"===e?Object(y["g"])().then((function(e){t.souceData.splice(0),e.content.forEach((function(e){t.souceData.push({key:String(t.souceData.length+1),id:e.id,code:e.code,shipTo:e.shipTo,contacts:e.contacts,tel:e.tel,amount:e.amount,orderDate:g()(e.orderDate).format("YYYY-MM-DD"),deliveryDate:g()(e.deliveryDate).format("YYYY-MM-DD"),status:t.textFormat(e.status),rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)})):"receive"===e&&Object(y["h"])().then((function(e){t.souceReceivedData.splice(0),e.content.forEach((function(e){t.souceReceivedData.push({key:String(t.souceReceivedData.length+1),id:e.id,code:e.code,shipTo:e.shipTo,contacts:e.contacts,tel:e.tel,amount:e.amount,orderDate:g()(e.orderDate).format("YYYY-MM-DD"),deliveryDate:g()(e.deliveryDate).format("YYYY-MM-DD"),status:t.textFormat(e.status),rowVersion:e.rowVersion,authorizationCode:e.authorizationCode})}))})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)}))},generateStatement:function(){Object(y["c"])(this.ids).then((function(e){200===e.code&&f["a"].success({message:"成功",description:"已成功生成对账单"})})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)}))},setIds:function(e){var t=this;this.ids=[],e.forEach((function(e){t.ids.push(e.id)}))},handleReceivedInvoice:function(e){var t=this,n={ids:this.ids,result:e,reason:this.reason};Object(y["e"])(n).then((function(e){t.rejectReasonModal=!1,200===e.code&&f["a"].success({message:"成功",description:"接收成功"})})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)}))},send:function(){Object(y["i"])(this.ids).then((function(e){200===e.code&&f["a"].success({message:"成功",description:"发送成功"})})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)}))},handleSelectChange:function(){"1"==this.searchType1?this.selectByCode=!0:this.selectByCustName=!0},onSearch:function(e){console.log("use value",e)},handleReceivedPurchaseOrder:function(e){var t=this,n={ids:this.ids,result:e,reason:this.reason};Object(y["e"])(n).then((function(e){t.rejectReasonModal=!1,200===e.code&&f["a"].success({message:"成功",description:"接收成功"})})).catch((function(e){f["a"].error({message:"错误",description:e}),console.debug(e)}))}}});n("ee6a");w.render=b;t["default"]=w},ee6a:function(e,t,n){"use strict";n("48ba")}}]);