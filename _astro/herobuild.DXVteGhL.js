import{M as Ie,O as yi,e as oi,F as Nt,x as Ce,U as He,y as Me,z as lt,J as ct,K as je,X as _i,j as Ze,V as se,Y as Mi,R as Ut,m as we,Z as Ci,_ as Bt,$ as Vt,a0 as ui,a1 as di,a2 as Ei,a3 as Ri,a4 as Di,a5 as zi,a6 as mi,a7 as Ni,a8 as Ui,A as bi,g as Xt,a9 as Ii,aa as Ai,ab as Fi,ac as Oi,ad as ki,ae as Bi,o as Vi,af as Li,N as Si,ag as Gi,W as Wi,P as ji,S as Hi,a as qi,ah as Xi,p as $i,H as Qi,D as Zi,d as Dt,B as Lt,f as pi,L as vi,b as Gt,i as Yi,G as ii,ai as Ki,k as Ji,l as es,E as ts,Q as is,n as gi,C as ss,I as as,T as os}from"./three.module.BIpL_u75.js";import{m as rs}from"./BufferGeometryUtils.BsaRa83R.js";import{R as ns,a as ls}from"./RoomEnvironment.DTAE0OLq.js";const ht={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ft{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cs=new yi(-1,1,1,-1,0,1);class hs extends oi{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const fs=new hs;class Qt{constructor(t){this._mesh=new Ie(fs,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cs)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class us extends ft{constructor(t,r="tDiffuse"){super(),this.textureID=r,this.uniforms=null,this.material=null,t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=He.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Qt(this.material)}render(t,r,u){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=u.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xi extends ft{constructor(t,r){super(),this.scene=t,this.camera=r,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,r,u){const n=t.getContext(),h=t.state;h.buffers.color.setMask(!1),h.buffers.depth.setMask(!1),h.buffers.color.setLocked(!0),h.buffers.depth.setLocked(!0);let m,g;this.inverse?(m=0,g=1):(m=1,g=0),h.buffers.stencil.setTest(!0),h.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),h.buffers.stencil.setFunc(n.ALWAYS,m,4294967295),h.buffers.stencil.setClear(g),h.buffers.stencil.setLocked(!0),t.setRenderTarget(u),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),h.buffers.color.setLocked(!1),h.buffers.depth.setLocked(!1),h.buffers.color.setMask(!0),h.buffers.depth.setMask(!0),h.buffers.stencil.setLocked(!1),h.buffers.stencil.setFunc(n.EQUAL,1,4294967295),h.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),h.buffers.stencil.setLocked(!0)}}class ds extends ft{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ms{constructor(t,r){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),r===void 0){const u=t.getSize(new Me);this._width=u.width,this._height=u.height,r=new lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ct}),r.texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new us(ht),this.copyPass.material.blending=je,this.timer=new _i}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,r){this.passes.splice(r,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const r=this.passes.indexOf(t);r!==-1&&this.passes.splice(r,1)}isLastEnabledPass(t){for(let r=t+1;r<this.passes.length;r++)if(this.passes[r].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const r=this.renderer.getRenderTarget();let u=!1;for(let n=0,h=this.passes.length;n<h;n++){const m=this.passes[n];if(m.enabled!==!1){if(m.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),m.render(this.renderer,this.writeBuffer,this.readBuffer,t,u),m.needsSwap){if(u){const g=this.renderer.getContext(),_=this.renderer.state.buffers.stencil;_.setFunc(g.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),_.setFunc(g.EQUAL,1,4294967295)}this.swapBuffers()}xi!==void 0&&(m instanceof xi?u=!0:m instanceof ds&&(u=!1))}}this.renderer.setRenderTarget(r)}reset(t){if(t===void 0){const r=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,r){this._width=t,this._height=r;const u=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(u,n),this.renderTarget2.setSize(u,n);for(let h=0;h<this.passes.length;h++)this.passes[h].setSize(u,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ps extends ft{constructor(t,r,u=null,n=null,h=null){super(),this.scene=t,this.camera=r,this.overrideMaterial=u,this.clearColor=n,this.clearAlpha=h,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ze}render(t,r,u){const n=t.autoClear;t.autoClear=!1;let h,m;this.overrideMaterial!==null&&(m=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(h=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:u),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(h),this.overrideMaterial!==null&&(this.scene.overrideMaterial=m),t.autoClear=n}}const Wt={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new we},cameraProjectionMatrixInverse:{value:new we},cameraWorldMatrix:{value:new we},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new se(-1,-1,-1)},sceneBoxMax:{value:new se(1,1,1)}},vertexShader:`

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
		}`},jt={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},si={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function vs(S=5){const t=Math.floor(S)%2===0?Math.floor(S)+1:Math.floor(S),r=gs(t),u=r.length,n=new Uint8Array(u*4);for(let m=0;m<u;++m){const g=r[m],_=2*Math.PI*g/u,w=new se(Math.cos(_),Math.sin(_),0).normalize();n[m*4]=(w.x*.5+.5)*255,n[m*4+1]=(w.y*.5+.5)*255,n[m*4+2]=127,n[m*4+3]=255}const h=new Mi(n,t,t);return h.wrapS=Ut,h.wrapT=Ut,h.needsUpdate=!0,h}function gs(S){const t=Math.floor(S)%2===0?Math.floor(S)+1:Math.floor(S),r=t*t,u=Array(r).fill(0);let n=Math.floor(t/2),h=t-1;for(let m=1;m<=r;){if(n===-1&&h===t?(h=t-2,n=0):(h===t&&(h=0),n<0&&(n=t-1)),u[n*t+h]!==0){h-=2,n++;continue}else u[n*t+h]=m++;h++,n--}return u}const Ht={defines:{SAMPLES:16,SAMPLE_VECTORS:wi(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new we},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function wi(S,t,r){const u=xs(S,t,r);let n="vec3[SAMPLES](";for(let h=0;h<S;h++){const m=u[h];n+=`vec3(${m.x}, ${m.y}, ${m.z})${h<S-1?",":")"}`}return n}function xs(S,t,r){const u=[];for(let n=0;n<S;n++){const h=2*Math.PI*t*n/S,m=Math.pow(n/(S-1),r);u.push(new se(Math.cos(h),Math.sin(h),m))}return u}class Ms{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let r=0;r<256;r++)this.p[r]=Math.floor(t.random()*256);this.perm=[];for(let r=0;r<512;r++)this.perm[r]=this.p[r&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,r){let u,n,h;const m=.5*(Math.sqrt(3)-1),g=(t+r)*m,_=Math.floor(t+g),w=Math.floor(r+g),A=(3-Math.sqrt(3))/6,M=(_+w)*A,he=_-M,te=w-M,ae=t-he,fe=r-te;let be,me;ae>fe?(be=1,me=0):(be=0,me=1);const Y=ae-be+A,K=fe-me+A,q=ae-1+2*A,oe=fe-1+2*A,s=_&255,Z=w&255,re=this.perm[s+this.perm[Z]]%12,W=this.perm[s+be+this.perm[Z+me]]%12,G=this.perm[s+1+this.perm[Z+1]]%12;let F=.5-ae*ae-fe*fe;F<0?u=0:(F*=F,u=F*F*this._dot(this.grad3[re],ae,fe));let L=.5-Y*Y-K*K;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[W],Y,K));let o=.5-q*q-oe*oe;return o<0?h=0:(o*=o,h=o*o*this._dot(this.grad3[G],q,oe)),70*(u+n+h)}noise3d(t,r,u){let n,h,m,g;const w=(t+r+u)*.3333333333333333,A=Math.floor(t+w),M=Math.floor(r+w),he=Math.floor(u+w),te=1/6,ae=(A+M+he)*te,fe=A-ae,be=M-ae,me=he-ae,Y=t-fe,K=r-be,q=u-me;let oe,s,Z,re,W,G;Y>=K?K>=q?(oe=1,s=0,Z=0,re=1,W=1,G=0):Y>=q?(oe=1,s=0,Z=0,re=1,W=0,G=1):(oe=0,s=0,Z=1,re=1,W=0,G=1):K<q?(oe=0,s=0,Z=1,re=0,W=1,G=1):Y<q?(oe=0,s=1,Z=0,re=0,W=1,G=1):(oe=0,s=1,Z=0,re=1,W=1,G=0);const F=Y-oe+te,L=K-s+te,o=q-Z+te,Se=Y-re+2*te,Ee=K-W+2*te,Fe=q-G+2*te,l=Y-1+3*te,P=K-1+3*te,J=q-1+3*te,ue=A&255,pe=M&255,ne=he&255,Oe=this.perm[ue+this.perm[pe+this.perm[ne]]]%12,Ye=this.perm[ue+oe+this.perm[pe+s+this.perm[ne+Z]]]%12,ke=this.perm[ue+re+this.perm[pe+W+this.perm[ne+G]]]%12,Ke=this.perm[ue+1+this.perm[pe+1+this.perm[ne+1]]]%12;let ve=.6-Y*Y-K*K-q*q;ve<0?n=0:(ve*=ve,n=ve*ve*this._dot3(this.grad3[Oe],Y,K,q));let Re=.6-F*F-L*L-o*o;Re<0?h=0:(Re*=Re,h=Re*Re*this._dot3(this.grad3[Ye],F,L,o));let De=.6-Se*Se-Ee*Ee-Fe*Fe;De<0?m=0:(De*=De,m=De*De*this._dot3(this.grad3[ke],Se,Ee,Fe));let de=.6-l*l-P*P-J*J;return de<0?g=0:(de*=de,g=de*de*this._dot3(this.grad3[Ke],l,P,J)),32*(n+h+m+g)}noise4d(t,r,u,n){const h=this.grad4,m=this.simplex,g=this.perm,_=(Math.sqrt(5)-1)/4,w=(5-Math.sqrt(5))/20;let A,M,he,te,ae;const fe=(t+r+u+n)*_,be=Math.floor(t+fe),me=Math.floor(r+fe),Y=Math.floor(u+fe),K=Math.floor(n+fe),q=(be+me+Y+K)*w,oe=be-q,s=me-q,Z=Y-q,re=K-q,W=t-oe,G=r-s,F=u-Z,L=n-re,o=W>G?32:0,Se=W>F?16:0,Ee=G>F?8:0,Fe=W>L?4:0,l=G>L?2:0,P=F>L?1:0,J=o+Se+Ee+Fe+l+P,ue=m[J][0]>=3?1:0,pe=m[J][1]>=3?1:0,ne=m[J][2]>=3?1:0,Oe=m[J][3]>=3?1:0,Ye=m[J][0]>=2?1:0,ke=m[J][1]>=2?1:0,Ke=m[J][2]>=2?1:0,ve=m[J][3]>=2?1:0,Re=m[J][0]>=1?1:0,De=m[J][1]>=1?1:0,de=m[J][2]>=1?1:0,Je=m[J][3]>=1?1:0,qe=W-ue+w,ut=G-pe+w,Be=F-ne+w,St=L-Oe+w,dt=W-Ye+2*w,le=G-ke+2*w,mt=F-Ke+2*w,ge=L-ve+2*w,et=W-Re+3*w,tt=G-De+3*w,it=F-de+3*w,wt=L-Je+3*w,Tt=W-1+4*w,pt=G-1+4*w,st=F-1+4*w,Xe=L-1+4*w,Te=be&255,$e=me&255,Ve=Y&255,at=K&255,It=g[Te+g[$e+g[Ve+g[at]]]]%32,ot=g[Te+ue+g[$e+pe+g[Ve+ne+g[at+Oe]]]]%32,Yt=g[Te+Ye+g[$e+ke+g[Ve+Ke+g[at+ve]]]]%32,At=g[Te+Re+g[$e+De+g[Ve+de+g[at+Je]]]]%32,Kt=g[Te+1+g[$e+1+g[Ve+1+g[at+1]]]]%32;let rt=.6-W*W-G*G-F*F-L*L;rt<0?A=0:(rt*=rt,A=rt*rt*this._dot4(h[It],W,G,F,L));let ze=.6-qe*qe-ut*ut-Be*Be-St*St;ze<0?M=0:(ze*=ze,M=ze*ze*this._dot4(h[ot],qe,ut,Be,St));let nt=.6-dt*dt-le*le-mt*mt-ge*ge;nt<0?he=0:(nt*=nt,he=nt*nt*this._dot4(h[Yt],dt,le,mt,ge));let Le=.6-et*et-tt*tt-it*it-wt*wt;Le<0?te=0:(Le*=Le,te=Le*Le*this._dot4(h[At],et,tt,it,wt));let Qe=.6-Tt*Tt-pt*pt-st*st-Xe*Xe;return Qe<0?ae=0:(Qe*=Qe,ae=Qe*Qe*this._dot4(h[Kt],Tt,pt,st,Xe)),27*(A+M+he+te+ae)}_dot(t,r,u){return t[0]*r+t[1]*u}_dot3(t,r,u,n){return t[0]*r+t[1]*u+t[2]*n}_dot4(t,r,u,n,h){return t[0]*r+t[1]*u+t[2]*n+t[3]*h}}class Ae extends ft{constructor(t,r,u=512,n=512,h,m,g){super(),this.width=u,this.height=n,this.clear=!0,this.camera=r,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vs(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new lt(this.width,this.height,{type:ct,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ce({defines:Object.assign({},Wt.defines),uniforms:He.clone(Wt.uniforms),vertexShader:Wt.vertexShader,fragmentShader:Wt.fragmentShader,blending:je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ci,this.normalMaterial.blending=je,this.pdMaterial=new Ce({defines:Object.assign({},Ht.defines),uniforms:He.clone(Ht.uniforms),vertexShader:Ht.vertexShader,fragmentShader:Ht.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ce({defines:Object.assign({},jt.defines),uniforms:He.clone(jt.uniforms),vertexShader:jt.vertexShader,fragmentShader:jt.fragmentShader,blending:je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ce({uniforms:He.clone(ht.uniforms),vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:di,blendDst:Vt,blendEquation:Bt,blendSrcAlpha:ui,blendDstAlpha:Vt,blendEquationAlpha:Bt}),this.blendMaterial=new Ce({uniforms:He.clone(si.uniforms),vertexShader:si.vertexShader,fragmentShader:si.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ei,blendSrc:di,blendDst:Vt,blendEquation:Bt,blendSrcAlpha:ui,blendDstAlpha:Vt,blendEquationAlpha:Bt}),this._fsQuad=new Qt(null),this._originalClearColor=new Ze,this.setGBuffer(h?h.depthTexture:void 0,h?h.normalTexture:void 0),m!==void 0&&this.updateGtaoMaterial(m),g!==void 0&&this.updatePdMaterial(g)}setSize(t,r){this.width=t,this.height=r,this.gtaoRenderTarget.setSize(t,r),this.normalRenderTarget&&this.normalRenderTarget.setSize(t,r),this.pdRenderTarget.setSize(t,r),this.gtaoMaterial.uniforms.resolution.value.set(t,r),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,r),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,r){if(t!==void 0)this.depthTexture=t,this.normalTexture=r,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const n=new Ri;n.format=Di,n.type=zi,this.normalRenderTarget=new lt(this.width,this.height,{minFilter:mi,magFilter:mi,type:ct,depthTexture:n})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const u=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=u,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=u,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let r=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,r=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,r=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,r=!0),r&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wi(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,r,u){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Ae.OUTPUT.Off:break;case Ae.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=u.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:r);break;case Ae.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:r);break;case Ae.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:r);break;case Ae.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:r);break;case Ae.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:r);break;case Ae.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=u.texture,this.copyMaterial.blending=je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:r),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:r);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,r,u,n,h){t.getClearColor(this._originalClearColor);const m=t.getClearAlpha(),g=t.autoClear;t.setRenderTarget(u),t.autoClear=!1,n!=null&&(t.setClearColor(n),t.setClearAlpha(h||0),t.clear()),this._fsQuad.material=r,this._fsQuad.render(t),t.autoClear=g,t.setClearColor(this._originalClearColor),t.setClearAlpha(m)}_renderOverride(t,r,u,n,h){t.getClearColor(this._originalClearColor);const m=t.getClearAlpha(),g=t.autoClear;t.setRenderTarget(u),t.autoClear=!1,n=r.clearColor||n,h=r.clearAlpha||h,n!=null&&(t.setClearColor(n),t.setClearAlpha(h||0),t.clear()),this.scene.overrideMaterial=r,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=g,t.setClearColor(this._originalClearColor),t.setClearAlpha(m)}_overrideVisibility(){const t=this.scene,r=this._visibilityCache;t.traverse(function(u){(u.isPoints||u.isLine||u.isLine2)&&u.visible&&(u.visible=!1,r.push(u))})}_restoreVisibility(){const t=this._visibilityCache;for(let r=0;r<t.length;r++)t[r].visible=!0;t.length=0}_generateNoise(t=64){const r=new Ms,u=t*t*4,n=new Uint8Array(u);for(let m=0;m<t;m++)for(let g=0;g<t;g++){const _=m,w=g;n[(m*t+g)*4]=(r.noise(_,w)*.5+.5)*255,n[(m*t+g)*4+1]=(r.noise(_+t,w)*.5+.5)*255,n[(m*t+g)*4+2]=(r.noise(_,w+t)*.5+.5)*255,n[(m*t+g)*4+3]=(r.noise(_+t,w+t)*.5+.5)*255}const h=new Mi(n,t,t,Ni,Ui);return h.wrapS=Ut,h.wrapT=Ut,h.needsUpdate=!0,h}}Ae.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const bs={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class bt extends ft{constructor(t,r=1,u,n){super(),this.strength=r,this.radius=u,this.threshold=n,this.resolution=t!==void 0?new Me(t.x,t.y):new Me(256,256),this.clearColor=new Ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let h=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);this.renderTargetBright=new lt(h,m,{type:ct,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let A=0;A<this.nMips;A++){const M=new lt(h,m,{type:ct,depthBuffer:!1});M.texture.name="UnrealBloomPass.h"+A,M.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(M);const he=new lt(h,m,{type:ct,depthBuffer:!1});he.texture.name="UnrealBloomPass.v"+A,he.texture.generateMipmaps=!1,this.renderTargetsVertical.push(he),h=Math.round(h/2),m=Math.round(m/2)}const g=bs;this.highPassUniforms=He.clone(g.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader}),this.separableBlurMaterials=[];const _=[6,10,14,18,22];h=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);for(let A=0;A<this.nMips;A++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(_[A])),this.separableBlurMaterials[A].uniforms.invSize.value=new Me(1/h,1/m),h=Math.round(h/2),m=Math.round(m/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;const w=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=w,this.bloomTintColors=[new se(1,1,1),new se(1,1,1),new se(1,1,1),new se(1,1,1),new se(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=He.clone(ht.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,premultipliedAlpha:!0,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ze,this._oldClearAlpha=1,this._basic=new Xt,this._fsQuad=new Qt(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,r){let u=Math.round(t/2),n=Math.round(r/2);this.renderTargetBright.setSize(u,n);for(let h=0;h<this.nMips;h++)this.renderTargetsHorizontal[h].setSize(u,n),this.renderTargetsVertical[h].setSize(u,n),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/u,1/n),u=Math.round(u/2),n=Math.round(n/2)}render(t,r,u,n,h){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const m=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),h&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=u.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=u.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let g=this.renderTargetBright;for(let _=0;_<this.nMips;_++)this._fsQuad.material=this.separableBlurMaterials[_],this.separableBlurMaterials[_].uniforms.colorTexture.value=g.texture,this.separableBlurMaterials[_].uniforms.direction.value=bt.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[_]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[_].uniforms.colorTexture.value=this.renderTargetsHorizontal[_].texture,this.separableBlurMaterials[_].uniforms.direction.value=bt.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[_]),t.clear(),this._fsQuad.render(t),g=this.renderTargetsVertical[_];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,h&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(u),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=m}_getSeparableBlurMaterial(t){const r=[],u=t/3;for(let m=0;m<t;m++)r.push(.39894*Math.exp(-.5*m*m/(u*u))/u);const n=[],h=[];for(let m=1;m<t;m+=2){const g=r[m],_=m+1<t?r[m+1]:0,w=g+_;n.push((m*g+(m+1)*_)/w),h.push(w)}return new Ce({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},centerWeight:{value:r[0]},gaussianOffsets:{value:n},gaussianWeights:{value:h}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}bt.BlurDirectionX=new Me(1,0);bt.BlurDirectionY=new Me(0,1);const qt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ss extends ft{constructor(){super(),this.isOutputPass=!0,this.uniforms=He.clone(qt.uniforms),this.material=new Ii({name:qt.name,uniforms:this.uniforms,vertexShader:qt.vertexShader,fragmentShader:qt.fragmentShader}),this._fsQuad=new Qt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,r,u){this.uniforms.tDiffuse.value=u.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ai.getTransfer(this._outputColorSpace)===Fi&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oi?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ki?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bi?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Li?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Si?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gi&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Zt=S=>Math.min(Math.max(S,0),1),ce=(S,t,r)=>Zt((S-t)/(r-t)),ye=S=>(S=Zt(S),S*S*S*(S*(S*6-15)+10)),zt=S=>1-Math.pow(1-Zt(S),3),_e=(S,t,r)=>S+(t-S)*r,ai="#030d19",Q=2.7,U=-12,I=12,E=-2.2,T=8,xe=1.8,ie=3.6;let $t=7;const H=()=>($t=$t*16807%2147483647,($t-1)/2147483646);function Ge(S,t,r,u=!0){const n=document.createElement("canvas");n.width=S,n.height=t,r(n.getContext("2d"));const h=new Ji(n);return h.wrapS=h.wrapT=Ut,h.anisotropy=8,u&&(h.colorSpace=es),h}const We=(S,t,r,u,n,h=!1)=>{for(let m=0;m<u;m++)S.fillStyle=`rgba(${h?"255,255,255":"0,0,0"},${(H()*n).toFixed(3)})`,S.fillRect(H()*t,H()*r,1+H()*2,1+H()*2)};function ys(S){$t=7;const t=document.createElement("canvas");t.className="h3-canvas",t.setAttribute("aria-hidden","true"),S.prepend(t);const r=innerWidth<768,u=new Wi({canvas:t,antialias:r,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__recording});u.setPixelRatio(Math.min(devicePixelRatio,r?1.6:1.5)),u.setClearColor(ai,1),u.toneMapping=Si,u.toneMappingExposure=1,u.shadowMap.enabled=!0,u.shadowMap.type=ji;const n=new Hi,h=new qi(u),m=h.fromScene(new ns,.04);n.environment=m.texture,n.environmentIntensity=.35,n.fog=new Xi(ai,60,140);const g=new $i(30,1,.3,300),_=new Qi("#e4eefb","#0b2448",.55);n.add(_);const w=new Zi("#fff3e3",1.6);w.position.set(-16,26,18),w.target.position.set(0,0,3),n.add(w.target),w.castShadow=!0;const A=r?2048:4096;w.shadow.mapSize.set(A,A),Object.assign(w.shadow.camera,{left:-22,right:22,top:18,bottom:-18,near:2,far:80}),w.shadow.bias=-2e-4,w.shadow.normalBias=.025,n.add(w);const M=(e,i={})=>new Dt({color:e,roughness:.75,...i}),he=Ge(1024,1024,e=>{for(let f=0;f<8;f++){let d=-H()*400;for(;d<1024;){const x=260+H()*380,p=.86+H()*.22;e.fillStyle=`rgb(${Math.round(196*p)},${Math.round(160*p)},${Math.round(116*p)})`,e.fillRect(d,f*128,x,128);for(let v=0;v<9;v++){e.strokeStyle=`rgba(90,60,30,${.05+H()*.07})`,e.lineWidth=1+H()*2,e.beginPath();const y=f*128+H()*128;e.moveTo(d,y),e.bezierCurveTo(d+x*.3,y+(H()-.5)*10,d+x*.6,y+(H()-.5)*10,d+x,y),e.stroke()}e.fillStyle="rgba(60,40,20,0.35)",e.fillRect(d,f*128,2,128),d+=x}e.fillStyle="rgba(60,40,20,0.3)",e.fillRect(0,f*128,1024,2)}}),te=Ge(512,512,e=>{e.fillStyle="#d6d9dc",e.fillRect(0,0,512,512),We(e,512,512,9e3,.06),We(e,512,512,3e3,.25,!0),e.fillStyle="rgba(0,0,0,0.07)";for(let i=0;i<4;i++)e.fillRect(0,i*128,512,1.5)}),ae=Ge(512,512,e=>{e.fillStyle="#eef0f1",e.fillRect(0,0,512,512),We(e,512,512,3e3,.04),e.fillStyle="#b9bfc5";for(let i=0;i<=8;i++)e.fillRect(i*64-1,0,2,512),e.fillRect(0,i*64-1,512,2)}),fe=Ge(512,512,e=>{e.fillStyle="#6d7785",e.fillRect(0,0,512,512),We(e,512,512,14e3,.12),We(e,512,512,5e3,.12,!0),e.fillStyle="rgba(30,35,40,0.45)",e.fillRect(0,0,512,3),e.fillRect(0,0,3,512)}),be=Ge(512,512,e=>{e.fillStyle="#0e1a2b",e.fillRect(0,0,512,512),We(e,512,512,16e3,.12,!0),We(e,512,512,8e3,.3)}),me=e=>Ge(620,820,i=>{i.fillStyle="#f7f5f0",i.fillRect(0,0,620,820);const a=78,f=620-a*2,d=820-a*2;i.save(),i.translate(a,a),i.beginPath(),i.rect(0,0,f,d),i.clip(),e(i,f,d),i.restore(),i.strokeStyle="rgba(40,36,30,0.16)",i.lineWidth=2,i.strokeRect(a-1,a-1,f+2,d+2),We(i,620,820,2200,.03)}),Y=me((e,i,a)=>{e.fillStyle="#efe6d8",e.fillRect(0,0,i,a),e.fillStyle="#c98f52",e.beginPath(),e.arc(i*.52,a*.44,i*.21,0,Math.PI*2),e.fill(),e.fillStyle="#8a6a4a",e.beginPath(),e.moveTo(0,a),e.lineTo(0,a*.72),e.bezierCurveTo(i*.26,a*.46,i*.46,a*.52,i*.62,a),e.closePath(),e.fill(),e.fillStyle="#5e4b39",e.beginPath(),e.moveTo(i*.34,a),e.bezierCurveTo(i*.62,a*.58,i*.82,a*.66,i,a*.84),e.lineTo(i,a),e.closePath(),e.fill(),e.strokeStyle="rgba(60,48,36,0.3)",e.lineWidth=3;for(let f=1;f<5;f++)e.beginPath(),e.moveTo(0,a*.14+f*9),e.lineTo(i*.3,a*.14+f*9),e.stroke()}),K=me((e,i,a)=>{e.fillStyle="#f2f1ec",e.fillRect(0,0,i,a),e.strokeStyle="#5c7360",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(i*.5,a),e.bezierCurveTo(i*.42,a*.6,i*.58,a*.4,i*.5,a*.1),e.stroke();for(let f=0;f<9;f++){const d=.12+f*.09,x=a*(1-d*.92),p=f%2?1:-1,v=i*(.3-f*.022);e.fillStyle=f%3===0?"#7f9a7d":"#5c7360",e.beginPath(),e.moveTo(i*.5,x),e.quadraticCurveTo(i*.5+p*v*.6,x-a*.055,i*.5+p*v,x-a*.02),e.quadraticCurveTo(i*.5+p*v*.5,x+a*.03,i*.5,x),e.fill()}}),q=me((e,i,a)=>{const f=[[.3,"#e6dccb"],[.17,"#b9743f"],[.26,"#8d9a94"],[.27,"#3f4a52"]];let d=0;for(const[x,p]of f)e.fillStyle=p,e.fillRect(0,d,i,a*x+1),d+=a*x;e.fillStyle="rgba(247,245,240,0.9)",e.fillRect(i*.62,0,3,a)}),oe=Ge(512,512,e=>{e.fillStyle="#e7e3d9",e.fillRect(0,0,512,512);for(let i=0;i<8;i++)for(let a=0;a<8;a++){const f=.94+H()*.1;e.fillStyle=`rgb(${Math.round(226*f)},${Math.round(220*f)},${Math.round(208*f)})`,e.fillRect(a*64+2,i*64+2,60,60)}We(e,512,512,1200,.03)}),s={card:M("#eef1f5",{roughness:.92}),wall:M("#f5f6f8",{roughness:.9}),poche:M("#0d3366",{roughness:.8}),slab:M("#123a6a",{roughness:.95}),oak:M("#ffffff",{map:he,roughness:.55}),lvt:M("#ffffff",{map:te,roughness:.6}),tile:M("#ffffff",{map:ae,roughness:.35}),conc:M("#ffffff",{map:fe,roughness:.95}),asph:M("#ffffff",{map:be,roughness:.95}),timber:M("#b98a5c",{roughness:.55}),walnut:M("#6b4a32",{roughness:.5}),quartz:M("#f4f3ef",{roughness:.22}),lam:M("#e9e6df",{roughness:.45}),splash:M("#ffffff",{map:oe,roughness:.3}),blue:M("#1a73bb",{roughness:.7}),navyFab:M("#22344d",{roughness:.85}),sage:M("#8fa596",{roughness:.85}),vinyl:M("#3b4a5c",{roughness:.45}),white:M("#fbfbfa",{roughness:.35}),metal:M("#2a3038",{roughness:.35,metalness:.7}),chrome:M("#d9dee3",{roughness:.18,metalness:1}),frame:M("#30363e",{roughness:.4,metalness:.5}),screen:M("#0b1726",{roughness:.2,emissive:"#3d7fd0",emissiveIntensity:0}),leaf:M("#3d6a49",{roughness:.85}),leaf2:M("#5f8c58",{roughness:.85}),leaf3:M("#7a9e6a",{roughness:.85}),bark:M("#4a3a2c",{roughness:.9}),pot:M("#d9d4cc",{roughness:.9}),soil:M("#3a2d22",{roughness:1}),rug:M("#b9c3cf",{roughness:1}),art:M("#1a73bb",{roughness:.6}),art2:M("#d9a46b",{roughness:.6}),print1:M("#ffffff",{map:Y,roughness:.75}),print2:M("#ffffff",{map:K,roughness:.75}),print3:M("#ffffff",{map:q,roughness:.75}),lamp:M("#ffffff",{emissive:"#ffd8a6",emissiveIntensity:0,roughness:.4}),shade:M("#1d232b",{roughness:.4,metalness:.4}),street:M("#2c3642",{emissive:"#ffe3b8",emissiveIntensity:0,roughness:.5}),line:M("#7f93ad",{roughness:.8}),glass:new Dt({color:"#9fc0e0",roughness:.04,metalness:.3,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:1.6}),frost:new Dt({color:"#f4f7fa",roughness:.6,transparent:!0,opacity:0,depthWrite:!1})},Z={},re=e=>Z[e]??={g:new ii,b:new Map},W=e=>{const i=e.index?e.toNonIndexed():e;for(const a of Object.keys(i.attributes))["position","normal","uv"].includes(a)||i.deleteAttribute(a);return i.attributes.uv||i.setAttribute("uv",new Nt(new Float32Array(i.attributes.position.count*2),2)),i.clearGroups(),i},G=new Map,F=(e,i)=>{let a=G.get(e);return a||(a=W(i()),G.set(e,a)),a},L=(e,i,a,f)=>{const d=re(e).b,x=d.get(a)??[];x.push(i.clone().applyMatrix4(f)),d.set(a,x)},o=(e,i,a=0,f=0)=>new we().makeRotationY(a).setPosition(e,f,i),Se=new we,Ee=new we,Fe=new ts,l=(e,i,a,f,d,x,p,v,y,O=0,k=0,j=0,b=0)=>{const c=Math.min(O,a/2-.001,f/2-.001,d/2-.001),z=c>.002?F(`r${a.toFixed(3)}_${f.toFixed(3)}_${d.toFixed(3)}_${c.toFixed(3)}`,()=>new ls(a,f,d,2,c)):F(`b${a.toFixed(3)}_${f.toFixed(3)}_${d.toFixed(3)}`,()=>new Lt(a,f,d));Ee.makeRotationFromEuler(Fe.set(k,b,j)),Se.copy(i).multiply(new we().makeTranslation(x,p+f/2,v)).multiply(Ee),L(e,z,y,Se)},P=(e,i,a,f,d,x,p,v,y,O=16,k=0,j=0)=>{const b=F(`c${a}_${f}_${d}_${O}`,()=>new ss(a,f,d,O));Ee.makeRotationFromEuler(Fe.set(k,0,j)),Se.copy(i).multiply(new we().makeTranslation(x,p+d/2,v)).multiply(Ee),L(e,b,y,Se)},J=(e,i,a,f,d,x,p,v=1,y=1,O=1,k=1)=>{const j=F(`i${a}_${k}`,()=>new as(a,k));Se.copy(i).multiply(new we().compose(new se(f,d,x),new is().setFromEuler(Fe.set(H()*3,H()*3,0)),new se(v,y,O))),L(e,j,p,Se)},ue=(e,i,a)=>{l(e,i,.5,.09,.48,0,.42,0,a,.035),l(e,i,.5,.44,.07,0,.5,-.22,a,.03,-.12);for(const[f,d]of[[-.21,-.19],[.21,-.19],[-.21,.19],[.21,.19]])P(e,i,.014,.014,.42,f,0,d,s.metal,6)},pe=(e,i,a=1)=>{P(e,i,.2*a,.16*a,.42*a,0,0,0,s.pot,20),P(e,i,.18*a,.18*a,.02,0,.4*a,0,s.soil,16),P(e,i,.012,.016,.7*a,0,.4*a,0,s.walnut,5);for(let f=0;f<9;f++){const d=f/9*Math.PI*2,x=.12+H()*.16,p=.75+H()*.75;J(e,i,.13*a,Math.cos(d)*x*a,p*a,Math.sin(d)*x*a,[s.leaf,s.leaf2,s.leaf3][f%3],1,.55+H()*.3,1.5,2)}},ne=(e,i,a,f,d,x=0)=>{const p=new we().copy(i).multiply(o(a,f,x,d));l(e,p,.56,.34,.025,0,.12,0,s.screen,.008),l(e,p,.04,.14,.03,0,0,-.03,s.metal),l(e,p,.2,.012,.16,0,0,-.02,s.metal,.005)},Oe=(e,i)=>{l(e,i,.5,.08,.48,0,.46,0,s.navyFab,.035),l(e,i,.46,.5,.06,0,.58,-.24,s.navyFab,.03,-.1),P(e,i,.025,.025,.36,0,.1,0,s.metal,8);for(let a=0;a<5;a++)l(e,i,.03,.03,.3,0,.06,0,s.metal,0,0,0,a/5*Math.PI*2)},Ye=(e,i,a=1.5,f=.7)=>{l(e,i,a,.035,f,0,.72,0,s.lam,.01),l(e,i,.03,.72,f-.08,-a/2+.06,0,0,s.metal),l(e,i,.03,.72,f-.08,a/2-.06,0,0,s.metal),l(e,i,a-.14,.3,.02,0,.4,-f/2+.06,s.metal)},ke=(e,i,a,f=0,d=!0)=>{const x=Math.max(1,Math.round(a/.6)),p=a/x;l(e,i,a,.1,.5,0,0,-.02,s.metal),l(e,i,a,.78,.56,0,.1,-.01,s.white);for(let v=0;v<x;v++)l(e,i,p-.012,.76,.02,-a/2+p*(v+.5),.11,.275,s.white,.004);if(l(e,i,a+.02,.035,.62,0,.88,.02,s.quartz,.008),f!==null&&(l(e,i,.46,.02,.36,f,.902,.02,s.chrome,.01),P(e,i,.012,.012,.3,f,.91,-.22,s.chrome,8),l(e,i,.025,.025,.16,f,1.19,-.15,s.chrome,.01)),d)for(let v=0;v<x;v++)l(e,i,p-.012,.72,.34,-a/2+p*(v+.5),1.5,-.12,s.white,.006)},Ke=(e,i)=>{l(e,i,.62,.62,1.4,0,0,.1,s.white,.03),l(e,i,.7,.1,1.3,0,.62,.2,s.vinyl,.045),l(e,i,.7,.1,.62,0,.74,-.68,s.vinyl,.045,.45),l(e,i,.52,.006,1.25,0,.725,.2,s.white),P(e,i,.06,.06,.6,0,.66,-1.05,s.white,12,0,Math.PI/2),l(e,i,.5,.06,.28,0,.32,.86,s.metal,.02)},ve=(e,i)=>{P(e,i,.2,.2,.08,0,.52,0,s.vinyl,20),P(e,i,.025,.03,.46,0,.06,0,s.chrome,8);for(let a=0;a<5;a++)l(e,i,.025,.025,.26,0,.04,0,s.metal,0,0,0,a/5*Math.PI*2)},Re=(e,i)=>{l(e,i,.6,.1,.9,0,0,.2,s.white,.04),l(e,i,.32,.45,.4,0,.1,.2,s.white,.08),l(e,i,.62,.14,.75,0,.55,.25,s.blue,.06),l(e,i,.56,.12,.75,0,.5,.9,s.blue,.055,-.25),l(e,i,.58,.13,.8,0,.78,-.42,s.blue,.06,.95),l(e,i,.3,.1,.24,0,1.12,-.83,s.blue,.045,1.2),l(e,i,.08,.06,.5,-.36,.72,.2,s.white,.025),l(e,i,.08,.06,.5,.36,.72,.2,s.white,.025),P(e,i,.04,.04,.6,.52,.1,-.1,s.white,10),l(e,i,.08,.05,.6,.52,.7,.18,s.white,.02),l(e,i,.5,.05,.34,.52,.76,.5,s.white,.02);for(let a=0;a<5;a++)P(e,i,.008,.008,.16,.4+a*.06,.8,.44,s.chrome,5,Math.PI/2.4);P(e,i,.045,.045,1.5,-.55,.1,-.7,s.white,12),l(e,i,.06,.06,.7,-.55,1.62,-.38,s.white,.02,.2),l(e,i,.44,.1,.18,-.45,1.5,-.1,s.white,.04,.5),l(e,i,.36,.02,.12,-.45,1.48,-.08,s.lamp,0,.5),ne(e,i,-.55,-.4,1.7,Math.PI*.15)},De=(e,i,a,f)=>{const d=new we().copy(i).multiply(o(0,0,f));l(e,d,a-.04,2.1,.045,(a-.04)/2,0,0,s.timber,.008),l(e,d,.02,.02,.14,a-.14,1.02,0,s.chrome)},de=(e,i,a,f=.9,d=.22)=>{const x=o(i,a);P(e,x,.004,.004,f,0,Q-f,0,s.metal,4),P(e,x,.05,d,.24,0,Q-f-.24,0,s.shade,24),P(e,x,d*.92,d*.92,.01,0,Q-f-.245,0,s.lamp,24)},Je=[{key:"lobby",name:"Reception",x0:U,z0:ie,x1:1,z1:T,floor:s.oak,sq:!0},{key:"op1",name:"Dental 1",x0:1,z0:ie,x1:6.5,z1:T,floor:s.lvt,sq:!0},{key:"op2",name:"Dental 2",x0:6.5,z0:ie,x1:I,z1:T,floor:s.lvt,sq:!0},{key:"corr",name:"",x0:U,z0:xe,x1:I,z1:ie,floor:s.lvt},{key:"staff",name:"Staff",x0:U,z0:E,x1:-8.5,z1:xe,floor:s.lvt,sq:!0},{key:"wash",name:"Washroom",x0:-8.5,z0:E,x1:-6,z1:xe,floor:s.tile},{key:"office",name:"Office",x0:-6,z0:E,x1:-3,z1:xe,floor:s.oak,sq:!0},{key:"ex1",name:"Exam 1",x0:-3,z0:E,x1:.5,z1:xe,floor:s.lvt,sq:!0},{key:"ex2",name:"Exam 2",x0:.5,z0:E,x1:4,z1:xe,floor:s.lvt,sq:!0},{key:"ex3",name:"Exam 3",x0:4,z0:E,x1:7.5,z1:xe,floor:s.lvt,sq:!0},{key:"proc",name:"Procedure",x0:7.5,z0:E,x1:I,z1:xe,floor:s.lvt,sq:!0}],qe=e=>Zt((e-U)/(I-U));l("shell",o(0,0),I-U+.5,.18,T-E+.5,0,-.18,(E+T)/2,s.slab);const ut=[];for(const e of Je){const i=e.x1-e.x0,a=e.z1-e.z0,f=new Lt(i,.02,a);f.translate(i/2,.01,0);const d=f.attributes.uv,x=f.attributes.position,p=e.floor===s.oak?3.2:e.floor===s.tile?2.4:4;for(let y=0;y<d.count;y++)d.setXY(y,(x.getX(y)+e.x0)/p,(x.getZ(y)+(e.z0+e.z1)/2)/p);const v=new Ie(f,e.floor);v.position.set(e.x0,0,(e.z0+e.z1)/2),v.receiveShadow=!0,n.add(v),ut.push({mesh:v,at:qe(e.x0)})}const Be=e=>Math.min(5,Math.floor(qe(e)*6)),St=[0,1,2,3,4,5].map(e=>re(`wall${e}`).g),dt=[],le=(e,i,a,f)=>dt.push(e,.03,i,a,.03,f),mt=[],ge=(e,i,a,f,d,x=[])=>{const p=i===f,v=Math.abs(p?a-e:f-i),y=p?Math.min(e,a):Math.min(i,f),O=x.map(([b,c])=>[b-c/2,b+c/2]).sort((b,c)=>b[0]-c[0]);let k=y;const j=[];for(const[b,c]of O)b>k&&j.push([k,b]),k=c;k<y+v&&j.push([k,y+v]);for(const[b,c]of j){const z=(b+c)/2,C=c-b,B=p?z:e,N=p?i:z,V=`wall${Be(B)}`,D=p?C:d,R=p?d:C;l(V,o(B,N),D,Q-.02,R,0,0,0,s.wall),l(V,o(B,N),D+.002,.02,R+.002,0,Q-.02,0,s.poche),p?(le(b,i-d/2,c,i-d/2),le(b,i+d/2,c,i+d/2),le(b,i-d/2,b,i+d/2),le(c,i-d/2,c,i+d/2)):(le(e-d/2,b,e-d/2,c),le(e+d/2,b,e+d/2,c),le(e-d/2,b,e+d/2,b),le(e-d/2,c,e+d/2,c))}for(const[b,c,z]of x){const C=p?b:e,B=p?i:b,N=`wall${Be(C)}`;l(N,o(C,B),p?c:d,Q-2.14,p?d:c,0,2.12,0,s.wall),l(N,o(C,B),(p?c:d)+.002,.02,(p?d:c)+.002,0,Q-.02,0,s.poche);const V=p?b-c/2:e,D=p?i:b-c/2,R=p?0:-Math.PI/2,X=R-z*1.25*(p?1:-1);mt.push({grp:`door${Be(C)}`,f:o(V,D),w:c,ang:X});const $=c-.04,Mt=10;for(let kt=0;kt<Mt;kt++){const hi=R+(X-R)*kt/Mt,fi=R+(X-R)*(kt+1)/Mt;le(V+Math.cos(hi)*$,D-Math.sin(hi)*$,V+Math.cos(fi)*$,D-Math.sin(fi)*$)}le(V,D,V+Math.cos(X)*$,D-Math.sin(X)*$)}};ge(U,E,I,E,.25),ge(U,E,U,T,.25),ge(I,E,I,T,.25),ge(U,xe,I,xe,.12,[[-9.6,.95,-1],[-7.3,.9,-1],[-4.6,.95,-1],[-1.3,.95,-1],[2.2,.95,-1],[5.7,.95,-1],[9.2,1.2,-1]]),ge(U,ie,-3,ie,.12),ge(1,ie,I,ie,.12,[[1.75,.95,1],[7.25,.95,1]]);for(const e of[-8.5,-6,-3,.5,4,7.5])ge(e,E,e,xe,.12);ge(1,ie,1,T,.12),ge(6.5,ie,6.5,T,.12);const et=[U,-4,4,I],tt=[E,T];for(const e of et)for(const i of tt)l(`wall${Be(e)}`,o(e,i),.45,Q-.02,.45,0,0,0,s.card),l(`wall${Be(e)}`,o(e,i),.452,.02,.452,0,Q-.02,0,s.poche);for(let e=0;e<=14;e++)l("store",o(U+.25+e*(I-U-.5)/14,T),.06,Q,.14,0,0,0,s.frame);l("store",o(0,T),I-U,.08,.14,0,2.3,0,s.frame),l("store",o(0,T),I-U,.12,.14,0,0,0,s.frame),l("store",o(0,T),I-U,Q-.02,.012,0,.02,0,s.glass),l("store",o((1+I)/2,T-.03),I-1,.9,.012,0,.9,0,s.frost);const it=-7.6;for(const e of[-1,1])l("store",o(it+e*.48,T+.09),.9,2.18,.04,0,.02,0,s.glass),l("store",o(it+e*.08,T+.14),.03,1.2,.03,0,.5,0,s.chrome);l("store",o(it,T+.65),3.6,.08,1.3,0,2.62,0,s.white,.02);for(const e of[2.4,7.9])l("store",o(e+1.4,ie),2.6,1.6,.03,0,.9,0,s.glass);le(U,T,I,T),le(U,T+.14,I,T+.14);{const e="lobby";for(let p=-.75;p<=.75+1e-6;p+=.035){const v=-7.6+Math.sin(p)*1.9,y=4.25+Math.cos(p)*1.9*.48;l(e,o(v,y,p*.6),.045,1.04,.07,0,.04,0,s.timber,.008)}l(e,o(-7.6,4.25+.4),3.2,1,.45,0,.04,0,s.white,.02);for(let p=-.75;p<=.75-.05+1e-6;p+=.1){const v=-7.6+Math.sin(p+.05)*1.9,y=4.25+Math.cos(p+.05)*1.9*.48-.1;l(e,o(v,y,(p+.05)*.6),.4,.04,.34,0,1.08,0,s.quartz,.01)}l(e,o(-7.6,4.25+.3),3.1,.035,.6,0,.74,0,s.quartz,.01),ne(e,o(-7.6-.8,4.25+.42,Math.PI),0,0,.775),ne(e,o(-7.6+.8,4.25+.42,Math.PI),0,0,.775),Oe(e,o(-7.6-.8,4.25-.15,Math.PI)),Oe(e,o(-7.6+.8,4.25-.15,Math.PI));for(let p=U+.4;p<-3.2;p+=.11)l(e,o(p,ie+.09),.05,Q-.1,.05,0,.02,0,s.timber,.006);l(e,o(-7.6,ie+.16),2.4,.5,.05,0,1.55,0,s.quartz,.01),l(e,o(-7.6,ie+.19),2.2,.012,.012,0,1.58,0,s.lamp);{const v=-Math.PI/2,y=6.9,O=1.9,k=.56,j=.94-k/2;l(e,o(j+.05,y,v),O-.3,.13,k-.12,0,0,0,s.metal,.005),l(e,o(j,y,v),O,.12,k,0,.13,0,s.walnut,.008),l(e,o(j-.012,y,v),O-.16,.12,k-.03,0,.25,0,s.navyFab,.05),l(e,o(.94-.07,y,v),O-.16,.42,.12,0,.37,0,s.navyFab,.045),l(e,o(.94-.055,y,v),O,.03,.15,0,.79,0,s.walnut,.008);for(const D of[-1,1])l(e,o(j+.02,y+D*(O/2-.04),v),.07,.79,k-.04,0,0,0,s.walnut,.008);for(const[D,R,X,$,Mt]of[[6.2,s.print1,.52,.68,1.46],[6.9,s.print3,.66,.88,1.52],[7.6,s.print2,.52,.68,1.46]])l(e,o(.94+.01,D,v),X+.07,$+.07,.045,0,Mt,0,s.frame,.004),l(e,o(.94-.018,D,v),X,$,.014,0,Mt,0,R,0);const b=1.9,c=4.72,z=.6,C=.94-z/2,B=C-z/2;l(e,o(.94-.01,c,v),b+.14,.66,.025,0,.9,0,s.splash,.004),l(e,o(C+.07,c,v),b-.18,.11,z-.14,0,0,0,s.metal,.004),l(e,o(C+.02,c,v),b,.74,z-.04,0,.11,0,s.metal,.004);for(const D of[-1,1])l(e,o(B+.014,c+D*(b/4+.018),v),b/2-.054,.66,.028,0,.12,0,s.walnut,.004);for(const D of[-1,1])l(e,o(B+.018,c+D*(b/4+.018),v),b/2-.16,.02,.03,0,.76,0,s.chrome,.004);l(e,o(C-.02,c,v),b+.05,.04,z+.04,0,.85,0,s.quartz,.006),l(e,o(B-.017,c,v),b+.05,.08,.03,0,.77,0,s.quartz,.004);const N=c-.6,V=C+.06;l(e,o(V,N,v),.44,.33,.36,0,.89,0,s.metal,.02),l(e,o(V,N,v),.4,.05,.32,0,1.22,0,s.chrome,.012);for(const D of[-.1,.03,.14])P(e,o(V,N+D,v),.036,.03,.07,0,1.27,0,s.white,12);l(e,o(V-.21,N-.07,v),.11,.11,.1,0,.98,0,s.chrome,.014),P(e,o(V-.25,N-.07,v),.03,.026,.05,0,.93,0,s.chrome,12),P(e,o(V-.33,N-.07,v),.013,.013,.12,0,.955,0,s.walnut,8,0,Math.PI/2),P(e,o(V-.17,N+.14,v),.009,.009,.18,0,.9,0,s.chrome,8,.3),l(e,o(V-.18,N-.07,v),.16,.014,.16,0,.885,0,s.chrome,.004),l(e,o(V+.04,N+.4,v),.16,.4,.18,0,.89,0,s.metal,.016),P(e,o(V+.04,N+.4,v),.07,.09,.16,0,1.29,0,s.chrome,16),l(e,o(C-.04,c+.5,v),.24,.022,.32,0,.885,0,s.timber,.005);for(const[D,R]of[[-.06,.42],[.03,.42],[-.06,.58],[.03,.58]])P(e,o(C+D,c+R,v),.036,.03,.07,0,.907,0,s.white,12);P(e,o(C-.03,c+.78,v),.07,.058,.24,0,.89,0,s.frost,16),P(e,o(C+.12,c+.78,v),.05,.05,.14,0,.89,0,s.walnut,14),l(e,o(.94-.18,c,v),b+.02,.5,.3,0,1.6,0,s.lam,.006),l(e,o(.94-.18,c,v),b+.02,.028,.32,0,2.1,0,s.timber,.006),l(e,o(.94-.16,c,v),b+.06,.035,.34,0,1.56,0,s.timber,.006),l(e,o(.94-.32,c,v),b-.1,.014,.014,0,1.545,0,s.lamp);for(const D of[-.64,-.44,-.25])P(e,o(.94-.2,c+D,v),.045,.04,.08,0,.907,0,s.white,12);for(const D of[.26,.42,.58])l(e,o(.94-.19,c+D,v),.1,.15,.03,0,.907,0,D>.5?s.walnut:s.sage,.004);de(e,B+.1,c-.44,.9,.17),de(e,B+.1,c+.48,.9,.17)}pe(e,o(-10.9,7.4),1.2),pe(e,o(-4.6,7.5),1),pe(e,o(-11.4,4.3),.9),l(e,o(-5.4,7.7),1.6,.9,.36,0,0,0,s.white,.02),l(e,o(-5.4,7.7),1.62,.03,.38,0,.9,0,s.timber,.01),de(e,-7.6-1,4.25+.3),de(e,-7.6,4.25+.4),de(e,-7.6+1,4.25+.3)}for(const[e,i,a]of[["op1",1,6.5],["op2",6.5,I]]){const f=(i+a)/2;Re(e,o(f,5.9,Math.PI)),ke(e,o(f+.3,ie+.36),a-i-1.6,.6),ve(e,o(f+.7,5.3)),ve(e,o(f-.75,5.5)),l(e,o(f-1.7,6.9),.5,.75,.45,0,0,0,s.white,.03),l(e,o(a-.4,6.3,-Math.PI/2),1.8,.88,.5,0,0,0,s.white,.02),l(e,o(a-.4,6.3,-Math.PI/2),1.82,.03,.52,0,.88,0,s.quartz,.008),ne(e,o(a-.45,6.6,-Math.PI/2),0,0,.91),pe(e,o(i+.45,7.5),.8)}for(const[e,i,a]of[["ex1",-3,.5],["ex2",.5,4],["ex3",4,7.5]])Ke(e,o(i+.5,-.5,Math.PI)),ke(e,o((i+a)/2+.3,E+.42),2.1,.2),Ye(e,o(a-.45,.45,Math.PI/2),1.3,.6),ne(e,o(a-.3,.45,-Math.PI/2),0,0,.755),Oe(e,o(a-1,.45,Math.PI/2)),ue(e,o(a-1.1,1.3,Math.PI*.8),s.sage),ve(e,o(i+1.4,.5)),l(e,o(i+.08,.95,Math.PI/2),.5,.36,.06,0,1.3,0,s.white,.01),l(e,o((i+a)/2+.6,xe-.08),.5,.7,.03,0,1.2,0,s.art2,.008);{const e="proc";Ke(e,o(9.75,-.1,Math.PI/2)),ke(e,o(9.75,E+.42),3.6,-.9),P(e,o(9.75,-.1),.03,.03,.55,0,Q-.55,0,s.white,8),l(e,o(9.75,-.1),.08,.08,.9,0,Q-.6,.38,s.white,.02,.6),P(e,o(9.75,.55),.34,.26,.14,0,1.75,0,s.white,28),P(e,o(9.75,.55),.24,.24,.01,0,1.745,0,s.lamp,28),l(e,o(I-.5,1.05),.55,.9,.5,0,0,0,s.white,.03),l(e,o(9.75-1.7,1.15),.55,.9,.5,0,0,0,s.white,.03),ve(e,o(9.75+1.2,.8)),ne(e,o(I-.5,1.05,-Math.PI/2),0,0,.9)}{const e="office";Ye(e,o(-4.5,-.9),1.8,.75),ne(e,o(-4.85,-1.12),0,0,.755),ne(e,o(-4.15,-1.12),0,0,.755),Oe(e,o(-4.5,-1.55)),ue(e,o(-4.9,.05,Math.PI),s.navyFab),ue(e,o(-4.1,.05,Math.PI),s.navyFab),l(e,o(-5.76,-.4,Math.PI/2),1.6,2,.36,0,0,0,s.walnut,.01);for(let i=0;i<4;i++)l(e,o(-5.57,-.4,Math.PI/2),1.5,.3,.02,0,.1+i*.47,0,s.white);pe(e,o(-3.45,-1.75),.9)}{const e="staff";l(e,o(-10.3,-.1),1.6,.04,.9,0,.72,0,s.walnut,.015),P(e,o(-10.3,-.1),.04,.04,.72,0,0,0,s.metal,8),P(e,o(-10.3,-.1),.3,.3,.02,0,0,0,s.metal,20),ue(e,o(-10.75,.6,Math.PI),s.blue),ue(e,o(-9.85,.6,Math.PI),s.blue),ue(e,o(-10.75,-.8),s.blue),ue(e,o(-9.85,-.8),s.blue),ke(e,o(-10.6,E+.42),2.4,-.5),l(e,o(-8.95,E+.5),.75,2,.66,0,0,0,s.chrome,.03),de(e,-10.3,-.1,1,.18)}{const e="wash";l(e,o(-7.25,E+.55),.4,.38,.6,0,0,.1,s.white,.12),l(e,o(-7.25,E+.2),.4,.7,.15,0,.25,0,s.white,.04),l(e,o(-6.35,.6,-Math.PI/2),.9,.06,.5,0,.84,0,s.quartz,.02),l(e,o(-6.35,.6,-Math.PI/2),.4,.1,.3,0,.8,.02,s.white,.04),l(e,o(-6.08,.6,-Math.PI/2),.7,.8,.02,0,1.15,0,s.chrome,.01),l(e,o(-8.38,-.9,Math.PI/2),.9,.035,.035,0,.85,.06,s.chrome,.015)}for(const e of[xe+.08,ie-.08])l("corr",o(0,e),I-U-.6,.025,.025,0,Q-.09,0,s.lamp);l("lobby",o(-7.6,ie+.14),8.4,.025,.025,0,Q-.09,0,s.lamp);for(const e of[-10.6,-5.3,3.1,8.6])l("corr",o(e,ie-.08),1,.65,.03,0,1.2,0,e<0?s.art:s.art2,.008);for(const e of mt)De(e.grp,e.f,e.w,e.ang);{const e="street",i=new Lt(70,.15,4.6),a=i.attributes.position,f=i.attributes.uv;for(let c=0;c<f.count;c++)f.setXY(c,a.getX(c)/1.5,a.getZ(c)/1.5);const d=new Ie(i,s.conc);d.position.set(0,-.075,T+2.3),d.receiveShadow=!0,n.add(d),l(e,o(0,T+4.65),70,.17,.25,0,-.17,0,s.slab);const x=new Lt(80,.1,13),p=x.attributes.position,v=x.attributes.uv;for(let c=0;c<v.count;c++)v.setXY(c,p.getX(c)/6,p.getZ(c)/6);const y=new Ie(x,s.asph);y.position.set(0,-.23,T+11.25),y.receiveShadow=!0,n.add(y);for(let c=-30;c<30;c+=6)l(e,o(c,T+15.6),3,.01,.14,0,-.18,0,s.line);for(let c=-27;c<=27;c+=2.7)l(e,o(c,T+7.2),.1,.01,4.8,0,-.18,0,s.line);for(const c of[-16,1.8,12.5,22]){l(e,o(c,T+3.4),1.2,.02,1.2,0,0,0,s.metal);const z=o(c,T+3.4);P(e,z,.06,.1,3,0,0,0,s.bark,10),P(e,z,.03,.045,1.2,.25,2.3,0,s.bark,6,0,-.55),P(e,z,.03,.045,1.1,-.22,2.5,.05,s.bark,6,.2,.6);for(let C=0;C<26;C++){const B=H()*Math.PI*2,N=H(),V=Math.sqrt(N)*1.15,D=3.3+H()*1.9-V*.35;J(e,z,.42+H()*.32,Math.cos(B)*V,D,Math.sin(B)*V,[s.leaf,s.leaf2,s.leaf3][C%3],1,.85,1,2)}}for(const c of[-21,-9.8,.8,11.8,22])P(e,o(c,T+4.2),.05,.07,5.2,0,0,0,s.frame,8),l(e,o(c,T+4.2),.08,.06,1.2,0,5.15,-.5,s.frame),l(e,o(c,T+3.7),.5,.06,.22,0,5.08,0,s.street,.02);for(let c=-12;c<=12;c+=2)P(e,o(c,T+4.1),.08,.08,.82,0,0,0,s.frame,16),P(e,o(c,T+4.1),.075,.075,.05,0,.82,0,s.street,16),P(e,o(c,T+4.1),.085,.085,.03,0,.87,0,s.frame,16);for(const c of[5.2,5.9,6.6])L(e,F("tor",()=>new os(.35,.025,6,20,Math.PI)),s.chrome,o(c,T+2.8,Math.PI/2));const O=[],k=(c,z,C,B,N=0)=>{O.push(c,N,z,C,N,z,C,N,z,C,N,B,C,N,B,c,N,B,c,N,B,c,N,z)};for(const[c,z]of[[-36,-24],[-24,U],[I,24],[24,36]]){k(c,E,z,T),k(c,E,z,T,Q);for(const C of[c,z])for(const B of[E,T])O.push(C,0,B,C,Q,B);for(let C=c+1.5;C<z-.1;C+=1.5)O.push(C,0,T,C,Q,T)}const j=new oi;j.setAttribute("position",new Nt(O,3)),n.add(new pi(j,new vi({color:"#2f6fbf",transparent:!0,opacity:.5})));const b=new Ie(new Gt(400,400),new Dt({color:"#0a2a52",roughness:1}));b.rotation.x=-Math.PI/2,b.position.y=-.3,b.receiveShadow=!0,n.add(b)}for(const{g:e,b:i}of Object.values(Z)){for(const[a,f]of i){const d=new Ie(rs(f),a);d.castShadow=!a.transparent&&a!==s.rug&&a!==s.line,d.receiveShadow=!0,e.add(d)}n.add(e)}const wt=Je.map(e=>({g:Z[e.key]?.g,at:qe(e.x0)})).filter(e=>e.g),Tt=Object.keys(Z).filter(e=>e.startsWith("door")).map(e=>({g:Z[e].g,i:+e.slice(4)})),pt=new vi({color:"#8fc9f5",transparent:!0,opacity:.95}),st=[];et.forEach(e=>st.push(e,.035,E-2.3,e,.035,T+.6)),tt.forEach(e=>st.push(U-2.3,.035,e,I+.6,.035,e));const Xe=[],Te=(e,i,a,f)=>{Xe.push(e,.035,i,a,.035,f);const d=i===f?0:.25,x=i===f?.25:0;for(const[p,v]of[[e,i],[a,f]])Xe.push(p-d,.035,v-x,p+d,.035,v+x),Xe.push(p-.14,.035,v+.14,p+.14,.035,v-.14)};Te(U,E-1.25,I,E-1.25),Te(U-1.25,E,U-1.25,T),Te(U,E-.65,-4,E-.65),Te(-4,E-.65,4,E-.65),Te(4,E-.65,I,E-.65);const $e=[...st,...dt,...Xe],Ve=new oi;Ve.setAttribute("position",new Nt($e,3)),n.add(new pi(Ve,pt));const at=$e.length/3,It=[],ot=(e,i,a,f,d,x,p=0,v=!1)=>{const O=v?512:160,k=Ge(512,O,c=>{if(c.textAlign="center",c.textBaseline="middle",v){c.strokeStyle="#8fc9f5",c.lineWidth=18,c.beginPath(),c.arc(256,256,220,0,Math.PI*2),c.stroke(),c.fillStyle="#8fc9f5",c.font='600 250px "Inter Tight", system-ui, sans-serif',c.fillText(e,256,268);return}c.fillStyle="#d7e7ff",c.font='600 62px "Inter Tight", system-ui, sans-serif',c.fillText(e,256,i?52:80),i&&(c.fillStyle="#8fc9f5",c.font='500 42px "Inter", system-ui, sans-serif',c.fillText(i,256,118))}),j=new Xt({map:k,transparent:!0,opacity:0,depthWrite:!1}),b=new Ie(new Gt(d,d*O/512),j);b.rotation.set(-Math.PI/2,0,p),b.position.set(a,.05,f),b.renderOrder=2,n.add(b),It.push({mesh:b,at:x})},Yt=e=>`${String(Math.round((e.x1-e.x0)*(e.z1-e.z0)*10.764)).replace(/\B(?=(\d{3})+(?!\d))/g,",")} sq ft`;for(const e of Je)e.name&&ot(e.name,e.sq?Yt(e):"",(e.x0+e.x1)/2,(e.z0+e.z1)/2+(e.key==="lobby"?.9:0),Math.min(e.key==="lobby"?5:3.3,(e.x1-e.x0)*.94),qe(e.x0));["A","B","C","D"].forEach((e,i)=>ot(e,"",et[i],E-2.8,.9,0,0,!0)),["1","2"].forEach((e,i)=>ot(e,"",U-2.8,tt[i],.9,0,0,!0)),ot(`78' 9"`,"",0,E-1.6,2.2,1),ot(`33' 6"`,"",U-1.6,(E+T)/2,2.2,1,Math.PI/2);const At=[];for(const[e,i,a]of[[-7.6,5.6,4.5],[-1.8,6.1,6],[3.75,5.8,6],[9.25,5.8,6],[-1.2,0,4],[2.2,0,4],[5.7,0,4],[9.8,0,5],[-4.5,0,4],[-10.3,0,4],[0,2.7,4]]){const f=new Yi("#ffd3a0",0,9,2);f.position.set(e,1.95,i),f.userData.max=a,n.add(f),At.push(f)}const Kt=new Dt({color:"#dfe2e7",roughness:.95}),rt=new Xt({color:"#fff1dc"}),ze=new ii;n.add(ze);for(const e of Je){const i=new Ie(new Gt(e.x1-e.x0,e.z1-e.z0),Kt);i.rotation.x=Math.PI/2,i.position.set((e.x0+e.x1)/2,Q-.001,(e.z0+e.z1)/2),ze.add(i);const a=e.key==="corr"?2.5:1.6;for(let f=e.x0+a/2;f<e.x1-.2;f+=a)for(let d=e.z0+.9;d<e.z1-.3;d+=e.key==="corr"?9:1.8){e.key==="corr"&&(d=(e.z0+e.z1)/2);const x=new Ie(new Ki(.08,20),rt);if(x.rotation.x=Math.PI/2,x.position.set(f,Q-.004,d),ze.add(x),e.key==="corr")break}}const nt=Ge(256,256,e=>{const i=e.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,256,256)}),Le=new ii;n.add(Le);const Qe=[],vt=(e,i,a,f,d=.036)=>{const x=new Xt({map:nt,color:"#ffc98c",transparent:!0,opacity:0,depthWrite:!1,blending:bi});x.userData.max=f,Qe.push(x);const p=new Ie(new Gt(a*2,a*2),x);p.rotation.x=-Math.PI/2,p.position.set(e,d,i),p.renderOrder=3,Le.add(p)};for(const e of[-8.6,-7.6,-6.6])vt(e,4.7,1.1,.55);vt(-1.78,6.15,2.2,.5);for(const[e,i,a]of[[3.75,5.8,2.2],[9.25,5.8,2.2],[-1.2,0,1.6],[2.2,0,1.6],[5.7,0,1.6],[9.8,0,2],[-4.5,-.6,1.5],[-10.3,-.1,1.5],[-7.2,-.2,1.1]])vt(e,i,a,.32);for(let e=-10;e<=10;e+=2.5)vt(e,2.7,.9,.28);for(const e of[-21,-9.8,.8,11.8,22])vt(e,T+3.5,2.6,.5,.01);for(let e=-12;e<=12;e+=2)vt(e,T+4.1,.5,.35,.01);let Ne=null,gt=null;r||(Ne=new ms(u,new lt(1,1,{type:ct,samples:4})),Ne.addPass(new ps(n,g)),gt=new Ae(n,g,1,1),gt.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1,scale:1.1,samples:12}),gt.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),gt.blendIntensity=.9,Ne.addPass(gt),Ne.addPass(new bt(new Me(1,1),.38,.45,1.15)),Ne.addPass(new Ss),u.setClearColor(new Ze(ai).convertSRGBToLinear(),1));const ri=new se,ni=new se,Pt=new se,xt=new se,yt=new se,Jt=new se,Ti=new Ze("#fff3e3"),Pi=new Ze("#ffb98a");let Pe=1,Ue=1,ee=0,_t=0,Ct=0,Et=0;const li=()=>{const e=S.getBoundingClientRect();Pe=Math.max(1,e.width),Ue=Math.max(1,e.height),u.setSize(Pe,Ue,!1),Ne?.setSize(Pe,Ue),Ne?.setPixelRatio(u.getPixelRatio()),g.aspect=Pe/Ue,g.updateProjectionMatrix()};let Ft=0,ei=0,ti=0;const Rt=()=>{Ft||(Ft=requestAnimationFrame(()=>{Ft=0;const e=ei-Ct,i=ti-Et;Ct+=e*.12,Et+=i*.12,Math.abs(e)+Math.abs(i)>.002?Rt():(Ct=ei,Et=ti),Ot()}))},Ot=()=>{const e=Pe>980,i=Ue>Pe,a=Math.max(ye(_t/1.8),ce(ee,0,.05));Ve.setDrawRange(0,Math.floor(at*a/2)*2),St.forEach((R,X)=>{const $=Math.max(zt((_t-1.5-X*.14)/1.1),ce(ee,0,.06));R.scale.y=Math.max(.001,$),R.visible=$>.001});const f=ye(ce(ee,.06,.2));s.glass.opacity=.3*f,s.frost.opacity=.75*f;const d=re("store").g;d.scale.y=Math.max(.001,zt(ce(ee,.05,.16))),d.visible=d.scale.y>.002,Tt.forEach(({g:R,i:X})=>{const $=zt(ce(ee,.08+X*.015,.16+X*.015));R.visible=$>.001,R.scale.y=Math.max(.001,$)}),ut.forEach(({mesh:R,at:X})=>{const $=zt(ce(ee,.2+X*.13,.27+X*.13));R.scale.x=Math.max(1e-4,$),R.visible=$>5e-4}),wt.forEach(({g:R,at:X})=>{const $=zt(ce(ee,.22+X*.13,.3+X*.13));R.visible=$>.001,R.position.y=(1-$)*2.2}),pt.opacity=.95*(1-.7*ye(ce(ee,.22,.4)));const x=1-ye(ce(ee,.24,.34));It.forEach(({mesh:R,at:X})=>{R.material.opacity=Math.max(ye((_t-.9-X*1.2)/.6),ce(ee,0,.04))*x,R.visible=x>.001});const p=ye(ce(ee,.4,.56));s.lamp.emissiveIntensity=3.2*p,s.screen.emissiveIntensity=.9*p,s.street.emissiveIntensity=1.3*p,At.forEach(R=>{R.intensity=R.userData.max*p,R.visible=p>.001}),w.intensity=_e(1.6,.55,p),w.color.copy(Ti).lerp(Pi,p),_.intensity=_e(.55,.2,p),n.environmentIntensity=_e(.35,.15,p),ze.visible=p>.001,Qe.forEach(R=>{R.opacity=R.userData.max*p}),Le.visible=p>.001;const v=ye(ce(ee,.04,.4)),y=ye(ce(ee,.46,.64)),O=1-ye(ce(ee,.04,.14)),k=gi.degToRad(_e(i?66:16,i?54:-10,v)+Ct*2.4),j=gi.degToRad(_e(i?60:64,i?46:44,v)-Et*1.4),c=(i?48/Math.max(.42,Pe/Ue)**.7:56/Math.min(1,Pe/Ue/1.45)**.6)*_e(1,i?.97:.86,v);xt.set(i?.6:_e(.5,0,v),0,i?3.4:_e(2.6,3.2,v)),Pt.set(Math.sin(k)*Math.cos(j)*c,Math.sin(j)*c,Math.cos(k)*Math.cos(j)*c).add(xt);const z=ye(ce(ee,.4,.52)),C=ye(ce(ee,.5,.64));ri.set(-8.4,i?9.5:7.5,6.4),ni.set(-6.6,.4,4.6),i?(yt.set(-11.3,1.7,6.75),Jt.set(-6.6,.75,4)):(yt.set(-10.6,1.62,7.4),Jt.set(-5.6,1,4.3)),yt.x+=Ct*.25,yt.y-=Et*.12,Pt.lerp(ri,z),xt.lerp(ni,z),Pt.lerp(yt,C),xt.lerp(Jt,C),g.position.copy(Pt),g.lookAt(xt);const B=n.fog,N=Pt.distanceTo(xt);B.near=_e(N*1.1,40,y),B.far=_e(N*2.6,120,y),g.fov=_e(30,i?66:52,y),g.updateProjectionMatrix();const V=e?-Pe*.2*O:0,D=e?0:-Ue*.16*O;V||D?g.setViewOffset(Pe,Ue,V,D,Pe,Ue):g.clearViewOffset(),Ne?Ne.render():u.render(n,g)};li();const ci=new ResizeObserver(()=>{li(),Rt()});return ci.observe(S),window.__hero={set:e=>{ee=e,Ot()},intro:e=>{_t=e,Ot()}},{ready:Promise.resolve().then(Ot),set(e){e!==ee&&(ee=e,Rt())},intro(e){_t=e,Rt()},pointer(e,i){ei=e,ti=i,Rt()},dispose(){ci.disconnect(),cancelAnimationFrame(Ft),Ne?.dispose(),gt?.dispose(),m.dispose(),h.dispose(),n.traverse(e=>{e.geometry?.dispose()}),Object.values(s).forEach(e=>{e.map?.dispose(),e.dispose()}),u.dispose(),t.remove()}}}export{ys as mountHero};
