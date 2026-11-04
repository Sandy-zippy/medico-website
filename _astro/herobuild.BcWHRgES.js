import{M as Ue,O as bi,e as ii,F as Et,x as De,U as Ve,y as ge,z as at,J as ot,K as Be,X as Pi,j as Qe,V as ie,Y as vi,R as Rt,m as Te,Z as Ti,_ as zt,$ as At,a0 as ci,a1 as hi,a2 as _i,a3 as yi,a4 as Ci,a5 as Ei,a6 as fi,a7 as Ri,a8 as Di,A as gi,g as Gt,a9 as Ni,aa as Ii,ab as Ui,ac as zi,ad as Ai,ae as Fi,o as Oi,af as ki,N as xi,ag as Bi,W as Vi,P as Li,S as Gi,a as ji,ah as Hi,p as Wi,H as qi,D as Qi,d as yt,B as Ft,f as ui,L as di,b as Ot,i as $i,G as Jt,ai as Xi,k as Zi,l as Yi,E as Ki,Q as Ji,n as mi,C as es,I as ts,T as is}from"./three.module.BIpL_u75.js";import{m as ss}from"./BufferGeometryUtils.BsaRa83R.js";import{R as as,a as os}from"./RoomEnvironment.DTAE0OLq.js";const rt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nt{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rs=new bi(-1,1,1,-1,0,1);class ns extends ii{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const ls=new ns;class Ht{constructor(t){this._mesh=new Ue(ls,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,rs)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class cs extends nt{constructor(t,a="tDiffuse"){super(),this.textureID=a,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ve.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ht(this.material)}render(t,a,h){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=h.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class pi extends nt{constructor(t,a){super(),this.scene=t,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,a,h){const r=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let d,v;this.inverse?(d=0,v=1):(d=1,v=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),c.buffers.stencil.setFunc(r.ALWAYS,d,4294967295),c.buffers.stencil.setClear(v),c.buffers.stencil.setLocked(!0),t.setRenderTarget(h),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(r.EQUAL,1,4294967295),c.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),c.buffers.stencil.setLocked(!0)}}class hs extends nt{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fs{constructor(t,a){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),a===void 0){const h=t.getSize(new ge);this._width=h.width,this._height=h.height,a=new at(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ot}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cs(rt),this.copyPass.material.blending=Be,this.timer=new Pi}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,a){this.passes.splice(a,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const a=this.passes.indexOf(t);a!==-1&&this.passes.splice(a,1)}isLastEnabledPass(t){for(let a=t+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const a=this.renderer.getRenderTarget();let h=!1;for(let r=0,c=this.passes.length;r<c;r++){const d=this.passes[r];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),d.render(this.renderer,this.writeBuffer,this.readBuffer,t,h),d.needsSwap){if(h){const v=this.renderer.getContext(),_=this.renderer.state.buffers.stencil;_.setFunc(v.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),_.setFunc(v.EQUAL,1,4294967295)}this.swapBuffers()}pi!==void 0&&(d instanceof pi?h=!0:d instanceof hs&&(h=!1))}}this.renderer.setRenderTarget(a)}reset(t){if(t===void 0){const a=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,a){this._width=t,this._height=a;const h=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(h,r),this.renderTarget2.setSize(h,r);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(h,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class us extends nt{constructor(t,a,h=null,r=null,c=null){super(),this.scene=t,this.camera=a,this.overrideMaterial=h,this.clearColor=r,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(t,a,h){const r=t.autoClear;t.autoClear=!1;let c,d;this.overrideMaterial!==null&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:h),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=d),t.autoClear=r}}const kt={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ge},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Te},cameraProjectionMatrixInverse:{value:new Te},cameraWorldMatrix:{value:new Te},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new ie(-1,-1,-1)},sceneBoxMax:{value:new ie(1,1,1)}},vertexShader:`

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
		}`},Bt={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ei={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ds(x=5){const t=Math.floor(x)%2===0?Math.floor(x)+1:Math.floor(x),a=ms(t),h=a.length,r=new Uint8Array(h*4);for(let d=0;d<h;++d){const v=a[d],_=2*Math.PI*v/h,M=new ie(Math.cos(_),Math.sin(_),0).normalize();r[d*4]=(M.x*.5+.5)*255,r[d*4+1]=(M.y*.5+.5)*255,r[d*4+2]=127,r[d*4+3]=255}const c=new vi(r,t,t);return c.wrapS=Rt,c.wrapT=Rt,c.needsUpdate=!0,c}function ms(x){const t=Math.floor(x)%2===0?Math.floor(x)+1:Math.floor(x),a=t*t,h=Array(a).fill(0);let r=Math.floor(t/2),c=t-1;for(let d=1;d<=a;){if(r===-1&&c===t?(c=t-2,r=0):(c===t&&(c=0),r<0&&(r=t-1)),h[r*t+c]!==0){c-=2,r++;continue}else h[r*t+c]=d++;c++,r--}return h}const Vt={defines:{SAMPLES:16,SAMPLE_VECTORS:Mi(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ge},cameraProjectionMatrixInverse:{value:new Te},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Mi(x,t,a){const h=ps(x,t,a);let r="vec3[SAMPLES](";for(let c=0;c<x;c++){const d=h[c];r+=`vec3(${d.x}, ${d.y}, ${d.z})${c<x-1?",":")"}`}return r}function ps(x,t,a){const h=[];for(let r=0;r<x;r++){const c=2*Math.PI*t*r/x,d=Math.pow(r/(x-1),a);h.push(new ie(Math.cos(c),Math.sin(c),d))}return h}class vs{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let a=0;a<256;a++)this.p[a]=Math.floor(t.random()*256);this.perm=[];for(let a=0;a<512;a++)this.perm[a]=this.p[a&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,a){let h,r,c;const d=.5*(Math.sqrt(3)-1),v=(t+a)*d,_=Math.floor(t+v),M=Math.floor(a+v),U=(3-Math.sqrt(3))/6,w=(_+M)*U,ne=_-w,Y=M-w,se=t-ne,le=a-Y;let xe,s;se>le?(xe=1,s=0):(xe=0,s=1);const k=se-xe+U,V=le-s+U,L=se-1+2*U,te=le-1+2*U,j=_&255,q=M&255,n=this.perm[j+this.perm[q]]%12,D=this.perm[j+xe+this.perm[q+s]]%12,z=this.perm[j+1+this.perm[q+1]]%12;let F=.5-se*se-le*le;F<0?h=0:(F*=F,h=F*F*this._dot(this.grad3[n],se,le));let l=.5-k*k-V*V;l<0?r=0:(l*=l,r=l*l*this._dot(this.grad3[D],k,V));let P=.5-L*L-te*te;return P<0?c=0:(P*=P,c=P*P*this._dot(this.grad3[z],L,te)),70*(h+r+c)}noise3d(t,a,h){let r,c,d,v;const M=(t+a+h)*.3333333333333333,U=Math.floor(t+M),w=Math.floor(a+M),ne=Math.floor(h+M),Y=1/6,se=(U+w+ne)*Y,le=U-se,xe=w-se,s=ne-se,k=t-le,V=a-xe,L=h-s;let te,j,q,n,D,z;k>=V?V>=L?(te=1,j=0,q=0,n=1,D=1,z=0):k>=L?(te=1,j=0,q=0,n=1,D=0,z=1):(te=0,j=0,q=1,n=1,D=0,z=1):V<L?(te=0,j=0,q=1,n=0,D=1,z=1):k<L?(te=0,j=1,q=0,n=0,D=1,z=1):(te=0,j=1,q=0,n=1,D=1,z=0);const F=k-te+Y,l=V-j+Y,P=L-q+Y,Le=k-n+2*Y,fe=V-D+2*Y,Ge=L-z+2*Y,Ae=k-1+3*Y,Me=V-1+3*Y,A=L-1+3*Y,we=U&255,Ne=w&255,Se=ne&255,$e=this.perm[we+this.perm[Ne+this.perm[Se]]]%12,Fe=this.perm[we+te+this.perm[Ne+j+this.perm[Se+q]]]%12,lt=this.perm[we+n+this.perm[Ne+D+this.perm[Se+z]]]%12,ct=this.perm[we+1+this.perm[Ne+1+this.perm[Se+1]]]%12;let he=.6-k*k-V*V-L*L;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[$e],k,V,L));let ue=.6-F*F-l*l-P*P;ue<0?c=0:(ue*=ue,c=ue*ue*this._dot3(this.grad3[Fe],F,l,P));let de=.6-Le*Le-fe*fe-Ge*Ge;de<0?d=0:(de*=de,d=de*de*this._dot3(this.grad3[lt],Le,fe,Ge));let _e=.6-Ae*Ae-Me*Me-A*A;return _e<0?v=0:(_e*=_e,v=_e*_e*this._dot3(this.grad3[ct],Ae,Me,A)),32*(r+c+d+v)}noise4d(t,a,h,r){const c=this.grad4,d=this.simplex,v=this.perm,_=(Math.sqrt(5)-1)/4,M=(5-Math.sqrt(5))/20;let U,w,ne,Y,se;const le=(t+a+h+r)*_,xe=Math.floor(t+le),s=Math.floor(a+le),k=Math.floor(h+le),V=Math.floor(r+le),L=(xe+s+k+V)*M,te=xe-L,j=s-L,q=k-L,n=V-L,D=t-te,z=a-j,F=h-q,l=r-n,P=D>z?32:0,Le=D>F?16:0,fe=z>F?8:0,Ge=D>l?4:0,Ae=z>l?2:0,Me=F>l?1:0,A=P+Le+fe+Ge+Ae+Me,we=d[A][0]>=3?1:0,Ne=d[A][1]>=3?1:0,Se=d[A][2]>=3?1:0,$e=d[A][3]>=3?1:0,Fe=d[A][0]>=2?1:0,lt=d[A][1]>=2?1:0,ct=d[A][2]>=2?1:0,he=d[A][3]>=2?1:0,ue=d[A][0]>=1?1:0,de=d[A][1]>=1?1:0,_e=d[A][2]>=1?1:0,je=d[A][3]>=1?1:0,gt=D-we+M,ht=z-Ne+M,ae=F-Se+M,ft=l-$e+M,me=D-Fe+2*M,Xe=z-lt+2*M,Ze=F-ct+2*M,Ye=l-he+2*M,xt=D-ue+3*M,Mt=z-de+3*M,ut=F-_e+3*M,Ke=l-je+3*M,He=D-1+4*M,Oe=z-1+4*M,dt=F-1+4*M,Je=l-1+4*M,et=xe&255,We=s&255,ye=k&255,tt=V&255,Dt=v[et+v[We+v[ye+v[tt]]]]%32,qt=v[et+we+v[We+Ne+v[ye+Se+v[tt+$e]]]]%32,Qt=v[et+Fe+v[We+lt+v[ye+ct+v[tt+he]]]]%32,mt=v[et+ue+v[We+de+v[ye+_e+v[tt+je]]]]%32,$t=v[et+1+v[We+1+v[ye+1+v[tt+1]]]]%32;let ke=.6-D*D-z*z-F*F-l*l;ke<0?U=0:(ke*=ke,U=ke*ke*this._dot4(c[Dt],D,z,F,l));let qe=.6-gt*gt-ht*ht-ae*ae-ft*ft;qe<0?w=0:(qe*=qe,w=qe*qe*this._dot4(c[qt],gt,ht,ae,ft));let be=.6-me*me-Xe*Xe-Ze*Ze-Ye*Ye;be<0?ne=0:(be*=be,ne=be*be*this._dot4(c[Qt],me,Xe,Ze,Ye));let oe=.6-xt*xt-Mt*Mt-ut*ut-Ke*Ke;oe<0?Y=0:(oe*=oe,Y=oe*oe*this._dot4(c[mt],xt,Mt,ut,Ke));let Pe=.6-He*He-Oe*Oe-dt*dt-Je*Je;return Pe<0?se=0:(Pe*=Pe,se=Pe*Pe*this._dot4(c[$t],He,Oe,dt,Je)),27*(U+w+ne+Y+se)}_dot(t,a,h){return t[0]*a+t[1]*h}_dot3(t,a,h,r){return t[0]*a+t[1]*h+t[2]*r}_dot4(t,a,h,r,c){return t[0]*a+t[1]*h+t[2]*r+t[3]*c}}class ze extends nt{constructor(t,a,h=512,r=512,c,d,v){super(),this.width=h,this.height=r,this.clear=!0,this.camera=a,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ds(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new at(this.width,this.height,{type:ot,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new De({defines:Object.assign({},kt.defines),uniforms:Ve.clone(kt.uniforms),vertexShader:kt.vertexShader,fragmentShader:kt.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ti,this.normalMaterial.blending=Be,this.pdMaterial=new De({defines:Object.assign({},Vt.defines),uniforms:Ve.clone(Vt.uniforms),vertexShader:Vt.vertexShader,fragmentShader:Vt.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new De({defines:Object.assign({},Bt.defines),uniforms:Ve.clone(Bt.uniforms),vertexShader:Bt.vertexShader,fragmentShader:Bt.fragmentShader,blending:Be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new De({uniforms:Ve.clone(rt.uniforms),vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:hi,blendDst:At,blendEquation:zt,blendSrcAlpha:ci,blendDstAlpha:At,blendEquationAlpha:zt}),this.blendMaterial=new De({uniforms:Ve.clone(ei.uniforms),vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:_i,blendSrc:hi,blendDst:At,blendEquation:zt,blendSrcAlpha:ci,blendDstAlpha:At,blendEquationAlpha:zt}),this._fsQuad=new Ht(null),this._originalClearColor=new Qe,this.setGBuffer(c?c.depthTexture:void 0,c?c.normalTexture:void 0),d!==void 0&&this.updateGtaoMaterial(d),v!==void 0&&this.updatePdMaterial(v)}setSize(t,a){this.width=t,this.height=a,this.gtaoRenderTarget.setSize(t,a),this.normalRenderTarget&&this.normalRenderTarget.setSize(t,a),this.pdRenderTarget.setSize(t,a),this.gtaoMaterial.uniforms.resolution.value.set(t,a),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,a),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,a){if(t!==void 0)this.depthTexture=t,this.normalTexture=a,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){const r=new yi;r.format=Ci,r.type=Ei,this.normalRenderTarget=new at(this.width,this.height,{minFilter:fi,magFilter:fi,type:ot,depthTexture:r})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}const h=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=h,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=h,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let a=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,a=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,a=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,a=!0),a&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Mi(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,a,h){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ze.OUTPUT.Off:break;case ze.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=h.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case ze.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case ze.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case ze.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:a);break;case ze.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case ze.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=h.texture,this.copyMaterial.blending=Be,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:a);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,a,h,r,c){t.getClearColor(this._originalClearColor);const d=t.getClearAlpha(),v=t.autoClear;t.setRenderTarget(h),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(c||0),t.clear()),this._fsQuad.material=a,this._fsQuad.render(t),t.autoClear=v,t.setClearColor(this._originalClearColor),t.setClearAlpha(d)}_renderOverride(t,a,h,r,c){t.getClearColor(this._originalClearColor);const d=t.getClearAlpha(),v=t.autoClear;t.setRenderTarget(h),t.autoClear=!1,r=a.clearColor||r,c=a.clearAlpha||c,r!=null&&(t.setClearColor(r),t.setClearAlpha(c||0),t.clear()),this.scene.overrideMaterial=a,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=v,t.setClearColor(this._originalClearColor),t.setClearAlpha(d)}_overrideVisibility(){const t=this.scene,a=this._visibilityCache;t.traverse(function(h){(h.isPoints||h.isLine||h.isLine2)&&h.visible&&(h.visible=!1,a.push(h))})}_restoreVisibility(){const t=this._visibilityCache;for(let a=0;a<t.length;a++)t[a].visible=!0;t.length=0}_generateNoise(t=64){const a=new vs,h=t*t*4,r=new Uint8Array(h);for(let d=0;d<t;d++)for(let v=0;v<t;v++){const _=d,M=v;r[(d*t+v)*4]=(a.noise(_,M)*.5+.5)*255,r[(d*t+v)*4+1]=(a.noise(_+t,M)*.5+.5)*255,r[(d*t+v)*4+2]=(a.noise(_,M+t)*.5+.5)*255,r[(d*t+v)*4+3]=(a.noise(_+t,M+t)*.5+.5)*255}const c=new vi(r,t,t,Ri,Di);return c.wrapS=Rt,c.wrapT=Rt,c.needsUpdate=!0,c}}ze.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const gs={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vt extends nt{constructor(t,a=1,h,r){super(),this.strength=a,this.radius=h,this.threshold=r,this.resolution=t!==void 0?new ge(t.x,t.y):new ge(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new at(c,d,{type:ot,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){const w=new at(c,d,{type:ot,depthBuffer:!1});w.texture.name="UnrealBloomPass.h"+U,w.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(w);const ne=new at(c,d,{type:ot,depthBuffer:!1});ne.texture.name="UnrealBloomPass.v"+U,ne.texture.generateMipmaps=!1,this.renderTargetsVertical.push(ne),c=Math.round(c/2),d=Math.round(d/2)}const v=gs;this.highPassUniforms=Ve.clone(v.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader}),this.separableBlurMaterials=[];const _=[6,10,14,18,22];c=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(_[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new ge(1/c,1/d),c=Math.round(c/2),d=Math.round(d/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1;const M=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=M,this.bloomTintColors=[new ie(1,1,1),new ie(1,1,1),new ie(1,1,1),new ie(1,1,1),new ie(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ve.clone(rt.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,premultipliedAlpha:!0,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new Ht(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,a){let h=Math.round(t/2),r=Math.round(a/2);this.renderTargetBright.setSize(h,r);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(h,r),this.renderTargetsVertical[c].setSize(h,r),this.separableBlurMaterials[c].uniforms.invSize.value=new ge(1/h,1/r),h=Math.round(h/2),r=Math.round(r/2)}render(t,a,h,r,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const d=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=h.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=h.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let v=this.renderTargetBright;for(let _=0;_<this.nMips;_++)this._fsQuad.material=this.separableBlurMaterials[_],this.separableBlurMaterials[_].uniforms.colorTexture.value=v.texture,this.separableBlurMaterials[_].uniforms.direction.value=vt.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[_]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[_].uniforms.colorTexture.value=this.renderTargetsHorizontal[_].texture,this.separableBlurMaterials[_].uniforms.direction.value=vt.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[_]),t.clear(),this._fsQuad.render(t),v=this.renderTargetsVertical[_];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(h),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=d}_getSeparableBlurMaterial(t){const a=[],h=t/3;for(let d=0;d<t;d++)a.push(.39894*Math.exp(-.5*d*d/(h*h))/h);const r=[],c=[];for(let d=1;d<t;d+=2){const v=a[d],_=d+1<t?a[d+1]:0,M=v+_;r.push((d*v+(d+1)*_)/M),c.push(M)}return new De({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:a[0]},gaussianOffsets:{value:r},gaussianWeights:{value:c}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}vt.BlurDirectionX=new ge(1,0);vt.BlurDirectionY=new ge(0,1);const Lt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class xs extends nt{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ve.clone(Lt.uniforms),this.material=new Ni({name:Lt.name,uniforms:this.uniforms,vertexShader:Lt.vertexShader,fragmentShader:Lt.fragmentShader}),this._fsQuad=new Ht(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,a,h){this.uniforms.tDiffuse.value=h.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ii.getTransfer(this._outputColorSpace)===Ui&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zi?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ai?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fi?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ki?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xi?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bi&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Wt=x=>Math.min(Math.max(x,0),1),re=(x,t,a)=>Wt((x-t)/(a-t)),Ee=x=>(x=Wt(x),x*x*x*(x*(x*6-15)+10)),Ct=x=>1-Math.pow(1-Wt(x),3),Re=(x,t,a)=>x+(t-x)*a,ti="#021d40",G=2.7,R=-12,I=12,C=-2.2,b=8,ve=1.8,Z=3.6;let jt=7;const B=()=>(jt=jt*16807%2147483647,(jt-1)/2147483646);function it(x,t,a,h=!0){const r=document.createElement("canvas");r.width=x,r.height=t,a(r.getContext("2d"));const c=new Zi(r);return c.wrapS=c.wrapT=Rt,c.anisotropy=8,h&&(c.colorSpace=Yi),c}const st=(x,t,a,h,r,c=!1)=>{for(let d=0;d<h;d++)x.fillStyle=`rgba(${c?"255,255,255":"0,0,0"},${(B()*r).toFixed(3)})`,x.fillRect(B()*t,B()*a,1+B()*2,1+B()*2)};function bs(x){jt=7;const t=document.createElement("canvas");t.className="h3-canvas",t.setAttribute("aria-hidden","true"),x.prepend(t);const a=innerWidth<768,h=new Vi({canvas:t,antialias:a,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__recording});h.setPixelRatio(Math.min(devicePixelRatio,a?1.6:1.5)),h.setClearColor(ti,1),h.toneMapping=xi,h.toneMappingExposure=1,h.shadowMap.enabled=!0,h.shadowMap.type=Li;const r=new Gi,c=new ji(h),d=c.fromScene(new as,.04);r.environment=d.texture,r.environmentIntensity=.35,r.fog=new Hi(ti,60,140);const v=new Wi(30,1,.3,300),_=new qi("#e4eefb","#0b2448",.55);r.add(_);const M=new Qi("#fff3e3",1.6);M.position.set(-16,26,18),M.target.position.set(0,0,3),r.add(M.target),M.castShadow=!0;const U=a?2048:4096;M.shadow.mapSize.set(U,U),Object.assign(M.shadow.camera,{left:-22,right:22,top:18,bottom:-18,near:2,far:80}),M.shadow.bias=-2e-4,M.shadow.normalBias=.025,r.add(M);const w=(e,i={})=>new yt({color:e,roughness:.75,...i}),ne=it(1024,1024,e=>{for(let f=0;f<8;f++){let m=-B()*400;for(;m<1024;){const g=260+B()*380,p=.86+B()*.22;e.fillStyle=`rgb(${Math.round(196*p)},${Math.round(160*p)},${Math.round(116*p)})`,e.fillRect(m,f*128,g,128);for(let S=0;S<9;S++){e.strokeStyle=`rgba(90,60,30,${.05+B()*.07})`,e.lineWidth=1+B()*2,e.beginPath();const y=f*128+B()*128;e.moveTo(m,y),e.bezierCurveTo(m+g*.3,y+(B()-.5)*10,m+g*.6,y+(B()-.5)*10,m+g,y),e.stroke()}e.fillStyle="rgba(60,40,20,0.35)",e.fillRect(m,f*128,2,128),m+=g}e.fillStyle="rgba(60,40,20,0.3)",e.fillRect(0,f*128,1024,2)}}),Y=it(512,512,e=>{e.fillStyle="#d6d9dc",e.fillRect(0,0,512,512),st(e,512,512,9e3,.06),st(e,512,512,3e3,.25,!0),e.fillStyle="rgba(0,0,0,0.07)";for(let i=0;i<4;i++)e.fillRect(0,i*128,512,1.5)}),se=it(512,512,e=>{e.fillStyle="#eef0f1",e.fillRect(0,0,512,512),st(e,512,512,3e3,.04),e.fillStyle="#b9bfc5";for(let i=0;i<=8;i++)e.fillRect(i*64-1,0,2,512),e.fillRect(0,i*64-1,512,2)}),le=it(512,512,e=>{e.fillStyle="#6d7785",e.fillRect(0,0,512,512),st(e,512,512,14e3,.12),st(e,512,512,5e3,.12,!0),e.fillStyle="rgba(30,35,40,0.45)",e.fillRect(0,0,512,3),e.fillRect(0,0,3,512)}),xe=it(512,512,e=>{e.fillStyle="#0e1a2b",e.fillRect(0,0,512,512),st(e,512,512,16e3,.12,!0),st(e,512,512,8e3,.3)}),s={card:w("#eef1f5",{roughness:.92}),wall:w("#f5f6f8",{roughness:.9}),poche:w("#0d3366",{roughness:.8}),slab:w("#123a6a",{roughness:.95}),oak:w("#ffffff",{map:ne,roughness:.55}),lvt:w("#ffffff",{map:Y,roughness:.6}),tile:w("#ffffff",{map:se,roughness:.35}),conc:w("#ffffff",{map:le,roughness:.95}),asph:w("#ffffff",{map:xe,roughness:.95}),timber:w("#b98a5c",{roughness:.55}),walnut:w("#6b4a32",{roughness:.5}),quartz:w("#f4f3ef",{roughness:.22}),lam:w("#e9e6df",{roughness:.45}),blue:w("#1475bc",{roughness:.7}),navyFab:w("#22344d",{roughness:.85}),sage:w("#8fa596",{roughness:.85}),vinyl:w("#3b4a5c",{roughness:.45}),white:w("#fbfbfa",{roughness:.35}),metal:w("#2a3038",{roughness:.35,metalness:.7}),chrome:w("#d9dee3",{roughness:.18,metalness:1}),frame:w("#30363e",{roughness:.4,metalness:.5}),screen:w("#0b1726",{roughness:.2,emissive:"#3d7fd0",emissiveIntensity:0}),leaf:w("#3d6a49",{roughness:.85}),leaf2:w("#5f8c58",{roughness:.85}),leaf3:w("#7a9e6a",{roughness:.85}),bark:w("#4a3a2c",{roughness:.9}),pot:w("#d9d4cc",{roughness:.9}),soil:w("#3a2d22",{roughness:1}),rug:w("#b9c3cf",{roughness:1}),art:w("#1475bc",{roughness:.6}),art2:w("#d9a46b",{roughness:.6}),lamp:w("#ffffff",{emissive:"#ffd8a6",emissiveIntensity:0,roughness:.4}),shade:w("#1d232b",{roughness:.4,metalness:.4}),street:w("#2c3642",{emissive:"#ffe3b8",emissiveIntensity:0,roughness:.5}),line:w("#7f93ad",{roughness:.8}),glass:new yt({color:"#9fc0e0",roughness:.04,metalness:.3,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:1.6}),frost:new yt({color:"#f4f7fa",roughness:.6,transparent:!0,opacity:0,depthWrite:!1})},k={},V=e=>k[e]??={g:new Jt,b:new Map},L=e=>{const i=e.index?e.toNonIndexed():e;for(const o of Object.keys(i.attributes))["position","normal","uv"].includes(o)||i.deleteAttribute(o);return i.attributes.uv||i.setAttribute("uv",new Et(new Float32Array(i.attributes.position.count*2),2)),i.clearGroups(),i},te=new Map,j=(e,i)=>{let o=te.get(e);return o||(o=L(i()),te.set(e,o)),o},q=(e,i,o,f)=>{const m=V(e).b,g=m.get(o)??[];g.push(i.clone().applyMatrix4(f)),m.set(o,g)},n=(e,i,o=0,f=0)=>new Te().makeRotationY(o).setPosition(e,f,i),D=new Te,z=new Te,F=new Ki,l=(e,i,o,f,m,g,p,S,y,$=0,H=0,K=0,T=0)=>{const u=Math.min($,o/2-.001,f/2-.001,m/2-.001),O=u>.002?j(`r${o.toFixed(3)}_${f.toFixed(3)}_${m.toFixed(3)}_${u.toFixed(3)}`,()=>new os(o,f,m,2,u)):j(`b${o.toFixed(3)}_${f.toFixed(3)}_${m.toFixed(3)}`,()=>new Ft(o,f,m));z.makeRotationFromEuler(F.set(H,T,K)),D.copy(i).multiply(new Te().makeTranslation(g,p+f/2,S)).multiply(z),q(e,O,y,D)},P=(e,i,o,f,m,g,p,S,y,$=16,H=0,K=0)=>{const T=j(`c${o}_${f}_${m}_${$}`,()=>new es(o,f,m,$));z.makeRotationFromEuler(F.set(H,0,K)),D.copy(i).multiply(new Te().makeTranslation(g,p+m/2,S)).multiply(z),q(e,T,y,D)},Le=(e,i,o,f,m,g,p,S=1,y=1,$=1,H=1)=>{const K=j(`i${o}_${H}`,()=>new ts(o,H));D.copy(i).multiply(new Te().compose(new ie(f,m,g),new Ji().setFromEuler(F.set(B()*3,B()*3,0)),new ie(S,y,$))),q(e,K,p,D)},fe=(e,i,o)=>{l(e,i,.5,.09,.48,0,.42,0,o,.035),l(e,i,.5,.44,.07,0,.5,-.22,o,.03,-.12);for(const[f,m]of[[-.21,-.19],[.21,-.19],[-.21,.19],[.21,.19]])P(e,i,.014,.014,.42,f,0,m,s.metal,6)},Ge=(e,i,o)=>{l(e,i,.78,.2,.74,0,.12,0,o,.06),l(e,i,.78,.5,.16,0,.3,-.3,o,.07),l(e,i,.13,.32,.74,-.33,.3,0,o,.05),l(e,i,.13,.32,.74,.33,.3,0,o,.05);for(const[f,m]of[[-.32,-.3],[.32,-.3],[-.32,.3],[.32,.3]])P(e,i,.02,.015,.12,f,0,m,s.walnut,8)},Ae=(e,i,o=.28,f=.5)=>{P(e,i,o,o,.03,0,f-.03,0,s.walnut,28),P(e,i,.025,.025,f-.03,0,0,0,s.metal,8),P(e,i,o*.6,o*.6,.02,0,0,0,s.metal,20)},Me=(e,i,o=1)=>{P(e,i,.2*o,.16*o,.42*o,0,0,0,s.pot,20),P(e,i,.18*o,.18*o,.02,0,.4*o,0,s.soil,16),P(e,i,.012,.016,.7*o,0,.4*o,0,s.walnut,5);for(let f=0;f<9;f++){const m=f/9*Math.PI*2,g=.12+B()*.16,p=.75+B()*.75;Le(e,i,.13*o,Math.cos(m)*g*o,p*o,Math.sin(m)*g*o,[s.leaf,s.leaf2,s.leaf3][f%3],1,.55+B()*.3,1.5,2)}},A=(e,i,o,f,m,g=0)=>{const p=new Te().copy(i).multiply(n(o,f,g,m));l(e,p,.56,.34,.025,0,.12,0,s.screen,.008),l(e,p,.04,.14,.03,0,0,-.03,s.metal),l(e,p,.2,.012,.16,0,0,-.02,s.metal,.005)},we=(e,i)=>{l(e,i,.5,.08,.48,0,.46,0,s.navyFab,.035),l(e,i,.46,.5,.06,0,.58,-.24,s.navyFab,.03,-.1),P(e,i,.025,.025,.36,0,.1,0,s.metal,8);for(let o=0;o<5;o++)l(e,i,.03,.03,.3,0,.06,0,s.metal,0,0,0,o/5*Math.PI*2)},Ne=(e,i,o=1.5,f=.7)=>{l(e,i,o,.035,f,0,.72,0,s.lam,.01),l(e,i,.03,.72,f-.08,-o/2+.06,0,0,s.metal),l(e,i,.03,.72,f-.08,o/2-.06,0,0,s.metal),l(e,i,o-.14,.3,.02,0,.4,-f/2+.06,s.metal)},Se=(e,i,o,f=0,m=!0)=>{const g=Math.max(1,Math.round(o/.6)),p=o/g;l(e,i,o,.1,.5,0,0,-.02,s.metal),l(e,i,o,.78,.56,0,.1,-.01,s.white);for(let S=0;S<g;S++)l(e,i,p-.012,.76,.02,-o/2+p*(S+.5),.11,.275,s.white,.004);if(l(e,i,o+.02,.035,.62,0,.88,.02,s.quartz,.008),f!==null&&(l(e,i,.46,.02,.36,f,.902,.02,s.chrome,.01),P(e,i,.012,.012,.3,f,.91,-.22,s.chrome,8),l(e,i,.025,.025,.16,f,1.19,-.15,s.chrome,.01)),m)for(let S=0;S<g;S++)l(e,i,p-.012,.72,.34,-o/2+p*(S+.5),1.5,-.12,s.white,.006)},$e=(e,i)=>{l(e,i,.62,.62,1.4,0,0,.1,s.white,.03),l(e,i,.7,.1,1.3,0,.62,.2,s.vinyl,.045),l(e,i,.7,.1,.62,0,.74,-.68,s.vinyl,.045,.45),l(e,i,.52,.006,1.25,0,.725,.2,s.white),P(e,i,.06,.06,.6,0,.66,-1.05,s.white,12,0,Math.PI/2),l(e,i,.5,.06,.28,0,.32,.86,s.metal,.02)},Fe=(e,i)=>{P(e,i,.2,.2,.08,0,.52,0,s.vinyl,20),P(e,i,.025,.03,.46,0,.06,0,s.chrome,8);for(let o=0;o<5;o++)l(e,i,.025,.025,.26,0,.04,0,s.metal,0,0,0,o/5*Math.PI*2)},lt=(e,i)=>{l(e,i,.6,.1,.9,0,0,.2,s.white,.04),l(e,i,.32,.45,.4,0,.1,.2,s.white,.08),l(e,i,.62,.14,.75,0,.55,.25,s.blue,.06),l(e,i,.56,.12,.75,0,.5,.9,s.blue,.055,-.25),l(e,i,.58,.13,.8,0,.78,-.42,s.blue,.06,.95),l(e,i,.3,.1,.24,0,1.12,-.83,s.blue,.045,1.2),l(e,i,.08,.06,.5,-.36,.72,.2,s.white,.025),l(e,i,.08,.06,.5,.36,.72,.2,s.white,.025),P(e,i,.04,.04,.6,.52,.1,-.1,s.white,10),l(e,i,.08,.05,.6,.52,.7,.18,s.white,.02),l(e,i,.5,.05,.34,.52,.76,.5,s.white,.02);for(let o=0;o<5;o++)P(e,i,.008,.008,.16,.4+o*.06,.8,.44,s.chrome,5,Math.PI/2.4);P(e,i,.045,.045,1.5,-.55,.1,-.7,s.white,12),l(e,i,.06,.06,.7,-.55,1.62,-.38,s.white,.02,.2),l(e,i,.44,.1,.18,-.45,1.5,-.1,s.white,.04,.5),l(e,i,.36,.02,.12,-.45,1.48,-.08,s.lamp,0,.5),A(e,i,-.55,-.4,1.7,Math.PI*.15)},ct=(e,i,o,f)=>{const m=new Te().copy(i).multiply(n(0,0,f));l(e,m,o-.04,2.1,.045,(o-.04)/2,0,0,s.timber,.008),l(e,m,.02,.02,.14,o-.14,1.02,0,s.chrome)},he=(e,i,o,f=.9,m=.22)=>{const g=n(i,o);P(e,g,.004,.004,f,0,G-f,0,s.metal,4),P(e,g,.05,m,.24,0,G-f-.24,0,s.shade,24),P(e,g,m*.92,m*.92,.01,0,G-f-.245,0,s.lamp,24)},ue=[{key:"lobby",name:"Reception",x0:R,z0:Z,x1:1,z1:b,floor:s.oak,sq:!0},{key:"op1",name:"Dental 1",x0:1,z0:Z,x1:6.5,z1:b,floor:s.lvt,sq:!0},{key:"op2",name:"Dental 2",x0:6.5,z0:Z,x1:I,z1:b,floor:s.lvt,sq:!0},{key:"corr",name:"",x0:R,z0:ve,x1:I,z1:Z,floor:s.lvt},{key:"staff",name:"Staff",x0:R,z0:C,x1:-8.5,z1:ve,floor:s.lvt,sq:!0},{key:"wash",name:"Washroom",x0:-8.5,z0:C,x1:-6,z1:ve,floor:s.tile},{key:"office",name:"Office",x0:-6,z0:C,x1:-3,z1:ve,floor:s.oak,sq:!0},{key:"ex1",name:"Exam 1",x0:-3,z0:C,x1:.5,z1:ve,floor:s.lvt,sq:!0},{key:"ex2",name:"Exam 2",x0:.5,z0:C,x1:4,z1:ve,floor:s.lvt,sq:!0},{key:"ex3",name:"Exam 3",x0:4,z0:C,x1:7.5,z1:ve,floor:s.lvt,sq:!0},{key:"proc",name:"Procedure",x0:7.5,z0:C,x1:I,z1:ve,floor:s.lvt,sq:!0}],de=e=>Wt((e-R)/(I-R));l("shell",n(0,0),I-R+.5,.18,b-C+.5,0,-.18,(C+b)/2,s.slab);const _e=[];for(const e of ue){const i=e.x1-e.x0,o=e.z1-e.z0,f=new Ft(i,.02,o);f.translate(i/2,.01,0);const m=f.attributes.uv,g=f.attributes.position,p=e.floor===s.oak?3.2:e.floor===s.tile?2.4:4;for(let y=0;y<m.count;y++)m.setXY(y,(g.getX(y)+e.x0)/p,(g.getZ(y)+(e.z0+e.z1)/2)/p);const S=new Ue(f,e.floor);S.position.set(e.x0,0,(e.z0+e.z1)/2),S.receiveShadow=!0,r.add(S),_e.push({mesh:S,at:de(e.x0)})}l("lobby",n(-1.75,6.15),4.4,.012,2.9,0,.02,0,s.rug,.004);const je=e=>Math.min(5,Math.floor(de(e)*6)),gt=[0,1,2,3,4,5].map(e=>V(`wall${e}`).g),ht=[],ae=(e,i,o,f)=>ht.push(e,.03,i,o,.03,f),ft=[],me=(e,i,o,f,m,g=[])=>{const p=i===f,S=Math.abs(p?o-e:f-i),y=p?Math.min(e,o):Math.min(i,f),$=g.map(([T,u])=>[T-u/2,T+u/2]).sort((T,u)=>T[0]-u[0]);let H=y;const K=[];for(const[T,u]of $)T>H&&K.push([H,T]),H=u;H<y+S&&K.push([H,y+S]);for(const[T,u]of K){const O=(T+u)/2,N=u-T,W=p?O:e,X=p?i:O,ce=`wall${je(W)}`,pe=p?N:m,E=p?m:N;l(ce,n(W,X),pe,G-.02,E,0,0,0,s.wall),l(ce,n(W,X),pe+.002,.02,E+.002,0,G-.02,0,s.poche),p?(ae(T,i-m/2,u,i-m/2),ae(T,i+m/2,u,i+m/2),ae(T,i-m/2,T,i+m/2),ae(u,i-m/2,u,i+m/2)):(ae(e-m/2,T,e-m/2,u),ae(e+m/2,T,e+m/2,u),ae(e-m/2,T,e+m/2,T),ae(e-m/2,u,e+m/2,u))}for(const[T,u,O]of g){const N=p?T:e,W=p?i:T,X=`wall${je(N)}`;l(X,n(N,W),p?u:m,G-2.14,p?m:u,0,2.12,0,s.wall),l(X,n(N,W),(p?u:m)+.002,.02,(p?m:u)+.002,0,G-.02,0,s.poche);const ce=p?T-u/2:e,pe=p?i:T-u/2,E=p?0:-Math.PI/2,J=E-O*1.25*(p?1:-1);ft.push({grp:`door${je(N)}`,f:n(ce,pe),w:u,ang:J});const ee=u-.04,Kt=10;for(let Ut=0;Ut<Kt;Ut++){const ni=E+(J-E)*Ut/Kt,li=E+(J-E)*(Ut+1)/Kt;ae(ce+Math.cos(ni)*ee,pe-Math.sin(ni)*ee,ce+Math.cos(li)*ee,pe-Math.sin(li)*ee)}ae(ce,pe,ce+Math.cos(J)*ee,pe-Math.sin(J)*ee)}};me(R,C,I,C,.25),me(R,C,R,b,.25),me(I,C,I,b,.25),me(R,ve,I,ve,.12,[[-9.6,.95,-1],[-7.3,.9,-1],[-4.6,.95,-1],[-1.3,.95,-1],[2.2,.95,-1],[5.7,.95,-1],[9.2,1.2,-1]]),me(R,Z,-3,Z,.12),me(1,Z,I,Z,.12,[[1.75,.95,1],[7.25,.95,1]]);for(const e of[-8.5,-6,-3,.5,4,7.5])me(e,C,e,ve,.12);me(1,Z,1,b,.12),me(6.5,Z,6.5,b,.12);const Xe=[R,-4,4,I],Ze=[C,b];for(const e of Xe)for(const i of Ze)l(`wall${je(e)}`,n(e,i),.45,G-.02,.45,0,0,0,s.card),l(`wall${je(e)}`,n(e,i),.452,.02,.452,0,G-.02,0,s.poche);for(let e=0;e<=14;e++)l("store",n(R+.25+e*(I-R-.5)/14,b),.06,G,.14,0,0,0,s.frame);l("store",n(0,b),I-R,.08,.14,0,2.3,0,s.frame),l("store",n(0,b),I-R,.12,.14,0,0,0,s.frame),l("store",n(0,b),I-R,G-.02,.012,0,.02,0,s.glass),l("store",n((1+I)/2,b-.03),I-1,.9,.012,0,.9,0,s.frost);const Ye=-7.6;for(const e of[-1,1])l("store",n(Ye+e*.48,b+.09),.9,2.18,.04,0,.02,0,s.glass),l("store",n(Ye+e*.08,b+.14),.03,1.2,.03,0,.5,0,s.chrome);l("store",n(Ye,b+.65),3.6,.08,1.3,0,2.62,0,s.white,.02);for(const e of[2.4,7.9])l("store",n(e+1.4,Z),2.6,1.6,.03,0,.9,0,s.glass);ae(R,b,I,b),ae(R,b+.14,I,b+.14);{const e="lobby";for(let p=-.75;p<=.75+1e-6;p+=.035){const S=-7.6+Math.sin(p)*1.9,y=4.25+Math.cos(p)*1.9*.48;l(e,n(S,y,p*.6),.045,1.04,.07,0,.04,0,s.timber,.008)}l(e,n(-7.6,4.25+.4),3.2,1,.45,0,.04,0,s.white,.02);for(let p=-.75;p<=.75-.05+1e-6;p+=.1){const S=-7.6+Math.sin(p+.05)*1.9,y=4.25+Math.cos(p+.05)*1.9*.48-.1;l(e,n(S,y,(p+.05)*.6),.4,.04,.34,0,1.08,0,s.quartz,.01)}l(e,n(-7.6,4.25+.3),3.1,.035,.6,0,.74,0,s.quartz,.01),A(e,n(-7.6-.8,4.25+.42,Math.PI),0,0,.775),A(e,n(-7.6+.8,4.25+.42,Math.PI),0,0,.775),we(e,n(-7.6-.8,4.25-.15,Math.PI)),we(e,n(-7.6+.8,4.25-.15,Math.PI));for(let p=R+.4;p<-3.2;p+=.11)l(e,n(p,Z+.09),.05,G-.1,.05,0,.02,0,s.timber,.006);l(e,n(-7.6,Z+.16),2.4,.5,.05,0,1.55,0,s.blue,.01),l(e,n(-7.6,Z+.19),2.2,.012,.012,0,1.58,0,s.lamp);for(const[p,S,y]of[[-3.3,5.5,.6],[-3.3,6.8,Math.PI-.6],[-.25,5.5,-.6],[-.25,6.8,Math.PI+.6]])Ge(e,n(p,S,y),s.navyFab);for(const[p,S,y]of[[-2.25,5,0],[-1.3,5,0],[-2.25,7.3,Math.PI],[-1.3,7.3,Math.PI]])Ge(e,n(p,S,y),s.sage);Ae(e,n(-1.78,6.15),.42,.42),Ae(e,n(-4,6.15),.22,.52),Ae(e,n(.45,4.3),.22,.52),l(e,n(.68,6.2,-Math.PI/2),3.2,.42,.5,0,0,0,s.timber,.02),l(e,n(.68,6.2,-Math.PI/2),3.2,.12,.52,0,.42,0,s.blue,.05),l(e,n(.86,6.2,-Math.PI/2),3.2,.5,.12,0,.52,0,s.blue,.05),Me(e,n(-10.9,7.4),1.2),Me(e,n(-4.6,7.5),1),Me(e,n(-11.4,4.3),.9),Me(e,n(.55,7.55),.9),l(e,n(-1,Z+.08),1.4,.9,.04,0,1.25,0,s.art,.01),l(e,n(-5.4,7.7),1.6,.9,.36,0,0,0,s.white,.02),l(e,n(-5.4,7.7),1.62,.03,.38,0,.9,0,s.timber,.01),he(e,-7.6-1,4.25+.3),he(e,-7.6,4.25+.4),he(e,-7.6+1,4.25+.3),he(e,-1.78,6.15,1.1,.42)}for(const[e,i,o]of[["op1",1,6.5],["op2",6.5,I]]){const f=(i+o)/2;lt(e,n(f,5.9,Math.PI)),Se(e,n(f+.3,Z+.36),o-i-1.6,.6),Fe(e,n(f+.7,5.3)),Fe(e,n(f-.75,5.5)),l(e,n(f-1.7,6.9),.5,.75,.45,0,0,0,s.white,.03),l(e,n(o-.4,6.3,-Math.PI/2),1.8,.88,.5,0,0,0,s.white,.02),l(e,n(o-.4,6.3,-Math.PI/2),1.82,.03,.52,0,.88,0,s.quartz,.008),A(e,n(o-.45,6.6,-Math.PI/2),0,0,.91),Me(e,n(i+.45,7.5),.8)}for(const[e,i,o]of[["ex1",-3,.5],["ex2",.5,4],["ex3",4,7.5]])$e(e,n(i+.5,-.5,Math.PI)),Se(e,n((i+o)/2+.3,C+.42),2.1,.2),Ne(e,n(o-.45,.45,Math.PI/2),1.3,.6),A(e,n(o-.3,.45,-Math.PI/2),0,0,.755),we(e,n(o-1,.45,Math.PI/2)),fe(e,n(o-1.1,1.3,Math.PI*.8),s.sage),Fe(e,n(i+1.4,.5)),l(e,n(i+.08,.95,Math.PI/2),.5,.36,.06,0,1.3,0,s.white,.01),l(e,n((i+o)/2+.6,ve-.08),.5,.7,.03,0,1.2,0,s.art2,.008);{const e="proc";$e(e,n(9.75,-.1,Math.PI/2)),Se(e,n(9.75,C+.42),3.6,-.9),P(e,n(9.75,-.1),.03,.03,.55,0,G-.55,0,s.white,8),l(e,n(9.75,-.1),.08,.08,.9,0,G-.6,.38,s.white,.02,.6),P(e,n(9.75,.55),.34,.26,.14,0,1.75,0,s.white,28),P(e,n(9.75,.55),.24,.24,.01,0,1.745,0,s.lamp,28),l(e,n(I-.5,1.05),.55,.9,.5,0,0,0,s.white,.03),l(e,n(9.75-1.7,1.15),.55,.9,.5,0,0,0,s.white,.03),Fe(e,n(9.75+1.2,.8)),A(e,n(I-.5,1.05,-Math.PI/2),0,0,.9)}{const e="office";Ne(e,n(-4.5,-.9),1.8,.75),A(e,n(-4.85,-1.12),0,0,.755),A(e,n(-4.15,-1.12),0,0,.755),we(e,n(-4.5,-1.55)),fe(e,n(-4.9,.05,Math.PI),s.navyFab),fe(e,n(-4.1,.05,Math.PI),s.navyFab),l(e,n(-5.76,-.4,Math.PI/2),1.6,2,.36,0,0,0,s.walnut,.01);for(let i=0;i<4;i++)l(e,n(-5.57,-.4,Math.PI/2),1.5,.3,.02,0,.1+i*.47,0,s.white);Me(e,n(-3.45,-1.75),.9)}{const e="staff";l(e,n(-10.3,-.1),1.6,.04,.9,0,.72,0,s.walnut,.015),P(e,n(-10.3,-.1),.04,.04,.72,0,0,0,s.metal,8),P(e,n(-10.3,-.1),.3,.3,.02,0,0,0,s.metal,20),fe(e,n(-10.75,.6,Math.PI),s.blue),fe(e,n(-9.85,.6,Math.PI),s.blue),fe(e,n(-10.75,-.8),s.blue),fe(e,n(-9.85,-.8),s.blue),Se(e,n(-10.6,C+.42),2.4,-.5),l(e,n(-8.95,C+.5),.75,2,.66,0,0,0,s.chrome,.03),he(e,-10.3,-.1,1,.18)}{const e="wash";l(e,n(-7.25,C+.55),.4,.38,.6,0,0,.1,s.white,.12),l(e,n(-7.25,C+.2),.4,.7,.15,0,.25,0,s.white,.04),l(e,n(-6.35,.6,-Math.PI/2),.9,.06,.5,0,.84,0,s.quartz,.02),l(e,n(-6.35,.6,-Math.PI/2),.4,.1,.3,0,.8,.02,s.white,.04),l(e,n(-6.08,.6,-Math.PI/2),.7,.8,.02,0,1.15,0,s.chrome,.01),l(e,n(-8.38,-.9,Math.PI/2),.9,.035,.035,0,.85,.06,s.chrome,.015)}for(const e of[ve+.08,Z-.08])l("corr",n(0,e),I-R-.6,.025,.025,0,G-.09,0,s.lamp);l("lobby",n(-7.6,Z+.14),8.4,.025,.025,0,G-.09,0,s.lamp);for(const e of[-10.6,-5.3,3.1,8.6])l("corr",n(e,Z-.08),1,.65,.03,0,1.2,0,e<0?s.art:s.art2,.008);for(const e of ft)ct(e.grp,e.f,e.w,e.ang);{const e="street",i=new Ft(70,.15,4.6),o=i.attributes.position,f=i.attributes.uv;for(let u=0;u<f.count;u++)f.setXY(u,o.getX(u)/1.5,o.getZ(u)/1.5);const m=new Ue(i,s.conc);m.position.set(0,-.075,b+2.3),m.receiveShadow=!0,r.add(m),l(e,n(0,b+4.65),70,.17,.25,0,-.17,0,s.slab);const g=new Ft(80,.1,13),p=g.attributes.position,S=g.attributes.uv;for(let u=0;u<S.count;u++)S.setXY(u,p.getX(u)/6,p.getZ(u)/6);const y=new Ue(g,s.asph);y.position.set(0,-.23,b+11.25),y.receiveShadow=!0,r.add(y);for(let u=-30;u<30;u+=6)l(e,n(u,b+15.6),3,.01,.14,0,-.18,0,s.line);for(let u=-27;u<=27;u+=2.7)l(e,n(u,b+7.2),.1,.01,4.8,0,-.18,0,s.line);for(const u of[-16,1.8,12.5,22]){l(e,n(u,b+3.4),1.2,.02,1.2,0,0,0,s.metal);const O=n(u,b+3.4);P(e,O,.06,.1,3,0,0,0,s.bark,10),P(e,O,.03,.045,1.2,.25,2.3,0,s.bark,6,0,-.55),P(e,O,.03,.045,1.1,-.22,2.5,.05,s.bark,6,.2,.6);for(let N=0;N<26;N++){const W=B()*Math.PI*2,X=B(),ce=Math.sqrt(X)*1.15,pe=3.3+B()*1.9-ce*.35;Le(e,O,.42+B()*.32,Math.cos(W)*ce,pe,Math.sin(W)*ce,[s.leaf,s.leaf2,s.leaf3][N%3],1,.85,1,2)}}for(const u of[-21,-9.8,.8,11.8,22])P(e,n(u,b+4.2),.05,.07,5.2,0,0,0,s.frame,8),l(e,n(u,b+4.2),.08,.06,1.2,0,5.15,-.5,s.frame),l(e,n(u,b+3.7),.5,.06,.22,0,5.08,0,s.street,.02);for(let u=-12;u<=12;u+=2)P(e,n(u,b+4.1),.08,.08,.82,0,0,0,s.frame,16),P(e,n(u,b+4.1),.075,.075,.05,0,.82,0,s.street,16),P(e,n(u,b+4.1),.085,.085,.03,0,.87,0,s.frame,16);for(const u of[5.2,5.9,6.6])q(e,j("tor",()=>new is(.35,.025,6,20,Math.PI)),s.chrome,n(u,b+2.8,Math.PI/2));const $=[],H=(u,O,N,W,X=0)=>{$.push(u,X,O,N,X,O,N,X,O,N,X,W,N,X,W,u,X,W,u,X,W,u,X,O)};for(const[u,O]of[[-36,-24],[-24,R],[I,24],[24,36]]){H(u,C,O,b),H(u,C,O,b,G);for(const N of[u,O])for(const W of[C,b])$.push(N,0,W,N,G,W);for(let N=u+1.5;N<O-.1;N+=1.5)$.push(N,0,b,N,G,b)}const K=new ii;K.setAttribute("position",new Et($,3)),r.add(new ui(K,new di({color:"#2f6fbf",transparent:!0,opacity:.5})));const T=new Ue(new Ot(400,400),new yt({color:"#0a2a52",roughness:1}));T.rotation.x=-Math.PI/2,T.position.y=-.3,T.receiveShadow=!0,r.add(T)}for(const{g:e,b:i}of Object.values(k)){for(const[o,f]of i){const m=new Ue(ss(f),o);m.castShadow=!o.transparent&&o!==s.rug&&o!==s.line,m.receiveShadow=!0,e.add(m)}r.add(e)}const xt=ue.map(e=>({g:k[e.key]?.g,at:de(e.x0)})).filter(e=>e.g),Mt=Object.keys(k).filter(e=>e.startsWith("door")).map(e=>({g:k[e].g,i:+e.slice(4)})),ut=new di({color:"#9cc5ff",transparent:!0,opacity:.95}),Ke=[];Xe.forEach(e=>Ke.push(e,.035,C-2.3,e,.035,b+.6)),Ze.forEach(e=>Ke.push(R-2.3,.035,e,I+.6,.035,e));const He=[],Oe=(e,i,o,f)=>{He.push(e,.035,i,o,.035,f);const m=i===f?0:.25,g=i===f?.25:0;for(const[p,S]of[[e,i],[o,f]])He.push(p-m,.035,S-g,p+m,.035,S+g),He.push(p-.14,.035,S+.14,p+.14,.035,S-.14)};Oe(R,C-1.25,I,C-1.25),Oe(R-1.25,C,R-1.25,b),Oe(R,C-.65,-4,C-.65),Oe(-4,C-.65,4,C-.65),Oe(4,C-.65,I,C-.65);const dt=[...Ke,...ht,...He],Je=new ii;Je.setAttribute("position",new Et(dt,3)),r.add(new ui(Je,ut));const et=dt.length/3,We=[],ye=(e,i,o,f,m,g,p=0,S=!1)=>{const $=S?512:160,H=it(512,$,u=>{if(u.textAlign="center",u.textBaseline="middle",S){u.strokeStyle="#9cc5ff",u.lineWidth=18,u.beginPath(),u.arc(256,256,220,0,Math.PI*2),u.stroke(),u.fillStyle="#9cc5ff",u.font='600 250px "Inter Tight", system-ui, sans-serif',u.fillText(e,256,268);return}u.fillStyle="#d7e7ff",u.font='600 62px "Inter Tight", system-ui, sans-serif',u.fillText(e,256,i?52:80),i&&(u.fillStyle="#9cc5ff",u.font='500 42px "Inter", system-ui, sans-serif',u.fillText(i,256,118))}),K=new Gt({map:H,transparent:!0,opacity:0,depthWrite:!1}),T=new Ue(new Ot(m,m*$/512),K);T.rotation.set(-Math.PI/2,0,p),T.position.set(o,.05,f),T.renderOrder=2,r.add(T),We.push({mesh:T,at:g})},tt=e=>`${Math.round((e.x1-e.x0)*(e.z1-e.z0)*10.764)} sq ft`;for(const e of ue)e.name&&ye(e.name,e.sq?tt(e):"",(e.x0+e.x1)/2,(e.z0+e.z1)/2+(e.key==="lobby"?.9:0),Math.min(e.key==="lobby"?5:3.3,(e.x1-e.x0)*.94),de(e.x0));["A","B","C","D"].forEach((e,i)=>ye(e,"",Xe[i],C-2.8,.9,0,0,!0)),["1","2"].forEach((e,i)=>ye(e,"",R-2.8,Ze[i],.9,0,0,!0)),ye(`78' 9"`,"",0,C-1.6,2.2,1),ye(`33' 6"`,"",R-1.6,(C+b)/2,2.2,1,Math.PI/2);const Dt=[];for(const[e,i,o]of[[-7.6,5.6,4.5],[-1.8,6.1,6],[3.75,5.8,6],[9.25,5.8,6],[-1.2,0,4],[2.2,0,4],[5.7,0,4],[9.8,0,5],[-4.5,0,4],[-10.3,0,4],[0,2.7,4]]){const f=new $i("#ffd3a0",0,9,2);f.position.set(e,1.95,i),f.userData.max=o,r.add(f),Dt.push(f)}const qt=new yt({color:"#dfe2e7",roughness:.95}),Qt=new Gt({color:"#fff1dc"}),mt=new Jt;r.add(mt);for(const e of ue){const i=new Ue(new Ot(e.x1-e.x0,e.z1-e.z0),qt);i.rotation.x=Math.PI/2,i.position.set((e.x0+e.x1)/2,G-.001,(e.z0+e.z1)/2),mt.add(i);const o=e.key==="corr"?2.5:1.6;for(let f=e.x0+o/2;f<e.x1-.2;f+=o)for(let m=e.z0+.9;m<e.z1-.3;m+=e.key==="corr"?9:1.8){e.key==="corr"&&(m=(e.z0+e.z1)/2);const g=new Ue(new Xi(.08,20),Qt);if(g.rotation.x=Math.PI/2,g.position.set(f,G-.004,m),mt.add(g),e.key==="corr")break}}const $t=it(256,256,e=>{const i=e.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,256,256)}),ke=new Jt;r.add(ke);const qe=[],be=(e,i,o,f,m=.036)=>{const g=new Gt({map:$t,color:"#ffc98c",transparent:!0,opacity:0,depthWrite:!1,blending:gi});g.userData.max=f,qe.push(g);const p=new Ue(new Ot(o*2,o*2),g);p.rotation.x=-Math.PI/2,p.position.set(e,m,i),p.renderOrder=3,ke.add(p)};for(const e of[-8.6,-7.6,-6.6])be(e,4.7,1.1,.55);be(-1.78,6.15,2.2,.5);for(const[e,i,o]of[[3.75,5.8,2.2],[9.25,5.8,2.2],[-1.2,0,1.6],[2.2,0,1.6],[5.7,0,1.6],[9.8,0,2],[-4.5,-.6,1.5],[-10.3,-.1,1.5],[-7.2,-.2,1.1]])be(e,i,o,.32);for(let e=-10;e<=10;e+=2.5)be(e,2.7,.9,.28);for(const e of[-21,-9.8,.8,11.8,22])be(e,b+3.5,2.6,.5,.01);for(let e=-12;e<=12;e+=2)be(e,b+4.1,.5,.35,.01);let oe=null,Pe=null;a||(oe=new fs(h,new at(1,1,{type:ot,samples:4})),oe.addPass(new us(r,v)),Pe=new ze(r,v,1,1),Pe.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1,scale:1.1,samples:12}),Pe.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Pe.blendIntensity=.9,oe.addPass(Pe),oe.addPass(new vt(new ge(1,1),.38,.45,1.15)),oe.addPass(new xs),h.setClearColor(new Qe(ti).convertSRGBToLinear(),1));const si=new ie,ai=new ie,wt=new ie,pt=new ie,St=new ie,Xt=new ie,wi=new Qe("#fff3e3"),Si=new Qe("#ffb98a");let Ce=1,Ie=1,Q=0,bt=0,Pt=0,Tt=0;const oi=()=>{const e=x.getBoundingClientRect();Ce=Math.max(1,e.width),Ie=Math.max(1,e.height),h.setSize(Ce,Ie,!1),oe?.setSize(Ce,Ie),oe?.setPixelRatio(h.getPixelRatio()),v.aspect=Ce/Ie,v.updateProjectionMatrix()};let Nt=0,Zt=0,Yt=0;const _t=()=>{Nt||(Nt=requestAnimationFrame(()=>{Nt=0;const e=Zt-Pt,i=Yt-Tt;Pt+=e*.12,Tt+=i*.12,Math.abs(e)+Math.abs(i)>.002?_t():(Pt=Zt,Tt=Yt),It()}))},It=()=>{const e=Ce>980,i=Ie>Ce,o=Math.max(Ee(bt/1.8),re(Q,0,.05));Je.setDrawRange(0,Math.floor(et*o/2)*2),gt.forEach((E,J)=>{const ee=Math.max(Ct((bt-1.5-J*.14)/1.1),re(Q,0,.06));E.scale.y=Math.max(.001,ee),E.visible=ee>.001});const f=Ee(re(Q,.06,.2));s.glass.opacity=.3*f,s.frost.opacity=.75*f;const m=V("store").g;m.scale.y=Math.max(.001,Ct(re(Q,.05,.16))),m.visible=m.scale.y>.002,Mt.forEach(({g:E,i:J})=>{const ee=Ct(re(Q,.08+J*.015,.16+J*.015));E.visible=ee>.001,E.scale.y=Math.max(.001,ee)}),_e.forEach(({mesh:E,at:J})=>{const ee=Ct(re(Q,.2+J*.13,.27+J*.13));E.scale.x=Math.max(1e-4,ee),E.visible=ee>5e-4}),xt.forEach(({g:E,at:J})=>{const ee=Ct(re(Q,.22+J*.13,.3+J*.13));E.visible=ee>.001,E.position.y=(1-ee)*2.2}),ut.opacity=.95*(1-.7*Ee(re(Q,.22,.4)));const g=1-Ee(re(Q,.24,.34));We.forEach(({mesh:E,at:J})=>{E.material.opacity=Math.max(Ee((bt-.9-J*1.2)/.6),re(Q,0,.04))*g,E.visible=g>.001});const p=Ee(re(Q,.4,.56));s.lamp.emissiveIntensity=3.2*p,s.screen.emissiveIntensity=.9*p,s.street.emissiveIntensity=1.3*p,Dt.forEach(E=>{E.intensity=E.userData.max*p,E.visible=p>.001}),M.intensity=Re(1.6,.55,p),M.color.copy(wi).lerp(Si,p),_.intensity=Re(.55,.2,p),r.environmentIntensity=Re(.35,.15,p),mt.visible=p>.001,qe.forEach(E=>{E.opacity=E.userData.max*p}),ke.visible=p>.001;const S=Ee(re(Q,.04,.4)),y=Ee(re(Q,.46,.64)),$=1-Ee(re(Q,.04,.14)),H=mi.degToRad(Re(i?66:16,i?54:-10,S)+Pt*2.4),K=mi.degToRad(Re(i?60:64,i?46:44,S)-Tt*1.4),u=(i?48/Math.max(.42,Ce/Ie)**.7:56/Math.min(1,Ce/Ie/1.45)**.6)*Re(1,i?.97:.86,S);pt.set(i?.6:Re(.5,0,S),0,i?3.4:Re(2.6,3.2,S)),wt.set(Math.sin(H)*Math.cos(K)*u,Math.sin(K)*u,Math.cos(H)*Math.cos(K)*u).add(pt);const O=Ee(re(Q,.4,.52)),N=Ee(re(Q,.5,.64));si.set(-8.4,i?9.5:7.5,6.4),ai.set(-6.6,.4,4.6),i?(St.set(-11.3,1.7,6.75),Xt.set(-6.6,.75,4)):(St.set(-10.6,1.62,7.4),Xt.set(-5.6,1,4.3)),St.x+=Pt*.25,St.y-=Tt*.12,wt.lerp(si,O),pt.lerp(ai,O),wt.lerp(St,N),pt.lerp(Xt,N),v.position.copy(wt),v.lookAt(pt);const W=r.fog,X=wt.distanceTo(pt);W.near=Re(X*1.1,40,y),W.far=Re(X*2.6,120,y),v.fov=Re(30,i?66:52,y),v.updateProjectionMatrix();const ce=e?-Ce*.2*$:0,pe=e?0:-Ie*.16*$;ce||pe?v.setViewOffset(Ce,Ie,ce,pe,Ce,Ie):v.clearViewOffset(),oe?oe.render():h.render(r,v)};oi();const ri=new ResizeObserver(()=>{oi(),_t()});return ri.observe(x),window.__hero={set:e=>{Q=e,It()},intro:e=>{bt=e,It()}},{ready:Promise.resolve().then(It),set(e){e!==Q&&(Q=e,_t())},intro(e){bt=e,_t()},pointer(e,i){Zt=e,Yt=i,_t()},dispose(){ri.disconnect(),cancelAnimationFrame(Nt),oe?.dispose(),Pe?.dispose(),d.dispose(),c.dispose(),r.traverse(e=>{e.geometry?.dispose()}),Object.values(s).forEach(e=>{e.map?.dispose(),e.dispose()}),h.dispose(),t.remove()}}}export{bs as mountHero};
