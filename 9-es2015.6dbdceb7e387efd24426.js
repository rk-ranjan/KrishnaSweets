(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BNzH:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J");class o{}var e=t("pMnS"),i=t("s7LF"),s=t("SVse");class r{}class a{constructor(n,l,t){this.router=n,this.loginService=t,this.authenticating=!1,this.loading=!0,this.invalidLoginMessage=!1,this.loginForm=l.group({password:new i.f("",i.s.required),userName:new i.f("",i.s.required)})}ngOnInit(){this.isLogin(),this.stayOnLoginPage()}ngOnDestroy(){}isLogin(){localStorage.getItem("_temp_9898jdjk_y783h")&&localStorage.getItem("_temp_9898jdjk_y783h")}login(){this.authenticating=!0;let n=new r;n.username=this.loginForm.controls.userName.value,n.password=this.loginForm.controls.password.value,this.loginService.checkLogin(n).subscribe(n=>{localStorage.setItem("User",JSON.stringify(n)),this.router.navigate(["/orders"]),this.loginService.setLoggedInStatus()},n=>{this.stayOnLoginPage(),this.invalidLoginMessage=!0})}stayOnLoginPage(){localStorage.removeItem("User"),this.loginForm.controls.userName.setValue(""),this.loginForm.controls.password.setValue("")}}var g=t("iInd"),c=t("IheW"),p=t("lJxs");const d=(()=>{class n{constructor(n){this.http=n,this.checkLogin=(n=>this.http.post(this.checkUserUrl,n).pipe(Object(p.a)(n=>(this.userName=n.UserName,this.userRole=n.IsAdmin,n)))),this.getUserRole=(()=>this.userRole),this.setLoggedInStatus=(()=>{this.isLogin=!0}),this.getLoggedInStatus=(()=>this.isLogin),this.checkUserUrl="/rest-api/user/login",this.headers=new c.g,this.headers.set("Content-Type","application/json")}getUserName(){return this.userName}}return n.ngInjectableDef=u.Gb({factory:function(){return new n(u.Kb(c.c))},token:n,providedIn:"root"}),n})();var b=u.nb({encapsulation:0,styles:[['.card[_ngcontent-%COMP%]{border-top:none;border-left:none;padding:40px}div.login[_ngcontent-%COMP%]{background-color:#fff;height:100vh;overflow:auto}div.simple-login[_ngcontent-%COMP%]{background-color:#fff;display:flex;height:100vh;overflow:auto;padding-bottom:32px;padding-top:32px}.centered[_ngcontent-%COMP%]{margin:auto}.simple-login-panel[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.05);box-shadow:rgba(0,0,0,.05) 5px 5px 0 0;padding:32px 32px 16px;width:460px}.simple-login-panel[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{margin-top:0}.company-logo.login-company-logo-image[_ngcontent-%COMP%]{position:absolute}div.login[_ngcontent-%COMP%]   .company-logo.company-logo-image[_ngcontent-%COMP%]{-webkit-animation:.4s 2.7s forwards login-company-logo-animation;animation:.4s 2.7s forwards login-company-logo-animation;opacity:0}.logo-wrapper[_ngcontent-%COMP%]{background-color:#000;height:100%;overflow:hidden;width:100%}h1.logo-text[_ngcontent-%COMP%]{align-items:center;color:#fff;display:inline-flex;font-size:80px;font-weight:700;justify-content:center;margin:0}.copyright-info[_ngcontent-%COMP%]{opacity:.8;margin-top:16px;font-size:12px}input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{width:100%;padding:15px;margin:5px 0 22px;display:inline-block;border:none;background:#f1f1f1}input[type=password][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus{background-color:#ddd;outline:0}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%;opacity:.9}button[_ngcontent-%COMP%]:hover{opacity:1}.cancelbtn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancelbtn[_ngcontent-%COMP%], .signupbtn[_ngcontent-%COMP%]{float:left;width:50%}.container[_ngcontent-%COMP%]{padding:16px}.clearfix[_ngcontent-%COMP%]::after{content:"";clear:both;display:table}@media screen and (max-width:300px){.cancelbtn[_ngcontent-%COMP%], .signupbtn[_ngcontent-%COMP%]{width:100%}}']],data:{}});function m(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,1,"p",[["style","color: red;"]],null,null,null,null,null)),(n()(),u.Db(-1,null,["Invalid UserName or Password "]))],null,null)}function h(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,44,"div",[["class","row "]],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,42,"div",[["class","col-sm-6 card"]],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,40,"form",[["autocomplete","off"],["class","form-flat"],["novalidate",""],["style","border:1px solid #ccc"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var o=!0,e=n.component;return"submit"===l&&(o=!1!==u.yb(n,5).onSubmit(t)&&o),"reset"===l&&(o=!1!==u.yb(n,5).onReset()&&o),"ngSubmit"===l&&(o=!1!==e.login()&&o),o},null,null)),u.ob(4,16384,null,0,i.x,[],null,null),u.ob(5,540672,null,0,i.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Ab(2048,null,i.c,null,[i.h]),u.ob(7,16384,null,0,i.n,[[4,i.c]],null,null),(n()(),u.pb(8,0,null,null,35,"div",[["class","container"],["style","font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"]],null,null,null,null,null)),(n()(),u.pb(9,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Db(-1,null,["Login Here"])),(n()(),u.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Db(-1,null,["Please fill in this form to access this System."])),(n()(),u.eb(16777216,null,null,1,null,m)),u.ob(14,16384,null,0,s.j,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(15,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),u.pb(16,0,null,null,1,"label",[["for","user-name"]],null,null,null,null,null)),(n()(),u.Db(-1,null,[" User Name: "])),(n()(),u.pb(18,0,[["userName",1]],null,7,"input",[["formControlName","userName"],["id","user-name"],["placeholder","Enter your user name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0;return"input"===l&&(o=!1!==u.yb(n,19)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==u.yb(n,19).onTouched()&&o),"compositionstart"===l&&(o=!1!==u.yb(n,19)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u.yb(n,19)._compositionEnd(t.target.value)&&o),o},null,null)),u.ob(19,16384,null,0,i.d,[u.C,u.k,[2,i.a]],null,null),u.ob(20,16384,null,0,i.r,[],{required:[0,"required"]},null),u.Ab(1024,null,i.j,function(n){return[n]},[i.r]),u.Ab(1024,null,i.k,function(n){return[n]},[i.d]),u.ob(23,671744,null,0,i.g,[[3,i.c],[6,i.j],[8,null],[6,i.k],[2,i.v]],{name:[0,"name"]},null),u.Ab(2048,null,i.l,null,[i.g]),u.ob(25,16384,null,0,i.m,[[4,i.l]],null,null),(n()(),u.pb(26,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),u.Db(-1,null,[" password: "])),(n()(),u.pb(28,0,[["password",1]],null,7,"input",[["formControlName","password"],["id","password"],["placeholder","Enter your valid password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0;return"input"===l&&(o=!1!==u.yb(n,29)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==u.yb(n,29).onTouched()&&o),"compositionstart"===l&&(o=!1!==u.yb(n,29)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u.yb(n,29)._compositionEnd(t.target.value)&&o),o},null,null)),u.ob(29,16384,null,0,i.d,[u.C,u.k,[2,i.a]],null,null),u.ob(30,16384,null,0,i.r,[],{required:[0,"required"]},null),u.Ab(1024,null,i.j,function(n){return[n]},[i.r]),u.Ab(1024,null,i.k,function(n){return[n]},[i.d]),u.ob(33,671744,null,0,i.g,[[3,i.c],[6,i.j],[8,null],[6,i.k],[2,i.v]],{name:[0,"name"]},null),u.Ab(2048,null,i.l,null,[i.g]),u.ob(35,16384,null,0,i.m,[[4,i.l]],null,null),(n()(),u.pb(36,0,null,null,2,"label",[],null,null,null,null,null)),(n()(),u.pb(37,0,null,null,1,"a",[["routeLink","forgot_password"],["style","margin-bottom:15px"]],null,null,null,null,null)),(n()(),u.Db(-1,null,[" Forgot Password ?: "])),(n()(),u.pb(39,0,null,null,4,"div",[["class","clearfix"]],null,null,null,null,null)),(n()(),u.pb(40,0,null,null,1,"button",[["class","cancelbtn"],["type","button"]],null,null,null,null,null)),(n()(),u.Db(-1,null,["Sign Up"])),(n()(),u.pb(42,0,null,null,1,"button",[["class","signupbtn"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u.Db(-1,null,[" Log in "])),(n()(),u.pb(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(45,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(46,0,null,null,0,"br",[],null,null,null,null,null))],function(n,l){var t=l.component;n(l,5,0,t.loginForm),n(l,14,0,t.invalidLoginMessage),n(l,20,0,""),n(l,23,0,"userName"),n(l,30,0,""),n(l,33,0,"password")},function(n,l){var t=l.component;n(l,3,0,u.yb(l,7).ngClassUntouched,u.yb(l,7).ngClassTouched,u.yb(l,7).ngClassPristine,u.yb(l,7).ngClassDirty,u.yb(l,7).ngClassValid,u.yb(l,7).ngClassInvalid,u.yb(l,7).ngClassPending),n(l,18,0,u.yb(l,20).required?"":null,u.yb(l,25).ngClassUntouched,u.yb(l,25).ngClassTouched,u.yb(l,25).ngClassPristine,u.yb(l,25).ngClassDirty,u.yb(l,25).ngClassValid,u.yb(l,25).ngClassInvalid,u.yb(l,25).ngClassPending),n(l,28,0,u.yb(l,30).required?"":null,u.yb(l,35).ngClassUntouched,u.yb(l,35).ngClassTouched,u.yb(l,35).ngClassPristine,u.yb(l,35).ngClassDirty,u.yb(l,35).ngClassValid,u.yb(l,35).ngClassInvalid,u.yb(l,35).ngClassPending),n(l,42,0,t.loginForm.invalid)})}function f(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,1,"app-login-page",[],null,null,null,h,b)),u.ob(1,245760,null,0,a,[g.k,i.e,d],null,null)],function(n,l){n(l,1,0)},null)}var y=u.lb("app-login-page",a,f,{},{},[]);class w{}t.d(l,"LoginModuleNgFactory",function(){return v});var v=u.mb(o,[],function(n){return u.vb([u.wb(512,u.j,u.Z,[[8,[e.a,y]],[3,u.j],u.v]),u.wb(4608,s.l,s.k,[u.s,[2,s.y]]),u.wb(4608,i.u,i.u,[]),u.wb(4608,i.e,i.e,[]),u.wb(1073742336,s.b,s.b,[]),u.wb(1073742336,g.n,g.n,[[2,g.s],[2,g.k]]),u.wb(1073742336,w,w,[]),u.wb(1073742336,i.t,i.t,[]),u.wb(1073742336,i.i,i.i,[]),u.wb(1073742336,i.q,i.q,[]),u.wb(1073742336,o,o,[]),u.wb(1024,g.i,function(){return[[{path:"",component:a}]]},[])])})}}]);