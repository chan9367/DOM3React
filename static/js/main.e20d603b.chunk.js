(this.webpackJsonpdom3react=this.webpackJsonpdom3react||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(1),r=n.n(l),c=(n(14),n(8)),s=n(2),u=n(3),m=n(6),i=n(5),d=n(4),h=(n(15),function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("td",{id:"cell",className:"table-cell"})}}]),n}(a.Component)),p=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={rowNum:a.props.rowNum,cells:a.props.columns},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.cells;t++)e.push(o.a.createElement(h,null));r.a.render(e,document.getElementsByClassName("row")[this.state.rowNum])}},{key:"render",value:function(){return o.a.createElement("div",{className:"row "+this.state.rowNum})}}]),n}(a.Component),b=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleColor=function(e){a.setState({color:e.target.value})},a.state={columns:a.props.columns,rows:a.props.rows,color:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.rows;t++)e.push(o.a.createElement(p,{rowNum:t,columns:this.state.columns}));r.a.render(e,document.getElementsByClassName("table")[0])}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("label",null,"Choose a color: "),o.a.createElement("select",{name:"color",onChange:this.handleColor},o.a.createElement("option",{value:""},"-------"),o.a.createElement("option",{value:"red"},"Red"),o.a.createElement("option",{value:"orange"},"Orange"),o.a.createElement("option",{value:"yellow"},"Yellow"),o.a.createElement("option",{value:"green"},"Green"),o.a.createElement("option",{value:"blue"},"Blue"),o.a.createElement("option",{value:"purple"},"Purple")),console.log("current picked color: "+this.state.color)),o.a.createElement("div",{className:"table"}))}}]),n}(a.Component),v=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateTable=function(){1===a.state.click?(a.clearStates(),r.a.unmountComponentAtNode(document.getElementById("table-container")),a.setState({click:2},a.generateTable)):2===a.state.click&&(r.a.render(o.a.createElement(b,{columns:a.state.columns,rows:a.state.rows}),document.getElementById("table-container")),a.setState({click:1}))},a.changeStates=function(){a.state.rows>0||a.state.columns>0?a.setState({update:!0}):a.setState({update:!1}),a.setState({columns:Number(a.state.columns)+Number(a.state.AddColumns),rows:Number(a.state.rows)+Number(a.state.AddRows)},a.generateTable)},a.generateTable=function(){a.state.update?a.updateTable():r.a.render(o.a.createElement(b,{columns:a.state.columns,rows:a.state.rows}),document.getElementById("table-container"))},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.state={AddRows:0,AddColumns:0,columns:5,rows:5,update:!1,click:1},a.clearStates=a.clearStates.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"clearStates",value:function(){for(var e=document.getElementsByClassName("table-cell"),t=document.getElementsByClassName("row"),n=document.getElementsByClassName("table"),a=document.getElementsByClassName("table-container"),o=e.length,l=t.length,c=n.length,s=a.length,u=o-1;u>=0;u--)r.a.unmountComponentAtNode(e[u]);for(var m=l-1;m>=0;m--)r.a.unmountComponentAtNode(t[m]);for(var i=c-1;i>=0;i--)r.a.unmountComponentAtNode(n[i]);for(var d=s-1;d>=0;d--)r.a.unmountComponentAtNode(a[d])}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("p",null,"Choose number of Rows to be added"),o.a.createElement("input",{placeholder:"5",type:"text",name:"AddRows",onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("p",null,"Choose number of Columns to be added"),o.a.createElement("input",{placeholder:"5",type:"text",name:"AddColumns",onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("button",{className:"button-add",onClick:function(){e.changeStates()}},"GENERATE")),o.a.createElement("div",{id:"table-container"}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e20d603b.chunk.js.map