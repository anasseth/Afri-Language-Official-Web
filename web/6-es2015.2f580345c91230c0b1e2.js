(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"uWc+":function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),o=u("mrSG"),s=u("7C/q"),t=u("9B/o"),e=u("CjQN"),a=u("t8sF");class c{constructor(l,n,u,i){this.afriService=l,this.iab=n,this.socialSharing=u,this.file=i,this.options=[{name:"Mentions",icon:"assets/icon/information.svg",url:"mentions"},{name:"CGV",icon:"assets/icon/007-blog.svg",url:"cgv"},{name:"Confidentialit\xe9",icon:"assets/icon/002-shield.svg",url:"confidentilaite"}],this.url="https://afrilangues.com/",this.text="Apprenez gratuitement une langue africaine en 10 minutes par jour"}showInfo(l){this.afriService.getHtml(l).subscribe(l=>{console.log("data ",l),this.data=l}),console.log(l)}blankInfo(l){this.iab.create(l,"_blank")}resolveLocalFile(){return o.b(this,void 0,void 0,(function*(){return this.file.copyFile(`${this.file.applicationDirectory}wwww/assets/imgs/`,"icon.png",this.file.cacheDirectory,`${(new Date).getTime()}.jpg`)}))}removeTempFile(l){this.file.removeFile(this.file.cacheDirectory,l)}share(){this.socialSharing.shareWithOptions({message:"Apprenez gratuitement une langue africaine en 10 minutes par jour",url:"https://afrilangues.com/"})}shareFacebook(){return o.b(this,void 0,void 0,(function*(){const l=yield this.resolveLocalFile();console.log("file ",l),this.socialSharing.shareViaFacebook(null,l.nativeURL,this.text).then(()=>{this.removeTempFile(l)}).catch(l=>{console.log(l)})}))}ShareWhatsapp(){this.socialSharing.shareViaWhatsApp(this.text,null,this.url).then(()=>{}).catch(l=>{console.log(l)})}ngOnInit(){}}class r{}var b=u("pMnS"),h=u("oBZk"),p=u("ZZ/e"),g=u("SVse"),d=i.qb({encapsulation:0,styles:[[".rounded[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;margin:10px auto;height:50px;width:94%;line-height:25px;font-size:15px;padding:0 15px;outline:0;-webkit-appearance:none}.rounded[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;padding:15px}.rounded[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;margin:-3px 14px}"]],data:{}});function f(l){return i.Ob(0,[(l()(),i.sb(0,0,null,null,6,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,5,"div",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.showInfo(l.context.$implicit.url)&&i),i}),null,null)),(l()(),i.sb(2,0,null,null,1,"ion-icon",[["slot","start"],["style","height: 20px; color: #000000;"]],null,null,null,h.S,h.n)),i.rb(3,49152,null,0,p.B,[i.h,i.k,i.x],{icon:[0,"icon"]},null),(l()(),i.sb(4,0,null,null,2,"ion-label",[["class","label"]],null,null,null,h.W,h.r)),i.rb(5,49152,null,0,p.M,[i.h,i.k,i.x],null,null),(l()(),i.Mb(6,0,[" "," "]))],(function(l,n){l(n,3,0,n.context.$implicit.icon)}),(function(l,n){l(n,6,0,n.context.$implicit.name)}))}function v(l){return i.Ob(0,[(l()(),i.sb(0,0,null,null,0,"div",[["style","margin-top: 20px; padding: 15px !important;"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.data.contents)}))}function m(l){return i.Ob(0,[(l()(),i.sb(0,0,null,null,2,"section",[["class","header"]],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"ion-img",[["class","logoHeader"],["src","assets/images/afriwhite.png"]],null,null,null,h.T,h.o)),i.rb(2,49152,null,0,p.C,[i.h,i.k,i.x],{src:[0,"src"]},null),(l()(),i.sb(3,0,null,null,35,"ion-content",[],null,null,null,h.N,h.i)),i.rb(4,49152,null,0,p.t,[i.h,i.k,i.x],null,null),(l()(),i.sb(5,0,null,0,8,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),i.sb(6,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),i.sb(7,0,null,null,1,"ion-icon",[["icon","assets/icon/001-smartphone.svg"],["slot","start"],["style","height: 20px; color: #000000;"]],null,null,null,h.S,h.n)),i.rb(8,49152,null,0,p.B,[i.h,i.k,i.x],{icon:[0,"icon"]},null),(l()(),i.sb(9,0,null,null,4,"ion-label",[["class","label"]],null,null,null,h.W,h.r)),i.rb(10,49152,null,0,p.M,[i.h,i.k,i.x],null,null),(l()(),i.Mb(-1,0,[" Version "])),(l()(),i.sb(12,0,null,0,1,"strong",[["style","color: red;"]],null,null,null,null,null)),(l()(),i.Mb(-1,null,["1.0"])),(l()(),i.hb(16777216,null,0,1,null,f)),i.rb(15,278528,null,0,g.i,[i.N,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.sb(16,0,null,0,6,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),i.sb(17,0,null,null,5,"div",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.share()&&i),i}),null,null)),(l()(),i.sb(18,0,null,null,1,"ion-icon",[["icon","assets/icon/003-share.svg"],["slot","start"],["style","height: 20px; color: #000000;"]],null,null,null,h.S,h.n)),i.rb(19,49152,null,0,p.B,[i.h,i.k,i.x],{icon:[0,"icon"]},null),(l()(),i.sb(20,0,null,null,2,"ion-label",[["class","label"]],null,null,null,h.W,h.r)),i.rb(21,49152,null,0,p.M,[i.h,i.k,i.x],null,null),(l()(),i.Mb(-1,0,[" Partager "])),(l()(),i.sb(23,0,null,0,6,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),i.sb(24,0,null,null,5,"div",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.blankInfo("https://afrilangues.com/blog/")&&i),i}),null,null)),(l()(),i.sb(25,0,null,null,1,"ion-icon",[["icon","assets/icon/005-writing.svg"],["slot","start"],["style","height: 20px; color: #000000;"]],null,null,null,h.S,h.n)),i.rb(26,49152,null,0,p.B,[i.h,i.k,i.x],{icon:[0,"icon"]},null),(l()(),i.sb(27,0,null,null,2,"ion-label",[["class","label"]],null,null,null,h.W,h.r)),i.rb(28,49152,null,0,p.M,[i.h,i.k,i.x],null,null),(l()(),i.Mb(-1,0,[" Blog "])),(l()(),i.sb(30,0,null,0,6,"div",[["class","rounded"]],null,null,null,null,null)),(l()(),i.sb(31,0,null,null,5,"div",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.blankInfo("https://afrilangues.com/boutique/")&&i),i}),null,null)),(l()(),i.sb(32,0,null,null,1,"ion-icon",[["icon","assets/icon/004-shop.svg"],["slot","start"],["style","height: 20px; color: #000000;"]],null,null,null,h.S,h.n)),i.rb(33,49152,null,0,p.B,[i.h,i.k,i.x],{icon:[0,"icon"]},null),(l()(),i.sb(34,0,null,null,2,"ion-label",[["class","label"]],null,null,null,h.W,h.r)),i.rb(35,49152,null,0,p.M,[i.h,i.k,i.x],null,null),(l()(),i.Mb(-1,0,[" Boutique "])),(l()(),i.hb(16777216,null,0,1,null,v)),i.rb(38,16384,null,0,g.j,[i.N,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"assets/images/afriwhite.png"),l(n,8,0,"assets/icon/001-smartphone.svg"),l(n,15,0,u.options),l(n,19,0,"assets/icon/003-share.svg"),l(n,26,0,"assets/icon/005-writing.svg"),l(n,33,0,"assets/icon/004-shop.svg"),l(n,38,0,u.data)}),null)}function k(l){return i.Ob(0,[(l()(),i.sb(0,0,null,null,1,"app-about",[],null,null,null,m,d)),i.rb(1,114688,null,0,c,[s.a,t.a,e.a,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=i.ob("app-about",c,k,{},{},[]),C=u("s7LF"),M=u("iInd");u.d(n,"AboutPageModuleNgFactory",(function(){return w}));var w=i.pb(r,[],(function(l){return i.Bb([i.Cb(512,i.j,i.ab,[[8,[b.a,x]],[3,i.j],i.v]),i.Cb(4608,g.l,g.k,[i.s,[2,g.y]]),i.Cb(4608,C.l,C.l,[]),i.Cb(4608,p.b,p.b,[i.x,i.g]),i.Cb(4608,p.Gb,p.Gb,[p.b,i.j,i.p]),i.Cb(4608,p.Lb,p.Lb,[p.b,i.j,i.p]),i.Cb(1073742336,g.b,g.b,[]),i.Cb(1073742336,C.k,C.k,[]),i.Cb(1073742336,C.d,C.d,[]),i.Cb(1073742336,p.Db,p.Db,[]),i.Cb(1073742336,M.p,M.p,[[2,M.u],[2,M.m]]),i.Cb(1073742336,r,r,[]),i.Cb(1024,M.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);