(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(68)},55:function(e,t,n){},57:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(15),i=n.n(r),c=(n(55),n(16)),l=n(17),u=n(48),s=n(18),d=n(47),b=n(3),p=n(8),h=(n(57),n(49)),m={container:{width:"20vw",height:"20vw",padding:"5px",float:"left",boxSizing:"border-box"},box:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"blue",width:"100%",height:"100%",fontSize:"3rem",color:"white"}},x=Object(p.a)(function(e){return e.color&&(m.box=Object(h.a)({},m.box,{backgroundColor:e.color})),a.a.createElement("div",{style:m.container},a.a.createElement("div",{style:m.box},e.num?e.num:""))}),f=["#C94C24","#268BD2","#C4226F","#859835","#6D73C2","#37A198","#DA3637","#F0AD4E"],g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={rects:[],boxNum:10},n.rects=n.rects.bind(Object(b.a)(Object(b.a)(n))),n.inputHandler=n.inputHandler.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"rects",value:function(){for(var e=[],t=0;t<this.state.boxNum;t++)e.push(a.a.createElement(x,{num:t+1,color:f[t%f.length],key:t}));return e}},{key:"inputHandler",value:function(e){this.setState({boxNum:e.target.value.replace(/\D+/g,"")}),this.rects()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:v.inputContainer},a.a.createElement("label",{style:v.label},"Number of Boxes"),a.a.createElement("input",{style:v.input,value:this.state.boxNum,onChange:this.inputHandler})),this.rects())}}]),t}(o.Component),v={inputContainer:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"},label:{marginRight:"20px"},input:{padding:"5px 10px",width:"150px",textAlign:"center",lineHeight:"2rem",fontSize:"2rem",border:"1px solid transparent",boxShadow:"0px 0px 2px 1px #666",":hover":{border:"1px solid #999",ouline:"none"},":focus":{outline:"none"}}},w=Object(p.a)(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.950a4c55.chunk.js.map