(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FPSD:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),i=t("mrSG"),o=t("7C/q"),s=t("ZZ/e"),r=t("Pg7S"),a=t("K6kG");class u{constructor(n,l,t,e,i){this.platform=n,this.afriService=l,this.route=t,this.router=e,this.modalController=i,this.imageData=["../../../assets/images/1.png","../../../assets/images/2.png","../../../assets/images/3.png","../../../assets/images/4.png","../../../assets/images/5.png","../../../assets/images/6.png","../../../assets/images/7.png","../../../assets/images/8.png","../../../assets/images/9.png","../../../assets/images/10.png","../../../assets/images/11.png"],this.route.queryParams.subscribe(n=>{this.onGetProfile(),this.onGetLanguage(),this.afriService.showNotification(),console.log("paramss : ",n.language),n&&n.language&&(this.data=n.language)})}showExt(){waripay()}ngOnInit(){this.onGetTopics(),this.onGetLangues(),this.afriService.showNotification(),this.afriService.getLanguageData().subscribe(n=>{this.usersData=JSON.parse(JSON.stringify(n));for(var l=0;l<this.usersData.length;l++)this.usersData[l].logo=this.imageData[l];console.log(n)},n=>{console.log(n)},()=>{console.log(this.usersData),this.usersData2=this.usersData})}onGetProfile(){this.afriService.getProfile().subscribe(n=>{this.user=n.success,this.subscribed=this.user.subscribed,null==this.afriService.language_id?(this.afriService.language_id=this.user.language_id,this.language_id=this.afriService.language_id):this.language_id=this.afriService.language_id,console.log(this.language_id),this.onGetTopics(),this.onGetVerifier()})}onGetLanguage(){this.afriService.getLangues().subscribe(n=>{this.languages=n})}showName(){if(null!=this.languages)return this.languages.filter(n=>n.id==this.afriService.language_id)[0].name}onGetTopics(){console.log("id service : ",this.afriService.language_id),null!=this.afriService.language_id&&this.afriService.getTopics(this.afriService.language_id).subscribe(n=>{this.topics=n},n=>console.log(n))}onGetVerifier(){null!=this.afriService.language_id&&this.afriService.getVerify(this.afriService.language_id).subscribe(n=>{this.verify=n.payment_required},n=>console.log(n))}topicClick(n,l,t,e){return i.b(this,void 0,void 0,(function*(){if(console.log(this.verify),console.log(this.user),console.log(this.subscribed),t>=0&&"user"!=this.user.role){const l=yield this.modalController.create({component:a.a,componentProps:{topic:n}});return yield l.present()}if(1==this.verify&&0==t){const l=yield this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{topic:n}});return yield l.present()}if(0==this.verify&&t>=0){const l=yield this.modalController.create({cssClass:"modal-fullscreen",component:a.a,componentProps:{topic:n}});return yield l.present()}{const n=yield this.modalController.create({cssClass:"modal-fullscreen",component:r.a,componentProps:{mail:e}});return yield n.present()}}))}onGetProfile2(){this.afriService.getProfile().subscribe(n=>{this.user2=n.success,console.log("user ",this.user2)})}onLanguage(){for(let n=0;n<this.langues.length;n++)this.langues[n].id==this.afriService.language_id&&(this.currentLangue=this.langues[n])}onGetLangues(){this.afriService.getLangues().subscribe(n=>{this.langues=n,this.onLanguage()},n=>console.log(n))}itemClick(n){this.afriService.language_id=n.id,this.servLanguage=this.afriService.language_id,this.ngOnInit()}}class c{}var g=t("pMnS"),b=t("oBZk"),d=t("SVse"),p=t("VQoA"),f=t("iInd"),h=e.qb({encapsulation:0,styles:[['*[_ngcontent-%COMP%]{padding:0}.rounded[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;margin:10px auto;height:50px;width:94%;line-height:25px;font-size:15px;padding:0 15px;outline:0;-webkit-appearance:none}.rounded[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;padding:15px}.rounded[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;margin:-3px 14px}.item-native[_ngcontent-%COMP%]{background-color:red}h5[_ngcontent-%COMP%]{font-size:17px}.LogoRound[_ngcontent-%COMP%]{width:150px;height:65px;padding:2px;float:left;-webkit-transition-duration:.3s;transition-duration:.3s}.LogoRound[_ngcontent-%COMP%]:hover{background-color:#fff;-webkit-transition-duration:.3s;transition-duration:.3s}.HeaderBar[_ngcontent-%COMP%]{width:100%;margin:auto;left:0;right:0;height:80px;padding:5px 5px 5px 20px;border-bottom-left-radius:40px;border-bottom-right-radius:40px}.LoginDesktopDiv[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%]{display:none;visibility:hidden}@media screen and (min-width:1000px){.popover__title[_ngcontent-%COMP%]{color:#e44444;text-align:center}.popover__wrapper[_ngcontent-%COMP%]{position:relative;display:inline-block}.popover__content[_ngcontent-%COMP%]{opacity:0;visibility:hidden;position:absolute;left:-700px;-webkit-transform:translate(0,10px);transform:translate(0,10px);-webkit-transform:translateX(135px);transform:translateX(135px);background-color:#f6f6f6;padding:20px 10px 10px;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);width:1100px;height:800px}.popover__content[_ngcontent-%COMP%]:before{position:absolute;z-index:-1;content:"";right:calc(50% - 10px);top:-8px;border-style:solid;border-width:0 10px 10px;border-color:transparent transparent #bfbfbf;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform}.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%]{z-index:10;opacity:1;visibility:visible;-webkit-transform:translate(0,-20px);transform:translate(0,-20px);-webkit-transform:translateX(140px);transform:translateX(140px);-webkit-transition:.5s cubic-bezier(.75,-.02,.2,.97);transition:all .5s cubic-bezier(.75,-.02,.2,.97)}.popover__message[_ngcontent-%COMP%]{text-align:center}.MenuButton[_ngcontent-%COMP%]{margin-bottom:20px!important;font-size:16px;margin:15px}.hide[_ngcontent-%COMP%]{display:block;visibility:visible}.loginmobiledisnone[_ngcontent-%COMP%]{display:none!important;visibility:hidden}.desktopheader[_ngcontent-%COMP%]{border-radius:0!important;height:10%!important;color:#fff;box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-webkit-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3);-moz-box-shadow:-4px 71px 49px -58px rgba(252,22,52,.3)}.LanguageMobileDiv[_ngcontent-%COMP%]{display:none;visibility:hidden}.h-100[_ngcontent-%COMP%]{height:100%;margin:40px 20px 20px}.card33[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border:5px solid #fff;-webkit-transition-duration:.5s;transition-duration:.5s}.card33[_ngcontent-%COMP%]:hover{background-color:#fff;box-shadow:1px 9px 17px 0 rgba(245,184,148,.71);-webkit-transition-duration:.5s;transition-duration:.5s}.mobile-card[_ngcontent-%COMP%]{width:250px;height:auto;border-radius:35px;font-family:Roboto,sans-serif}.onboarding[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.onboarding-slides[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.onboarding-illustration[_ngcontent-%COMP%]{width:100%;height:auto}.onboarding-title[_ngcontent-%COMP%]{font-weight:700;margin:10px 0 25px;font-size:20px;color:#ff4500}.onboarding-subtitle[_ngcontent-%COMP%]{padding:0 5px;font-size:18px;font-weight:700;color:#888;line-height:22px}.onboarding-action-bar[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.onboarding-button[_ngcontent-%COMP%]{background-color:transparent;border:none;outline:0;padding:10px 15px;border-radius:3px;-webkit-transition:.3s ease-in;transition:all .3s ease-in}.onboarding-button[disabled][_ngcontent-%COMP%]{color:#aaa}.onboarding-button-next[_ngcontent-%COMP%]{color:#6c63ff}.onboarding-button-next[_ngcontent-%COMP%]:focus, .onboarding-button-next[_ngcontent-%COMP%]:hover{color:#fff;background-color:#6c63ff}.onboarding-slides-indicators[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.onboarding-slides-indicator[_ngcontent-%COMP%]{border-radius:20px;font-size:0;padding:6px;background-color:#6c63ff33;margin:0 2px}.onboarding-slides-indicator--active[_ngcontent-%COMP%]{background-color:#6c63ff7d}h5[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;font-weight:700;color:#df3d15}.MainTitle[_ngcontent-%COMP%]{margin-top:10px;width:auto;height:auto;color:#fff;border-radius:10px;background-color:#df3d15;padding:10px}.LanguageDesktopDiv[_ngcontent-%COMP%]{display:block;visibility:visible}.LanguageDesktopDiv2[_ngcontent-%COMP%]{display:-webkit-box;display:flex;visibility:visible;width:100%;margin:auto;left:0;right:0;padding:0 50px 50px;background-color:transparent;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}body[_ngcontent-%COMP%]{background-color:#f1f1f1;font-family:Lato;font-weight:300;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.badge[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;background-color:#fff;color:#fff;border-radius:3rem;text-align:center;font-size:1.6rem;font-weight:400;padding:.05rem .8rem .1rem;line-height:inherit}.badge--smaller[_ngcontent-%COMP%]{font-size:.7rem;padding:.09rem .4rem .15rem}.badge--danger[_ngcontent-%COMP%]{background-color:#df011f}.card[_ngcontent-%COMP%]{width:350px;height:220px;background-color:#fff;border-radius:10px;text-decoration:none;margin:15px;top:0;right:0;bottom:0;left:0;position:relative;overflow:hidden;box-shadow:0 0 0 4px rgba(0,0,0,.05);-webkit-transition:box-shadow .4s,top .4s,width .4s,height .4s;transition:box-shadow .4s ease,top .4s ease,width .4s ease,height .4s ease}.card.active[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:hover{box-shadow:0 12px 20px -10px rgba(0,0,0,.5);top:-5px}.card.active[_ngcontent-%COMP%]{width:500px;height:600px}.card[_ngcontent-%COMP%]   .top-half[_ngcontent-%COMP%]{width:100%;height:150px;background-color:transparent;background-image:url(afri3.44a82f0d986978d77383.png);background-size:auto 130%;background-position:center center;background-repeat:no-repeat;border-left:2px solid #df011f;border-right:2px solid #df011f}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]{margin-left:5%;margin-top:12px;width:90%;text-align:center!important}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;color:#555;margin-bottom:2px}.card[_ngcontent-%COMP%]   .bottom-half[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:3px;font-size:12px;color:#999;font-weight:700}}']],data:{}});function x(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,6,"div",[["class","card33 mobile-card"],["style","margin: 10px"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.itemClick(n.context.$implicit)&&e),e}),null,null)),(n()(),e.sb(1,0,null,null,5,"section",[["class","onboarding"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,4,"main",[["class","onboarding-slides"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,3,"div",[["class","onboarding-slide"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,0,"img",[["alt",""],["class","onboarding-illustration"],["style","width: 50%; border-radius: 50%; margin-top: 20px"]],[[8,"src",4]],null,null,null,null)),(n()(),e.sb(5,0,null,null,1,"p",[["class","onboarding-subtitle"],["style","color: orangered !important"]],null,null,null,null,null)),(n()(),e.Mb(6,null,[" "," membres "]))],null,(function(n,l){n(l,4,0,l.context.$implicit.logo),n(l,6,0,l.context.$implicit.total_users)}))}function m(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,6,"div",[["class","rounded"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,5,"div",[],null,[[null,"click"]],(function(n,l,t){var e=!0,i=n.component;return"click"===l&&(e=!1!==i.topicClick(n.context.$implicit,i.user,n.context.index,i.user.email)&&e),e}),null,null)),(n()(),e.sb(2,0,null,null,1,"ion-icon",[["icon","assets/icon/online-course.svg"],["slot","start"],["style","height: 20px; color: #ff5e06"]],null,null,null,b.S,b.n)),e.rb(3,49152,null,0,s.B,[e.h,e.k,e.x],{icon:[0,"icon"]},null),(n()(),e.sb(4,0,null,null,2,"ion-label",[["class","label"]],null,null,null,b.W,b.r)),e.rb(5,49152,null,0,s.M,[e.h,e.k,e.x],null,null),(n()(),e.Mb(6,0,[" "," "]))],(function(n,l){n(l,3,0,"assets/icon/online-course.svg")}),(function(n,l){n(l,6,0,l.context.$implicit.name)}))}function v(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,17,"div",[],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,12,"h5",[["style","margin-top: 20px"],["text-center",""]],null,null,null,null,null)),e.rb(2,16384,null,0,s.d,[e.k],null,null),(n()(),e.sb(3,0,null,null,1,"span",[["style","color: #ff5e06"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,[" Mes cours "])),(n()(),e.sb(5,0,null,null,8,"div",[["class","popover__wrapper"]],null,null,null,null,null)),(n()(),e.sb(6,0,null,null,3,"button",[],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,2,"h5",[],null,null,null,null,null)),(n()(),e.sb(8,0,null,null,1,"b",[["class","MainTitle"]],null,null,null,null,null)),(n()(),e.Mb(9,null,["",""])),(n()(),e.sb(10,0,null,null,3,"div",[["class","popover__content"]],null,null,null,null,null)),(n()(),e.sb(11,0,null,null,2,"div",[["style","\n              display: flex !important;\n              flex-wrap: wrap !important;\n              width: 100%;\n              justify-content: center;\n            "]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,x)),e.rb(13,278528,null,0,d.i,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(14,0,null,null,3,"div",[["class","LanguageMobileDiv"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,2,null,m)),e.rb(16,278528,null,0,d.i,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Ib(17,2)],(function(n,l){var t=l.component;n(l,13,0,t.usersData);var i=e.Nb(l,16,0,n(l,17,0,e.Eb(l.parent,0),t.topics,"display_order"));n(l,16,0,i)}),(function(n,l){n(l,9,0,l.component.showName())}))}function _(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,4,"div",[["style","display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,b.db,b.y)),e.rb(2,49152,null,0,s.rb,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.sb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Chargement..."]))],(function(n,l){n(l,2,0,"bubbles")}),null)}function C(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,8,"div",[["class","card"]],null,[[null,"click"]],(function(n,l,t){var e=!0,i=n.component;return"click"===l&&(e=!1!==i.topicClick(n.context.$implicit,i.user,n.context.index,i.user.email)&&e),e}),null,null)),(n()(),e.sb(1,0,null,null,0,"div",[["class","top-half"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,6,"div",[["class","bottom-half"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Mb(5,null,["",""])),(n()(),e.sb(6,0,null,null,2,"div",[["class","subtitle"]],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,1,"span",[["class","badge badge--danger badge--smaller"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Commencer le cours"]))],null,(function(n,l){n(l,5,0,l.context.$implicit.name)}))}function k(n){return e.Ob(0,[e.Gb(0,p.h,[]),(n()(),e.sb(1,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite-map.png"]],null,null,null,b.T,b.o)),e.rb(3,49152,null,0,s.C,[e.h,e.k,e.x],{src:[0,"src"]},null),(n()(),e.sb(4,0,null,null,10,"ion-content",[],null,null,null,b.N,b.i)),e.rb(5,49152,null,0,s.t,[e.h,e.k,e.x],null,null),(n()(),e.hb(16777216,null,0,1,null,v)),e.rb(7,16384,null,0,d.j,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.hb(16777216,null,0,1,null,_)),e.rb(9,16384,null,0,d.j,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(10,0,null,0,4,"div",[["class","LanguageDesktopDiv"]],null,null,null,null,null)),(n()(),e.sb(11,0,null,null,3,"div",[["class","LanguageDesktopDiv2"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,2,null,C)),e.rb(13,278528,null,0,d.i,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Ib(14,2)],(function(n,l){var t=l.component;n(l,3,0,"assets/images/afriwhite-map.png"),n(l,7,0,t.user),n(l,9,0,!t.user);var i=e.Nb(l,13,0,n(l,14,0,e.Eb(l,0),t.topics,"display_order"));n(l,13,0,i)}),null)}function w(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,1,"app-cours",[],null,null,null,k,h)),e.rb(1,114688,null,0,u,[s.Kb,o.a,f.a,f.m,s.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var O=e.ob("app-cours",u,w,{},{},[]),M=t("s7LF");t.d(l,"CoursPageModuleNgFactory",(function(){return P}));var P=e.pb(c,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[g.a,O]],[3,e.j],e.v]),e.Cb(4608,d.l,d.k,[e.s,[2,d.y]]),e.Cb(4608,M.l,M.l,[]),e.Cb(4608,s.b,s.b,[e.x,e.g]),e.Cb(4608,s.Gb,s.Gb,[s.b,e.j,e.p]),e.Cb(4608,s.Lb,s.Lb,[s.b,e.j,e.p]),e.Cb(1073742336,d.b,d.b,[]),e.Cb(1073742336,M.k,M.k,[]),e.Cb(1073742336,M.d,M.d,[]),e.Cb(1073742336,s.Db,s.Db,[]),e.Cb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),e.Cb(1073742336,p.a,p.a,[]),e.Cb(1073742336,p.g,p.g,[]),e.Cb(1073742336,p.d,p.d,[]),e.Cb(1073742336,p.b,p.b,[]),e.Cb(1073742336,p.e,p.e,[]),e.Cb(1073742336,p.c,p.c,[]),e.Cb(1073742336,p.f,p.f,[]),e.Cb(1073742336,c,c,[]),e.Cb(1024,f.k,(function(){return[[{path:"",component:u,children:[]}]]}),[])])}))}}]);