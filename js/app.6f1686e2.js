(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("96cf");var o=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar"),n("vue-page-transition",{attrs:{name:"fade-in-right"}},[n("router-view")],1),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"noblock"},[n("div",[n("h2",[e._v("Please disabled ad blockers to access this site")]),n("button",{attrs:{onclick:"window.location = '/#'"}},[e._v("I disabled Adblock, let me in")])])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainNavbar"},[n("div",{staticClass:"navLogo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo.png",alt:e.$siteConfig.siteName}})])],1),e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.burgerChecked,expression:"burgerChecked"}],staticClass:"nav-bar__toggle",attrs:{type:"checkbox",id:"toggle"},domProps:{checked:Array.isArray(e.burgerChecked)?e._i(e.burgerChecked,null)>-1:e.burgerChecked},on:{change:function(t){var n=e.burgerChecked,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r=null,i=e._i(n,r);o.checked?i<0&&(e.burgerChecked=n.concat([r])):i>-1&&(e.burgerChecked=n.slice(0,i).concat(n.slice(i+1)))}else e.burgerChecked=a}}}),n("div",{staticClass:"navItems"},[n("router-link",{attrs:{to:"/earn"}},[n("i",{staticClass:"fas fa-money-bill-wave"}),e._v(" Earn")]),n("router-link",{attrs:{to:"/daily"}},[n("i",{staticClass:"fas fa-gift"}),e._v(" Daily Rewards")]),n("router-link",{attrs:{to:"/giveaway"}},[n("i",{staticClass:"fas fa-ticket-alt"}),e._v(" Giveaway")]),n("router-link",{attrs:{to:"/promocode"}},[n("i",{staticClass:"fas fa-percentage"}),e._v(" Promocode")]),n("router-link",{attrs:{to:"/payout"}},[n("i",{staticClass:"fas fa-coins"}),e._v(" Payout")]),n("router-link",{attrs:{to:"/account"}},[n("i",{staticClass:"fas fa-user-circle"}),e._v(" Account")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/faq"}},[e._v("FAQ")])],1),e.loggedIn?n("div",{staticClass:"account"},[n("img",{staticClass:"icon",staticStyle:{height:"40px",width:"40px"},attrs:{src:"https://www.roblox.com/Thumbs/Avatar.ashx?x=50&y=50&username="+e.username}}),n("div",{staticClass:"name"},[e._v(e._s(e.username))]),n("div",{staticClass:"balance"},[e._v(e._s(this.$siteConfig.pointsPrefix+" "+e.balance))]),n("button",{staticClass:"logout",on:{click:function(t){return e.logout()}}},[e._v("Logout")])]):n("router-link",{staticClass:"account",attrs:{to:"/login"}},[e._v("Add Account")])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"hamburger",attrs:{for:"toggle"}},[n("i",{staticClass:"fas fa-bars"})])}],u=(n("99af"),{data:function(){return{loggedIn:!!localStorage.username,siteName:this.$siteConfig.siteName,logoUrl:this.$siteConfig.logoUrl,username:localStorage.username,balance:0,burgerChecked:!1}},methods:{logout:function(){localStorage.removeItem("username"),this.loggedIn=!1,this.$router.push("/")},fetchBalance:function(){var e=this;return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,o){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.$siteConfig.apiServer,"/account?name=").concat(e.username),{mode:"cors"});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n(JSON.parse(r).balance),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),o(0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}())}},watch:{$route:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.burgerChecked=!1,this.loggedIn=!!localStorage.username,this.username=localStorage.username,e.next=5,this.fetchBalance();case 5:this.balance=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchBalance();case 2:this.balance=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),l=u,d=n("2877"),m=Object(d["a"])(l,s,c,!1,null,null,null),v=m.exports,p={name:"app",components:{Navbar:v},mounted:function(){document.getElementById("TaZqKzEjPMmY")||(document.querySelector(".noblock").style.display="flex")}},h=p,f=Object(d["a"])(h,r,i,!1,null,null,null),g=f.exports,w=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainHome"},[n("div",{staticClass:"welcomePanel"},[n("div",[n("h1",[e._v("Welcome to "+e._s(this.$siteConfig.siteName))]),e._m(0),n("br"),n("button",{on:{click:function(t){return e.$router.push("/login")}}},[e._v("Start Earning Robux "),n("i",{staticClass:"fas fas fa-hand-holding-usd"})])]),n("img",{attrs:{src:"/img/gfx1.png"}})]),e._m(1)])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Earn "),n("strong",[e._v("FREE")]),e._v(" Robux by simply completing offers and watching videos!")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aboutPanels"},[n("div",[n("h2",[e._v("Link Account")]),n("p",[e._v("Link your account by entering your username, we will NEVER ask for your password.")])]),n("div",[n("h2",[e._v("Complete offers to earn Robux!")]),n("p",[e._v("Do surveys, play games, and watch videos.")])]),n("div",[n("h2",[e._v("Withdraw Robux")]),n("p",[e._v("Instantly withdraw the Robux directly into your Roblox account!")])])])}],_={mounted:function(){window.document.title=this.$siteConfig.siteName}},C=_,x=Object(d["a"])(C,y,b,!1,null,null,null),P=x.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainLogin"},[n("div",{staticClass:"loginBox"},[n("h1",[e._v("Login with your in-game username")]),n("p",[e._v("We will never ask for a password.")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.login()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("button",{on:{click:function(t){return e.login()}}},[e._v("Login")])])])])},k=[],$={data:function(){return{username:void 0}},methods:{login:function(){this.username&&(localStorage.username=this.username,this.username=void 0,this.$router.push("/earn"))}},mounted:function(){window.document.title="Login | "+this.$siteConfig.siteName}},j=$,A=Object(d["a"])(j,S,k,!1,null,null,null),O=A.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"earnMain"},[n("div",{staticClass:"statsPanel"},[n("div",[n("h2",[e._v("Users Registered")]),n("h2",[e._v(e._s(e.statsRegistered))])]),n("div",[n("h2",[e._v("Amount Rewared")]),n("h2",[e._v(e._s(e.statsRewarded))])]),n("div",[n("h2",[e._v("Offers Completed")]),n("h2",[e._v(e._s(e.statsOffers))])])]),n("div",{staticClass:"offerProviders"}),n("div",{staticClass:"earnPanel"})])},N=[],E={data:function(){return{statsRegistered:void 0,statsRewarded:void 0,statsOffers:void 0,user:localStorage.username}},mounted:function(){var e=this;window.document.title="Earn | "+this.$siteConfig.siteName,fetch("".concat(this.$siteConfig.apiServer,"/stats"),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.statsRegistered=t.u,e.statsRewarded=t.r,e.statsOffers=t.o}))}},U=E,G=Object(d["a"])(U,R,N,!1,null,null,null),T=G.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dailyMain"},[n("div",{staticClass:"dailyPanel"},[n("div",{staticClass:"quests"},[n("h1",[e._v("Daily Quests")]),n("p",[e._v("Resets in "+e._s(e.dayTimer))]),n("div",{staticClass:"list"},e._l(e.daily.redeemed,(function(t,o){return n("div",{key:o},[n("p",[e._v("Completed "+e._s(e.daily.complete)+" of "+e._s(t[0])+" offers")]),n("button",{attrs:{disabled:e.daily.complete<t[0]||t[2]},on:{click:function(t){return e.claimDaily(o)}}},[e._v("Claim "+e._s(t[1]))])])})),0)]),n("div",{staticClass:"achievements"},[n("h1",[e._v("Achievements")]),n("div",{staticClass:"list"},e._l(e.achivements.redeemed,(function(t,o){return n("div",{key:o},[n("p",[e._v("Completed "+e._s(e.achivements.complete)+" of "+e._s(t[0])+" offers")]),n("button",{attrs:{disabled:e.achivements.complete<t[0]||t[2]},on:{click:function(t){return e.claimAchievement(o)}}},[e._v("Claim "+e._s(t[1]))])])})),0)])])])},D=[],I={data:function(){return{achivements:[],daily:[],dayTimer:""}},methods:{claimDaily:function(e){var t=this;fetch("".concat(this.$siteConfig.apiServer,"/quests/claim"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({index:e,user:localStorage.username}),mode:"cors"}).then((function(){fetch("".concat(t.$siteConfig.apiServer,"/quests?name=").concat(localStorage.username),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return t.daily=e}))}))},claimAchievement:function(e){var t=this;fetch("".concat(this.$siteConfig.apiServer,"/achievements/claim"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({index:e,user:localStorage.username}),mode:"cors"}).then((function(){fetch("".concat(t.$siteConfig.apiServer,"/achievements?name=").concat(localStorage.username),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return t.achivements=e}))}))}},mounted:function(){var e=this;window.document.title="Daily Rewards | "+this.$siteConfig.siteName,fetch("".concat(this.$siteConfig.apiServer,"/quests?name=").concat(localStorage.username),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e.daily=t})),fetch("".concat(this.$siteConfig.apiServer,"/achievements?name=").concat(localStorage.username),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e.achivements=t})),setInterval((function(){var t=24-(new Date).getUTCHours(),n=60-(new Date).getUTCMinutes(),o=60-(new Date).getUTCSeconds();e.dayTimer=t+"h "+n+"m "+o+"s"}),1e3)}},L=I,q=Object(d["a"])(L,J,D,!1,null,null,null),H=q.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"giveawayMain"},[n("h1",[e._v("Giveaway")]),n("h2",[e._v("Prize: "+e._s(e.prize))]),n("div",{staticClass:"giveaway"},[n("div",{staticClass:"countdown"},[n("h2",[e._v("Next winner in "+e._s(e.timer))])]),n("p",[e._v("You can enter the giveaway every hour if you have completed an offer beforehand.")]),n("button",[e._v("Enter")]),n("h4",[e._v("Last Winner")]),n("p",{staticClass:"lastWinner"},[e._v(e._s(e.lastWinner))])])])},B=[],z={data:function(){return{timer:void 0,lastWinner:" . . . ",prize:" . . . "}},methods:{enter:function(){fetch("".concat(this.$apiHostname,"/joingiveaway"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user:localStorage.username}),mode:"cors"}).then((function(e){return e.json()})).then((function(e){alert(e.status)}))}},mounted:function(){var e=this;window.document.title="Giveaway | "+this.$siteConfig.siteName,fetch("".concat(this.$siteConfig.apiServer,"/giveaway/lastwinner")).then((function(e){return e.text()})).then((function(t){return e.lastWinner=t})),fetch("".concat(this.$siteConfig.apiServer,"/getgiveaway")).then((function(e){return e.json()})).then((function(t){return e.prize="".concat(e.$siteConfig.pointsPrefix).concat(t.value)})),setInterval((function(){var t=new Date,n=t.getMinutes(),o=t.getSeconds();e.timer="Giveaway ending in "+(60-n-1)+" minutes and "+(60-o)+" seconds!"}),1e3)}},V=z,W=Object(d["a"])(V,M,B,!1,null,null,null),F=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"promocodeMain"},[n("h1",[e._v("Promocode")]),n("div",{staticClass:"promocodePanel"},[n("h2",[e._v("Enter Code")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"Code"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("button",{on:{click:function(t){return e.redeem()}}},[e._v("Redeem")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}],staticClass:"result"},[e._v(e._s(e.result))])])])},Q=[],K={data:function(){return{code:void 0,result:void 0}},methods:{redeem:function(){var e=this;fetch("".concat(this.$siteConfig.apiServer,"/redeempromo"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:this.code,user:localStorage.username}),mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.code=void 0,"success"===t.status?e.result="Sucessfully redeemed":e.result="Code already used or invalid"}))}},mounted:function(){window.document.title="Promocode | "+this.$siteConfig.siteName}},X=K,Z=Object(d["a"])(X,Y,Q,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainPayout"},[n("h1",[e._v("Payout")]),n("p",[e._v("Minimum withdraw: 5 RBX")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.withdrawAmount,expression:"withdrawAmount"}],attrs:{type:"number",placeholder:"Amount"},domProps:{value:e.withdrawAmount},on:{input:function(t){t.target.composing||(e.withdrawAmount=t.target.value)}}}),n("button",{attrs:{disabled:e.withdrawAmount<5},on:{click:function(t){e.showGroup=!0}}},[e._v("Withdraw")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showGroup,expression:"showGroup"}]},[n("br"),n("h4",[e._v("Join this group before clicking Confirm")]),n("p",[e._v("If you do not join the group you will lose your Robux")]),n("a",{attrs:{href:"https://www.roblox.com/groups/"+e.siteGroup,target:"_blank",rel:"noopener noreferrer"}},[n("button",{on:{click:function(t){e.clickedJoin=!0}}},[e._v("Join Group")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.clickedJoin,expression:"clickedJoin"}]},[n("br"),n("h4",[e._v("Click Payout AFTER you have JOINED the group")]),n("button",{on:{click:function(t){return e.payout()}}},[e._v("Payout")])])])},ne=[],oe={data:function(){return{withdrawAmount:0,clickedJoin:!1,siteBalance:0,siteGroup:void 0,showGroup:!1}},methods:{payout:function(){var e=this;fetch("".concat(this.$siteConfig.apiServer,"/payout/pay"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({amount:this.withdrawAmount,user:localStorage.username}),mode:"cors"}).then((function(e){return e.json()})).then((function(t){alert(t.status),e.withdrawAmount=0,e.showGroup=!1,e.clickedJoin=!1}))}},mounted:function(){var e=this;window.document.title="Payout | "+this.$siteConfig.siteName,fetch("".concat(this.$siteConfig.apiServer,"/getrobloxbalance"),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e.siteBalance=t.balance})),fetch("".concat(this.$siteConfig.apiServer,"/getrobloxgroup"),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e.siteGroup=t.id}))}},ae=oe,re=Object(d["a"])(ae,te,ne,!1,null,null,null),ie=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accountMain"},[n("h1",[e._v("Your Account")]),n("div",{staticClass:"accountPanel"},[n("div",{staticClass:"profilePanel"},[n("img",{attrs:{src:"https://www.roblox.com/Thumbs/Avatar.ashx?x=250&y=250&username="+e.username}}),n("h2",[e._v(e._s(e.username))]),n("div",{staticClass:"logout"},[n("button",{staticClass:"logoutButton",on:{click:function(t){return e.logout()}}},[e._v("Logout")])])]),n("div",{staticClass:"statsPanel"},[n("h2",[e._v("Account Statistics")]),n("div",{staticClass:"stats"},[n("p",[n("strong",[e._v("Balance:")]),e._v(" "+e._s(e.accountDetails.balance))]),n("p",[n("strong",[e._v("Total Earned:")]),e._v(" "+e._s(e.accountDetails.totalEarned))]),n("p",[n("strong",[e._v("Completed Offers:")]),e._v(" "+e._s(e.accountDetails.offersComplete))])]),n("br"),n("div",{staticClass:"invite"},[n("h2",[e._v("Invite friends and earn Robux!")]),n("input",{staticStyle:{width:"80%"},attrs:{type:"text",placeholder:"https://"+e.$siteConfig.siteUrl+"/#/?invite="+e.username,disabled:""}}),n("p",[e._v("You will earn 5% of all Robux your friends earn.")])])])])])},ce=[],ue={data:function(){return{username:localStorage.username,accountDetails:void 0}},methods:{logout:function(){localStorage.removeItem("username"),this.$router.push("/")},fetchAccount:function(){var e=this;return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,o){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.$siteConfig.apiServer,"/account?name=").concat(localStorage.username),{mode:"cors"});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n(JSON.parse(r)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),o(0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}())}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.document.title="Account | "+this.$siteConfig.siteName,e.next=3,this.fetchAccount();case 3:this.accountDetails=e.sent;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},le=ue,de=Object(d["a"])(le,se,ce,!1,null,null,null),me=de.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainAbout"},[n("h1",[e._v("About Us")]),n("div",{staticClass:"aboutParagraphs"},e._l(e.paragraphs,(function(t,o){return n("div",{key:o,staticClass:"aboutParagraph"},[n("p",[e._v(e._s(t))])])})),0)])},pe=[],he={data:function(){return{paragraphs:this.$siteConfig.about}},mounted:function(){window.document.title="About Us | "+this.$siteConfig.siteName}},fe=he,ge=Object(d["a"])(fe,ve,pe,!1,null,null,null),we=ge.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"faqMain"},[n("h1",[e._v("Our frequently asked questions")]),n("div",{staticClass:"faqList"},e._l(e.questions,(function(t,o){return n("div",{key:o,staticClass:"faqItem"},[n("h2",[e._v(e._s(t[0]))]),n("p",[e._v(e._s(t[1]))])])})),0)])},be=[],_e={data:function(){return{questions:this.$siteConfig.faq}},mounted:function(){window.document.title="FAQ | "+this.$siteConfig.siteName}},Ce=_e,xe=Object(d["a"])(Ce,ye,be,!1,null,null,null),Pe=xe.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"adminMain"},[n("h1",[e._v("Admin Dashboard")]),n("div",{staticClass:"adminPanel"},[n("div",{staticClass:"pointGiver"},[n("h2",[e._v("Point Giver")]),n("p",[e._v("Give a user "+e._s(e.$siteConfig.pointsPrefix)+", use a negative number to remove points.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.giveUser,expression:"giveUser"}],attrs:{type:"text",placeholder:"User"},domProps:{value:e.giveUser},on:{input:function(t){t.target.composing||(e.giveUser=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.giveAmount,expression:"giveAmount"}],attrs:{type:"number",placeholder:"Amount of "+e.$siteConfig.pointsPrefix},domProps:{value:e.giveAmount},on:{input:function(t){t.target.composing||(e.giveAmount=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.givePoints()}}},[e._v("Give")]),n("br")]),n("div",{staticClass:"generatePromocode"},[n("h2",[e._v("Create Promocode")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.promoCode,expression:"promoCode"}],attrs:{type:"text",placeholder:"Code"},domProps:{value:e.promoCode},on:{input:function(t){t.target.composing||(e.promoCode=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.promoValue,expression:"promoValue"}],attrs:{type:"text",placeholder:"Value"},domProps:{value:e.promoValue},on:{input:function(t){t.target.composing||(e.promoValue=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.promoUses,expression:"promoUses"}],attrs:{type:"text",placeholder:"Uses"},domProps:{value:e.promoUses},on:{input:function(t){t.target.composing||(e.promoUses=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.createPromo()}}},[e._v("Create")])]),n("div",{staticClass:"setHourlyGiveaway"},[n("h2",[e._v("Hourly Giveaway")]),n("p",[e._v("Every hour "+e._s(e.$siteConfig.pointsPrefix+e.hourlyRate)+" can be given away.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newHourlyRate,expression:"newHourlyRate"}],attrs:{type:"number",placeholder:"New amount"},domProps:{value:e.newHourlyRate},on:{input:function(t){t.target.composing||(e.newHourlyRate=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.updateHourlyGiveaway()}}},[e._v("Update")])]),n("div",{staticClass:"payoutConfig"},[n("h2",[e._v("Payout Config")]),n("p",[e._v("Set Roblox Authentication Cookie and group ID.")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.robloxCookie,expression:"robloxCookie"}],attrs:{cols:"30",rows:"10",placeholder:"Enter your .ROBLOSECURITY cookie"},domProps:{value:e.robloxCookie},on:{input:function(t){t.target.composing||(e.robloxCookie=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.robloxGroup,expression:"robloxGroup"}],attrs:{type:"number",placeholder:"Enter your group ID"},domProps:{value:e.robloxGroup},on:{input:function(t){t.target.composing||(e.robloxGroup=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.updatePayoutConfig()}}},[e._v("Update")])]),n("div",{staticClass:"setPassword"},[n("h2",[e._v("Change Admin Password")]),n("p",[e._v("Change your password.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.changePassword,expression:"changePassword"}],attrs:{type:"password",placeholder:"Enter new password"},domProps:{value:e.changePassword},on:{input:function(t){t.target.composing||(e.changePassword=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.changePasswordConfirm,expression:"changePasswordConfirm"}],attrs:{type:"password",placeholder:"Enter again"},domProps:{value:e.changePasswordConfirm},on:{input:function(t){t.target.composing||(e.changePasswordConfirm=t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.changeAdminPassword()}}},[e._v("Change")])]),n("div",{staticClass:"logout"},[n("h2",[e._v("Log Out")]),n("button",{on:{click:function(t){return e.logout()}}},[e._v("Logout")])])])])},ke=[],$e={data:function(){return{giveUser:void 0,giveAmount:void 0,promoCode:void 0,promoValue:void 0,promoUses:void 0,hourlyRate:void 0,newHourlyRate:void 0,robloxCookie:void 0,robloxGroup:void 0,changePassword:void 0,changePasswordConfirm:void 0}},methods:{givePoints:function(){var e=this;fetch("".concat(this.$siteConfig.apiServer,"/givepoints"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({user:this.giveUser,amount:this.giveAmount}),mode:"cors"}).then((function(e){return e.json()})).then((function(t){"sucess"===t.stauts?alert("Sent ".concat(e.giveUser," ").concat(e.giveAmount," Robux!")):alert("Error, Robux not sent"),e.giveUser=void 0,e.giveAmount=void 0}))},createPromo:function(){var e=this;fetch("".concat(this.$siteConfig.apiServer,"/createpromo"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({name:this.promoCode,value:this.promoValue,uses:this.promoUses}),mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.promoCode=void 0,e.promoValue=void 0,e.promoUses=void 0,alert(t.status)}))},updateHourlyGiveaway:function(){var e=this;fetch("".concat(this.$siteConfig.apiServer,"/setgiveaway"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({value:this.newHourlyRate}),mode:"cors"}).then((function(e){return e.json()})).then((function(t){t.error?alert("Error: Giveaway amount not changed!"):e.hourlyRate=e.newHourlyRate,e.newHourlyRate=void 0}))},updatePayoutConfig:function(){fetch("".concat(this.$siteConfig.apiServer,"/setpayout"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({id:this.robloxGroup,cookie:this.robloxCookie}),mode:"cors"}).then((function(e){return e.json()})).then((function(e){"Success"==e.status?alert("Updated payout config"):alert("Error updating payout config")}))},changeAdminPassword:function(){var e=this;this.changePassword===this.changePasswordConfirm&&this.changePassword?fetch("".concat(this.$siteConfig.apiServer,"/admin/setpassword"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},body:JSON.stringify({pass:this.changePassword}),mode:"cors"}).then((function(e){return e.json()})).then((function(t){t.error?alert("Password not changed"):(localStorage.adminAuth=t.auth,e.changePassword=void 0,e.changePasswordConfirm=void 0,alert("Changed password!"))})):alert("Passwords do not match!")},logout:function(){localStorage.removeItem("adminAuth"),this.$router.push("/admin/login")}},mounted:function(){var e=this;fetch("".concat(this.$siteConfig.apiServer,"/getgiveaway"),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){t.error?e.hourlyRate="Error":e.hourlyRate=t.value})),fetch("".concat(this.$siteConfig.apiServer,"/getpayout"),{method:"POST",headers:{"content-type":"application/json",authorization:localStorage.adminAuth},mode:"cors"}).then((function(e){return e.json()})).then((function(t){t.status?alert("Error connecting to server!"):(e.robloxCookie=t.cookie,e.robloxGroup=t.group)}))}},je=$e,Ae=Object(d["a"])(je,Se,ke,!1,null,null,null),Oe=Ae.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainLogin"},[n("div",{staticClass:"loginBox"},[n("h1",[e._v("Admin Login")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.login(e.username,e.password)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("button",{attrs:{disabled:e.loggingin},on:{click:function(t){return e.login(e.username,e.password)}}},[e._v("Login")])])])])},Ne=[],Ee={data:function(){return{username:void 0,password:void 0,loggingin:!1}},methods:{login:function(e,t){var n=this;this.loggingin=!0,fetch("".concat(this.$siteConfig.apiServer,"/auth"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t}),mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.auth?(localStorage.adminAuth=e.auth,n.$router.push("/admin")):(alert("Error"),n.loggingin=!1)}))}},mounted:function(){window.document.title="Admin Login | "+this.$siteConfig.siteName}},Ue=Ee,Ge=Object(d["a"])(Ue,Re,Ne,!1,null,null,null),Te=Ge.exports;a["a"].use(w["a"]);var Je=new w["a"]({routes:[{path:"/",name:"Home",component:P},{path:"/login",name:"Login",component:O},{path:"/account",name:"Account",component:me,meta:{protected:!0}},{path:"/earn",name:"Earn",component:T,meta:{protected:!0}},{path:"/daily",name:"Daily",component:H,meta:{protected:!0}},{path:"/giveaway",name:"Giveaway",component:F,meta:{protected:!0}},{path:"/promocode",name:"Promocode",component:ee,meta:{protected:!0}},{path:"/payout",name:"Payout",component:ie,meta:{protected:!0}},{path:"/about",name:"About",component:we},{path:"/faq",name:"FAQ",component:Pe},{path:"/admin",name:"Admin",component:Oe,meta:{admin:!0}},{path:"/admin/login",name:"AdminLogin",component:Te},{path:"*",redirect:{name:"Home"}}]});Je.beforeEach((function(e,t,n){e.query["invite"]&&(localStorage.refferal=e.query["invite"]),n()})),Je.beforeEach((function(e,t,n){e.meta.admin&&!localStorage.adminAuth?n("/admin/login"):n()})),Je.beforeEach((function(e,t,n){e.meta.protected&&!localStorage.username?n("/login"):n()}));var De=Je,Ie=n("f0eb");function Le(){return qe.apply(this,arguments)}function qe(){return qe=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a["a"].prototype.$siteConfig=n,new a["a"]({router:De,render:function(e){return e(g)}}).$mount("#app");case 8:case"end":return e.stop()}}),e)}))),qe.apply(this,arguments)}a["a"].use(Ie["default"]),a["a"].config.productionTip=!1,Le()}});
//# sourceMappingURL=app.6f1686e2.js.map