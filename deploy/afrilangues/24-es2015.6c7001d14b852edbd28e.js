(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{UbGJ:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("7C/q");class i{constructor(l,n,t){this.afriService=l,this.router=n,this.route=t,this.options=[{name:"Mes langues",icon:"assets/icon/internet.svg",url:"langues"},{name:"Param\xe8tres",icon:"assets/icon/settings.svg",url:"parametres"},{name:"Aide",icon:"assets/icon/information.svg",url:"help"},{name:"A propos d'Afrilangues ",icon:"assets/icon/businessman-talking-about-data-analysis.svg",url:"about"}],this.router.queryParams.subscribe(l=>{this.afriService.showNotification(),""==this.afriService.myToken&&this.route.navigateByUrl("/login")})}ngOnInit(){}notification(){this.afriService.showNotification()}logout(){this.afriService.clearToken(),this.afriService.language_id=void 0}}class o{}var a=t("pMnS"),r=t("iInd"),s=t("ZZ/e"),c=t("SVse"),b=t("oBZk"),p=u.qb({encapsulation:0,styles:[[".rounded[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;margin:30px auto;height:50px;width:94%;line-height:25px;font-size:15px;padding:0 15px;outline:0;-webkit-appearance:none}.rounded[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;padding:15px}.rounded[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;margin:-3px 14px}.btn[_ngcontent-%COMP%]{margin:17px 56px;padding:6px;border-radius:8px;line-height:30px;color:#fff!important;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f)}@media screen and (min-width:1000px){.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px}.DesktopDiv[_ngcontent-%COMP%]{display:block;visibility:visible;width:70%;margin:auto;left:0;right:0}.rounded[_ngcontent-%COMP%]{border-radius:0}.btn[_ngcontent-%COMP%]{width:30%;margin:auto;left:0;right:0}}"]],data:{}});function d(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,8,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,7,"div",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Eb(l,2).onClick()&&e),"click"===n&&(e=!1!==u.Eb(l,3).onClick(t)&&e),e}),null,null)),u.rb(2,16384,null,0,r.n,[r.m,r.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.rb(3,737280,null,0,s.Mb,[c.g,s.Hb,u.k,r.m,[2,r.n]],null,null),(l()(),u.sb(4,0,null,null,1,"ion-icon",[["slot","start"],["style","height: 20px; color: #000000"]],null,null,null,b.S,b.n)),u.rb(5,49152,null,0,s.B,[u.h,u.k,u.x],{icon:[0,"icon"]},null),(l()(),u.sb(6,0,null,null,2,"ion-label",[["class","label"]],null,null,null,b.W,b.r)),u.rb(7,49152,null,0,s.M,[u.h,u.k,u.x],null,null),(l()(),u.Mb(8,0,[" "," "]))],(function(l,n){l(n,2,0,u.wb(1,"/tabs/tabs/",n.context.$implicit.url,"")),l(n,3,0),l(n,5,0,n.context.$implicit.icon)}),(function(l,n){l(n,8,0,n.context.$implicit.name)}))}function g(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afrilangues.png"]],null,null,null,b.T,b.o)),u.rb(2,49152,null,0,s.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.sb(3,0,null,null,11,"ion-content",[],null,null,null,b.N,b.i)),u.rb(4,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.sb(5,0,null,0,3,"h5",[["style","margin-top: 20px"],["text-center",""]],null,null,null,null,null)),u.rb(6,16384,null,0,s.d,[u.k],null,null),(l()(),u.sb(7,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Compte"])),(l()(),u.sb(9,0,null,0,5,"div",[["class","DesktopDiv"]],null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,d)),u.rb(11,278528,null,0,c.i,[u.N,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(12,0,null,null,2,"div",[["class","btn"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.logout()&&u),u}),null,null)),(l()(),u.sb(13,0,null,null,1,"strong",[["style","color: white; font-weight: 500; font-size: 17px"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,[" D\xe9connexion "]))],(function(l,n){var t=n.component;l(n,2,0,"assets/images/afrilangues.png"),l(n,11,0,t.options)}),null)}function h(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-comptes",[],null,null,null,g,p)),u.rb(1,114688,null,0,i,[e.a,r.a,r.m],null,null)],(function(l,n){l(n,1,0)}),null)}var f=u.ob("app-comptes",i,h,{},{},[]),m=t("s7LF");t.d(n,"ComptesPageModuleNgFactory",(function(){return k}));var k=u.pb(o,[],(function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[a.a,f]],[3,u.j],u.v]),u.Cb(4608,c.l,c.k,[u.s,[2,c.y]]),u.Cb(4608,m.l,m.l,[]),u.Cb(4608,s.b,s.b,[u.x,u.g]),u.Cb(4608,s.Gb,s.Gb,[s.b,u.j,u.p]),u.Cb(4608,s.Lb,s.Lb,[s.b,u.j,u.p]),u.Cb(1073742336,c.b,c.b,[]),u.Cb(1073742336,m.k,m.k,[]),u.Cb(1073742336,m.d,m.d,[]),u.Cb(1073742336,s.Db,s.Db,[]),u.Cb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),u.Cb(1073742336,o,o,[]),u.Cb(1024,r.k,(function(){return[[{path:"comptes",component:i,children:[{path:"parametres",loadChildren:"../parametres/parametres.module#ParametresPageModule"},{path:"langues",loadChildren:"../langues/langues.module#LanguesPageModule"},{path:"help",loadChildren:"../help/help.module#HelpPageModule"}]},{path:"",redirectTo:"comptes",pathMatch:"full"}]]}),[])])}))}}]);