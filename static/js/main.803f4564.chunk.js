(window.webpackJsonpsandbox=window.webpackJsonpsandbox||[]).push([[0],{123:function(e,t){},214:function(e,t,n){e.exports=n(363)},310:function(e,t,n){},311:function(e,t,n){},335:function(e,t){},361:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),o=n(116),i=n.n(o),c=n(0),s=n(5),l=n(166),d=n.n(l),u=n(36),p=n.n(u);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=function(e,t){var n=new Date(t),a=new Date(e),r=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()),o=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());return Math.floor((o-r)/864e5)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e||{},n=t.startDate,a=t.endDate,r=t.minDate,o=t.maxDate;if(!n||!a||!r||!o)return null;var i=new Date(r),c=new Date(o),s=f(c,i),l=new Date(n),d=new Date(a),u=s-f(c,l),p=s-f(c,d),m=u||0,g=p||s;return{startDayIndex:m,endDayIndex:g,numberOfDays:s}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.reduce(function(e,t){var n=t.key,a=t.default;return g({},e,Object(c.a)({},n,a))},{}),a=g({},n,{},t),r=a.startDate,o=a.endDate,i=a.trimEndDate,s=a.maxAbsoluteDate,l=r,d=o>s?s:o,u=i>s?s:i;return g({},a,{},!!l&&{startYear:p()(l).year(),startMonth:p()(l).month(),startDay:p()(l).dayOfYear()},{},!!o&&{endYear:p()(d).year(),endMonth:p()(d).month(),endDay:p()(d).dayOfYear()},{},!!i&&{trimEndYear:p()(u).year(),trimEndMonth:p()(u).month(),trimEndDay:p()(u).dayOfYear()},{},b(a))},v=n(172),y=n(2),O=n(1),w=n(7),j=n(4),C=n(8),D=n(167),P=n.n(D),E=n(59),S=n.n(E),k=n(39),x=n.n(k),I=n(98),T=n(368),A=n(171);n(309),n(310);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={zoom:2,lat:0,lng:0},z=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).events={},n.state={viewport:F({},M,{},n.props.viewport),flying:!1,loaded:!1},n.onLoad=function(){var e=n.props,t=e.bounds,a=e.onLoad;n.setState({loaded:!0}),!x()(t)&&t.bbox&&n.fitBounds(),a({map:n.map,mapContainer:n.mapContainer})},n.onViewportChange=function(e,t){var a=n.props.onViewportChange;n.setState({viewport:e}),a(e)},n.onResize=function(e){var t=n.props.onViewportChange,a=F({},n.state.viewport,{},e);n.setState({viewport:a}),t(a)},n.onMoveEnd=function(){var e=n.props.onViewportChange,t=n.state.viewport;if(n.map){var a=n.map.getBearing(),r=n.map.getPitch(),o=n.map.getZoom(),i=n.map.getCenter(),c=i.lng,s=F({},t,{bearing:a,pitch:r,zoom:o,latitude:i.lat,longitude:c});n.setState({viewport:s}),e(s)}},n.fitBounds=function(){var e=n.state.viewport,t=n.props,a=t.bounds,r=t.onViewportChange,o=a.bbox,i=a.options,c=F({width:n.mapContainer.offsetWidth,height:n.mapContainer.offsetHeight},e),s=new T.a(c).fitBounds([[o[0],o[1]],[o[2],o[3]]],i),l=s.longitude,d=s.latitude,u=s.zoom,p=F({},n.state.viewport,{longitude:l,latitude:d,zoom:u,transitionDuration:2500,transitionInterruption:I.b.UPDATE});n.setState({flying:!0,viewport:p}),r(p),setTimeout(function(){n.setState({flying:!1})},2500)},n}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.viewport,n=e.bounds,a=this.props,r=a.viewport,o=a.bounds,i=this.state.viewport;S()(r,t)||this.setState({viewport:F({},i,{},r)}),x()(o)||S()(o,n)||this.fitBounds()}},{key:"render",value:function(){var e=this,t=this.props,n=t.customClass,a=t.children,o=(t.getCursor,t.dragPan),i=t.dragRotate,s=t.scrollZoom,l=t.touchZoom,d=t.touchRotate,u=t.doubleClickZoom,p=Object(v.a)(t,["customClass","children","getCursor","dragPan","dragRotate","scrollZoom","touchZoom","touchRotate","doubleClickZoom"]),m=this.state,g=m.viewport,f=m.loaded,b=m.flying;return r.a.createElement("div",{ref:function(t){e.mapContainer=t},className:P()(Object(c.a)({"c-map":!0},n,!!n))},r.a.createElement(I.c,Object.assign({ref:function(t){e.map=t&&t.getMap()}},p,g,{width:"100%",height:"100%",dragPan:!b&&o,dragRotate:!b&&i,scrollZoom:!b&&s,touchZoom:!b&&l,touchRotate:!b&&d,doubleClickZoom:!b&&u,onViewportChange:this.onViewportChange,onResize:this.onResize,onLoad:this.onLoad,transitionInterpolator:new I.a,transitionEasing:A.a}),f&&!!this.map&&"function"===typeof a&&a(this.map)))}}]),t}(a.Component);z.defaultProps={children:null,customClass:null,viewport:M,bounds:{},dragPan:!0,dragRotate:!0,onViewportChange:function(){},onLoad:function(){},getCursor:function(e){var t=e.isHovering,n=e.isDragging;return t?"pointer":n?"grabbing":"grab"}};var R=z,Z=(n(311),function(e){function t(){return Object(y.a)(this,t),Object(w.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"c-sidebar"},r.a.createElement("div",{className:"sidebar--scroll"},e))}}]),t}(r.a.Component)),V=n(169),Y=n.n(V),q=(n(317),n(318),n(118)),B=n(124),N=n(46),J=[{id:"testing-video",name:"Testing video",config:{type:"video",source:{type:"video"}},legendConfig:{type:"video",items:[{name:"Testing video",color:"#6D6DE5"}]},onAfterAdd:function(e,t){var n=t.getSource(e.id).player,a=n.currentTime;!function e(){var t=n.duration;a=a>=t?0:a+.05,n.setCurrentTime(a>t?t:a),requestAnimationFrame(e)}(),n.onTimeChanged=function(e){},console.log(n)}}];n(361);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var U=function(){var e=Object(a.useState)(J),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(JSON.stringify(J,null,2)),l=Object(s.a)(i,2),u=l[0],p=l[1],m=Object(a.useState)({}),g=Object(s.a)(m,2),f=g[0],b=g[1],v=n.map(function(e){var t=e.id,n=e.paramsConfig,a=e.sqlConfig,r=e.decodeConfig,o=e.timelineConfig,i=f[t]||{},c=!!n&&h(n,i.params),s=!!a&&h(a,i.sqlParams),l=!!r&&h(r,G({},o,{},i.decodeParams)),d=!!o&&G({},o,{},h(n,i.params),{},h(r,i.decodeParams));return G({id:t,slug:t,dataset:t,layers:[G({active:!0},e,{},i,{params:c,sqlParams:s,decodeParams:l,timelineParams:d})]},i)}),y=function(e,t){b(G({},f,Object(c.a)({},e.id,G({},f[e.id],{visibility:t}))))},O=function(e,t){b(G({},f,Object(c.a)({},e.id,G({},f[e.id],{opacity:t}))))},w=function(e,t){var n=t.id,a=t.decodeConfig;b(G({},f,Object(c.a)({},n,G({},f[n],{},a&&{decodeParams:{startDate:e[0],endDate:e[1],trimEndDate:e[2]}},{},!a&&{params:{startDate:e[0],endDate:e[1]}}))))};return r.a.createElement("div",{className:"c-app"},r.a.createElement(N.Icons,null),r.a.createElement("div",{className:"c-main"},r.a.createElement(Z,null,r.a.createElement(Y.a,{mode:"json",theme:"github",value:u,onChange:function(e){p(e);try{var t=JSON.parse(e);o(t)}catch(n){}},tabSize:2,width:"100%",height:"100%",wrapEnabled:!0,showPrintMargin:!1,editorProps:{$blockScrolling:!0},debounceChangePeriod:500})),r.a.createElement("div",{className:"c-map-container"},r.a.createElement(R,{mapboxApiAccessToken:"pk.eyJ1IjoibGF5ZXItbWFuYWdlciIsImEiOiJjazA2dTJnMG0zc3lwM251dGM0aXhiYTVxIn0.AaoErQTRezfQshqnEKIg8A",minZoom:2,mapOptions:{fadeDuration:0}},function(e){return r.a.createElement(q.LayerManager,{map:e,plugin:B.a,providers:{"carto-sql-points":function(e,t,n,a){var r=e.source.provider;Object(B.b)("get",r.url,r.options,e).then(function(e){return n(G({},t,{source:G({},d()(t.source,"provider"),{data:{type:"FeatureCollection",features:e.rows.map(function(e){return{type:"Feature",properties:e,geometry:{type:"Point",coordinates:[e.lon,e.lat]}}})}})}))}).catch(function(e){a(e)})}}},n.map(function(e){var t=e.id,n=e.paramsConfig,a=e.sqlConfig,o=e.decodeConfig,i=e.timelineConfig,c=e.decodeFunction,s=f[t]||{},l=G({},e,{},e.config,{},s,{},!!n&&{params:h(n,G({},s.params))},{},!!a&&{sqlParams:h(a,G({},s.sqlParams))},{},!!o&&{decodeParams:h(o,G({},i,{},s.decodeParams)),decodeFunction:c},{onAfterAdd:e.onAfterAdd});return r.a.createElement(q.Layer,Object.assign({key:e.id},l))}))}),r.a.createElement("div",{className:"c-legend"},r.a.createElement(N.Legend,{maxHeight:"65vh",collapsable:!1,sortable:!1,onChangeOrder:function(e){console.log("onChangeOrder",e)}},v.map(function(e,t){return r.a.createElement(N.LegendListItem,{index:t,key:e.slug,layerGroup:e,toolbar:r.a.createElement(N.LegendItemToolbar,null,r.a.createElement(N.LegendItemButtonOpacity,{trackStyle:{background:"#FFCC00"},handleStyle:{background:"#FFCC00"}}),r.a.createElement(N.LegendItemButtonVisibility,null)),onChangeVisibility:y,onChangeOpacity:O},r.a.createElement(N.LegendItemTypes,null),r.a.createElement(N.LegendItemTimeStep,{defaultStyles:{handleStyle:{backgroundColor:"white",borderRadius:"50%",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.29)",border:"0px",zIndex:2},railStyle:{backgroundColor:"#d6d6d9"},dotStyle:{visibility:"hidden",border:"0px"}},handleChange:w}))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(362);i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.803f4564.chunk.js.map