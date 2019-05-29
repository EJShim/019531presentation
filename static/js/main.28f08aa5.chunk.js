(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,n,t){e.exports=t.p+"static/media/e137-BASE_L.ffa9179d.stl"},133:function(e,n){e.exports="//VTK::System::Dec\n\nuniform int PrimitiveIDOffset;\n// VC position of this fragment\n//VTK::PositionVC::Dec\n\n// optional color passed in from the vertex shader, vertexColor\n//VTK::Color::Dec\n\n// optional surface normal declaration\n//VTK::Normal::Dec\n\n// extra lighting parameters\n//VTK::Light::Dec\n\n// Texture coordinates\n//VTK::TCoord::Dec\n\n// picking support\n//VTK::Picking::Dec\n\n// Depth Peeling Support\n//VTK::DepthPeeling::Dec\n\n// clipping plane vars\n//VTK::Clip::Dec\n\n// the output of this shader\n//VTK::Output::Dec\n\n// Apple Bug\n//VTK::PrimID::Dec\n\n// handle coincident offsets\n//VTK::Coincident::Dec\n\n//VTK::ZBuffer::Dec\n\nvoid main()\n{\n  // VC position of this fragment. This should not branch/return/discard.\n  //VTK::PositionVC::Impl\n\n  // Place any calls that require uniform flow (e.g. dFdx) here.\n  //VTK::UniformFlow::Impl\n\n  // Set gl_FragDepth here (gl_FragCoord.z by default)\n  //VTK::Depth::Impl\n\n  // Early depth peeling abort:\n  //VTK::DepthPeeling::PreColor\n\n  // Apple Bug\n  //VTK::PrimID::Impl\n\n  //VTK::Clip::Impl\n\n  //VTK::Color::Impl\n\n  // Generate the normal if we are not passed in one\n  //VTK::Normal::Impl\n\n  //VTK::Light::Impl\n\n  //VTK::TCoord::Impl\n\n\n  //Calcualte Depth, vertexVC is not normalized, need to use proper clipping range\n  float zNear = 270.0;\n  float zFar = 280.0;\n  float vdf = 1.0 + (vertexVC.z + zNear) * (1.0 / (zFar-zNear));\n\n  gl_FragData[0] = vec4(vdf, vdf, vdf, 1.0);\n  \n  if (gl_FragData[0].a <= 0.0)\n  {\n    discard;\n  }\n\n  //VTK::DepthPeeling::Impl\n\n  //VTK::Picking::Impl\n\n  // handle coincident offsets\n  //VTK::Coincident::Impl\n\n  //VTK::ZBuffer::Impl\n}\n"},143:function(e,n,t){e.exports=t(228)},148:function(e,n,t){},149:function(e,n,t){},157:function(e,n){},172:function(e,n){},174:function(e,n){},228:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),i=t(117),o=t.n(i),c=(t(148),t(149),t(23)),s=t(24),d=t(27),l=t(25),p=t(29),u=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"darkblue"}}," Home ")}}]),n}(r.Component),f=t(28),h=t(33),g=t(18),m=t(38),w=t(131),v=t.n(w),C=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=h.a.newInstance({background:[1,1,1]});e.setContainer(this.refs.renderer);var n=e.getRenderer(),t=e.getRenderWindow(),r=m.a.newInstance();r.setUrl(v.a,{binary:!1}).then(function(a){var i=g.a.newInstance();i.setInputData(r.getOutputData());var o=f.a.newInstance();o.setMapper(i),n.addActor(o),n.resetCamera(),t.render(),e.resize()})}},{key:"render",value:function(){return a.a.createElement("div",{ref:"renderer",style:{width:"100%",height:"100%"}})}}]),n}(r.Component),b=t(138),I=t(54),D=t.n(I),k=t(55),y=t.n(k),V=t(56),T=t.n(V),W=t(57),K=t.n(W),L=t(58),O=t.n(L),R=t(59),x=t.n(R),j=t(60),P=t.n(j),E=t(61),z=t.n(E),A=t(62),M=t.n(A),F=t(63),S=t.n(F),B=t(64),N=t.n(B),U=t(65),_=t.n(U),G=t(66),J=t.n(G),Z=t(67),q=t.n(Z),H=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(l.a)(n).call(this,e))).genericRenderWindow=h.a.newInstance({background:[1,1,1]}),t.picker=b.a.newInstance(),t.picker.setPickFromList(!1),t.picker.initializePickList(),t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"onMouseMove",value:function(e){var n=this.genericRenderWindow.getRenderer();n.getActors().forEach(function(e){e.getProperty().setColor(1,1,1)});var t=e.position,r=[t.x,t.y,0];(this.picker.pick(r,n),this.picker.getActors().length<1)||(this.picker.getActors()[0].getProperty().setColor(1,0,0),this.genericRenderWindow.getRenderWindow().render())}},{key:"componentDidMount",value:function(){var e=this;this.genericRenderWindow.setContainer(this.refs.renderer);var n=this.genericRenderWindow.getRenderer(),t=this.genericRenderWindow.getRenderWindow();t.getInteractor().onMouseMove(function(n){e.onMouseMove(n)});var r=m.a.newInstance();[D.a,y.a,T.a,K.a,O.a,x.a,P.a,z.a,M.a,S.a,N.a,_.a,J.a,q.a].forEach(function(a,i){r.setUrl(a,{binary:!1}).then(function(a){var i=g.a.newInstance();i.setInputData(r.getOutputData());var o=f.a.newInstance();o.setMapper(i),n.addActor(o),n.resetCamera(),t.render(),e.genericRenderWindow.resize()})})}},{key:"render",value:function(){return a.a.createElement("div",{ref:"renderer",style:{width:"100%",height:"100%"}})}}]),n}(r.Component),$=t(132),Q=t(133),X=t.n(Q),Y=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(l.a)(n).call(this,e))).genericWindowCollection=[h.a.newInstance({background:[1,1,1]}),h.a.newInstance({background:[0,0,0]})],t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"synchronizeCamera",value:function(e){var n=this.genericWindowCollection[1].getRenderer().getActiveCamera();n.shallowCopy(e),n.orthogonalizeViewUp(),n.setParallelProjection(!0),this.genericWindowCollection[1].getRenderWindow().render()}},{key:"componentDidMount",value:function(){var e=this;this.genericWindowCollection[0].setContainer(this.refs.renderer1),this.genericWindowCollection[1].setContainer(this.refs.renderer2);var n=this.genericWindowCollection[0].getRenderer(),t=this.genericWindowCollection[0].getRenderWindow();n.getActiveCamera().onModified(function(n){e.synchronizeCamera(n)});var r=this.genericWindowCollection[1].getRenderer(),a=this.genericWindowCollection[1].getRenderWindow();r.getActiveCamera().setParallelProjection(!1);var i=$.a.newInstance();i.removeAllManipulators(),this.genericWindowCollection[1].getInteractor().setInteractorStyle(i);var o=m.a.newInstance();[D.a,y.a,T.a,K.a,O.a,x.a,P.a,z.a,M.a,S.a,N.a,_.a,J.a,q.a].forEach(function(i,c){o.setUrl(i,{binary:!1}).then(function(i){var c=g.a.newInstance();c.setInputData(o.getOutputData());var s=f.a.newInstance();s.setMapper(c),n.addActor(s);var d=g.a.newInstance();d.setInputData(o.getOutputData()),d.getViewSpecificProperties().OpenGL={ShaderReplacements:[],FragmentShaderCode:X.a,GeometryShaderCode:""};var l=f.a.newInstance();l.setMapper(d),r.addActor(l),r.addActor(l),n.resetCamera(),r.resetCamera(),t.render(),a.render(),e.genericWindowCollection[0].resize(),e.genericWindowCollection[1].resize()})}),this.genericWindowCollection[0].resize()}},{key:"render",value:function(){return[a.a.createElement("div",{ref:"renderer1",style:{width:"50%",height:"100%",backgroundColor:"red"},key:0}),a.a.createElement("div",{ref:"renderer2",style:{position:"absolute",top:0,left:"50%",width:"50%",height:"100%",backgroundColor:"blue"},key:1})]}}]),n}(r.Component),ee=t(134),ne=t(32);var te=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ee.a,null,a.a.createElement(ne.a,{exact:!0,path:"/",component:u}),a.a.createElement(ne.a,{path:"/1",component:C}),a.a.createElement(ne.a,{path:"/2",component:H}),a.a.createElement(ne.a,{path:"/3",component:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,n,t){e.exports=t.p+"static/media/e016-LR1.37cc0132.stl"},55:function(e,n,t){e.exports=t.p+"static/media/e017-LR2.2b2bd9cc.stl"},56:function(e,n,t){e.exports=t.p+"static/media/e018-LR3.df888cfb.stl"},57:function(e,n,t){e.exports=t.p+"static/media/e019-LR4.d34c2272.stl"},58:function(e,n,t){e.exports=t.p+"static/media/e020-LR5.687387de.stl"},59:function(e,n,t){e.exports=t.p+"static/media/e021-LR6.83f98640.stl"},60:function(e,n,t){e.exports=t.p+"static/media/e022-LR7.518da38d.stl"},61:function(e,n,t){e.exports=t.p+"static/media/e024-LL1.b4d5d1d4.stl"},62:function(e,n,t){e.exports=t.p+"static/media/e025-LL2.fffbf8e5.stl"},63:function(e,n,t){e.exports=t.p+"static/media/e026-LL3.a0dc4869.stl"},64:function(e,n,t){e.exports=t.p+"static/media/e027-LL4.3f978ca6.stl"},65:function(e,n,t){e.exports=t.p+"static/media/e028-LL5.078dacd4.stl"},66:function(e,n,t){e.exports=t.p+"static/media/e029-LL6.6a245a79.stl"},67:function(e,n,t){e.exports=t.p+"static/media/e030-LL7.b32c9b16.stl"}},[[143,1,2]]]);
//# sourceMappingURL=main.28f08aa5.chunk.js.map