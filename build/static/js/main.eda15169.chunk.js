(this.webpackJsonpreact_training=this.webpackJsonpreact_training||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),o=n.n(r),a=n(3),i=n(8),l=n(0);function u(e){var t=e.todo,n=e.toggleTodo;return Object(l.jsx)("div",{children:Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:t.complete,onChange:function(){n(t.id)}}),t.name," ",t.category]})})}function s(e){var t=e.todos,n=e.toggleTodo;return t.map((function(e){return Object(l.jsx)(u,{toggleTodo:n,todo:e},e.id)}))}var d=n(7),f=n.n(d),j="todoApp.todos",m=[];var b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useRef)([]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(j));e&&r(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem(j,JSON.stringify(n))}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:" Todo List App "}),Object(l.jsx)("div",{class:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",onInput:function(){var e=o.current.nameSearch.value;if(""===e||null===e){if(m===[])return;return r(m),void(m=[])}var t=Object(a.a)(n);0===m.length?(m=t,r(t.filter((function(t){return t.name.slice(0,e.length)===e})))):r(m.filter((function(t){return t.name.slice(0,e.length)===e})))},name:"TaskNameSearch",id:"taskNameSearch",placeholder:"search.. ",ref:function(e){return o.current.nameSearch=e}})}),Object(l.jsxs)("div",{class:"form-group",children:[Object(l.jsx)("input",{type:"text",className:"form-control",name:"TaskName",id:"taskName",placeholder:"task name",ref:function(e){return o.current.name=e}}),Object(l.jsx)("button",{onClick:function(e){var t=o.current.name.value;""!==t&&(console.log(t),r((function(e){return[].concat(Object(a.a)(e),[{id:f()(),name:t,complete:!1}])})),o.current.name.value=null)},children:" Add Task "}),Object(l.jsx)("button",{onClick:function(){var e=Object(a.a)(n).filter((function(e){return!e.complete}));r(e)},children:"Clear Completed "})]}),Object(l.jsx)(s,{todos:n,toggleTodo:function(e){var t=Object(a.a)(n),c=t.find((function(t){return t.id===e}));c.complete=!c.complete,r(t)}}),Object(l.jsxs)("p",{children:[" Todos left: ",n.filter((function(e){return!e.complete})).length]})]})};o.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.eda15169.chunk.js.map