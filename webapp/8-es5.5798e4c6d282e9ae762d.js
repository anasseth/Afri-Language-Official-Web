(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FPSD:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("mrSG"),i=e("7C/q"),u=e("ZZ/e"),r=e("Pg7S"),a=e("K6kG"),s=function(){function n(n,l,e,t,o){var i=this;this.platform=n,this.afriService=l,this.route=e,this.router=t,this.modalController=o,this.route.queryParams.subscribe((function(n){i.onGetProfile(),i.onGetLanguage(),i.afriService.showNotification(),console.log("paramss : ",n.language),n&&n.language&&(i.data=n.language)}))}return n.prototype.showExt=function(){waripay()},n.prototype.ngOnInit=function(){this.onGetTopics(),this.afriService.showNotification()},n.prototype.onGetProfile=function(){var n=this;this.afriService.getProfile().subscribe((function(l){n.user=l.success,n.subscribed=n.user.subscribed,null==n.afriService.language_id?(n.afriService.language_id=n.user.language_id,n.language_id=n.afriService.language_id):n.language_id=n.afriService.language_id,console.log(n.language_id),n.onGetTopics(),n.onGetVerifier()}))},n.prototype.onGetLanguage=function(){var n=this;this.afriService.getLangues().subscribe((function(l){n.languages=l}))},n.prototype.showName=function(){var n=this;if(null!=this.languages)return this.languages.filter((function(l){return l.id==n.afriService.language_id}))[0].name},n.prototype.onGetTopics=function(){var n=this;console.log("id service : ",this.afriService.language_id),null!=this.afriService.language_id&&this.afriService.getTopics(this.afriService.language_id).subscribe((function(l){n.topics=l}),(function(n){return console.log(n)}))},n.prototype.onGetVerifier=function(){var n=this;null!=this.afriService.language_id&&this.afriService.getVerify(this.afriService.language_id).subscribe((function(l){n.verify=l.payment_required}),(function(n){return console.log(n)}))},n.prototype.topicClick=function(n,l,e,t){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(l){switch(l.label){case 0:return console.log(this.verify),console.log(this.user),console.log(this.subscribed),e>=0&&"user"!=this.user.role?[4,this.modalController.create({component:a.a,componentProps:{topic:n}})]:[3,3];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()];case 3:return 1!=this.verify||0!=e?[3,6]:[4,this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{topic:n}})];case 4:return[4,l.sent().present()];case 5:return[2,l.sent()];case 6:return 0==this.verify&&e>=0?[4,this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{topic:n}})]:[3,9];case 7:return[4,l.sent().present()];case 8:return[2,l.sent()];case 9:return[4,this.modalController.create({cssClass:"modal-fullscreen",component:r.a,componentProps:{mail:t}})];case 10:return[4,l.sent().present()];case 11:return[2,l.sent()]}}))}))},n}(),c=function(){return function(){}}(),b=e("pMnS"),g=e("oBZk"),d=e("Ip0R"),p=e("XX9I"),f=e("ZYCi"),h=t.sb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{padding:0}.rounded[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;margin:10px auto;height:50px;width:94%;line-height:25px;font-size:15px;padding:0 15px;outline:0;-webkit-appearance:none}.rounded[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;padding:15px}.rounded[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;margin:-3px 14px}.item-native[_ngcontent-%COMP%]{background-color:red}h5[_ngcontent-%COMP%]{font-size:17px}.LogoRound[_ngcontent-%COMP%]{width:150px;height:65px;padding:2px;float:left;-webkit-transition-duration:.3s;transition-duration:.3s}.LogoRound[_ngcontent-%COMP%]:hover{background-color:#fff;-webkit-transition-duration:.3s;transition-duration:.3s}.HeaderBar[_ngcontent-%COMP%]{width:100%;margin:auto;left:0;right:0;height:80px;padding:5px 5px 5px 20px;border-bottom-left-radius:40px;border-bottom-right-radius:40px}.LoginDesktopDiv[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%]{display:none;visibility:hidden}@media screen and (min-width:1000px){.hide[_ngcontent-%COMP%]{display:block;visibility:visible}.loginmobiledisnone[_ngcontent-%COMP%]{display:none!important;visibility:hidden}.desktopheader[_ngcontent-%COMP%]{border-radius:0!important;height:10%!important;color:#fff;box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-webkit-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-moz-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3)}.LanguageMobileDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}h5[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;font-weight:700;color:#df3d15}.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:block;visibility:visible}.LanguageDesktopDiv2[_ngcontent-%COMP%]{display:-webkit-box;display:flex;visibility:visible;width:100%;margin:auto;left:0;right:0;padding:0 50px 50px;background-color:transparent;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}body[_ngcontent-%COMP%]{background-color:#f1f1f1;font-family:Lato;font-weight:300;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.badge[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;background-color:#fff;color:#fff;border-radius:3rem;text-align:center;font-size:1.6rem;font-weight:400;padding:.05rem .8rem .1rem;line-height:inherit}.badge--smaller[_ngcontent-%COMP%]{font-size:.7rem;padding:.09rem .4rem .15rem}.badge--danger[_ngcontent-%COMP%]{background-color:#df011f}.card[_ngcontent-%COMP%]{width:350px;height:220px;background-color:#fff;border-radius:10px;text-decoration:none;margin:15px;top:0;right:0;bottom:0;left:0;position:relative;overflow:hidden;box-shadow:0 0 0 4px rgba(0,0,0,.05);-webkit-transition:box-shadow .4s,top .4s,width .4s,height .4s;transition:box-shadow .4s ease,top .4s ease,width .4s ease,height .4s ease}.card.active[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:hover{box-shadow:0 12px 20px -10px rgba(0,0,0,.5);top:-5px}.card.active[_ngcontent-%COMP%]{width:500px;height:600px}.card[_ngcontent-%COMP%]   .top-half[_ngcontent-%COMP%]{width:100%;height:150px;background-color:transparent;background-image:url(afri3.44a82f0d986978d77383.png);background-size:auto 130%;background-position:center center;background-repeat:no-repeat;border-left:2px solid #df011f;border-right:2px solid #df011f}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]{margin-left:5%;margin-top:12px;width:90%;text-align:center!important}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;color:#555;margin-bottom:2px}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:3px;font-size:12px;color:#999;font-weight:700}}"]],data:{}});function m(n){return t.Qb(0,[(n()(),t.ub(0,0,null,null,6,"div",[["class","rounded"]],null,null,null,null,null)),(n()(),t.ub(1,0,null,null,5,"div",[],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.topicClick(n.context.$implicit,o.user,n.context.index,o.user.email)&&t),t}),null,null)),(n()(),t.ub(2,0,null,null,1,"ion-icon",[["icon","assets/icon/online-course.svg"],["slot","start"],["style","height: 20px; color: #ff5e06;"]],null,null,null,g.S,g.n)),t.tb(3,49152,null,0,u.B,[t.h,t.k,t.z],{icon:[0,"icon"]},null),(n()(),t.ub(4,0,null,null,2,"ion-label",[["class","label"]],null,null,null,g.W,g.r)),t.tb(5,49152,null,0,u.M,[t.h,t.k,t.z],null,null),(n()(),t.Ob(6,0,[" "," "]))],(function(n,l){n(l,3,0,"assets/icon/online-course.svg")}),(function(n,l){n(l,6,0,l.context.$implicit.name)}))}function x(n){return t.Qb(0,[(n()(),t.ub(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),t.ub(1,0,null,null,5,"h5",[["style","margin-top: 20px;"],["text-center",""]],null,null,null,null,null)),t.tb(2,16384,null,0,u.d,[t.k],null,null),(n()(),t.ub(3,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(n()(),t.Ob(-1,null,["Mes cours"])),(n()(),t.ub(5,0,null,null,1,"span",[["style","color: #ff5e06;"]],null,null,null,null,null)),(n()(),t.Ob(6,null,[" ",""])),(n()(),t.ub(7,0,null,null,3,"div",[["class","LanguageMobileDiv"]],null,null,null,null,null)),(n()(),t.jb(16777216,null,null,2,null,m)),t.tb(9,278528,null,0,d.i,[t.P,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Kb(10,2)],(function(n,l){var e=l.component,o=t.Pb(l,9,0,n(l,10,0,t.Gb(l.parent,0),e.topics,"display_order"));n(l,9,0,o)}),(function(n,l){n(l,6,0,l.component.showName())}))}function v(n){return t.Qb(0,[(n()(),t.ub(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center;"]],null,null,null,null,null)),(n()(),t.ub(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,g.db,g.y)),t.tb(2,49152,null,0,u.rb,[t.h,t.k,t.z],{name:[0,"name"]},null),(n()(),t.ub(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ob(-1,null,["Chargement..."]))],(function(n,l){n(l,2,0,"bubbles")}),null)}function C(n){return t.Qb(0,[(n()(),t.ub(0,0,null,null,8,"div",[["class","card"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.topicClick(n.context.$implicit,o.user,n.context.index,o.user.email)&&t),t}),null,null)),(n()(),t.ub(1,0,null,null,0,"div",[["class","top-half"]],null,null,null,null,null)),(n()(),t.ub(2,0,null,null,6,"div",[["class","bottom-half"]],null,null,null,null,null)),(n()(),t.ub(3,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(n()(),t.ub(4,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Ob(5,null,["",""])),(n()(),t.ub(6,0,null,null,2,"div",[["class","subtitle"]],null,null,null,null,null)),(n()(),t.ub(7,0,null,null,1,"span",[["class","badge badge--danger badge--smaller"]],null,null,null,null,null)),(n()(),t.Ob(-1,null,["Start Course"]))],null,(function(n,l){n(l,5,0,l.context.$implicit.name)}))}function P(n){return t.Qb(0,[t.Ib(0,p.h,[]),(n()(),t.ub(1,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(n()(),t.ub(2,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite.png"]],null,null,null,g.T,g.o)),t.tb(3,49152,null,0,u.C,[t.h,t.k,t.z],{src:[0,"src"]},null),(n()(),t.ub(4,0,null,null,10,"ion-content",[],null,null,null,g.N,g.i)),t.tb(5,49152,null,0,u.t,[t.h,t.k,t.z],null,null),(n()(),t.jb(16777216,null,0,1,null,x)),t.tb(7,16384,null,0,d.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(16777216,null,0,1,null,v)),t.tb(9,16384,null,0,d.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ub(10,0,null,0,4,"div",[["class","LanguageDesktopDiv"]],null,null,null,null,null)),(n()(),t.ub(11,0,null,null,3,"div",[["class","LanguageDesktopDiv2"]],null,null,null,null,null)),(n()(),t.jb(16777216,null,null,2,null,C)),t.tb(13,278528,null,0,d.i,[t.P,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Kb(14,2)],(function(n,l){var e=l.component;n(l,3,0,"assets/images/afriwhite.png"),n(l,7,0,e.user),n(l,9,0,!e.user);var o=t.Pb(l,13,0,n(l,14,0,t.Gb(l,0),e.topics,"display_order"));n(l,13,0,o)}),null)}function _(n){return t.Qb(0,[(n()(),t.ub(0,0,null,null,1,"app-cours",[],null,null,null,P,h)),t.tb(1,114688,null,0,s,[u.Kb,i.a,f.a,f.m,u.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var k=t.qb("app-cours",s,_,{},{},[]),w=e("gIcY");e.d(l,"CoursPageModuleNgFactory",(function(){return O}));var O=t.rb(c,[],(function(n){return t.Db([t.Eb(512,t.j,t.cb,[[8,[b.a,k]],[3,t.j],t.x]),t.Eb(4608,d.l,d.k,[t.u,[2,d.y]]),t.Eb(4608,w.l,w.l,[]),t.Eb(4608,u.b,u.b,[t.z,t.g]),t.Eb(4608,u.Gb,u.Gb,[u.b,t.j,t.q]),t.Eb(4608,u.Lb,u.Lb,[u.b,t.j,t.q]),t.Eb(1073742336,d.b,d.b,[]),t.Eb(1073742336,w.k,w.k,[]),t.Eb(1073742336,w.d,w.d,[]),t.Eb(1073742336,u.Db,u.Db,[]),t.Eb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),t.Eb(1073742336,p.a,p.a,[]),t.Eb(1073742336,p.g,p.g,[]),t.Eb(1073742336,p.d,p.d,[]),t.Eb(1073742336,p.b,p.b,[]),t.Eb(1073742336,p.e,p.e,[]),t.Eb(1073742336,p.c,p.c,[]),t.Eb(1073742336,p.f,p.f,[]),t.Eb(1073742336,c,c,[]),t.Eb(1024,f.k,(function(){return[[{path:"",component:s,children:[]}]]}),[])])}))}}]);