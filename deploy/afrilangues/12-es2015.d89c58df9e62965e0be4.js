(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{m86E:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("mrSG"),i=e("7C/q"),o=e("ZZ/e"),s=e("r5jN"),r=e("wHSu"),c=e("Pg7S");class a{constructor(l,n,e,t){this.afriService=l,this.route=n,this.router=e,this.modalController=t,this.faCoffee=r.a,this.route.queryParams.subscribe(l=>{this.thematics=void 0,this.show=void 0,this.onGetProfile(),this.onGetThematics(),this.afriService.showNotification(),console.log("params : ",l),l&&l.language&&(this.data=l.language)})}ngOnInit(){}onGetProfile(){this.afriService.getProfile().subscribe(l=>{this.mail=l.success.email,this.role=l.success.role,console.log(l)})}payment(){return u.b(this,void 0,void 0,(function*(){const l=yield this.modalController.create({cssClass:"modal-fullscreen",component:c.a,componentProps:{mail:this.mail}});return yield l.present()}))}onGetThematics(){console.log(this.afriService.language_id),this.afriService.getThematics(this.afriService.language_id).subscribe(l=>{1==l.payment_required?(this.payment(),this.show=l,console.log("ici")):this.thematics=l},l=>console.log(l))}thematicClick(l){return u.b(this,void 0,void 0,(function*(){const n=yield this.modalController.create({cssClass:"modal-fullscreen",component:s.a,componentProps:{thematic:l}});return yield n.present()}))}}class b{}var d=e("pMnS"),p=e("fNgX"),h=e("oBZk"),g=e("Nv++"),f=e("cUpR"),m=e("SVse"),x=e("iInd"),C=t.qb({encapsulation:0,styles:[[".cercles[_ngcontent-%COMP%]{padding:0 15px}.cercle[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:10px;border-radius:80px;border-bottom:1px solid #ff8c1d}.cercle[_ngcontent-%COMP%]   .iconElement[_ngcontent-%COMP%]{color:#ff8c1d}.btn[_ngcontent-%COMP%]{margin:5px;padding:6px 30px;border-radius:8px;line-height:30px;font-weight:700;color:#fff;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f)}@media screen and (min-width:1000px){.cercle[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 10px 26px -21px rgba(0,0,0,.75);-webkit-box-shadow:0 10px 26px -21px rgba(0,0,0,.75);-moz-box-shadow:0 10px 26px -21px rgba(0,0,0,.75)}.hide[_ngcontent-%COMP%]{display:none;visibility:hidden}.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px}.leftCard[_ngcontent-%COMP%]{width:35%;height:60px}.rightCard[_ngcontent-%COMP%]{width:35%;height:60px;overflow:hidden}}"]],data:{}});function w(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,7,"ion-col",[["size","6"]],null,null,null,h.M,h.h)),t.rb(1,49152,null,0,o.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.sb(2,0,null,0,5,"div",[["class","cercle"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.thematicClick(l.context.$implicit)&&t),t}),null,null)),(l()(),t.sb(3,0,null,null,2,"fa-icon",[["class","iconElement ng-fa-icon"],["size","3x"]],[[1,"title",0],[8,"innerHTML",1]],null,null,p.d,p.c)),t.rb(4,573440,null,0,g.c,[f.b,g.a,g.d,[2,g.i]],{icon:[0,"icon"],size:[1,"size"]},null),t.Gb(0,m.p,[]),(l()(),t.sb(6,0,null,null,1,"p",[["style","font-size: 14px"]],null,null,null,null,null)),(l()(),t.Mb(7,null,["",""]))],(function(l,n){l(n,1,0,"6"),l(n,4,0,t.wb(1,"",t.Nb(n,4,0,t.Eb(n,5).transform(n.context.$implicit.logo,7,110)),""),"3x")}),(function(l,n){l(n,3,0,t.Eb(n,4).title,t.Eb(n,4).renderedIconHTML),l(n,7,0,n.context.$implicit.name)}))}function k(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,2,"h5",[["class","hide"],["style","margin-top: 10px"],["text-center",""]],null,null,null,null,null)),t.rb(2,16384,null,0,o.d,[t.k],null,null),(l()(),t.Mb(-1,null,[" Lexique th\xe9matique "])),(l()(),t.sb(4,0,null,null,3,"h5",[["style","margin-top: 20px; margin-bottom: 20px"],["text-center",""]],null,null,null,null,null)),t.rb(5,16384,null,0,o.d,[t.k],null,null),(l()(),t.sb(6,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Lexique th\xe9matique"])),(l()(),t.sb(8,0,null,null,3,"ion-row",[["class","cercles"],["style","margin-top: 15px"]],null,null,null,h.Y,h.t)),t.rb(9,49152,null,0,o.ib,[t.h,t.k,t.x],null,null),(l()(),t.hb(16777216,null,0,1,null,w)),t.rb(11,278528,null,0,m.i,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.component.thematics)}),null)}function v(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,h.db,h.y)),t.rb(2,49152,null,0,o.rb,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Chargement..."]))],(function(l,n){l(n,2,0,"bubbles")}),null)}function y(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,2,"div",[["style","\n        margin: 70% 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        align-content: center;\n      "]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"div",[["class","btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.payment()&&t),t}),null,null)),(l()(),t.Mb(-1,null,[" Pour un acc\xe8s complet au lexique th\xe8matique, abonnez-vous "]))],null,null)}function M(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite-map.png"]],null,null,null,h.T,h.o)),t.rb(2,49152,null,0,o.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.sb(3,0,null,null,7,"ion-content",[],null,null,null,h.N,h.i)),t.rb(4,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.hb(16777216,null,0,1,null,k)),t.rb(6,16384,null,0,m.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,v)),t.rb(8,16384,null,0,m.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,y)),t.rb(10,16384,null,0,m.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,"assets/images/afriwhite-map.png"),l(n,6,0,e.thematics),l(n,8,0,!e.thematics&&!e.show),l(n,10,0,e.show)}),null)}function O(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-thematics",[],null,null,null,M,C)),t.rb(1,114688,null,0,a,[i.a,x.a,x.m,o.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var P=t.ob("app-thematics",a,O,{},{},[]),j=e("s7LF");e.d(n,"ThematicsPageModuleNgFactory",(function(){return _}));var _=t.pb(b,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[d.a,p.b,p.a,P]],[3,t.j],t.v]),t.Cb(4608,m.l,m.k,[t.s,[2,m.y]]),t.Cb(4608,j.l,j.l,[]),t.Cb(4608,o.b,o.b,[t.x,t.g]),t.Cb(4608,o.Gb,o.Gb,[o.b,t.j,t.p]),t.Cb(4608,o.Lb,o.Lb,[o.b,t.j,t.p]),t.Cb(1073742336,m.b,m.b,[]),t.Cb(1073742336,j.k,j.k,[]),t.Cb(1073742336,j.d,j.d,[]),t.Cb(1073742336,o.Db,o.Db,[]),t.Cb(1073742336,x.p,x.p,[[2,x.u],[2,x.m]]),t.Cb(1073742336,g.j,g.j,[]),t.Cb(1073742336,b,b,[]),t.Cb(1024,x.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);