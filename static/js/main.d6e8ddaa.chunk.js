(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),i=c(3),r=c(5),s=c(4),l=c(1),u=c.n(l);c(12);function h(){return(new Date).toUTCString().slice(-12,-4)}var k=c(0),m=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:h(),clockTimerId:0},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=window.setInterval((function(){t.setState({time:h()}),console.info(t.state.time)}),1e3);this.setState({clockTimerId:e})}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.clockTimerId)}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Clock",children:[Object(k.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(k.jsx)("span",{className:"Clock__time",children:this.state.time})]})}}]),c}(u.a.PureComponent);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleLeftClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick),window.setInterval((function(){t.setState({clockName:d()})}),3300)}},{key:"render",value:function(){var t=this.state.hasClock;return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"React clock"}),t&&Object(k.jsx)(m,{clockName:this.state.clockName})]})}}]),c}(u.a.PureComponent);a.a.render(Object(k.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d6e8ddaa.chunk.js.map