(this.webpackJsonpnccwebsite=this.webpackJsonpnccwebsite||[]).push([[0],{86:function(t,e,i){},87:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),s=i(9),c=i.n(s),r=i(50),o=i(11),l=i(137),d=i(65),x=i(140),p=Object(d.a)({typography:{fontFamily:["Roboto"].join(","),fontWeightLight:"200"},palette:{primary:{main:"#9FBC95",light:"#edf2eb"},secondary:{main:"#515151"}},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}}),j=p=Object(x.a)(p),u=i(29),b=i(111),m=i(112),h=i(141),g=i(113),O=i(122),f=i(123),v=i(124),y=i(125),C=i(114),S=i(117),N=i(118),w=i(139),k=i(110),L=Object(k.a)((function(t){return{drawerImage:{height:"35px",paddingLeft:"20px"},headerContainer:{display:"flex",alignItems:"center",paddingBottom:"8px",paddingLeft:"1px"},drawerRoot:{"& .MuiDrawer-paper":{width:"260px"}},listIcon:{display:"flex",justifyContent:"flex-end"},subListPadding:{paddingLeft:"30px"},subListStyle:{boxShadow:"  -1px 20px 12px -22px inset"}}})),T=i(115),I=i(116),R=i(119),B=i(121),F=i.p+"static/media/logo.2ee02c83.svg",A=i(2),D=[{title:"ABOUT",url:"about",subList:[]},{title:"PROJECTS",url:"projects",subList:[{title:"Project 1",url:"projects",subList:[]},{title:"Project 2",url:"projects",subList:[]},{title:"Project 3",url:"projects",subList:[]}]},{title:"SERVICES",url:"services",subList:[{title:"Service 1",url:"service",subList:[]},{title:"Service 2",url:"service",subList:[]}]},{title:"CONTACT",url:"contact",subList:[]}],V=function(){var t=L(),e=Object(n.useState)(null),i=Object(u.a)(e,2),s=i[0],c=i[1];return Object(A.jsx)(A.Fragment,{children:D.map((function(e){return Object(A.jsxs)(a.a.Fragment,{children:[Object(A.jsxs)(h.a,{button:!0,onClick:function(t){return e.subList.length>0?(i=e.url,void c(s===i?null:i)):void 0;var i},children:[Object(A.jsx)(g.a,{primary:e.title}),e.subList.length>0?Object(A.jsx)(C.a,{className:t.listIcon,children:s===e.url?Object(A.jsx)(T.a,{}):Object(A.jsx)(I.a,{})}):null]}),e.subList.length>0?(i=e.subList,n=e,Object(A.jsx)(b.a,{in:s===n.url,timeout:400,unmountOnExit:!0,children:Object(A.jsx)(m.a,{className:t.subListStyle,children:i.map((function(e){return Object(A.jsx)(a.a.Fragment,{children:Object(A.jsx)(h.a,{className:t.subListPadding,button:!0,onClick:function(t){e.url},children:Object(A.jsx)(g.a,{primary:e.title})})},i.title)}))})})):null,Object(A.jsx)(S.a,{})]},e.title);var i,n}))})},W=function(){var t=L(),e=Object(n.useState)(!1),i=Object(u.a)(e,2),a=i[0],s=i[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(N.a,{onClick:function(t){return s(!0)},children:Object(A.jsx)(R.a,{})}),Object(A.jsx)(w.a,{anchor:"left",open:a,onClose:function(t){return s(!1)},className:t.drawerRoot,children:Object(A.jsxs)(m.a,{children:[Object(A.jsxs)("div",{className:t.headerContainer,children:[Object(A.jsx)(N.a,{onClick:function(t){return s(!1)},children:Object(A.jsx)(B.a,{})}),Object(A.jsx)("img",{src:F,className:t.drawerImage})]}),Object(A.jsx)(S.a,{}),Object(A.jsx)(V,{})]})})]})},P=Object(k.a)((function(t){return{logoImg:function(t){return{width:t?"150px":"200px",paddingLeft:"20px"}},navList:{display:"flex",padding:"0px 10px 0px 10px"},navListItem:{"&:hover":{boxShadow:"inset 0px -2px 0px -1px #4f604f"},"&.MuiListItem-root":{height:"64px"}},navListItemText:{whiteSpace:"nowrap"},navSubList:{backgroundColor:"white",boxShadow:" -8px 21px 8px -22px inset",width:"150px"},toolbarRoot:function(t){return{display:"flex",justifyContent:t?"normal":"space-between"}},collapseRoot:{position:"absolute",boxShadow:" 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%), -8px 21px 8px -22px inset"}}})),H=[{title:"ABOUT",url:"about",subList:[]},{title:"SERVICES",url:"services",subList:[]},{title:"CONTACT",url:"contact",subList:[]}],z=function(){var t=Object(o.f)(),e=Object(n.useState)(null),i=Object(u.a)(e,2),s=i[0],c=i[1],r=P();return Object(A.jsx)("div",{children:Object(A.jsx)(O.a,{onClickAway:function(t){return c(null)},children:Object(A.jsx)(m.a,{className:r.navList,component:"nav",children:H.map((function(e){return Object(A.jsxs)("div",{style:{position:"relative"},children:[Object(A.jsx)(h.a,{onClick:function(i){var n;(n=e).subList.length>0?c(s===n.url?null:n.url):t.replace("/".concat(n.url))},className:r.navListItem,button:!0,children:Object(A.jsx)(g.a,{className:r.navListItemText,primary:e.title})}),e.subList.length>0?(i=e.subList,n=e,Object(A.jsx)(b.a,{in:s===n.url,timeout:400,unmountOnExit:!0,className:r.collapseRoot,children:Object(A.jsx)(m.a,{className:r.navSubList,component:"div",disablePadding:!0,children:i.map((function(t){return Object(A.jsx)(a.a.Fragment,{children:Object(A.jsx)(h.a,{button:!0,className:r.nested,children:Object(A.jsx)(g.a,{primary:t.title})})},t.title)}))})})):null]},e.title);var i,n}))})})})},E=function(t){var e=Object(o.f)(),i=Object(f.a)("(max-width:800px)"),n=P(i);return Object(A.jsxs)("div",{children:[Object(A.jsx)(v.a,{color:"default",children:Object(A.jsxs)(y.a,{className:n.toolbarRoot,children:[i?Object(A.jsx)(W,{}):null,Object(A.jsx)("img",{className:n.logoImg,src:F,onClick:function(t){e.replace("/")}}),i?null:Object(A.jsx)(z,{})]})}),Object(A.jsx)(y.a,{})]})},M=i(37),U=i(126),_=i(30),J=Object(k.a)((function(t){var e;return{titleContainer:function(t){return{position:"relative",display:"flex",maxHeight:"900px",height:"90vh",minHeight:"500px",overflow:" hidden",justifyContent:t?"center":null}},titleTextContainer:function(t){return{padding:t?"5.5rem 0rem 0rem 0rem":"7rem 0rem 0rem 7rem",alignItems:t?"center":null,display:"flex",flexDirection:"column",width:"300px",height:"fit-content","& h2":{fontSize:t?"3rem":"3.75rem",fontWeight:"300"},"& h5":{padding:"15px 0px 0px 0px"}}},titleImg:(e={position:"absolute",top:"75px",right:"0px"},Object(_.a)(e,t.breakpoints.up("lg"),{height:"500px"}),Object(_.a)(e,t.breakpoints.down("md"),{height:"350px",top:"100px"}),Object(_.a)(e,t.breakpoints.down("sm"),{height:"300px",top:"100px"}),e),titleButton:{width:"175px",marginTop:"45px"}}})),q=Object(k.a)((function(t){return{homeContainer:{display:"flex",justifyContent:"center"},bodyContainer:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},paperContainer:{width:"98%",marginBottom:"3rem",paddingBottom:"3rem",borderRadius:"14px"}}})),X=Object(k.a)((function(t){return{textContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"80px"},underlineStyle:{width:"50%",position:"absolute",height:"100%",top:".5rem",border:"0px 0px 1px 0px solid black",borderBottom:"2px solid #9fbc95"},headingStyle:{fontWeight:"300",position:"relative",display:"flex",justifyContent:"center"},subheadingStyle:{fontWeight:"300",position:"relative",display:"flex",justifyContent:"center",padding:"5px 0px 5px 0px"},paragraphStyle:{padding:"2rem 2rem 0rem 2rem",textAlign:"center"}}})),G=i.p+"static/media/home_background.bb0493db.svg",K=function(){var t=Object(f.a)("(max-width:800px)"),e=J(t);return Object(A.jsxs)("div",{className:e.titleContainer,children:[Object(A.jsxs)("div",{className:e.titleTextContainer,children:[Object(A.jsx)(M.a,{variant:"h2",style:{textAlign:"".concat(t?"center":"initial")},children:"Carolina Clinical Services"}),Object(A.jsxs)(M.a,{variant:"h5",style:{textAlign:"".concat(t?"center":"initial")},children:[Object(A.jsx)("span",{style:{fontStyle:"italic",display:"".concat(t?"block":"inline")},children:"\u201cThe art of medicine consists of amusing the patient while nature cures the disease.\u201d"}),"  ","\u2015 Voltaire"]}),t?Object(A.jsx)(U.a,{className:e.titleButton,color:"primary",variant:"contained",children:"Our Services"}):null]}),t?null:Object(A.jsx)("img",{className:e.titleImg,src:G})]})},Q=i.p+"static/media/virus.494d673b.svg",Y=i.p+"static/media/blood.91d60064.svg",Z=i.p+"static/media/dna.27aaf0ed.svg",$=i.p+"static/media/PriceTag-Cvd.df865768.svg",tt=i.p+"static/media/PriceTag-Vax.d755b401.svg",et=Object(k.a)((function(){return{imgRoot:{position:"absolute",top:"-1px",right:"10px",width:"70px"}}})),it=function(t){var e,i=et();return Object(A.jsx)("img",{src:(e=t.tag,"VAX"==e?tt:"COVID"==e?$:void 0),className:i.imgRoot})},nt=i(132),at=i(133),st=i(134),ct=i(135),rt=i(67),ot=i(138),lt=Object(k.a)((function(t){return{paperRoot:{maxWidth:"330px",width:"300%",height:"590px",borderRadius:"10px",display:"flex",justifyContent:"center",position:"relative"},cardStyle:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 10px 10px 10px"},cardTitle:{margin:"20px 0px 25px 0px",display:"flex",justifyContent:"center",position:"relative","& h5":{fontWeight:"300",position:"relative",display:"flex",justifyContent:"center"},"& span":{position:"absolute",bottom:"-16px"}},underlineStyle:{width:"50%",position:"absolute",height:"100%",top:"0px",border:"0px 0px 1px 0px solid black",borderBottom:"2px solid #9fbc95"},cardBody:{width:"100%"},bodyHeading:{maxHeight:"100px",minHeight:"100px","& p":{fontWeight:"300",textAlign:"center",fontSize:".90rem",padding:"0px 25px"}},bodyContent:{display:"flex",padding:"10px 10px 0px 10px","& h6":{fontWeight:"400",lineHeight:"20px",fontSize:".9rem"},"& svg":{fontSize:"15px",paddingRight:"10px",paddingTop:"2px"}},cardAction:{position:"absolute",bottom:"15px"},buttonStyle:function(t){return{backgroundColor:t.color,width:"200px",borderRadius:"30px",color:"white",boxShadow:" 0 14px 28px ".concat(t.color,"50, 0 10px 10px ").concat(t.color,"20"),"& span > a":{color:"white",textDecoration:"none"},"&.MuiButton-root:hover":{backgroundColor:t.color}}},cardFeatures:{marginTop:"20px",height:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center"}}})),dt=Object(k.a)((function(){return{tooltipRoot:{"& svg":{padding:"2px 0px 0px 3px"},"& div":{top:"-10px !important",width:"90px !important",left:"-20px !important",fontSize:"10px !important"}}}})),xt=i(127),pt=i(128),jt=i(129),ut=i(130),bt=i(131),mt=Object(k.a)((function(t){return{dialogRoot:{"& .MuiDialog-paperWidthSm":{minWidth:"340px"}},dialogContent:{color:"#403e3e",display:"flex",marginBottom:"0px",fontSize:"20px",alignItems:"center","& svg":{padding:"0px 10px 0px 0px"}}}})),ht=function(t){var e=mt();return Object(A.jsx)("div",{children:Object(A.jsxs)(xt.a,{className:e.dialogRoot,open:t.isOpen,onClose:t.handleClose,children:[Object(A.jsx)(pt.a,{children:"Contact Us"}),Object(A.jsx)(jt.a,{children:Object(A.jsx)(ut.a,{className:e.dialogContent,children:t.children})}),Object(A.jsx)(bt.a,{children:Object(A.jsx)(U.a,{onClick:t.handleClose,children:"Close"})})]})})},gt=function(t){var e=dt(),i=Object(n.useState)(!1),a=Object(u.a)(i,2),s=a[0],c=a[1],r=function(){c(!1)};return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(O.a,{onClickAway:r,children:Object(A.jsx)("div",{className:e.tooltipRoot,children:Object(A.jsx)(ot.a,{PopperProps:{disablePortal:!0},onClose:r,open:s,disableFocusListener:!0,disableHoverListener:!0,title:t.text,children:Object(A.jsx)(ct.a,{onClick:function(){c(!0)}})})})})})},Ot=function(t){var e,i=Object(n.useState)(!1),s=Object(u.a)(i,2),c=s[0],r=s[1],o=lt(t);return Object(A.jsxs)(rt.a,{className:o.paperRoot,elevation:10,children:[Object(A.jsxs)("div",{className:o.cardStyle,children:[t.priceTag?Object(A.jsx)(it,{tag:t.priceTag}):null,Object(A.jsx)("img",{height:"125px",src:(e=t.image,"BLOOD"==e?Y:"DNA"==e?Z:Q)}),Object(A.jsxs)("div",{className:o.cardTitle,children:[Object(A.jsx)(M.a,{variant:"h5",children:t.title}),Object(A.jsx)(M.a,{variant:"caption",children:t.subtitle})]}),Object(A.jsxs)("div",{className:o.cardBody,children:[Object(A.jsx)("div",{className:o.bodyHeading,children:Object(A.jsx)(M.a,{children:t.summary})}),Object(A.jsx)("div",{className:o.cardFeatures,children:t.features.map((function(t,e){return Object(A.jsx)(a.a.Fragment,{children:Object(A.jsxs)("div",{className:o.bodyContent,children:[t.info?Object(A.jsx)(nt.a,{style:{color:"green"}}):Object(A.jsx)(at.a,{style:{color:"green"}}),Object(A.jsx)(M.a,{variant:"subtitle1",children:t.text}),t.tooltip?Object(A.jsx)(gt,{text:t.tooltip}):null]})},e)}))})]})]}),Object(A.jsx)("div",{className:o.cardAction,children:Object(A.jsx)(U.a,{href:null!==t.link?t.link:null,onClick:function(e){return r(!t.link)},className:o.buttonStyle,size:"large",children:t.action})}),Object(A.jsxs)(ht,{isOpen:c,handleClose:function(){r(!1)},children:[Object(A.jsx)(st.a,{}),t.modal?t.modal.text:t.modal]})]})},ft=i(136),vt=function(){var t=X();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:t.textContainer,children:[Object(A.jsxs)(M.a,{color:"secondary",className:t.headingStyle,variant:"h4",children:["Our Mission",Object(A.jsx)("div",{className:t.underlineStyle})]}),Object(A.jsxs)(ft.a,{container:!0,justify:"center",children:[Object(A.jsx)(ft.a,{item:!0,xs:0,sm:2,md:3}),Object(A.jsx)(ft.a,{item:!0,xs:12,sm:8,md:6,children:Object(A.jsx)(M.a,{className:t.paragraphStyle,style:{padding:"2rem 10px 0px 10px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"})}),Object(A.jsx)(ft.a,{item:!0,xs:0,sm:2,md:3})]})]}),Object(A.jsxs)("div",{className:t.textContainer,children:[Object(A.jsx)(M.a,{color:"secondary",className:t.headingStyle,variant:"h4",children:"Services"}),Object(A.jsxs)(M.a,{className:t.subheadingStyle,children:["What we provide for our commuinty",Object(A.jsx)("div",{className:t.underlineStyle})]})]}),Object(A.jsx)("div",{style:{marginTop:"50px",padding:"0px 10px 0px 10px"},children:Object(A.jsxs)(ft.a,{container:!0,justify:"center",spacing:2,children:[Object(A.jsx)(ft.a,{style:{display:"flex",justifyContent:"center"},item:!0,xs:12,sm:6,md:4}),Object(A.jsx)(ft.a,{style:{display:"flex",justifyContent:"center"},item:!0,xs:12,sm:6,md:4}),Object(A.jsx)(ft.a,{style:{display:"flex",justifyContent:"center"},item:!0,xs:12,sm:6,md:4})]})})]})},yt=function(){var t=q();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(K,{}),Object(A.jsx)("div",{className:t.bodyContainer,children:Object(A.jsx)(rt.a,{elevation:24,className:t.paperContainer,children:Object(A.jsx)(vt,{})})})]})},Ct=(i(86),i.p+"static/media/services_background.3a124fc8.svg"),St=i.p+"static/media/CCSLogo.0a783508.svg",Nt=Object(k.a)((function(t){return{titleContainer:{height:"fit-content"},title_Container:Object(_.a)({display:"flex",minHeight:"400px",height:"90vh",maxHeight:"1000px",justifyContent:"space-between"},t.breakpoints.down("xs"),{flexDirection:"column",justifyContent:"normal",maxHeight:"800px"}),textContainer:Object(_.a)({display:"flex",alignItems:"center",padding:"20px 0px 30px 20px",maxWidth:"fit-content",minWidth:"fit-content"},t.breakpoints.down("xs"),{height:"100%"}),textStyles:{paddingTop:"35px",fontSize:"40px"},backgroundContainer:Object(_.a)({display:"flex",justifyContent:"center",padding:"10px 5px 10px 100px"},t.breakpoints.down("xs"),{padding:"10px 2px 10px 5px",height:"100vw"}),backgroundImage:{width:"100%"},logoStyle:{height:"50px"},navBarContainer:{padding:"15px 0px 15px 20px",height:"50px"}}})),wt=Object(k.a)((function(){return{serviceTitle:{display:"flex",justifyContent:"center",marginBottom:"8rem",marginTop:"4rem"},gridContainer:{display:"flex",alignItems:"center",marginBottom:"100px"},gridRoot:{width:"100%",margin:"0px"},gridStyles:{display:"flex",justifyContent:"center",padding:"12px 12px 30px 12px"}}})),kt=function(){var t=Object(f.a)("(max-width:400px)"),e=Nt(t);return Object(A.jsxs)("div",{className:e.titleContainer,children:[Object(A.jsx)("div",{className:e.navBarContainer,children:Object(A.jsx)("img",{src:St,className:e.logoStyle})}),Object(A.jsxs)("div",{className:e.title_Container,children:[Object(A.jsx)("div",{className:e.textContainer,children:Object(A.jsxs)(M.a,{variant:"h4",color:"secondary",className:e.textStyles,children:["What we",Object(A.jsx)("br",{}),"provide for",Object(A.jsx)("br",{}),"our community."]})}),Object(A.jsx)("div",{className:e.backgroundContainer,children:Object(A.jsx)("img",{className:e.backgroundImage,src:Ct})})]})]})},Lt=(Object(k.a)((function(){return{underlineStyle:{width:"50%",position:"absolute",height:"100%",top:".5rem",borderBottom:"2px solid #9fbc95"},headingStyle:{fontWeight:"300"}}})),[{title:"COVID-19 Testing",subtitle:"PCR&Rapids",summary:"To continue with helping our community overcome the current pandemic, we are now offering SARS COV2 RtPCR and antigen testing.",features:[{text:"Rapid antigen testing results within 45 minutes",tooltip:"100% Specificity & 88.4% Sensitivity",info:null},{text:"PCR results within 48-72 hours",tooltip:null,info:null},{text:"Check if your travel destination accepts rapid antigen test results",tooltip:null,info:!0}],priceTag:"COVID",action:"Make a appointment",link:"http://expresstestnc.as.me",image:"VIRUS",color:"#41A814"},{title:"Vaccinations",subtitle:null,summary:"Vaccinations are key to debilitating the spread and effects of COVID-19 infections. Schedule your vaccination appointment today!",features:[{text:"Adults 18+ are eligible",tooltip:null,info:null},{text:"Two-dose Moderna Vaccine",tooltip:null,info:null},{text:"No cost to patients",tooltip:null,info:null}],priceTag:"VAX",action:"Make a appointment",link:"https://patientportal.advancedmd.com/147482/onlinescheduling/existing",image:"DNA",color:"#FFB655"},{title:"Corporate Services",subtitle:null,summary:"Have a large team that needs to get COVID tested/vaccinated? Contact us today to learn about concierge healthcare at your location!",features:[],priceTag:null,action:"Contact us",link:null,image:"BLOOD",color:"#FF423D",modal:{title:"Contact us",text:"admin@carolinaclinicals"}}]),Tt=function(){var t=wt();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(kt,{}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{className:t.gridContainer,children:Object(A.jsx)(ft.a,{container:!0,spacing:3,justify:"center",className:t.gridRoot,children:Lt.map((function(e,i){return Object(A.jsx)(a.a.Fragment,{children:Object(A.jsx)(ft.a,{className:t.gridStyles,item:!0,xs:12,sm:6,md:4,children:Object(A.jsx)(Ot,{title:e.title,subtitle:e.subtitle,summary:e.summary,features:e.features,action:e.action,link:e.link,priceTag:e.priceTag,image:e.image,color:e.color,modal:e.modal})})},e.title)}))})})})]})},It=function(){return Object(A.jsx)("div",{children:Object(A.jsx)(r.a,{basename:"/CCSWebsite",children:Object(A.jsxs)(l.a,{theme:j,children:[Object(A.jsx)(E,{}),Object(A.jsxs)(o.c,{children:[Object(A.jsx)(o.a,{exact:!0,path:"/services",children:Object(A.jsx)("div",{className:"app-root services",children:Object(A.jsx)("div",{className:"app-container",children:Object(A.jsx)(Tt,{})})})}),Object(A.jsx)(o.a,{exact:!0,path:"/",children:Object(A.jsx)("div",{className:"app-root home",children:Object(A.jsx)("div",{className:"app-container",children:Object(A.jsx)(yt,{})})})})]})]})})})};c.a.render(Object(A.jsx)(It,{}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b313fed5.chunk.js.map