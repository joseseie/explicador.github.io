webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[t.showDrawer?i("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""}},[i("menu-left")],1):t._e(),t._v(" "),t.showDrawerRight?i("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:"",right:""}},[i("v-list",{attrs:{dense:""}},[[i("explicador")]],2)],1):t._e(),t._v(" "),i("v-toolbar",{attrs:{color:"blue darken-3",dark:"",app:"","clipped-left":"","clipped-right":"",fixed:""}},[i("v-toolbar-title",{staticClass:"ml-0 pl-3",style:t.$vuetify.breakpoint.smAndUp?"width: 300px; min-width: 250px":"min-width: 72px"},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("span",{staticClass:"hidden-xs-only",staticStyle:{cursor:"pointer"},on:{click:t.pushMainPage}},[t._v(t._s(t.title))]),t._v(" "),i("span",{staticClass:"hidden-sm-and-up",staticStyle:{cursor:"pointer"},on:{click:t.pushMainPage}},[t._v(t._s(t.title.substr(0,3)))])],1),t._v(" "),i("v-text-field",{staticClass:"hidden-xs-only",staticStyle:{"max-width":"600px","min-width":"128px"},attrs:{light:"",solo:"","prepend-icon":"search",placeholder:"Search"}}),t._v(" "),i("div",{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[i("v-btn",{staticClass:"hidden-sm-and-up",attrs:{icon:""}},[i("v-icon",[t._v("search")])],1),t._v(" "),i("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""}},[i("v-icon",[t._v("apps")])],1),t._v(" "),i("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""}},[i("v-icon",[t._v("notifications")])],1),t._v(" "),i("auth-dropdown"),t._v(" "),i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}})],1)],1),t._v(" "),i("v-content",[i("router-view")],1),t._v(" "),[t.isHomePage?i("login-dialog"):t._e(),t._v(" "),t.isLoginPage?i("home-fab-buttom"):t._e()],t._v(" "),i("v-footer",{attrs:{fixed:t.fixed,app:""}},[i("span",[t._v("© Explicador 2018")])])],2)},staticRenderFns:[]},r=i("VU/8")({data:function(){return{title:"Explicador",drawer:!0,drawerRight:!0,fixed:!0}},computed:{showDrawer:function(){return this.drawer&&this.$store.getters.isSideMenusShowing},showDrawerRight:function(){return this.drawerRight&&this.$store.getters.isSideMenusShowing},isHomePage:function(){return this.$store.getters.isHomePage},isLoginPage:function(){return this.$store.getters.isLoginPage}},methods:{pushMainPage:function(){this.$router.push("/")}}},s,!1,null,null,null).exports,n=i("/ocq"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"mb-1 explicador-bar-fixed",attrs:{xs12:""}},[i("v-list",{staticClass:"text-xs-center",attrs:{"three-line":""}},[i("h4",[t._v("Explicadores > Matematica Basica")])]),t._v(" "),i("v-list")],1),t._v(" "),i("v-card",{staticClass:"mt-5",attrs:{xs12:""}},[i("v-list",{attrs:{"three-line":""}},[t._l(t.explicadores,function(e){return[e.header?i("v-subheader",{domProps:{textContent:t._s(e.header)}}):e.divider?i("v-divider",{attrs:{inset:e.inset}}):i("v-list-tile",{key:e.title,attrs:{avatar:"",router:"",to:e.link},on:{click:t.goToProfile}},[i("v-list-tile-avatar",[i("img",{attrs:{src:e.avatar}})]),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2)],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")({data:function(){return{}},computed:{explicadores:function(){return this.$store.getters.getExplicadores}},methods:{goToProfile:function(){this.$store.dispatch("togleHomePage",!1)}}},o,!1,function(t){i("Qyzf")},"data-v-4c4cc2a5",null).exports,c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",{staticClass:"mb-1 explicador-bar-fixed",attrs:{xs12:""}},[i("v-list",{staticClass:"text-xs-center",attrs:{"three-line":""}},[i("h4",[t._v("Seie > Perfil > Dados Pessoais")])]),t._v(" "),i("v-list")],1),t._v(" "),i("v-card",[i("v-card-title",[t._v("Perfil do explicador")]),t._v(" "),i("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"","align-center":"","justify-space-between":""}},[i("v-layout",{attrs:{"align-center":""}},[i("v-avatar",{staticClass:"mr-3",attrs:{size:"40px"}},[i("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),t._v(" "),i("v-text-field",{attrs:{placeholder:"Name"}})],1)],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{"prepend-icon":"mail",placeholder:"Email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{type:"tel","prepend-icon":"phone",placeholder:"(000) 000 - 0000",mask:"phone"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-btn",{staticClass:"red"},[t._v("Actualizar senha")])],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1),t._v(" "),i("v-card",[i("v-card-title",[t._v("Dados Academicos")]),t._v(" "),i("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{"prepend-icon":"mail",placeholder:"Email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{type:"tel","prepend-icon":"phone",placeholder:"(000) 000 - 0000",mask:"phone"}})],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1),t._v(" "),i("v-card",[i("v-card-title",[t._v("Dados de Localizacao")]),t._v(" "),i("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{"prepend-icon":"mail",placeholder:"Email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{type:"tel","prepend-icon":"phone",placeholder:"(000) 000 - 0000",mask:"phone"}})],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},d=i("VU/8")({data:function(){return{dialog:!1}}},c,!1,null,null,null).exports,u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.error?i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),i("v-layout",[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-card-text",[i("h2",{staticStyle:{color:"darkgray"}},[t._v("Faca Login")])])],1),t._v(" "),i("v-card",[i("v-card-text",[i("v-container",[i("form",{on:{submit:function(e){e.preventDefault(),t.onLogin(e)}}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"email",label:"Mail","prepend-icon":"mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"password",label:"Password","prepend-icon":"lock",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{round:"",to:"/"}},[t._v("\n                                        Cancelar\n                                    ")]),t._v(" "),i("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                                        Entrar\n                                        "),i("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[i("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1),t._v(" "),i("v-card",[i("v-card-text",[i("p",{staticStyle:{color:"darkgray"}},[t._v("Ainda nao tem conta? "),i("v-icon",[t._v("help")]),i("a",{attrs:{href:"/register"}},[t._v("Clique aqui para criar conta")])],1)])],1)],1)],1)],1)},staticRenderFns:[]},v=i("VU/8")({data:function(){return{email:"",password:""}},computed:{error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{onLogin:function(){this.$store.dispatch("loginUser",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},u,!1,null,null,null).exports,p={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Senha de confirmacao nao corresponde":""},userAuth:function(){return this.$store.getters.userAuth},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{userAuth:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("createUser",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.error?i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),i("v-layout",[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-card-text",[i("h2",{staticStyle:{color:"darkgray"}},[t._v("Criacao de conta")])])],1),t._v(" "),i("v-card",[i("v-card-text",[i("v-container",[i("form",{on:{submit:function(e){e.preventDefault(),t.onSignup(e)}}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"email",label:"Mail","prepend-icon":"mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"password",label:"Password","prepend-icon":"lock",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password","prepend-icon":"lock",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{staticClass:"red",attrs:{round:"",type:"submit",to:"/",disabled:t.loading,loading:t.loading}},[t._v("\n                                        Cancelar\n                                        "),i("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[i("v-icon",{attrs:{light:""}},[t._v("cached")])],1)]),t._v(" "),i("v-btn",{staticClass:"green",attrs:{round:"",type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                                        Registar\n                                        "),i("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[i("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1),t._v(" "),i("v-card",[i("v-card-text",[i("p",{staticStyle:{color:"darkgray"}},[t._v("Ja possui uma conta? "),i("v-icon",[t._v("help")]),i("a",{attrs:{href:"/login"}},[t._v("Clique aqui para login login")])],1)])],1)],1)],1)],1)},staticRenderFns:[]},h=i("VU/8")(p,f,!1,null,null,null).exports,g=i("NYxO"),m=i("Sazm"),_={state:{userAuth:null,db_users:[]},mutations:{setUserAuth:function(t,e){t.userAuth=e},setDBUser:function(t,e){t.db_users=e}},getters:{userAuth:function(t){return t.userAuth}},actions:{createUser:function(t,e){var i=t.commit;i("setLoading",!0),i("clearError");var a={};m.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return a={id:t.uid,name:"",idade:-1},m.database().ref("Users").push(a)}).then(function(){i("setUserAuth",a),i("setLoading",!1)}).catch(function(t){i("setLoading",!1),i("setError",t),console.log(t)})},loginUser:function(t,e){var i=t.commit;i("setLoading",!0),i("clearError"),m.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){var e={id:t.uid};i("setUserAuth",e),b.push("/teste/profile")}).catch(function(t){i("setLoading",!1),i("setError",t),console.log(t)})},logOutUser:function(){m.auth().signOut(),b.push("/")},autoSignIn:function(t,e){(0,t.commit)("setUserAuth",e)},getAllUsers:function(t){var e=t.commit,i=t.state;m.database().ref("Users").once("value").then(function(t){var i=[],a=t.val();for(var s in a)i.push({id:a[s].id,idade:a[s].idade,name:a[s].name});return e("setDBUser",i),i}).then(function(t){if(null!==i.userAuth&&void 0!==i.userAuth){var a=t.find(function(t){return t.id===i.userAuth.uid});e("setUserAuth",a)}}).catch(function(t){console.log(t)})}}},x={state:{loading:!1,error:null,auth_img:"https://avatars0.githubusercontent.com/u/18400142?s=460&v=4",not_auth_img:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",showSideMenus:!0,main_menu:[{aditional:!1,icon:"help",text:"Disciplina 01"},{aditional:!1,icon:"help",text:"Disciplina 01"},{aditional:!1,icon:"help",text:"Disciplina 01"},{aditional:!1,icon:"help",text:"Disciplina 01"},{aditional:!1,icon:"help",text:"Disciplina 01"},{aditional:!1,icon:"help",text:"Disciplina 01"},{aditional:!0,icon:"settings",text:"Configuracoes"},{aditional:!0,icon:"add",text:"Adicionar nova "}],profile_main_menu:[{aditional:!1,icon:"help",text:"Dados Pessoais"},{aditional:!1,icon:"help",text:"Dados academicos"},{aditional:!1,icon:"help",text:"Localizacao"}],profile_menu_right:[{aditional:!1,icon:"help",text:"Disciplinas que explica"},{aditional:!1,icon:"help",text:"O que dizem sobre ele"},{aditional:!1,icon:"help",text:"Sua disponibilidade"},{aditional:!1,icon:"help",text:"Seus Estudantes"}],homePage:!0,loginPage:!1,closeLoginDialog:!1,tipos:["Disciplinas","Cursos","Classes","Escolas","Universidades","Institutos"],auth_dropdown:[{isLink:!0,icon:"tag_faces",title:"Perfil",link:"/perfil/profile"},{isLink:!1,icon:"input",title:"Log out",link:!1}],not_auth_dropdown:[{isLink:!0,icon:"account_circle",title:"Login",link:"/login"},{isLink:!0,icon:"supervisor_account",title:"Registo ",link:"/register"}]},mutations:{togleHome:function(t,e){t.homePage=e,t.loginPage=!e},togleLogin:function(t,e){t.loginPage=e,t.homePage=!e},togleSideMenus:function(t,e){t.showSideMenus=e},setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},getters:{getMenuOptions:function(t){return t.homePage?t.main_menu:t.profile_main_menu},getMenuRightSide:function(t){return t.profile_menu_right},isHomePage:function(t){return t.homePage},isLoginPage:function(t){return t.loginPage},isSideMenusShowing:function(t){return t.showSideMenus},isUserAuth:function(){return null!==_.state.userAuth&&void 0!==_.state.userAuth},getDropdownItems:function(t,e){return e.isUserAuth?t.auth_dropdown:t.not_auth_dropdown},getTipos:function(t){return t.tipos},error:function(t){return t.error},getImg:function(t,e){return e.isUserAuth?t.auth_img:t.not_auth_img},getDialogLoginSucess:function(t){return t.closeLoginDialog}},actions:{togleHomePage:function(t,e){(0,t.commit)("togleHome",e)},togleLoginPage:function(t,e){(0,t.commit)("togleLogin",e)},togleSideMenus:function(t,e){(0,t.commit)("togleSideMenus",e)},clearError:function(t){(0,t.commit)("clearError")}}};a.a.use(g.a);var w=new g.a.Store({modules:{shared:x,explicador:{state:{user:null,explicadores:[{header:"Explicadores",icon:'<i class="fas fa-street-view"></i>'},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/1.jpg",title:"Brunch this weekend?",subtitle:"<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{divider:!0,inset:!0},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/3.jpg",title:"Oui oui",subtitle:"<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/4.jpg",title:"Birthday gift",subtitle:"<span class='grey--text text--darken-2'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/5.jpg",title:"Recipe to try",subtitle:"<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos."},{divider:!0,inset:!0},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/5.jpg",title:"Good to be",subtitle:"<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos."},{divider:!0,inset:!0},{link:"/seie/profile",avatar:"https://vuetifyjs.com/static/doc-images/lists/5.jpg",title:"Recipe ty",subtitle:"<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]},mutations:{setUser:function(t,e){t.user=e}},getters:{user:function(t){return t.user},getExplicadores:function(t){return t.explicadores}}},auth:_}});a.a.use(n.a);var b=new n.a({routes:[{path:"/",name:"Home",component:l,beforeEnter:function(t,e,i){w.getters.isSideMenusShowing||w.dispatch("togleSideMenus",!0),w.dispatch("togleHomePage",!0),i()}},{path:"/:profile/profile",name:"Index",component:d,beforeEnter:function(t,e,i){w.getters.isSideMenusShowing||w.dispatch("togleSideMenus",!0),w.dispatch("togleHomePage",!1),i()}},{path:"/login",name:"Login",component:v,beforeEnter:function(t,e,i){w.getters.isSideMenusShowing&&w.dispatch("togleSideMenus",!1),w.dispatch("togleLoginPage",!0),i()}},{path:"/register",name:"Register",component:h,beforeEnter:function(t,e,i){w.getters.isSideMenusShowing&&w.dispatch("togleSideMenus",!1),i()}}],mode:"history"}),y=i("3EgV"),k=i.n(y),P=(i("7zck"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-tooltip",{attrs:{left:""}},[e("v-btn",{attrs:{slot:"activator",fab:"",bottom:"",right:"",color:"blue",dark:"",fixed:"",to:"/"},slot:"activator"},[e("v-icon",[this._v("home")])],1),this._v(" "),e("span",[this._v("Ir para a pagina principal")])],1)},staticRenderFns:[]}),S=i("VU/8")(null,P,!1,null,null,null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n    "+this._s(this.text)+"\n")])},staticRenderFns:[]};var $=i("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},C,!1,function(t){i("V9AK")},"data-v-6594ffa8",null).exports,D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}},slot:"activator"},[i("v-icon",[t._v("add")])],1),t._v(" "),i("v-card",[i("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[t._v("\n            Create contact\n        ")]),t._v(" "),i("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"","align-center":"","justify-space-between":""}},[i("v-layout",{attrs:{"align-center":""}},[i("v-avatar",{staticClass:"mr-3",attrs:{size:"40px"}},[i("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),t._v(" "),i("v-text-field",{attrs:{placeholder:"Name"}})],1)],1),t._v(" "),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{"prepend-icon":"business",placeholder:"Company"}})],1),t._v(" "),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{placeholder:"Job title"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{"prepend-icon":"mail",placeholder:"Email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{type:"tel","prepend-icon":"phone",placeholder:"(000) 000 - 0000",mask:"phone"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{"prepend-icon":"notes",placeholder:"Notes"}})],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"primary"}},[t._v("More")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},E=i("VU/8")({data:function(){return{dialog:!1}}},D,!1,null,null,null).exports,U={data:function(){return{dialog:!1,email:"",password:""}},computed:{error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading},isUserAuth:function(){return this.$store.getters.isUserAuth}},methods:{onLogin:function(){this.$store.dispatch("loginUser",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")},mostrarDialog:function(){this.isUserAuth?this.isUserAuth&&confirm("Voce esta autenticado, \n\n\n\nDeseja fechar a sessao actual para iniciar uma nova sessao?")&&(this.$store.dispatch("logOutUser"),this.dialog=!this.dialog):this.dialog=!this.dialog}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"350px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:"",title:"Entrar"},on:{click:function(e){e.stopPropagation(),t.mostrarDialog(e)}},slot:"activator"},[i("v-icon",[t._v("account_circle")])],1),t._v(" "),i("v-card",[i("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[t._v("\n            Faca Login\n        ")]),t._v(" "),i("v-container",{staticClass:"pa-4 mb-5",attrs:{"grid-list-sm":""}},[t.error?i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),i("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"email",label:"Mail","prepend-icon":"mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"password",label:"Password","prepend-icon":"lock",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"primary"}},[t._v("More")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:t.onLogin}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},L=i("VU/8")(U,A,!1,null,null,null).exports,M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[t.isHomePage?i("v-card",[i("v-list",{staticClass:"text-xs-center"},[i("h4",[t._v("Explicadores Populares")])]),t._v(" "),i("v-list",{attrs:{"three-line":""}},[t._l(t.explicadores,function(e){return[e.header?i("v-subheader",{domProps:{textContent:t._s(e.header)}}):e.divider?i("v-divider",{attrs:{inset:e.inset}}):i("v-list-tile",{key:e.title,attrs:{avatar:"",router:"",to:e.link},on:{click:function(t){}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:e.avatar}})]),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2)],1):i("v-card",[i("v-list",t._l(t.menuItens,function(e){return i("div",[e.aditional?i("v-divider"):t._e(),t._v(" "),[i("v-list-tile",{on:{click:function(t){}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("\n                                    "+t._s(e.text)+"\n                                ")])],1)],1)]],2)}))],1)],1)],1)},staticRenderFns:[]},H=i("VU/8")({data:function(){return{}},computed:{explicadores:function(){return this.$store.getters.getExplicadores},isHomePage:function(){return this.$store.getters.isHomePage},menuItens:function(){return this.$store.getters.getMenuRightSide}},methods:{}},M,!1,null,null,null).exports,R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list",{attrs:{dense:""}},[[t.isHomePage?i("v-layout",{attrs:{"justify-center":"","fill-height":""}},[i("v-flex",{attrs:{xs11:""}},[i("v-select",{attrs:{items:t.tipos,label:"Select","single-line":"",auto:"","prepend-icon":"map","hide-details":""},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1)],1):t._e(),t._v(" "),t.isHomePage?i("v-layout",[i("v-flex",[i("v-text-field",{staticClass:"elevation-0",staticStyle:{"max-width":"400px","min-width":"128px"},attrs:{light:"",solo:"","prepend-icon":"search",placeholder:"Pesquisar "+t.comp_searchedData},model:{value:t.searchedData,callback:function(e){t.searchedData=e},expression:"searchedData"}})],1)],1):t._e(),t._v(" "),t.isHomePage?i("v-divider"):t._e(),t._v(" "),t._l(t.menuItens,function(e){return i("div",[e.aditional?i("v-divider"):t._e(),t._v(" "),[i("v-list-tile",{on:{click:function(t){}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("\n                                "+t._s(e.text)+"\n                            ")])],1)],1)]],2)})],t._v(" "),i("v-divider")],2)],1)},staticRenderFns:[]},F=i("VU/8")({data:function(){return{right:!0,offsetTop:0,searchedData:"",e2:""}},computed:{comp_searchedData:function(){return this.e2},tipos:function(){return this.$store.getters.getTipos},menuItens:function(){return this.$store.getters.getMenuOptions},isHomePage:function(){return this.$store.getters.isHomePage}},methods:{}},R,!1,null,null,null).exports,I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-xs-center"},[i("v-menu",{attrs:{"offset-y":"",xs3:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",large:"",title:"Voce nao esta autenticado"},slot:"activator"},[i("v-avatar",{attrs:{size:"32px"}},[i("img",{attrs:{src:t.imgDefault,alt:""}})])],1),t._v(" "),i("v-list",t._l(t.dropdownItems,function(e){return i("div",{key:e.title},[e.isLink?i("v-list-tile",{attrs:{router:"",to:e.link}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-title",[t._v(t._s(e.title))])],1):i("v-list-tile",{on:{click:t.logOutUser}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1)],1)},staticRenderFns:[]},j=i("VU/8")({data:function(){return{}},computed:{dropdownItems:function(){return this.$store.getters.getDropdownItems},imgDefault:function(){return this.$store.getters.getImg}},methods:{logOutUser:function(){this.$store.dispatch("logOutUser")}}},I,!1,null,null,null).exports;a.a.component("home-fab-buttom",S),a.a.component("app-alert",$),a.a.component("add-dialog",E),a.a.component("login-dialog",L),a.a.component("explicador",H),a.a.component("menu-left",F),a.a.component("auth-dropdown",j),a.a.use(g.a),a.a.use(k.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),a.a.config.productionTip=!1,new a.a({el:"#app",router:b,store:w,components:{App:r},template:"<App/>",created:function(){},beforeCreate:function(){var t=this;m.initializeApp({apiKey:"AIzaSyDBfaoaVP6S4_fWwzsSzKhR3rc-fiMtY9w",authDomain:"explicador-284b3.firebaseapp.com",databaseURL:"https://explicador-284b3.firebaseio.com",projectId:"explicador-284b3",storageBucket:"",messagingSenderId:"357384306340"}),m.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoSignIn",e),t.$store.dispatch("getAllUsers")})}})},Qyzf:function(t,e){},V9AK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a105ac611c53013727f8.js.map