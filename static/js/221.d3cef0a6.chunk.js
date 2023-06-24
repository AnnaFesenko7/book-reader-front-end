"use strict";(self.webpackChunkbook_reader_front_end=self.webpackChunkbook_reader_front_end||[]).push([[221],{513:function(e,n,t){t.d(n,{p:function(){return o}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  /* justify-content: center; */\n"])))},2768:function(e,n,t){t.d(n,{l:function(){return d}});var r,i=t(168),o=t(1087),a=t(6444),u=t(6355),s=t(3329),c=(0,a.ZP)(o.rU)(r||(r=(0,i.Z)(["\n  color: ",";\n  display: block;\n  margin-bottom: 40px;\n  align-self: start;\n  margin-left: 16px;\n"])),(function(e){return e.theme.colors.accentColor})),d=function(e){var n=e.to;return(0,s.jsx)(c,{to:n,children:(0,s.jsx)(u.x_l,{})})}},2221:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r,i,o,a,u,s,c=t(9439),d=t(2791),l=t(9434),h=t(4805),m=t(9230),x=t(7689),p=t(8475),f=t(7754),g=t(9785),b=t(5264),j=t(5705),w=t(6727),y=w.Ry().shape({title:w.Z_().max(50,"Book title should be less than 50").matches(/^[^\s-]/,"Name should not start from space or dash").required("Book title is required"),author:w.Z_().max(50,"Author name should be less than 50").required("Author is required"),year:w.Rx().typeError("Year should be a date").integer("Must be an integer ").min(1e3,"This year cannot be").max(Number((new Date).getFullYear()),"Must be no more than current year"),pages:w.Rx().typeError("Pages should be a number").integer("Must be an integer ").min(1,"Too Short!").max(9999,"Must be no more than 4 characters").required("Pages is required")}),k=t(62),Z=t(8715),v=t(168),_=t(6444),P=(0,_.ZP)(j.l0)(r||(r=(0,v.Z)(["\n  width: 280px;\n  /* width: 100%; */\n  flex-direction: column;\n  display: flex;\n  gap: ","px;\n  align-items: center;\n  justify-content: flex-start;\n  padding-right: ","px;\n  padding-left: ","px;\n\n  @media "," {\n    /* width: 704px; */\n    width: 100%;\n  }\n  @media "," {\n    width: 100%;\n    flex-direction: row;\n    /* align-items: flex-end; */\n  }\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.media.table}),(function(e){return e.theme.media.desktop})),B=_.ZP.div(i||(i=(0,v.Z)(["\n  width: 280px;\n  flex-direction: column;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media "," {\n    width: 704px;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  @media "," {\n    width: 930px;\n    flex-wrap: nowrap;\n    gap: ","px;\n    margin-right: ","px;\n  }\n"])),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.media.desktop}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[7]})),F=_.ZP.label(o||(o=(0,v.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  @media "," {\n    width: ","px;\n  }\n\n  @media "," {\n    width: ","px;\n  }\n"])),(function(e){return e.theme.fontWeights.normal}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.lineHeights.body}),(function(e){return e.theme.colors.notActiveText}),(function(e){return e.theme.media.tablet}),(function(e){return q(e.htmlFor)}),(function(e){return e.theme.media.desktop}),(function(e){return T(e.htmlFor)})),C=(0,_.ZP)(j.gN)(a||(a=(0,v.Z)(["\n  width: 100%;\n  height: ","px;\n  margin-top: ","px;\n  outline: none;\n\n  box-shadow: ",";\n  border: ",";\n  background: ",";\n\n  @media "," {\n    width: ","px;\n  }\n\n  @media "," {\n    width: ","px;\n  }\n"])),(function(e){return e.theme.space[6]}),(function(e){return e.theme.space[3]}),(function(e){return"title"===e.name&&"inset ".concat((function(e){return e.theme.boxShadow.inputTitle}))}),(function(e){var n=e.name,t=e.theme;return"title"===n?"".concat(t.borders.none):"1px solid ".concat(t.colors.iconColor," ")}),(function(e){return"title"!==e.name&&"transparent"}),(function(e){return e.theme.media.tablet}),(function(e){return q(e.name)}),(function(e){return e.theme.media.desktop}),(function(e){return T(e.name)})),q=function(e){switch(e){case"title":return 704;case"author":return 336;default:return 152}},T=function(e){switch(e){case"title":return 346;case"author":return 250;default:return 134}},z=_.ZP.div(u||(u=(0,v.Z)(["\n  width: 170px;\n  height: 40px;\n"]))),S=t(3329),M=function(e){var n=e.updateUi,t=(0,l.I0)(),r=(0,m.$G)().t;return(0,S.jsx)(j.J9,{initialValues:{title:"",author:"",year:"",pages:""},validationSchema:y,onSubmit:function(e,i){var o=i.resetForm;console.log(e),o(),t(p.H.addBook(e)),n(!0),b.Notify.success(r("book__add__message1"))},children:(0,S.jsxs)(P,{autoComplete:"off",children:[(0,S.jsxs)(B,{children:[(0,S.jsxs)(F,{htmlFor:"title",children:[r("bookTitle")," *",(0,S.jsx)(C,{id:"title",name:"title",type:"text",placeholder:"..."}),(0,S.jsx)(k.m,{children:(0,S.jsx)(j.Bc,{name:"title"})})]}),(0,S.jsxs)(F,{htmlFor:"author",children:[r("author")," *",(0,S.jsx)(C,{id:"author",name:"author",type:"text",placeholder:"..."}),(0,S.jsx)(k.m,{children:(0,S.jsx)(j.Bc,{name:"author"})})]}),(0,S.jsxs)(F,{htmlFor:"year",children:[r("publicationDate"),(0,S.jsx)(C,{id:"year",name:"year",type:"text",placeholder:"..."}),(0,S.jsx)(k.m,{children:(0,S.jsx)(j.Bc,{name:"year"})})]}),(0,S.jsxs)(F,{htmlFor:"pages",children:[r("amountOfPages")," *",(0,S.jsx)(C,{id:"pages",name:"pages",type:"text",placeholder:"..."}),(0,S.jsx)(k.m,{children:(0,S.jsx)(j.Bc,{name:"pages"})})]})]}),(0,S.jsxs)(z,{children:[(0,S.jsx)(Z.z,{type:"submit",textContent:r("btnAdd"),size:"175",height:"40"}),(0,S.jsx)(k.m,{})]})]})})},A=t(3104),N=t(2768),E=t(6546),H=_.ZP.div(s||(s=(0,v.Z)(["\n  background: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n"])),(function(e){return e.theme.colors.backgroundBody}),(function(e){return e.theme.space[6]}),(function(e){return e.theme.space[6]})),R=t(513),U=function(){(0,f.e)();var e=(0,x.s0)(),n=(0,m.$G)().t,t=(0,l.I0)(),r=(0,d.useState)(!1),i=(0,c.Z)(r,2),o=i[0],a=i[1];(0,d.useEffect)((function(){t(p.H.getBooks())}),[t,o]);var u=(0,l.v9)(p.W.y),s=(0,h.useMediaQuery)({query:"(max-width: 767px)"}),b=u.length>0;return(0,S.jsx)("section",{children:(0,S.jsx)(A.P,{children:(0,S.jsx)(H,{children:s?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(N.l,{to:"/mobileLibBookTable"}),(0,S.jsx)(M,{})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(M,{updateUi:a}),b?(0,S.jsxs)(R.p,{children:[(0,S.jsx)(E.u,{data:u}),(0,S.jsx)(Z.z,{active:!0,size:200,textContent:n("myTraining"),onClick:function(){e("/training",{replace:!0})}})]}):(0,S.jsx)(g.k,{})]})})})})}}}]);
//# sourceMappingURL=221.d3cef0a6.chunk.js.map