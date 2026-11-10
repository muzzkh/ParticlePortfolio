const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFLoader-CFMQjhCk.js","assets/SkeletonUtils-SuB-f61d.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,g as n,h as r,m as i,p as a,r as o,s,t as c,u as l}from"./content-BvgH6J5U.js";var u,d,f,p,m,h,g,_,v,y=`attached`,b=1e3,x=1001,S=1002,C=1003,w=1004,T=1005,E=1006,D=1007,O=1008,k=1009,A=1010,ee=1011,te=1012,ne=1013,re=1014,ie=1015,ae=1016,oe=1017,se=1018,ce=1020,le=35902,ue=35899,de=1021,fe=1022,pe=1023,me=1026,he=1027,ge=1028,_e=1029,ve=1030,ye=1031,be=1033,xe=33776,Se=33777,Ce=33778,we=33779,Te=35840,Ee=35841,De=35842,Oe=35843,ke=36196,Ae=37492,je=37496,Me=37488,Ne=37489,Pe=37490,Fe=37491,Ie=37808,Le=37809,j=37810,Re=37811,ze=37812,Be=37813,M=37814,Ve=37815,N=37816,He=37817,Ue=37818,We=37819,Ge=37820,Ke=37821,qe=36492,Je=36494,Ye=36495,Xe=36283,Ze=36284,Qe=36285,$e=36286,et=2201,tt=2202,nt=2300,rt=2301,it=2302,at=2303,ot=2400,st=2401,ct=2402,lt=2500,ut=2501,dt=3200,ft=`srgb`,pt=`srgb-linear`,mt=`linear`,ht=`srgb`,gt=7680,_t=35044,vt=35048,yt=2e3;function bt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function St(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ct(){let e=St(`canvas`);return e.style.display=`block`,e}var wt={};function Tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=Et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function F(...e){e=Et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Dt(...e){let t=e.join(` `);t in wt||(wt[t]=!0,P(...e))}function Ot(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var kt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},At=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},jt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Mt=1234567,Nt=Math.PI/180,Pt=180/Math.PI;function Ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[e&255]+jt[e>>8&255]+jt[e>>16&255]+jt[e>>24&255]+`-`+jt[t&255]+jt[t>>8&255]+`-`+jt[t>>16&15|64]+jt[t>>24&255]+`-`+jt[n&63|128]+jt[n>>8&255]+`-`+jt[n>>16&255]+jt[n>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function I(e,t,n){return Math.max(t,Math.min(n,e))}function It(e,t){return(e%t+t)%t}function Lt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Rt(e,t,n){return e===t?0:(n-e)/(t-e)}function zt(e,t,n){return(1-n)*e+n*t}function Bt(e,t,n,r){return zt(e,t,1-Math.exp(-n*r))}function Vt(e,t=1){return t-Math.abs(It(e,t*2)-t)}function Ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ut(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Wt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Gt(e,t){return e+Math.random()*(t-e)}function Kt(e){return e*(.5-Math.random())}function qt(e){e!==void 0&&(Mt=e);let t=Mt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jt(e){return e*Nt}function Yt(e){return e*Pt}function Xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Zt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Qt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function $t(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function en(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function tn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var nn={DEG2RAD:Nt,RAD2DEG:Pt,generateUUID:Ft,clamp:I,euclideanModulo:It,mapLinear:Lt,inverseLerp:Rt,lerp:zt,damp:Bt,pingpong:Vt,smoothstep:Ht,smootherstep:Ut,randInt:Wt,randFloat:Gt,randFloatSpread:Kt,seededRandom:qt,degToRad:Jt,radToDeg:Yt,isPowerOfTwo:Xt,ceilPowerOfTwo:Zt,floorPowerOfTwo:Qt,setQuaternionFromProperEuler:$t,normalize:tn,denormalize:en};g=Symbol.iterator;var L=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=I(this.x,e.x,t.x),this.y=I(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=I(this.x,e,t),this.y=I(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(I(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(I(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[g](){yield this.x,yield this.y}};u=L,u.prototype.isVector2=!0;var rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(I(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};_=Symbol.iterator;var R=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(on.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(on.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=I(this.x,e.x,t.x),this.y=I(this.y,e.y,t.y),this.z=I(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=I(this.x,e,t),this.y=I(this.y,e,t),this.z=I(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(I(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return an.copy(this).projectOnVector(e),this.sub(an)}reflect(e){return this.sub(an.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(I(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[_](){yield this.x,yield this.y,yield this.z}};d=R,d.prototype.isVector3=!0;var an=new R,on=new rn,z=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Dt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(sn.makeScale(e,t)),this}rotate(e){return Dt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(sn.makeRotation(-e)),this}translate(e,t){return Dt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(sn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};f=z,f.prototype.isMatrix3=!0;var sn=new z,cn=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ln=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function un(){let e={enabled:!0,workingColorSpace:pt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=fn(e.r),e.g=fn(e.g),e.b=fn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=pn(e.r),e.g=pn(e.g),e.b=pn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Dt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Dt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[pt]:{primaries:t,whitePoint:r,transfer:mt,toXYZ:cn,fromXYZ:ln,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:t,whitePoint:r,transfer:ht,toXYZ:cn,fromXYZ:ln,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),e}var dn=un();function fn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function pn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var mn,hn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mn===void 0&&(mn=St(`canvas`)),mn.width=e.width,mn.height=e.height;let t=mn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=mn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=St(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=fn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(fn(t[e]/255)*255):t[e]=fn(t[e]);return{data:t,width:e.width,height:e.height}}return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},gn=0,_n=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=Ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(vn(r[t].image)):e.push(vn(r[t]))}else e=vn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function vn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?hn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var yn=0,bn=new R,xn=class e extends At{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=x,i=x,a=E,o=O,s=pe,c=k,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=Ft(),this.name=``,this.source=new _n(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bn).x}get height(){return this.source.getSize(bn).y}get depth(){return this.source.getSize(bn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case b:e.x-=Math.floor(e.x);break;case x:e.x=e.x<0?0:1;break;case S:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case b:e.y-=Math.floor(e.y);break;case x:e.y=e.y<0?0:1;break;case S:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null,xn.DEFAULT_MAPPING=300,xn.DEFAULT_ANISOTROPY=1,v=Symbol.iterator;var Sn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=I(this.x,e.x,t.x),this.y=I(this.y,e.y,t.y),this.z=I(this.z,e.z,t.z),this.w=I(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=I(this.x,e,t),this.y=I(this.y,e,t),this.z=I(this.z,e,t),this.w=I(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(I(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[v](){yield this.x,yield this.y,yield this.z,yield this.w}};p=Sn,p.prototype.isVector4=!0;var Cn=class extends At{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:E,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Sn(0,0,e,t),this.scissorTest=!1,this.viewport=new Sn(0,0,e,t),this.textures=[];let r=new xn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:E,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new _n(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},wn=class extends Cn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tn=class extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=C,this.minFilter=C,this.wrapR=x,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},En=class extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=C,this.minFilter=C,this.wrapR=x,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},B=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Dn.setFromMatrixColumn(e,0).length(),i=1/Dn.setFromMatrixColumn(e,1).length(),a=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kn,e,An)}lookAt(e,t,n){let r=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),jn.crossVectors(n,Nn),jn.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),jn.crossVectors(n,Nn)),jn.normalize(),Mn.crossVectors(Nn,jn),r[0]=jn.x,r[4]=Mn.x,r[8]=Nn.x,r[1]=jn.y,r[5]=Mn.y,r[9]=Nn.y,r[2]=jn.z,r[6]=Mn.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],re=r[7],ie=r[11],ae=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*re,i[8]=a*C+o*D+s*ee+c*ie,i[12]=a*w+o*O+s*te+c*ae,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*re,i[9]=l*C+u*D+d*ee+f*ie,i[13]=l*w+u*O+d*te+f*ae,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*re,i[10]=p*C+m*D+h*ee+g*ie,i[14]=p*w+m*O+h*te+g*ae,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*re,i[11]=_*C+v*D+y*ee+b*ie,i[15]=_*w+v*O+y*te+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Dn.set(r[0],r[1],r[2]).length(),o=Dn.set(r[4],r[5],r[6]).length(),s=Dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),On.copy(this);let c=1/a,l=1/o,u=1/s;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=l,On.elements[5]*=l,On.elements[6]*=l,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=yt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};m=B,m.prototype.isMatrix4=!0;var Dn=new R,On=new B,kn=new R(0,0,0),An=new R(1,1,1),jn=new R,Mn=new R,Nn=new R,Pn=new B,Fn=new rn,In=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(I(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-I(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(I(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-I(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(I(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-I(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fn.setFromEuler(this),this.setFromQuaternion(Fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER=`XYZ`;var Ln=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Rn=0,zn=new R,Bn=new rn,Vn=new B,Hn=new R,Un=new R,Wn=new R,Gn=new rn,Kn=new R(1,0,0),qn=new R(0,1,0),Jn=new R(0,0,1),Yn={type:`added`},Xn={type:`removed`},Zn={type:`childadded`,child:null},Qn={type:`childremoved`,child:null},$n=class e extends At{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rn++}),this.uuid=Ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new In,r=new rn,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new B},normalMatrix:{value:new z}}),this.matrix=new B,this.matrixWorld=new B,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(Kn,e)}rotateY(e){return this.rotateOnAxis(qn,e)}rotateZ(e){return this.rotateOnAxis(Jn,e)}translateOnAxis(e,t){return zn.copy(e).applyQuaternion(this.quaternion),this.position.add(zn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kn,e)}translateY(e){return this.translateOnAxis(qn,e)}translateZ(e){return this.translateOnAxis(Jn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hn.copy(e):Hn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Un,Hn,this.up):Vn.lookAt(Hn,Un,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Bn.setFromRotationMatrix(Vn),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(F(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yn),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null):F(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xn),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yn),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,e,Wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,Gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};$n.DEFAULT_UP=new R(0,1,0),$n.DEFAULT_MATRIX_AUTO_UPDATE=!0,$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var V=class extends $n{constructor(){super(),this.isGroup=!0,this.type=`Group`}},er={type:`move`},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new V,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new V,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new V,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(er)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new V;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},ir={h:0,s:0,l:0};function ar(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,dn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dn.workingColorSpace){if(e=It(e,1),t=I(t,0,1),n=I(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ar(i,r,e+1/3),this.g=ar(i,r,e),this.b=ar(i,r,e-1/3)}return dn.colorSpaceToWorking(this,r),this}setStyle(e,t=ft){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=nr[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return dn.workingToColorSpace(or.copy(this),e),Math.round(I(or.r*255,0,255))*65536+Math.round(I(or.g*255,0,255))*256+Math.round(I(or.b*255,0,255))}getHexString(e=ft){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.workingToColorSpace(or.copy(this),t);let n=or.r,r=or.g,i=or.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=dn.workingColorSpace){return dn.workingToColorSpace(or.copy(this),t),e.r=or.r,e.g=or.g,e.b=or.b,e}getStyle(e=ft){dn.workingToColorSpace(or.copy(this),e);let t=or.r,n=or.g,r=or.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(ir);let n=zt(rr.h,ir.h,t),r=zt(rr.s,ir.s,t),i=zt(rr.l,ir.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},or=new H;H.NAMES=nr;var sr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends $n{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},lr=new R,ur=new R,dr=new R,fr=new R,pr=new R,mr=new R,hr=new R,gr=new R,_r=new R,vr=new R,yr=new Sn,br=new Sn,xr=new Sn,Sr=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),lr.subVectors(e,t),r.cross(lr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){lr.subVectors(r,t),ur.subVectors(n,t),dr.subVectors(e,t);let a=lr.dot(lr),o=lr.dot(ur),s=lr.dot(dr),c=ur.dot(ur),l=ur.dot(dr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fr)!==null&&fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,fr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,fr.x),s.addScaledVector(a,fr.y),s.addScaledVector(o,fr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return yr.setScalar(0),br.setScalar(0),xr.setScalar(0),yr.fromBufferAttribute(e,t),br.fromBufferAttribute(e,n),xr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yr,i.x),a.addScaledVector(br,i.y),a.addScaledVector(xr,i.z),a}static isFrontFacing(e,t,n,r){return lr.subVectors(n,t),ur.subVectors(e,t),lr.cross(ur).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lr.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),lr.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;pr.subVectors(r,n),mr.subVectors(i,n),gr.subVectors(e,n);let s=pr.dot(gr),c=mr.dot(gr);if(s<=0&&c<=0)return t.copy(n);_r.subVectors(e,r);let l=pr.dot(_r),u=mr.dot(_r);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(pr,a);vr.subVectors(e,i);let f=pr.dot(vr),p=mr.dot(vr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(mr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return hr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(hr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cr=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Tr):Tr.fromBufferAttribute(r,t),Tr.applyMatrix4(e.matrixWorld),this.expandByPoint(Tr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tr),Tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Pr.subVectors(this.max,Nr),Dr.subVectors(e.a,Nr),Or.subVectors(e.b,Nr),kr.subVectors(e.c,Nr),Ar.subVectors(Or,Dr),jr.subVectors(kr,Or),Mr.subVectors(Dr,kr);let t=[0,-Ar.z,Ar.y,0,-jr.z,jr.y,0,-Mr.z,Mr.y,Ar.z,0,-Ar.x,jr.z,0,-jr.x,Mr.z,0,-Mr.x,-Ar.y,Ar.x,0,-jr.y,jr.x,0,-Mr.y,Mr.x,0];return!Lr(t,Dr,Or,kr,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,Dr,Or,kr,Pr))?!1:(Fr.crossVectors(Ar,jr),t=[Fr.x,Fr.y,Fr.z],Lr(t,Dr,Or,kr,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wr=[new R,new R,new R,new R,new R,new R,new R,new R],Tr=new R,Er=new Cr,Dr=new R,Or=new R,kr=new R,Ar=new R,jr=new R,Mr=new R,Nr=new R,Pr=new R,Fr=new R,Ir=new R;function Lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ir.fromArray(e,a);let o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),s=t.dot(Ir),c=n.dot(Ir),l=r.dot(Ir);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Rr=new R,zr=new L,Br=0,Vr=class extends At{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Br++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_t,this.updateRanges=[],this.gpuType=ie,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix4(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyNormalMatrix(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.transformDirection(e),this.setXYZ(t,Rr.x,Rr.y,Rr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Hr=class extends Vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ur=class extends Vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},U=class extends Vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wr=new Cr,Gr=new R,Kr=new R,qr=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Wr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Gr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Kr)),this.expandByPoint(Gr.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jr=0,Yr=new B,Xr=new $n,Zr=new R,Qr=new Cr,$r=new Cr,ei=new R,ti=class e extends At{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jr++}),this.uuid=Ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bt(e)?Ur:Hr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yr.makeRotationFromQuaternion(e),this.applyMatrix4(Yr),this}rotateX(e){return Yr.makeRotationX(e),this.applyMatrix4(Yr),this}rotateY(e){return Yr.makeRotationY(e),this.applyMatrix4(Yr),this}rotateZ(e){return Yr.makeRotationZ(e),this.applyMatrix4(Yr),this}translate(e,t,n){return Yr.makeTranslation(e,t,n),this.applyMatrix4(Yr),this}scale(e,t,n){return Yr.makeScale(e,t,n),this.applyMatrix4(Yr),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new U(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)F(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qr.setFromBufferAttribute(n),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,Qr.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,Qr.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(Qr.min),this.boundingBox.expandByPoint(Qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&F(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)F(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(Qr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$r.setFromBufferAttribute(n),this.morphTargetsRelative?(ei.addVectors(Qr.min,$r.min),Qr.expandByPoint(ei),ei.addVectors(Qr.max,$r.max),Qr.expandByPoint(ei)):(Qr.expandByPoint($r.min),Qr.expandByPoint($r.max))}Qr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ei.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ei));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ei.fromBufferAttribute(a,t),o&&(Zr.fromBufferAttribute(e,t),ei.add(Zr)),r=Math.max(r,n.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&F(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){F(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new L,f=new L,p=new L,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ei.fromBufferAttribute(e,t),ei.normalize(),e.setXYZ(t,ei.x,ei.y,ei.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Vr(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ni=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=_t,this.updateRanges=[],this.version=0,this.uuid=Ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},ri=new R,ii=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),i=tn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ai=new R,oi=new R,si=new z,ci=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ai.subVectors(n,t).cross(oi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ai),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||si.getNormalMatrix(e),r=this.coplanarPoint(ai).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},li=0,ui=class extends At{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:li++}),this.uuid=Ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gt,this.stencilZFail=gt,this.stencilZPass=gt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ci().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new L().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new L().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},di=new R,fi=new R,pi=new R,mi=new R,hi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fi.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pi),o=mi.dot(this.direction),s=-mi.dot(pi),c=mi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fi).addScaledVector(pi,d),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let re=S/w,ie=C/w,ae=1/w,oe=T-re*D,se=E-ie*D,ce=O-re*A,le=k-ie*A,ue=ee-re*ne,de=te-ie*ne,fe=ue*le-de*ce,pe=oe*de-se*ue,me=ce*se-le*oe;if(r){if(fe<0||pe<0||me<0)return null}else if((fe<0||pe<0||me<0)&&(fe>0||pe>0||me>0))return null;let he=fe+pe+me;if(he===0)return null;let ge=ae*(fe*D+pe*A+me*ne);return(he>0?ge<0:ge>0)?null:this.at(ge/he,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=new B,vi=new hi,yi=new qr,bi=new R,xi=new R,Si=new R,Ci=new R,wi=new R,Ti=new R,Ei=new R,Di=new R,W=class extends $n{constructor(e=new ti,t=new gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wi.fromBufferAttribute(s,e),a?Ti.addScaledVector(wi,r):Ti.addScaledVector(wi.sub(t),r))}t.add(Ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(i),vi.copy(e.ray).recast(e.near),yi.containsPoint(vi.origin)===!1&&(vi.intersectSphere(yi,bi)===null||vi.origin.distanceToSquared(bi)>(e.far-e.near)**2)||(_i.copy(i).invert(),vi.copy(e.ray).applyMatrix4(_i),(n.boundingBox===null||vi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ki(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ki(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ki(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ki(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Oi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Di.copy(s),Di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Di);return l<n.near||l>n.far?null:{distance:l,point:Di.clone(),object:e}}function ki(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xi),e.getVertexPosition(c,Si),e.getVertexPosition(l,Ci);let u=Oi(e,t,n,r,xi,Si,Ci,Ei);if(u){let e=new R;Sr.getBarycoord(Ei,xi,Si,Ci,e),i&&(u.uv=Sr.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=Sr.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=Sr.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};Sr.getNormal(xi,Si,Ci,t.normal),u.face=t,u.barycoord=e}return u}var Ai=new Sn,ji=new Sn,Mi=new Sn,Ni=new Sn,Pi=new B,Fi=new R,Ii=new qr,Li=new B,Ri=new hi,zi=class extends W{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=y,this.bindMatrix=new B,this.bindMatrixInverse=new B,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cr),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Fi),this.boundingBox.expandByPoint(Fi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Fi),this.boundingSphere.expandByPoint(Fi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ii.copy(this.boundingSphere),Ii.applyMatrix4(r),e.ray.intersectsSphere(Ii)!==!1&&(Li.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Li),(this.boundingBox===null||Ri.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ri)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Sn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():P(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;ji.fromBufferAttribute(r.attributes.skinIndex,e),Mi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ai.copy(t),t.set(0,0,0,0)):(Ai.set(...t,1),t.set(0,0,0)),Ai.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Mi.getComponent(e);if(r!==0){let i=ji.getComponent(e);Pi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ni.copy(Ai).applyMatrix4(Pi),r)}}return t.isVector4&&(t.w=Ai.w),t.applyMatrix4(this.bindMatrixInverse)}},Bi=class extends $n{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Vi=class extends xn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=C,l=C,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hi=new B,Ui=new B,Wi=class e{constructor(e=[],t=[]){this.uuid=Ft(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){P(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new B)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new B;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Ui;Hi.multiplyMatrices(i,t[r]),Hi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vi(t,e,e,pe,ie);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(P(`Skeleton: No bone found with UUID:`,r),i=new Bi),this.bones.push(i),this.boneInverses.push(new B().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Gi=class extends Vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ki=new B,qi=new B,Ji=[],Yi=new Cr,Xi=new B,Zi=new W,Qi=new qr,$i=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Xi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Yi.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Yi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Qi.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ki),qi.multiplyMatrices(n,Ki),Zi.matrixWorld=qi,Zi.raycast(e,Ji);for(let e=0,n=Ji.length;e<n;e++){let n=Ji[e];n.instanceId=i,n.object=this,t.push(n)}Ji.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(r*this.count),r,this.count,ge,ie));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ea=new qr,ta=new L(.5,.5),na=new R,ra=class{constructor(e=new ci,t=new ci,n=new ci,r=new ci,i=new ci,a=new ci){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ea.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ea.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ea)}intersectsSprite(e){return ea.center.set(0,0,0),ea.radius=.7071067811865476+ta.distanceTo(e.center),ea.applyMatrix4(e.matrixWorld),this.intersectsSphere(ea)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ia=class extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},aa=new R,oa=new R,sa=new B,ca=new hi,la=new qr,ua=new R,da=new R,fa=class extends $n{constructor(e=new ti,t=new ia){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)aa.fromBufferAttribute(t,e-1),oa.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=aa.distanceTo(oa);e.setAttribute(`lineDistance`,new U(n,1))}else P(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),la.radius+=i,e.ray.intersectsSphere(la)===!1)return;sa.copy(r).invert(),ca.copy(e.ray).applyMatrix4(sa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=pa(this,e,ca,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=pa(this,e,ca,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=pa(this,e,ca,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=pa(this,e,ca,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function pa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(aa.fromBufferAttribute(s,i),oa.fromBufferAttribute(s,a),n.distanceSqToSegment(aa,oa,ua,da)>r)return;ua.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ua);if(!(c<t.near||c>t.far))return{distance:c,point:da.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ma=new R,ha=new R,ga=class extends fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ma.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ma.distanceTo(ha);e.setAttribute(`lineDistance`,new U(n,1))}else P(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},_a=class extends fa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},va=class extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ya=new B,ba=new hi,xa=new qr,Sa=new R,Ca=class extends $n{constructor(e=new ti,t=new va){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=i,e.ray.intersectsSphere(xa)===!1)return;ya.copy(r).invert(),ba.copy(e.ray).applyMatrix4(ya);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Sa.fromBufferAttribute(l,n),wa(Sa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Sa.fromBufferAttribute(l,a),wa(Sa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wa(e,t,n,r,i,a,o){let s=ba.distanceSqToPoint(e);if(s<n){let n=new R;ba.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ta=class extends xn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ea=class extends xn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Da=class extends xn{constructor(e,t,n=re,r,i,a,o=C,s=C,c,l=me,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _n(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oa=class extends Da{constructor(e,t=re,n=301,r,i,a=C,o=C,s,c=me){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Aa=class e extends ti{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ja=class e extends ti{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new R,g=new R;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new U(o,3)),this.setAttribute(`normal`,new U(s,3)),this.setAttribute(`uv`,new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ma=class e extends ti{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`normal`,new U(o,3)),this.setAttribute(`uv`,new U(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Na=class e extends ti{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pa=class e extends Na{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fa=class e extends ti{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new U(i,3)),this.setAttribute(`normal`,new U(i.slice(),3)),this.setAttribute(`uv`,new U(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ia=class e extends Fa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},La=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){P(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new R);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,r=[],i=[],a=[],o=new R,s=new B;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new R)}i[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(I(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(I(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ra=class extends La{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new L){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},za=class extends Ra{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ba(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Va=new R,Ha=new R,Ua=new Ba,Wa=new Ba,Ga=new Ba,Ka=class extends La{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ha.subVectors(r[0],r[1]).add(r[0]),c=Ha);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Va.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Va),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ua.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Wa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ga.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ua.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Wa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ga.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ua.calc(s),Wa.calc(s),Ga.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ja(e,t){let n=1-e;return n*n*t}function Ya(e,t){return 2*(1-e)*e*t}function Xa(e,t){return e*e*t}function Za(e,t,n,r){return Ja(e,t)+Ya(e,n)+Xa(e,r)}function Qa(e,t){let n=1-e;return n*n*n*t}function $a(e,t){let n=1-e;return 3*n*n*e*t}function eo(e,t){return 3*(1-e)*e*e*t}function to(e,t){return e*e*e*t}function no(e,t,n,r,i){return Qa(e,t)+$a(e,n)+eo(e,r)+to(e,i)}var ro=class extends La{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(no(e,r.x,i.x,a.x,o.x),no(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends La{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(no(e,r.x,i.x,a.x,o.x),no(e,r.y,i.y,a.y,o.y),no(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ao=class extends La{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends La{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends La{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Za(e,r.x,i.x,a.x),Za(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends La{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Za(e,r.x,i.x,a.x),Za(e,r.y,i.y,a.y),Za(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends La{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(qa(o,s.x,c.x,l.x,u.x),qa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:za,CatmullRomCurve3:Ka,CubicBezierCurve:ro,CubicBezierCurve3:io,EllipseCurve:Ra,LineCurve:ao,LineCurve3:oo,QuadraticBezierCurve:so,QuadraticBezierCurve3:co,SplineCurve:lo}),fo=class extends La{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new uo[n.type]().fromJSON(n))}return this}},po=class extends fo{constructor(e){super(),this.type=`Path`,this.currentPoint=new L,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ao(this.currentPoint.clone(),new L(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new so(this.currentPoint.clone(),new L(e,t),new L(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ro(this.currentPoint.clone(),new L(e,t),new L(n,r),new L(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new lo([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ra(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mo=class extends po{constructor(e){super(e),this.uuid=Ft(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new po().fromJSON(n))}return this}};function ho(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=go(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Co(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return vo(a,o,n,s,c,l,0),o}function go(e,t,n,r,i){let a;if(i===qo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Wo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Wo(i/r|0,e[i],e[i+1],a);return a&&Io(a,a.next)&&(Go(a),a=a.next),a}function _o(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Io(n,n.next)||Fo(n.prev,n,n.next)===0)){if(Go(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function vo(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Oo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?bo(e,r,i,a):yo(e))t.push(c.i,e.i,l.i),Go(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=xo(_o(e),t),vo(e,t,n,r,i,a,2)):o===2&&So(e,t,n,r,i,a):vo(_o(e),t,n,r,i,a,1);break}}}function yo(e){let t=e.prev,n=e,r=e.next;if(Fo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&No(i,s,a,c,o,l,m.x,m.y)&&Fo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bo(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Fo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ao(p,m,t,n,r),v=Ao(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&No(s,u,c,d,l,f,y.x,y.y)&&Fo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&No(s,u,c,d,l,f,b.x,b.y)&&Fo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&No(s,u,c,d,l,f,y.x,y.y)&&Fo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&No(s,u,c,d,l,f,b.x,b.y)&&Fo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xo(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Io(r,i)&&Lo(r,n,n.next,i)&&Vo(r,i)&&Vo(i,r)&&(t.push(r.i,n.i,i.i),Go(n),Go(n.next),n=e=i),n=n.next}while(n!==e);return _o(n)}function So(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Po(o,e)){let s=Uo(o,e);o=_o(o,o.next),s=_o(s,s.next),vo(o,t,n,r,i,a,0),vo(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Co(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=go(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(jo(o))}i.sort(wo);for(let e=0;e<i.length;e++)n=To(i[e],n);return n}function wo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function To(e,t){let n=Eo(e,t);if(!n)return t;let r=Uo(n,e);return _o(r,r.next),_o(n,n.next)}function Eo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Io(e,n))return n;do{if(Io(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Mo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Vo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Do(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Do(e,t){return Fo(e.prev,e,t.prev)<0&&Fo(t.next,e,e.next)<0}function Oo(e,t,n,r){let i=e;do i.z===0&&(i.z=Ao(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ko(i)}function ko(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ao(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function jo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Mo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function No(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Mo(e,t,n,r,i,a,o,s)}function Po(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Bo(e,t)&&(Vo(e,t)&&Vo(t,e)&&Ho(e,t)&&(Fo(e.prev,e,t.prev)||Fo(e,t.prev,t))||Io(e,t)&&Fo(e.prev,e,e.next)>0&&Fo(t.prev,t,t.next)>0)}function Fo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Io(e,t){return e.x===t.x&&e.y===t.y}function Lo(e,t,n,r){let i=zo(Fo(e,t,n)),a=zo(Fo(e,t,r)),o=zo(Fo(n,r,e)),s=zo(Fo(n,r,t));return!!(i!==a&&o!==s||i===0&&Ro(e,n,t)||a===0&&Ro(e,r,t)||o===0&&Ro(n,e,r)||s===0&&Ro(n,t,r))}function Ro(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function zo(e){return e>0?1:e<0?-1:0}function Bo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Lo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Vo(e,t){return Fo(e.prev,e,e.next)<0?Fo(e,t,e.next)>=0&&Fo(e,e.prev,t)>=0:Fo(e,t,e.prev)<0||Fo(e,e.next,t)<0}function Ho(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Uo(e,t){let n=Ko(e.i,e.x,e.y),r=Ko(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Wo(e,t,n,r){let i=Ko(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Go(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ko(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Jo=class{static triangulate(e,t,n=2){return ho(e,t,n)}},Yo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Xo(e),Zo(n,e);let a=e.length;t.forEach(Xo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Zo(n,t[e]);let o=Jo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Xo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Zo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Qo=class e extends Fa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},$o=class e extends Fa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},es=class e extends ti{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ts=class e extends ti{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new L;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new U(s,3)),this.setAttribute(`normal`,new U(c,3)),this.setAttribute(`uv`,new U(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ns=class e extends ti{constructor(e=new mo([new L(0,.5),new L(-.5,-.5),new L(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new U(r,3)),this.setAttribute(`normal`,new U(i,3)),this.setAttribute(`uv`,new U(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Yo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Yo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Yo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rs(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function rs(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var is=class e extends ti{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},as=class e extends ti{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function os(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(cs(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(cs(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ss(e){let t={};for(let n=0;n<e.length;n++){let r=os(e[n]);for(let e in r)t[e]=r[e]}return t}function cs(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ls(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function us(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:dn.workingColorSpace}var ds={clone:os,merge:ss},fs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ps=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ms=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fs,this.fragmentShader=ps,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=ls(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Sn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new B().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hs=class extends ms{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},G=class extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gs=class extends G{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return I(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new H(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new H(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new H(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},_s=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vs=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ys=class extends ia{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function bs(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Ss(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Cs(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function ws(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ts=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Es=class extends Ts{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ot,endingEnd:ot}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case st:i=e,o=2*t-n;break;case ct:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case st:a=e,s=2*n-t;break;case ct:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ds=class extends Ts{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Os=class extends Ts{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ks=class extends Ts{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ms(n,t,g,y,r);i[p]=As(x,o,_,b,m)}return i}};function As(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function js(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ms(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=As(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=js(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ns=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),xs(e.settings)&&(n.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Os(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ds(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ks(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case nt:t=this.InterpolantFactoryMethodDiscrete;break;case rt:t=this.InterpolantFactoryMethodLinear;break;case it:t=this.InterpolantFactoryMethodSmooth;break;case at:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nt;case this.InterpolantFactoryMethodLinear:return rt;case this.InterpolantFactoryMethodSmooth:return it;case this.InterpolantFactoryMethodBezier:return at}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xs(this.settings)&&(Ps(this.settings.inTangents,e),Ps(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(F(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(F(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){F(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){F(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&xt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){F(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===it,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ps(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ns.prototype.ValueTypeName=``,Ns.prototype.TimeBufferType=Float32Array,Ns.prototype.ValueBufferType=Float32Array,Ns.prototype.DefaultInterpolation=rt;var Fs=class extends Ns{constructor(e,t,n){super(e,t,n)}};Fs.prototype.ValueTypeName=`bool`,Fs.prototype.ValueBufferType=Array,Fs.prototype.DefaultInterpolation=nt,Fs.prototype.InterpolantFactoryMethodLinear=void 0,Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}};Is.prototype.ValueTypeName=`color`;var Ls=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}};Ls.prototype.ValueTypeName=`number`;var Rs=class extends Ts{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)rn.slerpFlat(i,0,a,c-o,a,c,s);return i}},zs=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Rs(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName=`quaternion`,zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Ns{constructor(e,t,n){super(e,t,n)}};Bs.prototype.ValueTypeName=`string`,Bs.prototype.ValueBufferType=Array,Bs.prototype.DefaultInterpolation=nt,Bs.prototype.InterpolantFactoryMethodLinear=void 0,Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}};Vs.prototype.ValueTypeName=`vector`;var Hs=class{constructor(e=``,t=-1,n=[],r=lt){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ft(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Ws(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Ns.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Ss(o);o=Cs(o,1,c),s=Cs(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Ls(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Us(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ls;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Vs;case`color`:return Is;case`quaternion`:return zs;case`bool`:case`boolean`:return Fs;case`string`:return Bs}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Ws(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Us(e.type);if(e.times===void 0){let t=[],n=[];ws(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),xs(e.settings)&&(n.settings={inTangents:bs(e.settings.inTangents,Float32Array),outTangents:bs(e.settings.outTangents,Float32Array)}),n}var Gs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ks(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ks(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ks(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var qs=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Js=class{constructor(e){this.manager=e===void 0?qs:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Js.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ys={},Xs=class extends Error{constructor(e,t){super(e),this.response=t}},Zs=class extends Js{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Gs.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Ys[e]!==void 0){Ys[e].push({onLoad:t,onProgress:n,onError:r});return}Ys[e]=[],Ys[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&P(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Ys[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Xs(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Gs.add(`file:${e}`,t);let n=Ys[e];delete Ys[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Ys[e];if(n===void 0)throw this.manager.itemError(e),t;delete Ys[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Qs=new WeakMap,$s=class extends Js{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Gs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Qs.get(a);e===void 0&&(e=[],Qs.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=St(`img`);function s(){l(),t&&t(this);let n=Qs.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Qs.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Gs.remove(`image:${e}`);let n=Qs.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Qs.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gs.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ec=class extends Js{constructor(e){super(e)}load(e,t,n,r){let i=new xn,a=new $s(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},tc=class extends $n{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nc=class extends tc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rc=new B,ic=new R,ac=new R,oc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=k,this.map=null,this.mapPass=null,this.matrix=new B,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(ic),ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ac),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sc=new R,cc=new rn,lc=new R,uc=class extends $n{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new B,this.projectionMatrix=new B,this.projectionMatrixInverse=new B,this.coordinateSystem=yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sc,cc,lc),lc.x===1&&lc.y===1&&lc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,cc,lc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sc,cc,lc),lc.x===1&&lc.y===1&&lc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,cc,lc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},dc=new R,fc=new L,pc=new L,mc=class extends uc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pt*2*Math.atan(Math.tan(Nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dc.x,dc.y).multiplyScalar(-e/dc.z),dc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dc.x,dc.y).multiplyScalar(-e/dc.z)}getViewSize(e,t){return this.getViewBounds(e,fc,pc),t.subVectors(pc,fc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hc=class extends oc{constructor(){super(new mc(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Pt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},gc=class extends tc{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_c=class extends oc{constructor(){super(new mc(90,1,.5,500)),this.isPointLightShadow=!0}},vc=class extends tc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},yc=class extends uc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bc=class extends oc{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xc=class extends tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.shadow=new bc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Sc=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Cc=class extends ti{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},wc=new WeakMap,Tc=class extends Js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&P(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&P(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Gs.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{wc.has(a)===!0?(r&&r(wc.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Gs.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),wc.set(s,t),Gs.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Gs.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ec=-90,Dc=1,Oc=class extends $n{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mc(Ec,Dc,e,t);r.layers=this.layers,this.add(r);let i=new mc(Ec,Dc,e,t);i.layers=this.layers,this.add(i);let a=new mc(Ec,Dc,e,t);a.layers=this.layers,this.add(a);let o=new mc(Ec,Dc,e,t);o.layers=this.layers,this.add(o);let s=new mc(Ec,Dc,e,t);s.layers=this.layers,this.add(s);let c=new mc(Ec,Dc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},kc=class extends mc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ac=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=jc.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function jc(){this._document.hidden===!1&&this.reset()}var Mc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){rn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;rn.multiplyQuaternionsFlat(e,a,e,t,e,n),rn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Nc=`\\[\\]\\.:\\/`,Pc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fc=`[^\\[\\]\\.:\\/]`,Ic=`[^`+Nc.replace(`\\.`,``)+`]`,Lc=`((?:WC+[\\/:])*)`.replace(`WC`,Fc),Rc=`(WCOD+)?`.replace(`WCOD`,Ic),zc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fc),Bc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fc),Vc=RegExp(`^`+Lc+Rc+zc+Bc+`$`),Hc=[`material`,`materials`,`bones`,`map`],Uc=class{constructor(e,t,n){let r=n||Wc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Pc,``)}static parseTrackName(e){let t=Vc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Hc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){F(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){F(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){F(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){F(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){F(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;F(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wc.Composite=Uc,Wc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wc.prototype.GetterByBindingType=[Wc.prototype._getValue_direct,Wc.prototype._getValue_array,Wc.prototype._getValue_arrayElement,Wc.prototype._getValue_toArray],Wc.prototype.SetterByBindingTypeAndVersioning=[[Wc.prototype._setValue_direct,Wc.prototype._setValue_direct_setNeedsUpdate,Wc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wc.prototype._setValue_array,Wc.prototype._setValue_array_setNeedsUpdate,Wc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wc.prototype._setValue_arrayElement,Wc.prototype._setValue_arrayElement_setNeedsUpdate,Wc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wc.prototype._setValue_fromArray,Wc.prototype._setValue_fromArray_setNeedsUpdate,Wc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gc=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:ot,endingEnd:ot};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=et,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case ut:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case lt:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===tt;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=st,r.endingEnd=st):(r.endingStart=e?this.zeroSlopeAtStart?st:ot:ct,r.endingEnd=t?this.zeroSlopeAtEnd?st:ot:ct)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},Kc=new Float32Array(1),qc=class extends At{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new Mc(Wc.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ds(new Float32Array(2),new Float32Array(2),1,Kc),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Hs.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?lt:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Gc(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Hs.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Jc=new B,Yc=class{constructor(e,t,n=0,r=1/0){this.ray=new hi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ln,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):F(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(e,t=!0,n=[]){return Zc(e,this,n,t),n.sort(Xc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Zc(e[r],this,n,t);return n.sort(Xc),n}};function Xc(e,t){return e.distance-t.distance}function Zc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Zc(r[e],t,n,!0)}}h=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},h.prototype.isMatrix2=!0;var Qc=new R,$c=new B,el=new B,tl=class extends ga{constructor(e){let t=nl(e),n=new ti,r=[],i=[];for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(0,0,0),i.push(0,0,0))}n.setAttribute(`position`,new U(r,3)),n.setAttribute(`color`,new U(i,3));let a=new ia({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type=`SkeletonHelper`,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let o=new H(255),s=new H(65280);this.setColors(o,s)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);el.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&($c.multiplyMatrices(el,i.matrixWorld),Qc.setFromMatrixPosition($c),r.setXYZ(n,Qc.x,Qc.y,Qc.z),$c.multiplyMatrices(el,i.parent.matrixWorld),Qc.setFromMatrixPosition($c),r.setXYZ(n+1,Qc.x,Qc.y,Qc.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let n=this.geometry.getAttribute(`color`);for(let r=0;r<n.count;r+=2)n.setXYZ(r,e.r,e.g,e.b),n.setXYZ(r+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function nl(e){let t=[];e.isBone===!0&&t.push(e);for(let n=0;n<e.children.length;n++)t.push(...nl(e.children[n]));return t}function rl(e,t,n,r){let i=il(r);switch(n){case de:return e*t;case ge:return e*t/i.components*i.byteLength;case _e:return e*t/i.components*i.byteLength;case ve:return e*t*2/i.components*i.byteLength;case ye:return e*t*2/i.components*i.byteLength;case fe:return e*t*3/i.components*i.byteLength;case pe:return e*t*4/i.components*i.byteLength;case be:return e*t*4/i.components*i.byteLength;case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:case Oe:return Math.max(e,16)*Math.max(t,8)/4;case Te:case De:return Math.max(e,8)*Math.max(t,8)/2;case ke:case Ae:case Me:case Ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case je:case Pe:case Fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Le:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case j:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Re:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ze:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case M:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case N:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case He:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ue:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case We:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ge:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qe:case Je:case Ye:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Xe:case Ze:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qe:case $e:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function il(e){switch(e){case k:case A:return{byteLength:1,components:1};case te:case ee:case ae:return{byteLength:2,components:1};case oe:case se:return{byteLength:2,components:4};case re:case ne:case ie:return{byteLength:4,components:1};case le:case ue:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function al(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ol(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var sl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},cl={basic:{uniforms:ss([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:sl.meshbasic_vert,fragmentShader:sl.meshbasic_frag},lambert:{uniforms:ss([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:sl.meshlambert_vert,fragmentShader:sl.meshlambert_frag},phong:{uniforms:ss([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:sl.meshphong_vert,fragmentShader:sl.meshphong_frag},standard:{uniforms:ss([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:sl.meshphysical_vert,fragmentShader:sl.meshphysical_frag},toon:{uniforms:ss([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new H(0)}}]),vertexShader:sl.meshtoon_vert,fragmentShader:sl.meshtoon_frag},matcap:{uniforms:ss([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:sl.meshmatcap_vert,fragmentShader:sl.meshmatcap_frag},points:{uniforms:ss([K.points,K.fog]),vertexShader:sl.points_vert,fragmentShader:sl.points_frag},dashed:{uniforms:ss([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:sl.linedashed_vert,fragmentShader:sl.linedashed_frag},depth:{uniforms:ss([K.common,K.displacementmap]),vertexShader:sl.depth_vert,fragmentShader:sl.depth_frag},normal:{uniforms:ss([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:sl.meshnormal_vert,fragmentShader:sl.meshnormal_frag},sprite:{uniforms:ss([K.sprite,K.fog]),vertexShader:sl.sprite_vert,fragmentShader:sl.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:sl.background_vert,fragmentShader:sl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:sl.backgroundCube_vert,fragmentShader:sl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:sl.cube_vert,fragmentShader:sl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:sl.equirect_vert,fragmentShader:sl.equirect_frag},distance:{uniforms:ss([K.common,K.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:sl.distance_vert,fragmentShader:sl.distance_frag},shadow:{uniforms:ss([K.lights,K.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:sl.shadow_vert,fragmentShader:sl.shadow_frag}};cl.physical={uniforms:ss([cl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:sl.meshphysical_vert,fragmentShader:sl.meshphysical_frag};var ll={r:0,b:0,g:0},ul=new B,dl=new z;dl.set(-1,0,0,0,1,0,0,0,1);function fl(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Aa(1,1,1),new ms({name:`BackgroundCubeMaterial`,uniforms:os(cl.backgroundCube.uniforms),vertexShader:cl.backgroundCube.vertexShader,fragmentShader:cl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ul.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dl),l.material.toneMapped=dn.getTransfer(i.colorSpace)!==ht,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new es(2,2),new ms({name:`BackgroundMaterial`,uniforms:os(cl.background.uniforms),vertexShader:cl.background.vertexShader,fragmentShader:cl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=dn.getTransfer(i.colorSpace)!==ht,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ll,us(e)),n.buffers.color.setClear(ll.r,ll.g,ll.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function pl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ml(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function hl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function gl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ci,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var _l=4,vl=6,yl=20,bl=256,xl=new yc,Sl=new H,Cl=null,wl=0,Tl=0,El=!1,Dl=new R,Ol=new R,kl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Dl}=i;Cl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl,wl,Tl),this._renderer.xr.enabled=El,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:E,minFilter:E,generateMipmaps:!1,type:ae,format:pe,colorSpace:pt,depthBuffer:!1},r=jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Al(r)),this._blurMaterial=Pl(r,e,t),this._ggxMaterial=Nl(r,e,t)}return r}_compileMaterial(e){let t=new W(new ti,e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,r,i){let a=new mc(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Sl),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Aa,new gi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Sl),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ml(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ml(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-_l?n-d+_l:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ml(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,xl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ml(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,xl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ml(t,3*l*(r>this._lodMax-_l?r-this._lodMax+_l:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,xl)}};function Al(e){let t=[],n=[],r=e,i=e-_l+1+vl;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ol.set(1,r,n):e===1?Ol.set(-n,1,-r):e===2?Ol.set(-n,r,1):e===3?Ol.set(-1,r,-n):e===4?Ol.set(-n,-1,r):Ol.set(n,r,-1),Ol.toArray(l,(e*6+t)*3)}}let u=new ti;u.setAttribute(`position`,new Vr(c,3)),u.setAttribute(`outputDirection`,new Vr(l,3)),n.push(new W(u,null)),r>_l&&r--}return{lodMeshes:n,sizeLods:t}}function jl(e,t,n){let r=new wn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ml(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Nl(e,t,n){return new ms({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:bl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pl(e,t,n){return new ms({name:`SphericalGaussianBlur`,defines:{SAMPLES:yl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fl(){return new ms({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Il(){return new ms({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),i=new ms({name:`CubemapFromEquirect`,uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=E),new Oc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function zl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Rl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new kl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new kl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Bl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Dt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Vl(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ur:Hr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Hl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ul(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:F(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Wl(e,t,n){let r=new WeakMap,i=new Sn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Tn(h,p,m,u);g.type=ie,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new L(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Gl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Kl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ql(e,t,n,r,i,a){let o=new wn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ti;l.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new U([0,2,0,0,2,0],2));let u=new hs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new yc(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new wn(t,n,{type:ae,depthBuffer:!1,stencilBuffer:!1}),c=new wn(t,n,{type:ae,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},dn.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Kl[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Jl=new xn,Yl=new Da(1,1),Xl=new Tn,Zl=new En,Ql=new Ta,$l=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),ru=new Float32Array(4);function iu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$l[i];if(a===void 0&&(a=new Float32Array(i),$l[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function au(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ou(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function su(e,t){let n=eu[t];n===void 0&&(n=new Int32Array(t),eu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function lu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(au(n,t))return;e.uniform2fv(this.addr,t),ou(n,t)}}function uu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(au(n,t))return;e.uniform3fv(this.addr,t),ou(n,t)}}function du(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(au(n,t))return;e.uniform4fv(this.addr,t),ou(n,t)}}function fu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(au(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ou(n,t)}else{if(au(n,r))return;ru.set(r),e.uniformMatrix2fv(this.addr,!1,ru),ou(n,r)}}function pu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(au(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ou(n,t)}else{if(au(n,r))return;nu.set(r),e.uniformMatrix3fv(this.addr,!1,nu),ou(n,r)}}function mu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(au(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ou(n,t)}else{if(au(n,r))return;tu.set(r),e.uniformMatrix4fv(this.addr,!1,tu),ou(n,r)}}function hu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(au(n,t))return;e.uniform2iv(this.addr,t),ou(n,t)}}function _u(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(au(n,t))return;e.uniform3iv(this.addr,t),ou(n,t)}}function vu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(au(n,t))return;e.uniform4iv(this.addr,t),ou(n,t)}}function yu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(au(n,t))return;e.uniform2uiv(this.addr,t),ou(n,t)}}function xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(au(n,t))return;e.uniform3uiv(this.addr,t),ou(n,t)}}function Su(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(au(n,t))return;e.uniform4uiv(this.addr,t),ou(n,t)}}function Cu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Yl.compareFunction=n.isReversedDepthBuffer()?518:515,a=Yl):a=Jl,n.setTexture2D(t||a,i)}function wu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zl,i)}function Tu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ql,i)}function Eu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xl,i)}function Du(e){switch(e){case 5126:return cu;case 35664:return lu;case 35665:return uu;case 35666:return du;case 35674:return fu;case 35675:return pu;case 35676:return mu;case 5124:case 35670:return hu;case 35667:case 35671:return gu;case 35668:case 35672:return _u;case 35669:case 35673:return vu;case 5125:return yu;case 36294:return bu;case 36295:return xu;case 36296:return Su;case 35678:case 36198:case 36298:case 36306:case 35682:return Cu;case 35679:case 36299:case 36307:return wu;case 35680:case 36300:case 36308:case 36293:return Tu;case 36289:case 36303:case 36311:case 36292:return Eu}}function Ou(e,t){e.uniform1fv(this.addr,t)}function ku(e,t){let n=iu(t,this.size,2);e.uniform2fv(this.addr,n)}function Au(e,t){let n=iu(t,this.size,3);e.uniform3fv(this.addr,n)}function ju(e,t){let n=iu(t,this.size,4);e.uniform4fv(this.addr,n)}function Mu(e,t){let n=iu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Nu(e,t){let n=iu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Pu(e,t){let n=iu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Fu(e,t){e.uniform1iv(this.addr,t)}function Iu(e,t){e.uniform2iv(this.addr,t)}function Lu(e,t){e.uniform3iv(this.addr,t)}function Ru(e,t){e.uniform4iv(this.addr,t)}function zu(e,t){e.uniform1uiv(this.addr,t)}function Bu(e,t){e.uniform2uiv(this.addr,t)}function Vu(e,t){e.uniform3uiv(this.addr,t)}function Hu(e,t){e.uniform4uiv(this.addr,t)}function Uu(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Yl:Jl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Wu(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zl,a[e])}function Gu(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ql,a[e])}function Ku(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xl,a[e])}function qu(e){switch(e){case 5126:return Ou;case 35664:return ku;case 35665:return Au;case 35666:return ju;case 35674:return Mu;case 35675:return Nu;case 35676:return Pu;case 5124:case 35670:return Fu;case 35667:case 35671:return Iu;case 35668:case 35672:return Lu;case 35669:case 35673:return Ru;case 5125:return zu;case 36294:return Bu;case 36295:return Vu;case 36296:return Hu;case 35678:case 36198:case 36298:case 36306:case 35682:return Uu;case 35679:case 36299:case 36307:return Wu;case 35680:case 36300:case 36308:case 36293:return Gu;case 36289:case 36303:case 36311:case 36292:return Ku}}var Ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Du(t.type)}},Yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qu(t.type)}},Xu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function Qu(e,t){e.seq.push(t),e.map[t.id]=t}function $u(e,t,n){let r=e.name,i=r.length;for(Zu.lastIndex=0;;){let a=Zu.exec(r),o=Zu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Qu(n,l===void 0?new Ju(s,e,t):new Yu(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Xu(s),Qu(n,e)),n=e}}}var ed=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);$u(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function td(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var nd=37297,rd=0;function id(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ad=new z;function od(e){dn._getMatrix(ad,dn.workingColorSpace,e);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(dn.getTransfer(e)){case mt:return[t,`LinearTransferOETF`];case ht:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function sd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+id(e.getShaderSource(t),r)}return i}function cd(e,t){let n=od(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ld={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ud(e,t){let n=ld[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var dd=new R;function fd(){return dn.getLuminanceCoefficients(dd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${dd.x.toFixed(4)}, ${dd.y.toFixed(4)}, ${dd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function pd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(gd).join(`
`)}function md(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function hd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function gd(e){return e!==``}function _d(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yd=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(e){return e.replace(yd,Sd)}var xd=new Map;function Sd(e,t){let n=sl[t];if(n===void 0){let e=xd.get(t);if(e!==void 0)n=sl[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return bd(n)}var Cd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(e){return e.replace(Cd,Td)}function Td(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ed(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Dd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Od(e){return Dd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var kd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ad(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:kd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var jd={302:`ENVMAP_MODE_REFRACTION`};function Md(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:jd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Nd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Pd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Nd[e.combine]||`ENVMAP_BLENDING_NONE`}function Fd(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Id(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Od(n),l=Ad(n),u=Md(n),d=Pd(n),f=Fd(n),p=pd(n),m=md(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(gd).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(gd).join(`
`),_.length>0&&(_+=`
`)):(g=[Ed(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(gd).join(`
`),_=[Ed(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:sl.tonemapping_pars_fragment,n.toneMapping===0?``:ud(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,sl.colorspace_pars_fragment,cd(`linearToOutputTexel`,n.outputColorSpace),fd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(gd).join(`
`)),o=bd(o),o=_d(o,n),o=vd(o,n),s=bd(s),s=_d(s,n),s=vd(s,n),o=wd(o),s=wd(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=td(i,i.VERTEX_SHADER,y),S=td(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=sd(i,x,`vertex`),n=sd(i,S,`fragment`);F(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ed(i,h),T=hd(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,nd)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ld=0,Rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zd(e),t.set(e,n)),n}},zd=class{constructor(e){this.id=Ld++,this.code=e,this.usedTimes=0}};function Bd(e){return e===1030||e===37490||e===36285}function Vd(e,t,n,r,i,a){let o=new Ln,s=new Rd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=cl[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,pe=!!i.metalnessMap,me=!!i.roughnessMap,he=i.anisotropy>0,ge=i.clearcoat>0,_e=i.dispersion>0,ve=i.retroreflectivity>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=he&&!!i.anisotropyMap,Ce=ge&&!!i.clearcoatMap,we=ge&&!!i.clearcoatNormalMap,Te=ge&&!!i.clearcoatRoughnessMap,Ee=ye&&!!i.iridescenceMap,De=ye&&!!i.iridescenceThicknessMap,Oe=be&&!!i.sheenColorMap,ke=be&&!!i.sheenRoughnessMap,Ae=!!i.specularMap,je=!!i.specularColorMap,Me=!!i.specularIntensityMap,Ne=xe&&!!i.transmissionMap,Pe=xe&&!!i.thicknessMap,Fe=!!i.gradientMap,Ie=!!i.alphaMap,Le=i.alphaTest>0,j=!!i.alphaHash,Re=!!i.extensions,ze=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ze=e.toneMapping);let Be={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:dn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&Bd(i.normalMap.format),metalnessMap:pe,roughnessMap:me,anisotropy:he,anisotropyMap:Se,clearcoat:ge,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,dispersion:_e,retroreflection:ve,iridescence:ye,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:be,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:je,specularIntensityMap:Me,transmission:xe,transmissionMap:Ne,thicknessMap:Pe,gradientMap:Fe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Le,alphaHash:j,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:pe&&m(i.metalnessMap.channel),roughnessMapUv:me&&m(i.roughnessMap.channel),anisotropyMapUv:Se&&m(i.anisotropyMap.channel),clearcoatMapUv:Ce&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(i.sheenRoughnessMap.channel),specularMapUv:Ae&&m(i.specularMap.channel),specularColorMapUv:je&&m(i.specularColorMap.channel),specularIntensityMapUv:Me&&m(i.specularIntensityMap.channel),transmissionMapUv:Ne&&m(i.transmissionMap.channel),thicknessMapUv:Pe&&m(i.thicknessMap.channel),alphaMapUv:Ie&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||he),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ie),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ze,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&dn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&dn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Re&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Re&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=cl[t];n=ds.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Id(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Hd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ud(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ud),r.length>1&&r.sort(t||Wd),i.length>1&&i.sort(t||Wd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Kd(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Gd,e.set(t,[i])):n>=r.length?(i=new Gd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function qd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new H};break;case`SpotLight`:n={position:new R,direction:new R,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function Jd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Yd=0;function Xd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Zd(e){let t=new qd,n=Jd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new B,o=new B;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Xd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Yd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Qd(e){let t=new Zd(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function $d(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Qd(e),t.set(n,[a])):r>=i.length?(a=new Qd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ef=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nf=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],rf=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],af=new B,of=new R,sf=new R;function cf(e,t,n){let r=new ra,i=new L,a=new L,o=new Sn,s=new _s,c=new vs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:ef,fragmentShader:tf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ti;m.setAttribute(`position`,new Vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){P(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new wn(i.x,i.y,{format:ve,type:ae,minFilter:E,magFilter:E,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Da(i.x,i.y,ie),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=me,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=C,d.map.depthTexture.magFilter=C}else l.isPointLight?(d.map=new Rl(i.x),d.map.depthTexture=new Oa(i.x,re)):(d.map=new wn(i.x,i.y),d.map.depthTexture=new Da(i.x,i.y,re)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=me,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=C,d.map.depthTexture.magFilter=C);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),of.setFromMatrixPosition(l.matrixWorld),e.position.copy(of),sf.copy(e.position),sf.add(nf[t]),e.up.copy(rf[t]),e.lookAt(sf),e.updateMatrixWorld(),n.makeTranslation(-of.x,-of.y,-of.z),af.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(af,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new wn(i.x,i.y,{format:ve,type:ae}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function lf(e,t){function n(){let t=!1,n=new Sn,r=null,i=new Sn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?pe(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=kt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?pe(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=re>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Sn().fromArray(se),ue=new Sn().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(e.DEPTH_TEST),o.setFunc(3),Se(!1),Ce(1),pe(e.CULL_FACE),be(0);function pe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function me(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function he(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ge(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function _e(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ve={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ve[103]=e.MIN,ve[104]=e.MAX;let ye={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function be(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(me(e.BLEND),g=!1);else if(g===!1&&(pe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:F(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:F(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:F(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:F(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ve[n],ve[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ye[r],ye[i],ye[o],ye[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function xe(t,n){t.side===2?me(e.CULL_FACE):pe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Se(r),t.blending===1&&t.transparent===!1?be(0):be(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Ce(t){t===0?me(e.CULL_FACE):(pe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function we(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function Te(t,n,r){t?(pe(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):me(e.POLYGON_OFFSET_FILL)}function Ee(t){t?pe(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function De(t){t===void 0&&(t=e.TEXTURE0+te-1),ae!==t&&(e.activeTexture(t),ae=t)}function Oe(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+te-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function ke(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ae(){try{e.compressedTexImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function je(){try{e.compressedTexImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Me(){try{e.texSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ne(){try{e.texSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Fe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ie(){try{e.texStorage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Le(){try{e.texStorage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function j(){try{e.texImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Re(){try{e.texImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function ze(t){return d[t]===void 0?e.getParameter(t):d[t]}function Be(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function M(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function N(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:pe,disable:me,bindFramebuffer:he,drawBuffers:ge,useProgram:_e,setBlending:be,setMaterial:xe,setFlipSided:Se,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:De,bindTexture:Oe,unbindTexture:ke,compressedTexImage2D:Ae,compressedTexImage3D:je,texImage2D:j,texImage3D:Re,pixelStorei:Be,getParameter:ze,updateUBOMapping:N,uniformBlockBinding:He,texStorage2D:Ie,texStorage3D:Le,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Fe,scissor:M,viewport:Ve,reset:Ue}}function uf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new L,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):St(`canvas`)}function g(e,t,n){let r=1,i=ze(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?mt:dn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),ae(t)}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ie(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ie(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ae(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(t,i){let a=r.get(t);if(t.isVideoTexture&&j(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?we(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function me(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?we(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Te(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let _e={[b]:e.REPEAT,[x]:e.CLAMP_TO_EDGE,[S]:e.MIRRORED_REPEAT},ve={[C]:e.NEAREST,[w]:e.NEAREST_MIPMAP_NEAREST,[T]:e.NEAREST_MIPMAP_LINEAR,[E]:e.LINEAR,[D]:e.LINEAR_MIPMAP_NEAREST,[O]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,_e[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,_e[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,_e[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ve[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ve[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ye[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function xe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=de(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ie(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Se(n.start,r.width,4),c=Se(t.start,r.width,4);n.start<=i+1&&a===c&&Se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function we(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=xe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=dn.getPrimaries(dn.workingColorSpace),r=o.colorSpace===``?null:dn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Re(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);be(c,o);let h,y=o.mipmaps,b=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,S=u.dataReady,C=ee(o,t);if(o.isDepthTexture)m=A(o.format===he,o.type),x&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){b&&x&&n.texStorage2D(e.TEXTURE_2D,C,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],b?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(x&&n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height),S&&Ce(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(b){if(S){if(o.layerUpdates.size>0){let t=rl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?S&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{b&&x&&n.texStorage2D(e.TEXTURE_2D,C,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?b?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?S&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,m,t.width,t.height,t.depth),S){if(o.layerUpdates.size>0){let i=rl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(x&&n.texStorage3D(e.TEXTURE_3D,C,m,t.width,t.height,t.depth),S&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(b)n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<C;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(b&&x){let t=ze(y[0]);n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],b?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(x){let r=ze(t);n.texStorage2D(e.TEXTURE_2D,C,m,r.width,r.height)}S&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Te(t,o,s){if(o.image.length!==6)return;let c=xe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=dn.getPrimaries(dn.workingColorSpace),r=o.colorSpace===``?null:dn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Re(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),b=a.convert(o.type),x=k(o.internalFormat,y,b,o.normalized,o.colorSpace),S=o.isVideoTexture!==!0,C=u.__version===void 0||c===!0,w=l.dataReady,T=ee(o,h);be(e.TEXTURE_CUBE_MAP,o);let E;if(f){S&&C&&n.texStorage2D(e.TEXTURE_CUBE_MAP,T,x,h.width,h.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let r=0;r<E.length;r++){let i=E[r];o.format===1023?S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,y,b,i.data):y===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?w&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(E=o.mipmaps,S&&C){E.length>0&&T++;let t=ze(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,T,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,y,b,m[t].data);for(let r=0;r<E.length;r++){let i=E[r].image[t].image;S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,y,b,i.data)}}else{S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,y,b,m[t]);for(let r=0;r<E.length;r++){let i=E[r];S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,y,b,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ee(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ie(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Le(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Le(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),be(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else fe(i.depthTexture,0);let u=l.__webglTexture,d=Ie(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Oe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Oe(i.__webglFramebuffer[0],t,0):Oe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),De(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),De(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,i){let a=r.get(t);n!==void 0&&Ee(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ke(t)}function je(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ne);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Le(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),De(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),be(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ee(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ee(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),be(c,a),Ee(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),be(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ee(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ee(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ke(t)}function Me(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Ne=[],Pe=[];function Fe(t){if(t.samples>0){if(Le(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ne.length=0,Pe.length=0,Ne.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ne.push(l),Pe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(i.maxSamples,e.samples)}function Le(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function j(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(dn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):F(`WebGLTextures: Unsupported texture color space:`,n)),t}function ze(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function df(e,t){function n(n,r=``){let i,a=dn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ff=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ms({vertexShader:ff,fragmentShader:pf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hf=class extends At{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new mf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new L,C=null,w=null,T=new mc;T.viewport=new Sn;let E=new mc;E.viewport=new Sn;let D=[T,E],O=new kc,A=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new tr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new tr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new tr,b[e]=t),t.getHandSpace()};function te(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}A=null,ee=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?he:me,a=_.stencil?ce:re);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new wn(d.textureWidth,d.textureHeight,{format:pe,type:k,depthTexture:new Da(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new wn(f.framebufferWidth,f.framebufferHeight,{format:pe,type:k,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ae=new R,oe=new R;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(A!==O.near||ee!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),A=O.near,ee=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;le(O,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?se(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,O,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Pt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new mc,o.layers.enable(n),o.viewport=new Sn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ka,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ge=new al;ge.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},gf=new B,_f=new z;_f.set(-1,0,0,0,1,0,0,0,1);function vf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,us(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(gf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(_f),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function yf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return F(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var bf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xf=null;function Sf(){return xf===null&&(xf=new Vi(bf,16,16,ve,ae),xf.name=`DFG_LUT`,xf.minFilter=E,xf.magFilter=E,xf.wrapS=x,xf.wrapT=x,xf.generateMipmaps=!1,xf.needsUpdate=!0),xf}var Cf=class{constructor(e={}){let{canvas:t=Ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=k}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([be,ye,_e]),g=new Set([k,re,te,ce,oe,se]),_=new Uint32Array(4),v=new Int32Array(4),y=new R,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,A=null,ee=null,ne=null;this._outputColorSpace=ft;let ie=0,le=0,ue=null,de=-1,fe=null,pe=new Sn,me=new Sn,he=null,ge=new H(0),ve=0,xe=t.width,Se=t.height,Ce=1,we=null,Te=null,Ee=new Sn(0,0,xe,Se),De=new Sn(0,0,xe,Se),Oe=!1,ke=new ra,Ae=!1,je=!1,Me=new B,Ne=new R,Pe=new Sn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Le(){return ue===null?Ce:1}let j=n;function Re(e,n){return t.getContext(e,n)}let ze,Be,M,Ve,N,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),j===null){let t=`webgl2`;if(j=Re(t,e),j===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),F(`WebGLRenderer: `+e.message),e}function ot(){ze=new Bl(j),ze.init(),rt=new df(j,ze),Be=new hl(j,ze,e,rt),M=new lf(j,ze),Be.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),A=j.createFramebuffer(),ee=j.createFramebuffer(),ne=j.createFramebuffer(),Ve=new Ul(j),N=new Hd,He=new uf(j,ze,M,N,Be,rt,Ve),Ue=new zl(T),We=new ol(j),it=new pl(j,We),Ge=new Vl(j,We,Ve,it),Ke=new Gl(j,Ge,We,it,Ve),et=new Wl(j,Be,He),Ze=new gl(N),qe=new Vd(T,Ue,ze,Be,it,Ze),Je=new vf(T,N),Ye=new Kd,Xe=new $d(ze),$e=new fl(T,Ue,M,Ke,p,s),Qe=new cf(T,Ke,Be),at=new yf(j,Ve,Be,M),tt=new ml(j,ze,Ve),nt=new Hl(j,ze,Ve),Ve.programs=qe.programs,T.capabilities=Be,T.extensions=ze,T.properties=N,T.renderLists=Ye,T.shadowMap=Qe,T.state=M,T.info=Ve}m!==1009&&(w=new ql(m,t.width,t.height,o,r,i));let st=new hf(T,j);this.xr=st,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(e){e!==void 0&&(Ce=e,this.setSize(xe,Se,!1))},this.getSize=function(e){return e.set(xe,Se)},this.setSize=function(e,n,r=!0){st.isPresenting?P(`WebGLRenderer: Can't change size while VR device is presenting.`):(xe=e,Se=n,t.width=Math.floor(e*Ce),t.height=Math.floor(n*Ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(xe*Ce,Se*Ce).floor()},this.setDrawingBufferSize=function(e,n,r){xe=e,Se=n,Ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)F(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ee)},this.setViewport=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),M.viewport(pe.copy(Ee).multiplyScalar(Ce).round())},this.getScissor=function(e){return e.copy(De)},this.setScissor=function(e,t,n,r){e.isVector4?De.set(e.x,e.y,e.z,e.w):De.set(e,t,n,r),M.scissor(me.copy(De).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(e){M.setScissorTest(Oe=e)},this.setOpaqueSort=function(e){we=e},this.setTransparentSort=function(e){Te=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(ue!==null){let t=ue.texture.format;e=h.has(t)}if(e){let e=ue.texture.type,t=g.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,j.clearBufferuiv(j.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,j.clearBufferiv(j.COLOR,0,v))}else r|=j.COLOR_BUFFER_BIT}t&&(r|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&j.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),Ye.dispose(),Xe.dispose(),N.dispose(),Ue.dispose(),Ke.dispose(),it.dispose(),at.dispose(),qe.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,vt),st.removeEventListener(`sessionend`,bt),xt.stop()};function ct(e){e.preventDefault(),Tt(`WebGLRenderer: Context Lost.`),E=!0}function lt(){Tt(`WebGLRenderer: Context Restored.`),E=!1;let e=Ve.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;ot(),Ve.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ut(e){F(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),pt(t)}function pt(e){mt(e),N.remove(e)}function mt(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=We.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*Le()),g.setMode(j.LINES)):g.setMode(j.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*Le()),i.isLineSegments?g.setMode(j.LINES):i.isLineLoop?g.setMode(j.LINE_LOOP):g.setMode(j.LINE_STRIP)}else i.isPoints?g.setMode(j.POINTS):i.isSprite&&g.setMode(j.TRIANGLES);if(i.isBatchedMesh){if(ze.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(j,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Ae===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Xe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),je=this.localClippingEnabled,Ae=Ze.init(this.clippingPlanes,je),Ae===!0&&Ze.setGlobalState(this.clippingPlanes,t),D!==null&&Qe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=N.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ze.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){xt.stop()}function bt(){xt.start()}let xt=new al;xt.setAnimationLoop(_t),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){gt=e,st.setAnimationLoop(e),e===null?xt.stop():xt.start()},st.addEventListener(`sessionstart`,vt),st.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){F(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=w!==null&&(ue===null||n)&&w.begin(T,ue);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,ue),x=Xe.get(e,C.length),x.init(t),x.state.textureUnits=He.getTextureUnits(),C.push(x),Me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ke.setFromProjectionMatrix(Me,yt,t.reversedDepth),je=this.localClippingEnabled,Ae=Ze.init(this.clippingPlanes,je),b=Ye.get(e,S.length),b.init(),S.push(b),st.enabled===!0&&st.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,T.sortObjects)}St(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(we,Te),Ie=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ie&&$e.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Ze.beginShadows();let i=x.state.shadowsArray;if(Qe.render(i,e,t),Ae===!0&&Ze.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Ie&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(b,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Ie&&$e.render(e),wt(b,e,t)}ue!==null&&le===0&&(He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),it.resetDefaultState(),de=-1,fe=null,C.pop(),C.length>0?(x=C[C.length-1],He.setTextureUnits(x.state.textureUnits),Ae===!0&&Ze.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ke)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Me);let i=Ke.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Pe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ke))){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(Me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Pe.z,s,t)}}else a.visible&&b.push(e,i,a,n,Pe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ae===!0&&Ze.setGlobalState(T.clippingPlanes,n),r&&M.viewport(pe.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ze.has(`EXT_color_buffer_half_float`)||ze.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new wn(1,1,{generateMipmaps:!0,type:e?ae:k,minFilter:O,samples:Math.max(4,Be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ge),ve=T.getClearAlpha(),ve<1&&T.setClearColor(16777215,.5),T.clear(),Ie&&$e.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ae===!0&&Ze.setGlobalState(T.clippingPlanes,r),Dt(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),ze.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ge,ve),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Fe);let r=N.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=qe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Mt(e,s),r.needsLights=I(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ed.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Fe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=ue===null?T.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:dn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),y=x.state.lights;if(Ae===!0&&(je===!0||e!==fe)){let t=e===fe&&r.id===de;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=At(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(M.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==de&&(de=r.id,w=!0),v.needsLights){let e=Nt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||fe!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(j,`projectionMatrix`,e.projectionMatrix),O.setValue(j,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(j,Ne.setFromMatrixPosition(e.matrixWorld)),Be.logarithmicDepthBuffer&&O.setValue(j,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(j,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(j,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&O.setValue(j,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&O.setValue(j,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&O.setValue(j,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){O.setOptional(j,i,`bindMatrix`),O.setOptional(j,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(j,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(O.setOptional(j,i,`batchingTexture`),O.setValue(j,`batchingTexture`,i._matricesTexture,He),O.setOptional(j,i,`batchingIdTexture`),O.setValue(j,`batchingIdTexture`,i._indirectTexture,He),O.setOptional(j,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(j,`batchingColorTexture`,i._colorsTexture,He));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&et.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(j,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Sf()),w){if(O.setValue(j,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Ft(k,E),a&&r.fog===!0&&Je.refreshFogUniforms(k,a),Je.refreshMaterialUniforms(k,r,Ce,Se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}ed.upload(j,jt(v),k,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ed.upload(j,jt(v),k,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(j,`center`,i.center),O.setValue(j,`modelViewMatrix`,i.modelViewMatrix),O.setValue(j,`normalMatrix`,i.normalMatrix),O.setValue(j,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,S),at.bind(n,S)}}return S}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function I(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){ue=e,ie=t,le=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,M.viewport(pe),M.scissor(me),M.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ee).multiplyScalar(Ce).floor(),me.copy(De).multiplyScalar(Ce).floor(),he=Oe;if(n!==0&&(r=A),M.bindFramebuffer(j.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(pe),M.scissor(me),M.setScissorTest(he),i){let r=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,t.__webglTexture,n)}de=-1};function It(e){let t=N.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Be.textureFormatReadable(e.format),t.__typeReadable=Be.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){M.bindFramebuffer(j.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&j.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=ue===null?null:N.get(ue).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(j.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.bufferData(j.PIXEL_PACK_BUFFER,a.byteLength,j.STREAM_READ),j.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let p=ue===null?null:N.get(ue).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,p);let m=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Ot(j,m,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,a),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(f),j.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),j.copyTexSubImage2D(j.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=j.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=j.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(j.UNPACK_ROW_LENGTH),b=M.getParameter(j.UNPACK_IMAGE_HEIGHT),x=M.getParameter(j.UNPACK_SKIP_PIXELS),S=M.getParameter(j.UNPACK_SKIP_ROWS),C=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,l),M.pixelStorei(j.UNPACK_SKIP_ROWS,u),M.pixelStorei(j.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),j.blitFramebuffer(l,u,o,s,f,p,o,s,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(j.READ_FRAMEBUFFER,ee),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,n.__webglTexture,i),T?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,r.__webglTexture,a),i===0?T?j.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):j.copyTexSubImage2D(v,a,f,p,l,u,o,s):j.blitFramebuffer(l,u,o,s,f,p,o,s,j.COLOR_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?j.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(j.UNPACK_ROW_LENGTH,y),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(j.UNPACK_SKIP_PIXELS,x),M.pixelStorei(j.UNPACK_SKIP_ROWS,S),M.pixelStorei(j.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&j.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){ie=0,le=0,ue=null,M.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dn._getDrawingBufferColorSpace(e),t.unpackColorSpace=dn._getUnpackColorSpace()}},wf={x:.8,z:.6},Tf={x:-.6,z:.8},Ef=.7,Df=1048576,Of={x:0,z:0};function kf(e,t){Of.x=e,Of.z=t}function Af(){return Of}function jf(e,t){let n=(Math.imul(e+Df|0,2376512323)^Math.imul(t+Df|0,3625334849))>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1540483477)>>>0,n=(n^n>>>15)>>>0,(n&16777215)/16777215}function Mf(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=jf(n,r),s=jf(n+1,r),c=jf(n,r+1),l=jf(n+1,r+1),u=i*i*(3-2*i),d=a*a*(3-2*a),f=o+(s-o)*u;return f+(c+(l-c)*u-f)*d}function Nf(e,t){let n=0,r=.5;for(let i=0;i<3;i++){n+=r*Mf(e,t);let i=e*2.03+17.1;t=t*2.03+9.7,e=i,r*=.5}return n/.875}function Pf(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function Ff(e,t,n){let r=e+Of.x,i=t+Of.z,a=Nf(r*.011,i*.011)-.5,o=Nf(r*.011+41.3,i*.011+17.9)-.5,s=r+a*34,c=i+o*34,l=s*wf.x+c*wf.z,u=s*Tf.x+c*Tf.z,d=Pf(.26,.7,Nf(r*.0065+3.7,i*.0065+8.1)),f=l/20+(Mf(u*.02,l*.005)-.5)*2,p=Pf(.12,.88,Mf(u*.055,f*.85+3.3)),m=f-(1-p)*.38,h=m-Math.floor(m),g=h/Ef,_=(1-h)/.30000000000000004,v=g+(g*g*(3-2*g)-g)*.55,y=h<.7?v:_**1.35,b=y*(.12+.88*p)*(.6+4.2*d),x=(s*.28+c*.96)/8.5+Mf(s*.05,c*.05)*1.2,S=x-Math.floor(x),C=S<.65?Pf(0,1,S/.65):((1-S)/.35)**1.2;return b+=C*.55*(1-d*.75)*Mf(r*.03+5.5,i*.03+1.7),b+=(Nf(r*.004-12.3,i*.004+5.1)-.5)*16,b+=(Mf(r*.09,i*.09)-.5)*.3*(1-d*.6),n&&(n.A=d,n.t=h,n.crest=p,n.prof=y),b}var If=[];function Lf(e,t,n,r,i){If.push({x:e,z:t,radius:n,depth:r,halfLife:i,age:0}),If.length>8&&If.shift()}function Rf(){If.length=0}function zf(e){for(let t=If.length-1;t>=0;t--)If[t].age+=e,If[t].age>If[t].halfLife*6&&If.splice(t,1)}function Bf(e,t){let n=0;for(let r of If){let i=e-r.x,a=t-r.z,o=Math.sqrt(i*i+a*a)/r.radius;if(o<1){let e=.5**(r.age/r.halfLife),t=1-o*o;n-=r.depth*t*Math.sqrt(t)*e}}return n}function q(e,t,n){return Ff(e,t,n)+(If.length?Bf(e,t):0)}function Vf(e,t,n,r=.15){let i=q(e+r,t)-q(e-r,t),a=q(e,t+r)-q(e,t-r);return n.x=i/(2*r),n.z=a/(2*r),n}var Hf=`
float hash2i(ivec2 p) {
  uvec2 q = uvec2(p + 1048576);
  uint h = (q.x * 0x8da6b343u) ^ (q.y * 0xd8163841u);
  h ^= h >> 13u;
  h *= 0x5bd1e995u;
  h ^= h >> 15u;
  return float(h & 0xffffffu) / 16777215.0;
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  ivec2 ii = ivec2(i);
  float a = hash2i(ii);
  float b = hash2i(ii + ivec2(1, 0));
  float c = hash2i(ii + ivec2(0, 1));
  float d = hash2i(ii + ivec2(1, 1));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float ab = a + (b - a) * u.x;
  float cd = c + (d - c) * u.x;
  return ab + (cd - ab) * u.y;
}
float fbm3(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(17.1, 9.7);
    a *= 0.5;
  }
  return s / 0.875;
}
`,Uf=`
uniform vec2 uSeed;
const vec2 WIND = vec2(0.8, 0.6);
const vec2 WINDP = vec2(-0.6, 0.8);
const float DUNE_K = ${Ef.toFixed(4)};

// Large, smooth terms (warp, sand supply, regional elevation): cheap to interpolate per-vertex.
vec4 terrainMacro(vec2 pw) {
  vec2 p = pw + uSeed;
  vec2 w = vec2(fbm3(p * 0.011), fbm3(p * 0.011 + vec2(41.3, 17.9))) - 0.5;
  vec2 q = p + w * 34.0;
  float A = smoothstep(0.26, 0.7, fbm3(p * 0.0065 + vec2(3.7, 8.1)));
  float M = (fbm3(p * 0.004 + vec2(-12.3, 5.1)) - 0.5) * 16.0;
  return vec4(q, A, M);
}
// Every noise term below is low-frequency; the dune's sharpness comes only from the
// fract()/profile step in duneShape(). So the noisy "fields" are evaluated per-vertex and
// interpolated, and only duneShape() runs per-pixel.
//   d  = (phase0, crest, amplitude, base elevation)   d2 = (dunelet phase, dunelet amp, A, 0)
void terrainFields(vec2 pw, vec4 m, out vec4 d, out vec4 d2) {
  vec2 p = pw + uSeed;
  vec2 q = m.xy;
  float A = m.z;
  float al = dot(q, WIND);
  float ac = dot(q, WINDP);
  float ph0 = al / 20.0 + (vnoise(vec2(ac * 0.02, al * 0.005)) - 0.5) * 2.0;
  float crest = smoothstep(0.12, 0.88, vnoise(vec2(ac * 0.055, ph0 * 0.85 + 3.3)));
  float ph2 = dot(q, vec2(0.28, 0.96)) / 8.5 + vnoise(q * 0.05) * 1.2;
  float amp2 = 0.55 * (1.0 - A * 0.75) * vnoise(p * 0.03 + vec2(5.5, 1.7));
  float base = m.w + (vnoise(p * 0.09) - 0.5) * 0.3 * (1.0 - A * 0.6);
  d = vec4(ph0, crest, mix(0.6, 4.8, A), base);
  d2 = vec4(ph2, amp2, A, 0.0);
}
float duneShape(vec4 d, vec4 d2, out vec4 info) {
  float ph = d.x - (1.0 - d.y) * 0.38; // low crest segments run ahead downwind as horns
  float t = ph - floor(ph);
  float up = t / DUNE_K;
  float dn = (1.0 - t) / (1.0 - DUNE_K);
  float stoss = up + (up * up * (3.0 - 2.0 * up) - up) * 0.55;
  float slip = pow(max(dn, 0.0), 1.35);
  float prof = t < DUNE_K ? stoss : slip;
  float h = prof * (0.12 + 0.88 * d.y) * d.z;
  float t2 = d2.x - floor(d2.x);
  float prof2 = t2 < 0.65 ? smoothstep(0.0, 1.0, t2 / 0.65) : pow(max((1.0 - t2) / 0.35, 0.0), 1.2);
  h += prof2 * d2.y;
  h += d.w;
  info = vec4(d2.z, t, d.y, prof);
  return h;
}
float terrainDetail(vec2 pw, vec4 m, out vec4 info) {
  vec4 d, d2;
  terrainFields(pw, m, d, d2);
  return duneShape(d, d2, info);
}
float terrainHeightInfo(vec2 pw, out vec4 info) {
  return terrainDetail(pw, terrainMacro(pw), info);
}
// The dune phase alone (crest where fract(phase) == DUNE_K); matches terrainDetail.
float dunePhase(vec4 m) {
  float al = dot(m.xy, WIND);
  float ac = dot(m.xy, WINDP);
  float ph0 = al / 20.0 + (vnoise(vec2(ac * 0.02, al * 0.005)) - 0.5) * 2.0;
  float crest = smoothstep(0.12, 0.88, vnoise(vec2(ac * 0.055, ph0 * 0.85 + 3.3)));
  return ph0 - (1.0 - crest) * 0.38;
}
float terrainHeight(vec2 pw) {
  vec4 i;
  return terrainHeightInfo(pw, i);
}
`,Wf=150,Gf=450,Kf=Wf/Gf,qf=`
${Hf}
${Uf}
uniform sampler2D uTrail;
uniform vec2 uTrailCenter;
uniform float uTrailSize;
uniform float uTrailTexel;
uniform vec4 uWorm;      // x, z, amplitude, radius
uniform vec2 uWormDir;
uniform vec3 uSunDir;
varying vec3 vTerrainWorld;
varying vec4 vDune;      // per-vertex dune fields (see terrainFields)
varying vec4 vDune2;
varying vec4 vTex;       // ripple warp (xy), ripple phase noise, spice field
varying vec2 vTex2;      // colour noise at two scales

float wormBulge(vec2 p) {
  vec2 d = p - uWorm.xy;
  float along = dot(d, uWormDir);
  float across = dot(d, vec2(-uWormDir.y, uWormDir.x));
  float a = clamp(along, -16.0, 0.0);
  float dist = length(vec2(along - a, across));
  float taper = 1.0 + a / 16.0 * 0.7;
  float r = uWorm.w * taper;
  float g = exp(-(dist * dist) / (r * r));
  // a little bow wave ahead of the head
  // squares, not pow(): pow() of a negative base is undefined, NaN on some GPUs
  float ba = (along - 1.5) / 2.0;
  float bc = across / (uWorm.w * 1.3);
  float bow = exp(-ba * ba - bc * bc) * 0.35;
  return uWorm.z * (g * taper + bow);
}

float trailOffsetAt(vec2 P) {
  vec2 uv = (P - uTrailCenter) / uTrailSize + 0.5;
  vec2 e = abs(uv - 0.5);
  float fade = 1.0 - smoothstep(0.40, 0.495, max(e.x, e.y));
  vec4 t = texture2D(uTrail, uv);
  return (-t.r + t.g * clamp(1.0 - t.r * 30.0, 0.0, 1.0)) * fade;
}

float trailOffsetSoft(vec2 P) {
  const float s = 0.2;
  return (trailOffsetAt(P) * 2.0 + trailOffsetAt(P + vec2(s, 0.0)) + trailOffsetAt(P - vec2(s, 0.0))
        + trailOffsetAt(P + vec2(0.0, s)) + trailOffsetAt(P - vec2(0.0, s))) / 6.0;
}
`,Jf=`
uniform float uTime;
uniform float uWindPhase;
uniform float uWind;
uniform vec3 uSandLight;
uniform vec3 uSandMid;
uniform vec3 uSandDeep;
uniform vec3 uSpice;
uniform vec3 uGlint;
uniform float uStorm;
`,Yf=`
  vec3 tWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 tMacro = terrainMacro(tWorld.xz);
  // Crest snapping: slide vertices that lie close to a dune crest onto it, so the razor
  // edge is carried by real geometry (its outline and shadow) instead of a grid zig-zag.
  {
    float ph = dunePhase(tMacro);
    float dph = DUNE_K - fract(ph);
    dph -= floor(dph + 0.5);
    if (abs(dph) < 0.03) {
      const float se = 0.3;
      vec4 mX = terrainMacro(tWorld.xz + vec2(se, 0.0));
      vec4 mZ = terrainMacro(tWorld.xz + vec2(0.0, se));
      vec2 g = vec2(dunePhase(mX) - ph, dunePhase(mZ) - ph) / se;
      vec2 shift = g * (dph / max(dot(g, g), 1e-6));
      if (length(shift) < ${(Kf*.62).toFixed(4)}) {
        tWorld.xz += shift;
        tMacro += (mX - tMacro) * (shift.x / se) + (mZ - tMacro) * (shift.y / se);
      }
    }
  }
  vec4 tD, tD2, tInfoV;
  terrainFields(tWorld.xz, tMacro, tD, tD2);
  float tH = duneShape(tD, tD2, tInfoV);
  float tTotal = tH + (uWorm.z > 0.001 ? wormBulge(tWorld.xz) : 0.0) + trailOffsetSoft(tWorld.xz);
  vec3 transformed = vec3(tWorld.x - modelMatrix[3].x, tTotal, tWorld.z - modelMatrix[3].z);
  vTerrainWorld = vec3(tWorld.x, tTotal, tWorld.z);
`,Xf=`
  vDune = tD;
  vDune2 = tD2;
  vec2 tpp = tWorld.xz + uSeed;
  vTex = vec4(vnoise(tpp * 0.21), vnoise(tpp * 0.21 + 7.7), vnoise(tpp * 0.45), fbm3(tpp * 0.016 + vec2(9.0, 2.0)));
  vTex2 = vec2(vnoise(tpp * 0.045), vnoise(tpp * 0.31 + 3.1));
`,Zf=`
  vec2 P = vTerrainWorld.xz;
  vec4 tInfo;
  duneShape(vDune, vDune2, tInfo);

  // Slope by central differences over about one pixel's footprint: crisp crests that are
  // still anti-aliased. The interpolated fields are linear per triangle, so their screen
  // derivatives give an exact Jacobian to extrapolate each tap with; no noise per pixel.
  vec2 dPx = dFdx(P);
  vec2 dPy = dFdy(P);
  float det = dPx.x * dPy.y - dPx.y * dPy.x;
  det = abs(det) > 1e-12 ? det : 1e-12;
  vec4 aX = dFdx(vDune), aY = dFdy(vDune);
  vec4 bX = dFdx(vDune2), bY = dFdy(vDune2);
  vec4 Jx = (aX * dPy.y - aY * dPx.y) / det;
  vec4 Jz = (aY * dPx.x - aX * dPy.x) / det;
  vec4 Kx = (bX * dPy.y - bY * dPx.y) / det;
  vec4 Kz = (bY * dPx.x - bX * dPy.x) / det;
  float e = clamp(max(length(dPx), length(dPy)) * 0.6, 0.012, 0.25);
  vec4 dmy;
  float hxp = duneShape(vDune + Jx * e, vDune2 + Kx * e, dmy);
  float hxm = duneShape(vDune - Jx * e, vDune2 - Kx * e, dmy);
  float hzp = duneShape(vDune + Jz * e, vDune2 + Kz * e, dmy);
  float hzm = duneShape(vDune - Jz * e, vDune2 - Kz * e, dmy);
  vec2 grad = vec2(hxp - hxm, hzp - hzm) / (2.0 * e);
  if (uWorm.z > 0.001) {
    float wb = wormBulge(P);
    grad += vec2(wormBulge(P + vec2(0.12, 0.0)) - wb, wormBulge(P + vec2(0.0, 0.12)) - wb) / 0.12;
  }

  // footprints, craters & disturbed sand from the trail texture
  vec2 tuv = (P - uTrailCenter) / uTrailSize + 0.5;
  vec2 tEdge = abs(tuv - 0.5);
  float tFade = 1.0 - smoothstep(0.40, 0.495, max(tEdge.x, tEdge.y));
  vec4 tr = texture2D(uTrail, tuv) * tFade;
  float ts = uTrailSize * uTrailTexel * 1.25;
  float oL = trailOffsetAt(P - vec2(ts, 0.0));
  float oR = trailOffsetAt(P + vec2(ts, 0.0));
  float oD = trailOffsetAt(P - vec2(0.0, ts));
  float oU = trailOffsetAt(P + vec2(0.0, ts));
  grad += vec2(oR - oL, oU - oD) / (2.0 * ts);

  float A = tInfo.x;
  float tt = tInfo.y;
  float prof = tInfo.w;
  float slope = length(grad);
  float disturbed = clamp(tr.b * 1.4 + tr.r * 18.0, 0.0, 1.0);

  // wind ripples: asymmetric, bending around the dunes, absent on slip faces
  float stossMask = tt < DUNE_K ? smoothstep(DUNE_K, DUNE_K - 0.1, tt) : 0.12;
  vec2 rq = P + (vTex.xy - 0.5) * 2.6;
  float rph = dot(rq, WIND) / 0.66 + vTex.z * 1.1 + uTime * 0.025;
  float raa = 1.0 - smoothstep(0.18, 0.45, fwidth(rph));
  float rippleAmp = 0.015 * stossMask * (1.0 - disturbed) * smoothstep(1.3, 0.35, slope) * raa;
  float rr = 6.2831853 * rph;
  float dr = cos(rr) + 0.5 * cos(2.0 * rr + 1.3) + 0.2 * cos(3.0 * rr + 2.2);
  grad += (WIND / 0.66) * dr * 6.2831853 * rippleAmp;

  vec3 wN = normalize(vec3(-grad.x, 1.0, -grad.y));
  normal = normalize((viewMatrix * vec4(wN, 0.0)).xyz);

  // ---------- colour ----------
  float n1 = vTex2.x;
  float n2 = vTex2.y;
  float grain = vnoise(P * 11.0);
  vec3 col = mix(uSandMid, uSandLight, clamp(smoothstep(0.35, 1.0, prof * tInfo.z) * 0.65 + (n1 - 0.5) * 0.5, 0.0, 1.0));
  float onSlip = tt > DUNE_K ? 1.0 : 0.0;
  col = mix(col, uSandDeep, onSlip * 0.16);
  col = mix(col, uSandDeep, (1.0 - smoothstep(0.0, 0.3, prof)) * 0.36 * (0.4 + 0.6 * n2));
  // spice-stained pans between dunes
  float spice = smoothstep(0.6, 0.8, vTex.w);
  spice *= (1.0 - smoothstep(0.15, 0.7, prof * tInfo.z)) * (0.7 + 0.3 * n2);
  col = mix(col, uSpice, spice * 0.6);
  // ripple troughs collect coarser, darker grains
  col *= 1.0 - 0.07 * smoothstep(0.2, 1.0, -sin(rr)) * stossMask * raa * (1.0 - disturbed);
  col *= 0.93 + 0.13 * grain;
  // turned-over sand is darker and slightly redder; footprint floors are a touch shaded
  col = mix(col, col * vec3(0.86, 0.8, 0.75), clamp(tr.b, 0.0, 1.0) * 0.5);
  col *= 1.0 - clamp(tr.r * 1.2, 0.0, 0.12);

  // saltation: streaks of sand creeping downwind over exposed slopes
  vec2 wq = vec2(dot(P, WIND), dot(P, WINDP));
  float st = vnoise(vec2(wq.x * 0.22 - uWindPhase * 2.4, wq.y * 1.3)) * 0.6
           + vnoise(vec2(wq.x * 0.8 - uWindPhase * 3.6, wq.y * 3.2) + 17.0) * 0.4;
  float streak = smoothstep(0.56, 0.86, st) * (0.35 + uWind * 0.65) * (tt < DUNE_K ? 1.0 : 0.35);
  col = mix(col, col * 1.12 + vec3(0.02, 0.014, 0.006), streak * (0.45 + uStorm * 0.4));

  diffuseColor.rgb = col;
  roughnessFactor = mix(0.95, 0.82, onSlip);
`,Qf=`
  {
    // sparkle only where the sun itself reaches (not bounce or sky light)
    float sunLit = 0.0;
    #if NUM_DIR_LIGHTS > 0
      float ndl = max(dot(normal, directionalLights[0].direction), 0.0);
      float shd = 1.0;
      #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
        shd = getShadow(directionalShadowMap[0], directionalLightShadows[0].shadowMapSize, directionalLightShadows[0].shadowIntensity,
                        directionalLightShadows[0].shadowBias, directionalLightShadows[0].shadowRadius, vDirectionalShadowCoord[0]);
      #endif
      sunLit = ndl * shd * length(directionalLights[0].color) * 0.577;
    #endif
    float cellSz = max(0.045, fwidth(P.x) * 1.5);
    vec2 gp = P / cellSz;
    ivec2 gc = ivec2(floor(gp));
    float hA = hash2i(gc);
    float hB = hash2i(gc + ivec2(71, 13));
    float tw = pow(0.5 + 0.5 * sin(uTime * (1.2 + hB * 3.5) + hA * 60.0), 10.0);
    vec2 f = fract(gp) - 0.5;
    float sparkle = step(0.9935, hA) * tw * smoothstep(0.5, 0.05, length(f));
    outgoingLight += uGlint * sparkle * sunLit * 1.6 * (1.0 - disturbed * 0.7);
  }
`;function $f(e){let t=new es(Wf,Wf,Gf,Gf);t.rotateX(-Math.PI/2),t.deleteAttribute(`uv`);let n={uSeed:{value:new L},uTime:{value:0},uWindPhase:{value:0},uWind:{value:.5},uStorm:{value:0},uWorm:{value:new Sn(0,0,0,3)},uWormDir:{value:new L(1,0)},uSunDir:{value:new R(0,1,0)},uSandLight:{value:new H(`#efcf9f`)},uSandMid:{value:new H(`#dcac76`)},uSandDeep:{value:new H(`#b27c50`)},uSpice:{value:new H(`#c0643a`)},uGlint:{value:new H(`#fff2d8`)},...e},r=new G({color:16777215,roughness:.93,metalness:0});r.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${qf}`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(0.0, 1.0, 0.0);`).replace(`#include <begin_vertex>`,`${Yf}\n${Xf}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${qf}\n${Jf}`).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>\n${Zf}`).replace(`#include <opaque_fragment>`,`${Qf}\n#include <opaque_fragment>`)},r.customProgramCacheKey=()=>`arrakis-terrain-6`;let i=new _s;i.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${qf}`).replace(`#include <begin_vertex>`,`${Yf}\n  transformed -= uSunDir * 0.35;`)},i.customProgramCacheKey=()=>`arrakis-terrain-depth-5`;let a=new W(t,r);return a.customDepthMaterial=i,a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,a.name=`terrain`,{mesh:a,uniforms:n,size:Wf,follow(e,t){a.position.set(Math.round(e/Kf)*Kf,0,Math.round(t/Kf)*Kf)}}}var ep={FOOT:0,CRATER:1,DISTURB:2,RING:3,FURROW:4},tp=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,np=`
uniform sampler2D tPrev;
uniform vec2 uOffset;
uniform vec4 uDecay;
varying vec2 vUv;
void main() {
  vec2 suv = vUv + uOffset;
  vec4 v = texture2D(tPrev, suv);
  if (suv.x < 0.0 || suv.y < 0.0 || suv.x > 1.0 || suv.y > 1.0) v = vec4(0.0);
  gl_FragColor = v * uDecay;
}
`,rp=`
attribute vec2 iPos;
attribute float iRot;
attribute vec2 iScale;
attribute vec4 iParams;
uniform vec2 uCenter;
uniform float uSize;
varying vec2 vLocal;
varying vec2 vMeters;
varying vec4 vParams;
void main() {
  vLocal = position.xy * 2.0;
  vec2 l = position.xy * iScale;
  vMeters = l;
  float c = cos(iRot), s = sin(iRot);
  vec2 w = iPos + vec2(l.x * c - l.y * s, l.x * s + l.y * c);
  vParams = iParams;
  gl_Position = vec4((w - uCenter) / uSize * 2.0, 0.0, 1.0);
}
`,ip=`
varying vec2 vLocal;
varying vec2 vMeters;
varying vec4 vParams;

float ellipse(vec2 p, vec2 c, vec2 r) {
  vec2 d = (p - c) / r;
  return length(d);
}

void main() {
  int type = int(vParams.x + 0.5);
  float depth = vParams.y;
  float rim = vParams.z;
  float dist = vParams.w;
  vec4 o = vec4(0.0);

  if (type == 0) {
    // footprint in meters: +x forward. Sole + heel, soft sand walls, rim of pushed sand.
    vec2 p = vMeters;
    float sole = ellipse(p, vec2(0.05, 0.0), vec2(0.135, 0.068));
    float heel = ellipse(p, vec2(-0.1, 0.0), vec2(0.072, 0.058));
    float d = min(sole, heel);
    float dep = depth * smoothstep(1.05, 0.45, d);
    // toe dig: push-off digs a little deeper at the front
    dep += depth * 0.35 * smoothstep(0.9, 0.2, ellipse(p, vec2(0.12, 0.0), vec2(0.06, 0.05)));
    float ring = smoothstep(0.95, 1.25, d) * smoothstep(2.1, 1.3, d);
    // sand thrown backwards at toe-off piles behind the heel a bit more
    float back = smoothstep(0.0, -0.18, p.x) * 0.6 + 0.7;
    float r = rim * ring * back;
    float dis = dist * smoothstep(2.6, 0.8, d);
    o = vec4(dep, r, dis, 1.0);
  } else if (type == 1) {
    // crater: vLocal is -1..1 over 1.6x radius
    float r = length(vLocal) * 1.6;
    float u = max(1.0 - r * r, 0.0);
    float dep = depth * u * sqrt(u);
    float ring = smoothstep(0.85, 1.05, r) * smoothstep(1.6, 1.1, r);
    float dis = dist * smoothstep(1.6, 0.6, r);
    o = vec4(dep, rim * ring, dis, 1.0);
  } else if (type == 2) {
    float r = length(vLocal);
    float u = max(1.0 - r * r, 0.0);
    o = vec4(depth * u * u, 0.0, dist * u, 1.0);
  } else if (type == 3) {
    float r = length(vLocal);
    float ring = smoothstep(0.7, 0.88, r) * smoothstep(1.0, 0.9, r);
    o = vec4(0.0, rim * ring, dist * ring, 1.0);
  } else {
    // furrow: elongated soft trench along +x
    vec2 p = vLocal;
    float e = length(vec2(p.x, p.y * 1.0));
    float u = max(1.0 - e * e, 0.0);
    float side = smoothstep(0.55, 0.85, abs(p.y)) * smoothstep(1.0, 0.85, abs(p.y));
    o = vec4(depth * u, rim * side * (1.0 - abs(p.x)), dist * u, 1.0);
  }
  gl_FragColor = o;
}
`,ap=new H,op=class{constructor(e,{size:t=64,res:n=2048,maxStamps:r=512}={}){this.renderer=e,this.size=t,this.res=n,this.texel=t/n;let i={type:ae,format:pe,minFilter:E,magFilter:E,wrapS:x,wrapT:x,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1};this.read=new wn(n,n,i),this.write=new wn(n,n,i),this.center=new L,this.prevCenter=new L,this.needsClear=!0,this.halfLife=new R(70,70,26),this.camera=new yc(-1,1,1,-1,0,1),this.copyMat=new ms({uniforms:{tPrev:{value:null},uOffset:{value:new L},uDecay:{value:new Sn(1,1,1,1)}},vertexShader:tp,fragmentShader:np,depthTest:!1,depthWrite:!1});let a=new W(new es(2,2),this.copyMat);a.frustumCulled=!1,this.copyScene=new cr,this.copyScene.add(a);let o=new es(1,1),s=new Cc;s.index=o.index,s.setAttribute(`position`,o.getAttribute(`position`)),this.maxStamps=r,this.iPos=new Gi(new Float32Array(r*2),2),this.iRot=new Gi(new Float32Array(r),1),this.iScale=new Gi(new Float32Array(r*2),2),this.iParams=new Gi(new Float32Array(r*4),4);for(let e of[this.iPos,this.iRot,this.iScale,this.iParams])e.setUsage(vt);s.setAttribute(`iPos`,this.iPos),s.setAttribute(`iRot`,this.iRot),s.setAttribute(`iScale`,this.iScale),s.setAttribute(`iParams`,this.iParams),s.instanceCount=0,this.stampGeo=s,this.stampMat=new ms({uniforms:{uCenter:{value:this.center},uSize:{value:t}},vertexShader:rp,fragmentShader:ip,depthTest:!1,depthWrite:!1,transparent:!0,blending:5,blendEquation:104,blendEquationAlpha:104,blendSrc:201,blendDst:201});let c=new W(s,this.stampMat);c.frustumCulled=!1,this.stampScene=new cr,this.stampScene.add(c),this.queue=0,this.uniforms={uTrail:{value:this.read.texture},uTrailCenter:{value:new L},uTrailSize:{value:t},uTrailTexel:{value:1/n}}}stamp(e,t,n,r,i,a,o,s,c){if(this.queue>=this.maxStamps)return;let l=this.queue++;this.iPos.array[l*2]=t,this.iPos.array[l*2+1]=n,this.iRot.array[l]=r,this.iScale.array[l*2]=i,this.iScale.array[l*2+1]=a,this.iParams.array[l*4]=e,this.iParams.array[l*4+1]=o,this.iParams.array[l*4+2]=s,this.iParams.array[l*4+3]=c}clear(){this.needsClear=!0}update(e,t,n){let r=this.renderer,i=this.texel,a=Math.round(t/i)*i,o=Math.round(n/i)*i;this.prevCenter.copy(this.center),this.center.set(a,o);let s=r.getRenderTarget(),c=r.autoClear;if(r.autoClear=!1,this.needsClear){r.getClearColor(ap);let e=r.getClearAlpha();r.setClearColor(0,0);for(let e of[this.read,this.write])r.setRenderTarget(e),r.clear(!0,!1,!1);r.setClearColor(ap,e),this.prevCenter.copy(this.center),this.needsClear=!1}this.copyMat.uniforms.tPrev.value=this.read.texture,this.copyMat.uniforms.uOffset.value.set((this.center.x-this.prevCenter.x)/this.size,(this.center.y-this.prevCenter.y)/this.size);let l=this.halfLife;if(this.copyMat.uniforms.uDecay.value.set(.5**(e/l.x),.5**(e/l.y),.5**(e/l.z),1),r.setRenderTarget(this.write),r.render(this.copyScene,this.camera),this.queue>0){this.stampGeo.instanceCount=this.queue;for(let e of[this.iPos,this.iRot,this.iScale,this.iParams])e.clearUpdateRanges(),e.addUpdateRange(0,this.queue*e.itemSize),e.needsUpdate=!0;r.render(this.stampScene,this.camera),this.queue=0}r.setRenderTarget(s),r.autoClear=c;let u=this.read;this.read=this.write,this.write=u,this.uniforms.uTrail.value=this.read.texture,this.uniforms.uTrailCenter.value.copy(this.center)}},sp=[{t:0,sun:`#a9c0f0`,si:1.35,sky:`#4a5f94`,gnd:`#4a3f58`,hi:1.15,fog:`#26314f`,exp:1.45,glint:`#d4e0ff`},{t:4.6,sun:`#a4acd8`,si:1.1,sky:`#4a5080`,gnd:`#54424e`,hi:1.1,fog:`#34385a`,exp:1.4,glint:`#d4e0ff`},{t:5.35,sun:`#c09088`,si:.1,sky:`#6e6888`,gnd:`#7a5846`,hi:1,fog:`#86707a`,exp:1.12,glint:`#ffd8bc`},{t:6.4,sun:`#ffb27e`,si:2.3,sky:`#a8b0cc`,gnd:`#c88c60`,hi:1.15,fog:`#dcb49a`,exp:1.05,glint:`#ffdcb4`},{t:8.5,sun:`#ffe2bc`,si:3.1,sky:`#b4c4dc`,gnd:`#d8a878`,hi:1.3,fog:`#e8cdac`,exp:1,glint:`#fff2de`},{t:12,sun:`#fff3e2`,si:3.4,sky:`#c0cce0`,gnd:`#e0b284`,hi:1.35,fog:`#eedcc0`,exp:.94,glint:`#fff8ec`},{t:15.5,sun:`#ffe2be`,si:3.3,sky:`#b8c0d8`,gnd:`#dcaa78`,hi:1.32,fog:`#ebd2ae`,exp:.98,glint:`#fff2de`},{t:17.3,sun:`#ffcc98`,si:3.1,sky:`#aeb0cc`,gnd:`#d49c6a`,hi:1.25,fog:`#e6c09a`,exp:1.02,glint:`#ffe6c4`},{t:18.5,sun:`#ff9e62`,si:2.2,sky:`#9690b2`,gnd:`#b87850`,hi:1.1,fog:`#d09a7c`,exp:1.08,glint:`#ffc8a0`},{t:19.3,sun:`#b07488`,si:.1,sky:`#5a5680`,gnd:`#6a4a44`,hi:1,fog:`#665670`,exp:1.14,glint:`#ffc8ac`},{t:20.4,sun:`#a4b8ea`,si:1.2,sky:`#46588c`,gnd:`#4a3e56`,hi:1.1,fog:`#2a3456`,exp:1.42,glint:`#d4e0ff`},{t:24,sun:`#a9c0f0`,si:1.35,sky:`#4a5f94`,gnd:`#4a3f58`,hi:1.15,fog:`#26314f`,exp:1.45,glint:`#d4e0ff`}].map(e=>({...e,sun:new H(e.sun),sky:new H(e.sky),gnd:new H(e.gnd),fog:new H(e.fog),glint:new H(e.glint)})),cp=new H(`#b0703e`),lp=new H(`#d8905a`),up=5.35,dp=19.3,fp=class{constructor(e){this.scene=e,this.time=16.9,this.storm=0,this.sun=new xc(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=0,this.sun.shadow.radius=2.5,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=420,e.add(this.sun),e.add(this.sun.target),this.hemi=new nc(11846358,14591598,1),e.add(this.hemi),this.bounce=new xc(14263926,.4),e.add(this.bounce),e.add(this.bounce.target),this.fog=new sr(15254168,120,300),e.fog=this.fog,e.background=new H(15254168),this.sunDir=new R(0,1,0),this.sunColor=new H,this.skyColor=new H,this.groundColor=new H,this.fogColor=new H,this.glint=new H,this.exposure=1,this.sunIntensity=3,this.isNight=!1,this.litTint=new H,this.ambientTint=new H,this.shadowExt=0,this._basisR=new R,this._basisU=new R,this.setTime(this.time)}setTime(e){this.time=(e%24+24)%24;let t=this.time,n=sp[0],r=sp[sp.length-1];for(let e=0;e<sp.length-1;e++)if(t>=sp[e].t&&t<=sp[e+1].t){n=sp[e],r=sp[e+1];break}let i=r.t===n.t?0:(t-n.t)/(r.t-n.t),a=i*i*(3-2*i);if(this.sunColor.copy(n.sun).lerp(r.sun,a),this.skyColor.copy(n.sky).lerp(r.sky,a),this.groundColor.copy(n.gnd).lerp(r.gnd,a),this.fogColor.copy(n.fog).lerp(r.fog,a),this.glint.copy(n.glint).lerp(r.glint,a),this.sunIntensity=n.si+(r.si-n.si)*a,this.hemiIntensity=n.hi+(r.hi-n.hi)*a,this.exposure=n.exp+(r.exp-n.exp)*a,this.isNight=t<up||t>dp,this.isNight){let e=(t>dp?t-dp:t+24-dp)/10.049999999999999*Math.PI,n=nn.degToRad(12+40*Math.sin(e)),r=-Math.cos(e)*.8,i=-.6,a=Math.hypot(r,i);this.sunDir.set(r/a*Math.cos(n),Math.sin(n),i/a*Math.cos(n)).normalize()}else{let e=(t-6)/12*Math.PI,n=nn.degToRad(3+59*Math.max(0,Math.sin(e))),r=Math.cos(e),i=-Math.sin(e)-.35,a=Math.hypot(r,i);this.sunDir.set(r/a*Math.cos(n),Math.sin(n),i/a*Math.cos(n)).normalize()}this.apply()}setStorm(e){this.storm=e,this.apply()}apply(){let e=this.storm,t=this.sunColor.clone().lerp(lp,e*.6);this.sun.color.copy(t),this.sun.intensity=this.sunIntensity*(1-e*.55),this.hemi.color.copy(this.skyColor).lerp(cp,e*.5),this.hemi.groundColor.copy(this.groundColor),this.hemi.intensity=this.hemiIntensity*(1+e*.35),this.bounce.color.copy(this.groundColor),this.bounce.intensity=this.sunIntensity*.16*(1-e*.5);let n=this.fogColor.clone().lerp(cp.clone().multiplyScalar(this.isNight?.25:1),e*.75);this.fog.color.copy(n),this.scene.background.copy(n),this.litTint.copy(this.sun.color).multiplyScalar(this.sun.intensity*Math.max(.15,this.sunDir.y+.35)*.32).add(this.hemi.color.clone().multiplyScalar(this.hemi.intensity*.45)),this.ambientTint.copy(this.hemi.color).multiplyScalar(this.hemi.intensity*.6)}update(e,t,n){let r=this.sun.shadow.camera,i=Math.max(14,t+10);(i>this.shadowExt||i<this.shadowExt-10)&&(this.shadowExt=Math.ceil(i/5)*5);let a=this.shadowExt;r.right!==a&&(r.left=-a,r.right=a,r.top=a,r.bottom=-a,r.updateProjectionMatrix());let o=this.sunDir,s=o.clone().negate(),c=this._basisR.crossVectors(s,new R(0,1,0));c.lengthSq()<1e-4&&c.set(1,0,0),c.normalize();let l=this._basisU.crossVectors(c,s).normalize(),u=2*a/this.sun.shadow.mapSize.x,d=e.dot(c),f=e.dot(l),p=e.dot(o);d=Math.round(d/u)*u,f=Math.round(f/u)*u;let m=new R().addScaledVector(c,d).addScaledVector(l,f).addScaledVector(o,p);this.sun.target.position.copy(m),this.sun.position.copy(m).addScaledVector(o,200),this.bounce.target.position.copy(e),this.bounce.position.set(e.x-o.x*50,e.y+22,e.z-o.z*50),this.fog.near=n-12-this.storm*22,this.fog.far=n+140-this.storm*92}},pp=new R,mp=new R,hp=new R,gp=new R,_p=new R,vp=new R,yp=class{constructor(e,{cols:t=9,rows:n=14,width:r=.62,length:i=1.22,flare:a=1.55}={}){this.cols=t,this.rows=n;let o=t*n;this.pos=new Float32Array(o*3),this.prev=new Float32Array(o*3),this.force=new Float32Array(o*3),this.constraints=[],this.initialized=!1;let s=i/(n-1),c=(e,n)=>n*t+e;for(let e=0;e<n;e++){let i=r*(1+(a-1)*(e/(n-1)))/(t-1);for(let r=0;r<t;r++){if(r<t-1&&this.constraints.push([c(r,e),c(r+1,e),i,1]),e<n-1&&this.constraints.push([c(r,e),c(r,e+1),s,1]),r<t-1&&e<n-1){let t=Math.hypot(i,s);this.constraints.push([c(r,e),c(r+1,e+1),t,.5]),this.constraints.push([c(r+1,e),c(r,e+1),t,.5])}e<n-2&&this.constraints.push([c(r,e),c(r,e+2),s*2,.35])}}let l=new ti;this.posAttr=new Vr(new Float32Array(o*3),3),this.posAttr.setUsage(vt),l.setAttribute(`position`,this.posAttr);let u=new Float32Array(o*2);for(let e=0;e<n;e++)for(let r=0;r<t;r++)u[(e*t+r)*2]=r/(t-1),u[(e*t+r)*2+1]=1-e/(n-1);l.setAttribute(`uv`,new Vr(u,2));let d=[];for(let e=0;e<n-1;e++)for(let n=0;n<t-1;n++){let t=c(n,e),r=c(n+1,e),i=c(n,e+1),a=c(n+1,e+1);d.push(t,i,r,r,i,a)}l.setIndex(d),this.tris=d,this.geometry=l,this.mesh=new W(l,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1}reset(e,t){let{cols:n,rows:r}=this;for(let i=0;i<r;i++)for(let a=0;a<n;a++){let o=(i*n+a)*3,s=e[a],c=i/(r-1);this.pos[o]=s.x+t.x*c*.25,this.pos[o+1]=s.y-c*1.2,this.pos[o+2]=s.z+t.z*c*.25,this.prev[o]=this.pos[o],this.prev[o+1]=this.pos[o+1],this.prev[o+2]=this.pos[o+2]}this.initialized=!0}update(e,t,n,r,i,a){this.initialized||this.reset(t,a);let{cols:o,rows:s,pos:c,prev:l,force:u}=this,d=o*s,f=Math.min(4,Math.max(1,Math.ceil(e/(1/120)))),p=Math.min(e,1/20)/f;for(let e=0;e<f;e++){u.fill(0);let e=this.tris;for(let t=0;t<e.length;t+=3){let n=e[t]*3,i=e[t+1]*3,a=e[t+2]*3;pp.set(c[n],c[n+1],c[n+2]),mp.set(c[i]-pp.x,c[i+1]-pp.y,c[i+2]-pp.z),hp.set(c[a]-pp.x,c[a+1]-pp.y,c[a+2]-pp.z),gp.crossVectors(mp,hp);let o=gp.length();if(o<1e-8)continue;gp.divideScalar(o),_p.set((c[n]-l[n]+c[i]-l[i]+c[a]-l[a])/(3*p),(c[n+1]-l[n+1]+c[i+1]-l[i+1]+c[a+1]-l[a+1])/(3*p),(c[n+2]-l[n+2]+c[i+2]-l[i+2]+c[a+2]-l[a+2])/(3*p)),_p.subVectors(r,_p);let s=gp.dot(_p),d=s*(Math.abs(s)*.5+1)*o*.5*.6;for(let e of[n,i,a])u[e]+=gp.x*d/3,u[e+1]+=gp.y*d/3,u[e+2]+=gp.z*d/3}for(let e=o;e<d;e++){let t=e*3,n=c[t],r=c[t+1],i=c[t+2],a=.992;c[t]=n+(n-l[t])*a+u[t]*350*p*p,c[t+1]=r+(r-l[t+1])*a+(u[t+1]*350-9.8)*p*p,c[t+2]=i+(i-l[t+2])*a+u[t+2]*350*p*p,l[t]=n,l[t+1]=r,l[t+2]=i}for(let e=0;e<o;e++){let n=e*3;l[n]=c[n],l[n+1]=c[n+1],l[n+2]=c[n+2],c[n]=t[e].x,c[n+1]=t[e].y,c[n+2]=t[e].z}for(let e=0;e<4;e++){for(let[e,t,n,r]of this.constraints){let i=e*3,a=t*3,s=c[a]-c[i],l=c[a+1]-c[i+1],u=c[a+2]-c[i+2],d=Math.sqrt(s*s+l*l+u*u)||1e-6,f=(d-n)/d*(d>n?r:r*.3),p=e<o,m=t<o;if(p&&m)continue;let h=p?0:m?1:.5,g=m?0:p?1:.5;c[i]+=s*f*h,c[i+1]+=l*f*h,c[i+2]+=u*f*h,c[a]-=s*f*g,c[a+1]-=l*f*g,c[a+2]-=u*f*g}for(let e=o;e<d;e++){let t=e*3;vp.set(c[t],c[t+1],c[t+2]);for(let e of n){pp.subVectors(e.b,e.a);let t=pp.lengthSq(),n=t>0?mp.subVectors(vp,e.a).dot(pp)/t:0;n=Math.min(1,Math.max(0,n)),hp.copy(e.a).addScaledVector(pp,n),mp.subVectors(vp,hp);let r=mp.length();r<e.r&&(r<1e-5?mp.set(0,0,-1):mp.divideScalar(r),vp.copy(hp).addScaledVector(mp,e.r))}c[t]=vp.x,c[t+1]=vp.y,c[t+2]=vp.z}}for(let e=o;e<d;e++){let t=e*3,n=i(c[t],c[t+2])+.04;c[t+1]<n&&(c[t+1]=n,l[t]=c[t]-(c[t]-l[t])*.5,l[t+2]=c[t+2]-(c[t+2]-l[t+2])*.5)}}this.posAttr.array.set(c),this.posAttr.needsUpdate=!0,this.geometry.computeVertexNormals(),this.geometry.computeBoundingSphere()}},bp=.45,xp=.44,Sp=.89,Cp=.075,wp=.29,Tp=.27,Ep=.095,Dp=.2,Op=.93385,kp=1.9,Ap=5.4,jp=.035,Mp=16,Np=new R(0,1,0),Pp=new R,Fp={x:0,z:0},Ip=new R,Lp=new R;function Rp(e,t,n){return e<t?t:e>n?n:e}function zp(e,t,n){let r=(t-e+Math.PI)%(Math.PI*2)-Math.PI;return r<-Math.PI&&(r+=Math.PI*2),e+r*n}function Bp(e,t,n){let r=new W(new ja(e,Math.max(.01,t-e*.6),4,12),n);return r.castShadow=!0,r.receiveShadow=!0,r}function Vp(e,t,n){e.position.addVectors(t,n).multiplyScalar(.5),Pp.subVectors(n,t).normalize(),e.quaternion.setFromUnitVectors(Np,Pp)}function Hp(e){return e.castShadow=!0,e.receiveShadow=!0,e}var Up=class{constructor(){this.root=new V,this.root.name=`fremen`;let e=new G({color:`#2f2b28`,roughness:.5,metalness:.25}),t=new G({color:`#45403a`,roughness:.45,metalness:.3}),n=new G({color:`#76614b`,roughness:1,metalness:0,side:2}),r=new G({color:`#5d4a3a`,roughness:.95}),i=new G({color:`#3b3029`,roughness:.8}),a=new G({color:`#1a1817`,roughness:.4,metalness:.5}),o=new gi({color:new H(.25,.75,3.2),toneMapped:!0}),s=new G({color:`#8a6450`,roughness:.7});this.materials={suit:e,cloth:n,wrap:r,boot:i,mask:a,eye:o,skin:s,suitRib:t};let c=new V;this.body=c,this.root.add(c);let l=Hp(new W(new is(.14,16,12),e));l.scale.set(1.12,.78,.88),c.add(l);let u=Hp(new W(new as(.148,.026,8,24),r));u.rotation.x=Math.PI/2,u.scale.set(1.03,.86,1),u.position.y=.05,c.add(u);for(let[e,t,n]of[[.13,.04,.07],[-.12,-.06,.08],[.02,-.13,.1]]){let i=Hp(new W(new Aa(n,.075,.05),r));i.position.set(e,.03,t),i.lookAt(0,.03,0),c.add(i)}let d=Hp(new W(new Na(.012,.016,.16,6),new G({color:`#d9ccb0`,roughness:.35})));d.position.set(.15,.03,.06),d.rotation.z=.5,c.add(d);let f=Hp(new W(new ja(.118,.1,4,14),e));f.position.y=.16,f.scale.set(1.08,1,.84),c.add(f);let p=Hp(new W(new ja(.145,.12,4,16),e));p.position.y=.33,p.scale.set(1.2,1,.84),c.add(p);for(let e=0;e<3;e++){let n=Hp(new W(new as(.15,.011,6,28),t));n.rotation.x=Math.PI/2,n.position.y=.22+e*.075,n.scale.set(1.2-e*.02,.86,1),c.add(n)}let m=Hp(new W(new Aa(.16,.12,.03),t));m.position.set(0,.36,.12),m.rotation.x=-.12,c.add(m);let h=Hp(new W(new Na(.048,.055,.09,10),e));h.position.y=.52,c.add(h);let g=new V;g.position.y=.64,c.add(g),this.head=g;let _=Hp(new W(new is(.1,18,14),s));_.scale.set(.92,1.05,1),g.add(_);let v=Hp(new W(new is(.128,22,16,0,Math.PI*2,0,Math.PI*.62),n));v.scale.set(.98,1.12,1.08),v.position.set(0,.012,-.012),v.rotation.x=-.55,g.add(v);let y=Hp(new W(new is(.132,18,12,Math.PI*.72,Math.PI*1.56,Math.PI*.3,Math.PI*.42),n));y.position.set(0,-.02,-.012),g.add(y);let b=Hp(new W(new as(.085,.042,10,24),n));b.rotation.x=Math.PI/2+.15,b.position.set(0,-.1,.005),g.add(b);let x=Hp(new W(new ja(.05,.05,4,12),a));x.rotation.z=Math.PI/2,x.scale.set(.9,1,.75),x.position.set(0,-.045,.078),g.add(x);let S=Hp(new W(new as(.07,.008,6,16,Math.PI*.9),a));S.position.set(.02,-.05,.02),S.rotation.set(0,Math.PI/2,-.4),g.add(S);for(let e of[-1,1]){let t=new W(new is(.0135,10,8),o);t.position.set(e*.034,.014,.088),g.add(t)}this.thighs=[Bp(.07,bp,e),Bp(.07,bp,e)],this.shins=[Bp(.056,xp,e),Bp(.056,xp,e)],this.upperArms=[Bp(.05,wp,e),Bp(.05,wp,e)],this.forearms=[Bp(.044,Tp,n),Bp(.044,Tp,n)],this.hands=[0,1].map(()=>Hp(new W(new is(.043,10,8),a))),this.boots=[0,1].map(()=>{let e=new ja(.052,.15,4,10);return e.rotateX(Math.PI/2),e.scale(1,.72,1),Hp(new W(e,i))}),this.knees=[0,1].map(()=>Hp(new W(new is(.06,10,8),t)));for(let e of[this.thighs,this.shins,this.upperArms,this.forearms,this.hands,this.boots,this.knees])for(let t of e)this.root.add(t);this.cloak=new yp(n,{cols:9,rows:14,width:.64,length:1.2,flare:1.6}),this.root.add(this.cloak.mesh),this.cloakAnchorsLocal=[];for(let e=0;e<9;e++){let t=-1.95+3.9*e/8;this.cloakAnchorsLocal.push(new R(Math.sin(t)*.215,.49+Math.cos(t)*.02,-Math.cos(t)*.135))}this.cloakAnchors=this.cloakAnchorsLocal.map(e=>e.clone()),this.colliders=[{a:new R,b:new R,r:.2},{a:new R,b:new R,r:.1},{a:new R,b:new R,r:.1},{a:new R,b:new R,r:.075},{a:new R,b:new R,r:.075}],this.pos=new R,this.vel=new R,this.yaw=0,this.bodyY=0,this.phase=0,this.runBlend=0,this.lean=0,this.time=0,this.speed=0,this.sliding=0,this.stumble=0,this.sandwalk=!1,this.sw={timer:0,target:1,mul:1},this.speedMul=1,this.air=0,this.vy=0,this.squash=0,this.armSwing=[0,0],this.feet=[0,1].map(e=>({side:e===0?1:-1,offset:e*.5,pos:new R,from:new R,target:new R,y:0,fromY:0,yaw:0,pitch:0,swinging:!1,wasInWindow:!1,lastLocal:0,s:0})),this.lastStepTime=0,this.stepIntervals=[],this.rhythm=0,this.regularity=0,this.onFootstep=null,this.onLift=null}spawn(e,t,n=0){this.pos.set(e,q(e,t),t),this.vel.set(0,0,0),this.yaw=n;let r=Math.cos(n),i=-Math.sin(n);for(let a of this.feet)a.pos.set(e+r*a.side*Ep,0,t+i*a.side*Ep),a.y=q(a.pos.x,a.pos.z)-jp,a.pos.y=a.y,a.yaw=n,a.swinging=!1;this.bodyY=this.pos.y+Op,this.air=0,this.vy=0,this.squash=0,this.cloak.initialized=!1,this.rhythm=0,this.stepIntervals.length=0}get airborne(){return this.air>0||this.vy>0}jump(e=5.6){return!this.airborne&&(this.vy=e,this.air=1e-4,!0)}applyImpulse(e,t,n=.8){this.vel.x+=e,this.vel.z+=t,this.stumble=Math.max(this.stumble,n)}update(e,t,n){this.time+=e;let r=this.feet,i=t.x,a=t.z,o=Math.min(1,Math.hypot(i,a));if(o>1e-4){let e=Math.hypot(i,a);i/=e,a/=e}let s=(t.run?Ap:kp)*this.speedMul;if(this.sandwalk){let n=this.sw;n.timer-=e,n.timer<=0&&(n.timer=.2+Math.random()*.75,n.target=Math.random()<.2?.12:.45+Math.random()*.8),n.mul+=(n.target-n.mul)*(1-Math.exp(-e*7)),s=(t.run?3.4:1.9)*n.mul*this.speedMul}Vf(this.pos.x,this.pos.z,Fp);let c=i*Fp.x+a*Fp.z,l=Rp(1-Math.max(0,c)*.8+Math.max(0,-c)*.12,.32,1.15),u=i*s*o*l,d=a*s*o*l;this.stumble=Math.max(0,this.stumble-e);let f=this.stumble>0?1.2:o>.01?5.5:7,p=1-Math.exp(-e*f);this.vel.x+=(u-this.vel.x)*p,this.vel.z+=(d-this.vel.z)*p;let m=Math.hypot(Fp.x,Fp.z);if(this.sliding=0,m>.68){let t=Math.min(1,(m-.68)*2.2),n=(this.vel.x*-Fp.x+this.vel.z*-Fp.z)/m;this.vel.x-=Fp.x/m*t*2.6*e,this.vel.z-=Fp.z/m*t*2.6*e,this.sliding=t*Rp(.35+Math.max(0,n)*.3,0,1)}this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,n.collide&&n.collide(this.pos,.34,this.vel),this.pos.y=q(this.pos.x,this.pos.z);let h=!1;this.airborne&&(this.vy-=Mp*e,this.air+=this.vy*e,this.air<=0&&(this.air=0,this.vy=0,h=!0,this.squash=.14));let g=this.air>0;this.squash=Math.max(0,this.squash-e*.6);let _=Math.hypot(this.vel.x,this.vel.z);if(this.speed=_,_>.12&&this.stumble<=.3){let t=Math.atan2(this.vel.x,this.vel.z);this.yaw=zp(this.yaw,t,1-Math.exp(-e*9))}let v=Math.sin(this.yaw),y=Math.cos(this.yaw),b=Math.cos(this.yaw),x=-Math.sin(this.yaw),S=_>.05?this.vel.x/_:v,C=_>.05?this.vel.z/_:y,w=_>3.2;this.runBlend+=(+!!w-this.runBlend)*(1-Math.exp(-e*5));let T=_>.12,E=.4+.2*this.runBlend,D=.36+_*.17,O=T?Math.max(_/(2*D),.95):1.8,k=T?_/O:0,A=k*(1-E)*.5,ee=Ep*(1.05-.35*this.runBlend),te=!1,ne=!1;for(let e of r){let t=this.pos.x+b*e.side*ee,n=this.pos.z+x*e.side*ee;e.swinging&&!g?te=!0:Math.hypot(e.pos.x-t,e.pos.z-n)>.1&&(ne=!0)}(T||te||ne)&&(this.phase=(this.phase+O*e)%1);for(let t=0;t<2;t++){let i=r[t],a=((this.phase-i.offset)%1+1)%1,o=a<E,s=this.pos.x+b*i.side*ee,c=this.pos.z+x*i.side*ee;if(g||h){if(g){let e=i.side>0?.2:-.06;i.swinging=!1,i.y=this.pos.y+this.air+.3+(i.side>0?.08:0),i.pos.set(s+S*e,i.y,c+C*e),i.pitch=i.side>0?-.5:.35}else i.swinging=!1,i.pos.set(s+S*.08*i.side,0,c+C*.08*i.side),i.y=q(i.pos.x,i.pos.z)-jp,i.pos.y=i.y,i.pitch=0,this.onFootstep&&this.onFootstep({x:i.pos.x,y:i.y,z:i.pos.z,yaw:i.yaw,side:i.side,speed:_,run:1,sliding:0,dirX:S,dirZ:C});i.yaw=zp(i.yaw,this.yaw,1-Math.exp(-e*14)),i.wasInWindow=o,i.lastLocal=a}else{if(i.swinging){if(!o||a<i.lastLocal)i.swinging=!1,i.pos.x=i.target.x,i.pos.z=i.target.z,i.y=q(i.pos.x,i.pos.z)-jp-.02*this.runBlend,i.pos.y=i.y,i.pitch=0,this._registerStep(n),this.onFootstep&&this.onFootstep({x:i.pos.x,y:i.y,z:i.pos.z,yaw:i.yaw,side:i.side,speed:_,run:this.runBlend,sliding:this.sliding,dirX:S,dirZ:C});else{let t=(E-a)/O;i.target.set(s+this.vel.x*t+S*A,0,c+this.vel.z*t+C*A);let n=Rp(a/E,0,1);i.s=n;let r=n*n*(3-2*n),o=q(i.target.x,i.target.z)-jp;i.pos.x=i.from.x+(i.target.x-i.from.x)*r,i.pos.z=i.from.z+(i.target.z-i.from.z)*r;let l=(.1+.12*this.runBlend)*Math.min(1,.4+_*.4);i.y=i.fromY+(o-i.fromY)*r+Math.sin(Math.PI*n)*l,i.pos.y=i.y,i.pitch=Math.sin(Math.PI*n)*(.5-n)*1.4,i.yaw=zp(i.yaw,this.yaw,1-Math.exp(-e*14))}}else if(o&&!i.wasInWindow){let e=Math.hypot(i.pos.x-s,i.pos.z-c)>.1;(T||e)&&(i.swinging=!0,i.from.copy(i.pos),i.fromY=i.y,i.target.set(s,0,c),this.onLift&&this.onLift({x:i.pos.x,y:i.y,z:i.pos.z,speed:_,run:this.runBlend,dirX:S,dirZ:C}))}i.wasInWindow=o,i.lastLocal=a}}let re=this.time-this.lastStepTime,ie=n.onRock?.18:T?.004:.075;this.rhythm=Rp(this.rhythm-ie*e-(re>1.1?.03*e:0),0,1);let ae=this.phase-E,oe=-(T?.022+.03*this.runBlend:0)*Math.cos(4*Math.PI*ae),se=1/0;for(let e of r){if(e.swinging||g)continue;let t=this.pos.x+b*e.side*Ep-e.pos.x,n=this.pos.z+x*e.side*Ep-e.pos.z,r=Math.sqrt(Math.max(0,(Sp*.985)**2-t*t-n*n));se=Math.min(se,e.y+Cp+r)}let ce=Math.sin(this.time*1.7)*.004,le=this.pos.y+Op+oe-this.sliding*.12+ce-this.runBlend*.03+this.air-this.squash;le=Math.min(le,se+.09+.07*this.runBlend),le=Math.max(le,this.pos.y+.55),g?this.bodyY=le:this.bodyY+=(le-this.bodyY)*(1-Math.exp(-e*18));let ue=_>.1?(Fp.x*this.vel.x+Fp.z*this.vel.z)/_:0,de=_*.028+this.runBlend*.14+Rp(ue*.25,-.12,.2)-this.sliding*.15+(this.stumble>0?.25:0)+(g?.12:0);this.lean+=(de-this.lean)*(1-Math.exp(-e*6));let fe=T?Math.sin(2*Math.PI*ae)*(.035-.015*this.runBlend):0;this.body.position.set(this.pos.x,this.bodyY,this.pos.z),this.body.rotation.set(this.lean,this.yaw,fe,`YXZ`),this.body.updateMatrixWorld(!0),this.head.rotation.x=-this.lean*.55+Math.sin(this.time*.6)*.03,this.head.rotation.y=Math.sin(this.time*.37)*.12*(T?.3:1);let pe=[];for(let e=0;e<2;e++){let t=r[e],n=Ip.set(t.side*Ep,-.03,0);this.body.localToWorld(n);let i=new R(t.pos.x,t.y+Cp,t.pos.z),a=this._solveKnee(n,i,v+b*t.side*.12,y+x*t.side*.12);pe.push(a),Vp(this.thighs[e],n,a),Vp(this.shins[e],a,i),this.knees[e].position.copy(a);let o=this.boots[e],s=Math.cos(t.yaw),c=Math.sin(t.yaw);o.position.set(i.x+c*.045,i.y-.035,i.z+s*.045),o.rotation.set(t.pitch,t.yaw,0,`YXZ`),this.colliders[1+e].a.copy(n),this.colliders[1+e].b.copy(a),this.colliders[3+e].a.copy(a),this.colliders[3+e].b.copy(i)}let me=.42+.55*this.runBlend,he=.28+1.05*this.runBlend;for(let t=0;t<2;t++){let n=r[t].side,i=r[1-t],a=this.pos.x+b*i.side*ee,o=this.pos.z+x*i.side*ee,s=(T?Rp(((i.pos.x-a)*S+(i.pos.z-o)*C)/(k*.5+.05),-1,1):0)*me+(this.sliding>0?.6:0);this.armSwing[t]+=(s-this.armSwing[t])*(1-Math.exp(-e*12));let c=this.armSwing[t],l=.13+this.sliding*.5+(this.stumble>0?.4:0),u=Lp.set(n*Dp,.43000000000000005,-.01),d=new R(n*Math.sin(l),-Math.cos(c)*Math.cos(l),Math.sin(c)*Math.cos(l)).normalize(),f=c+he,p=new R(n*Math.sin(l*.5),-Math.cos(f),Math.sin(f)).normalize(),m=u.clone().addScaledVector(d,wp),h=m.clone().addScaledVector(p,Tp),g=this.body.localToWorld(u.clone()),_=this.body.localToWorld(m),v=this.body.localToWorld(h);Vp(this.upperArms[t],g,_),Vp(this.forearms[t],_,v),this.hands[t].position.copy(v)}for(let e=0;e<this.cloakAnchorsLocal.length;e++)this.cloakAnchors[e].copy(this.cloakAnchorsLocal[e]),this.body.localToWorld(this.cloakAnchors[e]);this.body.localToWorld(this.colliders[0].a.set(0,-.06,-.02)),this.body.localToWorld(this.colliders[0].b.set(0,.4,-.02));let ge=Ip.set(-v,0,-y);this.cloak.update(e,this.cloakAnchors,this.colliders,n.wind,q,ge)}_solveKnee(e,t,n,r){let i=new R().subVectors(t,e),a=i.length(),o=.888;a>o&&(i.multiplyScalar(o/a),t.copy(e).add(i),a=o);let s=i.clone().divideScalar(a||1),c=(bp*bp-xp*xp+a*a)/(2*a),l=Math.sqrt(Math.max(0,bp*bp-c*c)),u=new R(n,0,r);return u.addScaledVector(s,-u.dot(s)),u.lengthSq()<1e-6&&u.set(n,.01,r),u.normalize(),e.clone().addScaledVector(s,c).addScaledVector(u,l)}_registerStep(e){let t=this.time,n=t-this.lastStepTime;if(this.lastStepTime=t,n>1.3){this.stepIntervals.length=0;return}this.stepIntervals.push(n),this.stepIntervals.length>8&&this.stepIntervals.shift();let r=this.stepIntervals.length;if(r<3)return;let i=0;for(let e of this.stepIntervals)i+=e;i/=r;let a=0;for(let e of this.stepIntervals)a+=(e-i)**2;let o=Math.sqrt(a/r)/i;this.regularity=Rp(1-o/.3,0,1);let s=1+.9*this.runBlend,c=e.onRock?-.03:.018*s*this.regularity-.011-(1-this.regularity)*.03;this.rhythm=Rp(this.rhythm+c,0,1)}get headPosition(){return this.head.getWorldPosition(new R)}},Wp={GRAIN:0,DUST:1,STREAK:2,SPICE:3,PLUME:4},Gp=`
attribute vec3 aVel;
attribute vec4 aColor;
attribute float aSize;
attribute float aStretch;
attribute float aSeed;
uniform float uScale;
uniform float uFogNear;
uniform float uFogFar;
varying vec4 vColor;
varying vec2 vDir;
varying float vRatio;
varying float vFog;
varying float vSeed;
void main() {
  vSeed = aSeed;
  if (aSize <= 0.0 || aColor.a <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vec3 vv = (modelViewMatrix * vec4(aVel, 0.0)).xyz;
  float sp = length(vv.xy);
  vec2 d = sp > 1e-4 ? vv.xy / sp : vec2(1.0, 0.0);
  float len = aSize + sp * aStretch;
  float px = len * uScale;
  gl_PointSize = clamp(px, 1.5, 320.0);
  vDir = d;
  vRatio = clamp(aSize / len, 0.03, 1.0);
  vColor = aColor;
  // sub-pixel sprites: fade instead of shimmering
  vColor.a *= clamp(aSize * uScale / 1.5, 0.0, 1.0);
  vFog = smoothstep(uFogNear, uFogFar, -mv.z);
}
`,Kp=`
uniform vec3 uFogColor;
varying vec4 vColor;
varying vec2 vDir;
varying float vRatio;
varying float vFog;
varying float vSeed;
float ph(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float pn(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(ph(i), ph(i + vec2(1, 0)), u.x), mix(ph(i + vec2(0, 1)), ph(i + vec2(1, 1)), u.x), u.y);
}
void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  c.y = -c.y;
  vec2 r = vec2(dot(c, vDir), dot(c, vec2(-vDir.y, vDir.x)) / vRatio);
  float d2 = dot(r, r);
  if (d2 > 1.0) discard;
  float a = vColor.a * (1.0 - d2) * (1.0 - d2);
  // round puffs get a billowy, torn edge instead of a perfect disc
  if (vRatio > 0.6) {
    vec2 o = vec2(vSeed * 37.0, vSeed * 91.0);
    float n = pn(c * 2.3 + o) * 0.65 + pn(c * 5.1 + o * 1.7) * 0.35;
    a *= smoothstep(0.25, 0.75, n + (1.0 - d2) * 0.35 - 0.2);
  }
  gl_FragColor = vec4(mix(vColor.rgb, uFogColor, vFog * 0.85), a);
}
`,qp=class{constructor(e=14e3){this.max=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.stretch=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.type=new Uint8Array(e),this.grow=new Float32Array(e),this.alpha=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e),this.seedv=new Float32Array(e),this.cursor=0,this.active=0;let t=new ti,n=(e,t)=>{let n=new Vr(e,t);return n.setUsage(vt),n};this.aPos=n(this.pos,3),this.aVel=n(this.vel,3),this.aCol=n(this.col,4),this.aSize=n(this.size,1),this.aStretch=n(this.stretch,1),t.setAttribute(`position`,this.aPos),t.setAttribute(`aVel`,this.aVel),t.setAttribute(`aColor`,this.aCol),t.setAttribute(`aSize`,this.aSize),t.setAttribute(`aStretch`,this.aStretch),this.aSeed=n(this.seedv,1),t.setAttribute(`aSeed`,this.aSeed),this.material=new ms({uniforms:{uScale:{value:40},uFogColor:{value:new H},uFogNear:{value:100},uFogFar:{value:300}},vertexShader:Gp,fragmentShader:Kp,transparent:!0,depthWrite:!1,depthTest:!0}),this.points=new Ca(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=10,this._spawnAcc={streak:0,plume:0,spice:0,storm:0},this._info={},this.sandColor=new H(`#d8a068`),this.dustColor=new H(`#e4bb8a`),this.spiceColor=new H(`#ff7a2a`)}spawn(e,t,n,r,i,a,o,s,c,l,u,d={}){let f=this.cursor;this.cursor=(this.cursor+1)%this.max;let p=f*3,m=f*4;this.pos[p]=t,this.pos[p+1]=n,this.pos[p+2]=r,this.vel[p]=i,this.vel[p+1]=a,this.vel[p+2]=o,this.col[m]=l.r,this.col[m+1]=l.g,this.col[m+2]=l.b,this.col[m+3]=0,this.alpha[f]=u,this.size[f]=s,this.stretch[f]=d.stretch??0,this.life[f]=c,this.maxLife[f]=c,this.type[f]=e,this.grow[f]=d.grow??0,this.drag[f]=d.drag??1,this.grav[f]=d.grav??0,this.seedv[f]=Math.random()}footstep(e,t,n,r,i,a,o,s,c=0){let l=Math.round(8+o*18+a*2+c*20),u=Jp.copy(this.sandColor).multiply(s);for(let s=0;s<l;s++){let s=Math.random()*Math.PI*2,c=.25+Math.random()*(.9+o*1.2),l=-(.3+o*1.4)*Math.random();this.spawn(Wp.GRAIN,e+Math.cos(s)*.06,t+.03,n+Math.sin(s)*.06,Math.cos(s)*c+r*l*a*.35,.7+Math.random()*(1.2+o*1.8),Math.sin(s)*c+i*l*a*.35,.018+Math.random()*.02,1.2,u,.95,{stretch:.028,grav:9.8,drag:.4})}let d=Yp.copy(this.dustColor).multiply(s).multiplyScalar(.72),f=Math.round(2+o*4+c*5);for(let s=0;s<f;s++){let s=Math.random()*Math.PI*2,c=.1+Math.random()*.35;this.spawn(Wp.DUST,e+Math.cos(s)*.1,t+.05+Math.random()*.05,n+Math.sin(s)*.1,Math.cos(s)*c-r*a*.1,.15+Math.random()*.25,Math.sin(s)*c-i*a*.1,.12+Math.random()*.1,1.4+Math.random()*1.4,d,.13+o*.08,{grow:.5+o*.3,drag:1.4})}}kick(e,t,n,r,i,a,o){let s=Math.round(6+a*3),c=Jp.copy(this.sandColor).multiply(o);for(let a=0;a<s;a++){let a=(Math.random()-.5)*1.2,o=1.2+Math.random()*2.2;this.spawn(Wp.GRAIN,e,t+.05,n,-r*o+-i*a,1.4+Math.random()*2,-i*o+r*a,.016+Math.random()*.02,1.2,c,.9,{stretch:.03,grav:9.8,drag:.35})}}cascade(e,t,n,r,i,a,o){let s=Jp.copy(this.sandColor).multiply(o),c=Yp.copy(this.dustColor).multiply(o);for(let o=0;o<a;o++){let a=.8+Math.random()*1.8,o=(Math.random()-.5)*.9;this.spawn(Wp.STREAK,e+(Math.random()-.5)*.4,t+.04,n+(Math.random()-.5)*.4,r*a-i*o,-.4*a,i*a+r*o,.035+Math.random()*.03,.7+Math.random()*.8,s,.5,{stretch:.18,drag:0})}Math.random()<.5&&this.spawn(Wp.DUST,e,t+.1,n,r*.8,.2,i*.8,.25,1.8,c,.18,{grow:.6,drag:1.2})}burst(e,t,n,r,i,a,o={}){let s=Jp.copy(this.sandColor).multiply(a),c=Yp.copy(this.dustColor).multiply(a);for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,a=Math.random()**.6*i*(o.horiz??.55),c=(.4+Math.random())*i,l=o.radius??.5;this.spawn(Wp.GRAIN,e+Math.cos(r)*l*Math.random(),t+Math.random()*.4,n+Math.sin(r)*l*Math.random(),Math.cos(r)*a,c,Math.sin(r)*a,.03+Math.random()*.06*(o.chunk??1),3.5,s,.95,{stretch:.04,grav:9.8,drag:.25})}let l=Math.round(r*(o.dust??.25));for(let r=0;r<l;r++){let r=Math.random()*Math.PI*2,a=Math.random()*i*.35;this.spawn(Wp.DUST,e+Math.cos(r)*(o.radius??.5),t+Math.random()*i*.2,n+Math.sin(r)*(o.radius??.5),Math.cos(r)*a,Math.random()*i*.35,Math.sin(r)*a,(o.puff??.6)*(.6+Math.random()),2.5+Math.random()*3,c,(o.dustAlpha??.3)*(.6+Math.random()*.6),{grow:o.grow??1.2,drag:.8})}}ring(e,t,n,r,i,a){let o=Yp.copy(this.dustColor).multiply(a);for(let a=0;a<i;a++){let s=a/i*Math.PI*2+Math.random()*.2;this.spawn(Wp.DUST,e+Math.cos(s)*r,t+.05,n+Math.sin(s)*r,Math.cos(s)*1.6,.25,Math.sin(s)*1.6,.12,.9,o,.28,{grow:.5,drag:2.5})}}ambient(e,t,n,r,i,a,o,s){let c=this._spawnAcc,l=this._info,u=Af(),d=Jp.copy(this.dustColor).multiply(s),f=Math.hypot(i.x,i.z)||1,p=i.x/f,m=i.z/f;for(c.streak+=e*(60+260*a+900*o);c.streak>=1;){--c.streak;let e=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*r,s=t+Math.cos(e)*i,u=n+Math.sin(e)*i,f=Ff(s,u,l);if(l.t>.74&&Math.random()<.8)continue;let h=(3.5+Math.random()*4)*(.5+a+o);this.spawn(Wp.STREAK,s,f+.04+Math.random()*(.25+o*1.5),u,p*h,.05,m*h,.022+Math.random()*.02,.5+Math.random()*.9,d,.28+o*.2,{stretch:.14})}c.plume+=e*(14+70*a+160*o);let h=0;for(;c.plume>=1&&h<80;){h++;let e=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*r*1.1,s=t+Math.cos(e)*i,u=n+Math.sin(e)*i,f=Ff(s,u,l);if(!(l.t<.7&&l.t>.7-.05&&l.A>.25&&l.crest>.55))continue;--c.plume;let g=(1.8+Math.random()*2.6)*(.6+a+o);for(let e=0;e<3;e++){let t=s+(Math.random()-.5)*.8,n=u+(Math.random()-.5)*.8;this.spawn(Wp.PLUME,t,f+.05+Math.random()*.2,n,p*g*(.8+e*.2),.25+Math.random()*.35,m*g*(.8+e*.2),.05+Math.random()*.05,1+Math.random()*1,d,.1+.07*a,{grow:.06,drag:.5,stretch:.28})}}for(c.plume>3&&(c.plume=3),c.spice+=e*30,h=0;c.spice>=1&&h<40;){h++;let e=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*r,a=t+Math.cos(e)*i,o=n+Math.sin(e)*i;if(Nf((a+u.x)*.016+9,(o+u.z)*.016+2)<.62)continue;--c.spice;let s=Ff(a,o,l),d=Yp.copy(this.spiceColor).multiplyScalar(1.6+Math.random()*2);this.spawn(Wp.SPICE,a,s+.1+Math.random()*1.2,o,p*.3,.05,m*.3,.035+Math.random()*.035,3+Math.random()*4,d,.85,{drag:.5})}if(c.spice>3&&(c.spice=3),o>.02){c.storm+=e*o*110;let i=Yp.copy(this.dustColor).multiply(s).multiplyScalar(.9);for(;c.storm>=1;){--c.storm;let e=(Math.random()-.5)*r*2.4,a=-r*(.6+Math.random()*.6),s=t+p*a-m*e,l=n+m*a+p*e,u=Ff(s,l),d=8+Math.random()*9;this.spawn(Wp.PLUME,s,u+Math.random()*6,l,p*d,.2,m*d,2+Math.random()*4,4+Math.random()*2,i,.05+o*.07,{grow:1.5,drag:.2})}}}update(e,t,n,r,i){let{pos:a,vel:o,col:s,size:c,life:l,maxLife:u,type:d,grow:f,alpha:p,drag:m,grav:h,seedv:g}=this,_=this.max,v=0;for(let n=0;n<_;n++){if(l[n]<=0)continue;let r=n*3,i=n*4;if(l[n]-=e,l[n]<=0){c[n]=0,s[i+3]=0;continue}v++;let _=d[n],y=u[n]-l[n];if(_===Wp.GRAIN){if(o[r]+=(t.x*.35-o[r])*m[n]*e,o[r+2]+=(t.z*.35-o[r+2])*m[n]*e,o[r+1]-=h[n]*e,a[r]+=o[r]*e,a[r+1]+=o[r+1]*e,a[r+2]+=o[r+2]*e,o[r+1]<0&&(n&1)==((this._frame??0)&1)){let e=Ff(a[r],a[r+2]);a[r+1]<e&&(l[n]=Math.min(l[n],.12),a[r+1]=e+.01,o[r]*=.2,o[r+1]=0,o[r+2]*=.2)}}else if(_===Wp.DUST||_===Wp.PLUME){let i=m[n]*e;o[r]+=(t.x-o[r])*i,o[r+1]+=(.12-o[r+1])*i*.5,o[r+2]+=(t.z-o[r+2])*i,a[r]+=o[r]*e,a[r+1]+=o[r+1]*e,a[r+2]+=o[r+2]*e,c[n]+=f[n]*e}else if(_===Wp.STREAK)a[r]+=o[r]*e,a[r+1]+=o[r+1]*e,a[r+2]+=o[r+2]*e,o[r+1]-=.8*e,o[r+1]<-.6&&(o[r+1]=-.6);else if(_===Wp.SPICE){let i=g[n]*40+y*1.3;o[r]+=(t.x*.12+Math.sin(i)*.25-o[r])*e,o[r+1]=Math.sin(i*.7)*.12,o[r+2]+=(t.z*.12+Math.cos(i)*.25-o[r+2])*e,a[r]+=o[r]*e,a[r+1]+=o[r+1]*e,a[r+2]+=o[r+2]*e}let b=_===Wp.GRAIN?1:Math.min(1,y/(_===Wp.SPICE?.8:.25)),x=Math.min(1,l[n]/(_===Wp.GRAIN?.12:u[n]*.5)),S=p[n]*b*x;_===Wp.SPICE&&(S*=.6+.4*Math.sin(y*5+g[n]*20)),s[i+3]=S}this._frame=(this._frame??0)+1,this.active=v,this.aPos.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aStretch.needsUpdate=!0,this.aSeed.needsUpdate=!0;let y=this.material.uniforms;y.uScale.value=i,y.uFogColor.value.copy(r.color),y.uFogNear.value=r.near,y.uFogFar.value=r.far}clear(){this.life.fill(0),this.size.fill(0);for(let e=3;e<this.col.length;e+=4)this.col[e]=0}},Jp=new H,Yp=new H;function Xp(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zp(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function Qp(){return Math.random()*4294967295>>>0}var $p=(e,t)=>t[Math.floor(e()*t.length)%t.length],em=(e,t,n)=>t+(n-t)*e(),tm=60,nm=2,rm=new H(`#5a3526`),im=new H(`#7f4c33`),am=new H(`#9a6444`),om=new H(`#d7a067`);function sm(e,t,n,r,i){let a=new Qo(1,3);a.deleteAttribute(`normal`);let o=a.getAttribute(`position`),s=e()*100,c=e()*100,l=new R;for(let e=0;e<o.count;e++){l.fromBufferAttribute(o,e);let a=.72+(Mf(l.x*1.7+s,l.z*1.7+l.y*1.3+c)*.5+Mf(l.x*4.1+c,l.y*4.3+s)*.22)*.6;l.y>.25&&(a*=1-(l.y-.25)*.35),l.multiplyScalar(a);let u=l.y,d=i,f=(u+1)*d,p=Math.floor(f),m=(p+(f-p)**3.5)/d-1;l.y=u*.35+m*.65;let h=1+(jf(p+7,Math.floor(s))-.5)*.14;l.x*=h,l.z*=h,o.setXYZ(e,l.x*t,l.y*n,l.z*r)}a.index&&(a=a.toNonIndexed()),a.computeVertexNormals();let u=a.getAttribute(`position`),d=a.getAttribute(`normal`),f=new Float32Array(u.count*3),p=new H;for(let t=0;t<u.count;t+=3){let n=d.getY(t),r=(u.getY(t)+u.getY(t+1)+u.getY(t+2))/3,i=Math.sin(r*3.1+s)*.5+.5;p.copy(rm).lerp(im,i).lerp(am,Math.max(0,Math.sin(r*7.3+c))*.35);let a=.9+e()*.2;p.multiplyScalar(a),n>.62&&p.lerp(om,Math.min(1,(n-.62)*3.2)*.85);for(let e=0;e<3;e++)f[(t+e)*3]=p.r,f[(t+e)*3+1]=p.g,f[(t+e)*3+2]=p.b}return a.setAttribute(`color`,new Vr(f,3)),a}var cm=class{constructor(e){this.scene=e,this.group=new V,this.group.name=`rocks`,e.add(this.group),this.cells=new Map,this.colliders=[],this.material=new G({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0}),this.pebbleMat=new G({color:`#4a2e22`,flatShading:!0,roughness:.9}),this.pebbleGeo=new Ia(1,0),this.lastKey=``,this.exclude=null,this.lastPos=null}setExclusion(e){this.exclude=e;let t=this.lastPos;this.reset(),t&&this.update(t.x,t.z)}reset(){for(let e of this.cells.values())this._dispose(e);this.cells.clear(),this.colliders.length=0,this.lastKey=``}_dispose(e){for(let t of e.meshes)this.group.remove(t),t.geometry!==this.pebbleGeo&&t.geometry.dispose(),t.isInstancedMesh&&t.dispose()}update(e,t){this.lastPos={x:e,z:t};let n=Math.floor(e/tm),r=Math.floor(t/tm),i=`${n},${r}`;if(i===this.lastKey)return;this.lastKey=i;let a=new Set;for(let e=-2;e<=nm;e++)for(let t=-2;t<=nm;t++){let i=`${n+t},${r+e}`;a.add(i),this.cells.has(i)||this.cells.set(i,this._build(n+t,r+e))}for(let[e,t]of this.cells)a.has(e)||(this._dispose(t),this.cells.delete(e));this.colliders=[];for(let e of this.cells.values())this.colliders.push(...e.colliders)}_build(e,t){let n=Af(),r={meshes:[],colliders:[]},i=Xp((Math.imul(e,73856093)^Math.imul(t,19349663)^Math.floor(n.x*13+n.z*7))>>>0),a=(e+.2+i()*.6)*tm,o=(t+.2+i()*.6)*tm,s={};Ff(a,o,s);let c=.12+(1-s.A)*.55;if(i()>c||Math.hypot(a,o)<14)return r;let l=1+Math.floor(i()*5),u=i()<.35;for(let e=0;e<l;e++){let t=i()*Math.PI*2,n=e===0?0:3+i()*9,s=a+Math.cos(t)*n,c=o+Math.sin(t)*n,l=(e===0&&u?4.5:1.3)+i()*(u&&e===0?3.5:2.4),d=l*(.8+i()*.6),f=l*(.8+i()*.6),p=l*(e===0&&u?.9+i()*.7:.45+i()*.6),m=sm(i,d,p,f,3+Math.floor(i()*4));if(this.exclude&&this.exclude(s,c,Math.max(d,f))){m.dispose();continue}let h=new W(m,this.material),g=1/0,_=Math.max(d,f)*.8;for(let e=0;e<8;e++){let t=e/8*Math.PI*2;g=Math.min(g,Ff(s+Math.cos(t)*_,c+Math.sin(t)*_))}g=Math.min(g,Ff(s,c)),h.position.set(s,g+p*.25,c),h.rotation.y=i()*Math.PI*2,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),r.meshes.push(h),r.colliders.push({x:s,z:c,r:Math.min(d,f)*.78,top:g+p*1.2})}let d=20+Math.floor(i()*40),f=new $i(this.pebbleGeo,this.pebbleMat,d),p=new B,m=new rn,h=new In,g=new R,_=new R;for(let e=0;e<d;e++){let t=i()*Math.PI*2,n=3+i()**.7*16,r=a+Math.cos(t)*n,s=o+Math.sin(t)*n,c=.06+i()**3*.45;_.set(r,Ff(r,s)+c*.1,s),h.set(i()*3,i()*3,i()*3),m.setFromEuler(h),g.set(c*(.8+i()*.6),c*(.5+i()*.4),c*(.8+i()*.6)),this.exclude&&this.exclude(r,s,c)&&g.setScalar(0),p.compose(_,m,g),f.setMatrixAt(e,p)}return f.castShadow=!0,f.receiveShadow=!0,f.computeBoundingSphere(),this.group.add(f),r.meshes.push(f),r}collide(e,t,n){let r=!1;for(let i of this.colliders){let a=e.x-i.x,o=e.z-i.z,s=Math.hypot(a,o),c=i.r+t;if(s<c+1.2&&(r=!0),s<c&&s>1e-4){let t=a/s,r=o/s;if(e.x=i.x+t*c,e.z=i.z+r*c,n){let e=n.x*t+n.z*r;e<0&&(n.x-=e*t,n.z-=e*r)}}}return r}nearRock(e,t,n=2){for(let r of this.colliders)if(Math.hypot(e-r.x,t-r.z)<r.r+n)return!0;return!1}};function lm(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new ti,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=um(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=um(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function um(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Vr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function dm(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var fm=290,pm=.32,mm=32,hm=3,gm=.2,_m=1.35,vm=new R,ym=new B,bm=new R(0,1,0),xm=class{constructor(e,t,n){this.scene=e,this.group=new V;let r=new G({color:`#3d3833`,roughness:.42,metalness:.75}),i=new G({color:`#7a6448`,roughness:.5,metalness:.6});this.lightMat=new gi({color:new H(3,1.2,.3)});let a=new W(new Na(.035,.045,1.25,10),r);a.position.y=.45;let o=new W(new is(.06,10,8),i);o.position.y=1.08,this.hammer=new W(new Na(.085,.085,.24,14),i),this.hammer.position.y=.4;let s=new W(new Na(.1,.12,.08,14),r);s.position.y=.2,this.light=new W(new is(.03,8,6),this.lightMat),this.light.position.y=1.15,this.group.add(a,o,this.hammer,s,this.light);for(let e=0;e<3;e++){let t=new W(new Aa(.03,.03,.42),r),n=e/3*Math.PI*2;t.position.set(Math.sin(n)*.16,.08,Math.cos(n)*.16),t.rotation.y=n,t.rotation.x=.55,this.group.add(t)}this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.x=t,this.z=n,this.baseY=q(t,n),this.group.position.set(t,this.baseY+.8,n),this.plant=0,this.t=0,this.beats=0,this.alive=!0,e.add(this.group)}update(e){if(!this.alive)return!1;this.plant=Math.min(1,this.plant+e*3);let t=1-(1-this.plant)**3;if(this.group.position.y=this.baseY+.8*(1-t)-.12*t,this.plant<1)return!1;let n=1.05,r=this.t;this.t+=e;let i=this.t%n/n,a;if(i<.82){let e=i/.82;a=.4+.5*(e*e*(3-2*e))}else{let e=(i-.82)/.18;a=.9-.5*e*e}this.hammer.position.y=a;let o=Math.max(0,1-this.t%n*5);return this.lightMat.color.setRGB(.4+3*o,.15+1.2*o,.05+.3*o),Math.floor(this.t/n)>Math.floor(r/n)&&(this.beats++,!0)}remove(){this.alive=!1,this.scene.remove(this.group),this.group.traverse(e=>{e.isMesh&&e.geometry.dispose()})}};function Sm(e){let t=.5+.5*Math.cos(e/_m*Math.PI*2);return 1-.075*t**8+.02*(1-t)**2}function Cm(e){let t=e*pm,n=Math.min(1,t/2.5),r=hm+.3999999999999999*n*n*(3-2*n),i=289*pm-t,a=Math.min(1,i/22),o=.1+.9*Math.sqrt(a*(2-a));return r*Sm(t)*o}function wm(e,t){let n=e/3*Math.PI*2+Math.PI/2,r=[],i=[],a=new R(Math.cos(n)*hm,Math.sin(n)*hm,0);for(let e=0;e<=16;e++){let o=e/16,s=hm*(1-.94*o**1.25),c=(Math.PI/3-.05)*(1-.35*o);for(let e=0;e<=14;e++){let l=n+(e/14*2-1)*c,u=1+Math.sin(Math.PI*o)*.08;r.push(Math.cos(l)*s*u-a.x,Math.sin(l)*s*u-a.y,o*t),i.push(e/14,o)}}let o=[];for(let e=0;e<16;e++)for(let t=0;t<14;t++){let n=e*15+t,r=n+1,i=n+15,a=i+1;o.push(n,r,i,r,a,i)}let s=new ti;s.setAttribute(`position`,new U(r,3)),s.setAttribute(`uv`,new U(i,2)),s.setIndex(o),s.computeVertexNormals();let c=[];for(let e=1;e<7;e++){let r=e/8,i=hm*(1-.94*r**1.25),o=(Math.PI/3-.05)*(1-.35*r),s=Math.max(3,Math.round(9*(1-r)));for(let e=0;e<s;e++){let l=n+(s===1?0:e/(s-1)*1.7-.85)*o,u=new Pa(.07+.05*(1-r),.35+.35*(1-r),5),d=new R(-Math.cos(l),-Math.sin(l),-.35).normalize();u.applyMatrix4(ym.makeRotationFromQuaternion(new rn().setFromUnitVectors(bm,d))),u.translate(Math.cos(l)*i*.97-a.x,Math.sin(l)*i*.97-a.y,r*t),c.push(u)}}return{geo:s,teethGeo:lm(c),pivot:a,axis:new R(-Math.sin(n),Math.cos(n),0)}}var Tm=class{constructor(e){this.scene=e,this.active=!1,this.state=`idle`,this.head=new R,this.dir=new R(1,0,0),this.history=[],this.open=0,this.visibleAmount=0,this.events=[];let t=fm*33,n=new ti;this.posAttr=new Vr(new Float32Array(t*3),3).setUsage(vt),this.norAttr=new Vr(new Float32Array(t*3),3).setUsage(vt),n.setAttribute(`position`,this.posAttr),n.setAttribute(`normal`,this.norAttr);let r=new Float32Array(t*3),i=new H(`#7d6b58`),a=new H(`#9a8670`),o=new H(`#3b2e25`),s=new H;this.jitter=new Float32Array(t);for(let e=0;e<fm;e++){let t=e*pm,n=.5+.5*Math.cos(t/_m*Math.PI*2);for(let t=0;t<=mm;t++){let c=e*33+t,l=t%mm,u=Math.sin(l*1.7+e*.37)*.5+Math.sin(l*.61-e*.23)*.5;s.copy(i).lerp(a,.5+.5*u),s.lerp(o,n**6*.85),r[c*3]=s.r,r[c*3+1]=s.g,r[c*3+2]=s.b,this.jitter[c]=1+Math.sin(l*2.3+e*1.1)*Math.sin(e*.7+l*.4)*.018}}n.setAttribute(`color`,new Vr(r,3));let c=[];for(let e=0;e<289;e++)for(let t=0;t<mm;t++){let n=e*33+t,r=n+1,i=n+33,a=i+1;c.push(n,i,r,r,i,a)}n.setIndex(c),this.geometry=n;let l=new H(`#c99a68`),u=new G({vertexColors:!0,roughness:.88,metalness:.04});u.onBeforeCompile=e=>{e.uniforms.uDust={value:l},e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uDust;`).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
          vec3 wN = inverseTransformDirection(normal, viewMatrix);
          diffuseColor.rgb = mix(diffuseColor.rgb, uDust, smoothstep(0.15, 0.85, wN.y) * 0.6);`)},this.mesh=new W(n,u),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.visible=!1,e.add(this.mesh),this.headGroup=new V,this.headGroup.matrixAutoUpdate=!1,this.headGroup.visible=!1,e.add(this.headGroup);let d=new G({color:`#86735e`,roughness:.85,side:2});d.onBeforeCompile=e=>{e.uniforms.uInner={value:new H(`#6e3426`)},e.uniforms.uDust={value:l},e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uInner;
uniform vec3 uDust;`).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
          vec3 wN = inverseTransformDirection(normal, viewMatrix);
          diffuseColor.rgb = gl_FrontFacing ? mix(diffuseColor.rgb, uDust, smoothstep(0.2, 0.9, wN.y) * 0.5) : uInner;`)};let f=new G({color:`#e8dcc0`,roughness:.35,metalness:.05});this.petals=[];for(let e=0;e<3;e++){let t=wm(e,4.2),n=new V;n.position.copy(t.pivot);let r=new W(t.geo,d),i=new W(t.teethGeo,f);for(let e of[r,i])e.castShadow=!0,e.receiveShadow=!0,n.add(e);this.headGroup.add(n),this.petals.push({pivot:n,axis:t.axis})}let p=new Na(hm*.96,hm*.35,7,mm,6,!0);p.rotateX(-Math.PI/2),p.translate(0,0,-3.5);let m=new W(p,new G({color:`#2a100c`,roughness:.6,side:1,emissive:new H(`#ff5a1a`),emissiveIntensity:.12}));this.headGroup.add(m);let h=new W(new Ma(hm*.38,24),new gi({color:new H(2.2,.75,.2)}));h.position.z=-6.8,this.headGroup.add(h);let g=[];for(let e=0;e<4;e++){let t=-.4-e*1.3,n=hm*(.95-e*.12),r=34-e*4;for(let i=0;i<r;i++){let a=i/r*Math.PI*2+e*.3,o=new Pa(.06,.55-e*.07,4),s=new R(-Math.cos(a),-Math.sin(a),-.5).normalize();o.applyMatrix4(ym.makeRotationFromQuaternion(new rn().setFromUnitVectors(bm,s))),o.translate(Math.cos(a)*n,Math.sin(a)*n,t),g.push(o)}}this.headGroup.add(new W(lm(g),f)),this.centers=Array.from({length:fm},()=>new R),this.tangents=Array.from({length:fm},()=>new R),this.normals=Array.from({length:fm},()=>new R),this.binormals=Array.from({length:fm},()=>new R),this.radii=new Float32Array(fm);for(let e=0;e<fm;e++)this.radii[e]=Cm(e);this.crossings=[]}get busy(){return this.active}summon(e,t,n=80){this.active=!0,this.state=`approach`,this.target=e,this.time=0,this.open=0,this.path=null,this.breached=!1,this.dived=!1,this.swallowed=!1,this.speed=10.5;let r=e.x+Math.cos(t)*n,i=e.z+Math.sin(t)*n;this.head.set(r,q(r,i)-8,i),this.dir.set(e.x-r,0,e.z-i).normalize(),this.history.length=0;let a=Math.ceil(fm*pm/gm)+4;for(let e=1;e<=a;e++){let t=r-this.dir.x*e*gm,n=i-this.dir.z*e*gm;this.history.push(new R(t,q(t,n)-9,n))}this.mesh.visible=!0,this.headGroup.visible=!0,this.events.push({type:`summoned`})}dismiss(e){if(!this.active||this.state!==`approach`)return;this.state=`leave`,this.leaveTimer=0;let t=Math.atan2(this.dir.z,this.dir.x)+(Math.random()<.5?1:-1)*(1.2+Math.random()*.6);this.leaveDir=new R(Math.cos(t),0,Math.sin(t)),this.events.push({type:`lost`,reason:e})}_buildBreachPath(e,t){let n=[],r=this.head.x,i=this.head.z,a=this.head.y,o=e-r,s=t-i,c=Math.max(3,Math.hypot(o,s));o/=c,s/=c;let l=q(e,t),u=7.5,d=(e,t)=>n.push(new R(r+o*e,t,i+s*e));for(let e=1;e<=40;e++){let t=e/40;d(c*Math.sin(t*Math.PI/2),a+(l-a)*(1-Math.cos(t*Math.PI/2)))}let f=n.length;for(let e=1;e<=30;e++)d(c,l+9*e/30);let p=n.length;for(let e=1;e<=60;e++){let t=Math.PI-e/60*Math.PI;d(c+u+u*Math.cos(t),l+9+u*Math.sin(t))}let m=n.length;for(let e=1;e<=40;e++)d(c+2*u,l+9-19*e/40);for(let e=1;e<=30;e++){let t=e/30;d(c+2*u+7*Math.sin(t*Math.PI/2),l-10-5*(1-Math.cos(t*Math.PI/2)))}for(let e=1;e<=40;e++)d(c+2*u+7+e*1.5,l-15);let h=[0],g=this.head.clone(),_=0;for(let e of n)_+=e.distanceTo(g),h.push(_),g=e;this.path={pts:[this.head.clone(),...n],lens:h,total:_,s:0},this.pathMarks={surface:h[f],arcStart:h[p],arcEnd:h[m],diveX:r+o*(c+2*u),diveZ:i+s*(c+2*u)},this.breachPoint=new R(e,l,t),this.breachDir=new R(o,0,s)}_advancePath(e){let t=this.path;t.s=Math.min(t.total,t.s+e);let n=0,r=t.lens.length-1;for(;r-n>1;){let e=n+r>>1;t.lens[e]<=t.s?n=e:r=e}let i=t.lens[r]-t.lens[n]||1,a=(t.s-t.lens[n])/i;this.head.lerpVectors(t.pts[n],t.pts[r],a),vm.subVectors(t.pts[r],t.pts[n]),vm.lengthSq()>1e-8&&this.dir.copy(vm.normalize())}_recordHistory(){let e=this.history[0];if(!e){this.history.unshift(this.head.clone());return}let t=this.head.distanceTo(e),n=e,r=0;for(;t>=gm&&r++<400;){let e=n.clone().lerp(this.head,gm/t);this.history.unshift(e),n=e,t=this.head.distanceTo(e)}let i=Math.ceil(fm*pm/gm)+6;this.history.length>i&&(this.history.length=i)}update(e,t){if(this.crossings.length=0,!this.active)return;this.time+=e;let n=this.target;if(this.state===`approach`){n.kind===`player`&&(n.x=t.playerPos.x,n.z=t.playerPos.z);let r=n.x-this.head.x,i=n.z-this.head.z,a=Math.hypot(r,i),o=Math.atan2(i,r)+Math.sin(this.time*.9)*.18*Math.min(1,a/40),s=Math.atan2(this.dir.z,this.dir.x),c=(o-s+Math.PI*3)%(Math.PI*2)-Math.PI,l=s+Math.max(-1.1*e,Math.min(1.1*e,c));this.dir.set(Math.cos(l),0,Math.sin(l)),this.head.x+=this.dir.x*this.speed*e,this.head.z+=this.dir.z*this.speed*e;let u=q(this.head.x,this.head.z)-7.5;if(this.head.y+=(u-this.head.y)*(1-Math.exp(-e*3)),a<(n.kind===`player`?16:8.5)){let e=n.x,t=n.z;if(n.kind===`player`){let r=Math.random()<.5?1:-1,i=-this.dir.z*r,a=this.dir.x*r;e=n.x+i*7.5-this.dir.x*1.5,t=n.z+a*7.5-this.dir.z*1.5}this.state=`breach`,this._buildBreachPath(e,t),this.events.push({type:`rising`,x:e,z:t})}}else if(this.state===`breach`){let t=this.path,n=this.pathMarks,r=12;r=t.s<n.surface?13:t.s<n.arcStart?12.5:t.s<n.arcEnd?10.5:14;let i=t.s;this._advancePath(r*e);let a=t.s,o=0;if(a>n.surface-6&&a<n.arcStart+(n.arcEnd-n.arcStart)*.35&&(o=1),this.open+=(o-this.open)*(1-Math.exp(-e*(o>this.open?2.4:3.2))),!this.breached&&a>=n.surface-.5&&(this.breached=!0,this.events.push({type:`breach`,x:this.breachPoint.x,y:this.breachPoint.y,z:this.breachPoint.z})),!this.swallowed&&a>=n.surface+2.5&&(this.swallowed=!0,this.events.push({type:`swallow`,x:this.breachPoint.x,z:this.breachPoint.z})),!this.dived&&i<n.arcEnd+9&&a>=n.arcEnd+9){this.dived=!0;let e=n.diveX,t=n.diveZ;this.events.push({type:`dive`,x:e,y:q(e,t),z:t})}t.s>=t.total-.01&&(this.state=`leave`,this.leaveTimer=0,this.leaveDir=this.breachDir.clone())}else if(this.state===`leave`){this.leaveTimer+=e;let t=Math.atan2(this.dir.z,this.dir.x),n=(Math.atan2(this.leaveDir.z,this.leaveDir.x)-t+Math.PI*3)%(Math.PI*2)-Math.PI,r=t+Math.max(-.9*e,Math.min(.9*e,n));this.dir.set(Math.cos(r),0,Math.sin(r)),this.head.x+=this.dir.x*11*e,this.head.z+=this.dir.z*11*e;let i=q(this.head.x,this.head.z)-12-this.leaveTimer*1.5;if(this.head.y+=(i-this.head.y)*(1-Math.exp(-e*2)),this.open+=(0-this.open)*(1-Math.exp(-e*3)),this.leaveTimer>3&&this.visibleAmount===0||this.leaveTimer>25){this.active=!1,this.state=`idle`,this.mesh.visible=!1,this.headGroup.visible=!1,this.events.push({type:`gone`});return}}this._recordHistory(),this._buildBody()}_buildBody(){let e=this.history,t=this.centers,n=this.head,r=0,i=e[0]||this.head,a=n.distanceTo(i),o=0;t[0].copy(this.head);for(let s=1;s<fm;s++){let c=pm;for(;c>0;){let t=a-o;t>=c?(o+=c,c=0):(c-=t,r++,r>=e.length?(n=i,i=n.clone().addScaledVector(this.dir,-.32),e.push(i)):(n=i,i=e[r]),a=n.distanceTo(i),o=0,a<1e-6&&(a=1e-6))}t[s].lerpVectors(n,i,o/a)}let s=this.tangents,c=this.normals,l=this.binormals;for(let e=0;e<fm;e++){let n=t[Math.max(0,e-1)],r=t[Math.min(289,e+1)];s[e].subVectors(n,r),s[e].lengthSq()<1e-10&&s[e].copy(this.dir),s[e].normalize()}c[0].copy(bm).addScaledVector(s[0],-bm.dot(s[0])),c[0].lengthSq()<1e-6&&c[0].set(1,0,0).addScaledVector(s[0],-s[0].x),c[0].normalize(),l[0].crossVectors(s[0],c[0]).normalize();for(let e=1;e<fm;e++)c[e].copy(c[e-1]).addScaledVector(s[e],-c[e-1].dot(s[e])).normalize(),l[e].crossVectors(s[e],c[e]).normalize();let u=this.posAttr.array,d=this.norAttr.array,f=this.radii,p=this.jitter;for(let e=0;e<fm;e++){let n=(f[Math.max(0,e-1)]-f[Math.min(289,e+1)])/(2*pm);for(let r=0;r<=mm;r++){let i=r/mm*Math.PI*2,a=Math.cos(i),o=Math.sin(i),m=c[e].x*a+l[e].x*o,h=c[e].y*a+l[e].y*o,g=c[e].z*a+l[e].z*o,_=e*33+r,v=f[e]*p[_];u[_*3]=t[e].x+m*v,u[_*3+1]=t[e].y+h*v,u[_*3+2]=t[e].z+g*v;let y=m-s[e].x*n,b=h-s[e].y*n,x=g-s[e].z*n,S=Math.hypot(y,b,x)||1;d[_*3]=y/S,d[_*3+1]=b/S,d[_*3+2]=x/S}}this.posAttr.needsUpdate=!0,this.norAttr.needsUpdate=!0,ym.makeBasis(c[0],l[0],s[0]),ym.setPosition(t[0]),this.headGroup.matrix.copy(ym),this.headGroup.matrixWorldNeedsUpdate=!0;let m=this.open;for(let e=0;e<3;e++){let t=this.petals[e];t.pivot.quaternion.setFromAxisAngle(t.axis,m*1.05)}let h=t[0].y-q(t[0].x,t[0].z)>0;this.visibleAmount=+!!h;for(let e=4;e<fm;e+=4){let n=t[e].y-q(t[e].x,t[e].z)>0;n&&this.visibleAmount++,n!==h&&this.crossings.push({x:t[e].x,z:t[e].z,up:n}),h=n}}get focus(){return this.head}},Em=class{constructor(){this.ctx=null,this.enabled=!1,this.started=!1}start(){if(this.started)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.started=!0,this.master=t.createGain(),this.master.gain.value=this.enabled?.8:0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(t.destination);let r=t.sampleRate*3;this.white=t.createBuffer(1,r,t.sampleRate);let i=this.white.getChannelData(0);for(let e=0;e<r;e++)i[e]=Math.random()*2-1;this.brown=t.createBuffer(1,r,t.sampleRate);let a=this.brown.getChannelData(0),o=0;for(let e=0;e<r;e++)o=(o+.02*(Math.random()*2-1))/1.02,a[e]=o*3.5;this.windLow=this._loop(this.brown,`lowpass`,420,.7),this.windHigh=this._loop(this.white,`bandpass`,900,.8),this.hiss=this._loop(this.white,`highpass`,4200,.5),this.rumble=this._loop(this.brown,`lowpass`,110,1.2)}_loop(e,t,n,r){let i=this.ctx,a=i.createBufferSource();a.buffer=e,a.loop=!0,a.playbackRate.value=.9+Math.random()*.2;let o=i.createBiquadFilter();o.type=t,o.frequency.value=n,o.Q.value=r;let s=i.createGain();return s.gain.value=0,a.connect(o).connect(s).connect(this.master),a.start(i.currentTime+Math.random()),{src:a,filter:o,gain:s}}setEnabled(e){this.enabled=e,this.master&&this.master.gain.setTargetAtTime(e?.8:0,this.ctx.currentTime,.1)}resume(){this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}update(e,t,n,r){if(!this.ctx)return;let i=this.ctx.currentTime,a=Math.min(1.4,e*.7+t*.5+n*1.1);this.windLow.gain.gain.setTargetAtTime(.12+a*.32,i,.3),this.windLow.filter.frequency.setTargetAtTime(260+a*420,i,.4),this.windHigh.gain.gain.setTargetAtTime(.02+a*.1,i,.3),this.windHigh.filter.frequency.setTargetAtTime(650+a*900+Math.sin(i*.3)*120,i,.5),this.hiss.gain.gain.setTargetAtTime(.004+a*.03+n*.04,i,.3),this.rumble.gain.gain.setTargetAtTime(r*1.4,i,.25),this.rumble.filter.frequency.setTargetAtTime(70+r*90,i,.3)}footstep(e=1){if(!this.ctx||!this.enabled)return;let t=this.ctx,n=t.currentTime,r=t.createBufferSource();r.buffer=this.white;let i=Math.random()*2.5,a=t.createBiquadFilter();a.type=`bandpass`,a.frequency.value=1500+Math.random()*1400,a.Q.value=.9;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=5200;let s=t.createGain(),c=.09*e*(.75+Math.random()*.5);s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(c,n+.012),s.gain.exponentialRampToValueAtTime(c*.35,n+.06),s.gain.exponentialRampToValueAtTime(1e-4,n+.2+e*.05),r.connect(a).connect(o).connect(s).connect(this.master),r.start(n,i,.3);let l=t.createOscillator();l.frequency.setValueAtTime(95,n),l.frequency.exponentialRampToValueAtTime(50,n+.08);let u=t.createGain();u.gain.setValueAtTime(.05*e,n),u.gain.exponentialRampToValueAtTime(1e-4,n+.1),l.connect(u).connect(this.master),l.start(n),l.stop(n+.12)}thump(e){if(!this.ctx||!this.enabled)return;let t=this.ctx,n=t.currentTime,r=Math.max(.08,1-e/60),i=t.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(82,n),i.frequency.exponentialRampToValueAtTime(36,n+.28);let a=t.createGain();a.gain.setValueAtTime(.55*r,n),a.gain.exponentialRampToValueAtTime(1e-4,n+.45),i.connect(a).connect(this.master),i.start(n),i.stop(n+.5);let o=t.createBufferSource();o.buffer=this.white;let s=t.createBiquadFilter();s.type=`bandpass`,s.frequency.value=2400,s.Q.value=2;let c=t.createGain();c.gain.setValueAtTime(.12*r,n),c.gain.exponentialRampToValueAtTime(1e-4,n+.07),o.connect(s).connect(c).connect(this.master),o.start(n,Math.random(),.1)}whistle(){if(!this.ctx||!this.enabled)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type=`sine`,n.frequency.setValueAtTime(1500,t),n.frequency.exponentialRampToValueAtTime(420,t+1.6);let r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.05,t+.2),r.gain.exponentialRampToValueAtTime(1e-4,t+1.7),n.connect(r).connect(this.master),n.start(t),n.stop(t+1.75)}blip(e){if(!this.ctx||!this.enabled)return;let t={pickup:[880,1320,.09,`triangle`,.07],jump:[330,620,.12,`square`,.035],stomp:[240,110,.12,`square`,.05],hit:[300,90,.25,`sawtooth`,.05],die:[260,55,.5,`sawtooth`,.06],clear:[523,1046,.4,`triangle`,.07],squeak:[2100,2900,.06,`sine`,.025],hawk:[1500,900,.5,`sawtooth`,.018],spice:[660,1760,.16,`triangle`,.06],hop:[220,400,.1,`sine`,.03]},[n,r,i,a,o]=t[e]||t.pickup,s=this.ctx,c=s.currentTime,l=s.createOscillator();l.type=a,l.frequency.setValueAtTime(n,c),l.frequency.exponentialRampToValueAtTime(r,c+i);let u=s.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(o,c+.01),u.gain.exponentialRampToValueAtTime(1e-4,c+i),l.connect(u).connect(this.master),l.start(c),l.stop(c+i+.02)}thopter(e){if(!this.ctx)return;let t=this.ctx;if(!this.thop){if(e<.01)return;let n=t.createBufferSource();n.buffer=this.brown,n.loop=!0;let r=t.createBiquadFilter();r.type=`bandpass`,r.frequency.value=150,r.Q.value=1.1;let i=t.createGain();i.gain.value=.5;let a=t.createOscillator();a.frequency.value=11;let o=t.createGain();o.gain.value=.5,a.connect(o).connect(i.gain);let s=t.createGain();s.gain.value=0,n.connect(r).connect(i).connect(s).connect(this.master),n.start(),a.start(),this.thop={out:s}}this.thop.out.gain.setTargetAtTime(Math.min(1,e)*.5,t.currentTime,.25)}chime(e=`experience`){if(!this.ctx||!this.enabled)return;let t=this.ctx,n=t.currentTime,r=220*({experience:1,education:1.26,project:1.335,skills:1.5}[e]??1);for(let[e,i,a]of[[1,.11,3.2],[2,.05,2.2],[2.76,.035,1.6],[4.07,.02,1.1],[5.4,.012,.8]]){let o=t.createOscillator();o.type=`sine`,o.frequency.value=r*e*(1+(Math.random()-.5)*.004);let s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(i,n+.012),s.gain.exponentialRampToValueAtTime(1e-4,n+a),o.connect(s).connect(this.master),o.start(n),o.stop(n+a+.05)}let i=t.createOscillator();i.type=`sine`,i.frequency.value=r/2;let a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.09,n+.45),a.gain.exponentialRampToValueAtTime(1e-4,n+3),i.connect(a).connect(this.master),i.start(n),i.stop(n+3.1);let o=t.createBufferSource();o.buffer=this.white;let s=t.createBiquadFilter();s.type=`bandpass`,s.frequency.setValueAtTime(900,n),s.frequency.exponentialRampToValueAtTime(3200,n+1.2),s.Q.value=.7;let c=t.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.05,n+.3),c.gain.exponentialRampToValueAtTime(1e-4,n+1.6),o.connect(s).connect(c).connect(this.master),o.start(n,Math.random(),1.8)}eruption(e=1){if(!this.ctx||!this.enabled)return;let t=this.ctx,n=t.currentTime,r=t.createBufferSource();r.buffer=this.brown;let i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(1800,n),i.frequency.exponentialRampToValueAtTime(160,n+3);let a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(1.1*e,n+.08),a.gain.exponentialRampToValueAtTime(1e-4,n+3.8),r.connect(i).connect(a).connect(this.master),r.start(n,Math.random(),4);let o=t.createBufferSource();o.buffer=this.white;let s=t.createBiquadFilter();s.type=`highpass`,s.frequency.value=2500;let c=t.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.18*e,n+.2),c.gain.exponentialRampToValueAtTime(1e-4,n+3.5),o.connect(s).connect(c).connect(this.master),o.start(n,Math.random(),4);let l=t.createOscillator();l.frequency.setValueAtTime(48,n),l.frequency.exponentialRampToValueAtTime(28,n+2.5);let u=t.createGain();u.gain.setValueAtTime(.6*e,n),u.gain.exponentialRampToValueAtTime(1e-4,n+2.8),l.connect(u).connect(this.master),l.start(n),l.stop(n+3)}},Dm={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Om=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},km=new yc(-1,1,1,-1,0,1),Am=new class extends ti{constructor(){super(),this.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new U([0,2,0,0,2,0],2))}},jm=class{constructor(e){this._mesh=new W(Am,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,km)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Mm=class extends Om{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ms?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ds.clone(e.uniforms),this.material=new ms({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new jm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Nm=class extends Om{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Pm=class extends Om{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Fm=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ae}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mm(Dm),this.copyPass.material.blending=0,this.timer=new Ac}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Nm!==void 0&&(r instanceof Nm?n=!0:r instanceof Pm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Im=class extends Om{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Lm={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Rm=class e extends Om{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new H(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(i,a,{type:ae,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new wn(i,a,{type:ae,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new wn(i,a,{type:ae,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Lm;this.highPassUniforms=ds.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ms({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ds.clone(Dm.uniforms),this.blendMaterial=new ms({uniforms:this.copyUniforms,vertexShader:Dm.vertexShader,fragmentShader:Dm.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new H,this._oldClearAlpha=1,this._basic=new gi,this._fsQuad=new jm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ms({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ms({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Rm.BlurDirectionX=new L(1,0),Rm.BlurDirectionY=new L(0,1);var zm={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Bm=class extends Om{constructor(){super(),this.isOutputPass=!0,this.uniforms=ds.clone(zm.uniforms),this.material=new hs({name:zm.name,uniforms:this.uniforms,vertexShader:zm.vertexShader,fragmentShader:zm.fragmentShader}),this._fsQuad=new jm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dn.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Vm={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new L(1,1)},uHeat:{value:.5},uStorm:{value:0},uStormColor:{value:new H(`#c9884c`)},uWindDir:{value:new L(.8,-.3)},uVignette:{value:.9},uFade:{value:0},uFadeColor:{value:new H(0,0,0)},uShake:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uHeat;
    uniform float uStorm;
    uniform vec3 uStormColor;
    uniform vec2 uWindDir;
    uniform float uVignette;
    uniform float uFade;
    uniform vec3 uFadeColor;
    uniform float uShake;
    varying vec2 vUv;

    float h21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float vn(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y);
    }
    float fbm(vec2 p) {
      float s = 0.0, a = 0.5;
      for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.07; a *= 0.5; }
      return s;
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uRes.x / uRes.y;
      // heat shimmer: rises from the ground, stronger towards the top (farther away)
      float hs = uHeat * (0.25 + 0.75 * smoothstep(0.1, 1.0, uv.y));
      vec2 hp = vec2(uv.x * aspect * 38.0, uv.y * 24.0 - uTime * 1.6);
      uv += vec2(vn(hp) - 0.5, vn(hp + 17.3) - 0.5) * 0.0022 * hs;
      // chromatic fringe during shakes
      float ca = 0.0008 + uShake * 0.004;
      vec2 dir = (uv - 0.5);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir * ca).b;

      // storm: layered, wind-driven dust sheets over the image
      if (uStorm > 0.001) {
        vec2 sp = vec2(uv.x * aspect, uv.y) * 3.0;
        vec2 flow = uWindDir * uTime;
        float d1 = fbm(sp * 1.1 - flow * 0.9);
        float d2 = fbm(sp * 2.7 - flow * 2.1 + 5.0);
        float d3 = fbm(sp * 6.0 - flow * 4.5 + 11.0);
        float dust = smoothstep(0.25, 0.95, d1 * 0.55 + d2 * 0.3 + d3 * 0.15);
        float amt = uStorm * (0.1 + 0.36 * dust);
        col = mix(col, uStormColor * (0.8 + 0.3 * d2), amt);
        // fine, fast-moving sand sheets
        vec2 wd = normalize(uWindDir * vec2(aspect, 1.0));
        vec2 sq = vec2(uv.x * aspect, uv.y);
        float along = dot(sq, wd);
        float across = dot(sq, vec2(-wd.y, wd.x));
        float st = smoothstep(0.8, 1.0, vn(vec2(along * 6.0 - uTime * 7.0, across * 140.0)))
                 * smoothstep(0.35, 0.8, vn(vec2(along * 2.0 - uTime * 3.0, across * 9.0)));
        col += uStormColor * st * uStorm * 0.12;
      }

      // vignette
      vec2 q = vUv - 0.5;
      q.x *= aspect * 0.8;
      float vig = smoothstep(0.95, 0.25, length(q));
      col *= mix(1.0, vig, uVignette * 0.55);
      // fine film grain
      float g = h21(vUv * uRes + fract(uTime * 13.7) * 100.0) - 0.5;
      col += g * 0.028;
      col = mix(col, uFadeColor, uFade);
      gl_FragColor = vec4(col, 1.0);
    }
  `};function Hm(e,t,n){let r=e.getDrawingBufferSize(new L),i=new Fm(e,new wn(r.x,r.y,{type:ae,samples:4})),a=new Im(t,n);i.addPass(a);let o=new Rm(new L(r.x/4,r.y/4),.32,.55,1.35),s=o.setSize.bind(o);o.setSize=(e,t)=>s(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),o.highPassUniforms.smoothWidth.value=.45,i.addPass(o),i.addPass(new Bm);let c=new Mm(Vm);return i.addPass(c),{composer:i,bloom:o,grade:c,setSize(e,t,n){i.setPixelRatio(n),i.setSize(e,t),c.uniforms.uRes.value.set(e*n,t*n)},render(e){i.render(e)}}}var Um=e=>document.getElementById(e);function Wm(e){let t=Math.floor(e)%24,n=Math.floor((e-Math.floor(e))*60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}var Gm=class{constructor(e){this.hud=Um(`hud`),this.intro=Um(`intro`),this.timeInput=Um(`time`),this.timeOut=Um(`timeOut`),this.clock=Um(`clock`),this.region=Um(`region`),this.rhythmBox=Um(`rhythm`),this.rhythmState=Um(`rhythmState`),this.wave=Um(`rhythmWave`),this.waveCtx=this.wave.getContext(`2d`),this.wormsign=Um(`wormsign`),this.wsDist=Um(`wsDist`),this.wsArrow=Um(`wsArrow`),this.toastEl=Um(`toast`),this.fadeEl=Um(`fade`),this.buttons={thumper:Um(`btnThumper`),sandwalk:Um(`btnSandwalk`),storm:Um(`btnStorm`),seed:Um(`btnSeed`),arcade:Um(`btnArcade`),atomics:Um(`btnAtomics`),sound:Um(`btnSound`)},this.steps=[],this.toastTimer=0,this.hidden=!1,Um(`enter`).addEventListener(`click`,()=>e.enter()),Um(`enterRead`).addEventListener(`click`,()=>e.enterRead()),this.timeInput.addEventListener(`input`,()=>e.time(parseFloat(this.timeInput.value))),this.buttons.thumper.addEventListener(`click`,()=>e.thumper()),this.buttons.sandwalk.addEventListener(`click`,()=>e.sandwalk()),this.buttons.storm.addEventListener(`click`,()=>e.storm()),this.buttons.seed.addEventListener(`click`,()=>e.seed()),this.buttons.sound.addEventListener(`click`,()=>e.sound()),this.buttons.arcade.addEventListener(`click`,()=>e.arcade()),this.buttons.atomics.addEventListener(`click`,()=>e.atomics());for(let e of Object.values(this.buttons))e.addEventListener(`mouseup`,()=>e.blur());let t=Math.min(2,window.devicePixelRatio||1);this.wave.width=220*t,this.wave.height=34*t,this.waveCtx.scale(t,t)}enter(){this.intro.classList.add(`gone`),this.hud.classList.remove(`hidden`)}toggleHidden(){this.hidden=!this.hidden,this.hud.classList.toggle(`hidden`,this.hidden)}setTime(e){let t=Wm(e);this.timeOut.textContent=t,this.clock.textContent=t,Math.abs(parseFloat(this.timeInput.value)-e)>.02&&(this.timeInput.value=e.toFixed(2))}setRegion(e){this.region.textContent=e}setToggle(e,t){this.buttons[e].classList.toggle(`on`,t)}toast(e,t=3.5){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),this.toastTimer=t}fade(e){this.fadeEl.classList.toggle(`on`,e)}step(e,t){this.steps.push({time:e,strength:t}),this.steps.length>40&&this.steps.shift()}update(e,t,n,r,i,a){this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.toastEl.classList.remove(`show`));let o=`Still`,s=t-(this.steps.length?this.steps[this.steps.length-1].time:-9)<1.2;i&&s?o=`Sandwalking`:n>.8?o=`Drumming`:n>.5?o=`Rhythmic`:s&&(o=r>.6?`Steady`:`Broken`),this.rhythmState.textContent=o,this.rhythmBox.classList.toggle(`warn`,n>.5&&n<=.8),this.rhythmBox.classList.toggle(`danger`,n>.8);let c=this.waveCtx;c.clearRect(0,0,220,34);let l=c.createLinearGradient(0,0,220,0);l.addColorStop(0,`rgba(255,200,140,0.0)`),l.addColorStop(1,n>.8?`rgba(255,90,54,0.35)`:`rgba(255,170,90,0.22)`),c.fillStyle=l,c.fillRect(0,31,220*n,3),c.lineWidth=1.25,c.strokeStyle=n>.8?`#ff7a50`:n>.5?`#ffb070`:`rgba(244,226,198,0.8)`,c.beginPath(),c.moveTo(0,17);let u=[];for(let e of this.steps){let n=220-(t-e.time)/4*220;n>-6&&n<226&&u.push({x:n,a:6+8*e.strength})}let d=0;for(let e of u)e.x-5>d&&c.lineTo(e.x-5,17),c.lineTo(e.x-2.5,17-e.a),c.lineTo(e.x,17+e.a*.55),c.lineTo(e.x+2.5,17-e.a*.2),c.lineTo(e.x+4,17),d=e.x+4;c.lineTo(220,17),c.stroke(),a&&a.visible?(this.wormsign.classList.add(`show`),this.wsDist.textContent=`${Math.round(a.distance)} m`,this.wsArrow.style.transform=`rotate(${a.screenAngle}rad)`):this.wormsign.classList.remove(`show`)}},Km=new H(`#8d7b60`),qm=new H(`#3a332c`);function Jm(e){return e.castShadow=!0,e.receiveShadow=!0,e}function Ym(e,t){let n=new mo;n.moveTo(0,-t*.35),n.bezierCurveTo(e*.3,-t*.62,e*.75,-t*.5,e,-t*.08),n.bezierCurveTo(e*1.02,t*.05,e*.9,t*.18,e*.7,t*.22),n.bezierCurveTo(e*.4,t*.32,e*.15,t*.3,0,t*.22),n.closePath();let r=new ns(n,18);return r.rotateX(Math.PI/2),r}var Xm=class{constructor(){this.root=new V,this.body=new V,this.root.add(this.body);let e=new G({color:Km,roughness:.5,metalness:.55}),t=new G({color:qm,roughness:.6,metalness:.5}),n=new G({color:`#4d6b70`,roughness:.16,metalness:.55,emissive:`#0c1a1c`});this.membrane=new G({color:`#d2bd92`,roughness:.75,metalness:0,transparent:!0,opacity:.78,side:2}),this.glow=new gi({color:new H(.2,.8,.7)});let r=Jm(new W(new ja(.5,2.3,6,16),e));r.rotation.x=Math.PI/2,r.scale.set(1,1,.82),r.position.set(0,1.25,.1);let i=Jm(new W(new ja(.42,1.6,4,12),t));i.rotation.x=Math.PI/2,i.position.set(0,.98,.2);let a=Jm(new W(new is(.55,24,16),n));a.scale.set(.82,.66,1.35),a.position.set(0,1.4,1.42);let o=Jm(new W(new as(.47,.045,6,24),e));o.position.set(0,1.36,.95);for(let e of[-.55,0,.55]){let n=Jm(new W(new as(.56,.022,4,20,Math.PI),t));n.scale.set(.82,.66,1.35),n.rotation.set(0,Math.PI/2,e),n.position.set(0,1.4,1.42),this.body.add(n)}let s=Jm(new W(new Na(.1,.26,2.6,10),e));s.rotation.x=Math.PI/2,s.position.set(0,1.3,-2.45);let c=Jm(new W(new Aa(.05,.55,.6),t));c.position.set(0,1.6,-3.55),c.rotation.x=-.35;let l=Jm(new W(new Aa(1.2,.04,.35),t));l.position.set(0,1.32,-3.6);for(let e of[1,-1]){let n=Jm(new W(new Na(.2,.24,1.15,12),t));n.rotation.x=Math.PI/2,n.position.set(e*.68,1,-.65);let r=new W(new as(.17,.035,6,16),this.glow);r.position.set(e*.68,1,-1.24),this.body.add(n,r)}for(let[e,n]of[[.75,.95],[-.75,.95],[.75,-.75],[-.75,-.75]]){let r=Jm(new W(new Na(.035,.045,1,6),t));r.position.set(e*.85,.45,n),r.rotation.z=e>0?-.35:.35;let i=Jm(new W(new Na(.16,.18,.05,10),t));i.position.set(e*1,.02,n),this.body.add(r,i)}this.body.add(r,i,a,o,s,c,l);let u=Ym(3.3,.85),d=new Aa(3.25,.05,.06).translate(3.25/2,0,-.05),f=new Aa(.035,.035,.75);this.wings=[];for(let[e,n]of[[.55,0],[-.55,1]])for(let r of[1,-1]){let i=new V;i.position.set(r*.28,1.72,e);let a=new V;i.add(a);let o=new V;o.scale.x=r;let s=Jm(new W(u,this.membrane)),c=Jm(new W(d,t));o.add(s,c);for(let e of[.3,.55,.8]){let n=new W(f,t);n.position.set(3.3*e,.01,-.02),n.scale.z=1-e*.55,o.add(n)}a.add(o);let l=Jm(new W(new is(.11,10,8),t));i.add(l),this.body.add(i),this.wings.push({pivot:i,flapper:a,side:r,pair:n})}this.phase=0,this.yaw=0,this.height=2.2}update(e,t,n,r){let i=nn.smoothstep(n,.05,.45),a=nn.smoothstep(n,.3,.8),o=.6+a*5.4;this.phase+=e*o*Math.PI*2;let s=.04+a*.5;for(let e of this.wings){let t=this.phase+(e.pair?Math.PI*.62:0);e.pivot.rotation.y=e.side*(1-i)*1.25,e.flapper.rotation.z=e.side*(.12*i+s*Math.sin(t))}let c=n*n*(3-2*n);if(this.body.position.y=c*2.7+a*.12*Math.sin(t*1.7),this.body.rotation.x=.06*a+.025*a*Math.sin(t*2.3),this.body.rotation.z=.04*a*Math.sin(t*1.1),a>.2&&r!==null){let t=(r-this.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;this.yaw+=Math.max(-e*.7,Math.min(e*.7,t))*a}this.root.rotation.y=this.yaw,this.glow.color.setRGB(.2+1.6*a,.8+2.4*a,.7+2*a),this.height=2.2+c*2.7}},Zm=class{constructor(){this.root=new V;let e=new G({color:`#7d6c55`,roughness:.55,metalness:.5}),t=new G({color:`#2f2924`,roughness:.6,metalness:.4}),n=Jm(new W(new ja(.7,1.4,6,16),e));n.rotation.z=Math.PI/2,n.position.y=.75;let r=Jm(new W(new Na(.74,.74,.18,18),t));r.rotation.z=Math.PI/2,r.position.set(.45,.75,0);let i=r.clone();i.position.x=-.45,this.root.add(n,r,i),this.height=1.5}update(){}},Qm=`modulepreload`,$m=function(e){return`/`+e},eh={},th=function(e){return e.pathname.endsWith(`.css`)},nh=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},rh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=$m(t,n);let r=s(t),i=th(r);return nh(eh,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Qm,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ih=null;function ah(){return ih||(ih=Promise.all([rh(()=>import(`./GLTFLoader-CFMQjhCk.js`),__vite__mapDeps([0,1])),rh(()=>import(`./DRACOLoader-R7DDZ1-V.js`),[]),rh(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[]),rh(()=>import(`./SkeletonUtils-SuB-f61d.js`),[])]).then(([{GLTFLoader:e},{DRACOLoader:t},{MeshoptDecoder:n},r])=>{let i=new e;return i.setDRACOLoader(new t),i.setMeshoptDecoder(n),{loader:i,clone:r.clone}})),ih}var oh=new Map;async function sh(e){let t=a(e),{loader:n,clone:r}=await ah();if(!oh.has(t)){let e=n.loadAsync(t);e.catch(()=>oh.delete(t)),oh.set(t,e)}let i=await oh.get(t);return{scene:r(i.scene),animations:i.animations||[]}}var ch=5,lh=class{constructor(e,{lift:t=!0}={}){this.root=new V,this.body=new V,this.root.add(this.body),this.height=2,this.lift=t,this.yaw=0,this.mixer=null,this.state=`loading`,this.onState=null,this.placeholder=new W(new Aa(1.4,1.4,1.4),new G({color:`#5d4b3c`,roughness:.9,transparent:!0,opacity:.6})),this.placeholder.position.y=.7,this.body.add(this.placeholder),sh(e).then(e=>this._use(e)).catch(e=>{this.state=`error`,this.error=String(e&&e.message||e),this.placeholder.material.color.set(`#7a2f22`),this.onState&&this.onState(this)})}_use(e){if(this.disposed)return;let t=e.scene,n=new Cr().setFromObject(t),r=n.getSize(new R),i=ch/Math.max(r.x,r.z,r.y,.001);t.scale.multiplyScalar(i),n.setFromObject(t);let a=n.getCenter(new R);if(t.position.x-=a.x,t.position.z-=a.z,t.position.y-=n.min.y,t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.body.remove(this.placeholder),this.body.add(t),this.height=r.y*i,e.animations&&e.animations.length){this.mixer=new qc(t);for(let t of e.animations)this.mixer.clipAction(t).play()}this.state=`ready`,this.onState&&this.onState(this)}update(e,t,n,r){this.mixer&&this.mixer.update(e);let i=this.lift?n:0,a=i*i*(3-2*i);if(this.body.position.y=a*2.2+(a>.5?.12*Math.sin(t*1.6):0),a>.3&&r!==null){let t=(r-this.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;this.yaw+=Math.max(-e*.6,Math.min(e*.6,t))*a}this.root.rotation.y=this.yaw}dispose(){this.disposed=!0}},uh=new G({color:`#8d7b60`,roughness:.55,metalness:.45}),dh=new G({color:`#2f2924`,roughness:.6,metalness:.4}),fh=new G({color:`#1f1b18`,roughness:.95}),ph=new G({color:`#27425a`,roughness:.35,metalness:.6});function mh(e){return e.castShadow=!0,e.receiveShadow=!0,e}function hh(e,t,n){let r=(t-e+Math.PI*3)%(Math.PI*2)-Math.PI;return e+Math.max(-n,Math.min(n,r))}var gh=class{constructor(){this.root=new V,this.yaw=0,this.height=1.7;let e=mh(new W(new Aa(1.3,.34,2),uh));e.position.y=.62;let t=mh(new W(new Aa(1.5,.05,1.5),ph));t.position.set(0,.82,-.15),this.root.add(e,t),this.wheels=[];let n=new Na(.27,.27,.2,14).rotateZ(Math.PI/2);for(let e of[-1,1]){let t=mh(new W(new Aa(.07,.07,2.1),dh));t.position.set(e*.78,.42,0),this.root.add(t);for(let t of[-.9,0,.9]){let r=mh(new W(n,fh));r.position.set(e*.86,.27,t);let i=new W(new Na(.1,.1,.22,8).rotateZ(Math.PI/2),uh);r.add(i),this.root.add(r),this.wheels.push(r)}}this.mast=new V,this.mast.position.set(0,.8,.7);let r=mh(new W(new Na(.035,.045,.8,8).translate(0,.4,0),dh));this.head=new V,this.head.position.y=.82;let i=mh(new W(new Aa(.42,.16,.18),uh));this.eyeMat=new gi({color:new H(.2,.6,.8)});for(let e of[-.11,.11]){let t=new W(new Na(.05,.05,.04,12).rotateX(Math.PI/2),this.eyeMat);t.position.set(e,0,.1),this.head.add(t)}this.head.add(i),this.mast.add(r,this.head),this.arm=new V,this.arm.position.set(.45,.72,.95);let a=mh(new W(new Na(.03,.03,.55,6).translate(0,.275,0),dh));this.fore=new V,this.fore.position.y=.55;let o=mh(new W(new Na(.025,.025,.45,6).translate(0,.225,0),dh)),s=mh(new W(new Pa(.06,.14,6).translate(0,.5,0),uh));this.fore.add(o,s),this.arm.add(a,this.fore);let c=new W(new Na(.008,.012,.9,5).translate(0,.45,0),dh);c.position.set(-.5,.8,-.8),this.root.add(this.mast,this.arm,c),this.headYaw=0}update(e,t,n,r){let i=n*n*(3-2*n);this.mast.rotation.x=-(1-i)*1.35,this.arm.rotation.x=1.5-i*.9+Math.sin(t*.9)*.08*i,this.fore.rotation.x=1.9-i*1.1+Math.sin(t*1.3)*.12*i;let a=r===null?0:r-this.yaw;this.headYaw=hh(this.headYaw,i>.4?a:0,e*1.6),this.head.rotation.y=this.headYaw,this.head.rotation.x=Math.sin(t*.7)*.06*i;let o=.25+i*3.2+(i>.5?.6*Math.sin(t*5):0);this.eyeMat.color.setRGB(.2*o,.75*o,1*o);let s=i>.5?Math.sin(t*.6)*.25:0;for(let e of this.wheels)e.rotation.x=s;this.root.rotation.y=this.yaw}},_h=class{constructor(){this.root=new V,this.yaw=0,this.height=2.6;let e=mh(new W(new Na(.75,.95,.28,8),dh));e.position.y=.14;let t=mh(new W(new as(.62,.05,8,28).rotateX(Math.PI/2),uh));t.position.y=.3,this.root.add(e,t),this.float=new V,this.float.position.y=1.2,this.coreMat=new gi({color:new H(.5,1.2,1.6)}),this.core=new W(new $o(.42,0),this.coreMat),this.core.scale.y=1.45;let n=new W(new $o(.56,0),new G({color:`#9fd8e6`,roughness:.15,metalness:.2,transparent:!0,opacity:.28}));n.scale.y=1.45,this.rings=[0,1,2].map(e=>{let t=mh(new W(new as(.82+e*.16,.022,6,48),uh));return this.float.add(t),t}),this.float.add(this.core,n),this.root.add(this.float),this.spin=0}update(e,t,n){let r=n*n*(3-2*n);this.spin+=e*(.4+r*2.6),this.float.position.y=1.1+r*.75+Math.sin(t*1.4)*.06,this.core.rotation.y=this.spin,this.rings.forEach((e,t)=>{e.rotation.x=Math.PI/2+Math.sin(this.spin*(.6+t*.2)+t*2.1)*(.25+r*.9),e.rotation.y=this.spin*(t%2?-.7:.9)+t});let i=.55+r*1.6+.2*Math.sin(t*3.1);this.coreMat.color.setRGB(.5*i,1.2*i,1.6*i),this.height=2.4+r*.75,this.root.rotation.y=this.yaw}},vh=class{constructor(){this.root=new V,this.yaw=0,this.height=2.9;for(let e=0;e<3;e++){let t=e/3*Math.PI*2,n=mh(new W(new Na(.04,.05,1.5,6),dh));n.position.set(Math.cos(t)*.45,.68,Math.sin(t)*.45),n.rotation.set(Math.sin(t)*.55,0,-Math.cos(t)*.55),this.root.add(n)}this.turret=new V,this.turret.position.y=1.4;let e=mh(new W(new Na(.16,.2,.3,10),uh));this.tilt=new V,this.tilt.position.y=.25;let t=mh(new W(new is(1.25,24,10,0,Math.PI*2,0,.62),new G({color:`#b9a888`,roughness:.5,metalness:.35,side:2})));t.rotation.x=-Math.PI/2,t.position.z=1.02;let n=new W(new Na(.015,.015,.7,5).rotateX(Math.PI/2).translate(0,0,.12),dh);this.feedMat=new gi({color:new H(1.6,.5,.2)});let r=new W(new is(.07,10,8),this.feedMat);r.position.z=.48,this.tilt.add(t,n,r),this.turret.add(e,this.tilt),this.root.add(this.turret),this.aim=0,this.sweep=Math.random()*6}update(e,t,n,r){let i=n*n*(3-2*n);this.sweep+=e*.25;let a=i>.4&&r!==null?r-this.yaw:Math.sin(this.sweep)*1.4;this.aim=hh(this.aim,a,e*(.5+i*1.4)),this.turret.rotation.y=this.aim,this.tilt.rotation.x=-(.75-i*.55)+Math.sin(t*.5)*.04;let o=i>.5?.6+.4*Math.sin(t*9):.35+.25*Math.sin(t*1.5);this.feedMat.color.setRGB(2.6*o,.8*o,.3*o),this.root.rotation.y=this.yaw}},yh=Math.PI/180,bh=3.6,xh=.95,Sh=.58,Ch=3.3,wh=1.45,Th=7.5,Eh=11.5,Dh=3.6,Oh=.42,kh=12,Ah=14,jh=new H(.14,.55,.5),Mh={experience:new H(3.4,1.4,.42),education:new H(.7,1.75,4),project:new H(.9,3,1.7),skills:new H(3,2.3,.9)},Nh={experience:new H(1,.52,.2),education:new H(.32,.62,1),project:new H(.4,1,.65),skills:new H(1,.8,.42)},Ph=new H(`#2a201b`),Fh=new H(`#463328`),Ih=new H(`#5c4434`),Lh=new H(`#c99560`);function Rh(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function zh(e,t,n,r){let i=new Aa(1,1,1,2,12,2),a=i.getAttribute(`position`),o=new R,s=e()*100,c=e()*100,l=(e()<.5?-1:1)*(.22+e()*.3),u=(e()-.5)*.1;for(let e=0;e<a.count;e++){o.fromBufferAttribute(a,e);let i=o.y+.5,d=1-.2*i,f=Mf(o.x*2.3+i*5.1+s,o.z*2.3+i*3.7+c)-.5,p=Mf(i*17+s,(o.x+o.z)*6.5+c)-.5,m=o.x*t*d*(1+f*.14)+u*i*n*.1,h=o.z*r*d*(1+p*.1),g=i*n;i>.999&&(g+=o.x*l),a.setXYZ(e,m,g,h)}i=i.toNonIndexed(),i.computeVertexNormals();let d=i.getAttribute(`position`),f=i.getAttribute(`normal`),p=new Float32Array(d.count*3),m=new H;for(let t=0;t<d.count;t+=3){let n=f.getY(t),r=(d.getY(t)+d.getY(t+1)+d.getY(t+2))/3,i=Math.sin(r*2.6+s)*.5+.5;m.copy(Ph).lerp(Fh,i).lerp(Ih,Math.max(0,Math.sin(r*6.1+c))*.3),m.multiplyScalar(.92+e()*.16),n>.55&&m.lerp(Lh,Math.min(1,(n-.55)*3)*.8),m.lerp(Lh,(1-Rh(0,.7,r))*.55);for(let e=0;e<3;e++)p[(t+e)*3]=m.r,p[(t+e)*3+1]=m.g,p[(t+e)*3+2]=m.b}return i.setAttribute(`color`,new Vr(p,3)),i}function Bh(e,t,n,r,i){e.beginPath(),t===`education`?e.arc(n,r,i*.85,0,Math.PI*2):t===`skills`?(e.moveTo(n,r-i),e.lineTo(n+i*.95,r+i*.7),e.lineTo(n-i*.95,r+i*.7),e.closePath()):t===`project`?e.rect(n-i*.75,r-i*.75,i*1.5,i*1.5):(e.moveTo(n,r-i),e.lineTo(n+i*.8,r),e.lineTo(n,r+i),e.lineTo(n-i*.8,r),e.closePath()),e.stroke()}function Vh(e,t){let n=document.createElement(`canvas`);n.width=64,n.height=384;let r=n.getContext(`2d`);r.strokeStyle=`#fff`,r.fillStyle=`#fff`,r.lineCap=`round`,r.lineJoin=`round`,r.lineWidth=3.5,Bh(r,t,32,30,14),r.globalAlpha=.4,r.lineWidth=1.6,r.beginPath(),r.moveTo(32,58),r.lineTo(32,368),r.stroke(),r.globalAlpha=1;let i=74;for(;i<358;){let t=e();if(r.lineWidth=2.4+e()*1.2,r.beginPath(),t<.28){let t=7+e()*15;r.moveTo(32-t,i),r.lineTo(32+t,i),r.stroke()}else if(t<.46){let t=7+e()*8;r.arc(32-t,i,2.6,0,Math.PI*2),r.moveTo(32+t+2.6,i),r.arc(32+t,i,2.6,0,Math.PI*2),r.fill()}else if(t<.64){let t=9+e()*8,n=e()<.5?-1:1;r.moveTo(32-t,i-n*5),r.lineTo(32,i+n*4),r.lineTo(32+t,i-n*5),r.stroke()}else if(t<.82){let t=e()<.5?-1:1,n=10+e()*10;r.moveTo(32,i),r.lineTo(32+t*n,i),r.lineTo(32+t*n,i+6),r.stroke()}else r.arc(32,i,4+e()*2,0,Math.PI*2),r.stroke();i+=17+e()*12}let a=new Ea(n);return a.colorSpace=ft,a.anisotropy=4,a}var Hh=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Uh=`
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;
uniform float uSeed;
varying vec2 vUv;
void main() {
  // Clamp the uvs: the scene is multisampled, so pixels on the column's edges are shaded
  // at their centres, just outside the quad, where the uvs run past 0..1. pow() of the
  // negative base there is NaN, and the bloom pass smears one NaN over the whole frame:
  // the screen flashed black.
  float x = min(abs(vUv.x * 2.0 - 1.0), 1.0);
  float core = pow(1.0 - x, 3.5);
  float y = clamp(vUv.y, 0.0, 1.0);
  float fade = smoothstep(0.0, 0.08, y) * pow(1.0 - y, 1.6);
  // slow bands of brighter light drifting up the column
  float drift = 0.78 + 0.22 * sin(y * 11.0 - uTime * 1.7 + uSeed * 6.0) * sin(y * 4.0 - uTime * 0.6 + uSeed);
  gl_FragColor = vec4(uColor, core * fade * drift * uOpacity);
}
`,Wh=class{constructor(e,t){this.scene=e,this.entries=t,this.group=new V,this.group.name=`waystones`,e.add(this.group),this.stoneMat=new G({vertexColors:!0,flatShading:!0,roughness:.78,metalness:.05}),this.plinthMat=new G({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0}),this.pebbleMat=new G({color:`#6a4a36`,flatShading:!0,roughness:.9}),this.pebbleGeo=new Ia(1,0),this.padMat=new G({color:`#5d4b3c`,flatShading:!0,roughness:.88,metalness:.05}),this.postMat=new G({color:`#2f2924`,roughness:.6,metalness:.5}),this.night=0,this.selectedId=null,this.thrum=0,this._c=new H;let n=Xp(24301);this.stones=t.map((e,t)=>e.kind===`project`?this._buildPad(e,t,n):this._build(e,t,n))}_build(e,t,n){let r=Mh[e.kind]?e.kind:`experience`,i=new V,a=e.scale||1;i.scale.setScalar(a);let o=Ch*(t===0?1.12:.92+n()*.16),s=new W(zh(n,xh,o,Sh),this.stoneMat);s.castShadow=!0,s.receiveShadow=!0;let c=new W(sm(n,1.75,.5,1.55,3),this.plinthMat);c.castShadow=!0,c.receiveShadow=!0,c.rotation.y=n()*Math.PI*2,i.add(c,s);let l=new gi({map:Vh(n,r),color:Mh[r].clone(),transparent:!0,depthWrite:!1}),u=new es(xh*.38,o*.68),d=Math.atan2(Sh/2*.2,o);for(let e of[1,-1]){let t=new W(u,l);t.position.set(0,o*.5,.301*e),t.rotation.set(-d*e,e>0?0:Math.PI,0),t.renderOrder=2,i.add(t)}let f=new ms({uniforms:{uColor:{value:Nh[r].clone()},uOpacity:{value:0},uTime:{value:0},uSeed:{value:n()*10}},vertexShader:Hh,fragmentShader:Uh,transparent:!0,depthWrite:!1,blending:2}),p=new W(new es(2.6,24).translate(0,12,0),f);p.renderOrder=6,p.frustumCulled=!1;let m=new $i(this.pebbleGeo,this.pebbleMat,12);return m.castShadow=!0,m.receiveShadow=!0,this.group.add(i,p,m),{entry:e,index:t,kind:r,h:o,root:i,shaft:p,shaftMat:f,glyphMat:l,pebbles:m,scale:a,radius:wh*a,wake:bh+(a-1)*1.5,autoRot:(n()-.5)*.6,x:0,z:0,y:0,found:!1,glow:1,pulse:0,moteAcc:0}}_buildPad(e,n,r){let i=new V,a=new W(new Na(Dh,3.9,.6,8),this.padMat);a.position.y=.12,a.castShadow=!0,a.receiveShadow=!0;let o=e.category?new H(t(e.category).color).multiplyScalar(.62):jh.clone(),s=new gi({color:o.clone()}),c=new W(new ts(Dh*.73,Dh*.76,48).rotateX(-Math.PI/2),s);c.position.y=.432,i.add(a,c);let l=new mo;l.moveTo(-.32,0),l.lineTo(0,-.34),l.lineTo(.32,0),l.lineTo(.22,.02),l.lineTo(0,-.2),l.lineTo(-.22,.02),l.closePath();let u=new ns(l).rotateX(-Math.PI/2);for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4,n=new W(u,s);n.position.set(Math.cos(t)*Dh*.88,.432,Math.sin(t)*Dh*.88),n.rotation.y=-t-Math.PI/2,i.add(n)}let d=[],f=new is(.09,10,8),p=new Na(.05,.07,.5,8);for(let e=0;e<8;e++){let t=e/8*Math.PI*2+Math.PI/8,n=new W(p,this.postMat);n.position.set(Math.cos(t)*3.65,.6699999999999999,Math.sin(t)*3.65),n.castShadow=!0;let r=new gi({color:o.clone()}),a=new W(f,r);a.position.set(n.position.x,.97,n.position.z),i.add(n,a),d.push(r)}let m=e.model||{type:`pod`,scale:1,yaw:0,y:0,lift:!0},h={ornithopter:Xm,rover:gh,core:_h,dish:vh},g=h[m.type]?new h[m.type]:m.type===`glb`&&m.src?new lh(m.src,{lift:m.lift}):new Zm;return g.root.scale.setScalar(m.scale),g.root.position.y=Oh+m.y,g.yaw=m.yaw*yh,g.root.rotation.y=g.yaw,i.add(g.root),this.group.add(i),{entry:e,index:n,kind:`project`,h:g.height,root:i,model:g,modelScale:m.scale,canLift:m.lift,flies:g instanceof Xm||g instanceof lh,lineColor:o,lineMat:s,bulbs:d,lift:0,scale:1,autoRot:0,radius:3.75,wake:6.2,x:0,z:0,y:0,found:!1,glow:1,pulse:0,moteAcc:0,dustAcc:0}}byId(e){return this.stones.find(t=>t.entry.id===e)||null}layout(e,t,n,r){let i=Af(),a=Xp((Math.floor(i.x*31+i.z*17)^2654435769)>>>0);this.spawn={x:e,z:t};let o=[];for(let n of this.stones){if(!n.entry.place)continue;let r=e+n.entry.place.dx,i=t+n.entry.place.dz;o.push({x:r,z:i}),n.kind===`project`?this._placePad(n,r,i):this._place(n,r,i)}let s=this.stones.filter(e=>e.kind!==`project`&&!e.entry.place),c=this.stones.filter(e=>e.kind===`project`&&!e.entry.place);this._path(s,e,t,n,Th,Eh,3.2,7.5,0,o,r,a,(e,t,n)=>this._place(e,t,n)),this._path(c,e,t,n+Math.PI,kh,Ah,5.6,11,3,o,r,a,(e,t,n)=>this._placePad(e,t,n))}_path(e,t,n,r,i,a,o,s,c,l,u,d,f){let p={x:0,z:0},m=t,h=n,g=t,_=n,v=r,y=0;e.forEach((e,r)=>{r>0&&(y+=(d()-.5)*.7,y*=.7,v+=y+(d()-.5)*.35);let b=r===0?i:a,x=null;for(let e=0;e<6&&(!x||x.score>=10);e++){let r=m+Math.cos(v)*(b+e*s*.6),i=h+Math.sin(v)*(b+e*s*.6);for(let e=0;e<=3;e++){let a=e===0?1:10;for(let d=0;d<a;d++){let f=d/a*Math.PI*2+e*.4,m=r+Math.cos(f)*e*1.6,h=i+Math.sin(f)*e*1.6;Vf(m,h,p);let g=Math.hypot(p.x,p.z)*(1+c)+e*.06;if(c){let e=[0,1,2,3].map(e=>Ff(m+Math.cos(e*1.571)*Dh,h+Math.sin(e*1.571)*Dh));g+=(Math.max(...e)-Math.min(...e))*.4}u&&u(m,h,o)&&(g+=10),Math.hypot(m-t,h-n)<6&&(g+=10);for(let e of l)Math.hypot(m-e.x,h-e.z)<s&&(g+=10);(!x||g<x.score)&&(x={x:m,z:h,score:g})}}}v=Math.atan2(x.z-_,x.x-g),m=g=x.x,h=_=x.z,l.push({x:m,z:h}),f(e,m,h)})}_place(e,t,n){let r=Xp(Zp(e.entry.id)),i=Ff(t,n);for(let e=0;e<10;e++){let r=e/10*Math.PI*2;i=Math.min(i,Ff(t+Math.cos(r)*1.2,n+Math.sin(r)*1.2))}e.x=t,e.z=n,e.y=i,e.root.position.set(t,i-.3*e.scale,n),e.root.rotation.y=e.entry.place?e.entry.place.rot*yh:e.autoRot,e.root.children[0].position.y=.32,e.shaft.position.set(t,i+e.h*.55*e.scale,n);let a=new B,o=new rn,s=new In,c=new R,l=new R;for(let i=0;i<e.pebbles.count;i++){let u=r()*Math.PI*2,d=1.55+r()**1.4*1.8,f=t+Math.cos(u)*d,p=n+Math.sin(u)*d,m=.05+r()**2.5*.26;l.set(f,Ff(f,p)-m*.2,p),s.set(r()*3,r()*3,r()*3),o.setFromEuler(s),c.set(m*(.8+r()*.6),m*(.5+r()*.4),m*(.8+r()*.6)),a.compose(l,o,c),e.pebbles.setMatrixAt(i,a)}e.pebbles.instanceMatrix.needsUpdate=!0,e.pebbles.computeBoundingSphere()}_placePad(e,t,n){let r=0,i=-1/0;for(let e=0;e<12;e++){let a=e/12*Math.PI*2,o=Ff(t+Math.cos(a)*Dh,n+Math.sin(a)*Dh);r+=o,i=Math.max(i,o)}let a=Math.min(i-.15,r/12+.25);e.x=t,e.z=n,e.y=a,e.root.position.set(t,a,n),e.root.rotation.y=e.entry.place?e.entry.place.rot*yh:0}moveSite(e,t,n){e.kind===`project`?this._placePad(e,t,n):this._place(e,t,n)}turnSite(e,t){e.root.rotation.y=t*yh}siteRotation(e){return Math.round(e.root.rotation.y/yh%360*10)/10}siteOf(e){for(let t=e;t;t=t.parent){let e=this.stones.find(e=>e.root===t);if(e)return e}return null}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(let e of t)e.map&&e.map.dispose(),e.dispose()});for(let e of this.stones)e.model&&e.model.dispose&&e.model.dispose()}anchor(e,t){return e.kind===`project`?t.set(e.x,e.y+Oh+e.model.height*e.modelScale+.5,e.z):t.set(e.x,e.y+e.h*e.scale+.9,e.z)}approachPoint(e,t,n){let r=t-e.x,i=n-e.z,a=Math.hypot(r,i)||1,o=e.radius+1;return{x:e.x+r/a*o,z:e.z+i/a*o}}collide(e,t,n){for(let r of this.stones){let i=e.x-r.x,a=e.z-r.z,o=Math.hypot(i,a),s=r.radius+t;if(o<s&&o>1e-4){let t=i/o,c=a/o;if(e.x=r.x+t*s,e.z=r.z+c*s,n){let e=n.x*t+n.z*c;e<0&&(n.x-=e*t,n.z-=e*c)}}}}nearStone(e,t,n=2){for(let r of this.stones)if(Math.hypot(e-r.x,t-r.z)<r.radius+n)return!0;return!1}awaken(e,t,n,r){e.pulse=1;let i=e.kind===`project`?Dh:1.4;t.burst(e.x,e.y+.3,e.z,70,2.4,r,{radius:i,dust:.6,puff:.9,grow:1.3}),n.stamp(ep.RING,e.x,e.z,0,i*4.6,i*4.6,0,.035,.9);let a=this._c.copy(Mh[e.kind]).multiplyScalar(.7);for(let n=0;n<70;n++){let n=Math.random()*Math.PI*2,r=i*.6+Math.random()*2.2;t.spawn(Wp.SPICE,e.x+Math.cos(n)*r,e.y+.2+Math.random()*(e.h+1.5),e.z+Math.sin(n)*r,-Math.sin(n)*1.2,0,Math.cos(n)*1.2,.04+Math.random()*.05,2.5+Math.random()*3,a,.95,{drag:.6})}}update(e,t,n){let{px:r,pz:i,camYaw:a,focusX:o,focusZ:s,viewR:c,night:l,particles:u,tint:d}=n;this.night+=(+!!l-this.night)*(1-Math.exp(-e*.8));let f=null,p=1/0,m=1/0,h=0;for(let n of this.stones){let l=Math.hypot(r-n.x,i-n.z);l-n.wake<m&&(m=l-n.wake,p=l,f=n);let g=+(this.selectedId===n.entry.id);n.pulse=Math.max(0,n.pulse-e*.45);let _=Math.hypot(n.x-o,n.z-s)<c+8;if(n.kind===`project`){h=Math.max(h,this._updatePad(n,e,t,l,g,_,r,i,u,d));continue}let v=1-Rh(2.5,10,l),y=(n.found?.8:1)+v*.45+g*.35+n.pulse*2.2;n.glow+=(y-n.glow)*(1-Math.exp(-e*4));let b=.93+.07*Math.sin(t*2.1+n.index*1.7)*Math.sin(t*.77+n.index);n.glyphMat.color.copy(Mh[n.kind]).multiplyScalar(n.glow*b),n.shaft.rotation.y=a;let x=n.shaftMat.uniforms;x.uTime.value=t;let S=n.found?.2:.5;if(x.uOpacity.value=(S+g*.25+n.pulse*.9)*(1+this.night*.7),_&&u){n.moteAcc+=e*(n.found?2.5:6)*(1+g);let t=this._c.copy(Mh[n.kind]).multiplyScalar(.55);for(;n.moteAcc>=1;){--n.moteAcc;let e=Math.random()*Math.PI*2,r=.7+Math.random()*1.6;u.spawn(Wp.SPICE,n.x+Math.cos(e)*r,n.y+.3+Math.random()*n.h,n.z+Math.sin(e)*r,0,0,0,.035+Math.random()*.035,2.5+Math.random()*2.5,t,.8,{drag:.5})}}else n.moteAcc=0}return this.thrum=h,{stone:f,dist:p,rel:m}}_updatePad(e,t,n,r,i,a,o,s,c,l){let u=e.canLift&&r<11?1:0;e.lift+=(u-e.lift)*(1-Math.exp(-t*(u>e.lift?.8:.5))),e.lift<.001&&(e.lift=0),e.model.update(t,n,e.lift,Math.atan2(o-e.x,s-e.z)),e.h=e.model.height;let d=.75+(1-Rh(3,14,r))*.35+i*.25+e.pulse*.8;e.lineMat.color.copy(e.lineColor).multiplyScalar(d);for(let t=0;t<e.bulbs.length;t++){let r=.5+.5*Math.sin(n*1.4-t*.785);e.bulbs[t].color.copy(e.lineColor).multiplyScalar(.45+.75*r*d)}if(e.flies&&a&&c&&l&&e.lift>.15){e.dustAcc+=t*26*e.lift;let n=this._c.copy(c.dustColor).multiply(l);for(;e.dustAcc>=1;){--e.dustAcc;let t=Math.random()*Math.PI*2,r=3.8000000000000003+Math.random()*.8,i=2+Math.random()*2.5*e.lift;c.spawn(Wp.DUST,e.x+Math.cos(t)*r,e.y+.15,e.z+Math.sin(t)*r,Math.cos(t)*i,.25,Math.sin(t)*i,.35+Math.random()*.4,1.6+Math.random(),n,.22,{grow:.9,drag:.7})}}else e.dustAcc=0;return e.flies?e.lift*Math.max(0,1-r/40):0}},Gh=e=>document.getElementById(e);function Kh(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r}var qh=`http://www.w3.org/2000/svg`;function Jh(e,t,n){let r=document.createElementNS(qh,`svg`);return r.setAttribute(`viewBox`,e),r.setAttribute(`aria-hidden`,`true`),r.setAttribute(`class`,t),r.innerHTML=n,r}var Yh={experience:`<path d="M6 1 L11 6 L6 11 L1 6Z"/>`,education:`<circle cx="6" cy="6" r="4.6"/>`,skills:`<path d="M6 1.4 L10.9 10.2 L1.1 10.2Z"/>`,project:`<rect x="1.8" y="1.8" width="8.4" height="8.4"/>`};function Xh(e){return Jh(`0 0 12 12`,`mark`,Yh[e]||Yh.experience)}var Zh={mail:`<path d="M4 6.5h16v11H4z"/><path d="M4.5 7l7.5 6 7.5-6"/>`,linkedin:`<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 10.5v5.5M8.5 7.9v.1M12 16v-5.5M12 13.2c0-1.7 1-2.8 2.3-2.8s2.2 1 2.2 2.8V16"/>`,github:`<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.6 5.5 2.9 5.5 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>`,globe:`<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z"/>`,external:`<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>`,pdf:`<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 16.5h6"/>`,plain:`<path d="M5 6h14M5 10h14M5 14h10M5 18h7"/>`};function Qh(e){return Jh(`0 0 24 24`,`icon`,Zh[e]||Zh.external)}function $h(e,t,n,i){let a=Kh(`a`,`codex-link`);return a.href=r(e),/^https?:/.test(e)&&(a.target=`_blank`,a.rel=`noreferrer noopener`),a.title=i||t,a.append(Qh(n),Kh(`span`,null,t)),a}function eg(e){return e.icon===`mail`?`Email`:e.icon===`linkedin`?`LinkedIn`:e.icon===`github`?`GitHub`:e.label}function tg({profile:e,site:t}){let n=[];for(let t of e.links||[])n.push($h(t.href,eg(t),t.icon,t.label));return t.pdf&&n.push($h(a(t.pdf),`PDF`,`pdf`,`Download the résumé as a PDF`)),t.plain&&n.push($h(t.plain,`Plain`,`plain`,`A plain, text-first version of this résumé`)),n}var ng=class{constructor({profile:e,site:t,entries:n,handlers:r}){this.entries=n,this.handlers=r,this.items=new Map,this.labels=new Map,this.currentId=null,this.source=null,this.found=new Set,this.root=Gh(`codex`),this.head=Gh(`codexHead`),this.body=Gh(`codexBody`),this.foundEl=Gh(`codexFound`),this.bar=Gh(`codexBar`),this.head.addEventListener(`click`,()=>this.toggleCollapsed()),window.innerWidth<=760&&this.toggleCollapsed(!0),this.dossier=Gh(`dossier`),this.ds={mark:Gh(`dsMark`),kind:Gh(`dsKind`),years:Gh(`dsYears`),title:Gh(`dsTitle`),org:Gh(`dsOrg`),period:Gh(`dsPeriod`),body:Gh(`dsBody`),pos:Gh(`dsPos`)},Gh(`dsClose`).addEventListener(`click`,()=>r.close()),this.expanded=!1,this.expandBtn=Gh(`dsExpand`),this.grip=Gh(`dsGrip`);let i=!1,a=()=>{if(i)return void(i=!1);this.setExpanded(!this.expanded)};this.expandBtn.addEventListener(`click`,a),this.grip.addEventListener(`click`,a);let o=null,s=this.dossier.querySelector(`.ds-head`);for(let e of[this.grip,s])e.addEventListener(`pointerdown`,e=>{window.innerWidth>760||e.target.closest(`.ds-close`)||(o=e.clientY)});window.addEventListener(`pointerup`,e=>{if(o===null)return;let t=e.clientY-o;o=null,t<-28?(i=!!(e.target.closest&&e.target.closest(`.ds-grip, .ds-expand`)),this.setExpanded(!0)):t>36&&(i=!!(e.target.closest&&e.target.closest(`.ds-grip, .ds-expand`)),this.expanded?this.setExpanded(!1):r.close())}),window.addEventListener(`pointercancel`,()=>o=null),Gh(`dsPrev`).addEventListener(`click`,()=>r.step(-1)),Gh(`dsNext`).addEventListener(`click`,()=>r.step(1));for(let e of[`dsClose`,`dsPrev`,`dsNext`])Gh(e).addEventListener(`mouseup`,e=>e.currentTarget.blur());this.labelLayer=Gh(`labels`),this.setContent({profile:e,site:t,entries:n})}setContent({profile:e,site:n,entries:r}){this.entries=r;let i=this.handlers;this.body.replaceChildren();for(let e of this.labels.values())e.el.remove();this.items.clear(),this.labels.clear(),Gh(`codexTotal`).textContent=String(r.length);let a=new Map,o=new Map,c=e=>{let n=a.get(e.kind);if(e.kind!==`project`)return n;let r=e.category||``;if(!o.has(r)){let e=Kh(`div`,`codex-sub`),i=Kh(`div`,`codex-sub-label`,r);i.style.setProperty(`--k`,t(r).color),e.append(i),o.set(r,{sub:e,label:i}),n.append(e)}return o.get(r).sub},l=e=>[e.kind===`project`&&e.category?e.category:e.org,e.years].filter(Boolean).join(` · `);for(let e of r){if(!a.has(e.kind)){let t=Kh(`div`,`codex-group`);t.append(Kh(`div`,`codex-group-label`,s[e.kind]?.group||e.kind)),a.set(e.kind,t),this.body.append(t)}let n=Kh(`button`,`ci kind-${e.kind}`);n.type=`button`,n.dataset.id=e.id;let r=Kh(`span`,`ci-main`);r.append(Kh(`span`,`ci-title`,e.title),Kh(`span`,`ci-org`,e.kind===`project`?e.years||e.org:l(e))),e.category&&n.style.setProperty(`--k`,t(e.category).color);let o=Kh(`span`,`ci-dir`);o.setAttribute(`aria-hidden`,`true`);let u=Kh(`i`,`ci-arrow`,`➤`),d=Kh(`span`,`ci-dist`,``);o.append(u,d),n.append(Xh(e.kind),r,o),n.addEventListener(`click`,()=>i.select(e.id)),n.addEventListener(`mouseup`,()=>n.blur()),c(e).append(n),this.items.set(e.id,{button:n,arrow:u,dist:d,lastDist:-1,lastAngle:99});let f=Kh(`button`,`wl kind-${e.kind}`);f.type=`button`,f.tabIndex=-1,f.dataset.id=e.id;let p=Kh(`span`,`wl-org`);p.append(Xh(e.kind),Kh(`span`,null,l(e))),e.category&&f.style.setProperty(`--k`,t(e.category).color),f.append(p,Kh(`span`,`wl-title`,e.title)),f.addEventListener(`click`,()=>i.select(e.id)),this.labelLayer.append(f),this.labels.set(e.id,{el:f,x:0,y:0,a:-1})}for(let[e,t]of o)e||(t.label.textContent=o.size>1?`Other`:``),t.label.hidden=!t.label.textContent||o.size===1&&!e;Gh(`codexLinks`).replaceChildren(...tg({profile:e,site:n}));let u=[...this.found].filter(e=>this.items.has(e));this.found.clear(),this.foundEl.textContent=`0`,this.bar.style.width=`0%`;for(let e of u)this.setFound(e);let d=this.currentId;if(d){let e=r.find(e=>e.id===d);e?this.open(e,this.source,!0):this.close()}}toggleCollapsed(e){let t=e??!this.root.classList.contains(`collapsed`);this.root.classList.toggle(`collapsed`,t),this.head.setAttribute(`aria-expanded`,String(!t))}get isOpen(){return this.currentId!==null}open(e,n,r=!1){let i=this.entries.indexOf(e);if(this.source=n,this.currentId===e.id&&!r)return;this.currentId=e.id;let c=this.ds;this.dossier.className=`dossier kind-${e.kind}${this.expanded?` expanded`:``}`,e.category?this.dossier.style.setProperty(`--k`,t(e.category).color):this.dossier.style.removeProperty(`--k`),c.mark.replaceChildren(Xh(e.kind)),c.kind.textContent=(s[e.kind]?.label||e.kind)+(e.category?` · ${e.category}`:``),c.years.textContent=e.years||``,c.title.textContent=e.title,c.org.textContent=e.org===(s[e.kind]?.label||e.kind)?``:e.org,c.period.textContent=[e.period,e.location].filter(Boolean).join(` · `),c.pos.textContent=`${i+1} / ${this.entries.length}`;let l=c.body;if(l.replaceChildren(),e.cover){let t=Kh(`figure`,`ds-cover`),n=Kh(`img`);n.src=a(e.cover),n.alt=e.coverAlt||``,n.decoding=`async`,t.append(n),l.append(t)}if(e.facts&&e.facts.length){let t=Kh(`dl`,`ds-facts`);for(let[n,r]of e.facts)t.append(Kh(`dt`,null,n),Kh(`dd`,null,r));l.append(t)}if(e.lede&&l.append(Kh(`p`,`ds-lede`,e.lede)),e.bullets.length){let t=Kh(`ul`,`ds-bullets`);for(let n of e.bullets)t.append(Kh(`li`,null,n));l.append(t)}if(e.body){let t=Kh(`div`,`ds-rich`);t.append(o(e.body)),l.append(t)}if(e.groups)for(let t of e.groups){l.append(Kh(`div`,`ds-label`,t.category));let e=Kh(`ul`,`ds-tags`);for(let n of t.items)e.append(Kh(`li`,null,n));l.append(e)}if(e.tags.length){l.append(Kh(`div`,`ds-label`,e.tagsLabel||`Tags`));let t=Kh(`ul`,`ds-tags`);for(let n of e.tags)t.append(Kh(`li`,null,n));l.append(t)}if(e.links&&e.links.length){let t=Kh(`div`,`ds-links`);for(let n of e.links)t.append($h(n.href,n.label,`external`));l.append(t)}l.scrollTop=0,document.body.classList.add(`reading`),this.dossier.setAttribute(`aria-hidden`,`false`),this.dossier.inert=!1,this.dossier.offsetWidth,this.dossier.classList.add(`open`);for(let[t,n]of this.items)n.button.classList.toggle(`current`,t===e.id);for(let[t,n]of this.labels)n.el.classList.toggle(`current`,t===e.id)}setExpanded(e){this.expanded=!!e,this.dossier.classList.toggle(`expanded`,this.expanded);let t=this.expanded?`Show less of this card`:`Show more of this card`;for(let e of[this.expandBtn,this.grip])e.setAttribute(`aria-expanded`,String(this.expanded)),e.setAttribute(`aria-label`,t)}sheetRect(){return this.isOpen?this.dossier.getBoundingClientRect():null}close(){if(this.isOpen){this.setExpanded(!1),this.currentId=null,this.source=null,this.dossier.classList.remove(`open`),this.dossier.setAttribute(`aria-hidden`,`true`),this.dossier.inert=!0,document.body.classList.remove(`reading`);for(let e of this.items.values())e.button.classList.remove(`current`);for(let e of this.labels.values())e.el.classList.remove(`current`)}}setFound(e){this.found.add(e),this.items.get(e)?.button.classList.add(`found`),this.labels.get(e)?.el.classList.add(`found`);let t=this.found.size;this.foundEl.textContent=String(t),this.bar.style.width=`${t/this.entries.length*100}%`,this.root.classList.toggle(`complete`,t===this.entries.length)}resetFound(){this.found.clear();for(let e of this.items.values())e.button.classList.remove(`found`);for(let e of this.labels.values())e.el.classList.remove(`found`);this.foundEl.textContent=`0`,this.bar.style.width=`0%`,this.root.classList.remove(`complete`)}update(e){let t=window.innerWidth,n=[...e].sort((e,t)=>e[0]===this.currentId?-1:t[0]===this.currentId?1:e[1].dist-t[1].dist),r=[];for(let[e,i]of n){let n=this.labels.get(e);if(n){let e=(n.w||160)/2,a=Math.min(t-e-4,Math.max(e+4,i.sx)),o=i.alpha;if(o>.02){let t={x0:a-e,x1:a+e,y0:i.sy-52,y1:i.sy-10};r.some(e=>t.x0<e.x1&&t.x1>e.x0&&t.y0<e.y1&&t.y1>e.y0)?o=0:r.push(t)}n.vis=n.vis===void 0?o:n.vis+(o-n.vis)*.2;let s=Math.round(n.vis*100)/100;s!==n.a&&(n.a<=.02&&s>.02&&(n.w=n.el.offsetWidth),n.a=s,n.el.style.opacity=String(s),n.el.style.visibility=s>.02?`visible`:`hidden`),(Math.abs(a-n.x)>.25||Math.abs(i.sy-n.y)>.25)&&(n.x=a,n.y=i.sy,n.el.style.transform=`translate3d(${a.toFixed(1)}px, ${i.sy.toFixed(1)}px, 0) translate(-50%, -100%)`)}let a=this.items.get(e);if(a){let e=i.here?0:Math.round(i.dist);e!==a.lastDist&&(a.lastDist=e,a.dist.textContent=i.here?`here`:`${e} m`,a.button.classList.toggle(`here`,i.here)),Math.abs(i.angle-a.lastAngle)>.02&&(a.lastAngle=i.angle,a.arrow.style.transform=`rotate(${i.angle.toFixed(3)}rad)`)}}}},rg=new H(1.5,.8,.32),ig=new H(.35,1.1,.95);function ag(e){let{canvas:t,camera:r,scene:i,cam:a,pickGround:o}=e,s=new Map,c=(e,...t)=>(s.get(e)||[]).forEach(e=>e(...t)),l=new R,u=e.getSpawn();l.set(u.x,q(u.x,u.z),u.z),a.heightTarget=36;let d=null,f=null,p=!0,m=null,h=null,g=new ts(1,1.1,72).rotateX(-Math.PI/2),_=new W(g,new gi({color:rg,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1})),v=new W(g,new gi({color:16777215,transparent:!0,opacity:.35,depthWrite:!1,depthTest:!1}));_.renderOrder=v.renderOrder=20,_.visible=v.visible=!1,i.add(_,v);let y=new W(new ts(.85,1.05,48).rotateX(-Math.PI/2),new gi({color:ig,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1}));y.renderOrder=19,i.add(y);let b=new V;i.add(b);let x=document.getElementById(`labels`),S=(e,t)=>{let n=document.createElement(`div`);return n.className=`edit-label ${t}`,n.textContent=e,x.append(n),n},C=S(`Visitors start here`,`start`),w=S(`First view · desktop`,`frame`),T=S(`First view · phone`,`frame`);function E(){b.clear();let t=e.getSpawn(),n=e.startYaw,r=new R(Math.cos(n),0,-Math.sin(n)),i=new R(-Math.sin(n),0,-Math.cos(n)),o=10/Math.sin(a.pitch),s=[];for(let[e,n]of[[1.6,16767144],[.46,10479836]]){let a=20*e/2,c=[],l=[[-a,-o],[a,-o],[a,o],[-a,o],[-a,-o]];for(let e=0;e<4;e++){let[n,a]=l[e],[o,s]=l[e+1];for(let e=0;e<=24;e++){let l=e/24,u=n+(o-n)*l,d=a+(s-a)*l,f=t.x+r.x*u+i.x*d,p=t.z+r.z*u+i.z*d;c.push(new R(f,q(f,p)+.15,p))}}let u=new fa(new ti().setFromPoints(c),new ys({color:n,dashSize:.8,gapSize:.5,transparent:!0,opacity:.75,depthTest:!1}));u.computeLineDistances(),u.renderOrder=18,b.add(u);let d=t.x+r.x*-a+i.x*o,f=t.z+r.z*-a+i.z*o;s.push(new R(d,q(d,f),f))}b.userData.corners=s}E();let D=new Yc,O=new L;function k(t){let n=e.getWaystones();O.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),D.setFromCamera(O,r);let i=D.intersectObjects(n.stones.map(e=>e.root),!0);for(let e of i){let t=n.siteOf(e.object);if(t)return t}let a=o(t.clientX,t.clientY);if(!a)return null;let s=null,c=1/0;for(let e of n.stones){let t=Math.hypot(a.x-e.x,a.z-e.z);t<e.radius+.8&&t<c&&(c=t,s=e)}return s}let A=t=>t?e.getWaystones().byId(t):null;function ee(t){let n=e.getSpawn();return{dx:Math.round((t.x-n.x)*100)/100,dz:Math.round((t.z-n.z)*100)/100,rot:e.getWaystones().siteRotation(t)}}t.style.cursor=`default`,t.addEventListener(`contextmenu`,e=>e.preventDefault()),t.addEventListener(`pointerdown`,e=>{t.focus(),t.setPointerCapture(e.pointerId),h=null;let n=e.button===0&&!e.shiftKey?k(e):null;if(n){ne(n.entry.id,!0);let t=o(e.clientX,e.clientY);m={mode:`move`,id:n.entry.id,ox:t?n.x-t.x:0,oz:t?n.z-t.z:0,sx:e.clientX,sy:e.clientY,moved:!1}}else m={mode:e.button===2||e.shiftKey?`orbit`:`pan`,lx:e.clientX,ly:e.clientY,sx:e.clientX,sy:e.clientY,moved:!1}}),t.addEventListener(`pointermove`,n=>{if(!m){let e=k(n);f=e?e.entry.id:null,t.style.cursor=e?`grab`:`default`;return}if(!m.moved&&Math.hypot(n.clientX-m.sx,n.clientY-m.sy)<4)return;if(m.moved=!0,m.mode===`move`){let r=A(m.id),i=o(n.clientX,n.clientY);r&&i&&e.getWaystones().moveSite(r,i.x+m.ox,i.z+m.oz),t.style.cursor=`grabbing`;return}let r=n.clientX-m.lx,i=n.clientY-m.ly;if(m.lx=n.clientX,m.ly=n.clientY,m.mode===`orbit`){a.yawTarget-=r*.006,a.yaw=a.yawTarget;return}let s=a.height/window.innerHeight,c=a.yaw;l.x-=Math.cos(c)*r*s-Math.sin(c)*i*s/Math.sin(a.pitch),l.z-=-Math.sin(c)*r*s-Math.cos(c)*i*s/Math.sin(a.pitch),l.y=q(l.x,l.z),t.style.cursor=`move`});let te=()=>{if(m){if(m.mode===`move`&&m.moved){let e=A(m.id);e&&c(`place`,m.id,ee(e))}else m.mode===`pan`&&!m.moved&&ne(null,!0);m=null,t.style.cursor=`default`}};t.addEventListener(`pointerup`,te),t.addEventListener(`pointercancel`,te),t.addEventListener(`wheel`,e=>{e.preventDefault(),a.heightTarget=nn.clamp(a.heightTarget*Math.exp(e.deltaY*.0012),8,90)},{passive:!1}),window.addEventListener(`keydown`,t=>{let n=t.target;if(n&&(n.tagName===`INPUT`||n.tagName===`TEXTAREA`))return;if(t.metaKey||t.ctrlKey){let e=t.key.toLowerCase(),n=e===`z`?t.shiftKey?`redo`:`undo`:e===`y`?`redo`:e===`s`?`save`:e===`enter`?`publish`:null;n&&(t.preventDefault(),c(`shortcut`,n));return}let r=A(d),i=e.getWaystones(),o=t.shiftKey?2:.5;switch(t.code){case`KeyQ`:a.yawTarget-=Math.PI/4;break;case`KeyE`:a.yawTarget+=Math.PI/4;break;case`Escape`:ne(null,!0);break;case`KeyF`:r&&oe.focusOn(r.entry.id);break;case`KeyC`:oe.showCard(!p),c(`card`,p);break;case`BracketLeft`:case`BracketRight`:if(!r)break;i.turnSite(r,i.siteRotation(r)+(t.code===`BracketLeft`?-1:1)*(t.shiftKey?5:15)),c(`place`,r.entry.id,ee(r));break;case`Minus`:case`Equal`:if(!r)break;c(`scale`,r.entry.id,t.code===`Minus`?1/1.1:1.1);break;case`Delete`:case`Backspace`:r&&c(`delete`,r.entry.id);break;case`ArrowLeft`:case`ArrowRight`:case`ArrowUp`:case`ArrowDown`:{if(!r)break;t.preventDefault();let e=a.yaw,n=t.code===`ArrowRight`?1:t.code===`ArrowLeft`?-1:0,s=t.code===`ArrowUp`?1:t.code===`ArrowDown`?-1:0;i.moveSite(r,r.x+(Math.cos(e)*n-Math.sin(e)*s)*o,r.z+(-Math.sin(e)*n-Math.cos(e)*s)*o),c(`place`,r.entry.id,ee(r));break}default:return}});function ne(t,n){let r=t!==d;d=t,A(t)&&p?e.openCard(t):e.closeCard(),n&&r&&c(`select`,t)}let re=new R,ie=(e,t)=>{re.copy(t).project(r);let n=(re.x*.5+.5)*window.innerWidth,i=(-re.y*.5+.5)*window.innerHeight;e.style.transform=`translate3d(${n.toFixed(1)}px, ${i.toFixed(1)}px, 0) translate(-50%, -140%)`};function ae(t,n){if(h){let e=1-Math.exp(-t*5);l.lerp(h,e),l.distanceTo(h)<.05&&(h=null)}let r=A(d);if(_.visible=!!r,r){let e=r.radius+.7;_.scale.set(e,1,e),_.position.set(r.x,r.y+.2,r.z),_.material.opacity=.75+.15*Math.sin(n*2.4)}let i=A(f);if(v.visible=!!i&&f!==d&&!m,v.visible){let e=i.radius+.55;v.scale.set(e,1,e),v.position.set(i.x,i.y+.2,i.z)}let a=e.getSpawn();y.position.set(a.x,q(a.x,a.z)+.12,a.z),ie(C,y.position);let o=b.userData.corners;o&&(ie(w,o[0]),ie(T,o[1]))}let oe={setContent(t,r){n(r),e.applyContent(t),E(),d&&!A(d)?ne(null,!1):d&&p&&e.openCard(d)},select(e){ne(e,!1),e&&oe.focusOn(e)},focusOn(e){let t=A(e);t&&(h=new R(t.x,t.y,t.z))},focusStart(){let t=e.getSpawn();h=new R(t.x,q(t.x,t.z),t.z),a.heightTarget=24},placeOf(e){let t=A(e);return t?ee(t):null},selected(){return d},viewCenter(){let t=e.getSpawn();return{dx:Math.round((l.x-t.x)*100)/100,dz:Math.round((l.z-t.z)*100)/100}},showCard(t){p=!!t,p&&A(d)?e.openCard(d):e.closeCard()},setTime(t){e.setTimeOfDay(t)},zoom(e){a.heightTarget=nn.clamp(e,8,90)},zoomBy(e){a.heightTarget=nn.clamp(a.heightTarget*e,8,90)},cardShown(){return p},on(e,t){s.has(e)||s.set(e,[]),s.get(e).push(t)}};return{api:oe,focus:l,update:ae}}var og=`arrakis.games.best`;function sg(){try{return JSON.parse(localStorage.getItem(og))||{}}catch{return{}}}function cg(e){try{localStorage.setItem(og,JSON.stringify(e))}catch{}}var lg=Math.PI*2;function ug(e,t){return((t-e+Math.PI)%lg+lg)%lg-Math.PI}function dg(e,t,n,r,i,a=48){let o=new ts(n,r,a,1).rotateX(-Math.PI/2),s=q(e,t),c=o.getAttribute(`position`);for(let n=0;n<c.count;n++)c.setY(n,q(e+c.getX(n),t+c.getZ(n))-s+.05);let l=new W(o,new gi({color:i,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!0}));return l.position.set(e,s,t),l.renderOrder=4,l}var fg=new is(.2,16,12),pg=new gi({color:new H(3.2,1.45,.35)});function mg(){let e=new W(fg,pg);return e.renderOrder=3,e}var hg=class{constructor(e,t){let n=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r};this.root=n(`div`,`gamehud`),this.root.hidden=!0,this.root.setAttribute(`role`,`status`),this.root.setAttribute(`aria-live`,`polite`);let r=n(`div`,`gh-bar`);this.title=n(`div`,`gh-title`),this.score=n(`div`,`gh-score`),this.leave=n(`button`,`gh-leave`,`Leave`),this.leave.type=`button`,this.leave.title=`Leave the game (Esc)`,this.leave.addEventListener(`click`,()=>e()),r.append(this.title,this.score,this.leave),this.center=n(`div`,`gh-center`),this.msg=n(`div`,`gh-msg`),this.sub=n(`div`,`gh-sub`),this.center.append(this.msg,this.sub),this.hint=n(`div`,`gh-hint`),this.pad=n(`div`,`gh-pad`),this.root.append(r,this.center,this.hint,this.pad),document.body.append(this.root),this.onTouch=t}show(e){this.title.textContent=e,this.root.hidden=!1,this.setScore(``),this.message(``,``)}hide(){this.root.hidden=!0,this.pad.replaceChildren()}setScore(e){this.score.textContent!==e&&(this.score.textContent=e)}message(e,t=``){this.msg.textContent=e,this.sub.textContent=t,this.center.classList.toggle(`on`,!!(e||t))}setHint(e){this.hint.textContent=e}buttons(e){this.pad.replaceChildren(...e.map(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`gh-btn gh-${e.id} ${e.cls||``}`,t.textContent=e.label,t.setAttribute(`aria-label`,e.aria||e.label);let n=n=>{n.preventDefault(),t.classList.add(`down`),this.onTouch(e.id,!0)},r=n=>{n.preventDefault(),t.classList.contains(`down`)&&(t.classList.remove(`down`),this.onTouch(e.id,!1))};return t.addEventListener(`pointerdown`,n),t.addEventListener(`pointerup`,r),t.addEventListener(`pointerleave`,r),t.addEventListener(`pointercancel`,r),t.addEventListener(`contextmenu`,e=>e.preventDefault()),t}))}},gg=new R,_g=class{constructor(e,{kicker:t,title:n,verb:r=`play`},i){this.verb=r,this.el=document.createElement(`button`),this.el.type=`button`,this.el.className=`wl kind-game`,this.el.tabIndex=-1;let a=document.createElement(`span`);a.className=`wl-org`;let o=document.createElement(`i`);o.className=`gl-dot`,this.kicker=document.createElement(`span`),this.kicker.textContent=t,a.append(o,this.kicker);let s=document.createElement(`span`);s.className=`wl-title`,s.textContent=n,this.prompt=document.createElement(`span`),this.prompt.className=`gl-prompt`,this.el.append(a,s,this.prompt),this.el.addEventListener(`click`,()=>i()),e.append(this.el),this.alpha=-1,this.near=null}setKicker(e){this.kicker.textContent!==e&&(this.kicker.textContent=e)}setNear(e,t){e!==this.near&&(this.near=e,this.el.classList.toggle(`near`,e),this.prompt.textContent=e?t?`Tap to ${this.verb}`:`Press Space to ${this.verb}`:``)}update(e,t,n){let r=window.innerWidth,i=window.innerHeight;gg.copy(e).project(t);let a=(gg.x*.5+.5)*r,o=(-gg.y*.5+.5)*i,s=Math.min(a,r-a,o-50,i-20-o),c=n&&gg.z<1?Math.min(1,Math.max(0,s/70)):0;c!==this.alpha&&(this.alpha=c,this.el.style.opacity=c.toFixed(3),this.el.style.visibility=c>.01?`visible`:`hidden`),c>.01&&(this.el.style.transform=`translate3d(${a.toFixed(1)}px, ${o.toFixed(1)}px, 0) translate(-50%, -100%)`)}dispose(){this.el.remove()}},vg=.42,yg=.1,bg=180,xg=8,Sg=30,Cg=new H(`#b98a5c`),wg=new H(`#7d5536`),Tg=class{constructor(e){this.ctx=e,this.group=new V,this.group.name=`worm-pit`,e.scene.add(this.group),this.center=new R,this.startPoint=new R,this.anchor=new R,this.radius=11.6;let t=new Na(.1,.3,1,6,1).translate(0,.5,0);this.posts=new $i(t,new G({color:`#8a6a52`,roughness:.95,flatShading:!0}),Sg),this.posts.castShadow=!0,this.posts.receiveShadow=!0,this.group.add(this.posts),this.ring=null,this.body=new $i(new is(1,14,10),new G({roughness:.82}),bg),this.body.castShadow=!0,this.body.receiveShadow=!0,this.body.count=0,this.body.frustumCulled=!1;for(let e=0;e<bg;e++)this.body.setColorAt(e,e%3==2?wg:Cg);this.head=new V;let n=new W(new is(.46,18,14),new G({color:Cg,roughness:.8}));n.scale.set(1,.9,1.1),n.castShadow=!0;let r=new W(new as(.3,.07,8,20),new G({color:`#e0b58c`,roughness:.6}));r.position.z=.44;let i=new W(new Ma(.29,20),new gi({color:`#2a0d06`}));i.position.z=.455;let a=new W(new Ma(.12,12),new gi({color:new H(1.8,.7,.25)}));a.position.z=.46,this.head.add(n,r,i,a);for(let e=0;e<8;e++){let t=new W(new Pa(.035,.13,5),new G({color:`#f3e3c8`,roughness:.4})),n=e/8*lg;t.position.set(Math.cos(n)*.24,Math.sin(n)*.24,.47),t.rotation.set(Math.PI/2,0,n-Math.PI/2),this.head.add(t)}this.head.visible=!1,this.group.add(this.body,this.head),this.orb=mg(),this.orb.visible=!1,this.group.add(this.orb),this.path=[],this.len=xg,this.lenTarget=xg,this.left=!1,this.right=!1,this.steer=null,this.view={focus:new R,yaw:null,pitch:nn.degToRad(55),height:20},this.rng=Xp(Math.random()*4294967295>>>0)}place(e,t,n){this.center.set(e,q(e,t),t),this.out=n;let r=new B,i=new rn,a=new In,o=new R,s=new R,c=Xp(Math.floor(e*13+t*7)>>>0);for(let n=0;n<Sg;n++){let l=n/Sg*lg+c()*.05,u=e+Math.cos(l)*9.35,d=t+Math.sin(l)*9.35,f=.8+c()*.9;s.set(u,q(u,d)-.15,d),a.set(Math.sin(l)*.14,c()*3,-Math.cos(l)*.14),i.setFromEuler(a),o.set(1+c()*.4,f,1+c()*.4),r.compose(s,i,o),this.posts.setMatrixAt(n,r)}this.posts.instanceMatrix.needsUpdate=!0,this.posts.computeBoundingSphere();let l=e-n[0]*11.2,u=t-n[1]*11.2;this.startPoint.set(l,q(l,u),u),this.ring&&(this.group.remove(this.ring),this.ring.geometry.dispose()),this.ring=dg(l,u,.75,.95,new H(1.6,.85,.3)),this.group.add(this.ring),this.anchor.set(e,this.center.y+3.2,t)}keepsClear(e,t,n){return Math.hypot(e-this.center.x,t-this.center.z)<this.radius+n}collide(){}idle(e,t){this.ring&&(this.ring.material.opacity=.55+.3*Math.sin(t*2.2))}reset(){this.heading=Math.atan2(this.out[0],this.out[1]),this.headX=this.center.x,this.headZ=this.center.z,this.path=[];let e=-Math.sin(this.heading),t=-Math.cos(this.heading),n=Math.ceil(bg*vg/yg);for(let r=n;r>=0;r--)this.path.push({x:this.headX+e*r*yg*.25,z:this.headZ+t*r*yg*.25});this.travel=0,this.len=xg,this.lenTarget=xg,this.rise=0,this.sink=0,this.left=this.right=!1,this.steer=null,this.speed=3.4,this.head.visible=!0,this.body.count=this.len,this._placeOrb()}_placeOrb(){for(let e=0;e<40;e++){let e=this.rng()*lg,t=Math.sqrt(this.rng())*7.2,n=this.center.x+Math.cos(e)*t,r=this.center.z+Math.sin(e)*t;if(!(Math.hypot(n-this.headX,r-this.headZ)<3)&&!this._onBody(n,r,1.2,0)){this.orbX=n,this.orbZ=r,this.orb.visible=!0;return}}this.orbX=this.center.x,this.orbZ=this.center.z}_at(e,t){let n=Math.max(0,e-this.travel)/yg,r=this.path.length-1,i=Math.min(r-1,Math.floor(n)),a=n-i,o=this.path[r-i],s=this.path[Math.max(0,r-i-1)];return t.x=o.x+(s.x-o.x)*a,t.z=o.z+(s.z-o.z)*a,t}_onBody(e,t,n,r){let i={x:0,z:0};for(let a=r;a<this.len;a++)if(this._at((a+1)*vg,i),Math.hypot(e-i.x,t-i.z)<n)return!0;return!1}key(e,t){if(e===`ArrowLeft`||e===`KeyA`)this.left=t;else if(e===`ArrowRight`||e===`KeyD`)this.right=t;else return!1;return!0}pointer(e,t){e===`up`?this.steer=null:t&&(this.steer={x:t.x,z:t.z})}touch(e,t){e===`left`&&(this.left=t),e===`right`&&(this.right=t)}step(e,t,n,r){let{particles:i,trails:a,audio:o,tint:s}=this.ctx;if(n===`ready`)this.rise=Math.min(1,this.rise+e*1.2);else if(n===`over`)this.sink=Math.min(1,this.sink+e*.9);else if(n===`play`){let t=+!!this.left-!!this.right;if(this.steer&&!t){let e=Math.atan2(this.steer.x-this.headX,this.steer.z-this.headZ),n=ug(this.heading,e);t=Math.abs(n)<.05?0:Math.sign(n)*Math.min(1,Math.abs(n)*2.5)}this.heading+=t*2.9*e;let n=Math.sin(this.heading),c=Math.cos(this.heading),l=this.speed*e,u=this.travel+l,d=this.path[this.path.length-1];for(this.headX+=n*l,this.headZ+=c*l;u>=yg;)u-=yg,d={x:d.x+n*yg,z:d.z+c*yg},this.path.push(d);this.travel=u;let f=Math.ceil(bg*vg/yg)+4;if(this.path.length>f&&this.path.splice(0,this.path.length-f),this.len<this.lenTarget&&(this.len=Math.min(this.lenTarget,this.len+e*8)),a.stamp(ep.FURROW,this.headX,this.headZ,Math.atan2(c,n),.9,.75,.05,.03,.8),Math.random()<e*14&&i.kick(this.headX,q(this.headX,this.headZ),this.headZ,n,c,this.speed,s()),Math.hypot(this.headX-this.orbX,this.headZ-this.orbZ)<.75&&(r.addScore(1),this.lenTarget=Math.min(179,this.lenTarget+3),this.speed=Math.min(6.4,this.speed+.12),i.burst(this.orbX,q(this.orbX,this.orbZ)+.3,this.orbZ,26,1.6,s(),{radius:.2,dust:.2}),o.blip(`pickup`),this._placeOrb()),Math.hypot(this.headX-this.center.x,this.headZ-this.center.z)>8.5||this._onBody(this.headX,this.headZ,.5,8))return i.burst(this.headX,q(this.headX,this.headZ)+.2,this.headZ,60,2.6,s(),{radius:.4,dust:.5}),o.blip(`die`),`crash`}return this._draw(t),null}_draw(e){let t=new B,n=new rn,r=new R,i=new R,a={x:0,z:0},o={x:0,z:0},s=this.sink*.9+(1-this.rise)*.7,c=Math.floor(this.len),l=new R(0,1,0);for(let u=0;u<c;u++){let d=(u+1)*vg;this._at(d,a),this._at(d+.2,o);let f=.36*(1-.55*(u/Math.max(1,c))**2),p=Math.sin(e*7-u*.7)*.04;i.set(a.x,q(a.x,a.z)+f*.35+p-s,a.z),n.setFromAxisAngle(l,Math.atan2(a.x-o.x,a.z-o.z)),r.set(f,f*.85,f*1.25),t.compose(i,n,r),this.body.setMatrixAt(u,t)}this.body.count=c,this.body.instanceMatrix.needsUpdate=!0,this.body.instanceColor&&(this.body.instanceColor.needsUpdate=!0);let u=q(this.headX,this.headZ);this.head.position.set(this.headX,u+.3-s,this.headZ),this.head.rotation.set(-.15+Math.sin(e*5)*.04,this.heading,0,`YXZ`),this.orb.visible&&this.orb.position.set(this.orbX,q(this.orbX,this.orbZ)+.45+Math.sin(e*3)*.08,this.orbZ)}updateView(e){let t=21.5,n=Math.max(t*Math.sin(this.view.pitch),t/e)*1.06,r=Math.min(n,28),i=n>r&&this.head.visible?.75:0;this.view.focus.set(this.center.x+(this.headX-this.center.x)*i,this.center.y+.4,this.center.z+(this.headZ-this.center.z)*i),this.view.height=r}walker(){return{hold:!0}}end(){this.head.visible=!1,this.body.count=0,this.orb.visible=!1,this.left=this.right=!1,this.steer=null}};e(Tg,`meta`,{id:`worm`,title:`Worm Pit`,kicker:`Game · Sandworm`,howto:`Swallow the spice to grow. Keep off the stones and your own tail.`,keys:`A / D or ← → to turn · or hold the mouse where to go · Esc to leave`,touchKeys:`Hold ◀ ▶ to turn, or touch where to go`,buttons:[{id:`left`,label:`◀`,aria:`Turn left`},{id:`right`,label:`▶`,aria:`Turn right`}]});var Eg=3.2,Dg=.45,Og=16,kg=26,Ag=2.2,jg=40,Mg=class{constructor(e){this.ctx=e,this.group=new V,this.group.name=`thopter-ride`,e.scene.add(this.group),this.pad=new R,this.startPoint=new R,this.anchor=new R,this.view={focus:new R,yaw:null,pitch:nn.degToRad(40),height:30};let t=new G({color:`#6f5240`,roughness:.92,flatShading:!0});this.padMesh=new W(new Na(Eg,3.45,1.4,10),t),this.padMesh.castShadow=!0,this.padMesh.receiveShadow=!0,this.padRing=new W(new ts(2.7,2.85,40).rotateX(-Math.PI/2),new gi({color:new H(1.6,.8,.3),transparent:!0,opacity:.8})),this.sock=new V;let n=new W(new Na(.04,.05,2.6,6).translate(0,1.3,0),new G({color:`#3b2a20`}));n.castShadow=!0,this.sockCloth=new W(new Pa(.22,1.1,10,1,!0).rotateZ(-Math.PI/2).translate(.55,0,0),new G({color:`#ff8a3d`,emissive:`#6a2405`,side:2})),this.sockCloth.position.y=2.45,this.sock.add(n,this.sockCloth),this.thopter=new Xm,this.group.add(this.padMesh,this.padRing,this.sock,this.thopter.root),this.ring=null,this.keys=new Set,this.steer=null,this.lift=0}place(e,t,n){this.out=n,this.far=[n[1],-n[0]];let r=1/0;for(let n=0;n<10;n++){let i=n/10*Math.PI*2;r=Math.min(r,q(e+Math.cos(i)*Eg,t+Math.sin(i)*Eg))}this.pad.set(e,r+Dg,t),this.padMesh.position.set(e,this.pad.y-.7,t),this.padRing.position.set(e,this.pad.y+.02,t);let i=e+this.far[0]*4-n[0]*1.5,a=t+this.far[1]*4-n[1]*1.5;this.sock.position.set(i,q(i,a)-.1,a),this._park(e,t,this.pad.y,Math.atan2(n[0],n[1]))}_park(e,t,n,r){this.parked={x:e,z:t,y:n,yaw:r},this.x=e,this.z=t,this.y=n,this.vx=this.vz=0,this.yaw=r,this.lift=0;let i=this.thopter;i.yaw=r,i.root.position.set(e,n,t),i.root.rotation.set(0,r,0),i.body.rotation.set(0,0,0),i.update(0,0,0,null);let a=[Math.cos(r),-Math.sin(r)],o=Math.hypot(e-this.pad.x,t-this.pad.z)<1,s=o?5:4.2,c=o?[-this.out[0],-this.out[1]]:a,l=e+c[0]*s,u=t+c[1]*s;this.startPoint.set(l,q(l,u),u),this.ring&&(this.group.remove(this.ring),this.ring.geometry.dispose()),this.ring=dg(l,u,.75,.95,new H(1.6,.85,.3)),this.group.add(this.ring),this.anchor.set(e,n+4.4,t)}keepsClear(e,t,n){return Math.hypot(e-this.pad.x,t-this.pad.z)<6.2+n}collide(e,t,n){for(let[r,i,a]of[[this.pad.x,this.pad.z,3.4000000000000004],[this.parked.x,this.parked.z,1.6]]){let o=e.x-r,s=e.z-i,c=Math.hypot(o,s),l=a+t;if(c<l&&c>1e-4&&(e.x=r+o/c*l,e.z=i+s/c*l,n)){let e=(n.x*o+n.z*s)/c;e<0&&(n.x-=e*o/c,n.z-=e*s/c)}}}idle(e,t,n){this.ring&&(this.ring.material.opacity=.55+.3*Math.sin(t*2.2)),this.lift+=((n?.12:0)-this.lift)*(1-Math.exp(-e*2)),this.thopter.update(e,t,this.lift,null),this.sockCloth.rotation.y=Math.sin(t*.7)*.4+.6,this.sockCloth.rotation.z=Math.sin(t*2.3)*.08}reset(e){this.api=e,this.phase=`board`,this.keys.clear(),this.steer=null,this.climb=0,this.touchUp=this.touchDown=!1,this.alt=4.2,this.gs=q(this.x,this.z),this.spun=0}leave(){return this.phase!==`board`&&(this.phase!==`land`&&(this.phase=`land`,this.ctx.audio.blip(`clear`)),!0)}key(e,t){return e===`KeyL`?(t&&this.leave(),!0):[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`,`ShiftLeft`,`ShiftRight`,`KeyC`].includes(e)?(t?this.keys.add(e):this.keys.delete(e),!0):!1}pointer(e,t){e===`up`?this.steer=null:t&&(this.steer={x:t.x,z:t.z})}touch(e,t){e===`up`?this.touchUp=t:e===`down`?this.touchDown=t:e===`land`&&t&&this.leave()}_wish(){let e=this.keys,t=0,n=0;if((e.has(`KeyW`)||e.has(`ArrowUp`))&&(n+=1),(e.has(`KeyS`)||e.has(`ArrowDown`))&&--n,(e.has(`KeyD`)||e.has(`ArrowRight`))&&(t+=1),(e.has(`KeyA`)||e.has(`ArrowLeft`))&&--t,t||n){let e=Math.hypot(t,n),r=this.api.camYaw();return[(Math.cos(r)*t-Math.sin(r)*n)/e,(-Math.sin(r)*t-Math.cos(r)*n)/e]}if(this.steer){let e=this.steer.x-this.x,t=this.steer.z-this.z,n=Math.hypot(e,t);if(n>1.5)return[e/n*Math.min(1,n/10),t/n*Math.min(1,n/10)]}return[0,0]}step(e,t,n,r){let{particles:i,trails:a,tint:o}=this.ctx,s=this.thopter,c=q(this.x,this.z);if(this.phase===`board`)return this.lift=Math.min(1,this.lift+e*.8),s.update(e,t,this.lift,null),s.root.position.set(this.x,this.parked.y,this.z),s.root.rotation.set(0,this.yaw,0),this.y=this.parked.y+s.body.position.y,r.thrum(this.lift),n===`play`&&(this.phase=`fly`,this.alt=this.y-c+1.5,this.gs=c),this._hud(r,0),null;let l=[0,0],u=0;if(this.phase===`fly`){l=this._wish();let e=this.keys;u=(e.has(`Space`)||this.touchUp?1:0)-(e.has(`ShiftLeft`)||e.has(`ShiftRight`)||e.has(`KeyC`)||this.touchDown?1:0)}let d=Math.hypot(l[0],l[1]);this.spun=d>.9?Math.min(1,this.spun+e*.25):Math.max(0,this.spun-e*.6);let f=Og+10*this.spun,p=1-Math.exp(-e*(d>.01?1.4:.9));this.vx+=(l[0]*f-this.vx)*p,this.vz+=(l[1]*f-this.vz)*p,this.x+=this.vx*e,this.z+=this.vz*e;let m=Math.hypot(this.vx,this.vz),h=q(this.x,this.z);if(this.gs+=(h-this.gs)*(1-Math.exp(-e*1.2)),this.phase===`fly`){this.climb+=(u-this.climb)*(1-Math.exp(-e*4)),this.alt=Math.max(Ag,Math.min(jg,this.alt+this.climb*7*e));let t=Math.max(this.gs+this.alt,h+Ag);this.y+=(t-this.y)*(1-Math.exp(-e*2.2)),this.y=Math.max(this.y,h+1.4)}let g=0;if(m>1.2){let t=Math.atan2(this.vx,this.vz),n=ug(this.yaw,t);g=Math.max(-1,Math.min(1,n*2)),this.yaw+=n*(1-Math.exp(-e*2.4))}if(s.yaw=this.yaw,this.phase===`land`){let n=Math.hypot(this.x-this.pad.x,this.z-this.pad.z)<7;n&&(this.x+=(this.pad.x-this.x)*(1-Math.exp(-e*2)),this.z+=(this.pad.z-this.z)*(1-Math.exp(-e*2)));let i=n?this.pad.y:q(this.x,this.z),a=i+2.7;if(this.y+=(a-this.y)*(1-Math.exp(-e*1.8)),this.y-a<.35&&m<2.5)return this.lift=Math.max(0,this.lift-e*.9),s.update(e,t,this.lift,null),s.root.position.set(this.x,i,this.z),s.root.rotation.set(0,this.yaw,0),r.thrum(this.lift),this.lift<=0?(this._park(n?this.pad.x:this.x,n?this.pad.z:this.z,i,this.yaw),`done`):(this._hud(r,m),null)}s.update(e*(1+m/Og*.5+Math.max(0,this.climb)*.5),t,1,null),s.root.position.set(this.x,this.y-s.body.position.y,this.z),s.root.rotation.set(Math.min(.3,m/kg*.22)-this.climb*.08,this.yaw,-g*.35,`YXZ`),r.thrum(.7+Math.min(.3,m/kg*.3)+Math.max(0,this.climb)*.2);let _=this.y-h;if(_<7){let t=(1-_/7)*e*30;Math.random()<t&&i.burst(this.x,h+.1,this.z,4,1.1,o(),{radius:1.4,dust:.9,puff:.8,dustAlpha:.22}),_<4&&a.stamp(ep.DISTURB,this.x,this.z,0,6,6,.04*(1-_/4),0,.7)}return this._hud(r,m),null}_hud(e,t){let n=Math.max(0,Math.round(this.y-q(this.x,this.z)-1));e.setScore(0,this.phase===`land`?`Setting down…`:`${n} m up · ${Math.round(t*3.6)} km/h`)}walker(){return{hold:!0,hidden:!0}}updateView(e){let t=Math.max(0,this.y-(this.gs||this.y));this.view.height=Math.max(28,17/e)+t*.45,this.view.focus.set(this.x+this.vx*.7,(this.y+(this.gs??this.y))/2,this.z+this.vz*.7)}exitPoint(){return{x:this.startPoint.x,z:this.startPoint.z,yaw:Math.atan2(this.parked.x-this.startPoint.x,this.parked.z-this.startPoint.z)}}end(){this.keys.clear(),this.steer=null,this.phase===`board`?this._park(this.parked.x,this.parked.z,this.parked.y,this.parked.yaw):this.lift>0&&this._park(this.x,this.z,q(this.x,this.z),this.yaw)}};e(Mg,`meta`,{id:`ride`,title:`Thopter Ride`,kicker:`Vehicle · Ornithopter`,action:`Board the ornithopter`,verb:`board`,howto:`Fly anywhere. Set down wherever you like and step out; it waits for you.`,keys:`WASD or arrows to fly · Space to climb, Shift to drop · or hold the mouse where to go · L or Esc to land`,touchKeys:`Touch and hold where to go · ▲ ▼ to climb and drop · Land to step out`,buttons:[{id:`up`,label:`▲`,aria:`Climb`},{id:`land`,label:`Land`,aria:`Land and step out`,cls:`wide`},{id:`down`,label:`▼`,aria:`Drop`}],ready:1.8,noBest:!0});var Ng=new G({color:`#3a332c`,roughness:.55,metalness:.5}),Pg=new G({color:`#2b2622`,roughness:.5,metalness:.25});function Fg(e){return e.castShadow=!0,e.receiveShadow=!0,e}var Ig=class{constructor({hull:e=`#9a6a3c`,cloak:t=`#76614b`}={}){this.root=new V,this.body=new V,this.root.add(this.body),this.paint=new G({color:e,roughness:.45,metalness:.35}),this.cloth=new G({color:t,roughness:1,side:2});let n=Fg(new W(new ja(.26,1.5,6,14).rotateX(Math.PI/2),this.paint));n.scale.set(1.05,.72,1),n.position.y=.55;let r=Fg(new W(new Pa(.2,.6,10).rotateX(Math.PI/2),this.paint));r.position.set(0,.52,1.25);let i=Fg(new W(new Aa(.42,.12,1.6),Ng));i.position.y=.36;for(let e of[-1,1]){let t=Fg(new W(new Na(.12,.15,.75,10).rotateX(Math.PI/2),Ng));t.position.set(e*.34,.45,-.25);let n=Fg(new W(new Aa(.04,.36,.5),this.paint));n.position.set(e*.2,.84,-.78),n.rotation.set(-.35,0,e*.35),this.body.add(t,n)}let a=Fg(new W(new Na(.02,.02,.62,6).rotateZ(Math.PI/2),Ng));a.position.set(0,.86,.62);let o=Fg(new W(new Na(.025,.03,.3,6),Ng));o.position.set(0,.74,.66),o.rotation.x=-.4,this.glowMat=new gi({color:new H(1.6,.7,.25)});let s=new W(new Ma(.15,14),this.glowMat);s.position.set(0,.56,-1.04),s.rotation.y=Math.PI,this.cushionMat=new gi({color:new H(1.2,.75,.4),transparent:!0,opacity:.25,depthWrite:!1}),this.cushion=new W(new Ma(.55,18).rotateX(-Math.PI/2),this.cushionMat),this.cushion.scale.set(.8,1,1.8),this.cushion.position.y=.08,this.body.add(n,r,i,a,o,s,this.cushion);let c=new V;c.position.set(0,.78,.05);let l=Fg(new W(new ja(.15,.32,4,10),Pg));l.position.set(0,.25,.1),l.rotation.x=.95;let u=Fg(new W(new is(.12,12,10),Pg));u.position.set(0,.42,.38);let d=new W(new is(.07,8,6,0,Math.PI*2,0,Math.PI/2),new gi({color:new H(.25,.75,2.4)}));d.position.set(0,.42,.47),d.rotation.x=Math.PI/2,this.cape=Fg(new W(new Pa(.28,.75,10,1,!0),this.cloth)),this.cape.position.set(0,.2,-.15),this.cape.rotation.x=-1.25;for(let e of[-1,1]){let t=Fg(new W(new ja(.045,.36,4,8),Pg));t.position.set(e*.2,.2,.42),t.rotation.set(1.1,0,e*-.2);let n=Fg(new W(new ja(.06,.4,4,8),Pg));n.position.set(e*.22,-.05,-.05),n.rotation.x=1.3,c.add(t,n)}c.add(l,u,d,this.cape),this.rider=c,this.body.add(c),this.height=1.5}update(e,t,n,r=0){let i=Math.max(0,Math.min(1.4,n));this.body.position.y=.06*Math.sin(t*2.3)*(1-Math.min(1,i))+.025*Math.sin(t*23)*i,this.body.rotation.z=-r*.38*Math.min(1,i+.2),this.rider.rotation.z=r*.25,this.cape.rotation.x=-1.25-i*.35+Math.sin(t*14)*.05*i;let a=.6+i*2.6;this.glowMat.color.setRGB(1.6*a,.65*a,.22*a),this.cushionMat.opacity=.18+i*.22}},Lg=520;function Rg(e,t,n,r,i){let a=i*i,o=a*i;return .5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*a+(-e+3*t-3*n+r)*o)}function zg(e,t,n,r,i,a){let o=Math.atan2(r-t,n-e),s=a()*Math.PI*2,c=a()*Math.PI*2,l=.18+a()*.14,u=.08+a()*.1,d=e=>1+l*Math.sin(2*e+s)+u*Math.sin(3*e+c),f=a()<.5?1:-1,p=[];for(let n=0;n<11;n++){let r=n/11*Math.PI*2,s=d(r)/d(0)*(n===0?1:.94+a()*.12);s=Math.min(1.32,Math.max(.62,s))*i;let c=o+f*r;p.push({x:e+Math.cos(c)*s,z:t+Math.sin(c)*s})}p[0]={x:n,z:r};let m=[];for(let e=0;e<Lg;e++){let t=e/Lg*11,n=Math.floor(t),r=t-n,i=e=>p[((n+e)%11+11)%11];m.push({x:Rg(i(-1).x,i(0).x,i(1).x,i(2).x,r),z:Rg(i(-1).z,i(0).z,i(1).z,i(2).z,r),tx:0,tz:0,s:0,curv:0})}let h=0,g=0;for(let n=0;n<Lg;n++){let r=m[n],i=m[(n+1)%Lg];r.s=h,h+=Math.hypot(i.x-r.x,i.z-r.z),g=Math.max(g,Math.hypot(r.x-e,r.z-t))}let _=h;for(let e=0;e<Lg;e++){let t=m[(e-1+Lg)%Lg],n=m[(e+1)%Lg],r=Math.hypot(n.x-t.x,n.z-t.z)||1;m[e].tx=(n.x-t.x)/r,m[e].tz=(n.z-t.z)/r}let v=m.map((e,t)=>{let n=m[(t+4)%Lg],r=Math.atan2(e.tx*n.tz-e.tz*n.tx,e.tx*n.tx+e.tz*n.tz);return Math.abs(r)/(_/Lg)/4});for(let e=0;e<Lg;e++){let t=0;for(let n=-6;n<=6;n++)t+=v[(e+n+Lg)%Lg];m[e].curv=t/13}return{pts:m,length:_,maxR:g,cx:e,cz:t}}function Bg(e,t){let{pts:n,length:r}=e,i=(t%r+r)%r,a=0,o=n.length-1;for(;a<o;){let e=a+o+1>>1;n[e].s<=i?a=e:o=e-1}let s=n[a],c=n[(a+1)%n.length],l=(a+1===n.length?r:c.s)-s.s||1,u=(i-s.s)/l,d=s.tx+(c.tx-s.tx)*u,f=s.tz+(c.tz-s.tz)*u,p=Math.hypot(d,f)||1;return{x:s.x+(c.x-s.x)*u,z:s.z+(c.z-s.z)*u,tx:d/p,tz:f/p,curv:s.curv,i:a}}function Vg(e,t,n,r=-1){let{pts:i}=e,a=i.length,o=-1,s=1/0,c=e=>{let r=i[e],a=(r.x-t)**2+(r.z-n)**2;a<s&&(s=a,o=e)};if(r<0)for(let e=0;e<a;e++)c(e);else for(let e=-40;e<=40;e++)c(((r+e)%a+a)%a);let l=i[o],u=(t-l.x)*-l.tz+(n-l.z)*l.tx;return{i:o,s:l.s,dist:Math.sqrt(s),across:u}}var Hg=36,Ug=4.6,Wg=3,Gg=19,Kg=27,qg=9,Jg=18,Yg=72,Xg=[.27,.53,.78],Zg=.8,Qg=[{name:`Ferrin`,hull:`#5d7f8c`,cloak:`#3d4c55`,top:17.7,grip:10.5},{name:`Sabha`,hull:`#8c3f32`,cloak:`#5b3a2c`,top:18.2,grip:9.6},{name:`Okkam`,hull:`#c9a14a`,cloak:`#6d5a3b`,top:18.6,grip:9}],$g=[[-5,-2.2],[-5,2.2],[-10.5,-2.2],[-10.5,2.2]],e_=3;function t_(e){let t=Math.max(0,e),n=Math.floor(t/60),r=t-n*60;return`${n}:${r<10?`0`:``}${r.toFixed(1)}`}var n_=e=>`${e}${[`th`,`st`,`nd`,`rd`][e]||`th`}`,r_=class e{constructor(e){this.ctx=e,this.group=new V,this.group.name=`sand-race`,e.scene.add(this.group),this.startPoint=new R,this.anchor=new R,this.view={focus:new R,yaw:0,pitch:nn.degToRad(45),height:24},this.keys=new Set,this.held=new Set,this.steerTo=null,this.ring=null,this.roadMat=new G({color:`#4a2f1d`,roughness:1,transparent:!0,opacity:.3,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-2}),this.edgeMat=new gi({color:new H(1.5,.72,.28),transparent:!0,opacity:.55,depthWrite:!1,side:2}),this.road=new W(new ti,this.roadMat),this.edges=new W(new ti,this.edgeMat),this.road.renderOrder=this.edges.renderOrder=3,this.road.receiveShadow=!0,this.road.frustumCulled=this.edges.frustumCulled=!1;let t=new G({color:`#6f5240`,roughness:.9,flatShading:!0});this.posts=new $i(new Na(.12,.18,1.3,6).translate(0,.45,0),t,Yg),this.caps=new $i(new $o(.16,0).translate(0,1.22,0),new gi({color:new H(2.2,1,.3)}),Yg),this.posts.castShadow=!0,this.posts.frustumCulled=this.caps.frustumCulled=!1,this.arch=new V;let n=new gi({color:new H(2.4,1.2,.4)}),r=new G({color:`#2b211b`,roughness:.8});this.pillars=[-1,1].map(e=>{let n=new W(new Na(.3,.42,6,8).translate(0,2,0),t);return n.castShadow=!0,n.receiveShadow=!0,n.position.x=e*5.6,this.arch.add(n),n}),this.beam=new V;let i=new W(new Aa(12,.5,.5),r);i.castShadow=!0,this.beam.add(i);let a=10.799999999999999/12;for(let e=0;e<12;e++){let t=new W(new Aa(a,.32,.06),e%2?r:n);t.position.set(-4.6-.8+a*(e+.5),0,.28);let i=t.clone();i.position.z=-.28,this.beam.add(t,i)}this.beam.position.y=4.6,this.arch.add(this.beam);let o=new Uint8Array(128);for(let e=0;e<2;e++)for(let t=0;t<16;t++){let n=(e*16+t)*4;o.fill((t+e)%2?40:235,n,n+3),o[n+3]=255}let s=new Vi(o,16,2);s.magFilter=C,s.colorSpace=ft,s.needsUpdate=!0,this.line=new W(new es(2*Ug,1.1).rotateX(-Math.PI/2),new G({map:s,roughness:.9,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3})),this.line.renderOrder=4;let c=e=>{let t=new mo;return t.moveTo(-1,e-.45),t.lineTo(0,e+.45),t.lineTo(1,e-.45),t.lineTo(1,e+.1),t.lineTo(0,e+1),t.lineTo(-1,e+.1),t.closePath(),t},l=new ns([c(-1),c(.2)]).rotateX(Math.PI/2).scale(1.2,1,1.2);this.padMat=new gi({color:new H(.5,1.6,2.6),transparent:!0,opacity:.85,depthWrite:!1,side:2}),this.pads=Xg.map(()=>{let e=new W(l,this.padMat);return e.renderOrder=5,this.group.add(e),{mesh:e,x:0,z:0}}),this.riders=$g.map((e,t)=>{let n=t===e_?{name:`You`,hull:`#d0702c`,cloak:`#e3cfa6`,top:Gg,grip:10}:Qg[t],r=new Ig({hull:n.hull,cloak:n.cloak});return this.group.add(r.root),{...n,me:t===e_,slot:e,bike:r,x:0,z:0,y:0,yaw:0,pitch:0,speed:0,vx:0,vz:0,lane:e[1],laneT:e[1],progress:0,lastS:0,i:0,boost:0,finish:0,steer:0,stampAt:0,nextLane:0,bumped:0}}),this.me=this.riders[e_],this.group.add(this.road,this.edges,this.posts,this.caps,this.arch,this.line),this.racing=!1}place(e,t,n){this.out=n,this.sx=e,this.sz=t,this.cx=e+n[0]*Hg,this.cz=t+n[1]*Hg;let r=e-n[0]*7.8,i=t-n[1]*7.8;this.startPoint.set(r,q(r,i),i),this.ring&&(this.group.remove(this.ring),this.ring.geometry.dispose()),this.ring=dg(r,i,.75,.95,new H(1.6,.85,.3)),this.group.add(this.ring),this._build(Xp(Zp(`race:${Math.round(e)}:${Math.round(t)}`))),this._park()}_build(e){this.track=zg(this.cx,this.cz,this.sx,this.sz,Hg,e),this._map=null,this._paint();let t=this.track.length;this.pads.forEach((n,r)=>{let i=Bg(this.track,t*Xg[r]),a=(e()*2-1)*2.3;n.x=i.x-i.tz*a,n.z=i.z+i.tx*a,this._lay(n.mesh,n.x,n.z,i.tx,i.tz,1.6,.12)});let n=Bg(this.track,0),r=q(n.x,n.z);this.arch.position.set(n.x,r,n.z),this.arch.rotation.y=Math.atan2(n.tx,n.tz),this.pillarAt=this.pillars.map(e=>{let t=n.x+n.tz*e.position.x,i=n.z-n.tx*e.position.x;return e.position.y=q(t,i)-r-.9,[t,i,.45]}),this._lay(this.line,n.x,n.z,n.tx,n.tz,1,.09),this.anchor.set(this.sx,r+7.2,this.sz)}_lay(e,t,n,r,i,a,o){let s=q(t,n),c=q(t+r*a,n+i*a),l=q(t-r*a,n-i*a),u=q(t+i*a,n-r*a),d=q(t-i*a,n+r*a);e.position.set(t,Math.max(s,(c+l+u+d)/4)+o,n),e.rotation.set(-Math.atan((c-l)/(2*a)),Math.atan2(r,i),Math.atan((u-d)/(2*a)),`YXZ`)}_paint(){let{pts:e,length:t}=this.track,n=e.length,r=(e,t)=>q(e,t)+.07,i=new Float32Array(n*2*3),a=[];e.forEach((e,t)=>{for(let[n,a]of[[0,-1],[1,1]]){let o=e.x-e.tz*Ug*a,s=e.z+e.tx*Ug*a;i.set([o,r(o,s),s],(t*2+n)*3)}let o=(t+1)%n;a.push(t*2,o*2,t*2+1,t*2+1,o*2,o*2+1)});let o=new ti;o.setAttribute(`position`,new Vr(i,3)),o.setIndex(a),o.computeVertexNormals(),this.road.geometry.dispose(),this.road.geometry=o;let s=[],c=[];for(let t=0;t<n;t++){if(Math.floor(t/5)%2)continue;let i=e[t],a=e[(t+1)%n];for(let e of[-1,1]){let t=s.length/3;for(let t of[i,a])for(let n of[4.4799999999999995,4.72]){let i=t.x-t.tz*n*e,a=t.z+t.tx*n*e;s.push(i,r(i,a)+.01,a)}c.push(t,t+2,t+1,t+1,t+2,t+3)}}let l=new ti;l.setAttribute(`position`,new U(s,3)),l.setIndex(c),this.edges.geometry.dispose(),this.edges.geometry=l;let u=new B,d=new rn,f=new R(1,1,1),p=new R,m=Yg/2;for(let e=0;e<m;e++){let n=Bg(this.track,(e+.5)/m*t);for(let t of[-1,1]){let r=n.x-n.tz*5.3*t,i=n.z+n.tx*5.3*t;p.set(r,q(r,i)-.05,i),u.compose(p,d,f),this.posts.setMatrixAt(e*2+ +(t>0),u),this.caps.setMatrixAt(e*2+ +(t>0),u)}}this.posts.instanceMatrix.needsUpdate=!0,this.caps.instanceMatrix.needsUpdate=!0}mapPath(){return this._map||(this._map=this.track.pts.filter((e,t)=>t%8==0).map(e=>({x:e.x,z:e.z}))),this._map}_park(){for(let e of this.riders){let[t,n]=e.slot,r=Bg(this.track,t);e.x=r.x-r.tz*n,e.z=r.z+r.tx*n,e.y=q(e.x,e.z),e.yaw=Math.atan2(r.tx,r.tz),e.pitch=0,e.speed=e.vx=e.vz=0,e.lane=e.laneT=n,e.progress=t,e.lastS=(t+this.track.length)%this.track.length,e.i=r.i,e.boost=0,e.finish=0,e.steer=0,e.lap=1,this._pose(e,0,0)}}_pose(e,t,n){let r=e.bike;r.root.position.set(e.x,e.y,e.z),r.root.rotation.set(e.pitch,e.yaw,0,`YXZ`),r.update(t,n,e.speed/Gg,e.steer)}keepsClear(e,t,n){return Math.hypot(e-this.cx,t-this.cz)<58.8+n}corridor(e,t,n){let r=Math.hypot(e-this.cx,t-this.cz);return r>Hg*.5-Ug-n&&r<58.8+n}collide(e,t,n){let r=[...this.pillarAt];if(!this.racing)for(let e of this.riders)r.push([e.x,e.z,Zg]);for(let[i,a,o]of r){let r=e.x-i,s=e.z-a,c=Math.hypot(r,s),l=o+t;if(c<l&&c>1e-4&&(e.x=i+r/c*l,e.z=a+s/c*l,n)){let e=(n.x*r+n.z*s)/c;e<0&&(n.x-=e*r/c,n.z-=e*s/c)}}}idle(e,t){if(this.ring&&(this.ring.material.opacity=.55+.3*Math.sin(t*2.2)),this.padMat.opacity=.6+.3*Math.sin(t*3.1),!this.racing)for(let n of this.riders)n.bike.update(e,t,0,0)}reset(e){this.api=e,this._build(Xp(Qp())),this._park(),this.racing=!0,this.keys.clear(),this.held.clear(),this.steerTo=null,this.clock=0,this.time=0,this.said=``,this.flashT=0,this.back=0,this.offT=0,this.started=!1;for(let e of this.riders)e.nextLane=1+Math.random()*2,e.stampAt=0,e.bumped=0}key(e,t){return[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`,`ShiftLeft`,`ShiftRight`].includes(e)?(t?this.keys.add(e):this.keys.delete(e),!0):!1}pointer(e,t){e===`up`?this.steerTo=null:t&&(this.steerTo={x:t.x,z:t.z})}touch(e,t){t?this.held.add(e):this.held.delete(e)}_say(e,t=``,n=0){let r=`${e}|${t}`;r!==this.said&&(this.said=r,this.api.say(e,t)),this.flashT=n}step(t,n,r,i){this.clock+=t;let a=this.me,o=this.track.length;if(r===`ready`){let r=e.meta.ready-this.clock;r<3&&this._say(String(Math.max(1,Math.ceil(r))),``);for(let e of this.riders)e.steer=0,e.bike.update(t,n,.12+.08*Math.sin(n*9+e.slot[0]),0);return i.thrum(.3),this._hud(i),null}this.started||(this.started=!0,this._say(`Go!`,``,.9),this.ctx.audio.blip(`clear`)),this.flashT>0&&(this.flashT-=t,this.flashT<=0&&this._say(``));let s=r===`play`&&!a.finish;s&&(this.time+=t),this._ride(a,t,n,s);for(let e of this.riders)e.me||this._rival(e,t,n,r===`play`||r===`over`);this._bump(t);for(let e of this.riders)this._pose(e,t,n);if(i.thrum(.35+Math.min(.6,a.speed/Gg*.55)+(a.boost>0?.15:0)),s){let e=Math.min(Wg,Math.max(1,Math.floor(a.progress/o)+1));if(e>a.lap&&(a.lap=e,this._say(e===Wg?`Final lap`:`Lap ${e} of ${Wg}`,``,1.3),this.ctx.audio.blip(`clear`)),a.progress>=Wg*o)return a.finish=this.time,this.place=this._place(),this._hud(i),`finish`;this.back>1.2?this._say(`Wrong way`,`Turn around`,.5):this.offT>2.5&&this._say(``,`Back onto the course: deep sand is slow`,.5)}return this._hud(i),null}_ride(e,t,n,r){let{particles:i,audio:a,tint:o}=this.ctx,s=this.keys,c=this.held,l=(s.has(`KeyA`)||s.has(`ArrowLeft`)||c.has(`left`)?1:0)-(s.has(`KeyD`)||s.has(`ArrowRight`)||c.has(`right`)?1:0);!l&&this.steerTo&&Math.hypot(this.steerTo.x-e.x,this.steerTo.z-e.z)>1.2&&(l=Math.max(-1,Math.min(1,ug(e.yaw,Math.atan2(this.steerTo.x-e.x,this.steerTo.z-e.z))*2.5)));let u=s.has(`KeyS`)||s.has(`ArrowDown`)||c.has(`brake`),d=s.has(`Space`)||s.has(`ShiftLeft`)||s.has(`ShiftRight`),f=r&&!u?1:0,p=Vg(this.track,e.x,e.z,e.i);p.dist>10.6&&(p=Vg(this.track,e.x,e.z)),e.i=p.i;let m=Math.abs(p.across)>4.8999999999999995;this.offT=m&&r?this.offT+t:0;let h=Math.sin(e.yaw),g=Math.cos(e.yaw),_=e.vx*h+e.vz*g,v=e.vx*g-e.vz*h,y=e.boost>0?Kg:m?Gg*.55:Gg;_+=f*qg*t,_-=_*(m?.9:.16)*t,_>y&&(_+=(y-_)*(1-Math.exp(-t*1.6))),u&&(_=_>.3?Math.max(0,_-Jg*t):Math.max(-4,_-6*t)),!r&&!u&&(_=Math.max(0,_-5*t));let b=(q(e.x+h*1.5,e.z+g*1.5)-q(e.x-h*1.5,e.z-g*1.5))/3;_-=b*6*t;let x=2.4*Math.min(1,Math.abs(_)/5)/(1+Math.abs(_)/30)*(d?1.5:1);e.yaw+=l*x*t*Math.sign(_||1),v*=Math.exp(-t*(d?1.6:m?3.5:7));let S=Math.sin(e.yaw),C=Math.cos(e.yaw);e.vx=S*_+C*v,e.vz=C*_-S*v,e.x+=e.vx*t,e.z+=e.vz*t,e.speed=Math.hypot(e.vx,e.vz),e.steer+=(l*Math.min(1,e.speed/8)-e.steer)*(1-Math.exp(-t*6));let w=p.s-e.lastS;w>this.track.length/2&&(w-=this.track.length),w<-this.track.length/2&&(w+=this.track.length),p.dist<8.6&&Math.abs(w)<=e.speed*t*1.8+.3&&(e.progress+=w),e.lastS=p.s,this.back=w<-.01&&e.speed>3?this.back+t:Math.max(0,this.back-t*2),this._hover(e,t,b),this._boost(e)&&r&&a.blip(`pickup`),e.boost>0&&(e.boost-=t),this._spray(e,t,m||d&&Math.abs(v)>2,i,o)}_rival(e,t,n,r){let i=this.track.length,a=this.me;if(r){let n=0;for(let t of[0,7,14,22])n=Math.max(n,Bg(this.track,e.progress+t).curv);let r=Math.min(e.top,Math.sqrt(e.grip/Math.max(n,.001))),o=e.progress-a.progress;r*=Math.max(.9,Math.min(1.07,1-o*.004)),e.boost>0&&(r=Kg*.92),e.progress>=Wg*i&&(e.finish||(e.finish=this.time),r=Math.min(r,10)),e.speed=e.speed<r?Math.min(r,e.speed+qg*t):Math.max(r,e.speed-Jg*.5*t),e.nextLane-=t,e.nextLane<=0&&(e.nextLane=2+Math.random()*3,e.laneT=(Math.random()*2-1)*2.8);for(let t of this.riders){if(t===e)continue;let n=t.progress-e.progress,r=t.me?Vg(this.track,t.x,t.z,t.i).across:t.lane;n>0&&n<8&&Math.abs(r-e.lane)<1.9&&(e.laneT=Math.max(-3.3,Math.min(3.3,r+(e.lane>=r?2.3:-2.3))),Math.abs(e.laneT)>=3.3&&Math.abs(r-e.laneT)<1.9&&(e.speed=Math.min(e.speed,t.speed)))}e.lane+=(e.laneT-e.lane)*(1-Math.exp(-t*1.1)),e.progress+=e.speed*t}let o=Bg(this.track,e.progress),s=o.x-o.tz*e.lane,c=o.z+o.tx*e.lane,l=Math.atan2(o.tx,o.tz),u=ug(e.yaw,l);e.steer+=(Math.max(-1,Math.min(1,u/Math.max(t,.001)*.4))-e.steer)*(1-Math.exp(-t*5)),e.yaw=l;let d=(q(s+o.tx*1.5,c+o.tz*1.5)-q(s-o.tx*1.5,c-o.tz*1.5))/3;e.vx=(s-e.x)/Math.max(t,.001),e.vz=(c-e.z)/Math.max(t,.001),e.x=s,e.z=c,e.i=o.i,e.lap=Math.min(Wg,Math.max(1,Math.floor(e.progress/i)+1)),this._hover(e,t,d),this._boost(e),e.boost>0&&(e.boost-=t),r&&this._spray(e,t,!1,this.ctx.particles,this.ctx.tint)}_boost(e){if(e.boost>.3)return!1;for(let t of this.pads)if(Math.hypot(e.x-t.x,e.z-t.z)<1.9){if(e.boost=1.5,e.me){let t=Math.sin(e.yaw),n=Math.cos(e.yaw);e.vx+=t*4,e.vz+=n*4}else e.speed+=4;return this.ctx.particles.burst(t.x,q(t.x,t.z)+.3,t.z,18,1.4,new H(.6,1.4,2.2),{radius:.8,dust:.2}),!0}return!1}_hover(e,t,n){let r=q(e.x,e.z);e.y+=(r-e.y)*(1-Math.exp(-t*10)),e.y=Math.max(e.y,r-.05),e.pitch+=(-Math.atan(n)-e.pitch)*(1-Math.exp(-t*6))}_spray(e,t,n,r,i){if(e.speed<3)return;let a=Math.sin(e.yaw),o=Math.cos(e.yaw),s=q(e.x,e.z);Math.random()<t*(n?18:6+e.speed*.3)&&r.burst(e.x-a*1.2,s+.15,e.z-o*1.2,n?6:3,.7+e.speed*.04,i(),{radius:.5,dust:n?1:.6,puff:.6,dustAlpha:.2}),e.stampAt-=e.speed*t,e.stampAt<=0&&(e.stampAt=.9,this.ctx.trails.stamp(ep.DISTURB,e.x-a*.6,e.z-o*.6,Math.atan2(o,a),1.8,.9,.015,0,n?.7:.45))}_bump(e){let t=this.me;t.bumped-=e;for(let e of this.riders){if(e===t)continue;let n=t.x-e.x,r=t.z-e.z,i=Math.hypot(n,r),a=Zg*2;if(i>=a||i<1e-4)continue;let o=n/i,s=r/i;t.x+=o*(a-i),t.z+=s*(a-i);let c=t.vx*o+t.vz*s;c<0&&(t.vx-=c*o*1.3,t.vz-=c*s*1.3);let l=Bg(this.track,e.progress);e.lane-=(o*-l.tz+s*l.tx)*.6,e.laneT=e.lane,t.progress>e.progress?e.speed*=.9:(t.vx*=.9,t.vz*=.9),t.bumped<=0&&(t.bumped=.4,this.ctx.audio.blip(`hit`),this.ctx.particles.burst((t.x+e.x)/2,t.y+.5,(t.z+e.z)/2,14,1.4,this.ctx.tint(),{radius:.3,dust:.4}))}}_place(){let e=this.me,t=1;for(let n of this.riders)n!==e&&(n.finish&&(!e.finish||n.finish<e.finish)||!n.finish&&!e.finish&&n.progress>e.progress)&&t++;return t}_hud(e){let t=this.me,n=t.finish?this.place:this._place();e.setScore(0,`Lap ${t.lap}/${Wg} · ${n_(n)} of ${this.riders.length} · ${t_(this.time)}`)}result(){let e=this.me,t=null;for(let n of this.riders)!n.me&&n.finish&&n.finish<e.finish&&(!t||n.finish<t.finish)&&(t=n);return{score:Math.round(e.finish*10)/10,big:this.place===1?`You win!`:`${n_(this.place)} place`,line:`${t_(e.finish)} for ${Wg} laps${t?` · ${t.name} won`:``}`}}walker(){return{hold:!0,hidden:!0}}updateView(e){let t=this.me,n=Math.sin(t.yaw),r=Math.cos(t.yaw);this.view.yaw=Math.atan2(-n,-r),this.view.height=Math.max(24,13/e)+t.speed*.2;let i=4+t.speed*.25;this.view.focus.set(t.x+n*i,t.y+.6,t.z+r*i)}end(){this.keys.clear(),this.held.clear(),this.steerTo=null,this.racing=!1,this._park()}};e(r_,`meta`,{id:`race`,title:`Sand Race`,kicker:`Game · Sandbike race`,howto:`Three laps against three riders. Keep to the course (deep sand is slow) and ride over the blue arrows.`,keys:`A D or ← → to steer · S or ↓ to brake · Space to slide · or hold the mouse where to go · Esc to leave`,touchKeys:`It goes by itself · ◀ ▶ to steer, hold Brake to slow · or hold a finger where to go`,buttons:[{id:`left`,label:`◀`,aria:`Steer left`},{id:`brake`,label:`Brake`,aria:`Brake`,cls:`wide`},{id:`right`,label:`▶`,aria:`Steer right`}],ready:3.6,lowBest:!0,fmt:t_});var i_=1.6,a_=1.7,o_={worm:`The pit takes the worm`},s_=class{constructor(e){this.deps=e;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),n={pickup:12,jump:8,clear:18,hit:90,die:140},r={scene:e.scene,particles:e.particles,trails:e.trails,audio:{blip:r=>{if(e.audio.blip(r),this.touchMode&&!t.matches&&navigator.vibrate&&n[r])try{navigator.vibrate(n[r])}catch{}}},tint:e.tint,rockMaterial:e.rockMaterial};this.sites=[new Tg(r),new Mg(r),new r_(r)],this.byId=new Map(this.sites.map(e=>[e.constructor.meta.id,e])),this.best=sg(),this.touchMode=window.matchMedia(`(pointer: coarse)`).matches,this.hud=new hg(()=>this.requestLeave(),(e,t)=>{if(this.active){if(this.state===`over`&&t)return this.restart();this.active.touch(e,t)}}),this.play=document.createElement(`button`),this.play.type=`button`,this.play.className=`playbtn`,this.play.hidden=!0,this.play.addEventListener(`click`,()=>this.tryStart()),document.body.append(this.play),this.labels=new Map;for(let t of this.sites){let n=t.constructor.meta,r=new _g(e.labelLayer,n,()=>this._labelClick(t));this.labels.set(t,r),this._kicker(t)}this.active=null,this.state=`idle`,this.thrum=0,this.nearSite=null,this.hidden=new Set,this.lastPick=-1,this.api={player:e.player,teleport:(t,n,r)=>e.teleport(t,n,r,!1),setScore:(e,t)=>{this.score=e,this.hud.setScore(t)},addScore:e=>{this.score+=e,this.hud.setScore(`${this.score} spice`)},thrum:e=>this.thrum=e,say:(e,t=``)=>this.hud.message(e,t),camYaw:()=>e.camYaw?e.camYaw():0,portrait:()=>window.innerWidth/window.innerHeight<.85}}meta(e){return e.constructor.meta}_kicker(e){let t=this.meta(e),n=t.noBest?0:this.best[t.id];this.labels.get(e).setKicker(n?`${t.kicker} · best ${this._fmt(t,n)}`:t.kicker)}_fmt(e,t){return e.fmt?e.fmt(t):String(t)}layout(e,t,n,r={}){let i=n-Math.PI/2,a={worm:[i,28,0],ride:[i+.9,22,-.55],race:[i-.62,52,0]};this.spawn={x:e,z:t},this.hidden.clear();for(let n of this.sites){let i=this.meta(n).id,o=r&&r[i]||{};o.hidden&&this.hidden.add(n),n.group.visible=!o.hidden;let s,c,l,u=o.place,[d,f,p]=a[i];u&&Number.isFinite(u.dx)&&Number.isFinite(u.dz)?(s=e+u.dx,c=t+u.dz,l=(Number.isFinite(u.rot)?u.rot:0)*Math.PI/180):(s=e+Math.cos(d)*f,c=t+Math.sin(d)*f,l=p);let m=Math.atan2(c-t,s-e);n.place(s,c,[Math.cos(m+l),Math.sin(m+l)]),n.pos={x:s,z:c},n.turnDeg=l*180/Math.PI}}visible(){return this.sites.filter(e=>!this.hidden.has(e))}keepsClear(e,t,n){return this.visible().some(r=>r.keepsClear(e,t,n))}corridor(e,t,n){return this.visible().some(r=>r.corridor?r.corridor(e,t,n):r.keepsClear(e,t,n))}collide(e,t,n){for(let r of this.visible())r.collide(e,t,n)}editSites(){if(!this.handles){let e={worm:9.6,ride:3.8,race:5};this.handles=this.sites.map(t=>{let n=this.meta(t).id;return{kind:`game`,site:t,root:t.group,radius:e[n],entry:{id:`game:${n}`,title:this.meta(t).title},get x(){return t.pos.x},get z(){return t.pos.z},get y(){return t.startPoint.y}}})}return this.handles.filter(e=>!this.hidden.has(e.site))}editSite(e){return this.editSites().find(t=>t.entry.id===e)||null}editSiteOf(e){for(let t=e;t;t=t.parent){if(!t.visible)return null;let e=this.editSites().find(e=>e.root===t);if(e)return e}return null}_replace(e,t,n,r){let i=Math.atan2(n-this.spawn.z,t-this.spawn.x)+r*Math.PI/180;e.place(t,n,[Math.cos(i),Math.sin(i)]),e.pos={x:t,z:n},e.turnDeg=r}moveSite(e,t,n){this._replace(e.site,t,n,e.site.turnDeg||0)}turnSite(e,t){let n=((t+180)%360+360)%360-180;this._replace(e.site,e.site.pos.x,e.site.pos.z,n)}siteRotation(e){return Math.round((e.site.turnDeg||0)*10)/10}start(e){if(this.active||this.hidden.has(e))return;this.active=e;let t=this.meta(e);this.hud.show(t.title),this.hud.setHint(this.touchMode?t.touchKeys:t.keys),this.hud.buttons(this.touchMode?t.buttons:[]),this.deps.onStart(e),this._ready()}_ready(){let e=this.meta(this.active);this.state=`ready`,this.timer=e.ready??i_,this.score=0,this.newBest=!1,this.hud.setScore(``),this.hud.message(e.title,e.howto),this.active.reset(this.api)}restart(){this.state!==`over`||this.timer>0||this._ready()}requestLeave(){this.active&&(this.state===`play`&&this.active.leave&&this.active.leave()||this.stop())}stop(e=!1){let t=this.active;if(!t)return;t.end(this.api),this.hud.hide(),this.active=null,this.state=`idle`,this.thrum=0,this.deps.onEnd(t);let n=this.deps.player.pos,r=t.startPoint,i=t.exitPoint?t.exitPoint():{x:r.x,z:r.z,yaw:Math.atan2(t.pos.x-r.x,t.pos.z-r.z)};!e&&Math.hypot(n.x-i.x,n.z-i.z)>4&&this.deps.teleport(i.x,i.z,i.yaw,!0)}_over(e=null){let t=this.active,n=this.meta(t);this.state=`over`,this.timer=.7,e&&(this.score=e.score);let r=this.best[n.id];!n.noBest&&(r==null||(n.lowBest?this.score<r:this.score>r))&&(n.lowBest||this.score>0)&&(this.best[n.id]=this.score,cg(this.best),this.newBest=!0,this._kicker(t));let i=this.touchMode?`Tap to go again`:`Space to go again · Esc to leave`,a=this.newBest&&e?`a new best!`:`best ${this._fmt(n,this.best[n.id]||0)}`;e?this.hud.message(e.big,`${e.line} · ${a} · ${i}`):this.hud.message(this.newBest?`New best!`:o_[n.id]||`Game over`,`${this.hud.score.textContent||this.score} · ${a} · ${i}`)}key(e,t){return this.active?e.code===`Escape`?(t&&!e.repeat&&this.requestLeave(),!0):this.state===`over`?(t&&(e.code===`Space`||e.code===`Enter`)&&this.restart(),[`Space`,`Enter`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`KeyW`,`KeyA`,`KeyS`,`KeyD`].includes(e.code)):this.active.key(e.code,t):!1}pointer(e,t,n){return this.active?this.state===`over`?(e===`down`&&this.restart(),!0):(this.active.pointer(e,n,t),!0):!1}tryStart(){return this.active||!this.nearSite?!1:(this.start(this.nearSite),!0)}_labelClick(e){this.active||(this.nearSite===e?this.start(e):this.deps.travel(e.startPoint.x,e.startPoint.z))}next(e,t){let n=this.visible();if(!n.length)return null;let r;if(this.lastPick<0){r=0;let i=1/0;n.forEach((n,a)=>{let o=Math.hypot(n.startPoint.x-e,n.startPoint.z-t);o<i&&(i=o,r=a)})}else r=(this.lastPick+1)%n.length;return this.lastPick=r,n[r]}walker(){return this.active?this.active.walker(this.state,this.deps.player):null}freeView(){return!!this.active&&this.active.view.yaw===null}view(e){return this.active?(this.active.updateView(e,this.deps.player),this.active.view):null}update(e,t,{px:n,pz:r,entered:i,camera:a}){if(this.active){this.state===`ready`?(this.timer-=e,this.timer<=0&&(this.state=`play`,this.hud.message(``))):this.state===`over`&&(this.timer-=e);let n=this.active.step(e,t,this.state,this.api);n===`crash`&&this.state===`play`?this._over():n===`finish`&&this.state===`play`?this._over(this.active.result()):n===`done`&&this.stop()}else this.thrum+=(0-this.thrum)*(1-Math.exp(-e*3));let o=null;if(i&&!this.active)for(let e of this.visible())Math.hypot(n-e.startPoint.x,r-e.startPoint.z)<a_&&(o=e);if(o!==this.nearSite&&(this.play.hidden=!o,o)){let e=this.meta(o);if(this.play.replaceChildren(document.createTextNode(e.action||`Play ${e.title}`)),!this.touchMode){let e=document.createElement(`kbd`);e.textContent=`Space`,this.play.append(e)}}this.nearSite=o;for(let n of this.sites){n!==this.active&&n.idle(e,t,n===o);let r=this.labels.get(n);r.setNear(n===o,this.touchMode),r.update(n.anchor,a,i&&!this.active&&!this.hidden.has(n))}}},c_={experience:`#ffa25e`,education:`#8ccfff`,project:`#8fe3b5`,skills:`#f3d27e`},l_=`#ffc46b`,u_=448,d_=128,f_=u_/d_,p_=16,m_=e=>document.getElementById(e),h_=class{constructor({onPick:e}){this.onPick=e,this.root=m_(`mapw`),this.button=m_(`minimap`),this.canvas=m_(`minimapCanvas`),this.ctx=this.canvas.getContext(`2d`),this.full=m_(`mapFull`),this.fullCanvas=m_(`mapCanvas`),this.fctx=this.fullCanvas.getContext(`2d`),this.fullRadius=150,this.tile=null,this.pending=null,this.frame=0,this.hits=[],this.state=null,this.button.addEventListener(`click`,()=>this.open()),m_(`mapClose`).addEventListener(`click`,()=>this.close()),m_(`mapIn`).addEventListener(`click`,()=>this.zoomFull(1/1.4)),m_(`mapOut`).addEventListener(`click`,()=>this.zoomFull(1.4)),this.full.addEventListener(`click`,e=>{e.target===this.full&&this.close()}),window.addEventListener(`keydown`,e=>{this.isOpen&&e.code===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.close())},!0);let t=null;this.fullCanvas.addEventListener(`pointerdown`,e=>{t={x:e.clientX,y:e.clientY}}),this.fullCanvas.addEventListener(`pointerup`,e=>{if(!t||Math.hypot(e.clientX-t.x,e.clientY-t.y)>10)return void(t=null);t=null,this._tap(e)}),this.fullCanvas.addEventListener(`wheel`,e=>{e.preventDefault(),this.zoomFull(Math.exp(e.deltaY*.0015))},{passive:!1})}get isOpen(){return!this.full.hidden}open(){let e=this.state;if(e){let t=30;for(let n of e.stones)t=Math.max(t,Math.hypot(n.x-e.px,n.z-e.pz));for(let n of e.games){t=Math.max(t,Math.hypot(n.x-e.px,n.z-e.pz)+n.r);for(let r of n.path||[])t=Math.max(t,Math.hypot(r.x-e.px,r.z-e.pz))}this.fullRadius=Math.min(260,Math.max(45,t+14))}this.full.hidden=!1,document.body.classList.add(`mapping`),this._fitFull(),m_(`mapClose`).focus()}close(){this.full.hidden||(this.full.hidden=!0,document.body.classList.remove(`mapping`),this.button.focus())}zoomFull(e){this.fullRadius=Math.min(420,Math.max(45,this.fullRadius*e))}reset(){this.tile=null,this.pending=null}_fitFull(){let e=this.fullCanvas.getBoundingClientRect(),t=Math.min(2,window.devicePixelRatio||1),n=Math.round(e.width*t),r=Math.round(e.height*t);(this.fullCanvas.width!==n||this.fullCanvas.height!==r)&&(this.fullCanvas.width=n,this.fullCanvas.height=r)}_terrain(e,t){let n=e=>Math.round(e/32)*32;!this.pending&&(!this.tile||Math.hypot(e-this.tile.cx,t-this.tile.cz)>110)&&(this.pending={cx:n(e),cz:n(t),heights:new Float32Array(16384),row:0});let r=this.pending;if(!r)return;let i=r.cx-u_/2,a=r.cz-u_/2,o=Math.min(d_,r.row+p_);for(let e=r.row;e<o;e++)for(let t=0;t<d_;t++)r.heights[e*d_+t]=q(i+(t+.5)*f_,a+(e+.5)*f_);if(r.row=o,r.row<d_)return;let s=document.createElement(`canvas`);s.width=s.height=d_;let c=s.getContext(`2d`),l=c.createImageData(d_,d_),u=r.heights,d=1/0,f=-1/0;for(let e of u)e<d&&(d=e),e>f&&(f=e);let p=Math.max(1,f-d),m=(e,t)=>u[Math.min(127,Math.max(0,t))*d_+Math.min(127,Math.max(0,e))];for(let e=0;e<d_;e++)for(let t=0;t<d_;t++){let n=(m(t+1,e)-m(t-1,e))/(2*f_),r=(m(t,e+1)-m(t,e-1))/(2*f_),i=Math.max(0,Math.min(1,.62+(-n*.7-r*.7)*1.6)),a=(m(t,e)-d)/p,o=(e*d_+t)*4;l.data[o]=96+i*128+a*14,l.data[o+1]=60+i*92+a*8,l.data[o+2]=36+i*58,l.data[o+3]=255}c.putImageData(l,0,0),this.tile={cx:r.cx,cz:r.cz,canvas:s},this.pending=null}update(e){if(this.state=e,this.frame++,this._terrain(e.px,e.pz),this.isOpen)this._fitFull(),this.hits=[],this._draw(this.fctx,this.fullCanvas.width,this.fullCanvas.height,this.fullRadius,!0);else if(this.frame%3==0&&this.root.offsetParent!==null){let t=this.canvas.getBoundingClientRect(),n=Math.min(2,window.devicePixelRatio||1),r=Math.round(t.width*n);r>0&&this.canvas.width!==r&&(this.canvas.width=this.canvas.height=r),r>0&&this._draw(this.ctx,r,r,e.compactRadius,!1)}}_draw(e,n,r,i,a){let o=this.state,s=Math.min(2,window.devicePixelRatio||1),c=n/2,l=r/2,u=Math.min(n,r)/2/i,d=Math.cos(o.camYaw),f=Math.sin(o.camYaw),p=(e,t)=>c+u*((e-o.px)*d-(t-o.pz)*f),m=(e,t)=>l+u*((e-o.px)*f+(t-o.pz)*d);e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,n,r),this.labelBoxes=[],e.save(),a||(e.beginPath(),e.arc(c,l,Math.min(n,r)/2-1,0,Math.PI*2),e.clip()),e.fillStyle=`#6b4329`,e.fillRect(0,0,n,r);let h=this.tile;if(h){let t=h.cx-u_/2,n=h.cz-u_/2;e.save(),e.imageSmoothingEnabled=!0,e.setTransform(u*f_*d,u*f_*f,-u*f_*f,u*f_*d,p(t,n),m(t,n)),e.drawImage(h.canvas,0,0),e.restore()}e.fillStyle=`rgba(58, 32, 20, 0.85)`;for(let t of o.rocks){let i=p(t.x,t.z),a=m(t.x,t.z);i<-20||a<-20||i>n+20||a>r+20||(e.beginPath(),e.arc(i,a,Math.max(1.5*s,t.r*u),0,Math.PI*2),e.fill())}e.lineWidth=Math.max(1,1.4*s),e.setLineDash([3*s,4*s]);for(let t of o.paths)e.strokeStyle=t.color,e.beginPath(),t.points.forEach((t,n)=>n?e.lineTo(p(t.x,t.z),m(t.x,t.z)):e.moveTo(p(t.x,t.z),m(t.x,t.z))),e.stroke();e.setLineDash([]);for(let t of o.games){t.path&&t.path.length>2&&(e.strokeStyle=`rgba(255, 170, 90, 0.5)`,e.lineWidth=Math.max(1.5,9.2*u),e.lineJoin=`round`,e.beginPath(),t.path.forEach((t,n)=>n?e.lineTo(p(t.x,t.z),m(t.x,t.z)):e.moveTo(p(t.x,t.z),m(t.x,t.z))),e.closePath(),e.stroke());let n=p(t.x,t.z),r=m(t.x,t.z);e.strokeStyle=l_,e.lineWidth=Math.max(1,1.5*s),e.beginPath(),e.arc(n,r,Math.max(3.5*s,t.r*u),0,Math.PI*2),e.stroke(),e.fillStyle=l_,e.beginPath(),e.arc(p(t.sx,t.sz),m(t.sx,t.sz),2.2*s,0,Math.PI*2),e.fill(),a&&(this.hits.push({x:n,y:r,r:Math.max(16*s,t.r*u),pick:{type:`game`,id:t.id}}),this._label(e,t.title,n,r-Math.max(6*s,t.r*u)-5*s,l_,s))}let g=p(o.spawn.x,o.spawn.z),_=m(o.spawn.x,o.spawn.z);e.strokeStyle=`rgba(110, 230, 210, 0.9)`,e.lineWidth=Math.max(1,1.2*s),e.beginPath(),e.arc(g,_,3.5*s,0,Math.PI*2),e.stroke();for(let i of o.stones){let c=p(i.x,i.z),l=m(i.x,i.z);if(c<-30||l<-30||c>n+30||l>r+30)continue;let u=i.entry.id===o.current,d=(a?6:4.2)*s*(u?1.35:1);e.fillStyle=e.strokeStyle=i.entry.category?t(i.entry.category).color:c_[i.kind]||c_.experience,e.lineWidth=Math.max(1,1.5*s),u&&(e.save(),e.shadowColor=e.fillStyle,e.shadowBlur=8*s),this._glyph(e,i.kind,c,l,d),i.found?e.fill():e.stroke(),u&&e.restore(),a&&(this.hits.push({x:c,y:l,r:16*s,pick:{type:`stone`,id:i.entry.id}}),this._label(e,i.entry.title,c,l-d-5*s,`rgba(255, 241, 221, 0.92)`,s))}e.fillStyle=`#ff9a3d`;for(let t of o.spice||[])e.beginPath(),e.arc(p(t.x,t.z),m(t.x,t.z),(a?2.2:1.6)*s,0,Math.PI*2),e.fill();e.fillStyle=`#e8d9c2`,e.strokeStyle=`rgba(40, 18, 6, 0.8)`,e.lineWidth=s;for(let t of o.walkers||[])e.beginPath(),e.arc(p(t.x,t.z),m(t.x,t.z),(a?3.2:2.4)*s,0,Math.PI*2),e.fill(),e.stroke();let v=p(o.focus.x,o.focus.z),y=m(o.focus.x,o.focus.z);if(e.strokeStyle=`rgba(255, 241, 221, 0.5)`,e.lineWidth=Math.max(1,1*s),e.strokeRect(v-o.viewW*u/2,y-o.viewD*u/2,o.viewW*u,o.viewD*u),o.worm){let t=p(o.worm.x,o.worm.z),n=m(o.worm.x,o.worm.z);e.fillStyle=`rgba(255, 90, 54, ${.6+.4*Math.sin(this.frame*.25)})`,e.beginPath(),e.arc(t,n,4.5*s,0,Math.PI*2),e.fill()}let b=Math.atan2(Math.sin(o.yaw)*f+Math.cos(o.yaw)*d,Math.sin(o.yaw)*d-Math.cos(o.yaw)*f);e.save(),e.translate(c,l),e.rotate(b);let x=(a?7:5.5)*s;e.fillStyle=`#fff6e6`,e.strokeStyle=`rgba(40, 18, 6, 0.85)`,e.lineWidth=1.5*s,e.beginPath(),e.moveTo(x*1.3,0),e.lineTo(-x*.8,x*.75),e.lineTo(-x*.35,0),e.lineTo(-x*.8,-x*.75),e.closePath(),e.stroke(),e.fill(),e.restore(),e.restore();let S=Math.min(n,r)/2-9*s,C=c+f*S,w=l-d*S;e.font=`600 ${9*s}px Barlow, system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`rgba(255, 241, 221, 0.85)`,e.fillText(`N`,C,w)}_glyph(e,t,n,r,i){e.beginPath(),t===`education`?e.arc(n,r,i*.85,0,Math.PI*2):t===`project`?e.rect(n-i*.8,r-i*.8,i*1.6,i*1.6):t===`skills`?(e.moveTo(n,r-i),e.lineTo(n+i*.95,r+i*.7),e.lineTo(n-i*.95,r+i*.7),e.closePath()):(e.moveTo(n,r-i),e.lineTo(n+i,r),e.lineTo(n,r+i),e.lineTo(n-i,r),e.closePath())}_label(e,t,n,r,i,a){if(!t)return;let o=t.length>26?`${t.slice(0,25)}…`:t;e.font=`500 ${11*a}px Barlow, system-ui, sans-serif`;let s=e.measureText(o).width+6*a,c={l:n-s/2,r:n+s/2,t:r-14*a,b:r};this.labelBoxes.some(e=>c.l<e.r&&c.r>e.l&&c.t<e.b&&c.b>e.t)||(this.labelBoxes.push(c),e.textAlign=`center`,e.textBaseline=`bottom`,e.lineWidth=3*a,e.strokeStyle=`rgba(30, 14, 4, 0.75)`,e.strokeText(o,n,r),e.fillStyle=i,e.fillText(o,n,r))}_tap(e){let t=this.fullCanvas.getBoundingClientRect(),n=this.fullCanvas.width/t.width,r=(e.clientX-t.left)*n,i=(e.clientY-t.top)*n,a=null,o=1/0;for(let e of this.hits){let t=Math.hypot(e.x-r,e.y-i);t<e.r&&t<o&&(o=t,a=e)}if(a)return this.close(),this.onPick(a.pick);let s=this.state,c=this.fullCanvas.width,l=this.fullCanvas.height,u=Math.min(c,l)/2/this.fullRadius,d=(r-c/2)/u,f=(i-l/2)/u,p=Math.cos(s.camYaw),m=Math.sin(s.camYaw);this.close(),this.onPick({type:`ground`,x:s.px+d*p+f*m,z:s.pz-d*m+f*p})}},g_=[`Good walking to you.`,`The sand is kind today.`,`Shade and water to you, traveller.`,`You walk loudly. The deep ones listen.`,`Mind the slip faces. They give way.`,`The stones hum when you stand close.`,`I came to read the stones as well.`,`Long road. Good boots.`,`The wind is turning. Can you smell it?`,`I have walked this road twice. It reads better slowly.`],__=[`Cold tonight. Keep moving.`,`The stones are brighter after dark.`,`Stars enough to walk by.`,`The mice are out. Step lightly.`],v_=[`Break your stride and the worm loses you.`,`Rock under your feet is safe ground.`,`A thumper will call one. Be elsewhere when it comes.`,`After a spice blow, walk through the glow to gather it.`,`You can leap, you know. It saves the knees on the ridges.`,`From high up you see the whole road. Pull the view back.`],y_={worm:e=>`Someone keeps a young worm in the pit to the ${e}.`,ride:e=>`There is a thopter on the pad to the ${e}. They let anyone fly it.`,race:e=>`They race sandbikes on the course to the ${e}. Three laps, and the riders don't wait.`};function b_(e,t){let n=[`north`,`north-east`,`east`,`south-east`,`south`,`south-west`,`west`,`north-west`],r=Math.atan2(e,-t);return n[(Math.round(r/(Math.PI/4))%8+8)%8]}function x_(e){let{rng:t}=e,n=t(),r=t=>t.slice().sort((t,n)=>Math.hypot(t.x-e.x,t.z-e.z)-Math.hypot(n.x-e.x,n.z-e.z))[0];if(e.total>0&&!e.unfound.length&&n<.35)return`You have read every stone. The desert knows you now.`;if(e.unfound.length&&n<.45){let n=r(e.unfound),i=b_(n.x-e.x,n.z-e.z),a=n.kind===`project`?`pad`:`stone`;return t()<.5?`There is a ${a} you have not read, to the ${i}.`:`Have you read “${n.title}”? It stands to the ${i}.`}if(e.games.length&&n<.6){let n=$p(t,e.games),r=y_[n.id];if(r)return r(b_(n.x-e.x,n.z-e.z))}return n<.74?$p(t,v_):e.spice>=10&&n<.8?`You smell of spice. A good haul.`:e.name&&n<.86?`They say ${e.name.split(` `)[0]} raised these stones.`:$p(t,e.night?__:g_)}var S_=[{cloth:`#8a4a36`,wrap:`#6d3a2c`},{cloth:`#3f5566`,wrap:`#324552`},{cloth:`#a58c62`,wrap:`#8a744f`},{cloth:`#5b6044`,wrap:`#494e37`},{cloth:`#6a5a6e`,wrap:`#544758`},{cloth:`#4a4a48`,wrap:`#3b3b39`},{cloth:`#7d2f3a`,wrap:`#602630`}],C_=new R;function w_(e,t,n){return e+((t-e+Math.PI*3)%(Math.PI*2)-Math.PI)*n}var T_=class{constructor(e,t,n){this.ctx=e,this.rng=n;let r=new Up;this.f=r,r.materials.cloth.color.set(t.cloth),r.materials.wrap.color.set(t.wrap),r.onFootstep=e=>this._step(e),e.scene.add(r.root),this.lamp=new W(new is(.06,10,8),new gi({color:new H(3.2,2.2,.9)})),this.lamp.position.set(.3,.6,.1),this.lamp.visible=!1,r.body.add(this.lamp),this.bubble=document.createElement(`div`),this.bubble.className=`say`,e.labelLayer.append(this.bubble),this.said=0,this.pace=em(n,.72,1),this.state=`pause`,this.timer=n()*3,this.target=null,this.face=null,this.cool=4+n()*6,this.input={x:0,z:0,run:!1},this.near=!1,this.progress={x:0,z:0,t:0}}get x(){return this.f.pos.x}get z(){return this.f.pos.z}place(e,t){this.f.spawn(e,t,this.rng()*Math.PI*2),this.near=!1,this.state=`pause`,this.timer=this.rng()*2,this._hush()}_step(e){if(!this.near)return;let{trails:t,particles:n,audio:r,tint:i,player:a}=this.ctx,o=Math.atan2(Math.cos(e.yaw),Math.sin(e.yaw));t.stamp(ep.FOOT,e.x,e.z,o,.74,.42,.06+.035*e.run,.03,.85),n.footstep(e.x,e.y,e.z,e.dirX,e.dirZ,e.speed,e.run,i(),0);let s=Math.hypot(e.x-a.pos.x,e.z-a.pos.z);s<9&&r.footstep(.3*(1-s/9))}_say(e){this.bubble.textContent=e,this.bubble.classList.add(`on`),this.said=1}_hush(){this.bubble.classList.remove(`on`),this.said=0}update(e,t,n){let r=this.f,i=r.pos,a=this.input;a.x=a.z=0,a.run=!1,this.cool-=e;let o=Math.hypot(i.x-n.px,i.z-n.pz);n.worm&&Math.hypot(i.x-n.worm.x,i.z-n.worm.z)<45?(this.state!==`flee`&&this._hush(),this.state=`flee`):this.state===`flee`?(this.state=`pause`,this.timer=2,this.face=n.worm?{x:n.worm.x,z:n.worm.z}:null):n.playerActive&&this.state!==`greet`&&o<3.4&&this.cool<=0&&(this.state=`greet`,this.timer=6,this.cool=28+this.rng()*22,this._say(n.greet(this)));let s=null;switch(this.state){case`travel`:{let t=this.target.x-i.x,r=this.target.z-i.z,o=Math.hypot(t,r);if(o<1.1){this.state=`pause`,this.timer=em(this.rng,3,10),this.face=this.target.face||null;break}let s=Math.min(1,o/1.5)*this.pace;a.x=t/o*s,a.z=r/o*s,this.progress.t+=e,this.progress.t>4&&(Math.hypot(i.x-this.progress.x,i.z-this.progress.z)<1&&(this.target=n.pickTarget(this)),this.progress={x:i.x,z:i.z,t:0});break}case`pause`:this.timer-=e,s=this.face,this.timer<=0&&(this.target=n.pickTarget(this),this.state=`travel`,this.progress={x:i.x,z:i.z,t:0});break;case`greet`:this.timer-=e,s={x:n.px,z:n.pz},(this.timer<=0||o>7||!n.playerActive)&&(this._hush(),this.state=`pause`,this.timer=1+this.rng()*2,this.face=null);break;case`flee`:{let e=i.x-n.worm.x,t=i.z-n.worm.z,r=Math.hypot(e,t)||1;a.x=e/r,a.z=t/r,a.run=!0;break}}if(a.x||a.z){let e=(e,t,n)=>{let r=i.x-e,o=i.z-t,s=Math.hypot(r,o);if(s<n&&s>.001){let e=(1-s/n)*1.4;a.x+=r/s*e,a.z+=o/s*e}};e(n.px,n.pz,1.6);for(let t of n.others)t!==this&&e(t.x,t.z,1.5)}else s&&(r.yaw=w_(r.yaw,Math.atan2(s.x-i.x,s.z-i.z),1-Math.exp(-e*4)));let c=Math.hypot(i.x-n.focus.x,i.z-n.focus.z)<n.viewR+10;if(c)this.near||r.spawn(i.x,i.z,r.yaw),r.root.visible=!0,r.update(e,a,n.fenv);else{r.root.visible=!1;let t=a.run?5:1.9;i.x+=a.x*t*e,i.z+=a.z*t*e,n.fenv.collide(i,.34,null),i.y=q(i.x,i.z),(a.x||a.z)&&(r.yaw=Math.atan2(a.x,a.z))}if(this.near=c,this.lamp.visible=n.night,this.said){C_.set(i.x,r.bodyY+1.05,i.z).project(this.ctx.camera);let e=(C_.x*.5+.5)*window.innerWidth,t=(-C_.y*.5+.5)*window.innerHeight;this.bubble.style.transform=`translate3d(${e.toFixed(1)}px, ${t.toFixed(1)}px, 0) translate(-50%, -100%)`}}dispose(){this.ctx.scene.remove(this.f.root),this.f.root.traverse(e=>{e.geometry&&e.geometry.dispose()});for(let e of Object.values(this.f.materials))e.dispose();this.bubble.remove()}},E_=class{constructor(e){this.ctx=e,this.list=[],this.center={x:0,z:0}}populate(e,t,n){for(this.center=n,this.rng=t;this.list.length>e;)this.list.pop().dispose();let r=S_.slice().sort(()=>t()-.5);for(;this.list.length<e;)this.list.push(new T_(this.ctx,r[this.list.length%r.length],t));for(let e of this.list){let t=this._open(n.x,n.z,8,45);e.place(t.x,t.z)}}_open(e,t,n,r){let{blocked:i}=this.ctx,a={x:e,z:t};for(let o=0;o<24;o++){let o=this.rng()*Math.PI*2,s=em(this.rng,n,r);if(a={x:e+Math.cos(o)*s,z:t+Math.sin(o)*s},!i(a.x,a.z,1.6))break}return a}_target(e){let{stones:t,games:n}=this.ctx,r=this.rng,i=r(),a=t();if(i<.55&&a.length){let e=$p(r,a),t=r()*Math.PI*2,n=e.radius+em(r,1,1.8),i={x:e.x+Math.cos(t)*n,z:e.z+Math.sin(t)*n,face:{x:e.x,z:e.z}};if(!this.ctx.blocked(i.x,i.z,.4,e))return i}else if(i<.7){let e=n();if(e.length){let t=$p(r,e);return{...this._open(t.sx,t.sz,2.5,5),face:{x:t.x,z:t.z}}}}let o=r()<.5?this.center:{x:e.x,z:e.z},s=this._open(o.x,o.z,8,34);return Math.hypot(s.x-this.center.x,s.z-this.center.z)>75?this._open(this.center.x,this.center.z,10,40):s}update(e,t,n){let{ctx:r}=this,i=this.fenv||(this.fenv={wind:null,onRock:!0,collide:r.collide});i.wind=r.wind();let a={...n,others:this.list,fenv:i,pickTarget:e=>this._target(e),greet:e=>x_({rng:this.rng,x:e.x,z:e.z,...r.talk()})};for(let n of this.list)n.update(e,t,a)}},D_=new G({color:`#6f4d36`,roughness:.95}),O_=new G({color:`#c9a37c`,roughness:.95}),k_=new G({color:`#8a5f48`,roughness:.9,side:2}),A_=new G({color:`#3b2b21`,roughness:.9,side:2}),j_=new G({color:`#8d6f55`,roughness:.9,side:2});function M_(e){return e.castShadow=!0,e}var N_=class{constructor(e,t){this.ctx=e,this.rng=t;let n=new V,r=M_(new W(new is(1,12,10),D_));r.scale.set(.11,.1,.16),r.position.y=.12;let i=new W(new is(1,10,8),O_);i.scale.set(.09,.07,.13),i.position.set(0,.09,.02);let a=M_(new W(new is(.075,10,8),D_));a.position.set(0,.17,.15),this.ears=[-1,1].map(e=>{let t=new W(new Ma(.07,10),k_);return t.position.set(e*.06,.26,.12),t.rotation.set(-.2,e*.5,0),n.add(t),t}),this.tail=new W(new Na(.008,.012,.34,5).rotateX(Math.PI/2).translate(0,0,-.17),D_),this.tail.position.set(0,.1,-.14);let o=new W(new is(.03,6,5),O_);o.position.set(0,0,-.35),this.tail.add(o),n.add(r,i,a,this.tail),n.scale.setScalar(1.7),this.root=n,e.scene.add(n),this.x=0,this.z=0,this.yaw=0,this.state=`idle`,this.timer=t()*3,this.hops=0,this.hop=null,this.fleeing=0}place(e,t){this.x=e,this.z=t,this.hop=null,this.state=`idle`,this.timer=this.rng()*3}_startHop(e,t,n,r){let i=this.x+Math.sin(e)*t,a=this.z+Math.cos(e)*t;return this.ctx.blocked(i,a,.4)?(this.yaw+=Math.PI*(.5+this.rng()),!1):(this.hop={fx:this.x,fz:this.z,tx:i,tz:a,s:0,dur:n,h:r},this.yaw=e,!0)}update(e,t,n){let r=this.rng,i=null,a=4.2;for(let e of n.threats){let t=Math.hypot(this.x-e.x,this.z-e.z);t<a&&(a=t,i=e)}if(i&&(this.fleeing<=0&&n.audible&&a<4&&this.ctx.audio.blip(`squeak`),this.fleeing=1.6+r(),this.fleeDir=Math.atan2(this.x-i.x,this.z-i.z)+(r()-.5)*.9),this.fleeing-=e,this.hop){let t=this.hop;t.s=Math.min(1,t.s+e/t.dur),this.x=t.fx+(t.tx-t.fx)*t.s,this.z=t.fz+(t.tz-t.fz)*t.s,t.s>=1&&(this.hop=null,n.visible&&this.ctx.trails.stamp(ep.FOOT,this.x,this.z,Math.atan2(Math.cos(this.yaw),Math.sin(this.yaw)),.2,.14,.02,.008,.5))}else this.fleeing>0?this._startHop(this.fleeDir+(r()-.5)*.5,1,.2,.3):this.hops>0?this._startHop(this.yaw+(r()-.5)*.7,em(r,.35,.6),.26,.2)&&this.hops--:(this.timer-=e*(n.night?2:1),this.timer<=0&&(this.timer=em(r,1.2,5),this.hops=1+Math.floor(r()*5),this.yaw=r()*Math.PI*2));let o=q(this.x,this.z),s=this.hop?Math.sin(Math.PI*this.hop.s)*this.hop.h:0;this.root.position.set(this.x,o+s,this.z),this.root.rotation.set(this.hop?-.35*Math.cos(Math.PI*this.hop.s):Math.sin(t*6+this.x)*.04,this.yaw,0,`YXZ`);let c=Math.sin(t*9+this.z*3)>.92?.35:0;this.ears[0].rotation.x=-.2-c,this.ears[1].rotation.x=-.2-c,this.tail.rotation.x=this.hop?.5:.15+Math.sin(t*2+this.x)*.1}};function P_(e){let t=new mo;return t.moveTo(0,.16),t.lineTo(e*.5,.2),t.lineTo(e*.95,.02),t.lineTo(e*.8,-.12),t.lineTo(e*.45,-.2),t.lineTo(0,-.16),t.closePath(),new ns(t).rotateX(Math.PI/2)}var F_=class{constructor(e,t,n){this.ctx=e,this.rng=t;let r=new V,i=M_(new W(new Pa(.09,.55,8).rotateX(Math.PI/2),A_)),a=new W(new is(.07,8,6),j_);a.position.z=.28;let o=M_(new W(new Pa(.14,.3,3).rotateX(-Math.PI/2),j_));o.scale.y=.15,o.position.z=-.36,this.wings=[-1,1].map(e=>{let t=M_(new W(P_(e),A_));return r.add(t),t}),r.add(i,a,o),r.scale.setScalar(1.5),this.root=r,e.scene.add(r),this.a=t()*Math.PI*2,this.dir=n%2?1:-1,this.r=em(t,13,20),this.alt=em(t,11,15),this.cx=0,this.cz=0,this.away=0,this.phase=t()*6,this.flap=0,this.cry=em(t,20,60)}place(e,t){this.cx=e,this.cz=t}update(e,t,n){this.cx+=(n.px-this.cx)*(1-Math.exp(-e*.25)),this.cz+=(n.pz-this.cz)*(1-Math.exp(-e*.25)),this.away+=(+!!n.night-this.away)*(1-Math.exp(-e*.12));let r=this.r+Math.sin(t*.13+this.phase)*3+this.away*140;this.a+=this.dir*7.5*e/r;let i=this.cx+Math.cos(this.a)*r,a=this.cz+Math.sin(this.a)*r,o=q(this.cx,this.cz)+this.alt+Math.sin(t*.21+this.phase)*1.6;if(this.root.visible=this.away<.6,!this.root.visible)return;this.flap-=e,this.flap<-em(this.rng,3,8)&&(this.flap=1.2);let s=this.flap>0?Math.sin(t*13)*.55:Math.sin(t*1.3+this.phase)*.07+.12;this.wings[0].rotation.z=-s,this.wings[1].rotation.z=s;let c=-Math.sin(this.a)*this.dir,l=Math.cos(this.a)*this.dir;this.root.position.set(i,o,a),this.root.rotation.set(0,Math.atan2(c,l),-this.dir*.3,`YXZ`),this.cry-=e,this.cry<=0&&(this.cry=em(this.rng,25,70),n.audible&&this.ctx.audio.blip(`hawk`))}},I_=class{constructor(e){this.ctx=e,this.mice=[],this.hawks=[]}populate(e,t,n,r){for(this.rng=n;this.mice.length>e;)this.ctx.scene.remove(this.mice.pop().root);for(;this.mice.length<e;)this.mice.push(new N_(this.ctx,n));for(;this.hawks.length>t;)this.ctx.scene.remove(this.hawks.pop().root);for(;this.hawks.length<t;)this.hawks.push(new F_(this.ctx,n,this.hawks.length));for(let e of this.mice)this._scatter(e,r.x,r.z,6,30);for(let e of this.hawks)e.place(r.x,r.z)}_scatter(e,t,n,r,i){for(let a=0;a<16;a++){let a=this.rng()*Math.PI*2,o=em(this.rng,r,i),s=t+Math.cos(a)*o,c=n+Math.sin(a)*o;if(!this.ctx.blocked(s,c,.8))return e.place(s,c)}e.place(t+i,n)}update(e,t,n){for(let r of this.mice){Math.hypot(r.x-n.px,r.z-n.pz)>60&&this._scatter(r,n.px,n.pz,n.viewR+2,n.viewR+14);let i=Math.hypot(r.x-n.focus.x,r.z-n.focus.z)<n.viewR+4;r.root.visible=i,r.update(e,t,{...n,visible:i})}for(let r of this.hawks)r.update(e,t,n)}},L_=48,R_=`arrakis.spice`,z_=[[10,`Ten spice. The stones call you gatherer.`],[25,`Twenty-five spice. You walk like one born here.`],[50,`Fifty spice. The desert shares its secrets with you.`],[100,`A hundred spice. Even the worms would know your name.`]],B_=new B,V_=new rn,H_=new R,U_=new R,W_=new R,G_=new R(0,1,0),K_=new H,q_=class{constructor(e){this.ctx=e;let t=new Ma(1,11).rotateX(-Math.PI/2),n=t.getAttribute(`position`);for(let e=1;e<n.count;e++){let t=.65+Math.random()*.55;n.setXYZ(e,n.getX(e)*t,0,n.getZ(e)*t)}this.mesh=new $i(t,new gi({color:new H(1.45,.4,.05),transparent:!0,opacity:.85,depthWrite:!1}),L_),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,e.scene.add(this.mesh),this.patches=[],this.total=0;try{this.total=Math.max(0,parseInt(localStorage.getItem(R_),10)||0)}catch{}this.el=document.getElementById(`spiceCount`),this.respawn=12,this._show()}_show(){this.el&&(this.el.hidden=this.total<=0,this.el.textContent=` · ${this.total} spice`)}clear(){this.patches.length=0,this._sync()}scatter(e,t,n,r,i,a){for(let o=0;o<e&&this.patches.length<L_;o++)for(let e=0;e<12;e++){let e=a()*Math.PI*2,o=em(a,r,i),s=t+Math.cos(e)*o,c=n+Math.sin(e)*o;if(!this.ctx.blocked(s,c,1.2)){this.patches.push({x:s,z:c,r:em(a,.32,.55),born:0});break}}this._sync()}_sync(){let e={x:0,z:0};this.patches.forEach((t,n)=>{Vf(t.x,t.z,e),H_.set(-e.x,1,-e.z).normalize(),V_.setFromUnitVectors(G_,H_),U_.set(t.x,q(t.x,t.z)+.05,t.z),W_.setScalar(t.r),B_.compose(U_,V_,W_),this.mesh.setMatrixAt(n,B_)}),this.mesh.count=this.patches.length,this.mesh.instanceMatrix.needsUpdate=!0}update(e,t,n){let{particles:r,audio:i,toast:a}=this.ctx;this.mesh.material.opacity=.7+.18*Math.sin(t*2.4);for(let t of this.patches)if(Math.random()<e*1.4&&Math.hypot(t.x-n.focus.x,t.z-n.focus.z)<n.viewR){let e=Math.random()*Math.PI*2;r.spawn(Wp.SPICE,t.x+Math.cos(e)*t.r*.7,q(t.x,t.z)+.1,t.z+Math.sin(e)*t.r*.7,0,.25,0,.04,2.2,K_.setRGB(1.6,.6,.15),.9,{drag:.5})}if(n.collecting)for(let e=this.patches.length-1;e>=0;e--){let t=this.patches[e];if(Math.hypot(t.x-n.px,t.z-n.pz)>t.r+.55)continue;this.patches.splice(e,1),this.total++;try{localStorage.setItem(R_,String(this.total))}catch{}r.burst(t.x,q(t.x,t.z)+.2,t.z,18,1.5,K_.setRGB(1.8,.8,.3),{radius:.3,dust:.3}),i.blip(`spice`),this._show(),this.el&&(this.el.classList.remove(`bump`),this.el.offsetWidth,this.el.classList.add(`bump`));let o=z_.find(e=>e[0]===this.total);o?a(o[1],4):this.total===1&&a(`Spice. Walk through the glowing patches to gather it.`,4),this._sync()}if(this.respawn-=e,this.respawn<=0&&(this.respawn=em(n.rng,14,30),this.patches.length<9&&this.scatter(1,n.px,n.pz,n.viewR*.6,n.viewR+18,n.rng)),this.patches.length>30){let e=this.patches.length;this.patches=this.patches.filter(e=>Math.hypot(e.x-n.px,e.z-n.pz)<140),this.patches.length!==e&&this._sync()}}},J_=new H,Y_=class{constructor(e){this.ctx=e,this.next=14,this.active=[],this.thopter=null,this.mound=null,this.thrum=0}reset(){for(let e of this.active)e.end&&e.end();this.active=[],this.mound=null,this.thrum=0,this.next=10+Math.random()*10}update(e,t,n){let r=n.rng;n.quiet||(this.next-=e,this.next<=0&&(this.next=em(r,22,55),this._start(n,t))),this.mound=null,this.thrum=0,this.active=this.active.filter(r=>{let i=r.step(e,t,n);return!i&&r.end&&r.end(),i})}_start(e,t){let n=e.rng,r=n(),i=e=>this.active.some(t=>t.kind===e);r<.3&&!i(`flyover`)?this.active.push(this._flyover(e)):r<.52&&!i(`blow`)?this.active.push(this._blow(e)):r<.72&&!i(`devil`)?this.active.push(this._devil(e,t)):r<.9&&!e.wormBusy&&!i(`wormsign`)?this.active.push(this._wormsign(e)):i(`squall`)||this.active.push(this._squall(e))}trigger(e,t,n=0){let r={flyover:()=>this._flyover(t),blow:()=>this._blow(t),devil:()=>this._devil(t,n),wormsign:()=>this._wormsign(t),squall:()=>this._squall(t)}[e];r&&this.active.push(r())}_flyover(e){let{scene:t}=this.ctx;this.thopter||(this.thopter=new Xm,this.thopter.root.scale.setScalar(1.15),t.add(this.thopter.root));let n=this.thopter,r=e.rng,i=r()*Math.PI*2,a=em(r,-10,10),o=Math.cos(i),s=Math.sin(i),c=e.px-s*a,l=e.pz+o*a,u=e.viewR+45,d=-u,f=em(r,12,17);return n.root.visible=!0,n.yaw=Math.atan2(o,s),{kind:`flyover`,step:(t,r)=>{d+=20*t;let i=c+o*d,a=l+s*d;return n.update(t,r,1,null),n.root.position.set(i,q(c,l)+f-n.body.position.y,a),n.root.rotation.set(.08,n.yaw,Math.sin(r*.9)*.06,`YXZ`),this.thrum=Math.max(this.thrum,Math.max(0,1-Math.hypot(i-e.px,a-e.pz)/60)*.9),d<u},end:()=>n.root.visible=!1}}_blow(e){let{particles:t,trails:n,audio:r,toast:i,shake:a,spice:o,blocked:s}=this.ctx,c=e.rng,l=e.px,u=e.pz;for(let t=0;t<12;t++){let t=c()*Math.PI*2,n=em(c,13,Math.max(18,e.viewR*.8));if(l=e.px+Math.cos(t)*n,u=e.pz+Math.sin(t)*n,!s(l,u,5))break}let d=0,f=!1;return{kind:`blow`,step:s=>{d+=s;let p=q(l,u);if(d<2.6)return Math.random()<s*22&&t.burst(l,p+.1,u,3,.9+d*.5,J_.setRGB(1.5,.8,.4),{radius:1.2,dust:1.2,puff:.6}),n.stamp(ep.DISTURB,l,u,0,3+d,3+d,.04,0,.6),!0;if(!f){f=!0,t.burst(l,p+.3,u,520,9,J_.setRGB(1.7,.75,.3),{radius:1.2,dust:.2,puff:1.3,grow:1.6,chunk:1.4});for(let e=0;e<90;e++){let e=Math.random()*Math.PI*2,n=1+Math.random()*5;t.spawn(Wp.SPICE,l,p+.5,u,Math.cos(e)*n,3+Math.random()*6,Math.sin(e)*n,.05+Math.random()*.05,3+Math.random()*2,J_.setRGB(2.2,.8,.2),1,{drag:.6,grav:2.5})}n.stamp(ep.CRATER,l,u,0,7,7,.5,.25,1),r.eruption(.45),a(l,u,.7),o.scatter(5+Math.floor(c()*4),l,u,1.5,6.5,c),i(`A spice blow, to the ${b_(l-e.px,u-e.pz)}!`,3.5)}return d<4}}}_devil(e,t){let{particles:n,tint:r,wind:i}=this.ctx,a=e.rng,o=a()*Math.PI*2,s=e.px+Math.cos(o)*em(a,14,26),c=e.pz+Math.sin(o)*em(a,14,26),l=a()*Math.PI*2,u=0,d=em(a,18,30),f=0;return{kind:`devil`,step:(e,o)=>{u+=e,l+=(Math.sin(o*.7+t)*.8+(a()-.5))*e;let p=i();s+=(Math.cos(l)*2.2+p.x*.15)*e,c+=(Math.sin(l)*2.2+p.z*.15)*e;let m=Math.min(1,u/3,(d-u)/3),h=q(s,c),g=J_.copy(n.dustColor).multiply(r());for(f+=e*70*m;f>=1;){--f;let e=Math.random(),t=.35+e*1.5,r=Math.random()*Math.PI*2,i=5.5*(.5+e);n.spawn(Wp.DUST,s+Math.cos(r)*t,h+e*6.5,c+Math.sin(r)*t,-Math.sin(r)*i,1.2+Math.random(),Math.cos(r)*i,.3+e*.5,.9+Math.random()*.7,g,.2*m,{grow:.5,drag:1.4})}return u<d}}}_wormsign(e){let{particles:t,trails:n,tint:r,toast:i}=this.ctx,a=e.rng,o=a()*Math.PI*2,s=Math.max(48,e.viewR+8)+a()*20,c=a()<.5?1:-1,l=-Math.sin(o)*c,u=Math.cos(o)*c,d=e.px+Math.cos(o)*s-l*45,f=e.pz+Math.sin(o)*s-u*45,p=0;return i(`Wormsign, far off to the ${b_(d-e.px,f-e.pz)}.`,3.5),{kind:`wormsign`,step:e=>{p+=e,d+=l*8.5*e,f+=u*8.5*e;let i=Math.min(1,p/2,(11-p)/2);this.mound={x:d,z:f,amp:1.1*i,dx:l,dz:u};let a=q(d,f);return Math.random()<e*9&&t.burst(d,a+.4,f,5,2.2,r(),{radius:2.2,dust:1.2,puff:1.1,grow:1.3}),n.stamp(ep.DISTURB,d-l*2,f-u*2,0,7,7,.1,0,1),p<11}}}_squall(e){let{squall:t,toast:n}=this.ctx;if(!t(em(e.rng,22,38)))return{kind:`squall`,step:()=>!1};n(`The wind gets up. A squall blows through.`,3.5);let r=0;return{kind:`squall`,step:e=>(r+=e)<40}}};function X_(e,t=!1){let n=e&&e.life||{},r=Number.isFinite(n.walkers)?Math.min(8,Math.max(0,Math.round(n.walkers))):4;return{walkers:t?Math.min(r,2):r,wildlife:n.wildlife!==!1,events:n.events!==!1,spice:n.spice!==!1,small:t}}var Z_=class{constructor(e){this.ctx=e,this.settings=X_(null),this.rng=Xp(Qp()),this.spice=new q_(e);let t={...e,spice:this.spice,talk:()=>({...e.talk(),spice:this.spice.total})};this.walkers=new E_(t),this.wildlife=new I_(t),this.events=new Y_(t),this.center={x:0,z:0}}configure(e){this.settings=e}reset(e){let t=this.settings;this.center=e,this.rng=Xp(Qp()),this.walkers.populate(t.walkers,this.rng,e),this.wildlife.populate(t.wildlife?t.small?3:6:0,t.wildlife?t.small?1:2:0,this.rng,e),this.spice.clear(),t.spice&&this.spice.scatter(t.small?7:12,e.x,e.z,6,55,this.rng),this.events.reset()}get mound(){return this.events.mound}get thrum(){return this.events.thrum}update(e,t,n){let{player:r}=this.ctx,i=r.pos.x,a=r.pos.z,o=n.entered&&!n.gaming,s={px:i,pz:a,focus:n.focus,viewR:n.viewR,night:n.night,rng:this.rng};this.walkers.update(e,t,{...s,playerActive:o,worm:n.worm}),this.wildlife.update(e,t,{...s,threats:[{x:i,z:a},...this.walkers.list],audible:o}),this.settings.spice&&this.spice.update(e,t,{...s,collecting:o}),this.events.update(e,t,{...s,quiet:!o||!this.settings.events,wormBusy:n.wormBusy})}},Q_=BigInt(2**32-1),$_=BigInt(32);function ev(e,t=!1){return t?{h:Number(e&Q_),l:Number(e>>$_&Q_)}:{h:Number(e>>$_&Q_)|0,l:Number(e&Q_)|0}}function tv(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=ev(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var nv=e=>e/2**32|0,rv=e=>e>>>0;function iv(e,t,n,r){let i=nv(n),a=rv(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var av=(e,t,n)=>e>>>n,ov=(e,t,n)=>e<<32-n|t>>>n,sv=(e,t,n)=>e>>>n|t<<32-n,cv=(e,t,n)=>e<<32-n|t>>>n,lv=(e,t,n)=>e<<64-n|t>>>n-32,uv=(e,t,n)=>e>>>n-32|t<<64-n;function dv(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var fv=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),pv=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,mv=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),hv=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,gv=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),_v=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function vv(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var yv=e=>e?`"${e}" `:``;function bv(e,t=``){if(typeof e!=`number`)throw TypeError(yv(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(yv(t)+`expected integer >= 0, got `+e);return e}function xv(e,t,n=``){if(vv(e)&&(t===void 0||e.length===t))return e;t!==void 0&&bv(t,`length`);let r=vv(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=yv(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}var Sv=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},Cv=(e,t)=>{Sv(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function wv(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function Tv(e,t){xv(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function Ev(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function Dv(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}var Ov=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,kv=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function Av(e){if(xv(e),Ov)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=kv[e[n]];return t}function jv(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function Mv(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(Ov)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=jv(e.charCodeAt(i)),a=jv(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function Nv(...e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];xv(r),t+=r.length}let n=new Uint8Array(t);for(let t=0,r=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.length}return n}function Pv(e,t,n=`opts`){return Cv(e,`defaults`),t!==void 0&&Cv(t,n),Object.assign(Object.create(null),e,t)}function Fv(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=Pv({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function Iv(e=32){bv(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}var Lv=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])}),Rv=class{constructor(t,n,r,i){e(this,`blockLen`,void 0),e(this,`outputLen`,void 0),e(this,`canXOF`,!1),e(this,`padOffset`,void 0),e(this,`isLE`,void 0),e(this,`buffer`,void 0),e(this,`view`,void 0),e(this,`finished`,!1),e(this,`length`,0),e(this,`pos`,0),e(this,`destroyed`,!1),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=i,this.buffer=new Uint8Array(t),this.view=Dv(this.buffer)}update(e){wv(this),xv(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=Dv(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){wv(this),Tv(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),iv(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:Dv(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},zv=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Bv=tv(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),Vv=Bv[0],Hv=Bv[1],Uv=new Uint32Array(80),Wv=new Uint32Array(80),Gv=class extends Rv{constructor(t,n){super(128,t,16,!1),e(this,`Ah`,0),e(this,`Al`,0),e(this,`Bh`,0),e(this,`Bl`,0),e(this,`Ch`,0),e(this,`Cl`,0),e(this,`Dh`,0),e(this,`Dl`,0),e(this,`Eh`,0),e(this,`El`,0),e(this,`Fh`,0),e(this,`Fl`,0),e(this,`Gh`,0),e(this,`Gl`,0),e(this,`Hh`,0),e(this,`Hl`,0),this.Ah=n[0]|0,this.Al=n[1]|0,this.Bh=n[2]|0,this.Bl=n[3]|0,this.Ch=n[4]|0,this.Cl=n[5]|0,this.Dh=n[6]|0,this.Dl=n[7]|0,this.Eh=n[8]|0,this.El=n[9]|0,this.Fh=n[10]|0,this.Fl=n[11]|0,this.Gh=n[12]|0,this.Gl=n[13]|0,this.Hh=n[14]|0,this.Hl=n[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||(e=new this.constructor)).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Uv[n]=e.getUint32(t),Wv[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=Uv[e-15]|0,n=Wv[e-15]|0,r=sv(t,n,1)^sv(t,n,8)^av(t,n,7),i=cv(t,n,1)^cv(t,n,8)^ov(t,n,7),a=Uv[e-2]|0,o=Wv[e-2]|0,s=sv(a,o,19)^lv(a,o,61)^av(a,o,6),c=mv(i,cv(a,o,19)^uv(a,o,61)^ov(a,o,6),Wv[e-7],Wv[e-16]),l=hv(c,r,s,Uv[e-7],Uv[e-16]);Uv[e]=l|0,Wv[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=sv(u,d,14)^sv(u,d,18)^lv(u,d,41),v=cv(u,d,14)^cv(u,d,18)^uv(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=gv(_,v,b,Hv[e],Wv[e]),S=_v(x,g,t,y,Vv[e],Uv[e]),C=x|0,w=sv(n,r,28)^lv(n,r,34)^lv(n,r,39),T=cv(n,r,28)^uv(n,r,34)^uv(n,r,39),E=n&i^n&o^i&o,D=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=dv(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let O=fv(C,T,D);n=pv(O,S,w,E),r=O|0}({h:n,l:r}=dv(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=dv(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=dv(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=dv(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=dv(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=dv(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=dv(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=dv(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){Ev(Uv,Wv)}destroy(){this.destroyed=!0,Ev(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Kv=class extends Gv{constructor(){super(64,zv)}},qv=Fv(()=>new Kv,Lv(3));function Jv(e,t,n=()=>{}){if(!Array.isArray(e))throw TypeError(`"${t}" expected array, got type=${typeof e}`);for(let r=0;r<e.length;r++)n(e[r],`${t}[${r}]`);return e}var Yv=(e,t,n)=>xv(e,t,n),Xv=bv;function Zv(e,t=`object`){if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`);return e}function Qv(e,t){if(typeof e!=`function`)throw TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}var $v=Av,ey=(...e)=>Nv(...e),ty=e=>Mv(e),ny=vv,ry=e=>Iv(e),iy=BigInt(0),ay=BigInt(1),oy=e=>e?`"${e}" `:``;function sy(e,t=``){if(typeof e!=`boolean`)throw TypeError(oy(t)+`expected boolean, got type=`+typeof e);return e}function cy(e){if(typeof e==`bigint`){if(!_y(e))throw RangeError(`positive bigint expected, got `+e)}else Xv(e);return e}function ly(e,t=``){if(typeof e!=`number`){let n=t&&`"${t}" `;throw TypeError(n+`expected number, got type=`+typeof e)}if(!Number.isSafeInteger(e)){let n=t&&`"${t}" `;throw RangeError(n+`expected safe integer, got `+e)}}function uy(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);return e===``?iy:BigInt(`0x`+e)}function dy(e){return uy(Av(e))}function fy(e){return uy(Av(gy(xv(e)).reverse()))}function py(e,t){if(bv(t),t===0)throw Error(`zero output length is invalid`);e=cy(e);let n=t*2,r=e.toString(16);if(r.length>n)throw RangeError(`number is too large`);return Mv(r.padStart(n,`0`))}function my(e,t){return py(e,t).reverse()}function hy(e,t){if(e=Yv(e),t=Yv(t),e.length!==t.length)return!1;let n=0;for(let r=0;r<e.length;r++)n|=e[r]^t[r];return n===0}function gy(e){return Uint8Array.from(Yv(e))}function _y(e){return typeof e==`bigint`&&iy<=e}function vy(e,t,n){return _y(e)&&_y(t)&&_y(n)&&t<=e&&e<n}function yy(e,t,n,r){if(!vy(t,n,r))throw RangeError(`expected valid `+e+`: `+n+` <= n < `+r+`, got `+t)}function by(e){if(e<iy)throw Error(`expected non-negative bigint, got `+e);return e===iy?0:e.toString(2).length}var xy=e=>(ly(e,`n`),(ay<<BigInt(e))-ay);function Sy(e,t={},n={},r=`object`){Zv(e,r),Zv(t,`fields`),Zv(n,`optFields`);function i(t,n,i){let a=r===`object`?`param "${String(t)}"`:`"${r}.${String(t)}"`,o=e[t];if(!Object.hasOwn(e,t)&&(i?o!==void 0:n!==`function`))throw TypeError(`${a} is invalid: expected own property`);if(i&&o===void 0)return;let s=typeof o;if(s!==n||o===null)throw TypeError(`${a} is invalid: expected ${n}, got ${s}`)}let a=(e,t)=>Object.entries(e).forEach(([e,n])=>i(e,n,t));a(t,!1),a(n,!0)}var Cy=()=>{throw Error(`not implemented`)},wy=BigInt(0),Ty=BigInt(1),Ey=BigInt(2),Dy=BigInt(3),Oy=BigInt(4),ky=BigInt(5),Ay=BigInt(7),jy=BigInt(8),My=BigInt(9),Ny=BigInt(15),Py=BigInt(16),Fy=BigInt(`0x10000000000000000`);function Iy(e,t){if(t<=wy)throw Error(`mod: expected positive modulus, got `+t);let n=e%t;return n>=wy?n:t+n}function Ly(e,t,n){if(n<=Ty)throw Error(`pow: expected modulus > 1, got `+n);if(typeof t!=`bigint`)throw TypeError(`invalid exponent: expected bigint, got `+typeof t);if(t<wy)throw Error(`invalid exponent, negatives unsupported`);if(t===wy)return Ty;if(t===Ty)return e;let r=e%n;if(r<wy&&(r+=n),t<Fy){let e=Ty;for(;t>wy;)t&Ty&&(e=e*r%n),r=r*r%n,t>>=Ty;return e}let i=[];for(;t>wy;)i.push(Number(t&Ny)),t>>=Oy;let a=Array(16);a[0]=Ty,a[1]=r;for(let e=2;e<16;e++)a[e]=a[e-1]*r%n;let o=a[i[i.length-1]];for(let e=i.length-2;e>=0;e--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let t=i[e];t!==0&&(o=o*a[t]%n)}return o}function Ry(e,t,n){if(n<=Ty)throw Error(`pow2: expected modulus > 1, got `+n);if(t<wy)throw Error(`pow2: expected non-negative exponent, got `+t);let r=e;for(;t-->wy;)r*=r,r%=n;return r}function zy(e,t){if(e===wy)throw Error(`invert: expected non-zero number`);if(t<=Ty)throw Error(`invert: expected modulus > 1, got `+t);let n=Iy(e,t),r=t,i=wy,a=Ty;for(;n!==wy;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==Ty)throw Error(`invert: does not exist`);return Iy(i,t)}function By(e,t,n){let r=e;if(!r.eql(r.sqr(t),n))throw Error(`Cannot find square root`)}function Vy(e,t){if((e&Ty)===wy)throw Error(t+`: expected odd modulus, got `+e)}function Hy(e,t){let n=e,r=(n.ORDER+Ty)/Oy,i=n.pow(t,r);return By(n,i,t),i}function Uy(e,t){let n=e,r=(n.ORDER-ky)/jy,i=n.mul(t,Ey),a=n.pow(i,r),o=n.mul(t,a),s=n.mul(n.mul(o,Ey),a),c=n.mul(o,n.sub(s,n.ONE));return By(n,c,t),c}function Wy(e){let t=tb(e),n=Gy(e),r=n(t,t.neg(t.ONE)),i=n(t,r),a=n(t,t.neg(r)),o=(e+Ay)/Py;return((e,t)=>{let n=e,s=n.pow(t,o),c=n.mul(s,r),l=n.mul(s,i),u=n.mul(s,a),d=n.eql(n.sqr(c),t),f=n.eql(n.sqr(l),t);s=n.cmov(s,c,d),c=n.cmov(u,l,f);let p=n.eql(n.sqr(c),t),m=n.cmov(s,c,p);return By(n,m,t),m})}function Gy(e){if(e<Dy)throw Error(`sqrt is not defined for small field`);Vy(e,`tonelliShanks`);let t=e-Ty,n=0;for(;t%Ey===wy;)t/=Ey,n++;let r=Ey,i=tb(e);for(;Zy(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Hy;let a=i.pow(r,t),o=(t+Ty)/Ey;return function(e,r){let i=e;if(i.is0(r))return r;if(Zy(i,r)!==1)throw Error(`Cannot find square root`);let s=n,c=i.mul(i.ONE,a),l=i.pow(r,t),u=i.pow(r,o);for(;!i.eql(l,i.ONE);){if(i.is0(l))throw Error(`Cannot find square root: probably non-prime P`);let e=1,t=i.sqr(l);for(;!i.eql(t,i.ONE);)if(e++,t=i.sqr(t),e===s)throw Error(`Cannot find square root`);let n=Ty<<BigInt(s-e-1),r=i.pow(c,n);s=e,c=i.sqr(r),l=i.mul(l,c),u=i.mul(u,r)}return u}}function Ky(e){return Vy(e,`Fp.sqrt`),e%Oy===Dy?Hy:e%jy===ky?Uy:e%Py===My?Wy(e):Gy(e)}var qy=(e,t)=>(Iy(e,t)&Ty)===Ty,Jy=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Yy(e){if(Zv(e,`field`),typeof e.ORDER!=`bigint`)throw TypeError(`param "ORDER" is invalid: expected bigint, got `+typeof e.ORDER);ly(e.BYTES,`BYTES`),ly(e.BITS,`BITS`);for(let t of Jy)Qv(e[t],`field.`+t);if(e.BYTES<1||e.BITS<1)throw Error(`invalid field: expected BYTES/BITS > 0`);if(e.ORDER<=Ty)throw Error(`invalid field: expected ORDER > 1, got `+e.ORDER);return e}function Xy(e,t,n=!1){Yy(e),Jv(t,`nums`),sy(n,`passZero`);let r=e,i=Array(t.length).fill(n?r.ZERO:void 0),a=t.reduce((e,t,n)=>r.is0(t)?e:(i[n]=e,r.mul(e,t)),r.ONE),o=r.inv(a);return t.reduceRight((e,t,n)=>r.is0(t)?e:(i[n]=r.mul(e,i[n]),r.mul(e,t)),o),i}function Zy(e,t){Yy(e);let n=e;Vy(n.ORDER,`FpLegendre`);let r=(n.ORDER-Ty)/Ey,i=n.pow(t,r),a=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),s=n.eql(i,n.neg(n.ONE));if(!a&&!o&&!s)throw Error(`invalid Legendre symbol result`);return a?1:o?0:-1}function Qy(e,t){if(t!==void 0&&Xv(t),e<=wy)throw Error(`invalid n length: expected positive n, got `+e);if(t!==void 0&&t<1)throw Error(`invalid n length: expected positive bit length, got `+t);let n=by(e);if(t!==void 0&&t<n)throw Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${n})`);let r=t===void 0?n:t;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var $y=new WeakMap,eb=class{constructor(t,n={}){if(e(this,`ORDER`,void 0),e(this,`BITS`,void 0),e(this,`BYTES`,void 0),e(this,`isLE`,void 0),e(this,`ZERO`,wy),e(this,`ONE`,Ty),e(this,`_lengths`,void 0),e(this,`_mod`,void 0),t<=Ty)throw Error(`invalid field: expected ORDER > 1, got `+t);let r;this.isLE=!1,typeof n==`object`&&n&&(typeof n.BITS==`number`&&(r=n.BITS),typeof n.sqrt==`function`&&Object.defineProperty(this,"sqrt",{value:n.sqrt,enumerable:!0}),typeof n.isLE==`boolean`&&(this.isLE=n.isLE),n.allowedLengths&&(this._lengths=Object.freeze(n.allowedLengths.slice())),typeof n.modFromBytes==`boolean`&&(this._mod=n.modFromBytes));let{nBitLength:i,nByteLength:a}=Qy(t,r);if(a>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);this.ORDER=t,this.BITS=i,this.BYTES=a,Object.freeze(this)}create(e){return Iy(e,this.ORDER)}isValid(e){if(typeof e!=`bigint`)throw TypeError(`invalid field element: expected bigint, got `+typeof e);return wy<=e&&e<this.ORDER}is0(e){return e===wy}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&Ty)===Ty}neg(e){return Iy(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return Iy(e*e,this.ORDER)}add(e,t){return Iy(e+t,this.ORDER)}sub(e,t){return Iy(e-t,this.ORDER)}mul(e,t){return Iy(e*t,this.ORDER)}pow(e,t){return Ly(e,t,this.ORDER)}div(e,t){return Iy(e*zy(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return zy(e,this.ORDER)}sqrt(e){let t=$y.get(this);return t||$y.set(this,t=Ky(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?my(e,this.BYTES):py(e,this.BYTES)}fromBytes(e,t=!1){Yv(e);let{_lengths:n,BYTES:r,isLE:i,ORDER:a,_mod:o}=this;if(n){if(e.length<1||!n.includes(e.length)||e.length>r)throw Error(`Field.fromBytes: expected `+n+` bytes, got `+e.length);let t=new Uint8Array(r);t.set(e,i?0:t.length-e.length),e=t}if(e.length!==r)throw Error(`Field.fromBytes: expected `+r+` bytes, got `+e.length);let s=i?fy(e):dy(e);if(o&&(s=Iy(s,a)),!t&&!this.isValid(s))throw Error(`invalid field element: outside of range 0..ORDER`);return s}invertBatch(e){return Xy(this,e,!0)}cmov(e,t,n){return sy(n,`condition`),n?t:e}};function tb(e,t={}){return Object.freeze(eb.prototype),new eb(e,t)}var nb=BigInt(0),rb=BigInt(1),ib=BigInt(4),ab=16,ob=128,sb=5,cb=2**31;function lb(e){let t=e;if(typeof t!=`function`)throw TypeError(`"Point" expected constructor, got type=`+typeof e);Qv(t.fromAffine,`Point.fromAffine`),Qv(t.fromBytes,`Point.fromBytes`),Qv(t.fromHex,`Point.fromHex`),Zv(t.BASE,`Point.BASE`),Zv(t.ZERO,`Point.ZERO`),Yy(t.Fp),Yy(t.Fn)}function ub(e,t){lb(e),mb(t,e);let n=Xy(e.Fp,t.map(e=>e.Z));return t.map((t,r)=>e.fromAffine(t.toAffine(n[r])))}function db(e,t,n=1){if(!Number.isSafeInteger(e)||e<n||e>t)throw Error(`invalid window size, expected [`+n+`..`+t+`], got W=`+e)}function fb(e,t){let n=e*(4*t+128);if(n>cb)throw Error(`invalid window size: table would need ~`+Math.ceil(n/2**20)+` MiB, max `+cb/2**20+` MiB`)}function pb(e,t){if(e!==void 0){Qv(e,`randomBytes`);try{let n=e(t);if(!ny(n)||n.length!==t)return}catch{return}return e}}function mb(e,t){Jv(e,`points`),e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function hb(e,t,n){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,r)=>{if(!(n===void 0?t.isValid(e):_y(e)&&e<n))throw Error(`invalid scalar at index `+r)})}var gb=new WeakMap;function _b(e){return gb.get(e)||1}function vb(e,t){let n=e.double(),r=[e];for(let e=1;e<t;e++)r.push(r[e-1].add(n));return r}function yb(e,t){let n=2**t,r=n/2,i=BigInt(n-1),a=[];for(;e>nb;){let t=0;e&rb&&(t=Number(e&i),t>=r&&(t-=n),e-=BigInt(t)),a.push(t),e>>=rb}return a}function bb(e,t,n){let r=2**t,i=r/2,a=BigInt(r-1),o=BigInt(t),s=[];for(let t=0;t<n;t++){let t=Number(e&a);e>>=o,t>i&&(t-=r,e+=rb),s.push(t)}if(e!==nb)throw Error(`invalid wnaf`);return s}function xb(e,t,n){let r=0;for(let e of n)r=Math.max(r,e.length);let i=e;for(let e=r-1;e>=0;e--){e!==r-1&&(i=i.double());for(let r=0;r<n.length;r++){let a=n[r][e];if(a){let e=t[r][Math.abs(a)-1>>1];i=i.add(a<0?e.negate():e)}}}return i}var Sb=class{constructor(t,n){e(this,`Point`,void 0),e(this,`BASE`,void 0),e(this,`ZERO`,void 0),e(this,`randomBytes`,void 0),e(this,`wnafPrecomputes`,new WeakMap),e(this,`baseCanBeBlinded`,void 0),e(this,`bits`,void 0),lb(t),this.randomBytes=pb(n,ab),this.Point=t,this.BASE=t.BASE,this.ZERO=t.ZERO,this.bits=t.Fn.BITS}buildWnafTable(e,t,n){let r=Math.ceil(n/t)+1,i=2**(t-1),a=[],o=e;for(let e=0;e<r;e++){let e=o;for(let t=0;t<i;t++)a.push(e),e=e.add(o);o=a[a.length-1].double()}return{W:t,bits:n,windows:r,comp:a}}wnafCachedCT(e,t){let{W:n,windows:r,comp:i}=e,a=2**(n-1),o=bb(t,n,r),s=this.ZERO,c=this.BASE;for(let e=0;e<r;e++){let t=o[e],n=e*a,r=Math.abs(t)-1,l=i[n];for(let e=1;e<a;e++)l=e===r?i[n+e]:l;let u=l.negate();t===0?c=c.add(i[n]):s=s.add(t<0?u:l)}return{p:s,f:c}}getWnafPrecomputes(e,t,n,r){let i=this.wnafPrecomputes.get(t),a=i?.find(t=>t.W===e&&t.bits===n);return a||(a=this.buildWnafTable(t,e,n),typeof r==`function`&&(a={...a,comp:r(a.comp)}),i||(i=[],this.wnafPrecomputes.set(t,i)),i.push(a)),a}assertPoint(e){if(!(e instanceof this.Point))throw TypeError(`"point" expected Point instance, got type=`+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!vy(t,rb,this.Point.Fn.ORDER))throw Error(`invalid scalar`)}runCT(e,t,n,r){let i=_b(e);return i===1?this.fixedWindowCT(e,t,n):this.wnafCachedCT(this.getWnafPrecomputes(i,e,n,r),t)}mulCT(e,t,n){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,n)}mulCTBlinded(e,t,n){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw Error(`randomBytes is required for scalar blinding`);let r=this.Point.Fn.BITS+ob,i=this.randomBytes(ab);if(!ny(i)||i.length!==ab)throw Error(`randomBytes returned invalid byte array`);i[0]=i[0]&63|128;let a=t+dy(i)*this.Point.Fn.ORDER;return this.runCT(e,a,r,n)}fixedWindowCT(e,t,n){let r=sb,i=xy(r),a=Array(32);a[0]=this.ZERO;for(let t=1;t<32;t++)a[t]=a[t-1].add(e);let o=Math.ceil(n/r),s=this.ZERO;for(let e=o-1;e>=0;e--){if(e!==o-1)for(let e=0;e<r;e++)s=s.double();let n=Number(t>>BigInt(e*r)&i),c=a[0];for(let e=1;e<32;e++)c=e===n?a[e]:c;s=s.add(c)}return{p:s,f:s}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===rb||e===this.BASE&&(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,n,r){return this.shouldBlind(e,n)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,n){if(this.assertPoint(e),!_y(t))throw Error(`invalid scalar`);let r=_b(e);if(r===1||t>=this.Point.Fn.ORDER)return Cb(this.Point,[e],[t],!0);let i=this.getWnafPrecomputes(r,e,this.bits,n);return this.wnafCachedCT(i,t).p}setWindowSize(e,t){this.assertPoint(e),db(t,this.bits),fb((Math.ceil((this.bits+ob)/t)+1)*2**(t-1),this.Point.Fp.BYTES),gb.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return _b(e)!==1}};function Cb(e,t,n,r=!1){if(lb(e),mb(t,e),sy(r,`allowOversized`),hb(n,e.Fn,r?e.Fn.ORDER**ib:void 0),t.length!==n.length)throw Error(`arrays of points and scalars must have equal length`);let i=t.map(e=>vb(e,4)),a=n.map(e=>yb(e,4));return xb(e.ZERO,i,a)}function wb(e,t,n){if(t){if(t.ORDER!==e)throw Error(`Field.ORDER must match order: Fp == p, Fn == n`);return Yy(t),t}return tb(e,{isLE:n})}function Tb(e,t,n={},r){if(e!==`weierstrass`&&e!==`edwards`)throw Error(`expected curve type "weierstrass" or "edwards"`);if(r===void 0&&(r=e===`edwards`),!t||typeof t!=`object`)throw Error(`expected valid ${e} CURVE object`);Sy(n);for(let e of[`p`,`n`,`h`]){let n=t[e];if(!(_y(n)&&n!==nb))throw Error(`CURVE.${e} must be positive bigint`)}let i=wb(t.p,n.Fp,r),a=wb(t.n,n.Fn,r),o=[`Gx`,`Gy`,`a`,e===`weierstrass`?`b`:`d`];for(let e of o)if(!i.isValid(t[e]))throw Error(`CURVE.${e} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:i,Fn:a}}function Eb(e,t){return function(n){let r=e(n);return{secretKey:r,publicKey:t(r)}}}var Db=BigInt(0),Ob=BigInt(1),kb=BigInt(2),Ab=BigInt(4),jb=BigInt(8);function Mb(e,t,n,r){let i=e.sqr(n),a=e.sqr(r),o=e.add(e.mul(t.a,i),a),s=e.add(e.ONE,e.mul(t.d,e.mul(i,a)));return e.eql(o,s)}function Nb(t,n={}){var r;Sy(n,{},{},`extraOpts`);let i=n,a=Tb(`edwards`,t,i,i.FpFnLE),{Fp:o,Fn:s}=a,c=a.CURVE,{h:l}=c;if(Zy(o,c.a)!==1)throw Error(`edwards: CURVE.a must be a square in Fp for complete addition formulas`);if(Zy(o,c.d)!==-1)throw Error(`edwards: CURVE.d must be a non-square in Fp for complete addition formulas`);Sy(i,{},{uvRatio:`function`,randomBytes:`function`});let u=i.randomBytes===void 0?ry:i.randomBytes,d=kb<<BigInt(o.BYTES*8)-Ob;function f(e){if(!o.isOdd)throw Error(`Field does not have .isOdd()`);return o.isOdd(e)}let p=i.uvRatio===void 0?(e,t)=>{try{return{isValid:!0,value:o.sqrt(o.div(e,t))}}catch{return{isValid:!1,value:Db}}}:i.uvRatio;if(!Mb(o,c,c.Gx,c.Gy))throw Error(`bad curve params: generator point`);let m=o.eql(c.a,o.neg(o.ONE))?e=>o.neg(e):o.eql(c.a,o.ONE)?e=>e:e=>o.mul(c.a,e);function h(e,t,n=!1){let r=n?Ob:Db;return yy(`coordinate `+e,t,r,d),t}function g(e){if(!(e instanceof _))throw Error(`EdwardsPoint expected`)}class _{constructor(t,n,r,i){e(this,`X`,void 0),e(this,`Y`,void 0),e(this,`Z`,void 0),e(this,`T`,void 0),this.X=h(`x`,t),this.Y=h(`y`,n),this.Z=h(`z`,r,!0),this.T=h(`t`,i),Object.freeze(this)}static CURVE(){return c}static fromAffine(e){if(e instanceof _)throw Error(`extended point not allowed`);let{x:t,y:n}=e||{};return h(`x`,t),h(`y`,n),new _(t,n,o.ONE,o.mul(t,n))}static fromBytes(e,t=!1){let n=o.BYTES,{a:r,d:i}=c;e=gy(Yv(e,n,`point`)),sy(t,`zip215`);let a=gy(e),s=e[n-1];a[n-1]=s&-129;let l=fy(a);yy(`point.y`,l,Db,t?d:o.ORDER);let u=o.sqr(l),m=o.sub(u,o.ONE),h=o.sub(o.mulN(i,u),r),{isValid:g,value:v}=p(m,h);if(!g)throw Error(`bad point: invalid y coordinate`);let y=f(v),b=!!(s&128);if(!t&&o.is0(v)&&b)throw Error(`bad point: x=0 and x_0=1`);return b!==y&&(v=o.neg(v)),_.fromAffine({x:v,y:l})}static fromHex(e,t=!1){return _.fromBytes(ty(e),t)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(e=6,t=!0){return y.setWindowSize(this,e),t||this.multiply(kb),this}assertValidity(){let e=this,{a:t,d:n}=c;if(e.is0())throw Error(`bad point: ZERO`);let{X:r,Y:i,Z:a,T:s}=e,l=o.sqr(r),u=o.sqr(i),d=o.sqr(a),f=o.sqr(d),p=o.mul(l,t),m=o.mul(o.add(p,u),d),h=o.add(f,o.mul(n,o.mul(l,u)));if(!o.eql(m,h))throw Error(`bad point: equation left != right (1)`);let g=o.mul(r,i),_=o.mul(a,s);if(!o.eql(g,_))throw Error(`bad point: equation left != right (2)`)}equals(e){g(e);let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:s}=e,c=o.mul(t,s),l=o.mul(i,r),u=o.mul(n,s),d=o.mul(a,r);return o.eql(c,l)&&o.eql(u,d)}is0(){return this.equals(_.ZERO)}negate(){return new _(o.neg(this.X),this.Y,this.Z,o.neg(this.T))}double(){let{X:e,Y:t,Z:n}=this,r=o.sqr(e),i=o.sqr(t),a=o.mul(o.sqr(n),kb),s=m(r),c=o.addN(e,t),l=o.sub(o.subN(o.sqr(c),r),i),u=o.addN(s,i),d=o.subN(u,a),f=o.subN(s,i),p=o.mul(l,d),h=o.mul(u,f),g=o.mul(l,f),v=o.mul(d,u);return new _(p,h,v,g)}add(e){g(e);let{d:t}=c,{X:n,Y:r,Z:i,T:a}=this,{X:s,Y:l,Z:u,T:d}=e,f=o.mul(n,s),p=o.mul(r,l),h=o.mul(o.mulN(a,t),d),v=o.mul(i,u),y=o.sub(o.subN(o.mulN(o.addN(n,r),o.addN(s,l)),f),p),b=o.subN(v,h),x=o.addN(v,h),S=o.sub(p,m(f)),C=o.mul(y,b),w=o.mul(x,S),T=o.mul(y,S),E=o.mul(b,x);return new _(C,w,E,T)}subtract(e){return g(e),this.add(e.negate())}multiply(e){if(!s.isValidNot0(e))throw RangeError(`invalid scalar: expected 1 <= sc < curve.n`);let{p:t,f:n}=y.mulSecret(this,e,l,v);return v([t,n])[0]}multiplyUnsafe(e){if(!s.isValid(e))throw RangeError(`invalid scalar: expected 0 <= sc < curve.n`);return e===Db?_.ZERO:this.is0()||e===Ob?this:y.mulUnsafe(this,e,v)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return y.mulUnsafe(this,c.n).is0()}toAffine(e){let t=this,n=e;if(n!=null&&typeof n!=`bigint`)throw TypeError(`"invertedZ" expected bigint, got type=`+typeof n);let{X:r,Y:i,Z:a}=t,s=t.is0();n??(n=s?o.create(jb):o.inv(a));let c=o.mul(r,n),l=o.mul(i,n),u=o.mul(a,n);if(s)return{x:o.ZERO,y:o.ONE};if(!o.eql(u,o.ONE))throw Error(`invZ was invalid`);return{x:c,y:l}}clearCofactor(){return l===Ob?this:l===kb?this.double():l===Ab?this.double().double():l===jb?this.double().double().double():this.multiplyUnsafe(l)}toBytes(){let{x:e,y:t}=this.toAffine(),n=o.toBytes(t);return n[n.length-1]|=f(e)?128:0,n}toHex(){return $v(this.toBytes())}toString(){return`<Point ${this.is0()?`ZERO`:this.toHex()}>`}}r=_,e(_,`BASE`,new r(c.Gx,c.Gy,o.ONE,o.mul(c.Gx,c.Gy))),e(_,`ZERO`,new r(o.ZERO,o.ONE,o.ONE,o.ZERO)),e(_,`Fp`,o),e(_,`Fn`,s);let v=e=>ub(_,e),y=new Sb(_,u);return y.bits>=6&&_.BASE.precompute(6),Object.freeze(_.prototype),Object.freeze(_),_}var Pb=class{constructor(t){e(this,`ep`,void 0),this.ep=t}static fromBytes(e){Cy()}static fromHex(e){Cy()}get x(){return this.toAffine().x}get y(){return this.toAffine().y}clearCofactor(){return this}assertValidity(){this.ep.assertValidity()}toAffine(e){return this.ep.toAffine(e)}toHex(){return $v(this.toBytes())}toString(){return this.toHex()}isTorsionFree(){return!0}isSmallOrder(){return!1}add(e){return this.assertSame(e),this.init(this.ep.add(e.ep))}subtract(e){return this.assertSame(e),this.init(this.ep.subtract(e.ep))}multiply(e){return this.init(this.ep.multiply(e))}multiplyUnsafe(e){return this.init(this.ep.multiplyUnsafe(e))}double(){return this.init(this.ep.double())}negate(){return this.init(this.ep.negate())}precompute(e,t){return this.ep.precompute(e,t),this}};e(Pb,`BASE`,void 0),e(Pb,`ZERO`,void 0),e(Pb,`Fp`,void 0),e(Pb,`Fn`,void 0);function Fb(e,t,n={}){if(lb(e),typeof t!=`function`)throw Error(`"hash" function param is required`);let r=t,i=n;Sy(i,{},{adjustScalarBytes:`function`,randomBytes:`function`,domain:`function`,prehash:`function`,zip215:`boolean`,mapToCurve:`function`,toMontgomery:`function`,toMontgomerySecret:`function`});let{prehash:a}=i,{BASE:o,Fp:s,Fn:c}=e,l=r.outputLen,u=2*s.BYTES;if(l!==void 0&&(ly(l,`hash.outputLen`),l!==u))throw Error(`hash.outputLen must be ${u}, got ${l}`);let d=i.randomBytes===void 0?ry:i.randomBytes,f=i.toMontgomery,p=i.toMontgomerySecret,m=i.adjustScalarBytes===void 0?e=>e:i.adjustScalarBytes,h=i.domain===void 0?(e,t,n)=>{if(sy(n,`phflag`),t.length||n)throw Error(`Contexts/pre-hash are not supported`);return e}:i.domain;function g(e){return c.create(fy(e))}function _(e){let t=T.secretKey;Yv(e,T.secretKey,`secretKey`);let n=Yv(r(e),2*t,`hashedSecretKey`),i=m(n.slice(0,t));return{head:i,prefix:n.slice(t,2*t),scalar:g(i)}}function v(e){let{head:t,prefix:n,scalar:r}=_(e),i=o.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}}function y(e){return v(e).pointBytes}function b(e=Uint8Array.of(),...t){let n=ey(...t);return g(r(h(n,Yv(e,void 0,`context`),!!a)))}function x(e,t,n={}){Sy(n,{},{},`options`),e=gy(Yv(e,void 0,`message`)),a&&(e=a(e));let{prefix:r,scalar:i,pointBytes:s}=v(t),l=b(n.context,r,e),u=o.multiply(l).toBytes(),d=b(n.context,u,s,e),f=c.create(l+d*i);if(!c.isValid(f))throw Error(`sign failed: invalid s`);return Yv(ey(u,c.toBytes(f)),T.signature,`result`)}let S={zip215:i.zip215};function C(t,n,r,i=S){Sy(i);let{context:s}=i,c=i.zip215===void 0?!!S.zip215:i.zip215,l=T.signature;t=Yv(t,l,`signature`),n=Yv(n,void 0,`message`),r=Yv(r,T.publicKey,`publicKey`),c!==void 0&&sy(c,`zip215`),a&&(n=a(n));let u=l/2,d=t.subarray(0,u),f=fy(t.subarray(u,l)),p,m,h;try{p=e.fromBytes(r,c),m=e.fromBytes(d,c),h=o.multiplyUnsafe(f)}catch{return!1}if(!c&&p.isSmallOrder())return!1;let g=b(s,d,r,n);return m.add(p.multiplyUnsafe(g)).subtract(h).clearCofactor().is0()}let w=s.BYTES,T={secretKey:w,publicKey:w,signature:2*w,seed:w};function E(e){return e=e===void 0?d(T.seed):e,Yv(e,T.seed,`seed`)}function D(e){return ny(e)&&e.length===T.secretKey}function O(t,n){try{return!!e.fromBytes(t,n===void 0?S.zip215:n)}catch{return!1}}let k={getExtendedPublicKey:v,randomSecretKey:E,isValidSecretKey:D,isValidPublicKey:O,toMontgomery(t){if(f===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return f(e.fromBytes(t))},toMontgomerySecret(e){if(p===void 0)throw Error(`Montgomery conversion is not supported for this curve`);return p(e)}};return Object.freeze(T),Object.freeze(k),Object.freeze({keygen:Eb(E,y),getPublicKey:y,sign:x,verify:C,utils:k,Point:e,lengths:T})}var Ib,Lb=BigInt(1),Rb=BigInt(2),zb=BigInt(5),Bb=BigInt(8),Vb=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed`),Hb={p:Vb,n:BigInt(`0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed`),h:Bb,a:BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec`),d:BigInt(`0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3`),Gx:BigInt(`0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`),Gy:BigInt(`0x6666666666666666666666666666666666666666666666666666666666666658`)};function Ub(e){let t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),a=Vb,o=e*e%a*e%a,s=Ry(Ry(o,Rb,a)*o%a,Lb,a)*e%a,c=Ry(s,zb,a)*s%a,l=Ry(c,t,a)*c%a,u=Ry(l,n,a)*l%a,d=Ry(u,r,a)*u%a;return{pow_p_5_8:Ry(Ry(Ry(Ry(d,i,a)*d%a,i,a)*d%a,t,a)*c%a,Rb,a)*e%a,b2:o}}function Wb(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}var Gb=BigInt(`19681161376707505956807079304988542015446066515923890162744021073123829784752`);function Kb(e,t){let n=Vb,r=Iy(t*t*t,n),i=Ub(e*Iy(r*r*t,n)).pow_p_5_8,a=Iy(e*r*i,n),o=Iy(t*a*a,n),s=a,c=Iy(a*Gb,n),l=o===e,u=o===Iy(-e,n),d=o===Iy(-e*Gb,n);return l&&(a=s),(u||d)&&(a=c),qy(a,n)&&(a=Iy(-a,n)),{isValid:l||u,value:a}}var qb=Nb(Hb,{uvRatio:Kb}),J=qb.Fp;function Jb(e){let{y:t}=e;return J.toBytes(J.div(Lb+t,Lb-t))}function Yb(e){let t=qb.Fp.BYTES;return xv(e,t),Wb(qv(e.subarray(0,t))).subarray(0,t)}var Xb=qb.Fn;function Zb(e){return Fb(qb,qv,Object.assign({adjustScalarBytes:Wb,toMontgomery:Jb,toMontgomerySecret:Yb,zip215:!0},e))}var Qb=Zb({}),$b=Gb,ex=BigInt(`54469307008909316920995813868745141605393597292927456921205312896311721017578`),tx=e=>Kb(Lb,e),nx=BigInt(`0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`),rx=e=>J.create(fy(e)&nx),ix=class e extends Pb{constructor(e){super(e)}static fromAffine(t){return new e(qb.fromAffine(t))}assertSame(t){if(!(t instanceof e))throw Error(`RistrettoPoint expected`)}init(t){return new e(t)}static fromBytes(t){xv(t,32);let{a:n,d:r}=Hb,i=rx(t);if(!hy(J.toBytes(i),t)||J.isOdd(i))throw Error(`invalid ristretto255 encoding 1`);let a=J.sqr(i),o=J.add(Lb,J.mulN(n,a)),s=J.sub(Lb,J.mulN(n,a)),c=J.sqr(o),l=J.sqr(s),u=J.sub(J.mulN(J.mulN(n,r),c),l),{isValid:d,value:f}=tx(J.mul(u,l)),p=J.mul(f,s),m=J.mul(J.mulN(f,p),u),h=J.mul(J.addN(i,i),p);J.isOdd(h)&&(h=J.neg(h));let g=J.mul(o,m),_=J.mul(h,g);if(!d||J.isOdd(_)||J.is0(g))throw Error(`invalid ristretto255 encoding 2`);return new e(new qb(h,g,J.ONE,_))}static fromHex(t){return e.fromBytes(Mv(t))}toBytes(){let{X:e,Y:t,Z:n,T:r}=this.ep,i=J.mul(J.add(n,t),J.sub(n,t)),a=J.mul(e,t),o=J.sqr(a),{value:s}=tx(J.mul(i,o)),c=J.mul(s,i),l=J.mul(s,a),u=J.mul(J.mulN(c,l),r),d;if(J.isOdd(J.mul(r,u))){let n=J.mul(t,$b),r=J.mul(e,$b);e=n,t=r,d=J.mul(c,ex)}else d=l;J.isOdd(J.mul(e,u))&&(t=J.neg(t));let f=J.mul(J.subN(n,t),d);return J.isOdd(f)&&(f=J.neg(f)),J.toBytes(f)}equals(e){this.assertSame(e);let{X:t,Y:n}=this.ep,{X:r,Y:i}=e.ep,a=J.eql(J.mul(t,i),J.mul(n,r)),o=J.eql(J.mul(n,i),J.mul(t,r));return a||o}is0(){return this.equals(e.ZERO)}};Ib=ix,e(ix,`BASE`,new Ib(qb.BASE)),e(ix,`ZERO`,new Ib(qb.ZERO)),e(ix,`Fp`,J),e(ix,`Fn`,Xb);var ax=cx(`05d32d846dbe1d7f690760f173c37090b8b0f2b1c0ed6e100fc6c16cf76b6e43`),ox=`muzzamilkhan.com/atomics/v1`,sx=2e5;function cx(e){let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(n*2,2),16);return t}function lx(e,t){if(e.length!==t.length)return!1;let n=0;for(let r=0;r<e.length;r++)n|=e[r]^t[r];return n===0}var ux=class{constructor(){this.fails=0,this.lockedUntil=0}async tryCode(e){if(Date.now()<this.lockedUntil)return`locked`;if(!crypto.subtle)return`unsupported`;let t=new TextEncoder,n=await crypto.subtle.importKey(`raw`,t.encode(e),`PBKDF2`,!1,[`deriveBits`]),r=await crypto.subtle.deriveBits({name:`PBKDF2`,hash:`SHA-256`,salt:t.encode(ox),iterations:sx},n,256),i=new Uint8Array(r);return lx(Qb.getPublicKey(i),ax)?(this.fails=0,`ok`):(this.fails++,this.fails>=3&&(this.fails=0,this.lockedUntil=Date.now()+3e4),`wrong`)}get lockSeconds(){return Math.max(0,Math.ceil((this.lockedUntil-Date.now())/1e3))}},dx=1.7,fx=80,px=`
varying vec3 vN;
varying vec3 vP;
void main() {
  vN = normalize(normalMatrix * normal);
  vP = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,mx=`
uniform float uHeat;
uniform float uOpacity;
uniform float uTime;
varying vec3 vN;
varying vec3 vP;
float h(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float n3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h(i), h(i + vec3(1, 0, 0)), f.x), mix(h(i + vec3(0, 1, 0)), h(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h(i + vec3(0, 0, 1)), h(i + vec3(1, 0, 1)), f.x), mix(h(i + vec3(0, 1, 1)), h(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
void main() {
  float facing = clamp(vN.z, 0.0, 1.0);
  float turb = n3(vP * 2.2 + vec3(0.0, -uTime * 1.5, 0.0)) * 0.6 + n3(vP * 5.0 - uTime) * 0.4;
  float core = clamp(pow(facing, 1.6) * (0.65 + 0.7 * turb) * 1.3, 0.0, 1.0);
  vec3 hot = vec3(6.0, 4.6, 3.0);
  vec3 warm = vec3(3.2, 1.2, 0.35);
  vec3 cool = vec3(0.9, 0.22, 0.07);
  vec3 col = mix(cool, mix(warm, hot, uHeat), core) * (0.35 + 0.65 * uHeat + 0.3 * core);
  float a = uOpacity * smoothstep(0.0, 0.55, facing) * (0.55 + 0.45 * turb);
  gl_FragColor = vec4(col, a);
}
`,hx=class{constructor(e,{particles:t,trails:n,hooks:r}){this.scene=e,this.particles=t,this.trails=n,this.hooks=r,this.bombs=[],this.blasts=[],this.light=new vc(16756848,0,120,1.4),e.add(this.light),this.bombGeo=new ja(.35,1.3,4,10),this.bombMat=new G({color:`#2b2622`,metalness:.7,roughness:.4}),this.trailMat=new gi({color:new H(3,2.2,1.4),transparent:!0,opacity:.85,depthWrite:!1}),this.fireGeo=new is(1,24,16),this.ringGeo=new ts(.92,1,64).rotateX(-Math.PI/2),this._c=new H}drop(e,t=.55){e.forEach(([e,n],r)=>{let i=new V,a=new W(this.bombGeo,this.bombMat),o=new W(new Na(.05,.35,14,8).translate(0,7.5,0),this.trailMat);i.add(a,o),i.visible=!1,this.scene.add(i),this.bombs.push({x:e,z:n,group:i,t:-r*t,whistled:!1})})}get active(){return this.bombs.length>0||this.blasts.length>0}update(e,t){for(let n=this.bombs.length-1;n>=0;n--){let r=this.bombs[n];if(r.t+=e,r.t<0)continue;r.whistled||(r.whistled=!0,this.hooks.sound(`whistle`));let i=q(r.x,r.z),a=Math.min(1,r.t/dx);r.group.visible=!0,r.group.position.set(r.x+(1-a)*6,i+fx*(1-a*a),r.z-(1-a)*4),a>=1&&(this.scene.remove(r.group),r.group.children[1].geometry.dispose(),this.bombs.splice(n,1),this._detonate(r.x,i,r.z,t))}let n=0,r=0,i=0,a=0;for(let o=this.blasts.length-1;o>=0;o--){let s=this.blasts[o];s.t+=e;let c=s.t,l=1+(1-Math.exp(-c*4))*5.5;s.fire.scale.set(l,l*.9,l),s.fire.position.y=s.y+2+Math.max(0,c-.5)*5;let u=s.fire.material.uniforms;u.uHeat.value=Math.exp(-c*1.1),u.uTime.value=c,u.uOpacity.value=Math.max(0,1-Math.max(0,c-1)/2.2);let d=2+c*34;if(s.ring.scale.set(d,1,d),s.ring.material.opacity=Math.max(0,.4*(1-c/1.6)),c<4.5){s.acc+=e*70;let n=s.y+4+Math.min(c,3.5)*9,r=this._c.copy(this.particles.dustColor).multiply(t).multiplyScalar(.5);for(;s.acc>=1;){--s.acc;let e=Math.random()*Math.PI*2;if(Math.random()<.55){let t=Math.random()*.9;this.particles.spawn(Wp.DUST,s.x+Math.cos(e)*t,s.y+1+Math.random()*(n-s.y)*.7,s.z+Math.sin(e)*t,Math.cos(e)*.25,4+Math.random()*3,Math.sin(e)*.25,1+Math.random()*.7,3.5+Math.random()*2,r,.32,{grow:.7,drag:.06})}else{let t=1.5+Math.min(c,3)*1.6+Math.random()*1.5,i=c<1.2?this._c.setRGB(2.4,1.1,.4):r,a=1+Math.random()*1.4;this.particles.spawn(Wp.DUST,s.x+Math.cos(e)*t,n+(Math.random()-.3)*2.5,s.z+Math.sin(e)*t,Math.cos(e)*a,.8+Math.random()*1.2,Math.sin(e)*a,1.8+Math.random()*1.2,5+Math.random()*3,i,c<1.2?.4:.34,{grow:1.2,drag:.12})}}}let f=Math.exp(-c*1.6);f>n&&(n=f,r=s.x,i=s.fire.position.y+3,a=s.z),c>5&&(this.scene.remove(s.fire,s.ring),s.fire.material.dispose(),s.ring.material.dispose(),this.blasts.splice(o,1))}this.light.intensity=n*900,this.light.position.set(r,i,a)}_detonate(e,t,n,r){let i=new W(this.fireGeo,new ms({uniforms:{uHeat:{value:1},uOpacity:{value:1},uTime:{value:0}},vertexShader:px,fragmentShader:mx,transparent:!0,depthWrite:!1}));i.position.set(e,t+2,n),i.renderOrder=7;let a=new W(this.ringGeo,new gi({color:new H(1.15,.85,.6),transparent:!0,opacity:.4,depthWrite:!1,side:2}));a.position.set(e,t+.4,n),a.renderOrder=7,this.scene.add(i,a),this.blasts.push({x:e,y:t,z:n,fire:i,ring:a,t:0,acc:0}),Lf(e,n,11,3,30),this.trails.stamp(ep.CRATER,e,n,0,34,34,2.6,.8,1),this.trails.stamp(ep.RING,e,n,0,60,60,0,.05,1),this.particles.burst(e,t+.5,n,1600,18,r,{radius:4,dust:.15,puff:1.8,grow:2.2,chunk:2.4,dustAlpha:.2}),this.hooks.flash(),this.hooks.shake(e,n),this.hooks.knock(e,n),this.hooks.sound(`boom`)}};function gx(e,t,n=5){let r=[],i=Math.random()*Math.PI*2;for(let a=0;a<n;a++){let o=i+a/n*Math.PI*2+(Math.random()-.5)*.8,s=18+Math.random()*24;r.push([Math.round((e+Math.cos(o)*s)*10)/10,Math.round((t+Math.sin(o)*s)*10)/10])}return r}var _x=e=>document.getElementById(e),vx=class{constructor({key:e,onLaunch:t,onOpen:n,onClose:r}){this.key=e,this.onLaunch=t,this.onOpen=n,this.onClose=r,this.root=_x(`launch`),this.box=this.root.querySelector(`.launch-box`),this.field=_x(`launchCode`),this.msg=_x(`launchMsg`),this.code=``,this.busy=!1,this.timer=0;let i=_x(`launchPad`);for(let e of[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`clear`,`0`,`launch`]){let t=document.createElement(`button`);t.type=`button`,t.className=`lp-key lp-${e}`,t.textContent=e===`clear`?`Clear`:e===`launch`?`Launch`:e,t.addEventListener(`click`,()=>this._press(e)),i.append(t)}_x(`launchCancel`).addEventListener(`click`,()=>this.hide()),this.root.addEventListener(`click`,e=>{e.target===this.root&&this.hide()}),window.addEventListener(`keydown`,e=>{if(this.isOpen){if(e.stopImmediatePropagation(),e.code===`Escape`)this.hide();else if(e.code===`Enter`||e.code===`NumpadEnter`)this._press(`launch`);else if(e.code===`Backspace`)this._press(`back`);else if(/^\d$/.test(e.key))this._press(e.key);else return;e.preventDefault()}},!0),window.addEventListener(`keyup`,e=>this.isOpen&&e.stopImmediatePropagation(),!0)}get isOpen(){return!this.root.hidden}show(){this.isOpen||(this.code=``,this.busy=!1,clearInterval(this.timer),this.root.classList.remove(`armed`),this._say(this.key.lockSeconds?`Locked. Try again in ${this.key.lockSeconds} s.`:`Authorised personnel only.`),this._render(),this.root.hidden=!1,this.onOpen(),this.root.querySelector(`.lp-1`).focus({preventScroll:!0}))}hide(){this.isOpen&&(clearInterval(this.timer),this.root.hidden=!0,this.code=``,this.onClose())}_say(e){this.msg.textContent=e}_render(){this.field.textContent=this.code?`•`.repeat(this.code.length):``,this.field.classList.toggle(`empty`,!this.code)}async _press(e){if(!this.busy){if(e===`clear`)this.code=``;else if(e===`back`)this.code=this.code.slice(0,-1);else if(e===`launch`)return this._submit();else this.code.length<16&&(this.code+=e);this._render()}}async _submit(){if(!this.code)return;this.busy=!0,this._say(`Verifying…`);let e;try{e=await this.key.tryCode(this.code)}catch{e=`unsupported`}if(this.code=``,this._render(),e===`ok`){this.root.classList.add(`armed`);let e=3;this._say(`Codes accepted. Launch in ${e}…`),this.timer=setInterval(()=>{e--,e>0?this._say(`Codes accepted. Launch in ${e}…`):(clearInterval(this.timer),this.hide(),this.onLaunch())},1e3)}else this.busy=!1,e===`locked`?this._say(`Locked. Try again in ${this.key.lockSeconds} s.`):e===`unsupported`?this._say(`This browser cannot check codes.`):(this._say(this.key.lockSeconds?`Codes rejected. Locked for ${this.key.lockSeconds} s.`:`Codes rejected.`),this.box.classList.remove(`shake`),this.box.offsetWidth,this.box.classList.add(`shake`))}},yx=document.getElementById(`scene`),bx;try{bx=new Cf({canvas:yx,antialias:!1,powerPreference:`high-performance`,stencil:!1})}catch(e){if(c.site&&c.site.plain)window.location.replace(c.site.plain);else{let e=document.getElementById(`introLede`);e.textContent=`This résumé is an interactive desert, and your browser could not start WebGL. The PDF below has everything.`,document.querySelector(`.intro-actions`).remove(),document.querySelector(`.intro-keys`).remove(),document.getElementById(`introLinks`).append(...tg({profile:c.profile,site:c.site||{}})),document.body.classList.add(`ready`)}throw e}var xx=new URLSearchParams(window.location.search),Sx=xx.has(`edit`),Cx=null,wx=xx.has(`pr`)?nn.clamp(parseFloat(xx.get(`pr`))||1,.5,3):null,Tx=Math.min(window.devicePixelRatio||1,1.75),Ex=wx??Math.min(Tx,1.5);bx.setPixelRatio(Ex),bx.setSize(window.innerWidth,window.innerHeight,!1),bx.shadowMap.enabled=!0,bx.shadowMap.type=1,bx.toneMapping=4;var Dx=new cr,Ox=new yc(-10,10,10,-10,1,600),kx=new fp(Dx),Ax=new op(bx,{size:64,res:2048}),jx=$f(Ax.uniforms);Dx.add(jx.mesh);var Mx=new cm(Dx),Y=new Up;Dx.add(Y.root);var Nx=new qp(16e3);Dx.add(Nx.points);var X=new Tm(Dx);function Px(){if(!xx.has(`preview`))return null;try{let e=JSON.parse(localStorage.getItem(`arrakis.preview`));return!e||!e.site||!e.site.profile||!Array.isArray(e.site.entries)?null:(n(new Map((Array.isArray(e.overrides)?e.overrides:[]).filter(e=>Array.isArray(e)&&typeof e[0]==`string`&&i(e[1])))),e.site)}catch{return null}}var Fx=Px(),Ix=Fx||c,Lx=l(Ix),Z=new Wh(Dx,Lx),Rx=new Em,zx=Hm(bx,Dx,Ox);zx.setSize(window.innerWidth,window.innerHeight,Ex);var Bx=new W(new ts(.28,.36,40).rotateX(-Math.PI/2),new gi({color:new H(1.6,1.2,.8),transparent:!0,opacity:0,depthWrite:!1}));Bx.renderOrder=5,Dx.add(Bx);var Vx=0,Hx=[`The Deep Desert`,`Habbanya Erg`,`The Funeral Plain`,`Cielago Depression`,`The Great Flat`,`Tanzerouft`,`The Minor Erg`,`Sihaya Ridge`,`False Wall South`,`The Broken Land`,`Plaster Basin`,`Red Chasm Sands`],Ux=0;function Wx(e){Ux=e>>>0;let t=Xp(Ux),n=Math.floor(t()*2e4)-1e4,r=Math.floor(t()*2e4)-1e4;kf(n,r),jx.uniforms.uSeed.value.set(n,r),qx.setRegion(Hx[Ux%Hx.length]);try{history.replaceState(null,``,`#seed=${Ux}`)}catch{}}function Gx(){let e={x:0,z:0},t={x:0,z:0,s:1/0};for(let n=0;n<60;n++){let r=n*2.39996,i=1.5*Math.sqrt(n),a=Math.cos(r)*i,o=Math.sin(r)*i;Vf(a,o,e);let s=Math.hypot(e.x,e.z);if(s<t.s&&(t={x:a,z:o,s}),s<.12)break}return t}var Kx=!1,qx=new Gm({enter:()=>Jx(),enterRead:()=>{Jx(),iS(Lx[0].id)},time:e=>SS(e),thumper:()=>MS(),sandwalk:()=>wS(),storm:()=>OS(),seed:()=>PS(),sound:()=>AS(),arcade:()=>vC(),atomics:()=>TC.show()});function Jx(){Kx||(Kx=!0,qx.enter(),kS&&(Rx.start(),Rx.resume()),Q.heightTarget=20,Y.rhythm=0,yx.focus(),setTimeout(()=>{Zx.found.size||qx.toast(`The waystones are glowing. Follow the light.`,4)},900))}var Yx=[`No`,`One`,`Two`,`Three`,`Four`,`Five`,`Six`,`Seven`,`Eight`,`Nine`,`Ten`,`Eleven`,`Twelve`];function Xx(){let e=Ix.profile||{};document.getElementById(`introName`).textContent=e.name||``,document.getElementById(`introTitle`).textContent=e.headline||e.title||``,document.getElementById(`wordmark`).textContent=e.name||``;let t=Lx.filter(e=>e.kind!==`project`).length,n=Lx.length-t;document.getElementById(`introLede`).textContent=e.intro||`${Yx[t]??t} waystones stand in the deep desert, one for every chapter of the road so far.`+(n?` The other way, ${n>1?`landing pads hold`:`a landing pad holds`} what I'm building now.`:``)+` Walk out and read them.`+([`worm`,`ride`,`race`].some(e=>!(Ix.games&&Ix.games[e]&&Ix.games[e].hidden))?` Off to one side, there are games to play.`:``),document.getElementById(`introLinks`).replaceChildren(...tg({profile:e,site:Ix.site||{}}))}Xx();var Zx=new ng({profile:Ix.profile,site:Ix.site||{},entries:Lx,handlers:{select:e=>iS(e),close:()=>aS(),step:e=>oS(e)}}),Qx=null,$x=null,eS=null,tS=0;function nS(e,t,n=!1){Zx.open(e.entry,t,n),Z.selectedId=e.entry.id}function rS(e){Ix=e,Lx=l(Ix);let t=new Set(Z.stones.filter(e=>e.found).map(e=>e.entry.id)),n=Z.selectedId;Z.dispose(),Z=new Wh(Dx,Lx);for(let e of Z.stones)t.has(e.entry.id)&&(e.found=!0);Z.selectedId=n&&Z.byId(n)?n:null,Qx=null,eS=null;let r=Ix.world&&Number.isFinite(Ix.world.seed)?Ix.world.seed>>>0:KC;Sx&&r!==Ux?PS(r):pS(fS.x,fS.z),Sx&&Ix.world&&Number.isFinite(Ix.world.time)&&SS(Ix.world.time),Zx.setContent({profile:Ix.profile,site:Ix.site||{},entries:Lx}),Xx()}function iS(e){let t=Z.byId(e);if(!t)return;$x=null,nS(t,`codex`),window.innerWidth<=760&&Zx.toggleCollapsed(!0);let n=Math.hypot(t.x-Y.pos.x,t.z-Y.pos.z);if(n>t.wake){let e=Z.approachPoint(t,Y.pos.x,Y.pos.z);eC(e.x,e.z,n>9),Qx=t}}function aS(){Zx.isOpen&&($x=Zx.currentId,Qx&&Qx.entry.id===Zx.currentId&&(Qx=null,GS=null),Zx.close(),Z.selectedId=null)}function oS(e){let t=Lx.findIndex(e=>e.id===Zx.currentId),n=Lx.length;iS(Lx[t<0?e>0?0:n-1:(t+e+n)%n].id)}function sS(e){e.found=!0,Zx.setFound(e.entry.id),Z.awaken(e,Nx,Ax,kx.litTint),Rx.chime(e.kind);let t=Zx.found.size;t===Lx.length?(qx.toast(`Every waystone found. The desert stirs…`,4),tS=3.5):qx.toast(t===1?`A waystone wakes as you near it.`:`${t} of ${Lx.length} waystones found.`,3)}function cS(e){Qx===e&&(Qx=null),e.found||sS(e),Zx.isOpen&&Zx.source===`codex`&&Qx&&Qx!==e||e.entry.id!==$x&&nS(e,`proximity`)}function lS(e,t,n){let r=Z.update(e,t,{px:Cx?Cx.focus.x:Y.pos.x,pz:Cx?Cx.focus.z:Y.pos.z,camYaw:Q.yaw,focusX:Q.focus.x,focusZ:Q.focus.z,viewR:n,night:kx.isNight,particles:Nx,tint:kx.litTint});Rx.thopter(Math.max(Z.thrum,$.thrum,_C?_C.thrum:0));let i=r.stone,a=Kx&&i&&r.rel<0?i.entry.id:null;if(a!==eS&&(eS&&$x===eS&&($x=null),eS=a,a&&cS(i)),Zx.isOpen&&Zx.source===`proximity`){let e=Z.byId(Zx.currentId);e&&Math.hypot(e.x-Y.pos.x,e.z-Y.pos.z)>e.wake+4.5&&(Zx.close(),Z.selectedId=null)}tS>0&&(tS-=e,tS<=0&&uS())}function uS(){if(X.active)return;let e=-Math.sin(Q.yaw),t=-Math.cos(Q.yaw),n=Y.pos.x+e*20,r=Y.pos.z+t*20;X.summon({kind:`finale`,x:n,z:r},Math.atan2(t,e)+(Math.random()-.5)*.8,90)}var dS=nn.degToRad(12),fS={x:0,z:0};function pS(e,t){fS={x:e,z:t};let n=.45,r=-.89,i=Math.cos(dS)*n-Math.sin(dS)*r,a=-Math.sin(dS)*n-Math.cos(dS)*r,o=Math.atan2(a,i);$.layout(e,t,o,Ix.games);let s=JSON.stringify([e,t,o,Ix.games||null,Ux]);s!==gS&&(gS=s,Mx.setExclusion((e,t,n)=>$.corridor(e,t,n))),Z.layout(e,t,o,(e,t,n)=>Mx.nearRock(e,t,n)||$.keepsClear(e,t,n)),_C&&(_C.configure(X_(Ix.world,mS)),_C.reset(fS)),hS=Ix.world&&Number.isFinite(Ix.world.cycle)?Math.max(0,Ix.world.cycle):24}var mS=window.matchMedia(`(pointer: coarse)`).matches||Math.min(window.innerWidth,window.innerHeight)<500,hS=24,gS=``,_S=new R,vS=new R,yS=new R,bS=new Map;function xS(){let e=window.innerWidth,t=window.innerHeight,n=e/t;yS.copy(Y.pos).project(Ox);for(let r of Z.stones){Z.anchor(r,_S).project(Ox),vS.set(r.x,r.y,r.z).project(Ox);let i=(_S.x*.5+.5)*e,a=(-_S.y*.5+.5)*t,o=Math.min(i*1.75,(e-i)*1.75,a-56,t-20-a),s=Math.hypot(r.x-Y.pos.x,r.z-Y.pos.z),c=bS.get(r.entry.id);c||bS.set(r.entry.id,c={}),c.sx=i,c.sy=a,c.alpha=Math.min(1,Math.max(0,o/70)),c.dist=s,c.here=s<r.wake,c.angle=Math.atan2(-(vS.y-yS.y),(vS.x-yS.x)*n)}Zx.update(bS)}function SS(e){kx.setTime(e),qx.setTime(kx.time)}var CS=!1;function wS(){CS=!CS,Y.sandwalk=CS,qx.setToggle(`sandwalk`,CS),qx.toast(CS?`Sandwalk — a broken gait, like sand settling.`:`You walk with an even stride.`,3)}var TS=0,ES=0,DS=0;function OS(){DS=0,TS=TS>.5?0:1,qx.setToggle(`storm`,TS>.5),qx.toast(TS>.5?`A Coriolis storm rolls in over the erg.`:`The storm passes.`,3.5)}var kS=!1;function AS(){kS=!kS,Rx.setEnabled(kS),kS&&(Rx.start(),Rx.resume()),qx.setToggle(`sound`,kS)}var jS=null;function MS(){if(!Kx)return;let e=Math.sin(Y.yaw),t=Math.cos(Y.yaw),n=Y.pos.x+e*1.2,r=Y.pos.z+t*1.2;Mx.nearRock(n,r,.8)||Z.nearStone(n,r,.8)?qx.toast(`A thumper needs open sand.`,2.5):(jS&&jS.alive&&jS.remove(),jS=new xm(Dx,n,r),Nx.burst(n,q(n,r),r,40,2.2,kx.litTint,{radius:.2,dust:.3,puff:.2,grow:.6}),qx.toast(`The thumper drums. Get clear of it.`,3.5))}var NS=!1;function PS(e){NS||(NS=!0,$.active&&$.stop(!0),qx.fade(!0),setTimeout(()=>{Wx(e??Math.floor(Math.random()*4294967295)),Mx.reset(),Ax.clear(),Nx.clear(),Rf(),jS&&jS.alive&&jS.remove(),jS=null,X.active&&(X.active=!1,X.state=`idle`,X.mesh.visible=!1,X.headGroup.visible=!1);let t=Gx();Y.spawn(t.x,t.z,Y.yaw),Mx.update(t.x,t.z),pS(t.x,t.z),fC.reset(),Q.focus.set(t.x,Y.pos.y+.9,t.z),GS=null,Qx=null,eS=null,$x=null,setTimeout(()=>{qx.fade(!1),NS=!1,qx.toast(qx.region.textContent,3)},250)},900))}var FS=nn.degToRad(37),Q={yaw:dS,yawTarget:dS,pitch:FS,pitchTarget:FS,height:30,heightTarget:30,focus:new R,dist:180,shake:0,cine:0,strike:0},IS=new R,LS=new R,RS=new R,zS=0,BS=0,VS=new R;function HS(e){let t=window.innerWidth/window.innerHeight;return Math.hypot(e*t/2,e/2/Math.sin(Q.pitch))}function US(e,t){let n=$.view(window.innerWidth/window.innerHeight);if(n){if(n.yaw!==null&&n.yaw!==void 0){let e=((n.yaw-Q.yaw+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;Q.yawTarget=Q.yaw+e}Q.pitchTarget=n.pitch}Q.pitch+=(Q.pitchTarget-Q.pitch)*(1-Math.exp(-e*3));let r=Q.yawTarget-Q.yaw;Q.yaw+=r*(1-Math.exp(-e*(n?3:5)));let i=0,a=0,o=0,s=0;X.active&&X.state!==`leave`&&!n&&(X.state===`breach`&&X.breachPoint?(a=X.breachPoint.x+X.breachDir.x*7,o=X.breachPoint.z+X.breachDir.z*7,s=X.breachPoint.y+9,i=1):(a=X.head.x,o=X.head.z,s=q(a,o),i=Math.hypot(a-Y.pos.x,o-Y.pos.z)<55?.6:0)),Q.cine+=(i-Q.cine)*(1-Math.exp(-e*(i>Q.cine?2.5:.8)));let c=.45;Cx?VS.copy(Cx.focus):n?VS.copy(n.focus):VS.set(Y.pos.x+Y.vel.x*c,Y.bodyY+.2,Y.pos.z+Y.vel.z*c);let l=0,u=0,d=!Cx&&!n?Zx.sheetRect():null;if(d){let e=window.innerWidth,t=window.innerHeight;if(d.width>e*.9){let e=(Math.min(t*.22,130)+d.top)/2;l=Math.max(0,t/2-e)}else if(d.left<e/2+40){let t=Zx.root.getBoundingClientRect(),n=!Zx.root.classList.contains(`collapsed`)&&t.right<d.left-120?t.right:0;u=Math.max(0,e/2-(n+d.left)/2)}}zS+=(l-zS)*(1-Math.exp(-e*4)),BS+=(u-BS)*(1-Math.exp(-e*4)),zS>.5&&VS.addScaledVector(RS,-zS*Q.height/window.innerHeight),BS>.5&&VS.addScaledVector(LS,BS*Q.height/window.innerHeight);let f=n?n.height:Q.heightTarget;if(Q.cine>.001){let e=.5*Q.cine;VS.x+=(a-VS.x)*e,VS.y+=(s-VS.y)*e,VS.z+=(o-VS.z)*e;let t=Math.hypot(a-Y.pos.x,o-Y.pos.z),n=Math.min(46,Math.max(36,t*1.3+24));f=Q.heightTarget+Math.max(0,n-Q.heightTarget)*Q.cine}Q.strike+=(+!!CC.active-Q.strike)*(1-Math.exp(-e*(CC.active?1.5:.6))),Q.strike>.001&&(f=Math.max(f,Q.heightTarget+(46-Q.heightTarget)*Q.strike)),Cx?Q.focus.copy(VS):Q.focus.lerp(VS,1-Math.exp(-e*4)),Q.height+=(f-Q.height)*(1-Math.exp(-e*3)),IS.set(Math.sin(Q.yaw)*Math.cos(Q.pitch),Math.sin(Q.pitch),Math.cos(Q.yaw)*Math.cos(Q.pitch)),LS.set(Math.cos(Q.yaw),0,-Math.sin(Q.yaw)),RS.crossVectors(IS,LS),Q.shake*=Math.exp(-e*2.2);let p=Q.shake*.45+ES*.02,m=(Mf(t*17,1.3)-.5)*2*p,h=(Mf(t*19,7.9)-.5)*2*p;Ox.position.copy(Q.focus).addScaledVector(IS,Q.dist),Ox.position.addScaledVector(LS,m).addScaledVector(RS,h),Ox.up.set(0,1,0),Ox.lookAt(Ox.position.x-IS.x,Ox.position.y-IS.y,Ox.position.z-IS.z);let g=window.innerWidth/window.innerHeight;Ox.top=Q.height/2,Ox.bottom=-Q.height/2,Ox.left=-Q.height*g/2,Ox.right=Q.height*g/2,Ox.near=1,Ox.far=Q.dist+260,Ox.updateProjectionMatrix(),Ox.updateMatrixWorld()}var WS=new Set,GS=null,KS=!1,qS=!1,JS=0;function YS(e){let t=e.target;return t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`)&&t.type!==`range`}window.addEventListener(`keydown`,e=>{if(!(Sx||YS(e))&&!(e.target&&e.target.type===`range`&&e.code.startsWith(`Arrow`))){if(!Kx&&(e.code===`Enter`||e.code===`Space`))e.preventDefault(),Jx();else if($.active)$.key(e,!0)?e.preventDefault():!e.repeat&&e.code===`KeyM`?AS():!e.repeat&&(e.code===`KeyQ`||e.code===`KeyE`)&&$.freeView()?Q.yawTarget+=(e.code===`KeyQ`?-1:1)*(Math.PI/4):!e.repeat&&e.code===`KeyH`&&qx.toggleHidden();else if((e.code===`Space`||e.code===`Enter`)&&!e.repeat&&$.tryStart())e.preventDefault();else if(e.code===`Space`&&!e.repeat&&Kx&&Y.jump(5.2)&&Rx.blip(`hop`),WS.add(e.code),[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&e.preventDefault(),!e.repeat&&Kx)switch(e.code){case`KeyT`:MS();break;case`KeyC`:wS();break;case`KeyG`:OS();break;case`KeyN`:PS();break;case`KeyP`:vC();break;case`KeyM`:AS();break;case`KeyH`:qx.toggleHidden();break;case`KeyR`:Zx.toggleCollapsed();break;case`Escape`:aS();break;case`Comma`:oS(-1);break;case`Period`:oS(1);break;case`KeyQ`:Q.yawTarget-=Math.PI/4;break;case`KeyE`:Q.yawTarget+=Math.PI/4;break;case`Minus`:case`NumpadSubtract`:oC(1.35);break;case`Equal`:case`NumpadAdd`:oC(1/1.35);break;case`BracketLeft`:SS(kx.time-.25);break;case`BracketRight`:SS(kx.time+.25)}}}),window.addEventListener(`keyup`,e=>{WS.delete(e.code),$.active&&$.key(e,!1)}),window.addEventListener(`blur`,()=>{WS.clear(),qS=!1});var XS=new Yc,ZS=new L;function QS(e,t){ZS.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),XS.setFromCamera(ZS,Ox);let n=XS.ray.origin,r=XS.ray.direction,i=Q.dist-60,a=i,o=new R,s=!1;for(let e=0;e<400;e++){if(o.copy(n).addScaledVector(r,i),o.y<q(o.x,o.z)){s=!0;break}a=i,i+=.4}if(!s)return null;let c=a,l=i;for(let e=0;e<12;e++){let e=(c+l)/2;o.copy(n).addScaledVector(r,e),o.y<q(o.x,o.z)?l=e:c=e}return o.copy(n).addScaledVector(r,(c+l)/2),o}function $S(e){let t=QS(e.clientX,e.clientY);t&&(Qx=null,GS=t,Bx.position.set(t.x,t.y+.06,t.z),Vx=1)}function eC(e,t,n){let r=q(e,t);GS=new R(e,r,t),KS=n,Bx.position.set(e,r+.06,t),Vx=1}yx.addEventListener(`pointerdown`,e=>{if(!Kx||e.button!==0)return;Rx.resume();try{yx.setPointerCapture(e.pointerId)}catch{}if($.active){$.pointer(`down`,e,QS(e.clientX,e.clientY));return}if(cC||e.pointerType===`touch`&&sC.size>1)return;qS=!0;let t=performance.now();KS=t-JS<320,JS=t,$S(e)}),yx.addEventListener(`pointermove`,e=>{$.active?e.buttons&&$.pointer(`move`,e,QS(e.clientX,e.clientY)):qS&&!cC&&$S(e)});var tC=e=>{qS=!1,$.active&&$.pointer(`up`,e,null)};yx.addEventListener(`pointerup`,tC),yx.addEventListener(`pointercancel`,tC),yx.addEventListener(`wheel`,e=>{e.preventDefault(),Sx||$.active||oC(Math.exp(e.deltaY*.0012))},{passive:!1}),yx.addEventListener(`contextmenu`,e=>e.preventDefault());var nC={x:0,z:0,run:!1},rC={x:0,z:0,run:!1},iC=9,aC=80;function oC(e){Sx||$.active||(Q.heightTarget=nn.clamp(Q.heightTarget*e,iC,aC))}document.getElementById(`zoomIn`).addEventListener(`click`,()=>oC(1/1.35)),document.getElementById(`zoomOut`).addEventListener(`click`,()=>oC(1.35));var sC=new Map,cC=null;yx.addEventListener(`pointerdown`,e=>{if(e.pointerType===`touch`&&(sC.set(e.pointerId,{x:e.clientX,y:e.clientY}),sC.size===2&&!$.active)){let[e,t]=[...sC.values()];cC={d:Math.hypot(e.x-t.x,e.y-t.y)||1,h:Q.heightTarget},GS=null,Qx=null,Vx=0,qS=!1}}),yx.addEventListener(`pointermove`,e=>{if(sC.has(e.pointerId)&&(sC.set(e.pointerId,{x:e.clientX,y:e.clientY}),cC&&sC.size===2)){let[e,t]=[...sC.values()],n=Math.hypot(e.x-t.x,e.y-t.y)||1;Q.heightTarget=nn.clamp(cC.h*cC.d/n,iC,aC)}});var lC=e=>{sC.delete(e.pointerId),sC.size<2&&(cC=null)};yx.addEventListener(`pointerup`,lC),yx.addEventListener(`pointercancel`,lC);function uC(e){let t=0,n=0;(WS.has(`KeyW`)||WS.has(`ArrowUp`))&&(n+=1),(WS.has(`KeyS`)||WS.has(`ArrowDown`))&&--n,(WS.has(`KeyD`)||WS.has(`ArrowRight`))&&(t+=1),(WS.has(`KeyA`)||WS.has(`ArrowLeft`))&&--t;let r=WS.has(`ShiftLeft`)||WS.has(`ShiftRight`);if(nC.run=r,!Kx){let t=e*.07+.6;return nC.x=Math.cos(t)*.55,nC.z=Math.sin(t)*.55,nC.run=!1,nC}if(t!==0||n!==0){GS=null,Qx=null;let e=Math.hypot(t,n);return t/=e,n/=e,nC.x=Math.cos(Q.yaw)*t-Math.sin(Q.yaw)*n,nC.z=-Math.sin(Q.yaw)*t-Math.cos(Q.yaw)*n,nC}if(GS){let e=GS.x-Y.pos.x,t=GS.z-Y.pos.z,n=Math.hypot(e,t);if(n<.35)return GS=null,nC.x=0,nC.z=0,nC;let i=Math.min(1,n/1.2);return nC.x=e/n*i,nC.z=t/n*i,nC.run=r||KS,nC}return nC.x=0,nC.z=0,nC}Y.onFootstep=e=>{let t=Math.atan2(Math.cos(e.yaw),Math.sin(e.yaw)),n=.06+.035*e.run+.03*e.sliding,r=.03+.02*e.run;Ax.stamp(ep.FOOT,e.x,e.z,t,.74,.42,n,r,.85),Nx.footstep(e.x,e.y,e.z,e.dirX,e.dirZ,e.speed,e.run,kx.litTint,e.sliding),Kx&&(Rx.footstep(.65+.55*e.run+e.sliding*.4),qx.step(Y.time,Math.min(1,.4+e.run*.6)))},Y.onLift=e=>{e.run>.5&&Nx.kick(e.x,e.y,e.z,e.dirX,e.dirZ,e.speed,kx.litTint)};var $=new s_({scene:Dx,particles:Nx,trails:Ax,audio:Rx,tint:()=>kx.litTint,rockMaterial:Mx.material,player:Y,camYaw:()=>Q.yaw,labelLayer:document.getElementById(`labels`),teleport:(e,t,n,r)=>{let i=()=>{Y.spawn(e,t,n),GS=null,Qx=null,Q.focus.set(e,Y.pos.y+.9,t)};if(!r)return i();qx.fade(!0),setTimeout(()=>{i(),setTimeout(()=>qx.fade(!1),120)},500)},travel:(e,t)=>{eC(e,t,Math.hypot(e-Y.pos.x,t-Y.pos.z)>9)},onStart:()=>{aS(),GS=null,Qx=null,WS.clear(),qS=!1,dC={yaw:Q.yawTarget,height:Q.heightTarget},document.body.classList.add(`gaming`)},onEnd:()=>{document.body.classList.remove(`gaming`),Y.root.visible=!0,Y.speedMul=1,Q.pitchTarget=FS,dC&&(Q.yawTarget=dC.yaw,Q.heightTarget=dC.height),dC=null,yx.focus()}}),dC=null,fC=new h_({onPick:e=>{if(Kx||Jx(),!$.active){if(e.type===`stone`)iS(e.id);else if(e.type===`game`){let t=$.byId.get(e.id);t&&eC(t.startPoint.x,t.startPoint.z,Math.hypot(t.startPoint.x-Y.pos.x,t.startPoint.z-Y.pos.z)>9)}else Qx=null,eC(e.x,e.z,Math.hypot(e.x-Y.pos.x,e.z-Y.pos.z)>9)}}}),pC=null,mC=[],hC={px:0,pz:0,yaw:0,camYaw:0,focus:{x:0,z:0},viewW:0,viewD:0,stones:[],current:null,paths:[],games:[],rocks:[],worm:null,spawn:{x:0,z:0},compactRadius:60};function gC(){let e=hC;e.px=Y.pos.x,e.pz=Y.pos.z,e.yaw=Y.yaw,e.camYaw=Q.yaw,e.focus.x=Q.focus.x,e.focus.z=Q.focus.z;let t=window.innerWidth/window.innerHeight;e.viewW=Q.height*t,e.viewD=Q.height/Math.sin(Q.pitch),e.stones=Z.stones,e.current=Zx.currentId;let n=`${fS.x},${fS.z}`;if(pC!==Z||mC.key!==n){pC=Z;let e=[fS,...Z.stones.filter(e=>e.kind!==`project`).map(e=>({x:e.x,z:e.z}))],t=[fS,...Z.stones.filter(e=>e.kind===`project`).map(e=>({x:e.x,z:e.z}))];mC=[{color:`rgba(255, 196, 140, 0.55)`,points:e},{color:`rgba(143, 227, 181, 0.55)`,points:t}].filter(e=>e.points.length>1),mC.key=n}e.paths=mC,e.games=$.visible().map(e=>({id:$.meta(e).id,title:$.meta(e).title,x:e.pos.x,z:e.pos.z,sx:e.startPoint.x,sz:e.startPoint.z,r:$.meta(e).id===`worm`?9.4:3.4,path:e.mapPath?e.mapPath():null})),e.rocks=Mx.colliders,e.worm=X.active&&X.state===`approach`?{x:X.head.x,z:X.head.z}:null,e.spawn=fS,e.compactRadius=window.innerWidth<=760?48:62,e.walkers=_C?_C.walkers.list:[],e.spice=_C?_C.spice.patches:[],fC.update(e)}var _C=Sx?null:new Z_({scene:Dx,camera:Ox,particles:Nx,trails:Ax,audio:Rx,player:Y,labelLayer:document.getElementById(`labels`),tint:()=>kx.litTint,wind:()=>FC.vel,toast:(e,t)=>qx.toast(e,t),shake:(e,t,n)=>{let r=Math.hypot(e-Y.pos.x,t-Y.pos.z);Q.shake=Math.max(Q.shake,n*Math.max(0,1-r/45))},squall:e=>TS>.5||DS>0?!1:(DS=e,!0),collide:(e,t,n)=>{Mx.collide(e,t,n),Z.collide(e,t,n),$.collide(e,t,n)},blocked:(e,t,n)=>Mx.nearRock(e,t,n)||Z.nearStone(e,t,n)||$.keepsClear(e,t,n),stones:()=>Z.stones,games:()=>$.visible().map(e=>({id:$.meta(e).id,x:e.pos.x,z:e.pos.z,sx:e.startPoint.x,sz:e.startPoint.z})),talk:()=>({night:kx.isNight,name:Ix.profile&&Ix.profile.name||``,total:Z.stones.length,unfound:Z.stones.filter(e=>!e.found).map(e=>({title:e.entry.title,kind:e.kind,x:e.x,z:e.z})),games:$.visible().map(e=>({id:$.meta(e).id,x:e.pos.x,z:e.pos.z}))})});function vC(){if(Kx||Jx(),$.active)return;let e=$.next(Y.pos.x,Y.pos.z);if(!e)return;let t=$.meta(e),n=Math.hypot(e.startPoint.x-Y.pos.x,e.startPoint.z-Y.pos.z);if(n<1.2)return void $.start(e);eC(e.startPoint.x,e.startPoint.z,n>9),qx.toast(`Heading for the ${t.title}. Step onto the ring and press Space${$.touchMode?` (or tap the label)`:``}.`,4)}var yC=new ux,bC=-10,xC=document.getElementById(`nukeflash`),SC=window.matchMedia(`(prefers-reduced-motion: reduce)`),CC=new hx(Dx,{particles:Nx,trails:Ax,hooks:{shake:(e,t)=>{let n=Math.hypot(e-Y.pos.x,t-Y.pos.z);Q.shake=Math.max(Q.shake,3*Math.max(.2,1-n/90))},knock:(e,t)=>{let n=Math.hypot(Y.pos.x-e,Y.pos.z-t);if(n>40)return;let r=1-n/40;Y.applyImpulse((Y.pos.x-e)/(n||1)*14*r,(Y.pos.z-t)/(n||1)*14*r,.5+r)},sound:e=>e===`boom`?Rx.eruption(1.6):Rx.whistle(),flash:()=>{if(SC.matches)return;let e=performance.now()/1e3,t=e-bC>4;bC=e,xC.style.setProperty(`--peak`,t?`0.85`:`0.2`),xC.classList.remove(`on`),xC.offsetWidth,xC.classList.add(`on`)}}});function wC(){CC.drop(gx(Y.pos.x,Y.pos.z)),qx.toast(`Atomics away.`,3)}var TC=new vx({key:yC,onLaunch:wC,onOpen:()=>WS.clear(),onClose:()=>yx.focus()});function EC(e){if(Y.sliding<=.05||Y.speed<.3)return;let t=Vf(Y.pos.x,Y.pos.z,{x:0,z:0}),n=Math.hypot(t.x,t.z)||1,r=-t.x/n,i=-t.z/n,a=Math.ceil(e*120*Y.sliding);Nx.cascade(Y.pos.x+r*.4,Y.pos.y,Y.pos.z+i*.4,r*2.2,i*2.2,a,kx.litTint);let o=Math.atan2(Y.vel.z,Y.vel.x);Ax.stamp(ep.FURROW,Y.pos.x,Y.pos.z,o,.9,.55,.035*Y.sliding,.02,.8),Ax.stamp(ep.DISTURB,Y.pos.x+r*1.4,Y.pos.z+i*1.4,0,1.6,1.6,0,0,.5*Y.sliding)}var DC=12,OC={x:0,z:0,amp:0,dx:1,dz:0,r:3.6},kC=99,AC=!1;function jC(){for(let e of X.events)switch(e.type){case`summoned`:{let e=X.target.kind;qx.toast(e===`finale`?`Wormsign. Shai-Hulud rises to honour the road.`:e===`thumper`?`Wormsign. It answers the thumper.`:`Wormsign! Something heard your rhythm.`,4);break}case`breach`:{kC=0,Ax.stamp(ep.CRATER,e.x,e.z,0,7*3.2,7*3.2,1.7,.55,1),Lf(e.x,e.z,7,1.7,Ax.halfLife.x),Nx.burst(e.x,e.y,e.z,1500,16,kx.litTint,{radius:3.5,dust:.12,puff:1.5,grow:1.9,chunk:2.2,dustAlpha:.17}),Q.shake=Math.max(Q.shake,1.6),Rx.eruption(1);let t=Math.hypot(Y.pos.x-e.x,Y.pos.z-e.z);if(t<24){let n=1-t/24,r=(Y.pos.x-e.x)/(t||1),i=(Y.pos.z-e.z)/(t||1);Y.applyImpulse(r*10*n,i*10*n,.4+.8*n)}break}case`swallow`:X.target.kind===`thumper`&&jS&&jS.alive&&(jS.remove(),jS=null);break;case`dive`:Ax.stamp(ep.CRATER,e.x,e.z,0,16,16,1,.4,1),Lf(e.x,e.z,5,1,Ax.halfLife.x),Nx.burst(e.x,e.y,e.z,700,11,kx.litTint,{radius:3,dust:.15,puff:1.3,grow:1.7,chunk:1.6,dustAlpha:.17}),Q.shake=Math.max(Q.shake,.9),Rx.eruption(.7);break;case`lost`:qx.toast(e.reason===`rock`?`Rock beneath your feet. The worm turns away.`:`The worm has lost your rhythm.`,3.5);break;case`gone`:DC=30}X.events.length=0}function MC(e,t){DC-=e,Kx&&!X.active&&DC<=0&&Y.rhythm>=.999&&!AC&&X.summon({kind:`player`,x:Y.pos.x,z:Y.pos.z},Math.random()*Math.PI*2,95),X.active&&X.state===`approach`&&X.target.kind===`player`&&(AC?X.dismiss(`rock`):Y.rhythm<.72&&X.dismiss(`rhythm`)),X.update(e,{playerPos:Y.pos}),jC(),kC+=e;let n=0;if(X.active){if(X.state===`approach`){OC.x=X.head.x,OC.z=X.head.z,OC.dx=X.dir.x,OC.dz=X.dir.z;let e=Math.hypot(OC.dx,OC.dz)||1;OC.dx/=e,OC.dz/=e,n=1.25}else X.state===`breach`&&!X.breached?(OC.x=X.head.x,OC.z=X.head.z,n=2.1):X.state===`breach`&&(OC.x=X.breachPoint.x,OC.z=X.breachPoint.z,n=Math.max(0,1.6-kC*.6))}OC.amp+=(n-OC.amp)*(1-Math.exp(-e*2.5)),jx.uniforms.uWorm.value.set(OC.x,OC.z,OC.amp,OC.r),jx.uniforms.uWormDir.value.set(OC.dx,OC.dz);let r=!X.active&&OC.amp<.02&&_C?_C.mound:null;if(r&&(jx.uniforms.uWorm.value.set(r.x,r.z,r.amp,OC.r),jx.uniforms.uWormDir.value.set(r.dx,r.dz)),X.active){let t=kx.litTint;if(X.state===`approach`||X.state===`breach`&&!X.breached){let n=Math.ceil(e*160);for(let e=0;e<n;e++){let e=Math.random()*Math.PI*2,n=1.5+Math.random()*2.5,r=OC.x+Math.cos(e)*n,i=OC.z+Math.sin(e)*n,a=q(r,i)+OC.amp*.6;Nx.spawn(0,r,a,i,Math.cos(e)*2.2,1.5+Math.random()*2.5,Math.sin(e)*2.2,.03+Math.random()*.04,2,Nx.sandColor.clone().multiply(t),.9,{stretch:.04,grav:9.8,drag:.3})}Math.random()<e*10&&Nx.burst(OC.x,q(OC.x,OC.z)+.5,OC.z,6,2.5,t,{radius:2.5,dust:1.2,puff:1.2,grow:1.4}),Ax.stamp(ep.DISTURB,OC.x-OC.dx*2,OC.z-OC.dz*2,0,8,8,.12,0,1);let r=Math.hypot(OC.x-Y.pos.x,OC.z-Y.pos.z);Q.shake=Math.max(Q.shake,Math.max(0,1-r/40)*.5)}for(let n of X.crossings){let r=q(n.x,n.z),i=Math.ceil(e*90);for(let e=0;e<i;e++){let e=Math.random()*Math.PI*2,i=2.5+Math.random()*1.8;Nx.spawn(0,n.x+Math.cos(e)*i,r+.2,n.z+Math.sin(e)*i,Math.cos(e)*3,2+Math.random()*4,Math.sin(e)*3,.03+Math.random()*.05,2.5,Nx.sandColor.clone().multiply(t),.9,{stretch:.05,grav:9.8,drag:.3})}Math.random()<e*6&&Nx.burst(n.x,r+.5,n.z,4,3,t,{radius:3,dust:1.5,puff:1.5,grow:1.5}),Ax.stamp(ep.DISTURB,n.x,n.z,0,10,10,.25,0,1)}}}function NC(){if(!X.active)return 0;let e=Math.hypot(X.head.x-Y.pos.x,X.head.z-Y.pos.z),t=X.state===`leave`?.35:X.state===`breach`?1:.75;return Math.max(0,1-e/120)*t}function PC(e){if(jS&&jS.alive&&jS.update(e)){let e=Math.hypot(jS.x-Y.pos.x,jS.z-Y.pos.z),t=q(jS.x,jS.z);Nx.ring(jS.x,t,jS.z,.35,18,kx.litTint),Ax.stamp(ep.RING,jS.x,jS.z,0,2.6,2.6,0,.02,.6),Rx.thump(e),Q.shake=Math.max(Q.shake,Math.max(0,1-e/20)*.12),jS.beats>=4&&(X.active?X.state===`approach`&&X.target.kind===`player`&&(X.target={kind:`thumper`,x:jS.x,z:jS.z},qx.toast(`The worm turns toward the thumper.`,3)):X.summon({kind:`thumper`,x:jS.x,z:jS.z},Math.random()*Math.PI*2,85))}}var FC={strength:.5,gust:0,vel:new R,phase:0};function IC(e,t){let n=Mf(t*.32,3.1);FC.gust=nn.smoothstep(n,.55,.85),FC.strength=.3+.35*Mf(t*.045,7.7)+FC.gust*.45+ES*1.3;let r=1.8+FC.strength*4.5;FC.vel.set(wf.x*r,0,wf.z*r),FC.phase+=e*(.35+FC.strength*.9)}var LC=!1;function RC(){bx.setPixelRatio(Ex),bx.setSize(window.innerWidth,window.innerHeight,!1),zx.setSize(window.innerWidth,window.innerHeight,Ex)}window.addEventListener(`resize`,()=>{LC=!0});var zC={frames:0,elapsed:0,acc:0,n:0,revealed:!1,fadeFrom:-1};zx.grade.uniforms.uFadeColor.value.setRGB(26/255,15/255,8/255);function BC(e){if(!zC.revealed){if(zC.frames++,zC.elapsed+=e,zC.frames>4&&!wx&&(zC.acc+=e,zC.n++,zC.acc>=.3&&zC.n>=5)){let e=zC.acc/zC.n;zC.acc=0,zC.n=0;let t=Ex;if(e>.024&&Ex>.75?t=Math.max(.75,Ex-.25):e<.0125&&Ex<Tx&&(t=Math.min(Tx,Ex+.25)),t!==Ex)Ex=t,LC=!0;else{VC();return}}(zC.elapsed>3||wx&&zC.frames>4)&&VC()}}function VC(){zC.revealed||(zC.revealed=!0,Promise.race([HC(),new Promise(e=>setTimeout(e,2e3))]).then(()=>{document.body.classList.add(`ready`)}))}function HC(){let e=document.getElementById(`fonts`);return(!e||e.media===`all`?Promise.resolve():new Promise(t=>{e.addEventListener(`load`,t,{once:!0}),e.addEventListener(`error`,t,{once:!0})})).then(()=>document.fonts?Promise.all([`700 20px Syncopate`,`500 16px Barlow`,`italic 400 20px "Cormorant Garamond"`].map(e=>document.fonts.load(e).catch(()=>null))):null)}function UC(e){let t=zx.grade.uniforms.uFade;if(zC.fadeFrom<0){if(!document.body.classList.contains(`ready`)){t.value=1;return}zC.fadeFrom=e}let n=Math.min(1,(e-zC.fadeFrom)/1400);t.value=1-n*n*(3-2*n)}var WC={acc:0,frames:0,sinceChange:0};function GC(e){if(wx||!zC.revealed||(WC.acc+=e,WC.frames++,WC.sinceChange+=e,WC.frames<120))return;let t=WC.acc/WC.frames;WC.acc=0,WC.frames=0,t>.03&&Ex>.75&&WC.sinceChange>6&&(Ex=Math.max(.75,Ex-.25),WC.sinceChange=0,LC=!0)}var KC=12345,qC=/seed=(\d+)/.exec(window.location.hash);Wx(qC?parseInt(qC[1],10):Ix.world&&Number.isFinite(Ix.world.seed)?Ix.world.seed>>>0:KC);{let e=Gx();Y.spawn(e.x,e.z,.6),Mx.update(e.x,e.z),pS(e.x,e.z),Q.focus.set(e.x,Y.pos.y+.9,e.z)}SS(Ix.world&&Number.isFinite(Ix.world.time)?Ix.world.time:16.9);var JC=performance.now(),YC=0,XC=new R,ZC=new R;function QC(e){requestAnimationFrame(QC),LC&&(LC=!1,RC());let t=Math.min(.25,Math.max(5e-4,(e-JC)/1e3)),n=Math.min(.05,t);JC=e,YC+=n;let r=YC;!Sx&&Kx&&hS>0&&SS(kx.time+n*24/(hS*60)),DS>0&&(DS-=n);let i=ES;ES+=(Math.max(TS,DS>0?.5:0)-ES)*(1-Math.exp(-n*.45)),Math.abs(ES-i)>1e-5&&kx.setStorm(ES),IC(n,r);let a=uC(r),o=$.walker();o&&(a=o.input||rC,Y.root.visible=!o.hidden,Y.rhythm=0),Sx||Y.update(n,a,{wind:FC.vel,onRock:AC,collide:(e,t,n)=>{Mx.collide(e,t,n),Z.collide(e,t,n),$.collide(e,t,n)}}),AC=Mx.nearRock(Y.pos.x,Y.pos.z,1.2)||Z.nearStone(Y.pos.x,Y.pos.z,2),Kx||(Y.rhythm=0),Mx.update(Y.pos.x,Y.pos.z),EC(n),PC(n),CC.update(n,kx.litTint),MC(n,r),zf(n),US(n,r);let s=HS(Q.height);kx.update(Q.focus,s,Q.dist),bx.toneMappingExposure=kx.exposure*(1-ES*.08),lS(n,r,s),$.update(n,r,{px:Y.pos.x,pz:Y.pos.z,entered:Kx,camera:Ox}),_C&&_C.update(n,r,{entered:Kx,gaming:!!$.active,focus:Q.focus,viewR:s,night:kx.isNight,worm:X.active&&X.state!==`leave`?X.head:null,wormBusy:X.active}),Nx.ambient(n,Q.focus.x,Q.focus.z,s*.95,FC.vel,Math.min(1.2,FC.strength),ES,kx.litTint);let c=bx.getDrawingBufferSize(XC).y/Q.height;Nx.update(n,FC.vel,Ox,kx.fog,c),jx.follow(Q.focus.x,Q.focus.z);let l=jx.uniforms;l.uTime.value=r,l.uWindPhase.value=FC.phase,l.uWind.value=Math.min(1.3,FC.strength),l.uStorm.value=ES,l.uGlint.value.copy(kx.glint),l.uSunDir.value.copy(kx.sunDir),Vx>0&&(Vx-=n*.9,Bx.material.opacity=Math.max(0,Vx)*.8,Bx.scale.setScalar(1+(1-Vx)*.6)),Ax.update(n,Y.pos.x,Y.pos.z);let u=zx.grade.uniforms;u.uTime.value=r,u.uStorm.value=ES,u.uStormColor.value.copy(kx.fog.color).multiplyScalar(1.05),u.uHeat.value=kx.isNight?0:nn.clamp(.25+(kx.sunDir.y-.3)*1.6,0,1)*(1-ES),u.uShake.value=Math.min(1,Q.shake),XC.set(wf.x,0,wf.z).add(Q.focus).project(Ox),ZC.copy(Q.focus).project(Ox),u.uWindDir.value.set(XC.x-ZC.x,XC.y-ZC.y).normalize(),UC(e),zx.render(n);let d=NC();Rx.update(FC.strength,FC.gust,ES,d);let f=null;if(X.active&&X.state===`approach`){XC.copy(X.head).project(Ox),ZC.copy(Y.pos).project(Ox);let e=window.innerWidth/window.innerHeight;f={visible:!0,distance:Math.hypot(X.head.x-Y.pos.x,X.head.z-Y.pos.z),screenAngle:Math.atan2(-(XC.y-ZC.y),(XC.x-ZC.x)*e)}}qx.update(n,Y.time,Y.rhythm,Y.regularity,Y.sandwalk,f),qx.setTime(kx.time),xS(),!Sx&&Kx&&gC(),Cx&&Cx.update(n,r),BC(t),GC(t)}requestAnimationFrame(QC);var $C={get stones(){return[...Z.stones,...$.editSites()]},byId:e=>String(e).startsWith(`game:`)?$.editSite(e):Z.byId(e),siteOf:e=>Z.siteOf(e)||$.editSiteOf(e),moveSite:(e,t,n)=>e.kind===`game`?$.moveSite(e,t,n):Z.moveSite(e,t,n),turnSite:(e,t)=>e.kind===`game`?$.turnSite(e,t):Z.turnSite(e,t),siteRotation:e=>e.kind===`game`?$.siteRotation(e):Z.siteRotation(e)};if(Sx&&(document.body.classList.add(`editing`),qx.enter(),Y.root.visible=!1,Cx=ag({canvas:yx,camera:Ox,scene:Dx,cam:Q,pickGround:QS,startYaw:dS,getWaystones:()=>$C,getSpawn:()=>fS,applyContent:rS,setTimeOfDay:SS,openCard:e=>{let t=Z.byId(e);t&&nS(t,`codex`,!0)},closeCard:()=>{Zx.close(),Z.selectedId=null}}),window.arrakisEditor=Cx.api,window.dispatchEvent(new Event(`arrakis-editor-ready`))),Fx){let e=document.createElement(`div`);e.className=`preview-chip`,e.textContent=`Preview · not published`,e.title=`You are looking at unpublished changes from /management. Visitors still see the live site.`,document.body.append(e)}window.arrakis={get cardShift(){return{y:zS,x:BS}},scene:Dx,camera:Ox,renderer:bx,player:Y,worm:X,atmos:kx,trails:Ax,terrain:jx,particles:Nx,cam:Q,post:zx,rocks:Mx,get waystones(){return Z},codex:Zx,newWorld:PS,setTimeOfDay:SS,selectStone:iS,games:$,minimap:fC,life:_C,setPixelRatio:e=>{Ex=e,LC=!0}};export{b as $,Js as A,C as B,ia as C,O as D,E,W as F,yc as G,w as H,gi as I,Ca as J,mc as K,gs as L,ui as M,nn as N,D as O,B as P,zs as Q,G as R,fa as S,ga as T,Ls as U,T as V,$n as W,Wc as X,va as Y,rn as Z,ni as _,Cr as a,gc as at,nt as b,x as c,L as ct,xc as d,ft as et,Zs as f,$i as g,Gi as h,Bi as i,qr as it,Sc as j,pt as k,H as l,R as lt,Tc as m,Hs as n,tl as nt,Vr as o,xn as ot,V as p,vc as q,qc as r,zi as rt,ti as s,ec as st,dm as t,Wi as tt,dn as u,Vs as ut,ii as v,_a as w,rt as x,Ts as y,S as z};