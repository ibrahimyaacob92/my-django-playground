(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(20),o=a.n(s),i=a(5),l=a(4),u=a(10),j=a(13),p=a(37),b=a(38),d=a(3),h="LOGIN_SUCCESS",m="LOGIN_FAIL",O="LOAD_USER_SUCCESS",f="LOAD_USER_FAIL",x="AUTHENTICATED_SUCCESS",v="AUTHENTICATED_FAIL",g="LOGOUT",w="PASSWORD_RESET_SUCCESS",S="PASSWORD_RESET_FAIL",y="PASSWORD_RESET_CONFIRM_FAIL",N="PASSWORD_RESET_CONFIRM_SUCCESS",_={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},A=Object(j.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case x:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0});case h:return localStorage.setItem("access",n.access),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case O:return Object(d.a)(Object(d.a)({},e),{},{user:n});case v:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1});case f:return Object(d.a)(Object(d.a)({},e),{},{user:null});case g:case m:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case y:case N:case S:case w:return Object(d.a)({},e);default:return e}}}),k=[b.a],C=Object(j.createStore)(A,{},Object(p.composeWithDevTools)(j.applyMiddleware.apply(void 0,k))),I=function(){return Object(n.jsx)("div",{children:"Activate"})},E=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"jumbotron",children:[Object(n.jsx)("h1",{className:"display-4",children:"Hello, world! Welcome to Auth System"}),Object(n.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(n.jsx)("hr",{className:"my-4"}),Object(n.jsx)("p",{children:"Click the login button"}),Object(n.jsx)("p",{className:"lead",children:Object(n.jsx)(i.b,{className:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Learn more"})})]})})},T=a(14),R=a(15),L=a(12),D=a.n(L),U=a(17),F=a(18),P=a.n(F),J=function(){return function(){var e=Object(U.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,P.a.get("".concat("http://127.0.0.1:8000","/auth/users/me/"),a);case 5:n=e.sent,t({type:O,payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:f});case 12:e.next=15;break;case 14:t({type:f});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},W=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(U.a)(D.a.mark((function a(n){var c,r,s;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,P.a.post("".concat("http://127.0.0.1:8000","/auth/jwt/create/"),r,c);case 5:s=a.sent,n({type:h,payload:s.data}),n(J()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:m});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,r=Object(c.useState)({email:"",password:""}),s=Object(R.a)(r,2),o=s[0],u=s[1],j=o.email,p=o.password,b=function(e){return u(Object(d.a)(Object(d.a)({},o),{},Object(T.a)({},e.target.name,e.target.value)))};return a?Object(n.jsx)(l.a,{to:"/"}):Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{children:"Sign In"}),Object(n.jsx)("p",{children:"Sign into your Account"}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(j,p)}(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"email",placeholder:"email",name:"email",value:j,onChange:function(e){return b(e)},required:!0})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"password",placeholder:"password",name:"password",value:p,minLength:"6",onChange:function(e){return b(e)},required:!0})}),Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(n.jsxs)("p",{className:"mt-3",children:["Don't have an account ? ",Object(n.jsx)(i.b,{to:"/signup",children:"Sign Up"})]}),Object(n.jsxs)("p",{className:"mt-3",children:["Forgot your password ? ",Object(n.jsx)(i.b,{to:"/reset-password",children:"Reset Password"})]})]})})),q=Object(u.b)(null,{reset_password:function(e){return function(){var t=Object(U.a)(D.a.mark((function t(a){var n,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,P.a.post("".concat("http://127.0.0.1:8000","/auth/users/reset_password/"),c,n);case 5:a({type:w}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:S});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(c.useState)(!1),r=Object(R.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)({email:""}),u=Object(R.a)(i,2),j=u[0],p=u[1],b=j.email;j.password;return s?Object(n.jsx)(l.a,{to:"/"}):Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{children:"Request Password Reset"}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(b),o(!0)}(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"email",placeholder:"email",name:"email",value:b,onChange:function(e){return function(e){return p(Object(d.a)(Object(d.a)({},j),{},Object(T.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),H=Object(u.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var c=Object(U.a)(D.a.mark((function c(r){var s,o;return D.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:n}),c.prev=2,c.next=5,P.a.post("".concat("http://127.0.0.1:8000","/auth/users/reset_password_confirm/"),o,s);case 5:r({type:N}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),r({type:y});case 11:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,r=Object(c.useState)(!1),s=Object(R.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)({new_password:"",re_new_password:""}),j=Object(R.a)(u,2),p=j[0],b=j[1],h=p.new_password,m=p.re_new_password,O=function(e){return b(Object(d.a)(Object(d.a)({},p),{},Object(T.a)({},e.target.name,e.target.value)))};return o?Object(n.jsx)(l.a,{to:"/"}):Object(n.jsx)("div",{className:"container mt-5",children:Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=t.params.uid,c=t.params.token;a(n,c,h,m),i(!0)}(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"password",placeholder:"new password",name:"new_password",value:h,minLength:"6",onChange:function(e){return O(e)},required:!0})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"password",placeholder:"confirm new password",name:"re_new_password",value:m,minLength:"6",onChange:function(e){return O(e)},required:!0})}),Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})})),M=function(){return Object(n.jsx)("div",{children:"singup"})},G=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:g})}}})((function(e){var t=e.logout,a=e.isAuthenticated;return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Auth System"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"})}),a?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"#",onClick:t,children:"Logout"})})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{className:"nav-link",to:"/signup",children:"Sign Up"})})]})]})})]})})),z=Object(u.b)(null,{checkAuthenticated:function(){return function(){var e=Object(U.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,P.a.post("".concat("http://127.0.0.1:8000","/auth/jwt/verify"),n,a);case 6:"token_not_valid"!==e.sent.data.code?t({type:x}):t({type:v}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:v});case 13:e.next=16;break;case 15:t({type:v});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:J})((function(e){var t=e.children,a=e.checkAuthenticated,r=e.load_user;return Object(c.useEffect)((function(){a(),r()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(G,{}),t]})}));var B=function(){return Object(n.jsx)(u.a,{store:C,children:Object(n.jsx)(i.a,{children:Object(n.jsx)(z,{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:E}),Object(n.jsx)(l.b,{exact:!0,path:"/login",component:W}),Object(n.jsx)(l.b,{exact:!0,path:"/reset-password",component:q}),Object(n.jsx)(l.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:H}),Object(n.jsx)(l.b,{exact:!0,path:"/activate/:uid/:token",component:I}),Object(n.jsx)(l.b,{exact:!0,path:"/signup",component:M})]})})})})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ef592d5d.chunk.js.map