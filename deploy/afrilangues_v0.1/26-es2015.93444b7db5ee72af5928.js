(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{TbC0:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),i=u("7C/q");class r{constructor(l,n){this.afriService=l,this.router=n}ngOnInit(){this.onGetProfile(),this.onGetLangues()}itemClick(l){console.log("langue choisie : ",l.id),this.router.navigate(["/tabs/tabs/cours/"+l.id],{queryParams:{language_id:l.id}})}onGetProfile(){this.afriService.getProfile().subscribe(l=>{this.profile=l.success,console.log(this.profile)},l=>console.log(l))}onGetLangues(){this.afriService.getLangues().subscribe(l=>{this.langues=l,console.log(this.langues)},l=>console.log(l))}resetToken(){this.afriService.clearToken()}}class e{}var t=u("pMnS"),b=u("oBZk"),s=u("ZZ/e"),c=u("SVse"),a=u("iInd"),p=o.qb({encapsulation:0,styles:[[""]],data:{}});function h(l){return o.Ob(0,[(l()(),o.sb(0,0,null,null,13,"ion-card",[],null,null,null,b.L,b.d)),o.rb(1,49152,null,0,s.l,[o.h,o.k,o.x],null,null),(l()(),o.sb(2,0,null,0,11,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.itemClick(l.context.$implicit)&&o),o}),b.V,b.q)),o.rb(3,49152,null,0,s.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.sb(4,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.G,b.b)),o.rb(5,49152,null,0,s.f,[o.h,o.k,o.x],null,null),(l()(),o.sb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o.sb(7,0,null,0,1,"ion-icon",[["color","primary"],["name","arrow-dropright-circle"],["slot","end"]],null,null,null,b.S,b.n)),o.rb(8,49152,null,0,s.B,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.sb(9,0,null,0,4,"ion-card-content",[],null,null,null,b.I,b.e)),o.rb(10,49152,null,0,s.m,[o.h,o.k,o.x],null,null),(l()(),o.sb(11,0,null,0,2,"ion-label",[],null,null,null,b.W,b.r)),o.rb(12,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.Mb(13,0,[" "," "]))],(function(l,n){l(n,3,0,"none"),l(n,8,0,"primary","arrow-dropright-circle")}),(function(l,n){l(n,6,0,o.wb(1,"https://afrilangues.com/public/images/",n.context.$implicit.logo,"")),l(n,13,0,n.context.$implicit.name)}))}function g(l){return o.Ob(0,[(l()(),o.sb(0,0,null,null,6,"ion-header",[],null,null,null,b.R,b.m)),o.rb(1,49152,null,0,s.A,[o.h,o.k,o.x],null,null),(l()(),o.sb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,b.jb,b.E)),o.rb(3,49152,null,0,s.Bb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.sb(4,0,null,0,2,"ion-title",[],null,null,null,b.ib,b.D)),o.rb(5,49152,null,0,s.zb,[o.h,o.k,o.x],null,null),(l()(),o.Mb(-1,0,["Langues"])),(l()(),o.sb(7,0,null,null,3,"ion-content",[],null,null,null,b.N,b.i)),o.rb(8,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.hb(16777216,null,0,1,null,h)),o.rb(10,278528,null,0,c.i,[o.N,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,10,0,u.langues)}),null)}function m(l){return o.Ob(0,[(l()(),o.sb(0,0,null,null,1,"app-home",[],null,null,null,g,p)),o.rb(1,114688,null,0,r,[i.a,a.m],null,null)],(function(l,n){l(n,1,0)}),null)}var f=o.ob("app-home",r,m,{},{},[]),k=u("s7LF");u.d(n,"HomePageModuleNgFactory",(function(){return d}));var d=o.pb(e,[],(function(l){return o.Bb([o.Cb(512,o.j,o.ab,[[8,[t.a,f]],[3,o.j],o.v]),o.Cb(4608,c.l,c.k,[o.s,[2,c.y]]),o.Cb(4608,k.l,k.l,[]),o.Cb(4608,s.b,s.b,[o.x,o.g]),o.Cb(4608,s.Gb,s.Gb,[s.b,o.j,o.p]),o.Cb(4608,s.Lb,s.Lb,[s.b,o.j,o.p]),o.Cb(1073742336,c.b,c.b,[]),o.Cb(1073742336,k.k,k.k,[]),o.Cb(1073742336,k.d,k.d,[]),o.Cb(1073742336,s.Db,s.Db,[]),o.Cb(1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),o.Cb(1073742336,e,e,[]),o.Cb(1024,a.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);