(function(e){function t(t){for(var i,a,r=t[0],c=t[1],u=t[2],f=0,d=[];f<r.length;f++)a=r[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d1d":function(e,t,n){"use strict";n("3efe")},"23b2":function(e,t,n){},"3efe":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"WindowView"},[n("div",{staticClass:"MenuBar"},[n("MenuBar",{attrs:{menus:e.menu.menus}})],1),n("WindowView")],1),n("div",{staticClass:"TaskBar"},[n("TimeBar",{attrs:{skin:"default"}}),n("TaskBar")],1)])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mohu",attrs:{id:"taskBar"}},[n("ul",{staticClass:"wrapper"},[n("li",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:{content:"开始菜单",distance:"8",delay:e.tootip_delay},expression:"{content: '开始菜单',distance: '8',delay: tootip_delay}",modifiers:{right:!0}}],staticClass:"start-menu now mohu-hover"},[n("b-icon",{staticStyle:{width:"2rem",height:"2rem"},attrs:{icon:"command"}})],1),e.$store.state.now_frames.length?n("div",{staticClass:"line"}):e._e(),e._l([].concat(e.$store.state.now_frames),(function(t,i){return n("li",{directives:[{name:"hover",rawName:"v-hover",value:"mohu-hover",expression:"'mohu-hover'"},{name:"tooltip",rawName:"v-tooltip.right",value:{content:t.title,distance:"8",delay:e.tootip_delay},expression:"{content:item.title,distance: '8',delay: tootip_delay}",modifiers:{right:!0}}],key:t.id,class:[i==e.$store.state.task_focus_idx?"task-itemFocus":""],on:{click:function(n){return e.updateFocus(t,i)}}},[n("b-icon",{staticStyle:{width:"2rem",height:"2rem"},attrs:{icon:"inbox"}})],1)}))],2)])},r=[],c={data:function(){return{tootip_delay:{show:50,hide:0}}},methods:{updateFocus:function(e,t){this.$bus.$emit("updateFocus",e)}},mounted:function(){}},u=c,l=(n("ee69"),n("2877")),f=Object(l["a"])(u,a,r,!1,null,"3e3acbdd",null),d=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"contextmenu",rawName:"v-contextmenu"}],staticClass:"animate",attrs:{id:"windowView"}},[n("transition-group",{attrs:{"enter-active-class":"animate__animated animate__zoomIn","leave-active-class":"animate__animated animate__zoomOut"}},e._l(e.now_frames,(function(t){return n("ll-frame",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"frame.isShow"}],key:t.id,ref:t.runToken,refInFor:!0,attrs:{info:t},on:{getFocus:e.getFocus,close:e.close,hide:e.hide}},[n("div",{attrs:{slot:"content"},slot:"content"},[n(t.content.default,{tag:"component"})],1)])})),1),n("v-contextmenu",{ref:"contextmenu"},[n("v-contextmenu-item",[n("i",{staticClass:"iconfont icon-icon-test1 fs-5"}),e._v("刷新 ")]),n("v-contextmenu-item",[e.isFullScreen?n("div",{on:{click:e.exitFullScreen}},[n("i",{staticClass:"iconfont icon-full-screen",staticStyle:{"margin-left":".1rem","margin-right":".4rem"}}),e._v(" 退出全屏 ")]):n("div",{on:{click:e.fullScreen}},[n("i",{staticClass:"iconfont icon-full-screen",staticStyle:{"margin-left":".1rem","margin-right":".4rem"}}),e._v(" 全屏 ")])]),n("v-contextmenu-item",[n("i",{staticClass:"iconfont icon-icon-test fs-5"}),e._v("设置 ")]),n("v-contextmenu-item",[n("i",{staticClass:"iconfont icon-icon-test fs-5"}),e._v("取消 ")])],1)],1)},h=[],p=n("5530"),v=n("2909"),x=(n("d81d"),n("c740"),n("4e82"),n("d3b7"),n("159b"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"drag",rawName:"v-drag",value:".title-wrapper",expression:"'.title-wrapper'"}],ref:"frame",staticClass:"frame",class:[e.info.focus?"focus":""],style:{width:e.info.width,height:e.info.height,zIndex:e.info.z},attrs:{tabindex:"111"}},[n("div",{staticClass:"title"},[e.info.isShowTitle?n("div",{ref:"title-wrapper",staticClass:"title-wrapper"},[e._v(" "+e._s(e.info.title)+" ")]):e._e(),n("div",{staticClass:"options"},[[e._t("options")],n("button",{staticClass:"lbtn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.hide.apply(null,arguments)}}},[n("i",{staticClass:"iconfont icon-2zuixiaohua-2"})]),e._m(0),n("button",{staticClass:"lbtn danger",on:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}},[n("i",{staticClass:"iconfont icon-4guanbi-2"})])],2)]),n("div",{ref:"content",staticClass:"content"},[e._t("content")],2)])}),w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"lbtn"},[n("i",{staticClass:"iconfont icon-3zuidahua-1"})])}],_={props:{info:{type:Object,default:{width:"auto",height:"auto",title:"窗口组件",titleBkgColor:"#f00",frameBkgColor:"#fff",focus:!1,isDraggable:!0,isResizable:!0,isMaximizable:!0,isMinimizable:!0,isClosable:!0,isShow:!0,isShowTitle:!0}}},data:function(){return{title:"111"}},methods:{getFocus:function(){this.$emit("getFocus",this.info)},close:function(){this.$emit("close",this.info)},hide:function(){this.$emit("hide",this.info)}},watch:{"info.z":{handler:function(e){this.$refs["frame"].click()}}},mounted:function(){var e=this;this.$refs["title-wrapper"].addEventListener("mousedown",(function(){e.getFocus()})),this.$refs["content"].addEventListener("mousedown",(function(){e.getFocus()})),this.$refs["title-wrapper"].addEventListener("touchstart",(function(){e.getFocus()}),{passive:!1}),this.$refs["content"].addEventListener("touchstart",(function(){e.getFocus()}),{passive:!1})}},b=_,g=(n("907b"),Object(l["a"])(b,x,w,!1,null,"51232675",null)),y=g.exports,C=[{id:"1",title:"关于",width:"450px",height:"300px",type:"light",startPos:1,isShow:!0,isShowTitle:!0,isDraggable:!0,isResizable:!0,isMaximizable:!0,isMinimizable:!0,isClosable:!0,content:n("8000")},{id:"2",title:"窗口组件by石磊2",width:"360px",height:"300px",type:"light",startPos:1,isShow:!0,isShowTitle:!0,isDraggable:!0,isResizable:!0,isMaximizable:!0,isMinimizable:!0,isClosable:!0,content:n("7399")},{id:"3",title:"hello",width:"220px",height:"300px",type:"light",startPos:1,isShow:!0,isShowTitle:!0,isDraggable:!0,isResizable:!0,isMaximizable:!0,isMinimizable:!0,isClosable:!0,content:n("641f")}],F=(n("ac1f"),n("5319"),n("25f0"),function(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var i=16*Math.random();return e>0?(i=(e+i)%16|0,e=Math.floor(e/16)):(i=(t+i)%16|0,t=Math.floor(t/16)),("x"===n?i:3&i|8).toString(16)}))}),S=(n("77ed"),{components:{llFrame:y},data:function(){return{now_frames:[],minIndex:100,maxIndex:1e3,isFullScreen:!1}},methods:{getMaxFrameIndex:function(){return 0==this.now_frames.length?this.minIndex-1:Math.max.apply(Math,Object(v["a"])(this.now_frames.map((function(e){return e.z}))))},startFrame:function(e){this.now_frames.push(Object(p["a"])(Object(p["a"])({},e),{},{z:this.getMaxFrameIndex()+1,focus:!1,runToken:F()})),this.setFrameFocus(e),this.setTaskFocusByidx(this.now_frames.length-1)},onTop:function(e){var t=this,n=this.now_frames.findIndex((function(t){return t.runToken==e.runToken}));if(console.log("onTop",n),this.setFrameShowByidx(n),this.setTaskFocusByidx(n),this.setFrameFocus(e),this.now_frames[n].z=this.getMaxFrameIndex()+1,this.now_frames[n].z>this.maxIndex){var i=Object(v["a"])(this.now_frames).sort((function(e,t){return e.z-t.z}));this.now_frames.forEach((function(e){var n=i.findIndex((function(t){return e.z==t.z}));e.z=t.minIndex+n}))}},getFocus:function(e){this.onTop(e),this.$refs[e.runToken][0].$el.focus()},setTaskFocusByidx:function(e){this.$store.commit("setTaskFocusByidx",e)},setFrameFocus:function(e){e.runToken in this.$refs&&(console.log(11),this.$refs[e.runToken][0].$el.focus());var t=this.now_frames.findIndex((function(t){return t.id==e.id}));this.now_frames.forEach((function(e){e.focus=!1})),this.now_frames[t].focus=!0},setFrameShowByidx:function(e){this.now_frames[e].isShow=!0},updateStore:function(){this.$store.commit("updateFrames",this.now_frames)},close:function(e){var t=this.now_frames.findIndex((function(t){return t.id==e.id}));this.now_frames.splice(t,1)},hide:function(e){var t=this.now_frames.findIndex((function(t){return t.runToken==e.runToken}));this.now_frames[t].isShow=!1,e.focus=!1},fullScreen:function(){var e=this,t=document.querySelector("html");t.requestFullscreen().then((function(){console.log("进入全屏成功"),e.isFullScreen=!0})).catch((function(){console.log("进入全屏失败"),e.isFullScreen=!1}))},exitFullScreen:function(){document.exitFullscreen?(document.exitFullscreen().then(),this.isFullScreen=!1):document.mozCancelFullScreen?(document.mozCancelFullScreen(),this.isFullScreen=!1):document.webkitExitFullscreen&&(document.webkitExitFullscreen(),this.isFullScreen=!1)}},watch:{now_frames:{handler:function(e){this.updateStore()},deep:!0,immediate:!0}},mounted:function(){var e=this;this.$bus.$on("updateFocus",(function(t){!1===t.focus?(e.onTop(t),t.isShow=!0):(t.isShow=!1,t.focus=!1)})),this.startFrame(C[0]),this.startFrame(C[1]),this.startFrame(C[2])}}),k=S,T=(n("a89f"),Object(l["a"])(k,m,h,!1,null,"38493bb2",null)),$=T.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100 mohu",attrs:{id:"menuBar"}},[n("div",{staticClass:"wrapper h-100"},[n("ul",{staticClass:"d-flex felx-row h-100 align-items-center"},e._l(e.menus,(function(t){return n("li",{directives:[{name:"hover",rawName:"v-hover",value:"mohu-hover",expression:"'mohu-hover'"}],key:t.id,staticClass:"menu"},[n("i",{class:t.iconClass}),e._v(" "+e._s(t.name)+" "),n("div",{staticClass:"menu-items-wrapper"},[n("ul",{staticClass:"menu-items"},e._l(t.items,(function(i){return n("li",{directives:[{name:"hover",rawName:"v-hover",value:"mohu-hover",expression:"'mohu-hover'"}],key:t.id+""+i.id,class:[i.type]},["default"==i.type?n("div",[n("i",{class:i.iconClass}),e._v(" "+e._s(i.name)+" ")]):e._e()])})),0)])])})),0)])])},M=[],O={props:{menus:{tyepe:Array}},data:function(){return{}},methods:{},mounted:function(){}},E=O,j=(n("0d1d"),Object(l["a"])(E,z,M,!1,null,"6eda960d",null)),L=j.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mohu",attrs:{id:"timeBar"}},[n("div",{staticClass:"wrapper"},[n("defaultTimeBar",{attrs:{timestamp:e.time}})],1)])},I=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-time"},[n("div",{staticClass:"hour"},[e._v(" "+e._s(e.hour)+" ")]),n("div",{staticClass:"hour"},[e._v(" "+e._s(e.minute)+" ")]),n("div",[e._v(" "+e._s(e.month)+" / "+e._s(e.day)+" ")]),n("div",{staticClass:"week"},[e._v(" "+e._s(e.week)+" ")])])},D=[],N=(n("a9e3"),{props:{timestamp:{type:Number}},data:function(){return{year:0,month:0,day:0,hour:0,minute:0,second:0,week:""}},methods:{getNowTime:function(e){var t=new Date(e);this.year=t.getFullYear(),this.month=t.getMonth()+1,this.day=t.getDate(),this.hour=t.getHours()<10?"0"+t.getHours():t.getHours(),this.minute=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),this.second=t.getSeconds(),this.week="星期"+["日","一","二","三","四","五","六"][t.getDay()]}},watch:{timestamp:{handler:function(e){this.getNowTime(e)},immediate:!0}},mounted:function(){}}),V=N,Y=(n("e896"),Object(l["a"])(V,P,D,!1,null,"bf76a7ae",null)),q=Y.exports,R={props:{skin:{type:String,default:"default"}},components:{defaultTimeBar:q},data:function(){return{time:0}},mounted:function(){var e=this;this.time=(new Date).getTime(),setInterval((function(){e.time=(new Date).getTime()}),1e3)}},W=R,X=(n("ae0f"),Object(l["a"])(W,B,I,!1,null,"4bd1db58",null)),A=X.exports,H={components:{TaskBar:d,WindowView:$,MenuBar:L,TimeBar:A},data:function(){return{menu:{menus:[{id:1,type:"default",name:"文件",iconClass:"icon",items:[{id:1,type:"default",name:"新建",iconClass:"icon-plus",items:[]},{id:2,type:"default",name:"打开",iconClass:"icon-folder-open",items:[]},{id:3,type:"default",name:"保存",iconClass:"icon-save",items:[]},{id:4,type:"default",name:"另存为",iconClass:"icon-save-as",items:[]},{id:7,type:"line"},{id:5,type:"default",name:"关闭",iconClass:"icon-close",items:[]},{id:6,type:"default",name:"退出",iconClass:"icon-exit",items:[]}]},{id:2,type:"default",name:"编辑",iconClass:"icon",items:[{id:1,type:"default",name:"新建",iconClass:"icon-plus",items:[]},{id:2,type:"default",name:"打开",iconClass:"icon-folder-open",items:[]},{id:3,type:"default",name:"保存",iconClass:"icon-save",items:[]},{id:4,type:"default",name:"另存为",iconClass:"icon-save-as",items:[]},{id:5,type:"default",name:"关闭",iconClass:"icon-close",items:[]},{id:6,type:"default",name:"退出",iconClass:"icon-exit",items:[]}]}]}}},methods:{},mounted:function(){}},J=H,G=(n("77f6"),Object(l["a"])(J,s,o,!1,null,"34cf046e",null)),K=G.exports,Q=n("8c4f");n("aede");i["default"].use(Q["a"]);var U=[],Z=new Q["a"]({routes:U}),ee=Z,te=n("2f62");i["default"].use(te["a"]);var ne={},ie={updateFrames:function(e,t){e.now_frames=t},setTaskFocusByidx:function(e,t){e.task_focus_idx=t}},se={now_frames:[],task_focus_idx:-1},oe=new te["a"].Store({actions:ne,mutations:ie,state:se}),ae=(n("f9e3"),n("2dd8"),n("5f5b")),re=n("b1e0");n("04e6");i["default"].directive("hover",{inserted:function(e,t){e.addEventListener("mouseenter",(function(){e.classList.contains(t.value)||e.classList.add(t.value)})),e.addEventListener("mouseleave",(function(){e.classList.contains(t.value)&&e.classList.remove(t.value)}))}}),i["default"].directive("drag",{inserted:function(e,t){var n=e.querySelector(t.value);n.addEventListener("mousedown",(function(t){var n=t.clientX-e.offsetLeft,i=t.clientY-e.offsetTop;console.log(t),document.onmousemove=function(t){e.style.left=t.clientX-n+"px",e.style.top=t.clientY-i+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}),{passive:!1}),n.addEventListener("touchstart",(function(t){var n=t.changedTouches[0].clientX-e.offsetLeft,i=t.changedTouches[0].clientY-e.offsetTop;console.log(t),document.ontouchmove=function(t){e.style.left=t.changedTouches[0].clientX-n+"px",e.style.top=t.changedTouches[0].clientY-i+"px"},document.ontouchend=function(){document.ontouchmove=null,document.ontouchend=null}}),{passive:!1})}}),i["default"].directive("focus",{inserted:function(e,t){e.addEventListener("mousedown",(function(n){e.classList.contains(t.value)||e.classList.add(t.value);for(var i=document.querySelectorAll(".frame"),s=0;s<i.length;s++)i[s]!=e&&i[s].classList.contains(t.value)&&i[s].classList.remove(t.value)})),e.addEventListener("touchstart",(function(n){e.classList.contains(t.value)||e.classList.add(t.value);for(var i=document.querySelectorAll(".frame"),s=0;s<i.length;s++)i[s]!=e&&i[s].classList.contains(t.value)&&i[s].classList.remove(t.value)}),{passive:!1})}});var ce=n("003c"),ue=(n("5716"),n("d625"));n("64d2"),n("7f10");i["default"].use(ae["a"]),i["default"].use(re["a"]),i["default"].config.productionTip=!1,i["default"].directive("tooltip",ce["e"]),i["default"].directive("close-popper",ce["d"]),i["default"].component("VDropdown",ce["a"]),i["default"].component("VTooltip",ce["c"]),i["default"].component("VMenu",ce["b"]),i["default"].use(ue["a"]),new i["default"]({router:ee,store:oe,beforeCreate:function(){i["default"].prototype.$bus=this},render:function(e){return e(K)}}).$mount("#app")},"641f":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center","overflow-y":"auto"}},[n("h2",[e._v("test2")]),n("hr"),e._v(" test ")])}],o={name:"test"},a=o,r=(n("ba2e"),n("2877")),c=Object(r["a"])(a,i,s,!1,null,"233e024b",null);t["default"]=c.exports},7399:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("video",{staticStyle:{width:"100%",height:"280px",transform:"translateY(-8px)"},attrs:{src:n("ca0b"),loop:"",autoplay:"",controls:"true",muted:"true"},domProps:{muted:!0}})])},s=[],o={data:function(){return{}},methods:{},mounted:function(){}},a=o,r=n("2877"),c=Object(r["a"])(a,i,s,!1,null,null,null);t["default"]=c.exports},"77f6":function(e,t,n){"use strict";n("a15f")},8e3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center","overflow-y":"auto"}},[n("h2",{staticStyle:{color:"black"}},[e._v("llbfWebOS")]),e._v(" beta 0.0.3 "),n("hr"),e._v(" by 磊落不凡 "),n("br"),e._v(" 2022/7/6 "),n("br"),e._v(" 111 ")])}],o={name:"about"},a=o,r=n("2877"),c=Object(r["a"])(a,i,s,!1,null,null,null);t["default"]=c.exports},"907b":function(e,t,n){"use strict";n("c4a6")},"969e":function(e,t,n){},"9b75":function(e,t,n){},a15f:function(e,t,n){},a89f:function(e,t,n){"use strict";n("f653")},ae0f:function(e,t,n){"use strict";n("9b75")},aede:function(e,t,n){},ba2e:function(e,t,n){"use strict";n("969e")},c4a6:function(e,t,n){},ca0b:function(e,t,n){e.exports=n.p+"media/82363459_nb2-1-80.909a3f40.mp4"},e896:function(e,t,n){"use strict";n("23b2")},ee69:function(e,t,n){"use strict";n("f8af")},f653:function(e,t,n){},f8af:function(e,t,n){}});
//# sourceMappingURL=app.2254f19f.js.map