(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports={"no-scroll":"styles_no-scroll__1vsU8",root:"styles_root__3QAxj",timeline:"styles_timeline__106Mk",debug:"styles_debug__2SKKM","debug-active":"styles_debug-active___9OUc",calendar:"styles_calendar__3Xx2Y","react-draggable":"styles_react-draggable__2QRVw","handle-wrapper":"styles_handle-wrapper__2T7f7",handle:"styles_handle__1dKGL",top:"styles_top__2FFal",bottom:"styles_bottom__3nd0X","layer-container":"styles_layer-container__1Quoi",event:"styles_event__bjik1","drag-box":"styles_drag-box__OvX9t",draggable:"styles_draggable__a1ktL","button-reset":"styles_button-reset__3_zQt","is-draggable":"styles_is-draggable__2U2x2","react-draggable-dragging":"styles_react-draggable-dragging__1T3s8","is-pending-creation":"styles_is-pending-creation__2vDDI","hours-container":"styles_hours-container__3XZzL","day-column":"styles_day-column__2sQzS","day-hours":"styles_day-hours__3_7p4",cell:"styles_cell__1OJUD",time:"styles_time__1X-Hn",title:"styles_title__2dKTz","is-hour-start":"styles_is-hour-start__1Doa3",header:"styles_header__1IF59",first:"styles_first__1t63n",popup:"styles_popup__2oSt1","range-boxes":"styles_range-boxes__39XBE","event-content":"styles_event-content__1EBie",start:"styles_start__2DXVx",end:"styles_end__2XnIt"}},115:function(e,t,a){e.exports=a(227)},227:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),l=a(66),s=a.n(l),i=(a(103),a(13)),o=a(25),u=a(7),d=a(104),b=a(105),m=a.n(b),f=a(8),h=a(38),g=a.n(h),O=a(5),p=a(114),j=a(106),v=a(231),_=a(52),y=a(234),E=a(230),Y=a(113),D=a(236),X=a(232),w=a(233),x=a(41),M=a(237),C=a(235),R=function(e){return function(t){var a,n,r,c;if("changedTouches"in t){var l=t.changedTouches[0];a=l.clientX,n=l.clientY,r=l.pageX,c=l.pageY}else a=t.clientX,n=t.clientY,r=t.pageX,c=t.pageY;var s=e.getBoundingClientRect(),i=s.top,o=s.left;return{clientX:a,clientY:n,pageX:r,pageY:c,top:i,left:o,x:a-o,y:n-i}}},T=Object(E.a)(function(e){e.preventDefault(),e.stopPropagation()});var N=a(107),k=a.n(N),H=new WeakMap;function I(e,t,a){var n=Object(r.useRef)(null);n.current=t,Object(r.useEffect)(function(){if(a){var t=H.get(a);return t||(t=new Mousetrap(a),H.set(a,t)),t.bind(e,function(){"function"===typeof n.current&&n.current()}),function(){k.a.unbind(e)}}},[e,a])}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.passive,n=void 0===a||a,c=t.enabled,l=void 0===c||c,s=Object(r.useState)({scrollTop:0,scrollLeft:0}),i=Object(u.a)(s,2),o=i[0],d=i[1];return function(e,t,a,n){var c=(arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}).enabled,l=void 0===c||c;Object(r.useEffect)(function(){if(null!==e.current)return l?e.current.addEventListener(t,a,n):a&&e.current.removeEventListener(t,a),function(){e.current&&e.current.removeEventListener(t,a)}},[e.current,a,n,l])}(e,"scroll",function(e){if(e&&e.target){var t=e.target,a=t.scrollTop,n=t.scrollLeft;d({scrollTop:a,scrollLeft:n})}},{passive:n},{enabled:l}),o}function z(e,t){var a=t.top,n=void 0!==a&&a,c=t.left,l=void 0!==c&&c,s=W(e,{enabled:n||l}),i=s.scrollLeft,o=s.scrollTop;return Object(r.useMemo)(function(){return{transform:"translate(".concat(l?i:0,"px, ").concat(n?o:0,"px)"),zIndex:3}},[l?i:0,n?o:0])}var S=function(e,t){return 1+Math.abs(t-e)},F=function(e){var t=e.startX,a=e.startY,r=e.toMin,c=e.originDate;return Object(n.addMinutes)(Object(n.addDays)(c,t),r(a))},Z=a(108),L=a.n(Z);function V(e){return L()(Object(o.a)(e).map(function(e){return e.map(function(e){return new Date(e)})}))}function B(e,t){return null===t?e:V([].concat(Object(o.a)(e),Object(o.a)(t))).sort(function(e,t){return Object(n.compareAsc)(e[0],t[0])})}var A=c.a.memo(function(e){var t=e.timeIndex,a=e.children,r=e.classes,l=(0,e.getDateRangeForVisualGrid)({startX:0,startY:t,endX:0,endY:t+1,spanX:1,spanY:1}),s=Object(u.a)(l,1),o=Object(u.a)(s[0],1)[0],d=0===Object(n.getMinutes)(o);return c.a.createElement("div",{className:Object(f.a)([r.cell,Object(i.a)({},r["is-hour-start"],d)])},a&&a({start:o,isHourStart:d}))}),P=a(18),q=a(109),G=a(110),Q=a.n(G),U=function(e){return 0===Object(n.getMinutes)(e)?Object(n.format)(e,"h"):Object(n.format)(e,"h:m")},K=function(e,t,a){var r=e[0],c=e[e.length-1];if(Object(n.isSameDay)(r,c)&&!t){var l=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.map(function(e){return Object(n.format)(e,t)}),c=Object(u.a)(r,2),l=c[0],s=c[1];return l!==s?[l,s]:a?["",s]:[l,""]}(e,"a",!0),s=Object(u.a)(l,2),i=s[0],o=s[1];return"".concat(Object(n.format)(r,"ddd")," ").concat(U(r)).concat(i," \u2013 ").concat(U(c)).concat(o)}var d=Object(n.format)(r,t||"ddd h:mma"),b=Object(n.format)(c,a||"ddd h:mma");return"".concat(d," \u2013 ").concat(b)},J=a(111),$=c.a.memo(function(e){var t,a=e.classes,l=e.grid,s=e.isBeingEdited,o=e.rangeIndex,d=e.cellIndex,b=e.cellArray,m=e.cell,h=e.className,O=e.onChange,p=e.cellInfoToDateRange,j=e.isResizable,v=e.isDeletable,_=e.isMovable,y=Object(r.useRef)(null),E=Object(r.useState)(m),Y=Object(u.a)(E,2),D=Y[0],X=Y[1],w=Object(r.useMemo)(function(){return l.getRectFromCell(m)},[m,l]),x=Object(r.useMemo)(function(){return l.getRectFromCell(D)},[D,l]);Object(r.useEffect)(function(){X(m)},[m]);var M=Object(r.useMemo)(function(){return p(D)},[D]);I("del",Object(r.useCallback)(function(){v&&O&&O(void 0,o)},[y.current,O,v,o]),y.current);var C=x.top,R=x.left,T=x.width,N=x.height,k=0===d,H=d===b.length-1,W=Object(r.useCallback)(function(){O&&O(p(D),o)},[D,o,p,O]);I("up",function(){if(_&&0!==D.startY){var e=Object(P.a)({},D,{startY:D.startY-1,endY:D.endY-1});O&&O(p(e),o)}},y.current),I("down",function(){if(_&&D.endY!==l.numVerticalCells-1){var e=Object(P.a)({},D,{startY:D.startY+1,endY:D.endY+1});O&&O(p(e),o)}},y.current);var z=Object(r.useCallback)(function(e,t){var a=t.y,n=t.x;if(_){e.preventDefault(),e.stopPropagation();var r=a,c=r+x.height,s=n,i=s+x.width,o=Math.min(r,c),u=Math.min(s,i),d=o+x.height,b=u+x.width,f=Object(P.a)({},x,{top:o,bottom:d,right:b,left:u}),h=l.getCellFromRect(f),O=h.startY,p=h.startX,j=Object(P.a)({},m,{startX:p,endX:p+m.spanX-1,startY:O,endY:O+m.spanY-1});g()(j.spanY===m.spanY&&j.spanX===m.spanX,"Expected the dragged time cell to have the same dimensions)"),X(j)}},[l,x,_,X]),S=Object(r.useCallback)(function(e,t,a,n){if(j&&(e.preventDefault(),e.stopPropagation(),0!==n.height)){var r={height:n.height+x.height,width:n.width+x.width+20},c=Object(P.a)({},w,r);t.includes("top")?c.top-=n.height:t.includes("bottom")&&(c.bottom+=n.height);var s=l.getCellFromRect(c),i=s.spanY,o=s.startY,u=s.endY,d=Object(P.a)({},m,{spanY:i,startY:o,endY:u});X(d)}},[l,x,j,X,w]);return c.a.createElement(Q.a,{axis:_?"both":"none",bounds:{top:0,bottom:l.totalHeight-N,left:0,right:l.totalWidth},position:{x:R,y:C},onDrag:z,onStop:W,cancel:".".concat(a.handle)},c.a.createElement("button",{className:Object(f.a)([a.event,a["button-reset"],a["range-box"],h,(t={},Object(i.a)(t,a["is-draggable"],_),Object(i.a)(t,a["is-being-edited"],s&&s(m)),t)]),ref:y,tabIndex:0,style:{width:T-20,height:N}},c.a.createElement(q.a,{size:Object(P.a)({},w,{width:w.width-20}),onResize:S,onResizeStop:W,handleWrapperClass:a["handle-wrapper"],enable:j?{top:!0,bottom:!0}:{},handleClasses:{bottom:Object(f.a)([a.handle,a.bottom]),bottomLeft:Object(f.a)([a.handle,a["bottom-left"]]),bottomRight:Object(f.a)([a.handle,a["bottom-right"]]),left:Object(f.a)([a.handle,a.left]),right:Object(f.a)([a.handle,a.right]),top:Object(f.a)([a.handle,a.top]),topLeft:Object(f.a)([a.handle,a["top-left"]]),topRight:Object(f.a)([a.handle,a["top-right"]])}},c.a.createElement("div",{className:a["event-content"]},c.a.createElement(J.a,null,K(M)),c.a.createElement("span",{"aria-hidden":!0,className:a.start},k&&Object(n.format)(M[0],"h:mma")),c.a.createElement("span",{"aria-hidden":!0,className:a.end},H&&Object(n.format)(M[1],"h:mma"))))))}),ee=c.a.memo(function(e){var t=e.classes,a=e.ranges,n=e.grid,r=e.className,l=e.onChange,s=e.isResizable,i=e.isDeletable,o=e.isMovable,u=e.cellInfoToDateRange,d=e.dateRangeToCells,b=e.isBeingEdited;return c.a.createElement("div",{className:t["range-boxes"]},a.map(function(e,a){return c.a.createElement("span",{key:a},d(e).map(function(e,d,m){return c.a.createElement($,{classes:t,key:d,isResizable:s,isMovable:o,isDeletable:i,cellInfoToDateRange:u,cellArray:m,cellIndex:d,rangeIndex:a,className:r,isBeingEdited:b,onChange:l,grid:n,cell:e})}))}))}),te=function(e){return 1*e},ae=function(e){return e/1},ne=c.a.memo(function(e){var t=e.verticalPrecision,a=void 0===t?30:t,l=e.visualGridVerticalPrecision,s=void 0===l?30:l,b=e.schedule,h=e.originDate,N=void 0===h?new Date:h,k=e.classes,H=1440/a,W=Object(r.useCallback)(function(e){return e*a},[a]),Z=function(e){return e/a},L=Object(r.useMemo)(function(){return function(e){var t=e.fromY,a=e.fromX,r=e.originDate;return function(e){var c=e.startX,l=e.startY,s=e.endX,i=e.spanY;return Object(O.range)(c,s+1).map(function(e){var c=F({startX:e,startY:l,toMin:t,toDay:a,originDate:r}),s=Object(n.addMinutes)(c,t(i));return Object(n.isEqual)(s,Object(n.startOfDay)(s))&&(s=Object(n.endOfDay)(Object(n.subDays)(s,1))),Object(n.isBefore)(c,s)?[c,s]:[s,c]}).sort(function(e,t){return Object(n.compareAsc)(e[0],t[0])})}}({originDate:N,fromY:W,fromX:te})},[W,te,N]),P=Object(r.useCallback)(function(e){var t=L(e),a=Object(d.a)(t),n=a[0],r=a.slice(1);return g()(0===r.length,'Expected "cellInfoToSingleDateRange" to return a single date range, found '.concat(r.length," additional ranges instead. This is a bug in @remotelock/weekly-scheduler")),n},[L]),q=Object(r.useMemo)(function(){return function(e){var t=e.toX,a=void 0===t?function(e){return e}:t,r=e.toY,c=e.numVerticalCells,l=e.originDate;return function(e){var t=Object(u.a)(e,2),s=t[0],i=t[1],o=Object(n.startOfDay)(s),d=a(Object(n.differenceInDays)(s,l)),b=r(Object(n.differenceInMinutes)(s,o)),m=a(Object(n.differenceInDays)(i,l)),f=r(Object(n.differenceInMinutes)(i,Object(n.startOfDay)(i)))-1,h=Object(O.range)(d,m+1).map(function(e){var t=e===d?b:0,a=e===m?f:c-1;return{startX:e,startY:t,endX:e,endY:a,spanX:S(e,e),spanY:S(t,a)}});return Object(n.isEqual)(i,Object(n.startOfDay)(i))&&h.pop(),h}}({originDate:N,numVerticalCells:H,numHorizontalCells:7,toX:ae,toY:Z})},[Z,ae,H,7,N]),G=Object(r.useRef)(null),Q=Object(r.useRef)(null),U=z(G,{top:!1,left:!0}),K=z(G,{top:!1,left:!1}),J=m()(Q),$=function(e){var t=Object(r.useState)({transform:"translate(0, 0)",width:0,height:0}),a=Object(u.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(null),s=Object(u.a)(l,2),i=s[0],o=s[1],d=Object(r.useState)(!1),b=Object(u.a)(d,2),m=b[0],f=b[1],h=Object(r.useState)(!1),g=Object(u.a)(h,2),p=g[0],j=g[1];return Object(r.useEffect)(function(){var t=e.current;if(t){var a=R(t),n=Object(v.a)(window,"touchmove",{passive:!1}).pipe(T),r=Object(v.a)(window,"touchend",{passive:!0}),l=Object(v.a)(t,"touchstart",{passive:!1}).pipe(Object(Y.a)(function(e){return Object(_.a)(e).pipe(Object(D.a)(300),Object(X.a)(n),T)})),s=Object(v.a)(t,"mousedown",{passive:!0}).pipe(Object(w.a)(function(e){return 1===e.which})),i=Object(v.a)(window,"mousemove",{passive:!0}),u=Object(v.a)(window,"mouseup",{passive:!0}),d=Object(y.a)(s,l).pipe(Object(x.a)(a)),b=Object(y.a)(u,r).pipe(Object(x.a)(a),Object(E.a)(function(){f(!1),j(!0)})),m=Object(y.a)(i,n).pipe(Object(x.a)(a)),h=d.pipe(Object(E.a)(function(){f(!0),j(!1)}),Object(Y.a)(function(e){return m.pipe(Object(M.a)(e),Object(x.a)(function(a){var n=Math.max(e.x,0),r=Math.max(e.y,0),c=Math.min(a.x,t.scrollWidth),l=Math.min(a.y,t.scrollHeight),s=Math.min(r,l),i=Math.max(r,l),o=Math.min(n,c),u=Math.max(n,c);return{startX:n,startY:r,endX:c,endY:l,top:s,bottom:i,left:o,right:u,width:u-o,height:i-s}}),Object(X.a)(b))}),Object(C.a)(O.isEqual)),g=h.pipe(Object(x.a)(function(e){var t=e.top,a=e.left,n=e.width,r=e.height;return{transform:"translate(".concat(a,"px, ").concat(t,"px)"),width:n,height:r}})),p=h.subscribe(o),N=g.subscribe(c);return function(){p.unsubscribe(),N.unsubscribe()}}},[e.current]),{style:n,box:i,isDragging:m,cancel:Object(r.useCallback)(function(){f(!1),j(!1),o(null)},[o]),hasFinishedDragging:p}}(Q),ne=$.style,re=$.box,ce=$.isDragging,le=$.hasFinishedDragging,se=$.cancel,ie=Object(r.useState)(null),oe=Object(u.a)(ie,2),ue=oe[0],de=oe[1],be=Object(j.a)(b),me=Object(u.a)(be,2),fe=me[0],he=me[1],ge=he.set,Oe=he.undo,pe=he.redo,je=he.canUndo,ve=he.canRedo,_e=Object(r.useMemo)(function(){var e=null,t=null;if(null!==Q.current){var a=Q.current;e=a.scrollHeight,t=a.scrollWidth}return{totalHeight:e,totalWidth:t}},[Q.current,J]),ye=_e.totalHeight,Ee=_e.totalWidth,Ye=Object(r.useMemo)(function(){return null===ye||null===Ee?null:function(e){var t=e.totalHeight,a=e.totalWidth,n=e.numVerticalCells,r=e.numHorizontalCells,c=Object(O.floor)(t/n),l=Object(O.floor)(a/r);return{totalHeight:t,totalWidth:a,numVerticalCells:n,numHorizontalCells:r,cellWidth:l,cellHeight:c,getRectFromCell:function(e){var t=e.endX,a=e.startX,n=e.endY,r=e.startY,c=e.spanX,l=e.spanY;return{bottom:n*this.cellHeight,top:r*this.cellHeight,left:a*this.cellWidth,right:t*this.cellWidth,height:l*this.cellHeight,width:c*this.cellWidth,startX:a*this.cellWidth,endX:t*this.cellWidth,startY:r*this.cellHeight,endY:n*this.cellHeight}},getCellFromRect:function(e){var t=Object(O.clamp)(Object(O.floor)(e.left/this.cellWidth),0,r-1),a=Object(O.clamp)(Object(O.round)(e.top/this.cellHeight),0,n-1),c=Object(O.clamp)(Object(O.floor)(e.right/this.cellWidth),0,r-1),l=Object(O.clamp)(Object(O.round)(e.bottom/this.cellHeight),0,n-1);return{spanX:Object(O.clamp)(S(t,c),1,r),spanY:Object(O.clamp)(S(a,l),1,n),startX:t,startY:a,endX:c,endY:l}}}}({totalHeight:ye,totalWidth:Ee,numHorizontalCells:7,numVerticalCells:H})},[ye,Ee,7,H]);Object(r.useEffect)(function(){if(null!==Ye&&null!==re){var e=re,t=Ye.getCellFromRect(e),a=L(t);de(a)}else de(null)},[re,Ye,de]),Object(r.useEffect)(function(){le&&(ge(B(fe.present,ue)),de(null))},[le,ge,de,ue,fe.present]),I("ctrl+z",function(){je&&Oe()},document),I("ctrl+shift+z",function(){ve&&pe()},document),I("esc",function(){ue&&se()},document),Object(r.useEffect)(function(){se()},[J]);var De=Object(r.useCallback)(function(e,t){if(!fe.present&&e)return[e];var a=Object(o.a)(fe.present);if(e){if(Object(n.isEqual)(e[0],a[t][0])&&Object(n.isEqual)(e[1],a[t][1]))return;a[t]=e}else a.splice(t,1);a=V(a),ge(a)},[fe.present]),Xe=Object(r.useMemo)(function(){return function(e){var t=e.fromY,a=e.fromX,r=e.originDate;return function(e){var c=e.startX,l=e.startY,s=e.endX,i=e.endY,o=F({startX:c,startY:l,toMin:t,toDay:a,originDate:r}),u=F({startX:s,startY:i,toMin:t,toDay:a,originDate:r});return[Object(n.isBefore)(o,u)?[o,u]:[u,o]]}}({originDate:N,fromX:te,fromY:function(e){return e*s}})},[s,te,N]);Object(r.useEffect)(function(){G.current&&G.current.contains(document.activeElement)&&document.activeElement&&Object(p.a)(document.activeElement,{scrollMode:"if-needed",block:"nearest",inline:"nearest"})},[G.current,document.activeElement,fe.present]);var we=1440/s;return c.a.createElement("div",{ref:G,className:Object(f.a)([k.root,Object(i.a)({},k["no-scroll"],ce)])},c.a.createElement("div",{style:U,"aria-hidden":!0,className:k.timeline},c.a.createElement("div",{className:k.header},c.a.createElement("div",{className:k["day-column"]},c.a.createElement("div",{className:Object(f.a)([k.cell,k.title])},"T"))),c.a.createElement("div",{className:k.calendar},c.a.createElement("div",{className:k["day-column"]},c.a.createElement("div",{className:k["day-hours"]},Object(O.times)(we).map(function(e){return c.a.createElement(A,{classes:k,getDateRangeForVisualGrid:Xe,key:e,timeIndex:e},function(e){var t=e.start;return e.isHourStart?c.a.createElement("div",{className:k.time},Object(n.format)(t,"h a")):null})}))))),c.a.createElement("div",null,c.a.createElement("div",{style:K,role:"presentation",className:Object(f.a)([k.calendar,k.header])},Object(O.times)(7).map(function(e){return c.a.createElement("div",{key:e,role:"presentation",className:k["day-column"]},c.a.createElement("div",{className:Object(f.a)([k.cell,k.title])},Object(n.format)(Object(n.addDays)(N,e),"ddd")))})),c.a.createElement("div",{className:k["layer-container"]},ce&&c.a.createElement("div",{className:k["drag-box"],style:ne},le&&c.a.createElement("div",{className:k.popup})),Ye&&ue&&ce&&c.a.createElement(ee,{classes:k,dateRangeToCells:q,cellInfoToDateRange:P,className:k["is-pending-creation"],ranges:B(fe.present,ue),grid:Ye}),Ye&&!ue&&c.a.createElement(ee,{classes:k,dateRangeToCells:q,cellInfoToDateRange:P,isResizable:!0,isMovable:!0,isDeletable:!0,onChange:De,ranges:fe.present,grid:Ye}),c.a.createElement("div",{ref:Q,role:"grid",className:k.calendar},Object(O.times)(7).map(function(e){return c.a.createElement("div",{role:"gridcell",key:e,className:k["day-column"]},c.a.createElement("div",{className:k["day-hours"]},Object(O.times)(we).map(function(e){return c.a.createElement(A,{classes:k,getDateRangeForVisualGrid:Xe,key:e,timeIndex:e})})))})))))}),re=a(112),ce=a.n(re),le=[["2019-03-03T22:45:00.000Z","2019-03-04T01:15:00.000Z"],["2019-03-05T22:00:00.000Z","2019-03-06T01:00:00.000Z"],["2019-03-04T22:15:00.000Z","2019-03-05T01:00:00.000Z"],["2019-03-07T05:30:00.000Z","2019-03-07T10:00:00.000Z"],["2019-03-08T22:00:00.000Z","2019-03-09T01:00:00.000Z"],["2019-03-09T22:00:00.000Z","2019-03-10T01:00:00.000Z"],["2019-03-06T22:00:00.000Z","2019-03-07T01:00:00.000Z"]].map(function(e){return e.map(function(e){return new Date(e)})}).sort(function(e,t){return Object(n.compareAsc)(e[0],t[0])}),se=document.getElementById("root");s.a.render(c.a.createElement(ne,{classes:ce.a,originDate:Object(n.startOfWeek)(new Date("2019-03-04"),{weekStartsOn:1}),schedule:le,verticalPrecision:15}),se)}},[[115,1,2]]]);
//# sourceMappingURL=main.aceafcd3.chunk.js.map