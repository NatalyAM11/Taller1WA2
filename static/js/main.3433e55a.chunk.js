(this.webpackJsonptaller1=this.webpackJsonptaller1||[]).push([[0],Array(28).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(21),s=a.n(i),r=(a(28),a(7)),l=a(4),o=a(2),j=(a(29),a(30),a(11)),d=a(0),m=function(e){var t=e.text,a=(e.active,e.url);return Object(d.jsx)(j.c,{className:"Link",activeClassName:"Link--active",to:a,children:t})},b=(a(37),function(e){var t=e.text;return Object(d.jsxs)("div",{className:"MainTitle",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/titleFlechaD.png"),className:"flechasTitle"}),Object(d.jsx)("h3",{className:"titleMain",children:t}),Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/titleFlechaI.png"),className:"flechasTitle"})]})}),u=(a(38),function(e){var t=e.text,a=e.img;return Object(d.jsxs)("div",{className:"ElementTitle",children:[Object(d.jsx)("img",{className:"imgElementTitle",src:"".concat("/Taller1WA2","/img/").concat(a)}),Object(d.jsx)("h2",{className:"titleElement titlesSections",children:t})]})}),h=(a(39),a(3)),O=function(e){var t=e.id,a=e.name,n=(e.elementC,e.img),c=e.onDelete,i=e.onEdit,s=Object(h.g)();return Object(d.jsxs)("div",{className:"character",children:[Object(d.jsxs)("div",{className:"onlyCharacter",onClick:function(){s.push("/characterDetails/".concat(t))},children:[Object(d.jsx)("h2",{className:"characterName titlesAllComp",children:a}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"characterImg",src:"".concat("/Taller1WA2","/img/").concat(n)})})]}),Object(d.jsxs)("div",{className:"buttonsDiv",children:[i&&Object(d.jsx)("button",{className:"componentsButton",onClick:function(){s.push("/characterForm"),i&&i(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})}),c&&Object(d.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){c&&c(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/deleteIcon.png")})})]})]})},x=(a(40),function(e){var t=e.editId,a=e.characterElem,n=e.type,i=e.onCreate,s=e.onEdit,r=Object(h.g)(),l=a.find((function(e){return e.id===t})),j=c.a.useState(!1),m=Object(o.a)(j,2),b=m[0],u=m[1],O=c.a.useState((null===l||void 0===l?void 0:l.name)||" "),x=Object(o.a)(O,2),g=x[0],p=x[1],f=c.a.useState((null===l||void 0===l?void 0:l.elementC)||" "),v=Object(o.a)(f,2),N=v[0],C=v[1],A=c.a.useState((null===l||void 0===l?void 0:l.img)||" "),D=Object(o.a)(A,2),I=D[0],y=D[1],E=c.a.useState((null===l||void 0===l?void 0:l.history)||" "),S=Object(o.a)(E,2),T=S[0],w=S[1],F=c.a.useState((null===l||void 0===l?void 0:l.role)||" "),R=Object(o.a)(F,2),W=R[0],M=R[1],L=c.a.useState((null===l||void 0===l?void 0:l.city)||" "),k=Object(o.a)(L,2),B=k[0],P=k[1],_=c.a.useState((null===l||void 0===l?void 0:l.constelacion)||" "),U=Object(o.a)(_,2),z=U[0],G=U[1],Y=c.a.useState((null===l||void 0===l?void 0:l.trailer)||" "),q=Object(o.a)(Y,2),J=q[0],H=q[1],Z=g.length>1,V=I.length>5,K=N.length>1,Q=T.length>10,X=W.length>2,$=B.length>1,ee=z.length>1,te=J.length>1;return Object(d.jsxs)("form",{className:"characterForm",onSubmit:function(e){e.preventDefault(),u(!0),"create"===n&&Z&&V&&K&&Q&&X&&$&&ee&&te?(console.log("valid"),i({name:g,elementC:N,img:I,history:T,role:W,constelacion:z,city:B,trailer:J}),p(" "),y(" "),u(!1),r.push("/")):"edit"===n&&Z?null!==t&&(s(t,{name:g,elementC:N,img:I,history:T,role:W,constelacion:z,city:B,trailer:J}),r.push("/characterDetails/".concat(null===l||void 0===l?void 0:l.id))):console.log("invalid")},children:[Object(d.jsx)("p",{className:"formIntro",children:"create"===n?"Agrega a los personajes que te acompa\xf1aran en tus siguientes aventuras":"Edita los datos del personaje"}),Object(d.jsxs)("label",{children:["Nombre",Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){p(e.target.value)},value:g}),b&&!Z&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del personaje"})]}),Object(d.jsxs)("label",{children:["Elemento",Object(d.jsxs)("select",{name:"elementC",value:N,onChange:function(e){console.log(e.target.value),C(e.target.value)},children:[Object(d.jsx)("option",{value:" ",children:"ELIGE UN ELEMENTO"}),Object(d.jsx)("option",{value:"pyro",children:"PYRO"}),Object(d.jsx)("option",{value:"electro",children:"ELECTRO"}),Object(d.jsx)("option",{value:"cryo",children:"CRYO"}),Object(d.jsx)("option",{value:"anemo",children:"ANEMO"})]}),b&&!K&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escoger el elemento del personaje"})]}),Object(d.jsxs)("label",{children:["Imagen",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){y(e.target.value)},value:I}),b&&!V&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(d.jsxs)("label",{children:["Perfil",Object(d.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){w(e.target.value)},value:T}),b&&!Q&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en el perfil del personaje"})]}),Object(d.jsxs)("label",{children:["Rol",Object(d.jsx)("input",{type:"text",name:"rol",onChange:function(e){M(e.target.value)},value:W}),b&&!X&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el rol del personaje"})]}),Object(d.jsxs)("label",{children:["Ciudad natal",Object(d.jsxs)("select",{name:"arma",value:B,onChange:function(e){P(e.target.value)},children:[Object(d.jsx)("option",{value:" ",children:"ELIGE LA CIUDAD"}),Object(d.jsx)("option",{value:"Mondstadt",children:"MONDSTADT"}),Object(d.jsx)("option",{value:"Liyue",children:"LIYUE"}),Object(d.jsx)("option",{value:"Inazuma",children:"INAZUMA"})]}),b&&!$&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escoger la ciudad natal del personaje"})]}),Object(d.jsxs)("label",{children:["Constelaci\xf3n",Object(d.jsx)("input",{type:"text",name:"constalletion",onChange:function(e){G(e.target.value)},value:z}),b&&!ee&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre de la constelaci\xf3n del personaje"})]}),Object(d.jsxs)("label",{children:["URL Trailer",Object(d.jsx)("input",{type:"text",name:"urlTrailer",onChange:function(e){H(e.target.value)},value:J}),b&&!te&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir la URL del trailer del personaje"})]}),Object(d.jsx)("button",{className:"button",children:"create"===n?"CREAR":"GUARDAR CAMBIOS"})]})}),g=(a(41),function(e){var t=e.id,a=e.name,n=e.img,c=e.idCharacter,i=Object(h.g)();return Object(d.jsxs)("div",{className:"weapon",children:[Object(d.jsxs)("div",{className:"weaponImgDiv",children:[Object(d.jsx)("h2",{className:"weaponName titlesAllComp",children:a}),Object(d.jsx)("img",{className:"weaponImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){i.push("/weaponDetails/".concat(t))}})]}),Object(d.jsx)("div",{className:"buttonsDiv",children:Object(d.jsx)("button",{className:"componentsButton",onClick:function(){i.push("/characterDetails/".concat(c))},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})})})]})}),p=(a(42),function(e){var t=e.id,a=e.name,n=e.mainImg,c=e.idCharacter,i=Object(h.g)();return Object(d.jsxs)("div",{className:"artifacts",children:[Object(d.jsx)("h2",{className:"artifactName titlesAllComp",children:a}),Object(d.jsx)("img",{className:"artifactImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){i.push("/artifactsDetails/".concat(t))}}),Object(d.jsx)("div",{className:"buttonsDiv",children:Object(d.jsx)("button",{className:"componentsButton",onClick:function(){i.push("/characterDetails/".concat(c))},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})})})]})}),f=(a(43),function(){return Object(d.jsxs)("div",{className:"Error404",children:[Object(d.jsx)("h1",{children:"ERROR 404"}),Object(d.jsx)("h2",{children:"No se encontro la p\xe1gina"})]})}),v=(a(44),a(45),function(e){var t=e.text;return Object(d.jsxs)("div",{className:"TitleSectionC",children:[Object(d.jsx)("img",{className:"imgTitleSectionC",src:"".concat("/Taller1WA2","/img/iconTitleSection.png")}),Object(d.jsx)("h2",{className:"textTitleSection",children:t})]})}),N=function(e){var t=e.type,a=e.editId,n=e.artifactElem,i=e.idOwner,s=e.onCreate,r=e.onEdit,l=n.find((function(e){return e.id===a})),j=c.a.useState(!1),m=Object(o.a)(j,2),b=m[0],u=m[1],h=c.a.useState((null===l||void 0===l?void 0:l.name)||" "),O=Object(o.a)(h,2),x=O[0],g=O[1],p=c.a.useState((null===l||void 0===l?void 0:l.mainImg)||" "),f=Object(o.a)(p,2),v=f[0],N=f[1],C=c.a.useState((null===l||void 0===l?void 0:l.arena)||" "),A=Object(o.a)(C,2),D=A[0],I=A[1],y=c.a.useState((null===l||void 0===l?void 0:l.copa)||" "),E=Object(o.a)(y,2),S=E[0],T=E[1],w=c.a.useState((null===l||void 0===l?void 0:l.tiara)||" "),F=Object(o.a)(w,2),R=F[0],W=F[1],M=c.a.useState((null===l||void 0===l?void 0:l.twoItems)||" "),L=Object(o.a)(M,2),k=L[0],B=L[1],P=c.a.useState((null===l||void 0===l?void 0:l.fourItems)||" "),_=Object(o.a)(P,2),U=_[0],z=_[1],G=c.a.useState((null===l||void 0===l?void 0:l.domain)||" "),Y=Object(o.a)(G,2),q=Y[0],J=Y[1],H=c.a.useState((null===l||void 0===l?void 0:l.notes)||" "),Z=Object(o.a)(H,2),V=Z[0],K=Z[1],Q=x.length>1,X=v.length>1,$=D.length>1,ee=S.length>1,te=R.length>1,ae=k.length>1,ne=U.length>10,ce=q.length>1,ie=V.length>1;return Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u(!0),"create"==t&&Q&&X&&$&&ee&&te){var n={id:Math.random(),name:x,mainImg:v,arena:D,copa:S,tiara:R,twoItems:k,fourItems:U,domain:q,notes:V,idOwner:i};s(n),u(!1),console.log(n)}else"edit"===t&&Q&&X&&$&&ee&&te?null!==a&&r(a,{id:a,name:x,mainImg:v,arena:D,copa:S,tiara:R,twoItems:k,fourItems:U,domain:q,notes:V,idOwner:i}):console.log("invalid")},className:"artifactForm",children:[Object(d.jsx)("p",{className:"formIntro",children:"create"===t?"Agrega el set correspondiente a este personaje":"Edita los datos del artefacto"}),Object(d.jsxs)("label",{children:["Nombre del set",Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){g(e.target.value)},value:x}),b&&!Q&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del set de artefactos"})]}),Object(d.jsxs)("label",{children:["Imagen de la flor",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){N(e.target.value)},value:v}),b&&!X&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(d.jsxs)("label",{children:["2 piezas",Object(d.jsx)("input",{type:"text",name:"twoItems",onChange:function(e){B(e.target.value)},value:k}),b&&!ae&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto de las 2 piezas"})]}),Object(d.jsxs)("label",{children:["4 piezas",Object(d.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){z(e.target.value)},value:U}),b&&!ne&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto de las 4 piezas"})]}),Object(d.jsxs)("label",{children:["Dominio",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){J(e.target.value)},value:q}),b&&!ce&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el dominio del set de artefactos"})]}),Object(d.jsxs)("label",{children:["Notas del set",Object(d.jsx)("textarea",{className:"largeInput",name:"notes",onChange:function(e){K(e.target.value)},value:V}),b&&!ie&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en las notas del set"})]}),Object(d.jsx)("h4",{className:"subtitleForm",children:"Stats"}),Object(d.jsxs)("label",{children:["Arena",Object(d.jsx)("input",{type:"text",name:"arena",onChange:function(e){I(e.target.value)},value:D}),b&&!$&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat de la arena"})]}),Object(d.jsxs)("label",{children:["C\xe1liz",Object(d.jsx)("input",{type:"text",name:"caliz",onChange:function(e){T(e.target.value)},value:S}),b&&!ee&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat del c\xe1liz"})]}),Object(d.jsxs)("label",{children:["Tiara",Object(d.jsx)("input",{type:"text",name:"tiara",onChange:function(e){W(e.target.value)},value:R}),b&&!te&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat de la tiara"})]}),Object(d.jsx)("button",{className:"button",children:"create"===t?"A\xd1ADIR ARTEFACTO":"GUARDAR CAMBIOS"})]})},C=(a(46),function(e){var t=e.title,a=e.text,n=e.textLink,c=e.stars,i=e.link,s=Object(h.g)();return Object(d.jsxs)("div",{className:"DetailsObj",children:[Object(d.jsx)("h4",{className:"DetailsObj--title",children:t}),a&&Object(d.jsx)("p",{className:"DetailsObj--text",children:a}),n&&Object(d.jsx)("p",{className:"DetailsObj--textLink",onClick:function(e){s.push("/characterDetails/".concat(i))},children:n}),Object(d.jsx)("img",{src:c})]})}),A=(a(47),a(48),function(e){var t=e.title,a=e.text,n=e.img;return Object(d.jsxs)("div",{className:"statsArtifacts",children:[Object(d.jsx)("img",{src:n}),Object(d.jsxs)("div",{className:"infoStats",children:[Object(d.jsx)("p",{className:"infoStatsTitle",children:t}),Object(d.jsx)("p",{className:"infoStatsText",children:a})]})]})}),D=function(e){var t=e.id,a=e.name,n=e.imgFlor,c=e.arena,i=e.copa,s=e.tiara,r=e.onDelete,l=e.onEdit,o=Object(h.g)();return Object(d.jsx)("div",{className:"ArtifactsCharacter",children:Object(d.jsxs)("div",{className:"AllInfoDiv",children:[Object(d.jsxs)("section",{className:"mainInfoArtifact",children:[Object(d.jsx)("img",{className:"mainInfoArtifactImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){o.push("/artifactsDetails/".concat(t))}}),Object(d.jsxs)("div",{className:"mainInfoArtifact--textDiv",children:[Object(d.jsx)("p",{className:"mainInfoArtifact--text",children:a}),Object(d.jsx)("p",{className:"subtitleMainInfo",children:"4 set items"}),Object(d.jsxs)("div",{className:"buttonsArtifactDiv",children:[l&&Object(d.jsx)("button",{className:"componentsButton",onClick:function(){l&&l(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})}),r&&Object(d.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){r&&r(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/deleteIcon.png")})})]})]})]}),Object(d.jsxs)("section",{className:"detailsArtifacts",children:[Object(d.jsx)("h3",{className:"titleStats",children:"Stats principales"}),Object(d.jsx)(A,{title:"Arenas de E\xf3n",text:c,img:"".concat("/Taller1WA2","/img/arena.png")}),Object(d.jsx)(A,{title:"C\xe1liz de Eonothem",text:i,img:"".concat("/Taller1WA2","/img/copa.png")}),Object(d.jsx)(A,{title:"Tiara de Logos",text:s,img:"".concat("/Taller1WA2","/img/tiara.png")})]})]})})},I=function(e){var t=e.typeWF,a=(e.editId,e.weaponElem),n=e.idOwner,i=e.onCreate,s=(e.onEdit,c.a.useState(!1)),r=Object(o.a)(s,2),l=r[0],j=r[1],m=c.a.useState((null===a||void 0===a?void 0:a.name)||" "),b=Object(o.a)(m,2),u=b[0],h=b[1],O=c.a.useState((null===a||void 0===a?void 0:a.mainImg)||" "),x=Object(o.a)(O,2),g=x[0],p=x[1],f=c.a.useState((null===a||void 0===a?void 0:a.history)||" "),v=Object(o.a)(f,2),N=v[0],C=v[1],A=c.a.useState((null===a||void 0===a?void 0:a.type)||" "),D=Object(o.a)(A,2),I=D[0],y=D[1],E=c.a.useState((null===a||void 0===a?void 0:a.stat)||" "),S=Object(o.a)(E,2),T=S[0],w=S[1],F=c.a.useState((null===a||void 0===a?void 0:a.passive)||" "),R=Object(o.a)(F,2),W=R[0],M=R[1],L=u.length>1,k=g.length>1,B=N.length>10,P=I.length>1,_=T.length>1,U=W.length>1;return Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),j(!0),L&&k&&B&&P&&_&&U){var t={id:Math.random(),name:u,mainImg:g,history:N,type:I,stat:T,passive:W,idOwner:n};i(t),j(!1),console.log(t)}},className:"weaponForm",children:[Object(d.jsx)("p",{className:"formIntro",children:"create"===t?"Agrega el arma correspondiente a este personaje":"Edita los datos del arma"}),Object(d.jsxs)("label",{children:["Nombre del arma",Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){h(e.target.value)},value:u}),l&&!L&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del arma"})]}),Object(d.jsxs)("label",{children:["Imagen del arma",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){p(e.target.value)},value:g}),l&&!k&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(d.jsxs)("label",{children:["Historia del arma",Object(d.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){C(e.target.value)},value:N}),l&&!B&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en la historia del personaje"})]}),Object(d.jsxs)("label",{children:["Tipo de arma",Object(d.jsxs)("select",{name:"arma",value:I,onChange:function(e){y(e.target.value)},children:[Object(d.jsx)("option",{value:" ",children:"ELIGE EL TIPO DE ARMA"}),Object(d.jsx)("option",{value:"Mandoble",children:"MANDOBLE"}),Object(d.jsx)("option",{value:"Arco",children:"ARCO"}),Object(d.jsx)("option",{value:"Espada",children:"ESPADA"}),Object(d.jsx)("option",{value:"Lanza",children:"LANZA"})]}),l&&!P&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el tipo de arma"})]}),Object(d.jsxs)("label",{children:["Stat secundario",Object(d.jsx)("input",{type:"text",name:"type",onChange:function(e){w(e.target.value)},value:T}),l&&!_&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat del arma"})]}),Object(d.jsxs)("label",{children:["Efecto pasivo",Object(d.jsx)("textarea",{className:"largeInput",name:"passive",onChange:function(e){M(e.target.value)},value:W}),l&&!U&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto pasivo del arma"})]}),Object(d.jsx)("button",{className:"button",children:"create"===t?"A\xd1ADIR ARMA":"GUARDAR CAMBIOS"})]})},y=(a(49),function(e){var t=e.id,a=e.name,n=e.mainImg,c=(e.history,e.stat),i=e.passive,s=e.onDelete,r=e.onEdit,l=Object(h.g)();return Object(d.jsxs)("div",{className:"characterDetailsWeapon",children:[Object(d.jsxs)("section",{className:"mainInfoWeapon",children:[Object(d.jsx)("img",{className:"mainInfoWeaponImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){l.push("/weaponDetails/".concat(t))}}),Object(d.jsxs)("div",{className:"mainInfoWeapon--textDiv",children:[Object(d.jsx)("p",{className:"mainInfoArtifact--text",children:a}),Object(d.jsx)("p",{className:"subtitleMainInfo",children:c}),Object(d.jsxs)("div",{className:"buttonsArtifactDiv",children:[r&&Object(d.jsx)("button",{className:"componentsButton",onClick:function(){r&&r(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})}),s&&Object(d.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){s&&s(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/deleteIcon.png")})})]})]})]}),Object(d.jsxs)("div",{className:"detailsWeapon",children:[Object(d.jsx)("p",{className:"infoStatsTitle",children:"Efecto pasivo"}),Object(d.jsx)("p",{className:"infoStatsText",children:i})]})]})}),E=function(){var e=Object(h.h)().id;return parseFloat(e)},S=function(e){var t=E(),a=Object(h.g)(),n=e.find((function(e){return e.id===t}));return n||a.push("/error404"),n},T=function(e){var t,a=e.list,n=e.onCreateArtifact,i=e.onEditArtifact,s=e.onDeleteArtifact,j=e.onCreateWeapon,m=e.onDeleteWeapon,b=(Object(h.g)(),E()),u=S(a);"pyro"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterPyro"),"cryo"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterCryo"),"electro"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterElectro"),"anemo"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterAnemo");var O=c.a.useState(a),x=Object(o.a)(O,2),g=x[0],p=x[1],f=c.a.useState("none"),A=Object(o.a)(f,2),T=A[0],w=A[1],F=c.a.useState(null),R=Object(o.a)(F,2),W=R[0],M=R[1],L=c.a.useState("none"),k=Object(o.a)(L,2),B=k[0],P=k[1],_=c.a.useState(null),U=Object(o.a)(_,2),z=U[0],G=U[1],Y=c.a.useState([]),q=Object(o.a)(Y,2),J=q[0],H=q[1];if(!u)return null;var Z=u.name,V=u.img,K=u.history,Q=u.role,X=u.constelacion,$=u.city,ee=u.artifacts,te=u.weapon,ae=u.trailer,ne=u.id;J=ee;var ce,ie,se,re=function(e){G(e),P("edit"),console.log("estas en edit",e)},le=function(e){console.log(e),s(ne,e)};te&&(ce=te.type,ie=te.name,se=te.id);return Object(d.jsxs)("div",{className:"characterDetails",children:[Object(d.jsx)(v,{text:"PERFIL"}),Object(d.jsxs)("div",{className:"mainInfoCharacter",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/").concat(V)}),Object(d.jsxs)("div",{className:"biographyDiv",children:[Object(d.jsx)("h2",{className:t,children:Z}),Object(d.jsx)("p",{className:"biographyText",children:K})]}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)(C,{title:"Rareza",stars:"".concat("/Taller1WA2","/img/5stars.png")}),Object(d.jsx)(C,{title:"Role",text:Q}),Object(d.jsx)(C,{title:"Arma",text:ce}),Object(d.jsx)(C,{title:"Constelaci\xf3n",text:X}),Object(d.jsx)(C,{title:"Regi\xf3n natal",text:$})]})]}),Object(d.jsxs)("section",{className:"weaponDiv",children:[Object(d.jsx)(v,{text:"ARMA"}),"none"==T&&!(null===te||void 0===te?void 0:te.name)&&Object(d.jsx)("button",{className:"button buttonAddComponent",onClick:function(e){w("create")},children:"A\xd1ADIR"}),Object(d.jsxs)("section",{className:"weaponFormDiv",children:[!(null===te||void 0===te?void 0:te.name)&&Object(d.jsx)("img",{className:"noSomething",src:"".concat("/Taller1WA2","/img/noWeapon.png")}),("create"===T||"edit"===T)&&Object(d.jsx)(I,{typeWF:T,editId:W,weaponElem:te,idOwner:u.id,onCreate:function(e){j(b,e),w("none")},onEdit:function(e,t){var a=g.slice(),n=g.findIndex((function(e){return e.id===W}));a[n]=Object(r.a)(Object(r.a)({},g[n]),t),p(a),w("none")}})]}),"none"==T&&te&&void 0!=te&&Object(d.jsx)("section",{className:"weaponElem",children:se&&ce&&ie&&Object(d.jsx)(y,{id:se,name:te.name,mainImg:te.mainImg,history:te.history,stat:te.stat,passive:te.passive,onEdit:function(e){M(e),w("edit"),console.log("estas en edit",e)},onDelete:function(){m(ne)}},se)})]}),Object(d.jsxs)("section",{className:"ArtifactDiv",children:[Object(d.jsx)(v,{text:"ARTEFACTOS"}),"none"==B&&Object(d.jsx)("button",{className:"button buttonAddComponent",onClick:function(e){P("create")},children:"A\xd1ADIR"}),Object(d.jsxs)("div",{className:"artifactFormDiv",children:[ee.length<1&&Object(d.jsx)("img",{className:"noSomething",src:"".concat("/Taller1WA2","/img/noArtifact.png")}),("create"===B||"edit"===B)&&Object(d.jsx)(N,{type:B,editId:z,artifactElem:ee,idOwner:u.id,onCreate:function(e){var t=[].concat(Object(l.a)(J),[{id:Math.random(),name:e.name,mainImg:e.mainImg,arena:e.arena,copa:e.copa,tiara:e.tiara,twoItems:e.twoItems,fourItems:e.fourItems,domain:e.domain,notes:e.notes,idOwner:e.idOwner}]);H(t),n(b,e),P("none")},onEdit:function(e,t){z&&i(ne,z,t),P("none"),G(null)}})]}),"none"===B&&Object(d.jsx)("section",{className:"artifactElem",children:ee.map((function(e){return Object(d.jsx)(D,{id:e.id,name:e.name,imgFlor:e.mainImg,arena:e.arena,copa:e.copa,tiara:e.tiara,onEdit:re,onDelete:le},e.id)}))})]}),Object(d.jsxs)("div",{className:"TrailerDiv",children:[Object(d.jsx)(v,{text:"TRAILER"}),Object(d.jsx)("iframe",{className:"videoC",width:"813",height:"457",src:ae,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})]})},w=(a(50),function(e){var t=e.list,a=(E(),S(t));if(!a)return null;var n=a.name,c=a.mainImg,i=a.twoItems,s=a.fourItems,r=a.domain,l=a.notes;return Object(d.jsxs)("div",{className:"ArtifactsDetails",children:[Object(d.jsx)(v,{text:"SET DE ARTEFACTOS"}),Object(d.jsxs)("section",{className:"artifactsDetailsDiv",children:[Object(d.jsxs)("div",{className:"imgSectionDiv",children:[Object(d.jsx)("img",{className:"imgArtifactDetails",src:"".concat("/Taller1WA2","/img/").concat(c)}),Object(d.jsxs)("div",{className:"domainSection",children:[Object(d.jsx)("h3",{className:"titleStats titleDomain",children:"Dominio donde se puede conseguir"}),Object(d.jsx)("p",{className:" textBody textArtifactDetails",children:r})]})]}),Object(d.jsxs)("div",{className:"artifactInfoDiv",children:[Object(d.jsx)("h2",{className:"titleElemDetail titleArtfiact",children:n}),Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"2 piezas"}),Object(d.jsx)("p",{className:"textBody textArtifactDetails",children:i}),Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"4 piezas"}),Object(d.jsx)("p",{className:"textBody textArtifactDetails",children:s})]}),Object(d.jsxs)("div",{className:"artifactNotes",children:[Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"NOTAS"}),Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"Bono de 4 piezas"}),Object(d.jsx)("p",{className:"textBody textArtifactDetails",children:l})]})]})]})}),F=(a(51),function(e){var t=e.weapon,a=e.listCharacter,n=(E(),S(t));if(!n)return null;var c=n.name,i=n.mainImg,s=n.history,r=n.type,l=n.stat,o=n.passive,j=(n.idOwner,a.find((function(e){return e.id===(null===n||void 0===n?void 0:n.idOwner)})));return Object(d.jsxs)("div",{className:"weaponDetails",children:[Object(d.jsx)(v,{text:"ARMA"}),Object(d.jsxs)("div",{className:"weaponMainInfoDiv",children:[Object(d.jsxs)("section",{className:"weaponDescriptionDiv",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/").concat(i)}),Object(d.jsxs)("div",{className:"weaponDescriptionTextDiv",children:[Object(d.jsx)("h2",{className:"titleElemDetail",children:c}),Object(d.jsx)("p",{className:" textBody",children:s})]})]}),Object(d.jsxs)("section",{className:"details",children:[Object(d.jsx)(C,{title:"Rareza",stars:"".concat("/Taller1WA2","/img/5stars.png")}),Object(d.jsx)(C,{title:"Tipo",text:r}),Object(d.jsx)(C,{title:"Due\xf1o",textLink:null===j||void 0===j?void 0:j.name,link:null===j||void 0===j?void 0:j.id}),Object(d.jsx)(C,{title:"Obtenci\xf3n",text:"Gacha"}),Object(d.jsx)(C,{title:"Tipo de stat secundario",text:l})]})]}),Object(d.jsxs)("section",{className:"weaponPassiveDiv",children:[Object(d.jsx)(v,{text:"EFECTO PASIVO"}),Object(d.jsx)("p",{className:"textBody weaponPassive--text",children:o})]})]})}),R=(a(52),function(){return Object(d.jsxs)("section",{className:"footer",children:[Object(d.jsxs)("div",{className:"footerImgDiv",children:[Object(d.jsx)("img",{className:"footerImg",src:"".concat("/Taller1WA2","/img/logoMihoyo.png")}),Object(d.jsx)("img",{className:"footerImg",src:"".concat("/Taller1WA2","/img/navLogo.png")})]}),Object(d.jsxs)("div",{className:"footerTextDiv",children:[Object(d.jsx)("p",{className:"footerText footerCopyright",children:"Copyright \xa9 2020 miHoYo All Rights Reserved"}),Object(d.jsx)("p",{className:"footerText footerTextBody",children:'"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc. Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.'}),Object(d.jsx)("img",{className:"footerLogos",src:"".concat("/Taller1WA2","/img/otherLogos.png")})]})]})}),W=a(19);var M=function(){var e=c.a.useState("create"),t=Object(o.a)(e,2),a=t[0],i=t[1],s=c.a.useState(null),N=Object(o.a)(s,2),C=N[0],A=N[1],D=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),c=Object(o.a)(a,2),i=c[0],s=c[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;s(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("CharacterElems",[{id:Math.random(),name:"DILUC",elementC:"pyro",img:"diluc.png",history:'Diluc Ragnvindr es el due\xf1o actual de Vi\xf1edo del Amanecer y un noble de alta estima en la sociedad de Mondstadt. Aunque parece ap\xe1tico sobre los asuntos de la ciudad, la protege de noche como el rumoreado "H\xe9roe Oscuro".\n      Como el hombre m\xe1s rico de Mondstadt, Diluc siempre muestra su lado m\xe1s exquisito. Sin embargo, su verdadera naturaleza es la de un guerrero con una gran determinaci\xf3n. Protege a Mondstadt con todas sus fuerzas en todo momento.',role:"DPS",constelacion:"Noctua",city:"Mondstadt",trailer:"https://www.youtube.com/embed/1TfbiDo7N4k",artifacts:[]},{id:Math.random(),name:"BENNET",elementC:"pyro",img:"bennet.png",history:'Un hu\xe9rfano descubierto por un anciano aventurero cuando era un beb\xe9, Bennett se crio en el Gremio de Aventureros de Mondstadt. \xc9l es el \xfanico miembro de la "Brigada de Benny", ya que todos los dem\xe1s dejaron el equipo despu\xe9s de experimentar la desgracia constante que lo sigue.',role:"BURST SUPPORT",constelacion:"Rota Calamitas",city:"Mondstadt",trailer:"https://www.youtube.com/embed/UW8lG_wNFIY",artifacts:[]}]),I=Object(o.a)(D,2),y=I[0],E=I[1],S=y.filter((function(e){if("pyro"===e.elementC)return!0})),M=y.filter((function(e){if("electro"===e.elementC)return!0})),L=y.filter((function(e){if("cryo"===e.elementC)return!0})),k=y.filter((function(e){if("anemo"===e.elementC)return!0})),B=[];y.forEach((function(e){e.artifacts.forEach((function(e){B.push(e)}))}));var P=[],_=[];y.forEach((function(e){e.weapon&&(_.push(e.weapon),P.push(e.weapon))}));var U=_.filter((function(e){if("Mandoble"===(null===e||void 0===e?void 0:e.type))return!0})),z=_.filter((function(e){if("Lanza"===(null===e||void 0===e?void 0:e.type))return!0})),G=_.filter((function(e){if("Espada"===(null===e||void 0===e?void 0:e.type))return!0})),Y=_.filter((function(e){if("Arco"===(null===e||void 0===e?void 0:e.type))return!0})),q=function(e){var t=y.filter((function(t){return t.id!==e}));E(t)},J=function(e){A(e),i("edit"),console.log("estas en edit",e)},H={labels:["PYRO","ELECTRO","CRYO","ANEMO","HYDRO","GEO"],datasets:[{label:"# de personajes",data:[S.length,M.length,L.length,k.length],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(153, 102, 255, 0.2)","rgba(75, 192, 192, 0.2)","rgba(52, 235, 128, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(153, 102, 255, 1)","rgba(75, 192, 192, 1)","rgba(52, 235, 128, 1)","rgba(54, 162, 235, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},Z=function(e){var t={};return e.forEach((function(e){t[e.name]=e.artifacts.length})),{labels:Object.keys(t),datasets:[{label:"# of artefactos x personaje",data:Object.values(t),backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]}}(y);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/navLogo.png"),className:"navLogo"})}),Object(d.jsx)(m,{text:"ARMAS",url:"/weaponsList"}),Object(d.jsx)(m,{text:"ARTEFACTOS",url:"/artifactsList"}),Object(d.jsx)(m,{text:"FORMULARIO",url:"/characterForm"}),Object(d.jsx)(m,{text:"ESTAD\xcdSTICAS",url:"/statistics"}),Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/userIcon.png"),className:"userIcon"})]}),Object(d.jsxs)(h.d,{children:[Object(d.jsxs)(h.b,{path:"/",exact:!0,children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/bannerImg.jpg"),className:"banner"}),Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"PERSONAJES"}),S.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"PYRO",img:"pyroIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:S.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:q,onEdit:J},e.id)}))})]}),L.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"CRYO",img:"cryoIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:L.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:q,onEdit:J},e.id)}))})]}),M.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"ELECTRO",img:"electroIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:M.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:q,onEdit:J},e.id)}))})]}),k.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"ANEMO",img:"anemoIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:k.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:q,onEdit:J},e.id)}))})]})]})]}),Object(d.jsx)(h.b,{path:"/characterForm",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/bannerForm.png"),className:"banner"}),Object(d.jsx)(b,{text:"FORMULARIO"}),Object(d.jsx)(x,{editId:C,characterElem:y,type:a,onCreate:function(e){console.log("Se creo",e);var t=[].concat(Object(l.a)(y),[{id:Math.random(),name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,city:e.city,trailer:e.trailer,artifacts:[],weapon:{id:0,name:"",mainImg:"",history:"",type:"",stat:"",passive:"",idOwner:0}}]);E(t)},onEdit:function(e,t){console.log(e,t.name);var a=y.slice(),n=y.findIndex((function(e){return e.id===C}));a[n]=Object(r.a)(Object(r.a)({},y[n]),t),E(a),i("create"),A(null)}})]})}),Object(d.jsx)(h.b,{path:"/characterDetails/:id",children:Object(d.jsx)(T,{list:y,onCreateArtifact:function(e,t){var a=y.slice(),n=y.findIndex((function(t){return t.id===e}));a[n]=Object(r.a)(Object(r.a)({},y[n]),{},{artifacts:[].concat(Object(l.a)(y[n].artifacts),[t])}),E(a)},onEditArtifact:function(e,t,a){var n=y.slice(),c=y.findIndex((function(t){return t.id===e})),i=n[c].artifacts.findIndex((function(e){return e.id===t}));E((function(e){var t=e;return t[c].artifacts[i]=a,Object(l.a)(t)}))},onDeleteArtifact:function(e,t){var a=y.findIndex((function(t){return t.id===e})),n=y[a].artifacts.filter((function(e){return e.id!==t}));E((function(e){var t=e;return t[a].artifacts=n,Object(l.a)(t)}))},onCreateWeapon:function(e,t){var a=y.slice(),n=y.findIndex((function(t){return t.id===e}));a[n]=Object(r.a)(Object(r.a)({},y[n]),{},{weapon:t}),E(a)},onDeleteWeapon:function(e){y.slice();var t=y.findIndex((function(t){return t.id===e}));E((function(e){var a=e,n=a[t];return delete n.weapon,a[t]=n,console.log(a),Object(l.a)(a)}))}})}),Object(d.jsx)(h.b,{path:"/weaponsList",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"ARMAS"}),U.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"MANDOBLE"}),Object(d.jsx)("article",{className:"componentsDiv",children:U.map((function(e){return Object(d.jsx)(g,{id:e.id,name:e.name,img:e.mainImg,idCharacter:e.idOwner},e.id)}))})]}),z.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"LANZA"}),Object(d.jsx)("article",{className:"componentsDiv",children:z.map((function(e){return Object(d.jsx)(g,{id:e.id,name:e.name,img:e.mainImg,idCharacter:e.idOwner},e.id)}))})]}),G.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"ESPADA"}),Object(d.jsx)("article",{className:"componentsDiv",children:G.map((function(e){return Object(d.jsx)(g,{id:e.id,name:e.name,img:e.mainImg,idCharacter:e.idOwner},e.id)}))})]}),Y.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"ARCO"}),Object(d.jsx)("article",{className:"componentsDiv",children:Y.map((function(e){return Object(d.jsx)(g,{id:e.id,name:e.name,img:e.mainImg,idCharacter:e.idOwner},e.id)}))})]})]})}),Object(d.jsx)(h.b,{path:"/artifactsList",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"ARTEFACTOS"}),Object(d.jsx)("article",{className:"componentsDiv",children:B.map((function(e){return Object(d.jsx)(p,{id:e.id,name:e.name,mainImg:e.mainImg,idCharacter:e.idOwner},e.id)}))})]})}),Object(d.jsx)(h.b,{path:"/artifactsDetails/:id",children:Object(d.jsx)(w,{list:B})}),Object(d.jsx)(h.b,{path:"/weaponDetails/:id",children:P&&Object(d.jsx)(F,{weapon:P,listCharacter:y})}),Object(d.jsx)(h.b,{path:"/statistics",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"ESTAD\xcdSTICAS"}),Object(d.jsxs)("div",{className:"characterDetails",children:[Object(d.jsxs)("div",{className:"graphicDiv",children:[Object(d.jsx)(v,{text:"ELEMENTOS"}),Object(d.jsx)(W.a,{className:"graphicBar",data:H,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}}})]}),Object(d.jsxs)("div",{className:"graphicDiv",children:[Object(d.jsx)(v,{text:"ARTEFACTOS POR PERSONAJE"}),Object(d.jsx)(W.a,{className:"graphicBar",data:Z,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}}})]})]})]})}),Object(d.jsx)(h.b,{path:"/error404",children:Object(d.jsx)(f,{})}),Object(d.jsx)(h.a,{to:"/error404"})]})]}),Object(d.jsx)(R,{})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(M,{})})}),document.getElementById("root")),L()}]),[[53,1,2]]]);
//# sourceMappingURL=main.3433e55a.chunk.js.map