(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],[,function(e,t,o){e.exports={header:"Form_header__2Q69M",form:"Form_form__3wvE7",todoInput:"Form_todoInput__1pzEp",todoButton:"Form_todoButton__1_PZF",formGroup:"Form_formGroup__29fHf",select:"Form_select__9-8jd",filterTodoList:"Form_filterTodoList__2hfGa"}},,,function(e,t,o){e.exports={todo:"Todo_todo__1mlW6",completed:"Todo_completed__32REo",trashBtn:"Todo_trashBtn__DueEW",completeBtn:"Todo_completeBtn__3QNeu"}},,,function(e,t,o){e.exports={todoContainer:"TodoList_todoContainer__1VrMG",todoList:"TodoList_todoList__wJSF2"}},,,,function(e,t,o){e.exports={container:"App_container__1qkKC"}},,function(e,t,o){e.exports=o(19)},,,,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(10),r=o.n(c),l=(o(18),o(5)),s=o(11),d=o.n(s),i=o(12),u=o(1),m=o.n(u),p=o(3),f=function(e){return n.a.createElement("div",null,n.a.createElement("header",{className:m.a.header},n.a.createElement("h1",null,"what're you upto today?")),n.a.createElement("form",{className:m.a.form},n.a.createElement("div",{className:m.a.formGroup},n.a.createElement("input",{value:e.inputText,type:"text",className:m.a.todoInput,onChange:function(t){e.setInputText(t.target.value)},spellCheck:"false"}),n.a.createElement("button",{className:m.a.todoButton,type:"submit",onClick:function(t){if(t.preventDefault(),""!==e.inputText){var o={inputText:e.inputText,completed:!1,id:1e3*Math.random()};e.setTodos([].concat(Object(i.a)(e.todos),[o])),e.setInputText("")}}},n.a.createElement(p.b,null))),n.a.createElement("div",{className:m.a.select},n.a.createElement("select",{onChange:function(t){e.setStatus(t.target.value)},name:"todos",className:m.a.filterTodoList},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted")))))},_=o(8),E=o(4),T=o.n(E),h=function(e){return n.a.createElement("div",{className:T.a.todo},n.a.createElement("li",{className:"".concat(e.todo.completed?T.a.completed:"")},e.text),n.a.createElement("button",{className:T.a.completeBtn,onClick:function(){e.setTodos(e.todos.map((function(t){return t.id===e.todo.id?Object(_.a)(Object(_.a)({},t),{},{completed:!t.completed}):t})))}},n.a.createElement(p.a,null)),n.a.createElement("button",{className:T.a.trashBtn,onClick:function(){e.setTodos(e.todos.filter((function(t){return t.id!==e.todo.id})))}},n.a.createElement(p.c,null)))},b=o(7),v=o.n(b),x=function(e){return n.a.createElement("div",{className:v.a.todoContainer},n.a.createElement("ul",{className:v.a.todoList},e.filteredTodos.map((function(t){return n.a.createElement(h,{text:t.inputText,key:t.id,setTodos:e.setTodos,todos:e.todos,todo:t})}))))};var N=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),o=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(l.a)(r,2),i=s[0],u=s[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),_=p[0],E=p[1],T=Object(a.useState)([]),h=Object(l.a)(T,2),b=h[0],v=h[1];return Object(a.useEffect)((function(){null!==localStorage.getItem("todos")&&E(JSON.parse(localStorage.getItem("todos")))}),[]),Object(a.useEffect)((function(){!function(){switch(i){case"completed":v(_.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(_.filter((function(e){return!1===e.completed})));break;default:v(_)}}(),localStorage.setItem("todos",JSON.stringify(_))}),[_,i]),n.a.createElement("div",{className:d.a.container},n.a.createElement(f,{todos:_,setTodos:E,inputText:o,setInputText:c,setStatus:u}),n.a.createElement(x,{setTodos:E,todos:_,filteredTodos:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.665060eb.chunk.js.map