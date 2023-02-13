"use strict";(self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[]).push([[68],{7525:function(n,e,r){r.d(e,{y:function(){return s}});var t,a,i,o=r(168),c=r(7691),s=(c.ZP.label(t||(t=(0,o.Z)(["\n  display: block;\n  margin: 20px;\n"]))),c.ZP.input(a||(a=(0,o.Z)(["\n  padding: 5px;\n  font-size: 18px;\n  background-color: aliceblue;\n"]))),c.ZP.p(i||(i=(0,o.Z)(["\n  color: red;\n"]))))},1729:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(1413),a=r(9489),i=r(184);var o=function(n){var e=n.name,r=n.label,o=n.type,c=n.autoFocus,s=void 0!==c&&c,u=n.register,l=n.autoComplete,p=n.pattern,m=n.title,d=n.startadornment;return(0,i.jsx)(a.Z,(0,t.Z)({type:o,margin:"normal",required:!0,fullWidth:!0,id:e,label:r,autoComplete:l,autoFocus:s,pattern:p,title:m,InputProps:{startAdornment:d}},u(e)))}},282:function(n,e,r){r.d(e,{h:function(){return i}});var t=r(5218),a=r(184),i=function(){return(0,a.jsx)(t.x7,{position:"top-center",reverseOrder:!1,gutter:20,containerClassName:"",containerStyle:{},toastOptions:{success:{duration:4e3,theme:{primary:"green",secondary:"black"}}}})}},6068:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t=r(8870),a=r(3044),i=r(890),o=r(533),c=r(403),s=r(4270),u=r(1087),l=r(5861),p=r(9439),m=r(4687),d=r.n(m),f=r(9195),v=r(4695),g=r(6265),x=r(5048),h=r(8410),b=r(5218),w=r(282),Z=r(3433),k=r(4942),S=r(3366),j=r(7462),y=r(2791),N=r(8182),W=r(1184),P=r(8519),M=r(4419),C=r(6934),z=r(1402),E=r(3967);var L=y.createContext(),T=r(5878),_=r(1217);function O(n){return(0,_.Z)("MuiGrid",n)}var A=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],F=(0,T.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,Z.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,Z.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,Z.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,Z.Z)(A.map((function(n){return"grid-xs-".concat(n)}))),(0,Z.Z)(A.map((function(n){return"grid-sm-".concat(n)}))),(0,Z.Z)(A.map((function(n){return"grid-md-".concat(n)}))),(0,Z.Z)(A.map((function(n){return"grid-lg-".concat(n)}))),(0,Z.Z)(A.map((function(n){return"grid-xl-".concat(n)}))))),G=r(184),R=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function I(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function B(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var a=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return a.slice(0,a.indexOf(t))}var D=(0,C.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,a=r.direction,i=r.item,o=r.spacing,c=r.wrap,s=r.zeroMinWidth,u=r.breakpoints,l=[];t&&(l=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&t.push(r["spacing-".concat(e,"-").concat(String(a))])})),t}(o,u,e));var p=[];return u.forEach((function(n){var t=r[n];t&&p.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,i&&e.item,s&&e.zeroMinWidth].concat((0,Z.Z)(l),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],p)}})((function(n){var e=n.ownerState;return(0,j.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,W.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,W.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(F.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.rowSpacing,i={};if(t&&0!==a){var o,c=(0,W.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=B({breakpoints:e.breakpoints.values,values:c})),i=(0,W.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,k.Z)({marginTop:"-".concat(I(a))},"& > .".concat(F.item),{paddingTop:I(a)}):null!=(t=o)&&t.includes(r)?{}:(0,k.Z)({marginTop:0},"& > .".concat(F.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.columnSpacing,i={};if(t&&0!==a){var o,c=(0,W.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=B({breakpoints:e.breakpoints.values,values:c})),i=(0,W.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,k.Z)({width:"calc(100% + ".concat(I(a),")"),marginLeft:"-".concat(I(a))},"& > .".concat(F.item),{paddingLeft:I(a)}):null!=(t=o)&&t.includes(r)?{}:(0,k.Z)({width:"100%",marginLeft:0},"& > .".concat(F.item),{paddingLeft:0})}))}return i}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,a){var i={};if(t[a]&&(e=t[a]),!e)return n;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,W.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var l=r.spacing(t.columnSpacing);if("0px"!==l){var p="calc(".concat(s," + ").concat(I(l),")");u={flexBasis:p,maxWidth:p}}}i=(0,j.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[a]?Object.assign(n,i):n[r.breakpoints.up(a)]=i,n}),{})}));var $=function(n){var e=n.classes,r=n.container,t=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];r&&(u=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var a="spacing-".concat(e,"-").concat(String(t));r.push(a)}})),r}(i,s));var l=[];s.forEach((function(e){var r=n[e];r&&l.push("grid-".concat(e,"-").concat(String(r)))}));var p={root:["root",r&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,Z.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,M.Z)(p,O,e)},q=y.forwardRef((function(n,e){var r=(0,z.Z)({props:n,name:"MuiGrid"}),t=(0,E.Z)().breakpoints,a=(0,P.Z)(r),i=a.className,o=a.columns,c=a.columnSpacing,s=a.component,u=void 0===s?"div":s,l=a.container,p=void 0!==l&&l,m=a.direction,d=void 0===m?"row":m,f=a.item,v=void 0!==f&&f,g=a.rowSpacing,x=a.spacing,h=void 0===x?0:x,b=a.wrap,w=void 0===b?"wrap":b,Z=a.zeroMinWidth,k=void 0!==Z&&Z,W=(0,S.Z)(a,R),M=g||h,C=c||h,T=y.useContext(L),_=p?o||12:T,O={},A=(0,j.Z)({},W);t.keys.forEach((function(n){null!=W[n]&&(O[n]=W[n],delete A[n])}));var F=(0,j.Z)({},a,{columns:_,container:p,direction:d,item:v,rowSpacing:M,columnSpacing:C,wrap:w,zeroMinWidth:k,spacing:h},O,{breakpoints:t.keys}),I=$(F);return(0,G.jsx)(L.Provider,{value:_,children:(0,G.jsx)(D,(0,j.Z)({ownerState:F,className:(0,N.Z)(I.root,i),as:u,ref:e},A))})})),U=q,X=r(6151),H=r(1729),J=r(7525),K=r(1154),Q=function(){var n,e,r,a,i=(0,g.DW)(),o=(0,p.Z)(i,1)[0],c=(0,f.cI)({resolver:(0,v.X)(K.x)}),s=c.register,u=c.handleSubmit,m=c.reset,Z=c.formState.errors,k=(0,x.I0)(),S=function(){var n=(0,l.Z)(d().mark((function n(e){var r,t,a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={name:"".concat(e.firstName," ").concat(e.lastName),email:e.email,password:e.password},n.prev=1,n.next=4,o(t);case 4:a=n.sent,n.t0=null===(r=a.error)||void 0===r?void 0:r.status,n.next=400===n.t0?8:500===n.t0?10:12;break;case 8:return b.ZP.error("Account with this email address already exists"),n.abrupt("break",13);case 10:return b.ZP.error("Server Error"),n.abrupt("break",13);case 12:k((0,h.Dj)(a.data));case 13:n.next=18;break;case 15:n.prev=15,n.t1=n.catch(1),console.warn("Error",n.t1);case 18:m();case 19:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(e){return n.apply(this,arguments)}}();return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(t.Z,{component:"form",sx:{mt:3},onSubmit:u((function(n){S(n)})),children:[(0,G.jsxs)(U,{container:!0,spacing:2,justifyContent:"space-between",children:[(0,G.jsxs)(U,{item:!0,sx:{width:"50%"},children:[(0,G.jsx)(H.Z,{name:"firstName",label:"First Name",register:s,autoComplete:"given-name",autoFocus:!0}),(0,G.jsxs)(J.y,{children:[" ",null===(n=Z.firstName)||void 0===n?void 0:n.message]})]}),(0,G.jsxs)(U,{item:!0,sx:{width:"50%"},children:[(0,G.jsx)(H.Z,{name:"lastName",label:"Last Name",register:s,autoComplete:"family-name"}),(0,G.jsxs)(J.y,{children:[" ",null===(e=Z.lastName)||void 0===e?void 0:e.message]})]})]}),(0,G.jsx)(H.Z,{name:"email",label:"Email",register:s,autoComplete:"email"}),(0,G.jsxs)(J.y,{children:[" ",null===(r=Z.email)||void 0===r?void 0:r.message]}),(0,G.jsx)(H.Z,{name:"password",label:"Password",type:"password",register:s,autoComplete:"current-password"}),(0,G.jsxs)(J.y,{children:[" ",null===(a=Z.password)||void 0===a?void 0:a.message]}),(0,G.jsx)(X.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]}),(0,G.jsx)(w.h,{})]})};function V(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(s.q,{children:(0,G.jsx)("title",{children:"Register"})}),(0,G.jsxs)(t.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,G.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,G.jsx)(c.Z,{})}),(0,G.jsx)(i.Z,{component:"h1",variant:"h5",children:"Sign Up"}),(0,G.jsx)(Q,{}),(0,G.jsx)(o.Z,{component:u.OL,to:"/login",children:"Already have an account? Sign in"})]})]})}},1154:function(n,e,r){r.d(e,{i:function(){return i},x:function(){return a}});var t=r(2797),a=t.Ry().shape({firstName:t.Z_().min(3,"Name is Too Short").max(25,"Name is to Long"),lastName:t.Z_().min(3,"Name is Too Short").max(25,"Name is to Long"),email:t.Z_().email("Not valid email"),password:t.Z_().min(8,"Password is to short").max(21,"Password is to long")}),i=t.Ry().shape({name:t.Z_().min(2,"Name is Too Short").max(25,"Name is to Long"),number:t.Rx().typeError("That doesn't look like a phone number").test("Is positive?","A phone number must be a positive number",(function(n){return n>0})).integer("A phone number can't include a decimal point").min(999999,"A phone number is to short").max(999999999999999,"A phone number is to long")})}}]);
//# sourceMappingURL=68.1cf3259d.chunk.js.map