(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1083:function(e,t,n){"use strict";n(834)},1234:function(e,t,n){"use strict";n.r(t);n(11),n(127),n(245),n(86);var r,o=n(165),l=n.n(o),c=n(10),d=n(9),m=(n(406),n(407)),f=n.n(m),v=(n(408),n(409)),h=n.n(v),y=(n(37),n(169),n(19),n(61),n(62),n(68)),w=n(403),C=n(404),_=n(405),k=n(402),x=n(400),S=n.n(x),O=(n(420),{name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(r={CustomStylesValidation:w.a,BrowserDefaultsValidation:C.a,ServerSideValidation:_.a},Object(d.a)(r,h.a.name,h.a),Object(d.a)(r,f.a.name,f.a),Object(d.a)(r,"FileInput",k.a),Object(d.a)(r,"flatPicker",S.a),r),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,model:{id:"",name:"",avatar:"",address:"",username:"",email:"",vmail:"",paid:!0,cwallet:0,dwallet:0,rin:0,lin:0,tin:0,cbo:0,fmre:0,td:0,ttm:0,password:"",passwordConfirm:"",emailVisibility:!0,ref:"3hlsg1ndkw4md1n",floor:0},model1:{id:"",name:"",avatar:"",address:"",username:"",vmail:"",paid:!1,cwallet:0,dwallet:0,rin:0,lin:0,tin:0,cbo:0,fmre:0,td:0,ttm:0,ref:"3hlsg1ndkw4md1n",floor:0},link:"",obj:null,levels:[],idt:""}},methods:{firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=(n=e).model.password){t.next=4;break}return l()({showClose:!0,message:"Password is required!",type:"warning"}),t.abrupt("return");case 4:if(""!=n.model.passwordConfirm){t.next=7;break}return l()({showClose:!0,message:"Confirm Password is required!",type:"warning"}),t.abrupt("return");case 7:if(n.model.passwordConfirm==n.model.password){t.next=10;break}return l()({showClose:!0,message:"Password and Confirm Password must be same!",type:"warning"}),t.abrupt("return");case 10:if(!(n.model.password.length<8)){t.next=13;break}return l()({showClose:!0,message:"Password must be of atleast 8 characters!",type:"warning"}),t.abrupt("return");case 13:if(!(n.model.username.length<5)){t.next=16;break}return l()({showClose:!0,message:"Username must be of atleast 5 characters!",type:"warning"}),t.abrupt("return");case 16:if(!(n.model.username.split(" ").length>1)){t.next=20;break}return l()({showClose:!0,message:"Username must not contain spaces!",type:"warning"}),t.abrupt("return");case 20:if(r=new FormData,""==n.model.name||""==n.model.username||""==n.model.email){t.next=44;break}for(o in n.sin=!1,n.model.id=n.model1.id,n.model.vmail=n.model.email,n.model.avatar=null!=n.obj?n.obj:n.model1.avatar,n.model.paid=n.model1.paid,n.model.cwallet=n.model1.cwallet,n.model.dwallet=n.model1.dwallet,n.model.rin=n.model1.rin,n.model.lin=n.model1.lin,n.model.tin=n.model1.tin,n.model.cbo=n.model1.cbo,n.model.fmre=n.model1.fmre,n.model.td=n.model1.td,n.model.ttm=n.model1.ttm,n.model.ref=n.model1.ref,n.model.address=n.model1.address,n.model.floor=n.model1.floor,n.model)n.model.hasOwnProperty(o)&&r.append(o,n.model[o]);return t.next=42,y.a.collection("users").update(n.model1.id,r).then(Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l()({showClose:!0,message:"Saved Successfuly!",type:"success"}),setTimeout((function(){window.close()}),1500);case 2:case"end":return e.stop()}}),e)})))).catch((function(e){n.sin=!0,console.log(e),l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 42:t.next=45;break;case 44:l()({showClose:!0,message:"All fields are required!",type:"warning"});case 45:case"end":return t.stop()}}),t)})))()},filesChange1:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t,0!=e.length&&(r.link="",r.se=!1,r.link=URL.createObjectURL(e[0]),r.obj=e[0],r.se=!0);case 2:case"end":return n.stop()}}),n)})))()},dlt:function(){this.link="",this.obj=null},getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,d,m,f,v,h,w,C,_,k,x,S,td,O,j,$,address,L,P;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(n=e).$route.params.id,t.next=4,y.a.collection("users").getOne(r);case 4:for((o=t.sent)&&(l=o.id,c=o.name,d=o.avatar,m=o.username,f=o.vmail,v=o.paid,h=o.cwallet,w=o.dwallet,C=o.rin,_=o.lin,k=o.tin,x=o.cbo,S=o.fmre,td=o.td,O=o.ttm,j=o.ref,$=o.floor,address=o.address,n.model1={id:l,name:c,avatar:d,username:m,vmail:f,paid:v,cwallet:h,dwallet:w,rin:C,lin:_,tin:k,cbo:x,fmre:S,td:td,ttm:O,ref:j,floor:$,address:address}),L=n.model1.floor;L.toString().length<15;)L="0"+L;return n.idt=L,t.next=11,y.a.collection("floor").getOne(L);case 11:P=t.sent,n.levels=JSON.parse(P.ids);case 13:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getData()}}),j=(n(1083),n(7)),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-6"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[e._v(e._s(e.$route.name))]),e._v(" "),t("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[t("route-breadcrumb")],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Name",name:"name",placeholder:"Enter Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Enter Username","success-message":"Looks good!",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email","success-message":"Looks good!",rules:"required"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Password",name:"Password",placeholder:"Enter Password","success-message":"Looks good!",type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Confirm Password",name:"Confirm Password",placeholder:"Enter Confirm Password","success-message":"Looks good!"},model:{value:e.model.passwordConfirm,callback:function(t){e.$set(e.model,"passwordConfirm",t)},expression:"model.passwordConfirm"}})],1),e._v(" "),t("div",{staticClass:"mb-4",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Avatar"}},[t("file-input",{attrs:{accept:".jpg,.png,.jpeg,.webp"},on:{change:e.filesChange1}})],1)],1),e._v(" "),""!=e.link?t("div",{staticClass:"col-md-4 cnm",staticStyle:{height:"250px"}},[t("img",{staticClass:"op",attrs:{src:e.link}}),e._v(" "),t("i",{staticClass:"fa fa-trash plg",on:{click:function(t){return e.dlt()}}})]):e._e(),e._v(" "),t("div",{staticClass:"col-md-4 kp",staticStyle:{height:"250px"},attrs:{hidden:e.se}},[t("p",{staticClass:"spinners",attrs:{hidden:e.se}})])])]),e._v(" "),1==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return r(e.firstFormSubmit)}}},[e._v("Save")]):t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Saving\n                "),t("p",{staticClass:"spinner"})])],1)]}}])})],1)])])])],1)}),[],!1,null,"4c4b08f0",null);t.default=component.exports},400:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(421),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t),n.d(t,"Component",(function(){return p})),n.d(t,"Plugin",(function(){return m}));var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},l=function(e){return e&&e.length?e:null},c=function(e){return u({},e)},s=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),d=["locale","showMonths"],p={name:"flat-pickr",render:function(e){return e("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(e){return null===e||e instanceof Date||"string"==typeof e||e instanceof String||e instanceof Array||"number"==typeof e}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var e=this;if(!this.fp){var t=c(this.config);this.events.forEach((function(n){var r,i=o.a.defaultConfig[n]||[];t[n]=(r=t[n]||[],r instanceof Array?r:[r]).concat(i,(function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.$emit.apply(e,[a(n)].concat(r))}))})),t.defaultDate=this.value||t.defaultDate,this.fp=new o.a(this.getElem(),t),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(e){var t=this,n=e.target;this.$nextTick((function(){t.$emit("input",l(n.value))}))},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(e){this.$emit("blur",l(e.target.value))},onClose:function(e,t){this.$emit("input",l(t))},watchDisabled:function(e){e?this.fpInput().setAttribute("disabled",e):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(e){var t=this,n=c(e);s.forEach((function(e){delete n[e]})),this.fp.set(n),d.forEach((function(e){void 0!==n[e]&&t.fp.set(e,n[e])}))}},value:function(e){e!==l(this.$el.value)&&this.fp&&this.fp.setDate(e,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}},m=function(e,t){var n="flat-pickr";"string"==typeof t&&(n=t),e.component(n,p)};p.install=m,t.default=p}]).default)},402:function(e,t,n){"use strict";n(32),n(21),n(26),n(38),n(39),n(23),n(19),n(44),n(45),n(43);var r=n(9);n(11);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=o(this.files);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(r.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},f=n(7),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},405:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},834:function(e,t,n){}}]);