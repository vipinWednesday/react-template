(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[855],{49660:(e,t,o)=>{"use strict";var n=o(20862),i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,o=e.visible,n=e.zIndex,i=e.mask,p=e.maskMotion,d=e.maskAnimation,f=e.maskTransitionName;if(!i)return null;var h={};(p||f||d)&&(h=(0,a.default)({motionAppear:!0},(0,c.getMotion)({motion:p,prefixCls:t,transitionName:f,animation:d})));return r.createElement(l.default,(0,u.default)({},h,{visible:o,removeOnLeave:!0}),(function(e){var o=e.className;return r.createElement("div",{style:{zIndex:n},className:(0,s.default)("".concat(t,"-mask"),o)})}))};var u=i(o(67154)),a=i(o(81109)),r=n(o(67294)),s=i(o(94184)),l=i(o(784)),c=o(96926)},11991:(e,t,o)=>{"use strict";var n=o(20862),i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(o(67154)),a=i(o(81109)),r=n(o(67294)),s=i(o(784)),l=i(o(94184)),c=r.forwardRef((function(e,t){var o=e.prefixCls,n=e.visible,i=e.zIndex,c=e.children,p=e.mobile,d=(p=void 0===p?{}:p).popupClassName,f=p.popupStyle,h=p.popupMotion,v=void 0===h?{}:h,m=p.popupRender,g=r.useRef();r.useImperativeHandle(t,(function(){return{forceAlign:function(){},getElement:function(){return g.current}}}));var M=(0,a.default)({zIndex:i},f),C=c;return r.Children.count(c)>1&&(C=r.createElement("div",{className:"".concat(o,"-content")},c)),m&&(C=m(C)),r.createElement(s.default,(0,u.default)({visible:n,ref:g,removeOnLeave:!0},v),(function(e,t){var n=e.className,i=e.style,u=(0,l.default)(o,d,n);return r.createElement("div",{ref:t,className:u,style:(0,a.default)((0,a.default)({},i),M)},C)}))}));c.displayName="MobilePopupInner";var p=c;t.default=p},8348:(e,t,o)=>{"use strict";var n=o(20862),i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(o(67154)),a=i(o(81109)),r=i(o(63038)),s=n(o(67294)),l=i(o(63741)),c=i(o(784)),p=i(o(94184)),d=i(o(8325)),f=o(96926),h=i(o(44223)),v=s.forwardRef((function(e,t){var o=e.visible,n=e.prefixCls,i=e.className,v=e.style,m=e.children,g=e.zIndex,M=e.stretch,C=e.destroyPopupOnHide,T=e.forceRender,y=e.align,P=e.point,b=e.getRootDomNode,k=e.getClassNameFromAlign,w=e.onAlign,D=e.onMouseEnter,x=e.onMouseLeave,E=e.onMouseDown,O=e.onTouchStart,N=(0,s.useRef)(),H=(0,s.useRef)(),S=(0,s.useState)(),V=(0,r.default)(S,2),R=V[0],A=V[1],L=(0,h.default)(M),_=(0,r.default)(L,2),F=_[0],I=_[1];var j=(0,d.default)(o,(function(){M&&I(b())})),B=(0,r.default)(j,2),z=B[0],U=B[1],W=(0,s.useRef)();function X(){var e;null===(e=N.current)||void 0===e||e.forceAlign()}function Y(e,t){if("align"===z){var o=k(t);A(o),R!==o?Promise.resolve().then((function(){X()})):U((function(){var e;null===(e=W.current)||void 0===e||e.call(W)})),null===w||void 0===w||w(e,t)}}var q=(0,a.default)({},(0,f.getMotion)(e));function G(){return new Promise((function(e){W.current=e}))}["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach((function(e){var t=q[e];q[e]=function(e,o){return U(),null===t||void 0===t?void 0:t(e,o)}})),s.useEffect((function(){q.motionName||"motion"!==z||U()}),[q.motionName,z]),s.useImperativeHandle(t,(function(){return{forceAlign:X,getElement:function(){return H.current}}}));var J=(0,a.default)((0,a.default)({},F),{},{zIndex:g,opacity:"motion"!==z&&"stable"!==z&&o?0:void 0,pointerEvents:"stable"===z?void 0:"none"},v),K=!0;!(null===y||void 0===y?void 0:y.points)||"align"!==z&&"stable"!==z||(K=!1);var Q=m;return s.Children.count(m)>1&&(Q=s.createElement("div",{className:"".concat(n,"-content")},m)),s.createElement(c.default,(0,u.default)({visible:o,ref:H,leavedClassName:"".concat(n,"-hidden")},q,{onAppearPrepare:G,onEnterPrepare:G,removeOnLeave:C,forceRender:T}),(function(e,t){var o=e.className,u=e.style,r=(0,p.default)(n,i,R,o);return s.createElement(l.default,{target:P||b,key:"popup",ref:N,monitorWindowResize:!0,disabled:K,align:y,onAlign:Y},s.createElement("div",{ref:t,className:r,onMouseEnter:D,onMouseLeave:x,onMouseDownCapture:E,onTouchStartCapture:O,style:(0,a.default)((0,a.default)({},u),J)},Q))}))}));v.displayName="PopupInner";var m=v;t.default=m},4608:(e,t,o)=>{"use strict";var n=o(20862),i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(o(67154)),a=i(o(81109)),r=i(o(63038)),s=i(o(6479)),l=n(o(67294)),c=i(o(32865)),p=i(o(49660)),d=i(o(8348)),f=i(o(11991)),h=l.forwardRef((function(e,t){var o=e.visible,n=e.mobile,i=(0,s.default)(e,["visible","mobile"]),h=(0,l.useState)(o),v=(0,r.default)(h,2),m=v[0],g=v[1],M=(0,l.useState)(!1),C=(0,r.default)(M,2),T=C[0],y=C[1],P=(0,a.default)((0,a.default)({},i),{},{visible:m});(0,l.useEffect)((function(){g(o),o&&n&&y((0,c.default)())}),[o,n]);var b=T?l.createElement(f.default,(0,u.default)({},P,{mobile:n,ref:t})):l.createElement(d.default,(0,u.default)({},P,{ref:t}));return l.createElement("div",null,l.createElement(p.default,P),b)}));h.displayName="Popup";var v=h;t.default=v},44223:(e,t,o)=>{"use strict";var n=o(20862),i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(o(63038)),a=n(o(67294));t.default=function(e){var t=a.useState({width:0,height:0}),o=(0,u.default)(t,2),n=o[0],i=o[1];return[a.useMemo((function(){var t={};if(e){var o=n.width,i=n.height;-1!==e.indexOf("height")&&i?t.height=i:-1!==e.indexOf("minHeight")&&i&&(t.minHeight=i),-1!==e.indexOf("width")&&o?t.width=o:-1!==e.indexOf("minWidth")&&o&&(t.minWidth=o)}return t}),[e,n]),function(e){i({width:e.offsetWidth,height:e.offsetHeight})}]}},8325:(e,t,o)=>{"use strict";var n=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o(87757)),u=n(o(48926)),a=n(o(63038)),r=o(67294),s=n(o(64543)),l=["measure","align",null,"motion"];t.default=function(e,t){var o=(0,r.useState)(null),n=(0,a.default)(o,2),c=n[0],p=n[1],d=(0,r.useRef)(),f=(0,r.useRef)(!1);function h(e){f.current||p(e)}function v(){s.default.cancel(d.current)}return(0,r.useEffect)((function(){h("measure")}),[e]),(0,r.useEffect)((function(){switch(c){case"measure":t()}c&&(d.current=(0,s.default)((0,u.default)(i.default.mark((function e(){var t,o;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.indexOf(c),(o=l[t+1])&&-1!==t&&h(o);case 3:case"end":return e.stop()}}),e)})))))}),[c]),(0,r.useEffect)((function(){return function(){f.current=!0,v()}}),[]),[c,function(e){v(),d.current=(0,s.default)((function(){h((function(e){switch(c){case"align":return"motion";case"motion":return"stable"}return e})),null===e||void 0===e||e()}))}]}},93250:(e,t,o)=>{"use strict";var n=o(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o(67294)).createContext(null);t.default=i},125:(e,t,o)=>{"use strict";var n=o(20862),i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.generateTrigger=E,t.default=void 0;var u=i(o(81109)),a=i(o(67154)),r=i(o(34575)),s=i(o(93913)),l=i(o(81506)),c=i(o(2205)),p=i(o(99842)),d=n(o(67294)),f=i(o(73935)),h=i(o(64543)),v=i(o(32191)),m=i(o(35684)),g=o(75531),M=i(o(97596)),C=i(o(18769)),T=i(o(94184)),y=o(50535),P=i(o(4608)),b=i(o(93250));function k(){}function w(){return""}function D(e){return e?e.ownerDocument:window.document}var x=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function E(e){var t=function(t){(0,c.default)(n,t);var o=(0,p.default)(n);function n(e){var t,i;return(0,r.default)(this,n),(t=o.call(this,e)).popupRef=d.createRef(),t.triggerRef=d.createRef(),t.onMouseEnter=function(e){var o=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",e),t.delaySetPopupVisible(!0,o,o?null:e)},t.onMouseMove=function(e){t.fireEvents("onMouseMove",e),t.setPoint(e)},t.onMouseLeave=function(e){t.fireEvents("onMouseLeave",e),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},t.onPopupMouseEnter=function(){t.clearDelayTimer()},t.onPopupMouseLeave=function(e){var o;e.relatedTarget&&!e.relatedTarget.setTimeout&&(0,v.default)(null===(o=t.popupRef.current)||void 0===o?void 0:o.getElement(),e.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},t.onFocus=function(e){t.fireEvents("onFocus",e),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay))},t.onMouseDown=function(e){t.fireEvents("onMouseDown",e),t.preClickTime=Date.now()},t.onTouchStart=function(e){t.fireEvents("onTouchStart",e),t.preTouchTime=Date.now()},t.onBlur=function(e){t.fireEvents("onBlur",e),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay)},t.onContextMenu=function(e){e.preventDefault(),t.fireEvents("onContextMenu",e),t.setPopupVisible(!0,e)},t.onContextMenuClose=function(){t.isContextMenuToShow()&&t.close()},t.onClick=function(e){if(t.fireEvents("onClick",e),t.focusTime){var o;if(t.preClickTime&&t.preTouchTime?o=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?o=t.preClickTime:t.preTouchTime&&(o=t.preTouchTime),Math.abs(o-t.focusTime)<20)return;t.focusTime=0}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var n=!t.state.popupVisible;(t.isClickToHide()&&!n||n&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,e)},t.onPopupMouseDown=function(){var e;(t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=window.setTimeout((function(){t.hasPopupMouseDown=!1}),0),t.context)&&(e=t.context).onPopupMouseDown.apply(e,arguments)},t.onDocumentClick=function(e){if(!t.props.mask||t.props.maskClosable){var o=e.target,n=t.getRootDomNode(),i=t.getPopupDomNode();(0,v.default)(n,o)&&!t.isContextMenuOnly()||(0,v.default)(i,o)||t.hasPopupMouseDown||t.close()}},t.getRootDomNode=function(){var e=t.props.getTriggerDOMNode;if(e)return e(t.triggerRef.current);try{var o=(0,m.default)(t.triggerRef.current);if(o)return o}catch(e){}return f.default.findDOMNode((0,l.default)(t))},t.getPopupClassNameFromAlign=function(e){var o=[],n=t.props,i=n.popupPlacement,u=n.builtinPlacements,a=n.prefixCls,r=n.alignPoint,s=n.getPopupClassNameFromAlign;return i&&u&&o.push((0,y.getAlignPopupClassName)(u,a,e,r)),s&&o.push(s(e)),o.join(" ")},t.getComponent=function(){var e=t.props,o=e.prefixCls,n=e.destroyPopupOnHide,i=e.popupClassName,u=e.onPopupAlign,r=e.popupMotion,s=e.popupAnimation,l=e.popupTransitionName,c=e.popupStyle,p=e.mask,f=e.maskAnimation,h=e.maskTransitionName,v=e.maskMotion,m=e.zIndex,g=e.popup,M=e.stretch,C=e.alignPoint,T=e.mobile,y=e.forceRender,b=t.state,k=b.popupVisible,w=b.point,D=t.getPopupAlign(),x={};return t.isMouseEnterToShow()&&(x.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(x.onMouseLeave=t.onPopupMouseLeave),x.onMouseDown=t.onPopupMouseDown,x.onTouchStart=t.onPopupMouseDown,d.createElement(P.default,(0,a.default)({prefixCls:o,destroyPopupOnHide:n,visible:k,point:C&&w,className:i,align:D,onAlign:u,animation:s,getClassNameFromAlign:t.getPopupClassNameFromAlign},x,{stretch:M,getRootDomNode:t.getRootDomNode,style:c,mask:p,zIndex:m,transitionName:l,maskAnimation:f,maskTransitionName:h,maskMotion:v,ref:t.popupRef,motion:r,mobile:T,forceRender:y}),"function"===typeof g?g():g)},t.attachParent=function(e){h.default.cancel(t.attachId);var o,n=t.props,i=n.getPopupContainer,u=n.getDocument,a=t.getRootDomNode();i?(a||0===i.length)&&(o=i(a)):o=u(t.getRootDomNode()).body,o?o.appendChild(e):t.attachId=(0,h.default)((function(){t.attachParent(e)}))},t.getContainer=function(){var e=(0,t.props.getDocument)(t.getRootDomNode()).createElement("div");return e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",t.attachParent(e),e},t.setPoint=function(e){t.props.alignPoint&&e&&t.setState({point:{pageX:e.pageX,pageY:e.pageY}})},t.handlePortalUpdate=function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible)},t.triggerContextValue={onPopupMouseDown:t.onPopupMouseDown},i="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,t.state={prevPopupVisible:i,popupVisible:i},x.forEach((function(e){t["fire".concat(e)]=function(o){t.fireEvents(e,o)}})),t}return(0,s.default)(n,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e,t=this.props;if(this.state.popupVisible)return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(e=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,M.default)(e,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(e=e||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,M.default)(e,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(e=e||t.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,M.default)(e,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,M.default)(window,"blur",this.onContextMenuClose)));this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),h.default.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return(null===(e=this.popupRef.current)||void 0===e?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,t=e.popupPlacement,o=e.popupAlign,n=e.builtinPlacements;return t&&n?(0,y.getAlignFromPlacement)(n,t,o):o}},{key:"setPopupVisible",value:function(e,t){var o=this.props.alignPoint,n=this.state.popupVisible;this.clearDelayTimer(),n!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:n}),this.props.onPopupVisibleChange(e)),o&&t&&e&&this.setPoint(t)}},{key:"delaySetPopupVisible",value:function(e,t,o){var n=this,i=1e3*t;if(this.clearDelayTimer(),i){var u=o?{pageX:o.pageX,pageY:o.pageY}:null;this.delayTimer=window.setTimeout((function(){n.setPopupVisible(e,u),n.clearDelayTimer()}),i)}else this.setPopupVisible(e,o)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var t=this.props.children.props,o=this.props;return t[e]&&o[e]?this["fire".concat(e)]:t[e]||o[e]}},{key:"isClickToShow",value:function(){var e=this.props,t=e.action,o=e.showAction;return-1!==t.indexOf("click")||-1!==o.indexOf("click")}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return"contextMenu"===e||1===e.length&&"contextMenu"===e[0]}},{key:"isContextMenuToShow",value:function(){var e=this.props,t=e.action,o=e.showAction;return-1!==t.indexOf("contextMenu")||-1!==o.indexOf("contextMenu")}},{key:"isClickToHide",value:function(){var e=this.props,t=e.action,o=e.hideAction;return-1!==t.indexOf("click")||-1!==o.indexOf("click")}},{key:"isMouseEnterToShow",value:function(){var e=this.props,t=e.action,o=e.showAction;return-1!==t.indexOf("hover")||-1!==o.indexOf("mouseEnter")}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,t=e.action,o=e.hideAction;return-1!==t.indexOf("hover")||-1!==o.indexOf("mouseLeave")}},{key:"isFocusToShow",value:function(){var e=this.props,t=e.action,o=e.showAction;return-1!==t.indexOf("focus")||-1!==o.indexOf("focus")}},{key:"isBlurToHide",value:function(){var e=this.props,t=e.action,o=e.hideAction;return-1!==t.indexOf("focus")||-1!==o.indexOf("blur")}},{key:"forcePopupAlign",value:function(){var e;this.state.popupVisible&&(null===(e=this.popupRef.current)||void 0===e||e.forceAlign())}},{key:"fireEvents",value:function(e,t){var o=this.props.children.props[e];o&&o(t);var n=this.props[e];n&&n(t)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var t=this.state.popupVisible,o=this.props,n=o.children,i=o.forceRender,a=o.alignPoint,r=o.className,s=o.autoDestroy,l=d.Children.only(n),c={key:"trigger"};this.isContextMenuToShow()?c.onContextMenu=this.onContextMenu:c.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(c.onClick=this.onClick,c.onMouseDown=this.onMouseDown,c.onTouchStart=this.onTouchStart):(c.onClick=this.createTwoChains("onClick"),c.onMouseDown=this.createTwoChains("onMouseDown"),c.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(c.onMouseEnter=this.onMouseEnter,a&&(c.onMouseMove=this.onMouseMove)):c.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?c.onMouseLeave=this.onMouseLeave:c.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(c.onFocus=this.onFocus,c.onBlur=this.onBlur):(c.onFocus=this.createTwoChains("onFocus"),c.onBlur=this.createTwoChains("onBlur"));var p=(0,T.default)(l&&l.props&&l.props.className,r);p&&(c.className=p);var f=(0,u.default)({},c);(0,g.supportRef)(l)&&(f.ref=(0,g.composeRef)(this.triggerRef,l.ref));var h,v=d.cloneElement(l,f);return(t||this.popupRef.current||i)&&(h=d.createElement(e,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!t&&s&&(h=null),d.createElement(b.default.Provider,{value:this.triggerContextValue},v,h)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var o=e.popupVisible,n={};return void 0!==o&&t.popupVisible!==o&&(n.popupVisible=o,n.prevPopupVisible=t.popupVisible),n}}]),n}(d.Component);return t.contextType=b.default,t.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:w,getDocument:D,onPopupVisibleChange:k,afterPopupVisibleChange:k,onPopupAlign:k,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1},t}var O=E(C.default);t.default=O},50535:(e,t,o)=>{"use strict";var n=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.getAlignFromPlacement=function(e,t,o){var n=e[t]||{};return(0,i.default)((0,i.default)({},n),o)},t.getAlignPopupClassName=function(e,t,o,n){for(var i=o.points,a=Object.keys(e),r=0;r<a.length;r+=1){var s=a[r];if(u(e[s].points,i,n))return"".concat(t,"-placement-").concat(s)}return""};var i=n(o(81109));function u(e,t,o){return o?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}},96926:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMotion=function(e){var t=e.prefixCls,o=e.motion,n=e.animation,i=e.transitionName;if(o)return o;if(n)return{motionName:"".concat(t,"-").concat(n)};if(i)return{motionName:i};return null}}}]);
//# sourceMappingURL=npm.rc-trigger.3c4f321a4cda45c22791.chunk.js.map