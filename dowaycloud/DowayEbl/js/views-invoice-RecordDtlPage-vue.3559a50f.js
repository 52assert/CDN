(window["webpackJsonp_cloud-ebl-app"]=window["webpackJsonp_cloud-ebl-app"]||[]).push([["views-invoice-RecordDtlPage-vue"],{1148:function(e,t,n){"use strict";var c=n("a691"),o=n("1d80");e.exports="".repeat||function(e){var t=String(o(this)),n="",i=c(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},1815:function(e,t,n){"use strict";n("b550"),n("d79d")},"38cf":function(e,t,n){var c=n("23e7"),o=n("1148");c({target:"String",proto:!0},{repeat:o})},"3f6c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n("b32d"),o="http://cloud.dowaycn.com/Gateway/CenterService/api/v1/tenant";function i(e){return Object(c["a"])({url:o+"/loadById",method:"get",params:e})}},"4f48":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"c",(function(){return b}));var c=n("b32d"),o="http://cloud.dowaycn.com/Gateway/EblService/api/v1/invoice";function i(e){return Object(c["a"])({url:o+"/loadById",method:"get",params:e})}function a(e){return Object(c["a"])({url:o+"/loadByIdReceived",method:"get",params:e})}function r(){return Object(c["a"])({url:o+"/queryAll",method:"get"})}function s(){return Object(c["a"])({url:o+"/queryAllReceived",method:"get"})}function u(e){return Object(c["a"])({url:o+"/add",method:"post",data:e})}function l(e){return Object(c["a"])({url:o+"/update",method:"post",data:e})}function d(e){return Object(c["a"])({url:o+"/sendInvoice",method:"post",data:e})}function b(e){return Object(c["a"])({url:o+"/handleReceiveInvoice",method:"post",data:e})}},"50ac":function(e,t,n){"use strict";n("b550"),n("d79d")},"5ed4":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"d",(function(){return v}));var c=n("b32d"),o="http://cloud.dowaycn.com/Gateway/EblService/api/v1/statement";function i(e){return Object(c["a"])({url:o+"/loadById",method:"get",params:e})}function a(e){return Object(c["a"])({url:o+"/loadByIdReceived",method:"get",params:e})}function r(){return Object(c["a"])({url:o+"/queryAll",method:"get"})}function s(){return Object(c["a"])({url:o+"/queryAllReceived",method:"get"})}function u(e){return Object(c["a"])({url:o+"/generateInvoice",method:"post",data:e})}function l(e){return Object(c["a"])({url:o+"/add",method:"post",data:e})}function d(e){return Object(c["a"])({url:o+"/update",method:"post",data:e})}function b(e){return Object(c["a"])({url:o+"/sendStatement",method:"post",data:e})}function v(e){return Object(c["a"])({url:o+"/handleReceivedStatement",method:"post",data:e})}},"67cd":function(e,t,n){},"74d2":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r}));var c=n("b32d"),o="http://cloud.dowaycn.com/Gateway/BaseService/api/v1/customer";function i(e){return Object(c["a"])({url:o+"/loadByName",method:"get",params:e})}function a(e){return Object(c["a"])({url:o+"/queryAllContacts",method:"get",params:e})}function r(){return Object(c["a"])({url:o+"/query",method:"get"})}},"7db0":function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").find,i=n("44d2"),a=n("ae40"),r="find",s=!0,u=a(r);r in[]&&Array(1)[r]((function(){s=!1})),c({target:"Array",proto:!0,forced:s||!u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(r)},8418:function(e,t,n){"use strict";var c=n("c04e"),o=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var a=c(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},"8c7d":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),o=Object(c["withScopeId"])("data-v-579c6ed4");Object(c["pushScopeId"])("data-v-579c6ed4");var i={class:"header"},a=Object(c["createTextVNode"])("发送"),r=Object(c["createTextVNode"])("确认"),s=Object(c["createTextVNode"])("驳回"),u=Object(c["createTextVNode"])("保存"),l=Object(c["createTextVNode"])("编辑"),d=Object(c["createTextVNode"])("放弃"),b=Object(c["createVNode"])("i",{class:"iconfont icon-shangchuan",style:{"font-size":"35px",color:"#212240",float:"right",margin:"-12px 15px 0px 0px"}},null,-1),v={class:"form"},f=Object(c["createTextVNode"])("基本信息"),p=Object(c["createTextVNode"])("发票代码"),m=Object(c["createTextVNode"])("开票日期"),h=Object(c["createTextVNode"])("备注"),j=Object(c["createVNode"])("br",null,null,-1),O=Object(c["createTextVNode"])("购买方"),y=Object(c["createTextVNode"])("公司地址"),w=Object(c["createTextVNode"])("联系电话"),V=Object(c["createTextVNode"])("纳税号"),x=Object(c["createTextVNode"])("开户行"),g=Object(c["createTextVNode"])("银行账户"),N=Object(c["createVNode"])("br",null,null,-1),S=Object(c["createTextVNode"])("销售方"),k=Object(c["createTextVNode"])("公司地址"),T=Object(c["createTextVNode"])("联系电话"),D=Object(c["createTextVNode"])("纳税号"),_=Object(c["createTextVNode"])("开户行"),R=Object(c["createTextVNode"])("银行账户"),I={class:"invoiceInfo"},A=Object(c["createTextVNode"])("发票详情"),C=Object(c["createTextVNode"])("添加项目"),B=Object(c["createTextVNode"])("未税金额：1000.00"),E=Object(c["createTextVNode"])("税额：0.00"),U=Object(c["createTextVNode"])("总计：1000.00"),L={class:"statementInfo"},P=Object(c["createTextVNode"])("对账单详情"),q=Object(c["createTextVNode"])("添加项目"),z={style:{height:"475px",overflow:"auto"}};Object(c["popScopeId"])();var F=o((function(e,t,n,F,M,G){var H=Object(c["resolveComponent"])("a-button"),Y=Object(c["resolveComponent"])("a-row"),$=Object(c["resolveComponent"])("a-col"),J=Object(c["resolveComponent"])("a-input"),W=Object(c["resolveComponent"])("a-date-picker"),K=Object(c["resolveComponent"])("a-select-option"),Q=Object(c["resolveComponent"])("a-select"),X=Object(c["resolveComponent"])("BaseTableEditable"),Z=Object(c["resolveComponent"])("a-textarea"),ee=Object(c["resolveComponent"])("a-modal"),te=Object(c["resolveComponent"])("a-table");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",i,[Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{background:"#5259e5",color:"#fff",margin:"0px 10px"},onClick:e.send},{default:o((function(){return[a]})),_:1},8,["onClick"]),[[c["vShow"],"send"===e.type&&"string"===typeof this.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{background:"#5259e5",color:"#fff",margin:"0px 10px"},onClick:t[1]||(t[1]=function(t){return e.handleReceivedInvoice("adopt")})},{default:o((function(){return[r]})),_:1},512),[[c["vShow"],"receive"===e.type&&"string"===typeof this.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{background:"#5259e5",color:"#fff",margin:"0px 10px"},onClick:t[2]||(t[2]=function(t){return e.rejectReasonVisible=!0})},{default:o((function(){return[s]})),_:1},512),[[c["vShow"],"receive"===e.type&&"string"===typeof this.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{background:"#5259e5",color:"#fff",margin:"0px 10px"},onClick:e.save},{default:o((function(){return[u]})),_:1},8,["onClick"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{color:"#5259e5",border:"1px solid #5259e5"},onClick:e.editDtl},{default:o((function(){return[l]})),_:1},8,["onClick"]),[[c["vShow"],"send"===e.type&&"view"===e.sysStatus&&"string"===typeof this.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{color:"#5259e5",border:"1px solid #5259e5"},onClick:e.cancelEdit},{default:o((function(){return[d]})),_:1},8,["onClick"]),[[c["vShow"],"send"===e.type&&"edit"===e.sysStatus]]),b]),Object(c["createVNode"])("div",v,[Object(c["createVNode"])(Y,{class:"title"},{default:o((function(){return[f]})),_:1}),Object(c["createVNode"])(Y,{style:{margin:"10px 0px"}},{default:o((function(){return[Object(c["createVNode"])($,{span:2,class:"text"},{default:o((function(){return[p]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.code),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.code,"onUpdate:value":t[3]||(t[3]=function(t){return e.invoice.code=t}),placeholder:"请输入发票代码"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[m]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.dateFormat(e.invoice.date)),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(W,{value:e.invoice.date,"onUpdate:value":t[4]||(t[4]=function(t){return e.invoice.date=t}),placeholder:"请选择日期",style:{width:"100%"}},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[h]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.remark),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.remark,"onUpdate:value":t[5]||(t[5]=function(t){return e.invoice.remark=t}),placeholder:"请输入备注"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1})]})),_:1}),j,Object(c["createVNode"])(Y,{style:{margin:"10px 0px"}},{default:o((function(){return[Object(c["createVNode"])($,{span:2,class:"text"},{default:o((function(){return[O]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.buyer),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(Q,{"show-search":"",value:e.invoice.buyer,"onUpdate:value":t[6]||(t[6]=function(t){return e.invoice.buyer=t}),placeholder:"请输入购买方名称",style:{width:"100%"},"default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":"无匹配项",onSearch:e.handleCustomerSearch,onSelect:e.handleCustomerSelect},{default:o((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.customers,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(K,{key:e.id},{default:o((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]})),_:1},8,["value","onSearch","onSelect"])],512),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[y]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.buyerAddress),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.buyerAddress,"onUpdate:value":t[7]||(t[7]=function(t){return e.invoice.buyerAddress=t}),placeholder:"请输入公司地址"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[w]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.buyerTel),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.buyerTel,"onUpdate:value":t[8]||(t[8]=function(t){return e.invoice.buyerTel=t}),placeholder:"请输入联系电话"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1})]})),_:1}),Object(c["createVNode"])(Y,{style:{margin:"10px 0px"}},{default:o((function(){return[Object(c["createVNode"])($,{span:2,class:"text"},{default:o((function(){return[V]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.buyerIdentification),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.buyerIdentification,"onUpdate:value":t[9]||(t[9]=function(t){return e.invoice.buyerIdentification=t}),placeholder:"请输入纳税号"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[x]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.buyerRegBank),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.buyerRegBank,"onUpdate:value":t[10]||(t[10]=function(t){return e.invoice.buyerRegBank=t}),placeholder:"请输入开户行"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[g]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.buyerAccount),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.buyerAccount,"onUpdate:value":t[11]||(t[11]=function(t){return e.invoice.buyerAccount=t}),placeholder:"请输入银行账户"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1})]})),_:1}),N,Object(c["createVNode"])(Y,{style:{margin:"10px 0px"}},{default:o((function(){return[Object(c["createVNode"])($,{span:2,class:"text"},{default:o((function(){return[S]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.seller),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.seller,"onUpdate:value":t[12]||(t[12]=function(t){return e.invoice.seller=t}),placeholder:"请输入销售方"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[k]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.sellerAddress),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.sellerAddress,"onUpdate:value":t[13]||(t[13]=function(t){return e.invoice.sellerAddress=t}),placeholder:"请输入公司地址"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[T]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.sellerTel),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.sellerTel,"onUpdate:value":t[14]||(t[14]=function(t){return e.invoice.sellerTel=t}),placeholder:"请输入联系电话"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1})]})),_:1}),Object(c["createVNode"])(Y,{style:{margin:"10px 0px"}},{default:o((function(){return[Object(c["createVNode"])($,{span:2,class:"text"},{default:o((function(){return[D]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.sellerIdentification),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.sellerIdentification,"onUpdate:value":t[15]||(t[15]=function(t){return e.invoice.sellerIdentification=t}),placeholder:"请输入纳税号"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[_]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.sellerRegBank),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.sellerRegBank,"onUpdate:value":t[16]||(t[16]=function(t){return e.invoice.sellerRegBank=t}),placeholder:"请输入开户行"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:1,span:2,class:"text"},{default:o((function(){return[R]})),_:1}),Object(c["createVNode"])($,{span:5,class:"spanText"},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.invoice.sellerAccount),513),[[c["vShow"],"view"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])(J,{value:e.invoice.sellerAccount,"onUpdate:value":t[17]||(t[17]=function(t){return e.invoice.sellerAccount=t}),placeholder:"请输入银行账户"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1})]})),_:1})]),Object(c["createVNode"])("div",I,[Object(c["createVNode"])(Y,{class:"title"},{default:o((function(){return[A]})),_:1}),Object(c["createVNode"])(X,{columns:e.invoiceColumns,sourceData:e.invoiceDtl,editableCols:e.editableCols,onRowDelete:e.rowDeleteHandler,onCancelEdit:e.cancelEditHandler},null,8,["columns","sourceData","editableCols","onRowDelete","onCancelEdit"]),Object(c["createVNode"])(Y,{style:{"margin-top":"10px"}},{default:o((function(){return[Object(c["createVNode"])($,{span:3},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{color:"#212240",border:"1px solid #212240"},onClick:e.addInvoiceDtl},{default:o((function(){return[C]})),_:1},8,["onClick"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])($,{offset:12,span:3,style:{"text-align":"center"}},{default:o((function(){return[B]})),_:1}),Object(c["createVNode"])($,{span:3,style:{"text-align":"center"}},{default:o((function(){return[E]})),_:1}),Object(c["createVNode"])($,{span:3,style:{"text-align":"center"}},{default:o((function(){return[U]})),_:1})]})),_:1})]),Object(c["createVNode"])("div",L,[Object(c["createVNode"])(Y,{class:"title"},{default:o((function(){return[P]})),_:1}),Object(c["createVNode"])(X,{columns:e.statementColumns,sourceData:e.statements},null,8,["columns","sourceData"]),Object(c["createVNode"])(Y,{style:{"margin-top":"10px"}},{default:o((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(H,{style:{color:"#212240",border:"1px solid #212240"},onClick:e.addStatement},{default:o((function(){return[q]})),_:1},8,["onClick"]),[[c["vShow"],"edit"===e.sysStatus]])]})),_:1})]),Object(c["createVNode"])(ee,{visible:e.rejectReasonVisible,"onUpdate:visible":t[19]||(t[19]=function(t){return e.rejectReasonVisible=t}),centered:"",closable:!1,"mask-closable":!1,onOk:t[20]||(t[20]=function(t){return e.handleReceivedInvoice("reject")}),okText:"确定",cancelText:"取消"},{default:o((function(){return[Object(c["createVNode"])(Z,{value:e.reason,"onUpdate:value":t[18]||(t[18]=function(t){return e.reason=t}),placeholder:"请输入驳回原因",rows:8},null,8,["value"])]})),_:1},8,["visible"]),Object(c["createVNode"])(ee,{visible:e.statementShowVisible,"onUpdate:visible":t[21]||(t[21]=function(t){return e.statementShowVisible=t}),title:"请选择相应的对账单",centered:"",width:"1080px",closable:!1,"mask-closable":!1,onOk:e.selectStatement,okText:"确定",cancelText:"取消"},{default:o((function(){return[Object(c["createVNode"])("div",z,[Object(c["createVNode"])(te,{columns:e.statementColumns,"data-source":e.statementData,pagination:!1,"row-selection":e.rowSelection},null,8,["columns","data-source","row-selection"])])]})),_:1},8,["visible","onOk"])],64)})),M=(n("7db0"),n("4160"),n("a434"),n("38cf"),n("159b"),n("368b"),n("56cd")),G=(n("02cf"),n("9839")),H=(n("519e"),n("0bb7")),Y=(n("a71a"),n("b558")),$=(n("04f3"),n("ed3b")),J=(n("1815"),n("e32c")),W=(n("50ac"),n("9a63")),K=(n("e1f5"),n("5efb")),Q=n("9096"),X=n("c1df"),Z=n.n(X),ee=n("4f48"),te=n("5ed4"),ne=n("74d2"),ce=n("3f6c"),oe=Object(c["defineComponent"])({components:{"a-button":K["a"],"a-row":W["a"],"a-col":J["a"],"a-modal":$["a"],"a-input":Y["a"],"a-date-picker":H["a"],"a-select":G["b"],BaseTableEditable:Q["a"]},setup:function(){var e=Object(c["ref"])("edit"),t=Object(c["reactive"])([{title:"序号",dataIndex:"key",key:"key",width:70},{title:"服务名称",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"规格型号",dataIndex:"model",key:"model",ellipsis:!0,slots:{customRender:"model"}},{title:"计量单位",dataIndex:"uom",key:"uom",ellipsis:!0,slots:{customRender:"uom"}},{title:"数量",dataIndex:"num",key:"num",ellipsis:!0,slots:{customRender:"num"}},{title:"单价",dataIndex:"price",key:"price",ellipsis:!0,slots:{customRender:"price"}},{title:"税率",dataIndex:"taxRate",key:"taxRate",ellipsis:!0,slots:{customRender:"taxRate"}},{title:"税额",dataIndex:"taxAmount",key:"taxAmount",ellipsis:!0,slots:{customRender:"taxAmount"}},{title:"价税合计",dataIndex:"total",key:"total",ellipsis:!0,slots:{customRender:"total"}},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),n=Object(c["reactive"])({id:"",code:"",date:Z()(),amount:0,buyer:"",buyerIdentification:"",buyerAddress:"",buyerTel:"",buyerRegBank:"",buyerAccount:"",seller:"",sellerIdentification:"",sellerAddress:"",sellerTel:"",sellerRegBank:"",sellerAccount:"",remark:"",status:"untreated",authorizationCode:"",businessLicense:"",senderBusinessLicense:"",rowVersion:"",statements:[],invoiceDetails:[]}),o=["name","model","uom","num","price","taxRate","taxAmount","total"],i=Object(c["reactive"])([]),a=function(){i.push({key:String(i.length+1),name:"",model:"",uom:"",num:"",price:"",taxRate:"",taxAmount:"",total:"",rowVersion:""})},r=Object(c["reactive"])([{title:"序号",dataIndex:"key",key:"key",width:70},{title:"对账单号",dataIndex:"code",key:"code"},{title:"客户名称",dataIndex:"custName",key:"custName",ellipsis:!0},{title:"开始时间",dataIndex:"startTime",key:"startTime",ellipsis:!0},{title:"结束时间",dataIndex:"endTime",key:"endTime",ellipsis:!0},{title:"对账方",dataIndex:"statementParty",key:"statementParty",ellipsis:!0},{title:"对账金额",dataIndex:"amount",key:"amount",ellipsis:!0},{title:"已收金额",dataIndex:"received",key:"received",ellipsis:!0},{title:"欠款金额",dataIndex:"unreceived",key:"unreceived",ellipsis:!0},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),s=Object(c["reactive"])([]),u=Object(c["reactive"])([]),l=Object(c["reactive"])([]),d=[],b=Object(c["ref"])(!1),v=Object(c["reactive"])({onChange:function(e,t){void 0!==t&&(d=t)}}),f=function(){b.value=!0,d=[],Object(te["g"])().then((function(e){e.content.forEach((function(e){s.push({key:String(s.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})}))})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},p=function(e){u.splice(e,1)},m=function(){l=d,l.forEach((function(e){u.push({key:String(u.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})})),b.value=!1},h=Object(c["ref"])(!1),j=Object(c["ref"])(""),O=function(){e.value="edit"},y=function(e){i.forEach((function(t,n,c){t.key===e&&c.splice(n,1)}))},w=function(e){i.forEach((function(t,n,c){t.key===e&&(c[n].name="",c[n].model="",c[n].uom="",c[n].num="",c[n].price="",c[n].taxRate="",c[n].taxAmount="",c[n].total="")}))},V=function(){$["a"].warning({title:"请确认",content:"确定要发送当前送货单吗？",onOk:function(){Object(ee["g"])([n.id]).then((function(e){200===e.code&&M["a"].success({message:"成功",description:"发送成功"})})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},onCancel:function(){}})},x=[],g=function(e){x=[e,e.repeat(2),e.repeat(3)]};return{sysStatus:e,invoiceColumns:t,invoice:n,editableCols:o,invoiceDtl:i,addInvoiceDtl:a,statementColumns:r,statementData:s,statements:u,statementShowVisible:b,rowSelection:v,addStatement:f,deleteStatement:p,selectStatement:m,reason:j,rejectReasonVisible:h,editDtl:O,rowDeleteHandler:y,cancelEditHandler:w,send:V,dataSource:x,onSearch:g}},data:function(){return{id:this.$route.query.id,type:this.$route.query.type,customers:[]}},created:function(){"string"===typeof this.id&&"string"===typeof this.type?(this.getData(this.id,this.type),this.sysStatus="view"):(this.sysStatus="edit",this.loadTenant())},methods:{handleCustomerSelect:function(e){var t=this.customers.find((function(t){return t.id===e}));this.invoice.buyerIdentification=t.businessLicense,this.invoice.buyerAddress=t.address,this.invoice.buyerTel=t.tel,this.invoice.buyerRegBank=t.regBank,this.invoice.buyerAccount=t.regBankAccount,this.invoice.authorizationCode=t.authorizationCode,this.invoice.businessLicense=t.businessLicense},handleCustomerSearch:function(e){var t=this;t.customers=[],Object(ne["a"])({name:e}).then((function(e){t.customers=e.content})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},loadTenant:function(){var e=this;Object(ce["a"])({id:localStorage.getItem("doway_cloud_tenant_id")}).then((function(t){200===t.code&&(e.invoice.seller=t.content.name,e.invoice.sellerIdentification=t.content.creditCode,e.invoice.sellerAddress=t.content.address,e.invoice.sellerTel=t.content.tel,e.invoice.sellerRegBank=t.content.regBank,e.invoice.sellerAccount=t.content.account,e.invoice.businessLicense=t.content.businessLicense,e.invoice.senderBusinessLicense=t.content.creditCode)})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},cancelEdit:function(){"string"===typeof this.id?this.sysStatus="view":this.$router.push({path:"/invoiceRecord"})},handleReceivedInvoice:function(e){var t=this,n={ids:[t.invoice.id],result:e,reason:t.reason};Object(ee["c"])(n).then((function(e){t.rejectReasonVisible=!1,200===e.code&&M["a"].success({message:"成功",description:"接收成功"})})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},textFormat:function(e){switch(e){case"draft":return"草稿";case"published":return"已发布";case"confirmed":return"已确认";case"rejected":return"已驳回";case"untreated":return"未处理";default:return e}},getData:function(e,t){var n=this;"send"===t?Object(ee["b"])({id:e}).then((function(e){n.invoice.id=e.content.id,n.invoice.code=e.content.code,n.invoice.date=e.content.date,n.invoice.amount=e.content.amount,n.invoice.buyer=e.content.buyer,n.invoice.buyerIdentification=e.content.buyerIdentification,n.invoice.buyerAddress=e.content.buyerAddress,n.invoice.buyerTel=e.content.buyerTel,n.invoice.buyerRegBank=e.content.buyerRegBank,n.invoice.buyerAccount=e.content.buyerAccount,n.invoice.seller=e.content.seller,n.invoice.sellerIdentification=e.content.sellerIdentification,n.invoice.sellerAddress=e.content.sellerAddress,n.invoice.sellerTel=e.content.sellerTel,n.invoice.sellerRegBank=e.content.sellerRegBank,n.invoice.sellerAccount=e.content.sellerAccount,n.invoice.remark=e.content.remark,n.invoice.status=n.textFormat(e.content.status),n.invoice.authorizationCode=e.content.authorizationCode,n.invoice.businessLicense=e.content.businessLicense,n.invoice.senderBusinessLicense=e.content.senderBusinessLicense,n.invoice.rowVersion=e.content.rowVersion,e.content.invoiceDetails.forEach((function(e){n.invoiceDtl.push({key:String(n.invoiceDtl.length+1),name:e.name,model:e.model,uom:e.uom,num:e.num,price:e.price,taxRate:e.taxRate,taxAmount:e.taxAmount,total:e.total,rowVersion:e.rowVersion})})),e.content.statements.forEach((function(e){n.statements.push({key:String(n.statements.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})}))})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)})):Object(ee["d"])({id:e}).then((function(e){n.invoice.id=e.content.id,n.invoice.code=e.content.code,n.invoice.date=e.content.date,n.invoice.amount=e.content.amount,n.invoice.buyer=e.content.buyer,n.invoice.buyerIdentification=e.content.buyerIdentification,n.invoice.buyerAddress=e.content.buyerAddress,n.invoice.buyerTel=e.content.buyerTel,n.invoice.buyerRegBank=e.content.buyerRegBank,n.invoice.buyerAccount=e.content.buyerAccount,n.invoice.seller=e.content.seller,n.invoice.sellerIdentification=e.content.sellerIdentification,n.invoice.sellerAddress=e.content.sellerAddress,n.invoice.sellerTel=e.content.sellerTel,n.invoice.sellerRegBank=e.content.sellerRegBank,n.invoice.sellerAccount=e.content.sellerAccount,n.invoice.remark=e.content.remark,n.invoice.status=n.textFormat(e.content.status),n.invoice.authorizationCode=e.content.authorizationCode,n.invoice.businessLicense=e.content.businessLicense,n.invoice.senderBusinessLicense=e.content.senderBusinessLicense,n.invoice.rowVersion=e.content.rowVersion,e.content.invoiceDetailReceiveds.forEach((function(e){n.invoiceDtl.push({key:String(n.invoiceDtl.length+1),name:e.name,model:e.model,uom:e.uom,num:e.num,price:e.price,taxRate:e.taxRate,taxAmount:e.taxAmount,total:e.total,rowVersion:e.rowVersion})})),e.content.statementReceiveds.forEach((function(e){n.statements.push({key:String(n.statements.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})}))})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},save:function(){var e=this;e.invoice.statements=e.statements,e.invoice.invoiceDetails=e.invoiceDtl;var t=e.invoice;"string"===typeof e.id?Object(ee["h"])(t).then((function(t){200===t.code&&(e.sysStatus="view")})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)})):Object(ee["a"])(t).then((function(t){200===t.code&&(e.sysStatus="view")})).catch((function(e){M["a"].error({message:"错误",description:e}),console.debug(e)}))},dateFormat:function(e){return Z()(e).format("YYYY-MM-DD")}}});n("e2d9");oe.render=F,oe.__scopeId="data-v-579c6ed4";t["default"]=oe},"9a63":function(e,t,n){"use strict";var c=n("290c");c["a"].install=function(e){e.component(c["a"].name,c["a"])},t["a"]=c["a"]},a434:function(e,t,n){"use strict";var c=n("23e7"),o=n("23cb"),i=n("a691"),a=n("50c4"),r=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),b=l("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!b||!v},{splice:function(e,t){var n,c,l,d,b,v,j=r(this),O=a(j.length),y=o(e,O),w=arguments.length;if(0===w?n=c=0:1===w?(n=0,c=O-y):(n=w-2,c=p(f(i(t),0),O-y)),O+n-c>m)throw TypeError(h);for(l=s(j,c),d=0;d<c;d++)b=y+d,b in j&&u(l,d,j[b]);if(l.length=c,n<c){for(d=y;d<O-c;d++)b=d+c,v=d+n,b in j?j[v]=j[b]:delete j[v];for(d=O;d>O-c+n;d--)delete j[d-1]}else if(n>c)for(d=O-c;d>y;d--)b=d+c-1,v=d+n-1,b in j?j[v]=j[b]:delete j[v];for(d=0;d<n;d++)j[d+y]=arguments[d+2];return j.length=O-c+n,l}})},b0c0:function(e,t,n){var c=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,r=/^\s*function ([^ (]*)/,s="name";c&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(r)[1]}catch(e){return""}}})},e2d9:function(e,t,n){"use strict";n("67cd")},e32c:function(e,t,n){"use strict";var c=n("da05");c["b"].install=function(e){e.component(c["b"].name,c["b"])},t["a"]=c["b"]}}]);