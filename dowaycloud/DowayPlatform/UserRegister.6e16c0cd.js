let e=document.createElement("style");e.innerHTML=".page_wrapper .ant-btn-primary{background-color:#5259e5;border-color:#5259e5}.page_wrapper .ant-btn-primary:hover{background-color:#6b71e5;border-color:#6b71e5}.page_wrapper .ant-btn-primary[disabled]{background-color:#b4b7ef;border-color:#b4b7ef;color:#5259e5}.page_wrapper .ant-btn-primary[disabled]:hover{background-color:#b4b7ef;border-color:#b4b7ef;color:#6b71e5}.page_wrapper[data-v-323dc9d3]{height:100%;padding:20% 10%;background-image:url(/_assets/user_register_bg.6b507498.png);background-size:100% 100%}.page_wrapper .sys_title[data-v-323dc9d3]{width:240px;line-height:50px;margin:0 auto}.page_wrapper .sys_title .sys_divider[data-v-323dc9d3],.page_wrapper .sys_title .sys_logo[data-v-323dc9d3],.page_wrapper .sys_title .sys_text[data-v-323dc9d3]{display:inline-block;text-align:center;vertical-align:top}.page_wrapper .sys_title .sys_logo[data-v-323dc9d3]{width:50px}.page_wrapper .sys_title .sys_divider[data-v-323dc9d3]{width:2px;height:50px;background-color:#fff}.page_wrapper .sys_title .sys_text[data-v-323dc9d3]{width:180px;font-size:20px;font-weight:500;color:#fff}.page_wrapper div.info_page[data-v-323dc9d3]{padding:15px;margin-top:10%;border-radius:6px;background-color:#fff}",document.head.appendChild(e);import{d as o,B as r,u as a,a as i,r as s,b as n,c as t,s as l,e as d,i as c,p as u,f as p,g,o as m,h as f,w as h,v,j as y,k as b,l as w,t as _,m as x,_ as F}from"./index.0b64ce38.js";var k=o({components:{"a-button":r},setup(){const e=a(),o=i(),r=s(0),l=s(!1),u=s(!1),p=n({usercode:"",password:""}),g=n({usercode:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}),m=s(!1),f=s(""),h=n({phone:"",verifyCode:"",password:"",confirmPassword:""}),v=n({phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式有误",trigger:"blur"}],verifyCode:[{required:!0,message:"验证码不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:2,max:10,message:"长度需要在2-10个字符之间",trigger:"blur"}],confirmPassword:[{required:!0,message:"密码不能为空",trigger:"blur"},{validator:(e,o,r)=>o!==h.password?Promise.reject(e.message):Promise.resolve(),message:"两次输入的密码不一致",trigger:"blur"}]}),y=s(!0),b=s(!1),w=s(!1),_=s(!1),x=s(60),F=n(null),k=n({id:"",code:"",name:"",email:"",gender:"male",tenantId:o.query.tenantId}),C=n({code:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:1,max:10,message:"长度需要在1-10个字符之间",trigger:"blur"}],name:[{required:!0,message:"姓名不能为空",trigger:"blur"},{min:1,max:6,message:"长度需要在1-6个字符之间",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:"邮箱格式有误",trigger:"blur"}]});return{store:e,route:o,pageCount:r,btnLoading:l,isPhoneExist:u,loginForm:p,loginFormRule:g,showPassword11:m,userId:f,verificationForm:h,verificationFormRule:v,checkVerify:y,showPassword21:b,showPassword22:w,isSending:_,TIME_COUNT:60,countdown:x,timer:F,userInfoForm:k,userInfoFormRule:C,hasExistHandler:()=>{u.value=!0,r.value=1},joinInTenant:()=>{l.value=!0,d({userId:f,tenantId:o.query.tenantId,isAdmin:!1,valid:!0}).then(()=>{r.value=3}).catch(e=>{t.error({message:"错误",description:e}),console.debug(e)}).finally(()=>{l.value=!1})},saveHandler:()=>{l.value=!0,c(k).then(()=>{r.value=3}).catch(e=>{t.error({message:"错误",description:e}),console.debug(e)}).finally(()=>{l.value=!1})}}},methods:{checkMobileNumber(e){if(!e)return!1;return/^1[3456789]\d{9}$/.test(e)},countdownControl(){const e=this;e.timer=window.setInterval(()=>{e.countdown>0&&e.countdown<=e.TIME_COUNT?(e.isSending=!0,e.countdown--):(e.isSending=!1,e.countdown=e.TIME_COUNT,clearInterval(e.timer),e.timer=null)},1e3)},sendVCodeHandler(e){const o=this;if(this.checkMobileNumber(this.verificationForm.phone)){o.countdownControl();const r={mobile:this.verificationForm.phone,type:e,currentTime:(new Date).getTime()};l(r).then(e=>{o.checkVerify=!1}).catch(e=>{t.error({message:"错误",description:e}),console.debug(e)})}else t.warning({message:"警告",description:"请输入正确的手机号"})},checkVerifyCode(){return!!this.verificationForm.verifyCode},verifyHandler(){if(this.checkVerifyCode()){const e=this,o=e.$refs.ruleVerificationForm;o.validate().then(()=>{e.btnLoading=!0,e.store.dispatch("register",{mobile:e.verificationForm.phone,vCode:e.verificationForm.verifyCode,password:e.verificationForm.confirmPassword}).then(r=>{e.userInfoForm.id=r,e.store.dispatch("loginByUserName",{usercode:e.verificationForm.phone,password:e.verificationForm.confirmPassword}).then(()=>{t.success({message:"成功",description:"注册成功"}),e.pageCount=2,o.resetFields()}).catch(e=>{t.error({message:"错误",description:e}),console.debug(e)})}).catch(e=>{t.error({message:"错误",description:e}),console.debug(e)}).finally(()=>{e.btnLoading=!1})}).catch(e=>{console.debug(e)})}else t.warning({message:"警告",description:"验证码不能为空，请输入"})},loginHandler(){const e=this,o=e.$refs.ruleLoginForm;o.validate().then(()=>{e.btnLoading=!0,e.store.dispatch("loginByUserName",{usercode:e.loginForm.usercode,password:e.loginForm.password}).then(r=>{e.userId=r,o.resetFields()}).catch(e=>{t.error({message:"错误",description:e}),console.debug(e)}).finally(()=>{e.btnLoading=!1})}).catch(e=>{console.debug(e)})}}});const C=x("data-v-323dc9d3");u("data-v-323dc9d3");const I={class:"page_wrapper"},P=y("div",{class:"sys_title"},[y("div",{class:"sys_logo"},[y("img",{src:F,width:"36",height:"50"})]),y("div",{class:"sys_divider"}),y("div",{class:"sys_text"},"多维云诚邀您加入")],-1),U={style:{"margin-top":"30%","text-align":"center"}},H=w("我已注册该平台"),E={style:{"margin-top":"10%"}},L=w("我没有注册该平台"),q={class:"info_page"},T=y("i",{class:"iconfont icon-user"},null,-1),V=y("i",{class:"iconfont icon-lock"},null,-1),z=w(" 登 录 "),N={style:{"text-align":"center"}},M=w("同意邀请加入企业"),R=y("i",{class:"iconfont icon-phone"},null,-1),j={style:{display:"inline-block",width:"65%"}},A=y("i",{class:"iconfont icon-Verification"},null,-1),S={style:{display:"inline-block",width:"35%"}},$=w(" 获取验证码 "),K=y("i",{class:"iconfont icon-lock"},null,-1),Z=y("i",{class:"iconfont icon-lock"},null,-1),B={style:{"text-align":"center"}},O=w(" 验证身份并注册 "),D={class:"info_page"},G={style:{"text-align":"center"}},J=w(" 请选择性别： "),Q=w(" 男 "),W=w(" 女 "),X={style:{"text-align":"center","margin-top":"20px"}},Y=w(" 完 成 "),ee={style:{"margin-top":"20%","line-height":"60px","text-align":"center","font-size":"20px","font-weight":"blod",color:"red"}},oe=y("br",null,null,-1);p();const re=C((function(e,o,r,a,i,s){const n=g("a-button"),t=g("a-input"),l=g("a-form-item"),d=g("a-form"),c=g("a-radio"),u=g("a-radio-group");return m(),f("div",I,[P,h(y("div",U,[y("div",null,[y(n,{type:"primary",onClick:e.hasExistHandler},{default:C(()=>[H]),_:1},8,["onClick"])]),y("div",E,[y(n,{onClick:o[1]||(o[1]=o=>e.pageCount=1)},{default:C(()=>[L]),_:1})])],512),[[v,0===e.pageCount]]),h(y("div",q,[h(y("div",null,[y(d,{ref:"ruleLoginForm",model:e.loginForm,rules:e.loginFormRule},{default:C(()=>[y(l,{name:"usercode","has-feedback":""},{default:C(()=>[y(t,{value:e.loginForm.usercode,"onUpdate:value":o[2]||(o[2]=o=>e.loginForm.usercode=o),placeholder:"请输入用户名",autocomplete:"",onKeyup:b(e.loginHandler,["enter","native"])},{prefix:C(()=>[T]),_:1},8,["value","onKeyup"])]),_:1}),y(l,{name:"password","has-feedback":"",style:{margin:"15px 0px"}},{default:C(()=>[y(t,{value:e.loginForm.password,"onUpdate:value":o[4]||(o[4]=o=>e.loginForm.password=o),type:e.showPassword11?"text":"password",placeholder:"请输入登录密码",autocomplete:"",onKeyup:b(e.loginHandler,["enter","native"])},{prefix:C(()=>[V]),suffix:C(()=>[y("i",{class:"iconfont icon-eye",style:{cursor:"pointer"},onClick:o[3]||(o[3]=o=>e.showPassword11=!e.showPassword11)})]),_:1},8,["value","type","onKeyup"])]),_:1}),y(l,null,{default:C(()=>[y(n,{loading:e.btnLoading,type:"primary",shape:"round",style:{width:"100%",height:"35px"},onClick:e.loginHandler},{default:C(()=>[z]),_:1},8,["loading","onClick"])]),_:1})]),_:1},8,["model","rules"])],512),[[v,e.isPhoneExist&&!e.userId]]),h(y("div",N,[y(n,{type:"primary",loading:e.btnLoading,onClick:e.joinInTenant},{default:C(()=>[M]),_:1},8,["loading","onClick"])],512),[[v,e.isPhoneExist&&e.userId]]),h(y("div",null,[y(d,{ref:"ruleVerificationForm",model:e.verificationForm,rules:e.verificationFormRule},{default:C(()=>[y(l,{name:"phone","has-feedback":""},{default:C(()=>[y(t,{value:e.verificationForm.phone,"onUpdate:value":o[5]||(o[5]=o=>e.verificationForm.phone=o),placeholder:"请输入手机号",autocomplete:""},{prefix:C(()=>[R]),_:1},8,["value"])]),_:1}),y(l,{name:"verifyCode","has-feedback":""},{default:C(()=>[y("div",j,[y(t,{value:e.verificationForm.verifyCode,"onUpdate:value":o[6]||(o[6]=o=>e.verificationForm.verifyCode=o),placeholder:"请输入验证码",autocomplete:"off"},{prefix:C(()=>[A]),_:1},8,["value"])]),y("div",S,[h(y(n,{type:"primary",style:{width:"100%"},onClick:o[7]||(o[7]=o=>e.sendVCodeHandler("register"))},{default:C(()=>[$]),_:1},512),[[v,!e.isSending]]),h(y(n,{disabled:"",type:"primary",style:{width:"100%"}},{default:C(()=>[w(_(e.countdown)+"s 后可获取 ",1)]),_:1},512),[[v,e.isSending]])])]),_:1}),y(l,{name:"password","has-feedback":""},{default:C(()=>[y(t,{value:e.verificationForm.password,"onUpdate:value":o[9]||(o[9]=o=>e.verificationForm.password=o),type:e.showPassword21?"text":"password",placeholder:"请设置密码",autocomplete:"off"},{prefix:C(()=>[K]),suffix:C(()=>[y("i",{class:"iconfont icon-eye",style:{cursor:"pointer"},onClick:o[8]||(o[8]=o=>e.showPassword21=!e.showPassword21)})]),_:1},8,["value","type"])]),_:1}),y(l,{name:"confirmPassword","has-feedback":""},{default:C(()=>[y(t,{value:e.verificationForm.confirmPassword,"onUpdate:value":o[11]||(o[11]=o=>e.verificationForm.confirmPassword=o),type:e.showPassword22?"text":"password",placeholder:"请确认密码",autocomplete:"off"},{prefix:C(()=>[Z]),suffix:C(()=>[y("i",{class:"iconfont icon-eye",style:{cursor:"pointer"},onClick:o[10]||(o[10]=o=>e.showPassword22=!e.showPassword22)})]),_:1},8,["value","type"])]),_:1}),y(l,null,{default:C(()=>[y("div",B,[y(n,{loading:e.btnLoading,type:"primary",disabled:e.checkVerify,shape:"round",style:{width:"100%",height:"35px"},onClick:e.verifyHandler},{default:C(()=>[O]),_:1},8,["loading","disabled","onClick"])])]),_:1})]),_:1},8,["model","rules"])],512),[[v,!e.isPhoneExist]])],512),[[v,1===e.pageCount]]),h(y("div",D,[y(d,{ref:"ruleUserInfoForm",model:e.userInfoForm,rules:e.userInfoFormRule},{default:C(()=>[y(l,{name:"code","has-feedback":""},{default:C(()=>[y(t,{value:e.userInfoForm.code,"onUpdate:value":o[12]||(o[12]=o=>e.userInfoForm.code=o),placeholder:"请设置登录名",autocomplete:""},null,8,["value"])]),_:1}),y(l,{name:"name","has-feedback":""},{default:C(()=>[y(t,{value:e.userInfoForm.name,"onUpdate:value":o[13]||(o[13]=o=>e.userInfoForm.name=o),placeholder:"请输入姓名",autocomplete:""},null,8,["value"])]),_:1}),y(l,{name:"email","has-feedback":""},{default:C(()=>[y(t,{value:e.userInfoForm.email,"onUpdate:value":o[14]||(o[14]=o=>e.userInfoForm.email=o),placeholder:"请输入邮箱",autocomplete:""},null,8,["value"])]),_:1}),y(l,{name:"gender","has-feedback":""},{default:C(()=>[y("div",G,[J,y(u,{value:e.userInfoForm.gender,"onUpdate:value":o[15]||(o[15]=o=>e.userInfoForm.gender=o)},{default:C(()=>[y(c,{value:"male"},{default:C(()=>[Q]),_:1}),y(c,{value:"female"},{default:C(()=>[W]),_:1})]),_:1},8,["value"])])]),_:1}),y(l,null,{default:C(()=>[y("div",X,[y(n,{loading:e.btnLoading,type:"primary",shape:"round",style:{width:"100%",height:"35px"},onClick:e.saveHandler},{default:C(()=>[Y]),_:1},8,["loading","onClick"])])]),_:1})]),_:1},8,["model","rules"])],512),[[v,2===e.pageCount]]),h(y("div",null,[y("div",ee,[w(_(e.isPhoneExist?"已加入发出邀请的企业！":"信息录入完成！")+" ",1),oe,w(" "+_(e.isPhoneExist?"":"可在PC端登录系统进行使用"),1)])],512),[[v,3===e.pageCount]])])}));k.render=re,k.__scopeId="data-v-323dc9d3";export default k;
