(window["webpackJsonp_cloud-ebl-app"]=window["webpackJsonp_cloud-ebl-app"]||[]).push([["views-purchase-RecordDtlPage-vue"],{"04ca":function(e,t,a){},"1fd5":function(e,t,a){"use strict";a("04ca")},"3e16":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"g",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"i",(function(){return d})),a.d(t,"a",(function(){return l})),a.d(t,"j",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"f",(function(){return b}));var c=a("b32d"),n="http://cloud.dowaycn.com/Gateway/EblService/api/v1/purchase";function r(e){return Object(c["a"])({url:n+"/loadById",method:"get",params:e})}function o(e){return Object(c["a"])({url:n+"/loadByIdReceived",method:"get",params:e})}function s(){return Object(c["a"])({url:n+"/queryAll",method:"get"})}function i(){return Object(c["a"])({url:n+"/queryAllReceived",method:"get"})}function u(e){return Object(c["a"])({url:n+"/searchByExp",method:"post",data:e})}function d(e){return Object(c["a"])({url:n+"/searchReceivedByExp",method:"post",data:e})}function l(e){return Object(c["a"])({url:n+"/adds",method:"post",data:e})}function p(e){return Object(c["a"])({url:n+"/sendPurchaseOrder",method:"post",data:e})}function h(e){return Object(c["a"])({url:n+"/handleReceivedPurchaseOrder",method:"post",data:e})}function b(e){return Object(c["a"])({url:n+"/purchaseImport",method:"post",data:e})}},"48b4":function(e,t,a){"use strict";a("be04")},8151:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),n=Object(c["withScopeId"])("data-v-3c49fe94");Object(c["pushScopeId"])("data-v-3c49fe94");var r={class:"page_header"},o=Object(c["createTextVNode"])("发送"),s=Object(c["createTextVNode"])("保存为草稿"),i=Object(c["createTextVNode"])("确认"),u=Object(c["createTextVNode"])("驳回"),d={style:{float:"right"}},l=Object(c["createVNode"])("a",{href:"http://cloud.dowaycn.com/Gateway/EblService/api/v1/purchase/purchaseDown"},"下载模板",-1),p=Object(c["createTextVNode"])("上传文件"),h={class:"page_body"},b={class:"page_box"},f=Object(c["createVNode"])("span",{class:"title"},"基本信息",-1),v=Object(c["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),m=Object(c["createVNode"])("br",null,null,-1),j=Object(c["createVNode"])("br",null,null,-1),O={class:"page_box"},y=Object(c["createVNode"])("span",{class:"title"},"物料明细",-1),g=Object(c["createTextVNode"])(" 添加明细 "),w=Object(c["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),S={class:"page_box"},N=Object(c["createVNode"])("span",{class:"title"},"付款信息",-1),V=Object(c["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),D=Object(c["createTextVNode"])(" 人民币 "),C=Object(c["createTextVNode"])(" 美元 "),k=Object(c["createTextVNode"])(" 银行转账 "),T=Object(c["createTextVNode"])(" 货币交易 "),x=Object(c["createTextVNode"])(" 全款 "),_=Object(c["createTextVNode"])(" 先押后付 "),R=Object(c["createTextVNode"])(" 纸质发票 "),q=Object(c["createTextVNode"])(" 电子发票 ");Object(c["popScopeId"])();var B=n((function(e,t,a,B,I,L){var F=Object(c["resolveComponent"])("a-button"),U=Object(c["resolveComponent"])("a-upload"),M=Object(c["resolveComponent"])("a-input"),E=Object(c["resolveComponent"])("a-form-item"),P=Object(c["resolveComponent"])("a-date-picker"),W=Object(c["resolveComponent"])("a-select-option"),z=Object(c["resolveComponent"])("a-select"),A=Object(c["resolveComponent"])("a-form"),H=Object(c["resolveComponent"])("BaseTableEditable"),Y=Object(c["resolveComponent"])("a-textarea"),$=Object(c["resolveComponent"])("a-modal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",r,[Object(c["withDirectives"])(Object(c["createVNode"])(F,{style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:e.send},{default:n((function(){return[o]})),_:1},8,["onClick"]),[[c["vShow"],"send"===e.type||void 0!==e.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(F,{style:{color:"#5259e5",border:"1px solid #5259e5"},onClick:e.saveAsDraft},{default:n((function(){return[s]})),_:1},8,["onClick"]),[[c["vShow"],void 0===e.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(F,{style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:t[1]||(t[1]=function(t){return e.handleReceivedPurchaseOrder("adopt")})},{default:n((function(){return[i]})),_:1},512),[[c["vShow"],"receive"===e.type&&void 0!==e.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(F,{style:{background:"#5259e5",border:"0px",color:"#fff",margin:"0px 10px"},onClick:t[2]||(t[2]=function(t){return e.rejectReasonVisible=!0})},{default:n((function(){return[u]})),_:1},512),[[c["vShow"],"receive"===e.type&&void 0!==e.id]]),Object(c["createVNode"])("div",d,[Object(c["withDirectives"])(Object(c["createVNode"])(F,{style:{"margin-right":"10px"}},{default:n((function(){return[l]})),_:1},512),[[c["vShow"],void 0===e.id]]),Object(c["withDirectives"])(Object(c["createVNode"])(U,{action:"",multiple:!0,"file-list":e.fileList,"auto-upload":!1,limit:1,customRequest:e.importWordConfirm},{default:n((function(){return[Object(c["createVNode"])(F,{style:{color:"#5259e5",border:"1px solid #5259e5"}},{default:n((function(){return[p]})),_:1})]})),_:1},8,["file-list","customRequest"]),[[c["vShow"],void 0===e.id]])])]),Object(c["createVNode"])("div",h,[Object(c["createVNode"])("div",b,[f,v,Object(c["createVNode"])(A,{ref:"purchaseBaseForm",model:e.purchase,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:n((function(){return[Object(c["createVNode"])(E,{label:"采购单号",name:"orderCode","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.orderCode,"onUpdate:value":t[3]||(t[3]=function(t){return e.purchase.orderCode=t}),placeholder:"请输入采购单号"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.orderCode),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"采购日期",name:"purDate","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(P,{value:e.purchase.purDate,"onUpdate:value":t[4]||(t[4]=function(t){return e.purchase.purDate=t}),placeholder:"请选择日期",style:{width:"100%"}},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.dateFormat(e.purchase.purDate)),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"需求日期",name:"demandDate","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(P,{value:e.purchase.demandDate,"onUpdate:value":t[5]||(t[5]=function(t){return e.purchase.demandDate=t}),placeholder:"请选择日期",style:{width:"100%"}},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.dateFormat(e.purchase.demandDate)),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"运输方式",name:"shippingType","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.shippingType,"onUpdate:value":t[6]||(t[6]=function(t){return e.purchase.shippingType=t}),placeholder:"请输入运输方式"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.shippingType),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),m,Object(c["createVNode"])(E,{label:"供应商",name:"supplyName",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(z,{value:e.purchase.supplyName,"onUpdate:value":t[7]||(t[7]=function(t){return e.purchase.supplyName=t}),placeholder:"请选择供应商名称","show-search":"","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":"无匹配项",style:{width:"100%"},onFocus:e.focusHandler,onSearch:e.handleSupplierSearch,onSelect:e.handleSupplierSelect},{default:n((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.supplies,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(W,{key:e.id},{default:n((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]})),_:1},8,["value","onFocus","onSearch","onSelect"])],512),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.supplyName),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"联系人",name:"contacts",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(z,{value:e.purchase.contacts,"onUpdate:value":t[8]||(t[8]=function(t){return e.purchase.contacts=t}),placeholder:"请选择供应商联系人","show-search":"","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":"无匹配项",style:{width:"100%"},onFocus:e.focusSuplCont,onSearch:e.handleSearch,onSelect:e.handleSelect},{default:n((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.supplyContacts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(W,{key:e.id},{default:n((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.contacts),1)]})),_:2},1024)})),128))]})),_:1},8,["value","onFocus","onSearch","onSelect"])],512),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.contacts),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"联系方式",name:"tel","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.tel,"onUpdate:value":t[9]||(t[9]=function(t){return e.purchase.tel=t}),placeholder:"请输入联系方式"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.tel),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"信用代码",name:"businessLicense","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{disabled:"",value:e.purchase.businessLicense,"onUpdate:value":t[10]||(t[10]=function(t){return e.purchase.businessLicense=t})},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.senderBusinessLicense),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),j,Object(c["createVNode"])(E,{label:"需求方",name:"demandSide","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.demandSide,"onUpdate:value":t[11]||(t[11]=function(t){return e.purchase.demandSide=t}),placeholder:"请输入需求方名称"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.demandSide),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"联系人",name:"demandContacts","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.demandContacts,"onUpdate:value":t[12]||(t[12]=function(t){return e.purchase.demandContacts=t}),placeholder:"请输入需求方联系人"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.demandContacts),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"联系方式",name:"demandTel","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.demandTel,"onUpdate:value":t[13]||(t[13]=function(t){return e.purchase.demandTel=t}),placeholder:"请输入需求方联系方式"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.demandTel),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])]),Object(c["createVNode"])("div",O,[y,Object(c["withDirectives"])(Object(c["createVNode"])(F,{style:{float:"right",color:"#5259e5",border:"1px solid #5259e5"},onClick:e.addMat},{default:n((function(){return[g]})),_:1},8,["onClick"]),[[c["vShow"],void 0===e.id]]),w,Object(c["createVNode"])(H,{columns:e.columns,sourceData:e.purchaseMats,editableCols:void 0===e.id&&"edit"===e.sysStatus?e.editableCols:[],onRowDelete:e.rowDeleteHandler,onCancelEdit:e.cancelEditHandler},null,8,["columns","sourceData","editableCols","onRowDelete","onCancelEdit"])]),Object(c["createVNode"])("div",S,[N,V,Object(c["createVNode"])(A,{ref:"purchasePayForm",model:e.purchase,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:n((function(){return[Object(c["createVNode"])(E,{label:"交易货币",name:"currency",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(z,{value:e.purchase.currency,"onUpdate:value":t[14]||(t[14]=function(t){return e.purchase.currency=t}),style:{width:"100%"}},{default:n((function(){return[Object(c["createVNode"])(W,{value:"人民币"},{default:n((function(){return[D]})),_:1}),Object(c["createVNode"])(W,{value:"美元"},{default:n((function(){return[C]})),_:1})]})),_:1},8,["value"])],512),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.currency),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"税率",name:"taxRate",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(M,{value:e.purchase.taxRate,"onUpdate:value":t[15]||(t[15]=function(t){return e.purchase.taxRate=t}),placeholder:"请输入税率"},null,8,["value"]),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.taxRate),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"付款方式",name:"payType",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(z,{value:e.purchase.payType,"onUpdate:value":t[16]||(t[16]=function(t){return e.purchase.payType=t}),style:{width:"100%"}},{default:n((function(){return[Object(c["createVNode"])(W,{value:"银行转账"},{default:n((function(){return[k]})),_:1}),Object(c["createVNode"])(W,{value:"货币交易"},{default:n((function(){return[T]})),_:1})]})),_:1},8,["value"])],512),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.payType),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"付款形式",name:"payCondition",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(z,{value:e.purchase.payCondition,"onUpdate:value":t[17]||(t[17]=function(t){return e.purchase.payCondition=t}),style:{width:"100%"}},{default:n((function(){return[Object(c["createVNode"])(W,{value:"全款"},{default:n((function(){return[x]})),_:1}),Object(c["createVNode"])(W,{value:"先押后付"},{default:n((function(){return[_]})),_:1})]})),_:1},8,["value"])],512),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.payCondition),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(c["createVNode"])(E,{label:"发票类型",name:"invoiceType",required:"","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",null,[Object(c["createVNode"])(z,{value:e.purchase.invoiceType,"onUpdate:value":t[18]||(t[18]=function(t){return e.purchase.invoiceType=t}),style:{width:"100%"}},{default:n((function(){return[Object(c["createVNode"])(W,{value:"纸质发票"},{default:n((function(){return[R]})),_:1}),Object(c["createVNode"])(W,{value:"电子发票"},{default:n((function(){return[q]})),_:1})]})),_:1},8,["value"])],512),[[c["vShow"],"edit"===e.sysStatus]]),Object(c["withDirectives"])(Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.purchase.invoiceType),513),[[c["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])])]),Object(c["createVNode"])($,{visible:e.rejectReasonVisible,"onUpdate:visible":t[20]||(t[20]=function(t){return e.rejectReasonVisible=t}),centered:"",closable:!1,"mask-closable":!1,onOk:t[21]||(t[21]=function(t){return e.handleReceivedPurchaseOrder("reject")}),okText:"确定",cancelText:"取消"},{default:n((function(){return[Object(c["createVNode"])(Y,{value:e.reason,"onUpdate:value":t[19]||(t[19]=function(t){return e.reason=t}),placeholder:"请输入驳回原因",rows:8},null,8,["value"])]})),_:1},8,["visible"])],64)})),I=(a("7db0"),a("4160"),a("a434"),a("d3b7"),a("159b"),a("368b"),a("56cd")),L=(a("7a59"),a("39ab")),F=(a("519e"),a("0bb7")),U=(a("04f3"),a("ed3b")),M=(a("e1f5"),a("5efb")),E=a("c1df"),P=a.n(E),W=a("3e16"),z=a("9096"),A=a("d649"),H=a("3f6c"),Y=Object(c["defineComponent"])({components:{"a-button":M["a"],"a-modal":U["a"],"a-date-picker":F["a"],"a-upload":L["a"],BaseTableEditable:z["a"]},setup:function(){var e=Object(c["ref"])("view"),t=function(e,t,a){return null===t?Promise.reject(e.message):Promise.resolve()},a=Object(c["reactive"])([{title:"序号",dataIndex:"key",key:"key",slots:{customRender:"key"},width:70},{title:"物料编码",dataIndex:"code",key:"code",ellipsis:!0,slots:{customRender:"code"}},{title:"规格型号",dataIndex:"name",key:"name",ellipsis:!0,slots:{customRender:"name"}},{title:"采购数量",dataIndex:"qty",key:"qty",ellipsis:!0,slots:{customRender:"qty"}},{title:"物料单位",dataIndex:"uom",key:"uom",ellipsis:!0,slots:{customRender:"uom"}},{title:"采购单价",dataIndex:"price",key:"price",ellipsis:!0,slots:{customRender:"price"}},{title:"采购金额",dataIndex:"amount",key:"amount",ellipsis:!0,slots:{customRender:"amount"}},{title:"收获仓",dataIndex:"receiveWh",key:"receiveWh",ellipsis:!0,slots:{customRender:"receiveWh"}},{title:"操作",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}]),n=Object(c["reactive"])({orderCode:[{required:!0,message:"采购单号不能为空",trigger:"blur"}],supplyName:[{validator:t,message:"供应商名称不能为空",trigger:"blur"}],demandSide:[{required:!0,message:"需求方名称不能为空",trigger:"blur"}],purDate:[{validator:t,message:"采购日期不能为空",trigger:"blur"},{validator:t,message:"采购日期不能为空",trigger:"change"}],contacts:[{validator:t,message:"供应商联系人不能为空",trigger:"blur"}],demandContacts:[{required:!0,message:"需求方联系人不能为空",trigger:"blur"}],demandDate:[{validator:t,message:"需求日期不能为空",trigger:"blur"},{validator:t,message:"需求日期不能为空",trigger:"change"}],tel:[{required:!0,message:"供应商联系方式不能为空",trigger:"blur"}],demandTel:[{required:!0,message:"需求方联系方式不能为空",trigger:"blur"}],shippingType:[{required:!0,message:"运输方式不能为空",trigger:"blur"}],businessLicense:[{required:!0,message:"供应商信用代码不能为空",trigger:"blur"}],senderBusinessLicense:[{required:!0,message:"需求方信用代码不能为空",trigger:"blur"}],currency:[{validator:t,message:"交易货币不能为空",trigger:"blur"}],taxRate:[{required:!0,message:"税率不能为空",trigger:"blur"}],payType:[{validator:t,message:"付款方式不能为空",trigger:"blur"}],payCondition:[{validator:t,message:"付款形式不能为空",trigger:"blur"}],invoiceType:[{validator:t,message:"发票类型不能为空",trigger:"blur"}]}),r=Object(c["reactive"])({id:"",orderCode:"",supplyName:void 0,demandSide:"",purDate:P()(),contacts:void 0,demandContacts:"",demandDate:P()(),tel:"",demandTel:"",shippingType:"",businessLicense:"",senderBusinessLicense:"",authorizationCode:"",currency:"人民币",taxRate:"",payType:"银行转账",payCondition:"全款",invoiceType:"电子发票",purchaseMats:[],rowVersion:"",status:""}),o=Object(c["reactive"])([]),s=["code","name","qty","uom","price","amount","receiveWh"],i=Object(c["ref"])([]),u=function(){o.push({key:String(o.length+1),code:"",name:"",qty:0,uom:"",price:0,amount:0,receiveWh:"",editable:!0})},d=function(e){o.forEach((function(t,a,c){t.key===e&&c.splice(a,1)}))},l=function(e){o.forEach((function(t,a,c){t.key===e&&(c[a].code="",c[a].name="",c[a].qty=0,c[a].uom="",c[a].price=0,c[a].amount=0,c[a].receiveWh="")}))},p=Object(c["ref"])(!1),h=Object(c["ref"])(""),b=function(){U["a"].warning({title:"请确认",content:"确定要发送当前采购单吗？",onOk:function(){Object(W["j"])([r.id]).then((function(e){200===e.code&&I["a"].success({message:"成功",description:"发送成功"})})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},onCancel:function(){}})};return{sysStatus:e,columns:a,rules:n,purchase:r,purchaseMats:o,editableCols:s,fileList:i,addMat:u,rowDeleteHandler:d,cancelEditHandler:l,rejectReasonVisible:p,send:b,reason:h}},data:function(){return{id:this.$route.query.id,type:this.$route.query.type,supplies:[],supplyContacts:[],supplierId:""}},created:function(){void 0!==this.id&&void 0!==this.type?(this.getData(String(this.id),String(this.type)),this.sysStatus="view"):(this.loadTenant(),this.sysStatus="edit")},methods:{getPurchase:function(e){var t=this;Object(W["d"])({id:e}).then((function(e){t.purchase.id=e.content.id,t.purchase.orderCode=e.content.orderCode,t.purchase.supplyName=e.content.supplyName,t.purchase.contacts=e.content.contacts,t.purchase.tel=e.content.tel,t.purchase.purDate=e.content.purDate,t.purchase.demandDate=e.content.demandDate,t.purchase.shippingType=e.content.shippingType,t.purchase.demandSide=e.content.demandSide,t.purchase.authorizationCode=e.content.authorizationCode,t.purchase.businessLicense=e.content.businessLicense,t.purchase.senderBusinessLicense=e.content.senderBusinessLicense,t.purchase.status=t.textFormat(e.content.status),t.purchase.currency=e.content.currency,t.purchase.taxRate=e.content.taxRate,t.purchase.payType=e.content.payType,t.purchase.payCondition=e.content.payCondition,t.purchase.invoiceType=e.content.invoiceType,t.purchase.rowVersion=e.content.rowVersion,t.purchase.demandContacts=e.content.demandContacts,t.purchase.demandTel=e.content.demandTel,e.content.purchaseMats.forEach((function(e){t.purchaseMats.push({key:String(t.purchaseMats.length+1),code:e.code,name:e.name,qty:e.qty,uom:e.uom,price:e.price,amount:e.amount,receiveWh:e.receiveWh})}))})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},getPurchaseReceived:function(e){var t=this;Object(W["e"])({id:e}).then((function(e){t.purchase.id=e.content.id,t.purchase.orderCode=e.content.orderCode,t.purchase.supplyName=e.content.supplyName,t.purchase.contacts=e.content.contacts,t.purchase.tel=e.content.tel,t.purchase.purDate=e.content.purDate,t.purchase.demandDate=e.content.demandDate,t.purchase.shippingType=e.content.shippingType,t.purchase.demandSide=e.content.demandSide,t.purchase.authorizationCode=e.content.authorizationCode,t.purchase.businessLicense=e.content.businessLicense,t.purchase.senderBusinessLicense=e.content.senderBusinessLicense,t.purchase.status=t.textFormat(e.content.status),t.purchase.currency=e.content.currency,t.purchase.taxRate=e.content.taxRate,t.purchase.payType=e.content.payType,t.purchase.payCondition=e.content.payCondition,t.purchase.invoiceType=e.content.invoiceType,t.purchase.rowVersion=e.content.rowVersion,t.purchase.demandContacts=e.content.demandContacts,t.purchase.demandTel=e.content.demandTel,e.content.purchaseMatReceiveds.forEach((function(e){t.purchaseMats.push({key:String(t.purchaseMats.length+1),code:e.code,name:e.name,qty:e.qty,uom:e.uom,price:e.price,amount:e.amount,receiveWh:e.receiveWh})}))})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},getData:function(e,t){"send"===t?this.getPurchase(e):"receive"===t&&this.getPurchaseReceived(e)},loadTenant:function(){var e=this;Object(H["a"])({id:localStorage.getItem("doway_cloud_tenant_id")}).then((function(t){200===t.code&&(e.purchase.demandSide=t.content.name,e.purchase.senderBusinessLicense=t.content.creditCode,t.content.director&&t.content.tel||I["a"].warning({message:"警告",description:"当前租户负责人或联系方式信息缺失，请到信息设置中完善"}),e.purchase.demandContacts=t.content.director,e.purchase.demandTel=t.content.tel)})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},focusHandler:function(){var e=this;Object(A["c"])().then((function(t){e.supplies=t.content})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},handleSupplierSelect:function(e){var t=this.supplies.find((function(t){return t.id===e}));this.purchase.authorizationCode=t.authorizationCode,this.purchase.businessLicense=t.businessLicense,this.supplierId=e},handleSupplierSearch:function(e){var t=this;t.supplies=[],Object(A["a"])({name:e}).then((function(e){t.supplies=e.content})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},focusSuplCont:function(){var e=this;e.supplierId?Object(A["b"])({supplierId:e.supplierId}).then((function(t){e.supplyContacts=t.content})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)})):I["a"].warning({message:"警告",description:"当前供应商信息缺失，请先选择供应商"})},handleSelect:function(e){var t=this.supplyContacts.find((function(t){return t.id=e}));this.purchase.contacts=t.contacts,this.purchase.tel=null===t.mobile?t.mobile:t.tel},handleSearch:function(e){var t=this;t.supplierId?(t.supplyContacts=[],Object(A["b"])({supplierId:t.supplierId}).then((function(e){t.supplyContacts=e.content})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))):I["a"].warning({message:"警告",description:"当前供应商信息缺失，请先选择供应商"})},textFormat:function(e){switch(e){case"saveAsDraft":return"草稿";case"published":return"已发布";case"confirmed":return"已确认";case"rejected":return"已驳回";case"untreated":return"未处理";default:return e}},saveAsDraft:function(){var e=this,t=e.$refs.purchaseBaseForm,a=e.$refs.purchasePayForm;t.validate().then((function(){a.validate().then((function(){e.purchase.purchaseMats=e.purchaseMats;var c=[];c.push(e.purchase),Object(W["a"])(c).then((function(e){t.resetFields(),a.resetFields(),I["a"].success({message:"成功",description:"添加成功"})})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))})).catch((function(e){console.debug(e)}))})).catch((function(e){console.debug(e)}))},handleReceivedPurchaseOrder:function(e){var t={ids:[this.purchase.id],result:e,reason:this.reason};Object(W["c"])(t).then((function(e){200===e.code&&I["a"].success({message:"成功",description:"已处理"})})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))},dateFormat:function(e){return P()(e).format("YYYY-MM-DD")},importWordConfirm:function(e){var t=e.file,a=new FormData;a.append("file",t),Object(W["f"])(a).then((function(e){I["a"].success({message:"成功",description:"数据导入成功，请至采购记录页面查看"})})).catch((function(e){I["a"].error({message:"错误",description:e}),console.debug(e)}))}}});a("48b4"),a("1fd5");Y.render=B,Y.__scopeId="data-v-3c49fe94";t["default"]=Y},be04:function(e,t,a){},d649:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));var c=a("b32d"),n="http://cloud.dowaycn.com/Gateway/BaseService/api/v1/supplier";function r(e){return Object(c["a"])({url:n+"/loadByName",method:"get",params:e})}function o(e){return Object(c["a"])({url:n+"/queryAllContacts",method:"get",params:e})}function s(){return Object(c["a"])({url:n+"/query",method:"get"})}}}]);