(this["webpackJsonpmovie-catalogue"]=this["webpackJsonpmovie-catalogue"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/no_poster.a9af4f3f.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/no_poster_album.8d55f821.jpg"},63:function(e,t,a){e.exports=a(97)},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"startLoading",(function(){return I})),a.d(n,"stopLoading",(function(){return k})),a.d(n,"clearAllUserData",(function(){return L})),a.d(n,"fetchMoviesFavorite",(function(){return M})),a.d(n,"updateMoviesFavorite",(function(){return P})),a.d(n,"fetchMoviesWillWatch",(function(){return D})),a.d(n,"updateMoviesWillWatch",(function(){return F})),a.d(n,"fetchGenres",(function(){return U})),a.d(n,"fetchMovies",(function(){return G})),a.d(n,"setSortBy",(function(){return B})),a.d(n,"setCurrentYear",(function(){return V})),a.d(n,"setActivePage",(function(){return H})),a.d(n,"setSelectedGenres",(function(){return W})),a.d(n,"clearAllFilters",(function(){return Y})),a.d(n,"setFavouriteMovie",(function(){return x})),a.d(n,"setWatchList",(function(){return Q})),a.d(n,"fetchMovieById",(function(){return q})),a.d(n,"clearCurrentMovie",(function(){return J})),a.d(n,"fetchMovieVideosById",(function(){return z})),a.d(n,"fetchMovieActorsById",(function(){return K}));var r={};a.r(r),a.d(r,"login",(function(){return X})),a.d(r,"fetchAuth",(function(){return Z})),a.d(r,"updateAuth",(function(){return $})),a.d(r,"userLogout",(function(){return ee})),a.d(r,"logout",(function(){return te})),a.d(r,"toggleLoginModal",(function(){return ae})),a.d(r,"clearLoginErrors",(function(){return ne}));var c=a(0),o=a.n(c),i=a(21),l=a.n(i),s=a(31),u=a(13),m=a(14),d=a(18),v=a(17),E=a(19),p=a(10),f=a(26),h=a(12),g=a(45),y=a.n(g),b=a(56),O=a(15),_=a(38),S=a.n(_);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w="https://api.themoviedb.org/3",j="8c25628d17af8bc23ca51c3561b5b636",T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){fetch(e,t).then((function(e){if(e.status<400)return e.json();throw e})).then((function(e){a(e)})).catch((function(e){e.json().then((function(e){n(e)}))}))}))},A=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=N({api_key:j},n);return T("".concat(w).concat(e,"?").concat(S.a.stringify(r)),{mode:"cors",headers:{"Content-type":"application/json"}})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,c=void 0===r?{}:r,o=N({api_key:j},n);return T("".concat(w).concat(e,"?").concat(S.a.stringify(o)),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(c)})}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,c=void 0===r?{}:r,o=N({api_key:j},n);return T("".concat(w).concat(e,"?").concat(S.a.stringify(o)),{method:"DELETE",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(c)})}}]),e}(),R=a(40),I=function(){return function(e){e({type:"START_LOADING"})}},k=function(){return function(e){e({type:"STOP_LOADING"})}},L=function(){return function(e){e({type:"CLEAR_ALL_USER_DATA"})}},M=function(e){var t=e.user,a=e.session_id;return function(e){A.get("/account/".concat(t.id,"/favorite/movies"),{params:{session_id:a}}).then((function(t){e(P(t.results))}))}},P=function(e){return{type:"UPDATE_MOVIES_FAVORITE",payload:e}},D=function(e){var t=e.user,a=e.session_id;return function(e){A.get("/account/".concat(t.id,"/watchlist/movies"),{params:{session_id:a}}).then((function(t){e(F(t.results))}))}},F=function(e){return{type:"UPDATE_MOVIES_WILL_WATCH",payload:e}},U=function(){return function(e){e({type:"FETCH_GENRES"}),A.get("/genre/movie/list").then((function(t){return e({type:"FETCH_GENRES_SUCCESS",payload:t.genres})})).catch((function(t){return e({type:"FETCH_GENRES_ERROR",payload:t})}))}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t,a){t({type:"FETCH_MOVIES"});var n=a().movie,r=n.sortBy,c=n.currentYear,o=n.genresSelected,i="";o.forEach((function(e){return i+=e+","}));var l={sort_by:r,page:e,primary_release_year:c,with_genres:i};A.get("/discover/movie",{params:l}).then((function(e){return t({type:"FETCH_MOVIES_SUCCESS",payload:{movies:e.results,totalPages:e.total_pages}})})).catch((function(e){return t({type:"FETCH_MOVIES_ERROR",payload:e})}))}},B=function(e){return function(t){t({type:"SET_SORT_BY",payload:e})}},V=function(e){return function(t){t({type:"SET_CURRENT_YEAR",payload:e})}},H=function(e){return function(t){t({type:"SET_ACTIVE_PAGE",payload:e})}},W=function(e){var t=e.checked,a=e.value;return function(e,n){var r=Object(R.a)(n().movie.genresSelected);t?r.push(parseInt(a)):r=n().movie.genresSelected.filter((function(e){return e!==parseInt(a)})),e({type:"SET_SELECTED_GENRES",payload:r})}},Y=function(e){return function(e){e({type:"CLEAR_ALL_FILTERS"})}},x=function(e,t){return function(a,n){var r=n().auth,c=r.user,o=r.sessionId,i=n().movie.moviesFavourite;A.post("/account/".concat(c.id,"/favorite"),{params:{session_id:o},body:{media_type:"movie",media_id:e.id,favorite:t}}).then((function(n){var r;1!==n.status_code&&13!==n.status_code||(t?(r=Object(R.a)(i)).push(e):r=i.filter((function(t){return t.id!==e.id})),a(P(r)))}))}},Q=function(e,t){return function(a,n){var r=n().auth,c=r.user,o=r.sessionId,i=n().movie.moviesWillWatch;A.post("/account/".concat(c.id,"/watchlist"),{params:{session_id:o},body:{media_type:"movie",media_id:e.id,watchlist:t}}).then((function(n){var r;1!==n.status_code&&13!==n.status_code||(t?(r=Object(R.a)(i)).push(e):r=i.filter((function(t){return t.id!==e.id})),a(F(r)))}))}},q=function(e){return function(t){t({type:"START_LOADING"}),t({type:"FETCH_MOVIE_BY_ID"}),A.get("/movie/".concat(e)).then((function(e){t({type:"FETCH_MOVIE_BY_ID_SUCCESS",payload:e}),t({type:"STOP_LOADING"})})).catch((function(e){t({type:"FETCH_MOVIE_BY_ID_ERROR",payload:e}),t({type:"STOP_LOADING"})}))}},J=function(){return function(e){e({type:"CLEAR_CURRENT_MOVIE"})}},z=function(e){return function(t){t({type:"START_LOADING"}),t({type:"FETCH_MOVIE_VIDEOS_BY_ID"}),A.get("/movie/".concat(e,"/videos")).then((function(e){t({type:"FETCH_MOVIE_VIDEOS_BY_ID_SUCCESS",payload:e.results}),t({type:"STOP_LOADING"})})).catch((function(e){return t({type:"FETCH_MOVIE_VIDEOS_BY_ID_ERROR",payload:e})}))}},K=function(e){return function(t){t({type:"START_LOADING"}),t({type:"FETCH_MOVIE_ACTORS_BY_ID"}),A.get("/movie/".concat(e,"/credits")).then((function(e){t({type:"FETCH_MOVIE_ACTORS_BY_ID_SUCCESS",payload:e.cast}),t({type:"STOP_LOADING"})})).catch((function(e){return t({type:"FETCH_MOVIE_ACTORS_BY_ID_ERROR",payload:e})}))}},X=function(e){var t=e.username,a=e.password;return function(){var e=Object(b.a)(y.a.mark((function e(n){var r,c,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"REQUEST_LOGIN"}),e.next=4,A.get("/authentication/token/new");case 4:return r=e.sent,e.next=7,A.post("/authentication/token/validate_with_login",{body:{username:t,password:a,request_token:r.request_token}});case 7:return c=e.sent,e.next=10,A.post("/authentication/session/new",{body:{request_token:c.request_token}});case 10:o=e.sent,n(Z(o.session_id)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),n({type:"REQUEST_LOGIN_ERROR",payload:e.t0}),console.log("error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},Z=function(e){return function(t){t({type:"FETCH_REQUEST_AUTH"}),A.get("/account",{params:{session_id:e}}).then((function(a){t($({user:a,session_id:e})),t(M({user:a,session_id:e})),t(D({user:a,session_id:e}))})).catch((function(e){t({type:"FETCH_AUTH_ERROR",payload:e})}))}},$=function(e){return{type:"FETCH_AUTH_SUCCESS",payload:{user:e.user,session_id:e.session_id}}},ee=function(e){return function(t){t({type:"REQUEST_LOGOUT"}),A.delete("/authentication/session",{body:{session_id:e}}).then((function(){return t(te())})).catch((function(e){t({type:"REQUEST_LOGOUT_ERROR",payload:e})}))}},te=function(){return{type:"REQUEST_LOGOUT_SUCCESS"}},ae=function(){return{type:"TOGGLE_LOGIN_MODAL"}},ne=function(){return{type:"CLEAR_LOGIN_ERRORS"}},re=function(e){return{auth:e.auth}},ce=function(e){return{authActions:Object(h.bindActionCreators)(r,e)}},oe=function(e){return Object(s.b)(re,ce)(function(t){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(E.a)(a,t),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),a}(o.a.Component))},ie=function(e){return{movie:e.movie}},le=function(e){return{movieActions:Object(h.bindActionCreators)(n,e)}},se=function(e){return Object(s.b)(ie,le)(function(t){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(E.a)(a,t),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),a}(o.a.Component))},ue=a(108),me=a(125),de=a(127),ve=a(109),Ee=oe(se(function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={dropdownOpen:!1},a.toggle=function(){a.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},a.handleLogOut=function(){a.props.authActions.userLogout(a.props.auth.sessionId),a.props.movieActions.clearAllUserData()},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.dropdownOpen,t=this.props.auth.user;return o.a.createElement(ue.a,{isOpen:e,toggle:this.toggle},o.a.createElement(me.a,{tag:"div","data-toggle":"dropdown","aria-expanded":e},o.a.createElement("div",{onClick:this.toggle},o.a.createElement("img",{className:"rounded mr-2",alt:"avatar",src:"https://secure.gravatar.com/avatar/".concat(t.avatar.gravatar.hash,'.jpg?s=32"')}),o.a.createElement("span",{className:"text-light"},t.username))),o.a.createElement(de.a,{right:!0},o.a.createElement(ve.a,{onClick:this.handleLogOut},"Logout"),o.a.createElement(ve.a,{onClick:this.toggle},o.a.createElement(p.b,{to:"/favorite"},"My favorite movies")),o.a.createElement(ve.a,{onClick:this.toggle},o.a.createElement(p.b,{to:"/willwatch"},"My will watch list"))))}}]),t}(o.a.Component)));var pe=oe((function(e){var t=e.auth,a=e.authActions;return o.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-dark"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.b,{className:"nav-link",to:"/"},"Home"))),t.user?o.a.createElement(Ee,null):o.a.createElement("button",{className:"btn btn-outline-primary my-2 my-sm-0",type:"button",onClick:a.toggleLoginModal},"Log in"))})),fe=a(126),he=a(110);function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=oe(function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",repeatPassword:"",errors:{},submitting:!1},a.onChangeInput=function(e){var t=e.target.name,n=e.target.value;a.setState((function(e){var a;return a={},Object(O.a)(a,t,n),Object(O.a)(a,"errors",ye({},e.errors,Object(O.a)({base:null},t,null))),a}))},a.handleBlur=function(e){var t=e.target.name,n=a.validateFields()[t];n&&a.setState((function(e){return{errors:ye({},e.errors,Object(O.a)({},t,n))}})),a.props.authActions.clearLoginErrors()},a.validateFields=function(){var e={};return""===a.state.username&&(e.username="Username is required"),""===a.state.password&&(e.password="Password is required"),a.state.password.length<5&&(e.password="Your password it too small"),e},a.onLogin=function(e){e.preventDefault();var t=a.validateFields();Object.keys(t).length>0?a.setState((function(e){return{errors:ye({},e.errors,{},t)}})):a.sendPromisesAsync()},a.sendPromisesAsync=function(){var e=a.state,t=e.username,n=e.password;a.setState({submitting:!0}),a.props.authActions.login({username:t,password:n}).then((function(){a.props.auth.errors?a.setState({submitting:!1,errors:{base:a.props.auth.errors.base}}):(a.setState({submitting:!1}),a.props.authActions.toggleLoginModal())}))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=(e.repeatPassword,e.errors),r=e.submitting;return o.a.createElement("div",null,o.a.createElement("h1",null,"Log into your account"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{id:"username",type:"text",className:n.username?"form-control invalid":"form-control",placeholder:"username",name:"username",value:t,onChange:this.onChangeInput,onBlur:this.handleBlur}),n.username&&o.a.createElement("div",{className:"invalid-feedback"},n.username)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{id:"password",type:"password",className:n.password?"form-control invalid":"form-control",placeholder:"password",name:"password",value:a,onChange:this.onChangeInput,onBlur:this.handleBlur}),n.password&&o.a.createElement("div",{className:"invalid-feedback"},n.password)),o.a.createElement("button",{className:"btn btn-block btn-primary my-2 my-sm-0",type:"submit",disabled:r,onClick:this.onLogin},"Log in"),n.base&&o.a.createElement("div",{className:"invalid-feedback text-center"},n.base))}}]),t}(o.a.Component));var Oe=oe((function(e){var t=e.auth,a=e.authActions;return o.a.createElement(fe.a,{isOpen:t.showLoginModal,toggle:a.toggleLoginModal},o.a.createElement(he.a,null,o.a.createElement(be,null)))})),_e=a(111),Se=a(112),Ce=a(113),Ne=a(114);var we=oe(se((function(e){var t=e.currentMovie,a=e.auth.user,n=e.movie,r=n.moviesFavourite,c=n.moviesWillWatch,i=e.movieActions,l=i.setWatchList,s=i.setFavouriteMovie,u=function(e,t){return!!t.map((function(e){return e.id})).find((function(t){return t===e.id}))},m=u(t,r),d=u(t,c);return a?o.a.createElement("div",null,m&&o.a.createElement(_e.a,{color:"secondary",className:"icon",onClick:function(){return s(t,!1)}}),!m&&o.a.createElement(Se.a,{color:"secondary",className:"icon",onClick:function(){return s(t,!0)}}),d&&o.a.createElement(Ce.a,{className:"icon",onClick:function(){return l(t,!1)}}),!d&&o.a.createElement(Ne.a,{className:"icon",onClick:function(){return l(t,!0)}})):o.a.createElement(o.a.Fragment,null)}))),je=a(58),Te=a.n(je);var Ae=function(e){var t,a=e.movie,n=a.title,r=a.backdrop_path,c=a.overview,i=a.vote_average,l=a.id;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:(t=r,t?"https://image.tmdb.org/t/p/w500".concat(t):Te.a),alt:n}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-title"},o.a.createElement(p.b,{to:"/movie/".concat(l,"/detail")},n),o.a.createElement("span",{className:"badge badge-warning"},i)),o.a.createElement(we,{currentMovie:a}),o.a.createElement("button",{type:"button",className:"btn btn-block btn-outline-dark mt-2","data-toggle":"modal","data-target":"#itemModal-".concat(l)},"About")),o.a.createElement("div",{id:"itemModal-".concat(l),className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"#modalTitle-".concat(l),"aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"#modalTitle-".concat(l)},n),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("p",null,c))))))};var Re=se((function(e){var t=e.movies;return o.a.createElement("div",{className:"row"},t.map((function(e){return o.a.createElement("div",{key:e.id,className:"col-12 mb-4 col-sm-6 col-lg-4"},o.a.createElement(Ae,{movie:e}))})))}));var Ie=se((function(e){var t=e.movie.moviesWillWatch;return o.a.createElement("div",null,o.a.createElement("h4",null,"Will watch ",t.length," movies"),o.a.createElement("ul",{className:"list-group"},t.map((function(e,t){return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(p.b,{to:"/movie/".concat(e.id,"/detail")},e.title))}))))}));var ke=se((function(e){var t=e.movie.sortBy,a=e.movieActions,n=a.setSortBy,r=a.fetchMovies;return o.a.createElement("ul",{className:"nav nav-tabs nav-pills"},[{title:"Popularity desc",sortBy:"popularity.desc"},{title:"Revenue desc",sortBy:"revenue.desc"},{title:"Release date desc",sortBy:"release_date.desc"}].map((function(e){return o.a.createElement("li",{key:e.sortBy,className:"nav-item"},o.a.createElement("div",{className:(a=e.sortBy,"nav-link ".concat(t===a?"active":"")),onClick:function(){return function(e){n(e),r()}(e.sortBy)}},e.title));var a})))}));function Le(e){var t=e.label,a=e.active,n=e.disabled,r=e.onClickPage,c=e.item;return o.a.createElement("li",{className:"page-item\n      ".concat(a?"active":"","\n      ").concat(n?"disabled":"","\n      ")},o.a.createElement("button",{className:"page-link",onClick:function(){return r(c)}},t))}var Me=se((function(e){for(var t=e.movie,a=t.activePage,n=t.totalPages,r=e.movieActions,c=r.setActivePage,i=r.fetchMovies,l=[],s=Math.max(a-2,1),u=Math.min(a+2,n),m=function(e){c(e),i(e)},d=s;d<=u;d++)l.push(o.a.createElement(Le,{active:d===a,key:d,label:d,onClickPage:m,item:d}));return o.a.createElement("nav",{"aria-label":"Page navigation"},o.a.createElement("ul",{className:"pagination"},o.a.createElement(Le,{label:"\u226a",onClickPage:m,item:1,disabled:1===a}),o.a.createElement(Le,{label:"<",onClickPage:m,item:a-1,disabled:1===a}),a-2>1&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Le,{label:1,onClickPage:m,item:1}),o.a.createElement(Le,{label:"...",disabled:!0})),l,a+2<n&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Le,{label:"...",disabled:!0}),o.a.createElement(Le,{label:n,onClickPage:m,item:n})),o.a.createElement(Le,{label:">",onClickPage:m,item:a+1,disabled:a===n}),o.a.createElement(Le,{label:"\u226b",onClickPage:m,item:n,disabled:a===n})))}));var Pe=se((function(e){var t=e.movie.currentYear,a=e.movieActions,n=a.setCurrentYear,r=a.fetchMovies;return o.a.createElement("select",{className:"custom-select custom-select mb-3 mt-3",onChange:function(e){n(parseInt(e.target.value)),r()},value:t},[2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015].map((function(e){return o.a.createElement("option",{key:e,value:e},e)})))}));var De=se((function(e){var t=e.movie,a=t.genres,n=t.genresSelected,r=e.movieActions,c=r.setSelectedGenres,i=r.fetchMovies,l=function(e){var t=e.target,a=t.checked,n=t.value;c({checked:a,value:n}),i()};return o.a.createElement("div",null,o.a.createElement("h4",null,"Select genres"),a.map((function(e){return o.a.createElement("div",{className:"form-group",key:e.id},o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"genres",value:e.id,id:e.id,onChange:l,checked:n.includes(e.id)}),o.a.createElement("label",{className:"form-check-label",htmlFor:e.id},e.name)))})))}));var Fe=se((function(e){var t=e.movie.movies,a=e.movieActions,n=a.clearCurrentMovie,r=a.fetchGenres,i=a.fetchMovies,l=a.clearAllFilters;return Object(c.useEffect)((function(){n(),r(),i()}),[]),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-3"},o.a.createElement("div",{className:"col-8"},o.a.createElement("div",{className:"row mb-3"},o.a.createElement("div",{className:"col"},o.a.createElement(ke,null))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(Re,{movies:t}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(Me,null)))),o.a.createElement("div",{className:"col-4"},o.a.createElement(Ie,null),o.a.createElement("button",{className:"btn btn-primary btn-block mt-3",onClick:function(){l(),i()}},"Clear all filters"),o.a.createElement(Pe,null),o.a.createElement(De,null))))})),Ue=a(123),Ge=a(124),Be=a(115),Ve=a(116),He=a(117),We=a(118),Ye=a(119),xe=a(120),Qe=a(121),qe=a(37),Je=a.n(qe);var ze=se((function(e){var t=e.movie,a=t.currentMovie,n=t.currentMovieActors,r=t.isLoading;return Object(c.useEffect)((function(){e.movieActions.fetchMovieActorsById(a.id)}),[]),r?o.a.createElement(Be.a,{style:{width:"3rem",height:"3rem"},type:"grow"}):0===n.length?o.a.createElement("div",null):o.a.createElement(Ve.a,{className:"mx-3"},n.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement(He.a,{inverse:!0,style:{maxWidth:"300px"}},o.a.createElement(We.a,{src:(a=e.profile_path,a?"https://image.tmdb.org/t/p/w500".concat(a):Je.a),alt:e.name}),o.a.createElement(Ye.a,null,o.a.createElement(xe.a,null,o.a.createElement(Qe.a,{color:"dark",className:"text-wrap"},"".concat(e.character," / ").concat(e.name))))));var a})))})),Ke=a(122);var Xe=se((function(e){var t=e.movie.currentMovie;return o.a.createElement(Ke.a,null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Tagline"),o.a.createElement("td",null,t.tagline)),o.a.createElement("tr",null,o.a.createElement("td",null,"Rating"),o.a.createElement("td",null,o.a.createElement(Qe.a,{color:"success"},"".concat(t.vote_average," (").concat(t.vote_count,")")))),o.a.createElement("tr",null,o.a.createElement("td",null,"Genres"),o.a.createElement("td",null,t.genres.map((function(e){return o.a.createElement(Qe.a,{key:e.id,color:"warning",pill:!0},e.name)})))),o.a.createElement("tr",null,o.a.createElement("td",null,"Runtime"),o.a.createElement("td",null,t.runtime," min")),o.a.createElement("tr",null,o.a.createElement("td",null,"Status"),o.a.createElement("td",null,t.status)),o.a.createElement("tr",null,o.a.createElement("td",null,"Release date"),o.a.createElement("td",null,t.release_date)),o.a.createElement("tr",null,o.a.createElement("td",null,"Country"),o.a.createElement("td",null,t.production_countries.map((function(e,t){return o.a.createElement("span",{key:t},e.name," ")}))))))}));var Ze=se((function(e){var t=e.movie,a=t.currentMovie,n=t.currentMovieVideos,r=t.isLoading;return Object(c.useEffect)((function(){e.movieActions.fetchMovieVideosById(a.id)}),[]),r?o.a.createElement(Be.a,{style:{width:"3rem",height:"3rem"},type:"grow"}):0===n.length?o.a.createElement("div",null):o.a.createElement("div",{className:"row"},n.map((function(e){return o.a.createElement("div",{key:e.id,className:"col-3 mb-2"},o.a.createElement("a",{target:"_blank",href:"http://www.youtube.com/watch?v=".concat(e.key),rel:"noopener noreferrer"},o.a.createElement("img",{className:"img-fluid",src:"https://img.youtube.com/vi/".concat(e.key,"/default.jpg"),alt:e.name})))})))}));var $e=se((function(e){Object(c.useEffect)((function(){var t=e.match.params.id;e.movieActions.fetchMovieById(t)}),[]);var t=e.movie.currentMovie;if(null===t)return o.a.createElement("div",null);var a,n=t.title,r=t.overview,i=t.poster_path;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-3"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("img",{className:"card-img-top",src:(a=i,a?"https://image.tmdb.org/t/p/w500".concat(a):Je.a),alt:n})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title display-4 text-center"},n),o.a.createElement("p",{className:"card-text"},r),o.a.createElement(we,{currentMovie:t}))))),o.a.createElement("div",null,o.a.createElement(Ue.a,{tabs:!0,className:"my-2"},o.a.createElement(Ge.a,null,o.a.createElement(p.c,{className:"nav-link",to:"/movie/".concat(t.id,"/detail")},"Details")),o.a.createElement(Ge.a,null,o.a.createElement(p.c,{className:"nav-link",to:"/movie/".concat(t.id,"/videos")},"Video")),o.a.createElement(Ge.a,null,o.a.createElement(p.c,{className:"nav-link",to:"/movie/".concat(t.id,"/credit")},"Credits"))),o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"/movie/:id/detail"},o.a.createElement(Xe,null)),o.a.createElement(f.a,{path:"/movie/:id/videos"},o.a.createElement(Ze,null)),o.a.createElement(f.a,{path:"/movie/:id/credit"},o.a.createElement(ze,null)))))))}));var et=se((function(e){var t=e.movie.moviesFavourite;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-3"},o.a.createElement("div",{className:"col"},o.a.createElement(Re,{movies:t}))))}));var tt=se((function(e){var t=e.movie.moviesWillWatch;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-3"},o.a.createElement("div",{className:"col"},o.a.createElement(Re,{movies:t}))))})),at=oe(function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.auth,a=e.authActions;t.sessionId?a.fetchAuth(t.sessionId):a.toggleLoginModal()}},{key:"render",value:function(){var e=this.props.auth,t=e.sessionId,a=e.isAuth,n=e.showLoginModal;return a||!t?o.a.createElement(p.a,{basename:"/"},o.a.createElement(pe,null),n&&o.a.createElement(Oe,null),o.a.createElement(f.a,{exact:!0,path:"/"}," ",o.a.createElement(Fe,null)),o.a.createElement(f.a,{path:"/favorite"}," ",o.a.createElement(et,null)),o.a.createElement(f.a,{path:"/willwatch"}," ",o.a.createElement(tt,null)),o.a.createElement(f.a,{path:"/movie/:id",render:function(e){return o.a.createElement($e,e)}})):o.a.createElement("p",null,"...Loading")}}]),t}(o.a.Component)),nt=(a(93),a(94),a(96),a(59)),rt=a(60),ct=new(a(61).a);function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function it(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(a),!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var lt={user:null,sessionId:ct.get("session_id"),isAuth:!1,showLoginModal:!1,errors:null},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_AUTH_SUCCESS":return it({},e,{user:n.user,sessionId:n.session_id,isAuth:!0});case"REQUEST_LOGOUT_SUCCESS":return it({},e,{user:null,sessionId:null,isAuth:!1});case"TOGGLE_LOGIN_MODAL":return it({},e,{showLoginModal:!e.showLoginModal});case"REQUEST_LOGIN_ERROR":return it({},e,{errors:{base:n.status_message}});case"CLEAR_LOGIN_ERRORS":return it({},e,{errors:null});default:return e}};function ut(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function mt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(a),!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ut(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var dt={errors:null,isLoading:!1,moviesFavourite:[],moviesWillWatch:[],movies:[],genres:[],genresSelected:[],sortBy:"popularity.desc",currentYear:(new Date).getFullYear(),activePage:1,totalPages:0,currentMovie:null,currentMovieVideos:[],currentMovieActors:[]},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"START_LOADING":return mt({},e,{isLoading:!0});case"STOP_LOADING":return mt({},e,{isLoading:!1});case"UPDATE_MOVIES_FAVORITE":return mt({},e,{moviesFavourite:n});case"UPDATE_MOVIES_WILL_WATCH":return mt({},e,{moviesWillWatch:n});case"FETCH_GENRES_SUCCESS":return mt({},e,{genres:n});case"FETCH_GENRES_ERROR":return mt({},e,{errors:n});case"FETCH_MOVIES_SUCCESS":return mt({},e,{movies:n.movies,totalPages:n.totalPages});case"SET_SORT_BY":return mt({},e,{sortBy:n,activePage:1});case"SET_CURRENT_YEAR":return mt({},e,{currentYear:n,activePage:1});case"SET_SELECTED_GENRES":return mt({},e,{genresSelected:n,activePage:1});case"SET_ACTIVE_PAGE":return mt({},e,{activePage:n});case"CLEAR_ALL_FILTERS":return mt({},e,{genresSelected:[],sortBy:"popularity.desc",activePage:1,currentYear:2020});case"FETCH_MOVIE_BY_ID_SUCCESS":return mt({},e,{currentMovie:n});case"CLEAR_CURRENT_MOVIE":return mt({},e,{currentMovie:null,currentMovieVideos:[],currentMovieActors:[]});case"FETCH_MOVIE_BY_ID_ERROR":return mt({},e,{errors:n});case"FETCH_MOVIE_VIDEOS_BY_ID_SUCCESS":return mt({},e,{currentMovieVideos:n});case"FETCH_MOVIE_ACTORS_BY_ID_SUCCESS":return mt({},e,{currentMovieActors:n});case"CLEAR_ALL_USER_DATA":return mt({},e,{moviesFavourite:[],moviesWillWatch:[]});default:return e}},Et=Object(h.combineReducers)({auth:st,movie:vt}),pt=Object(h.createStore)(Et,Object(rt.composeWithDevTools)(Object(h.applyMiddleware)(nt.a,(function(e){e.dispatch,e.getState;return function(e){return function(t){return"FETCH_AUTH_SUCCESS"===t.type&&ct.set("session_id",t.payload.session_id,{path:"/",maxAge:2592e3}),"REQUEST_LOGOUT_SUCCESS"===t.type&&ct.remove("session_id"),e(t)}}}))));l.a.render(o.a.createElement(s.a,{store:pt},o.a.createElement(at,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.bc4277d9.chunk.js.map