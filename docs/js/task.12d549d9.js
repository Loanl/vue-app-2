(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task"],{"1d21":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("Taskmanager",{attrs:{msg:"Planifier une tâche"}})],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"taskmanager"},[o("h1",[t._v(t._s(t.msg))]),o("form",{on:{submit:function(e){return e.preventDefault(),t.addNewTodo(e)}}},[o("label",{attrs:{for:"new-todo"}},[t._v("Ajouter une tâche ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoText,expression:"newTodoText"}],attrs:{id:"new-todo",placeholder:""},domProps:{value:t.newTodoText},on:{input:function(e){e.target.composing||(t.newTodoText=e.target.value)}}}),o("button",[t._v(" Ajouter")])]),o("div",{staticClass:"album py-5 bg-light"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},[o("ul",t._l(t.todos,(function(e,n){return o("todo-item",{key:e.id,tag:"li",attrs:{title:e.title},on:{remove:function(e){return t.todos.splice(n,1)}}})})),1)])])])])},r=[],l={name:"Taskmanager",props:{msg:String}},i=l,u=o("2877"),c=Object(u["a"])(i,s,r,!1,null,null,null),d=c.exports,m={name:"Task",components:{Taskmanager:d}},p=m,v=Object(u["a"])(p,n,a,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=task.12d549d9.js.map