(window["webpackJsonp_cloud-ebl-app"]=window["webpackJsonp_cloud-ebl-app"]||[]).push([["views-invoice-RecordDtlPage-vue"],{1148:function(e,t,n){"use strict";var i=n("a691"),o=n("1d80");e.exports="".repeat||function(e){var t=String(o(this)),n="",c=i(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(n+=t);return n}},"3f6c":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("b32d"),o="http://cloud.dowaycn.com/Gateway/CenterService/api/v1/tenant";function c(e){return Object(i["a"])({url:o+"/loadById",method:"get",params:e})}},"408a":function(e,t,n){var i=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=i(e))throw TypeError("Incorrect invocation");return+e}},"455d":function(e,t,n){},"4f48":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"i",(function(){return v})),n.d(t,"b",(function(){return m}));var i=n("b32d"),o="http://cloud.dowaycn.com/Gateway/EblService/api/v1/invoice";function c(e){return Object(i["a"])({url:o+"/loadById",method:"get",params:e})}function r(e){return Object(i["a"])({url:o+"/loadByIdReceived",method:"get",params:e})}function a(){return Object(i["a"])({url:o+"/queryAll",method:"get"})}function s(){return Object(i["a"])({url:o+"/queryAllReceived",method:"get"})}function u(e){return Object(i["a"])({url:o+"/searchByExp",method:"post",data:e})}function l(e){return Object(i["a"])({url:o+"/searchReceivedByExp",method:"post",data:e})}function d(e){return Object(i["a"])({url:o+"/add",method:"post",data:e})}function b(e){return Object(i["a"])({url:o+"/update",method:"post",data:e})}function v(e){return Object(i["a"])({url:o+"/sendInvoice",method:"post",data:e})}function m(e){return Object(i["a"])({url:o+"/handleReceiveInvoice",method:"post",data:e})}},"5ed4":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return f}));var i=n("b32d"),o="http://cloud.dowaycn.com/Gateway/EblService/api/v1/statement";function c(e){return Object(i["a"])({url:o+"/loadById",method:"get",params:e})}function r(e){return Object(i["a"])({url:o+"/loadByIdReceived",method:"get",params:e})}function a(){return Object(i["a"])({url:o+"/queryAll",method:"get"})}function s(){return Object(i["a"])({url:o+"/queryAllReceived",method:"get"})}function u(e){return Object(i["a"])({url:o+"/generateInvoice",method:"post",data:e})}function l(e){return Object(i["a"])({url:o+"/add",method:"post",data:e})}function d(e){return Object(i["a"])({url:o+"/update",method:"post",data:e})}function b(e){return Object(i["a"])({url:o+"/sendStatement",method:"post",data:e})}function v(e){return Object(i["a"])({url:o+"/handleReceivedStatement",method:"post",data:e})}function m(e){return Object(i["a"])({url:o+"/searchByExp",method:"post",data:e})}function f(e){return Object(i["a"])({url:o+"/searchReceivedByExp",method:"post",data:e})}},"74d2":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var i=n("b32d"),o="http://cloud.dowaycn.com/Gateway/BaseService/api/v1/customer";function c(e){return Object(i["a"])({url:o+"/loadByName",method:"get",params:e})}function r(e){return Object(i["a"])({url:o+"/queryAllContacts",method:"get",params:e})}function a(){return Object(i["a"])({url:o+"/query",method:"get"})}},"79a7":function(e,t,n){"use strict";n("455d")},"7db0":function(e,t,n){"use strict";var i=n("23e7"),o=n("b727").find,c=n("44d2"),r=n("ae40"),a="find",s=!0,u=r(a);a in[]&&Array(1)[a]((function(){s=!1})),i({target:"Array",proto:!0,forced:s||!u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(a)},"863c":function(e,t,n){},"8c7d":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("b680");var i=n("7a23"),o=Object(i["withScopeId"])("data-v-324ee2b2");Object(i["pushScopeId"])("data-v-324ee2b2");var c={class:"page_header"},r=Object(i["createTextVNode"])("发送"),a=Object(i["createTextVNode"])("确认"),s=Object(i["createTextVNode"])("驳回"),u=Object(i["createTextVNode"])("保存"),l=Object(i["createTextVNode"])("编辑"),d=Object(i["createTextVNode"])("放弃"),b={class:"page_body"},v={class:"page_box"},m=Object(i["createVNode"])("span",{class:"title"},"基本信息",-1),f=Object(i["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),h={key:1},y=Object(i["createVNode"])("br",null,null,-1),p=Object(i["createVNode"])("br",null,null,-1),j={class:"page_box"},O=Object(i["createVNode"])("span",{class:"title"},"发票详情",-1),g=Object(i["createTextVNode"])(" 添加明细 "),w=Object(i["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),S={style:{"text-align":"right"}},k={class:"sum_item"},V=Object(i["createVNode"])("span",{style:{"font-weight":"600"}},"未税金额：",-1),N={class:"sum_item"},x=Object(i["createVNode"])("span",{style:{"font-weight":"600"}},"总税额：",-1),D={class:"sum_item"},R=Object(i["createVNode"])("span",{style:{"font-weight":"600"}},"价税总计：",-1),A=Object(i["createVNode"])("div",{class:"clearfix"},null,-1),T={class:"page_box"},I=Object(i["createVNode"])("span",{class:"title"},"对账单详情",-1),C=Object(i["createTextVNode"])(" 添加明细 "),B=Object(i["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),_={style:{height:"475px",overflow:"auto"}};Object(i["popScopeId"])();var E=o((function(e,t,n,E,L,q){var F=Object(i["resolveComponent"])("a-button"),U=Object(i["resolveComponent"])("a-input"),P=Object(i["resolveComponent"])("a-form-item"),H=Object(i["resolveComponent"])("a-date-picker"),z=Object(i["resolveComponent"])("a-select-option"),G=Object(i["resolveComponent"])("a-select"),Y=Object(i["resolveComponent"])("a-form"),$=Object(i["resolveComponent"])("BaseTableEditable"),M=Object(i["resolveComponent"])("a-textarea"),J=Object(i["resolveComponent"])("a-modal"),W=Object(i["resolveComponent"])("a-table");return Object(i["openBlock"])(),Object(i["createBlock"])(i["Fragment"],null,[Object(i["createVNode"])("div",c,[Object(i["withDirectives"])(Object(i["createVNode"])(F,{loading:e.optLoading,style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:e.send},{default:o((function(){return[r]})),_:1},8,["loading","onClick"]),[[i["vShow"],("send"===e.type||void 0!==e.id)&&"草稿"===e.invoice.status]]),Object(i["withDirectives"])(Object(i["createVNode"])(F,{loading:e.optLoading,style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:t[1]||(t[1]=function(t){return e.handleReceivedPurchaseOrder("adopt")})},{default:o((function(){return[a]})),_:1},8,["loading"]),[[i["vShow"],"receive"===e.type&&void 0!==e.id]]),Object(i["withDirectives"])(Object(i["createVNode"])(F,{loading:e.optLoading,style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:t[2]||(t[2]=function(t){return e.rejectReasonVisible=!0})},{default:o((function(){return[s]})),_:1},8,["loading"]),[[i["vShow"],"receive"===e.type&&void 0!==e.id]]),Object(i["withDirectives"])(Object(i["createVNode"])(F,{loading:e.saveLoading,style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:e.saveHandler},{default:o((function(){return[u]})),_:1},8,["loading","onClick"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])(F,{style:{color:"#5259e5",border:"1px solid #5259e5"},onClick:t[3]||(t[3]=function(t){return e.sysStatus="edit"})},{default:o((function(){return[l]})),_:1},512),[[i["vShow"],"send"===e.type&&"view"===e.sysStatus&&void 0!==e.id]]),Object(i["withDirectives"])(Object(i["createVNode"])(F,{style:{color:"#5259e5",border:"1px solid #5259e5"},onClick:e.cancelEdit},{default:o((function(){return[d]})),_:1},8,["onClick"]),[[i["vShow"],"send"===e.type&&"edit"===e.sysStatus]])]),Object(i["createVNode"])("div",b,[Object(i["createVNode"])("div",v,[m,f,Object(i["createVNode"])(Y,{ref:"invoiceBaseForm",model:e.invoice,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:o((function(){return[Object(i["createVNode"])(P,{label:"发票编码",name:"code","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.code,"onUpdate:value":t[4]||(t[4]=function(t){return e.invoice.code=t}),placeholder:"请输入发票编码"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.code),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"开票日期",name:"date","has-feedback":"",style:{width:"31%"}},{default:o((function(){return["edit"===e.sysStatus?(Object(i["openBlock"])(),Object(i["createBlock"])(H,{key:0,value:e.invoice.date,"onUpdate:value":t[5]||(t[5]=function(t){return e.invoice.date=t}),placeholder:"请选择开票日期",style:{width:"100%"}},null,8,["value"])):Object(i["createCommentVNode"])("",!0),"view"===e.sysStatus?(Object(i["openBlock"])(),Object(i["createBlock"])("span",h,Object(i["toDisplayString"])(e.dateFormat(e.invoice.date)),1)):Object(i["createCommentVNode"])("",!0)]})),_:1}),Object(i["createVNode"])(P,{label:"服务名称",name:"name","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.name,"onUpdate:value":t[6]||(t[6]=function(t){return e.invoice.name=t}),placeholder:"请输入服务名称"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.name),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"备注",name:"remark","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.remark,"onUpdate:value":t[7]||(t[7]=function(t){return e.invoice.remark=t}),placeholder:"请输入备注"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.remark),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"发票金额",name:"amount","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["createTextVNode"])(Object(i["toDisplayString"])(e.invoice.amount)+" 元 ",1)]})),_:1}),y,Object(i["createVNode"])(P,{label:"购票方",name:"buyer","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])("div",null,[Object(i["createVNode"])(G,{value:e.invoice.buyer,"onUpdate:value":t[8]||(t[8]=function(t){return e.invoice.buyer=t}),placeholder:"请选择客户名称","show-search":"","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":"无匹配项",style:{width:"100%"},onFocus:e.focusHandler,onSearch:e.handleCustomerSearch,onSelect:e.handleCustomerSelect},{default:o((function(){return[(Object(i["openBlock"])(!0),Object(i["createBlock"])(i["Fragment"],null,Object(i["renderList"])(e.customers,(function(e){return Object(i["openBlock"])(),Object(i["createBlock"])(z,{key:e.id},{default:o((function(){return[Object(i["createTextVNode"])(Object(i["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]})),_:1},8,["value","onFocus","onSearch","onSelect"])],512),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyer),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"公司地址",name:"buyerAddress","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.buyerAddress,"onUpdate:value":t[9]||(t[9]=function(t){return e.invoice.buyerAddress=t}),placeholder:"请输入公司地址"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyerAddress),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"联系电话",name:"buyerAddress","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.buyerAddress,"onUpdate:value":t[10]||(t[10]=function(t){return e.invoice.buyerAddress=t}),placeholder:"请输入联系电话"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyerAddress),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"联系电话",name:"buyerTel","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.buyerTel,"onUpdate:value":t[11]||(t[11]=function(t){return e.invoice.buyerTel=t}),placeholder:"请输入联系电话"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyerTel),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"纳税号",name:"buyerIdentification","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{disabled:"",value:e.invoice.buyerIdentification,"onUpdate:value":t[12]||(t[12]=function(t){return e.invoice.buyerIdentification=t}),placeholder:"请输入纳税号"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyerIdentification),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"开户行",name:"buyerRegBank","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.buyerRegBank,"onUpdate:value":t[13]||(t[13]=function(t){return e.invoice.buyerRegBank=t}),placeholder:"请输入开户行"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyerRegBank),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"银行账号",name:"buyerAccount","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.buyerAccount,"onUpdate:value":t[14]||(t[14]=function(t){return e.invoice.buyerAccount=t}),placeholder:"请输入银行账号"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.buyerAccount),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),p,Object(i["createVNode"])(P,{label:"销售方",name:"seller","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.seller,"onUpdate:value":t[15]||(t[15]=function(t){return e.invoice.seller=t}),placeholder:"请输入销售方"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.seller),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"公司地址",name:"sellerAddress","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.sellerAddress,"onUpdate:value":t[16]||(t[16]=function(t){return e.invoice.sellerAddress=t}),placeholder:"请输入公司地址"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.sellerAddress),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"联系电话",name:"sellerTel","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.sellerTel,"onUpdate:value":t[17]||(t[17]=function(t){return e.invoice.sellerTel=t}),placeholder:"请输入联系电话"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.sellerTel),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"纳税号",name:"sellerIdentification","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{disabled:"",value:e.invoice.sellerIdentification,"onUpdate:value":t[18]||(t[18]=function(t){return e.invoice.sellerIdentification=t}),placeholder:"请输入纳税号"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.sellerIdentification),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"开户行",name:"sellerRegBank","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.sellerRegBank,"onUpdate:value":t[19]||(t[19]=function(t){return e.invoice.sellerRegBank=t}),placeholder:"请输入开户行"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.sellerRegBank),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(i["createVNode"])(P,{label:"银行账号",name:"sellerAccount","has-feedback":"",style:{width:"31%"}},{default:o((function(){return[Object(i["withDirectives"])(Object(i["createVNode"])(U,{value:e.invoice.sellerAccount,"onUpdate:value":t[20]||(t[20]=function(t){return e.invoice.sellerAccount=t}),placeholder:"请输入银行账号"},null,8,["value"]),[[i["vShow"],"edit"===e.sysStatus]]),Object(i["withDirectives"])(Object(i["createVNode"])("span",null,Object(i["toDisplayString"])(e.invoice.sellerAccount),513),[[i["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])]),Object(i["createVNode"])("div",j,[O,Object(i["withDirectives"])(Object(i["createVNode"])(F,{style:{float:"right",color:"#5259e5",border:"1px solid #5259e5"},onClick:e.addInvoiceDtl},{default:o((function(){return[g]})),_:1},8,["onClick"]),[[i["vShow"],"edit"===e.sysStatus]]),w,Object(i["createVNode"])($,{columns:e.invoiceDtlColumns,sourceData:e.invoiceDtls,editableCols:e.editableCols,onRowEdit:e.rowEditHandler,onRowChange:e.rowChangeHandler,onCancelEdit:e.cancelEditHandler,onRowDelete:e.rowDeleteHandler},null,8,["columns","sourceData","editableCols","onRowEdit","onRowChange","onCancelEdit","onRowDelete"]),Object(i["createVNode"])("div",S,[Object(i["createVNode"])("div",k,[V,Object(i["createTextVNode"])(" "+Object(i["toDisplayString"])(e.noTaxAmount.toFixed(2)),1)]),Object(i["createVNode"])("div",N,[x,Object(i["createTextVNode"])(" "+Object(i["toDisplayString"])(e.totalTaxAmount.toFixed(2)),1)]),Object(i["createVNode"])("div",D,[R,Object(i["createTextVNode"])(" "+Object(i["toDisplayString"])(e.totalAmount.toFixed(2)),1)]),A])]),Object(i["createVNode"])("div",T,[I,Object(i["withDirectives"])(Object(i["createVNode"])(F,{style:{float:"right",color:"#5259e5",border:"1px solid #5259e5"},onClick:e.addStatement},{default:o((function(){return[C]})),_:1},8,["onClick"]),[[i["vShow"],"edit"===e.sysStatus]]),B,Object(i["createVNode"])($,{columns:e.statementColumns,sourceData:e.statements},null,8,["columns","sourceData"])])]),Object(i["createVNode"])(J,{visible:e.rejectReasonVisible,"onUpdate:visible":t[22]||(t[22]=function(t){return e.rejectReasonVisible=t}),centered:"",closable:!1,"mask-closable":!1,onOk:t[23]||(t[23]=function(t){return e.handleReceivedInvoice("reject")}),okText:"确定",cancelText:"取消"},{default:o((function(){return[Object(i["createVNode"])(M,{value:e.reason,"onUpdate:value":t[21]||(t[21]=function(t){return e.reason=t}),placeholder:"请输入驳回原因",rows:8},null,8,["value"])]})),_:1},8,["visible"]),Object(i["createVNode"])(J,{visible:e.statementShowVisible,"onUpdate:visible":t[24]||(t[24]=function(t){return e.statementShowVisible=t}),title:"请选择相应的对账单",centered:"",width:"1080px",closable:!1,"mask-closable":!1,onOk:e.selectStatement,okText:"确定",cancelText:"取消"},{default:o((function(){return[Object(i["createVNode"])("div",_,[Object(i["createVNode"])(W,{columns:e.statementColumns,"data-source":e.statementData,"row-selection":e.rowSelection,pagination:!1},null,8,["columns","data-source","row-selection"])])]})),_:1},8,["visible","onOk"])],64)})),L=(n("7db0"),n("4160"),n("a434"),n("d3b7"),n("159b"),n("368b"),n("56cd")),q=(n("519e"),n("0bb7")),F=(n("04f3"),n("ed3b")),U=(n("e1f5"),n("5efb")),P=n("9096"),H=n("c1df"),z=n.n(H),G=n("4f48"),Y=n("5ed4"),$=n("74d2"),M=n("3f6c"),J=Object(i["defineComponent"])({components:{"a-button":U["a"],"a-modal":F["a"],"a-date-picker":q["a"],BaseTableEditable:P["a"]},setup:function(){var e=Object(i["ref"])("edit"),t=Object(i["ref"])(!1),n=Object(i["ref"])(!1),o=function(e,t,n){return null===t?Promise.reject(e.message):Promise.resolve()},c=Object(i["reactive"])([{title:"序号",dataIndex:"key",key:"key",width:70},{title:"服务名称",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"规格型号",dataIndex:"model",key:"model",ellipsis:!0,slots:{customRender:"model"}},{title:"计量单位",dataIndex:"uom",key:"uom",ellipsis:!0,slots:{customRender:"uom"}},{title:"数量",dataIndex:"num",key:"num",ellipsis:!0,slots:{customRender:"num"}},{title:"单价",dataIndex:"price",key:"price",ellipsis:!0,slots:{customRender:"price"}},{title:"税率",dataIndex:"taxRate",key:"taxRate",ellipsis:!0,slots:{customRender:"taxRate"}},{title:"金额",dataIndex:"money",key:"money",ellipsis:!0,slots:{customRender:"money"}},{title:"税额",dataIndex:"taxAmount",key:"taxAmount",ellipsis:!0,slots:{customRender:"taxAmount"}},{title:"价税合计",dataIndex:"total",key:"total",ellipsis:!0,slots:{customRender:"total"}},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),r=(Object(i["reactive"])({code:[{required:!0,message:"发票编码不能为空",trigger:"blur"}],name:[{required:!0,message:"服务名称不能为空",trigger:"blur"}],date:[{validator:o,message:"开票日期不能为空",trigger:"blur"}],remark:[{required:!0,message:"备注不能为空",trigger:"blur"}],buyer:[{required:!0,message:"购票方不能为空",trigger:"blur"}],buyerAddress:[{required:!0,message:"公司地址不能为空",trigger:"blur"}],buyerTel:[{required:!0,message:"联系电话不能为空",trigger:"blur"}],buyerIdentification:[{required:!0,message:"纳税号不能为空",trigger:"blur"}],buyerRegBank:[{required:!0,message:"开户行不能为空",trigger:"blur"}],buyerAccount:[{required:!0,message:"银行账号不能为空",trigger:"blur"}],seller:[{required:!0,message:"销售方不能为空",trigger:"blur"}],sellerAddress:[{required:!0,message:"公司地址不能为空",trigger:"blur"}],sellerTel:[{required:!0,message:"联系电话不能为空",trigger:"blur"}],sellerIdentification:[{required:!0,message:"纳税号不能为空",trigger:"blur"}],sellerRegBank:[{required:!0,message:"开户行不能为空",trigger:"blur"}],sellerAccount:[{required:!0,message:"银行帐号不能为空",trigger:"blur"}]}),Object(i["reactive"])({id:"",name:"",code:"",date:z()(),remark:"",amount:0,buyer:"",buyerAddress:"",buyerTel:"",buyerIdentification:"",buyerRegBank:"",buyerAccount:"",seller:"",sellerAddress:"",sellerTel:"",sellerIdentification:"",sellerRegBank:"",sellerAccount:"",status:"draft",authorizationCode:"",businessLicense:"",senderBusinessLicense:"",rowVersion:"",invoiceDetails:[],statements:[]})),a=["name","model","uom","num","price","taxRate"],s=Object(i["reactive"])([]),u=function(){s.push({key:String(s.length+1),id:"",name:"",model:"",uom:"",num:"",price:"",money:0,taxRate:"",taxAmount:0,total:0,rowVersion:"",editable:!0})},l=Object(i["reactive"])([{title:"序号",dataIndex:"key",key:"key",width:70},{title:"对账单号",dataIndex:"code",key:"code"},{title:"客户名称",dataIndex:"custName",key:"custName",ellipsis:!0},{title:"开始时间",dataIndex:"startTime",key:"startTime",ellipsis:!0},{title:"结束时间",dataIndex:"endTime",key:"endTime",ellipsis:!0},{title:"对账方",dataIndex:"statementParty",key:"statementParty",ellipsis:!0},{title:"对账金额",dataIndex:"amount",key:"amount",ellipsis:!0},{title:"已收金额",dataIndex:"received",key:"received",ellipsis:!0},{title:"欠款金额",dataIndex:"unreceived",key:"unreceived",ellipsis:!0},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),d=Object(i["reactive"])([]),b=Object(i["reactive"])([]),v=Object(i["reactive"])([]),m=[],f=Object(i["ref"])(!1),h=Object(i["reactive"])({onChange:function(e,t){void 0!==t&&(m=t)}}),y=function(){f.value=!0,m=[],Object(Y["g"])().then((function(e){e.content.forEach((function(e){d.push({key:String(d.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})}))})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)}))},p=function(e){b.splice(e,1)},j=function(){v=m,v.forEach((function(e){b.push({key:String(b.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})})),f.value=!1},O=Object(i["ref"])(!1),g=Object(i["ref"])(""),w=Object(i["reactive"])({key:"",id:"",name:"",model:"",uom:"",num:"",price:"",taxRate:"",money:0,taxAmount:0,total:0,rowVersion:"",editable:!0}),S=function(e){w.name=e.name,w.model=e.model,w.uom=e.uom,w.num=e.num,w.price=e.price,w.taxRate=e.taxRate},k=function(e){e.money=e.num*e.price,e.taxAmount=e.money*e.taxRate,e.total=e.money+e.taxAmount},V=function(e){s.forEach((function(t,n,i){t.key===e&&(i[n].name=w.name,i[n].model=w.model,i[n].uom=w.uom,i[n].num=w.num,i[n].price=w.price,i[n].taxRate=w.taxRate)}))},N=function(e){s.forEach((function(t,n,i){t.key===e&&i.splice(n,1)}))},x=function(){""===r.businessLicense?L["a"].error({message:"错误",description:"未填写客户信用代码，无法识别当前客户，请完善客户信息，并重新选取客户"}):""===r.authorizationCode?L["a"].error({message:"错误",description:"当前所选客户还不是您的合作伙伴"}):F["a"].confirm({title:"请确认",content:"确定要发送当前发票吗？",cancelText:"取消",okText:"确认",onOk:function(){n.value=!0,Object(G["i"])([r.id]).then((function(e){200===e.code&&L["a"].success({message:"成功",description:"发送成功"})})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)})).finally((function(){n.value=!1}))}})};return{sysStatus:e,saveLoading:t,optLoading:n,invoiceDtlColumns:c,invoice:r,editableCols:a,invoiceDtls:s,addInvoiceDtl:u,statementColumns:l,statementData:d,statements:b,statementShowVisible:f,rowSelection:h,addStatement:y,deleteStatement:p,selectStatement:j,reason:g,rejectReasonVisible:O,rowEditHandler:S,rowChangeHandler:k,cancelEditHandler:V,rowDeleteHandler:N,send:x}},data:function(){return{id:this.$route.query.id,type:this.$route.query.type,customers:[]}},computed:{noTaxAmount:function(){var e=0;return this.invoiceDtls.forEach((function(t){e+=t.money})),e},totalTaxAmount:function(){var e=0;return this.invoiceDtls.forEach((function(t){e+=t.taxAmount})),e},totalAmount:function(){var e=0;return this.invoiceDtls.forEach((function(t){e+=t.total})),e}},created:function(){void 0!==this.id&&void 0!==this.type?(this.getData(String(this.id),String(this.type)),this.sysStatus="view"):(this.sysStatus="edit",this.loadTenant())},methods:{getInvoice:function(e){var t=this;Object(G["c"])({id:e}).then((function(e){t.invoice.id=e.content.id,t.invoice.code=e.content.code,t.invoice.date=e.content.date,t.invoice.amount=e.content.amount,t.invoice.buyer=e.content.buyer,t.invoice.buyerIdentification=e.content.buyerIdentification,t.invoice.buyerAddress=e.content.buyerAddress,t.invoice.buyerTel=e.content.buyerTel,t.invoice.buyerRegBank=e.content.buyerRegBank,t.invoice.buyerAccount=e.content.buyerAccount,t.invoice.seller=e.content.seller,t.invoice.sellerIdentification=e.content.sellerIdentification,t.invoice.sellerAddress=e.content.sellerAddress,t.invoice.sellerTel=e.content.sellerTel,t.invoice.sellerRegBank=e.content.sellerRegBank,t.invoice.sellerAccount=e.content.sellerAccount,t.invoice.remark=e.content.remark,t.invoice.status=t.textFormat(e.content.status),t.invoice.authorizationCode=e.content.authorizationCode,t.invoice.businessLicense=e.content.businessLicense,t.invoice.senderBusinessLicense=e.content.senderBusinessLicense,t.invoice.rowVersion=e.content.rowVersion,e.content.invoiceDetails.forEach((function(e){t.invoiceDtls.push({key:String(t.invoiceDtls.length+1),id:e.id,name:e.name,model:e.model,uom:e.uom,num:e.num,price:e.price,money:e.money,taxRate:e.taxRate,taxAmount:e.taxAmount,total:e.total,rowVersion:e.rowVersion})})),e.content.statements.forEach((function(e){t.statements.push({key:String(t.statements.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})}))})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)}))},getInvoiceReceived:function(e){var t=this;Object(G["d"])({id:e}).then((function(e){t.invoice.id=e.content.id,t.invoice.code=e.content.code,t.invoice.date=e.content.date,t.invoice.amount=e.content.amount,t.invoice.buyer=e.content.buyer,t.invoice.buyerIdentification=e.content.buyerIdentification,t.invoice.buyerAddress=e.content.buyerAddress,t.invoice.buyerTel=e.content.buyerTel,t.invoice.buyerRegBank=e.content.buyerRegBank,t.invoice.buyerAccount=e.content.buyerAccount,t.invoice.seller=e.content.seller,t.invoice.sellerIdentification=e.content.sellerIdentification,t.invoice.sellerAddress=e.content.sellerAddress,t.invoice.sellerTel=e.content.sellerTel,t.invoice.sellerRegBank=e.content.sellerRegBank,t.invoice.sellerAccount=e.content.sellerAccount,t.invoice.remark=e.content.remark,t.invoice.status=t.textFormat(e.content.status),t.invoice.authorizationCode=e.content.authorizationCode,t.invoice.businessLicense=e.content.businessLicense,t.invoice.senderBusinessLicense=e.content.senderBusinessLicense,t.invoice.rowVersion=e.content.rowVersion,e.content.invoiceDetailReceiveds.forEach((function(e){t.invoiceDtls.push({key:String(t.invoiceDtls.length+1),id:e.id,name:e.name,model:e.model,uom:e.uom,num:e.num,price:e.price,money:e.money,taxRate:e.taxRate,taxAmount:e.taxAmount,total:e.total,rowVersion:e.rowVersion})})),e.content.statementReceiveds.forEach((function(e){t.statements.push({key:String(t.statements.length+1),id:e.id,code:e.code,custName:e.custName,startTime:e.startTime,endTime:e.endTime,statementParty:e.statementParty,amount:e.amount,received:e.received,unreceived:e.unreceived,rowVersion:e.rowVersion})}))})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)}))},getData:function(e,t){"send"===t?this.getInvoice(e):"receive"===t&&this.getInvoiceReceived(e)},focusHandler:function(){var e=this;Object($["b"])().then((function(t){e.customers=t.content})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)}))},loadTenant:function(){var e=this;Object(M["a"])({id:localStorage.getItem("doway_cloud_tenant_id")}).then((function(t){200===t.code&&(e.invoice.senderBusinessLicense=t.content.creditCode,e.invoice.sellerIdentification=t.content.creditCode,t.content.name&&t.content.address&&t.content.tel&&t.content.regBank&&t.content.account||L["a"].warning({message:"警告",description:"当前租户信息缺失，请到信息设置中完善"}),e.invoice.seller=t.content.name,e.invoice.sellerAddress=t.content.address,e.invoice.sellerTel=t.content.tel,e.invoice.sellerRegBank=t.content.regBank,e.invoice.sellerAccount=t.content.account)})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)}))},handleCustomerSelect:function(e){var t=this.customers.find((function(t){return t.id===e}));this.invoice.buyerIdentification=t.businessLicense,this.invoice.buyerAddress=t.address,this.invoice.buyerTel=t.tel,this.invoice.buyerRegBank=t.regBank,this.invoice.buyerAccount=t.regBankAccount,this.invoice.authorizationCode=t.authorizationCode,this.invoice.businessLicense=t.businessLicense},handleCustomerSearch:function(e){var t=this;t.customers=[],Object($["a"])({name:e}).then((function(e){t.customers=e.content})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)}))},cancelEdit:function(){void 0!==this.id?this.sysStatus="view":this.$router.push({path:"/invoiceRecord"})},saveHandler:function(){var e=this,t=e.$refs.invoiceBaseForm;t.validate().then((function(){e.invoice.statements=e.statements,e.invoice.invoiceDetails=e.invoiceDtls,e.saveLoading=!0,void 0!==e.id?Object(G["j"])(e.invoice).then((function(t){200===t.code&&(e.sysStatus="view")})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)})).finally((function(){e.saveLoading=!1})):Object(G["a"])(e.invoice).then((function(t){200===t.code&&(e.sysStatus="view",e.id=t.content)})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)})).finally((function(){e.saveLoading=!1}))})).catch((function(e){console.debug(e)}))},handleReceivedInvoice:function(e){var t=this,n={ids:[t.invoice.id],result:e,reason:t.reason};t.optLoading=!0,Object(G["b"])(n).then((function(e){t.getData(String(t.id),String(t.type)),t.rejectReasonVisible=!1,200===e.code&&L["a"].success({message:"成功",description:"已处理"})})).catch((function(e){L["a"].error({message:"错误",description:e}),console.debug(e)})).finally((function(){t.optLoading=!1}))},textFormat:function(e){switch(e){case"draft":return"草稿";case"published":return"已发布";case"confirmed":return"已确认";case"rejected":return"已驳回";case"untreated":return"未处理";default:return e}},dateFormat:function(e){return z()(e).format("YYYY-MM-DD")}}});n("79a7"),n("8d37");J.render=E,J.__scopeId="data-v-324ee2b2";t["default"]=J},"8d37":function(e,t,n){"use strict";n("863c")},b0c0:function(e,t,n){var i=n("83ab"),o=n("9bf2").f,c=Function.prototype,r=c.toString,a=/^\s*function ([^ (]*)/,s="name";i&&!(s in c)&&o(c,s,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(e){return""}}})},b680:function(e,t,n){"use strict";var i=n("23e7"),o=n("a691"),c=n("408a"),r=n("1148"),a=n("d039"),s=1..toFixed,u=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},b=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){s.call({})}));i({target:"Number",proto:!0,forced:b},{toFixed:function(e){var t,n,i,a,s=c(this),b=o(e),v=[0,0,0,0,0,0],m="",f="0",h=function(e,t){var n=-1,i=t;while(++n<6)i+=e*v[n],v[n]=i%1e7,i=u(i/1e7)},y=function(e){var t=6,n=0;while(--t>=0)n+=v[t],v[t]=u(n/e),n=n%e*1e7},p=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==v[e]){var n=String(v[e]);t=""===t?n:t+r.call("0",7-n.length)+n}return t};if(b<0||b>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(m="-",s=-s),s>1e-21)if(t=d(s*l(2,69,1))-69,n=t<0?s*l(2,-t,1):s/l(2,t,1),n*=4503599627370496,t=52-t,t>0){h(0,n),i=b;while(i>=7)h(1e7,0),i-=7;h(l(10,i,1),0),i=t-1;while(i>=23)y(1<<23),i-=23;y(1<<i),h(1,1),y(2),f=p()}else h(0,n),h(1<<-t,0),f=p()+r.call("0",b);return b>0?(a=f.length,f=m+(a<=b?"0."+r.call("0",b-a)+f:f.slice(0,a-b)+"."+f.slice(a-b))):f=m+f,f}})}}]);