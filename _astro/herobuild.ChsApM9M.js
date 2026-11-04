import{e as St,V as B,S as cs,f as bt,p as gs,d as hs,M as de,q as xs,r as Ms,s as ws,O as Ss,B as Xt,F as Et,t as Re,U as He,u as ve,v as lt,w as ct,x as je,T as bs,C as Ye,y as fs,R as Rt,z as ce,J as Ps,K as zt,Z as At,Q as ts,X as ss,Y as Ts,_ as ys,$ as _s,a0 as Cs,a1 as is,a2 as Es,a3 as Rs,k as Ds,j as us,a4 as Is,a5 as Ns,a6 as zs,a7 as As,a8 as Us,a9 as Fs,A as Os,aa as ks,N as ds,ab as Bs,W as Ls,P as Vs,ac as Gs,ad as js,i as Hs,H as Ws,D as qs,L as as,c as os,a as ns,ae as Qs,h as $s,af as Xs,G as Zs,ag as qt,n as Ys,g as rs,m as Ks,I as Js,ah as ei}from"./three.module.BiseM-XQ.js";import{m as ti}from"./BufferGeometryUtils.D_XAujN2.js";const Ct=new B;function we(M,t,a,f,n,o){const u=2*Math.PI*n/4,d=Math.max(o-2*n,0),w=Math.PI/4;Ct.copy(t),Ct[f]=0,Ct.normalize();const v=.5*u/(u+d),_=1-Ct.angleTo(M)/w;return Math.sign(Ct[a])===1?_*v:d/(u+d)+v+v*(1-_)}class Zt extends St{constructor(t=1,a=1,f=1,n=2,o=.1){const u=n*2+1;if(o=Math.min(t/2,a/2,f/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:t,height:a,depth:f,segments:n,radius:o},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const w=new B,v=new B,_=new B(t,a,f).divideScalar(2).subScalar(o),x=this.attributes.position.array,L=this.attributes.normal.array,D=this.attributes.uv.array,Y=x.length/6,I=new B,oe=.5/u;for(let i=0,C=0;i<x.length;i+=3,C+=2)switch(w.fromArray(x,i),v.copy(w),v.x-=Math.sign(v.x)*oe,v.y-=Math.sign(v.y)*oe,v.z-=Math.sign(v.z)*oe,v.normalize(),x[i+0]=_.x*Math.sign(w.x)+v.x*o,x[i+1]=_.y*Math.sign(w.y)+v.y*o,x[i+2]=_.z*Math.sign(w.z)+v.z*o,L[i+0]=v.x,L[i+1]=v.y,L[i+2]=v.z,Math.floor(i/Y)){case 0:I.set(1,0,0),D[C+0]=we(I,v,"z","y",o,f),D[C+1]=1-we(I,v,"y","z",o,a);break;case 1:I.set(-1,0,0),D[C+0]=1-we(I,v,"z","y",o,f),D[C+1]=1-we(I,v,"y","z",o,a);break;case 2:I.set(0,1,0),D[C+0]=1-we(I,v,"x","z",o,t),D[C+1]=we(I,v,"z","x",o,f);break;case 3:I.set(0,-1,0),D[C+0]=1-we(I,v,"x","z",o,t),D[C+1]=1-we(I,v,"z","x",o,f);break;case 4:I.set(0,0,1),D[C+0]=1-we(I,v,"x","y",o,t),D[C+1]=1-we(I,v,"y","x",o,a);break;case 5:I.set(0,0,-1),D[C+0]=we(I,v,"x","y",o,t),D[C+1]=1-we(I,v,"y","x",o,a);break}}static fromJSON(t){return new Zt(t.width,t.height,t.depth,t.segments,t.radius)}}class si extends cs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new St;t.deleteAttribute("uv");const a=new bt({side:gs}),f=new bt,n=new hs(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const o=new de(t,a);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const u=new xs(t,f,6),d=new Ms;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),u.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),u.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),u.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),u.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),u.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),u.setMatrixAt(5,d.matrix),this.add(u);const w=new de(t,xt(50));w.position.set(-16.116,14.37,8.208),w.scale.set(.1,2.428,2.739),this.add(w);const v=new de(t,xt(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);const _=new de(t,xt(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new de(t,xt(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const L=new de(t,xt(20));L.position.set(3.235,11.486,-12.541),L.scale.set(2.5,2,.1),this.add(L);const D=new de(t,xt(100));D.position.set(0,20,0),D.scale.set(1,.1,1),this.add(D)}dispose(){const t=new Set;this.traverse(a=>{a.isMesh&&(t.add(a.geometry),t.add(a.material))});for(const a of t)a.dispose()}}function xt(M){return new ws({color:0,emissive:16777215,emissiveIntensity:M})}const ht={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ft{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ii=new Ss(-1,1,1,-1,0,1);class ai extends Xt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const oi=new ai;class Lt{constructor(t){this._mesh=new de(oi,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ii)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ni extends ft{constructor(t,a="tDiffuse"){super(),this.textureID=a,this.uniforms=null,this.material=null,t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=He.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Lt(this.material)}render(t,a,f){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=f.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ls extends ft{constructor(t,a){super(),this.scene=t,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,a,f){const n=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),o.buffers.stencil.setFunc(n.ALWAYS,u,4294967295),o.buffers.stencil.setClear(d),o.buffers.stencil.setLocked(!0),t.setRenderTarget(f),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(n.EQUAL,1,4294967295),o.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),o.buffers.stencil.setLocked(!0)}}class ri extends ft{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class li{constructor(t,a){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),a===void 0){const f=t.getSize(new ve);this._width=f.width,this._height=f.height,a=new lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ct}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ni(ht),this.copyPass.material.blending=je,this.timer=new bs}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,a){this.passes.splice(a,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const a=this.passes.indexOf(t);a!==-1&&this.passes.splice(a,1)}isLastEnabledPass(t){for(let a=t+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const a=this.renderer.getRenderTarget();let f=!1;for(let n=0,o=this.passes.length;n<o;n++){const u=this.passes[n];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,f),u.needsSwap){if(f){const d=this.renderer.getContext(),w=this.renderer.state.buffers.stencil;w.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),w.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}ls!==void 0&&(u instanceof ls?f=!0:u instanceof ri&&(f=!1))}}this.renderer.setRenderTarget(a)}reset(t){if(t===void 0){const a=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,a){this._width=t,this._height=a;const f=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(f,n),this.renderTarget2.setSize(f,n);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(f,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ci extends ft{constructor(t,a,f=null,n=null,o=null){super(),this.scene=t,this.camera=a,this.overrideMaterial=f,this.clearColor=n,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(t,a,f){const n=t.autoClear;t.autoClear=!1;let o,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:f),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=n}}const Ut={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ce},cameraProjectionMatrixInverse:{value:new ce},cameraWorldMatrix:{value:new ce},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ft={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Qt={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function hi(M=5){const t=Math.floor(M)%2===0?Math.floor(M)+1:Math.floor(M),a=fi(t),f=a.length,n=new Uint8Array(f*4);for(let u=0;u<f;++u){const d=a[u],w=2*Math.PI*d/f,v=new B(Math.cos(w),Math.sin(w),0).normalize();n[u*4]=(v.x*.5+.5)*255,n[u*4+1]=(v.y*.5+.5)*255,n[u*4+2]=127,n[u*4+3]=255}const o=new fs(n,t,t);return o.wrapS=Rt,o.wrapT=Rt,o.needsUpdate=!0,o}function fi(M){const t=Math.floor(M)%2===0?Math.floor(M)+1:Math.floor(M),a=t*t,f=Array(a).fill(0);let n=Math.floor(t/2),o=t-1;for(let u=1;u<=a;){if(n===-1&&o===t?(o=t-2,n=0):(o===t&&(o=0),n<0&&(n=t-1)),f[n*t+o]!==0){o-=2,n++;continue}else f[n*t+o]=u++;o++,n--}return f}const Ot={defines:{SAMPLES:16,SAMPLE_VECTORS:ms(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraProjectionMatrixInverse:{value:new ce},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function ms(M,t,a){const f=ui(M,t,a);let n="vec3[SAMPLES](";for(let o=0;o<M;o++){const u=f[o];n+=`vec3(${u.x}, ${u.y}, ${u.z})${o<M-1?",":")"}`}return n}function ui(M,t,a){const f=[];for(let n=0;n<M;n++){const o=2*Math.PI*t*n/M,u=Math.pow(n/(M-1),a);f.push(new B(Math.cos(o),Math.sin(o),u))}return f}class di{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let a=0;a<256;a++)this.p[a]=Math.floor(t.random()*256);this.perm=[];for(let a=0;a<512;a++)this.perm[a]=this.p[a&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,a){let f,n,o;const u=.5*(Math.sqrt(3)-1),d=(t+a)*u,w=Math.floor(t+d),v=Math.floor(a+d),_=(3-Math.sqrt(3))/6,x=(w+v)*_,L=w-x,D=v-x,Y=t-L,I=a-D;let oe,i;Y>I?(oe=1,i=0):(oe=0,i=1);const C=Y-oe+_,V=I-i+_,H=Y-1+2*_,ee=I-1+2*_,W=w&255,q=v&255,r=this.perm[W+this.perm[q]]%12,N=this.perm[W+oe+this.perm[q+i]]%12,U=this.perm[W+1+this.perm[q+1]]%12;let O=.5-Y*Y-I*I;O<0?f=0:(O*=O,f=O*O*this._dot(this.grad3[r],Y,I));let c=.5-C*C-V*V;c<0?n=0:(c*=c,n=c*c*this._dot(this.grad3[N],C,V));let S=.5-H*H-ee*ee;return S<0?o=0:(S*=S,o=S*S*this._dot(this.grad3[U],H,ee)),70*(f+n+o)}noise3d(t,a,f){let n,o,u,d;const v=(t+a+f)*.3333333333333333,_=Math.floor(t+v),x=Math.floor(a+v),L=Math.floor(f+v),D=1/6,Y=(_+x+L)*D,I=_-Y,oe=x-Y,i=L-Y,C=t-I,V=a-oe,H=f-i;let ee,W,q,r,N,U;C>=V?V>=H?(ee=1,W=0,q=0,r=1,N=1,U=0):C>=H?(ee=1,W=0,q=0,r=1,N=0,U=1):(ee=0,W=0,q=1,r=1,N=0,U=1):V<H?(ee=0,W=0,q=1,r=0,N=1,U=1):C<H?(ee=0,W=1,q=0,r=0,N=1,U=1):(ee=0,W=1,q=0,r=1,N=1,U=0);const O=C-ee+D,c=V-W+D,S=H-q+D,We=C-r+2*D,qe=V-N+2*D,me=H-U+2*D,Qe=C-1+3*D,Ue=V-1+3*D,G=H-1+3*D,ne=_&255,ge=x&255,De=L&255,Fe=this.perm[ne+this.perm[ge+this.perm[De]]]%12,Ke=this.perm[ne+ee+this.perm[ge+W+this.perm[De+q]]]%12,Oe=this.perm[ne+r+this.perm[ge+N+this.perm[De+U]]]%12,ut=this.perm[ne+1+this.perm[ge+1+this.perm[De+1]]]%12;let Ie=.6-C*C-V*V-H*H;Ie<0?n=0:(Ie*=Ie,n=Ie*Ie*this._dot3(this.grad3[Fe],C,V,H));let he=.6-O*O-c*c-S*S;he<0?o=0:(he*=he,o=he*he*this._dot3(this.grad3[Ke],O,c,S));let be=.6-We*We-qe*qe-me*me;be<0?u=0:(be*=be,u=be*be*this._dot3(this.grad3[Oe],We,qe,me));let ue=.6-Qe*Qe-Ue*Ue-G*G;return ue<0?d=0:(ue*=ue,d=ue*ue*this._dot3(this.grad3[ut],Qe,Ue,G)),32*(n+o+u+d)}noise4d(t,a,f,n){const o=this.grad4,u=this.simplex,d=this.perm,w=(Math.sqrt(5)-1)/4,v=(5-Math.sqrt(5))/20;let _,x,L,D,Y;const I=(t+a+f+n)*w,oe=Math.floor(t+I),i=Math.floor(a+I),C=Math.floor(f+I),V=Math.floor(n+I),H=(oe+i+C+V)*v,ee=oe-H,W=i-H,q=C-H,r=V-H,N=t-ee,U=a-W,O=f-q,c=n-r,S=N>U?32:0,We=N>O?16:0,qe=U>O?8:0,me=N>c?4:0,Qe=U>c?2:0,Ue=O>c?1:0,G=S+We+qe+me+Qe+Ue,ne=u[G][0]>=3?1:0,ge=u[G][1]>=3?1:0,De=u[G][2]>=3?1:0,Fe=u[G][3]>=3?1:0,Ke=u[G][0]>=2?1:0,Oe=u[G][1]>=2?1:0,ut=u[G][2]>=2?1:0,Ie=u[G][3]>=2?1:0,he=u[G][0]>=1?1:0,be=u[G][1]>=1?1:0,ue=u[G][2]>=1?1:0,dt=u[G][3]>=1?1:0,$e=N-ne+v,mt=U-ge+v,ke=O-De+v,Tt=c-Fe+v,pt=N-Ke+2*v,re=U-Oe+2*v,vt=O-ut+2*v,pe=c-Ie+2*v,Je=N-he+3*v,et=U-be+3*v,tt=O-ue+3*v,yt=c-dt+3*v,_t=N-1+4*v,gt=U-1+4*v,st=O-1+4*v,Xe=c-1+4*v,Pe=oe&255,Ze=i&255,Be=C&255,it=V&255,Dt=d[Pe+d[Ze+d[Be+d[it]]]]%32,at=d[Pe+ne+d[Ze+ge+d[Be+De+d[it+Fe]]]]%32,Gt=d[Pe+Ke+d[Ze+Oe+d[Be+ut+d[it+Ie]]]]%32,It=d[Pe+he+d[Ze+be+d[Be+ue+d[it+dt]]]]%32,xe=d[Pe+1+d[Ze+1+d[Be+1+d[it+1]]]]%32;let Me=.6-N*N-U*U-O*O-c*c;Me<0?_=0:(Me*=Me,_=Me*Me*this._dot4(o[Dt],N,U,O,c));let Ne=.6-$e*$e-mt*mt-ke*ke-Tt*Tt;Ne<0?x=0:(Ne*=Ne,x=Ne*Ne*this._dot4(o[at],$e,mt,ke,Tt));let Te=.6-pt*pt-re*re-vt*vt-pe*pe;Te<0?L=0:(Te*=Te,L=Te*Te*this._dot4(o[Gt],pt,re,vt,pe));let ye=.6-Je*Je-et*et-tt*tt-yt*yt;ye<0?D=0:(ye*=ye,D=ye*ye*this._dot4(o[It],Je,et,tt,yt));let Le=.6-_t*_t-gt*gt-st*st-Xe*Xe;return Le<0?Y=0:(Le*=Le,Y=Le*Le*this._dot4(o[xe],_t,gt,st,Xe)),27*(_+x+L+D+Y)}_dot(t,a,f){return t[0]*a+t[1]*f}_dot3(t,a,f,n){return t[0]*a+t[1]*f+t[2]*n}_dot4(t,a,f,n,o){return t[0]*a+t[1]*f+t[2]*n+t[3]*o}}class Ae extends ft{constructor(t,a,f=512,n=512,o,u,d){super(),this.width=f,this.height=n,this.clear=!0,this.camera=a,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=hi(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new lt(this.width,this.height,{type:ct,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Re({defines:Object.assign({},Ut.defines),uniforms:He.clone(Ut.uniforms),vertexShader:Ut.vertexShader,fragmentShader:Ut.fragmentShader,blending:je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ps,this.normalMaterial.blending=je,this.pdMaterial=new Re({defines:Object.assign({},Ot.defines),uniforms:He.clone(Ot.uniforms),vertexShader:Ot.vertexShader,fragmentShader:Ot.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Re({defines:Object.assign({},Ft.defines),uniforms:He.clone(Ft.uniforms),vertexShader:Ft.vertexShader,fragmentShader:Ft.fragmentShader,blending:je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Re({uniforms:He.clone(ht.uniforms),vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ss,blendDst:At,blendEquation:zt,blendSrcAlpha:ts,blendDstAlpha:At,blendEquationAlpha:zt}),this.blendMaterial=new Re({uniforms:He.clone(Qt.uniforms),vertexShader:Qt.vertexShader,fragmentShader:Qt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ts,blendSrc:ss,blendDst:At,blendEquation:zt,blendSrcAlpha:ts,blendDstAlpha:At,blendEquationAlpha:zt}),this._fsQuad=new Lt(null),this._originalClearColor=new Ye,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),u!==void 0&&this.updateGtaoMaterial(u),d!==void 0&&this.updatePdMaterial(d)}setSize(t,a){this.width=t,this.height=a,this.gtaoRenderTarget.setSize(t,a),this.normalRenderTarget&&this.normalRenderTarget.setSize(t,a),this.pdRenderTarget.setSize(t,a),this.gtaoMaterial.uniforms.resolution.value.set(t,a),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,a),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,a){if(t!==void 0)this.depthTexture=t,this.normalTexture=a,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const n=new ys;n.format=_s,n.type=Cs,this.normalRenderTarget=new lt(this.width,this.height,{minFilter:is,magFilter:is,type:ct,depthTexture:n})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const f=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=f,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=f,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let a=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,a=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,a=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,a=!0),a&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ms(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,a,f){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Ae.OUTPUT.Off:break;case Ae.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=f.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ae.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ae.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ae.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:a);break;case Ae.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ae.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=f.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:a);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,a,f,n,o){t.getClearColor(this._originalClearColor);const u=t.getClearAlpha(),d=t.autoClear;t.setRenderTarget(f),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(o||0),t.clear()),this._fsQuad.material=a,this._fsQuad.render(t),t.autoClear=d,t.setClearColor(this._originalClearColor),t.setClearAlpha(u)}_renderOverride(t,a,f,n,o){t.getClearColor(this._originalClearColor);const u=t.getClearAlpha(),d=t.autoClear;t.setRenderTarget(f),t.autoClear=!1,n=a.clearColor||n,o=a.clearAlpha||o,n!=null&&(t.setClearColor(n),t.setClearAlpha(o||0),t.clear()),this.scene.overrideMaterial=a,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=d,t.setClearColor(this._originalClearColor),t.setClearAlpha(u)}_overrideVisibility(){const t=this.scene,a=this._visibilityCache;t.traverse(function(f){(f.isPoints||f.isLine||f.isLine2)&&f.visible&&(f.visible=!1,a.push(f))})}_restoreVisibility(){const t=this._visibilityCache;for(let a=0;a<t.length;a++)t[a].visible=!0;t.length=0}_generateNoise(t=64){const a=new di,f=t*t*4,n=new Uint8Array(f);for(let u=0;u<t;u++)for(let d=0;d<t;d++){const w=u,v=d;n[(u*t+d)*4]=(a.noise(w,v)*.5+.5)*255,n[(u*t+d)*4+1]=(a.noise(w+t,v)*.5+.5)*255,n[(u*t+d)*4+2]=(a.noise(w,v+t)*.5+.5)*255,n[(u*t+d)*4+3]=(a.noise(w+t,v+t)*.5+.5)*255}const o=new fs(n,t,t,Es,Rs);return o.wrapS=Rt,o.wrapT=Rt,o.needsUpdate=!0,o}}Ae.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const mi={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Pt extends ft{constructor(t,a=1,f,n){super(),this.strength=a,this.radius=f,this.threshold=n,this.resolution=t!==void 0?new ve(t.x,t.y):new ve(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new lt(o,u,{type:ct,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const x=new lt(o,u,{type:ct,depthBuffer:!1});x.texture.name="UnrealBloomPass.h"+_,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const L=new lt(o,u,{type:ct,depthBuffer:!1});L.texture.name="UnrealBloomPass.v"+_,L.texture.generateMipmaps=!1,this.renderTargetsVertical.push(L),o=Math.round(o/2),u=Math.round(u/2)}const d=mi;this.highPassUniforms=He.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const w=[6,10,14,18,22];o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(w[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new ve(1/o,1/u),o=Math.round(o/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1;const v=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=v,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=He.clone(ht.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,premultipliedAlpha:!0,blending:Ds,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new us,this._fsQuad=new Lt(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,a){let f=Math.round(t/2),n=Math.round(a/2);this.renderTargetBright.setSize(f,n);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(f,n),this.renderTargetsVertical[o].setSize(f,n),this.separableBlurMaterials[o].uniforms.invSize.value=new ve(1/f,1/n),f=Math.round(f/2),n=Math.round(n/2)}render(t,a,f,n,o){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=f.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=f.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let w=0;w<this.nMips;w++)this._fsQuad.material=this.separableBlurMaterials[w],this.separableBlurMaterials[w].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[w].uniforms.direction.value=Pt.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[w]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[w].uniforms.colorTexture.value=this.renderTargetsHorizontal[w].texture,this.separableBlurMaterials[w].uniforms.direction.value=Pt.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[w]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[w];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(f),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const a=[],f=t/3;for(let u=0;u<t;u++)a.push(.39894*Math.exp(-.5*u*u/(f*f))/f);const n=[],o=[];for(let u=1;u<t;u+=2){const d=a[u],w=u+1<t?a[u+1]:0,v=d+w;n.push((u*d+(u+1)*w)/v),o.push(v)}return new Re({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},centerWeight:{value:a[0]},gaussianOffsets:{value:n},gaussianWeights:{value:o}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Pt.BlurDirectionX=new ve(1,0);Pt.BlurDirectionY=new ve(0,1);const kt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class pi extends ft{constructor(){super(),this.isOutputPass=!0,this.uniforms=He.clone(kt.uniforms),this.material=new Is({name:kt.name,uniforms:this.uniforms,vertexShader:kt.vertexShader,fragmentShader:kt.fragmentShader}),this._fsQuad=new Lt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,a,f){this.uniforms.tDiffuse.value=f.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ns.getTransfer(this._outputColorSpace)===zs&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===As?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ks?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ds?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Vt=M=>Math.min(Math.max(M,0),1),fe=(M,t,a)=>Vt((M-t)/(a-t)),Ve=M=>(M=Vt(M),M*M*M*(M*(M*6-15)+10)),Mt=M=>1-Math.pow(1-Vt(M),3),Ge=(M,t,a)=>M+(t-M)*a,$t="#021d40",ae=2.7,z=-12,F=12,E=-2.2,T=8,Se=1.8,le=3.6;let Bt=7;const X=()=>(Bt=Bt*16807%2147483647,(Bt-1)/2147483646);function wt(M,t,a,f=!0){const n=document.createElement("canvas");n.width=M,n.height=t,a(n.getContext("2d"));const o=new Qs(n);return o.wrapS=o.wrapT=Rt,o.anisotropy=8,f&&(o.colorSpace=$s),o}const rt=(M,t,a,f,n,o=!1)=>{for(let u=0;u<f;u++)M.fillStyle=`rgba(${o?"255,255,255":"0,0,0"},${(X()*n).toFixed(3)})`,M.fillRect(X()*t,X()*a,1+X()*2,1+X()*2)};function xi(M){Bt=7;const t=document.createElement("canvas");t.className="h3-canvas",t.setAttribute("aria-hidden","true"),M.prepend(t);const a=innerWidth<768,f=new Ls({canvas:t,antialias:a,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__recording});f.setPixelRatio(Math.min(devicePixelRatio,a?1.6:1.5)),f.setClearColor($t,1),f.toneMapping=ds,f.toneMappingExposure=1,f.shadowMap.enabled=!0,f.shadowMap.type=Vs;const n=new cs,o=new Gs(f),u=o.fromScene(new si,.04);n.environment=u.texture,n.environmentIntensity=.35,n.fog=new js($t,60,140);const d=new Hs(30,1,.3,300),w=new Ws("#e4eefb","#0b2448",.55);n.add(w);const v=new qs("#fff3e3",1.6);v.position.set(-16,26,18),v.target.position.set(0,0,3),n.add(v.target),v.castShadow=!0;const _=a?2048:4096;v.shadow.mapSize.set(_,_),Object.assign(v.shadow.camera,{left:-22,right:22,top:18,bottom:-18,near:2,far:80}),v.shadow.bias=-2e-4,v.shadow.normalBias=.025,n.add(v);const x=(e,s={})=>new bt({color:e,roughness:.75,...s}),L=wt(1024,1024,e=>{for(let h=0;h<8;h++){let p=-X()*400;for(;p<1024;){const b=260+X()*380,g=.86+X()*.22;e.fillStyle=`rgb(${Math.round(196*g)},${Math.round(160*g)},${Math.round(116*g)})`,e.fillRect(p,h*128,b,128);for(let P=0;P<9;P++){e.strokeStyle=`rgba(90,60,30,${.05+X()*.07})`,e.lineWidth=1+X()*2,e.beginPath();const R=h*128+X()*128;e.moveTo(p,R),e.bezierCurveTo(p+b*.3,R+(X()-.5)*10,p+b*.6,R+(X()-.5)*10,p+b,R),e.stroke()}e.fillStyle="rgba(60,40,20,0.35)",e.fillRect(p,h*128,2,128),p+=b}e.fillStyle="rgba(60,40,20,0.3)",e.fillRect(0,h*128,1024,2)}}),D=wt(512,512,e=>{e.fillStyle="#d6d9dc",e.fillRect(0,0,512,512),rt(e,512,512,9e3,.06),rt(e,512,512,3e3,.25,!0),e.fillStyle="rgba(0,0,0,0.07)";for(let s=0;s<4;s++)e.fillRect(0,s*128,512,1.5)}),Y=wt(512,512,e=>{e.fillStyle="#eef0f1",e.fillRect(0,0,512,512),rt(e,512,512,3e3,.04),e.fillStyle="#b9bfc5";for(let s=0;s<=8;s++)e.fillRect(s*64-1,0,2,512),e.fillRect(0,s*64-1,512,2)}),I=wt(512,512,e=>{e.fillStyle="#6d7785",e.fillRect(0,0,512,512),rt(e,512,512,14e3,.12),rt(e,512,512,5e3,.12,!0),e.fillStyle="rgba(30,35,40,0.45)",e.fillRect(0,0,512,3),e.fillRect(0,0,3,512)}),oe=wt(512,512,e=>{e.fillStyle="#0e1a2b",e.fillRect(0,0,512,512),rt(e,512,512,16e3,.12,!0),rt(e,512,512,8e3,.3)}),i={card:x("#eef1f5",{roughness:.92}),wall:x("#f5f6f8",{roughness:.9}),poche:x("#0d3366",{roughness:.8}),slab:x("#123a6a",{roughness:.95}),oak:x("#ffffff",{map:L,roughness:.55}),lvt:x("#ffffff",{map:D,roughness:.6}),tile:x("#ffffff",{map:Y,roughness:.35}),conc:x("#ffffff",{map:I,roughness:.95}),asph:x("#ffffff",{map:oe,roughness:.95}),timber:x("#b98a5c",{roughness:.55}),walnut:x("#6b4a32",{roughness:.5}),quartz:x("#f4f3ef",{roughness:.22}),lam:x("#e9e6df",{roughness:.45}),blue:x("#1475bc",{roughness:.7}),navyFab:x("#22344d",{roughness:.85}),sage:x("#8fa596",{roughness:.85}),vinyl:x("#3b4a5c",{roughness:.45}),white:x("#fbfbfa",{roughness:.35}),metal:x("#2a3038",{roughness:.35,metalness:.7}),chrome:x("#d9dee3",{roughness:.18,metalness:1}),frame:x("#30363e",{roughness:.4,metalness:.5}),screen:x("#0b1726",{roughness:.2,emissive:"#3d7fd0",emissiveIntensity:0}),leaf:x("#3f6e4c",{roughness:.8,flatShading:!0}),leaf2:x("#5c8a55",{roughness:.8,flatShading:!0}),pot:x("#d9d4cc",{roughness:.9}),soil:x("#3a2d22",{roughness:1}),rug:x("#b9c3cf",{roughness:1}),art:x("#1475bc",{roughness:.6}),art2:x("#d9a46b",{roughness:.6}),person:x("#f7f8fa",{roughness:.6}),lamp:x("#ffffff",{emissive:"#ffd8a6",emissiveIntensity:0,roughness:.4}),shade:x("#1d232b",{roughness:.4,metalness:.4}),street:x("#2c3642",{emissive:"#ffe3b8",emissiveIntensity:0,roughness:.5}),line:x("#7f93ad",{roughness:.8}),glass:new bt({color:"#9fc0e0",roughness:.04,metalness:.3,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:1.6}),frost:new bt({color:"#f4f7fa",roughness:.6,transparent:!0,opacity:0,depthWrite:!1})},C={},V=e=>C[e]??={g:new Zs,b:new Map},H=e=>{const s=e.index?e.toNonIndexed():e;for(const l of Object.keys(s.attributes))["position","normal","uv"].includes(l)||s.deleteAttribute(l);return s.attributes.uv||s.setAttribute("uv",new Et(new Float32Array(s.attributes.position.count*2),2)),s.clearGroups(),s},ee=new Map,W=(e,s)=>{let l=ee.get(e);return l||(l=H(s()),ee.set(e,l)),l},q=(e,s,l,h)=>{const p=V(e).b,b=p.get(l)??[];b.push(s.clone().applyMatrix4(h)),p.set(l,b)},r=(e,s,l=0,h=0)=>new ce().makeRotationY(l).setPosition(e,h,s),N=new ce,U=new ce,O=new Xs,c=(e,s,l,h,p,b,g,P,R,j=0,Q=0,Z=0,y=0)=>{const m=Math.min(j,l/2-.001,h/2-.001,p/2-.001),$=m>.002?W(`r${l.toFixed(3)}_${h.toFixed(3)}_${p.toFixed(3)}_${m.toFixed(3)}`,()=>new Zt(l,h,p,2,m)):W(`b${l.toFixed(3)}_${h.toFixed(3)}_${p.toFixed(3)}`,()=>new St(l,h,p));U.makeRotationFromEuler(O.set(Q,y,Z)),N.copy(s).multiply(new ce().makeTranslation(b,g+h/2,P)).multiply(U),q(e,$,R,N)},S=(e,s,l,h,p,b,g,P,R,j=16,Q=0,Z=0)=>{const y=W(`c${l}_${h}_${p}_${j}`,()=>new Ks(l,h,p,j));U.makeRotationFromEuler(O.set(Q,0,Z)),N.copy(s).multiply(new ce().makeTranslation(b,g+p/2,P)).multiply(U),q(e,y,R,N)},We=(e,s,l,h,p,b,g,P=1,R=1,j=1,Q=1)=>{const Z=W(`i${l}_${Q}`,()=>new Js(l,Q));N.copy(s).multiply(new ce().compose(new B(h,p,b),new qt().setFromEuler(O.set(X()*3,X()*3,0)),new B(P,R,j))),q(e,Z,g,N)},qe=()=>W("head",()=>new Ys(.11,16,12)),me=(e,s,l)=>{c(e,s,.5,.09,.48,0,.42,0,l,.035),c(e,s,.5,.44,.07,0,.5,-.22,l,.03,-.12);for(const[h,p]of[[-.21,-.19],[.21,-.19],[-.21,.19],[.21,.19]])S(e,s,.014,.014,.42,h,0,p,i.metal,6)},Qe=(e,s,l)=>{c(e,s,.78,.2,.74,0,.12,0,l,.06),c(e,s,.78,.5,.16,0,.3,-.3,l,.07),c(e,s,.13,.32,.74,-.33,.3,0,l,.05),c(e,s,.13,.32,.74,.33,.3,0,l,.05);for(const[h,p]of[[-.32,-.3],[.32,-.3],[-.32,.3],[.32,.3]])S(e,s,.02,.015,.12,h,0,p,i.walnut,8)},Ue=(e,s,l=.28,h=.5)=>{S(e,s,l,l,.03,0,h-.03,0,i.walnut,28),S(e,s,.025,.025,h-.03,0,0,0,i.metal,8),S(e,s,l*.6,l*.6,.02,0,0,0,i.metal,20)},G=(e,s,l=1)=>{S(e,s,.2*l,.16*l,.42*l,0,0,0,i.pot,20),S(e,s,.18*l,.18*l,.02,0,.4*l,0,i.soil,16),S(e,s,.012,.016,.7*l,0,.4*l,0,i.walnut,5);for(let h=0;h<9;h++){const p=h/9*Math.PI*2,b=.12+X()*.16,g=.75+X()*.75;We(e,s,.13*l,Math.cos(p)*b*l,g*l,Math.sin(p)*b*l,h%2?i.leaf:i.leaf2,1,.55+X()*.3,1.5,0)}},ne=(e,s,l,h,p,b=0)=>{const g=new ce().copy(s).multiply(r(l,h,b,p));c(e,g,.56,.34,.025,0,.12,0,i.screen,.008),c(e,g,.04,.14,.03,0,0,-.03,i.metal),c(e,g,.2,.012,.16,0,0,-.02,i.metal,.005)},ge=(e,s)=>{c(e,s,.5,.08,.48,0,.46,0,i.navyFab,.035),c(e,s,.46,.5,.06,0,.58,-.24,i.navyFab,.03,-.1),S(e,s,.025,.025,.36,0,.1,0,i.metal,8);for(let l=0;l<5;l++)c(e,s,.03,.03,.3,0,.06,0,i.metal,0,0,0,l/5*Math.PI*2)},De=(e,s,l=1.5,h=.7)=>{c(e,s,l,.035,h,0,.72,0,i.lam,.01),c(e,s,.03,.72,h-.08,-l/2+.06,0,0,i.metal),c(e,s,.03,.72,h-.08,l/2-.06,0,0,i.metal),c(e,s,l-.14,.3,.02,0,.4,-h/2+.06,i.metal)},Fe=(e,s,l,h=0,p=!0)=>{const b=Math.max(1,Math.round(l/.6)),g=l/b;c(e,s,l,.1,.5,0,0,-.02,i.metal),c(e,s,l,.78,.56,0,.1,-.01,i.white);for(let P=0;P<b;P++)c(e,s,g-.012,.76,.02,-l/2+g*(P+.5),.11,.275,i.white,.004);if(c(e,s,l+.02,.035,.62,0,.88,.02,i.quartz,.008),h!==null&&(c(e,s,.46,.02,.36,h,.902,.02,i.chrome,.01),S(e,s,.012,.012,.3,h,.91,-.22,i.chrome,8),c(e,s,.025,.025,.16,h,1.19,-.15,i.chrome,.01)),p)for(let P=0;P<b;P++)c(e,s,g-.012,.72,.34,-l/2+g*(P+.5),1.5,-.12,i.white,.006)},Ke=(e,s)=>{c(e,s,.62,.62,1.4,0,0,.1,i.white,.03),c(e,s,.7,.1,1.3,0,.62,.2,i.vinyl,.045),c(e,s,.7,.1,.62,0,.74,-.68,i.vinyl,.045,.45),c(e,s,.52,.006,1.25,0,.725,.2,i.white),S(e,s,.06,.06,.6,0,.66,-1.05,i.white,12,0,Math.PI/2),c(e,s,.5,.06,.28,0,.32,.86,i.metal,.02)},Oe=(e,s)=>{S(e,s,.2,.2,.08,0,.52,0,i.vinyl,20),S(e,s,.025,.03,.46,0,.06,0,i.chrome,8);for(let l=0;l<5;l++)c(e,s,.025,.025,.26,0,.04,0,i.metal,0,0,0,l/5*Math.PI*2)},ut=(e,s)=>{c(e,s,.6,.1,.9,0,0,.2,i.white,.04),c(e,s,.32,.45,.4,0,.1,.2,i.white,.08),c(e,s,.62,.14,.75,0,.55,.25,i.blue,.06),c(e,s,.56,.12,.75,0,.5,.9,i.blue,.055,-.25),c(e,s,.58,.13,.8,0,.78,-.42,i.blue,.06,.95),c(e,s,.3,.1,.24,0,1.12,-.83,i.blue,.045,1.2),c(e,s,.08,.06,.5,-.36,.72,.2,i.white,.025),c(e,s,.08,.06,.5,.36,.72,.2,i.white,.025),S(e,s,.04,.04,.6,.52,.1,-.1,i.white,10),c(e,s,.08,.05,.6,.52,.7,.18,i.white,.02),c(e,s,.5,.05,.34,.52,.76,.5,i.white,.02);for(let l=0;l<5;l++)S(e,s,.008,.008,.16,.4+l*.06,.8,.44,i.chrome,5,Math.PI/2.4);S(e,s,.045,.045,1.5,-.55,.1,-.7,i.white,12),c(e,s,.06,.06,.7,-.55,1.62,-.38,i.white,.02,.2),c(e,s,.44,.1,.18,-.45,1.5,-.1,i.white,.04,.5),c(e,s,.36,.02,.12,-.45,1.48,-.08,i.lamp,0,.5),ne(e,s,-.55,-.4,1.7,Math.PI*.15)},Ie=(e,s,l,h)=>{const p=new ce().copy(s).multiply(r(0,0,h));c(e,p,l-.04,2.1,.045,(l-.04)/2,0,0,i.timber,.008),c(e,p,.02,.02,.14,l-.14,1.02,0,i.chrome)},he=(e,s,l=1.75)=>{const h=l/1.75;S(e,s,.07*h,.06*h,.82*h,-.09*h,0,0,i.person,10),S(e,s,.07*h,.06*h,.82*h,.09*h,0,0,i.person,10),c(e,s,.4*h,.6*h,.22*h,0,.8*h,0,i.person,.1*h),S(e,s,.05*h,.045*h,.6*h,-.25*h,.82*h,0,i.person,8,0,.08),S(e,s,.05*h,.045*h,.6*h,.25*h,.82*h,0,i.person,8,0,-.08),S(e,s,.05*h,.05*h,.1*h,0,1.4*h,0,i.person,8),q(e,qe(),i.person,new ce().copy(s).multiply(new ce().compose(new B(0,1.6*h,0),new qt,new B(h*.95,h*1.1,h))))},be=(e,s)=>{c(e,s,.36,.56,.22,0,.42,-.12,i.person,.09),c(e,s,.13,.13,.44,-.09,.36,.1,i.person,.05),c(e,s,.13,.13,.44,.09,.36,.1,i.person,.05),S(e,s,.055,.05,.36,-.09,0,.3,i.person,8),S(e,s,.055,.05,.36,.09,0,.3,i.person,8),S(e,s,.05,.05,.08,0,.98,-.12,i.person,8),q(e,qe(),i.person,new ce().copy(s).multiply(new ce().compose(new B(0,1.16,-.11),new qt,new B(.95,1.1,1))))},ue=(e,s,l,h=.9,p=.22)=>{const b=r(s,l);S(e,b,.004,.004,h,0,ae-h,0,i.metal,4),S(e,b,.05,p,.24,0,ae-h-.24,0,i.shade,24),S(e,b,p*.92,p*.92,.01,0,ae-h-.245,0,i.lamp,24)},dt=[{key:"lobby",name:"Reception",x0:z,z0:le,x1:1,z1:T,floor:i.oak,sq:!0},{key:"op1",name:"Dental 1",x0:1,z0:le,x1:6.5,z1:T,floor:i.lvt,sq:!0},{key:"op2",name:"Dental 2",x0:6.5,z0:le,x1:F,z1:T,floor:i.lvt,sq:!0},{key:"corr",name:"",x0:z,z0:Se,x1:F,z1:le,floor:i.lvt},{key:"staff",name:"Staff",x0:z,z0:E,x1:-8.5,z1:Se,floor:i.lvt,sq:!0},{key:"wash",name:"Washroom",x0:-8.5,z0:E,x1:-6,z1:Se,floor:i.tile},{key:"office",name:"Office",x0:-6,z0:E,x1:-3,z1:Se,floor:i.oak,sq:!0},{key:"ex1",name:"Exam 1",x0:-3,z0:E,x1:.5,z1:Se,floor:i.lvt,sq:!0},{key:"ex2",name:"Exam 2",x0:.5,z0:E,x1:4,z1:Se,floor:i.lvt,sq:!0},{key:"ex3",name:"Exam 3",x0:4,z0:E,x1:7.5,z1:Se,floor:i.lvt,sq:!0},{key:"proc",name:"Procedure",x0:7.5,z0:E,x1:F,z1:Se,floor:i.lvt,sq:!0}],$e=e=>Vt((e-z)/(F-z));c("shell",r(0,0),F-z+.5,.18,T-E+.5,0,-.18,(E+T)/2,i.slab);const mt=[];for(const e of dt){const s=e.x1-e.x0,l=e.z1-e.z0,h=new St(s,.02,l);h.translate(s/2,.01,0);const p=h.attributes.uv,b=h.attributes.position,g=e.floor===i.oak?3.2:e.floor===i.tile?2.4:4;for(let R=0;R<p.count;R++)p.setXY(R,(b.getX(R)+e.x0)/g,(b.getZ(R)+(e.z0+e.z1)/2)/g);const P=new de(h,e.floor);P.position.set(e.x0,0,(e.z0+e.z1)/2),P.receiveShadow=!0,n.add(P),mt.push({mesh:P,at:$e(e.x0)})}c("lobby",r(-1.75,6.15),4.4,.012,2.9,0,.02,0,i.rug,.004);const ke=e=>Math.min(5,Math.floor($e(e)*6)),Tt=[0,1,2,3,4,5].map(e=>V(`wall${e}`).g),pt=[],re=(e,s,l,h)=>pt.push(e,.03,s,l,.03,h),vt=[],pe=(e,s,l,h,p,b=[])=>{const g=s===h,P=Math.abs(g?l-e:h-s),R=g?Math.min(e,l):Math.min(s,h),j=b.map(([y,m])=>[y-m/2,y+m/2]).sort((y,m)=>y[0]-m[0]);let Q=R;const Z=[];for(const[y,m]of j)y>Q&&Z.push([Q,y]),Q=m;Q<R+P&&Z.push([Q,R+P]);for(const[y,m]of Z){const $=(y+m)/2,k=m-y,se=g?$:e,ie=g?s:$,Ce=`wall${ke(se)}`,Ee=g?k:p,A=g?p:k;c(Ce,r(se,ie),Ee,ae-.02,A,0,0,0,i.wall),c(Ce,r(se,ie),Ee+.002,.02,A+.002,0,ae-.02,0,i.poche),g?(re(y,s-p/2,m,s-p/2),re(y,s+p/2,m,s+p/2),re(y,s-p/2,y,s+p/2),re(m,s-p/2,m,s+p/2)):(re(e-p/2,y,e-p/2,m),re(e+p/2,y,e+p/2,m),re(e-p/2,y,e+p/2,y),re(e-p/2,m,e+p/2,m))}for(const[y,m,$]of b){const k=g?y:e,se=g?s:y,ie=`wall${ke(k)}`;c(ie,r(k,se),g?m:p,ae-2.14,g?p:m,0,2.12,0,i.wall),c(ie,r(k,se),(g?m:p)+.002,.02,(g?p:m)+.002,0,ae-.02,0,i.poche);const Ce=g?y-m/2:e,Ee=g?s:y-m/2,A=g?0:-Math.PI/2,K=A-$*1.25*(g?1:-1);vt.push({grp:`door${ke(k)}`,f:r(Ce,Ee),w:m,ang:K});const J=m-.04,Wt=10;for(let Nt=0;Nt<Wt;Nt++){const Jt=A+(K-A)*Nt/Wt,es=A+(K-A)*(Nt+1)/Wt;re(Ce+Math.cos(Jt)*J,Ee-Math.sin(Jt)*J,Ce+Math.cos(es)*J,Ee-Math.sin(es)*J)}re(Ce,Ee,Ce+Math.cos(K)*J,Ee-Math.sin(K)*J)}};pe(z,E,F,E,.25),pe(z,E,z,T,.25),pe(F,E,F,T,.25),pe(z,Se,F,Se,.12,[[-9.6,.95,-1],[-7.3,.9,-1],[-4.6,.95,-1],[-1.3,.95,-1],[2.2,.95,-1],[5.7,.95,-1],[9.2,1.2,-1]]),pe(z,le,-3,le,.12),pe(1,le,F,le,.12,[[1.75,.95,1],[7.25,.95,1]]);for(const e of[-8.5,-6,-3,.5,4,7.5])pe(e,E,e,Se,.12);pe(1,le,1,T,.12),pe(6.5,le,6.5,T,.12);const Je=[z,-4,4,F],et=[E,T];for(const e of Je)for(const s of et)c(`wall${ke(e)}`,r(e,s),.45,ae-.02,.45,0,0,0,i.card),c(`wall${ke(e)}`,r(e,s),.452,.02,.452,0,ae-.02,0,i.poche);for(let e=0;e<=14;e++)c("store",r(z+.25+e*(F-z-.5)/14,T),.06,ae,.14,0,0,0,i.frame);c("store",r(0,T),F-z,.08,.14,0,2.3,0,i.frame),c("store",r(0,T),F-z,.12,.14,0,0,0,i.frame),c("store",r(0,T),F-z,ae-.02,.012,0,.02,0,i.glass),c("store",r((1+F)/2,T-.03),F-1,.9,.012,0,.9,0,i.frost);const tt=-7.6;for(const e of[-1,1])c("store",r(tt+e*.48,T+.09),.9,2.18,.04,0,.02,0,i.glass),c("store",r(tt+e*.08,T+.14),.03,1.2,.03,0,.5,0,i.chrome);c("store",r(tt,T+.65),3.6,.08,1.3,0,2.62,0,i.white,.02);for(const e of[2.4,7.9])c("store",r(e+1.4,le),2.6,1.6,.03,0,.9,0,i.glass);re(z,T,F,T),re(z,T+.14,F,T+.14);{const e="lobby";for(let g=-.75;g<=.75+1e-6;g+=.035){const P=-7.6+Math.sin(g)*1.9,R=4.25+Math.cos(g)*1.9*.48;c(e,r(P,R,g*.6),.045,1.04,.07,0,.04,0,i.timber,.008)}c(e,r(-7.6,4.25+.4),3.2,1,.45,0,.04,0,i.white,.02);for(let g=-.75;g<=.75-.05+1e-6;g+=.1){const P=-7.6+Math.sin(g+.05)*1.9,R=4.25+Math.cos(g+.05)*1.9*.48-.1;c(e,r(P,R,(g+.05)*.6),.4,.04,.34,0,1.08,0,i.quartz,.01)}c(e,r(-7.6,4.25+.3),3.1,.035,.6,0,.74,0,i.quartz,.01),ne(e,r(-7.6-.8,4.25+.42,Math.PI),0,0,.775),ne(e,r(-7.6+.8,4.25+.42,Math.PI),0,0,.775),ge(e,r(-7.6-.8,4.25-.15,Math.PI)),ge(e,r(-7.6+.8,4.25-.15,Math.PI));for(let g=z+.4;g<-3.2;g+=.11)c(e,r(g,le+.09),.05,ae-.1,.05,0,.02,0,i.timber,.006);c(e,r(-7.6,le+.16),2.4,.5,.05,0,1.55,0,i.blue,.01),c(e,r(-7.6,le+.19),2.2,.012,.012,0,1.58,0,i.lamp);for(const[g,P,R]of[[-3.3,5.5,.6],[-3.3,6.8,Math.PI-.6],[-.25,5.5,-.6],[-.25,6.8,Math.PI+.6]])Qe(e,r(g,P,R),i.navyFab);for(const[g,P,R]of[[-2.25,5,0],[-1.3,5,0],[-2.25,7.3,Math.PI],[-1.3,7.3,Math.PI]])Qe(e,r(g,P,R),i.sage);Ue(e,r(-1.78,6.15),.42,.42),Ue(e,r(-4,6.15),.22,.52),Ue(e,r(.45,4.3),.22,.52),c(e,r(.68,6.2,-Math.PI/2),3.2,.42,.5,0,0,0,i.timber,.02),c(e,r(.68,6.2,-Math.PI/2),3.2,.12,.52,0,.42,0,i.blue,.05),c(e,r(.86,6.2,-Math.PI/2),3.2,.5,.12,0,.52,0,i.blue,.05),G(e,r(-10.9,7.4),1.2),G(e,r(-4.6,7.5),1),G(e,r(-11.4,4.3),.9),G(e,r(.55,7.55),.9),c(e,r(-1,le+.08),1.4,.9,.04,0,1.25,0,i.art,.01),c(e,r(-5.4,7.7),1.6,.9,.36,0,0,0,i.white,.02),c(e,r(-5.4,7.7),1.62,.03,.38,0,.9,0,i.timber,.01),ue(e,-7.6-1,4.25+.3),ue(e,-7.6,4.25+.4),ue(e,-7.6+1,4.25+.3),ue(e,-1.78,6.15,1.1,.42)}for(const[e,s,l]of[["op1",1,6.5],["op2",6.5,F]]){const h=(s+l)/2;ut(e,r(h,5.9,Math.PI)),Fe(e,r(h+.3,le+.36),l-s-1.6,.6),Oe(e,r(h+.7,5.3)),Oe(e,r(h-.75,5.5)),c(e,r(h-1.7,6.9),.5,.75,.45,0,0,0,i.white,.03),c(e,r(l-.4,6.3,-Math.PI/2),1.8,.88,.5,0,0,0,i.white,.02),c(e,r(l-.4,6.3,-Math.PI/2),1.82,.03,.52,0,.88,0,i.quartz,.008),ne(e,r(l-.45,6.6,-Math.PI/2),0,0,.91),G(e,r(s+.45,7.5),.8)}for(const[e,s,l]of[["ex1",-3,.5],["ex2",.5,4],["ex3",4,7.5]])Ke(e,r(s+.5,-.5,Math.PI)),Fe(e,r((s+l)/2+.3,E+.42),2.1,.2),De(e,r(l-.45,.45,Math.PI/2),1.3,.6),ne(e,r(l-.3,.45,-Math.PI/2),0,0,.755),ge(e,r(l-1,.45,Math.PI/2)),me(e,r(l-1.1,1.3,Math.PI*.8),i.sage),Oe(e,r(s+1.4,.5)),c(e,r(s+.08,.95,Math.PI/2),.5,.36,.06,0,1.3,0,i.white,.01),c(e,r((s+l)/2+.6,Se-.08),.5,.7,.03,0,1.2,0,i.art2,.008);{const e="proc";Ke(e,r(9.75,-.1,Math.PI/2)),Fe(e,r(9.75,E+.42),3.6,-.9),S(e,r(9.75,-.1),.03,.03,.55,0,ae-.55,0,i.white,8),c(e,r(9.75,-.1),.08,.08,.9,0,ae-.6,.38,i.white,.02,.6),S(e,r(9.75,.55),.34,.26,.14,0,1.75,0,i.white,28),S(e,r(9.75,.55),.24,.24,.01,0,1.745,0,i.lamp,28),c(e,r(F-.5,1.05),.55,.9,.5,0,0,0,i.white,.03),c(e,r(9.75-1.7,1.15),.55,.9,.5,0,0,0,i.white,.03),Oe(e,r(9.75+1.2,.8)),ne(e,r(F-.5,1.05,-Math.PI/2),0,0,.9)}{const e="office";De(e,r(-4.5,-.9),1.8,.75),ne(e,r(-4.85,-1.12),0,0,.755),ne(e,r(-4.15,-1.12),0,0,.755),ge(e,r(-4.5,-1.55)),me(e,r(-4.9,.05,Math.PI),i.navyFab),me(e,r(-4.1,.05,Math.PI),i.navyFab),c(e,r(-5.76,-.4,Math.PI/2),1.6,2,.36,0,0,0,i.walnut,.01);for(let s=0;s<4;s++)c(e,r(-5.57,-.4,Math.PI/2),1.5,.3,.02,0,.1+s*.47,0,i.white);G(e,r(-3.45,-1.75),.9)}{const e="staff";c(e,r(-10.3,-.1),1.6,.04,.9,0,.72,0,i.walnut,.015),S(e,r(-10.3,-.1),.04,.04,.72,0,0,0,i.metal,8),S(e,r(-10.3,-.1),.3,.3,.02,0,0,0,i.metal,20),me(e,r(-10.75,.6,Math.PI),i.blue),me(e,r(-9.85,.6,Math.PI),i.blue),me(e,r(-10.75,-.8),i.blue),me(e,r(-9.85,-.8),i.blue),Fe(e,r(-10.6,E+.42),2.4,-.5),c(e,r(-8.95,E+.5),.75,2,.66,0,0,0,i.chrome,.03),ue(e,-10.3,-.1,1,.18)}{const e="wash";c(e,r(-7.25,E+.55),.4,.38,.6,0,0,.1,i.white,.12),c(e,r(-7.25,E+.2),.4,.7,.15,0,.25,0,i.white,.04),c(e,r(-6.35,.6,-Math.PI/2),.9,.06,.5,0,.84,0,i.quartz,.02),c(e,r(-6.35,.6,-Math.PI/2),.4,.1,.3,0,.8,.02,i.white,.04),c(e,r(-6.08,.6,-Math.PI/2),.7,.8,.02,0,1.15,0,i.chrome,.01),c(e,r(-8.38,-.9,Math.PI/2),.9,.035,.035,0,.85,.06,i.chrome,.015)}for(const e of vt)Ie(e.grp,e.f,e.w,e.ang);he("people",r(-7.3,3.95,0),1.66),he("people",r(-7.3,6.8,Math.PI),1.78),be("people",r(-3.3,5.5,.6)),be("people",r(-1.3,7.3,Math.PI)),he("people",r(3,2.7,-Math.PI/2),1.72),he("people",r(4.45,5.3,Math.PI*.8),1.7),he("people",r(-1,9.6,-.3),1.8),he("people",r(5.5,10.4,Math.PI/2),1.68);{const e="street",s=new St(70,.15,4.6),l=s.attributes.position,h=s.attributes.uv;for(let m=0;m<h.count;m++)h.setXY(m,l.getX(m)/1.5,l.getZ(m)/1.5);const p=new de(s,i.conc);p.position.set(0,-.075,T+2.3),p.receiveShadow=!0,n.add(p),c(e,r(0,T+4.65),70,.17,.25,0,-.17,0,i.slab);const b=new St(80,.1,13),g=b.attributes.position,P=b.attributes.uv;for(let m=0;m<P.count;m++)P.setXY(m,g.getX(m)/6,g.getZ(m)/6);const R=new de(b,i.asph);R.position.set(0,-.23,T+11.25),R.receiveShadow=!0,n.add(R);for(let m=-30;m<30;m+=6)c(e,r(m,T+15.6),3,.01,.14,0,-.18,0,i.line);for(let m=-27;m<=27;m+=2.7)c(e,r(m,T+7.2),.1,.01,4.8,0,-.18,0,i.line);for(const m of[-16,1.8,12.5,22]){c(e,r(m,T+3.4),1.2,.02,1.2,0,0,0,i.metal),S(e,r(m,T+3.4),.08,.11,3.2,0,0,0,i.walnut,7);for(let $=0;$<11;$++)We(e,r(m,T+3.4),.85,(X()-.5)*1.8,3.4+X()*1.7,(X()-.5)*1.8,$%2?i.leaf:i.leaf2,1,.8,1,0)}for(const m of[-21,-9.8,.8,11.8,22])S(e,r(m,T+4.2),.05,.07,5.2,0,0,0,i.frame,8),c(e,r(m,T+4.2),.08,.06,1.2,0,5.15,-.5,i.frame),c(e,r(m,T+3.7),.5,.06,.22,0,5.08,0,i.street,.02);for(let m=-12;m<=12;m+=2)S(e,r(m,T+4.1),.09,.09,.9,0,0,0,i.street,12);for(const m of[5.2,5.9,6.6])q(e,W("tor",()=>new ei(.35,.025,6,20,Math.PI)),i.chrome,r(m,T+2.8,Math.PI/2));const j=[],Q=(m,$,k,se,ie=0)=>{j.push(m,ie,$,k,ie,$,k,ie,$,k,ie,se,k,ie,se,m,ie,se,m,ie,se,m,ie,$)};for(const[m,$]of[[-36,-24],[-24,z],[F,24],[24,36]]){Q(m,E,$,T),Q(m,E,$,T,ae);for(const k of[m,$])for(const se of[E,T])j.push(k,0,se,k,ae,se);for(let k=m+1.5;k<$-.1;k+=1.5)j.push(k,0,T,k,ae,T)}const Z=new Xt;Z.setAttribute("position",new Et(j,3)),n.add(new as(Z,new os({color:"#2f6fbf",transparent:!0,opacity:.5})));const y=new de(new ns(400,400),new bt({color:"#0a2a52",roughness:1}));y.rotation.x=-Math.PI/2,y.position.y=-.3,y.receiveShadow=!0,n.add(y)}for(const{g:e,b:s}of Object.values(C)){for(const[l,h]of s){const p=new de(ti(h),l);p.castShadow=!l.transparent&&l!==i.rug&&l!==i.line,p.receiveShadow=!0,e.add(p)}n.add(e)}const yt=dt.map(e=>({g:C[e.key]?.g,at:$e(e.x0)})).filter(e=>e.g),_t=Object.keys(C).filter(e=>e.startsWith("door")).map(e=>({g:C[e].g,i:+e.slice(4)})),gt=new os({color:"#9cc5ff",transparent:!0,opacity:.95}),st=[];Je.forEach(e=>st.push(e,.035,E-2.3,e,.035,T+.6)),et.forEach(e=>st.push(z-2.3,.035,e,F+.6,.035,e));const Xe=[],Pe=(e,s,l,h)=>{Xe.push(e,.035,s,l,.035,h);const p=s===h?0:.25,b=s===h?.25:0;for(const[g,P]of[[e,s],[l,h]])Xe.push(g-p,.035,P-b,g+p,.035,P+b),Xe.push(g-.14,.035,P+.14,g+.14,.035,P-.14)};Pe(z,E-1.25,F,E-1.25),Pe(z-1.25,E,z-1.25,T),Pe(z,E-.65,-4,E-.65),Pe(-4,E-.65,4,E-.65),Pe(4,E-.65,F,E-.65);const Ze=[...st,...pt,...Xe],Be=new Xt;Be.setAttribute("position",new Et(Ze,3)),n.add(new as(Be,gt));const it=Ze.length/3,Dt=[],at=(e,s,l,h,p,b,g=0,P=!1)=>{const j=P?512:160,Q=wt(512,j,m=>{if(m.textAlign="center",m.textBaseline="middle",P){m.strokeStyle="#9cc5ff",m.lineWidth=18,m.beginPath(),m.arc(256,256,220,0,Math.PI*2),m.stroke(),m.fillStyle="#9cc5ff",m.font='600 250px "Inter Tight", system-ui, sans-serif',m.fillText(e,256,268);return}m.fillStyle="#d7e7ff",m.font='600 62px "Inter Tight", system-ui, sans-serif',m.fillText(e,256,s?52:80),s&&(m.fillStyle="#9cc5ff",m.font='500 42px "Inter", system-ui, sans-serif',m.fillText(s,256,118))}),Z=new us({map:Q,transparent:!0,opacity:0,depthWrite:!1}),y=new de(new ns(p,p*j/512),Z);y.rotation.set(-Math.PI/2,0,g),y.position.set(l,.05,h),y.renderOrder=2,n.add(y),Dt.push({mesh:y,at:b})},Gt=e=>`${Math.round((e.x1-e.x0)*(e.z1-e.z0)*10.764)} sq ft`;for(const e of dt)e.name&&at(e.name,e.sq?Gt(e):"",(e.x0+e.x1)/2,(e.z0+e.z1)/2+(e.key==="lobby"?.9:0),Math.min(e.key==="lobby"?5:3.3,(e.x1-e.x0)*.94),$e(e.x0));["A","B","C","D"].forEach((e,s)=>at(e,"",Je[s],E-2.8,.9,0,0,!0)),["1","2"].forEach((e,s)=>at(e,"",z-2.8,et[s],.9,0,0,!0)),at(`78' 9"`,"",0,E-1.6,2.2,1),at(`33' 6"`,"",z-1.6,(E+T)/2,2.2,1,Math.PI/2);const It=[];for(const[e,s,l]of[[-7.6,5.2,9],[-1.8,6.1,8],[3.75,5.8,6],[9.25,5.8,6],[-1.2,0,4],[2.2,0,4],[5.7,0,4],[9.8,0,5],[-4.5,0,4],[-10.3,0,4],[0,2.7,4]]){const h=new hs("#ffd3a0",0,9,2);h.position.set(e,2.3,s),h.userData.max=l,n.add(h),It.push(h)}let xe=null,Me=null;a||(xe=new li(f,new lt(1,1,{type:ct,samples:4})),xe.addPass(new ci(n,d)),Me=new Ae(n,d,1,1),Me.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1,scale:1.1,samples:12}),Me.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Me.blendIntensity=.9,xe.addPass(Me),xe.addPass(new Pt(new ve(1,1),.38,.45,1.15)),xe.addPass(new pi),f.setClearColor(new Ye($t).convertSRGBToLinear(),1));const Ne=new B,Te=new B,ye=new B,Le=new B,ps=new Ye("#fff3e3"),vs=new Ye("#ffb98a");let _e=1,ze=1,te=0,ot=0,jt=0,Ht=0;const Yt=()=>{const e=M.getBoundingClientRect();_e=Math.max(1,e.width),ze=Math.max(1,e.height),f.setSize(_e,ze,!1),xe?.setSize(_e,ze),xe?.setPixelRatio(f.getPixelRatio()),d.aspect=_e/ze,d.updateProjectionMatrix()},nt=()=>{const e=_e>980,s=ze>_e,l=Math.max(Ve(ot/1.8),fe(te,0,.05));Be.setDrawRange(0,Math.floor(it*l/2)*2),Tt.forEach((A,K)=>{const J=Math.max(Mt((ot-1.5-K*.14)/1.1),fe(te,0,.06));A.scale.y=Math.max(.001,J),A.visible=J>.001});const h=Ve(fe(te,.06,.2));i.glass.opacity=.3*h,i.frost.opacity=.75*h;const p=V("store").g;p.scale.y=Math.max(.001,Mt(fe(te,.05,.16))),p.visible=p.scale.y>.002,_t.forEach(({g:A,i:K})=>{const J=Mt(fe(te,.08+K*.015,.16+K*.015));A.visible=J>.001,A.scale.y=Math.max(.001,J)}),mt.forEach(({mesh:A,at:K})=>{const J=Mt(fe(te,.2+K*.13,.27+K*.13));A.scale.x=Math.max(1e-4,J),A.visible=J>5e-4}),yt.forEach(({g:A,at:K})=>{const J=Mt(fe(te,.22+K*.13,.3+K*.13));A.visible=J>.001,A.position.y=(1-J)*2.2}),gt.opacity=.95*(1-.7*Ve(fe(te,.22,.4)));const b=1-Ve(fe(te,.24,.34));Dt.forEach(({mesh:A,at:K})=>{A.material.opacity=Math.max(Ve((ot-.9-K*1.2)/.6),fe(te,0,.04))*b,A.visible=b>.001});const g=Ve(fe(te,.4,.56));i.lamp.emissiveIntensity=3.2*g,i.screen.emissiveIntensity=.9*g,i.street.emissiveIntensity=1.3*g,It.forEach(A=>{A.intensity=A.userData.max*g,A.visible=g>.001}),v.intensity=Ge(1.6,.55,g),v.color.copy(ps).lerp(vs,g),w.intensity=Ge(.55,.2,g),n.environmentIntensity=Ge(.35,.15,g);const P=V("people").g,R=Mt(fe(te,.44,.54));P.visible=R>.001,P.scale.y=Math.max(.001,R);const j=Ve(fe(te,.04,.4)),Q=Ve(fe(te,.4,.6)),Z=1-Ve(fe(te,.04,.14)),y=rs.degToRad(Ge(s?66:16,s?54:-10,j)+Math.sin(ot*.18)*2.5*Z+jt*4),m=rs.degToRad(Ge(s?60:64,s?46:44,j)+Math.cos(ot*.15)*1.2*Z-Ht*2.5),k=(s?48/Math.max(.42,_e/ze)**.7:56/Math.min(1,_e/ze/1.45)**.6)*Ge(1,s?.97:.86,j);Te.set(s?.6:Ge(.5,0,j),0,s?3.4:Ge(2.6,3.2,j)),Ne.set(Math.sin(y)*Math.cos(m)*k,Math.sin(m)*k,Math.cos(y)*Math.cos(m)*k).add(Te),s?(ye.set(-3.2,7.2,20.5),Le.set(-5.6,.4,4.4)):(ye.set(-1.2,5.2,15.8),Le.set(-5.2,.5,4.4)),ye.x+=jt*.6,ye.y-=Ht*.3,Ne.lerp(ye,Q),Te.lerp(Le,Q),d.position.copy(Ne),d.lookAt(Te);const se=n.fog,ie=Ne.distanceTo(Te);se.near=ie*1.1,se.far=ie*2.6,d.fov=Ge(30,s?52:40,Q),d.updateProjectionMatrix();const Ce=e?-_e*.2*Z:0,Ee=e?0:-ze*.16*Z;Ce||Ee?d.setViewOffset(_e,ze,Ce,Ee,_e,ze):d.clearViewOffset(),xe?xe.render():f.render(n,d)};Yt();const Kt=new ResizeObserver(()=>{Yt(),nt()});return Kt.observe(M),window.__hero={set:e=>{te=e,nt()},intro:e=>{ot=e,nt()}},{ready:Promise.resolve().then(nt),set(e){te=e,nt()},intro(e){ot=e,nt()},pointer(e,s){jt=e,Ht=s,nt()},dispose(){Kt.disconnect(),xe?.dispose(),Me?.dispose(),u.dispose(),o.dispose(),n.traverse(e=>{e.geometry?.dispose()}),Object.values(i).forEach(e=>{e.map?.dispose(),e.dispose()}),f.dispose(),t.remove()}}}export{xi as mountHero};
