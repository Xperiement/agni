(this.webpackJsonpagni=this.webpackJsonpagni||[]).push([[0],{58:function(e,t,s){},68:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(30),c=s.n(i),r=s(17),o=s(8),l=Object(o.a)(),d="https://raw.githubusercontent.com/",u="Xperiement/agni_data",j="/main",m={base_root:"/agni",base_data:d+u+j+"/base.json",device_data:d+u+j+"/data.json"},b=s(3),h=(s(58),s(5)),v=s(16),O=s.p+"static/media/agni.b11e4e2f.webp",f=s(1);function p(e){var t=e.devices,s=e.setDevices,a=e.setDevice,n=e.history,i=e.setTabs,c=e.setTab;return Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsxs)("div",{className:"head",children:[Object(f.jsx)(v.a,{smooth:!0,to:"/#home",children:Object(f.jsx)("img",{src:O,alt:""})}),Object(f.jsx)("div",{children:"Downloads"})]}),Object(f.jsx)("div",{className:"subHead",children:"Devices"}),Object(f.jsx)("div",{className:"list",children:t.map((function(e,r){return Object(f.jsx)("div",{onClick:function(){s((function(){return t.map((function(t){return t.enabled=e.name===t.name,t}))})),a(e);var r=E(e,void 0),o=r[0];i(r),c(o),n.replace("/downloads/".concat(e.code_name,"/").concat((null===o||void 0===o?void 0:o.name)||""))},className:"card ".concat(e.enabled?"enabled":""),children:e.name},r)}))})]})}var x=s.p+"static/media/device.72432646.webp";function g(e){var t=e.model,s=e.code_name;return Object(f.jsxs)("div",{className:"overview",children:[Object(f.jsx)("img",{src:x,alt:""}),Object(f.jsx)("div",{className:"device",children:Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("img",{className:"logo",src:O,alt:""}),Object(f.jsx)("div",{className:"title",children:t}),Object(f.jsx)("div",{className:"codeName",children:s})]})})]})}function N(e){var t=e.device,s=e.tabs,a=e.setTabs,n=e.setTab,i=e.history;return Object(f.jsx)("div",{className:"tabs",children:s.map((function(e,c){return Object(f.jsx)("div",{className:!0===e.enabled?"enabled":"",onClick:function(){var c=s.map((function(t){return t.enabled=t.name===e.name,t}));a(c),n(e),i.replace("/downloads/".concat(t.code_name,"/").concat((null===e||void 0===e?void 0:e.name)||""))},children:e.name},c)}))})}s(68);function w(e){var t=e.data;return Object(f.jsxs)("div",{id:t.title,className:"card",children:[Object(f.jsxs)("div",{className:"tCont",children:[Object(f.jsxs)("div",{className:"lCont",children:[Object(f.jsx)("div",{className:"title",children:t.title}),t.md5?Object(f.jsxs)("div",{className:"hash",children:[Object(f.jsx)("i",{className:"ri-shield-check-line"}),Object(f.jsx)("div",{children:t.md5})]}):Object(f.jsxs)("div",{className:"hash disabled",children:[Object(f.jsx)("i",{className:"ri-shield-check-line"}),Object(f.jsx)("div",{children:"Not provided"})]})]}),Object(f.jsx)("div",{className:"rCont",children:Object(f.jsxs)("div",{className:"downloadBtn",children:[Object(f.jsx)("i",{className:"ri-download-cloud-2-line"}),Object(f.jsxs)("div",{className:"iCont",children:[Object(f.jsx)("div",{className:"title",children:"Download"}),Object(f.jsx)("div",{className:"size",children:t.size})]})]})})]}),Object(f.jsx)("div",{className:"changelogs",children:t.changelogs.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"subHead",children:"Changelogs"}),Object(f.jsx)("ul",{children:t.changelogs.map((function(e,t){return Object(f.jsx)("li",{children:e},t)}))})]})})]})}var k=s(31),y=s.n(k),D=s(37);function S(e){var t=e.showDevices,s=e.setShowDevices,a=e.devices,n=e.setDevices,i=e.setDevice,c=e.setTabs,r=e.setTab,o=Object(h.f)(),l=Object(D.useTransition)(t,{from:{transform:"translateY(100%)"},enter:{transform:"translateY(0%)"},leave:{transform:"translateY(100%)"}});return Object(f.jsx)(f.Fragment,{children:l((function(e,t){return t?Object(f.jsxs)(D.animated.div,{className:"mDevices",style:e,children:[Object(f.jsx)("div",{className:"head",children:"Devices"}),Object(f.jsx)("div",{className:"list",children:a.map((function(e,t){return Object(f.jsxs)("div",{className:"item ".concat(e.enabled?"enabled":""),onClick:function(){n((function(){return a.map((function(t){return t.enabled=e.name===t.name,t}))})),i(e);var t=E(e,void 0),l=t[0];c(t),r(l),o.replace("/downloads/".concat(e.code_name,"/").concat((null===l||void 0===l?void 0:l.name)||"")),s(!1)},children:[Object(f.jsx)("i",{className:"ri-smartphone-line"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"model",children:e.name}),Object(f.jsx)("div",{className:"code",children:e.code_name})]})]},t)}))})]}):""}))})}var _={name:"No Device Found",code_name:"none",oem:"none",enabled:!0,resources:[{type:"kernel",title:"Not Available",size:"N/A",url:"N/A",md5:"N/A",changelogs:["Not Available"]}]},E=function(e,t){var s=[];if(e.resources.forEach((function(e){s.find((function(t){return t.name===e.type}))||s.push({name:e.type,enabled:!1})})),t){var a=s.find((function(e){return e.name===t}));a&&(a.enabled=!0)}else s[0].enabled=!0;return s};function q(e){var t=e.showDevices,s=e.setShowDevices,n=Object(h.f)(),i=Object(h.h)(),c=i.name,r=i.type,o=Object(a.useState)((function(){return JSON.parse(JSON.stringify([_]))})),l=Object(b.a)(o,2),d=l[0],u=l[1],j=Object(a.useState)((function(){return _})),v=Object(b.a)(j,2),O=v[0],x=v[1],k=Object(a.useState)((function(){return E(O,r)})),D=Object(b.a)(k,2),q=D[0],A=D[1],I=Object(a.useState)((function(){return function(e){return e.find((function(e){return e.enabled}))}(q)})),T=Object(b.a)(I,2),C=T[0],M=T[1];return Object(a.useEffect)((function(){y.a.get(m.device_data).then((function(e){if(200===e.status){var t=c?c.trim().toLowerCase():void 0,s=r?r.trim().toLowerCase():void 0,a=e.data;if(t){var i=a.map((function(e){var s=e.name.toLowerCase(),a=e.code_name.toLowerCase();return e.enabled=s===t||a===t,e})),o=i.find((function(e){return e.enabled}));if(!o)return void n.push("/404");u(i),x(o);var l=E(o,s),d=l.find((function(e){return e.enabled}));return s&&!d?void n.push("/404"):(A(l),void M(d))}a[0].enabled=!0,u(a),x(a[0]);var j=E(a[0],a[0].resources[0].type);A(j),M(j[0])}}))}),[]),Object(f.jsxs)("div",{className:"downloads",children:[Object(f.jsx)(p,{devices:d,setDevices:u,setDevice:x,setTab:M,setTabs:A,history:n}),Object(f.jsx)(g,{model:O.name,code_name:O.code_name}),Object(f.jsxs)("div",{className:"topHeader",children:[Object(f.jsxs)("div",{className:"title",children:[O.name," ",Object(f.jsx)("span",{children:O.code_name})]}),Object(f.jsx)(N,{device:O,tabs:q,setTabs:A,setTab:M,history:n})]}),O.resources.map((function(e,t){return e.type===(null===C||void 0===C?void 0:C.name)?Object(f.jsx)(w,{data:e},t):null})),Object(f.jsx)(S,{showDevices:t,setShowDevices:s,devices:d,setDevices:u,setDevice:x,setTab:M,setTabs:A})]})}s(88),s(89),s(90);function A(e){var t=e.toggle,s=e.enabled;return Object(f.jsxs)("div",{onClick:function(){return t()},className:"modeBtn ".concat(s?"enabled":""),children:[Object(f.jsx)("i",{className:"ri-sun-fill sun ".concat(s?"enabled":"")}),Object(f.jsx)("i",{className:"ri-moon-fill moon ".concat(s?"enabled":"")})]})}function I(e){var t=e.dark,s=e.dark_toggle;return Object(f.jsxs)("nav",{className:"default",children:[Object(f.jsx)(v.a,{smooth:!0,to:"/#home",children:Object(f.jsx)("img",{className:"navHome",src:O,alt:""})}),Object(f.jsx)(v.a,{smooth:!0,to:"/downloads",children:"Downloads"}),Object(f.jsx)(v.a,{smooth:!0,to:"/installation#iTop",children:"Installation"}),Object(f.jsx)(v.a,{smooth:!0,to:"/#footer",className:"support",children:"Support"}),Object(f.jsx)(v.a,{smooth:!0,to:{pathname:"/",hash:"#about"},className:"about",children:"About"}),Object(f.jsx)(A,{enabled:t,toggle:s})]})}function T(e){var t=e.ico,s=e.info1,a=e.info2;return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"ico",children:Object(f.jsx)("i",{className:t})}),Object(f.jsxs)("div",{className:"info",children:[s," ",Object(f.jsx)("span",{children:a})]})]})}function C(){return Object(f.jsxs)("section",{className:"features",children:[Object(f.jsx)("div",{className:"head",children:"Features"}),Object(f.jsxs)("div",{className:"list",children:[Object(f.jsx)(T,{ico:"ri-battery-2-charge-fill green-txt",info1:"Long lasting",info2:"battery"}),Object(f.jsx)(T,{ico:"ri-temp-cold-line indigo-txt",info1:"Keeps device",info2:"cool"}),Object(f.jsx)(T,{ico:"ri-flashlight-line red-txt",info1:"Snappy",info2:"experience"}),Object(f.jsx)(T,{ico:"ri-refresh-fill deep-red-txt",info1:"Always",info2:"updated"}),Object(f.jsx)(T,{ico:"ri-headphone-line blue-txt",info1:"Audiophile",info2:"friendly"}),Object(f.jsx)(T,{ico:"ri-fire-fill red-txt",info1:"Good gaming",info2:"performance"})]})]})}function M(e){var t=e.data;return Object(f.jsxs)("section",{className:"improvements",children:[Object(f.jsx)("div",{className:"head",children:"Improvements"}),Object(f.jsx)("div",{className:"list",children:t.map((function(e,t){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"head",children:e.title}),Object(f.jsx)("ul",{children:e.data.map((function(e,t){return Object(f.jsx)("li",{children:e},t)}))})]},t)}))})]})}var L=[{type:"facebook",ico:"ri-facebook-circle-fill"},{type:"github",ico:"ri-github-fill"},{type:"instagram",ico:"ri-instagram-fill"},{type:"npm",ico:"ri-npmjs-fill"},{type:"paypal",ico:"ri-paypal-fill"},{type:"stackoverflow",ico:"ri-stack-overflow-fill"},{type:"telegram",ico:"ri-telegram-fill"},{type:"twitch",ico:"ri-twitch-fill"},{type:"twitter",ico:"ri-twitter-fill"},{type:"youtube",ico:"ri-youtube-fill"}],H=function(e){var t=L.find((function(t){return t.type===e.toLowerCase().trim()}));return t?t.ico:"ri-link"};function W(e){var t=e.data;return Object(f.jsxs)("section",{id:"about",className:"team",children:[Object(f.jsx)("div",{className:"head",children:"Our Team"}),Object(f.jsx)("div",{className:"list",children:t.map((function(e,t){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("img",{src:e.avatar,alt:"",className:"avatar"}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"name",children:e.name}),Object(f.jsx)("div",{className:"role",children:e.role})]}),Object(f.jsx)("div",{className:"links",children:e.links.map((function(e,t){return Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("i",{className:H(e.type)})},t)}))})]},t)}))})]})}var P=s.p+"static/media/epicX.ce95aad2.webp";function G(e){var t=e.groups,s=void 0===t?[]:t,a=e.donate,n=void 0===a?[]:a,i=e.start,c=e.end;return Object(f.jsxs)("footer",{id:"footer",children:[Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("img",{src:O,alt:""}),Object(f.jsxs)("div",{className:"aInfo",children:[Object(f.jsx)("div",{children:"Agni Kernel"}),Object(f.jsx)("div",{children:"Copyright ".concat(i," - ").concat(c," All Rights Reserved")})]})]}),Object(f.jsxs)("div",{className:"refs",children:[s.length>1&&Object(f.jsxs)("div",{className:"cInfo",children:[Object(f.jsx)("div",{className:"head",children:"Support Groups"}),s.map((function(e,t){return Object(f.jsx)("a",{href:e.url,className:"items",target:"_blank",rel:"noreferrer",children:e.name},t)}))]}),n.length>1&&Object(f.jsxs)("div",{className:"cInfo",children:[Object(f.jsx)("div",{className:"head",children:"Donate"}),n.map((function(e,t){return Object(f.jsx)("a",{href:e.url,className:"items",target:"_blank",rel:"noreferrer",children:e.name},t)}))]})]})]}),Object(f.jsx)("div",{className:"authorCont",children:Object(f.jsx)("img",{onClick:function(){var e=document.createElement("a");e.href="https://epicX67.github.io",e.setAttribute("target","blank"),e.click()},className:"author",src:P,alt:""})})]})}function B(e){var t=e.dark,s=e.dark_toggle,a=e.state,n=Object(h.f)();return Object(f.jsxs)("div",{children:[Object(f.jsx)(I,{dark:t,dark_toggle:s}),Object(f.jsxs)("div",{id:"home",className:"hero",children:[Object(f.jsxs)("div",{className:"twoSide",children:[Object(f.jsx)("div",{className:"logoHolder",children:Object(f.jsx)("img",{alt:"none",className:"agni",src:O})}),Object(f.jsxs)("div",{className:"infoHolder",children:[Object(f.jsxs)("p",{className:"heroHead",children:["A",Object(f.jsx)("span",{children:"G"}),"Ni Kernel"]}),Object(f.jsxs)("p",{className:"heroSubHead",children:["Blazing ",Object(f.jsx)("span",{children:"Fast"})," & ",Object(f.jsx)("span",{children:"Effective"})]}),Object(f.jsxs)("button",{className:"heroButton",onClick:function(){n.push("/downloads")},children:[Object(f.jsx)("i",{className:"ri-download-cloud-2-line"}),"Download ",Object(f.jsx)("span",{children:"NOW"})]})]})]}),Object(f.jsx)("img",{alt:"none",className:"agniVibe ".concat(t?"dark":""),src:O})]}),Object(f.jsx)(C,{}),Object(f.jsx)(M,{data:a.improvements}),Object(f.jsx)(W,{data:a.credits}),Object(f.jsx)(G,{start:a.started,end:a.ends,donate:a.donate,groups:a.support_groups})]})}var F=s(53);s(91);function V(e){var t=e.dark,s=e.dark_toggle,a=e.state;return Object(f.jsxs)("div",{className:"installation",id:"iTop",children:[Object(f.jsx)(I,{dark:t,dark_toggle:s}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("div",{className:"head",children:"Installation"}),Object(f.jsxs)("div",{className:"subHead",children:["Step ",Object(f.jsx)("span",{children:"1"})]}),Object(f.jsx)("div",{className:"process",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis turpis at massa consequat, a congue augue imperdiet. Etiam aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec consectetur est sit amet nisl placerat maximus. Etiam ut risus ultrices, vehicula tortor at, congue magna. Donec eget ornare purus. In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales nec ac nunc. Proin porta eget urna sed egestas."}),Object(f.jsxs)("div",{className:"subHead right",children:["Step ",Object(f.jsx)("span",{children:"2"})]}),Object(f.jsx)("div",{className:"process",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis turpis at massa consequat, a congue augue imperdiet. Etiam aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec consectetur est sit amet nisl placerat maximus. Etiam ut risus ultrices, vehicula tortor at, congue magna. Donec eget ornare purus. In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales nec ac nunc. Proin porta eget urna sed egestas."}),Object(f.jsxs)("div",{className:"subHead",children:["Step ",Object(f.jsx)("span",{children:"3"})]}),Object(f.jsx)("div",{className:"process",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis turpis at massa consequat, a congue augue imperdiet. Etiam aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec consectetur est sit amet nisl placerat maximus. Etiam ut risus ultrices, vehicula tortor at, congue magna. Donec eget ornare purus. In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales nec ac nunc. Proin porta eget urna sed egestas."}),Object(f.jsxs)("div",{className:"subHead right",children:["Step ",Object(f.jsx)("span",{children:"4"})]}),Object(f.jsx)("div",{className:"process",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis turpis at massa consequat, a congue augue imperdiet. Etiam aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec consectetur est sit amet nisl placerat maximus. Etiam ut risus ultrices, vehicula tortor at, congue magna. Donec eget ornare purus. In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales nec ac nunc. Proin porta eget urna sed egestas."}),Object(f.jsxs)("div",{className:"subHead",children:["Step ",Object(f.jsx)("span",{children:"5"})]}),Object(f.jsx)("div",{className:"process",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis turpis at massa consequat, a congue augue imperdiet. Etiam aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec consectetur est sit amet nisl placerat maximus. Etiam ut risus ultrices, vehicula tortor at, congue magna. Donec eget ornare purus. In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales nec ac nunc. Proin porta eget urna sed egestas."}),Object(f.jsxs)("div",{className:"noteWrapper",children:[Object(f.jsxs)("div",{className:"noteContainer",children:[Object(f.jsx)("i",{className:"ri-information-line"}),Object(f.jsx)("div",{className:"note",children:"You can skip any line not applicable to you, example u can skip gapps if ur rom already has gapps"})]}),Object(f.jsxs)("div",{className:"noteContainer error",children:[Object(f.jsx)("i",{className:"ri-alarm-warning-fill"}),Object(f.jsxs)("div",{className:"note",children:["DO NOT INSTALL MAGICAL MAGISK MODULES LIKE"," ",Object(f.jsx)("span",{children:"FDE.AI, MAGNETAR etc."})," & those claiming to"," ",Object(f.jsx)("span",{children:'"BOOST RAM MANAGEMENT"'})," Take this as a warning before I start blocking their running in harsh way."]})]})]})]}),Object(f.jsx)(G,{start:a.started,end:a.ends,donate:a.donate,groups:a.support_groups})]})}function K(){return Object(f.jsxs)("div",{className:"notfound",children:[Object(f.jsx)("div",{className:"head",children:"404"}),Object(f.jsx)("div",{className:"subHead",children:"The thing you are looking for is not found."}),Object(f.jsxs)("div",{className:"cont",children:[Object(f.jsx)(v.a,{smooth:!0,to:"/#home",children:"Go Home"}),Object(f.jsx)(v.a,{smooth:!0,to:"/downloads",children:"Check Downloads"})]})]})}s(92);function R(e){var t=e.icon,s=e.enabled,a=e.action;return Object(f.jsxs)("div",{onClick:s&&"device"!==t?null:a,className:s?"enabled":"",children:[Object(f.jsx)("i",{className:"ri-".concat(t,"-line")}),Object(f.jsx)("i",{className:"ri-".concat(t,"-fill")})]})}function U(e){var t=e.enabled,s=e.action;return Object(f.jsxs)("div",{onClick:s,className:t?"enabled":"",style:{transform:"unset"},children:[Object(f.jsx)("i",{className:"ri-moon-line"}),Object(f.jsx)("i",{className:"ri-moon-fill",style:{color:"var(--normal)"}})]})}function z(e){var t=e.dark,s=e.dark_toggle,n=e.hide,i=e.showDevices,c=e.setShowDevices,r=Object(h.f)(),o=Object(h.g)(),l=Object(a.useState)(""),d=Object(b.a)(l,2),u=d[0],j=d[1];Object(a.useEffect)((function(){j(o.pathname)}),[o]);var m=function(e){r.replace(e)};return Object(f.jsxs)("nav",{className:"mobile ".concat(n?"closed":""),children:[Object(f.jsx)(R,{action:function(){return m("/#home")},icon:"home",enabled:"/"===u}),Object(f.jsx)(R,{action:function(){return m("/downloads")},icon:"download-cloud-2",enabled:u.startsWith("/downloads")}),Object(f.jsx)(R,{action:function(){return m("/installation#iTop")},icon:"article",enabled:u.startsWith("/installation")}),u.startsWith("/downloads")&&Object(f.jsx)(R,{action:function(){return c(!i)},icon:"device",enabled:i}),!u.startsWith("/downloads")&&Object(f.jsx)(U,{enabled:t,action:s})]})}var J=function(){var e=Object(F.a)().scrollDirection,t=Object(a.useState)(!1),s=Object(b.a)(t,2),n=s[0],i=s[1],c=Object(a.useState)(!1),r=Object(b.a)(c,2),o=r[0],l=r[1],d=Object(a.useState)(!1),u=Object(b.a)(d,2),j=u[0],v=u[1],O=Object(a.useState)((function(){return{started:1970,ends:2070,improvements:[],credits:[],support_groups:[],donate:[]}})),p=Object(b.a)(O,2),x=p[0],g=p[1];Object(a.useEffect)((function(){var e=localStorage.getItem("dark");e&&"false"!==e?(v(!0),document.documentElement.setAttribute("data-theme","dark")):(v(!1),document.documentElement.setAttribute("data-theme",""))}),[]),Object(a.useEffect)((function(){y.a.get(m.base_data).then((function(e){200===e.status&&g(e.data)}))}),[]),Object(a.useEffect)((function(){"DOWN"===e?i(!0):"UP"===e&&i(!1)}),[e]);var N=function(){j?(v(!1),localStorage.setItem("dark","false"),document.documentElement.setAttribute("data-theme","")):(v(!0),localStorage.setItem("dark","true"),document.documentElement.setAttribute("data-theme","dark"))};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{exact:!0,path:"/",children:Object(f.jsx)(B,{dark:j,dark_toggle:N,state:x})}),Object(f.jsx)(h.a,{exact:!0,path:"/installation",children:Object(f.jsx)(V,{dark:j,dark_toggle:N,state:x})}),Object(f.jsx)(h.a,{exact:!0,path:"/downloads/:name?/:type?",children:Object(f.jsx)(q,{dark:j,dark_toggle:N,showDevices:o,setShowDevices:l})}),Object(f.jsx)(h.a,{exact:!0,path:"/404",children:Object(f.jsx)(K,{})})]}),Object(f.jsx)(z,{dark:j,dark_toggle:N,hide:n,setShowDevices:l,showDevices:o})]})},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s(93),s(94);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(r.a,{basename:m.base_root||"/",history:l,children:Object(f.jsx)(J,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/agni",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/agni","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var a=s.headers.get("content-type");404===s.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}()}},[[95,1,2]]]);
//# sourceMappingURL=main.3fa5240f.chunk.js.map