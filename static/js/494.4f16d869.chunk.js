"use strict";(self.webpackChunkbook_reader_front_end=self.webpackChunkbook_reader_front_end||[]).push([[494],{7763:function(n,e,t){t.d(e,{w:function(){return C}});var i,r,o,a,s,d,c,l=t(3433),u=t(4942),p=t(1413),h=t(3623),x=t(9434),f=t(9385),m=t(8997),g=t(9230),b=t(168),j=t(6444),w=j.ZP.div(i||(i=(0,b.Z)(["\n  position: relative;\n  padding: 80px 22px;\n  background-color: ",";\n  width: 100%;\n  height: 290px;\n  @media "," {\n    padding: 25px 35px;\n    height: 90%;\n    /* margin-top: ","px; */\n  }\n  @media "," {\n    margin-top: ","px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[6]})),v=j.ZP.p(r||(r=(0,b.Z)(["\n  font-weight: 500;\n  font-size: ",";\n  text-transform: uppercase;\n  margin-bottom: 24px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.deepBlue})),y=j.ZP.span(o||(o=(0,b.Z)(["\n  font-weight: 600;\n  font-size: ",";\n  text-transform: uppercase;\n  text-align: center;\n  width: 25px;\n  height: 25px;\n  padding: 6px 8px;\n  margin-left: 8px;\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.colors.backgroundStatistic})),Z=j.ZP.div(a||(a=(0,b.Z)(["\n  position: absolute;\n  height: auto;\n  right: 10px;\n  top: 150px;\n  @media "," {\n    right: 0px;\n    top: 130px;\n  }\n"])),(function(n){return n.theme.media.tablet})),k=j.ZP.ul(s||(s=(0,b.Z)(["\n  padding: 0px;\n  margin: 0px;\n  text-align: right;\n\n  font-weight: 600;\n  font-size: ",";\n  line-height: 2.5;\n  text-transform: uppercase;\n  color: ",";\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.ss}),(function(n){return n.theme.colors.statisticColor}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontSizes.xs})),P=j.ZP.li(d||(d=(0,b.Z)(["\n  width: 30px;\n  height: 18px;\n  margin-right: 11px;\n  background-color: rgba(245, 247, 250, 0.85);\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n  text-align: center;\n  color: ",";\n  margin-bottom: 16px;\n\n  @media "," {\n    margin-right: 45px;\n    width: 50px;\n    height: 30px;\n  }\n"])),(function(n){return n.accent?n.theme.colors.accentColor:n.theme.colors.statisticColor}),(function(n){return n.theme.media.tablet})),S=j.ZP.p(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  bottom: 15px;\n  right: 12px;\n\n  font-weight: 600;\n  font-size: ",";\n  text-transform: uppercase;\n  color: ",";\n  margin-top: 8px;\n  @media "," {\n    margin-top: 16px;\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.statisticColor}),(function(n){return n.theme.media.tablet})),z=t(5967),T=t(3329);z.kL.register(z.uw,z.f$,z.od,z.jn,z.Dx,z.u,z.De);var D={responsive:!0,scales:{y:{display:!1}},plugins:{legend:{display:!1},title:{display:!1}}},C=function(n){var e=n.days,t=n.totalPagesInTraining,i=n.startDate;console.log("\ud83d\ude80 ~ file: LineChart.js:54 ~ LineChart ~ days:",e);var r=(0,g.$G)().t,o=(0,x.v9)(f.V.sW),a=0===e?[]:Array.apply(null,Array(e+1));console.log("\ud83d\ude80 ~ file: LineChart.js:59 ~ LineChart ~ labelsArr:",a),a.forEach((function(n,e,t){t[e]=m.Vc(new Date(i+24*e*60*60*1e3))}));var s=e>0?t/e:0,d=Array.apply(null,Array(e+1));d.forEach((function(n,e,t){t[e]=Math.round(s+s*e)}));var c=null===o||void 0===o?void 0:o.reduce((function(n,e){var t=m.Vc(e.date);return(0,p.Z)((0,p.Z)({},n),{},(0,u.Z)({},t,n[t]?n[t]+e.pages:e.pages))}),{}),b=a.reduce((function(n,e,t,i){var r=Object.keys(c),o=r[r.length-1],a=i.indexOf(o);return 0===t?[c[e]?c[e]:0]:t>a?(0,l.Z)(n):[].concat((0,l.Z)(n),[c[e]?c[e]+n[n.length-1]:n[n.length-1]])}),[]),j=a.length>0?(0,l.Z)(a):["","","",""],z=d.length>0?(0,l.Z)(d):[5],C=b.length>0?(0,l.Z)(b):[0],M={labels:(0,l.Z)(j),datasets:[{label:"Plan",data:(0,l.Z)(z),lineTension:.3,borderColor:"#091e3f",pointBackgroundColor:"#091e3f",pointHoverRadius:10,pointRadius:8,PointHitRadius:10},{label:"Fact",data:(0,l.Z)(C),lineTension:.3,borderColor:"#ff6b08",pointBackgroundColor:"#ff6b08",pointHoverRadius:10,pointRadius:8,PointHitRadius:10}]};return(0,T.jsxs)(w,{children:[(0,T.jsxs)(v,{children:[r("number_of_pages_a_day"),(0,T.jsx)(y,{children:Math.round(s)})]}),(0,T.jsx)(Z,{children:(0,T.jsxs)(k,{children:[(0,T.jsx)(P,{children:r("line_chart_plan")}),(0,T.jsx)(P,{accent:!0,children:r("line_chart_fact")})]})}),(0,T.jsx)(h.x1,{options:D,data:M}),(0,T.jsx)(S,{children:r("line_chart_time")})]})}},2768:function(n,e,t){t.d(e,{l:function(){return l}});var i,r=t(168),o=t(1087),a=t(6444),s=t(6355),d=t(3329),c=(0,a.ZP)(o.rU)(i||(i=(0,r.Z)(["\n  color: ",";\n  display: block;\n  margin-top: 40px;\n  align-self: start;\n  margin-left: 16px;\n"])),(function(n){return n.theme.colors.accentColor})),l=function(n){var e=n.to;return(0,d.jsx)(c,{to:e,children:(0,d.jsx)(s.x_l,{})})}},733:function(n,e,t){t.d(e,{M:function(){return w}});var i,r,o,a,s,d,c=t(9230),l=t(2714),u=t(168),p=t(6444),h=p.ZP.div(i||(i=(0,u.Z)(["\n  width: 100%;\n  background-color: white;\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    padding-left: ","px;\n    padding-right: ","px;\n\n    display: flex;\n    align-items: baseline;\n\n    h2 {\n      width: 275px;\n    }\n  }\n\n  @media "," {\n    padding-left: 0;\n    padding-right: 0;\n    width: 288px;\n\n    display: block;\n    h2 {\n      width: 100%;\n    }\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.desktop})),x=p.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ","px;\n  background-color: white;\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    height: 105px;\n    box-shadow: none;\n    margin-left: auto;\n  }\n\n  @media "," {\n    height: ","px;\n  }\n"])),(function(n){return n.isTrainingStarted?161:236}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted?269:244})),f=p.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n  gap: 20px;\n  padding: ","px;\n\n  @media "," {\n    align-items: baseline;\n    gap: ","px;\n    padding: 0;\n  }\n\n  @media "," {\n    gap: 20px;\n    margin: 0;\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.tablet}),(function(n){return n.isTrainingStarted?12:40}),(function(n){return n.theme.media.desktop})),m=p.ZP.li(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media "," {\n    height: 60px;\n  }\n  @media "," {\n    height: 148px;\n    width: ","px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted&&70})),g=p.ZP.div(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: ","px;\n  height: ","px;\n  background: ",";\n  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);\n\n  font-family: Open Sans;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.18;\n  text-align: center;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n    width: 100px;\n  }\n\n  @media "," {\n    width: ","px;\n    height: ","px;\n  }\n"])),(function(n){return n.isTrainingStarted?66:100}),(function(n){return n.isTrainingStarted?66:100}),(function(n){return n.theme.colors.backgroundStatistic}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return"booksLeft"===n.param?"".concat(n.theme.colors.accentColor):"".concat(n.theme.colors.statisticColor)}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted?66:100}),(function(n){return n.isTrainingStarted?66:100})),b=p.ZP.span(d||(d=(0,u.Z)(["\n  width: 100%;\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  text-align: center;\n  color: ",";\n\n  display: flex;\n  justify-content: center;\n  margin-top: 14px;\n\n  @media "," {\n    max-width: 100px;\n    font-size: ",";\n    margin-top: 0;\n  }\n\n  @media "," {\n    font-size: ",";\n    margin-top: 14px;\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.isTrainingStarted?"".concat(n.theme.fontSizes.xs):"".concat(n.theme.fontSizes.s)}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.notActiveText}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontSizes.ss}),(function(n){return n.theme.media.desktop}),(function(n){return n.isTrainingStarted?"".concat(n.theme.fontSizes.xs):"".concat(n.theme.fontSizes.s)})),j=t(3329),w=function(n){var e=n.trainingStarted,t=n.statistic,i=(0,c.$G)().t;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(h,{children:[(0,j.jsx)(l.H,{text:i("myGoals")}),(0,j.jsx)(x,{isTrainingStarted:e,children:(0,j.jsx)(f,{isTrainingStarted:e,children:t.map((function(n){var t=n.param,i=n.text,r=n.amount;return(0,j.jsxs)(m,{isTrainingStarted:e,children:[(0,j.jsx)(g,{param:t,isTrainingStarted:e,children:r}),(0,j.jsx)(b,{isTrainingStarted:e,children:i})]},t)}))})})]})})}},2714:function(n,e,t){t.d(e,{H:function(){return d}});var i,r=t(168),o=t(6444),a=t(3329),s=o.ZP.h2(i||(i=(0,r.Z)(["\n  width: 100%;\n  height: 60px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    /* width: 288px !important; */\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.secondBody}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundTitle}),(function(n){return n.theme.media.desktop})),d=function(n){var e=n.text;return(0,a.jsx)(s,{children:e})}},5402:function(n,e,t){function i(n){var e=6e4,t=36e5,i=24*t;return{days:Math.floor(n/i)+1,hours:Math.floor(n%i/t),minutes:Math.floor(n%i%t/e),seconds:Math.floor(n%i%t%e/1e3)}}t.d(e,{n:function(){return i}})},8997:function(n,e,t){t.d(e,{Vc:function(){return a},XV:function(){return o},v0:function(){return r}});var i=t(1951),r=function(n){return(0,i.default)(Date.parse(n),"dd.MM.yyyy")},o=function(n){return(0,i.default)(Date.parse(n),"HH:mm:ss")},a=function(n){return(0,i.default)(Date.parse(n),"dd.MM")}},3494:function(n,e,t){t.r(e),t.d(e,{default:function(){return Yn}});var i,r,o,a,s,d,c,l,u,p,h,x,f,m,g,b,j,w,v,y,Z,k,P,S,z,T,D,C,M=t(9439),_=t(2791),B=t(4805),I=t(9434),R=t(9230),F=t(5402),V=t(7754),O=t(2015),G=t(9385),$=t(9585),H=t(9513),A=t.n(H),E=(t(8639),t(2714)),L=t(8475),W=t(5705),N=t(8007),X=t(8715),q=t(62),K=t(168),Q=t(6444),U=(0,Q.ZP)(W.l0)(i||(i=(0,K.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n\n  @media "," {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n\n  select {\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 2px 32px 2px 12px;\n    background-color: ",";\n    outline: none;\n    border: none;\n    color: ",";\n\n    @media "," {\n      width: 483px;\n    }\n    @media "," {\n      width: 715px;\n    }\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Y=Q.ZP.div(r||(r=(0,K.Z)(["\n  width: 100%;\n\n  @media "," {\n    width: 483px;\n  }\n\n  @media "," {\n    width: 715px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),J=t(3329),nn={book:""},en=N.Ry({book:N.Z_().required("Please select a book")}),tn=function(){var n=(0,R.$G)().t,e=(0,I.I0)(),t=(0,I.v9)(L.W.y).filter((function(n){return"toRead"===n.status})),i=n("chooseBooks");return(0,J.jsx)(W.J9,{onSubmit:function(n,i){var r=i.resetForm,o=t.find((function(e){return e._id===n.book}));r(),e($.K.addBook(o))},initialValues:nn,validationSchema:en,children:(0,J.jsxs)(U,{children:[(0,J.jsxs)(Y,{children:[(0,J.jsxs)(W.gN,{name:"book",as:"select",children:[(0,J.jsx)("option",{value:"",hidden:!0,disabled:!0,children:i}),t.map((function(n){return(0,J.jsx)("option",{value:n._id,children:n.title},n._id)}))]}),(0,J.jsx)(q.m,{children:(0,J.jsx)(W.Bc,{name:"book"})})]}),(0,J.jsx)(X.z,{size:170,textContent:n("btnAdd"),type:"submit"})]})})},rn=Q.ZP.div(o||(o=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 1.21;\n  gap: 20px;\n  padding: ","px;\n\n  @media "," {\n    gap: 24px;\n  }\n  @media "," {\n    width: 928px;\n    gap: 32px;\n    padding: 0;\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),on=Q.ZP.div(a||(a=(0,K.Z)(["\n  input {\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 2px 31px 2px 40px !important;\n    background-color: ",";\n    border: 1px solid #a6abb9;\n    margin-bottom: 20px;\n    @media screen and (min-width: 768px) {\n      width: 250px;\n      margin: 0;\n    }\n  }\n  div {\n    z-index: 10;\n  }\n  svg {\n    z-index: 5;\n    padding: 0 !important;\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    width: 17px;\n    height: 17px;\n    fill: ",";\n  }\n\n  @media "," {\n    display: flex;\n    gap: 40px;\n    align-self: flex-start;\n  }\n  @media "," {\n    align-self: center;\n    gap: 40px;\n  }\n"])),(function(n){return n.theme.colors.backgroundBody}),(function(n){return n.theme.colors.iconColor}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),an=(Q.ZP.div(s||(s=(0,K.Z)(["\n  min-width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n  /* padding: 32px 20px; */\n  background-color: #f6f7fb;\n  @media screen and (min-width: 768px) {\n    min-width: 768px;\n    padding: 40px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]))),Q.ZP.div(d||(d=(0,K.Z)(["\n  @media screen and (min-width: 1280px) {\n    width: 928px;\n  }\n"]))),Q.ZP.div(c||(c=(0,K.Z)(["\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),function(){var n=(0,R.$G)().t,e=(0,I.v9)((function(n){return n.selectedDates.startDate})),t=(0,I.v9)((function(n){return n.selectedDates.endDate})),i=(0,_.useState)(e),r=(0,M.Z)(i,2),o=r[0],a=r[1],s=(0,_.useState)(t),d=(0,M.Z)(s,2),c=d[0],l=d[1],u=(0,I.I0)();return(0,_.useEffect)((function(){var n=o.valueOf();u($.K.startDate(n))}),[u,o]),(0,_.useEffect)((function(){var n=c.valueOf();u($.K.endDate(n))}),[u,c]),(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(rn,{children:[(0,J.jsx)(E.H,{text:n("myTraining")}),(0,J.jsxs)(on,{children:[(0,J.jsx)(A(),{showIcon:!0,selected:e,onChange:function(n){return a(n)},closeOnScroll:!0,dateFormat:"MMMM d, yyyy h:mm aa",selectsStart:!0,minDate:Date.now(),showDisabledMonthNavigation:!0,placeholderText:n("start")}),(0,J.jsx)(A(),{showIcon:!0,selected:t,onChange:function(n){return l(n)},closeOnScroll:!0,dateFormat:"MMMM d, yyyy h:mm aa",selectsEnd:!0,minDate:o,showDisabledMonthNavigation:!0,placeholderText:n("finish")})]}),(0,J.jsx)(tn,{})]})})}),sn=t(733),dn=t(4005),cn=Q.ZP.div(l||(l=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  @media "," {\n    width: 290px;\n  }\n"])),(function(n){return n.theme.media.tablet})),ln=Q.ZP.div(u||(u=(0,K.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.21;\n  color: #898f9f;\n  margin-bottom: 8px;\n"]))),un=Q.ZP.div(p||(p=(0,K.Z)(["\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  width: 100%;\n  height: 60px;\n\n  background: #ffffff;\n  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);\n  padding-bottom: 8px;\n"]))),pn=Q.ZP.p(h||(h=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  text-align: center;\n  width: 43px;\n\n  :not(:last-child) {\n    margin-right: 8px;\n  }\n"]))),hn=Q.ZP.span(x||(x=(0,K.Z)(["\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 25px;\n  line-height: 1.52;\n\n  color: #091e3f;\n"]))),xn=Q.ZP.span(f||(f=(0,K.Z)(["\n  font-weight: 700;\n  font-size: 25px;\n  line-height: 1.52;\n  margin-right: 8px;\n"]))),fn=Q.ZP.span(m||(m=(0,K.Z)(["\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  text-align: center;\n\n  color: #898f9f;\n"]))),mn=function(n){var e=n.selectedDate,t=n.timerTitle,i=(0,_.useState)((function(){return Date.now()})),r=(0,M.Z)(i,2),o=r[0],a=r[1],s=(0,R.$G)().t,d=(0,_.useRef)(null),c=e-o,l=(0,F.n)(c);return(0,_.useEffect)((function(){if(null!==d.current)return clearInterval(d);d.current=setInterval((function(){a(Date.now())}),1e3)}),[]),(0,J.jsxs)(cn,{children:[(0,J.jsxs)(ln,{children:[t," "]}),(0,J.jsxs)(un,{children:[(0,J.jsxs)(pn,{children:[(0,J.jsx)(hn,{children:l.days}),(0,J.jsx)(fn,{children:s("days")})]}),(0,J.jsx)(xn,{children:":"}),(0,J.jsxs)(pn,{children:[(0,J.jsx)(hn,{children:l.hours}),(0,J.jsx)(fn,{children:s("hrs")})]}),(0,J.jsx)(xn,{children:":"}),(0,J.jsxs)(pn,{children:[(0,J.jsx)(hn,{children:l.minutes}),(0,J.jsx)(fn,{children:s("mins")})]}),(0,J.jsx)(xn,{children:":"}),(0,J.jsxs)(pn,{children:[(0,J.jsx)(hn,{children:l.seconds}),(0,J.jsx)(fn,{children:s("secs")})]})]})]})},gn=Q.ZP.div(g||(g=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  @media "," {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 32px;\n    width: auto;\n  }\n  @media "," {\n    gap: 74px;\n    align-items: start;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),bn=function(n){var e=n.endDate,t=(0,R.$G)().t,i=(new Date).getFullYear(),r=new Date("".concat(i),12,0);return(0,J.jsxs)(gn,{children:[(0,J.jsx)(mn,{selectedDate:r,timerTitle:t("yearsCountdown")}),(0,J.jsx)(mn,{selectedDate:e,timerTitle:t("goalsCountdown")})]})},jn=t(9972),wn=t(5861),vn=t(4687),yn=t.n(vn),Zn=new Date,kn=Date.parse(Zn)+36e5,Pn=N.Ry().shape({dateInput:N.hT().max(new Date(kn)),pageInput:N.Rx().integer().min(1).max(999).required()}),Sn=(0,Q.ZP)(A())(b||(b=(0,K.Z)(["\n  height: 42px;\n  width: 110px;\n  background-color: #f6f7fb;\n  border: 1px solid #a6abb9;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 13px;\n  color: #242a37;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.21;\n  outline: none;\n"]))),zn=Q.ZP.div(j||(j=(0,K.Z)(["\n  height: 42px;\n  width: 110px;\n  background-color: #f6f7fb;\n  border: 1px solid #a6abb9;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 13px;\n  color: #242a37;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.21;\n"]))),Tn={width:"100%",backgroundColor:"transparent",border:"none",outline:"none"},Dn=Q.ZP.div(w||(w=(0,K.Z)(["\n  display: flex;\n  margin-bottom: 28px;\n  justify-content: space-between;\n"]))),Cn=Q.ZP.label(v||(v=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 1.18;\n  color: #242a37;\n"]))),Mn=(0,Q.ZP)(W.l0)(y||(y=(0,K.Z)(["\n  display: flex;\n  /* align-items: center; */\n\n  flex-direction: column;\n\n  width: 100%;\n"]))),_n=function(n){var e=n.onAddResultClick,t=n.completed,i=(0,R.$G)().t,r={dateInput:new Date,pageInput:""};return(0,J.jsx)(W.J9,{initialValues:r,validationSchema:Pn,onSubmit:function(n,t){(0,t.resetForm)(),e(n)},children:(0,J.jsxs)(Mn,{autoComplete:"off",children:[(0,J.jsxs)(Dn,{children:[(0,J.jsxs)(Cn,{htmlFor:"dateInput",children:[i("date"),(0,J.jsxs)("div",{children:[(0,J.jsx)(W.gN,{name:"dateInput",children:function(n){var e=n.form,t=n.field,i=e.setFieldValue,r=t.value;return(0,J.jsx)(Sn,{id:"dateInput",selected:r,onChange:function(n){return i(n)},closeOnScroll:!0,dateFormat:" dd.MM.yyyy",maxDate:Date.now(),showDisabledMonthNavigation:!0})}}),(0,J.jsx)(W.Bc,{name:"dateInput"})]})]}),(0,J.jsxs)(Cn,{htmlFor:"pageInput",children:[i("amountOfPages_results"),(0,J.jsx)(zn,{children:(0,J.jsx)(W.gN,{type:"number",name:"pageInput",style:Tn})})]})]}),(0,J.jsx)(X.z,{center:!0,active:!0,textContent:i("addResult"),disabled:t,size:240,type:"submit",height:40})]})})},Bn=Q.ZP.li(Z||(Z=(0,K.Z)(["\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr 1fr;\n  list-style: none;\n  color: ",";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.21;\n  margin-bottom: 4px;\n\n  :last-child {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.colors.deepBlue})),In=Q.ZP.span(k||(k=(0,K.Z)(["\n  color: ",";\n  margin-left: auto;\n"])),(function(n){return n.pale?n.theme.colors.notActiveText:n.theme.colors.deepBlue})),Rn=function(n){var e=n.row,t=e.date,i=e.time,r=e.pages,o=(0,R.$G)().t;return(0,J.jsxs)(Bn,{children:[(0,J.jsx)(In,{children:t}),(0,J.jsx)(In,{pale:!0,children:i}),(0,J.jsx)(In,{children:r}),(0,J.jsxs)(In,{pale:!0,children:[" \xa0",o("results_pages")]})]})},Fn=t(8997),Vn=function(n){var e=n.results,t=null===e||void 0===e?void 0:e.map((function(n){var e=n.date,t=n.pages,i=n._id;return{date:Fn.v0(e),time:Fn.XV(e),pages:t,id:i}})).reverse().slice(0,5);return(0,J.jsx)("ul",{children:t.map((function(n){return(0,J.jsx)(Rn,{row:n},n.id)}))})},On=Q.ZP.div(P||(P=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  padding: 20px 20px 22px 20px;\n  gap: 32px;\n  background-color: #ffffff;\n  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);\n\n  @media "," {\n    flex-direction: row;\n    width: 704px;\n    margin-bottom: 53px;\n    justify-content: space-between;\n  }\n  @media "," {\n    flex-direction: column;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Gn=Q.ZP.h2(S||(S=(0,K.Z)(["\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 1.25;\n  color: ",";\n  text-align: center;\n  margin-bottom: 12px;\n\n  @media "," {\n    font-size: 14px;\n    line-height: 1.21;\n  }\n"])),(function(n){return n.theme.colors.deepBlue}),(function(n){return n.theme.media.tablet})),$n=function(){var n=(0,R.$G)().t,e=(0,I.I0)(),t=(0,I.v9)(G.V.sW),i=(0,I.v9)(G.V.d8),r=function(){var n=(0,wn.Z)(yn().mark((function n(t){return yn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(G.c.addResultThank(t));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(On,{children:[(0,J.jsxs)("div",{children:[(0,J.jsxs)(Gn,{children:[" ",n("results")]}),(0,J.jsx)(_n,{onAddResultClick:r,completed:i})]}),(0,J.jsxs)("div",{children:[(0,J.jsxs)(Gn,{children:[" ",n("statistics")]}),(0,J.jsx)(Vn,{results:t})]})]})})},Hn=t(2768),An=t(3104),En=Q.ZP.div(z||(z=(0,K.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  /* flex-direction: ","; */\n  gap: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  @media "," {\n    width: 100%;\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n  @media "," {\n    flex-direction: row;\n    justify-content: space-between;\n    // padding: ","px;\n  }\n"])),(function(n){return n.trainingStarted?"column":"column-reverse"}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[5]})),Ln=t(513),Wn=Q.ZP.div(T||(T=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 288px;\n  @media "," {\n    width: 100%;\n  }\n  @media "," {\n    width: 288px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Nn=t(9698),Xn=t(6355),qn=Q.ZP.div(D||(D=(0,K.Z)(["\n  background-color: rgba(43, 43, 43, 0.1);\n  width: 300px;\n  padding: 20px 10px;\n  text-align: center;\n  svg {\n    margin-bottom: 4px;\n    width: 54px;\n    height: 54px;\n    color: ",";\n  }\n"])),(function(n){return"noUnreadBooks"===n.completenessReason?n.theme.colors.accentColor:n.theme.colors.iconColor})),Kn=Q.ZP.p(C||(C=(0,K.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.38;\n  text-align: center;\n  margin-bottom: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.deepBlue})),Qn=function(n){var e=n.isModalOpen,t=n.onFinishModalBtnClick,i=n.completenessReason,r=(0,R.$G)().t;return(0,J.jsx)(Nn.u,{active:e,children:(0,J.jsxs)(qn,{completenessReason:i,children:[(0,J.jsx)(Xn.nM7,{}),"noUnreadBooks"===i&&(0,J.jsx)(Kn,{children:r("You_are_the_best")}),"hasDeadlinePassed"===i&&(0,J.jsx)(Kn,{children:r("Youre_doing_fine")}),(0,J.jsx)(X.z,{active:!0,textContent:r("new_training_after_finish"),type:"button",size:"130",onClick:function(){t()}})]})})},Un=t(7763),Yn=function(){var n;(0,V.e)();var e=(0,R.$G)().t,t=(0,I.I0)(),i=(0,B.useMediaQuery)({query:"(max-width: 767px)"}),r=(0,B.useMediaQuery)({query:"(min-width: 1280px)"}),o=(0,I.v9)(O.py.XZ),a=(0,I.v9)($.j.rn),s=(0,I.v9)($.j.dF),d=(0,I.v9)($.j.os),c=s?s-d:0,l=(0,F.n)(c).days,u=[{param:"books",text:e("amountOfBooks"),amount:a.length},{param:"days",text:e("amountOfDays"),amount:l}],p=a.reduce((function(n,e){return n+e.pages}),0),h=(0,I.v9)(G.V.rn),x=(0,I.v9)(G.V.Q7),f=(0,I.v9)(G.V.os),m=(0,I.v9)(G.V.id),g=(0,I.v9)(G.V.d8),b=(0,I.v9)(G.V.IR),j=h.reduce((function(n,e){return n+e.pages}),0),w=x?x-f:0,v=(0,F.n)(w).days,y=null===h||void 0===h||null===(n=h.filter((function(n){return"haveRead"!==n.status})))||void 0===n?void 0:n.length,Z=[{param:"books",text:e("amountOfBooks"),amount:null===h||void 0===h?void 0:h.length},{param:"days",text:e("amountOfDays"),amount:v},{param:"booksLeft",text:e("booksLeft"),amount:y}],k=(0,_.useState)(!1),P=(0,M.Z)(k,2),S=P[0],z=P[1];(0,_.useEffect)((function(){o&&t(G.c.getTrainingThank())}),[t,o]),(0,_.useEffect)((function(){g&&z(!0)}),[g]);var T=!o&&(null===a||void 0===a?void 0:a.length)>0&&""!==s,D=!r&&o;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(An.P,{children:(0,J.jsx)(Ln.p,{children:i?(0,J.jsx)(J.Fragment,{children:o?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(bn,{endDate:x}),(0,J.jsx)(sn.M,{trainingStarted:!0,statistic:Z}),(0,J.jsx)(dn.r,{books:h,startedTraining:!0}),(0,J.jsx)(Un.w,{days:v,totalPagesInTraining:j,startDate:f})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Hn.l,{to:"/mobileTrainingBookTable "}),(0,J.jsx)(an,{})]})}):(0,J.jsxs)(En,{trainingStarted:!!o,children:[(0,J.jsxs)(Ln.p,{children:[o?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(bn,{endDate:x}),D&&(0,J.jsx)(sn.M,{trainingStarted:!0,statistic:Z})]}):(0,J.jsx)(an,{}),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(jn.u,{data:o?h:a,startedTraining:!!o,training:!o}),!o&&(0,J.jsx)(X.z,{onClick:function(){t(O.XP.changeTrainingStatusThunk(!0)),t(G.c.addTrainingThank({startDate:d,finishDate:s,books:a})),t($.K.resetSelectedDates())},textContent:e("startTraining"),active:!0,size:200,disabled:!T,type:"button"}),(0,J.jsx)(Un.w,{startDate:o?f:d,days:o?v:l,totalPagesInTraining:o?j:p}),o&&!r&&(0,J.jsx)($n,{})]})]}),(0,J.jsxs)(Wn,{children:[!D&&(0,J.jsx)(sn.M,{trainingStarted:!!o,statistic:o?Z:u}),o&&r&&(0,J.jsx)($n,{})]})]})})}),(0,J.jsx)(Qn,{completenessReason:b,isModalOpen:S,onFinishModalBtnClick:function(){z(!1),t(G.c.deleteTrainingThank(m)),t(O.XP.changeTrainingStatusThunk(!1))}})]})}},9385:function(n,e,t){t.d(e,{V:function(){return i},c:function(){return u}});var i={};t.r(i),t.d(i,{rn:function(){return r},d8:function(){return d},IR:function(){return l},Q7:function(){return a},id:function(){return c},sW:function(){return s},os:function(){return o}});var r=function(n){return n.training.books},o=function(n){return n.training.startDate},a=function(n){return n.training.finishDate},s=function(n){return n.training.results},d=function(n){return n.training.completed},c=function(n){return n.training._id},l=function(n){return n.training.completenessReason},u=t(9897)}}]);
//# sourceMappingURL=494.4f16d869.chunk.js.map