(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),r=a(9),o=a.n(r),s=a(58),l=a(12),u=a(27),j=a.n(u),b=a(154),d=(a(72),a(158)),_=a(157),p=a(11),h=a(91),m=a(81),O=a(21),x=a(15),f=a(28),v=a(16),g=a(17),k=a(32),N=a.n(k),C=a(69),y=a.n(C),A=a(156),I=a(151),D=a(82),E=a.n(D),w=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,i=t.isDone,c=t.onClickDone,r=t.id,o=t.onClickDelete;return Object(n.jsxs)("span",{className:N()((e={},Object(p.a)(e,y.a.item,!0),Object(p.a)(e,y.a.done,i),e)),children:[Object(n.jsx)(A.a,{defaultChecked:!0,color:"primary",inputProps:{"aria-label":"secondary checkbox"},onClick:function(){return c(r)}}),Object(n.jsx)(I.a,{className:y.a.icon,"aria-label":"delete",color:"primary",children:Object(n.jsx)(E.a,{onClick:function(){return o(r)}})}),a]})}}]),a}(c.a.Component);w.defaultProps={isDone:!1};var S=w,V=a(83),L=a.n(V),F=function(e){e.items;var t=e.onClickDone,a=e.onClickDelete,i=e.sort;e.sortValue;return Object(n.jsx)("ul",{className:L.a.list,children:i.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(S,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:t,onClickDelete:a})},e.id)}))})};F.defaultProps={value:"\u0412\u0441\u0435 \u0434\u0435\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b",isDone:!1};var R=F,P=a(39),U=a.n(P),T=a(152),B=function(e){e.items;var t,a,i=e.renderIsDone,c=e.sorting,r=e.onClickSort;return Object(n.jsxs)("div",{className:U.a.footer,children:[Object(n.jsx)(T.a,{variant:"outlined",color:"primary",className:N()((t={},Object(p.a)(t,U.a.button,!0),Object(p.a)(t,U.a.buttonAct,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"===c),t)),onClick:function(){return r("\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")},children:Object(n.jsxs)("span",{className:U.a.did,children:["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 - ",i(!0)]})}),Object(n.jsx)(T.a,{variant:"outlined",color:"primary",className:N()((a={},Object(p.a)(a,U.a.button,!0),Object(p.a)(a,U.a.buttonAct,"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"===c),a)),onClick:function(){return r("\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")},children:Object(n.jsxs)("span",{className:U.a.notDid,children:["\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 - ",i(!1)]})})]})},W=a(155),H=a(49),Q=a.n(H),J=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={inputValue:"",isEmpty:!1,isRepeat:!1},e.onButtonClick=function(){var t=e.props,a=t.onClickAdd,n=t.items,i=!1;n.forEach((function(t){t.value===e.state.inputValue&&(i=!0)})),""===e.state.inputValue||i?(e.setState({isEmpty:!0}),setTimeout((function(){e.setState({isEmpty:!1})}),1500)):(e.setState({inputValue:"",isEmpty:!1,isRepeat:!1}),a(e.state.inputValue))},e}return Object(f.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state,i=a.isEmpty,c=a.isRepeat;return Object(n.jsxs)("div",{className:Q.a.inputWrap,children:[Object(n.jsx)("div",{className:N()((e={},Object(p.a)(e,Q.a.input_style,!0),Object(p.a)(e,Q.a.wrap__errorempty,i),Object(p.a)(e,Q.a.wrap__errorrepeat,c),e)),children:Object(n.jsx)(W.a,{className:Q.a.inputField,id:"outlined-full-width",label:"\u0417\u0430\u0434\u0430\u0447\u0430",style:{margin:0},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",fullWidth:!0,value:this.state.inputValue.toUpperCase(),onChange:function(e){return t.setState({inputValue:e.target.value})},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"})}),Object(n.jsx)(T.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.onButtonClick,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0417\u0430\u0434\u0430\u0447\u0443"})]})}}]),a}(c.a.Component),M=a(50),G=a.n(M),Z=function(){var e,t,a=[],c=4,r=!1,o="\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447",s=Object(i.useState)(a),l=Object(O.a)(s,2),u=l[0],j=l[1],b=Object(i.useState)(c),d=Object(O.a)(b,2),_=d[0],x=d[1],f=Object(i.useState)(r),v=Object(O.a)(f,2),g=v[0],k=v[1],C=Object(i.useState)(o),y=Object(O.a)(C,2),A=y[0],I=y[1],D=function(e){return I(e)};switch(A){case"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435":t=u.filter((function(e){return e.isDone}));break;case"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435":t=u.filter((function(e){return!e.isDone}));break;case"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447":t=u;break;default:t=u}return Object(n.jsxs)("div",{className:G.a.wrap,children:[Object(n.jsx)("div",{className:G.a.todo,children:Object(n.jsx)(T.a,{variant:"outlined",color:"primary",className:N()((e={},Object(p.a)(e,G.a.button,!0),Object(p.a)(e,G.a.buttonAct,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"===t),e)),onClick:function(){return D("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447")},children:Object(n.jsxs)("span",{className:G.a.title,children:[" \u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 - ",u.length]})})}),Object(n.jsx)(J,{items:u,onClickAdd:function(e){""!==e?(j([].concat(Object(h.a)(u),[{value:e,isDone:!1,id:_+1}])),x((function(e){return e+1}))):k(!0)},hasError:g}),Object(n.jsx)(R,{items:u,onClickDone:function(e){var t=u.map((function(t){var a=Object(m.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a}));j(t)},onClickDelete:function(e){var t=u.filter((function(t){return t.id!==e}));j(t),x((function(e){return e-1}))},sort:t,sortValue:A}),Object(n.jsx)(B,{renderIsDone:function(e){return u.filter((function(t){return t.isDone===e})).length},onClickSort:D,sorting:A})]})},K=a(20),z=a.n(K),Y=a(153),X=a(67),q=a(73),$=a.n(q),ee=function(){return Object(n.jsx)("div",{className:$.a.loading,children:Object(n.jsx)("div",{className:$.a.ldio,children:Object(n.jsx)("div",{})})})},te=a(87),ae=a.n(te),ne=new X.a,ie=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,repoList:[],username:"VladimirovaEV",fetchFailure:!1,userInfo:[],avatarUrl:[],bio:[],html_url:[],firstRepo:0,lastRepo:2},e.lastPage=function(){e.setState({firstRepo:e.state.firstRepo-2,lastRepo:e.state.lastRepo-2})},e.nextPage=function(){e.setState({firstRepo:e.state.firstRepo+2,lastRepo:e.state.lastRepo+2})},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;ne.repos.listForUser({username:this.state.username}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1,fetchFailure:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0,TextErr:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})})),ne.users.getByUsername({username:this.state.username}).then((function(t){e.setState({avatarUrl:t.data.avatar_url,name:t.data.name,bio:t.data.bio,html_url:t.data.html_url})})).catch((function(){e.setState({isLoading:!1,isError:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.repoList,i=e.fetchFailure,c=e.isError,r=e.TextErr,o=e.name,s=e.avatarUrl,l=e.bio,u=e.html_url,j=e.firstRepo,b=e.lastRepo,d=a.slice(j,b);return Object(n.jsx)("div",{children:t?Object(n.jsx)(ee,{}):Object(n.jsx)("div",{children:c?Object(n.jsx)("div",{children:r}):Object(n.jsx)("div",{children:Object(n.jsxs)(Y.a,{children:[Object(n.jsx)("h1",{className:z.a.title,children:t?Object(n.jsx)(ee,{}):o}),Object(n.jsxs)("div",{className:z.a.about,children:[Object(n.jsx)("img",{className:z.a.img,src:s,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(n.jsxs)("div",{className:z.a.bio,children:[" ",l," "]}),Object(n.jsx)("div",{className:z.a.github,children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)("a",{href:u,className:z.a.url,target:"_blank",rel:"noreferrer",children:u})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:z.a.repo,children:t?Object(n.jsx)(ee,{}):"\u041c\u043e\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 GitHub"}),!i&&Object(n.jsx)("div",{children:r}),!t&&Object(n.jsx)("ul",{className:z.a.ul,children:d.map((function(e){return Object(n.jsxs)("li",{className:z.a.li,children:[Object(n.jsx)("a",{href:e.html_url,className:z.a.link,target:"_blank",rel:"noreferrer",children:e.name}),Object(n.jsx)("p",{className:z.a.text,children:e.description})]},e.name)}))})]}),Object(n.jsxs)("div",{className:z.a.pagination,children:[Object(n.jsx)("button",{className:z.a.pagination_button,onClick:this.lastPage,disabled:j<1,children:"Back"}),Object(n.jsx)("button",{className:z.a.pagination_button,onClick:this.nextPage,disabled:a.length<b,children:"Forward"})]})]})})})})}}]),a}(c.a.Component),ce=a(30),re=a.n(ce),oe=a(89),se=a.n(oe),le=a(88),ue=a.n(le),je=a(90),be=a.n(je),de=new X.a,_e=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,username:"VladimirovaEV",fetchFailure:!1,avatarUrl:[],email:"VladimirovaEV79@yandex.ru",location:[],facebook:"https://web.facebook.com/ekaterina.vladimirova.735/"},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;de.users.getByUsername({username:this.state.username}).then((function(t){e.setState({avatarUrl:t.data.avatar_url,location:t.data.location,isLoading:!1,fetchFailure:!1})})).catch((function(t){e.setState({isLoading:!1,isError:!0,TextErr:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.fetchFailure,i=e.isError,c=e.TextErr,r=e.email,o=e.location,s=e.avatarUrl,l=e.facebook;return Object(n.jsx)("div",{children:t?Object(n.jsx)(ee,{}):Object(n.jsx)("div",{children:i?Object(n.jsx)("div",{children:c}):Object(n.jsxs)("div",{children:[!a&&Object(n.jsx)("div",{children:c}),Object(n.jsxs)(Y.a,{children:[Object(n.jsx)("h1",{className:re.a.title,children:"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(n.jsx)("div",{className:re.a.locationIcon,children:Object(n.jsx)(ue.a,{color:"primary"})}),Object(n.jsxs)("div",{className:re.a.location,children:[" ",o," "]}),Object(n.jsx)("div",{className:re.a.mailIcon,children:Object(n.jsx)(se.a,{color:"primary"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("a",{href:"mailto:{ email }",className:re.a.email,target:"_blank",rel:"noreferrer",children:[r," "]})}),Object(n.jsx)("div",{className:re.a.facebookIcon,children:Object(n.jsx)(be.a,{color:"primary"})}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:l,className:re.a.facebook,target:"_blank",rel:"noreferrer",children:l})}),Object(n.jsx)("p",{className:re.a.p,children:Object(n.jsx)("img",{className:re.a.img,src:s,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})})]})]})})})}}]),a}(c.a.Component),pe=a(57),he=a.n(pe),me=function(){return Object(n.jsxs)("div",{className:he.a.logo,children:[Object(n.jsx)("div",{className:he.a.develop,children:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0432"}),Object(n.jsx)("div",{className:he.a.hero,children:"WebHero"}),Object(n.jsx)("div",{className:he.a.school,children:"School"})]})},Oe=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)("div",{className:j.a.app_wrap,children:[Object(n.jsx)(b.a,{className:j.a.sidebar,children:Object(n.jsxs)(_.a,{className:j.a.menu,children:[Object(n.jsx)("div",{className:j.a.button,children:Object(n.jsx)(b.a,{children:Object(n.jsx)(s.b,{to:"/",className:j.a.link,children:Object(n.jsx)(d.a,{children:"\u041e\u0431\u043e \u043c\u043d\u0435"})})})}),Object(n.jsx)("div",{className:j.a.button,children:Object(n.jsx)(b.a,{children:Object(n.jsx)(s.b,{to:"/todo",className:j.a.link,children:Object(n.jsx)(d.a,{children:"\u0414\u0435\u043b\u0430"})})})}),Object(n.jsxs)("div",{className:j.a.button,children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(s.b,{to:"/contacts",className:j.a.link,children:Object(n.jsx)(d.a,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})}),Object(n.jsx)(me,{})]})]})}),Object(n.jsxs)(b.a,{className:j.a.content,children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:ie}),Object(n.jsx)(l.a,{path:"/todo",component:Z}),Object(n.jsx)(l.a,{path:"/contacts",component:_e})]})]})})};o.a.render(Object(n.jsx)(Oe,{}),document.getElementById("root"))},20:function(e,t,a){e.exports={repo:"About_repo__2VJrN",title:"About_title__3_Zpj",ul:"About_ul__2UA1k",li:"About_li__1aF3H",text:"About_text__1Bjtc",about:"About_about__3MaHF",img:"About_img__eTfbs",bio:"About_bio__mmjW2",url:"About_url__3yvEh",link:"About_link__3E-2b",github:"About_github__2v-Sn",pagination:"About_pagination__1FI6g",pagination_button:"About_pagination_button__1T265",pagination__button:"About_pagination__button__23dzm"}},27:function(e,t,a){e.exports={app_wrap:"App_app_wrap__2nCCe",title:"App_title__BIcf7",link:"App_link__3QsUE",menu:"App_menu__DWMC1",sidebar:"App_sidebar__1UbBE",content:"App_content__3dIQG",button:"App_button__2aQcj"}},30:function(e,t,a){e.exports={title:"Contacts_title__YJwp1",p:"Contacts_p__1EVrl",img:"Contacts_img__3EulR",email:"Contacts_email__1P_4a",mailIcon:"Contacts_mailIcon__3ijbl",locationIcon:"Contacts_locationIcon__gxtHQ",location:"Contacts_location__2SbTV",facebookIcon:"Contacts_facebookIcon__1f2rr",facebook:"Contacts_facebook__kionK"}},39:function(e,t,a){e.exports={text:"Footer_text__2K1Kn",did:"Footer_did__1t_Re",notDid:"Footer_notDid__3svF8",footer:"Footer_footer__1bHUx"}},49:function(e,t,a){e.exports={inputWrap:"InputItem_inputWrap__3yPL3",wrap__errorempty:"InputItem_wrap__errorempty__1ZhkG",wrap__errorrepeat:"InputItem_wrap__errorrepeat__3vtX2"}},50:function(e,t,a){e.exports={title:"Todo_title__2WPQx",wrap:"Todo_wrap__1RtUJ",todo:"Todo_todo__3er1P"}},57:function(e,t,a){e.exports={logo:"Logo_logo__3ObFI",develop:"Logo_develop__37gGB",hero:"Logo_hero__2u-xS",school:"Logo_school__ks3lA"}},69:function(e,t,a){e.exports={item:"Item_item__3k_Ze",done:"Item_done__1vOw5",icon:"Item_icon__3_tQz"}},73:function(e,t,a){e.exports={ldio:"Prelouder_ldio__PVx2W",loading:"Prelouder_loading__3cYVZ"}},83:function(e,t,a){e.exports={list:"ItemList_list__MVVba"}}},[[119,1,2]]]);
//# sourceMappingURL=main.979baf56.chunk.js.map