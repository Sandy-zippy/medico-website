import{e as bt,V as H,S as vs,f as nt,p as Ts,d as gs,M as re,q as ys,r as _s,s as Cs,O as Es,B as ts,F as Dt,t as Ne,U as Ve,u as Me,v as lt,w as ct,x as Le,T as Rs,C as $e,y as xs,R as zt,z as _e,J as Ds,K as At,Z as Ut,Q as cs,X as hs,Y as zs,_ as Ns,$ as Is,a0 as As,a1 as fs,a2 as Us,a3 as Fs,k as Ms,j as Vt,a4 as Os,a5 as ks,a6 as Bs,a7 as Ls,a8 as Vs,a9 as Gs,A as js,aa as Hs,N as ws,ab as Ws,W as qs,P as Qs,ac as $s,ad as Xs,i as Zs,H as Ys,D as Ks,L as us,c as ds,a as Ft,G as Kt,ae as Js,af as ei,h as ti,ag as si,ah as ii,g as ms,m as ai,I as oi,ai as ri}from"./three.module.dGBrdlRS.js";import{m as ni}from"./BufferGeometryUtils.Dhf5T7Bt.js";const Et=new H;function ye(M,t,a,h,r,o){const f=2*Math.PI*r/4,u=Math.max(o-2*r,0),b=Math.PI/4;Et.copy(t),Et[h]=0,Et.normalize();const g=.5*f/(f+u),_=1-Et.angleTo(M)/b;return Math.sign(Et[a])===1?_*g:u/(f+u)+g+g*(1-_)}class ss extends bt{constructor(t=1,a=1,h=1,r=2,o=.1){const f=r*2+1;if(o=Math.min(t/2,a/2,h/2,o),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:t,height:a,depth:h,segments:r,radius:o},f===1)return;const u=this.toNonIndexed();this.index=null,this.attributes.position=u.attributes.position,this.attributes.normal=u.attributes.normal,this.attributes.uv=u.attributes.uv;const b=new H,g=new H,_=new H(t,a,h).divideScalar(2).subScalar(o),x=this.attributes.position.array,V=this.attributes.normal.array,D=this.attributes.uv.array,ee=x.length/6,z=new H,ne=.5/f;for(let i=0,C=0;i<x.length;i+=3,C+=2)switch(b.fromArray(x,i),g.copy(b),g.x-=Math.sign(g.x)*ne,g.y-=Math.sign(g.y)*ne,g.z-=Math.sign(g.z)*ne,g.normalize(),x[i+0]=_.x*Math.sign(b.x)+g.x*o,x[i+1]=_.y*Math.sign(b.y)+g.y*o,x[i+2]=_.z*Math.sign(b.z)+g.z*o,V[i+0]=g.x,V[i+1]=g.y,V[i+2]=g.z,Math.floor(i/ee)){case 0:z.set(1,0,0),D[C+0]=ye(z,g,"z","y",o,h),D[C+1]=1-ye(z,g,"y","z",o,a);break;case 1:z.set(-1,0,0),D[C+0]=1-ye(z,g,"z","y",o,h),D[C+1]=1-ye(z,g,"y","z",o,a);break;case 2:z.set(0,1,0),D[C+0]=1-ye(z,g,"x","z",o,t),D[C+1]=ye(z,g,"z","x",o,h);break;case 3:z.set(0,-1,0),D[C+0]=1-ye(z,g,"x","z",o,t),D[C+1]=1-ye(z,g,"z","x",o,h);break;case 4:z.set(0,0,1),D[C+0]=1-ye(z,g,"x","y",o,t),D[C+1]=1-ye(z,g,"y","x",o,a);break;case 5:z.set(0,0,-1),D[C+0]=ye(z,g,"x","y",o,t),D[C+1]=1-ye(z,g,"y","x",o,a);break}}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.segments,t.radius)}}class li extends vs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new bt;t.deleteAttribute("uv");const a=new nt({side:Ts}),h=new nt,r=new gs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const o=new re(t,a);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const f=new ys(t,h,6),u=new _s;u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),u.updateMatrix(),f.setMatrixAt(0,u.matrix),u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),u.updateMatrix(),f.setMatrixAt(1,u.matrix),u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),u.updateMatrix(),f.setMatrixAt(2,u.matrix),u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),u.updateMatrix(),f.setMatrixAt(3,u.matrix),u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),u.updateMatrix(),f.setMatrixAt(4,u.matrix),u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),u.updateMatrix(),f.setMatrixAt(5,u.matrix),this.add(f);const b=new re(t,wt(50));b.position.set(-16.116,14.37,8.208),b.scale.set(.1,2.428,2.739),this.add(b);const g=new re(t,wt(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const _=new re(t,wt(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new re(t,wt(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const V=new re(t,wt(20));V.position.set(3.235,11.486,-12.541),V.scale.set(2.5,2,.1),this.add(V);const D=new re(t,wt(100));D.position.set(0,20,0),D.scale.set(1,.1,1),this.add(D)}dispose(){const t=new Set;this.traverse(a=>{a.isMesh&&(t.add(a.geometry),t.add(a.material))});for(const a of t)a.dispose()}}function wt(M){return new Cs({color:0,emissive:16777215,emissiveIntensity:M})}const ht={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ft{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ci=new Es(-1,1,1,-1,0,1);class hi extends ts{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}}const fi=new hi;class jt{constructor(t){this._mesh=new re(fi,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ci)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ui extends ft{constructor(t,a="tDiffuse"){super(),this.textureID=a,this.uniforms=null,this.material=null,t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ve.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jt(this.material)}render(t,a,h){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=h.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ps extends ft{constructor(t,a){super(),this.scene=t,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,a,h){const r=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let f,u;this.inverse?(f=0,u=1):(f=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,f,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),t.setRenderTarget(h),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class di extends ft{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class mi{constructor(t,a){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),a===void 0){const h=t.getSize(new Me);this._width=h.width,this._height=h.height,a=new lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ct}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ui(ht),this.copyPass.material.blending=Le,this.timer=new Rs}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,a){this.passes.splice(a,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const a=this.passes.indexOf(t);a!==-1&&this.passes.splice(a,1)}isLastEnabledPass(t){for(let a=t+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const a=this.renderer.getRenderTarget();let h=!1;for(let r=0,o=this.passes.length;r<o;r++){const f=this.passes[r];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,h),f.needsSwap){if(h){const u=this.renderer.getContext(),b=this.renderer.state.buffers.stencil;b.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),b.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}ps!==void 0&&(f instanceof ps?h=!0:f instanceof di&&(h=!1))}}this.renderer.setRenderTarget(a)}reset(t){if(t===void 0){const a=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,a){this._width=t,this._height=a;const h=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(h,r),this.renderTarget2.setSize(h,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(h,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pi extends ft{constructor(t,a,h=null,r=null,o=null){super(),this.scene=t,this.camera=a,this.overrideMaterial=h,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(t,a,h){const r=t.autoClear;t.autoClear=!1;let o,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:h),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=r}}const Ot={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new _e},cameraProjectionMatrixInverse:{value:new _e},cameraWorldMatrix:{value:new _e},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},kt={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Jt={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function vi(M=5){const t=Math.floor(M)%2===0?Math.floor(M)+1:Math.floor(M),a=gi(t),h=a.length,r=new Uint8Array(h*4);for(let f=0;f<h;++f){const u=a[f],b=2*Math.PI*u/h,g=new H(Math.cos(b),Math.sin(b),0).normalize();r[f*4]=(g.x*.5+.5)*255,r[f*4+1]=(g.y*.5+.5)*255,r[f*4+2]=127,r[f*4+3]=255}const o=new xs(r,t,t);return o.wrapS=zt,o.wrapT=zt,o.needsUpdate=!0,o}function gi(M){const t=Math.floor(M)%2===0?Math.floor(M)+1:Math.floor(M),a=t*t,h=Array(a).fill(0);let r=Math.floor(t/2),o=t-1;for(let f=1;f<=a;){if(r===-1&&o===t?(o=t-2,r=0):(o===t&&(o=0),r<0&&(r=t-1)),h[r*t+o]!==0){o-=2,r++;continue}else h[r*t+o]=f++;o++,r--}return h}const Bt={defines:{SAMPLES:16,SAMPLE_VECTORS:bs(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new _e},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function bs(M,t,a){const h=xi(M,t,a);let r="vec3[SAMPLES](";for(let o=0;o<M;o++){const f=h[o];r+=`vec3(${f.x}, ${f.y}, ${f.z})${o<M-1?",":")"}`}return r}function xi(M,t,a){const h=[];for(let r=0;r<M;r++){const o=2*Math.PI*t*r/M,f=Math.pow(r/(M-1),a);h.push(new H(Math.cos(o),Math.sin(o),f))}return h}class Mi{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let a=0;a<256;a++)this.p[a]=Math.floor(t.random()*256);this.perm=[];for(let a=0;a<512;a++)this.perm[a]=this.p[a&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,a){let h,r,o;const f=.5*(Math.sqrt(3)-1),u=(t+a)*f,b=Math.floor(t+u),g=Math.floor(a+u),_=(3-Math.sqrt(3))/6,x=(b+g)*_,V=b-x,D=g-x,ee=t-V,z=a-D;let ne,i;ee>z?(ne=1,i=0):(ne=0,i=1);const C=ee-ne+_,G=z-i+_,W=ee-1+2*_,oe=z-1+2*_,$=b&255,Y=g&255,l=this.perm[$+this.perm[Y]]%12,A=this.perm[$+ne+this.perm[Y+i]]%12,O=this.perm[$+1+this.perm[Y+1]]%12;let B=.5-ee*ee-z*z;B<0?h=0:(B*=B,h=B*B*this._dot(this.grad3[l],ee,z));let c=.5-C*C-G*G;c<0?r=0:(c*=c,r=c*c*this._dot(this.grad3[A],C,G));let T=.5-W*W-oe*oe;return T<0?o=0:(T*=T,o=T*T*this._dot(this.grad3[O],W,oe)),70*(h+r+o)}noise3d(t,a,h){let r,o,f,u;const g=(t+a+h)*.3333333333333333,_=Math.floor(t+g),x=Math.floor(a+g),V=Math.floor(h+g),D=1/6,ee=(_+x+V)*D,z=_-ee,ne=x-ee,i=V-ee,C=t-z,G=a-ne,W=h-i;let oe,$,Y,l,A,O;C>=G?G>=W?(oe=1,$=0,Y=0,l=1,A=1,O=0):C>=W?(oe=1,$=0,Y=0,l=1,A=0,O=1):(oe=0,$=0,Y=1,l=1,A=0,O=1):G<W?(oe=0,$=0,Y=1,l=0,A=1,O=1):C<W?(oe=0,$=1,Y=0,l=0,A=1,O=1):(oe=0,$=1,Y=0,l=1,A=1,O=0);const B=C-oe+D,c=G-$+D,T=W-Y+D,Ge=C-l+2*D,de=G-A+2*D,je=W-O+2*D,Fe=C-1+3*D,we=G-1+3*D,k=W-1+3*D,be=_&255,Ie=x&255,Se=V&255,Xe=this.perm[be+this.perm[Ie+this.perm[Se]]]%12,Oe=this.perm[be+oe+this.perm[Ie+$+this.perm[Se+Y]]]%12,ut=this.perm[be+l+this.perm[Ie+A+this.perm[Se+O]]]%12,dt=this.perm[be+1+this.perm[Ie+1+this.perm[Se+1]]]%12;let ue=.6-C*C-G*G-W*W;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[Xe],C,G,W));let me=.6-B*B-c*c-T*T;me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[Oe],B,c,T));let pe=.6-Ge*Ge-de*de-je*je;pe<0?f=0:(pe*=pe,f=pe*pe*this._dot3(this.grad3[ut],Ge,de,je));let Ce=.6-Fe*Fe-we*we-k*k;return Ce<0?u=0:(Ce*=Ce,u=Ce*Ce*this._dot3(this.grad3[dt],Fe,we,k)),32*(r+o+f+u)}noise4d(t,a,h,r){const o=this.grad4,f=this.simplex,u=this.perm,b=(Math.sqrt(5)-1)/4,g=(5-Math.sqrt(5))/20;let _,x,V,D,ee;const z=(t+a+h+r)*b,ne=Math.floor(t+z),i=Math.floor(a+z),C=Math.floor(h+z),G=Math.floor(r+z),W=(ne+i+C+G)*g,oe=ne-W,$=i-W,Y=C-W,l=G-W,A=t-oe,O=a-$,B=h-Y,c=r-l,T=A>O?32:0,Ge=A>B?16:0,de=O>B?8:0,je=A>c?4:0,Fe=O>c?2:0,we=B>c?1:0,k=T+Ge+de+je+Fe+we,be=f[k][0]>=3?1:0,Ie=f[k][1]>=3?1:0,Se=f[k][2]>=3?1:0,Xe=f[k][3]>=3?1:0,Oe=f[k][0]>=2?1:0,ut=f[k][1]>=2?1:0,dt=f[k][2]>=2?1:0,ue=f[k][3]>=2?1:0,me=f[k][0]>=1?1:0,pe=f[k][1]>=1?1:0,Ce=f[k][2]>=1?1:0,He=f[k][3]>=1?1:0,Pt=A-be+g,mt=O-Ie+g,le=B-Se+g,pt=c-Xe+g,ve=A-Oe+2*g,Ze=O-ut+2*g,Ye=B-dt+2*g,Ke=c-ue+2*g,Tt=A-me+3*g,yt=O-pe+3*g,vt=B-Ce+3*g,Je=c-He+3*g,We=A-1+4*g,ke=O-1+4*g,gt=B-1+4*g,et=c-1+4*g,tt=ne&255,qe=i&255,Ee=C&255,st=G&255,Nt=u[tt+u[qe+u[Ee+u[st]]]]%32,Wt=u[tt+be+u[qe+Ie+u[Ee+Se+u[st+Xe]]]]%32,qt=u[tt+Oe+u[qe+ut+u[Ee+dt+u[st+ue]]]]%32,xt=u[tt+me+u[qe+pe+u[Ee+Ce+u[st+He]]]]%32,Qt=u[tt+1+u[qe+1+u[Ee+1+u[st+1]]]]%32;let Be=.6-A*A-O*O-B*B-c*c;Be<0?_=0:(Be*=Be,_=Be*Be*this._dot4(o[Nt],A,O,B,c));let Qe=.6-Pt*Pt-mt*mt-le*le-pt*pt;Qe<0?x=0:(Qe*=Qe,x=Qe*Qe*this._dot4(o[Wt],Pt,mt,le,pt));let Pe=.6-ve*ve-Ze*Ze-Ye*Ye-Ke*Ke;Pe<0?V=0:(Pe*=Pe,V=Pe*Pe*this._dot4(o[qt],ve,Ze,Ye,Ke));let ce=.6-Tt*Tt-yt*yt-vt*vt-Je*Je;ce<0?D=0:(ce*=ce,D=ce*ce*this._dot4(o[xt],Tt,yt,vt,Je));let Te=.6-We*We-ke*ke-gt*gt-et*et;return Te<0?ee=0:(Te*=Te,ee=Te*Te*this._dot4(o[Qt],We,ke,gt,et)),27*(_+x+V+D+ee)}_dot(t,a,h){return t[0]*a+t[1]*h}_dot3(t,a,h,r){return t[0]*a+t[1]*h+t[2]*r}_dot4(t,a,h,r,o){return t[0]*a+t[1]*h+t[2]*r+t[3]*o}}class Ue extends ft{constructor(t,a,h=512,r=512,o,f,u){super(),this.width=h,this.height=r,this.clear=!0,this.camera=a,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vi(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new lt(this.width,this.height,{type:ct,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ne({defines:Object.assign({},Ot.defines),uniforms:Ve.clone(Ot.uniforms),vertexShader:Ot.vertexShader,fragmentShader:Ot.fragmentShader,blending:Le,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ds,this.normalMaterial.blending=Le,this.pdMaterial=new Ne({defines:Object.assign({},Bt.defines),uniforms:Ve.clone(Bt.uniforms),vertexShader:Bt.vertexShader,fragmentShader:Bt.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ne({defines:Object.assign({},kt.defines),uniforms:Ve.clone(kt.uniforms),vertexShader:kt.vertexShader,fragmentShader:kt.fragmentShader,blending:Le}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ne({uniforms:Ve.clone(ht.uniforms),vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:hs,blendDst:Ut,blendEquation:At,blendSrcAlpha:cs,blendDstAlpha:Ut,blendEquationAlpha:At}),this.blendMaterial=new Ne({uniforms:Ve.clone(Jt.uniforms),vertexShader:Jt.vertexShader,fragmentShader:Jt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:zs,blendSrc:hs,blendDst:Ut,blendEquation:At,blendSrcAlpha:cs,blendDstAlpha:Ut,blendEquationAlpha:At}),this._fsQuad=new jt(null),this._originalClearColor=new $e,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),f!==void 0&&this.updateGtaoMaterial(f),u!==void 0&&this.updatePdMaterial(u)}setSize(t,a){this.width=t,this.height=a,this.gtaoRenderTarget.setSize(t,a),this.normalRenderTarget&&this.normalRenderTarget.setSize(t,a),this.pdRenderTarget.setSize(t,a),this.gtaoMaterial.uniforms.resolution.value.set(t,a),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,a),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,a){if(t!==void 0)this.depthTexture=t,this.normalTexture=a,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const r=new Ns;r.format=Is,r.type=As,this.normalRenderTarget=new lt(this.width,this.height,{minFilter:fs,magFilter:fs,type:ct,depthTexture:r})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const h=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=h,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=h,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let a=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,a=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,a=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,a=!0),a&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=bs(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,a,h){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Ue.OUTPUT.Off:break;case Ue.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=h.texture,this.copyMaterial.blending=Le,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ue.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Le,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ue.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Le,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ue.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:a);break;case Ue.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Le,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ue.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=h.texture,this.copyMaterial.blending=Le,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:a);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,a,h,r,o){t.getClearColor(this._originalClearColor);const f=t.getClearAlpha(),u=t.autoClear;t.setRenderTarget(h),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(o||0),t.clear()),this._fsQuad.material=a,this._fsQuad.render(t),t.autoClear=u,t.setClearColor(this._originalClearColor),t.setClearAlpha(f)}_renderOverride(t,a,h,r,o){t.getClearColor(this._originalClearColor);const f=t.getClearAlpha(),u=t.autoClear;t.setRenderTarget(h),t.autoClear=!1,r=a.clearColor||r,o=a.clearAlpha||o,r!=null&&(t.setClearColor(r),t.setClearAlpha(o||0),t.clear()),this.scene.overrideMaterial=a,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=u,t.setClearColor(this._originalClearColor),t.setClearAlpha(f)}_overrideVisibility(){const t=this.scene,a=this._visibilityCache;t.traverse(function(h){(h.isPoints||h.isLine||h.isLine2)&&h.visible&&(h.visible=!1,a.push(h))})}_restoreVisibility(){const t=this._visibilityCache;for(let a=0;a<t.length;a++)t[a].visible=!0;t.length=0}_generateNoise(t=64){const a=new Mi,h=t*t*4,r=new Uint8Array(h);for(let f=0;f<t;f++)for(let u=0;u<t;u++){const b=f,g=u;r[(f*t+u)*4]=(a.noise(b,g)*.5+.5)*255,r[(f*t+u)*4+1]=(a.noise(b+t,g)*.5+.5)*255,r[(f*t+u)*4+2]=(a.noise(b,g+t)*.5+.5)*255,r[(f*t+u)*4+3]=(a.noise(b+t,g+t)*.5+.5)*255}const o=new xs(r,t,t,Us,Fs);return o.wrapS=zt,o.wrapT=zt,o.needsUpdate=!0,o}}Ue.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const wi={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class St extends ft{constructor(t,a=1,h,r){super(),this.strength=a,this.radius=h,this.threshold=r,this.resolution=t!==void 0?new Me(t.x,t.y):new Me(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new lt(o,f,{type:ct,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const x=new lt(o,f,{type:ct,depthBuffer:!1});x.texture.name="UnrealBloomPass.h"+_,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const V=new lt(o,f,{type:ct,depthBuffer:!1});V.texture.name="UnrealBloomPass.v"+_,V.texture.generateMipmaps=!1,this.renderTargetsVertical.push(V),o=Math.round(o/2),f=Math.round(f/2)}const u=wi;this.highPassUniforms=Ve.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const b=[6,10,14,18,22];o=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(b[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new Me(1/o,1/f),o=Math.round(o/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ve.clone(ht.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,premultipliedAlpha:!0,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new Vt,this._fsQuad=new jt(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,a){let h=Math.round(t/2),r=Math.round(a/2);this.renderTargetBright.setSize(h,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(h,r),this.renderTargetsVertical[o].setSize(h,r),this.separableBlurMaterials[o].uniforms.invSize.value=new Me(1/h,1/r),h=Math.round(h/2),r=Math.round(r/2)}render(t,a,h,r,o){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=h.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=h.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let u=this.renderTargetBright;for(let b=0;b<this.nMips;b++)this._fsQuad.material=this.separableBlurMaterials[b],this.separableBlurMaterials[b].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[b].uniforms.direction.value=St.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[b]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[b].uniforms.colorTexture.value=this.renderTargetsHorizontal[b].texture,this.separableBlurMaterials[b].uniforms.direction.value=St.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[b]),t.clear(),this._fsQuad.render(t),u=this.renderTargetsVertical[b];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(h),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const a=[],h=t/3;for(let f=0;f<t;f++)a.push(.39894*Math.exp(-.5*f*f/(h*h))/h);const r=[],o=[];for(let f=1;f<t;f+=2){const u=a[f],b=f+1<t?a[f+1]:0,g=u+b;r.push((f*u+(f+1)*b)/g),o.push(g)}return new Ne({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},centerWeight:{value:a[0]},gaussianOffsets:{value:r},gaussianWeights:{value:o}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}St.BlurDirectionX=new Me(1,0);St.BlurDirectionY=new Me(0,1);const Lt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class bi extends ft{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ve.clone(Lt.uniforms),this.material=new Os({name:Lt.name,uniforms:this.uniforms,vertexShader:Lt.vertexShader,fragmentShader:Lt.fragmentShader}),this._fsQuad=new jt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,a,h){this.uniforms.tDiffuse.value=h.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ks.getTransfer(this._outputColorSpace)===Bs&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ls?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===js?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ws?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ws&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ht=M=>Math.min(Math.max(M,0),1),he=(M,t,a)=>Ht((M-t)/(a-t)),De=M=>(M=Ht(M),M*M*M*(M*(M*6-15)+10)),Rt=M=>1-Math.pow(1-Ht(M),3),ze=(M,t,a)=>M+(t-M)*a,es="#021d40",Q=2.7,I=-12,F=12,R=-2.2,P=8,xe=1.8,J=3.6;let Gt=7;const j=()=>(Gt=Gt*16807%2147483647,(Gt-1)/2147483646);function ot(M,t,a,h=!0){const r=document.createElement("canvas");r.width=M,r.height=t,a(r.getContext("2d"));const o=new ei(r);return o.wrapS=o.wrapT=zt,o.anisotropy=8,h&&(o.colorSpace=ti),o}const rt=(M,t,a,h,r,o=!1)=>{for(let f=0;f<h;f++)M.fillStyle=`rgba(${o?"255,255,255":"0,0,0"},${(j()*r).toFixed(3)})`,M.fillRect(j()*t,j()*a,1+j()*2,1+j()*2)};function Ti(M){Gt=7;const t=document.createElement("canvas");t.className="h3-canvas",t.setAttribute("aria-hidden","true"),M.prepend(t);const a=innerWidth<768,h=new qs({canvas:t,antialias:a,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__recording});h.setPixelRatio(Math.min(devicePixelRatio,a?1.6:1.5)),h.setClearColor(es,1),h.toneMapping=ws,h.toneMappingExposure=1,h.shadowMap.enabled=!0,h.shadowMap.type=Qs;const r=new vs,o=new $s(h),f=o.fromScene(new li,.04);r.environment=f.texture,r.environmentIntensity=.35,r.fog=new Xs(es,60,140);const u=new Zs(30,1,.3,300),b=new Ys("#e4eefb","#0b2448",.55);r.add(b);const g=new Ks("#fff3e3",1.6);g.position.set(-16,26,18),g.target.position.set(0,0,3),r.add(g.target),g.castShadow=!0;const _=a?2048:4096;g.shadow.mapSize.set(_,_),Object.assign(g.shadow.camera,{left:-22,right:22,top:18,bottom:-18,near:2,far:80}),g.shadow.bias=-2e-4,g.shadow.normalBias=.025,r.add(g);const x=(e,s={})=>new nt({color:e,roughness:.75,...s}),V=ot(1024,1024,e=>{for(let d=0;d<8;d++){let p=-j()*400;for(;p<1024;){const w=260+j()*380,v=.86+j()*.22;e.fillStyle=`rgb(${Math.round(196*v)},${Math.round(160*v)},${Math.round(116*v)})`,e.fillRect(p,d*128,w,128);for(let S=0;S<9;S++){e.strokeStyle=`rgba(90,60,30,${.05+j()*.07})`,e.lineWidth=1+j()*2,e.beginPath();const E=d*128+j()*128;e.moveTo(p,E),e.bezierCurveTo(p+w*.3,E+(j()-.5)*10,p+w*.6,E+(j()-.5)*10,p+w,E),e.stroke()}e.fillStyle="rgba(60,40,20,0.35)",e.fillRect(p,d*128,2,128),p+=w}e.fillStyle="rgba(60,40,20,0.3)",e.fillRect(0,d*128,1024,2)}}),D=ot(512,512,e=>{e.fillStyle="#d6d9dc",e.fillRect(0,0,512,512),rt(e,512,512,9e3,.06),rt(e,512,512,3e3,.25,!0),e.fillStyle="rgba(0,0,0,0.07)";for(let s=0;s<4;s++)e.fillRect(0,s*128,512,1.5)}),ee=ot(512,512,e=>{e.fillStyle="#eef0f1",e.fillRect(0,0,512,512),rt(e,512,512,3e3,.04),e.fillStyle="#b9bfc5";for(let s=0;s<=8;s++)e.fillRect(s*64-1,0,2,512),e.fillRect(0,s*64-1,512,2)}),z=ot(512,512,e=>{e.fillStyle="#6d7785",e.fillRect(0,0,512,512),rt(e,512,512,14e3,.12),rt(e,512,512,5e3,.12,!0),e.fillStyle="rgba(30,35,40,0.45)",e.fillRect(0,0,512,3),e.fillRect(0,0,3,512)}),ne=ot(512,512,e=>{e.fillStyle="#0e1a2b",e.fillRect(0,0,512,512),rt(e,512,512,16e3,.12,!0),rt(e,512,512,8e3,.3)}),i={card:x("#eef1f5",{roughness:.92}),wall:x("#f5f6f8",{roughness:.9}),poche:x("#0d3366",{roughness:.8}),slab:x("#123a6a",{roughness:.95}),oak:x("#ffffff",{map:V,roughness:.55}),lvt:x("#ffffff",{map:D,roughness:.6}),tile:x("#ffffff",{map:ee,roughness:.35}),conc:x("#ffffff",{map:z,roughness:.95}),asph:x("#ffffff",{map:ne,roughness:.95}),timber:x("#b98a5c",{roughness:.55}),walnut:x("#6b4a32",{roughness:.5}),quartz:x("#f4f3ef",{roughness:.22}),lam:x("#e9e6df",{roughness:.45}),blue:x("#1475bc",{roughness:.7}),navyFab:x("#22344d",{roughness:.85}),sage:x("#8fa596",{roughness:.85}),vinyl:x("#3b4a5c",{roughness:.45}),white:x("#fbfbfa",{roughness:.35}),metal:x("#2a3038",{roughness:.35,metalness:.7}),chrome:x("#d9dee3",{roughness:.18,metalness:1}),frame:x("#30363e",{roughness:.4,metalness:.5}),screen:x("#0b1726",{roughness:.2,emissive:"#3d7fd0",emissiveIntensity:0}),leaf:x("#3d6a49",{roughness:.85}),leaf2:x("#5f8c58",{roughness:.85}),leaf3:x("#7a9e6a",{roughness:.85}),bark:x("#4a3a2c",{roughness:.9}),pot:x("#d9d4cc",{roughness:.9}),soil:x("#3a2d22",{roughness:1}),rug:x("#b9c3cf",{roughness:1}),art:x("#1475bc",{roughness:.6}),art2:x("#d9a46b",{roughness:.6}),lamp:x("#ffffff",{emissive:"#ffd8a6",emissiveIntensity:0,roughness:.4}),shade:x("#1d232b",{roughness:.4,metalness:.4}),street:x("#2c3642",{emissive:"#ffe3b8",emissiveIntensity:0,roughness:.5}),line:x("#7f93ad",{roughness:.8}),glass:new nt({color:"#9fc0e0",roughness:.04,metalness:.3,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:1.6}),frost:new nt({color:"#f4f7fa",roughness:.6,transparent:!0,opacity:0,depthWrite:!1})},C={},G=e=>C[e]??={g:new Kt,b:new Map},W=e=>{const s=e.index?e.toNonIndexed():e;for(const n of Object.keys(s.attributes))["position","normal","uv"].includes(n)||s.deleteAttribute(n);return s.attributes.uv||s.setAttribute("uv",new Dt(new Float32Array(s.attributes.position.count*2),2)),s.clearGroups(),s},oe=new Map,$=(e,s)=>{let n=oe.get(e);return n||(n=W(s()),oe.set(e,n)),n},Y=(e,s,n,d)=>{const p=G(e).b,w=p.get(n)??[];w.push(s.clone().applyMatrix4(d)),p.set(n,w)},l=(e,s,n=0,d=0)=>new _e().makeRotationY(n).setPosition(e,d,s),A=new _e,O=new _e,B=new si,c=(e,s,n,d,p,w,v,S,E,q=0,X=0,se=0,y=0)=>{const m=Math.min(q,n/2-.001,d/2-.001,p/2-.001),L=m>.002?$(`r${n.toFixed(3)}_${d.toFixed(3)}_${p.toFixed(3)}_${m.toFixed(3)}`,()=>new ss(n,d,p,2,m)):$(`b${n.toFixed(3)}_${d.toFixed(3)}_${p.toFixed(3)}`,()=>new bt(n,d,p));O.makeRotationFromEuler(B.set(X,y,se)),A.copy(s).multiply(new _e().makeTranslation(w,v+d/2,S)).multiply(O),Y(e,L,E,A)},T=(e,s,n,d,p,w,v,S,E,q=16,X=0,se=0)=>{const y=$(`c${n}_${d}_${p}_${q}`,()=>new ai(n,d,p,q));O.makeRotationFromEuler(B.set(X,0,se)),A.copy(s).multiply(new _e().makeTranslation(w,v+p/2,S)).multiply(O),Y(e,y,E,A)},Ge=(e,s,n,d,p,w,v,S=1,E=1,q=1,X=1)=>{const se=$(`i${n}_${X}`,()=>new oi(n,X));A.copy(s).multiply(new _e().compose(new H(d,p,w),new ii().setFromEuler(B.set(j()*3,j()*3,0)),new H(S,E,q))),Y(e,se,v,A)},de=(e,s,n)=>{c(e,s,.5,.09,.48,0,.42,0,n,.035),c(e,s,.5,.44,.07,0,.5,-.22,n,.03,-.12);for(const[d,p]of[[-.21,-.19],[.21,-.19],[-.21,.19],[.21,.19]])T(e,s,.014,.014,.42,d,0,p,i.metal,6)},je=(e,s,n)=>{c(e,s,.78,.2,.74,0,.12,0,n,.06),c(e,s,.78,.5,.16,0,.3,-.3,n,.07),c(e,s,.13,.32,.74,-.33,.3,0,n,.05),c(e,s,.13,.32,.74,.33,.3,0,n,.05);for(const[d,p]of[[-.32,-.3],[.32,-.3],[-.32,.3],[.32,.3]])T(e,s,.02,.015,.12,d,0,p,i.walnut,8)},Fe=(e,s,n=.28,d=.5)=>{T(e,s,n,n,.03,0,d-.03,0,i.walnut,28),T(e,s,.025,.025,d-.03,0,0,0,i.metal,8),T(e,s,n*.6,n*.6,.02,0,0,0,i.metal,20)},we=(e,s,n=1)=>{T(e,s,.2*n,.16*n,.42*n,0,0,0,i.pot,20),T(e,s,.18*n,.18*n,.02,0,.4*n,0,i.soil,16),T(e,s,.012,.016,.7*n,0,.4*n,0,i.walnut,5);for(let d=0;d<9;d++){const p=d/9*Math.PI*2,w=.12+j()*.16,v=.75+j()*.75;Ge(e,s,.13*n,Math.cos(p)*w*n,v*n,Math.sin(p)*w*n,[i.leaf,i.leaf2,i.leaf3][d%3],1,.55+j()*.3,1.5,2)}},k=(e,s,n,d,p,w=0)=>{const v=new _e().copy(s).multiply(l(n,d,w,p));c(e,v,.56,.34,.025,0,.12,0,i.screen,.008),c(e,v,.04,.14,.03,0,0,-.03,i.metal),c(e,v,.2,.012,.16,0,0,-.02,i.metal,.005)},be=(e,s)=>{c(e,s,.5,.08,.48,0,.46,0,i.navyFab,.035),c(e,s,.46,.5,.06,0,.58,-.24,i.navyFab,.03,-.1),T(e,s,.025,.025,.36,0,.1,0,i.metal,8);for(let n=0;n<5;n++)c(e,s,.03,.03,.3,0,.06,0,i.metal,0,0,0,n/5*Math.PI*2)},Ie=(e,s,n=1.5,d=.7)=>{c(e,s,n,.035,d,0,.72,0,i.lam,.01),c(e,s,.03,.72,d-.08,-n/2+.06,0,0,i.metal),c(e,s,.03,.72,d-.08,n/2-.06,0,0,i.metal),c(e,s,n-.14,.3,.02,0,.4,-d/2+.06,i.metal)},Se=(e,s,n,d=0,p=!0)=>{const w=Math.max(1,Math.round(n/.6)),v=n/w;c(e,s,n,.1,.5,0,0,-.02,i.metal),c(e,s,n,.78,.56,0,.1,-.01,i.white);for(let S=0;S<w;S++)c(e,s,v-.012,.76,.02,-n/2+v*(S+.5),.11,.275,i.white,.004);if(c(e,s,n+.02,.035,.62,0,.88,.02,i.quartz,.008),d!==null&&(c(e,s,.46,.02,.36,d,.902,.02,i.chrome,.01),T(e,s,.012,.012,.3,d,.91,-.22,i.chrome,8),c(e,s,.025,.025,.16,d,1.19,-.15,i.chrome,.01)),p)for(let S=0;S<w;S++)c(e,s,v-.012,.72,.34,-n/2+v*(S+.5),1.5,-.12,i.white,.006)},Xe=(e,s)=>{c(e,s,.62,.62,1.4,0,0,.1,i.white,.03),c(e,s,.7,.1,1.3,0,.62,.2,i.vinyl,.045),c(e,s,.7,.1,.62,0,.74,-.68,i.vinyl,.045,.45),c(e,s,.52,.006,1.25,0,.725,.2,i.white),T(e,s,.06,.06,.6,0,.66,-1.05,i.white,12,0,Math.PI/2),c(e,s,.5,.06,.28,0,.32,.86,i.metal,.02)},Oe=(e,s)=>{T(e,s,.2,.2,.08,0,.52,0,i.vinyl,20),T(e,s,.025,.03,.46,0,.06,0,i.chrome,8);for(let n=0;n<5;n++)c(e,s,.025,.025,.26,0,.04,0,i.metal,0,0,0,n/5*Math.PI*2)},ut=(e,s)=>{c(e,s,.6,.1,.9,0,0,.2,i.white,.04),c(e,s,.32,.45,.4,0,.1,.2,i.white,.08),c(e,s,.62,.14,.75,0,.55,.25,i.blue,.06),c(e,s,.56,.12,.75,0,.5,.9,i.blue,.055,-.25),c(e,s,.58,.13,.8,0,.78,-.42,i.blue,.06,.95),c(e,s,.3,.1,.24,0,1.12,-.83,i.blue,.045,1.2),c(e,s,.08,.06,.5,-.36,.72,.2,i.white,.025),c(e,s,.08,.06,.5,.36,.72,.2,i.white,.025),T(e,s,.04,.04,.6,.52,.1,-.1,i.white,10),c(e,s,.08,.05,.6,.52,.7,.18,i.white,.02),c(e,s,.5,.05,.34,.52,.76,.5,i.white,.02);for(let n=0;n<5;n++)T(e,s,.008,.008,.16,.4+n*.06,.8,.44,i.chrome,5,Math.PI/2.4);T(e,s,.045,.045,1.5,-.55,.1,-.7,i.white,12),c(e,s,.06,.06,.7,-.55,1.62,-.38,i.white,.02,.2),c(e,s,.44,.1,.18,-.45,1.5,-.1,i.white,.04,.5),c(e,s,.36,.02,.12,-.45,1.48,-.08,i.lamp,0,.5),k(e,s,-.55,-.4,1.7,Math.PI*.15)},dt=(e,s,n,d)=>{const p=new _e().copy(s).multiply(l(0,0,d));c(e,p,n-.04,2.1,.045,(n-.04)/2,0,0,i.timber,.008),c(e,p,.02,.02,.14,n-.14,1.02,0,i.chrome)},ue=(e,s,n,d=.9,p=.22)=>{const w=l(s,n);T(e,w,.004,.004,d,0,Q-d,0,i.metal,4),T(e,w,.05,p,.24,0,Q-d-.24,0,i.shade,24),T(e,w,p*.92,p*.92,.01,0,Q-d-.245,0,i.lamp,24)},me=[{key:"lobby",name:"Reception",x0:I,z0:J,x1:1,z1:P,floor:i.oak,sq:!0},{key:"op1",name:"Dental 1",x0:1,z0:J,x1:6.5,z1:P,floor:i.lvt,sq:!0},{key:"op2",name:"Dental 2",x0:6.5,z0:J,x1:F,z1:P,floor:i.lvt,sq:!0},{key:"corr",name:"",x0:I,z0:xe,x1:F,z1:J,floor:i.lvt},{key:"staff",name:"Staff",x0:I,z0:R,x1:-8.5,z1:xe,floor:i.lvt,sq:!0},{key:"wash",name:"Washroom",x0:-8.5,z0:R,x1:-6,z1:xe,floor:i.tile},{key:"office",name:"Office",x0:-6,z0:R,x1:-3,z1:xe,floor:i.oak,sq:!0},{key:"ex1",name:"Exam 1",x0:-3,z0:R,x1:.5,z1:xe,floor:i.lvt,sq:!0},{key:"ex2",name:"Exam 2",x0:.5,z0:R,x1:4,z1:xe,floor:i.lvt,sq:!0},{key:"ex3",name:"Exam 3",x0:4,z0:R,x1:7.5,z1:xe,floor:i.lvt,sq:!0},{key:"proc",name:"Procedure",x0:7.5,z0:R,x1:F,z1:xe,floor:i.lvt,sq:!0}],pe=e=>Ht((e-I)/(F-I));c("shell",l(0,0),F-I+.5,.18,P-R+.5,0,-.18,(R+P)/2,i.slab);const Ce=[];for(const e of me){const s=e.x1-e.x0,n=e.z1-e.z0,d=new bt(s,.02,n);d.translate(s/2,.01,0);const p=d.attributes.uv,w=d.attributes.position,v=e.floor===i.oak?3.2:e.floor===i.tile?2.4:4;for(let E=0;E<p.count;E++)p.setXY(E,(w.getX(E)+e.x0)/v,(w.getZ(E)+(e.z0+e.z1)/2)/v);const S=new re(d,e.floor);S.position.set(e.x0,0,(e.z0+e.z1)/2),S.receiveShadow=!0,r.add(S),Ce.push({mesh:S,at:pe(e.x0)})}c("lobby",l(-1.75,6.15),4.4,.012,2.9,0,.02,0,i.rug,.004);const He=e=>Math.min(5,Math.floor(pe(e)*6)),Pt=[0,1,2,3,4,5].map(e=>G(`wall${e}`).g),mt=[],le=(e,s,n,d)=>mt.push(e,.03,s,n,.03,d),pt=[],ve=(e,s,n,d,p,w=[])=>{const v=s===d,S=Math.abs(v?n-e:d-s),E=v?Math.min(e,n):Math.min(s,d),q=w.map(([y,m])=>[y-m/2,y+m/2]).sort((y,m)=>y[0]-m[0]);let X=E;const se=[];for(const[y,m]of q)y>X&&se.push([X,y]),X=m;X<E+S&&se.push([X,E+S]);for(const[y,m]of se){const L=(y+m)/2,U=m-y,Z=v?L:e,K=v?s:L,fe=`wall${He(Z)}`,ge=v?U:p,N=v?p:U;c(fe,l(Z,K),ge,Q-.02,N,0,0,0,i.wall),c(fe,l(Z,K),ge+.002,.02,N+.002,0,Q-.02,0,i.poche),v?(le(y,s-p/2,m,s-p/2),le(y,s+p/2,m,s+p/2),le(y,s-p/2,y,s+p/2),le(m,s-p/2,m,s+p/2)):(le(e-p/2,y,e-p/2,m),le(e+p/2,y,e+p/2,m),le(e-p/2,y,e+p/2,y),le(e-p/2,m,e+p/2,m))}for(const[y,m,L]of w){const U=v?y:e,Z=v?s:y,K=`wall${He(U)}`;c(K,l(U,Z),v?m:p,Q-2.14,v?p:m,0,2.12,0,i.wall),c(K,l(U,Z),(v?m:p)+.002,.02,(v?p:m)+.002,0,Q-.02,0,i.poche);const fe=v?y-m/2:e,ge=v?s:y-m/2,N=v?0:-Math.PI/2,ie=N-L*1.25*(v?1:-1);pt.push({grp:`door${He(U)}`,f:l(fe,ge),w:m,ang:ie});const ae=m-.04,Yt=10;for(let It=0;It<Yt;It++){const ns=N+(ie-N)*It/Yt,ls=N+(ie-N)*(It+1)/Yt;le(fe+Math.cos(ns)*ae,ge-Math.sin(ns)*ae,fe+Math.cos(ls)*ae,ge-Math.sin(ls)*ae)}le(fe,ge,fe+Math.cos(ie)*ae,ge-Math.sin(ie)*ae)}};ve(I,R,F,R,.25),ve(I,R,I,P,.25),ve(F,R,F,P,.25),ve(I,xe,F,xe,.12,[[-9.6,.95,-1],[-7.3,.9,-1],[-4.6,.95,-1],[-1.3,.95,-1],[2.2,.95,-1],[5.7,.95,-1],[9.2,1.2,-1]]),ve(I,J,-3,J,.12),ve(1,J,F,J,.12,[[1.75,.95,1],[7.25,.95,1]]);for(const e of[-8.5,-6,-3,.5,4,7.5])ve(e,R,e,xe,.12);ve(1,J,1,P,.12),ve(6.5,J,6.5,P,.12);const Ze=[I,-4,4,F],Ye=[R,P];for(const e of Ze)for(const s of Ye)c(`wall${He(e)}`,l(e,s),.45,Q-.02,.45,0,0,0,i.card),c(`wall${He(e)}`,l(e,s),.452,.02,.452,0,Q-.02,0,i.poche);for(let e=0;e<=14;e++)c("store",l(I+.25+e*(F-I-.5)/14,P),.06,Q,.14,0,0,0,i.frame);c("store",l(0,P),F-I,.08,.14,0,2.3,0,i.frame),c("store",l(0,P),F-I,.12,.14,0,0,0,i.frame),c("store",l(0,P),F-I,Q-.02,.012,0,.02,0,i.glass),c("store",l((1+F)/2,P-.03),F-1,.9,.012,0,.9,0,i.frost);const Ke=-7.6;for(const e of[-1,1])c("store",l(Ke+e*.48,P+.09),.9,2.18,.04,0,.02,0,i.glass),c("store",l(Ke+e*.08,P+.14),.03,1.2,.03,0,.5,0,i.chrome);c("store",l(Ke,P+.65),3.6,.08,1.3,0,2.62,0,i.white,.02);for(const e of[2.4,7.9])c("store",l(e+1.4,J),2.6,1.6,.03,0,.9,0,i.glass);le(I,P,F,P),le(I,P+.14,F,P+.14);{const e="lobby";for(let v=-.75;v<=.75+1e-6;v+=.035){const S=-7.6+Math.sin(v)*1.9,E=4.25+Math.cos(v)*1.9*.48;c(e,l(S,E,v*.6),.045,1.04,.07,0,.04,0,i.timber,.008)}c(e,l(-7.6,4.25+.4),3.2,1,.45,0,.04,0,i.white,.02);for(let v=-.75;v<=.75-.05+1e-6;v+=.1){const S=-7.6+Math.sin(v+.05)*1.9,E=4.25+Math.cos(v+.05)*1.9*.48-.1;c(e,l(S,E,(v+.05)*.6),.4,.04,.34,0,1.08,0,i.quartz,.01)}c(e,l(-7.6,4.25+.3),3.1,.035,.6,0,.74,0,i.quartz,.01),k(e,l(-7.6-.8,4.25+.42,Math.PI),0,0,.775),k(e,l(-7.6+.8,4.25+.42,Math.PI),0,0,.775),be(e,l(-7.6-.8,4.25-.15,Math.PI)),be(e,l(-7.6+.8,4.25-.15,Math.PI));for(let v=I+.4;v<-3.2;v+=.11)c(e,l(v,J+.09),.05,Q-.1,.05,0,.02,0,i.timber,.006);c(e,l(-7.6,J+.16),2.4,.5,.05,0,1.55,0,i.blue,.01),c(e,l(-7.6,J+.19),2.2,.012,.012,0,1.58,0,i.lamp);for(const[v,S,E]of[[-3.3,5.5,.6],[-3.3,6.8,Math.PI-.6],[-.25,5.5,-.6],[-.25,6.8,Math.PI+.6]])je(e,l(v,S,E),i.navyFab);for(const[v,S,E]of[[-2.25,5,0],[-1.3,5,0],[-2.25,7.3,Math.PI],[-1.3,7.3,Math.PI]])je(e,l(v,S,E),i.sage);Fe(e,l(-1.78,6.15),.42,.42),Fe(e,l(-4,6.15),.22,.52),Fe(e,l(.45,4.3),.22,.52),c(e,l(.68,6.2,-Math.PI/2),3.2,.42,.5,0,0,0,i.timber,.02),c(e,l(.68,6.2,-Math.PI/2),3.2,.12,.52,0,.42,0,i.blue,.05),c(e,l(.86,6.2,-Math.PI/2),3.2,.5,.12,0,.52,0,i.blue,.05),we(e,l(-10.9,7.4),1.2),we(e,l(-4.6,7.5),1),we(e,l(-11.4,4.3),.9),we(e,l(.55,7.55),.9),c(e,l(-1,J+.08),1.4,.9,.04,0,1.25,0,i.art,.01),c(e,l(-5.4,7.7),1.6,.9,.36,0,0,0,i.white,.02),c(e,l(-5.4,7.7),1.62,.03,.38,0,.9,0,i.timber,.01),ue(e,-7.6-1,4.25+.3),ue(e,-7.6,4.25+.4),ue(e,-7.6+1,4.25+.3),ue(e,-1.78,6.15,1.1,.42)}for(const[e,s,n]of[["op1",1,6.5],["op2",6.5,F]]){const d=(s+n)/2;ut(e,l(d,5.9,Math.PI)),Se(e,l(d+.3,J+.36),n-s-1.6,.6),Oe(e,l(d+.7,5.3)),Oe(e,l(d-.75,5.5)),c(e,l(d-1.7,6.9),.5,.75,.45,0,0,0,i.white,.03),c(e,l(n-.4,6.3,-Math.PI/2),1.8,.88,.5,0,0,0,i.white,.02),c(e,l(n-.4,6.3,-Math.PI/2),1.82,.03,.52,0,.88,0,i.quartz,.008),k(e,l(n-.45,6.6,-Math.PI/2),0,0,.91),we(e,l(s+.45,7.5),.8)}for(const[e,s,n]of[["ex1",-3,.5],["ex2",.5,4],["ex3",4,7.5]])Xe(e,l(s+.5,-.5,Math.PI)),Se(e,l((s+n)/2+.3,R+.42),2.1,.2),Ie(e,l(n-.45,.45,Math.PI/2),1.3,.6),k(e,l(n-.3,.45,-Math.PI/2),0,0,.755),be(e,l(n-1,.45,Math.PI/2)),de(e,l(n-1.1,1.3,Math.PI*.8),i.sage),Oe(e,l(s+1.4,.5)),c(e,l(s+.08,.95,Math.PI/2),.5,.36,.06,0,1.3,0,i.white,.01),c(e,l((s+n)/2+.6,xe-.08),.5,.7,.03,0,1.2,0,i.art2,.008);{const e="proc";Xe(e,l(9.75,-.1,Math.PI/2)),Se(e,l(9.75,R+.42),3.6,-.9),T(e,l(9.75,-.1),.03,.03,.55,0,Q-.55,0,i.white,8),c(e,l(9.75,-.1),.08,.08,.9,0,Q-.6,.38,i.white,.02,.6),T(e,l(9.75,.55),.34,.26,.14,0,1.75,0,i.white,28),T(e,l(9.75,.55),.24,.24,.01,0,1.745,0,i.lamp,28),c(e,l(F-.5,1.05),.55,.9,.5,0,0,0,i.white,.03),c(e,l(9.75-1.7,1.15),.55,.9,.5,0,0,0,i.white,.03),Oe(e,l(9.75+1.2,.8)),k(e,l(F-.5,1.05,-Math.PI/2),0,0,.9)}{const e="office";Ie(e,l(-4.5,-.9),1.8,.75),k(e,l(-4.85,-1.12),0,0,.755),k(e,l(-4.15,-1.12),0,0,.755),be(e,l(-4.5,-1.55)),de(e,l(-4.9,.05,Math.PI),i.navyFab),de(e,l(-4.1,.05,Math.PI),i.navyFab),c(e,l(-5.76,-.4,Math.PI/2),1.6,2,.36,0,0,0,i.walnut,.01);for(let s=0;s<4;s++)c(e,l(-5.57,-.4,Math.PI/2),1.5,.3,.02,0,.1+s*.47,0,i.white);we(e,l(-3.45,-1.75),.9)}{const e="staff";c(e,l(-10.3,-.1),1.6,.04,.9,0,.72,0,i.walnut,.015),T(e,l(-10.3,-.1),.04,.04,.72,0,0,0,i.metal,8),T(e,l(-10.3,-.1),.3,.3,.02,0,0,0,i.metal,20),de(e,l(-10.75,.6,Math.PI),i.blue),de(e,l(-9.85,.6,Math.PI),i.blue),de(e,l(-10.75,-.8),i.blue),de(e,l(-9.85,-.8),i.blue),Se(e,l(-10.6,R+.42),2.4,-.5),c(e,l(-8.95,R+.5),.75,2,.66,0,0,0,i.chrome,.03),ue(e,-10.3,-.1,1,.18)}{const e="wash";c(e,l(-7.25,R+.55),.4,.38,.6,0,0,.1,i.white,.12),c(e,l(-7.25,R+.2),.4,.7,.15,0,.25,0,i.white,.04),c(e,l(-6.35,.6,-Math.PI/2),.9,.06,.5,0,.84,0,i.quartz,.02),c(e,l(-6.35,.6,-Math.PI/2),.4,.1,.3,0,.8,.02,i.white,.04),c(e,l(-6.08,.6,-Math.PI/2),.7,.8,.02,0,1.15,0,i.chrome,.01),c(e,l(-8.38,-.9,Math.PI/2),.9,.035,.035,0,.85,.06,i.chrome,.015)}for(const e of[xe+.08,J-.08])c("corr",l(0,e),F-I-.6,.025,.025,0,Q-.09,0,i.lamp);c("lobby",l(-7.6,J+.14),8.4,.025,.025,0,Q-.09,0,i.lamp);for(const e of[-10.6,-5.3,3.1,8.6])c("corr",l(e,J-.08),1,.65,.03,0,1.2,0,e<0?i.art:i.art2,.008);for(const e of pt)dt(e.grp,e.f,e.w,e.ang);{const e="street",s=new bt(70,.15,4.6),n=s.attributes.position,d=s.attributes.uv;for(let m=0;m<d.count;m++)d.setXY(m,n.getX(m)/1.5,n.getZ(m)/1.5);const p=new re(s,i.conc);p.position.set(0,-.075,P+2.3),p.receiveShadow=!0,r.add(p),c(e,l(0,P+4.65),70,.17,.25,0,-.17,0,i.slab);const w=new bt(80,.1,13),v=w.attributes.position,S=w.attributes.uv;for(let m=0;m<S.count;m++)S.setXY(m,v.getX(m)/6,v.getZ(m)/6);const E=new re(w,i.asph);E.position.set(0,-.23,P+11.25),E.receiveShadow=!0,r.add(E);for(let m=-30;m<30;m+=6)c(e,l(m,P+15.6),3,.01,.14,0,-.18,0,i.line);for(let m=-27;m<=27;m+=2.7)c(e,l(m,P+7.2),.1,.01,4.8,0,-.18,0,i.line);for(const m of[-16,1.8,12.5,22]){c(e,l(m,P+3.4),1.2,.02,1.2,0,0,0,i.metal);const L=l(m,P+3.4);T(e,L,.06,.1,3,0,0,0,i.bark,10),T(e,L,.03,.045,1.2,.25,2.3,0,i.bark,6,0,-.55),T(e,L,.03,.045,1.1,-.22,2.5,.05,i.bark,6,.2,.6);for(let U=0;U<26;U++){const Z=j()*Math.PI*2,K=j(),fe=Math.sqrt(K)*1.15,ge=3.3+j()*1.9-fe*.35;Ge(e,L,.42+j()*.32,Math.cos(Z)*fe,ge,Math.sin(Z)*fe,[i.leaf,i.leaf2,i.leaf3][U%3],1,.85,1,2)}}for(const m of[-21,-9.8,.8,11.8,22])T(e,l(m,P+4.2),.05,.07,5.2,0,0,0,i.frame,8),c(e,l(m,P+4.2),.08,.06,1.2,0,5.15,-.5,i.frame),c(e,l(m,P+3.7),.5,.06,.22,0,5.08,0,i.street,.02);for(let m=-12;m<=12;m+=2)T(e,l(m,P+4.1),.08,.08,.82,0,0,0,i.frame,16),T(e,l(m,P+4.1),.075,.075,.05,0,.82,0,i.street,16),T(e,l(m,P+4.1),.085,.085,.03,0,.87,0,i.frame,16);for(const m of[5.2,5.9,6.6])Y(e,$("tor",()=>new ri(.35,.025,6,20,Math.PI)),i.chrome,l(m,P+2.8,Math.PI/2));const q=[],X=(m,L,U,Z,K=0)=>{q.push(m,K,L,U,K,L,U,K,L,U,K,Z,U,K,Z,m,K,Z,m,K,Z,m,K,L)};for(const[m,L]of[[-36,-24],[-24,I],[F,24],[24,36]]){X(m,R,L,P),X(m,R,L,P,Q);for(const U of[m,L])for(const Z of[R,P])q.push(U,0,Z,U,Q,Z);for(let U=m+1.5;U<L-.1;U+=1.5)q.push(U,0,P,U,Q,P)}const se=new ts;se.setAttribute("position",new Dt(q,3)),r.add(new us(se,new ds({color:"#2f6fbf",transparent:!0,opacity:.5})));const y=new re(new Ft(400,400),new nt({color:"#0a2a52",roughness:1}));y.rotation.x=-Math.PI/2,y.position.y=-.3,y.receiveShadow=!0,r.add(y)}for(const{g:e,b:s}of Object.values(C)){for(const[n,d]of s){const p=new re(ni(d),n);p.castShadow=!n.transparent&&n!==i.rug&&n!==i.line,p.receiveShadow=!0,e.add(p)}r.add(e)}const Tt=me.map(e=>({g:C[e.key]?.g,at:pe(e.x0)})).filter(e=>e.g),yt=Object.keys(C).filter(e=>e.startsWith("door")).map(e=>({g:C[e].g,i:+e.slice(4)})),vt=new ds({color:"#9cc5ff",transparent:!0,opacity:.95}),Je=[];Ze.forEach(e=>Je.push(e,.035,R-2.3,e,.035,P+.6)),Ye.forEach(e=>Je.push(I-2.3,.035,e,F+.6,.035,e));const We=[],ke=(e,s,n,d)=>{We.push(e,.035,s,n,.035,d);const p=s===d?0:.25,w=s===d?.25:0;for(const[v,S]of[[e,s],[n,d]])We.push(v-p,.035,S-w,v+p,.035,S+w),We.push(v-.14,.035,S+.14,v+.14,.035,S-.14)};ke(I,R-1.25,F,R-1.25),ke(I-1.25,R,I-1.25,P),ke(I,R-.65,-4,R-.65),ke(-4,R-.65,4,R-.65),ke(4,R-.65,F,R-.65);const gt=[...Je,...mt,...We],et=new ts;et.setAttribute("position",new Dt(gt,3)),r.add(new us(et,vt));const tt=gt.length/3,qe=[],Ee=(e,s,n,d,p,w,v=0,S=!1)=>{const q=S?512:160,X=ot(512,q,m=>{if(m.textAlign="center",m.textBaseline="middle",S){m.strokeStyle="#9cc5ff",m.lineWidth=18,m.beginPath(),m.arc(256,256,220,0,Math.PI*2),m.stroke(),m.fillStyle="#9cc5ff",m.font='600 250px "Inter Tight", system-ui, sans-serif',m.fillText(e,256,268);return}m.fillStyle="#d7e7ff",m.font='600 62px "Inter Tight", system-ui, sans-serif',m.fillText(e,256,s?52:80),s&&(m.fillStyle="#9cc5ff",m.font='500 42px "Inter", system-ui, sans-serif',m.fillText(s,256,118))}),se=new Vt({map:X,transparent:!0,opacity:0,depthWrite:!1}),y=new re(new Ft(p,p*q/512),se);y.rotation.set(-Math.PI/2,0,v),y.position.set(n,.05,d),y.renderOrder=2,r.add(y),qe.push({mesh:y,at:w})},st=e=>`${Math.round((e.x1-e.x0)*(e.z1-e.z0)*10.764)} sq ft`;for(const e of me)e.name&&Ee(e.name,e.sq?st(e):"",(e.x0+e.x1)/2,(e.z0+e.z1)/2+(e.key==="lobby"?.9:0),Math.min(e.key==="lobby"?5:3.3,(e.x1-e.x0)*.94),pe(e.x0));["A","B","C","D"].forEach((e,s)=>Ee(e,"",Ze[s],R-2.8,.9,0,0,!0)),["1","2"].forEach((e,s)=>Ee(e,"",I-2.8,Ye[s],.9,0,0,!0)),Ee(`78' 9"`,"",0,R-1.6,2.2,1),Ee(`33' 6"`,"",I-1.6,(R+P)/2,2.2,1,Math.PI/2);const Nt=[];for(const[e,s,n]of[[-7.6,5.6,4.5],[-1.8,6.1,6],[3.75,5.8,6],[9.25,5.8,6],[-1.2,0,4],[2.2,0,4],[5.7,0,4],[9.8,0,5],[-4.5,0,4],[-10.3,0,4],[0,2.7,4]]){const d=new gs("#ffd3a0",0,9,2);d.position.set(e,1.95,s),d.userData.max=n,r.add(d),Nt.push(d)}const Wt=new nt({color:"#dfe2e7",roughness:.95}),qt=new Vt({color:"#fff1dc"}),xt=new Kt;r.add(xt);for(const e of me){const s=new re(new Ft(e.x1-e.x0,e.z1-e.z0),Wt);s.rotation.x=Math.PI/2,s.position.set((e.x0+e.x1)/2,Q-.001,(e.z0+e.z1)/2),xt.add(s);const n=e.key==="corr"?2.5:1.6;for(let d=e.x0+n/2;d<e.x1-.2;d+=n)for(let p=e.z0+.9;p<e.z1-.3;p+=e.key==="corr"?9:1.8){e.key==="corr"&&(p=(e.z0+e.z1)/2);const w=new re(new Js(.08,20),qt);if(w.rotation.x=Math.PI/2,w.position.set(d,Q-.004,p),xt.add(w),e.key==="corr")break}}const Qt=ot(256,256,e=>{const s=e.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,0.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,256,256)}),Be=new Kt;r.add(Be);const Qe=[],Pe=(e,s,n,d,p=.036)=>{const w=new Vt({map:Qt,color:"#ffc98c",transparent:!0,opacity:0,depthWrite:!1,blending:Ms});w.userData.max=d,Qe.push(w);const v=new re(new Ft(n*2,n*2),w);v.rotation.x=-Math.PI/2,v.position.set(e,p,s),v.renderOrder=3,Be.add(v)};for(const e of[-8.6,-7.6,-6.6])Pe(e,4.7,1.1,.55);Pe(-1.78,6.15,2.2,.5);for(const[e,s,n]of[[3.75,5.8,2.2],[9.25,5.8,2.2],[-1.2,0,1.6],[2.2,0,1.6],[5.7,0,1.6],[9.8,0,2],[-4.5,-.6,1.5],[-10.3,-.1,1.5],[-7.2,-.2,1.1]])Pe(e,s,n,.32);for(let e=-10;e<=10;e+=2.5)Pe(e,2.7,.9,.28);for(const e of[-21,-9.8,.8,11.8,22])Pe(e,P+3.5,2.6,.5,.01);for(let e=-12;e<=12;e+=2)Pe(e,P+4.1,.5,.35,.01);let ce=null,Te=null;a||(ce=new mi(h,new lt(1,1,{type:ct,samples:4})),ce.addPass(new pi(r,u)),Te=new Ue(r,u,1,1),Te.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1,scale:1.1,samples:12}),Te.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Te.blendIntensity=.9,ce.addPass(Te),ce.addPass(new St(new Me(1,1),.38,.45,1.15)),ce.addPass(new bi),h.setClearColor(new $e(es).convertSRGBToLinear(),1));const is=new H,as=new H,_t=new H,Mt=new H,Ct=new H,$t=new H,Ss=new $e("#fff3e3"),Ps=new $e("#ffb98a");let Re=1,Ae=1,te=0,it=0,Xt=0,Zt=0;const os=()=>{const e=M.getBoundingClientRect();Re=Math.max(1,e.width),Ae=Math.max(1,e.height),h.setSize(Re,Ae,!1),ce?.setSize(Re,Ae),ce?.setPixelRatio(h.getPixelRatio()),u.aspect=Re/Ae,u.updateProjectionMatrix()},at=()=>{const e=Re>980,s=Ae>Re,n=Math.max(De(it/1.8),he(te,0,.05));et.setDrawRange(0,Math.floor(tt*n/2)*2),Pt.forEach((N,ie)=>{const ae=Math.max(Rt((it-1.5-ie*.14)/1.1),he(te,0,.06));N.scale.y=Math.max(.001,ae),N.visible=ae>.001});const d=De(he(te,.06,.2));i.glass.opacity=.3*d,i.frost.opacity=.75*d;const p=G("store").g;p.scale.y=Math.max(.001,Rt(he(te,.05,.16))),p.visible=p.scale.y>.002,yt.forEach(({g:N,i:ie})=>{const ae=Rt(he(te,.08+ie*.015,.16+ie*.015));N.visible=ae>.001,N.scale.y=Math.max(.001,ae)}),Ce.forEach(({mesh:N,at:ie})=>{const ae=Rt(he(te,.2+ie*.13,.27+ie*.13));N.scale.x=Math.max(1e-4,ae),N.visible=ae>5e-4}),Tt.forEach(({g:N,at:ie})=>{const ae=Rt(he(te,.22+ie*.13,.3+ie*.13));N.visible=ae>.001,N.position.y=(1-ae)*2.2}),vt.opacity=.95*(1-.7*De(he(te,.22,.4)));const w=1-De(he(te,.24,.34));qe.forEach(({mesh:N,at:ie})=>{N.material.opacity=Math.max(De((it-.9-ie*1.2)/.6),he(te,0,.04))*w,N.visible=w>.001});const v=De(he(te,.4,.56));i.lamp.emissiveIntensity=3.2*v,i.screen.emissiveIntensity=.9*v,i.street.emissiveIntensity=1.3*v,Nt.forEach(N=>{N.intensity=N.userData.max*v,N.visible=v>.001}),g.intensity=ze(1.6,.55,v),g.color.copy(Ss).lerp(Ps,v),b.intensity=ze(.55,.2,v),r.environmentIntensity=ze(.35,.15,v),xt.visible=v>.001,Qe.forEach(N=>{N.opacity=N.userData.max*v}),Be.visible=v>.001;const S=De(he(te,.04,.4)),E=De(he(te,.46,.64)),q=1-De(he(te,.04,.14)),X=ms.degToRad(ze(s?66:16,s?54:-10,S)+Math.sin(it*.18)*2.5*q+Xt*4),se=ms.degToRad(ze(s?60:64,s?46:44,S)+Math.cos(it*.15)*1.2*q-Zt*2.5),m=(s?48/Math.max(.42,Re/Ae)**.7:56/Math.min(1,Re/Ae/1.45)**.6)*ze(1,s?.97:.86,S);Mt.set(s?.6:ze(.5,0,S),0,s?3.4:ze(2.6,3.2,S)),_t.set(Math.sin(X)*Math.cos(se)*m,Math.sin(se)*m,Math.cos(X)*Math.cos(se)*m).add(Mt);const L=De(he(te,.4,.52)),U=De(he(te,.5,.64));is.set(-8.4,s?9.5:7.5,6.4),as.set(-6.6,.4,4.6),s?(Ct.set(-11.3,1.7,6.75),$t.set(-6.6,.75,4)):(Ct.set(-10.6,1.62,7.4),$t.set(-5.6,1,4.3)),Ct.x+=Xt*.25,Ct.y-=Zt*.12,_t.lerp(is,L),Mt.lerp(as,L),_t.lerp(Ct,U),Mt.lerp($t,U),u.position.copy(_t),u.lookAt(Mt);const Z=r.fog,K=_t.distanceTo(Mt);Z.near=ze(K*1.1,40,E),Z.far=ze(K*2.6,120,E),u.fov=ze(30,s?66:52,E),u.updateProjectionMatrix();const fe=e?-Re*.2*q:0,ge=e?0:-Ae*.16*q;fe||ge?u.setViewOffset(Re,Ae,fe,ge,Re,Ae):u.clearViewOffset(),ce?ce.render():h.render(r,u)};os();const rs=new ResizeObserver(()=>{os(),at()});return rs.observe(M),window.__hero={set:e=>{te=e,at()},intro:e=>{it=e,at()}},{ready:Promise.resolve().then(at),set(e){te=e,at()},intro(e){it=e,at()},pointer(e,s){Xt=e,Zt=s,at()},dispose(){rs.disconnect(),ce?.dispose(),Te?.dispose(),f.dispose(),o.dispose(),r.traverse(e=>{e.geometry?.dispose()}),Object.values(i).forEach(e=>{e.map?.dispose(),e.dispose()}),h.dispose(),t.remove()}}}export{Ti as mountHero};
