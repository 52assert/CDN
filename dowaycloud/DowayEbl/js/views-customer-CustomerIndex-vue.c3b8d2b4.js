(window["webpackJsonp_cloud-base-app"]=window["webpackJsonp_cloud-base-app"]||[]).push([["views-customer-CustomerIndex-vue"],{a7bf:function(e,t,n){},abc9:function(e,t,n){"use strict";n("a7bf")},eaaf:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("ddb0");var o=n("7a23"),c=Object(o["withScopeId"])("data-v-7f1a15d2");Object(o["pushScopeId"])("data-v-7f1a15d2");var a={class:"top_opt"},r={style:{"min-height":"200px","margin-top":"47px"}},s={style:{"min-height":"200px","line-height":"200px","text-align":"center"}};Object(o["popScopeId"])();var i=c((function(e,t,n,c,i,d){var l=Object(o["resolveComponent"])("OptBar"),u=Object(o["resolveComponent"])("CommonCard"),p=Object(o["resolveComponent"])("a-button");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])(l,{onShowDtl:e.showCustomerDtl},null,8,["onShowDtl"])]),Object(o["withDirectives"])(Object(o["createVNode"])("div",r,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.customers.values,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:t.id,commonItem:t,commonType:"customer",senderBusinessLicense:e.tenantCreditCode,canSend:e.canSend,onToDtl:e.toCustomerDtl},null,8,["commonItem","senderBusinessLicense","canSend","onToDtl"])})),128))],512),[[o["vShow"],e.hasCustomer]]),Object(o["withDirectives"])(Object(o["createVNode"])("div",s,[Object(o["withDirectives"])(Object(o["createVNode"])(p,{type:"primary",shape:"circle",loading:""},null,512),[[o["vShow"],e.cLoading]]),Object(o["withDirectives"])(Object(o["createVNode"])("span",null,"空空如也，没有数据",512),[[o["vShow"],!e.cLoading]])],512),[[o["vShow"],!e.hasCustomer]])],64)})),d=(n("4160"),n("159b"),n("368b"),n("56cd")),l=n("72f3"),u=n("5ed0"),p=n("74d2"),b=n("3f6c"),m=Object(o["defineComponent"])({components:{OptBar:l["a"],CommonCard:u["a"]},setup:function(){var e=Object(o["ref"])(!0),t=Object(o["ref"])(!1),n=Object(o["ref"])(!1),c=Object(o["ref"])(""),a=Object(o["reactive"])([]),r=function(){t.value=!0,Object(p["b"])().then((function(t){t.content.length>0?(e.value=!0,t.content.forEach((function(e,t){e.salesGroup=null===e.salesGroup?"":e.salesGroup,e.tel=null===e.tel?"":e.tel,e.email=null===e.email?"":e.email,e.address=null===e.address?"":e.address,e.showDetailInfo=[{key0:"负责人: "+e.salesGroup},{key1:"电话: "+e.tel},{key2:"邮箱: "+e.email},{key3:"地址: "+e.address}]})),a.values=t.content):e.value=!1})).catch((function(e){d["a"].error({message:"错误",description:e}),console.debug(e)})).finally((function(){t.value=!1}))};return Object(o["onMounted"])((function(){r()})),{hasCustomer:e,cLoading:t,customers:a,getAll:r,tenantCreditCode:c,canSend:n}},created:function(){this.loadTenant()},methods:{loadTenant:function(){var e=this,t=this;Object(b["a"])({id:localStorage.getItem("doway_cloud_tenant_id")}).then((function(n){e.tenantCreditCode=n.content.creditCode,""!==n.content.address&&(t.canSend=!0)})).catch((function(e){d["a"].error({message:"错误",description:e}),console.debug(e)}))},toCustomerDtl:function(e){this.$router.push({path:"/customerDtl",query:{customerId:e}})},showCustomerDtl:function(){this.$router.push({path:"/customerDtl"})}}});n("abc9");m.render=i,m.__scopeId="data-v-7f1a15d2";t["default"]=m}}]);