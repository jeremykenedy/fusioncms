(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Bz45:function(e,t,s){"use strict";s.r(t);var r=s("ke3Z"),a={data:function(){return{form:new r.a({name:"",handle:"",description:"",fieldset:{},collect_email_addresses:!1,collect_ip_addresses:!1,response_receipt:!1,message:"",redirect_on_submission:!1,redirect_url:"",enable_recaptcha:!1,enable_honeypot:!1,send_to:"",reply_to:"",form_template:"",thankyou_template:"",status:!0})}},components:{"shared-form":s("FpJd").a},methods:{submit:function(){var e=this;this.form.post("/api/forms").then((function(t){toast("Form successfully saved","success"),e.$router.push("/forms")})).catch((function(e){toast(e.message,"failed")}))}}},o=s("KHd+"),i=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"paper-plane"}},[this._v("Create Form")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form,submit:this.submit}})],1)}),[],!1,null,null,null);t.default=i.exports},FpJd:function(e,t,s){"use strict";var r={data:function(){return{ready:!1,fieldtype:{}}},props:{id:{type:Number,required:!1,default:0},form:{type:Object,required:!0},submit:{required:!0}},watch:{"form.collect_email_addresses":function(e){this.ready&&(!1===e?(this.form.response_receipt=!1,this.removeIdentifiableEmailField()):this.addIdentifiableEmailField())}},methods:{addIdentifiableEmailField:function(){var e=this.form.fieldset.sections[0].handle;this.$bus.$emit("add-field-"+e,{fieldtype:this.fieldtype,name:"E-mail",handle:"identifiable_email_address",settings:{type:"email"}})},removeIdentifiableEmailField:function(){var e=this.form.fieldset.sections[0].handle;this.$bus.$emit("remove-field-"+e,"identifiable_email_address")}},created:function(){axios.all([axios.get("/api/fieldtypes/input")]).then(axios.spread(function(e){this.fieldtype=e.data,this.ready=!0}.bind(this)))}},a=s("KHd+"),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"content-container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("p-tabs",{attrs:{replace:""}},[s("p-tab",{attrs:{name:"Settings"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("General")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("What will this form be called and what will it collect?")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("p-input",{attrs:{name:"name",label:"Name",help:"What this form will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the form's name.",autocomplete:"off",monospaced:"",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),s("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this form will collect.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("Privacy")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Customize what identifiable information is collected by this form.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full"},[s("p-checkbox-group",{staticClass:"mb-0",attrs:{inline:""}},[s("p-checkbox",{attrs:{name:"collect_email_addresses",id:"collect_email_addresses"},model:{value:e.form.collect_email_addresses,callback:function(t){e.$set(e.form,"collect_email_addresses",t)},expression:"form.collect_email_addresses"}},[e._v("Collect email addresses")]),e._v(" "),s("p-checkbox",{attrs:{name:"collect_ip_addresses",id:"collect_ip_addresses"},model:{value:e.form.collect_ip_addresses,callback:function(t){e.$set(e.form,"collect_ip_addresses",t)},expression:"form.collect_ip_addresses"}},[e._v("Collect IP addresses")])],1),e._v(" "),s("p-checkbox-group",{staticClass:"-mt-3",attrs:{inline:"",help:"Respondents will receive a copy of their submission."}},[s("p-checkbox",{attrs:{name:"response_receipt",id:"response_receipt",disabled:!e.form.collect_email_addresses},model:{value:e.form.response_receipt,callback:function(t){e.$set(e.form,"response_receipt",t)},expression:"form.response_receipt"}},[e._v("Response receipts")])],1)],1)])])]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("Spam")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Configure methods of spam prevention.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full"},[s("p-checkbox-group",{attrs:{help:"Be sure to enter your site key and secret key in settings."}},[s("p-checkbox",{attrs:{name:"enable_recaptcha",id:"enable_recaptcha"},model:{value:e.form.enable_recaptcha,callback:function(t){e.$set(e.form,"enable_recaptcha",t)},expression:"form.enable_recaptcha"}},[e._v("Enable Google reCAPTCHA")])],1),e._v(" "),s("p-checkbox-group",{attrs:{help:"A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time."}},[s("p-checkbox",{attrs:{name:"enable_honeypot",id:"enable_honeypot"},model:{value:e.form.enable_honeypot,callback:function(t){e.$set(e.form,"enable_honeypot",t)},expression:"form.enable_honeypot"}},[e._v("Enable Honeypot")])],1)],1)])])]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("E-mail")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Configure who should be notified via email.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("p-textarea",{attrs:{name:"send_to",label:"Send notifications to...",help:"List emails as a comma separated list.",placeholder:"marie.c@example.com, nikola.t@example.com","has-error":e.form.errors.has("send_to"),"error-message":e.form.errors.get("send_to")},model:{value:e.form.send_to,callback:function(t){e.$set(e.form,"send_to",t)},expression:"form.send_to"}}),e._v(" "),s("p-input",{attrs:{name:"reply_to",label:"Reply to...",help:"Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings.",autocomplete:"off","has-error":e.form.errors.has("reply_to"),"error-message":e.form.errors.get("reply_to")},model:{value:e.form.reply_to,callback:function(t){e.$set(e.form,"reply_to",t)},expression:"form.reply_to"}})],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("Confirmation")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Customize the way users receive confirmation that their submissions were successful.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("p-radio-group",{attrs:{inline:"",label:"After submitting the form...","has-error":e.form.errors.has("redirect_on_submission"),"error-message":e.form.errors.get("redirect_on_submission")}},[s("p-radio",{attrs:{id:"redirect_on_submission_false",name:"redirect_on_submission","native-value":!1},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to default confirmation page...")]),e._v(" "),s("p-radio",{attrs:{id:"redirect_on_submission_true",name:"redirect_on_submission","native-value":!0},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to custom page...")])],1),e._v(" "),!1===e.form.redirect_on_submission?s("p-input",{attrs:{name:"confirmation_message",label:"Message",help:"This message will be displayed on the confirmation page.",autocomplete:"off","has-error":e.form.errors.has("confirmation_message"),"error-message":e.form.errors.get("confirmation_message"),placeholder:"Thank you! We'll be in touch soon."},model:{value:e.form.confirmation_message,callback:function(t){e.$set(e.form,"confirmation_message",t)},expression:"form.confirmation_message"}}):e._e(),e._v(" "),!0===e.form.redirect_on_submission?s("p-input",{attrs:{name:"redirect_url",label:"URL",help:"The URL to redirect users to after submitting the form.",autocomplete:"off","has-error":e.form.errors.has("redirect_url"),"error-message":e.form.errors.get("redirect_url")},model:{value:e.form.redirect_url,callback:function(t){e.$set(e.form,"redirect_url",t)},expression:"form.redirect_url"}}):e._e()],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("Templates")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Customize the templates used to render your form and thank users for submissions.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full xxl:w-1/2"},[s("p-input",{attrs:{name:"form_template",label:"Form Template",help:"What template is responsible for rendering this form?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("form_template"),"error-message":e.form.errors.get("form_template")},model:{value:e.form.form_template,callback:function(t){e.$set(e.form,"form_template",t)},expression:"form.form_template"}})],1),e._v(" "),s("div",{staticClass:"col w-full xxl:w-1/2"},[s("p-input",{attrs:{name:"thankyou_template",label:"Thank You Template",help:"What template is reponsible for thanking respondents?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("thankyou_template"),"error-message":e.form.errors.get("thankyou_template")},model:{value:e.form.thankyou_template,callback:function(t){e.$set(e.form,"thankyou_template",t)},expression:"form.thankyou_template"}})],1)])])])]),e._v(" "),s("p-tab",{attrs:{name:"Fields"}},[s("section-builder",{model:{value:e.form.fieldset.sections,callback:function(t){e.$set(e.form.fieldset,"sections",t)},expression:"form.fieldset.sections"}})],1)],1)],1)]),e._v(" "),s("div",{staticClass:"side-container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("p-card",[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full"},[s("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:!0},{label:"Disabled",value:!1}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"forms"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Form")])],1)],1)],1)])])}),[],!1,null,null,null);t.a=o.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(e,t,s){"use strict";s("WjD0");function r(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,s,a;return t=e,(s=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&r(t.prototype,s),a&&r(t,a),e}(),o=s("5fFP");function i(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.d(t,"a",(function(){return n}));var n=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new a,this.originalData=t,this.hasChanges=!1,this.preventNavigation=s,t)this[r]=t[r]}var t,s,r;return t=e,(s=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var s=this;return new Promise((function(r,a){axios[e](t,s.data()).then((function(e){s.onSuccess(e.data),o.a.commit("form/setPreventNavigation",!1),r(e.data)})).catch((function(e){s.onFailure(e.response.data),a(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}}])&&i(t.prototype,s),r&&i(t,r),e}()}}]);