!function(){"use strict";function t(t){!function(t){return Boolean(t.getElementsByClassName("linenos").length)}(t)?function(t){return Boolean(t.getElementsByClassName("caption-text").length)}(t)&&function(t){var e=t.getElementsByClassName("button-row")[0],n=t.getElementsByClassName("code-block-caption")[0];console.log("MOVING BELOW CAPTION"),n.parentNode.insertBefore(e,n.nextSibling)}(t):function(t){var e=t.getElementsByClassName("button-row")[0],n=t.getElementsByClassName("highlighttable")[0].childNodes[0],o=document.createElement("tr"),i=document.createElement("td"),a=document.createElement("td");i.className="linenos-button-row-spacer",n.prepend(o),o.append(i),o.append(a),a.append(e)}(t)}var e=Object.freeze({setup:function(){for(var e=0,n=document.getElementsByClassName("button-code-block");e<n.length;e+=1){var o=n[e];Boolean(o.getElementsByClassName("button-row")[0])&&t(o)}}});var n=Object.freeze({setup:function(){if(document.getElementsByClassName("codepen").length){var t=document.createElement("script");t.src="https://production-assets.codepen.io/assets/embed/ei.js",t.async=!0,document.body.appendChild(t)}}}),o="code-button__tooltip--active",i="code-button__tooltip--inactive";function a(t){return Boolean(t.getElementsByClassName("copyable-code-block")[0])}var r=Object.freeze({setup:function(){for(var t=document.getElementsByClassName("button-code-block"),e=Array.from(t).filter(a),n=function(){var t=s[r],e=t.getElementsByClassName("highlight")[0];if(!e)return{};var n=t.getElementsByClassName("button-row")[0].getElementsByClassName("code-button--copy")[0];if(!n)return{};var a=document.createElement("div");a.innerText="copied",a.classList.add("code-button__tooltip"),a.classList.add(i);var c=-1;n.appendChild(a),n.addEventListener("click",function(){var t,n,r,s=document.createElement("textarea");s.style.position="fixed",document.body.appendChild(s),s.value=e.innerText.trim(),s.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy");a.classList.replace(i,o),t=function(){a.classList.replace(o,i)},r=1500,(n=c)>=0&&window.clearTimeout(n),c=window.setTimeout(t,r)}catch(t){console.error(t)}document.body.removeChild(s)})},r=0,s=e;r<s.length;r+=1){var c=n();if(c)return c.v}}});function s(t){return!t.siblings("ul:not(.simple)").length}function c(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}var u=function(){this.listeners=[]};u.prototype.listen=function(t){this.listeners.push(t)},u.prototype.dispatch=function(t,e){for(var n=0;n<this.listeners.length;n+=1)this.listeners[n](t,e)};var l=Object.freeze({setup:function(t){if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var e=document.querySelector(".sphinxsidebarwrapper"),n=document.querySelector(".body"),o={};function i(){void 0!==o.timeoutID&&window.clearTimeout(o.timeoutID),void 0!==o.xhr&&o.xhr.abort(),o={}}function a(a,r){void 0===a&&console.error("Going to undefined path"),i(),n.classList.add("loading"),o.timeoutID=window.setTimeout(function(){n.classList.remove("loading"),o.timeoutID=-1},1e4);var s=new Date;o.xhr=function(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}(a,{complete:function(){i()},error:function(t){console.error("Failed to load "+a),window.location=a},success:function(o,i){var a=new Date-s;n.classList.remove("loading"),r&&window.history.pushState({href:i},"",i);var c=document.createElement("html");c.innerHTML=o;var u=c.querySelector("title").textContent,l=c.querySelector(".body"),d=c.querySelector(".sphinxsidebarwrapper");a>62.5&&l.classList.add("loading"),n.parentElement.replaceChild(l,n),n=l,e.parentElement.replaceChild(d,e),e=d,document.title=u,t.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){n.classList.remove("loading"),r&&window.scroll(0,0)},1)}})}window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);var r=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");function u(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),a(t.currentTarget.href,!0))}for(var l=0;l<r.length;l+=1){var d=r[l];(s($(d))||c($(d)))&&d.addEventListener("click",u)}return window.onpopstate=function(t){null!==t.state&&a(t.state.href,!1)},!0}});function d(){}function f(t){for(var e,n,o=arguments,i=1,a=arguments.length;i<a;i++)for(e in n=o[i])t[e]=n[e];return t}function p(t,e){e.appendChild(t)}function h(t,e,n){e.insertBefore(t,n)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function b(t,e,n){t.addEventListener(e,n,!1)}function y(t,e,n){t.removeEventListener(e,n,!1)}function w(){return Object.create(null)}function _(t){this.destroy=d,this.fire("destroy"),this.set=this.get=d,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function C(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function x(t,e,n,o,i){for(var a in e)if(n[a]){var r=o[a],s=i[a],c=e[a];if(c)for(var u=0;u<c.length;u+=1){var l=c[u];l.__calling||(l.__calling=!0,l.call(t,r,s),l.__calling=!1)}}}function k(t,e){t._observers={pre:w(),post:w()},t._handlers=w(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function N(t){for(;t&&t.length;)t.shift()()}var E={destroy:_,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(f({},t)),this.root._lock||(this.root._lock=!0,N(this.root._beforecreate),N(this.root._oncreate),N(this.root._aftercreate),this.root._lock=!1)},teardown:_,_recompute:d,_set:function(t){var e=this._state,n={},o=!1;for(var i in t)C(t[i],e[i])&&(n[i]=o=!0);o&&(this._state=f({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(x(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),x(this,this._observers.post,n,this._state,e)))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}};function S(t){k(this,t),this._state=f({name:"",caption:"",answer:null},t.data),this._recompute({answer:1},this._state),this._fragment=function(t,e){var n,o,i,a,r,s,c,u;function l(t){e.change(!0)}function d(t){e.change(!1)}return{c:function(){n=g("div"),o=v("\n"),i=g("div"),a=g("span"),s=v("\n    "),c=g("span"),this.h()},h:function(){a.className=r="switch fa fa-thumbs-up good "+t.upvoteSelected,b(a,"click",l),c.className=u="switch fa fa-thumbs-down bad "+t.downvoteSelected,b(c,"click",d)},m:function(e,r){h(n,e,r),n.innerHTML=t.caption,h(o,e,r),h(i,e,r),p(a,i),p(s,i),p(c,i)},p:function(t,e){t.caption&&(n.innerHTML=e.caption),t.upvoteSelected&&r!==(r="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(a.className=r),t.downvoteSelected&&u!==(u="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(c.className=u)},u:function(){n.innerHTML="",m(n),m(o),m(i)},d:function(){y(a,"click",l),y(c,"click",d)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}f(S.prototype,{change:function(t){this.set({answer:t}),this.fire("change",t)}},E),S.prototype._recompute=function(t,e){t.answer&&(C(e.upvoteSelected,e.upvoteSelected=!0===e.answer?"selected":"")&&(t.upvoteSelected=!0),C(e.downvoteSelected,e.downvoteSelected=function(t){return!1===t?"selected":""}(e.answer))&&(t.downvoteSelected=!0))};function q(t){k(this,t),this._state=f({name:"",caption:"",answer:""},t.data),this._fragment=function(t,e){var n,o=!1;function i(){o=!0,e.set({answer:n.value}),o=!1}function a(t){var n=e.get();e.fire("change",n.answer)}return{c:function(){n=g("textarea"),this.h()},h:function(){b(n,"input",i),n.placeholder=t.caption,b(n,"input",a)},m:function(e,o){h(n,e,o),n.value=t.answer},p:function(t,e){o||(n.value=e.answer),t.caption&&(n.placeholder=e.caption)},u:function(){m(n)},d:function(){y(n,"input",i),y(n,"input",a)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function T(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}f(q.prototype,{change:function(){this.fire("change",this.get("answer"))}},E);var B={open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),o=0,i=Object.keys(n);o<i.length;o+=1){var a=i[o],r=n[a];null!=r&&e.set(a,r)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var t=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)T(this.get("jiraurl"));else{var e=document.createElement("script");e.type="application/javascript",e.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",e.setAttribute("crossorigin","anonymous"),e.src="https://code.jquery.com/jquery-2.2.4.min.js",e.onload=function(){T(t.get("jiraurl"))},document.body.appendChild(e)}}};function j(t,e){var n;return{c:function(){n=g("span"),this.h()},h:function(){n.className="fa fa-comments deluge-comment-icon"},m:function(t,e){h(n,t,e)},u:function(){m(n)},d:d}}function I(t,e){var n;return{c:function(){n=g("span"),this.h()},h:function(){n.className="fa fa-angle-down deluge-close-icon"},m:function(t,e){h(n,t,e)},u:function(){m(n)},d:d}}function L(t,e){var n;return{c:function(){(n=g("p")).textContent="Thank you for your feedback!"},m:function(t,e){h(n,t,e)},u:function(){m(n)},d:d}}function O(t,e){var n;return{c:function(){(n=g("li")).textContent="We're sorry! Please help us improve this page."},m:function(t,e){h(n,t,e)},u:function(){m(n)},d:d}}function D(t,e,n,o,i){var a,r=U(t,e,n,o),s=r&&r(t,e,n,o,i);return{c:function(){a=g("li"),s&&s.c()},m:function(t,e){h(a,t,e),s&&s.m(a,null)},p:function(t,e,n,o,c){r===(r=U(e,n,o,c))&&s?s.p(t,e,n,o,c):(s&&(s.u(),s.d()),(s=r&&r(e,n,o,c,i))&&s.c(),s&&s.m(a,null))},u:function(){m(a),s&&s.u()},d:function(){s&&s.d()}}}function A(t,e,n,o,i){var a=new S({root:i.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];i.update(e.name,t)});var r={questions:e,question_index:o};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,o,i){var s={};t.questions&&(s.name=o.name),t.questions&&(s.caption=o.caption),a._set(s),r.questions=n,r.question_index=i},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function P(t,e,n,o,i){var a=new q({root:i.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];i.update(e.name,t)});var r={questions:e,question_index:o};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,o,i){var s={};t.questions&&(s.name=o.name),t.questions&&(s.caption=o.caption),a._set(s),r.questions=n,r.question_index=i},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function H(t,e){var n,o,i,a;function r(t){e.showCollectorDialog()}return{c:function(){n=g("p"),o=v("If this page contains an error, you may "),(i=g("a")).textContent="report the problem on Jira.",this.h()},h:function(){i.className="deluge-fix-button jira-link jirafeedback",i.target="_blank",i.title=a="Report a problem with "+t.pagename+" on Jira",b(i,"click",r)},m:function(t,e){h(n,t,e),p(o,n),p(i,n)},p:function(t,e){t.pagename&&a!==(a="Report a problem with "+e.pagename+" on Jira")&&(i.title=a)},u:function(){m(n)},d:function(){y(i,"click",r)}}}function R(t,e){var n;return{c:function(){(n=g("p")).textContent="Submitting feedback..."},m:function(t,e){h(n,t,e)},p:d,u:function(){m(n)},d:d}}function V(t,e){var n,o,i;function a(t){e.rate(!0)}function r(t){e.rate(!1)}return{c:function(){(n=g("a")).textContent="Yes",o=v("\n        "),(i=g("a")).textContent="No",this.h()},h:function(){n.className="deluge-vote-button",b(n,"click",a),i.className="deluge-vote-button",b(i,"click",r)},m:function(t,e){h(n,t,e),h(o,t,e),h(i,t,e)},p:d,u:function(){m(n),m(o),m(i)},d:function(){y(n,"click",a),y(i,"click",r)}}}function Q(t,e){for(var n,o,i,a,r,s,c,u,l=!1===t.state&&O(),d=t.questions,f=[],w=0;w<d.length;w+=1)f[w]=D(t,d,d[w],w,e);function _(t){e.toggle()}function C(t){e.submit()}return{c:function(){n=g("div"),o=g("ul"),l&&l.c(),i=document.createComment("");for(var t=0;t<f.length;t+=1)f[t].c();a=v("\n\n            "),r=g("div"),(s=g("button")).textContent="Cancel",c=v("\n                "),(u=g("button")).textContent="Submit",this.h()},h:function(){var t,e;t="ref",e=!0,o.setAttribute(t,e),b(s,"click",_),u.className="primary",b(u,"click",C),r.className="deluge-button-group",n.className="deluge-questions"},m:function(t,e){h(n,t,e),p(o,n),l&&l.m(o,null),p(i,o);for(var d=0;d<f.length;d+=1)f[d].m(o,null);p(a,n),p(r,n),p(s,r),p(c,r),p(u,r)},p:function(t,n){!1===n.state?l||((l=O()).c(),l.m(o,i)):l&&(l.u(),l.d(),l=null);var a=n.questions;if(t.questions){for(var r=0;r<a.length;r+=1)f[r]?f[r].p(t,n,a,a[r],r):(f[r]=D(n,a,a[r],r,e),f[r].c(),f[r].m(o,null));for(;r<f.length;r+=1)f[r].u(),f[r].d();f.length=a.length}},u:function(){m(n),l&&l.u();for(var t=0;t<f.length;t+=1)f[t].u()},d:function(){l&&l.d(),function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}(f),y(s,"click",_),y(u,"click",C)}}}function U(t,e,n,o){return"binary"===n.type?A:"freeform"===n.type?P:null}function z(t){return"Voted-Down"===t.state?H:"Pending "==t.state?R:"NotVoted"===t.state?V:"boolean"==typeof t.state?Q:null}function F(t){k(this,t),this._state=f({project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}},t.data),this._recompute({state:1},this._state),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,o,i,a,r,s,c,u,l="Initial"===t.state&&j(),d="Initial"!==t.state&&I();function f(t){e.toggle()}var w=("Voted-Up"===t.state||"Voted-Down"===t.state)&&L(),_=z(t),C=_&&_(t,e);return{c:function(){n=g("div"),o=g("div"),l&&l.c(),i=v("\n\n        "),(a=g("span")).textContent="Was this page helpful?",r=v("\n\n    "),d&&d.c(),s=v("\n\n    "),c=g("div"),w&&w.c(),u=v("\n\n    "),C&&C.c(),this.h()},h:function(){a.className="deluge-helpful",o.className=t.delugeHeaderClass,b(o,"click",f),c.className=t.delugeBodyClass,n.className=t.delugeClass},m:function(t,e){h(n,t,e),p(o,n),l&&l.m(o,null),p(i,o),p(a,o),p(r,o),d&&d.m(o,null),p(s,n),p(c,n),w&&w.m(c,null),p(u,c),C&&C.m(c,null)},p:function(t,a){"Initial"===a.state?l||((l=j()).c(),l.m(o,i)):l&&(l.u(),l.d(),l=null),"Initial"!==a.state?d||((d=I()).c(),d.m(o,null)):d&&(d.u(),d.d(),d=null),t.delugeHeaderClass&&(o.className=a.delugeHeaderClass),"Voted-Up"===a.state||"Voted-Down"===a.state?w||((w=L()).c(),w.m(c,u)):w&&(w.u(),w.d(),w=null),_===(_=z(a))&&C?C.p(t,a):(C&&(C.u(),C.d()),(C=_&&_(a,e))&&C.c(),C&&C.m(c,null)),t.delugeBodyClass&&(c.className=a.delugeBodyClass),t.delugeClass&&(n.className=a.delugeClass)},u:function(){m(n),l&&l.u(),d&&d.u(),w&&w.u(),C&&C.u()},d:function(){l&&l.d(),d&&d.d(),y(o,"click",f),w&&w.d(),C&&C.d()}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,N(this._beforecreate),N(this._oncreate),N(this._aftercreate),this._lock=!1)}f(F.prototype,B,E),F.prototype._recompute=function(t,e){t.state&&(C(e.delugeClass,e.delugeClass=function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"}(e.state))&&(t.delugeClass=!0),C(e.delugeHeaderClass,e.delugeHeaderClass=function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"}(e.state))&&(t.delugeHeaderClass=!0),C(e.delugeBodyClass,e.delugeBodyClass=function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}(e.state))&&(t.delugeBodyClass=!0))};var M=function(t,e,n){var o=this;this.project=t,this.path=e,this.app=new F({target:n,data:{state:"Initial",project:t,pagename:e}}),this.app.on("submit",function(t){o.sendRating(t.vote,t.fields).then(function(){t.vote?o.app.set({state:"Voted-Up"}):o.app.set({state:"Voted-Down"})}).catch(function(t){console.error("Error submitting feedback")})})};M.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},M.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},M.prototype.sendRating=function(t,e){var n=this;return new Promise(function(o,i){e.set("v",t),e.set("p",n.project+"/"+n.path);var a=function(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}("http://deluge.us-east-1.elasticbeanstalk.com/",e),r=new Image;r.onload=function(){return o()},r.onerror=function(){return i()},r.src=a})},M.prototype.open=function(){this.app.open()};var W=null,J={"meta/404":!0,search:!0};var G=Object.freeze({init:function(){W=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&function(){var t=document.querySelector(".body").getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(J,t)){var e=document.getElementById("rating-panel");e&&(e.innerText="",e&&new M(W,t,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}()}}),K="lightbox__content--activated",Y="lightbox__content--scalable",X=document.createElement("div");X.className="lightbox__modal",X.title="click to close";var Z=document.createElement("img");function tt(t){"keydown"===t.type&&"Escape"!==t.key||(Z.classList.remove(K),X.parentNode&&X.parentNode.removeChild(X))}function et(t){var e=document.createElement("div"),n=document.createElement("div");e.className="lightbox__imageWrapper",n.className="lightbox__caption",n.innerText="click to enlarge",t.parentNode.replaceChild(e,t),e.appendChild(t),e.appendChild(n),e.addEventListener("click",function(){document.body.appendChild(X),Z.src=t.src,Z.alt=t.alt+" — Enlarged",/\.svg$/.test(Z.src)?Z.classList.add(Y):Z.classList.remove(Y),X.addEventListener("click",tt),setTimeout(function(){Z.classList.add(K)},0)})}function nt(t,e){var n=e.naturalWidth*e.naturalHeight;e.clientWidth*e.clientHeight<.9*n&&(et(e),t.classList.add("lightbox"))}Z.className="lightbox__content",X.appendChild(Z);var ot=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("lightbox");t<e.length;t+=1){var n=e[t];0!==n.children.length&&"IMG"===n.children[0].tagName&&et(n.children[0])}for(var o=0,i=document.getElementsByClassName("figure");o<i.length;o+=1){var a=i[o];if(0!==a.children.length&&"IMG"===a.children[0].tagName&&!a.classList.contains("lightbox")){var r=a.children[0];r.complete?nt(a,r):r.addEventListener("load",nt.bind(null,a,r))}}document.addEventListener("keydown",tt)}});function it(t){return t.hasClass("current")}var at=Object.freeze({setup:function(){var t=$(".sidebar a.current");(s(t)||c(t)||it(t))&&t.parent("li").addClass("selected-item"),t.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(e){var n=$(e.currentTarget);s(n)||!n.parent().hasClass("selected-item")&&c(n)||(e.preventDefault(),n.parent().hasClass("current")?(n.parent().removeClass("current selected-item"),n.siblings("ul").slideUp()):(t.parent().removeClass("selected-item"),t.parents().add(t.siblings("ul")).each(function(t,n){var o=$(n);o.has(e.currentTarget).length||(o.is("ul")?o.removeClass("current").slideUp():o.removeClass("current"))}),n.parent().addClass("current"),n.siblings("ul").slideDown(function(){(s(n)||c(n)||it(t))&&n.parent("li").addClass("selected-item")}),t=n))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(t){var e=$('<span class="expand-icon"></span>');return s($(this))||e.addClass("docs-expand-arrow"),e})}}),rt=new u;var st=function(t){this.key=t,this.tabStrips=document.querySelectorAll(".tab-strip--singleton"),this.type=null,this.tabStrips.length>0&&(this.type=this.tabStrips[0].getAttribute("data-tab-preference"))};st.prototype.getTabPref=function(){return JSON.parse(window.localStorage.getItem(this.key))||{}},st.prototype.setTabPref=function(t){var e=this.getTabPref();this.type?e[t.type]=t.tabId:e.pages?e.pages[window.location.pathname]=t.tabId:(e.pages={},e.pages[window.location.pathname]=t.tabId),window.localStorage.setItem(this.key,JSON.stringify(e))},st.prototype.getFirstTab=function(){var t=this.tabStrips[0].querySelector(".tab-strip__element[aria-selected=true]");return t?t.getAttribute("data-tabid"):null},st.prototype.setup=function(){var t=this;if(0!==this.tabStrips.length){this.hideTabBars();for(var e=0,n=t.tabStrips;e<n.length;e+=1)for(var o=function(){var e=r[a];e.onclick=function(n){var o=e.getBoundingClientRect(),i=window.scrollY-o.y,a=n.target.getAttribute("data-tabid"),r=t.tabStrips[0].getAttribute("data-tab-preference"),s={};if(s.tabId=a,s.type=r,a){t.setTabPref(s),t.update();var c=e.getBoundingClientRect();window.scrollTo(c.x,c.y+i),n.preventDefault()}}},i=n[e],a=0,r=i.querySelectorAll("[data-tabid]");a<r.length;a+=1)o();this.update()}},st.prototype.update=function(){if(0!==this.tabStrips.length){var t,e=this.type,n=this.getTabPref();if(!e&&n.pages&&n.pages[window.location.pathname]?(n=n.pages,e=window.location.pathname):this.tabStrips[0].querySelector('[data-tabid="'+n[e]+'"]')||(n[e]=this.getFirstTab()),n)t=n[e],$(".tabs__content").children().hide(),$(".tabs .tabpanel-"+t).show(),this.showHideSelectedTab(n[e]),rt.dispatch("event-tab-selected",n)}},st.prototype.showHideSelectedTab=function(t){for(var e=0,n=this.tabStrips;e<n.length;e+=1){var o=n[e],i=$(o.querySelector('[data-tabid="'+t+'"]')),a=i.parent("ul"),r=$(o.querySelector(".dropdown-toggle")),s=$(o.querySelector(".dropdown"));a.hasClass("dropdown-menu")?(r.text(""+i.first().text()).append('<span class="caret"></span>'),s.attr("aria-selected",!0).siblings().attr("aria-selected",!1)):(i.attr("aria-selected",!0).siblings().attr("aria-selected",!1),r.text("Other ").append('<span class="caret"></span>'))}},st.prototype.hideTabBars=function(){if(document.querySelector(".tabs-top")){var t=$(".tab-strip--singleton"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()}};var ct=Object.freeze({tabsEventDispatcher:rt,setup:function(){new st("tabPref").setup()}});function ut(){var t,e,n,o,i,a,r,s;window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_org="54YFM",window._fs_namespace="FS",t=window,e=document,n=window._fs_namespace,o="script",i="user",n in t&&t.console&&t.console.log?t.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((r=t[n]=function(t,e){r.q?r.q.push([t,e]):r._api(t,e)}).q=[],(a=e.createElement(o)).async=1,a.src="https://"+_fs_host+"/s/fs.js",(s=e.getElementsByTagName(o)[0]).parentNode.insertBefore(a,s),r.identify=function(t,e){r(i,{uid:t}),e&&r(i,e)},r.setUserVars=function(t){r(i,t)},r.identifyAccount=function(t,e){a="account",(e=e||{}).acctId=t,r(a,e)},r.clearUserCookie=function(t,n,o){if(!t||document.cookie.match("fs_uid=[`;`]*`[`;`]*`[`;`]*`"))for(n=e.domain;e.cookie="fs_uid=;domain="+n+";path=/;expires="+new Date(0).toUTCString(),!((o=n.indexOf("."))<0);)n=n.slice(o+1)}),function(t,e,n,o,i){if(!t[i]){for(var a=t[i]=[],r=0;r<n.length;r++){var s=n[r];a[s]=a[s]||function(t){return function(){var e=Array.prototype.slice.call(arguments);a.push([t,e])}}(s)}a.SNIPPET_VERSION="1.0.1";var c=e.createElement("script");c.type="text/javascript",c.async=!0,c.src="https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/Dk30CC86ba0nATlK/"+i+".js";var u=e.getElementsByTagName("script")[0];u.parentNode.insertBefore(c,u)}}(window,document,["survey","reset","config","init","set","get","event","identify","track","page","screen","group","alias"],0,"delighted")}var lt=Object.freeze({initialize:ut,setup:function(){window.delighted.survey()}});var dt=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=function(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}(e)})}}),ft=function(){this.components=[]};ft.prototype.register=function(t){this.components.push(t),t.init&&t.init()},ft.prototype.update=function(){for(var t=0,e=this.components;t<e.length;t+=1){e[t].setup(this)}};var pt=new ft;$(function(){ut(),pt.register(e),pt.register(n),pt.register(r),pt.register(l),pt.register(G),pt.register(ot),pt.register(at),pt.register(ct),pt.register(dt),pt.register(lt),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var t=$(window),o=$(".sidebar"),i=t.width()<=1093;function a(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}t.resize(function(e){i&&t.width()>1093?(i=!1,o.removeClass("reveal")):!i&&t.width()<=1093&&(i=!0)}),window.addEventListener("hashchange",a),location.hash&&window.setTimeout(a,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(a,10)});var s=document.getElementById("showNav");s&&(s.onclick=function(){document.getElementById("sphinxsidebar").style.display="block",document.getElementById("left-column").style.display="flex",document.getElementById("showNav").style.display="none"});var c=document.getElementById("closeNav");if(c&&(c.onclick=function(){document.getElementById("showNav").style.display="flex",document.getElementById("left-column").style.display="none"}),pt.update(),document.querySelector){var u=document.querySelector("a.current");u&&u.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map
