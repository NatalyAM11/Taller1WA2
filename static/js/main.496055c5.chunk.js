(this.webpackJsonptaller1=this.webpackJsonptaller1||[]).push([[0],Array(28).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(21),i=a.n(s),r=(a(28),a(7)),l=a(4),o=a(2),j=(a(29),a(30),a(11)),d=a(0),m=function(e){var t=e.text,a=(e.active,e.url);return Object(d.jsx)(j.c,{className:"Link",activeClassName:"Link--active",to:a,children:t})},b=(a(37),function(e){var t=e.text;return Object(d.jsxs)("div",{className:"MainTitle",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/titleFlechaD.png"),className:"flechasTitle"}),Object(d.jsx)("h3",{className:"titleMain",children:t}),Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/titleFlechaI.png"),className:"flechasTitle"})]})}),u=(a(38),function(e){var t=e.text,a=e.img;return Object(d.jsxs)("div",{className:"ElementTitle",children:[Object(d.jsx)("img",{className:"imgElementTitle",src:"".concat("/Taller1WA2","/img/").concat(a)}),Object(d.jsx)("h2",{className:"titleElement titlesSections",children:t})]})}),h=(a(39),a(3)),O=function(e){var t=e.id,a=e.name,n=(e.elementC,e.img),c=e.onDelete,s=e.onEdit,i=Object(h.g)();return Object(d.jsxs)("div",{className:"character",children:[Object(d.jsxs)("div",{className:"onlyCharacter",onClick:function(){i.push("/characterDetails/".concat(t))},children:[Object(d.jsx)("h2",{className:"characterName titlesAllComp",children:a}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"characterImg",src:"".concat("/Taller1WA2","/img/").concat(n)})})]}),Object(d.jsxs)("div",{className:"buttonsDiv",children:[Object(d.jsxs)(d.Fragment,{children:[s&&Object(d.jsx)("button",{className:"componentsButton",onClick:function(){i.push("/characterForm"),s&&s(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/editIcon.png")})}),c&&Object(d.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){c&&c(t)},children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/deleteIcon.png")})})]}),Object(d.jsx)("button",{className:"componentsButton",children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/likeIcon.png")})})]})]})},x=(a(40),function(e){var t=e.editId,a=e.characterElem,n=e.type,s=e.onCreate,i=e.onEdit,r=Object(h.g)(),l=a.find((function(e){return e.id===t})),j=c.a.useState(!1),m=Object(o.a)(j,2),b=m[0],u=m[1],O=c.a.useState((null===l||void 0===l?void 0:l.name)||" "),x=Object(o.a)(O,2),p=x[0],g=x[1],f=c.a.useState((null===l||void 0===l?void 0:l.elementC)||" "),v=Object(o.a)(f,2),N=v[0],A=v[1],C=c.a.useState((null===l||void 0===l?void 0:l.img)||" "),D=Object(o.a)(C,2),I=D[0],E=D[1],S=c.a.useState((null===l||void 0===l?void 0:l.history)||" "),y=Object(o.a)(S,2),T=y[0],R=y[1],F=c.a.useState((null===l||void 0===l?void 0:l.role)||" "),w=Object(o.a)(F,2),M=w[0],L=w[1],W=c.a.useState((null===l||void 0===l?void 0:l.city)||" "),B=Object(o.a)(W,2),k=B[0],_=B[1],P=c.a.useState((null===l||void 0===l?void 0:l.constelacion)||" "),U=Object(o.a)(P,2),z=U[0],G=U[1],Y=c.a.useState((null===l||void 0===l?void 0:l.trailer)||" "),q=Object(o.a)(Y,2),H=q[0],J=q[1],Z=p.length>1,V=I.length>5,K=N.length>1,Q=T.length>10,X=M.length>2,$=k.length>1,ee=z.length>1,te=H.length>1;return Object(d.jsxs)("form",{className:"characterForm",onSubmit:function(e){e.preventDefault(),u(!0),"create"===n&&Z&&V&&K&&Q&&X&&$&&ee&&te?(console.log("valid"),s({name:p,elementC:N,img:I,history:T,role:M,constelacion:z,city:k,trailer:H}),g(" "),E(" "),u(!1),r.push("/")):"edit"===n&&Z?null!==t&&(i(t,{name:p,elementC:N,img:I,history:T,role:M,constelacion:z,city:k,trailer:H}),r.push("/characterDetails/".concat(null===l||void 0===l?void 0:l.id))):console.log("invalid")},children:[Object(d.jsx)("p",{className:"formIntro",children:"create"===n?"Agrega a los personajes que te acompa\xf1aran en tus siguientes aventuras":"Edita los datos del personaje"}),Object(d.jsxs)("label",{children:["Nombre",Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){g(e.target.value)},value:p}),b&&!Z&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del personaje"})]}),Object(d.jsxs)("label",{children:["Elemento",Object(d.jsxs)("select",{name:"elementC",value:N,onChange:function(e){console.log(e.target.value),A(e.target.value)},children:[Object(d.jsx)("option",{value:" ",children:"ELIGE UN ELEMENTO"}),Object(d.jsx)("option",{value:"pyro",children:"PYRO"}),Object(d.jsx)("option",{value:"electro",children:"ELECTRO"}),Object(d.jsx)("option",{value:"cryo",children:"CRYO"}),Object(d.jsx)("option",{value:"anemo",children:"ANEMO"})]}),b&&!K&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escoger el elemento del personaje"})]}),Object(d.jsxs)("label",{children:["Imagen",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){E(e.target.value)},value:I}),b&&!V&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(d.jsxs)("label",{children:["Perfil",Object(d.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){R(e.target.value)},value:T}),b&&!Q&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en el perfil del personaje"})]}),Object(d.jsxs)("label",{children:["Rol",Object(d.jsx)("input",{type:"text",name:"rol",onChange:function(e){L(e.target.value)},value:M}),b&&!X&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el rol del personaje"})]}),Object(d.jsxs)("label",{children:["Ciudad natal",Object(d.jsxs)("select",{name:"arma",value:k,onChange:function(e){_(e.target.value)},children:[Object(d.jsx)("option",{value:" ",children:"ELIGE LA CIUDAD"}),Object(d.jsx)("option",{value:"Mondstadt",children:"MONDSTADT"}),Object(d.jsx)("option",{value:"Liyue",children:"LIYUE"}),Object(d.jsx)("option",{value:"Inazuma",children:"INAZUMA"})]}),b&&!$&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escoger la ciudad natal del personaje"})]}),Object(d.jsxs)("label",{children:["Constelaci\xf3n",Object(d.jsx)("input",{type:"text",name:"constalletion",onChange:function(e){G(e.target.value)},value:z}),b&&!ee&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre de la constelaci\xf3n del personaje"})]}),Object(d.jsxs)("label",{children:["URL Trailer",Object(d.jsx)("input",{type:"text",name:"urlTrailer",onChange:function(e){J(e.target.value)},value:H}),b&&!te&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir la URL del trailer del personaje"})]}),Object(d.jsx)("button",{className:"button",children:"create"===n?"CREAR":"GUARDAR CAMBIOS"})]})}),p=(a(41),function(e){var t=e.id,a=e.name,n=e.img,c=e.onDelete,s=e.onEdit,i=Object(h.g)();return Object(d.jsxs)("div",{className:"weapon",children:[Object(d.jsxs)("div",{className:"weaponImgDiv",children:[Object(d.jsx)("h2",{className:"weaponName titlesAllComp",children:a}),Object(d.jsx)("img",{className:"weaponImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){i.push("/weaponDetails/".concat(t))}})]}),s&&Object(d.jsx)("button",{className:"componentsButton",onClick:function(){s&&s(t)},children:"EDIT"}),c&&Object(d.jsx)("button",{className:"componentsButton deleteButton",onClick:function(){c&&c(t)},children:"DELETE"})]})}),g=(a(42),function(e){var t=e.id,a=e.name,n=e.mainImg,c=(e.onDelete,e.onEdit,Object(h.g)());return Object(d.jsxs)("div",{className:"artifacts",children:[Object(d.jsx)("h2",{className:"artifactName titlesAllComp",children:a}),Object(d.jsx)("img",{className:"artifactImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){c.push("/artifactsDetails/".concat(t))}})]})}),f=(a(43),function(){return Object(d.jsxs)("div",{className:"Error404",children:[Object(d.jsx)("h1",{children:"ERROR 404"}),Object(d.jsx)("h2",{children:"No se encontro la p\xe1gina"})]})}),v=(a(44),a(45),function(e){var t=e.text;return Object(d.jsxs)("div",{className:"TitleSectionC",children:[Object(d.jsx)("img",{className:"imgTitleSectionC",src:"".concat("/Taller1WA2","/img/iconTitleSection.png")}),Object(d.jsx)("h2",{className:"textTitleSection",children:t})]})}),N=function(e){var t=e.type,a=e.editId,n=e.artifactElem,s=e.onCreate,i=e.onEdit,r=n.find((function(e){return e.id===a})),l=c.a.useState(!1),j=Object(o.a)(l,2),m=j[0],b=j[1],u=c.a.useState((null===r||void 0===r?void 0:r.name)||" "),h=Object(o.a)(u,2),O=h[0],x=h[1],p=c.a.useState((null===r||void 0===r?void 0:r.mainImg)||" "),g=Object(o.a)(p,2),f=g[0],v=g[1],N=c.a.useState((null===r||void 0===r?void 0:r.arena)||" "),A=Object(o.a)(N,2),C=A[0],D=A[1],I=c.a.useState((null===r||void 0===r?void 0:r.copa)||" "),E=Object(o.a)(I,2),S=E[0],y=E[1],T=c.a.useState((null===r||void 0===r?void 0:r.tiara)||" "),R=Object(o.a)(T,2),F=R[0],w=R[1],M=c.a.useState((null===r||void 0===r?void 0:r.twoItems)||" "),L=Object(o.a)(M,2),W=L[0],B=L[1],k=c.a.useState((null===r||void 0===r?void 0:r.fourItems)||" "),_=Object(o.a)(k,2),P=_[0],U=_[1],z=c.a.useState((null===r||void 0===r?void 0:r.domain)||" "),G=Object(o.a)(z,2),Y=G[0],q=G[1],H=c.a.useState((null===r||void 0===r?void 0:r.notes)||" "),J=Object(o.a)(H,2),Z=J[0],V=J[1],K=O.length>1,Q=f.length>1,X=C.length>1,$=S.length>1,ee=F.length>1,te=W.length>1,ae=P.length>10,ne=Y.length>1,ce=Z.length>1;return Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b(!0),"create"==t&&K&&Q&&X&&$&&ee){var n={id:Math.random(),name:O,mainImg:f,arena:C,copa:S,tiara:F,twoItems:W,fourItems:P,domain:Y,notes:Z};s(n),b(!1),console.log(n)}else"edit"===t&&K&&Q&&X&&$&&ee?null!==a&&i(a,{id:a,name:O,mainImg:f,arena:C,copa:S,tiara:F,twoItems:W,fourItems:P,domain:Y,notes:Z}):console.log("invalid")},className:"artifactForm",children:[Object(d.jsx)("p",{className:"formIntro",children:"create"===t?"Agrega el set correspondiente a este personaje":"Edita los datos del artefacto"}),Object(d.jsxs)("label",{children:["Nombre del set",Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){x(e.target.value)},value:O}),m&&!K&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del set de artefactos"})]}),Object(d.jsxs)("label",{children:["Imagen de la flor",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){v(e.target.value)},value:f}),m&&!Q&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(d.jsxs)("label",{children:["2 piezas",Object(d.jsx)("input",{type:"text",name:"twoItems",onChange:function(e){B(e.target.value)},value:W}),m&&!te&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto de las 2 piezas"})]}),Object(d.jsxs)("label",{children:["4 piezas",Object(d.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){U(e.target.value)},value:P}),m&&!ae&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto de las 4 piezas"})]}),Object(d.jsxs)("label",{children:["Dominio",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){q(e.target.value)},value:Y}),m&&!ne&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el dominio del set de artefactos"})]}),Object(d.jsxs)("label",{children:["Notas del set",Object(d.jsx)("textarea",{className:"largeInput",name:"notes",onChange:function(e){V(e.target.value)},value:Z}),m&&!ce&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en las notas del set"})]}),Object(d.jsx)("h4",{className:"subtitleForm",children:"Stats"}),Object(d.jsxs)("label",{children:["Arena",Object(d.jsx)("input",{type:"text",name:"arena",onChange:function(e){D(e.target.value)},value:C}),m&&!X&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat de la arena"})]}),Object(d.jsxs)("label",{children:["C\xe1liz",Object(d.jsx)("input",{type:"text",name:"caliz",onChange:function(e){y(e.target.value)},value:S}),m&&!$&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat del c\xe1liz"})]}),Object(d.jsxs)("label",{children:["Tiara",Object(d.jsx)("input",{type:"text",name:"tiara",onChange:function(e){w(e.target.value)},value:F}),m&&!ee&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat de la tiara"})]}),Object(d.jsx)("button",{className:"button",children:"create"===t?"A\xd1ADIR ARTEFACTO":"GUARDAR CAMBIOS"})]})},A=(a(46),function(e){var t=e.text,a=e.title,n=e.stars;return Object(d.jsxs)("div",{className:"DetailsObj",children:[Object(d.jsx)("h4",{className:"DetailsObj--title",children:a}),Object(d.jsx)("p",{className:"DetailsObj--text",children:t}),Object(d.jsx)("img",{src:n})]})}),C=(a(47),a(48),function(e){var t=e.title,a=e.text,n=e.img;return Object(d.jsxs)("div",{className:"statsArtifacts",children:[Object(d.jsx)("img",{src:n}),Object(d.jsxs)("div",{className:"infoStats",children:[Object(d.jsx)("p",{className:"infoStatsTitle",children:t}),Object(d.jsx)("p",{className:"infoStatsText",children:a})]})]})}),D=function(e){var t=e.id,a=e.name,n=e.imgFlor,c=e.arena,s=e.copa,i=e.tiara,r=e.onDelete,l=e.onEdit,o=Object(h.g)();return Object(d.jsx)("div",{className:"ArtifactsCharacter",children:Object(d.jsxs)("div",{className:"AllInfoDiv",children:[Object(d.jsxs)("section",{className:"mainInfoArtifact",children:[Object(d.jsx)("img",{className:"mainInfoArtifactImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){o.push("/artifactsDetails/".concat(t))}}),Object(d.jsxs)("div",{className:"mainInfoArtifact--textDiv",children:[Object(d.jsx)("p",{className:"mainInfoArtifact--text",children:a}),Object(d.jsx)("p",{className:"subtitleMainInfo",children:"4 set items"}),Object(d.jsxs)("div",{className:"buttonsArtifactDiv",children:[Object(d.jsx)("button",{className:"buttonComponents button",onClick:function(){l&&l(t)},children:"EDITAR"}),Object(d.jsx)("button",{className:"buttonComponents button deleteButton",onClick:function(){r&&r(t)},children:"ELIMINAR"})]})]})]}),Object(d.jsxs)("section",{className:"detailsArtifacts",children:[Object(d.jsx)("h3",{className:"titleStats",children:"Stats principales"}),Object(d.jsx)(C,{title:"Arenas de E\xf3n",text:c,img:"".concat("/Taller1WA2","/img/arena.png")}),Object(d.jsx)(C,{title:"C\xe1liz de Eonothem",text:s,img:"".concat("/Taller1WA2","/img/copa.png")}),Object(d.jsx)(C,{title:"Tiara de Logos",text:i,img:"".concat("/Taller1WA2","/img/tiara.png")})]})]})})},I=function(e){var t=e.typeWF,a=(e.editId,e.weaponElem),n=e.onCreate,s=(e.onEdit,c.a.useState(!1)),i=Object(o.a)(s,2),r=i[0],l=i[1],j=c.a.useState((null===a||void 0===a?void 0:a.name)||" "),m=Object(o.a)(j,2),b=m[0],u=m[1],h=c.a.useState((null===a||void 0===a?void 0:a.mainImg)||" "),O=Object(o.a)(h,2),x=O[0],p=O[1],g=c.a.useState((null===a||void 0===a?void 0:a.history)||" "),f=Object(o.a)(g,2),v=f[0],N=f[1],A=c.a.useState((null===a||void 0===a?void 0:a.type)||" "),C=Object(o.a)(A,2),D=C[0],I=C[1],E=c.a.useState((null===a||void 0===a?void 0:a.stat)||" "),S=Object(o.a)(E,2),y=S[0],T=S[1],R=c.a.useState((null===a||void 0===a?void 0:a.passive)||" "),F=Object(o.a)(R,2),w=F[0],M=F[1],L=b.length>1,W=x.length>1,B=v.length>10,k=D.length>1,_=y.length>1,P=w.length>1;return Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l(!0),L&&W&&B&&k&&_&&P){var t={id:Math.random(),name:b,mainImg:x,history:v,type:D,stat:y,passive:w};n(t),l(!1),console.log(t)}},className:"weaponForm",children:[Object(d.jsx)("p",{className:"formIntro",children:"create"===t?"Agrega el arma correspondiente a este personaje":"Edita los datos del arma"}),Object(d.jsxs)("label",{children:["Nombre del arma",Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){u(e.target.value)},value:b}),r&&!L&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el nombre del arma"})]}),Object(d.jsxs)("label",{children:["Imagen del arma",Object(d.jsx)("input",{type:"text",name:"MainImg",onChange:function(e){p(e.target.value)},value:x}),r&&!W&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el URL completo de la imagen"})]}),Object(d.jsxs)("label",{children:["Historia del arma",Object(d.jsx)("textarea",{className:"largeInput",name:"perfil",onChange:function(e){N(e.target.value)},value:v}),r&&!B&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir algo en la historia del personaje"})]}),Object(d.jsxs)("label",{children:["Tipo de arma",Object(d.jsxs)("select",{name:"arma",value:D,onChange:function(e){I(e.target.value)},children:[Object(d.jsx)("option",{value:" ",children:"ELIGE EL TIPO DE ARMA"}),Object(d.jsx)("option",{value:"Mandoble",children:"MANDOBLE"}),Object(d.jsx)("option",{value:"Arco",children:"ARCO"}),Object(d.jsx)("option",{value:"Espada",children:"ESPADA"}),Object(d.jsx)("option",{value:"Lanza",children:"LANZA"})]}),r&&!k&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el tipo de arma"})]}),Object(d.jsxs)("label",{children:["Stat secundario",Object(d.jsx)("input",{type:"text",name:"type",onChange:function(e){T(e.target.value)},value:y}),r&&!_&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el stat del arma"})]}),Object(d.jsxs)("label",{children:["Efecto pasivo",Object(d.jsx)("textarea",{className:"largeInput",name:"passive",onChange:function(e){M(e.target.value)},value:w}),r&&!P&&Object(d.jsx)("p",{className:"CharacterForm_error",children:"Debes escribir el efecto pasivo del arma"})]}),Object(d.jsx)("button",{className:"button",children:"create"===t?"A\xd1ADIR ARMA":"GUARDAR CAMBIOS"})]})},E=(a(49),function(e){var t=e.id,a=e.name,n=e.mainImg,c=(e.history,e.stat),s=e.passive,i=e.onDelete,r=e.onEdit,l=Object(h.g)();return Object(d.jsxs)("div",{className:"characterDetailsWeapon",children:[Object(d.jsxs)("section",{className:"mainInfoWeapon",children:[Object(d.jsx)("img",{className:"mainInfoWeaponImg",src:"".concat("/Taller1WA2","/img/").concat(n),onClick:function(){l.push("/weaponDetails/".concat(t))}}),Object(d.jsxs)("div",{className:"mainInfoWeapon--textDiv",children:[Object(d.jsx)("p",{className:"mainInfoArtifact--text",children:a}),Object(d.jsx)("p",{className:"subtitleMainInfo",children:c}),Object(d.jsxs)("div",{className:"buttonsWeaponDiv",children:[Object(d.jsx)("button",{className:"buttonComponents button",onClick:function(){r&&r(t)},children:"EDITAR"}),Object(d.jsx)("button",{className:"buttonComponents button deleteButton",onClick:function(){i&&i(t)},children:"ELIMINAR"})]})]})]}),Object(d.jsxs)("div",{className:"detailsWeapon",children:[Object(d.jsx)("p",{className:"infoStatsTitle",children:"Efecto pasivo"}),Object(d.jsx)("p",{className:"infoStatsText",children:s})]})]})}),S=function(){var e=Object(h.h)().id;return parseFloat(e)},y=function(e){var t=S(),a=Object(h.g)(),n=e.find((function(e){return e.id===t}));return n||a.push("/error404"),n},T=function(e){var t=e.list,a=e.onCreateArtifact,n=e.onEditArtifact,s=(e.onDeleteArtifact,e.onCreateWeapon),i=(Object(h.g)(),S()),j=y(t),m=c.a.useState(t),b=Object(o.a)(m,2),u=b[0],O=b[1],x=c.a.useState("none"),p=Object(o.a)(x,2),g=p[0],f=p[1],C=c.a.useState(null),T=Object(o.a)(C,2),R=T[0],F=T[1],w=c.a.useState("none"),M=Object(o.a)(w,2),L=M[0],W=M[1],B=c.a.useState(null),k=Object(o.a)(B,2),_=k[0],P=k[1],U=c.a.useState([]),z=Object(o.a)(U,2),G=z[0],Y=z[1];if(!j)return null;var q=j.name,H=j.img,J=j.history,Z=j.role,V=j.constelacion,K=j.city,Q=j.artifacts,X=j.weapon,$=j.trailer,ee=j.id;G=Q;var te,ae,ne,ce=function(e){P(e),W("edit"),console.log("estas en edit",e)},se=function(e){};X&&(te=X.type,ae=X.name,ne=X.id);return Object(d.jsxs)("div",{className:"characterDetails",children:[Object(d.jsx)(v,{text:"PERFIL"}),Object(d.jsxs)("div",{className:"mainInfoCharacter",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/").concat(H)}),Object(d.jsxs)("div",{className:"biographyDiv",children:[Object(d.jsx)("h2",{className:"titleElemDetail",children:q}),Object(d.jsx)("p",{className:"biographyText",children:J})]}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)(A,{title:"Rareza",stars:"".concat("/Taller1WA2","/img/5stars.png")}),Object(d.jsx)(A,{title:"Role",text:Z}),Object(d.jsx)(A,{title:"Arma",text:te}),Object(d.jsx)(A,{title:"Constelaci\xf3n",text:V}),Object(d.jsx)(A,{title:"Regi\xf3n natal",text:K})]})]}),Object(d.jsxs)("section",{className:"weaponDiv",children:[Object(d.jsx)(v,{text:"ARMA"}),"none"==g&&!(null===X||void 0===X?void 0:X.name)&&Object(d.jsx)("button",{className:"button buttonAddComponent",onClick:function(e){f("create")},children:"A\xd1ADIR"}),Object(d.jsxs)("section",{className:"weaponFormDiv",children:[!(null===X||void 0===X?void 0:X.name)&&Object(d.jsx)("img",{className:"noSomething",src:"".concat("/Taller1WA2","/img/noWeapon.png")}),("create"===g||"edit"===g)&&Object(d.jsx)(I,{typeWF:g,editId:R,weaponElem:X,onCreate:function(e){s(i,e),f("none")},onEdit:function(e,t){console.log(e,t.name);var a=u.slice(),n=u.findIndex((function(e){return e.id===R}));a[n]=Object(r.a)(Object(r.a)({},u[n]),t),O(a),f("none")}})]}),"none"==g&&X&&Object(d.jsx)("section",{className:"weaponElem",children:ne&&te&&ae&&Object(d.jsx)(E,{id:ne,name:X.name,mainImg:X.mainImg,history:X.history,stat:X.stat,passive:X.passive,onEdit:function(e){F(e),f("edit"),console.log("estas en edit",e)},onDelete:function(e){}},ne)})]}),Object(d.jsxs)("section",{className:"ArtifactDiv",children:[Object(d.jsx)(v,{text:"ARTEFACTOS"}),"none"==L&&Object(d.jsx)("button",{className:"button buttonAddComponent",onClick:function(e){W("create")},children:"A\xd1ADIR"}),Object(d.jsxs)("div",{className:"artifactFormDiv",children:[Q.length<1&&Object(d.jsx)("img",{className:"noSomething",src:"".concat("/Taller1WA2","/img/noArtifact.png")}),("create"===L||"edit"===L)&&Object(d.jsx)(N,{type:L,editId:_,artifactElem:Q,onCreate:function(e){var t=[].concat(Object(l.a)(G),[{id:Math.random(),name:e.name,mainImg:e.mainImg,arena:e.arena,copa:e.copa,tiara:e.tiara,twoItems:e.twoItems,fourItems:e.fourItems,domain:e.domain,notes:e.notes}]);Y(t),a(i,e),W("none")},onEdit:function(e,t){_&&n(ee,_,t),W("none"),P(null)}})]}),"none"===L&&Object(d.jsx)("section",{className:"artifactElem",children:Q.map((function(e){return Object(d.jsx)(D,{id:e.id,name:e.name,imgFlor:e.mainImg,arena:e.arena,copa:e.copa,tiara:e.tiara,onEdit:ce,onDelete:se},e.id)}))})]}),Object(d.jsxs)("div",{className:"TrailerDiv",children:[Object(d.jsx)(v,{text:"TRAILER"}),Object(d.jsx)("iframe",{className:"videoC",width:"813",height:"457",src:$,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})]})},R=(a(50),function(e){var t=e.list,a=(S(),y(t));if(!a)return null;var n=a.name,c=a.mainImg,s=a.twoItems,i=a.fourItems,r=a.domain,l=a.notes;return Object(d.jsxs)("div",{className:"ArtifactsDetails",children:[Object(d.jsx)(v,{text:"SET DE ARTEFACTOS"}),Object(d.jsxs)("section",{className:"artifactsDetailsDiv",children:[Object(d.jsxs)("div",{className:"imgSectionDiv",children:[Object(d.jsx)("img",{className:"imgArtifactDetails",src:"".concat("/Taller1WA2","/img/").concat(c)}),Object(d.jsxs)("div",{className:"domainSection",children:[Object(d.jsx)("h3",{className:"titleStats titleDomain",children:"Dominio donde se puede conseguir"}),Object(d.jsx)("p",{className:" textBody textArtifactDetails",children:r})]})]}),Object(d.jsxs)("div",{className:"artifactInfoDiv",children:[Object(d.jsx)("h2",{className:"titleElemDetail titleArtfiact",children:n}),Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"2 piezas"}),Object(d.jsx)("p",{className:"textBody textArtifactDetails",children:s}),Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"4 piezas"}),Object(d.jsx)("p",{className:"textBody textArtifactDetails",children:i})]}),Object(d.jsxs)("div",{className:"artifactNotes",children:[Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"NOTAS"}),Object(d.jsx)("h4",{className:"titleStats titleDomain",children:"Bono de 4 piezas"}),Object(d.jsx)("p",{className:"textBody textArtifactDetails",children:l})]})]})]})}),F=(a(51),function(e){var t=e.weapon,a=t.name,n=t.mainImg,c=t.history,s=t.type,i=t.stat,r=t.passive;return Object(d.jsxs)("div",{className:"weaponDetails",children:[Object(d.jsx)(v,{text:"ARMA"}),Object(d.jsxs)("div",{className:"weaponMainInfoDiv",children:[Object(d.jsxs)("section",{className:"weaponDescriptionDiv",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/").concat(n)}),Object(d.jsxs)("div",{className:"weaponDescriptionTextDiv",children:[Object(d.jsx)("h2",{className:"titleElemDetail",children:a}),Object(d.jsx)("p",{className:" textBody",children:c})]})]}),Object(d.jsxs)("section",{className:"details",children:[Object(d.jsx)(A,{title:"Rareza",stars:"".concat("/Taller1WA2","/img/5stars.png")}),Object(d.jsx)(A,{title:"Tipo",text:s}),Object(d.jsx)(A,{title:"Obtenci\xf3n",text:"Gacha"}),Object(d.jsx)(A,{title:"Tipo de stat secundario",text:i})]})]}),Object(d.jsxs)("section",{className:"weaponPassiveDiv",children:[Object(d.jsx)(v,{text:"EFECTO PASIVO"}),Object(d.jsx)("p",{className:"textBody weaponPassive--text",children:r})]})]})}),w=(a(52),function(){return Object(d.jsxs)("section",{className:"footer",children:[Object(d.jsxs)("div",{className:"footerImgDiv",children:[Object(d.jsx)("img",{className:"footerImg",src:"".concat("/Taller1WA2","/img/logoMihoyo.png")}),Object(d.jsx)("img",{className:"footerImg",src:"".concat("/Taller1WA2","/img/navLogo.png")})]}),Object(d.jsxs)("div",{className:"footerTextDiv",children:[Object(d.jsx)("p",{className:"footerText footerCopyright",children:"Copyright \xa9 2020 miHoYo All Rights Reserved"}),Object(d.jsx)("p",{className:"footerText footerTextBody",children:'"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc. Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.'}),Object(d.jsx)("img",{className:"footerLogos",src:"".concat("/Taller1WA2","/img/otherLogos.png")})]})]})}),M=a(19);var L=function(){Object(h.g)();var e,t=c.a.useState("create"),a=Object(o.a)(t,2),n=a[0],s=a[1],i=c.a.useState(null),N=Object(o.a)(i,2),A=N[0],C=N[1],D=c.a.useState([{id:Math.random(),name:"DILUC",elementC:"pyro",img:"diluc.png",history:'Diluc Ragnvindr es el due\xf1o actual de Vi\xf1edo del Amanecer y un noble de alta estima en la sociedad de Mondstadt. Aunque parece ap\xe1tico sobre los asuntos de la ciudad, la protege de noche como el rumoreado "H\xe9roe Oscuro".\n      Como el hombre m\xe1s rico de Mondstadt, Diluc siempre muestra su lado m\xe1s exquisito. Sin embargo, su verdadera naturaleza es la de un guerrero con una gran determinaci\xf3n. Protege a Mondstadt con todas sus fuerzas en todo momento.',role:"DPS",constelacion:"Noctua",city:"Mondstadt",trailer:"https://www.youtube.com/embed/1TfbiDo7N4k",artifacts:[]},{id:Math.random(),name:"BENNET",elementC:"pyro",img:"bennet.png",history:'Un hu\xe9rfano descubierto por un anciano aventurero cuando era un beb\xe9, Bennett se crio en el Gremio de Aventureros de Mondstadt. \xc9l es el \xfanico miembro de la "Brigada de Benny", ya que todos los dem\xe1s dejaron el equipo despu\xe9s de experimentar la desgracia constante que lo sigue.',role:"BURST SUPPORT",constelacion:"Rota Calamitas",city:"Mondstadt",trailer:"https://www.youtube.com/embed/UW8lG_wNFIY",artifacts:[]}]),I=Object(o.a)(D,2),E=I[0],S=I[1],y=E.filter((function(e){if("pyro"===e.elementC)return!0})),L=E.filter((function(e){if("electro"===e.elementC)return!0})),W=E.filter((function(e){if("cryo"===e.elementC)return!0})),B=[];E.forEach((function(e){e.artifacts.forEach((function(e){B.push(e)}))}));var k=[];E.forEach((function(e){e.weapon&&k.push(e.weapon)}));var _=k.filter((function(e){if("Mandoble"===(null===e||void 0===e?void 0:e.type))return!0})),P=k.filter((function(e){if("Lanza"===(null===e||void 0===e?void 0:e.type))return!0})),U=k.filter((function(e){if("Espada"===(null===e||void 0===e?void 0:e.type))return!0}));E.forEach((function(t){t&&t.weapon&&(e=t.weapon)}));var z=function(e){var t=E.filter((function(t){return t.id==e}));S(t)},G=function(e){C(e),s("edit"),console.log("estas en edit",e)},Y={labels:["PYRO","ELECTRO","CRYO","ANEMO","HYDRO","GEO"],datasets:[{label:"# de personajes",data:[y.length,L.length,W.length],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(153, 102, 255, 0.2)","rgba(75, 192, 192, 0.2)","rgba(52, 235, 128, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(153, 102, 255, 1)","rgba(75, 192, 192, 1)","rgba(52, 235, 128, 1)","rgba(54, 162, 235, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},q=function(e){var t={};return e.forEach((function(e){t[e.name]=e.artifacts.length})),{labels:Object.keys(t),datasets:[{label:"# of artefactos x personaje",data:Object.values(t),backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]}}(E);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/navLogo.png"),className:"navLogo"})}),Object(d.jsx)(m,{text:"ARMAS",url:"/weaponsList"}),Object(d.jsx)(m,{text:"ARTEFACTOS",url:"/artifactsList"}),Object(d.jsx)(m,{text:"FORMULARIO",url:"/characterForm"}),Object(d.jsx)(m,{text:"ESTAD\xcdSTICAS",url:"/statistics"}),Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/userIcon.png"),className:"userIcon"})]}),Object(d.jsxs)(h.d,{children:[Object(d.jsxs)(h.b,{path:"/",exact:!0,children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/bannerImg.jpg"),className:"banner"}),Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"PERSONAJES"}),y.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"PYRO",img:"pyroIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:y.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:z,onEdit:G},e.id)}))})]}),L.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"ELECTRO",img:"pyroIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:L.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:z,onEdit:G},e.id)}))})]}),W.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{text:"CRYO",img:"pyroIcon.png"}),Object(d.jsx)("article",{className:"componentsDiv",children:W.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,trailer:e.trailer,onDelete:z,onEdit:G},e.id)}))})]})]})]}),Object(d.jsx)(h.b,{path:"/characterForm",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)("img",{src:"".concat("/Taller1WA2","/img/bannerForm.png"),className:"banner"}),Object(d.jsx)(b,{text:"FORMULARIO"}),Object(d.jsx)(x,{editId:A,characterElem:E,type:n,onCreate:function(e){console.log("Se creo",e);var t=[].concat(Object(l.a)(E),[{id:Math.random(),name:e.name,elementC:e.elementC,img:e.img,history:e.history,role:e.role,constelacion:e.constelacion,city:e.city,trailer:e.trailer,artifacts:[],weapon:{id:0,name:"",mainImg:"",history:"",type:"",stat:"",passive:""}}]);S(t)},onEdit:function(e,t){console.log(e,t.name);var a=E.slice(),n=E.findIndex((function(e){return e.id===A}));a[n]=Object(r.a)(Object(r.a)({},E[n]),t),S(a),s("create"),C(null)}})]})}),Object(d.jsx)(h.b,{path:"/characterDetails/:id",children:Object(d.jsx)(T,{list:E,onCreateArtifact:function(e,t){var a=E.slice(),n=E.findIndex((function(t){return t.id===e}));a[n]=Object(r.a)(Object(r.a)({},E[n]),{},{artifacts:[].concat(Object(l.a)(E[n].artifacts),[t])}),S(a)},onEditArtifact:function(e,t,a){var n=E.slice(),c=E.findIndex((function(t){return t.id===e})),s=n[c].artifacts.findIndex((function(e){return e.id===t}));S((function(e){var t=e;return t[c].artifacts[s]=a,Object(l.a)(t)}))},onDeleteArtifact:function(e,t){E.slice()[E.findIndex((function(t){return t.id===e}))].artifacts.findIndex((function(e){return e.id===t}));console.log("odio aqui")},onCreateWeapon:function(e,t){var a=E.slice(),n=E.findIndex((function(t){return t.id===e}));a[n]=Object(r.a)(Object(r.a)({},E[n]),{},{weapon:t}),S(a)}})}),Object(d.jsx)(h.b,{path:"/weaponsList",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"ARMAS"}),_.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"MANDOBLE"}),Object(d.jsx)("article",{className:"componentsDiv",children:_.map((function(e){return Object(d.jsx)(p,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]}),P.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"LANZA"}),Object(d.jsx)("article",{className:"componentsDiv",children:P.map((function(e){return Object(d.jsx)(p,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]}),U.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"titlesSections normalTitles",children:"ESPADA"}),Object(d.jsx)("article",{className:"componentsDiv",children:U.map((function(e){return Object(d.jsx)(p,{id:e.id,name:e.name,img:e.mainImg},e.id)}))})]})]})}),Object(d.jsx)(h.b,{path:"/artifactsList",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"ARTEFACTOS"}),Object(d.jsx)("article",{className:"componentsDiv",children:B.map((function(e){return Object(d.jsx)(g,{id:e.id,name:e.name,mainImg:e.mainImg},e.id)}))})]})}),Object(d.jsx)(h.b,{path:"/artifactsDetails/:id",children:Object(d.jsx)(R,{list:B})}),Object(d.jsx)(h.b,{path:"/weaponDetails/:id",children:e&&Object(d.jsx)(F,{weapon:e})}),Object(d.jsx)(h.b,{path:"/statistics",children:Object(d.jsxs)("article",{className:"info",children:[Object(d.jsx)(b,{text:"ESTAD\xcdSTICAS"}),Object(d.jsxs)("div",{className:"characterDetails",children:[Object(d.jsxs)("div",{className:"graphicDiv",children:[Object(d.jsx)(v,{text:"ELEMENTOS"}),Object(d.jsx)(M.a,{className:"graphicBar",data:Y,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}}})]}),Object(d.jsxs)("div",{className:"graphicDiv",children:[Object(d.jsx)(v,{text:"ARTEFACTOS POR PERSONAJE"}),Object(d.jsx)(M.a,{className:"graphicBar",data:q,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1}}}})]})]})]})}),Object(d.jsx)(h.b,{path:"/error404",children:Object(d.jsx)(f,{})}),Object(d.jsx)(h.a,{to:"/error404"})]})]}),Object(d.jsx)(w,{})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(L,{})})}),document.getElementById("root")),W()}]),[[53,1,2]]]);
//# sourceMappingURL=main.496055c5.chunk.js.map