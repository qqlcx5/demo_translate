webpackJsonp([0],{0:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3"}),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textTo,expression:"textTo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"输入需要翻译的内容"},domProps:{value:t.textTo},on:{input:function(e){e.target.composing||(t.textTo=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-lg-2"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.yuyan,expression:"yuyan"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.yuyan=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"ja"}},[t._v("Japanese")]),t._v(" "),n("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),n("option",{attrs:{value:"fi"}},[t._v("Finnish")]),t._v(" "),n("option",{attrs:{value:"ko"}},[t._v("Korean")])])]),t._v(" "),n("div",{staticClass:"col-lg-1"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.formSubmit}},[t._v("翻译")])]),t._v(" "),n("div",{staticClass:"col-lg-3"})])])},staticRenderFns:[]};var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tranout"},[e("h1",[this._v(this._s(this.translatedText))])])},staticRenderFns:[]};var r={name:"App",components:{Tranin:n("VU/8")({name:"tranin",data:function(){return{textTo:"",yuyan:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textTo,this.yuyan),t.preventDefault()}},created:function(){this.yuyan="en"}},s,!1,function(t){n("dGnQ")},"data-v-37ed57ec",null).exports,Tranout:n("VU/8")({name:"tranout",props:["translatedText"],data:function(){return{}}},i,!1,function(t){n("xxzO")},"data-v-65f988b4",null).exports},data:function(){return{translatedText:""}},methods:{Submit:function(t,e){var n=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180206T125346Z.f365251de048c307.ebfad968f7c91fa3dc2bb0a1aad51ef77eb66043&lang="+e+"&text="+t).then(function(t){n.translatedText=t.body.text[0]})}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("在线翻译")]),this._v(" "),e("h5",[this._v("简单 / 易用 / 便捷")]),this._v(" "),e("Tranin",{on:{formSubmit:this.Submit}}),this._v(" "),e("Tranout",{attrs:{translatedText:this.translatedText}})],1)},staticRenderFns:[]};var l=n("VU/8")(r,o,!1,function(t){n("Zjlo")},"data-v-600158d0",null).exports,u=n("8+8L");a.a.use(u.a),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:l},template:"<App/>"})},Zjlo:function(t,e){},dGnQ:function(t,e){},xxzO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0f3e088c9348d511098b.js.map