"use strict";(self.webpackChunkbook_reader_front_end=self.webpackChunkbook_reader_front_end||[]).push([[351],{4005:function(n,e,t){t.d(e,{r:function(){return W}});var r,i,o,a,s,u,c,d,l,h=t(9439),x=t(2791),m=t(8551),g=t(9230),p=t(6355),f=t(8820),j=t(2918),b=t(2792),Z=t(9698),v=t(1810),k=t(9928),w=t(168),y=t(6444),P=y.ZP.div(r||(r=(0,w.Z)(["\n  gap: ","px;\n  /* margin-bottom: ","px; */\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[6]})),B=y.ZP.div(i||(i=(0,w.Z)(["\n  position: relative;\n  padding: ","px;\n  padding-left: 54px;\n  display: flex;\n  flex-direction: column;\n\n  box-shadow: ",";\n  background-color: ",";\n  margin-bottom: ","px;\n  /* margin-bottom: ","px; */\n  width: ",";\n\n  svg {\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.isTrainingPage?"none":"0px 4px 4px rgba(0, 0, 0, 0.25)"}),(function(n){return n.isTrainingPage?n.theme.colors.transparent:n.theme.colors.white}),(function(n){return n.theme.space[4]}),(function(n){return n.isTrainingPage?0:n.theme.space[4]}),(function(n){return n.isTrainingPage?"288px":"auto"})),F=y.ZP.div(o||(o=(0,w.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: ",";\n"])),(function(n){return n.startedTraining||"reading"===n.status?n.theme.colors.accentColor:n.theme.colors.tableIconColor})),C=y.ZP.table(a||(a=(0,w.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.body})),R=y.ZP.caption(s||(s=(0,w.Z)(["\n  text-align: start;\n  margin-bottom: ","px;\n  margin-top: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.deepBlue})),T=y.ZP.tr(u||(u=(0,w.Z)([""]))),z=y.ZP.th(c||(c=(0,w.Z)(["\n  text-align: start;\n  color: ",";\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.colors.notActiveText}),(function(n){return n.theme.space[4]})),S=y.ZP.td(d||(d=(0,w.Z)(["\n  padding-left: ","px;\n  text-align: start;\n  color: ",";\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.space[4]})),_=y.ZP.div(l||(l=(0,w.Z)(["\n  display: block;\n  justify-content: center;\n  align-self: center;\n"]))),M=t(3329),W=function(n){var e=n.books,t=n.startedTraining,r=n.training,i=(0,j.d)(),o=i.isModalOpen,a=i.toggleModal,s=(0,g.$G)().t,u=(0,x.useState)(null),c=(0,h.Z)(u,2),d=c[0],l=c[1],w=(0,x.useState)(""),y=(0,h.Z)(w,2),W=y[0],I=y[1],N=(0,x.useState)(null),H=(0,h.Z)(N,2),V=H[0],Y=H[1],E=r||t,J={resume:W,rating:V},q=0===e.length;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(P,{children:[q&&!t&&(0,M.jsxs)(B,{isTrainingPage:E,children:[(0,M.jsx)(F,{children:(0,M.jsx)(p.uYZ,{size:"22px"})}),(0,M.jsxs)(C,{children:[(0,M.jsx)(R,{children:"..."}),(0,M.jsxs)("tbody",{children:[(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_author"),": "]}),(0,M.jsx)(S,{children:"..."})]}),(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_year"),": "]}),(0,M.jsx)(S,{children:"..."})]}),(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_pages"),": "]}),(0,M.jsx)(S,{children:"..."})]})]})]})]},"empty"),!q&&e.map((function(n){var e=n._id,r=n.status,i=n.title,o=n.author,u=n.year,c=n.pages,d=n.rating,h=n.resume;return(0,M.jsxs)(B,{isTrainingPage:E,children:[(0,M.jsx)(F,{status:r,startedTraining:t,children:t?(0,M.jsx)(M.Fragment,{children:"haveRead"===r?(0,M.jsx)(f.YV5,{size:"22px"}):(0,M.jsx)(k.E,{})}):(0,M.jsx)(p.uYZ,{size:"22px"})}),(0,M.jsxs)(C,{children:[(0,M.jsx)(R,{children:i}),(0,M.jsxs)("tbody",{children:[(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_author"),": "]}),(0,M.jsx)(S,{children:o})]}),(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_year"),": "]}),(0,M.jsx)(S,{children:u})]}),(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_pages"),": "]}),(0,M.jsx)(S,{children:c})]}),"haveRead"===r&&(0,M.jsxs)(T,{children:[(0,M.jsxs)(z,{children:[s("book_rating"),": "]}),(0,M.jsx)(S,{children:(0,M.jsx)(b.W,{rating:d})})]})]})]}),"haveRead"===r&&(0,M.jsx)(_,{children:(0,M.jsx)(m.l,{toggleModal:a,id:e,rating:d,resume:h,setCurrentBookId:l,setCurrentBookResume:I,setCurrentBookRating:Y})})]},e)}))]}),(0,M.jsx)(Z.u,{active:o,closeModal:a,children:(0,M.jsx)(v.S,{closeModal:a,id:d,initialValues:J,resetState:function(){l(null),I(""),Y(null)}})})]})}},513:function(n,e,t){t.d(e,{p:function(){return o}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-top: 20px;\n  gap: ","px;\n\n  @media "," {\n    padding-top: 0;\n    gap: ","px;\n  }\n  @media "," {\n    /* gap: ","px; */\n    gap: 0;\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[6]}))},62:function(n,e,t){t.d(e,{m:function(){return o}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: 2px 32px 2px 12px;\n  margin-top: ","px;\n  color: ",";\n  height: ","px;\n  text-align: left;\n\n  @media "," {\n    padding: 0;\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.tablet}))},9972:function(n,e,t){t.d(e,{u:function(){return en}});var r,i,o,a,s,u,c,d,l,h,x,m=t(4942),g=t(3433),p=t(1413),f=t(9439),j=t(2791),b=t(4805),Z=t(9230),v=t(2918),k=t(6815),w={},y=t(1807),P=t(6355),B=t(8820),F=t(9434),C=t(2404),R=t(2792),T=t(8551),z=t(9928),S=t(168),_=t(6444),M=_.ZP.tbody(r||(r=(0,S.Z)(["\n  height: ",";\n  min-height: ",";\n"])),(function(n){return n.hasScroll?"150px":"auto"}),(function(n){return n.training?"150px":"auto"})),W=_.ZP.tr(i||(i=(0,S.Z)(["\n  background-color: ",";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  @media "," {\n    background-color: ",";\n    height: ","px;\n    box-shadow: ",";\n  }\n\n  @media "," {\n    height: ","px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.isTrainingPage?n.theme.colors.transparent:n.theme.colors.white}),(function(n){return n.isTrainingPage?n.theme.space[6]:n.theme.space[7]}),(function(n){return n.isTrainingPage?"none":"0px 4px 4px rgba(0, 0, 0, 0.25)"}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingPage?n.theme.space[5]:n.theme.space[7]})),I=_.ZP.td(o||(o=(0,S.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  padding-left: ","px;\n  padding-right: ","px;\n  svg {\n    height: auto;\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.startedTraining||"reading"===n.status?n.theme.colors.accentColor:n.theme.colors.tableIconColor})),N=_.ZP.div(a||(a=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n"])),(function(n){return n.theme.space[5]})),H=_.ZP.button(s||(s=(0,S.Z)(["\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  line-height: 0;\n"]))),V=t(3329),Y=function(n){var e=n.books,t=n.training,r=n.startedTraining,i=n.isTrainingPage,o=n.toggleModal,a=n.setCurrentBookId,s=n.setCurrentBookResume,u=n.setCurrentBookRating,c=(0,b.useMediaQuery)({query:"(min-width: 1280px)"}),d=(0,F.I0)();return(0,V.jsxs)(M,{children:[null===e||void 0===e?void 0:e.map((function(n){var e=n._id,l=n.status,h=n.title,x=n.author,m=n.year,g=n.pages,p=n.rating,f=n.resume;return(0,V.jsxs)(W,{isTrainingPage:i,children:[(0,V.jsx)(I,{status:l,startedTraining:r,children:(0,V.jsxs)(N,{children:[r?(0,V.jsx)(V.Fragment,{children:"haveRead"===l?(0,V.jsx)(B.YV5,{size:"22px"}):(0,V.jsx)(z.E,{})}):(0,V.jsx)(P.uYZ,{size:"22px"}),(0,V.jsx)(y.default,{text:h,length:c?70:50})]})}),(0,V.jsx)(I,{children:(0,V.jsx)(y.default,{text:x,length:c?32:18})}),(0,V.jsx)(I,{children:m}),(0,V.jsx)(I,{children:g}),"haveRead"===l&&!r&&(0,V.jsx)(I,{children:(0,V.jsxs)(N,{children:[(0,V.jsx)(R.W,{rating:p}),(0,V.jsx)(T.l,{toggleModal:o,id:e,rating:p,resume:f,setCurrentBookId:a,setCurrentBookResume:s,setCurrentBookRating:u})]})}),t&&(0,V.jsx)(I,{children:(0,V.jsx)(N,{children:(0,V.jsx)(H,{onClick:function(){return d((0,C.deleteBook)(e))},children:(0,V.jsx)(B.VPh,{size:"22px"})})})})]},e)})),t&&(0,V.jsxs)(W,{isTrainingPage:i,children:[(0,V.jsx)(I,{status:"training",children:(0,V.jsxs)(N,{children:[(0,V.jsx)(P.uYZ,{size:"22px"}),"..."]})}),(0,V.jsx)(I,{}),(0,V.jsx)(I,{}),(0,V.jsx)(I,{}),(0,V.jsx)(I,{})]})]})},E=_.ZP.thead(u||(u=(0,S.Z)(["\n  margin-bottom: 8px;\n  width: 100%;\n"]))),J=_.ZP.th(c||(c=(0,S.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  width: 60px;\n  /* border-collapse: collapse; */\n\n  @media "," {\n    text-align: left;\n    padding-left: ","px;\n    padding-right: ","px;\n\n    width: ","%;\n  }\n\n  @media "," {\n    width: ","%;\n\n    padding-top: 12px;\n    padding-bottom: 12px;\n    border-top: 1px solid ",";\n    border-bottom: 1px solid ",";\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.notActiveText}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return"haveRead"===n.status?A(n.name):"training"===n.status?Q(n.name):$(n.name)}),(function(n){return n.theme.media.desktop}),(function(n){return"haveRead"===n.status?q(n.name):"training"===n.status?Q(n.name):G(n.name)}),(function(n){return n.theme.colors.tableBorder}),(function(n){return n.theme.colors.tableBorder})),q=function(n){switch(n){case"title":return 30;case"author":case"rating":return 25;default:return 10}},G=function(n){switch(n){case"title":return 50;case"author":return 30;default:return 10}},$=function(n){switch(n){case"title":return 50;case"author":return 30;default:return 10}},A=function(n){switch(n){case"title":return 25;case"author":return 20;case"rating":return 35;default:return 10}},Q=function(n){switch(n){case"title":return 40;case"author":default:return 24;case"year":return 12}},O=function(n){var e=n.status,t=(0,Z.$G)().t;return(0,V.jsx)(E,{children:(0,V.jsxs)("tr",{children:[(0,V.jsx)(J,{name:"title",status:e,children:t("book_title")}),(0,V.jsx)(J,{name:"author",status:e,children:t("book_author")}),(0,V.jsx)(J,{name:"year",status:e,children:t("book_year")}),(0,V.jsx)(J,{name:"pages",status:e,children:t("book_pages")}),"haveRead"===e&&(0,V.jsx)(J,{name:"rating",status:e,children:t("book_rating")})]})})},U=t(4005),D=t(9698),K=t(1810),L=(_.ZP.div(d||(d=(0,S.Z)([""]))),_.ZP.div(l||(l=(0,S.Z)(["\n  padding-top: ","px;\n  margin-bottom: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n  width: ","px;\n\n  @media "," {\n    width: 100%;\n    /* width: ","px; */\n    margin-bottom: ","px;\n    padding-right: 0;\n    padding-left: 0;\n  }\n  @media "," {\n    margin-bottom: ","px;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.mediaWidth.mobile}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.mediaWidth.tablet}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingPage?40:0}))),X=_.ZP.table(h||(h=(0,S.Z)(["\n  display: block;\n  @media "," {\n    display: table;\n    padding-bottom: 40px;\n    width: 100%;\n    border-spacing: 0 10px;\n    padding-bottom: 20px;\n  }\n  @media "," {\n    padding-bottom: 32px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),nn=_.ZP.caption(x||(x=(0,S.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: left;\n  margin-bottom: ","px;\n  white-space: pre;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.space[5]})),en=function(n){var e=n.data,t=n.training,r=n.startedTraining,i=(0,b.useMediaQuery)({query:"(max-width: 767px)"}),o=(0,v.d)(),a=o.isModalOpen,s=o.toggleModal,u=(0,Z.$G)().t,c=(0,j.useState)(null),d=(0,f.Z)(c,2),l=d[0],h=d[1],x=(0,j.useState)(""),y=(0,f.Z)(x,2),P=y[0],B=y[1],F=(0,j.useState)(null),C=(0,f.Z)(F,2),R=C[0],T=C[1],z={resume:P,rating:R},S=null===e||void 0===e?void 0:e.reduce((function(n,e){var t=e.status;return(0,p.Z)((0,p.Z)({},n),{},(0,m.Z)({},t,n[t]?[].concat((0,g.Z)(n[t]),[e]):[e]))}),{}),_=t||r,M=(null===e||void 0===e?void 0:e.length)>3&&_,W=(0,j.useRef)(null);return function(n,e){(0,j.useEffect)((function(){var t;return n.current,e&&(t=(0,k.UN)(n.current,w)),function(){t&&t.destroy()}}),[e,n])}(W,M),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(L,{isTrainingPage:_,children:[r&&!i&&(0,V.jsx)("div",{ref:W,style:{height:M?"200px":"auto",minHeight:"200px"},children:(0,V.jsxs)(X,{children:[(0,V.jsx)(O,{status:"toRead"}),(0,V.jsx)(Y,{books:e,startedTraining:!0,isTrainingPage:!0})]})}),t&&!r&&(0,V.jsx)("div",{ref:W,style:{height:M?"200px":"auto",minHeight:"200px"},children:(0,V.jsxs)(X,{children:[(0,V.jsx)(O,{status:"training"}),(0,V.jsx)(Y,{books:S.toRead,training:!0,isTrainingPage:!0})]})}),S.haveRead&&!r&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(X,{children:[(0,V.jsx)(nn,{children:u("alreadyRead")}),i?(0,V.jsx)(V.Fragment,{}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(O,{status:"haveRead"}),(0,V.jsx)(Y,{books:S.haveRead,toggleModal:s,setCurrentBookId:h,setCurrentBookResume:B,setCurrentBookRating:T})]})]}),i&&(0,V.jsx)(U.r,{books:S.haveRead})]}),S.reading&&!r&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(X,{children:[(0,V.jsxs)(nn,{children:[" ",u("readingNow")," "]}),i?(0,V.jsx)(V.Fragment,{}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(O,{status:"reading"}),(0,V.jsx)(Y,{books:S.reading})]})]}),i&&(0,V.jsx)(U.r,{books:S.reading})]}),!t&&S.toRead&&!r&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(X,{children:[(0,V.jsxs)(nn,{children:[" ",u("goingToRead")," "]}),i?(0,V.jsx)(V.Fragment,{}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(O,{status:"toRead"}),(0,V.jsx)(Y,{books:S.toRead})]})]}),i&&(0,V.jsx)(U.r,{books:S.toRead})]})]}),(0,V.jsx)(D.u,{active:a,closeModal:s,children:(0,V.jsx)(K.S,{closeModal:s,id:l,initialValues:z,resetState:function(){h(null),B(""),T(null)}})})]})}},8551:function(n,e,t){t.d(e,{l:function(){return u}});var r,i=t(168),o=t(6444).ZP.span(r||(r=(0,i.Z)(["\n  display: block;\n  font-weight: ",";\n  line-height: ",";\n  font-size: ",";\n  text-align: center;\n  color: ",";\n  background-color: ",";\n  width: 127px;\n  height: ","px;\n\n  padding-top: 12px;\n  padding-bottom: 11px;\n\n  border-radius: ",";\n  border: ",";\n  box-shadow: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n    border: ",";\n  }\n\n  @media "," {\n    width: 80px;\n  }\n  @media "," {\n    width: 130px;\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.tableIconColor}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.radii.sm}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.transparent)}),(function(n){return n.theme.boxShadow.btn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accentColor}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.transparent)}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),a=t(9230),s=t(3329),u=function(n){var e=n.toggleModal,t=n.id,r=n.rating,i=n.resume,u=n.setCurrentBookId,c=n.setCurrentBookResume,d=n.setCurrentBookRating,l=(0,a.$G)().t;return(0,s.jsx)(o,{onClick:function(){e(),u(t),c(i),d(r)},children:l("resume")})}},1810:function(n,e,t){t.d(e,{S:function(){return P}});var r,i,o,a,s=t(1413),u=t(9230),c=t(4805),d=t(9434),l=t(5112),h=t(5705),x=t(8475),m=t(8007),g=m.Ry().shape({rating:m.Z_(),resume:m.Z_().min(1,"Too short resume!").max(1e3,"You have exceeded the word limit").typeError("Must be a string!").required("this field is required")}),p=t(8715),f=t(62),j=t(168),b=t(6444),Z=(0,b.ZP)(h.l0)(r||(r=(0,j.Z)(["\n  width: 280px;\n  padding: ","px;\n  padding-bottom: ","px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  @media "," {\n    width: 608px;\n  }\n  /* @media "," {\n    width: 608px;\n  } */\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),v=b.ZP.label(i||(i=(0,j.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.xm}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.deepBlue})),k=b.ZP.textarea(o||(o=(0,j.Z)(["\n  width: 100%;\n  height: 170px;\n  resize: none;\n  border: 1px solid #a6abb9;\n"]))),w=b.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  align-self: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 20px;\n\n  @media "," {\n    width: 290px;\n    margin-top: 28px;\n  }\n"])),(function(n){return n.theme.media.tablet})),y=t(3329),P=function(n){var e=n.closeModal,t=n.id,r=n.initialValues,i=n.resetState,o=(0,d.I0)(),a=(0,u.$G)().t,m=(0,c.useMediaQuery)({query:"(max-width: 767px)"}),j=function(){return m?97:130};return(0,y.jsx)(h.J9,{initialValues:r,onSubmit:function(n){o(x.b.feedbackThunk({feedback:n,id:t})),e(),i()},validationSchema:g,children:(0,y.jsxs)(Z,{children:[(0,y.jsxs)(v,{htmlFor:"rating",children:[a("chooseRating")," "]}),(0,y.jsx)(h.gN,{name:"rating",children:function(n){var e=n.form,t=n.field,r=(n.meta,e.setFieldValue);return(0,y.jsx)(l.Z,(0,s.Z)((0,s.Z)({id:"rating",type:"number"},t),{},{count:5,activeColor:"#FF6B08",size:17,color:"#A6ABB9",onChange:function(n){r("rating",n)}}))}}),(0,y.jsxs)(v,{htmlFor:"resume",children:[" ",a("resumeRating")]}),(0,y.jsx)(h.gN,{name:"resume",children:function(n){n.form;var e=n.field,t=n.meta;return(0,y.jsxs)("div",{children:[(0,y.jsx)(k,(0,s.Z)((0,s.Z)({placeholder:"...",id:"resume"},e),{},{type:"text"})),t.error&&t.touched?(0,y.jsx)(f.m,{children:t.error}):null]})}}),(0,y.jsxs)(w,{children:[(0,y.jsx)(p.z,{type:"button",onClick:e,textContent:a("btnBack"),size:"".concat(j())}),(0,y.jsx)(p.z,{type:"submit",textContent:a("btnSave"),size:"".concat(j()),active:!0})]})]})})}},2792:function(n,e,t){t.d(e,{W:function(){return d}});var r,i=t(168),o=t(8820),a=t(6355),s=t(6444),u=t(3329),c=s.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  width: ","px;\n  gap: ","px;\n  color: ",";\n  svg {\n    width: ","px;\n    height: ","px;\n    line-height: 0;\n  }\n"])),(function(n){return n.theme[8]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),d=function(n){var e=n.rating;return(0,u.jsxs)(c,{children:[e>=1?(0,u.jsx)(o.gwB,{color:"#FF6B08"}):(0,u.jsx)(a.jJN,{color:"#FF6B08"}),e>=2?(0,u.jsx)(o.gwB,{color:"#FF6B08"}):(0,u.jsx)(a.jJN,{color:"#FF6B08"}),e>=3?(0,u.jsx)(o.gwB,{color:"#FF6B08"}):(0,u.jsx)(a.jJN,{color:"#FF6B08"}),e>=4?(0,u.jsx)(o.gwB,{color:"#FF6B08"}):(0,u.jsx)(a.jJN,{color:"#FF6B08"}),e>=5?(0,u.jsx)(o.gwB,{color:"#FF6B08"}):(0,u.jsx)(a.jJN,{color:"#FF6B08"})]})}},9928:function(n,e,t){t.d(e,{E:function(){return o}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 16px;\n  height: 16px;\n\n  border: 1px solid ",";\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n"])),(function(n){return n.theme.colors.tableIconColor}))},7754:function(n,e,t){t.d(e,{e:function(){return s}});var r=t(2791),i=t(7689),o=t(9434),a=t(4289),s=function(){var n=(0,i.s0)(),e=(0,o.v9)(a.Cl);(0,r.useEffect)((function(){e||n("/login",{replace:!0})}),[e,n])}},8475:function(n,e,t){t.d(e,{W:function(){return r},b:function(){return o}});var r={};t.r(r),t.d(r,{y:function(){return i}});var i=function(n){return n.books.entities},o=t(4640)}}]);
//# sourceMappingURL=351.78c6aaea.chunk.js.map