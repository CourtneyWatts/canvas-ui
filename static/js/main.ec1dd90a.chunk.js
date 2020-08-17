(this["webpackJsonpcanvas-ui-test"]=this["webpackJsonpcanvas-ui-test"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(10),c=a.n(s),o=(a(17),a(2)),l=a(11),r=a(3),d=a(4),h=a(1),m=a(6),v=a(5),u=(a(18),a(19),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={editMode:!1},i.handleActivityClick=i.handleActivityClick.bind(Object(h.a)(i)),i.handleDecisionClick=i.handleDecisionClick.bind(Object(h.a)(i)),i.handleRemove=i.handleRemove.bind(Object(h.a)(i)),i.handleSave=i.handleSave.bind(Object(h.a)(i)),i}return Object(d.a)(a,[{key:"handleActivityClick",value:function(e){this.props.addActivity()}},{key:"handleDecisionClick",value:function(e){this.props.addDecision()}},{key:"handleRemove",value:function(e){this.props.remove()}},{key:"handleSave",value:function(e){this.props.save()}},{key:"render",value:function(){return n.a.createElement("div",{className:"Toolbar"},n.a.createElement("div",{className:"Toolbar-add-options"},n.a.createElement("div",{onClick:this.handleActivityClick,className:"btn special"},"Add Activity"),n.a.createElement("div",{onClick:this.props.decisionEnabled?this.handleDecisionClick:null,className:"btn special"},"Add Decision")),n.a.createElement("div",{className:"Toolbar-edit-options"},n.a.createElement("div",{onClick:this.handleRemove,className:"btn"},"Undo"),n.a.createElement("div",{onClick:this.handleSave,className:"btn mr-0"},"Save")))}}]),a}(i.Component)),b=(a(20),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={searchText:""},i.handleChange=i.handleChange.bind(Object(h.a)(i)),i}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.items.filter((function(t){return-1!==t.task.indexOf(e.state.searchText.toLowerCase())})).map((function(e,t){return n.a.createElement("li",{key:t,className:"Activity"},"Task: ",e.task,", [x:",e.x,",y:",e.y,"]")}));return n.a.createElement("div",{className:"Sidebar"},n.a.createElement("div",{className:"Sidebar-search mt-4"},n.a.createElement("input",{onChange:this.handleChange,value:this.state.searchText,type:"text",placeholder:"SEARCH"})),n.a.createElement("div",{className:"Sidebar-items mt-5"},n.a.createElement("ul",null,t)))}}]),a}(i.Component)),p=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={decisionOption:!0,items:[{x:10,y:100,width:120,height:60,task:"activity",color:"blue"}],lines:[{startPoint:[130,130],lineTo:[130,130]}]},i.draw=i.draw.bind(Object(h.a)(i)),i.addActivity=i.addActivity.bind(Object(h.a)(i)),i.addDecision=i.addDecision.bind(Object(h.a)(i)),i.remove=i.remove.bind(Object(h.a)(i)),i.save=i.save.bind(Object(h.a)(i)),i}return Object(d.a)(a,[{key:"draw",value:function(){var e=document.getElementById("myCanvas");if(e.getContext){var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.fillStyle="white",t.fillRect(0,0,e.width,e.height);var a,i=Object(l.a)(this.state.items);try{for(i.s();!(a=i.n()).done;){var n=a.value;t.fillStyle=n.color,t.fillRect(n.x,n.y,n.width,n.height)}}catch(h){i.e(h)}finally{i.f()}for(var s=0;s<this.state.lines.length;s++){var c=this.state.lines[s],r=c.startPoint,d=c.lineTo;t.beginPath(),t.moveTo.apply(t,Object(o.a)(r)),t.lineTo.apply(t,Object(o.a)(d)),t.stroke()}}}},{key:"addActivity",value:function(){var e=this,t=this.state,a=t.items,i=t.lines,n=this.state.items.length-1,s=this.state.items[n],c=s.x,l=(s.y,s.task),r="decision"===l?50:100,d="decision"===l?60:120,h={x:c+d+r,y:100,width:120,height:60,task:"activity",color:"blue"},m={startPoint:[c+d,130],lineTo:[c+r+d,130]};this.setState({items:[].concat(Object(o.a)(a),[h]),lines:[].concat(Object(o.a)(i),[m]),decisionOption:!0},(function(){e.draw()}))}},{key:"addDecision",value:function(){var e=this,t=this.state,a=t.items,i=t.lines,n=this.state.items.length-1,s=this.state.items[n],c=s.x;s.y,s.width,s.height;if("decision"!==s.task){var l={x:c+60+100,y:100,width:60,height:60,task:"decision",color:"green"},r={startPoint:[c+120,130],lineTo:[c+100+60,130]};this.setState({items:[].concat(Object(o.a)(a),[l]),lines:[].concat(Object(o.a)(i),[r]),decisionOption:!1},(function(){e.draw()}))}}},{key:"remove",value:function(){var e=this;if(!(this.state.items.length<=1)){var t=Object(o.a)(this.state.items),a=Object(o.a)(this.state.lines);t.pop(),a.pop(),this.setState({items:Object(o.a)(t),lines:Object(o.a)(a),decisionOption:!0},(function(){e.draw()}))}}},{key:"save",value:function(){window.localStorage.setItem("canvas-memory",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){this.draw()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App container mt-5"},n.a.createElement("div",{className:"small-screen-text d-flex-col text-center p-5"},n.a.createElement("p",null,"Browser window is too small"),n.a.createElement("p",{className:"pt-4"},"Please open on a desktop browser"),n.a.createElement("p",{className:"pt-4"}," ","If you are using a desktop browser, please resize your browser window")),n.a.createElement("div",{className:"row main mb-5"},n.a.createElement("div",{className:"col-9"},n.a.createElement(u,{decisionEnabled:this.state.decisionOption,addDecision:this.addDecision,addActivity:this.addActivity,remove:this.remove,save:this.save}),n.a.createElement("canvas",{id:"myCanvas",width:"800",height:"500",style:{border:"1px solid"}})),n.a.createElement("div",{className:"main col-3"},n.a.createElement(b,{items:this.state.items}))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.ec1dd90a.chunk.js.map