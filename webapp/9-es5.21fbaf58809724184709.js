(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vJZ0:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),o=u("7C/q"),i=u("ZZ/e"),r=u("63M6"),s=u("AFwK"),a=u("Pg7S"),c=function(){function l(l,n,u,t){var e=this;this.afriService=l,this.modalController=n,this.route=u,this.toastController=t,this.route.queryParams.subscribe((function(l){e.datas=void 0,e.show=void 0,e.onGetProfile(),e.getForum(),e.afriService.showNotification()}))}return l.prototype.ngOnInit=function(){},l.prototype.onGetProfile=function(){var l=this;this.afriService.getProfile().subscribe((function(n){l.mail=n.success.email,console.log(l.mail)}))},l.prototype.presentToast=function(){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"Votre question est ajout\xe9",position:"bottom",color:"dark",duration:2e3})];case 1:return l.sent().present(),[2]}}))}))},l.prototype.payment=function(){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{mail:this.mail}})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}}))}))},l.prototype.getForum=function(){return e.b(this,void 0,void 0,(function(){var l=this;return e.e(this,(function(n){return this.afriService.getForum(this.afriService.language_id).subscribe((function(n){n.payment_required?(l.payment(),l.show=n):l.datas=n,console.log(l.datas)}),(function(l){return console.log(l)})),[2]}))}))},l.prototype.addPost=function(){return e.b(this,void 0,void 0,(function(){var l,n=this;return e.e(this,(function(u){switch(u.label){case 0:return[4,this.modalController.create({cssClass:"modal-fullscreen",component:r.a})];case 1:return(l=u.sent()).onDidDismiss().then((function(l){n.datas=void 0,n.show=void 0,n.onGetProfile(),n.getForum()})),[4,l.present()];case 2:return[2,u.sent()]}}))}))},l.prototype.commentPost=function(l){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({cssClass:"modal-fullscreen",component:s.a,componentProps:{post:l}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}}))}))},l}(),b=function(){return function(){}}(),d=u("pMnS"),p=u("oBZk"),f=u("Ip0R"),g=u("ZYCi"),m=t.sb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:10px!important}ion-icon[_ngcontent-%COMP%]{fill:#ff8c1d}.btn[_ngcontent-%COMP%]{margin:5px;padding:6px 30px;border-radius:8px;line-height:30px;font-weight:700;color:#fff;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f)}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}@media screen and (min-width:1000px){.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px}.bg[_ngcontent-%COMP%]{background-color:#fff;padding-top:1%;padding-bottom:1%;padding-left:1%;cursor:pointer;border-bottom:1px solid #dadada;border-top-left-radius:10px;border-bottom-left-radius:10px}.bg1[_ngcontent-%COMP%]{background-color:#fff;cursor:pointer;border-bottom:1px solid #dadada;border-top-right-radius:10px;border-bottom-right-radius:10px;padding:19px 1%}h5[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;font-weight:700;color:#fff}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:block;visibility:visible}.LanguageDesktopDiv2[_ngcontent-%COMP%]{width:100%}.header1[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin-left:83%}.LanguageMobileDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}}"]],data:{}});function h(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,13,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.commentPost(l.context.$implicit)&&t),t}),p.V,p.q)),t.tb(1,49152,null,0,i.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,p.G,p.b)),t.tb(3,49152,null,0,i.f,[t.h,t.k,t.z],null,null),(l()(),t.ub(4,0,null,0,0,"img",[["src","https://picsum.photos/50/50"]],null,null,null,null,null)),(l()(),t.ub(5,0,null,0,6,"ion-label",[],null,null,null,p.W,p.r)),t.tb(6,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.ub(7,0,null,0,2,"h2",[["style","color: #ff8c1d"]],null,null,null,null,null)),(l()(),t.ub(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(9,null,["",""])),(l()(),t.ub(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Ob(11,null,["",""])),(l()(),t.ub(12,0,null,0,1,"ion-icon",[["class","iconElement"],["icon","assets/icon/dialogue-1.svg"]],null,null,null,p.S,p.n)),t.tb(13,49152,null,0,i.B,[t.h,t.k,t.z],{icon:[0,"icon"]},null)],(function(l,n){l(n,13,0,"assets/icon/dialogue-1.svg")}),(function(l,n){l(n,9,0,n.context.$implicit.post_title),l(n,11,0,n.context.$implicit.post_content)}))}function v(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,14,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.commentPost(l.context.$implicit)&&t),t}),p.V,p.q)),t.tb(1,49152,null,0,i.G,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.ub(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,p.G,p.b)),t.tb(3,49152,null,0,i.f,[t.h,t.k,t.z],null,null),(l()(),t.ub(4,0,null,0,0,"img",[["src","https://picsum.photos/50/50"]],null,null,null,null,null)),(l()(),t.ub(5,0,null,0,6,"ion-label",[["class","bg"]],null,null,null,p.W,p.r)),t.tb(6,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.ub(7,0,null,0,2,"h2",[["style","color: #000000"]],null,null,null,null,null)),(l()(),t.ub(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(9,null,["",""])),(l()(),t.ub(10,0,null,0,1,"p",[["style","color: #8f8f8f"]],null,null,null,null,null)),(l()(),t.Ob(11,null,["",""])),(l()(),t.ub(12,0,null,0,2,"div",[["class","bg1"]],null,null,null,null,null)),(l()(),t.ub(13,0,null,null,1,"ion-icon",[["name","chatbubbles"],["style","font-size: 25px"]],null,null,null,p.S,p.n)),t.tb(14,49152,null,0,i.B,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,14,0,"chatbubbles")}),(function(l,n){l(n,9,0,n.context.$implicit.post_title),l(n,11,0,n.context.$implicit.post_content)}))}function k(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,24,"ion-card",[],null,null,null,p.L,p.d)),t.tb(1,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,10,"div",[["class","LanguageMobileDiv"]],null,null,null,null,null)),(l()(),t.ub(3,0,null,null,5,"ion-card-header",[],null,null,null,p.J,p.f)),t.tb(4,49152,null,0,i.n,[t.h,t.k,t.z],null,null),(l()(),t.ub(5,0,null,0,3,"div",[["class","header"]],null,null,null,null,null)),(l()(),t.ub(6,0,null,null,2,"ion-button",[["color","primary"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addPost()&&t),t}),p.H,p.c)),t.tb(7,49152,null,0,i.j,[t.h,t.k,t.z],{color:[0,"color"],size:[1,"size"]},null),(l()(),t.Ob(-1,0,[" Poser une question"])),(l()(),t.ub(9,0,null,null,3,"ion-card-content",[],null,null,null,p.I,p.e)),t.tb(10,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.jb(16777216,null,0,1,null,h)),t.tb(12,278528,null,0,f.i,[t.P,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ub(13,0,null,0,11,"div",[["class","LanguageDesktopDiv"]],null,null,null,null,null)),(l()(),t.ub(14,0,null,null,10,"div",[["class","LanguageDesktopDiv2"]],null,null,null,null,null)),(l()(),t.ub(15,0,null,null,5,"ion-card-header",[],null,null,null,p.J,p.f)),t.tb(16,49152,null,0,i.n,[t.h,t.k,t.z],null,null),(l()(),t.ub(17,0,null,0,3,"div",[["class","header1"]],null,null,null,null,null)),(l()(),t.ub(18,0,null,null,2,"ion-button",[["color","primary"],["size","medium"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addPost()&&t),t}),p.H,p.c)),t.tb(19,49152,null,0,i.j,[t.h,t.k,t.z],{color:[0,"color"],size:[1,"size"]},null),(l()(),t.Ob(-1,0,[" Poser une question"])),(l()(),t.ub(21,0,null,null,3,"ion-card-content",[],null,null,null,p.I,p.e)),t.tb(22,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.jb(16777216,null,0,1,null,v)),t.tb(24,278528,null,0,f.i,[t.P,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"primary","small"),l(n,12,0,u.datas),l(n,19,0,"primary","medium"),l(n,24,0,u.datas)}),null)}function y(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,p.db,p.y)),t.tb(2,49152,null,0,i.rb,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.ub(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["Chargement..."]))],(function(l,n){l(n,2,0,"bubbles")}),null)}function x(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,2,"div",[["style","\n        margin: 70% 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        align-content: center;\n      "]],null,null,null,null,null)),(l()(),t.ub(2,0,null,null,1,"div",[["class","btn"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.payment()&&t),t}),null,null)),(l()(),t.Ob(-1,null,["S'abonner"]))],null,null)}function P(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),t.ub(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite.png"]],null,null,null,p.T,p.o)),t.tb(2,49152,null,0,i.C,[t.h,t.k,t.z],{src:[0,"src"]},null),(l()(),t.ub(3,0,null,null,14,"ion-content",[],null,null,null,p.N,p.i)),t.tb(4,49152,null,0,i.t,[t.h,t.k,t.z],null,null),(l()(),t.ub(5,0,null,0,3,"h5",[["class","LanguageDesktopDiv"],["style","margin-top: 20px"],["text-center",""]],null,null,null,null,null)),t.tb(6,16384,null,0,i.d,[t.k],null,null),(l()(),t.ub(7,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,["Forum"])),(l()(),t.ub(9,0,null,0,2,"h5",[["class","LanguageMobileDiv"],["style","margin-top: 10px; color: black"],["text-center",""]],null,null,null,null,null)),t.tb(10,16384,null,0,i.d,[t.k],null,null),(l()(),t.Ob(-1,null,["Forum"])),(l()(),t.jb(16777216,null,0,1,null,k)),t.tb(13,16384,null,0,f.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,y)),t.tb(15,16384,null,0,f.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,x)),t.tb(17,16384,null,0,f.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"assets/images/afriwhite.png"),l(n,13,0,u.datas),l(n,15,0,!u.datas&&!u.show),l(n,17,0,u.show)}),null)}function w(l){return t.Qb(0,[(l()(),t.ub(0,0,null,null,1,"app-forum",[],null,null,null,P,m)),t.tb(1,114688,null,0,c,[o.a,i.Gb,g.a,i.Pb],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.qb("app-forum",c,w,{},{},[]),C=u("gIcY");u.d(n,"ForumPageModuleNgFactory",(function(){return z}));var z=t.rb(b,[],(function(l){return t.Db([t.Eb(512,t.j,t.cb,[[8,[d.a,O]],[3,t.j],t.x]),t.Eb(4608,f.l,f.k,[t.u,[2,f.y]]),t.Eb(4608,C.l,C.l,[]),t.Eb(4608,i.b,i.b,[t.z,t.g]),t.Eb(4608,i.Gb,i.Gb,[i.b,t.j,t.q]),t.Eb(4608,i.Lb,i.Lb,[i.b,t.j,t.q]),t.Eb(1073742336,f.b,f.b,[]),t.Eb(1073742336,C.k,C.k,[]),t.Eb(1073742336,C.d,C.d,[]),t.Eb(1073742336,i.Db,i.Db,[]),t.Eb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),t.Eb(1073742336,b,b,[]),t.Eb(1024,g.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);