"use strict";(self.webpackChunkbook_reader_front_end=self.webpackChunkbook_reader_front_end||[]).push([[837],{513:function(n,e,t){t.d(e,{p:function(){return a}});var i,r=t(168),a=t(6444).ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  /* justify-content: center; */\n"])))},2768:function(n,e,t){t.d(e,{l:function(){return c}});var i,r=t(168),a=t(1087),o=t(6444),d=t(6355),s=t(3329),l=(0,o.ZP)(a.rU)(i||(i=(0,r.Z)(["\n  color: ",";\n  display: block;\n  margin-top: 40px;\n  align-self: start;\n  margin-left: 16px;\n"])),(function(n){return n.theme.colors.accentColor})),c=function(n){var e=n.to;return(0,s.jsx)(l,{to:e,children:(0,s.jsx)(d.x_l,{})})}},1134:function(n,e,t){t.r(e),t.d(e,{default:function(){return $e}});var i=t(3433),r=t(9439),a=t(2791),o=t(4805),d=t(9434),s=t(9230);function l(n){var e=6e4,t=36e5,i=24*t;return{days:Math.floor(n/i),hours:Math.floor(n%i/t),minutes:Math.floor(n%i%t/e),seconds:Math.floor(n%i%t%e/1e3)}}var c,u,p,h,x,f,m,g,b,j,w,v,y,Z,k,P,T,S,_,D,z,M,C,F,I,O,B,R,G,$,A,N,E,H,U,K,W,q,L,V,X=t(2918),J=t(7754),Q=t(2015),Y=function(n){return n.training.books},nn=function(n){return n.training.startDate},en=function(n){return n.training.finishDate},tn=function(n){return n.training.results},rn=function(n){return n.training.completed},an=function(n){return n.training._id},on=t(9897),dn=t(8475),sn=t(9585),ln=t(9513),cn=t.n(ln),un=(t(8639),t(168)),pn=t(6444),hn=t(3329),xn=pn.ZP.h2(c||(c=(0,un.Z)(["\n  width: 100%;\n  height: 60px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    /* width: 288px !important; */\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundTitle}),(function(n){return n.theme.media.desktop})),fn=function(n){var e=n.text;return(0,hn.jsx)(xn,{children:e})},mn=t(5705),gn=t(8007),bn=t(8715),jn=t(62),wn=(0,pn.ZP)(mn.l0)(u||(u=(0,un.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n\n  @media "," {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n\n  select {\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 2px 32px 2px 12px;\n    background-color: ",";\n    outline: none;\n    border: none;\n    color: ",";\n\n    @media "," {\n      width: 483px;\n    }\n    @media "," {\n      width: 715px;\n    }\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),vn=pn.ZP.div(p||(p=(0,un.Z)(["\n  width: 100%;\n\n  @media "," {\n    width: 483px;\n  }\n\n  @media "," {\n    width: 715px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),yn={book:""},Zn=gn.Ry({book:gn.Z_().required("Please select a book")}),kn=function(){var n=(0,s.$G)().t,e=(0,d.I0)(),t=(0,d.v9)(dn.W.y).filter((function(n){return"toRead"===n.status})),i=n("chooseBooks");return(0,hn.jsx)(mn.J9,{onSubmit:function(n,i){var r=i.resetForm,a=t.find((function(e){return e._id===n.book}));r(),e(sn.K.addBook(a))},initialValues:yn,validationSchema:Zn,children:(0,hn.jsxs)(wn,{children:[(0,hn.jsxs)(vn,{children:[(0,hn.jsxs)(mn.gN,{name:"book",as:"select",children:[(0,hn.jsx)("option",{value:"",hidden:!0,disabled:!0,children:i}),t.map((function(n){return(0,hn.jsx)("option",{value:n._id,children:n.title},n._id)}))]}),(0,hn.jsx)(jn.m,{children:(0,hn.jsx)(mn.Bc,{name:"book"})})]}),(0,hn.jsx)(bn.z,{size:170,textContent:n("btnAdd"),type:"submit"})]})})},Pn=pn.ZP.div(h||(h=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 1.21;\n  gap: 20px;\n  padding: ","px;\n\n  @media "," {\n    gap: 24px;\n  }\n  @media "," {\n    width: 928px;\n    gap: 32px;\n    padding: 0;\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Tn=pn.ZP.div(x||(x=(0,un.Z)(["\n  input {\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 2px 31px 2px 40px !important;\n    background-color: ",";\n    border: 1px solid #a6abb9;\n    margin-bottom: 20px;\n    @media screen and (min-width: 768px) {\n      width: 250px;\n      margin: 0;\n    }\n  }\n  div {\n    z-index: 10;\n  }\n  svg {\n    z-index: 5;\n    padding: 0 !important;\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    width: 17px;\n    height: 17px;\n    fill: ",";\n  }\n\n  @media "," {\n    display: flex;\n    gap: 40px;\n    align-self: flex-start;\n  }\n  @media "," {\n    align-self: center;\n    gap: 40px;\n  }\n"])),(function(n){return n.theme.colors.backgroundBody}),(function(n){return n.theme.colors.iconColor}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Sn=(pn.ZP.div(f||(f=(0,un.Z)(["\n  min-width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n  /* padding: 32px 20px; */\n  background-color: #f6f7fb;\n  @media screen and (min-width: 768px) {\n    min-width: 768px;\n    padding: 40px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]))),pn.ZP.div(m||(m=(0,un.Z)(["\n  @media screen and (min-width: 1280px) {\n    width: 928px;\n  }\n"]))),pn.ZP.div(g||(g=(0,un.Z)(["\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),function(){var n=(0,s.$G)().t,e=(0,d.v9)((function(n){return n.selectedDates.startDate})),t=(0,d.v9)((function(n){return n.selectedDates.endDate})),i=(0,a.useState)(e),o=(0,r.Z)(i,2),l=o[0],c=o[1],u=(0,a.useState)(t),p=(0,r.Z)(u,2),h=p[0],x=p[1],f=(0,d.I0)();return(0,a.useEffect)((function(){var n=l.valueOf();f(sn.K.startDate(n))}),[f,l]),(0,a.useEffect)((function(){var n=h.valueOf();f(sn.K.endDate(n))}),[f,h]),(0,hn.jsx)(hn.Fragment,{children:(0,hn.jsxs)(Pn,{children:[(0,hn.jsx)(fn,{text:n("myTraining")}),(0,hn.jsxs)(Tn,{children:[(0,hn.jsx)(cn(),{showIcon:!0,selected:e,onChange:function(n){return c(n)},closeOnScroll:!0,dateFormat:"MMMM d, yyyy h:mm aa",selectsStart:!0,minDate:Date.now(),showDisabledMonthNavigation:!0,placeholderText:n("start")}),(0,hn.jsx)(cn(),{showIcon:!0,selected:t,onChange:function(n){return x(n)},closeOnScroll:!0,dateFormat:"MMMM d, yyyy h:mm aa",selectsEnd:!0,minDate:l,showDisabledMonthNavigation:!0,placeholderText:n("finish")})]}),(0,hn.jsx)(kn,{})]})})}),_n=pn.ZP.div(b||(b=(0,un.Z)(["\n  width: 100%;\n  background-color: white;\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    padding-left: ","px;\n    padding-right: ","px;\n\n    display: flex;\n    align-items: baseline;\n\n    h2 {\n      width: 275px;\n    }\n  }\n\n  @media "," {\n    padding-left: 0;\n    padding-right: 0;\n    width: 288px;\n\n    display: block;\n    h2 {\n      width: 100%;\n    }\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.desktop})),Dn=pn.ZP.div(j||(j=(0,un.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ","px;\n  background-color: white;\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    height: 105px;\n    box-shadow: none;\n    margin-left: auto;\n  }\n\n  @media "," {\n    height: ","px;\n  }\n"])),(function(n){return n.isTrainingStarted?161:236}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted?269:244})),zn=pn.ZP.ul(w||(w=(0,un.Z)(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n  gap: 20px;\n  padding: ","px;\n\n  @media "," {\n    align-items: baseline;\n    gap: ","px;\n    padding: 0;\n  }\n\n  @media "," {\n    gap: 20px;\n    margin: 0;\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.tablet}),(function(n){return n.isTrainingStarted?12:40}),(function(n){return n.theme.media.desktop})),Mn=pn.ZP.li(v||(v=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media "," {\n    height: 60px;\n  }\n  @media "," {\n    height: 148px;\n    width: ","px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted&&70})),Cn=pn.ZP.div(y||(y=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: ","px;\n  height: ","px;\n  background: ",";\n  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);\n\n  font-family: Open Sans;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.18;\n  text-align: center;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n    width: 100px;\n  }\n\n  @media "," {\n    width: ","px;\n    height: ","px;\n  }\n"])),(function(n){return n.isTrainingStarted?66:100}),(function(n){return n.isTrainingStarted?66:100}),(function(n){return n.theme.colors.backgroundStatistic}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return"booksLeft"===n.param?"".concat(n.theme.colors.accentColor):"".concat(n.theme.colors.statisticColor)}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted?66:100}),(function(n){return n.isTrainingStarted?66:100})),Fn=pn.ZP.span(Z||(Z=(0,un.Z)(["\n  width: 100%;\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  text-align: center;\n  color: ",";\n\n  display: flex;\n  justify-content: center;\n  margin-top: 14px;\n\n  @media "," {\n    max-width: 100px;\n    font-size: ",";\n    margin-top: 0;\n  }\n\n  @media "," {\n    font-size: ",";\n    margin-top: 14px;\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.isTrainingStarted?"".concat(n.theme.fontSizes.xs):"".concat(n.theme.fontSizes.s)}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.notActiveText}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontSizes.ss}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted?"".concat(n.theme.fontSizes.xs):"".concat(n.theme.fontSizes.s)})),In=function(n){var e=n.trainingStarted,t=n.statistic,i=(0,s.$G)().t;return(0,hn.jsx)(hn.Fragment,{children:(0,hn.jsxs)(_n,{children:[(0,hn.jsx)(fn,{text:i("myGoals")}),(0,hn.jsx)(Dn,{isTrainingStarted:e,children:(0,hn.jsx)(zn,{isTrainingStarted:e,children:t.map((function(n){var t=n.param,i=n.text,r=n.amount;return(0,hn.jsxs)(Mn,{isTrainingStarted:e,children:[(0,hn.jsx)(Cn,{param:t,isTrainingStarted:e,children:r}),(0,hn.jsx)(Fn,{isTrainingStarted:e,children:i})]},t)}))})})]})})},On=t(4005),Bn=pn.ZP.div(k||(k=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  @media "," {\n    width: 290px;\n  }\n"])),(function(n){return n.theme.media.tablet})),Rn=pn.ZP.div(P||(P=(0,un.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.21;\n  color: #898f9f;\n  margin-bottom: 8px;\n"]))),Gn=pn.ZP.div(T||(T=(0,un.Z)(["\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  width: 100%;\n  height: 60px;\n\n  background: #ffffff;\n  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);\n  padding-bottom: 8px;\n"]))),$n=pn.ZP.p(S||(S=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  text-align: center;\n  width: 43px;\n\n  :not(:last-child) {\n    margin-right: 8px;\n  }\n"]))),An=pn.ZP.span(_||(_=(0,un.Z)(["\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 25px;\n  line-height: 1.52;\n\n  color: #091e3f;\n"]))),Nn=pn.ZP.span(D||(D=(0,un.Z)(["\n  font-weight: 700;\n  font-size: 25px;\n  line-height: 1.52;\n  margin-right: 8px;\n"]))),En=pn.ZP.span(z||(z=(0,un.Z)(["\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  text-align: center;\n\n  color: #898f9f;\n"]))),Hn=function(n){var e=n.selectedDate,t=n.timerTitle,i=(0,a.useState)((function(){return Date.now()})),o=(0,r.Z)(i,2),d=o[0],c=o[1],u=(0,s.$G)().t,p=(0,a.useRef)(null),h=l(e-d);return(0,a.useEffect)((function(){if(null!==p.current)return clearInterval(p);p.current=setInterval((function(){c(Date.now())}),1e3)}),[]),(0,hn.jsxs)(Bn,{children:[(0,hn.jsxs)(Rn,{children:[t," "]}),(0,hn.jsxs)(Gn,{children:[(0,hn.jsxs)($n,{children:[(0,hn.jsx)(An,{children:h.days}),(0,hn.jsx)(En,{children:u("days")})]}),(0,hn.jsx)(Nn,{children:":"}),(0,hn.jsxs)($n,{children:[(0,hn.jsx)(An,{children:h.hours}),(0,hn.jsx)(En,{children:u("hrs")})]}),(0,hn.jsx)(Nn,{children:":"}),(0,hn.jsxs)($n,{children:[(0,hn.jsx)(An,{children:h.minutes}),(0,hn.jsx)(En,{children:u("mins")})]}),(0,hn.jsx)(Nn,{children:":"}),(0,hn.jsxs)($n,{children:[(0,hn.jsx)(An,{children:h.seconds}),(0,hn.jsx)(En,{children:u("secs")})]})]})]})},Un=pn.ZP.div(M||(M=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  @media "," {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 32px;\n    width: auto;\n  }\n  @media "," {\n    gap: 74px;\n    align-items: start;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Kn=function(n){var e=n.endDate,t=(0,s.$G)().t,i=(new Date).getFullYear(),r=new Date("".concat(i),12,0);return(0,hn.jsxs)(Un,{children:[(0,hn.jsx)(Hn,{selectedDate:r,timerTitle:t("yearsCountdown")}),(0,hn.jsx)(Hn,{selectedDate:e,timerTitle:t("goalsCountdown")})]})},Wn=t(9218),qn=new Date,Ln=Date.parse(qn)+36e5,Vn=gn.Ry().shape({dateInput:gn.hT().max(new Date(Ln)),pageInput:gn.Rx().integer().min(1).max(999).required()}),Xn=(0,pn.ZP)(cn())(C||(C=(0,un.Z)(["\n  height: 42px;\n  width: 110px;\n  background-color: #f6f7fb;\n  border: 1px solid #a6abb9;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 13px;\n  color: #242a37;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.21;\n  outline: none;\n"]))),Jn=pn.ZP.div(F||(F=(0,un.Z)(["\n  height: 42px;\n  width: 110px;\n  background-color: #f6f7fb;\n  border: 1px solid #a6abb9;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 13px;\n  color: #242a37;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.21;\n"]))),Qn={width:"100%",backgroundColor:"transparent",border:"none",outline:"none"},Yn=pn.ZP.div(I||(I=(0,un.Z)(["\n  display: flex;\n  margin-bottom: 28px;\n  justify-content: space-between;\n"]))),ne=pn.ZP.label(O||(O=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 1.18;\n  color: #242a37;\n"]))),ee=(0,pn.ZP)(mn.l0)(B||(B=(0,un.Z)(["\n  display: flex;\n  /* align-items: center; */\n\n  flex-direction: column;\n\n  width: 100%;\n"]))),te=function(n){var e=n.onAddResultClick,t=n.completed,i=(0,s.$G)().t,r={dateInput:new Date,pageInput:""};return(0,hn.jsx)(mn.J9,{initialValues:r,validationSchema:Vn,onSubmit:function(n,t){(0,t.resetForm)(),e(n)},children:(0,hn.jsxs)(ee,{autoComplete:"off",children:[(0,hn.jsxs)(Yn,{children:[(0,hn.jsxs)(ne,{htmlFor:"dateInput",children:[i("date"),(0,hn.jsxs)("div",{children:[(0,hn.jsx)(mn.gN,{name:"dateInput",children:function(n){var e=n.form,t=n.field,i=e.setFieldValue,r=t.value;return(0,hn.jsx)(Xn,{id:"dateInput",selected:r,onChange:function(n){return i(n)},closeOnScroll:!0,dateFormat:" dd.MM.yyyy",maxDate:Date.now(),showDisabledMonthNavigation:!0})}}),(0,hn.jsx)(mn.Bc,{name:"dateInput"})]})]}),(0,hn.jsxs)(ne,{htmlFor:"pageInput",children:[i("amountOfPages_results"),(0,hn.jsx)(Jn,{children:(0,hn.jsx)(mn.gN,{type:"number",name:"pageInput",style:Qn})})]})]}),(0,hn.jsx)(bn.z,{center:!0,active:!0,textContent:i("addResult"),disabled:t,size:240,type:"submit",height:40})]})})},ie=pn.ZP.li(R||(R=(0,un.Z)(["\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr 1fr;\n  list-style: none;\n  color: ",";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.21;\n  margin-bottom: 4px;\n\n  :last-child {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.colors.deepBlue})),re=pn.ZP.span(G||(G=(0,un.Z)(["\n  color: ",";\n  margin-left: auto;\n"])),(function(n){return n.pale?n.theme.colors.notActiveText:n.theme.colors.deepBlue})),ae=function(n){var e=n.row,t=e.date,i=e.time,r=e.pages,a=(0,s.$G)().t;return(0,hn.jsxs)(ie,{children:[(0,hn.jsx)(re,{children:t}),(0,hn.jsx)(re,{pale:!0,children:i}),(0,hn.jsx)(re,{children:r}),(0,hn.jsxs)(re,{pale:!0,children:[" \xa0",a("results_pages")]})]})},oe=t(1951),de=function(n){return(0,oe.default)(Date.parse(n),"dd.MM.yyyy")},se=function(n){return(0,oe.default)(Date.parse(n),"HH:mm:ss")},le=function(n){return(0,oe.default)(Date.parse(n),"dd.MM")},ce=function(n){var e=n.results,t=null===e||void 0===e?void 0:e.map((function(n){var e=n.date,t=n.pages,i=n._id;return{date:de(e),time:se(e),pages:t,id:i}})).reverse().slice(0,5);return(0,hn.jsx)("ul",{children:t.map((function(n){return(0,hn.jsx)(ae,{row:n},n.id)}))})},ue=pn.ZP.div($||($=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  padding: 20px 20px 22px 20px;\n  gap: 32px;\n  background-color: #ffffff;\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    flex-direction: row;\n    width: 704px;\n    margin-bottom: 53px;\n  }\n  @media "," {\n    flex-direction: column;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),pe=pn.ZP.h2(A||(A=(0,un.Z)(["\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 1.25;\n  color: ",";\n  text-align: center;\n  margin-bottom: 12px;\n\n  @media "," {\n    font-size: 14px;\n    line-height: 1.21;\n  }\n"])),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.media.tablet})),he=function(n){var e=n.updateUi,t=(0,s.$G)().t,i=(0,d.I0)(),r=(0,d.v9)(tn),a=(0,d.v9)(rn);return(0,hn.jsx)(hn.Fragment,{children:(0,hn.jsxs)(ue,{children:[(0,hn.jsxs)("div",{children:[(0,hn.jsxs)(pe,{children:[" ",t("results")]}),(0,hn.jsx)(te,{onAddResultClick:function(n){i(on.addResultThank(n)),e(!0),console.log("\ud83d\ude80 ~ file: ReadingInformation.js:25 ~ onAddResultClick ~ updateUi:")},completed:a})]}),(0,hn.jsxs)("div",{children:[(0,hn.jsxs)(pe,{children:[" ",t("statistics")]}),(0,hn.jsx)(ce,{results:r})]})]})})},xe=t(2768),fe=t(3104),me=pn.ZP.div(N||(N=(0,un.Z)(["\n  display: flex;\n  flex-direction: ",";\n  gap: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  @media "," {\n    width: 100%;\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n  @media "," {\n    flex-direction: row;\n    justify-content: space-between;\n    // padding: ","px;\n  }\n"])),(function(n){return n.trainingStarted?"column":"column-reverse"}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[5]})),ge=t(513),be=pn.ZP.div(E||(E=(0,un.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 288px;\n"]))),je=t(6355),we=t(9698),ve="ModalFinish_modal__O8St1",ye="ModalFinish_modal_text__nC2ta",Ze="ModalFinish_btn_modal__Ow6un",ke="ModalFinish_thumbUp__Kl-F3",Pe=function(n){var e=n.isModalOpen,t=n.closeModal,i=(0,s.$G)().t;return(0,hn.jsx)(we.u,{active:e,children:(0,hn.jsxs)("div",{style:{backgroundColor:"rgba(43, 43, 43, 0.1)",outline:0,"&:focus":{outline:"none"}},className:ve,children:[(0,hn.jsx)(je.nM7,{className:ke}),(0,hn.jsx)("p",{className:ye,children:i("You_are_the_best")}),(0,hn.jsx)("div",{className:Ze,children:(0,hn.jsx)(bn.z,{textContent:i("new_training_after_finish"),type:"button",size:"130",onClick:function(){t()}})})]})})},Te=t(4942),Se=t(1413),_e=t(3623),De=pn.ZP.div(H||(H=(0,un.Z)(["\n  position: relative;\n  padding: 14px 22px;\n  background-color: white;\n  width: 100%;\n  height: 75%;\n  @media "," {\n    padding: 25px 35px;\n    height: 90%;\n  }\n  @media "," {\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),ze=pn.ZP.p(U||(U=(0,un.Z)(["\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n  color: #242a37;\n"]))),Me=pn.ZP.span(K||(K=(0,un.Z)(["\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-align: center;\n  width: 25px;\n  height: 25px;\n  padding: 6px 8px;\n  margin-left: 8px;\n  color: #242a37;\n  background-color: #f5f7fa;\n"]))),Ce=pn.ZP.div(W||(W=(0,un.Z)(["\n  position: absolute;\n  height: auto;\n  right: 10px;\n  top: 100px;\n  @media "," {\n    right: 0px;\n    top: 130px;\n  }\n"])),(function(n){return n.theme.media.tablet})),Fe=pn.ZP.ul(q||(q=(0,un.Z)(["\n  padding: 0px;\n  margin: 0px;\n  text-align: right;\n\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 2.5;\n  text-transform: uppercase;\n  color: #091e3f;\n"]))),Ie=pn.ZP.li(L||(L=(0,un.Z)(["\n  width: 50px;\n  height: 30px;\n  margin-right: 11px;\n  background-color: rgba(245, 247, 250, 0.85);\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n  text-align: center;\n  color: ",";\n  margin-bottom: 16px;\n\n  @media "," {\n    margin-right: 45px;\n  }\n"])),(function(n){return n.accent?n.theme.colors.accentColor:n.theme.colors.statisticColor}),(function(n){return n.theme.media.tablet})),Oe=pn.ZP.p(V||(V=(0,un.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  bottom: 15px;\n  right: 12px;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #091e3f;\n  margin-top: 16px;\n"]))),Be=t(5967);Be.kL.register(Be.uw,Be.f$,Be.od,Be.jn,Be.Dx,Be.u,Be.De);var Re={responsive:!0,scales:{y:{display:!1}},plugins:{legend:{display:!1},title:{display:!1}}},Ge=function(n){var e=n.days,t=n.totalPagesInTraining,r=(0,s.$G)().t,a=(0,d.v9)(tn),o=(0,d.v9)(nn),l=Array.apply(null,Array(e));l.forEach((function(n,e,t){t[e]=le(new Date(o+24*e*60*60*1e3))}));var c=t/e,u=Array.apply(null,Array(e));u.forEach((function(n,e,t){t[e]=Math.round(c+c*e)}));var p=null===a||void 0===a?void 0:a.reduce((function(n,e){var t=le(e.date);return(0,Se.Z)((0,Se.Z)({},n),{},(0,Te.Z)({},t,n[t]?n[t]+e.pages:e.pages))}),{}),h=l.reduce((function(n,e,t,r){var a=Object.keys(p),o=a[a.length-1],d=r.indexOf(o);return 0===t?[p[e]?p[e]:0]:t>d?(0,i.Z)(n):[].concat((0,i.Z)(n),[p[e]?p[e]+n[n.length-1]:n[n.length-1]])}),[]),x={labels:(0,i.Z)(l),datasets:[{label:"Plan",data:(0,i.Z)(u),lineTension:.3,borderColor:"#091e3f",pointBackgroundColor:"#091e3f",pointHoverRadius:10,pointRadius:8,PointHitRadius:10},{label:"Fact",data:(0,i.Z)(h),lineTension:.3,borderColor:"#ff6b08",pointBackgroundColor:"#ff6b08",pointHoverRadius:10,pointRadius:8,PointHitRadius:10}]};return(0,hn.jsxs)(De,{children:[(0,hn.jsxs)(ze,{children:[r("number_of_pages_a_day"),(0,hn.jsx)(Me,{children:Math.round(c)})]}),(0,hn.jsx)(Ce,{children:(0,hn.jsxs)(Fe,{children:[(0,hn.jsx)(Ie,{children:r("line_chart_plan")}),(0,hn.jsx)(Ie,{accent:!0,children:r("line_chart_fact")})]})}),(0,hn.jsx)(_e.x1,{options:Re,data:x}),(0,hn.jsx)(Oe,{children:r("line_chart_time")})]})},$e=function(){var n;(0,J.e)();var e=(0,s.$G)().t,t=(0,d.I0)(),c=(0,o.useMediaQuery)({query:"(max-width: 767px)"}),u=(0,o.useMediaQuery)({query:"(min-width: 1280px)"}),p=(0,a.useState)(!1),h=(0,r.Z)(p,2),x=h[0],f=h[1];(0,a.useEffect)((function(){t(dn.b.getBooksThunk())}),[t,x]);var m=(0,d.v9)(Q.py.XZ),g=(0,d.v9)(sn.j.rn),b=(0,d.v9)(sn.j.dF),j=(0,d.v9)(sn.j.os),w=l(b-j).days,v=""===b?0:w,y=[{param:"books",text:e("amountOfBooks"),amount:g.length},{param:"days",text:e("amountOfDays"),amount:v}],Z=(0,d.v9)(dn.W.y),k=(0,d.v9)(Y).reduce((function(n,e){return[].concat((0,i.Z)(n),[Z.find((function(n){return n._id===e}))])}),[]),P=(0,d.v9)(en),T=(0,d.v9)(nn),S=(0,d.v9)(an),_=k.reduce((function(n,e){return n+e.pages}),0),D=(0,d.v9)(rn),z=l(P?P-T:0).days,M=null===k||void 0===k||null===(n=k.filter((function(n){return"haveRead"!==n.status})))||void 0===n?void 0:n.length,C=[{param:"books",text:e("amountOfBooks"),amount:null===k||void 0===k?void 0:k.length},{param:"days",text:e("amountOfDays"),amount:z},{param:"booksLeft",text:e("booksLeft"),amount:M}];(0,a.useEffect)((function(){m&&t(on.getTrainingThank())}),[t,m]),(0,a.useEffect)((function(){t(dn.b.getBooksThunk())}),[t,x]);var F=(0,X.d)(D),I=F.closeModal,O=F.isModalOpen,B=!m&&(null===g||void 0===g?void 0:g.length)>0&&""!==b;return(0,hn.jsxs)(hn.Fragment,{children:[(0,hn.jsx)(fe.P,{children:(0,hn.jsx)(ge.p,{children:m?(0,hn.jsxs)(hn.Fragment,{children:[(0,hn.jsxs)(me,{trainingStarted:!0,children:[(0,hn.jsxs)(ge.p,{children:[(0,hn.jsx)(Kn,{endDate:P}),u&&(0,hn.jsxs)(hn.Fragment,{children:[(0,hn.jsx)(Wn.u,{data:k,startedTraining:!0,updateUi:!0}),(0,hn.jsx)(Ge,{days:z,totalPagesInTraining:_})]})]}),(0,hn.jsxs)(be,{children:[(0,hn.jsx)(In,{trainingStarted:!0,statistic:C}),(0,hn.jsx)(he,{updateUi:f})]})]}),!u&&!c&&(0,hn.jsx)(Wn.u,{data:k,startedTraining:!0}),c&&(0,hn.jsx)(On.r,{books:k,startedTraining:!0})]}):(0,hn.jsx)(hn.Fragment,{children:c?(0,hn.jsxs)(hn.Fragment,{children:[(0,hn.jsx)(xe.l,{to:"/mobileTrainingBookTable "}),(0,hn.jsx)(Sn,{})]}):(0,hn.jsxs)(hn.Fragment,{children:[(0,hn.jsxs)(me,{children:[(0,hn.jsx)(Sn,{}),(0,hn.jsx)(In,{statistic:y})]}),(0,hn.jsx)(Wn.u,{data:g,training:!0}),(0,hn.jsx)(bn.z,{onClick:function(){t(Q.XP.changeTrainingStatusThunk(!0)),t(on.addTrainingThank({startDate:j,finishDate:b,books:g})),t(sn.K.resetSelectedDates())},textContent:e("startTraining"),active:!0,size:200,disabled:!B,type:"button"})]})})})}),(0,hn.jsx)(Pe,{isModalOpen:O,closeModal:function(){I(),t(on.deleteTrainingThank(S)),t(Q.XP.changeTrainingStatusThunk(!1))}})]})}}}]);
//# sourceMappingURL=837.ba55f5b9.chunk.js.map