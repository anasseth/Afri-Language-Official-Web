(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qZlf:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=t("mrSG"),i=t("7C/q"),e=t("ZZ/e"),a=t("Qp4c"),r=function(){function l(l,n,t){var u=this;this.route=l,this.afriService=n,this.modalController=t,this.demo="kris",this.route.queryParams.subscribe((function(l){u.afriService.showNotification(),u.onGetStatistics()}))}return l.prototype.ngOnInit=function(){this.afriService.showNotification(),this.onGetStatistics()},l.prototype.onGetStatistics=function(){var l=this;this.afriService.getStatistics().subscribe((function(n){l.datas=n.questionStrong,l.datasw=n.questionWeek,l.data=n.questionStrong,console.log(n.questionStrong)}),(function(l){console.log(l)}))},l.prototype.onGetStatistics2=function(){var l=this;this.afriService.getStatistics().subscribe((function(n){l.datas=n.questionStrong,l.datasw=n.questionWeek,l.data=n.questionWeek,console.log(n.questionStrong)}),(function(l){console.log(l)}))},l.prototype.niceText=function(l){return l.replace(/^\["+|\"]+$/g,"").split('","')},l.prototype.clickStatistic=function(l){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(n){switch(n.label){case 0:return console.log(l),[4,this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{question_type:l,lesson:l}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}}))}))},l}(),c=function(){return function(){}}(),s=t("pMnS"),b=t("oBZk"),p=t("Ip0R"),g=t("ZYCi"),d=u.sb({encapsulation:0,styles:[[".info[_ngcontent-%COMP%]{margin:0 10px;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly;font-size:28px;font-weight:700;color:#fff}.info[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{padding:30px 0;margin:0 3px;background-color:#00b002;height:200px;width:100%}.info[_ngcontent-%COMP%]   .info__rigth[_ngcontent-%COMP%]{padding:30px 0;margin:0 3px;background-color:#d10000;height:200px;width:100%}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}@media screen and (min-width:1000px){.desktopheader[_ngcontent-%COMP%]{border-radius:0!important;height:10%!important;color:#fff;box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-webkit-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-moz-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3)}.LanguageMobileDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}h5[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;font-weight:700;color:#fff}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:block;visibility:visible}.LanguageDesktopDiv2[_ngcontent-%COMP%]{margin-top:30px;width:100%}.rounded[_ngcontent-%COMP%]{width:60%;border-radius:0;border:0 solid transparent;border-left:5px solid transparent}.rounded[_ngcontent-%COMP%]:hover{border-left:5px solid #102563}body[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.container[_ngcontent-%COMP%]{padding:70px 0}.card[_ngcontent-%COMP%]{margin-right:10px!important;position:relative;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:10px;-webkit-transition:.25s ease-in;transition:.25s ease-in;padding-top:3%;height:170px;width:100%;border:1px solid #fff!important;box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-webkit-box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-moz-box-shadow:0 9px 13px -5px rgba(0,0,0,.43);margin:auto;left:0;right:0;display:-webkit-box!important;display:flex!important;visibility:visible!important;-webkit-box-pack:center;justify-content:center;background-color:#df9905;color:#fff!important;cursor:pointer}.icon1[_ngcontent-%COMP%], .icon2[_ngcontent-%COMP%]{font-size:80px;color:#fff!important;padding-top:2%;padding-right:10%}.Y[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,right top,from(#ffc107),color-stop(#ffc107),color-stop(#ffc107),to(#ffe38e));background-image:linear-gradient(90deg,#ffc107,#ffc107,#ffc107,#ffe38e);color:#000}.G[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,right top,from(#28a745),color-stop(#28a745),color-stop(#28a745),to(#57d474));background-image:linear-gradient(90deg,#28a745,#28a745,#28a745,#57d474)}.R[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,right top,from(#dc3545),color-stop(#dc3545),color-stop(#dc3545),to(#e77e8a));background-image:linear-gradient(90deg,#dc3545,#dc3545,#dc3545,#e77e8a)}.B[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,right top,from(#17a2b8),color-stop(#17a2b8),color-stop(#17a2b8),to(#76d4e2));background-image:linear-gradient(90deg,#17a2b8,#17a2b8,#17a2b8,#76d4e2)}.card2[_ngcontent-%COMP%]{margin-right:10px!important;position:relative;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:10px;-webkit-transition:.25s ease-in;transition:.25s ease-in;padding-top:3%;height:170px;width:100%;border:1px solid #fff!important;box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-webkit-box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-moz-box-shadow:0 9px 13px -5px rgba(0,0,0,.43);margin:auto;left:0;right:0;display:-webkit-box!important;display:flex!important;visibility:visible!important;-webkit-box-pack:center;justify-content:center;background-color:#e74c3c;color:#fff!important;cursor:pointer}.card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:100%;height:170px;background:linear-gradient(120.55deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.239) 100%);border-radius:10px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:25px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Ubuntu;font-style:normal;font-weight:700;font-size:18px;color:#f2f2f2;margin-bottom:10px;margin-top:0}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:Ubuntu;font-style:normal;font-weight:500;font-size:14px;color:#f2f2f2;margin-bottom:10px;margin-top:0}.card[_ngcontent-%COMP%]   .fav[_ngcontent-%COMP%]{position:absolute;top:25px;right:25px;cursor:pointer}.card[_ngcontent-%COMP%]   .fav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.card2[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]:hover{color:#fff;-webkit-transition-duration:.2s;transition-duration:.2s;border-radius:10px;background-position:top!important;box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-webkit-box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-moz-box-shadow:0 9px 13px -5px rgba(0,0,0,.43);-webkit-transform:scale(1.1)!important;transform:scale(1.1)!important}p.hover[_ngcontent-%COMP%]{background-color:#f2f2f2!important}h1[_ngcontent-%COMP%]{color:#fff;font-size:30px!important;font-weight:700!important}h3[_ngcontent-%COMP%]{color:#000;font-size:20px!important;font-weight:400}.h2h[_ngcontent-%COMP%]{color:#000!important;font-weight:400!important}.bg[_ngcontent-%COMP%]{background-color:#fff;padding-top:1%;padding-bottom:1%;padding-left:1%;cursor:pointer;border-bottom:1px solid #dadada;border-radius:10px}.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px;margin-bottom:30px}}"]],data:{}});function f(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,b.db,b.y)),u.tb(2,49152,null,0,e.rb,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.ub(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Chargement..."]))],(function(l,n){l(n,2,0,"bubbles")}),null)}function h(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,9,"ion-item",[],null,null,null,b.V,b.q)),u.tb(1,49152,null,0,e.G,[u.h,u.k,u.z],null,null),(l()(),u.ub(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.G,b.b)),u.tb(3,49152,null,0,e.f,[u.h,u.k,u.z],null,null),(l()(),u.ub(4,0,null,0,0,"img",[["src","https://picsum.photos/50/50"]],null,null,null,null,null)),(l()(),u.ub(5,0,null,0,4,"ion-label",[["class","bg"]],null,null,null,b.W,b.r)),u.tb(6,49152,null,0,e.M,[u.h,u.k,u.z],null,null),(l()(),u.ub(7,0,null,0,2,"h2",[["class","h2h"],["style","color: #ff8c1d"]],null,null,null,null,null)),(l()(),u.ub(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(9,null,["",""]))],null,(function(l,n){l(n,9,0,n.component.niceText(n.parent.context.$implicit.question))}))}function m(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,2,"div",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.clickStatistic(l.context.$implicit)&&u),u}),null,null)),(l()(),u.jb(16777216,null,null,1,null,h)),u.tb(2,16384,null,0,p.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"Dialogue"!=n.context.$implicit.question_type)}),null)}function x(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,b.V,b.q)),u.tb(1,49152,null,0,e.G,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(l()(),u.ub(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.G,b.b)),u.tb(3,49152,null,0,e.f,[u.h,u.k,u.z],null,null),(l()(),u.ub(4,0,null,0,0,"img",[["src","https://picsum.photos/50/50"]],null,null,null,null,null)),(l()(),u.ub(5,0,null,0,4,"ion-label",[["class","bg"]],null,null,null,b.W,b.r)),u.tb(6,49152,null,0,e.M,[u.h,u.k,u.z],null,null),(l()(),u.ub(7,0,null,0,2,"h2",[["class","h2h"],["style","color: #ff8c1d"]],null,null,null,null,null)),(l()(),u.ub(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(9,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,9,0,n.component.niceText(n.parent.context.$implicit.question))}))}function k(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,2,"div",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.clickStatistic(l.context.$implicit)&&u),u}),null,null)),(l()(),u.jb(16777216,null,null,1,null,x)),u.tb(2,16384,null,0,p.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"Dialogue"!=n.context.$implicit.question_type)}),null)}function v(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,51,"div",[],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,2,"h5",[["class","LanguageMobileDiv"],["style","color: black; font-weight: bold; padding-bottom: 1%"],["text-center",""]],null,null,null,null,null)),u.tb(2,16384,null,0,e.d,[u.k],null,null),(l()(),u.Ob(-1,null,[" Mes Statistiques "])),(l()(),u.ub(4,0,null,null,11,"div",[["class","LanguageMobileDiv"]],null,null,null,null,null)),(l()(),u.ub(5,0,null,null,10,"div",[["class","info"]],null,null,null,null,null)),(l()(),u.ub(6,0,null,null,4,"div",[["class","info__left"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onGetStatistics()&&u),u}),null,null)),(l()(),u.ub(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Ob(8,null,["",""])),(l()(),u.ub(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Mots Appris"])),(l()(),u.ub(11,0,null,null,4,"div",[["class","info__rigth"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onGetStatistics2()&&u),u}),null,null)),(l()(),u.ub(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Ob(13,null,["",""])),(l()(),u.ub(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Mots \xe0 revoir"])),(l()(),u.ub(16,0,null,null,3,"h5",[["class","LanguageDesktopDiv"],["style","margin-top: 20px"],["text-center",""]],null,null,null,null,null)),u.tb(17,16384,null,0,e.d,[u.k],null,null),(l()(),u.ub(18,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Mes Statistiques"])),(l()(),u.ub(20,0,null,null,20,"div",[["class","LanguageDesktopDiv"]],null,null,null,null,null)),(l()(),u.ub(21,0,null,null,19,"div",[["class","LanguageDesktopDiv2"]],null,null,null,null,null)),(l()(),u.ub(22,0,null,null,18,"div",[["class","info"]],null,null,null,null,null)),(l()(),u.ub(23,0,null,null,8,"div",[["class","card2 R"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onGetStatistics2()&&u),u}),null,null)),(l()(),u.ub(24,0,null,null,2,"div",[["class","icon2"]],null,null,null,null,null)),(l()(),u.ub(25,0,null,null,1,"ion-icon",[["name","analytics"]],null,null,null,b.S,b.n)),u.tb(26,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.ub(27,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.ub(28,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u.Ob(29,null,["",""])),(l()(),u.ub(30,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Mots \xe0 revoir"])),(l()(),u.ub(32,0,null,null,8,"div",[["class","card2 G"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onGetStatistics2()&&u),u}),null,null)),(l()(),u.ub(33,0,null,null,2,"div",[["class","icon2"]],null,null,null,null,null)),(l()(),u.ub(34,0,null,null,1,"ion-icon",[["name","podium"]],null,null,null,b.S,b.n)),u.tb(35,49152,null,0,e.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.ub(36,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.ub(37,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u.Ob(38,null,["",""])),(l()(),u.ub(39,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Mots Appris"])),(l()(),u.ub(41,0,null,null,10,"ion-card",[],null,null,null,b.L,b.d)),u.tb(42,49152,null,0,e.l,[u.h,u.k,u.z],null,null),(l()(),u.ub(43,0,null,0,8,"ion-card-content",[],null,null,null,b.I,b.e)),u.tb(44,49152,null,0,e.m,[u.h,u.k,u.z],null,null),(l()(),u.ub(45,0,null,0,2,"div",[["class","LanguageMobileDiv"]],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,m)),u.tb(47,278528,null,0,p.i,[u.P,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ub(48,0,null,0,3,"div",[["class","LanguageDesktopDiv"]],null,null,null,null,null)),(l()(),u.ub(49,0,null,null,2,"div",[["class","LanguageDesktopDiv2"]],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,k)),u.tb(51,278528,null,0,p.i,[u.P,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,26,0,"analytics"),l(n,35,0,"podium"),l(n,47,0,t.data),l(n,51,0,t.data)}),(function(l,n){var t=n.component;l(n,8,0,t.datas.length),l(n,13,0,t.datasw.length),l(n,29,0,t.datasw.length),l(n,38,0,t.datas.length)}))}function w(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite.png"]],null,null,null,b.T,b.o)),u.tb(2,49152,null,0,e.C,[u.h,u.k,u.z],{src:[0,"src"]},null),(l()(),u.ub(3,0,null,null,5,"ion-content",[],null,null,null,b.N,b.i)),u.tb(4,49152,null,0,e.t,[u.h,u.k,u.z],null,null),(l()(),u.jb(16777216,null,0,1,null,f)),u.tb(6,16384,null,0,p.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,0,1,null,v)),u.tb(8,16384,null,0,p.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,"assets/images/afriwhite.png"),l(n,6,0,!t.datas),l(n,8,0,t.datas)}),null)}function O(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,1,"app-statistics",[],null,null,null,w,d)),u.tb(1,114688,null,0,r,[g.a,i.a,e.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var M=u.qb("app-statistics",r,O,{},{},[]),_=t("gIcY");t.d(n,"StatisticsPageModuleNgFactory",(function(){return P}));var P=u.rb(c,[],(function(l){return u.Db([u.Eb(512,u.j,u.cb,[[8,[s.a,M]],[3,u.j],u.x]),u.Eb(4608,p.l,p.k,[u.u,[2,p.y]]),u.Eb(4608,_.l,_.l,[]),u.Eb(4608,e.b,e.b,[u.z,u.g]),u.Eb(4608,e.Gb,e.Gb,[e.b,u.j,u.q]),u.Eb(4608,e.Lb,e.Lb,[e.b,u.j,u.q]),u.Eb(1073742336,p.b,p.b,[]),u.Eb(1073742336,_.k,_.k,[]),u.Eb(1073742336,_.d,_.d,[]),u.Eb(1073742336,e.Db,e.Db,[]),u.Eb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),u.Eb(1073742336,c,c,[]),u.Eb(1024,g.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);