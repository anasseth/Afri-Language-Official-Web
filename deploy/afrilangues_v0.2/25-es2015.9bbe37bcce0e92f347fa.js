(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Oltx:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),o=t("7C/q"),i=t("ZZ/e");class r{constructor(l,n,t,e){this.afriService=l,this.router=n,this.loadCtrl=t,this.alertController=e}ngOnInit(){}wrongAlert(l){return u.b(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"successAlert",header:"Erreur",message:"<strong>"+l+"</strong>",buttons:["Continuer"]});yield n.present()}))}onSubmit(l){null==l.email?this.wrongAlert("Tous les champs doivent \xeatre remplis"):this.afriService.forgotPassword(l.email).subscribe(l=>{alert("Un e-mail vous a \xe9t\xe9 envoy\xe9, veuillez r\xe9initialiser le mot de passe en utilisant le lien fourni dans l'e-mail."),this.router.navigate(["/login"])},l=>{console.log(l),this.wrongAlert("L'email ou le mot de passe est incorrect")})}}class a{}var s=t("pMnS"),g=t("oBZk"),d=t("s7LF"),b=t("SVse"),p=t("iInd"),c=e.qb({encapsulation:0,styles:[[".logo[_ngcontent-%COMP%]{margin-top:93px;margin-bottom:10px;height:90px}.rounded[_ngcontent-%COMP%]{background-color:#fff;border:2px solid #ccc;border-radius:8px;margin:10px auto;height:50px;width:90%;font-size:15px;padding:12px 17px;outline:0;box-shadow:0 0 8px 2px rgba(0,0,0,.2);-webkit-appearance:none}.rounded[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{position:relative;margin-left:30px;margin-top:-32px}ion-input[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]:-moz-placeholder, ion-input[_ngcontent-%COMP%]:-ms-input-placeholder, ion-input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:15px;line-height:1.5em}.buttons[_ngcontent-%COMP%]{--border-radius:8px}.but[_ngcontent-%COMP%]{height:30px;--border-radius:30px;margin-top:15px}.ouModif[_ngcontent-%COMP%]{margin:30px auto;width:79%;color:#9d9d9d}.ouModif[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #9d9d9d;line-height:.1em;margin:10px 0 20px}.ouModif[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fff;padding:0 8px}.btn[_ngcontent-%COMP%]{margin:0 auto;width:90%;padding:6px;border-radius:8px;line-height:30px;color:#fff;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f)}.LoginDesktopDiv[_ngcontent-%COMP%]{display:none;visibility:visible}@media screen and (min-width:1000px){.UserLogo[_ngcontent-%COMP%]{width:110px;height:110px;border-radius:50%;background-color:#ff4500;margin:auto;left:0;right:0;text-align:center}.AfriLogoDiv[_ngcontent-%COMP%]{margin:45% auto auto;left:0;right:0;padding-top:35px;padding-left:15px;text-align:center;width:200px;height:200px;border-radius:50%;background-color:#fff;box-shadow:0 9px 13px -3px rgba(255,255,255,.43);-webkit-box-shadow:0 9px 13px -3px rgba(255,255,255,.43);-moz-box-shadow:0 9px 13px -3px rgba(255,255,255,.43)}.LoginDesktopDiv[_ngcontent-%COMP%]{margin:30px auto auto;left:0;right:0;display:-webkit-box!important;display:flex!important;visibility:visible!important;width:40%!important;-webkit-box-pack:center;justify-content:center;box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-webkit-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-moz-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3)}.logo[_ngcontent-%COMP%]{margin:auto;height:auto;vertical-align:middle}.rounded[_ngcontent-%COMP%]{box-shadow:none;border-radius:none;border:none}h1[_ngcontent-%COMP%]{color:#fff;font-size:35px;font-weight:700}.contentdesktop[_ngcontent-%COMP%]{width:100%;margin-top:5%;border:2px solid #fc1634;border-top-left-radius:10px;border-bottom-left-radius:10px;padding:5% 7% 50px}.imgdesktop[_ngcontent-%COMP%]{width:45%;height:100%;max-width:400px;min-height:450px;margin-top:5%;padding-left:7%;padding-right:7%;background-image:-webkit-gradient(linear,left top,right top,from(#f7cf30),to(#fc1634));background-image:linear-gradient(to right,#f7cf30,#fc1634);border-top-right-radius:10px;border-bottom-right-radius:10px}.logoAfdesk[_ngcontent-%COMP%]{height:170px!important}.logoAfrica[_ngcontent-%COMP%]{height:130px!important}.loginmobiledisnone[_ngcontent-%COMP%]{display:none!important;visibility:hidden}h5[_ngcontent-%COMP%]{font-weight:700;font-size:30px}.logindesktop[_ngcontent-%COMP%]{border:1px solid #dfb401;padding:1% 2%;margin-left:20%!important;border-radius:5px;cursor:pointer}.logindesktop[_ngcontent-%COMP%]:hover{border:1px solid #dfb401;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f);color:#fff!important;cursor:pointer}.desktoploginIBTN[_ngcontent-%COMP%]{width:90%;padding:6px;border-radius:8px;line-height:30px;color:#fff;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f)}input[_ngcontent-%COMP%]:hover{border:2px solid #00a2ff!important}}"]],data:{}});function h(l){return e.Ob(0,[(l()(),e.sb(0,0,null,null,76,"ion-content",[["text-left",""]],null,null,null,g.N,g.i)),e.rb(1,49152,null,0,i.t,[e.h,e.k,e.x],null,null),e.rb(2,16384,null,0,i.d,[e.k],null,null),(l()(),e.sb(3,0,null,0,46,"div",[["class","loginmobiledisnone"]],null,null,null,null,null)),(l()(),e.sb(4,0,null,null,1,"ion-img",[["class","logo"],["src","assets/images/afrilangues.png"]],null,null,null,g.T,g.o)),e.rb(5,49152,null,0,i.C,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.sb(6,0,null,null,32,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var u=!0,o=l.component;return"submit"===n&&(u=!1!==e.Eb(l,8).onSubmit(t)&&u),"reset"===n&&(u=!1!==e.Eb(l,8).onReset()&&u),"ngSubmit"===n&&(u=!1!==o.onSubmit(e.Eb(l,57).value)&&u),u}),null,null)),e.rb(7,16384,null,0,d.m,[],null,null),e.rb(8,4210688,[["f",4]],0,d.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Jb(2048,null,d.b,null,[d.i]),e.rb(10,16384,null,0,d.h,[[4,d.b]],null,null),(l()(),e.sb(11,0,null,null,23,"ion-list",[["style","margin-bottom: 20px"]],null,null,null,g.X,g.s)),e.rb(12,49152,null,0,i.N,[e.h,e.k,e.x],null,null),(l()(),e.sb(13,0,null,0,10,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,9,"div",[["class","iconInput"]],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,1,"ion-icon",[["icon","assets/icon/envelope.svg"],["slot","start"],["style","height: 20px; color: #ff5e06"]],null,null,null,g.S,g.n)),e.rb(16,49152,null,0,i.B,[e.h,e.k,e.x],{icon:[0,"icon"]},null),(l()(),e.sb(17,0,null,null,6,"ion-input",[["name","email"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==e.Eb(l,18)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Eb(l,18)._handleInputEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(o.email=t)&&u),u}),g.U,g.p)),e.rb(18,16384,null,0,i.Ob,[e.k],null,null),e.Jb(1024,null,d.e,(function(l){return[l]}),[i.Ob]),e.rb(20,671744,null,0,d.j,[[2,d.b],[8,null],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,d.f,null,[d.j]),e.rb(22,16384,null,0,d.g,[[4,d.f]],null,null),e.rb(23,49152,null,0,i.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.sb(24,0,null,0,10,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,9,"div",[["class","iconInput"]],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,1,"ion-icon",[["icon","assets/icon/lock.svg"],["slot","start"],["style","height: 20px; color: #ff5e06"]],null,null,null,g.S,g.n)),e.rb(27,49152,null,0,i.B,[e.h,e.k,e.x],{icon:[0,"icon"]},null),(l()(),e.sb(28,0,null,null,6,"ion-input",[["name","password"],["placeholder","Mot de passe"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==e.Eb(l,29)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Eb(l,29)._handleInputEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(o.password=t)&&u),u}),g.U,g.p)),e.rb(29,16384,null,0,i.Ob,[e.k],null,null),e.Jb(1024,null,d.e,(function(l){return[l]}),[i.Ob]),e.rb(31,671744,null,0,d.j,[[2,d.b],[8,null],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,d.f,null,[d.j]),e.rb(33,16384,null,0,d.g,[[4,d.f]],null,null),e.rb(34,49152,null,0,i.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.sb(35,0,null,null,3,"div",[["style","display: flex; align-items: center; justify-content: center"]],null,null,null,null,null)),(l()(),e.sb(36,0,null,null,2,"button",[["class","btn"],["expand","block"],["size","default"],["style","width: 90%; margin-left: 5%"],["type","submit"]],null,null,null,null,null)),(l()(),e.sb(37,0,null,null,1,"strong",[["style","font-size: 17px"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,[" Connexion"])),(l()(),e.sb(39,0,null,null,10,"div",[["style","margin: 15px"],["text-center",""]],null,null,null,null,null)),e.rb(40,16384,null,0,i.d,[e.k],null,null),(l()(),e.sb(41,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.sb(42,0,null,null,3,"a",[["routerLink","/forgotpwd"],["style","color: black; text-decoration: none"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Eb(l,43).onClick(t)&&u),"click"===n&&(u=!1!==e.Eb(l,44).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.rb(43,737280,null,0,i.Mb,[b.g,i.Hb,e.k,p.m,[2,p.n]],null,null),e.rb(44,671744,null,0,p.o,[p.m,p.a,b.g],{routerLink:[0,"routerLink"]},null),(l()(),e.Mb(-1,null,[" Mot de passe oubli\xe9 ? "])),(l()(),e.sb(46,0,null,null,3,"a",[["routerLink","/introlangues"],["style","color: #e07a0c; margin-left: -1px; text-decoration: none"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Eb(l,47).onClick(t)&&u),"click"===n&&(u=!1!==e.Eb(l,48).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.rb(47,737280,null,0,i.Mb,[b.g,i.Hb,e.k,p.m,[2,p.n]],null,null),e.rb(48,671744,null,0,p.o,[p.m,p.a,b.g],{routerLink:[0,"routerLink"]},null),(l()(),e.Mb(-1,null,[" Cr\xe9er un compte ?"])),(l()(),e.sb(50,0,null,0,26,"div",[["class","LoginDesktopDiv"]],null,null,null,null,null)),(l()(),e.sb(51,0,null,null,25,"div",[["class","contentdesktop"]],null,null,null,null,null)),(l()(),e.sb(52,0,null,null,24,"div",[],null,null,null,null,null)),(l()(),e.sb(53,0,null,null,1,"div",[["class","UserLogo"]],null,null,null,null,null)),(l()(),e.sb(54,0,null,null,0,"img",[["src","https://img.icons8.com/color/96/000000/forgot-password.png"]],null,null,null,null,null)),(l()(),e.sb(55,0,null,null,21,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var u=!0,o=l.component;return"submit"===n&&(u=!1!==e.Eb(l,57).onSubmit(t)&&u),"reset"===n&&(u=!1!==e.Eb(l,57).onReset()&&u),"ngSubmit"===n&&(u=!1!==o.onSubmit(e.Eb(l,57).value)&&u),u}),null,null)),e.rb(56,16384,null,0,d.m,[],null,null),e.rb(57,4210688,[["f",4]],0,d.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Jb(2048,null,d.b,null,[d.i]),e.rb(59,16384,null,0,d.h,[[4,d.b]],null,null),(l()(),e.sb(60,0,null,null,12,"ion-list",[["style","margin-bottom: 20px"]],null,null,null,g.X,g.s)),e.rb(61,49152,null,0,i.N,[e.h,e.k,e.x],null,null),(l()(),e.sb(62,0,null,0,10,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),e.sb(63,0,null,null,9,"div",[["class","iconInput"]],null,null,null,null,null)),(l()(),e.sb(64,0,null,null,1,"ion-icon",[["icon","assets/icon/envelope.svg"],["slot","start"],["style","height: 20px; color: #ff5e06"]],null,null,null,g.S,g.n)),e.rb(65,49152,null,0,i.B,[e.h,e.k,e.x],{icon:[0,"icon"]},null),(l()(),e.sb(66,0,null,null,6,"ion-input",[["name","email"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==e.Eb(l,67)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Eb(l,67)._handleInputEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(o.email=t)&&u),u}),g.U,g.p)),e.rb(67,16384,null,0,i.Ob,[e.k],null,null),e.Jb(1024,null,d.e,(function(l){return[l]}),[i.Ob]),e.rb(69,671744,null,0,d.j,[[2,d.b],[8,null],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,d.f,null,[d.j]),e.rb(71,16384,null,0,d.g,[[4,d.f]],null,null),e.rb(72,49152,null,0,i.F,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.sb(73,0,null,null,3,"div",[["style","display: flex; align-items: center; justify-content: center"]],null,null,null,null,null)),(l()(),e.sb(74,0,null,null,2,"button",[["class","btn desktoploginIBTN"],["expand","block"],["size","default"],["style","width: 90%; margin-left: 5%"],["type","submit"]],null,null,null,null,null)),(l()(),e.sb(75,0,null,null,1,"strong",[["style","font-size: 17px"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Obtenir le lien de mot de passe oubli\xe9"]))],(function(l,n){var t=n.component;l(n,5,0,"assets/images/afrilangues.png"),l(n,16,0,"assets/icon/envelope.svg"),l(n,20,0,"email",t.email),l(n,23,0,"email","Email","text"),l(n,27,0,"assets/icon/lock.svg"),l(n,31,0,"password",t.password),l(n,34,0,"password","Mot de passe","password"),l(n,43,0),l(n,44,0,"/forgotpwd"),l(n,47,0),l(n,48,0,"/introlangues"),l(n,65,0,"assets/icon/envelope.svg"),l(n,69,0,"email",t.email),l(n,72,0,"email","Email","text")}),(function(l,n){l(n,6,0,e.Eb(n,10).ngClassUntouched,e.Eb(n,10).ngClassTouched,e.Eb(n,10).ngClassPristine,e.Eb(n,10).ngClassDirty,e.Eb(n,10).ngClassValid,e.Eb(n,10).ngClassInvalid,e.Eb(n,10).ngClassPending),l(n,17,0,e.Eb(n,22).ngClassUntouched,e.Eb(n,22).ngClassTouched,e.Eb(n,22).ngClassPristine,e.Eb(n,22).ngClassDirty,e.Eb(n,22).ngClassValid,e.Eb(n,22).ngClassInvalid,e.Eb(n,22).ngClassPending),l(n,28,0,e.Eb(n,33).ngClassUntouched,e.Eb(n,33).ngClassTouched,e.Eb(n,33).ngClassPristine,e.Eb(n,33).ngClassDirty,e.Eb(n,33).ngClassValid,e.Eb(n,33).ngClassInvalid,e.Eb(n,33).ngClassPending),l(n,42,0,e.Eb(n,44).target,e.Eb(n,44).href),l(n,46,0,e.Eb(n,48).target,e.Eb(n,48).href),l(n,55,0,e.Eb(n,59).ngClassUntouched,e.Eb(n,59).ngClassTouched,e.Eb(n,59).ngClassPristine,e.Eb(n,59).ngClassDirty,e.Eb(n,59).ngClassValid,e.Eb(n,59).ngClassInvalid,e.Eb(n,59).ngClassPending),l(n,66,0,e.Eb(n,71).ngClassUntouched,e.Eb(n,71).ngClassTouched,e.Eb(n,71).ngClassPristine,e.Eb(n,71).ngClassDirty,e.Eb(n,71).ngClassValid,e.Eb(n,71).ngClassInvalid,e.Eb(n,71).ngClassPending)}))}function m(l){return e.Ob(0,[(l()(),e.sb(0,0,null,null,1,"app-login",[],null,null,null,h,c)),e.rb(1,114688,null,0,r,[o.a,p.m,i.Fb,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.ob("app-login",r,m,{},{},[]);t.d(n,"ForgotPasswordPageModuleNgFactory",(function(){return x}));var x=e.pb(a,[],(function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[s.a,f]],[3,e.j],e.v]),e.Cb(4608,b.l,b.k,[e.s,[2,b.y]]),e.Cb(4608,d.l,d.l,[]),e.Cb(4608,i.b,i.b,[e.x,e.g]),e.Cb(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.Cb(4608,i.Lb,i.Lb,[i.b,e.j,e.p]),e.Cb(1073742336,b.b,b.b,[]),e.Cb(1073742336,d.k,d.k,[]),e.Cb(1073742336,d.d,d.d,[]),e.Cb(1073742336,i.Db,i.Db,[]),e.Cb(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),e.Cb(1073742336,a,a,[]),e.Cb(1024,p.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);