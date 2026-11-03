import{W as ge,S as ue,a as ne,P as xe,T as we,b as se,c as le,V as L,M as ie,C as ye,d as U,N as Me,L as be,e as De}from"./three.module.DcKFDN3d.js";const ve=a=>Math.min(Math.max(a,0),1),h=(a,g,d)=>ve((a-g)/(d-g)),n=a=>(a=ve(a),a*a*a*(a*(a*6-15)+10)),s=(a,g,d)=>a+(g-a)*d,re=[{img:"hero/woodland-front.jpg",depth:"hero/woodland-front-depth.png",door:[.537,.745]},{img:"hero/woodland-lounge.jpg",depth:"hero/woodland-lounge-depth.png",focus:[.52,.5]}],F=.78,ce=.6,V=[.485,.57,.59,.92],Se=`
uniform sampler2D uDepth; uniform float uDisp;
varying vec2 vUv; varying float vD;
void main() {
  vUv = uv;
  float d = texture2D(uDepth, uv).r;
  vD = d;
  vec3 p = position;
  // edges stay pinned to the sheet so the outline is a clean rectangle
  float e = smoothstep(0.0, 0.04, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
  p.z += d * uDisp * e;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,Re=`
uniform sampler2D uImg, uDepth; uniform vec2 uTexel;
uniform float uDraw, uFill, uLight, uSheet, uSweep;
uniform vec2 uRes; uniform float uVig;
varying vec2 vUv; varying float vD;
float lum(vec2 uv) { return dot(texture2D(uImg, uv).rgb, vec3(0.299, 0.587, 0.114)); }
float dep(vec2 uv) { return texture2D(uDepth, uv).r; }
float box(vec2 uv, vec2 a, vec2 b, float w) { // 1 on the outline of the rectangle a..b
  vec2 d = min(abs(uv - a), abs(uv - b));
  float inx = step(a.x - w, uv.x) * step(uv.x, b.x + w), iny = step(a.y - w, uv.y) * step(uv.y, b.y + w);
  return max((1.0 - smoothstep(0.0, w, d.x)) * iny, (1.0 - smoothstep(0.0, w, d.y)) * inx);
}
void main() {
  vec2 uv = vUv;
  // blueprint: strong edges of the photo (Sobel on light) plus silhouette edges of the depth map, thin lines
  vec2 t = uTexel;
  float gx = -lum(uv + vec2(-t.x, -t.y)) - 2.0 * lum(uv + vec2(-t.x, 0.)) - lum(uv + vec2(-t.x, t.y)) + lum(uv + vec2(t.x, -t.y)) + 2.0 * lum(uv + vec2(t.x, 0.)) + lum(uv + vec2(t.x, t.y));
  float gy = -lum(uv + vec2(-t.x, -t.y)) - 2.0 * lum(uv + vec2(0., -t.y)) - lum(uv + vec2(t.x, -t.y)) + lum(uv + vec2(-t.x, t.y)) + 2.0 * lum(uv + vec2(0., t.y)) + lum(uv + vec2(t.x, t.y));
  float de = abs(dep(uv + vec2(t.x * 2., 0.)) - dep(uv - vec2(t.x * 2., 0.))) + abs(dep(uv + vec2(0., t.y * 2.)) - dep(uv - vec2(0., t.y * 2.)));
  float edge = clamp(smoothstep(0.42, 0.8, length(vec2(gx, gy))) * 0.7 + smoothstep(0.05, 0.1, de) * 0.8, 0.0, 1.0);
  // pen sweep: lines appear left to right
  float th = uv.x * 0.9;
  float drawn = smoothstep(th - 0.06, th, uDraw * 0.98);
  vec2 g = abs(fract(uv * vec2(60.0, 40.0)) - 0.5);
  float grid = (1.0 - smoothstep(0.0, 0.03, min(g.x, g.y))) * 0.05;
  vec2 g2 = abs(fract(uv * vec2(6.0, 4.0)) - 0.5);
  grid += (1.0 - smoothstep(0.0, 0.004, min(g2.x, g2.y))) * 0.05;
  vec3 paper = vec3(0.0006, 0.012, 0.051); // brand night #021d40, linear
  vec3 ink = vec3(0.33, 0.56, 1.0); // #9cc5ff, linear
  // sheet frame and title block, like a real drawing
  float frame = max(box(uv, vec2(0.02, 0.03), vec2(0.98, 0.97), 0.0016), box(uv, vec2(0.74, 0.03), vec2(0.98, 0.13), 0.0012));
  vec3 bp = paper + ink * (grid * drawn + edge * drawn * 0.95 + frame * uSheet * smoothstep(0.0, 0.3, uDraw));

  vec3 photo = texture2D(uImg, uv).rgb * uLight;
  // colour floods in from the back wall to the front, a bright scan line at the front
  float d = vD;
  float fill = uFill * 1.12 - 0.06;
  float m = smoothstep(d - 0.05, d + 0.005, fill);
  float front = (1.0 - smoothstep(0.0, 0.03, abs(d - fill))) * step(0.001, uFill) * (1.0 - step(0.999, uFill));
  // a band of light sweeps across the drawing every few seconds, catching the lines (reads as a lit model, not a flat image)
  float sw = exp(-pow((uv.x + uv.y * 0.35 - mod(uSweep * 0.32, 2.2) + 0.35) * 9.0, 2.0));
  vec3 col = mix(bp, photo, m) + ink * front * 1.4 * 0.0;
  vec2 sc = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * smoothstep(0.25, 0.85, length(sc * vec2(1.0, 0.8)));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Ce=`
uniform sampler2D uImg; uniform vec2 uC, uH; uniform float uR, uF, uZoom, uImgAspect; uniform vec2 uRes;
varying vec2 vUv;
void main() {
  vec2 p = gl_FragCoord.xy / uRes;
  float sa = uRes.x / uRes.y;
  // the doorway itself opens: a rounded door-shaped rectangle with a crisp edge grows out of the opening
  vec2 q = abs((p - uC) * vec2(sa, 1.0)) - uH * vec2(sa, 1.0) + uR;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uR;
  float a = 1.0 - smoothstep(-uF, 0.0, d);
  if (a <= 0.0) discard;
  vec2 uv = p - 0.5;
  if (sa > uImgAspect) uv.y *= uImgAspect / sa; else uv.x *= sa / uImgAspect;
  uv = uv / uZoom + 0.5;
  vec4 c = texture2D(uImg, uv);
  gl_FragColor = vec4(c.rgb, a);
  #include <colorspace_fragment>
}`;function Fe(a,g){const d=innerWidth<768,M=document.createElement("canvas");M.className="h3-canvas",M.setAttribute("aria-hidden","true"),a.prepend(M);const l=new ge({canvas:M,antialias:!0,alpha:!1,preserveDrawingBuffer:!!window.__recording});l.setPixelRatio(Math.min(devicePixelRatio,d?1.6:1.75)),l.setClearColor(725528),l.outputColorSpace=ue;const q=new ne,c=new xe(38,1,.01,100),B=Math.tan(De.degToRad(19)),me=new we,N=(e,u)=>new Promise((w,E)=>me.load(g+e,i=>{i.colorSpace=u?ue:Me,i.minFilter=be,i.generateMipmaps=!1,w(i)},void 0,E)),b=2,D=3,O=new se(D,b,d?180:300,d?120:200),o={uImg:{value:null},uDepth:{value:null},uTexel:{value:new L(1/1600,1/1067)},uDisp:{value:.06},uDraw:{value:0},uFill:{value:0},uLight:{value:1},uSheet:{value:1},uSweep:{value:0},uRes:{value:new L(1,1)},uVig:{value:.45}},Z=new le({vertexShader:Se,fragmentShader:Re,uniforms:o});q.add(new ie(O,Z));const x={uImg:{value:null},uC:{value:new L},uH:{value:new L},uR:{value:.02},uF:{value:.003},uZoom:{value:1},uImgAspect:{value:1.5},uRes:o.uRes},Q=new le({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Ce,uniforms:x,depthTest:!1,depthWrite:!1,transparent:!0}),J=new ne,pe=new ye,H=new ie(new se(2,2),Q);H.frustumCulled=!1,J.add(H),l.autoClear=!1;let v=[];const he=Promise.all(re.flatMap(e=>[N(e.img,!0),N(e.depth,!1)])).then(e=>{v=e});let P=0,T=0,m=0,K=0,f=0,X=0,Y=0;const $=()=>{P=a.clientWidth,T=a.clientHeight,l.setSize(P,T,!1),l.getDrawingBufferSize(o.uRes.value),c.aspect=P/T,c.updateProjectionMatrix()};$();const ee=new ResizeObserver(()=>{$(),R()});ee.observe(a);const _=(e,u)=>new U((e-.5)*D,(.5-u)*b,0),p=new U,te=new U,S=new U,ae=(e,u)=>(S.copy(_(e,u)),S.z=.02,S.project(c),[(S.x+1)/2,(S.y+1)/2]);function R(){if(!v.length)return;const e=P/T,u=e>1.1,w=Math.min(b,D/e)/(2*B)*.9,E=w*(u?.95:1.05),i=m>=F,W=re[i?1:0];o.uImg.value=v[i?2:0],o.uDepth.value=v[i?3:1];let k,C,y,z;if(i){const t=h(m,F,1),r=u?_(W.focus[0],W.focus[1]):_(.34,.62);p.copy(r).multiplyScalar(n(h(t,0,.7))*(u?.3:1)),k=w*(1-n(t)*.5),C=s(0,.3,n(t)),y=s(0,.05,t),z=0,o.uDraw.value=1,o.uFill.value=1,o.uSheet.value=0,o.uDisp.value=s(.15,.24,n(h(t,0,.3))),o.uLight.value=1-n(h(t,.6,1))*.15}else{const t=n(h(m,.06,.3)),r=n(h(m,.38,F)),A=_(W.door[0],W.door[1]);p.set(0,0,0).lerp(A,n(h(m,.36,F))),k=s(s(E*(1-.12*n(Math.min(f/6,1))),w,t),w*.5,r);const I=(1-t)*Math.min(f/2,1);C=s(u?-.07:-.08,-.03,t)+(.05-.05*n(Math.min(f/6,1)))*(1-t)+Math.sin(f*.5)*(u?.03:.04)*I,y=s(u?.03:.05,.02,t)+Math.cos(f*.4)*(u?.015:.025)*I,z=1-t,o.uDraw.value=K,o.uFill.value=1,o.uDisp.value=.24,o.uSweep.value=f,o.uSheet.value=0,o.uLight.value=1}if(z<.001){const t=k*B*1.08,r=t*e;p.x=Math.max(Math.min(p.x,Math.max(D/2-r,0)),-Math.max(D/2-r,0)),p.y=Math.max(Math.min(p.y,Math.max(b/2-t,0)),-Math.max(b/2-t,0))}if(C+=X*.08,y+=Y*.05,te.set(Math.sin(C)*Math.cos(y),Math.sin(y),Math.cos(C)*Math.cos(y)).multiplyScalar(k).add(p),c.position.copy(te),c.lookAt(p),c.clearViewOffset(),c.updateMatrixWorld(),l.clear(),l.render(q,c),!i&&m>ce){const t=n(h(m,ce,F)),[r,A]=ae(V[0],V[1]),[I,oe]=ae(V[2],V[3]),j=Math.min(Math.max((r+I)/2,.2),.8),G=Math.min(Math.max((A+oe)/2,.25),.75),de=Math.min(Math.abs(I-r),.3)/2,fe=Math.min(Math.abs(A-oe),.5)/2;x.uC.value.set(j,G),x.uH.value.set(s(de,Math.max(j,1-j)+.05,t),s(fe,Math.max(G,1-G)+.05,t)),x.uR.value=s(.012,0,t),x.uImg.value=v[2],x.uZoom.value=s(1.35,1/.9,t),l.render(J,pe)}}return{ready:he.then(()=>{o.uTexel.value.set(1/v[0].image.width,1/v[0].image.height),R()}),set(e){m=e,R()},intro(e){f=e;const u=Math.min(e/2.2,1);K=1-Math.pow(1-u,3),R()},pointer(e,u){X=e,Y=u,R()},dispose(){ee.disconnect(),O.dispose(),Z.dispose(),Q.dispose(),H.geometry.dispose(),v.forEach(e=>e.dispose()),l.dispose(),M.remove()}}}export{F as SWITCH,Fe as mountHero};
