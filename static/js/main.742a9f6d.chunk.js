(this.webpackJsonpdom3react=this.webpackJsonpdom3react||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(1),r=n.n(l),c=(n(13),n(7)),s=n(2),u=n(3),m=n(5),i=n(4),d=(n(14),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("td",{id:"cell",className:"table-cell"})}}]),n}(a.Component)),h=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={rowNum:a.props.rowNum,cells:a.props.columns},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.cells;t++)e.push(o.a.createElement(d,null));r.a.render(e,document.getElementsByClassName("row")[this.state.rowNum])}},{key:"render",value:function(){return o.a.createElement("div",{className:"row "+this.state.rowNum})}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleColor=function(e){a.setState({color:e.target.value})},a.state={columns:a.props.columns,rows:a.props.rows,color:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.rows;t++)e.push(o.a.createElement(h,{rowNum:t,columns:this.state.columns}));r.a.render(e,document.getElementsByClassName("table")[0])}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("label",null,"Choose a color: "),o.a.createElement("select",{name:"color",onChange:this.handleColor},o.a.createElement("option",{value:""},"-------"),o.a.createElement("option",{value:"red"},"Red"),o.a.createElement("option",{value:"orange"},"Orange"),o.a.createElement("option",{value:"yellow"},"Yellow"),o.a.createElement("option",{value:"green"},"Green"),o.a.createElement("option",{value:"blue"},"Blue"),o.a.createElement("option",{value:"purple"},"Purple")),console.log(this.state.color)),o.a.createElement("div",{className:"table"}))}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).changeStates=function(){a.setState({columns:Number(a.state.columns)+Number(a.state.AddColumns)},a.setState({rows:Number(a.state.rows)+Number(a.state.AddRows)},a.generateTable))},a.generateTable=function(){r.a.unmountComponentAtNode(document.getElementsByClassName("table-container")[0]),r.a.render(o.a.createElement(b,{columns:a.state.columns,rows:a.state.rows}),document.getElementsByClassName("table-container")[0])},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.state={AddRows:0,AddColumns:0,columns:"",rows:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("p",null,"Choose number of Rows to be added"),o.a.createElement("input",{type:"text",name:"AddRows",onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("p",null,"Choose number of Columns to be added"),o.a.createElement("input",{type:"text",name:"AddColumns",onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("button",{className:"button-add",onClick:function(){e.changeStates()}},"GENERATE")),o.a.createElement("div",{className:"table-container"}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.742a9f6d.chunk.js.map