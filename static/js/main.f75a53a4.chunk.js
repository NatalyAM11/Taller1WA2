(this.webpackJsonptaller1=this.webpackJsonptaller1||[]).push([[0],Array(28).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(21),s=a.n(i),r=(a(28),a(7)),l=a(4),o=a(2),j=(a(29),a(30),a(11)),m=a(0),d=function(e){var t=e.text,a=(e.active,e.url);return Object(m.jsx)(j.c,{className:"Link",activeClassName:"Link--active",to:a,children:t})},b=(a(37),function(e){var t=e.text;return Object(m.jsxs)("div",{className:"MainTitle",children:[Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/titleFlechaD.png"),className:"flechasTitle"}),Object(m.jsx)("h3",{className:"titleMain",children:t}),Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/titleFlechaI.png"),className:"flechasTitle"})]})}),u=(a(38),function(e){var t=e.text,a=e.img;return Object(m.jsxs)("div",{className:"ElementTitle",children:[Object(m.jsx)("img",{className:"imgElementTitle",src:"".concat("/Taller1WA2","/img/").concat(a)}),Object(m.jsx)("h2",{className:"titleElement titlesSections",children:t})]})}),h=(a(39),a(3)),O=function(e){var t=e.id,a=e.name,n=(e.elementC,e.img),c=e.onDelete,i=e.onEdit,s=Object(h.g)();return Object(m.jsxs)("div",{className:"character",children:[Object(m.jsxs)("div",{className:"onlyCharacter",onClick:function(){s.push("/characterDetails/".concat(t))},children:[Object(m.jsx)("h2",{className:"characterName titlesAllComp",children:a}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"characterImg",src:"".concat("/Taller1WA2","/img/").concat(n)})})]}),Object(m.jsxs)("div",{className:"buttonsDiv",children:[i&&Object(m.jsx)("button",{className:"componentsButton",onClick:function(){s.push("/characterForm"),i&&i(t)},children:Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})}),c&&Object(m.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){c&&c(t)},children:Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/deleteIcon.png")})})]})]})},x=(a(40),function(e){var t=e.editId,a=e.characterElem,n=e.type,i=e.onCreate,s=e.onEdit,r=Object(h.g)(),l=a.find((function(e){return e.id===t})),j=c.a.useState(!1),d=Object(o.a)(j,2),b=d[0],u=d[1],O=c.a.useState((null===l||void 0===l?void 0:l.name)||" "),x=Object(o.a)(O,2),g=x[0],p=x[1],f=c.a.useState((null===l||void 0===l?void 0:l.elementC)||" "),v=Object(o.a)(f,2),N=v[0],C=v[1],A=c.a.useState((null===l||void 0===l?void 0:l.img)||" "),D=Object(o.a)(A,2),I=D[0],E=D[1],y=c.a.useState((null===l||void 0===l?void 0:l.history)||" "),S=Object(o.a)(y,2),T=S[0],R=S[1],F=c.a.useState((null===l||void 0===l?void 0:l.role)||" "),w=Object(o.a)(F,2),M=w[0],W=w[1],L=c.a.useState((null===l||void 0===l?void 0:l.city)||" "),B=Object(o.a)(L,2),k=B[0],P=B[1],_=c.a.useState((null===l||void 0===l?void 0:l.constelacion)||" "),U=Object(o.a)(_,2),z=U[0],G=U[1],Y=c.a.useState((null===l||void 0===l?void 0:l.trailer)||" "),q=Object(o.a)(Y,2),H=q[0],J=q[1],Z=g.length>1,V=I.length>5,K=N.length>1,Q=T.length>10,X=M.length>2,$=k.length>1,ee=z.length>1,te=H.length>1;return Object(m.jsxs)("form",{className:"characterForm",onSubmit:function(e){e.preventDefault(),u(!0),"create"===n&&Z&&V&&K&&Q&&X&&$&&ee&&te?(console.log("valid"),i({name:g,elementC:N,img:I,history:T,role:M,constelacion:z,city:k,trailer:H}),p(" "),E(" "),u(!1),r.push("/")):"edit"===n&&Z?null!==t&&(s(t,{name:g,elementC:N,img:I,history:T,role:M,constelacion:z,city:k,trailer:H}),r.push("/characterDetails/".concat(null===l||void 0===l?void 0:l.id))):console.log("invalid")},children:[Object(m.jsx)("p",{className:"formIntro",children:"create"===n?"Agrega a los personajes que te acompa\xf1aran en tus siguientes aventuras":"Edita los datos del personaje"}),Object(m.jsxs)("label",{children:["Nombre",Object(m.jsx)("input",{type:"text",name:"name",onChange:function(e){p(e.target.value)},value:g}),b&&!Z&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del personaje"})]}),Object(m.jsxs)("label",{children:["Elemento",Object(m.jsxs)("select",{name:"elementC",value:N,onChange:function(e){console.log(e.target.value),C(e.target.value)},children:[Object(m.jsx)("option",{value:" ",children:"ELIGE UN ELEMENTO"}),Object(m.jsx)("option",{value:"pyro",children:"PYRO"}),Object(m.jsx)("option",{value:"electro",children:"ELECTRO"}),Object(m.jsx)("option",{value:"cryo",children:"CRYO"}),Object(m.jsx)("option",{value:"anemo",children:"ANEMO"})]}),b&&!K&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escoger el elemento del personaje"})]}),Object(m.jsxs)("label",{children:["Imagen",Object(m.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){E(e.target.value)},value:I}),b&&!V&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(m.jsxs)("label",{children:["Perfil",Object(m.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){R(e.target.value)},value:T}),b&&!Q&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en el perfil del personaje"})]}),Object(m.jsxs)("label",{children:["Rol",Object(m.jsx)("input",{type:"text",name:"rol",onChange:function(e){W(e.target.value)},value:M}),b&&!X&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el rol del personaje"})]}),Object(m.jsxs)("label",{children:["Ciudad natal",Object(m.jsxs)("select",{name:"arma",value:k,onChange:function(e){P(e.target.value)},children:[Object(m.jsx)("option",{value:" ",children:"ELIGE LA CIUDAD"}),Object(m.jsx)("option",{value:"Mondstadt",children:"MONDSTADT"}),Object(m.jsx)("option",{value:"Liyue",children:"LIYUE"}),Object(m.jsx)("option",{value:"Inazuma",children:"INAZUMA"})]}),b&&!$&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escoger la ciudad natal del personaje"})]}),Object(m.jsxs)("label",{children:["Constelaci\xf3n",Object(m.jsx)("input",{type:"text",name:"constalletion",onChange:function(e){G(e.target.value)},value:z}),b&&!ee&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre de la constelaci\xf3n del personaje"})]}),Object(m.jsxs)("label",{children:["URL Trailer",Object(m.jsx)("input",{type:"text",name:"urlTrailer",onChange:function(e){J(e.target.value)},value:H}),b&&!te&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir la URL del trailer del personaje"})]}),Object(m.jsx)("button",{className:"button",children:"create"===n?"CREAR":"GUARDAR CAMBIOS"})]})}),g=(a(41),function(e){var t=e.id,a=e.name,n=e.img,c=e.onDelete,i=e.onEdit,s=Object(h.g)();return Object(m.jsxs)("div",{className:"weapon",children:[Object(m.jsxs)("div",{className:"weaponImgDiv",children:[Object(m.jsx)("h2",{className:"weaponName titlesAllComp",children:a}),Object(m.jsx)("img",{className:"weaponImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){s.push("/weaponDetails/".concat(t))}})]}),Object(m.jsxs)("div",{className:"buttonsDiv",children:[i&&Object(m.jsx)("button",{className:"componentsButton",onClick:function(){i&&i(t)},children:Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})}),c&&Object(m.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){c&&c(t)},children:Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/deleteIcon.png")})})]})]})}),p=(a(42),function(e){var t=e.id,a=e.name,n=e.mainImg,c=(e.onDelete,e.onEdit,Object(h.g)());return Object(m.jsxs)("div",{className:"artifacts",children:[Object(m.jsx)("h2",{className:"artifactName titlesAllComp",children:a}),Object(m.jsx)("img",{className:"artifactImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){c.push("/artifactsDetails/".concat(t))}})]})}),f=(a(43),function(){return Object(m.jsxs)("div",{className:"Error404",children:[Object(m.jsx)("h1",{children:"ERROR 404"}),Object(m.jsx)("h2",{children:"No se encontro la p\xe1gina"})]})}),v=(a(44),a(45),function(e){var t=e.text;return Object(m.jsxs)("div",{className:"TitleSectionC",children:[Object(m.jsx)("img",{className:"imgTitleSectionC",src:"".concat("/Taller1WA2","/img/iconTitleSection.png")}),Object(m.jsx)("h2",{className:"textTitleSection",children:t})]})}),N=function(e){var t=e.type,a=e.editId,n=e.artifactElem,i=e.onCreate,s=e.onEdit,r=n.find((function(e){return e.id===a})),l=c.a.useState(!1),j=Object(o.a)(l,2),d=j[0],b=j[1],u=c.a.useState((null===r||void 0===r?void 0:r.name)||" "),h=Object(o.a)(u,2),O=h[0],x=h[1],g=c.a.useState((null===r||void 0===r?void 0:r.mainImg)||" "),p=Object(o.a)(g,2),f=p[0],v=p[1],N=c.a.useState((null===r||void 0===r?void 0:r.arena)||" "),C=Object(o.a)(N,2),A=C[0],D=C[1],I=c.a.useState((null===r||void 0===r?void 0:r.copa)||" "),E=Object(o.a)(I,2),y=E[0],S=E[1],T=c.a.useState((null===r||void 0===r?void 0:r.tiara)||" "),R=Object(o.a)(T,2),F=R[0],w=R[1],M=c.a.useState((null===r||void 0===r?void 0:r.twoItems)||" "),W=Object(o.a)(M,2),L=W[0],B=W[1],k=c.a.useState((null===r||void 0===r?void 0:r.fourItems)||" "),P=Object(o.a)(k,2),_=P[0],U=P[1],z=c.a.useState((null===r||void 0===r?void 0:r.domain)||" "),G=Object(o.a)(z,2),Y=G[0],q=G[1],H=c.a.useState((null===r||void 0===r?void 0:r.notes)||" "),J=Object(o.a)(H,2),Z=J[0],V=J[1],K=O.length>1,Q=f.length>1,X=A.length>1,$=y.length>1,ee=F.length>1,te=L.length>1,ae=_.length>10,ne=Y.length>1,ce=Z.length>1;return Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b(!0),"create"==t&&K&&Q&&X&&$&&ee){var n={id:Math.random(),name:O,mainImg:f,arena:A,copa:y,tiara:F,twoItems:L,fourItems:_,domain:Y,notes:Z};i(n),b(!1),console.log(n)}else"edit"===t&&K&&Q&&X&&$&&ee?null!==a&&s(a,{id:a,name:O,mainImg:f,arena:A,copa:y,tiara:F,twoItems:L,fourItems:_,domain:Y,notes:Z}):console.log("invalid")},className:"artifactForm",children:[Object(m.jsx)("p",{className:"formIntro",children:"create"===t?"Agrega el set correspondiente a este personaje":"Edita los datos del artefacto"}),Object(m.jsxs)("label",{children:["Nombre del set",Object(m.jsx)("input",{type:"text",name:"name",onChange:function(e){x(e.target.value)},value:O}),d&&!K&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del set de artefactos"})]}),Object(m.jsxs)("label",{children:["Imagen de la flor",Object(m.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){v(e.target.value)},value:f}),d&&!Q&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(m.jsxs)("label",{children:["2 piezas",Object(m.jsx)("input",{type:"text",name:"twoItems",onChange:function(e){B(e.target.value)},value:L}),d&&!te&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto de las 2 piezas"})]}),Object(m.jsxs)("label",{children:["4 piezas",Object(m.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){U(e.target.value)},value:_}),d&&!ae&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto de las 4 piezas"})]}),Object(m.jsxs)("label",{children:["Dominio",Object(m.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){q(e.target.value)},value:Y}),d&&!ne&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el dominio del set de artefactos"})]}),Object(m.jsxs)("label",{children:["Notas del set",Object(m.jsx)("textarea",{className:"largeInput",name:"notes",onChange:function(e){V(e.target.value)},value:Z}),d&&!ce&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en las notas del set"})]}),Object(m.jsx)("h4",{className:"subtitleForm",children:"Stats"}),Object(m.jsxs)("label",{children:["Arena",Object(m.jsx)("input",{type:"text",name:"arena",onChange:function(e){D(e.target.value)},value:A}),d&&!X&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat de la arena"})]}),Object(m.jsxs)("label",{children:["C\xe1liz",Object(m.jsx)("input",{type:"text",name:"caliz",onChange:function(e){S(e.target.value)},value:y}),d&&!$&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat del c\xe1liz"})]}),Object(m.jsxs)("label",{children:["Tiara",Object(m.jsx)("input",{type:"text",name:"tiara",onChange:function(e){w(e.target.value)},value:F}),d&&!ee&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat de la tiara"})]}),Object(m.jsx)("button",{className:"button",children:"create"===t?"A\xd1ADIR ARTEFACTO":"GUARDAR CAMBIOS"})]})},C=(a(46),function(e){var t=e.text,a=e.title,n=e.stars;return Object(m.jsxs)("div",{className:"DetailsObj",children:[Object(m.jsx)("h4",{className:"DetailsObj--title",children:a}),Object(m.jsx)("p",{className:"DetailsObj--text",children:t}),Object(m.jsx)("img",{src:n})]})}),A=(a(47),a(48),function(e){var t=e.title,a=e.text,n=e.img;return Object(m.jsxs)("div",{className:"statsArtifacts",children:[Object(m.jsx)("img",{src:n}),Object(m.jsxs)("div",{className:"infoStats",children:[Object(m.jsx)("p",{className:"infoStatsTitle",children:t}),Object(m.jsx)("p",{className:"infoStatsText",children:a})]})]})}),D=function(e){var t=e.id,a=e.name,n=e.imgFlor,c=e.arena,i=e.copa,s=e.tiara,r=e.onDelete,l=e.onEdit,o=Object(h.g)();return Object(m.jsx)("div",{className:"ArtifactsCharacter",children:Object(m.jsxs)("div",{className:"AllInfoDiv",children:[Object(m.jsxs)("section",{className:"mainInfoArtifact",children:[Object(m.jsx)("img",{className:"mainInfoArtifactImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){o.push("/artifactsDetails/".concat(t))}}),Object(m.jsxs)("div",{className:"mainInfoArtifact--textDiv",children:[Object(m.jsx)("p",{className:"mainInfoArtifact--text",children:a}),Object(m.jsx)("p",{className:"subtitleMainInfo",children:"4 set items"}),Object(m.jsxs)("div",{className:"buttonsArtifactDiv",children:[Object(m.jsx)("button",{className:"buttonComponents button",onClick:function(){l&&l(t)},children:"EDITAR"}),Object(m.jsx)("button",{className:"buttonComponents button deleteButton",onClick:function(){r&&r(t)},children:"ELIMINAR"})]})]})]}),Object(m.jsxs)("section",{className:"detailsArtifacts",children:[Object(m.jsx)("h3",{className:"titleStats",children:"Stats principales"}),Object(m.jsx)(A,{title:"Arenas de E\xf3n",text:c,img:"".concat("/Taller1WA2","/img/arena.png")}),Object(m.jsx)(A,{title:"C\xe1liz de Eonothem",text:i,img:"".concat("/Taller1WA2","/img/copa.png")}),Object(m.jsx)(A,{title:"Tiara de Logos",text:s,img:"".concat("/Taller1WA2","/img/tiara.png")})]})]})})},I=function(e){var t=e.typeWF,a=(e.editId,e.weaponElem),n=e.onCreate,i=(e.onEdit,c.a.useState(!1)),s=Object(o.a)(i,2),r=s[0],l=s[1],j=c.a.useState((null===a||void 0===a?void 0:a.name)||" "),d=Object(o.a)(j,2),b=d[0],u=d[1],h=c.a.useState((null===a||void 0===a?void 0:a.mainImg)||" "),O=Object(o.a)(h,2),x=O[0],g=O[1],p=c.a.useState((null===a||void 0===a?void 0:a.history)||" "),f=Object(o.a)(p,2),v=f[0],N=f[1],C=c.a.useState((null===a||void 0===a?void 0:a.type)||" "),A=Object(o.a)(C,2),D=A[0],I=A[1],E=c.a.useState((null===a||void 0===a?void 0:a.stat)||" "),y=Object(o.a)(E,2),S=y[0],T=y[1],R=c.a.useState((null===a||void 0===a?void 0:a.passive)||" "),F=Object(o.a)(R,2),w=F[0],M=F[1],W=b.length>1,L=x.length>1,B=v.length>10,k=D.length>1,P=S.length>1,_=w.length>1;return Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l(!0),W&&L&&B&&k&&P&&_){var t={id:Math.random(),name:b,mainImg:x,history:v,type:D,stat:S,passive:w};n(t),l(!1),console.log(t)}},className:"weaponForm",children:[Object(m.jsx)("p",{className:"formIntro",children:"create"===t?"Agrega el arma correspondiente a este personaje":"Edita los datos del arma"}),Object(m.jsxs)("label",{children:["Nombre del arma",Object(m.jsx)("input",{type:"text",name:"name",onChange:function(e){u(e.target.value)},value:b}),r&&!W&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del arma"})]}),Object(m.jsxs)("label",{children:["Imagen del arma",Object(m.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){g(e.target.value)},value:x}),r&&!L&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(m.jsxs)("label",{children:["Historia del arma",Object(m.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){N(e.target.value)},value:v}),r&&!B&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en la historia del personaje"})]}),Object(m.jsxs)("label",{children:["Tipo de arma",Object(m.jsxs)("select",{name:"arma",value:D,onChange:function(e){I(e.target.value)},children:[Object(m.jsx)("option",{value:" ",children:"ELIGE EL TIPO DE ARMA"}),Object(m.jsx)("option",{value:"Mandoble",children:"MANDOBLE"}),Object(m.jsx)("option",{value:"Arco",children:"ARCO"}),Object(m.jsx)("option",{value:"Espada",children:"ESPADA"}),Object(m.jsx)("option",{value:"Lanza",children:"LANZA"})]}),r&&!k&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el tipo de arma"})]}),Object(m.jsxs)("label",{children:["Stat secundario",Object(m.jsx)("input",{type:"text",name:"type",onChange:function(e){T(e.target.value)},value:S}),r&&!P&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat del arma"})]}),Object(m.jsxs)("label",{children:["Efecto pasivo",Object(m.jsx)("textarea",{className:"largeInput",name:"passive",onChange:function(e){M(e.target.value)},value:w}),r&&!_&&Object(m.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto pasivo del arma"})]}),Object(m.jsx)("button",{className:"button",children:"create"===t?"A\xd1ADIR ARMA":"GUARDAR CAMBIOS"})]})},E=(a(49),function(e){var t=e.id,a=e.name,n=e.mainImg,c=(e.history,e.stat),i=e.passive,s=e.onDelete,r=e.onEdit,l=Object(h.g)();return Object(m.jsxs)("div",{className:"characterDetailsWeapon",children:[Object(m.jsxs)("section",{className:"mainInfoWeapon",children:[Object(m.jsx)("img",{className:"mainInfoWeaponImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){l.push("/weaponDetails/".concat(t))}}),Object(m.jsxs)("div",{className:"mainInfoWeapon--textDiv",children:[Object(m.jsx)("p",{className:"mainInfoArtifact--text",children:a}),Object(m.jsx)("p",{className:"subtitleMainInfo",children:c}),Object(m.jsxs)("div",{className:"buttonsWeaponDiv",children:[Object(m.jsx)("button",{className:"buttonComponents button",onClick:function(){r&&r(t)},children:"EDITAR"}),Object(m.jsx)("button",{className:"buttonComponents button deleteButton",onClick:function(){s&&s(t)},children:"ELIMINAR"})]})]})]}),Object(m.jsxs)("div",{className:"detailsWeapon",children:[Object(m.jsx)("p",{className:"infoStatsTitle",children:"Efecto pasivo"}),Object(m.jsx)("p",{className:"infoStatsText",children:i})]})]})}),y=function(){var e=Object(h.h)().id;return parseFloat(e)},S=function(e){var t=y(),a=Object(h.g)(),n=e.find((function(e){return e.id===t}));return n||a.push("/error404"),n},T=function(e){var t,a=e.list,n=e.onCreateArtifact,i=e.onEditArtifact,s=e.onDeleteArtifact,j=e.onCreateWeapon,d=e.onDeleteWeapon,b=(Object(h.g)(),y()),u=S(a);"pyro"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterPyro"),"cryo"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterCryo"),"electro"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterElectro"),"anemo"===(null===u||void 0===u?void 0:u.elementC)&&(t="titleElemDetail titleCharacterDetail nameCharacterAnemo");var O=c.a.useState(a),x=Object(o.a)(O,2),g=x[0],p=x[1],f=c.a.useState("none"),A=Object(o.a)(f,2),T=A[0],R=A[1],F=c.a.useState(null),w=Object(o.a)(F,2),M=w[0],W=w[1],L=c.a.useState("none"),B=Object(o.a)(L,2),k=B[0],P=B[1],_=c.a.useState(null),U=Object(o.a)(_,2),z=U[0],G=U[1],Y=c.a.useState([]),q=Object(o.a)(Y,2),H=q[0],J=q[1];if(!u)return null;var Z=u.name,V=u.img,K=u.history,Q=u.role,X=u.constelacion,$=u.city,ee=u.artifacts,te=u.weapon,ae=u.trailer,ne=u.id;H=ee;var ce,ie,se,re=function(e){G(e),P("edit"),console.log("estas en edit",e)},le=function(e){s(ne,e)};te&&(ce=te.type,ie=te.name,se=te.id);return Object(m.jsxs)("div",{className:"characterDetails",children:[Object(m.jsx)(v,{text:"PERFIL"}),Object(m.jsxs)("div",{className:"mainInfoCharacter",children:[Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/").concat(V)}),Object(m.jsxs)("div",{className:"biographyDiv",children:[Object(m.jsx)("h2",{className:t,children:Z}),Object(m.jsx)("p",{className:"biographyText",children:K})]}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsx)(C,{title:"Rareza",stars:"".concat("/Taller1WA2","/img/5stars.png")}),Object(m.jsx)(C,{title:"Role",text:Q}),Object(m.jsx)(C,{title:"Arma",text:ce}),Object(m.jsx)(C,{title:"Constelaci\xf3n",text:X}),Object(m.jsx)(C,{title:"Regi\xf3n natal",text:$})]})]}),Object(m.jsxs)("section",{className:"weaponDiv",children:[Object(m.jsx)(v,{text:"ARMA"}),"none"==T&&!(null===te||void 0===te?void 0:te.name)&&Object(m.jsx)("button",{className:"button buttonAddComponent",onClick:function(e){R("create")},children:"A\xd1ADIR"}),Object(m.jsxs)("section",{className:"weaponFormDiv",children:[!(null===te||void 0===te?void 0:te.name)&&Object(m.jsx)("img",{className:"noSomething",src:"".concat("/Taller1WA2","/img/noWeapon.png")}),("create"===T||"edit"===T)&&Object(m.jsx)(I,{typeWF:T,editId:M,weaponElem:te,onCreate:function(e){j(b,e),R("none")},onEdit:function(e,t){var a=g.slice(),n=g.findIndex((function(e){return e.id===M}));a[n]=Object(r.a)(Object(r.a)({},g[n]),t),p(a),R("none")}})]}),"none"==T&&te&&void 0!=te&&Object(m.jsx)("section",{className:"weaponElem",children:se&&ce&&ie&&Object(m.jsx)(E,{id:se,name:te.name,mainImg:te.mainImg,history:te.history,stat:te.stat,passive:te.passive,onEdit:function(e){W(e),R("edit"),console.log("estas en edit",e)},onDelete:function(){d(ne)}},se)})]}),Object(m.jsxs)("section",{className:"ArtifactDiv",children:[Object(m.jsx)(v,{text:"ARTEFACTOS"}),"none"==k&&Object(m.jsx)("button",{className:"button buttonAddComponent",onClick:function(e){P("create")},children:"A\xd1ADIR"}),Object(m.jsxs)("div",{className:"artifactFormDiv",children:[ee.length<1&&Object(m.jsx)("img",{className:"noSomething",src:"".concat("/Taller1WA2","/img/noArtifact.png")}),("create"===k||"edit"===k)&&Object(m.jsx)(N,{type:k,editId:z,artifactElem:ee,onCreate:function(e){var t=[].concat(Object(l.a)(H),[{id:Math.random(),name:e.name,mainImg:e.mainImg,arena:e.arena,copa:e.copa,tiara:e.tiara,twoItems:e.twoItems,fourItems:e.fourItems,domain:e.domain,notes:e.notes}]);J(t),n(b,e),P("none")},onEdit:function(e,t){z&&i(ne,z,t),P("none"),G(null)}})]}),"none"===k&&Object(m.jsx)("section",{className:"artifactElem",children:ee.map((function(e){return Object(m.jsx)(D,{id:e.id,name:e.name,imgFlor:e.mainImg,arena:e.arena,copa:e.copa,tiara:e.tiara,onEdit:re,onDelete:le},e.id)}))})]}),Object(m.jsxs)("div",{className:"TrailerDiv",children:[Object(m.jsx)(v,{text:"TRAILER"}),Object(m.jsx)("iframe",{className:"videoC",width:"813",height:"457",src:ae,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})]})},R=(a(50),function(e){var t=e.list,a=(y(),S(t));if(!a)return null;var n=a.name,c=a.mainImg,i=a.twoItems,s=a.fourItems,r=a.domain,l=a.notes;return Object(m.jsxs)("div",{className:"ArtifactsDetails",children:[Object(m.jsx)(v,{text:"SET DE ARTEFACTOS"}),Object(m.jsxs)("section",{className:"artifactsDetailsDiv",children:[Object(m.jsxs)("div",{className:"imgSectionDiv",children:[Object(m.jsx)("img",{className:"imgArtifactDetails",src:"".concat("/Taller1WA2","/img/").concat(c)}),Object(m.jsxs)("div",{className:"domainSection",children:[Object(m.jsx)("h3",{className:"titleStats titleDomain",children:"Dominio donde se puede conseguir"}),Object(m.jsx)("p",{className:" textBody textArtifactDetails",children:r})]})]}),Object(m.jsxs)("div",{className:"artifactInfoDiv",children:[Object(m.jsx)("h2",{className:"titleElemDetail titleArtfiact",children:n}),Object(m.jsx)("h4",{className:"titleStats titleDomain",children:"2 piezas"}),Object(m.jsx)("p",{className:"textBody textArtifactDetails",children:i}),Object(m.jsx)("h4",{className:"titleStats titleDomain",children:"4 piezas"}),Object(m.jsx)("p",{className:"textBody textArtifactDetails",children:s})]}),Object(m.jsxs)("div",{className:"artifactNotes",children:[Object(m.jsx)("h4",{className:"titleStats titleDomain",children:"NOTAS"}),Object(m.jsx)("h4",{className:"titleStats titleDomain",children:"Bono de 4 piezas"}),Object(m.jsx)("p",{className:"textBody textArtifactDetails",children:l})]})]})]})}),F=(a(51),function(e){var t=e.weapon,a=t.name,n=t.mainImg,c=t.history,i=t.type,s=t.stat,r=t.passive;return Object(m.jsxs)("div",{className:"weaponDetails",children:[Object(m.jsx)(v,{text:"ARMA"}),Object(m.jsxs)("div",{className:"weaponMainInfoDiv",children:[Object(m.jsxs)("section",{className:"weaponDescriptionDiv",children:[Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/").concat(n)}),Object(m.jsxs)("div",{className:"weaponDescriptionTextDiv",children:[Object(m.jsx)("h2",{className:"titleElemDetail",children:a}),Object(m.jsx)("p",{className:" textBody",children:c})]})]}),Object(m.jsxs)("section",{className:"details",children:[Object(m.jsx)(C,{title:"Rareza",stars:"".concat("/Taller1WA2","/img/5stars.png")}),Object(m.jsx)(C,{title:"Tipo",text:i}),Object(m.jsx)(C,{title:"Obtenci\xf3n",text:"Gacha"}),Object(m.jsx)(C,{title:"Tipo de stat secundario",text:s})]})]}),Object(m.jsxs)("section",{className:"weaponPassiveDiv",children:[Object(m.jsx)(v,{text:"EFECTO PASIVO"}),Object(m.jsx)("p",{className:"textBody weaponPassive--text",children:r})]})]})}),w=(a(52),function(){return Object(m.jsxs)("section",{className:"footer",children:[Object(m.jsxs)("div",{className:"footerImgDiv",children:[Object(m.jsx)("img",{className:"footerImg",src:"".concat("/Taller1WA2","/img/logoMihoyo.png")}),Object(m.jsx)("img",{className:"footerImg",src:"".concat("/Taller1WA2","/img/navLogo.png")})]}),Object(m.jsxs)("div",{className:"footerTextDiv",children:[Object(m.jsx)("p",{className:"footerText footerCopyright",children:"Copyright \xa9 2020 miHoYo All Rights Reserved"}),Object(m.jsx)("p",{className:"footerText footerTextBody",children:'"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc. Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.'}),Object(m.jsx)("img",{className:"footerLogos",src:"".concat("/Taller1WA2","/img/otherLogos.png")})]})]})}),M=a(19);var W=function(){Object(h.g)();var e,t=c.a.useState("create"),a=Object(o.a)(t,2),n=a[0],i=a[1],s=c.a.useState(null),N=Object(o.a)(s,2),C=N[0],A=N[1],D=c.a.useState([{id:Math.random(),name:"DILUC",elementC:"pyro",img:"diluc.png",history:'Diluc Ragnvindr es el due\xf1o actual de Vi\xf1edo del Amanecer y un noble de alta estima en la sociedad de Mondstadt. Aunque parece ap\xe1tico sobre los asuntos de la ciudad, la protege de noche como el rumoreado "H\xe9roe Oscuro".\n      Como el hombre m\xe1s rico de Mondstadt, Diluc siempre muestra su lado m\xe1s exquisito. Sin embargo, su verdadera naturaleza es la de un guerrero con una gran determinaci\xf3n. Protege a Mondstadt con todas sus fuerzas en todo momento.',role:"DPS",constelacion:"Noctua",city:"Mondstadt",trailer:"https://www.youtube.com/embed/1TfbiDo7N4k",artifacts:[]},{id:Math.random(),name:"BENNET",elementC:"pyro",img:"bennet.png",history:'Un hu\xe9rfano descubierto por un anciano aventurero cuando era un beb\xe9, Bennett se crio en el Gremio de Aventureros de Mondstadt. \xc9l es el \xfanico miembro de la "Brigada de Benny", ya que todos los dem\xe1s dejaron el equipo despu\xe9s de experimentar la desgracia constante que lo sigue.',role:"BURST SUPPORT",constelacion:"Rota Calamitas",city:"Mondstadt",trailer:"https://www.youtube.com/embed/UW8lG_wNFIY",artifacts:[]}]),I=Object(o.a)(D,2),E=I[0],y=I[1],S=E.filter((function(e){if("pyro"===e.elementC)return!0})),W=E.filter((function(e){if("electro"===e.elementC)return!0})),L=E.filter((function(e){if("cryo"===e.elementC)return!0})),B=E.filter((function(e){if("anemo"===e.elementC)return!0})),k=[];E.forEach((function(e){e.artifacts.forEach((function(e){k.push(e)}))}));var P=[];E.forEach((function(e){e.weapon&&P.push(e.weapon)}));var _=P.filter((function(e){if("Mandoble"===(null===e||void 0===e?void 0:e.type))return!0})),U=P.filter((function(e){if("Lanza"===(null===e||void 0===e?void 0:e.type))return!0})),z=P.filter((function(e){if("Espada"===(null===e||void 0===e?void 0:e.type))return!0}));P.filter((function(e){if("Arco"===(null===e||void 0===e?void 0:e.type))return!0})),E.forEach((function(t){t&&t.weapon&&(e=t.weapon)})),console.log(e);var G=function(e){var t=E.filter((function(t){return t.id!==e}));y(t)},Y=function(e){A(e),i("edit"),console.log("estas en edit",e)},q={labels:["PYRO","ELECTRO","CRYO","ANEMO","HYDRO","GEO"],datasets:[{label:"# de personajes",data:[S.length,W.length,L.length,B.length],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(153, 102, 255, 0.2)","rgba(75, 192, 192, 0.2)","rgba(52, 235, 128, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(153, 102, 255, 1)","rgba(75, 192, 192, 1)","rgba(52, 235, 128, 1)","rgba(54, 162, 235, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},H=function(e){var t={};return e.forEach((function(e){t[e.name]=e.artifacts.length})),{labels:Object.keys(t),datasets:[{label:"# of artefactos x personaje",data:Object.values(t),backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]}}(E);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)(j.b,{to:"/",children:Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/navLogo.png"),className:"navLogo"})}),Object(m.jsx)(d,{text:"ARMAS",url:"/weaponsList"}),Object(m.jsx)(d,{text:"ARTEFACTOS",url:"/artifactsList"}),Object(m.jsx)(d,{text:"FORMULARIO",url:"/characterForm"}),Object(m.jsx)(d,{text:"ESTAD\xcdSTICAS",url:"/statistics"}),Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/userIcon.png"),className:"userIcon"})]}),Object(m.jsxs)(h.d,{children:[Object(m.jsxs)(h.b,{path:"/",exact:!0,children:[Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/bannerImg.jpg"),className:"banner"}),Object(m.jsxs)("article",{className:"info",children:[Object(m.jsx)(b,{text:"PERSONAJES"}),S.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{text:"PYRO",img:"pyroIcon.png"}),Object(m.jsx)("article",{className:"componentsDiv",children:S.map((function(e){return Object(m.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:G,onEdit:Y},e.id)}))})]}),W.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{text:"ELECTRO",img:"pyroIcon.png"}),Object(m.jsx)("article",{className:"componentsDiv",children:W.map((function(e){return Object(m.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:G,onEdit:Y},e.id)}))})]}),L.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{text:"CRYO",img:"pyroIcon.png"}),Object(m.jsx)("article",{className:"componentsDiv",children:L.map((function(e){return Object(m.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:G,onEdit:Y},e.id)}))})]}),B.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{text:"ANEMO",img:"anemoIcon.png"}),Object(m.jsx)("article",{className:"componentsDiv",children:B.map((function(e){return Object(m.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:G,onEdit:Y},e.id)}))})]})]})]}),Object(m.jsx)(h.b,{path:"/characterForm",children:Object(m.jsxs)("article",{className:"info",children:[Object(m.jsx)("img",{src:"".concat("/Taller1WA2","/img/bannerForm.png"),className:"banner"}),Object(m.jsx)(b,{text:"FORMULARIO"}),Object(m.jsx)(x,{editId:C,characterElem:E,type:n,onCreate:function(e){console.log("Se creo",e);var t=[].concat(Object(l.a)(E),[{id:Math.random(),name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,city:e.city,trailer:e.trailer,artifacts:[],weapon:{id:0,name:"",mainImg:"",history:"",type:"",stat:"",passive:""}}]);y(t)},onEdit:function(e,t){console.log(e,t.name);var a=E.slice(),n=E.findIndex((function(e){return e.id===C}));a[n]=Object(r.a)(Object(r.a)({},E[n]),t),y(a),i("create"),A(null)}})]})}),Object(m.jsx)(h.b,{path:"/characterDetails/:id",children:Object(m.jsx)(T,{list:E,onCreateArtifact:function(e,t){var a=E.slice(),n=E.findIndex((function(t){return t.id===e}));a[n]=Object(r.a)(Object(r.a)({},E[n]),{},{artifacts:[].concat(Object(l.a)(E[n].artifacts),[t])}),y(a)},onEditArtifact:function(e,t,a){var n=E.slice(),c=E.findIndex((function(t){return t.id===e})),i=n[c].artifacts.findIndex((function(e){return e.id===t}));y((function(e){var t=e;return t[c].artifacts[i]=a,Object(l.a)(t)}))},onDeleteArtifact:function(e,t){var a=E.findIndex((function(t){return t.id===e})),n=E[a].artifacts.filter((function(e){return e.id!==t}));y((function(e){var t=e;return t[a].artifacts=n,Object(l.a)(t)}))},onCreateWeapon:function(e,t){var a=E.slice(),n=E.findIndex((function(t){return t.id===e}));a[n]=Object(r.a)(Object(r.a)({},E[n]),{},{weapon:t}),y(a)},onDeleteWeapon:function(e){E.slice();var t=E.findIndex((function(t){return t.id===e}));y((function(e){var a=e,n=a[t];return delete n.weapon,a[t]=n,console.log(a),Object(l.a)(a)}))}})}),Object(m.jsx)(h.b,{path:"/weaponsList",children:Object(m.jsxs)("article",{className:"info",children:[Object(m.jsx)(b,{text:"ARMAS"}),_.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"titlesSections normalTitles",children:"MANDOBLE"}),Object(m.jsx)("article",{className:"componentsDiv",children:_.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]}),U.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"titlesSections normalTitles",children:"LANZA"}),Object(m.jsx)("article",{className:"componentsDiv",children:U.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]}),z.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"titlesSections normalTitles",children:"ESPADA"}),Object(m.jsx)("article",{className:"componentsDiv",children:z.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]}),z.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"titlesSections normalTitles",children:"ESPADA"}),Object(m.jsx)("article",{className:"componentsDiv",children:z.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]})]})}),Object(m.jsx)(h.b,{path:"/artifactsList",children:Object(m.jsxs)("article",{className:"info",children:[Object(m.jsx)(b,{text:"ARTEFACTOS"}),Object(m.jsx)("article",{className:"componentsDiv",children:k.map((function(e){return Object(m.jsx)(p,{id:e.id,name:e.name,mainImg:e.mainImg},e.id)}))})]})}),Object(m.jsx)(h.b,{path:"/artifactsDetails/:id",children:Object(m.jsx)(R,{list:k})}),Object(m.jsx)(h.b,{path:"/weaponDetails/:id",children:e&&Object(m.jsx)(F,{weapon:e})}),Object(m.jsx)(h.b,{path:"/statistics",children:Object(m.jsxs)("article",{className:"info",children:[Object(m.jsx)(b,{text:"ESTAD\xcdSTICAS"}),Object(m.jsxs)("div",{className:"characterDetails",children:[Object(m.jsxs)("div",{className:"graphicDiv",children:[Object(m.jsx)(v,{text:"ELEMENTOS"}),Object(m.jsx)(M.a,{className:"graphicBar",data:q,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}}})]}),Object(m.jsxs)("div",{className:"graphicDiv",children:[Object(m.jsx)(v,{text:"ARTEFACTOS POR PERSONAJE"}),Object(m.jsx)(M.a,{className:"graphicBar",data:H,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}}})]})]})]})}),Object(m.jsx)(h.b,{path:"/error404",children:Object(m.jsx)(f,{})}),Object(m.jsx)(h.a,{to:"/error404"})]})]}),Object(m.jsx)(w,{})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(W,{})})}),document.getElementById("root")),L()}]),[[53,1,2]]]);
//# sourceMappingURL=main.f75a53a4.chunk.js.map