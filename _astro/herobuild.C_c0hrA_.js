import{S as ze,e as Qe,f as le,p as Ve,d as Ze,M,q as qe,r as Je,s as $e,O as et,B as Me,F as be,t as W,U as he,u as E,v as te,w as se,x as tt,T as st,C as k,V as N,k as He,j as We,R as it,y as at,z as rt,J as ot,K as nt,Q as lt,A as ht,X as ut,N as ke,Y as ft,W as ct,P as dt,Z as pt,i as mt,H as gt,D as vt,n as wt,_ as Mt,a as Ne,b as bt,$ as xt,a0 as Ue,G as Ie,m as _t,I as Tt,c as we,L as Oe,a1 as Ct,l as St,E as Pt,g as Le}from"./three.module.C9BrJZcX.js";import{m as yt}from"./BufferGeometryUtils.7-JoKOiY.js";class Rt extends ze{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Qe;e.deleteAttribute("uv");const t=new le({side:Ve}),r=new le,o=new Ze(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const s=new M(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const n=new qe(e,r,6),i=new Je;i.position.set(-10.906,2.009,1.846),i.rotation.set(0,-.195,0),i.scale.set(2.328,7.905,4.651),i.updateMatrix(),n.setMatrixAt(0,i.matrix),i.position.set(-5.607,-.754,-.758),i.rotation.set(0,.994,0),i.scale.set(1.97,1.534,3.955),i.updateMatrix(),n.setMatrixAt(1,i.matrix),i.position.set(6.167,.857,7.803),i.rotation.set(0,.561,0),i.scale.set(3.927,6.285,3.687),i.updateMatrix(),n.setMatrixAt(2,i.matrix),i.position.set(-2.017,.018,6.124),i.rotation.set(0,.333,0),i.scale.set(2.002,4.566,2.064),i.updateMatrix(),n.setMatrixAt(3,i.matrix),i.position.set(2.291,-.756,-2.621),i.rotation.set(0,-.286,0),i.scale.set(1.546,1.552,1.496),i.updateMatrix(),n.setMatrixAt(4,i.matrix),i.position.set(-2.193,-.369,-5.547),i.rotation.set(0,.516,0),i.scale.set(3.875,3.487,2.986),i.updateMatrix(),n.setMatrixAt(5,i.matrix),this.add(n);const p=new M(e,X(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const m=new M(e,X(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const v=new M(e,X(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const U=new M(e,X(43));U.position.set(-.462,8.89,14.52),U.scale.set(4.38,5.441,.088),this.add(U);const T=new M(e,X(20));T.position.set(3.235,11.486,-12.541),T.scale.set(2.5,2,.1),this.add(T);const G=new M(e,X(100));G.position.set(0,20,0),G.scale.set(1,.1,1),this.add(G)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function X(c){return new $e({color:0,emissive:16777215,emissiveIntensity:c})}const ne={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const At=new et(-1,1,1,-1,0,1);class Et extends Me{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}}const Bt=new Et;class xe{constructor(e){this._mesh=new M(Bt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,At)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ft extends Z{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof W?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=he.clone(e.uniforms),this.material=new W({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xe(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ge extends Z{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let n,i;this.inverse?(n=0,i=1):(n=1,i=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,n,4294967295),s.buffers.stencil.setClear(i),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class Dt extends Z{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new E);this._width=r.width,this._height=r.height,t=new te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:se}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ft(ne),this.copyPass.material.blending=tt,this.timer=new st}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,s=this.passes.length;o<s;o++){const n=this.passes[o];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),n.needsSwap){if(r){const i=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(i.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(i.EQUAL,1,4294967295)}this.swapBuffers()}Ge!==void 0&&(n instanceof Ge?r=!0:n instanceof Dt&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new E);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ut extends Z{constructor(e,t,r=null,o=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new k}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let s,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=o}}const It={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new k(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Y extends Z{constructor(e,t=1,r,o){super(),this.strength=t,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new E(e.x,e.y):new E(256,256),this.clearColor=new k(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new te(s,n,{type:se,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const U=new te(s,n,{type:se,depthBuffer:!1});U.texture.name="UnrealBloomPass.h"+v,U.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(U);const T=new te(s,n,{type:se,depthBuffer:!1});T.texture.name="UnrealBloomPass.v"+v,T.texture.generateMipmaps=!1,this.renderTargetsVertical.push(T),s=Math.round(s/2),n=Math.round(n/2)}const i=It;this.highPassUniforms=he.clone(i.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new W({uniforms:this.highPassUniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new E(1/s,1/n),s=Math.round(s/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=he.clone(ne.uniforms),this.blendMaterial=new W({uniforms:this.copyUniforms,vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,premultipliedAlpha:!0,blending:He,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new k,this._oldClearAlpha=1,this._basic=new We,this._fsQuad=new xe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(r,o);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(r,o),this.renderTargetsVertical[s].setSize(r,o),this.separableBlurMaterials[s].uniforms.invSize.value=new E(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,t,r,o,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let i=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=i.texture,this.separableBlurMaterials[p].uniforms.direction.value=Y.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Y.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),i=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=n}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(r*r))/r);const o=[],s=[];for(let n=1;n<e;n+=2){const i=t[n],p=n+1<e?t[n+1]:0,m=i+p;o.push((n*i+(n+1)*p)/m),s.push(m)}return new W({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new E(.5,.5)},direction:{value:new E(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:o},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new W({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Y.BlurDirectionX=new E(1,0);Y.BlurDirectionY=new E(0,1);const re={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ot extends Z{constructor(){super(),this.isOutputPass=!0,this.uniforms=he.clone(re.uniforms),this.material=new it({name:re.name,uniforms:this.uniforms,vertexShader:re.vertexShader,fragmentShader:re.fragmentShader}),this._fsQuad=new xe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ot?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ht?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ut?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ke?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ft&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const je=c=>Math.min(Math.max(c,0),1),L=(c,e,t)=>je((c-e)/(t-e)),y=c=>(c=je(c),c*c*c*(c*(c*6-15)+10)),D=(c,e,t)=>c+(e-c)*t,l=26,u=14,A=4.5,Q=4,Lt=A+Q+.9,R=u/2-1.8,oe="#021d40";function Vt(c){const e=document.createElement("canvas");e.className="h3-canvas",e.setAttribute("aria-hidden","true"),c.prepend(e);const t=innerWidth<768,r=new ct({canvas:e,antialias:t,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__recording});r.setPixelRatio(Math.min(devicePixelRatio,t?1.5:1.75)),r.setClearColor(oe,1),r.toneMapping=ke,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=dt,r.localClippingEnabled=!0;const o=new ze,s=new pt(r),n=s.fromScene(new Rt,.04);o.environment=n.texture,o.environmentIntensity=.28;const i=new mt(30,1,.5,400),p=new gt("#bcd6ff",oe,.7);o.add(p);const m=new vt("#ffd6ad",1.6);m.position.set(-34,20,26),m.castShadow=!0;const v=t?2048:4096;m.shadow.mapSize.set(v,v),Object.assign(m.shadow.camera,{left:-26,right:26,top:22,bottom:-22,near:1,far:120}),m.shadow.bias=-3e-4,m.shadow.normalBias=.03,o.add(m);const U=new M(new wt(300,32,16),new W({side:Ve,depthWrite:!1,fog:!1,uniforms:{top:{value:new k(oe)},glow:{value:new k("#123f7a")}},vertexShader:"varying float vy; void main(){ vy = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 glow; varying float vy; void main(){ gl_FragColor = vec4(mix(glow, top, smoothstep(-0.02, 0.28, vy)), 1.0); #include <colorspace_fragment> }"}));o.add(U),o.fog=new Mt("#0b3166",70,200);const T=new M(new Ne(400,400),new bt({color:"#000a1a",opacity:.5}));T.rotation.x=-Math.PI/2,T.receiveShadow=!0,o.add(T);const G=new xt(240,120,"#0f4384","#0b3570");G.material.transparent=!0,G.material.opacity=.55,G.position.y=.005,o.add(G);const ue=new Ue(new N(0,-1,0),0),_e=new Ue(new N(0,1,0),0),C=a=>new le({clippingPlanes:[ue],...a}),h={slab:C({color:"#d5dae1",roughness:.85}),paving:C({color:"#4a5563",roughness:.85}),white:C({color:"#dfe4ea",roughness:.6}),frame:C({color:"#1e2935",roughness:.4,metalness:.6}),timber:C({color:"#b8875a",roughness:.65}),brand:C({color:"#1475bc",roughness:.4,metalness:.1}),leaf:C({color:"#2f5a43",roughness:.85,flatShading:!0}),trunk:C({color:"#5a4636",roughness:.9}),inner:C({color:"#3a3f47",roughness:.8,emissive:"#ffc98c",emissiveIntensity:0}),light:C({color:"#ffffff",emissive:"#ffdcae",emissiveIntensity:0}),bollard:C({color:"#2a3542",emissive:"#ffe2b8",emissiveIntensity:0}),glass:new le({color:"#4d6d93",roughness:.03,metalness:.5,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:1.6,clippingPlanes:[ue]})},ie=new Ie;o.add(ie);const Te=[],f=(a,d,b,g,z,j,K,ae=!0,H=!0)=>{const ee=new Qe(a,d,b),P=new M(ee,K);return P.position.set(g,z+d/2,j),P.castShadow=H,P.receiveShadow=!0,ie.add(P),ae&&(P.updateMatrix(),Te.push(new Pt(ee).applyMatrix4(P.matrix))),P};f(l+10,.12,u+12,0,0,2,h.paving,!1,!1),f(l,.3,u,0,.12,0,h.slab);const B=.42,x=5.5;f(l/2-x,A-.3,u,(x+l/2)/2,B,0,h.white);const q=x+l/2;f(q,A-.3,.06,-l/2+q/2,B,R,h.glass,!0,!1),f(.06,A-.3,R+u/2,-l/2+.2,B,(R-u/2)/2,h.glass,!0,!1);for(let a=-l/2;a<=x+.01;a+=q/10)f(.12,A-.3,.14,a,B,R,h.frame,!1);f(q,.18,.16,-l/2+q/2,A-.5,R,h.frame,!1),f(2.2,.08,.3,-2,B+2.4,R+.05,h.frame,!1),f(l-.4,A-.3,.2,0,B,-u/2+.2,h.inner,!1),f(5,1.1,1.2,-4,B,-1.5,h.timber),f(5,.08,1.4,-4,B+1.1,-1.5,h.white,!1),[[-9,1],[-7.6,1],[-9,-.6]].forEach(([a,d])=>f(1,.8,1,a,B,d,h.white,!1));for(let a=0;a<6;a++)f(.35,A-.3,.35,-l/2+1+a*((l-2)/5),B,u/2-.4,h.frame);const I=A+.12;f(l,.4,u,0,I,0,h.slab),f(l,1,.45,0,I+.4,u/2-.2,h.white),f(l,1.3,.45,0,I+Q-.9,u/2-.2,h.white),f(l-.6,Q-2.3,.06,0,I+1.4,u/2-.3,h.glass,!0,!1);for(let a=-l/2+.6;a<l/2;a+=1.25)f(.18,Q-2.3,.5,a,I+1.4,u/2-.05,h.timber,!1);f(.45,Q+.4,u,-l/2+.22,I+.4,0,h.white),f(.45,Q+.4,u,l/2-.22,I+.4,0,h.white),f(l,Q+.4,.3,0,I+.4,-u/2+.15,h.inner,!1);const V=I+Q+.4;f(l+.6,.45,u+.6,0,V,0,h.white),f(l+.6,.5,.25,0,V+.45,u/2+.17,h.white),f(l+.6,.5,.25,0,V+.45,-u/2-.17,h.white),f(.25,.5,u+.6,-l/2-.17,V+.45,0,h.white),f(.25,.5,u+.6,l/2+.17,V+.45,0,h.white),f(1.1,V+.95,1.1,x,.12,u/2+.1,h.brand);for(let a=-l/2+2.5;a<l/2-1;a+=4)for(let d=-u/2+2.5;d<R-.5;d+=3.5)a<x-.5&&f(2.4,.06,.6,a,A-.06,d,h.light,!1,!1),f(2.4,.06,.6,a,V-.08,d,h.light,!1,!1);f(l-1,.1,.25,0,A-.32,R+1.2,h.light,!1,!1),[[-10,9.5],[10.5,9.5]].forEach(([a,d])=>{f(4.2,.6,1.6,a,.12,d,h.white);const b=new M(new _t(.1,.14,2.6,6),h.trunk);b.position.set(a,2,d),b.castShadow=!0,ie.add(b);const g=new M(new Tt(1.2,1),h.leaf);g.position.set(a,4.6,d),g.scale.set(.85,2,.85),g.castShadow=!0,ie.add(g)});for(let a=0;a<6;a++)f(.22,.9,.22,-9+a*3.4,.12,12.4,h.bollard,!1,!1);const Ce=new we({color:"#8ec0ff",transparent:!0,opacity:.9,clippingPlanes:[_e],fog:!0}),fe=new Oe(yt(Te),Ce);o.add(fe);const ce=[],w=(a,d)=>ce.push(a[0],.03,a[1],d[0],.03,d[1]),Se=(a,d,b,g)=>{w([a,d],[b,d]),w([b,d],[b,g]),w([b,g],[a,g]),w([a,g],[a,d])};Se(-l/2,-u/2,l/2,u/2),w([x,-u/2],[x,R]),w([x,-1],[l/2,-1]),w([x+3.5,-u/2],[x+3.5,-1]),w([-l/2,-3.5],[-6.5,-3.5]),w([-6.5,-u/2],[-6.5,-3.5]),w([-1,-u/2],[-1,-3.5]),w([-l/2,R],[x,R]),Se(-6.5,-2.1,-1.5,-.9),w([-l/2,u/2+3],[l/2,u/2+3]),w([-l/2,u/2+2.4],[-l/2,u/2+3.6]),w([l/2,u/2+2.4],[l/2,u/2+3.6]);const de=new Me;de.setAttribute("position",new be(ce,3));const Pe=new we({color:"#9cc5ff",transparent:!0,opacity:.95}),Ke=new Oe(de,Pe);o.add(Ke);const Xe=ce.length/3,ye=new Ct(new Me().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,d])=>new N(a*(l/2+.8),0,d*(u/2+.8)))),new we({color:"#cfe3ff",transparent:!0,opacity:0})),pe=new M(new Ne(l+1.6,u+1.6),new We({color:"#4d9bff",transparent:!0,opacity:0,depthWrite:!1,side:St,blending:He}));pe.rotation.x=-Math.PI/2;const me=new Ie;me.add(ye,pe),o.add(me);let O=null;t||(O=new Nt(r,new te(1,1,{type:se,samples:4})),O.addPass(new Ut(o,i)),O.addPass(new Y(new E(1,1),.38,.45,1.05)),O.addPass(new Ot),r.setClearColor(new k(oe).convertSRGBToLinear(),1));const Re=new N,ge=new N;let _=1,S=1,F=0,J=0,Ae=0,Ee=0;const Be=()=>{const a=c.getBoundingClientRect();_=Math.max(1,a.width),S=Math.max(1,a.height),r.setSize(_,S,!1),O?.setSize(_,S),O?.setPixelRatio(r.getPixelRatio()),i.aspect=_/S,i.updateProjectionMatrix()},$=()=>{const a=_>980,d=y(J/1.4),b=y((J-.9)/1.8),g=y(L(F,.2,.38)),z=y(L(F,.38,.58)),j=1-y(L(F,.05,.14));de.setDrawRange(0,Math.floor(Xe*d/2)*2),Pe.opacity=.95*(1-.6*g),fe.visible=b>.001,fe.scale.y=Math.max(.001,b);const K=g*(Lt+.6);ue.constant=K,_e.constant=-K,Ce.opacity=.9*(1-.5*y(L(F,.08,.2))*(1-g));const ae=Math.sin(Math.PI*g);me.position.y=K,ye.material.opacity=ae,pe.material.opacity=.16*ae,Object.values(h).forEach(Ye=>{Ye.visible=K>.02}),h.glass.opacity=.55*y(L(F,.36,.46))*(1-.35*y(L(F,.42,.58)));const H=y(L(F,.42,.58));h.light.emissiveIntensity=2.4*H,h.inner.emissiveIntensity=1.1*H,h.bollard.emissiveIntensity=2.6*H,p.intensity=D(.7,.45,H),m.intensity=D(1.6,1,H);const ee=Le.degToRad(D(D(-40,-24,y(L(F,.06,.38))),-14,z)+Math.sin(J*.3)*3*j+Ae*5),P=Le.degToRad(D(D(34,22,y(L(F,.06,.38))),8,z)+Math.cos(J*.25)*1.5*j-Ee*3),De=S>_,ve=(De?70/Math.max(.45,_/S)**.9:66)*D(1,De?.92:.78,z)*(1-.06*g);ge.set(D(0,-.5,z),D(3.2,4.2,z),D(1,2,z)),Re.set(Math.sin(ee)*Math.cos(P)*ve,Math.sin(P)*ve,Math.cos(ee)*Math.cos(P)*ve).add(ge),i.position.copy(Re),i.lookAt(ge),a?i.setViewOffset(_,S,-_*.22*j,0,_,S):i.setViewOffset(_,S,0,-S*.24*j,_,S),O?O.render():r.render(o,i)};Be();const Fe=new ResizeObserver(()=>{Be(),$()});return Fe.observe(c),{ready:Promise.resolve().then($),set(a){F=a,$()},intro(a){J=a,$()},pointer(a,d){Ae=a,Ee=d,$()},dispose(){Fe.disconnect(),O?.dispose(),n.dispose(),s.dispose(),o.traverse(a=>{a.geometry?.dispose()}),Object.values(h).forEach(a=>a.dispose()),r.dispose(),e.remove()}}}export{Vt as mountHero};
