(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qZlf:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),i=u("mrSG"),s=u("7C/q"),e=u("ZZ/e"),o=u("Qp4c");class c{constructor(l,n,u){this.route=l,this.afriService=n,this.modalController=u,this.demo="kris",this.route.queryParams.subscribe(l=>{this.afriService.showNotification(),this.onGetStatistics()})}ngOnInit(){this.afriService.showNotification(),this.onGetStatistics()}onGetStatistics(){this.afriService.getStatistics().subscribe(l=>{this.datas=l.questionStrong,this.datasw=l.questionWeek,this.data=l.questionStrong,console.log(l.questionStrong)},l=>{console.log(l)})}onGetStatistics2(){this.afriService.getStatistics().subscribe(l=>{this.datas=l.questionStrong,this.datasw=l.questionWeek,this.data=l.questionWeek,console.log(l.questionStrong)},l=>{console.log(l)})}niceText(l){return l.replace(/^\["+|\"]+$/g,"").split('","')}clickStatistic(l){return i.b(this,void 0,void 0,(function*(){console.log(l);const n=yield this.modalController.create({cssClass:"modal-fullscreen",component:o.a,componentProps:{question_type:l,lesson:l}});return yield n.present()}))}}class r{}var a=u("pMnS"),b=u("oBZk"),p=u("SVse"),f=u("iInd"),g=t.qb({encapsulation:0,styles:[[".info[_ngcontent-%COMP%]{margin:0 10px;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly;font-size:28px;font-weight:700;color:#fff}.info[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{padding:30px 0;margin:0 3px;background-color:#00b002;height:200px;width:100%}.info[_ngcontent-%COMP%]   .info__rigth[_ngcontent-%COMP%]{padding:30px 0;margin:0 3px;background-color:#d10000;height:200px;width:100%}"]],data:{}});function h(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center;"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,b.db,b.y)),t.rb(2,49152,null,0,e.rb,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Chargement..."]))],(function(l,n){l(n,2,0,"bubbles")}),null)}function d(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,9,"ion-item",[],null,null,null,b.V,b.q)),t.rb(1,49152,null,0,e.G,[t.h,t.k,t.x],null,null),(l()(),t.sb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.G,b.b)),t.rb(3,49152,null,0,e.f,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,0,"img",[["src","https://picsum.photos/50/50"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,0,4,"ion-label",[],null,null,null,b.W,b.r)),t.rb(6,49152,null,0,e.M,[t.h,t.k,t.x],null,null),(l()(),t.sb(7,0,null,0,2,"h2",[["style","color: #ff8c1d;"]],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Mb(9,null,["",""]))],null,(function(l,n){l(n,9,0,n.component.niceText(n.parent.context.$implicit.question))}))}function m(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"div",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.clickStatistic(l.context.$implicit)&&t),t}),null,null)),(l()(),t.hb(16777216,null,null,1,null,d)),t.rb(2,16384,null,0,p.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"Dialogue"!=n.context.$implicit.question_type)}),null)}function k(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,20,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,2,"h5",[["text-center",""]],null,null,null,null,null)),t.rb(2,16384,null,0,e.d,[t.k],null,null),(l()(),t.Mb(-1,null,["Mes Statistiques"])),(l()(),t.sb(4,0,null,null,10,"div",[["class","info"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,4,"div",[["class","info__left"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onGetStatistics()&&t),t}),null,null)),(l()(),t.sb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(7,null,["",""])),(l()(),t.sb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Mots Appris"])),(l()(),t.sb(10,0,null,null,4,"div",[["class","info__rigth"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onGetStatistics2()&&t),t}),null,null)),(l()(),t.sb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(12,null,["",""])),(l()(),t.sb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Mots \xe0 revoir"])),(l()(),t.sb(15,0,null,null,5,"ion-card",[],null,null,null,b.L,b.d)),t.rb(16,49152,null,0,e.l,[t.h,t.k,t.x],null,null),(l()(),t.sb(17,0,null,0,3,"ion-card-content",[],null,null,null,b.I,b.e)),t.rb(18,49152,null,0,e.m,[t.h,t.k,t.x],null,null),(l()(),t.hb(16777216,null,0,1,null,m)),t.rb(20,278528,null,0,p.i,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,20,0,n.component.data)}),(function(l,n){var u=n.component;l(n,7,0,u.datas.length),l(n,12,0,u.datasw.length)}))}function x(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite.png"]],null,null,null,b.T,b.o)),t.rb(2,49152,null,0,e.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.sb(3,0,null,null,5,"ion-content",[],null,null,null,b.N,b.i)),t.rb(4,49152,null,0,e.t,[t.h,t.k,t.x],null,null),(l()(),t.hb(16777216,null,0,1,null,h)),t.rb(6,16384,null,0,p.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,k)),t.rb(8,16384,null,0,p.j,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"assets/images/afriwhite.png"),l(n,6,0,!u.datas),l(n,8,0,u.datas)}),null)}function v(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-statistics",[],null,null,null,x,g)),t.rb(1,114688,null,0,c,[f.a,s.a,e.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var S=t.ob("app-statistics",c,v,{},{},[]),C=u("s7LF");u.d(n,"StatisticsPageModuleNgFactory",(function(){return q}));var q=t.pb(r,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[a.a,S]],[3,t.j],t.v]),t.Cb(4608,p.l,p.k,[t.s,[2,p.y]]),t.Cb(4608,C.l,C.l,[]),t.Cb(4608,e.b,e.b,[t.x,t.g]),t.Cb(4608,e.Gb,e.Gb,[e.b,t.j,t.p]),t.Cb(4608,e.Lb,e.Lb,[e.b,t.j,t.p]),t.Cb(1073742336,p.b,p.b,[]),t.Cb(1073742336,C.k,C.k,[]),t.Cb(1073742336,C.d,C.d,[]),t.Cb(1073742336,e.Db,e.Db,[]),t.Cb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),t.Cb(1073742336,r,r,[]),t.Cb(1024,f.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);