(window["webpackJsonp_cloud-base-app"]=window["webpackJsonp_cloud-base-app"]||[]).push([["views-customer-CustomerDtl-vue"],{"6bf7":function(e,t,c){},"87f7":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),r=c("50df"),o=c.n(r),n=Object(a["withScopeId"])("data-v-1ddc90d9");Object(a["pushScopeId"])("data-v-1ddc90d9");var s={class:"header"},u=Object(a["createTextVNode"])(" 保存 "),i=Object(a["createTextVNode"])(" 编辑 "),l=Object(a["createTextVNode"])(" 删除 "),d=Object(a["createVNode"])("span",{style:{"margin-left":"60px","font-size":"20px"}},"你确定要删除吗? ",-1),b={style:{padding:"10px"}},m={class:"page_box"},v=Object(a["createVNode"])("span",{class:"title"},"基本信息",-1),f=Object(a["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),p={style:{height:"130px",position:"relative","margin-bottom":"15px"}},O=Object(a["createVNode"])("div",{class:"avatar_img"},[Object(a["createVNode"])("img",{src:o.a,height:"100"})],-1),h={class:"common_info"},j=Object(a["createVNode"])("br",null,null,-1),y=Object(a["createVNode"])("br",null,null,-1),w={class:"page_box"},g=Object(a["createVNode"])("span",{class:"title"},"付款管理",-1),V=Object(a["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),N=Object(a["createTextVNode"])(" 全款 "),S=Object(a["createTextVNode"])(" 先押后付 "),C=Object(a["createTextVNode"])(" 支付宝 "),k=Object(a["createTextVNode"])(" 微信 "),D=Object(a["createTextVNode"])(" 银行转账 "),_=Object(a["createTextVNode"])(" 现金 "),x=Object(a["createTextVNode"])(" 人民币 "),T=Object(a["createTextVNode"])(" 美元 "),B=Object(a["createTextVNode"])(" 纸质发票 "),U=Object(a["createTextVNode"])(" 电子发票 "),q={class:"page_box"},I={class:"title"},F=Object(a["createTextVNode"])("联系人 "),A=Object(a["createVNode"])("i",{class:"iconfont icon-add"},null,-1),L=Object(a["createVNode"])("hr",{style:{border:"0",background:"#dadada",height:"1px"}},null,-1),R=Object(a["createVNode"])("img",{src:o.a,height:"60"},null,-1),$=Object(a["createVNode"])("br",null,null,-1),G=Object(a["createTextVNode"])(" 取消 "),z=Object(a["createTextVNode"])(" 保存 ");Object(a["popScopeId"])();var E=n((function(e,t,c,r,o,E){var J=Object(a["resolveComponent"])("a-button"),M=Object(a["resolveComponent"])("a-modal"),P=Object(a["resolveComponent"])("a-input"),Z=Object(a["resolveComponent"])("a-form-item"),H=Object(a["resolveComponent"])("a-form"),K=Object(a["resolveComponent"])("a-select-option"),Q=Object(a["resolveComponent"])("a-select"),W=Object(a["resolveComponent"])("CommonCard"),X=Object(a["resolveComponent"])("a-col"),Y=Object(a["resolveComponent"])("a-row");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",s,[Object(a["withDirectives"])(Object(a["createVNode"])(J,{style:{margin:"10px","background-color":"#5259e5",color:"#fff"},onClick:e.save},{default:n((function(){return[u]})),_:1},8,["onClick"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])(J,{style:{margin:"10px","background-color":"#5259e5",color:"#fff"},onClick:e.edit},{default:n((function(){return[i]})),_:1},8,["onClick"]),[[a["vShow"],"view"===e.sysStatus]]),Object(a["createVNode"])(J,{style:{margin:"10px",color:"#5259e5",border:"1px solid #5259e5"},plain:"",onClick:e.showDelModal,disabled:"edit"==e.sysStatus},{default:n((function(){return[l]})),_:1},8,["onClick","disabled"]),Object(a["createVNode"])(M,{title:"删除操作",visible:e.delVisible,"onUpdate:visible":t[1]||(t[1]=function(t){return e.delVisible=t}),"confirm-loading":e.confirmLoading,onOk:e.handleDelOk,okText:"确定",cancelText:"取消",style:{color:"red"},width:"400px"},{default:n((function(){return[d]})),_:1},8,["visible","confirm-loading","onOk"])]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("div",m,[v,f,Object(a["createVNode"])("div",p,[O,Object(a["createVNode"])("div",h,[Object(a["createVNode"])(H,{ref:"customerBase1Form",model:e.customer,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:n((function(){return[Object(a["createVNode"])(Z,{label:"编码",name:"code","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{disabled:"edit"===e.sysStatus&&""!==e.id&&void 0!==e.id,value:e.customer.code,"onUpdate:value":t[2]||(t[2]=function(t){return e.customer.code=t}),placeholder:"请输入编码"},null,8,["disabled","value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.code),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),j,Object(a["createVNode"])(Z,{label:"名称",name:"name","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.name,"onUpdate:value":t[3]||(t[3]=function(t){return e.customer.name=t}),placeholder:"请输入名称"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.name),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])])]),Object(a["createVNode"])(H,{ref:"customerBase2Form",model:e.customer,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:n((function(){return[Object(a["createVNode"])(Z,{label:"简称",name:"shortName","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.shortName,"onUpdate:value":t[4]||(t[4]=function(t){return e.customer.shortName=t}),placeholder:"请输入简称"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.shortName),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"负责人",name:"salesGroup","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.salesGroup,"onUpdate:value":t[5]||(t[5]=function(t){return e.customer.salesGroup=t}),placeholder:"请输入负责人"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.salesGroup),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"邮箱",name:"email","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.email,"onUpdate:value":t[6]||(t[6]=function(t){return e.customer.email=t}),placeholder:"请输入邮箱"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.email),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),y,Object(a["createVNode"])(Z,{label:"联系方式",name:"tel","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.tel,"onUpdate:value":t[7]||(t[7]=function(t){return e.customer.tel=t}),placeholder:"请输入联系方式"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.tel),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"信用代码",name:"businessLicense","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.businessLicense,"onUpdate:value":t[8]||(t[8]=function(t){return e.customer.businessLicense=t}),placeholder:"请输入信用代码"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.businessLicense),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"地址",name:"address","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.address,"onUpdate:value":t[9]||(t[9]=function(t){return e.customer.address=t}),placeholder:"请输入地址"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.address),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])]),Object(a["createVNode"])("div",w,[g,V,Object(a["createVNode"])(H,{ref:"customerPayForm",model:e.customer,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:n((function(){return[Object(a["createVNode"])(Z,{label:"银行账号",name:"regBankAccount","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.regBankAccount,"onUpdate:value":t[10]||(t[10]=function(t){return e.customer.regBankAccount=t}),placeholder:"请输入银行账号"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.regBankAccount),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"开户行",name:"regBank","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.regBank,"onUpdate:value":t[11]||(t[11]=function(t){return e.customer.regBank=t}),placeholder:"请输入开户行"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.regBank),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"付款条件",name:"paymentTerms","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])("div",null,[Object(a["createVNode"])(Q,{value:e.customer.paymentTerms,"onUpdate:value":t[12]||(t[12]=function(t){return e.customer.paymentTerms=t}),style:{width:"100%"}},{default:n((function(){return[Object(a["createVNode"])(K,{value:"全款"},{default:n((function(){return[N]})),_:1}),Object(a["createVNode"])(K,{value:"先押后付"},{default:n((function(){return[S]})),_:1})]})),_:1},8,["value"])],512),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.paymentTerms),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"付款方式",name:"payType","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])("div",null,[Object(a["createVNode"])(Q,{value:e.customer.payType,"onUpdate:value":t[13]||(t[13]=function(t){return e.customer.payType=t}),style:{width:"100%"}},{default:n((function(){return[Object(a["createVNode"])(K,{value:"支付宝"},{default:n((function(){return[C]})),_:1}),Object(a["createVNode"])(K,{value:"微信"},{default:n((function(){return[k]})),_:1}),Object(a["createVNode"])(K,{value:"银行转账"},{default:n((function(){return[D]})),_:1}),Object(a["createVNode"])(K,{value:"现金"},{default:n((function(){return[_]})),_:1})]})),_:1},8,["value"])],512),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.payType),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"交易货币",name:"currencyCode","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])("div",null,[Object(a["createVNode"])(Q,{value:e.customer.currencyCode,"onUpdate:value":t[14]||(t[14]=function(t){return e.customer.currencyCode=t}),style:{width:"100%"}},{default:n((function(){return[Object(a["createVNode"])(K,{value:"人民币"},{default:n((function(){return[x]})),_:1}),Object(a["createVNode"])(K,{value:"美元"},{default:n((function(){return[T]})),_:1})]})),_:1},8,["value"])],512),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.currencyCode),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"税率",name:"taxRate","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customer.taxRate,"onUpdate:value":t[15]||(t[15]=function(t){return e.customer.taxRate=t}),placeholder:"请输入税率"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.taxRate),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"发票类型",name:"invoiceType","has-feedback":"",style:{width:"31%"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])("div",null,[Object(a["createVNode"])(Q,{value:e.customer.invoiceType,"onUpdate:value":t[16]||(t[16]=function(t){return e.customer.invoiceType=t}),style:{width:"100%"}},{default:n((function(){return[Object(a["createVNode"])(K,{value:"纸质发票"},{default:n((function(){return[B]})),_:1}),Object(a["createVNode"])(K,{value:"电子发票"},{default:n((function(){return[U]})),_:1})]})),_:1},8,["value"])],512),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customer.invoiceType),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])]),Object(a["createVNode"])("div",q,[Object(a["createVNode"])("span",I,[F,Object(a["withDirectives"])(Object(a["createVNode"])(J,{style:{margin:"10px",color:"#5259e5",border:"1px solid #5259e5"},plain:"",onClick:e.showModel},{icon:n((function(){return[A]})),_:1},8,["onClick"]),[[a["vShow"],"edit"===e.sysStatus]])]),L,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.customerContacts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(W,{key:t.id,commonItem:t,commonType:"contact",onRemoveContact:e.removeContactHandler,sysStatus:e.sysStatus},null,8,["commonItem","onRemoveContact","sysStatus"])})),128)),Object(a["createVNode"])(M,{visible:e.visible,"onUpdate:visible":t[21]||(t[21]=function(t){return e.visible=t}),title:"联系人",onOk:e.addContact},{footer:n((function(){return[Object(a["createVNode"])(J,{key:"back",onClick:e.handleCancel},{default:n((function(){return[G]})),_:1},8,["onClick"]),Object(a["createVNode"])(J,{key:"submit",type:"primary",onClick:e.addContact},{default:n((function(){return[z]})),_:1},8,["onClick"])]})),default:n((function(){return[Object(a["createVNode"])(Y,null,{default:n((function(){return[Object(a["createVNode"])(X,{span:3},{default:n((function(){return[R]})),_:1}),Object(a["createVNode"])(X,{span:21},{default:n((function(){return[Object(a["createVNode"])(H,{ref:"customerContactBaseForm",model:e.customerContact,rules:e.rules,layout:"inline","label-col":{offset:1,span:5},"wrapper-col":{offset:1,span:17}},{default:n((function(){return[Object(a["createVNode"])(Z,{label:"姓名",name:"contacts","has-feedback":"",style:{width:"45%",margin:"10px"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customerContact.contacts,"onUpdate:value":t[17]||(t[17]=function(t){return e.customerContact.contacts=t}),placeholder:"请输入姓名"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customerContact.contacts),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"电话",name:"tel","has-feedback":"",style:{width:"45%",margin:"10px"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customerContact.tel,"onUpdate:value":t[18]||(t[18]=function(t){return e.customerContact.tel=t}),placeholder:"请输入电话"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customerContact.tel),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),$,Object(a["createVNode"])(Z,{label:"邮箱",name:"email","has-feedback":"",style:{width:"45%",margin:"10px"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customerContact.email,"onUpdate:value":t[19]||(t[19]=function(t){return e.customerContact.email=t}),placeholder:"请输入邮箱"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customerContact.email),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1}),Object(a["createVNode"])(Z,{label:"部门",name:"department","has-feedback":"",style:{width:"45%",margin:"10px"}},{default:n((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(P,{value:e.customerContact.department,"onUpdate:value":t[20]||(t[20]=function(t){return e.customerContact.department=t}),placeholder:"请输入部门"},null,8,["value"]),[[a["vShow"],"edit"===e.sysStatus]]),Object(a["withDirectives"])(Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.customerContact.department),513),[[a["vShow"],"view"===e.sysStatus]])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]})),_:1})]})),_:1},8,["visible","onOk"])])])],64)})),J=(c("4160"),c("a434"),c("d3b7"),c("159b"),c("368b"),c("56cd")),M=(c("a71a"),c("b558")),P=(c("04f3"),c("ed3b")),Z=(c("1815"),c("e32c")),H=(c("50ac"),c("9a63")),K=(c("e1f5"),c("5efb")),Q=c("74d2"),W=c("5ed0"),X=Object(a["defineComponent"])({components:{CommonCard:W["a"],"a-button":K["a"],"a-row":H["a"],"a-col":Z["a"],"a-modal":P["a"],"a-input":M["a"]},setup:function(){var e=Object(a["ref"])(!1),t=Object(a["ref"])(!1),c=Object(a["ref"])("view"),r=Object(a["reactive"])([]),o=function(e,t,c){return null===t?Promise.reject(e.message):Promise.resolve()},n=Object(a["reactive"])({contacts:[{required:!0,message:"请输入姓名",trigger:"blur"}],code:[{required:!0,message:"请输入编码",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],shortName:[{required:!0,message:"请输入简称",trigger:"blur"}],salesGroup:[{required:!0,message:"请选择负责人",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,required:!0,message:"请输入正确的邮箱",trigger:"blur"}],tel:[{required:!0,message:"请输入联系方式",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,required:!0,message:"请输入正确的联系方式",trigger:"blur"}],businessLicense:[{required:!0,message:"请输入信用代码",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],regBankAccount:[{required:!0,message:"请输入银行账号",trigger:"blur"},{pattern:/^\d{16}|\d{19}$/,required:!0,message:"请输入正确的银行账号",trigger:"blur"}],regBank:[{required:!0,message:"请输入开户行",trigger:"blur"}],paymentTerms:[{required:!0,message:"请输入付款条件",trigger:"blur"}],payType:[{required:!0,message:"请输入付款方式",trigger:"blur"}],currencyCode:[{required:!0,message:"请输入交易货币",trigger:"blur"}],taxRate:[{required:!0,validator:o,message:"请输入税率",trigger:"blur"}],invoiceType:[{required:!0,message:"请输入发票类型",trigger:"blur"}]}),s=Object(a["reactive"])({id:"",code:"",name:"",shortName:"",salesGroup:"",email:"",tel:"",businessLicense:"",address:"",rowVersion:"",regBankAccount:"",regBank:"",paymentTerms:"全款",payType:"支付宝",currencyCode:"人民币",taxRate:"",invoiceType:"电子发票",customerContacts:[]}),u=Object(a["reactive"])([]),i=Object(a["reactive"])({id:"",customerId:"",contacts:"",department:"",tel:"",mobile:"",email:"",rowVersion:""});return{rules:n,sysStatus:c,customer:s,customerContact:i,customerContacts:u,visible:t,delVisible:e,ids:r}},data:function(){return{id:this.$route.query.customerId}},created:function(){"string"===typeof this.id?(this.getData(this.id),this.sysStatus="view"):this.sysStatus="edit"},methods:{getData:function(e){var t=this;Object(Q["d"])({id:e}).then((function(e){t.customer.id=e.content.id,t.customer.code=e.content.code,t.customer.name=e.content.name,t.customer.shortName=e.content.shortName,t.customer.salesGroup=e.content.salesGroup,t.customer.address=e.content.address,t.customer.email=e.content.email,t.customer.tel=e.content.tel,t.customer.businessLicense=e.content.businessLicense,t.customer.rowVersion=e.content.rowVersion,t.customer.regBankAccount=e.content.regBankAccount,t.customer.regBank=e.content.regBank,t.customer.paymentTerms=e.content.paymentTerms,t.customer.payType=e.content.payType,t.customer.currencyCode=e.content.currencyCode,t.customer.taxRate=e.content.taxRate,t.customer.invoiceType=e.content.invoiceType,null!=e.content.customerContacts&&e.content.customerContacts.forEach((function(e){t.customerContacts.push({id:e.id,customerId:e.customerId,contacts:e.contacts,department:e.department,tel:e.tel,mobile:e.mobile,email:e.email,rowVersion:e.rowVersion}),t.customerContacts.forEach((function(e,t){e.contacts=null===e.contacts?"":e.contacts,e.tel=null===e.tel?"":e.tel,e.email=null===e.email?"":e.email,e.department=null===e.department?"":e.department,e.showDetailInfo=[{key0:"姓名："+e.contacts},{key1:"电话："+e.tel},{key2:"邮箱："+e.email},{key3:"部门："+e.department}]}))}))}))},removeContactHandler:function(e){this.customerContacts.forEach((function(t,c,a){t.id===e&&a.splice(c,1)}))},save:function(){var e=this,t=e.$refs.customerBase1Form,c=e.$refs.customerBase2Form,a=e.$refs.customerPayForm;t.validate().then((function(){c.validate().then((function(){a.validate().then((function(){e.id?(e.customer.id=e.id,e.customer.customerContacts=e.customerContacts,e.customerContacts.length<=0?J["a"].warning({message:"警告",description:"客户信息至少需要一位联系人"}):Object(Q["g"])(e.customer).then((function(r){t.resetFields(),c.resetFields(),a.resetFields(),J["a"].success({message:"成功",description:"客户信息修改成功"}),e.sysStatus="view",e.$router.push({path:"/customerIndex"})})).catch((function(e){J["a"].error({message:"错误",description:"客户信息修改失败"}),console.debug(e)}))):(e.customer.customerContacts=e.customerContacts,e.customerContacts.length<=0?J["a"].warning({message:"警告",description:"客户信息至少需要一位联系人"}):Object(Q["a"])(e.customer).then((function(t){e.id=t.content,J["a"].success({message:"成功",description:"客户信息添加成功"}),e.sysStatus="view",e.$router.push({path:"/customerIndex"})})).catch((function(e){J["a"].error({message:"错误",description:"客户信息添加失败"}),console.debug(e)})))}))}))}))},showDelModal:function(){this.delVisible=!0},handleDelOk:function(){var e=this;e.ids.push(e.id),Object(Q["b"])(e.ids).then((function(t){J["a"].success({message:"成功",description:"客户信息删除成功"}),e.delVisible=!1,e.$router.push({path:"/customerIndex"})})).catch((function(e){J["a"].error({message:"错误",description:e}),console.debug(e)}))},showModel:function(){this.customerContact.contacts="",this.customerContact.tel="",this.customerContact.email="",this.customerContact.department="",this.visible=!0},handleCancel:function(){this.visible=!1},edit:function(){this.sysStatus="edit"},addContact:function(){var e=this,t=e.$refs.customerContactBaseForm,c=JSON.parse(JSON.stringify(e.customerContact));t.validate().then((function(){e.customerContacts.push(c),e.customerContacts.forEach((function(e,t){e.showDetailInfo=[{key0:"姓名："+e.contacts},{key1:"电话："+e.tel},{key2:"邮箱："+e.email},{key3:"部门："+e.department}]})),e.visible=!1}))}}});c("df06"),c("892f");X.render=E,X.__scopeId="data-v-1ddc90d9";t["default"]=X},"892f":function(e,t,c){"use strict";c("c56f")},c56f:function(e,t,c){},df06:function(e,t,c){"use strict";c("6bf7")}}]);