(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vJZ0:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("mrSG"),o=u("7C/q"),i=u("ZZ/e"),s=u("63M6"),r=u("AFwK"),a=u("Pg7S");class c{constructor(l,n,u,t){this.afriService=l,this.modalController=n,this.route=u,this.toastController=t,this.route.queryParams.subscribe(l=>{this.datas=void 0,this.show=void 0,this.onGetProfile(),this.getForum(),this.afriService.showNotification()})}ngOnInit(){}onGetProfile(){this.afriService.getProfile().subscribe(l=>{this.mail=l.success.email,console.log(this.mail)})}presentToast(){return e.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Votre question est ajout\xe9",position:"bottom",color:"dark",duration:2e3})).present()}))}payment(){return e.b(this,void 0,void 0,(function*(){const l=yield this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{mail:this.mail}});return yield l.present()}))}getForum(){return e.b(this,void 0,void 0,(function*(){this.afriService.getForum(this.afriService.language_id).subscribe(l=>{l.payment_required?(this.payment(),this.show=l):this.datas=l,console.log(this.datas)},l=>console.log(l))}))}addPost(){return e.b(this,void 0,void 0,(function*(){const l=yield this.modalController.create({cssClass:"modal-fullscreen",component:s.a});return l.onDidDismiss().then(l=>{this.datas=void 0,this.show=void 0,this.onGetProfile(),this.getForum()}),yield l.present()}))}commentPost(l){return e.b(this,void 0,void 0,(function*(){const n=yield this.modalController.create({cssClass:"modal-fullscreen",component:r.a,componentProps:{post:l}});return yield n.present()}))}}class b{}var d=u("pMnS"),f=u("oBZk"),m=u("SVse"),h=u("iInd"),p=t.qb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:10px!important}ion-icon[_ngcontent-%COMP%]{fill:#ff8c1d}.btn[_ngcontent-%COMP%]{margin:5px;padding:6px 30px;border-radius:8px;line-height:30px;font-weight:700;color:#fff;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(#dfb401),to(#df011f));background-image:linear-gradient(to right,#dfb401,#df011f)}"]],data:{}});function g(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,13,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.commentPost(l.context.$implicit)&&t),t}),f.V,f.q)),t.rb(1,49152,null,0,i.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.sb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,f.G,f.b)),t.rb(3,49152,null,0,i.f,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,0,"img",[["src","https://picsum.photos/50/50"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,0,6,"ion-label",[],null,null,null,f.W,f.r)),t.rb(6,49152,null,0,i.M,[t.h,t.k,t.x],null,null),(l()(),t.sb(7,0,null,0,2,"h2",[["style","color: #ff8c1d;"]],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Mb(9,null,["",""])),(l()(),t.sb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(11,null,["",""])),(l()(),t.sb(12,0,null,0,1,"ion-icon",[["class","iconElement"],["icon","assets/icon/dialogue-1.svg"]],null,null,null,f.S,f.n)),t.rb(13,49152,null,0,i.B,[t.h,t.k,t.x],{icon:[0,"icon"]},null)],(function(l,n){l(n,1,0,"none"),l(n,13,0,"assets/icon/dialogue-1.svg")}),(function(l,n){l(n,9,0,n.context.$implicit.post_title),l(n,11,0,n.context.$implicit.post_content)}))}function v(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,11,"ion-card",[],null,null,null,f.L,f.d)),t.rb(1,49152,null,0,i.l,[t.h,t.k,t.x],null,null),(l()(),t.sb(2,0,null,0,5,"ion-card-header",[],null,null,null,f.J,f.f)),t.rb(3,49152,null,0,i.n,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,3,"div",[["class","header"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,2,"ion-button",[["color","primary"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addPost()&&t),t}),f.H,f.c)),t.rb(6,49152,null,0,i.j,[t.h,t.k,t.x],{color:[0,"color"],size:[1,"size"]},null),(l()(),t.Mb(-1,0,[" Poser une question"])),(l()(),t.sb(8,0,null,0,3,"ion-card-content",[],null,null,null,f.I,f.e)),t.rb(9,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(l()(),t.hb(16777216,null,0,1,null,g)),t.rb(11,278528,null,0,m.i,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,6,0,"primary","small"),l(n,11,0,u.datas)}),null)}function k(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center;"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,f.db,f.y)),t.rb(2,49152,null,0,i.rb,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Chargement..."]))],(function(l,n){l(n,2,0,"bubbles")}),null)}function x(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,2,"div",[["style","\n        margin: 70% 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        align-content: center;\n      "]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"div",[["class","btn"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.payment()&&t),t}),null,null)),(l()(),t.Mb(-1,null,[" S'abonner "]))],null,null)}function y(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite.png"]],null,null,null,f.T,f.o)),t.rb(2,49152,null,0,i.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.sb(3,0,null,null,10,"ion-content",[],null,null,null,f.N,f.i)),t.rb(4,49152,null,0,i.t,[t.h,t.k,t.x],null,null),(l()(),t.sb(5,0,null,0,2,"h5",[["style","margin-top: 10px;"],["text-center",""]],null,null,null,null,null)),t.rb(6,16384,null,0,i.d,[t.k],null,null),(l()(),t.Mb(-1,null,["Forum"])),(l()(),t.hb(16777216,null,0,1,null,v)),t.rb(9,16384,null,0,m.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,k)),t.rb(11,16384,null,0,m.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,x)),t.rb(13,16384,null,0,m.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"assets/images/afriwhite.png"),l(n,9,0,u.datas),l(n,11,0,!u.datas&&!u.show),l(n,13,0,u.show)}),null)}function C(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-forum",[],null,null,null,y,p)),t.rb(1,114688,null,0,c,[o.a,i.Gb,h.a,i.Pb],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.ob("app-forum",c,C,{},{},[]),P=u("s7LF");u.d(n,"ForumPageModuleNgFactory",(function(){return M}));var M=t.pb(b,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[d.a,w]],[3,t.j],t.v]),t.Cb(4608,m.l,m.k,[t.s,[2,m.y]]),t.Cb(4608,P.l,P.l,[]),t.Cb(4608,i.b,i.b,[t.x,t.g]),t.Cb(4608,i.Gb,i.Gb,[i.b,t.j,t.p]),t.Cb(4608,i.Lb,i.Lb,[i.b,t.j,t.p]),t.Cb(1073742336,m.b,m.b,[]),t.Cb(1073742336,P.k,P.k,[]),t.Cb(1073742336,P.d,P.d,[]),t.Cb(1073742336,i.Db,i.Db,[]),t.Cb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),t.Cb(1073742336,b,b,[]),t.Cb(1024,h.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);