(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FPSD:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),i=t("7C/q"),r=t("ZZ/e"),u=t("Pg7S"),a=t("K6kG"),s=function(){function n(n,l,t,e,o){var i=this;this.platform=n,this.afriService=l,this.route=t,this.router=e,this.modalController=o,this.imageData=["../../../assets/images/1.png","../../../assets/images/2.png","../../../assets/images/3.png","../../../assets/images/4.png","../../../assets/images/5.png","../../../assets/images/6.png","../../../assets/images/7.png","../../../assets/images/8.png","../../../assets/images/9.png","../../../assets/images/10.png","../../../assets/images/11.png"],this.route.queryParams.subscribe((function(n){i.onGetProfile(),i.onGetLanguage(),i.afriService.showNotification(),console.log("paramss : ",n.language),n&&n.language&&(i.data=n.language)}))}return n.prototype.showExt=function(){waripay()},n.prototype.ngOnInit=function(){var n=this;this.onGetTopics(),this.onGetLangues(),this.afriService.showNotification(),this.afriService.getLanguageData().subscribe((function(l){n.usersData=JSON.parse(JSON.stringify(l));for(var t=0;t<n.usersData.length;t++)n.usersData[t].logo=n.imageData[t];console.log(l)}),(function(n){console.log(n)}),(function(){console.log(n.usersData),n.usersData2=n.usersData}))},n.prototype.onGetProfile=function(){var n=this;this.afriService.getProfile().subscribe((function(l){n.user=l.success,n.subscribed=n.user.subscribed,null==n.afriService.language_id?(n.afriService.language_id=n.user.language_id,n.language_id=n.afriService.language_id):n.language_id=n.afriService.language_id,console.log(n.language_id),n.onGetTopics(),n.onGetVerifier()}))},n.prototype.onGetLanguage=function(){var n=this;this.afriService.getLangues().subscribe((function(l){n.languages=l}))},n.prototype.showName=function(){var n=this;if(null!=this.languages)return this.languages.filter((function(l){return l.id==n.afriService.language_id}))[0].name},n.prototype.onGetTopics=function(){var n=this;console.log("id service : ",this.afriService.language_id),null!=this.afriService.language_id&&this.afriService.getTopics(this.afriService.language_id).subscribe((function(l){n.topics=l}),(function(n){return console.log(n)}))},n.prototype.onGetVerifier=function(){var n=this;null!=this.afriService.language_id&&this.afriService.getVerify(this.afriService.language_id).subscribe((function(l){n.verify=l.payment_required}),(function(n){return console.log(n)}))},n.prototype.topicClick=function(n,l,t,e){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(l){switch(l.label){case 0:return console.log(this.verify),console.log(this.user),console.log(this.subscribed),t>=0&&"user"!=this.user.role?[4,this.modalController.create({component:a.a,componentProps:{topic:n}})]:[3,3];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()];case 3:return 1!=this.verify||0!=t?[3,6]:[4,this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{topic:n}})];case 4:return[4,l.sent().present()];case 5:return[2,l.sent()];case 6:return 0==this.verify&&t>=0?[4,this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{topic:n}})]:[3,9];case 7:return[4,l.sent().present()];case 8:return[2,l.sent()];case 9:return[4,this.modalController.create({cssClass:"modal-fullscreen",component:u.a,componentProps:{mail:e}})];case 10:return[4,l.sent().present()];case 11:return[2,l.sent()]}}))}))},n.prototype.onGetProfile2=function(){var n=this;this.afriService.getProfile().subscribe((function(l){n.user2=l.success,console.log("user ",n.user2)}))},n.prototype.onLanguage=function(){for(var n=0;n<this.langues.length;n++)this.langues[n].id==this.afriService.language_id&&(this.currentLangue=this.langues[n])},n.prototype.onGetLangues=function(){var n=this;this.afriService.getLangues().subscribe((function(l){n.langues=l,n.onLanguage()}),(function(n){return console.log(n)}))},n.prototype.itemClick=function(n){this.afriService.language_id=n.id,this.servLanguage=this.afriService.language_id,this.ngOnInit()},n}(),c=function(){return function(){}}(),g=t("pMnS"),b=t("oBZk"),p=t("Ip0R"),d=t("XX9I"),f=t("ZYCi"),h=e.sb({encapsulation:0,styles:[['*[_ngcontent-%COMP%]{padding:0}.rounded[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;margin:10px auto;height:50px;width:94%;line-height:25px;font-size:15px;padding:0 15px;outline:0;-webkit-appearance:none}.rounded[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;padding:15px}.rounded[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;margin:-3px 14px}.item-native[_ngcontent-%COMP%]{background-color:red}h5[_ngcontent-%COMP%]{font-size:17px}.LogoRound[_ngcontent-%COMP%]{width:150px;height:65px;padding:2px;float:left;-webkit-transition-duration:.3s;transition-duration:.3s}.LogoRound[_ngcontent-%COMP%]:hover{background-color:#fff;-webkit-transition-duration:.3s;transition-duration:.3s}.HeaderBar[_ngcontent-%COMP%]{width:100%;margin:auto;left:0;right:0;height:80px;padding:5px 5px 5px 20px;border-bottom-left-radius:40px;border-bottom-right-radius:40px}.LoginDesktopDiv[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%]{display:none;visibility:hidden}@media screen and (min-width:1000px){.popover__title[_ngcontent-%COMP%]{color:#e44444;text-align:center}.popover__wrapper[_ngcontent-%COMP%]{position:relative;display:inline-block}.popover__content[_ngcontent-%COMP%]{opacity:0;visibility:hidden;position:absolute;left:-700px;-webkit-transform:translate(0,10px);transform:translate(0,10px);-webkit-transform:translateX(135px);transform:translateX(135px);background-color:#f6f6f6;padding:20px 10px 10px;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);width:1100px;height:800px}.popover__content[_ngcontent-%COMP%]:before{position:absolute;z-index:-1;content:"";right:calc(50% - 10px);top:-8px;border-style:solid;border-width:0 10px 10px;border-color:transparent transparent #bfbfbf;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform}.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%]{z-index:10;opacity:1;visibility:visible;-webkit-transform:translate(0,-20px);transform:translate(0,-20px);-webkit-transform:translateX(140px);transform:translateX(140px);-webkit-transition:.5s cubic-bezier(.75,-.02,.2,.97);transition:all .5s cubic-bezier(.75,-.02,.2,.97)}.popover__message[_ngcontent-%COMP%]{text-align:center}.MenuButton[_ngcontent-%COMP%]{margin-bottom:20px!important;font-size:16px;margin:15px}.hide[_ngcontent-%COMP%]{display:block;visibility:visible}.loginmobiledisnone[_ngcontent-%COMP%]{display:none!important;visibility:hidden}.desktopheader[_ngcontent-%COMP%]{border-radius:0!important;height:10%!important;color:#fff;box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-webkit-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-moz-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3)}.LanguageMobileDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}.h-100[_ngcontent-%COMP%]{height:100%;margin:40px 20px 20px}.card33[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border:5px solid #fff;-webkit-transition-duration:.5s;transition-duration:.5s}.card33[_ngcontent-%COMP%]:hover{background-color:#fff;box-shadow:1px 9px 17px 0 rgba(245,184,148,.71);-webkit-transition-duration:.5s;transition-duration:.5s}.mobile-card[_ngcontent-%COMP%]{width:250px;height:auto;border-radius:35px;font-family:Roboto,sans-serif}.onboarding[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.onboarding-slides[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.onboarding-illustration[_ngcontent-%COMP%]{width:100%;height:auto}.onboarding-title[_ngcontent-%COMP%]{font-weight:700;margin:10px 0 25px;font-size:20px;color:#ff4500}.onboarding-subtitle[_ngcontent-%COMP%]{padding:0 5px;font-size:18px;font-weight:700;color:#888;line-height:22px}.onboarding-action-bar[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.onboarding-button[_ngcontent-%COMP%]{background-color:transparent;border:none;outline:0;padding:10px 15px;border-radius:3px;-webkit-transition:.3s ease-in;transition:all .3s ease-in}.onboarding-button[disabled][_ngcontent-%COMP%]{color:#aaa}.onboarding-button-next[_ngcontent-%COMP%]{color:#6c63ff}.onboarding-button-next[_ngcontent-%COMP%]:focus, .onboarding-button-next[_ngcontent-%COMP%]:hover{color:#fff;background-color:#6c63ff}.onboarding-slides-indicators[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.onboarding-slides-indicator[_ngcontent-%COMP%]{border-radius:20px;font-size:0;padding:6px;background-color:#6c63ff33;margin:0 2px}.onboarding-slides-indicator--active[_ngcontent-%COMP%]{background-color:#6c63ff7d}h5[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;font-weight:700;color:#df3d15}.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:block;visibility:visible}.LanguageDesktopDiv2[_ngcontent-%COMP%]{display:-webkit-box;display:flex;visibility:visible;width:100%;margin:auto;left:0;right:0;padding:0 50px 50px;background-color:transparent;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}body[_ngcontent-%COMP%]{background-color:#f1f1f1;font-family:Lato;font-weight:300;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.badge[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;background-color:#fff;color:#fff;border-radius:3rem;text-align:center;font-size:1.6rem;font-weight:400;padding:.05rem .8rem .1rem;line-height:inherit}.badge--smaller[_ngcontent-%COMP%]{font-size:.7rem;padding:.09rem .4rem .15rem}.badge--danger[_ngcontent-%COMP%]{background-color:#df011f}.card[_ngcontent-%COMP%]{width:350px;height:220px;background-color:#fff;border-radius:10px;text-decoration:none;margin:15px;top:0;right:0;bottom:0;left:0;position:relative;overflow:hidden;box-shadow:0 0 0 4px rgba(0,0,0,.05);-webkit-transition:box-shadow .4s,top .4s,width .4s,height .4s;transition:box-shadow .4s ease,top .4s ease,width .4s ease,height .4s ease}.card.active[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:hover{box-shadow:0 12px 20px -10px rgba(0,0,0,.5);top:-5px}.card.active[_ngcontent-%COMP%]{width:500px;height:600px}.card[_ngcontent-%COMP%]   .top-half[_ngcontent-%COMP%]{width:100%;height:150px;background-color:transparent;background-image:url(afri3.44a82f0d986978d77383.png);background-size:auto 130%;background-position:center center;background-repeat:no-repeat;border-left:2px solid #df011f;border-right:2px solid #df011f}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]{margin-left:5%;margin-top:12px;width:90%;text-align:center!important}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;color:#555;margin-bottom:2px}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:3px;font-size:12px;color:#999;font-weight:700}}']],data:{}});function x(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,6,"div",[["class","card33 mobile-card"],["style","margin: 10px"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.itemClick(n.context.$implicit)&&e),e}),null,null)),(n()(),e.ub(1,0,null,null,5,"section",[["class","onboarding"]],null,null,null,null,null)),(n()(),e.ub(2,0,null,null,4,"main",[["class","onboarding-slides"]],null,null,null,null,null)),(n()(),e.ub(3,0,null,null,3,"div",[["class","onboarding-slide"]],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,0,"img",[["alt",""],["class","onboarding-illustration"],["style","width: 50%; border-radius: 50%; margin-top: 20px"]],[[8,"src",4]],null,null,null,null)),(n()(),e.ub(5,0,null,null,1,"p",[["class","onboarding-subtitle"],["style","color: orangered !important"]],null,null,null,null,null)),(n()(),e.Ob(6,null,[" "," Membres "]))],null,(function(n,l){n(l,4,0,l.context.$implicit.logo),n(l,6,0,l.context.$implicit.total_users)}))}function m(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,6,"div",[["class","rounded"]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,5,"div",[],null,[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.topicClick(n.context.$implicit,o.user,n.context.index,o.user.email)&&e),e}),null,null)),(n()(),e.ub(2,0,null,null,1,"ion-icon",[["icon","assets/icon/online-course.svg"],["slot","start"],["style","height: 20px; color: #ff5e06"]],null,null,null,b.S,b.n)),e.tb(3,49152,null,0,r.B,[e.h,e.k,e.z],{icon:[0,"icon"]},null),(n()(),e.ub(4,0,null,null,2,"ion-label",[["class","label"]],null,null,null,b.W,b.r)),e.tb(5,49152,null,0,r.M,[e.h,e.k,e.z],null,null),(n()(),e.Ob(6,0,[" "," "]))],(function(n,l){n(l,3,0,"assets/icon/online-course.svg")}),(function(n,l){n(l,6,0,l.context.$implicit.name)}))}function v(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,17,"div",[],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,12,"h5",[["style","margin-top: 20px"],["text-center",""]],null,null,null,null,null)),e.tb(2,16384,null,0,r.d,[e.k],null,null),(n()(),e.ub(3,0,null,null,1,"span",[["style","color: #ff5e06"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,[" Mes cours "])),(n()(),e.ub(5,0,null,null,8,"div",[["class","popover__wrapper"]],null,null,null,null,null)),(n()(),e.ub(6,0,null,null,3,"button",[],null,null,null,null,null)),(n()(),e.ub(7,0,null,null,2,"h5",[],null,null,null,null,null)),(n()(),e.ub(8,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(n()(),e.Ob(9,null,["",""])),(n()(),e.ub(10,0,null,null,3,"div",[["class","popover__content"]],null,null,null,null,null)),(n()(),e.ub(11,0,null,null,2,"div",[["style","\n              display: flex !important;\n              flex-wrap: wrap !important;\n              width: 100%;\n              justify-content: center;\n            "]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,x)),e.tb(13,278528,null,0,p.i,[e.P,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.ub(14,0,null,null,3,"div",[["class","LanguageMobileDiv"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,2,null,m)),e.tb(16,278528,null,0,p.i,[e.P,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),e.Kb(17,2)],(function(n,l){var t=l.component;n(l,13,0,t.usersData);var o=e.Pb(l,16,0,n(l,17,0,e.Gb(l.parent,0),t.topics,"display_order"));n(l,16,0,o)}),(function(n,l){n(l,9,0,l.component.showName())}))}function _(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,b.db,b.y)),e.tb(2,49152,null,0,r.rb,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.ub(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["Chargement..."]))],(function(n,l){n(l,2,0,"bubbles")}),null)}function k(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,8,"div",[["class","card"]],null,[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.topicClick(n.context.$implicit,o.user,n.context.index,o.user.email)&&e),e}),null,null)),(n()(),e.ub(1,0,null,null,0,"div",[["class","top-half"]],null,null,null,null,null)),(n()(),e.ub(2,0,null,null,6,"div",[["class","bottom-half"]],null,null,null,null,null)),(n()(),e.ub(3,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Ob(5,null,["",""])),(n()(),e.ub(6,0,null,null,2,"div",[["class","subtitle"]],null,null,null,null,null)),(n()(),e.ub(7,0,null,null,1,"span",[["class","badge badge--danger badge--smaller"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["Commencer le cours"]))],null,(function(n,l){n(l,5,0,l.context.$implicit.name)}))}function w(n){return e.Qb(0,[e.Ib(0,d.h,[]),(n()(),e.ub(1,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(n()(),e.ub(2,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite-map.png"]],null,null,null,b.T,b.o)),e.tb(3,49152,null,0,r.C,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.ub(4,0,null,null,10,"ion-content",[],null,null,null,b.N,b.i)),e.tb(5,49152,null,0,r.t,[e.h,e.k,e.z],null,null),(n()(),e.jb(16777216,null,0,1,null,v)),e.tb(7,16384,null,0,p.j,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,0,1,null,_)),e.tb(9,16384,null,0,p.j,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ub(10,0,null,0,4,"div",[["class","LanguageDesktopDiv"]],null,null,null,null,null)),(n()(),e.ub(11,0,null,null,3,"div",[["class","LanguageDesktopDiv2"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,2,null,k)),e.tb(13,278528,null,0,p.i,[e.P,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),e.Kb(14,2)],(function(n,l){var t=l.component;n(l,3,0,"assets/images/afriwhite-map.png"),n(l,7,0,t.user),n(l,9,0,!t.user);var o=e.Pb(l,13,0,n(l,14,0,e.Gb(l,0),t.topics,"display_order"));n(l,13,0,o)}),null)}function C(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,1,"app-cours",[],null,null,null,w,h)),e.tb(1,114688,null,0,s,[r.Kb,i.a,f.a,f.m,r.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var P=e.qb("app-cours",s,C,{},{},[]),O=t("gIcY");t.d(l,"CoursPageModuleNgFactory",(function(){return y}));var y=e.rb(c,[],(function(n){return e.Db([e.Eb(512,e.j,e.cb,[[8,[g.a,P]],[3,e.j],e.x]),e.Eb(4608,p.l,p.k,[e.u,[2,p.y]]),e.Eb(4608,O.l,O.l,[]),e.Eb(4608,r.b,r.b,[e.z,e.g]),e.Eb(4608,r.Gb,r.Gb,[r.b,e.j,e.q]),e.Eb(4608,r.Lb,r.Lb,[r.b,e.j,e.q]),e.Eb(1073742336,p.b,p.b,[]),e.Eb(1073742336,O.k,O.k,[]),e.Eb(1073742336,O.d,O.d,[]),e.Eb(1073742336,r.Db,r.Db,[]),e.Eb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),e.Eb(1073742336,d.a,d.a,[]),e.Eb(1073742336,d.g,d.g,[]),e.Eb(1073742336,d.d,d.d,[]),e.Eb(1073742336,d.b,d.b,[]),e.Eb(1073742336,d.e,d.e,[]),e.Eb(1073742336,d.c,d.c,[]),e.Eb(1073742336,d.f,d.f,[]),e.Eb(1073742336,c,c,[]),e.Eb(1024,f.k,(function(){return[[{path:"",component:s,children:[]}]]}),[])])}))}}]);