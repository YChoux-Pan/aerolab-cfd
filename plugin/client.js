(()=>{var Ap="1.0.0",Un={name:"Car_Body.STL",length:4.56,width:2,height:1.1,areaFactor:.615,wheels:4},wo=[{id:"kOmegaSST",name:"k-\u03C9 SST"},{id:"kEpsilon",name:"k-\u03B5"},{id:"spalartAllmaras",name:"Spalart\u2013Allmaras"},{id:"laminar",name:"Laminar"}],Qc=[{id:"polyhedral",name:"\u591A\u9762\u4F53\u7F51\u683C"},{id:"hexahedral",name:"\u516D\u9762\u4F53\u7F51\u683C"},{id:"tetrahedral",name:"\u56DB\u9762\u4F53\u7F51\u683C"}],So=[{id:"coarse",name:"\u7C97",factor:.52},{id:"medium",name:"\u4E2D\u7B49",factor:1},{id:"fine",name:"\u7EC6",factor:1.85}],xi={inletVelocity:40,outletPressure:0,density:1.225,temperature:288.15,turbulence:"kOmegaSST",meshType:"polyhedral",meshLevel:"medium",iterations:5e3,groundMode:"fixed",upstream:4,downstream:10,side:3,top:3,wheels:"fixed"},To={mode:"streamlines",density:1,opacity:.8,showSlice:!1,slicePosition:0,colorMin:0,colorMax:40,showCar:!0,showTunnel:!0,showGround:!0,showGrid:!0,showAxes:!0,vectorField:"velocity"};function Ch(s){return Math.max(.1,s.width*s.height*s.areaFactor)}function Ih(s,e){let t=Math.max(0,Number(s.inletVelocity)||0),n=Math.max(.1,Number(s.density)||1.225),i=Ch(e),r=.5*n*t*t,o=s.meshLevel==="coarse"?.012:s.meshLevel==="fine"?-.003:0,a=s.turbulence==="laminar"?.02:0,l=Math.max(.05,.31+o+a),c=-.65,u=r*l*i,h=r*Math.abs(c)*i,d=u*t,f=t*e.length/181e-7;return{speed:t,density:n,area:i,q:r,cd:l,cl:c,drag:u,downforce:h,power:d,reynolds:f,cdA:l*i}}function ar(s,e){let t=So.find(r=>r.id===s.meshLevel)||So[1],n=s.meshType==="hexahedral"?.84:s.meshType==="tetrahedral"?1.16:1,i=13e5+Ch(e)*143e4;return Math.round(i*t.factor*n)}function Eo(s){return s.meshLevel==="coarse"?"\u9700\u68C0\u67E5":s.meshType==="tetrahedral"?"\u826F\u597D":"\u5408\u683C"}function Rp(){return[{id:"continuity",label:"Continuity",color:"#4e9dff",value:.0011},{id:"ux",label:"Ux",color:"#ffad4d",value:82e-5},{id:"uy",label:"Uy",color:"#59e39a",value:61e-5},{id:"uz",label:"Uz",color:"#a77dff",value:48e-5},{id:"omega",label:"\u03C9",color:"#ff77c8",value:32e-5}]}function Ao(s,e){let t=[1.1,.86,.64,.51,.35][e]||.5,n=10**(1.1-e*.08),i=Math.exp(-s/300),r=1+.2*Math.sin(s*.012+e*1.7);return Math.max(1e-6,n*i*t*r)}function Ro(s,e=72){let t=Math.max(1,s),n=[];for(let i=0;i<e;i+=1){let r=Math.round(i/(e-1)*t);n.push({iteration:r,values:[0,1,2,3,4].map(o=>Ao(r,o))})}return n}function Ph({name:s,spec:e,viz:t,geometry:n,importedName:i,mesh:r,solver:o}){return{schema:"aerolab-cfd-project",version:Ap,name:s,savedAt:new Date().toISOString(),geometry:{...n,name:i||n.name},spec:e,viz:t,mesh:{cells:r.cells,quality:r.quality,ready:r.ready},solver:{status:o.status,progress:o.progress,iteration:o.iteration,elapsedSeconds:o.elapsedSeconds},note:"Preview project \u2014 not a validated OpenFOAM result."}}function cr(s,e){let n=Math.round(.572*s.iterations);return{status:"paused",progress:.572,iteration:n,elapsedSeconds:168,etaSeconds:83,residuals:Rp(),history:Ro(n),logs:[{time:"00:00:00",text:"AeroLab preview solver initialised."},{time:"00:00:02",text:`Domain generated for ${e.name}.`},{time:"00:00:03",text:`Mesh ready: ${ar(s,e).toLocaleString("en-US")} cells \xB7 ${Eo(s)}.`},{time:"00:00:04",text:"simpleFoam-compatible preview field \xB7 k-\u03C9 SST."},{time:"00:02:48",text:`Iteration ${n.toLocaleString("en-US")} / ${s.iterations.toLocaleString("en-US")} \xB7 residuals falling.`}]}}function _i(s){let e=Math.max(0,Math.round(s)),t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}var La="180",Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Yl=1,Md=2;var Zl=1,Sd=2,qn=3,In=0,Jt=1,Xt=2,pi=0,Bn=1,Vs=2,jl=3,Kl=4,wd=5,Ti=100,Td=101,Ed=102,Ad=103,Rd=104,Cd=200,Id=201,Pd=202,Ld=203,aa=204,ca=205,Dd=206,Nd=207,Ud=208,Fd=209,Od=210,Bd=211,kd=212,zd=213,Hd=214,Da=0,Na=1,Ua=2,Vi=3,Fa=4,Oa=5,Ba=6,ka=7,za=0,Vd=1,Gd=2,mi=0,Wd=1,Xd=2,qd=3,Ha=4,Yd=5,Zd=6,jd=7,Ll="attached",Kd="detached",$l=300,es=301,ts=302,Gs=303,Va=304,co=306,Ei=1e3,Fn=1001,Is=1002,Ot=1003,Ga=1004;var ns=1005;var jt=1006,Ws=1007;var Ln=1008;var Dn=1009,Jl=1010,Ql=1011,Xs=1012,Wa=1013,Pi=1014,Mn=1015,qs=1016,Xa=1017,qa=1018,Ys=1020,eu=35902,tu=35899,nu=1021,iu=1022,fn=1023,Ps=1026,Zs=1027,Ya=1028,Za=1029,su=1030,ja=1031;var Ka=1033,lo=33776,uo=33777,ho=33778,fo=33779,$a=35840,Ja=35841,Qa=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,cc=37812,lc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,yc=36494,vc=36495,bc=36283,Mc=36284,Sc=36285,wc=36286;var Gi=2300,Wi=2301,oa=2302,Dl=2400,Nl=2401,Ul=2402,$d=2500;var ru=0,po=1,js=2,Jd=3200,Qd=3201;var Tc=0,ef=1,gi="",pt="srgb",Bt="srgb-linear",br="linear",at="srgb";var zi=7680;var Fl=519,tf=512,nf=513,sf=514,ou=515,rf=516,of=517,af=518,cf=519,la=35044;var au="300 es",Cn=2e3,Mr=2001;var kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,Rs=Math.PI/180,Xi=180/Math.PI;function _n(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function cu(s,e){return(s%e+e)%e}function Cp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ip(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function Pp(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function Lp(s,e=1){return e-Math.abs(cu(s,e*2)-e)}function Dp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Np(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fp(s,e){return s+Math.random()*(e-s)}function Op(s){return s*(.5-Math.random())}function Bp(s){s!==void 0&&(Lh=s);let e=Lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kp(s){return s*Rs}function zp(s){return s*Xi}function Hp(s){return(s&s-1)===0&&s!==0}function Vp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var is={DEG2RAD:Rs,RAD2DEG:Xi,generateUUID:_n,clamp:Ve,euclideanModulo:cu,mapLinear:Cp,inverseLerp:Ip,lerp:_r,damp:Pp,pingpong:Lp,smoothstep:Dp,smootherstep:Np,randInt:Up,randFloat:Fp,randFloatSpread:Op,seededRandom:Bp,degToRad:kp,radToDeg:zp,isPowerOfTwo:Hp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:ot,denormalize:Rn},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*_,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let I=Math.sqrt(S),A=Math.atan2(I,m*T);g=Math.sin(g*A)/I,a=Math.sin(a*A)/I}let v=a*T;if(l=l*g+d*v,c=c*g+f*v,u=u*g+p*v,h=h*g+_*v,g===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new R,Dh=new Kt,Xe=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],T=i[1],S=i[4],v=i[7],I=i[2],A=i[5],P=i[8];return r[0]=o*_+a*T+l*I,r[3]=o*g+a*S+l*A,r[6]=o*m+a*v+l*P,r[1]=c*_+u*T+h*I,r[4]=c*g+u*S+h*A,r[7]=c*m+u*v+h*P,r[2]=d*_+f*T+p*I,r[5]=d*g+f*S+p*A,r[8]=d*m+f*v+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new Xe;function lu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lf(){let s=Ls("canvas");return s.style.display="block",s}var Nh={};function Ds(s){s in Nh||(Nh[s]=!0,console.warn(s))}function uf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Uh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xp(){let s={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?br:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bt]:{primaries:e,whitePoint:n,transfer:br,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),s}var tt=Xp();function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ds,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=Ls("canvas")),ds.width=e.width,ds.height=e.height;let i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ls("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qp=0,Ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nl(i[o].image)):r.push(nl(i[o]))}else r=nl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yp=0,il=new R,At=class s extends kn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Fn,i=Fn,r=jt,o=Ln,a=fn,l=Dn,c=s.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=_n(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=$l;At.DEFAULT_ANISOTROPY=1;var $e=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,I=(m+1)/2,A=(u+d)/4,P=(h+_)/4,N=(p+g)/4;return S>v&&S>I?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=P/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=N/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=P/r,i=N/r),this.set(n,i,r,t),this}let T=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(g-p)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ha=class extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new At(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends ha{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var da=class extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Io.subVectors(this.max,lr),fs.subVectors(e.a,lr),ps.subVectors(e.b,lr),ms.subVectors(e.c,lr),yi.subVectors(ps,fs),vi.subVectors(ms,ps),Fi.subVectors(fs,ms);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Fi.z,Fi.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Fi.z,0,-Fi.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Fi.y,Fi.x,0];return!sl(t,fs,ps,ms,Io)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,fs,ps,ms,Io))?!1:(Po.crossVectors(yi,vi),t=[Po.x,Po.y,Po.z],sl(t,fs,ps,ms,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,Co=new gt,fs=new R,ps=new R,ms=new R,yi=new R,vi=new R,Fi=new R,lr=new R,Io=new R,Po=new R,Oi=new R;function sl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Oi.fromArray(s,r);let a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zp=new gt,ur=new R,rl=new R,Nt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(rl)),this.expandByPoint(ur.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=new R,ol=new R,Lo=new R,bi=new R,al=new R,Do=new R,cl=new R,ai=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ol.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=bi.dot(this.direction),l=-bi.dot(Lo),c=bi.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ol).addScaledVector(Lo,d),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,r){al.subVectors(t,e),Do.subVectors(n,e),cl.crossVectors(al,Do);let o=this.direction.dot(cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let l=a*this.direction.dot(Do.crossVectors(bi,Do));if(l<0)return null;let c=a*this.direction.dot(al.cross(bi));if(c<0||l+c>o)return null;let u=-a*bi.dot(cl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,g)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Kp)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Mi.crossVectors(n,un),Mi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Mi.crossVectors(n,un)),Mi.normalize(),No.crossVectors(un,Mi),i[0]=Mi.x,i[4]=No.x,i[8]=un.x,i[1]=Mi.y,i[5]=No.y,i[9]=un.y,i[2]=Mi.z,i[6]=No.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],T=n[3],S=n[7],v=n[11],I=n[15],A=i[0],P=i[4],N=i[8],w=i[12],b=i[1],D=i[5],B=i[9],X=i[13],G=i[2],q=i[6],W=i[10],ae=i[14],H=i[3],le=i[7],ge=i[11],me=i[15];return r[0]=o*A+a*b+l*G+c*H,r[4]=o*P+a*D+l*q+c*le,r[8]=o*N+a*B+l*W+c*ge,r[12]=o*w+a*X+l*ae+c*me,r[1]=u*A+h*b+d*G+f*H,r[5]=u*P+h*D+d*q+f*le,r[9]=u*N+h*B+d*W+f*ge,r[13]=u*w+h*X+d*ae+f*me,r[2]=p*A+_*b+g*G+m*H,r[6]=p*P+_*D+g*q+m*le,r[10]=p*N+_*B+g*W+m*ge,r[14]=p*w+_*X+g*ae+m*me,r[3]=T*A+S*b+v*G+I*H,r[7]=T*P+S*D+v*q+I*le,r[11]=T*N+S*B+v*W+I*ge,r[15]=T*w+S*X+v*ae+I*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],T=h*g*c-_*d*c+_*l*f-a*g*f-h*l*m+a*d*m,S=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,v=u*_*c-p*h*c+p*a*f-o*_*f-u*a*m+o*h*m,I=p*h*l-u*_*l-p*a*d+o*_*d+u*a*g-o*h*g,A=t*T+n*S+i*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=T*P,e[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*m-n*d*m)*P,e[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*m+n*l*m)*P,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*P,e[4]=S*P,e[5]=(u*g*r-p*d*r+p*i*f-t*g*f-u*i*m+t*d*m)*P,e[6]=(p*l*r-o*g*r-p*i*c+t*g*c+o*i*m-t*l*m)*P,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*P,e[8]=v*P,e[9]=(p*h*r-u*_*r-p*n*f+t*_*f+u*n*m-t*h*m)*P,e[10]=(o*_*r-p*a*r+p*n*c-t*_*c-o*n*m+t*a*m)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*P,e[12]=I*P,e[13]=(u*_*i-p*h*i+p*n*d-t*_*d-u*n*g+t*h*g)*P,e[14]=(p*a*i-o*_*i-p*n*l+t*_*l+o*n*g-t*a*g)*P,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,_=o*u,g=o*h,m=a*h,T=l*c,S=l*u,v=l*h,I=n.x,A=n.y,P=n.z;return i[0]=(1-(_+m))*I,i[1]=(f+v)*I,i[2]=(p-S)*I,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+m))*A,i[6]=(g+T)*A,i[7]=0,i[8]=(p+S)*P,i[9]=(g-T)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=gs.set(i[0],i[1],i[2]).length(),o=gs.set(i[4],i[5],i[6]).length(),a=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);let c=1/r,u=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Cn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Cn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Cn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Cn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Mr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new R,En=new We,jp=new R(0,0,0),Kp=new R(1,1,1),Mi=new R,No=new R,un=new R,Oh=new We,Bh=new Kt,yn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$p=0,kh=new R,xs=new Kt,ti=new We,Uo=new R,hr=new R,Jp=new R,Qp=new Kt,Hh=new R(1,0,0),Vh=new R(0,1,0),Gh=new R(0,0,1),Wh={type:"added"},em={type:"removed"},_s={type:"childadded",child:null},ll={type:"childremoved",child:null},yt=class s extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new yn,n=new Kt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Xe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(hr,Uo,this.up):ti.lookAt(Uo,hr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(ti),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new R,ni=new R,ul=new R,ii=new R,ys=new R,vs=new R,Xh=new R,hl=new R,dl=new R,fl=new R,pl=new $e,ml=new $e,gl=new $e,ri=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),ni.subVectors(n,t),ul.subVectors(e,t);let o=An.dot(An),a=An.dot(ni),l=An.dot(ul),c=ni.dot(ni),u=ni.dot(ul),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),ni.subVectors(e,t),An.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),An.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ys.subVectors(i,n),vs.subVectors(r,n),hl.subVectors(e,n);let l=ys.dot(hl),c=vs.dot(hl);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,i);let u=ys.dot(dl),h=vs.dot(dl);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ys,o);fl.subVectors(e,r);let f=ys.dot(fl),p=vs.dot(fl);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(vs,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Xh.subVectors(r,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(Xh,a);let m=1/(g+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(ys,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function xl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=cu(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xl(o,r,e+1/3),this.g=xl(o,r,e),this.b=xl(o,r,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return tt.workingToColorSpace(Wt.copy(this),e),Math.round(Ve(Wt.r*255,0,255))*65536+Math.round(Ve(Wt.g*255,0,255))*256+Math.round(Ve(Wt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=pt){tt.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Fo);let n=_r(Si.h,Fo.h,t),i=_r(Si.s,Fo.s,t),r=_r(Si.l,Fo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Re;Re.NAMES=hf;var tm=0,Ut=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Bn,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=ca,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends Ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new R,Oo=new ue,nm=0,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}};var Tr=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Er=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},im=0,gn=new We,_l=new yt,bs=new R,hn=new gt,dr=new gt,Dt=new R,lt=class s extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?Er:Tr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(hn.min,dr.min),hn.expandByPoint(Dt),Dt.addVectors(hn.max,dr.max),hn.expandByPoint(Dt)):(hn.expandByPoint(dr.min),hn.expandByPoint(dr.max))}hn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Dt.add(bs)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new R,l[N]=new R;let c=new R,u=new R,h=new R,d=new ue,f=new ue,p=new ue,_=new R,g=new R;function m(N,w,b){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(D),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),a[N].add(_),a[w].add(_),a[b].add(_),l[N].add(g),l[w].add(g),l[b].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,w=T.length;N<w;++N){let b=T[N],D=b.start,B=b.count;for(let X=D,G=D+B;X<G;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let S=new R,v=new R,I=new R,A=new R;function P(N){I.fromBufferAttribute(i,N),A.copy(I);let w=a[N];S.copy(w),S.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(A,w);let D=v.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,D)}for(let N=0,w=T.length;N<w;++N){let b=T[N],D=b.start,B=b.count;for(let X=D,G=D+B;X<G;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new _t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new We,Bi=new ai,Bo=new Nt,Yh=new R,ko=new R,zo=new R,Ho=new R,yl=new R,Vo=new R,Zh=new R,Go=new R,nt=class extends yt{constructor(e=new lt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(yl.fromBufferAttribute(h,e),o?Vo.addScaledVector(yl,u):Vo.addScaledVector(yl.sub(t),u))}t.add(Vo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(Bo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Bo,Yh)===null||Bi.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(qh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],T=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=T,I=S;v<I;v+=3){let A=a.getX(v),P=a.getX(v+1),N=a.getX(v+2);i=Wo(this,m,e,n,c,u,h,A,P,N),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let T=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);i=Wo(this,o,e,n,c,u,h,T,S,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],T=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=T,I=S;v<I;v+=3){let A=v,P=v+1,N=v+2;i=Wo(this,m,e,n,c,u,h,A,P,N),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let T=g,S=g+1,v=g+2;i=Wo(this,o,e,n,c,u,h,T,S,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function sm(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===In,a),l===null)return null;Go.copy(a),Go.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:s}}function Wo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ko),s.getVertexPosition(l,zo),s.getVertexPosition(c,Ho);let u=sm(s,e,t,n,ko,zo,Ho,Zh);if(u){let h=new R;ri.getBarycoord(Zh,ko,zo,Ho,h),i&&(u.uv=ri.getInterpolatedAttribute(i,a,l,c,h,new ue)),r&&(u.uv1=ri.getInterpolatedAttribute(r,a,l,c,h,new ue)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};ri.getNormal(ko,zo,Ho,d.normal),u.face=d,u.barycoord=h}return u}var rt=class s extends lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function p(_,g,m,T,S,v,I,A,P,N,w){let b=v/P,D=I/N,B=v/2,X=I/2,G=A/2,q=P+1,W=N+1,ae=0,H=0,le=new R;for(let ge=0;ge<W;ge++){let me=ge*D-X;for(let Fe=0;Fe<q;Fe++){let qe=Fe*b-B;le[_]=qe*T,le[g]=me*S,le[m]=G,c.push(le.x,le.y,le.z),le[_]=0,le[g]=0,le[m]=A>0?1:-1,u.push(le.x,le.y,le.z),h.push(Fe/P),h.push(1-ge/N),ae+=1}}for(let ge=0;ge<N;ge++)for(let me=0;me<P;me++){let Fe=d+me+q*ge,qe=d+me+q*(ge+1),Qe=d+(me+1)+q*(ge+1),Ke=d+(me+1)+q*ge;l.push(Fe,qe,Ke),l.push(qe,Qe,Ke),H+=6}a.addGroup(f,H,w),f+=H,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ss(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){let e={};for(let t=0;t<s.length;t++){let n=ss(s[t]);for(let i in n)e[i]=n[i]}return e}function rm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var mo={clone:ss,merge:qt},om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ar=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new R,jh=new ue,Kh=new ue,Tt=class extends Ar{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Kh),t.subVectors(Kh,jh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,fa=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tt(Ms,Ss,e,t);i.layers=this.layers,this.add(i);let r=new Tt(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let o=new Tt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new Tt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let l=new Tt(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Tt(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rr=class extends At{constructor(e=[],t=es,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pa=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rt(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:pi});r.uniforms.tEquirect.value=t;let o=new nt(i,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=jt),new fa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Et=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cm={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ir=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=la,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new R,nn=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var $h=new R,Jh=new $e,Qh=new $e,lm=new R,ed=new We,Xo=new R,vl=new Nt,td=new We,bl=new ai,Pr=class extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ll,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(i),e.ray.intersectsSphere(vl)!==!1&&(td.copy(i).invert(),bl.copy(e.ray).applyMatrix4(td),!(this.boundingBox!==null&&bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Jh.fromBufferAttribute(i.attributes.skinIndex,e),Qh.fromBufferAttribute(i.attributes.skinWeight,e),$h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Qh.getComponent(r);if(o!==0){let a=Jh.getComponent(r);ed.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(lm.copy($h).applyMatrix4(ed),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Fs=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lr=class extends At{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ot,u=Ot,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nd=new We,um=new We,Dr=class s{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:um;nd.multiplyMatrices(a,t[r]),nd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Lr(t,e,e,fn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fs),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ai=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ws=new We,id=new We,qo=[],sd=new gt,hm=new We,fr=new nt,pr=new Nt,Nr=class extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),sd.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(sd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),pr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ws),id.multiplyMatrices(n,ws),fr.matrixWorld=id,fr.raycast(e,qo);for(let o=0,a=qo.length;o<a;o++){let l=qo[o];l.instanceId=r,l.object=this,t.push(l)}qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lr(new Float32Array(i*this.count),i,this.count,Ya,Mn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ml=new R,dm=new R,fm=new Xe,xn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ml.subVectors(n,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fm.getNormalMatrix(e),i=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Nt,pm=new ue(.5,.5),Yo=new R,Os=class{constructor(e=new xn,t=new xn,n=new xn,i=new xn,r=new xn,o=new xn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],T=r[12],S=r[13],v=r[14],I=r[15];if(i[0].setComponents(c-o,f-u,m-p,I-T).normalize(),i[1].setComponents(c+o,f+u,m+p,I+T).normalize(),i[2].setComponents(c+a,f+h,m+_,I+S).normalize(),i[3].setComponents(c-a,f-h,m-_,I-S).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,f-d,m-g,I-v).normalize();else if(i[4].setComponents(c-l,f-d,m-g,I-v).normalize(),t===Cn)i[5].setComponents(c+l,f+d,m+g,I+v).normalize();else if(t===Mr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=pm.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yo.x=i.normal.x>0?e.max.x:e.min.x,Yo.y=i.normal.y>0?e.max.y:e.min.y,Yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sn=class extends Ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ma=new R,ga=new R,rd=new We,mr=new ai,Zo=new Nt,Sl=new R,od=new R,Yi=class extends yt{constructor(e=new lt,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ma.fromBufferAttribute(t,i-1),ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;rd.copy(i).invert(),mr.copy(e.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=u.getX(_),T=u.getX(_+1),S=jo(this,e,mr,l,m,T,_);S&&t.push(S)}if(this.isLineLoop){let _=u.getX(p-1),g=u.getX(f),m=jo(this,e,mr,l,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=jo(this,e,mr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=jo(this,e,mr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jo(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(ma.fromBufferAttribute(a,i),ga.fromBufferAttribute(a,r),t.distanceSqToSegment(ma,ga,Sl,od)>n)return;Sl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Sl);if(!(c<e.near||c>e.far))return{distance:c,point:od.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var ad=new R,cd=new R,vn=class extends Yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ad.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ad.distanceTo(cd);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ur=class extends Yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pn=class extends Ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new We,Ol=new ai,Ko=new Nt,$o=new R,ci=class extends yt{constructor(e=new lt,t=new Pn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;ld.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);$o.fromBufferAttribute(h,g),ud($o,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)$o.fromBufferAttribute(h,p),ud($o,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ud(s,e,t,n,i,r,o){let a=Ol.distanceSqToPoint(s);if(a<t){let l=new R;Ol.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fr=class extends At{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Or=class extends At{constructor(e,t,n=Pi,i,r,o,a=Ot,l=Ot,c,u=Ps,h=1){if(u!==Ps&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Br=class extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Zi=class s extends lt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,_=[],g=n/2,m=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function T(){let v=new R,I=new R,A=0,P=(t-e)/n;for(let N=0;N<=r;N++){let w=[],b=N/r,D=b*(t-e)+e;for(let B=0;B<=i;B++){let X=B/i,G=X*l+a,q=Math.sin(G),W=Math.cos(G);I.x=D*q,I.y=-b*n+g,I.z=D*W,h.push(I.x,I.y,I.z),v.set(q,P,W).normalize(),d.push(v.x,v.y,v.z),f.push(X,1-b),w.push(p++)}_.push(w)}for(let N=0;N<i;N++)for(let w=0;w<r;w++){let b=_[w][N],D=_[w+1][N],B=_[w+1][N+1],X=_[w][N+1];(e>0||w!==0)&&(u.push(b,D,X),A+=3),(t>0||w!==r-1)&&(u.push(D,B,X),A+=3)}c.addGroup(m,A,0),m+=A}function S(v){let I=p,A=new ue,P=new R,N=0,w=v===!0?e:t,b=v===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let D=p;for(let B=0;B<=i;B++){let G=B/i*l+a,q=Math.cos(G),W=Math.sin(G);P.x=w*W,P.y=g*b,P.z=w*q,h.push(P.x,P.y,P.z),d.push(0,b,0),A.x=q*.5+.5,A.y=W*.5*b+.5,f.push(A.x,A.y),p++}for(let B=0;B<i;B++){let X=I+B,G=D+B;v===!0?u.push(G,G+1,X):u.push(G+1,G,X),N+=3}c.addGroup(m,N,v===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Jo=new R,Qo=new R,wl=new R,ea=new ri,kr=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Rs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=ea;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ea.getNormal(wl),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){let S=(T+1)%3,v=h[T],I=h[S],A=ea[u[T]],P=ea[u[S]],N=`${v}_${I}`,w=`${I}_${v}`;w in d&&d[w]?(wl.dot(d[w].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),d[w]=null):N in d||(d[N]={index0:c[T],index1:c[S],normal:wl.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];Jo.fromBufferAttribute(a,_),Qo.fromBufferAttribute(a,g),f.push(Jo.x,Jo.y,Jo.z),f.push(Qo.x,Qo.y,Qo.z)}this.setAttribute("position",new Ze(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ue:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],o=[],a=new R,l=new We;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bs=class extends dn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xa=class extends Bs{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var ta=new R,Tl=new hu,El=new hu,Al=new hu,_a=class extends dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(ta.subVectors(i[0],i[1]).add(i[0]),c=ta);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ta.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Tl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,g),El.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,g),Al.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Al.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Tl.calc(l),El.calc(l),Al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function mm(s,e){let t=1-s;return t*t*e}function gm(s,e){return 2*(1-s)*s*e}function xm(s,e){return s*s*e}function yr(s,e,t,n){return mm(s,e)+gm(s,t)+xm(s,n)}function _m(s,e){let t=1-s;return t*t*t*e}function ym(s,e){let t=1-s;return 3*t*t*s*e}function vm(s,e){return 3*(1-s)*s*s*e}function bm(s,e){return s*s*s*e}function vr(s,e,t,n,i){return _m(s,e)+ym(s,t)+vm(s,n)+bm(s,i)}var zr=class extends dn{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(e,i.x,r.x,o.x,a.x),vr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends dn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(e,i.x,r.x,o.x,a.x),vr(e,i.y,r.y,o.y,a.y),vr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hr=class extends dn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends dn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends dn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(yr(e,i.x,r.x,o.x),yr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends dn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(yr(e,i.x,r.x,o.x),yr(e,i.y,r.y,o.y),yr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(hd(a,l.x,c.x,u.x,h.x),hd(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:xa,CatmullRomCurve3:_a,CubicBezierCurve:zr,CubicBezierCurve3:ya,EllipseCurve:Bs,LineCurve:Hr,LineCurve3:va,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:ba,SplineCurve:Gr}),Ma=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Bl[i.type]().fromJSON(i))}return this}},Wr=class extends Ma{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Hr(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Vr(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new zr(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Bs(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ji=class extends Wr{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Wr().fromJSON(i))}return this}};function Mm(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=df(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Am(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<i;d+=t){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Xr(r,o,t,a,l,c,0),o}function df(s,e,t,n,i){let r;if(i===Bm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=dd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=dd(o/n|0,s[o],s[o+1],r);return r&&ks(r,r.next)&&(Yr(r),r=r.next),r}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ks(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Lm(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?wm(s,n,i,r):Sm(s)){e.push(l.i,s.i,c.i),Yr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Tm(Ki(s),e),Xr(s,e,t,n,i,r,2)):o===2&&Em(s,e,t,n,i,r):Xr(Ki(s),e,t,n,i,r,1);break}}}function Sm(s){let e=s.prev,t=s,n=s.next;if(Mt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&xr(i,a,r,l,o,c,p.x,p.y)&&Mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function wm(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Mt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),_=Math.max(a,l,c),g=Math.max(u,h,d),m=kl(f,p,e,t,n),T=kl(_,g,e,t,n),S=s.prevZ,v=s.nextZ;for(;S&&S.z>=m&&v&&v.z<=T;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&xr(a,u,l,h,c,d,S.x,S.y)&&Mt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&xr(a,u,l,h,c,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&xr(a,u,l,h,c,d,S.x,S.y)&&Mt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=T;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&xr(a,u,l,h,c,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tm(s,e){let t=s;do{let n=t.prev,i=t.next.next;!ks(n,i)&&pf(n,t,t.next,i)&&qr(n,i)&&qr(i,n)&&(e.push(n.i,t.i,i.i),Yr(t),Yr(t.next),t=s=i),t=t.next}while(t!==s);return Ki(t)}function Em(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Um(o,a)){let l=mf(o,a);o=Ki(o,o.next),l=Ki(l,l.next),Xr(o,e,t,n,i,r,0),Xr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Am(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=df(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Nm(c))}i.sort(Rm);for(let r=0;r<i.length;r++)t=Cm(i[r],t);return t}function Rm(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Cm(s,e){let t=Im(s,e);if(!t)return e;let n=mf(t,s);return Ki(n,n.next),Ki(t,t.next)}function Im(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(ks(s,t))return t;do{if(ks(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ff(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);qr(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Pm(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Pm(s,e){return Mt(s.prev,s,e.prev)<0&&Mt(e.next,s,s.next)<0}function Lm(s,e,t,n){let i=s;do i.z===0&&(i.z=kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Dm(i)}function Dm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function kl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Nm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ff(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function xr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&ff(s,e,t,n,i,r,o,a)}function Um(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Fm(s,e)&&(qr(s,e)&&qr(e,s)&&Om(s,e)&&(Mt(s.prev,s,e.prev)||Mt(s,e.prev,e))||ks(s,e)&&Mt(s.prev,s,s.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ks(s,e){return s.x===e.x&&s.y===e.y}function pf(s,e,t,n){let i=ia(Mt(s,e,t)),r=ia(Mt(s,e,n)),o=ia(Mt(t,n,s)),a=ia(Mt(t,n,e));return!!(i!==r&&o!==a||i===0&&na(s,t,e)||r===0&&na(s,n,e)||o===0&&na(t,s,n)||a===0&&na(t,e,n))}function na(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ia(s){return s>0?1:s<0?-1:0}function Fm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function qr(s,e){return Mt(s.prev,s,s.next)<0?Mt(s,e,s.next)>=0&&Mt(s,s.prev,e)>=0:Mt(s,e,s.prev)<0||Mt(s,s.next,e)<0}function Om(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mf(s,e){let t=zl(s.i,s.x,s.y),n=zl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dd(s,e,t,n){let i=zl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Hl=class{static triangulate(e,t,n=2){return Mm(e,t,n)}},Hi=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];fd(e),pd(n,e);let o=e.length;t.forEach(fd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,pd(n,t[l]);let a=Hl.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function fd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function pd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var zs=class s extends lt{constructor(e=new ji([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:km,S,v=!1,I,A,P,N;m&&(S=m.getSpacedPoints(u),v=!0,d=!1,I=m.computeFrenetFrames(u,!1),A=new R,P=new R,N=new R),d||(g=0,f=0,p=0,_=0);let w=a.extractPoints(c),b=w.shape,D=w.holes;if(!Hi.isClockWise(b)){b=b.reverse();for(let oe=0,K=D.length;oe<K;oe++){let ee=D[oe];Hi.isClockWise(ee)&&(D[oe]=ee.reverse())}}function X(oe){let ee=10000000000000001e-36,Q=oe[0];for(let z=1;z<=oe.length;z++){let $=z%oe.length,ie=oe[$],Ne=ie.x-Q.x,De=ie.y-Q.y,E=Ne*Ne+De*De,y=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(Q.x),Math.abs(Q.y)),F=ee*y*y;if(E<=F){oe.splice($,1),z--;continue}Q=ie}}X(b),D.forEach(X);let G=D.length,q=b;for(let oe=0;oe<G;oe++){let K=D[oe];b=b.concat(K)}function W(oe,K,ee){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(K,ee)}let ae=b.length;function H(oe,K,ee){let Q,z,$,ie=oe.x-K.x,Ne=oe.y-K.y,De=ee.x-oe.x,E=ee.y-oe.y,y=ie*ie+Ne*Ne,F=ie*E-Ne*De;if(Math.abs(F)>Number.EPSILON){let V=Math.sqrt(y),se=Math.sqrt(De*De+E*E),j=K.x-Ne/V,Me=K.y+ie/V,de=ee.x-E/se,we=ee.y+De/se,Ae=((de-j)*E-(we-Me)*De)/(ie*E-Ne*De);Q=j+ie*Ae-oe.x,z=Me+Ne*Ae-oe.y;let he=Q*Q+z*z;if(he<=2)return new ue(Q,z);$=Math.sqrt(he/2)}else{let V=!1;ie>Number.EPSILON?De>Number.EPSILON&&(V=!0):ie<-Number.EPSILON?De<-Number.EPSILON&&(V=!0):Math.sign(Ne)===Math.sign(E)&&(V=!0),V?(Q=-Ne,z=ie,$=Math.sqrt(y)):(Q=ie,z=Ne,$=Math.sqrt(y/2))}return new ue(Q/$,z/$)}let le=[];for(let oe=0,K=q.length,ee=K-1,Q=oe+1;oe<K;oe++,ee++,Q++)ee===K&&(ee=0),Q===K&&(Q=0),le[oe]=H(q[oe],q[ee],q[Q]);let ge=[],me,Fe=le.concat();for(let oe=0,K=G;oe<K;oe++){let ee=D[oe];me=[];for(let Q=0,z=ee.length,$=z-1,ie=Q+1;Q<z;Q++,$++,ie++)$===z&&($=0),ie===z&&(ie=0),me[Q]=H(ee[Q],ee[$],ee[ie]);ge.push(me),Fe=Fe.concat(me)}let qe;if(g===0)qe=Hi.triangulateShape(q,D);else{let oe=[],K=[];for(let ee=0;ee<g;ee++){let Q=ee/g,z=f*Math.cos(Q*Math.PI/2),$=p*Math.sin(Q*Math.PI/2)+_;for(let ie=0,Ne=q.length;ie<Ne;ie++){let De=W(q[ie],le[ie],$);Le(De.x,De.y,-z),Q===0&&oe.push(De)}for(let ie=0,Ne=G;ie<Ne;ie++){let De=D[ie];me=ge[ie];let E=[];for(let y=0,F=De.length;y<F;y++){let V=W(De[y],me[y],$);Le(V.x,V.y,-z),Q===0&&E.push(V)}Q===0&&K.push(E)}}qe=Hi.triangulateShape(oe,K)}let Qe=qe.length,Ke=p+_;for(let oe=0;oe<ae;oe++){let K=d?W(b[oe],Fe[oe],Ke):b[oe];v?(P.copy(I.normals[0]).multiplyScalar(K.x),A.copy(I.binormals[0]).multiplyScalar(K.y),N.copy(S[0]).add(P).add(A),Le(N.x,N.y,N.z)):Le(K.x,K.y,0)}for(let oe=1;oe<=u;oe++)for(let K=0;K<ae;K++){let ee=d?W(b[K],Fe[K],Ke):b[K];v?(P.copy(I.normals[oe]).multiplyScalar(ee.x),A.copy(I.binormals[oe]).multiplyScalar(ee.y),N.copy(S[oe]).add(P).add(A),Le(N.x,N.y,N.z)):Le(ee.x,ee.y,h/u*oe)}for(let oe=g-1;oe>=0;oe--){let K=oe/g,ee=f*Math.cos(K*Math.PI/2),Q=p*Math.sin(K*Math.PI/2)+_;for(let z=0,$=q.length;z<$;z++){let ie=W(q[z],le[z],Q);Le(ie.x,ie.y,h+ee)}for(let z=0,$=D.length;z<$;z++){let ie=D[z];me=ge[z];for(let Ne=0,De=ie.length;Ne<De;Ne++){let E=W(ie[Ne],me[Ne],Q);v?Le(E.x,E.y+S[u-1].y,S[u-1].x+ee):Le(E.x,E.y,h+ee)}}}J(),ne();function J(){let oe=i.length/3;if(d){let K=0,ee=ae*K;for(let Q=0;Q<Qe;Q++){let z=qe[Q];Ee(z[2]+ee,z[1]+ee,z[0]+ee)}K=u+g*2,ee=ae*K;for(let Q=0;Q<Qe;Q++){let z=qe[Q];Ee(z[0]+ee,z[1]+ee,z[2]+ee)}}else{for(let K=0;K<Qe;K++){let ee=qe[K];Ee(ee[2],ee[1],ee[0])}for(let K=0;K<Qe;K++){let ee=qe[K];Ee(ee[0]+ae*u,ee[1]+ae*u,ee[2]+ae*u)}}n.addGroup(oe,i.length/3-oe,0)}function ne(){let oe=i.length/3,K=0;Se(q,K),K+=q.length;for(let ee=0,Q=D.length;ee<Q;ee++){let z=D[ee];Se(z,K),K+=z.length}n.addGroup(oe,i.length/3-oe,1)}function Se(oe,K){let ee=oe.length;for(;--ee>=0;){let Q=ee,z=ee-1;z<0&&(z=oe.length-1);for(let $=0,ie=u+g*2;$<ie;$++){let Ne=ae*$,De=ae*($+1),E=K+Q+Ne,y=K+z+Ne,F=K+z+De,V=K+Q+De;Ge(E,y,F,V)}}}function Le(oe,K,ee){l.push(oe),l.push(K),l.push(ee)}function Ee(oe,K,ee){Ye(oe),Ye(K),Ye(ee);let Q=i.length/3,z=T.generateTopUV(n,i,Q-3,Q-2,Q-1);L(z[0]),L(z[1]),L(z[2])}function Ge(oe,K,ee,Q){Ye(oe),Ye(K),Ye(Q),Ye(K),Ye(ee),Ye(Q);let z=i.length/3,$=T.generateSideWallUV(n,i,z-6,z-3,z-2,z-1);L($[0]),L($[1]),L($[3]),L($[1]),L($[2]),L($[3])}function Ye(oe){i.push(l[oe*3+0]),i.push(l[oe*3+1]),i.push(l[oe*3+2])}function L(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Bl[i.type]().fromJSON(i)),new s(n,e.options)}},km={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(r,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(d,1-p),new ue(_,1-m)]:[new ue(a,1-l),new ue(u,1-h),new ue(f,1-p),new ue(g,1-m)]}};function zm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Hn=class s extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){let T=m*d-o;for(let S=0;S<c;S++){let v=S*h-r;p.push(v,-T,0),_.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let S=T+c*m,v=T+c*(m+1),I=T+1+c*(m+1),A=T+1+c*m;f.push(S,v,A),f.push(v,I,A)}this.setIndex(f),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zr=class s extends lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new R,h=new R,d=new R;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){let _=p/i*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){let _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,T=(i+1)*f+p;o.push(_,g,T),o.push(g,m,T)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var jr=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new R,r=new R;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),T=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,T),md(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),md(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function md(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var bn=class extends Ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ct=class extends bn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Kr=class extends Ut{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Sa=class extends Ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends Ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function gf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var li=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ta=class extends li{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nl:r=e,a=2*t-n;break;case Ul:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:o=e,l=2*n-t;break;case Ul:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,T=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let I=0;I!==a;++I)r[I]=m*o[u+I]+T*o[c+I]+S*o[l+I]+v*o[h+I];return r}},Ea=class extends li{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Aa=class extends li{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ta(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gi:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gi;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Wi;var ui=class extends rn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Gi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends rn{constructor(e,t,n,i){super(e,t,n,i)}};$r.prototype.ValueTypeName="color";var Vn=class extends rn{constructor(e,t,n,i){super(e,t,n,i)}};Vn.prototype.ValueTypeName="number";var Ra=class extends li{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gn=class extends rn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion";Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends rn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Gi;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends rn{constructor(e,t,n,i){super(e,t,n,i)}};Wn.prototype.ValueTypeName="vector";var Jr=class{constructor(e="",t=-1,n=[],i=$d){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Wm(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Vm(l);l=gd(l,1,u),c=gd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Vn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,p,_){if(f.length!==0){let g=[],m=[];gf(f,g,m,p),g.length!==0&&_.push(new h(d,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(let _ in f){let g=[],m=[];for(let T=0;T!==d[p].morphTargets.length;++T){let S=d[p];g.push(S.time),m.push(S.morphTarget===_?1:0)}i.push(new Vn(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Wn,f+".position",d,"pos",i),n(Gn,f+".quaternion",d,"rot",i),n(Wn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Gm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vn;case"vector":case"vector2":case"vector3":case"vector4":return Wn;case"color":return $r;case"quaternion":return Gn;case"bool":case"boolean":return ui;case"string":return hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Wm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gm(s.type);if(s.times===void 0){let t=[],n=[];gf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var On={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ca=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xf=new Ca,on=class{constructor(e){this.manager=e!==void 0?e:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};on.DEFAULT_MATERIAL_NAME="__DEFAULT";var si={},Vl=class extends Error{constructor(e,t){super(e),this.response=t}},Xn=class extends on{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=On.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:i});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=si[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,g=new ReadableStream({start(m){T();function T(){h.read().then(({done:S,value:v})=>{if(S)m.close();else{_+=v.byteLength;let I=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let A=0,P=u.length;A<P;A++){let N=u[A];N.onProgress&&N.onProgress(I)}m.enqueue(v),T()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Vl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{On.add(`file:${e}`,c);let u=si[e];delete si[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=si[e];if(u===void 0)throw this.manager.itemError(e),c;delete si[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=new WeakMap,Ia=class extends on{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=On.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Ts.get(o);h===void 0&&(h=[],Ts.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Ls("img");function l(){u(),t&&t(this);let h=Ts.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ts.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),On.remove(`image:${e}`);let d=Ts.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Ts.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),On.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Qr=class extends on{constructor(e){super(e)}load(e,t,n,i){let r=new At,o=new Ia(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},$i=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},eo=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rl=new We,xd=new R,_d=new R,to=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gl=class extends to{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},no=class extends $i{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yd=new We,gr=new R,Cl=new R,Wl=class extends to{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Cl.copy(n.position),Cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cl),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,n.coordinateSystem,n.reversedDepth)}},Ji=class extends $i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qi=class extends Ar{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xl=class extends to{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},io=class extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Il=new WeakMap,so=class extends on{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=On.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Il.has(o)===!0)i&&i(Il.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return On.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Il.set(l,c),On.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});On.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pa=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var du="\\[\\]\\.:\\/",Xm=new RegExp("["+du+"]","g"),fu="[^"+du+"]",qm="[^"+du.replace("\\.","")+"]",Ym=/((?:WC+[\/:])*)/.source.replace("WC",fu),Zm=/(WCOD+)?/.source.replace("WCOD",qm),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),Km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),$m=new RegExp("^"+Ym+Zm+jm+Km+"$"),Jm=["material","materials","bones","map"],ql=class{constructor(e,t,n){let i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xm,"")}static parseTrackName(e){let t=$m.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=ql;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rv=new Float32Array(1);var Ri=class extends qi{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Hs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vd=new R,ra=new R,Es=new R,As=new R,Pl=new R,Qm=new R,eg=new R,ro=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vd.subVectors(e,this.start),ra.subVectors(this.end,this.start);let n=ra.dot(ra),r=ra.dot(vd)/n;return t&&(r=Ve(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Qm,n=eg){let i=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Es.subVectors(c,a),As.subVectors(u,l),Pl.subVectors(a,l);let h=Es.dot(Es),d=As.dot(As),f=As.dot(Pl);if(h<=i&&d<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=i)r=0,o=f/d,o=Ve(o,0,1);else{let p=Es.dot(Pl);if(d<=i)o=0,r=Ve(-p/h,0,1);else{let _=Es.dot(As),g=h*d-_*_;g!==0?r=Ve((_*f-p*d)/g,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=Ve(-p/h,0,1)):o>1&&(o=1,r=Ve((_-p)/h,0,1))}}return t.copy(a).add(Es.multiplyScalar(r)),n.copy(l).add(As.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var oo=class extends vn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Re(n),i=new Re(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let u=new lt;u.setAttribute("position",new Ze(l,3)),u.setAttribute("color",new Ze(c,3));let h=new sn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ao=class extends kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function pu(s,e,t,n){let i=tg(n);switch(t){case nu:return s*e;case Ya:return s*e/i.components*i.byteLength;case Za:return s*e/i.components*i.byteLength;case su:return s*e*2/i.components*i.byteLength;case ja:return s*e*2/i.components*i.byteLength;case iu:return s*e*3/i.components*i.byteLength;case fn:return s*e*4/i.components*i.byteLength;case Ka:return s*e*4/i.components*i.byteLength;case lo:case uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ja:case ec:return Math.max(s,16)*Math.max(e,8)/4;case $a:case Qa:return Math.max(s,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _c:case yc:case vc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bc:case Mc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sc:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tg(s){switch(s){case Dn:case Jl:return{byteLength:1,components:1};case Xs:case Ql:case qs:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Pi:case Wa:case Mn:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);function Hf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ng(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
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
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gg=`#ifdef USE_IRIDESCENCE
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
#endif`,xg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,jg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,t0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,H0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ex=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Rx=`#define TOON
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
}`,Cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ix=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Dx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Nx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ig,alphahash_pars_fragment:sg,alphamap_fragment:rg,alphamap_pars_fragment:og,alphatest_fragment:ag,alphatest_pars_fragment:cg,aomap_fragment:lg,aomap_pars_fragment:ug,batching_pars_vertex:hg,batching_vertex:dg,begin_vertex:fg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:xg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:bg,color_fragment:Mg,color_pars_fragment:Sg,color_pars_vertex:wg,color_vertex:Tg,common:Eg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Ig,emissivemap_fragment:Pg,emissivemap_pars_fragment:Lg,colorspace_fragment:Dg,colorspace_pars_fragment:Ng,envmap_fragment:Ug,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Og,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:jg,envmap_vertex:kg,fog_vertex:zg,fog_pars_vertex:Hg,fog_fragment:Vg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Yg,lights_pars_begin:Zg,lights_toon_fragment:Kg,lights_toon_pars_fragment:$g,lights_phong_fragment:Jg,lights_phong_pars_fragment:Qg,lights_physical_fragment:e0,lights_physical_pars_fragment:t0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:c0,map_fragment:l0,map_pars_fragment:u0,map_particle_fragment:h0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:x0,morphtarget_pars_vertex:_0,morphtarget_vertex:y0,normal_fragment_begin:v0,normal_fragment_maps:b0,normal_pars_fragment:M0,normal_pars_vertex:S0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:N0,dithering_pars_fragment:U0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:k0,shadowmap_vertex:z0,shadowmask_pars_fragment:H0,skinbase_vertex:V0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:Z0,tonemapping_pars_fragment:j0,transmission_fragment:K0,transmission_pars_fragment:$0,uv_pars_fragment:J0,uv_pars_vertex:Q0,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ox,cube_frag:ax,depth_vert:cx,depth_frag:lx,distanceRGBA_vert:ux,distanceRGBA_frag:hx,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:_x,meshlambert_frag:yx,meshmatcap_vert:vx,meshmatcap_frag:bx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ex,meshphysical_frag:Ax,meshtoon_vert:Rx,meshtoon_frag:Cx,points_vert:Ix,points_frag:Px,shadow_vert:Lx,shadow_frag:Dx,sprite_vert:Nx,sprite_frag:Ux},ye={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Qt={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Qt.physical={uniforms:qt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Ec={r:0,b:0,g:0},rs=new yn,Fx=new We;function Ox(s,e,t,n,i,r,o){let a=new Re(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1,I=p(S);I===null?m(a,l):I&&I.isColor&&(m(I,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,v){let I=p(v);I&&(I.isCubeTexture||I.mapping===co)?(u===void 0&&(u=new nt(new rt(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:ss(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),rs.copy(v.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(rs)),u.material.toneMapped=tt.getTransfer(I.colorSpace)!==at,(h!==I||d!==I.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new nt(new Hn(2,2),new $t({name:"BackgroundMaterial",uniforms:ss(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(I.colorSpace)!==at,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(Ec,uu(s)),n.buffers.color.setClear(Ec.r,Ec.g,Ec.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:g,dispose:T}}function Bx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(b,D,B,X,G){let q=!1,W=h(X,B,D);r!==W&&(r=W,c(r.object)),q=f(b,X,B,G),q&&p(b,X,B,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(b,D,B,X),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,D,B){let X=B.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let q=G[D.id];q===void 0&&(q={},G[D.id]=q);let W=q[X];return W===void 0&&(W=d(l()),q[X]=W),W}function d(b){let D=[],B=[],X=[];for(let G=0;G<t;G++)D[G]=0,B[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:X,object:b,attributes:{},index:null}}function f(b,D,B,X){let G=r.attributes,q=D.attributes,W=0,ae=B.getAttributes();for(let H in ae)if(ae[H].location>=0){let ge=G[H],me=q[H];if(me===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function p(b,D,B,X){let G={},q=D.attributes,W=0,ae=B.getAttributes();for(let H in ae)if(ae[H].location>=0){let ge=q[H];ge===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));let me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),G[H]=me,W++}r.attributes=G,r.attributesNum=W,r.index=X}function _(){let b=r.newAttributes;for(let D=0,B=b.length;D<B;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){let B=r.newAttributes,X=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,X[b]===0&&(s.enableVertexAttribArray(b),X[b]=1),G[b]!==D&&(s.vertexAttribDivisor(b,D),G[b]=D)}function T(){let b=r.newAttributes,D=r.enabledAttributes;for(let B=0,X=D.length;B<X;B++)D[B]!==b[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function S(b,D,B,X,G,q,W){W===!0?s.vertexAttribIPointer(b,D,B,G,q):s.vertexAttribPointer(b,D,B,X,G,q)}function v(b,D,B,X){_();let G=X.attributes,q=B.getAttributes(),W=D.defaultAttributeValues;for(let ae in q){let H=q[ae];if(H.location>=0){let le=G[ae];if(le===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){let ge=le.normalized,me=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;let qe=Fe.buffer,Qe=Fe.type,Ke=Fe.bytesPerElement,J=Qe===s.INT||Qe===s.UNSIGNED_INT||le.gpuType===Wa;if(le.isInterleavedBufferAttribute){let ne=le.data,Se=ne.stride,Le=le.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee,ne.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)g(H.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Ee=0;Ee<H.locationSize;Ee++)S(H.location+Ee,me/H.locationSize,Qe,ge,Se*Ke,(Le+me/H.locationSize*Ee)*Ke,J)}else{if(le.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)m(H.location+ne,le.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<H.locationSize;ne++)g(H.location+ne);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ne=0;ne<H.locationSize;ne++)S(H.location+ne,me/H.locationSize,Qe,ge,me*Ke,me/H.locationSize*ne*Ke,J)}}else if(W!==void 0){let ge=W[ae];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(H.location,ge);break;case 3:s.vertexAttrib3fv(H.location,ge);break;case 4:s.vertexAttrib4fv(H.location,ge);break;default:s.vertexAttrib1fv(H.location,ge)}}}}T()}function I(){N();for(let b in n){let D=n[b];for(let B in D){let X=D[B];for(let G in X)u(X[G].object),delete X[G];delete D[B]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let D=n[b.id];for(let B in D){let X=D[B];for(let G in X)u(X[G].object),delete X[G];delete D[B]}delete n[b.id]}function P(b){for(let D in n){let B=n[D];if(B[b.id]===void 0)continue;let X=B[b.id];for(let G in X)u(X[G].object),delete X[G];delete B[b.id]}}function N(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function kx(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==fn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let N=P===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Dn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!N)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=p>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function Hx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new xn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||p===null||p.length===0||r&&!g)r?u(null):c();else{let T=r?0:n,S=T*4,v=m.clippingState||null;l.value=v,v=u(p,d,S,f);for(let I=0;I!==S;++I)v[I]=t[I];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Vx(s){let e=new WeakMap;function t(o,a){return a===Gs?o.mapping=es:a===Va&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gs||a===Va)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pa(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $s=4,_f=[.125,.215,.35,.446,.526,.582],cs=20,mu=new Qi,yf=new Re,gu=null,xu=0,_u=0,yu=!1,as=(1+Math.sqrt(5))/2,Ks=1/as,vf=[new R(-as,Ks,0),new R(as,Ks,0),new R(-Ks,0,as),new R(Ks,0,as),new R(0,as,-Ks),new R(0,as,Ks),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Gx=new R,Cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Gx}=r;gu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,xu,_u),this._renderer.xr.enabled=yu,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:qs,format:fn,colorSpace:Bt,depthBuffer:!1},i=bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(r)),this._blurMaterial=Xx(r,e,t)}return i}_compileMaterial(e){let t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,mu)}_sceneToCubeUV(e,t,n,i,r){let l=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yf),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let _=new Rt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new nt(new rt,_),m=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,m=!0):(_.color.copy(yf),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let I=this._cubeSize;Ac(i,v*I,S>2?I:0,I,I),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ac(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vf[(i-r-1)%vf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new nt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let m=[],T=0;for(let P=0;P<cs;++P){let N=P/_,w=Math.exp(-N*N/2);m.push(w),P===0?T+=w:P<g&&(T+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-n;let v=this._sizeLods[i],I=3*v*(i>S-$s?i-S+$s:0),A=4*(this._cubeSize-v);Ac(t,I,A,3*v,2*v),l.setRenderTarget(t),l.render(h,mu)}};function Wx(s){let e=[],t=[],n=[],i=s,r=s-$s+1+_f.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-$s?l=_f[o-s+$s-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,g=2,m=1,T=new Float32Array(_*p*f),S=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,N=A>2?0:-1,w=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];T.set(w,_*p*A),S.set(d,g*p*A);let b=[A,A,A,A,A,A];v.set(b,m*p*A)}let I=new lt;I.setAttribute("position",new _t(T,_)),I.setAttribute("uv",new _t(S,g)),I.setAttribute("faceIndex",new _t(v,m)),e.push(I),i>$s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bf(s,e,t){let n=new zn(s,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ac(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xx(s,e,t){let n=new Float32Array(cs),i=new R(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Mf(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Sf(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Gs||l===Va,u=l===es||l===ts;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cc(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Cc(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zx(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let S=0,v=T.length;S<v;S+=3){let I=T[S+0],A=T[S+1],P=T[S+2];d.push(I,A,A,P,P,I)}}else if(p!==void 0){let T=p.array;_=p.version;for(let S=0,v=T.length/3-1;S<v;S+=3){let I=S+0,A=S+1,P=S+2;d.push(I,A,A,P,P,I)}}else return;let g=new(lu(d)?Er:Tr)(d,1);g.version=_;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(d,f,p,_){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let T=0;T<p;T++)m+=f[T]*_[T];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $x(s,e,t){let n=new WeakMap,i=new $e;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*I*4*h),P=new Sr(A,v,I,h);P.type=Mn,P.needsUpdate=!0;let N=S*4;for(let b=0;b<h;b++){let D=g[b],B=m[b],X=T[b],G=v*I*4*b;for(let q=0;q<D.count;q++){let W=q*N;f===!0&&(i.fromBufferAttribute(D,q),A[G+W+0]=i.x,A[G+W+1]=i.y,A[G+W+2]=i.z,A[G+W+3]=0),p===!0&&(i.fromBufferAttribute(B,q),A[G+W+4]=i.x,A[G+W+5]=i.y,A[G+W+6]=i.z,A[G+W+7]=0),_===!0&&(i.fromBufferAttribute(X,q),A[G+W+8]=i.x,A[G+W+9]=i.y,A[G+W+10]=i.z,A[G+W+11]=X.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new ue(v,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Jx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Vf=new At,wf=new Or(1,1),Gf=new Sr,Wf=new da,Xf=new Rr,Tf=[],Ef=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function Qs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Tf[i];if(r===void 0&&(r=new Float32Array(i),Tf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pc(s,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function t_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function n_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function i_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Cf.set(n),s.uniformMatrix2fv(this.addr,!1,Cf),Pt(t,n)}}function s_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Rf.set(n),s.uniformMatrix3fv(this.addr,!1,Rf),Pt(t,n)}}function r_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Af.set(n),s.uniformMatrix4fv(this.addr,!1,Af),Pt(t,n)}}function o_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function u_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function d_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function p_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wf.compareFunction=ou,r=wf):r=Vf,t.setTexture2D(e||r,i)}function m_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wf,i)}function g_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xf,i)}function x_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gf,i)}function __(s){switch(s){case 5126:return Qx;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return u_;case 36294:return h_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(s,e){s.uniform1fv(this.addr,e)}function v_(s,e){let t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function b_(s,e){let t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function M_(s,e){let t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function S_(s,e){let t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function w_(s,e){let t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T_(s,e){let t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function E_(s,e){s.uniform1iv(this.addr,e)}function A_(s,e){s.uniform2iv(this.addr,e)}function R_(s,e){s.uniform3iv(this.addr,e)}function C_(s,e){s.uniform4iv(this.addr,e)}function I_(s,e){s.uniform1uiv(this.addr,e)}function P_(s,e){s.uniform2uiv(this.addr,e)}function L_(s,e){s.uniform3uiv(this.addr,e)}function D_(s,e){s.uniform4uiv(this.addr,e)}function N_(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vf,r[o])}function U_(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Wf,r[o])}function F_(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Xf,r[o])}function O_(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gf,r[o])}function B_(s){switch(s){case 5126:return y_;case 35664:return v_;case 35665:return b_;case 35666:return M_;case 35674:return S_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return E_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}var bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}},Mu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B_(t.type)}},Su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},vu=/(\w+)(\])?(\[|\.)?/g;function If(s,e){s.seq.push(e),s.map[e.id]=e}function k_(s,e,t){let n=s.name,i=n.length;for(vu.lastIndex=0;;){let r=vu.exec(n),o=vu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){If(t,c===void 0?new bu(a,s,e):new Mu(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Su(a),If(t,h)),t=h}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);k_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Pf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var z_=37297,H_=0;function V_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Lf=new Xe;function G_(s){tt._getMatrix(Lf,tt.workingColorSpace,s);let e=`mat3( ${Lf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case br:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Df(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+V_(s.getShaderSource(e),a)}else return r}function W_(s,e){let t=G_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X_(s,e){let t;switch(e){case Wd:t="Linear";break;case Xd:t="Reinhard";break;case qd:t="Cineon";break;case Ha:t="ACESFilmic";break;case Zd:t="AgX";break;case jd:t="Neutral";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rc=new R;function q_(){tt.getLuminanceCoefficients(Rc);let s=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function Z_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function go(s){return s!==""}function Nf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(s){return s.replace(K_,J_)}var $_=new Map;function J_(s,e){let t=je[e];if(t===void 0){let n=$_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(s){return s.replace(Q_,ey)}function ey(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Of(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ty(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function ny(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function sy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function ry(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ty(t),c=ny(t),u=iy(t),h=sy(t),d=ry(t),f=Y_(t),p=Z_(r),_=i.createProgram(),g,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(go).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(go).join(`
`),m.length>0&&(m+=`
`)):(g=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?je.tonemapping_pars_fragment:"",t.toneMapping!==mi?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),o=wu(o),o=Nf(o,t),o=Uf(o,t),a=wu(a),a=Nf(a,t),a=Uf(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=T+g+o,v=T+m+a,I=Pf(i,i.VERTEX_SHADER,S),A=Pf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,I),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(D){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(_)||"",X=i.getShaderInfoLog(I)||"",G=i.getShaderInfoLog(A)||"",q=B.trim(),W=X.trim(),ae=G.trim(),H=!0,le=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{let ge=Df(i,I,"vertex"),me=Df(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+ge+`
`+me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||ae==="")&&(le=!1);le&&(D.diagnostics={runnable:H,programLog:q,vertexShader:{log:W,prefix:g},fragmentShader:{log:ae,prefix:m}})}i.deleteShader(I),i.deleteShader(A),N=new Js(i,_),w=j_(i,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,z_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}var ay=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}},Eu=class{constructor(e){this.id=ay++,this.code=e,this.usedTimes=0}};function cy(s,e,t,n,i,r,o){let a=new wr,l=new Tu,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,D,B,X){let G=B.fog,q=X.geometry,W=w.isMeshStandardMaterial?B.environment:null,ae=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),H=ae&&ae.mapping===co?ae.image.height:null,le=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=ge!==void 0?ge.length:0,Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let qe,Qe,Ke,J;if(le){let st=Qt[le];qe=st.vertexShader,Qe=st.fragmentShader}else qe=w.vertexShader,Qe=w.fragmentShader,l.update(w),Ke=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);let ne=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Le=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,Ge=!!w.map,Ye=!!w.matcap,L=!!ae,oe=!!w.aoMap,K=!!w.lightMap,ee=!!w.bumpMap,Q=!!w.normalMap,z=!!w.displacementMap,$=!!w.emissiveMap,ie=!!w.metalnessMap,Ne=!!w.roughnessMap,De=w.anisotropy>0,E=w.clearcoat>0,y=w.dispersion>0,F=w.iridescence>0,V=w.sheen>0,se=w.transmission>0,j=De&&!!w.anisotropyMap,Me=E&&!!w.clearcoatMap,de=E&&!!w.clearcoatNormalMap,we=E&&!!w.clearcoatRoughnessMap,Ae=F&&!!w.iridescenceMap,he=F&&!!w.iridescenceThicknessMap,xe=V&&!!w.sheenColorMap,Oe=V&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,ve=!!w.specularColorMap,U=!!w.specularIntensityMap,C=se&&!!w.transmissionMap,re=se&&!!w.thicknessMap,fe=!!w.gradientMap,_e=!!w.alphaMap,ce=w.alphaTest>0,te=!!w.alphaHash,Te=!!w.extensions,Be=mi;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=s.toneMapping);let ft={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:qe,fragmentShader:Qe,defines:w.defines,customVertexShaderID:Ke,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:Le,instancingColor:Le&&X.instanceColor!==null,instancingMorph:Le&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Bt,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:Ye,envMap:L,envMapMode:L&&ae.mapping,envMapCubeUVHeight:H,aoMap:oe,lightMap:K,bumpMap:ee,normalMap:Q,displacementMap:d&&z,emissiveMap:$,normalMapObjectSpace:Q&&w.normalMapType===ef,normalMapTangentSpace:Q&&w.normalMapType===Tc,metalnessMap:ie,roughnessMap:Ne,anisotropy:De,anisotropyMap:j,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:de,clearcoatRoughnessMap:we,dispersion:y,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:he,sheen:V,sheenColorMap:xe,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:ve,specularIntensityMap:U,transmission:se,transmissionMap:C,thicknessMap:re,gradientMap:fe,opaque:w.transparent===!1&&w.blending===Bn&&w.alphaToCoverage===!1,alphaMap:_e,alphaTest:ce,alphaHash:te,combine:w.combine,mapUv:Ge&&_(w.map.channel),aoMapUv:oe&&_(w.aoMap.channel),lightMapUv:K&&_(w.lightMap.channel),bumpMapUv:ee&&_(w.bumpMap.channel),normalMapUv:Q&&_(w.normalMap.channel),displacementMapUv:z&&_(w.displacementMap.channel),emissiveMapUv:$&&_(w.emissiveMap.channel),metalnessMapUv:ie&&_(w.metalnessMap.channel),roughnessMapUv:Ne&&_(w.roughnessMap.channel),anisotropyMapUv:j&&_(w.anisotropyMap.channel),clearcoatMapUv:Me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(w.sheenRoughnessMap.channel),specularMapUv:Ie&&_(w.specularMap.channel),specularColorMapUv:ve&&_(w.specularColorMap.channel),specularIntensityMapUv:U&&_(w.specularIntensityMap.channel),transmissionMapUv:C&&_(w.transmissionMap.channel),thicknessMapUv:re&&_(w.thicknessMap.channel),alphaMapUv:_e&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Q||De),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(Ge||_e),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:X.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===at,decodeVideoTextureEmissive:$&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xt,flipSided:w.side===Jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Te&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&w.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(T(b,w),S(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function T(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=p[w.type],D;if(b){let B=Qt[b];D=mo.clone(B.uniforms)}else D=w.uniforms;return D}function I(w,b){let D;for(let B=0,X=u.length;B<X;B++){let G=u[B];if(G.cacheKey===b){D=G,++D.usedTimes;break}}return D===void 0&&(D=new oy(s,b,w,r),u.push(D)),D}function A(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:N}}function ly(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,p,_,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),e++,m}function a(h,d,f,p,_,g){let m=o(h,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,p,_,g){let m=o(h,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||uy),n.length>1&&n.sort(d||Bf),i.length>1&&i.sort(d||Bf)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function hy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new kf,s.set(n,[o])):i>=r.length?(o=new kf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function dy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var py=0;function my(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gy(s){let e=new dy,t=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new We,o=new We;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,T=0,S=0,v=0,I=0,A=0,P=0;c.sort(my);for(let w=0,b=c.length;w<b;w++){let D=c[w],B=D.color,X=D.intensity,G=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*X,h+=B.g*X,d+=B.b*X;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],X);P++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ae=D.shadow,H=t.get(D);H.shadowIntensity=ae.intensity,H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=D.shadow.matrix,T++}n.directional[f]=W,f++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;let ae=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,ae.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=ae.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=ae.intensity,H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,v++}_++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=W,g++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let ae=D.shadow,H=t.get(D);H.shadowIntensity=ae.intensity,H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,H.shadowCameraNear=ae.camera.near,H.shadowCameraFar=ae.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=W,p++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(X),W.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[m]=W,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==p||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==m||N.numDirectionalShadows!==T||N.numPointShadows!==S||N.numSpotShadows!==v||N.numSpotMaps!==I||N.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,N.directionalLength=f,N.pointLength=p,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=m,N.numDirectionalShadows=T,N.numPointShadows=S,N.numSpotShadows=v,N.numSpotMaps=I,N.numLightProbes=P,n.version=py++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,g=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let S=c[m];if(S.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function zf(s){let e=new gy(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new zf(s),e.set(i,[a])):r>=o.length?(a=new zf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vy(s,e,t){let n=new Os,i=new ue,r=new ue,o=new $e,a=new Sa({depthPacking:Qd}),l=new wa,c={},u=t.maxTextureSize,h={[In]:Jt,[Jt]:In,[Xt]:Xt},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:_y,fragmentShader:yy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new lt;p.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new nt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let m=this.type;this.render=function(A,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),B=s.state;B.setBlending(pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=m!==qn&&this.type===qn,G=m===qn&&this.type!==qn;for(let q=0,W=A.length;q<W;q++){let ae=A[q],H=ae.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let le=H.getFrameExtents();if(i.multiply(le),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/le.x),i.x=r.x*le.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/le.y),i.y=r.y*le.y,H.mapSize.y=r.y)),H.map===null||X===!0||G===!0){let me=this.type!==qn?{minFilter:Ot,magFilter:Ot}:{};H.map!==null&&H.map.dispose(),H.map=new zn(i.x,i.y,me),H.map.texture.name=ae.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ge=H.getViewportCount();for(let me=0;me<ge;me++){let Fe=H.getViewport(me);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),B.viewport(o),H.updateMatrices(ae,me),n=H.getFrustum(),v(P,N,H.camera,ae,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&T(H,N),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,b,D)};function T(A,P){let N=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,N,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,N,f,_,null)}function S(A,P,N,w){let b=null,D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)b=D;else if(b=N.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=b.uuid,X=P.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let q=G[X];q===void 0&&(q=b.clone(),G[X]=q,P.addEventListener("dispose",I)),b=q}if(b.visible=P.visible,b.wireframe=P.wireframe,w===qn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:h[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=s.properties.get(b);B.light=N}return b}function v(A,P,N,w,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let X=e.update(A),G=A.material;if(Array.isArray(G)){let q=X.groups;for(let W=0,ae=q.length;W<ae;W++){let H=q[W],le=G[H.materialIndex];if(le&&le.visible){let ge=S(A,le,w,b);A.onBeforeShadow(s,A,P,N,X,ge,H),s.renderBufferDirect(N,null,X,ge,A,H),A.onAfterShadow(s,A,P,N,X,ge,H)}}}else if(G.visible){let q=S(A,G,w,b);A.onBeforeShadow(s,A,P,N,X,q,null),s.renderBufferDirect(N,null,X,q,A,null),A.onAfterShadow(s,A,P,N,X,q,null)}}let B=A.children;for(let X=0,G=B.length;X<G;X++)v(B[X],P,N,w,b)}function I(A){A.target.removeEventListener("dispose",I);for(let N in c){let w=c[N],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var by={[Da]:Na,[Ua]:Ba,[Fa]:ka,[Vi]:Oa,[Na]:Da,[Ba]:Ua,[ka]:Fa,[Oa]:Vi};function My(s,e){function t(){let C=!1,re=new $e,fe=null,_e=new $e(0,0,0,0);return{setMask:function(ce){fe!==ce&&!C&&(s.colorMask(ce,ce,ce,ce),fe=ce)},setLocked:function(ce){C=ce},setClear:function(ce,te,Te,Be,ft){ft===!0&&(ce*=Be,te*=Be,Te*=Be),re.set(ce,te,Te,Be),_e.equals(re)===!1&&(s.clearColor(ce,te,Te,Be),_e.copy(re))},reset:function(){C=!1,fe=null,_e.set(-1,0,0,0)}}}function n(){let C=!1,re=!1,fe=null,_e=null,ce=null;return{setReversed:function(te){if(re!==te){let Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),re=te;let Be=ce;ce=null,this.setClear(Be)}},getReversed:function(){return re},setTest:function(te){te?ne(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(te){fe!==te&&!C&&(s.depthMask(te),fe=te)},setFunc:function(te){if(re&&(te=by[te]),_e!==te){switch(te){case Da:s.depthFunc(s.NEVER);break;case Na:s.depthFunc(s.ALWAYS);break;case Ua:s.depthFunc(s.LESS);break;case Vi:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case Ba:s.depthFunc(s.GREATER);break;case ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=te}},setLocked:function(te){C=te},setClear:function(te){ce!==te&&(re&&(te=1-te),s.clearDepth(te),ce=te)},reset:function(){C=!1,fe=null,_e=null,ce=null,re=!1}}}function i(){let C=!1,re=null,fe=null,_e=null,ce=null,te=null,Te=null,Be=null,ft=null;return{setTest:function(st){C||(st?ne(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(st){re!==st&&!C&&(s.stencilMask(st),re=st)},setFunc:function(st,Jn,Nn){(fe!==st||_e!==Jn||ce!==Nn)&&(s.stencilFunc(st,Jn,Nn),fe=st,_e=Jn,ce=Nn)},setOp:function(st,Jn,Nn){(te!==st||Te!==Jn||Be!==Nn)&&(s.stencilOp(st,Jn,Nn),te=st,Te=Jn,Be=Nn)},setLocked:function(st){C=st},setClear:function(st){ft!==st&&(s.clearStencil(st),ft=st)},reset:function(){C=!1,re=null,fe=null,_e=null,ce=null,te=null,Te=null,Be=null,ft=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,T=null,S=null,v=null,I=null,A=null,P=new Re(0,0,0),N=0,w=!1,b=null,D=null,B=null,X=null,G=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ae=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ae>=1):H.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ae>=2);let le=null,ge={},me=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),qe=new $e().fromArray(me),Qe=new $e().fromArray(Fe);function Ke(C,re,fe,_e){let ce=new Uint8Array(4),te=s.createTexture();s.bindTexture(C,te),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<fe;Te++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(re+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return te}let J={};J[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(Vi),ee(!1),Q(Yl),ne(s.CULL_FACE),oe(pi);function ne(C){u[C]!==!0&&(s.enable(C),u[C]=!0)}function Se(C){u[C]!==!1&&(s.disable(C),u[C]=!1)}function Le(C,re){return h[C]!==re?(s.bindFramebuffer(C,re),h[C]=re,C===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=re),C===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(C,re){let fe=f,_e=!1;if(C){fe=d.get(re),fe===void 0&&(fe=[],d.set(re,fe));let ce=C.textures;if(fe.length!==ce.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Te=ce.length;te<Te;te++)fe[te]=s.COLOR_ATTACHMENT0+te;fe.length=ce.length,_e=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,_e=!0);_e&&s.drawBuffers(fe)}function Ge(C){return p!==C?(s.useProgram(C),p=C,!0):!1}let Ye={[Ti]:s.FUNC_ADD,[Td]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};Ye[Ad]=s.MIN,Ye[Rd]=s.MAX;let L={[Cd]:s.ZERO,[Id]:s.ONE,[Pd]:s.SRC_COLOR,[aa]:s.SRC_ALPHA,[Od]:s.SRC_ALPHA_SATURATE,[Ud]:s.DST_COLOR,[Dd]:s.DST_ALPHA,[Ld]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[Fd]:s.ONE_MINUS_DST_COLOR,[Nd]:s.ONE_MINUS_DST_ALPHA,[Bd]:s.CONSTANT_COLOR,[kd]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[Hd]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(C,re,fe,_e,ce,te,Te,Be,ft,st){if(C===pi){_===!0&&(Se(s.BLEND),_=!1);return}if(_===!1&&(ne(s.BLEND),_=!0),C!==wd){if(C!==g||st!==w){if((m!==Ti||v!==Ti)&&(s.blendEquation(s.FUNC_ADD),m=Ti,v=Ti),st)switch(C){case Bn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.ONE,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Bn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,S=null,I=null,A=null,P.set(0,0,0),N=0,g=C,w=st}return}ce=ce||re,te=te||fe,Te=Te||_e,(re!==m||ce!==v)&&(s.blendEquationSeparate(Ye[re],Ye[ce]),m=re,v=ce),(fe!==T||_e!==S||te!==I||Te!==A)&&(s.blendFuncSeparate(L[fe],L[_e],L[te],L[Te]),T=fe,S=_e,I=te,A=Te),(Be.equals(P)===!1||ft!==N)&&(s.blendColor(Be.r,Be.g,Be.b,ft),P.copy(Be),N=ft),g=C,w=!1}function K(C,re){C.side===Xt?Se(s.CULL_FACE):ne(s.CULL_FACE);let fe=C.side===Jt;re&&(fe=!fe),ee(fe),C.blending===Bn&&C.transparent===!1?oe(pi):oe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let _e=C.stencilWrite;a.setTest(_e),_e&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),$(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(C){b!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),b=C)}function Q(C){C!==bd?(ne(s.CULL_FACE),C!==D&&(C===Yl?s.cullFace(s.BACK):C===Md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),D=C}function z(C){C!==B&&(W&&s.lineWidth(C),B=C)}function $(C,re,fe){C?(ne(s.POLYGON_OFFSET_FILL),(X!==re||G!==fe)&&(s.polygonOffset(re,fe),X=re,G=fe)):Se(s.POLYGON_OFFSET_FILL)}function ie(C){C?ne(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Ne(C){C===void 0&&(C=s.TEXTURE0+q-1),le!==C&&(s.activeTexture(C),le=C)}function De(C,re,fe){fe===void 0&&(le===null?fe=s.TEXTURE0+q-1:fe=le);let _e=ge[fe];_e===void 0&&(_e={type:void 0,texture:void 0},ge[fe]=_e),(_e.type!==C||_e.texture!==re)&&(le!==fe&&(s.activeTexture(fe),le=fe),s.bindTexture(C,re||J[C]),_e.type=C,_e.texture=re)}function E(){let C=ge[le];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{s.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{s.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{s.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{s.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{s.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{s.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(C){qe.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),qe.copy(C))}function Oe(C){Qe.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),Qe.copy(C))}function Ie(C,re){let fe=c.get(re);fe===void 0&&(fe=new WeakMap,c.set(re,fe));let _e=fe.get(C);_e===void 0&&(_e=s.getUniformBlockIndex(re,C.name),fe.set(C,_e))}function ve(C,re){let _e=c.get(re).get(C);l.get(re)!==_e&&(s.uniformBlockBinding(re,_e,C.__bindingPointIndex),l.set(re,_e))}function U(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},le=null,ge={},h={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,T=null,S=null,v=null,I=null,A=null,P=new Re(0,0,0),N=0,w=!1,b=null,D=null,B=null,X=null,G=null,qe.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Se,bindFramebuffer:Le,drawBuffers:Ee,useProgram:Ge,setBlending:oe,setMaterial:K,setFlipSided:ee,setCullFace:Q,setLineWidth:z,setPolygonOffset:$,setScissorTest:ie,activeTexture:Ne,bindTexture:De,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Ae,texImage3D:he,updateUBOMapping:Ie,uniformBlockBinding:ve,texStorage2D:de,texStorage3D:we,texSubImage2D:V,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:xe,viewport:Oe,reset:U}}function Sy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,y){return f?new OffscreenCanvas(E,y):Ls("canvas")}function _(E,y,F){let V=1,se=De(E);if((se.width>F||se.height>F)&&(V=F/Math.max(se.width,se.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let j=Math.floor(V*se.width),Me=Math.floor(V*se.height);h===void 0&&(h=p(j,Me));let de=y?p(j,Me):h;return de.width=j,de.height=Me,de.getContext("2d").drawImage(E,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+Me+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){s.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,y,F,V,se=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===s.RED&&(F===s.FLOAT&&(j=s.R32F),F===s.HALF_FLOAT&&(j=s.R16F),F===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.R8UI),F===s.UNSIGNED_SHORT&&(j=s.R16UI),F===s.UNSIGNED_INT&&(j=s.R32UI),F===s.BYTE&&(j=s.R8I),F===s.SHORT&&(j=s.R16I),F===s.INT&&(j=s.R32I)),y===s.RG&&(F===s.FLOAT&&(j=s.RG32F),F===s.HALF_FLOAT&&(j=s.RG16F),F===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RG8UI),F===s.UNSIGNED_SHORT&&(j=s.RG16UI),F===s.UNSIGNED_INT&&(j=s.RG32UI),F===s.BYTE&&(j=s.RG8I),F===s.SHORT&&(j=s.RG16I),F===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGB8UI),F===s.UNSIGNED_SHORT&&(j=s.RGB16UI),F===s.UNSIGNED_INT&&(j=s.RGB32UI),F===s.BYTE&&(j=s.RGB8I),F===s.SHORT&&(j=s.RGB16I),F===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),F===s.UNSIGNED_INT&&(j=s.RGBA32UI),F===s.BYTE&&(j=s.RGBA8I),F===s.SHORT&&(j=s.RGBA16I),F===s.INT&&(j=s.RGBA32I)),y===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),y===s.RGBA){let Me=se?br:tt.getTransfer(V);F===s.FLOAT&&(j=s.RGBA32F),F===s.HALF_FLOAT&&(j=s.RGBA16F),F===s.UNSIGNED_BYTE&&(j=Me===at?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(E,y){let F;return E?y===null||y===Pi||y===Ys?F=s.DEPTH24_STENCIL8:y===Mn?F=s.DEPTH32F_STENCIL8:y===Xs&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Pi||y===Ys?F=s.DEPTH_COMPONENT24:y===Mn?F=s.DEPTH_COMPONENT32F:y===Xs&&(F=s.DEPTH_COMPONENT16),F}function I(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){let y=E.target;y.removeEventListener("dispose",A),N(y),y.isVideoTexture&&u.delete(y)}function P(E){let y=E.target;y.removeEventListener("dispose",P),b(y)}function N(E){let y=n.get(E);if(y.__webglInit===void 0)return;let F=E.source,V=d.get(F);if(V){let se=V[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(E),Object.keys(V).length===0&&d.delete(F)}n.remove(E)}function w(E){let y=n.get(E);s.deleteTexture(y.__webglTexture);let F=E.source,V=d.get(F);delete V[y.__cacheKey],o.memory.textures--}function b(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let se=0;se<y.__webglFramebuffer[V].length;se++)s.deleteFramebuffer(y.__webglFramebuffer[V][se]);else s.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)s.deleteFramebuffer(y.__webglFramebuffer[V]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=E.textures;for(let V=0,se=F.length;V<se;V++){let j=n.get(F[V]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[V])}n.remove(E)}let D=0;function B(){D=0}function X(){let E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function G(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function q(E,y){let F=n.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let V=E.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,E,y);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function W(E,y){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){J(F,E,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function ae(E,y){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){J(F,E,y);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function H(E,y){let F=n.get(E);if(E.version>0&&F.__version!==E.version){ne(F,E,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}let le={[Ei]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[Is]:s.MIRRORED_REPEAT},ge={[Ot]:s.NEAREST,[Ga]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[Ws]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},me={[tf]:s.NEVER,[cf]:s.ALWAYS,[nf]:s.LESS,[ou]:s.LEQUAL,[sf]:s.EQUAL,[af]:s.GEQUAL,[rf]:s.GREATER,[of]:s.NOTEQUAL};function Fe(E,y){if(y.type===Mn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===Ws||y.magFilter===ns||y.magFilter===Ln||y.minFilter===jt||y.minFilter===Ws||y.minFilter===ns||y.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,le[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,le[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,le[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ge[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==ns&&y.minFilter!==Ln||y.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qe(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));let V=y.source,se=d.get(V);se===void 0&&(se={},d.set(V,se));let j=G(y);if(j!==E.__cacheKey){se[j]===void 0&&(se[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),se[j].usedTimes++;let Me=se[E.__cacheKey];Me!==void 0&&(se[E.__cacheKey].usedTimes--,Me.usedTimes===0&&w(y)),E.__cacheKey=j,E.__webglTexture=se[j].texture}return F}function Qe(E,y,F){return Math.floor(Math.floor(E/F)/y)}function Ke(E,y,F,V){let j=E.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,F,V,y.data);else{j.sort((he,xe)=>he.start-xe.start);let Me=0;for(let he=1;he<j.length;he++){let xe=j[Me],Oe=j[he],Ie=xe.start+xe.count,ve=Qe(Oe.start,y.width,4),U=Qe(xe.start,y.width,4);Oe.start<=Ie+1&&ve===U&&Qe(Oe.start+Oe.count-1,y.width,4)===ve?xe.count=Math.max(xe.count,Oe.start+Oe.count-xe.start):(++Me,j[Me]=Oe)}j.length=Me+1;let de=s.getParameter(s.UNPACK_ROW_LENGTH),we=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let he=0,xe=j.length;he<xe;he++){let Oe=j[he],Ie=Math.floor(Oe.start/4),ve=Math.ceil(Oe.count/4),U=Ie%y.width,C=Math.floor(Ie/y.width),re=ve,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,U),s.pixelStorei(s.UNPACK_SKIP_ROWS,C),t.texSubImage2D(s.TEXTURE_2D,0,U,C,re,fe,F,V,y.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,de),s.pixelStorei(s.UNPACK_SKIP_PIXELS,we),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function J(E,y,F){let V=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=s.TEXTURE_3D);let se=qe(E,y),j=y.source;t.bindTexture(V,E.__webglTexture,s.TEXTURE0+F);let Me=n.get(j);if(j.version!==Me.__version||se===!0){t.activeTexture(s.TEXTURE0+F);let de=tt.getPrimaries(tt.workingColorSpace),we=y.colorSpace===gi?null:tt.getPrimaries(y.colorSpace),Ae=y.colorSpace===gi||de===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let he=_(y.image,!1,i.maxTextureSize);he=Ne(y,he);let xe=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),Ie=S(y.internalFormat,xe,Oe,y.colorSpace,y.isVideoTexture);Fe(V,y);let ve,U=y.mipmaps,C=y.isVideoTexture!==!0,re=Me.__version===void 0||se===!0,fe=j.dataReady,_e=I(y,he);if(y.isDepthTexture)Ie=v(y.format===Zs,y.type),re&&(C?t.texStorage2D(s.TEXTURE_2D,1,Ie,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Ie,he.width,he.height,0,xe,Oe,null));else if(y.isDataTexture)if(U.length>0){C&&re&&t.texStorage2D(s.TEXTURE_2D,_e,Ie,U[0].width,U[0].height);for(let ce=0,te=U.length;ce<te;ce++)ve=U[ce],C?fe&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ve.width,ve.height,xe,Oe,ve.data):t.texImage2D(s.TEXTURE_2D,ce,Ie,ve.width,ve.height,0,xe,Oe,ve.data);y.generateMipmaps=!1}else C?(re&&t.texStorage2D(s.TEXTURE_2D,_e,Ie,he.width,he.height),fe&&Ke(y,he,xe,Oe)):t.texImage2D(s.TEXTURE_2D,0,Ie,he.width,he.height,0,xe,Oe,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){C&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ie,U[0].width,U[0].height,he.depth);for(let ce=0,te=U.length;ce<te;ce++)if(ve=U[ce],y.format!==fn)if(xe!==null)if(C){if(fe)if(y.layerUpdates.size>0){let Te=pu(ve.width,ve.height,y.format,y.type);for(let Be of y.layerUpdates){let ft=ve.data.subarray(Be*Te/ve.data.BYTES_PER_ELEMENT,(Be+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Be,ve.width,ve.height,1,xe,ft)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,he.depth,xe,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Ie,ve.width,ve.height,he.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,he.depth,xe,Oe,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Ie,ve.width,ve.height,he.depth,0,xe,Oe,ve.data)}else{C&&re&&t.texStorage2D(s.TEXTURE_2D,_e,Ie,U[0].width,U[0].height);for(let ce=0,te=U.length;ce<te;ce++)ve=U[ce],y.format!==fn?xe!==null?C?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?fe&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ve.width,ve.height,xe,Oe,ve.data):t.texImage2D(s.TEXTURE_2D,ce,Ie,ve.width,ve.height,0,xe,Oe,ve.data)}else if(y.isDataArrayTexture)if(C){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ie,he.width,he.height,he.depth),fe)if(y.layerUpdates.size>0){let ce=pu(he.width,he.height,y.format,y.type);for(let te of y.layerUpdates){let Te=he.data.subarray(te*ce/he.data.BYTES_PER_ELEMENT,(te+1)*ce/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,he.width,he.height,1,xe,Oe,Te)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,Oe,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,he.width,he.height,he.depth,0,xe,Oe,he.data);else if(y.isData3DTexture)C?(re&&t.texStorage3D(s.TEXTURE_3D,_e,Ie,he.width,he.height,he.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,Oe,he.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,he.width,he.height,he.depth,0,xe,Oe,he.data);else if(y.isFramebufferTexture){if(re)if(C)t.texStorage2D(s.TEXTURE_2D,_e,Ie,he.width,he.height);else{let ce=he.width,te=he.height;for(let Te=0;Te<_e;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ie,ce,te,0,xe,Oe,null),ce>>=1,te>>=1}}else if(U.length>0){if(C&&re){let ce=De(U[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ie,ce.width,ce.height)}for(let ce=0,te=U.length;ce<te;ce++)ve=U[ce],C?fe&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,xe,Oe,ve):t.texImage2D(s.TEXTURE_2D,ce,Ie,xe,Oe,ve);y.generateMipmaps=!1}else if(C){if(re){let ce=De(he);t.texStorage2D(s.TEXTURE_2D,_e,Ie,ce.width,ce.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Oe,he)}else t.texImage2D(s.TEXTURE_2D,0,Ie,xe,Oe,he);g(y)&&m(V),Me.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ne(E,y,F){if(y.image.length!==6)return;let V=qe(E,y),se=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);let j=n.get(se);if(se.version!==j.__version||V===!0){t.activeTexture(s.TEXTURE0+F);let Me=tt.getPrimaries(tt.workingColorSpace),de=y.colorSpace===gi?null:tt.getPrimaries(y.colorSpace),we=y.colorSpace===gi||Me===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Ae&&!he?xe[te]=_(y.image[te],!0,i.maxCubemapSize):xe[te]=he?y.image[te].image:y.image[te],xe[te]=Ne(y,xe[te]);let Oe=xe[0],Ie=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),U=S(y.internalFormat,Ie,ve,y.colorSpace),C=y.isVideoTexture!==!0,re=j.__version===void 0||V===!0,fe=se.dataReady,_e=I(y,Oe);Fe(s.TEXTURE_CUBE_MAP,y);let ce;if(Ae){C&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,U,Oe.width,Oe.height);for(let te=0;te<6;te++){ce=xe[te].mipmaps;for(let Te=0;Te<ce.length;Te++){let Be=ce[Te];y.format!==fn?Ie!==null?C?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Be.width,Be.height,Ie,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,U,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Be.width,Be.height,Ie,ve,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,U,Be.width,Be.height,0,Ie,ve,Be.data)}}}else{if(ce=y.mipmaps,C&&re){ce.length>0&&_e++;let te=De(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,U,te.width,te.height)}for(let te=0;te<6;te++)if(he){C?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Ie,ve,xe[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,U,xe[te].width,xe[te].height,0,Ie,ve,xe[te].data);for(let Te=0;Te<ce.length;Te++){let ft=ce[Te].image[te].image;C?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,ft.width,ft.height,Ie,ve,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,U,ft.width,ft.height,0,Ie,ve,ft.data)}}else{C?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,ve,xe[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,U,Ie,ve,xe[te]);for(let Te=0;Te<ce.length;Te++){let Be=ce[Te];C?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Ie,ve,Be.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,U,Ie,ve,Be.image[te])}}}g(y)&&m(s.TEXTURE_CUBE_MAP),j.__version=se.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Se(E,y,F,V,se,j){let Me=r.convert(F.format,F.colorSpace),de=r.convert(F.type),we=S(F.internalFormat,Me,de,F.colorSpace),Ae=n.get(y),he=n.get(F);if(he.__renderTarget=y,!Ae.__hasExternalTextures){let xe=Math.max(1,y.width>>j),Oe=Math.max(1,y.height>>j);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,j,we,xe,Oe,y.depth,0,Me,de,null):t.texImage2D(se,j,we,xe,Oe,0,Me,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),$(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,se,he.__webglTexture,0,z(y)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,se,he.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(E,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer){let V=y.depthTexture,se=V&&V.isDepthTexture?V.type:null,j=v(y.stencilBuffer,se),Me=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=z(y);$(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,j,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,E)}else{let V=y.textures;for(let se=0;se<V.length;se++){let j=V[se],Me=r.convert(j.format,j.colorSpace),de=r.convert(j.type),we=S(j.internalFormat,Me,de,j.colorSpace),Ae=z(y);F&&$(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,we,y.width,y.height):$(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,we,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,we,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(y.depthTexture);V.__renderTarget=y,(!V.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);let se=V.__webglTexture,j=z(y);if(y.depthTexture.format===Ps)$(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(y.depthTexture.format===Zs)$(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ge(E){let y=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",se)};V.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=V}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let V=E.texture.mipmaps;V&&V.length>0?Ee(y.__webglFramebuffer[0],E):Ee(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=s.createRenderbuffer(),Le(y.__webglDepthbuffer[V],E,!1);else{let se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,j)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Le(y.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(E,y,F){let V=n.get(E);y!==void 0&&Se(V.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ge(E)}function L(E){let y=E.texture,F=n.get(E),V=n.get(y);E.addEventListener("dispose",P);let se=E.textures,j=E.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let we=0;we<y.mipmaps.length;we++)F.__webglFramebuffer[de][we]=s.createFramebuffer()}else F.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)F.__webglFramebuffer[de]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Me)for(let de=0,we=se.length;de<we;de++){let Ae=n.get(se[de]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&$(E)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){let we=se[de];F.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[de]);let Ae=r.convert(we.format,we.colorSpace),he=r.convert(we.type),xe=S(we.internalFormat,Ae,he,we.colorSpace,E.isXRRenderTarget===!0),Oe=z(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,xe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,F.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)Se(F.__webglFramebuffer[de][we],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,we);else Se(F.__webglFramebuffer[de],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(y)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let de=0,we=se.length;de<we;de++){let Ae=se[de],he=n.get(Ae),xe=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,he.__webglTexture),Fe(xe,Ae),Se(F.__webglFramebuffer,E,Ae,s.COLOR_ATTACHMENT0+de,xe,0),g(Ae)&&m(xe)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,V.__webglTexture),Fe(de,y),y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)Se(F.__webglFramebuffer[we],E,y,s.COLOR_ATTACHMENT0,de,we);else Se(F.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,de,0);g(y)&&m(de),t.unbindTexture()}E.depthBuffer&&Ge(E)}function oe(E){let y=E.textures;for(let F=0,V=y.length;F<V;F++){let se=y[F];if(g(se)){let j=T(E),Me=n.get(se).__webglTexture;t.bindTexture(j,Me),m(j),t.unbindTexture()}}}let K=[],ee=[];function Q(E){if(E.samples>0){if($(E)===!1){let y=E.textures,F=E.width,V=E.height,se=s.COLOR_BUFFER_BIT,j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(E),de=y.length>1;if(de)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let we=E.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);let he=n.get(y[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,F,V,0,0,F,V,se,s.NEAREST),l===!0&&(K.length=0,ee.length=0,K.push(s.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(K.push(j),ee.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);let he=n.get(y[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,he,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function z(E){return Math.min(i.maxSamples,E.samples)}function $(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Ne(E,y){let F=E.colorSpace,V=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Bt&&F!==gi&&(tt.getTransfer(F)===at?(V!==fn||se!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function De(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=ae,this.setTextureCube=H,this.rebindTextures=Ye,this.setupRenderTarget=L,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$}function wy(s,e){function t(n,i=gi){let r,o=tt.getTransfer(i);if(n===Dn)return s.UNSIGNED_BYTE;if(n===Xa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return s.BYTE;if(n===Ql)return s.SHORT;if(n===Xs)return s.UNSIGNED_SHORT;if(n===Wa)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===qs)return s.HALF_FLOAT;if(n===nu)return s.ALPHA;if(n===iu)return s.RGB;if(n===fn)return s.RGBA;if(n===Ps)return s.DEPTH_COMPONENT;if(n===Zs)return s.DEPTH_STENCIL;if(n===Ya)return s.RED;if(n===Za)return s.RED_INTEGER;if(n===su)return s.RG;if(n===ja)return s.RG_INTEGER;if(n===Ka)return s.RGBA_INTEGER;if(n===lo||n===uo||n===ho||n===fo)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ja||n===Qa||n===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===nc)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===yc||n===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Mc||n===Sc||n===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ey=`
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

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:Ty,fragmentShader:Ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends kn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Au,m={},T=t.getContextAttributes(),S=null,v=null,I=[],A=[],P=new ue,N=null,w=new Tt;w.viewport=new $e;let b=new Tt;b.viewport=new $e;let D=[w,b],B=new Pa,X=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=I[J];return ne===void 0&&(ne=new Us,I[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=I[J];return ne===void 0&&(ne=new Us,I[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=I[J];return ne===void 0&&(ne=new Us,I[J]=ne),ne.getHandSpace()};function q(J){let ne=A.indexOf(J.inputSource);if(ne===-1)return;let Se=I[ne];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ae);for(let J=0;J<I.length;J++){let ne=A[J];ne!==null&&(A[J]=null,I[J].disconnect(ne))}X=null,G=null,g.reset();for(let J in m)delete m[J];e.setRenderTarget(S),f=null,d=null,h=null,i=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Le=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=T.stencil?Zs:Ps,Le=T.stencil?Ys:Pi);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new zn(d.textureWidth,d.textureHeight,{format:fn,type:Dn,depthTexture:new Or(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new zn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(J){for(let ne=0;ne<J.removed.length;ne++){let Se=J.removed[ne],Le=A.indexOf(Se);Le>=0&&(A[Le]=null,I[Le].disconnect(Se))}for(let ne=0;ne<J.added.length;ne++){let Se=J.added[ne],Le=A.indexOf(Se);if(Le===-1){for(let Ge=0;Ge<I.length;Ge++)if(Ge>=A.length){A.push(Se),Le=Ge;break}else if(A[Ge]===null){A[Ge]=Se,Le=Ge;break}if(Le===-1)break}let Ee=I[Le];Ee&&Ee.connect(Se)}}let H=new R,le=new R;function ge(J,ne,Se){H.setFromMatrixPosition(ne.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);let Le=H.distanceTo(le),Ee=ne.projectionMatrix.elements,Ge=Se.projectionMatrix.elements,Ye=Ee[14]/(Ee[10]-1),L=Ee[14]/(Ee[10]+1),oe=(Ee[9]+1)/Ee[5],K=(Ee[9]-1)/Ee[5],ee=(Ee[8]-1)/Ee[0],Q=(Ge[8]+1)/Ge[0],z=Ye*ee,$=Ye*Q,ie=Le/(-ee+Q),Ne=ie*-ee;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ne),J.translateZ(ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let De=Ye+ie,E=L+ie,y=z-Ne,F=$+(Le-Ne),V=oe*L/E*De,se=K*L/E*De;J.projectionMatrix.makePerspective(y,F,V,se,De,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function me(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ne=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),B.near=b.near=w.near=ne,B.far=b.far=w.far=Se,(X!==B.near||G!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,G=B.far),B.layers.mask=J.layers.mask|6,w.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let Le=J.parent,Ee=B.cameras;me(B,Le);for(let Ge=0;Ge<Ee.length;Ge++)me(Ee[Ge],Le);Ee.length===2?ge(B,w,b):B.projectionMatrix.copy(w.projectionMatrix),Fe(J,B,Le)};function Fe(J,ne,Se){Se===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let qe=null;function Qe(J,ne){if(u=ne.getViewerPose(c||o),p=ne,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Le=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let L=0;L<Se.length;L++){let oe=Se[L],K=null;if(f!==null)K=f.getViewport(oe);else{let Q=h.getViewSubImage(d,oe);K=Q.viewport,L===0&&(e.setRenderTargetTextures(v,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(v))}let ee=D[L];ee===void 0&&(ee=new Tt,ee.layers.enable(L),ee.viewport=new $e,D[L]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(K.x,K.y,K.width,K.height),L===0&&(B.matrix.copy(ee.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(ee)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let L=h.getDepthInformation(Se[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<Se.length;L++){let oe=Se[L].camera;if(oe){let K=m[oe];K||(K=new Br,m[oe]=K);let ee=h.getCameraImage(oe);K.sourceTexture=ee}}}}for(let Se=0;Se<I.length;Se++){let Le=A[Se],Ee=I[Se];Le!==null&&Ee!==void 0&&Ee.update(Le,ne,c||o)}qe&&qe(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let Ke=new Hf;Ke.setAnimationLoop(Qe),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}},os=new yn,Ay=new We;function Ry(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,uu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,T,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,T,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let T=e.get(m),S=T.envMap,v=T.envMapRotation;S&&(g.envMap.value=S,os.copy(v),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(os)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,T,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let T=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cy(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let v=S.program;n.uniformBlockBinding(T,v)}function c(T,S){let v=i[T.id];v===void 0&&(p(T),v=u(T),i[T.id]=v,T.addEventListener("dispose",g));let I=S.program;n.updateUBOMapping(T,I);let A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function u(T){let S=h();T.__bindingPointIndex=S;let v=s.createBuffer(),I=T.__size,A=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let S=i[T.id],v=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,P=v.length;A<P;A++){let N=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,b=N.length;w<b;w++){let D=N[w];if(f(D,A,w,I)===!0){let B=D.__offset,X=Array.isArray(D.value)?D.value:[D.value],G=0;for(let q=0;q<X.length;q++){let W=X[q],ae=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,B+G,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,G),G+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,S,v,I){let A=T.value,P=S+"_"+v;if(I[P]===void 0)return typeof A=="number"||typeof A=="boolean"?I[P]=A:I[P]=A.clone(),!0;{let N=I[P];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return I[P]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function p(T){let S=T.uniforms,v=0,I=16;for(let P=0,N=S.length;P<N;P++){let w=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,D=w.length;b<D;b++){let B=w[b],X=Array.isArray(B.value)?B.value:[B.value];for(let G=0,q=X.length;G<q;G++){let W=X[G],ae=_(W),H=v%I,le=H%ae.boundary,ge=H+le;v+=le,ge!==0&&I-ge<ae.storage&&(v+=I-ge),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=ae.storage}}}let A=v%I;return A>0&&(v+=I-A),T.__size=v,T.__cache={},this}function _(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){let S=T.target;S.removeEventListener("dispose",g);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(let T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Ic=class{constructor(e={}){let{canvas:t=lf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,I=!1;this._outputColorSpace=pt;let A=0,P=0,N=null,w=-1,b=null,D=new $e,B=new $e,X=null,G=new Re(0),q=0,W=t.width,ae=t.height,H=1,le=null,ge=null,me=new $e(0,0,W,ae),Fe=new $e(0,0,W,ae),qe=!1,Qe=new Os,Ke=!1,J=!1,ne=new We,Se=new R,Le=new $e,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Ye(){return N===null?H:1}let L=n;function oe(M,O){return t.getContext(M,O)}try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){let O="webgl2";if(L=oe(O,M),L===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let K,ee,Q,z,$,ie,Ne,De,E,y,F,V,se,j,Me,de,we,Ae,he,xe,Oe,Ie,ve,U;function C(){K=new Yx(L),K.init(),Ie=new wy(L,K),ee=new zx(L,K,e,Ie),Q=new My(L,K),ee.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),z=new Kx(L),$=new ly,ie=new Sy(L,K,Q,$,ee,Ie,z),Ne=new Vx(v),De=new qx(v),E=new ng(L),ve=new Bx(L,E),y=new Zx(L,E,z,ve),F=new Jx(L,y,E,z),he=new $x(L,ee,ie),de=new Hx($),V=new cy(v,Ne,De,K,ee,ve,de),se=new Ry(v,$),j=new hy,Me=new xy(K),Ae=new Ox(v,Ne,De,Q,F,f,l),we=new vy(v,F,ee),U=new Cy(L,z,ee,Q),xe=new kx(L,K,z),Oe=new jx(L,K,z),z.programs=V.programs,v.capabilities=ee,v.extensions=K,v.properties=$,v.renderLists=j,v.shadowMap=we,v.state=Q,v.info=z}C();let re=new Ru(v,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=K.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=K.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(W,ae,!1))},this.getSize=function(M){return M.set(W,ae)},this.setSize=function(M,O,Y=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,ae=O,t.width=Math.floor(M*H),t.height=Math.floor(O*H),Y===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(W*H,ae*H).floor()},this.setDrawingBufferSize=function(M,O,Y){W=M,ae=O,H=Y,t.width=Math.floor(M*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,O,Y,Z){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,O,Y,Z),Q.viewport(D.copy(me).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,O,Y,Z){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,O,Y,Z),Q.scissor(B.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){Q.setScissorTest(qe=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){ge=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,Y=!0){let Z=0;if(M){let k=!1;if(N!==null){let pe=N.texture.format;k=pe===Ka||pe===ja||pe===Za}if(k){let pe=N.texture.type,be=pe===Dn||pe===Pi||pe===Xs||pe===Ys||pe===Xa||pe===qa,Pe=Ae.getClearColor(),Ce=Ae.getClearAlpha(),ze=Pe.r,He=Pe.g,Ue=Pe.b;be?(p[0]=ze,p[1]=He,p[2]=Ue,p[3]=Ce,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=ze,_[1]=He,_[2]=Ue,_[3]=Ce,L.clearBufferiv(L.COLOR,0,_))}else Z|=L.COLOR_BUFFER_BIT}O&&(Z|=L.DEPTH_BUFFER_BIT),Y&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ae.dispose(),j.dispose(),Me.dispose(),$.dispose(),Ne.dispose(),De.dispose(),F.dispose(),ve.dispose(),U.dispose(),V.dispose(),re.dispose(),re.removeEventListener("sessionstart",Nn),re.removeEventListener("sessionend",Sh),Ni.stop()};function fe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let M=z.autoReset,O=we.enabled,Y=we.autoUpdate,Z=we.needsUpdate,k=we.type;C(),z.autoReset=M,we.enabled=O,we.autoUpdate=Y,we.needsUpdate=Z,we.type=k}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){let O=M.target;O.removeEventListener("dispose",te),Te(O)}function Te(M){Be(M),$.remove(M)}function Be(M){let O=$.get(M).programs;O!==void 0&&(O.forEach(function(Y){V.releaseProgram(Y)}),M.isShaderMaterial&&V.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,Y,Z,k,pe){O===null&&(O=Ee);let be=k.isMesh&&k.matrixWorld.determinant()<0,Pe=bp(M,O,Y,Z,k);Q.setMaterial(Z,be);let Ce=Y.index,ze=1;if(Z.wireframe===!0){if(Ce=y.getWireframeAttribute(Y),Ce===void 0)return;ze=2}let He=Y.drawRange,Ue=Y.attributes.position,et=He.start*ze,ct=(He.start+He.count)*ze;pe!==null&&(et=Math.max(et,pe.start*ze),ct=Math.min(ct,(pe.start+pe.count)*ze)),Ce!==null?(et=Math.max(et,0),ct=Math.min(ct,Ce.count)):Ue!=null&&(et=Math.max(et,0),ct=Math.min(ct,Ue.count));let St=ct-et;if(St<0||St===1/0)return;ve.setup(k,Z,Pe,Y,Ce);let mt,ht=xe;if(Ce!==null&&(mt=E.get(Ce),ht=Oe,ht.setIndex(mt)),k.isMesh)Z.wireframe===!0?(Q.setLineWidth(Z.wireframeLinewidth*Ye()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(k.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),Q.setLineWidth(ke*Ye()),k.isLineSegments?ht.setMode(L.LINES):k.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else k.isPoints?ht.setMode(L.POINTS):k.isSprite&&ht.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let ke=k._multiDrawStarts,vt=k._multiDrawCounts,it=k._multiDrawCount,cn=Ce?E.get(Ce).bytesPerElement:1,hs=$.get(Z).currentProgram.getUniforms();for(let ln=0;ln<it;ln++)hs.setValue(L,"_gl_DrawID",ln),ht.render(ke[ln]/cn,vt[ln])}else if(k.isInstancedMesh)ht.renderInstances(et,St,k.count);else if(Y.isInstancedBufferGeometry){let ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,vt=Math.min(Y.instanceCount,ke);ht.renderInstances(et,St,vt)}else ht.render(et,St)};function ft(M,O,Y){M.transparent===!0&&M.side===Xt&&M.forceSinglePass===!1?(M.side=Jt,M.needsUpdate=!0,Mo(M,O,Y),M.side=In,M.needsUpdate=!0,Mo(M,O,Y),M.side=Xt):Mo(M,O,Y)}this.compile=function(M,O,Y=null){Y===null&&(Y=M),m=Me.get(Y),m.init(O),S.push(m),Y.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),M!==Y&&M.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let Z=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){let Pe=pe[be];ft(Pe,Y,k),Z.add(Pe)}else ft(pe,Y,k),Z.add(pe)}),m=S.pop(),Z},this.compileAsync=function(M,O,Y=null){let Z=this.compile(M,O,Y);return new Promise(k=>{function pe(){if(Z.forEach(function(be){$.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){k(M);return}setTimeout(pe,10)}K.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let st=null;function Jn(M){st&&st(M)}function Nn(){Ni.stop()}function Sh(){Ni.start()}let Ni=new Hf;Ni.setAnimationLoop(Jn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(M){st=M,re.setAnimationLoop(M),M===null?Ni.stop():Ni.start()},re.addEventListener("sessionstart",Nn),re.addEventListener("sessionend",Sh),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,N),m=Me.get(M,S.length),m.init(O),S.push(m),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Qe.setFromProjectionMatrix(ne,Cn,O.reversedDepth),J=this.localClippingEnabled,Ke=de.init(this.clippingPlanes,J),g=j.get(M,T.length),g.init(),T.push(g),re.enabled===!0&&re.isPresenting===!0){let pe=v.xr.getDepthSensingMesh();pe!==null&&$c(pe,O,-1/0,v.sortObjects)}$c(M,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(le,ge),Ge=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(g,M),this.info.render.frame++,Ke===!0&&de.beginShadows();let Y=m.state.shadowsArray;we.render(Y,M,O),Ke===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,k=g.transmissive;if(m.setupLights(),O.isArrayCamera){let pe=O.cameras;if(k.length>0)for(let be=0,Pe=pe.length;be<Pe;be++){let Ce=pe[be];Th(Z,k,M,Ce)}Ge&&Ae.render(M);for(let be=0,Pe=pe.length;be<Pe;be++){let Ce=pe[be];wh(g,M,Ce,Ce.viewport)}}else k.length>0&&Th(Z,k,M,O),Ge&&Ae.render(M),wh(g,M,O);N!==null&&P===0&&(ie.updateMultisampleRenderTarget(N),ie.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(v,M,O),ve.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(m=S[S.length-1],Ke===!0&&de.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function $c(M,O,Y,Z){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Qe.intersectsSprite(M)){Z&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);let be=F.update(M),Pe=M.material;Pe.visible&&g.push(M,be,Pe,Y,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Qe.intersectsObject(M))){let be=F.update(M),Pe=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Le.copy(be.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(ne)),Array.isArray(Pe)){let Ce=be.groups;for(let ze=0,He=Ce.length;ze<He;ze++){let Ue=Ce[ze],et=Pe[Ue.materialIndex];et&&et.visible&&g.push(M,be,et,Y,Le.z,Ue)}}else Pe.visible&&g.push(M,be,Pe,Y,Le.z,null)}}let pe=M.children;for(let be=0,Pe=pe.length;be<Pe;be++)$c(pe[be],O,Y,Z)}function wh(M,O,Y,Z){let k=M.opaque,pe=M.transmissive,be=M.transparent;m.setupLightsView(Y),Ke===!0&&de.setGlobalState(v.clippingPlanes,Y),Z&&Q.viewport(D.copy(Z)),k.length>0&&bo(k,O,Y),pe.length>0&&bo(pe,O,Y),be.length>0&&bo(be,O,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Th(M,O,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new zn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?qs:Dn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let pe=m.state.transmissionRenderTarget[Z.id],be=Z.viewport||D;pe.setSize(be.z*v.transmissionResolutionScale,be.w*v.transmissionResolutionScale);let Pe=v.getRenderTarget(),Ce=v.getActiveCubeFace(),ze=v.getActiveMipmapLevel();v.setRenderTarget(pe),v.getClearColor(G),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Ae.render(Y);let He=v.toneMapping;v.toneMapping=mi;let Ue=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),Ke===!0&&de.setGlobalState(v.clippingPlanes,Z),bo(M,Y,Z),ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe),K.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,St=O.length;ct<St;ct++){let mt=O[ct],ht=mt.object,ke=mt.geometry,vt=mt.material,it=mt.group;if(vt.side===Xt&&ht.layers.test(Z.layers)){let cn=vt.side;vt.side=Jt,vt.needsUpdate=!0,Eh(ht,Y,Z,ke,vt,it),vt.side=cn,vt.needsUpdate=!0,et=!0}}et===!0&&(ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe))}v.setRenderTarget(Pe,Ce,ze),v.setClearColor(G,q),Ue!==void 0&&(Z.viewport=Ue),v.toneMapping=He}function bo(M,O,Y){let Z=O.isScene===!0?O.overrideMaterial:null;for(let k=0,pe=M.length;k<pe;k++){let be=M[k],Pe=be.object,Ce=be.geometry,ze=be.group,He=be.material;He.allowOverride===!0&&Z!==null&&(He=Z),Pe.layers.test(Y.layers)&&Eh(Pe,O,Y,Ce,He,ze)}}function Eh(M,O,Y,Z,k,pe){M.onBeforeRender(v,O,Y,Z,k,pe),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(v,O,Y,Z,M,pe),k.transparent===!0&&k.side===Xt&&k.forceSinglePass===!1?(k.side=Jt,k.needsUpdate=!0,v.renderBufferDirect(Y,O,Z,k,M,pe),k.side=In,k.needsUpdate=!0,v.renderBufferDirect(Y,O,Z,k,M,pe),k.side=Xt):v.renderBufferDirect(Y,O,Z,k,M,pe),M.onAfterRender(v,O,Y,Z,k,pe)}function Mo(M,O,Y){O.isScene!==!0&&(O=Ee);let Z=$.get(M),k=m.state.lights,pe=m.state.shadowsArray,be=k.state.version,Pe=V.getParameters(M,k.state,pe,O,Y),Ce=V.getProgramCacheKey(Pe),ze=Z.programs;Z.environment=M.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(M.isMeshStandardMaterial?De:Ne).get(M.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",te),ze=new Map,Z.programs=ze);let He=ze.get(Ce);if(He!==void 0){if(Z.currentProgram===He&&Z.lightsStateVersion===be)return Rh(M,Pe),He}else Pe.uniforms=V.getUniforms(M),M.onBeforeCompile(Pe,v),He=V.acquireProgram(Pe,Ce),ze.set(Ce,He),Z.uniforms=Pe.uniforms;let Ue=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=de.uniform),Rh(M,Pe),Z.needsLights=Sp(M),Z.lightsStateVersion=be,Z.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=He,Z.uniformsList=null,He}function Ah(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Js.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Rh(M,O){let Y=$.get(M);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function bp(M,O,Y,Z,k){O.isScene!==!0&&(O=Ee),ie.resetTextureUnits();let pe=O.fog,be=Z.isMeshStandardMaterial?O.environment:null,Pe=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Bt,Ce=(Z.isMeshStandardMaterial?De:Ne).get(Z.envMap||be),ze=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color,St=mi;Z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(St=v.toneMapping);let mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=mt!==void 0?mt.length:0,ke=$.get(Z),vt=m.state.lights;if(Ke===!0&&(J===!0||M!==b)){let Yt=M===b&&Z.id===w;de.setState(Z,M,Yt)}let it=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==vt.state.version||ke.outputColorSpace!==Pe||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Ce||Z.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==de.numPlanes||ke.numIntersection!==de.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==He||ke.morphTargets!==Ue||ke.morphNormals!==et||ke.morphColors!==ct||ke.toneMapping!==St||ke.morphTargetsCount!==ht)&&(it=!0):(it=!0,ke.__version=Z.version);let cn=ke.currentProgram;it===!0&&(cn=Mo(Z,O,k));let hs=!1,ln=!1,or=!1,bt=cn.getUniforms(),pn=ke.uniforms;if(Q.useProgram(cn.program)&&(hs=!0,ln=!0,or=!0),Z.id!==w&&(w=Z.id,ln=!0),hs||b!==M){Q.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),bt.setValue(L,"projectionMatrix",M.projectionMatrix),bt.setValue(L,"viewMatrix",M.matrixWorldInverse);let tn=bt.map.cameraPosition;tn!==void 0&&tn.setValue(L,Se.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&bt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,ln=!0,or=!0)}if(k.isSkinnedMesh){bt.setOptional(L,k,"bindMatrix"),bt.setOptional(L,k,"bindMatrixInverse");let Yt=k.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),bt.setValue(L,"boneTexture",Yt.boneTexture,ie))}k.isBatchedMesh&&(bt.setOptional(L,k,"batchingTexture"),bt.setValue(L,"batchingTexture",k._matricesTexture,ie),bt.setOptional(L,k,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",k._indirectTexture,ie),bt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",k._colorsTexture,ie));let mn=Y.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&he.update(k,Y,cn),(ln||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,bt.setValue(L,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=Ce,pn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&O.environment!==null&&(pn.envMapIntensity.value=O.environmentIntensity),ln&&(bt.setValue(L,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Mp(pn,or),pe&&Z.fog===!0&&se.refreshFogUniforms(pn,pe),se.refreshMaterialUniforms(pn,Z,H,ae,m.state.transmissionRenderTarget[M.id]),Js.upload(L,Ah(ke),pn,ie)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Js.upload(L,Ah(ke),pn,ie),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&bt.setValue(L,"center",k.center),bt.setValue(L,"modelViewMatrix",k.modelViewMatrix),bt.setValue(L,"normalMatrix",k.normalMatrix),bt.setValue(L,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Yt=Z.uniformsGroups;for(let tn=0,Jc=Yt.length;tn<Jc;tn++){let Ui=Yt[tn];U.update(Ui,cn),U.bind(Ui,cn)}}return cn}function Mp(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Sp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,O,Y){let Z=$.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),$.get(M.texture).__webglTexture=O,$.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let Y=$.get(M);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};let wp=L.createFramebuffer();this.setRenderTarget=function(M,O=0,Y=0){N=M,A=O,P=Y;let Z=!0,k=null,pe=!1,be=!1;if(M){let Ce=$.get(M);if(Ce.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)ie.setupRenderTarget(M);else if(Ce.__hasExternalTextures)ie.rebindTextures(M,$.get(M.texture).__webglTexture,$.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ue=M.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&$.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(M)}}let ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);let He=$.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[O])?k=He[O][Y]:k=He[O],pe=!0):M.samples>0&&ie.useMultisampledRTT(M)===!1?k=$.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[Y]:k=He,D.copy(M.viewport),B.copy(M.scissor),X=M.scissorTest}else D.copy(me).multiplyScalar(H).floor(),B.copy(Fe).multiplyScalar(H).floor(),X=qe;if(Y!==0&&(k=wp),Q.bindFramebuffer(L.FRAMEBUFFER,k)&&Z&&Q.drawBuffers(M,k),Q.viewport(D),Q.scissor(B),Q.setScissorTest(X),pe){let Ce=$.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,Y)}else if(be){let Ce=O;for(let ze=0;ze<M.textures.length;ze++){let He=$.get(M.textures[ze]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ze,He.__webglTexture,Y,Ce)}}else if(M!==null&&Y!==0){let Ce=$.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(M,O,Y,Z,k,pe,be,Pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){Q.bindFramebuffer(L.FRAMEBUFFER,Ce);try{let ze=M.textures[Pe],He=ze.format,Ue=ze.type;if(!ee.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-Z&&Y>=0&&Y<=M.height-k&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pe),L.readPixels(O,Y,Z,k,Ie.convert(He),Ie.convert(Ue),pe))}finally{let ze=N!==null?$.get(N).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,O,Y,Z,k,pe,be,Pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(O>=0&&O<=M.width-Z&&Y>=0&&Y<=M.height-k){Q.bindFramebuffer(L.FRAMEBUFFER,Ce);let ze=M.textures[Pe],He=ze.format,Ue=ze.type;if(!ee.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Pe),L.readPixels(O,Y,Z,k,Ie.convert(He),Ie.convert(Ue),0);let ct=N!==null?$.get(N).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,ct);let St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uf(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(et),L.deleteSync(St),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,Y=0){let Z=Math.pow(2,-Y),k=Math.floor(M.image.width*Z),pe=Math.floor(M.image.height*Z),be=O!==null?O.x:0,Pe=O!==null?O.y:0;ie.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,be,Pe,k,pe),Q.unbindTexture()};let Tp=L.createFramebuffer(),Ep=L.createFramebuffer();this.copyTextureToTexture=function(M,O,Y=null,Z=null,k=0,pe=null){pe===null&&(k!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let be,Pe,Ce,ze,He,Ue,et,ct,St,mt=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(Y!==null)be=Y.max.x-Y.min.x,Pe=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,ze=Y.min.x,He=Y.min.y,Ue=Y.isBox3?Y.min.z:0;else{let mn=Math.pow(2,-k);be=Math.floor(mt.width*mn),Pe=Math.floor(mt.height*mn),M.isDataArrayTexture?Ce=mt.depth:M.isData3DTexture?Ce=Math.floor(mt.depth*mn):Ce=1,ze=0,He=0,Ue=0}Z!==null?(et=Z.x,ct=Z.y,St=Z.z):(et=0,ct=0,St=0);let ht=Ie.convert(O.format),ke=Ie.convert(O.type),vt;O.isData3DTexture?(ie.setTexture3D(O,0),vt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ie.setTexture2DArray(O,0),vt=L.TEXTURE_2D_ARRAY):(ie.setTexture2D(O,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let it=L.getParameter(L.UNPACK_ROW_LENGTH),cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hs=L.getParameter(L.UNPACK_SKIP_PIXELS),ln=L.getParameter(L.UNPACK_SKIP_ROWS),or=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);let bt=M.isDataArrayTexture||M.isData3DTexture,pn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let mn=$.get(M),Yt=$.get(O),tn=$.get(mn.__renderTarget),Jc=$.get(Yt.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,tn.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jc.__webglFramebuffer);for(let Ui=0;Ui<Ce;Ui++)bt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.get(M).__webglTexture,k,Ue+Ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.get(O).__webglTexture,pe,St+Ui)),L.blitFramebuffer(ze,He,be,Pe,et,ct,be,Pe,L.DEPTH_BUFFER_BIT,L.NEAREST);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||$.has(M)){let mn=$.get(M),Yt=$.get(O);Q.bindFramebuffer(L.READ_FRAMEBUFFER,Tp),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ep);for(let tn=0;tn<Ce;tn++)bt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mn.__webglTexture,k,Ue+tn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mn.__webglTexture,k),pn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,pe,St+tn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,pe),k!==0?L.blitFramebuffer(ze,He,be,Pe,et,ct,be,Pe,L.COLOR_BUFFER_BIT,L.NEAREST):pn?L.copyTexSubImage3D(vt,pe,et,ct,St+tn,ze,He,be,Pe):L.copyTexSubImage2D(vt,pe,et,ct,ze,He,be,Pe);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pn?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(vt,pe,et,ct,St,be,Pe,Ce,ht,ke,mt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,pe,et,ct,St,be,Pe,Ce,ht,mt.data):L.texSubImage3D(vt,pe,et,ct,St,be,Pe,Ce,ht,ke,mt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,et,ct,be,Pe,ht,ke,mt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,et,ct,mt.width,mt.height,ht,mt.data):L.texSubImage2D(L.TEXTURE_2D,pe,et,ct,be,Pe,ht,ke,mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hs),L.pixelStorei(L.UNPACK_SKIP_ROWS,ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,or),pe===0&&O.generateMipmaps&&L.generateMipmap(vt),Q.unbindTexture()},this.initRenderTarget=function(M){$.get(M).__webglFramebuffer===void 0&&ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ie.setTextureCube(M,0):M.isData3DTexture?ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ie.setTexture2DArray(M,0):ie.setTexture2D(M,0),Q.unbindTexture()},this.resetState=function(){A=0,P=0,N=null,Q.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var qf={type:"change"},Lu={type:"start"},Zf={type:"end"},Lc=new ai,Yf=new xn,Iy=Math.cos(70*is.DEG2RAD),Lt=new R,an=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pu=1e-6,Dc=class extends ao{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Kt,this._lastTargetPosition=new R,this._quat=new Kt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new R,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new R,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ly.bind(this),this._onPointerDown=Py.bind(this),this._onPointerUp=Dy.bind(this),this._onContextMenu=zy.bind(this),this._onMouseWheel=Fy.bind(this),this._onKeyDown=Oy.bind(this),this._onTouchStart=By.bind(this),this._onTouchMove=ky.bind(this),this._onMouseDown=Ny.bind(this),this._onMouseMove=Uy.bind(this),this._interceptControlDown=Hy.bind(this),this._interceptControlUp=Vy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=ut.NONE}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Lt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<Iy?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pu||this._lastTargetPosition.distanceToSquared(this.target)>Pu?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Lt.copy(i).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Py(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ly(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Dy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zf),this.state=ut.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ny(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case Ci.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case Ci.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Lu)}function Uy(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Fy(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(Lu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Zf))}function Oy(s){this.enabled!==!1&&this._handleKeyDown(s)}function By(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Lu)}function ky(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function zy(s){this.enabled!==!1&&s.preventDefault()}function Hy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jf=new gt,Nc=new R,er=class extends io{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ze(e,3)),this.setAttribute("uv",new Ze(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Ri(t,6,1);return this.setAttribute("instanceStart",new nn(n,3,0)),this.setAttribute("instanceEnd",new nn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Ri(t,6,1);return this.setAttribute("instanceColorStart",new nn(n,3,0)),this.setAttribute("instanceColorEnd",new nn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new jr(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),jf.setFromBufferAttribute(t),this.boundingBox.union(jf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Nc.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nc)),Nc.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Nc));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ue(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qt.line={uniforms:mo.merge([ye.common,ye.fog,ye.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var tr=class extends $t{constructor(e){super({type:"LineMaterial",uniforms:mo.clone(Qt.line.uniforms),vertexShader:Qt.line.vertexShader,fragmentShader:Qt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Du=new $e,Kf=new R,$f=new R,kt=new $e,zt=new $e,Yn=new $e,Nu=new R,Uu=new We,Ht=new ro,Jf=new R,Uc=new gt,Fc=new Nt,Zn=new $e,jn,ls;function Qf(s,e,t){return Zn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Zn.multiplyScalar(1/Zn.w),Zn.x=ls/t.width,Zn.y=ls/t.height,Zn.applyMatrix4(s.projectionMatrixInverse),Zn.multiplyScalar(1/Zn.w),Math.abs(Math.max(Zn.x,Zn.y))}function Gy(s,e){let t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Ht.start.fromBufferAttribute(i,a),Ht.end.fromBufferAttribute(r,a),Ht.applyMatrix4(t);let c=new R,u=new R;jn.distanceSqToSegment(Ht.start,Ht.end,u,c),u.distanceTo(c)<ls*.5&&e.push({point:u,pointOnLine:c,distance:jn.origin.distanceTo(u),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function Wy(s,e,t){let n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;jn.at(1,Yn),Yn.w=1,Yn.applyMatrix4(e.matrixWorldInverse),Yn.applyMatrix4(n),Yn.multiplyScalar(1/Yn.w),Yn.x*=r.x/2,Yn.y*=r.y/2,Yn.z=0,Nu.copy(Yn),Uu.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,f=u;d<f;d++){if(kt.fromBufferAttribute(l,d),zt.fromBufferAttribute(c,d),kt.w=1,zt.w=1,kt.applyMatrix4(Uu),zt.applyMatrix4(Uu),kt.z>h&&zt.z>h)continue;if(kt.z>h){let S=kt.z-zt.z,v=(kt.z-h)/S;kt.lerp(zt,v)}else if(zt.z>h){let S=zt.z-kt.z,v=(zt.z-h)/S;zt.lerp(kt,v)}kt.applyMatrix4(n),zt.applyMatrix4(n),kt.multiplyScalar(1/kt.w),zt.multiplyScalar(1/zt.w),kt.x*=r.x/2,kt.y*=r.y/2,zt.x*=r.x/2,zt.y*=r.y/2,Ht.start.copy(kt),Ht.start.z=0,Ht.end.copy(zt),Ht.end.z=0;let _=Ht.closestPointToPointParameter(Nu,!0);Ht.at(_,Jf);let g=is.lerp(kt.z,zt.z,_),m=g>=-1&&g<=1,T=Nu.distanceTo(Jf)<ls*.5;if(m&&T){Ht.start.fromBufferAttribute(l,d),Ht.end.fromBufferAttribute(c,d),Ht.start.applyMatrix4(o),Ht.end.applyMatrix4(o);let S=new R,v=new R;jn.distanceSqToSegment(Ht.start,Ht.end,v,S),t.push({point:v,pointOnLine:S,distance:jn.origin.distanceTo(v),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}var Oc=class extends nt{constructor(e=new er,t=new tr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Kf.fromBufferAttribute(t,o),$f.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Kf.distanceTo($f);let r=new Ri(i,2,1);return e.setAttribute("instanceDistanceStart",new nn(r,1,0)),e.setAttribute("instanceDistanceEnd",new nn(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;jn=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;ls=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=ls*.5;else{let h=Math.max(i.near,Fc.distanceToPoint(jn.origin));c=Qf(i,h,l.resolution)}if(Fc.radius+=c,jn.intersectsSphere(Fc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Uc.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=ls*.5;else{let h=Math.max(i.near,Uc.distanceToPoint(jn.origin));u=Qf(i,h,l.resolution)}Uc.expandByScalar(u),jn.intersectsBox(Uc)!==!1&&(n?Gy(this,t):Wy(this,i,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Du),this.material.uniforms.resolution.value.set(Du.z,Du.w))}};function kc(s,e=.7,t=.25){return new Ct({color:s,metalness:e,roughness:t,clearcoat:.8,clearcoatRoughness:.16,envMapIntensity:.9})}function xt(s,e,t,n,i=[0,0,0],r=[0,0,0]){let o=new nt(e,t);return o.name=n,o.position.set(...i),o.rotation.set(...r),s.add(o),o}function Bc(s,e,t,n,i,r,o,a){let l=new Et;l.name=`Wheel_${e<0?"Front":"Rear"}_${t<0?"Left":"Right"}`,l.position.set(e,n,t);let c=xt(l,new Zi(n,n,i,28,1),r,"Tire",[0,0,0],[Math.PI/2,0,0]);c.castShadow=!1,xt(l,new Zi(n*.58,n*.58,i+.02,20,1),o,"Rim",[0,0,0],[Math.PI/2,0,0]);let u=t>=0?1:-1;xt(l,new Zr(n*.58,.018,5,26),a,"RimRing",[0,0,u*(i/2+.012)]);for(let h=0;h<5;h+=1){let d=xt(l,new rt(n*.08,n*.52,.018),o,"Spoke",[0,n*.18,u*(i/2+.018)]);d.rotation.z=h/5*Math.PI*2}return xt(l,new Zi(n*.13,n*.13,.04,14),a,"Hub",[0,0,u*(i/2+.028)],[Math.PI/2,0,0]),s.add(l),l}function Fu(){let s=new Et;s.name="Car_Body";let e=kc(10003627,.74,.27),t=kc(5793647,.64,.32),n=kc(593426,.35,.46),i=new Ct({color:463387,metalness:.45,roughness:.06,transparent:!0,opacity:.72,clearcoat:1,depthWrite:!1}),r=new bn({color:131844,roughness:.96,metalness:.02}),o=new bn({color:10924213,metalness:.96,roughness:.18}),a=new Rt({color:10416127,toneMapped:!1}),l=new Rt({color:14023679,toneMapped:!1}),c=new Rt({color:16724046,toneMapped:!1}),u=new ji;u.moveTo(-2.28,.2),u.lineTo(-2.3,.36),u.quadraticCurveTo(-2.16,.55,-1.84,.62),u.lineTo(-.95,.72),u.quadraticCurveTo(-.7,.78,-.54,.86),u.lineTo(.72,.86),u.quadraticCurveTo(1.5,.84,1.88,.72),u.lineTo(2.22,.55),u.quadraticCurveTo(2.3,.38,2.18,.22),u.lineTo(2.12,.18),u.lineTo(-2.12,.18),u.quadraticCurveTo(-2.28,.18,-2.28,.2);let h=new zs(u,{depth:1.8,bevelEnabled:!0,bevelThickness:.045,bevelSize:.05,bevelSegments:3,curveSegments:24,steps:1});h.translate(0,0,-.9),xt(s,h,e,"BodyShell");let d=new ji;d.moveTo(-.78,.86),d.quadraticCurveTo(-.48,1.13,-.04,1.2),d.lineTo(.58,1.17),d.quadraticCurveTo(.94,1.01,1.12,.84),d.closePath();let f=new zs(d,{depth:1.24,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:2,curveSegments:18,steps:1});f.translate(0,0,-.62),xt(s,f,i,"GlassHouse"),xt(s,new rt(.54,.025,1.12),t,"RoofSpine",[.22,1.195,0]),xt(s,new rt(.7,.03,1.95),n,"FrontSplitter",[-2.3,.14,0]),xt(s,new rt(.45,.24,.04),n,"SplitterEndplateL",[-2.25,.25,-.96]),xt(s,new rt(.45,.24,.04),n,"SplitterEndplateR",[-2.25,.25,.96]),xt(s,new rt(.04,.18,1.2),n,"FrontGrille",[-2.31,.43,0]),xt(s,new rt(.035,.06,.38),l,"HeadlightL",[-2.3,.55,-.57]),xt(s,new rt(.035,.06,.38),l,"HeadlightR",[-2.3,.55,.57]),xt(s,new rt(.5,.035,1.7),n,"RearDiffuser",[2.15,.16,0]);for(let p=-2;p<=2;p+=1)xt(s,new rt(.38,.12,.025),n,`DiffuserFin${p}`,[2.18,.24,p*.28]);xt(s,new rt(.03,.055,1.46),c,"TailLamp",[2.22,.57,0]),xt(s,new rt(.42,.035,1.7),n,"RearWing",[2.06,.96,0]),xt(s,new rt(.04,.22,.05),n,"WingPylonL",[2,.84,-.55]),xt(s,new rt(.04,.22,.05),n,"WingPylonR",[2,.84,.55]),xt(s,new rt(.1,.03,1.64),a,"WingGurney",[2.28,.98,0]);for(let p of[-1,1])xt(s,new rt(.74,.26,.04),n,`SideIntake${p}`,[.48,.56,p*.912]),xt(s,new rt(.5,.012,.012),a,`SideBlade${p}`,[.17,.5,p*.918]),xt(s,new rt(2.1,.07,.06),n,`SideSkirt${p}`,[-.08,.2,p*.9]),xt(s,new rt(.2,.055,.15),n,`MirrorPod${p}`,[-.52,.84,p*.86]);return Bc(s,-1.52,-.9,.37,.28,r,o,a),Bc(s,-1.52,.9,.37,.28,r,o,a),Bc(s,1.48,-.92,.39,.32,r,o,a),Bc(s,1.48,.92,.39,.32,r,o,a),ep(s,4.25,4.6),{group:s,update(){}}}function ep(s,e=4.2,t=4.8){s.updateMatrixWorld(!0);let n=new gt().setFromObject(s),i=n.getSize(new R),r=e/Math.max(.001,i.x),o=Math.max(i.x,i.z);return o*r>t&&(r=t/o),s.scale.multiplyScalar(r),s.updateMatrixWorld(!0),n=new gt().setFromObject(s),s.position.x-=(n.min.x+n.max.x)*.5,s.position.z-=(n.min.z+n.max.z)*.5,s.position.y-=n.min.y,s.updateMatrixWorld(!0),new gt().setFromObject(s)}function zc(s,{preserveMaterials:e=!1}={}){let t=new Et,n=kc(12042952,.7,.28),i=[],r=0,o=0;s.traverse(c=>{if(c.isLight||c.isCamera){i.push(c);return}if(c.isMesh&&(r+=1,(!e||!c.material)&&(c.material=n),c.castShadow=!1,c.receiveShadow=!1,c.geometry)){c.geometry.computeVertexNormals();let u=c.geometry.index?c.geometry.index.count:c.geometry.attributes.position?.count||0;o+=u/3}});for(let c of i)c.removeFromParent();if(!r)throw new Error("The file contains no triangle mesh.");t.add(s);let l=ep(t,4.25,4.8).getSize(new R);return t.userData.importStats={meshes:r,triangles:Math.round(o),size:l.toArray()},{group:t,update(){},stats:t.userData.importStats}}function tp(s){s&&s.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let n of t){for(let i of Object.values(n))i&&i.isTexture&&i.dispose();n.dispose()}}})}var pS=Math.PI*2,nr=[[0,new Re("#163dff")],[.26,new Re("#00b8ff")],[.48,new Re("#00f2d0")],[.7,new Re("#d9ff3d")],[.86,new Re("#ff8b26")],[1,new Re("#ff3158")]];function np(s,e,t){return Math.min(t,Math.max(e,s))}function Xy(s){let e=s>>>0;return function(){e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function qy(s){let e=np(s,0,1);for(let t=1;t<nr.length;t+=1)if(e<=nr[t][0]){let[n,i]=nr[t-1],[r,o]=nr[t];return i.clone().lerp(o,(e-n)/Math.max(1e-4,r-n))}return nr[nr.length-1][1].clone()}function Yy(){let s=document.createElement("canvas");s.width=1024,s.height=512;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#08121c"),t.addColorStop(.35,"#182a38"),t.addColorStop(.5,"#68818f"),t.addColorStop(.62,"#0c1821"),t.addColorStop(1,"#020508"),e.fillStyle=t,e.fillRect(0,0,1024,512);let n=e.createRadialGradient(500,70,4,500,70,280);n.addColorStop(0,"rgba(255,255,255,.98)"),n.addColorStop(.18,"rgba(220,245,255,.55)"),n.addColorStop(1,"rgba(120,180,210,0)"),e.fillStyle=n,e.fillRect(0,0,1024,512);let i=e.createRadialGradient(180,260,4,180,260,200);i.addColorStop(0,"rgba(34,126,255,.5)"),i.addColorStop(1,"rgba(2,22,50,0)"),e.fillStyle=i,e.fillRect(0,0,1024,512);let r=new Fr(s);return r.mapping=Gs,r.colorSpace=pt,r}function ip({canvas:s,container:e,initialViz:t,onReady:n,onError:i}){let r=!1,o;try{o=new Ic({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(z){return i?.(z),null}o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.setClearColor(330256,1),o.outputColorSpace=pt,o.toneMapping=Ha,o.toneMappingExposure=1.02;let a=new Ir;a.background=new Re(330256),a.fog=new Cr(463130,.018);let l=Yy();a.environment=l,a.environmentIntensity=1.02;let c=new Tt(38,1,.1,100),u=new R(-6.4,2.95,6.7);c.position.copy(u);let h=new Dc(c,s);h.enableDamping=!0,h.dampingFactor=.065,h.enablePan=!1,h.minDistance=4,h.maxDistance=20,h.minPolarAngle=.12,h.maxPolarAngle=Math.PI*.49,h.target.set(0,1.05,0),h.update();let d=new Et;d.add(new eo(15267839,132361,1.55));let f=new di(16777215,3);f.position.set(-5,9,6),d.add(f);let p=new di(5086719,2);p.position.set(6,4,-7),d.add(p);let _=new di(12117247,.9);_.position.set(-8,3,-3),d.add(_);let g=new Ji(16777215,8,18,2);g.position.set(0,7,0),d.add(g),a.add(d);let m=new nt(new rt(11,.06,.2),new Rt({color:15203327,transparent:!0,opacity:.45,toneMapped:!1,depthWrite:!1}));m.position.set(0,5.3,-2.8),a.add(m);let T=new Et;T.name="WindTunnel";let S=new R(18,4,6),v=new rt(S.x,S.y,S.z),I=new vn(new kr(v),new sn({color:4105944,transparent:!0,opacity:.42,toneMapped:!1,depthWrite:!1}));I.position.set(0,S.y/2,0),T.add(I);let A=new nt(new rt(S.x,S.y,S.z),new Ct({color:2854328,transparent:!0,opacity:.025,roughness:.16,metalness:.1,side:Xt,depthWrite:!1}));A.position.set(0,S.y/2,0),T.add(A);let P=new sn({color:3636890,transparent:!0,opacity:.17,toneMapped:!1,depthWrite:!1});for(let z=-8;z<=8;z+=4){let $=[z,.015,-3,z,.015,3,z,.015,-3,z,4,-3,z,.015,3,z,4,3,z,4,-3,z,4,3],ie=new lt;ie.setAttribute("position",new Ze($,3)),T.add(new vn(ie,P))}let N=new nt(new Hn(6,4),new Rt({color:3051992,transparent:!0,opacity:.055,side:Xt,depthWrite:!1,blending:Vs}));N.rotation.y=Math.PI/2,N.position.set(-9.01,2,0),T.add(N),a.add(T);let w=new nt(new Hn(18,6),new bn({color:396305,metalness:.55,roughness:.52}));w.rotation.x=-Math.PI/2,w.position.y=.006,a.add(w);let b=new oo(18,28,2976904,1716283);b.position.y=.012,b.material.transparent=!0,b.material.opacity=.24,b.material.depthWrite=!1,a.add(b);let D=new nt(new Hn(19,7),new Rt({color:860720,transparent:!0,opacity:.025,blending:Vs,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=.004,a.add(D);let B=null,X=new gt(new R(-2,0,-.9),new R(2,1.2,.9)),G=null;function q(z,$=!1){B&&(a.remove(B),tp(B)),B=z.group||z,G=z.group||z,G.name=$?"Car_Body":"Imported_Car",a.add(G),G.updateMatrixWorld(!0),X=new gt().setFromObject(G),Qe()}function W(z){q(z,!1)}function ae(){q(Fu(),!0)}let H=null,le=null,ge=0,me=[],Fe=0;function qe(z,$,ie){let Ne=4.8,De=0,E=0,y=(z+.1)/2.55,F=($-.82)/.82,V=ie/1.12,se=y*y+F*F+V*V,j=Math.exp(-se*1.45);se<2.3&&(Ne*=1-.36*j,De+=Math.sign($-.82||1)*j*1.5,E+=ie*j*1.6);let Me=z-1.3;if(Me>0){let de=Math.exp(-Me/3.1)*Math.exp(-Math.abs(ie)/1.7)*Math.exp(-Math.abs($-.8)/1.1);E+=Math.sin(Me*2.2-Fe*2.2)*de*2.4*Math.sign(ie||1),De+=Math.cos(Me*1.75-Fe*1.9)*de*.9}return $<.14&&(De+=(.14-$)*6),$>4.2&&(De-=($-4.2)*6),ie<-3.5&&(E+=(-3.5-ie)*4),ie>3.5&&(E-=(ie-3.5)*4),[Ne,De,E]}function Qe(){let z=Xy(20261111);me=[];let $=window.innerWidth<900?120:220;for(let E=0;E<$;E+=1){let y=-8.7,F=.22+z()*3.6,V=-2.75+z()*5.5,se=[];for(let j=0;j<46;j+=1){let Me=Math.hypot(...qe(y,F,V)),de=(y+.1)/2.55,we=(F-.82)/.82,Ae=V/1.12,he=Math.exp(-(de*de+we*we+Ae*Ae)*1.25),xe=y>1.2?Math.exp(-(y-1.2)/3.2)*Math.exp(-Math.abs(V)/1.7):0,Oe=qy(.27+Me/11.5*.34+he*.25+xe*.11);se.push({x:y,y:F,z:V,color:Oe});let[Ie,ve,U]=qe(y,F,V);if(y+=Ie*.16,F+=ve*.16,V+=U*.16,y>8.8||Math.abs(V)>3.7||F<.03||F>4.4)break}se.length>3&&me.push(se)}H&&(a.remove(H),H.geometry.dispose(),le.dispose());let ie=[],Ne=[];for(let E of me)for(let y=0;y<E.length-1;y+=1){let F=E[y],V=E[y+1];ie.push(F.x,F.y,F.z,V.x,V.y,V.z),Ne.push(F.color.r,F.color.g,F.color.b,V.color.r,V.color.g,V.color.b)}let De=new er;De.setPositions(ie),De.setColors(Ne),ge=De.attributes.instanceStart?.count||0,le=new tr({color:16777215,linewidth:1.8,vertexColors:!0,transparent:!0,opacity:t?.opacity??.76,depthWrite:!1,depthTest:!0,blending:Bn,toneMapped:!1,resolution:new ue(1,1)}),H=new Oc(De,le),H.frustumCulled=!1,H.renderOrder=3,a.add(H)}let Ke=Fu();q(Ke,!0);let J=new $t({uniforms:{uMode:{value:0},uTime:{value:0},uOpacity:{value:.68},uMin:{value:0},uMax:{value:40}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uMode;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uMin;
      uniform float uMax;
      vec3 ramp(float t) {
        t = clamp(t, 0.0, 1.0);
        vec3 c0 = vec3(0.03, 0.15, 1.0);
        vec3 c1 = vec3(0.0, 0.78, 1.0);
        vec3 c2 = vec3(0.0, 1.0, 0.62);
        vec3 c3 = vec3(0.92, 1.0, 0.18);
        vec3 c4 = vec3(1.0, 0.45, 0.06);
        vec3 c5 = vec3(1.0, 0.06, 0.18);
        if (t < 0.2) return mix(c0, c1, t / 0.2);
        if (t < 0.4) return mix(c1, c2, (t - 0.2) / 0.2);
        if (t < 0.62) return mix(c2, c3, (t - 0.4) / 0.22);
        if (t < 0.82) return mix(c3, c4, (t - 0.62) / 0.2);
        return mix(c4, c5, (t - 0.82) / 0.18);
      }
      void main() {
        vec2 p = vUv * vec2(14.0, 4.0) - vec2(7.0, 2.0);
        float cx = (p.x + 0.1) / 2.7;
        float cy = (p.y - 0.72) / 0.72;
        float car = exp(-(cx * cx + cy * cy) * 1.5);
        float wave = sin(p.x * 1.6 - uTime * 0.9 + p.y * 2.1) * 0.5 + 0.5;
        float stream = sin(p.x * 3.4 + p.y * 2.4 + uTime) * 0.04;
        float base = clamp((p.x + 7.0) / 14.0 + (p.y / 4.0) * 0.23 + stream, 0.0, 1.0);
        vec3 color;
        if (uMode < 0.5) {
          float speed = (uMax - uMin) * clamp(base * 0.76 + car * 0.6 + wave * 0.12, 0.0, 1.0) + uMin;
          color = ramp((speed - uMin) / max(1.0, uMax - uMin));
        } else if (uMode < 1.5) {
          float pressure = 0.55 - car * 0.85 + (p.x + 7.0) * 0.018 + wave * 0.06;
          color = ramp(clamp(pressure, 0.0, 1.0));
        } else {
          float vort = exp(-abs(p.x - 2.1) * 0.7) * (0.5 + 0.5 * sin(p.y * 5.4 + p.x * 2.2 - uTime * 1.4));
          color = ramp(clamp(vort * 0.8 + base * 0.25, 0.0, 1.0));
        }
        float alpha = uOpacity * (0.35 + 0.65 * smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x));
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,side:Xt,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:Bn}),ne=new nt(new Hn(14,4),J);ne.position.set(0,2,0),ne.visible=!1,ne.renderOrder=4,a.add(ne);function Se(z){let $=z==="velocity"||z==="pressure"||z==="vorticity";H&&(H.visible=z==="streamlines"),ne.visible=$||!!t?.showSlice,J.uniforms.uMode.value=z==="pressure"?1:z==="vorticity"?2:0,J.uniforms.uOpacity.value=$?.55:.3,$&&(H.visible=!0,le.opacity=.22),$||(le.opacity=t?.opacity??.8)}function Le(z){z&&(Se(z.mode),H&&le&&(le.opacity=z.mode==="streamlines"?z.opacity:.18,le.linewidth=1.4+z.density*.8,le.resolution.set(e.clientWidth,e.clientHeight),H.geometry.instanceCount=Math.max(40,Math.floor(ge*np(z.density/2,.2,1)))),ne.visible=z.showSlice||z.mode!=="streamlines",ne.position.z=z.slicePosition*2.2,J.uniforms.uOpacity.value=z.showSlice?.6:.48,J.uniforms.uMin.value=z.colorMin,J.uniforms.uMax.value=z.colorMax,B&&(B.visible=z.showCar),T.visible=z.showTunnel,w.visible=z.showGround,b.visible=z.showGrid)}function Ee(z){z==="side"?(c.position.set(.01,2.4,15.5),h.target.set(0,1.1,0)):z==="top"?(c.position.set(.01,13.2,.8),h.target.set(0,.5,0)):z==="front"?(c.position.set(-13.5,3.2,.01),h.target.set(0,1.05,0)):(c.position.copy(u),h.target.set(0,1.05,0)),h.update()}let Ge=0,Ye=0,L=performance.now(),oe=!0;function K(){let z=Math.max(1,e.clientWidth),$=Math.max(1,e.clientHeight);o.setSize(z,$,!1),c.aspect=z/$,c.updateProjectionMatrix(),le&&le.resolution.set(z,$)}let ee=new ResizeObserver(K);ee.observe(e),K();function Q(z){if(r)return;Ge=requestAnimationFrame(Q);let $=Math.min(.05,Math.max(.001,(z-L)/1e3));L=z,Ye+=$,Fe=Ye,h.update(),ne.visible&&(J.uniforms.uTime.value=Ye),o.render(a,c),oe&&(oe=!1,n?.())}return Ge=requestAnimationFrame(Q),{setVehicle:W,setDemoVehicle:ae,setViz:Le,setView:Ee,resize:K,dispose(){r||(r=!0,cancelAnimationFrame(Ge),ee.disconnect(),h.dispose(),a.traverse(z=>{if(z.geometry&&z.geometry.dispose(),z.material){let $=Array.isArray(z.material)?z.material:[z.material];for(let ie of $){for(let Ne of Object.values(ie))Ne&&Ne.isTexture&&Ne.dispose();ie.dispose()}}}),o.dispose(),a.clear(),l.dispose())}}}function Ou(s,e){if(e===ru)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===js||e===po){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===js)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Hc=class extends on{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new sh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=fi.extractUrlBase(e);o=fi.resolveURL(c,this.path)}else o=fi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cp){try{o[Je.KHR_BINARY_GLTF]=new rh(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new Vu;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new oh(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new ah;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new ch;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Zy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hu=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new di(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ji(u),c.distance=h;break;case"spot":c=new no(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Vu=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){let i=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(i)}},Gu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Wu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},qu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Zu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Bt),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Bt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pt)),Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Qu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},th=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},nh=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},ih=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},sh=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let _=new We,g=new R,m=new Kt,T=new R(1,1,1),S=new Nr(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(g,m,T));for(let v in l)if(v==="_COLOR_0"){let I=l[v];S.instanceColor=new Ai(I.array,I.itemSize,I.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);yt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},cp="glTF",xo=12,sp={JSON:1313821514,BIN:5130562},rh=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-xo,r=new DataView(e,xo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===sp.JSON){let c=new Uint8Array(e,xo+o,a);this.content=n.decode(c)}else if(l===sp.BIN){let c=xo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},oh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=uh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=uh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=ir[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let p in f.attributes){let _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}h(f)},a,c,Bt,d)})})}},ah=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ch=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Vc=class extends li{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,_=p-c,g=-2*f+3*d,m=f-d,T=1-g,S=m-d+h;for(let v=0;v!==a;v++){let I=o[_+v+a],A=o[_+v+l]*u,P=o[p+v+a],N=o[p+v]*u;r[v]=T*I+S*A+g*P+m*N}return r}},jy=new Kt,lh=class extends Vc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return jy.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rp={9728:Ot,9729:jt,9984:Ga,9985:Ws,9986:ns,9987:Ln},op={33071:Fn,33648:Is,10497:Ei},Bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ky={CUBICSPLINE:void 0,LINEAR:Wi,STEP:Gi},ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $y(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new bn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),s.DefaultMaterial}function us(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Qy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ev(s){let e,t=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zu(t.attributes):e=s.indices+":"+zu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+zu(s.targets[n]);return e}function zu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function hh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var nv=new We,dh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Qr(this.options.manager):this.textureLoader=new so(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return us(r,a,i),Kn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(fi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Bu[i.type],a=ir[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new _t(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Bu[i.type],c=ir[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,g;if(f&&f!==h){let m=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,S=t.cache.get(T);S||(_=new c(a,m*f,i.count*f/u),S=new qi(_,f/u),t.cache.add(T,S)),g=new nn(S,l,d%f/u,p)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),g=new _t(_,l,p);if(i.sparse!==void 0){let m=Bu.SCALAR,T=ir[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,I=new T(o[1],S,i.sparse.count*m),A=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new _t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,N=I.length;P<N;P++){let w=I[P];if(g.setX(w,A[P*l]),l>=2&&g.setY(w,A[P*l+1]),l>=3&&g.setZ(w,A[P*l+2]),l>=4&&g.setW(w,A[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=rp[d.magFilter]||jt,u.minFilter=rp[d.minFilter]||Ln,u.wrapS=op[d.wrapS]||Ei,u.wrapT=op[d.wrapT]||Ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){let g=new At(_);g.needsUpdate=!0,d(g)}),t.load(fi.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Kn(h,o),h.userData.mimeType=o.mimeType||tv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Pn,Ut.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new sn,Ut.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let h=i[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Bt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,pt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xt);let u=r.alphaMode||ku.OPAQUE;if(u===ku.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ku.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){let h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Bt)}return r.emissiveTexture!==void 0&&o!==Rt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Kn(h,r),t.associations.set(h,{materials:e}),r.extensions&&us(i,h,r),h})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ap(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=ev(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ap(new lt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?$y(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let _=u[f],g=o[f],m,T=c[f];if(g.mode===Sn.TRIANGLES||g.mode===Sn.TRIANGLE_STRIP||g.mode===Sn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Pr(_,T):new nt(_,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Sn.TRIANGLE_STRIP?m.geometry=Ou(m.geometry,po):g.mode===Sn.TRIANGLE_FAN&&(m.geometry=Ou(m.geometry,js));else if(g.mode===Sn.LINES)m=new vn(_,T);else if(g.mode===Sn.LINE_STRIP)m=new Yi(_,T);else if(g.mode===Sn.LINE_LOOP)m=new Ur(_,T);else if(g.mode===Sn.POINTS)m=new ci(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Qy(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Kn(m,r),g.extensions&&us(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&us(i,h[0],r),h[0];let d=new Et;r.extensions&&us(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(is.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dr(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],p=i.samplers[f.sampler],_=f.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,T=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",T)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],_=h[3],g=h[4],m=[];for(let S=0,v=d.length;S<v;S++){let I=d[S],A=f[S],P=p[S],N=_[S],w=g[S];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();let b=n._createAnimationTracks(I,A,P,N,w);if(b)for(let D=0;D<b.length;D++)m.push(b[D])}let T=new Jr(r,void 0,m);return Kn(T,i),T})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,nv)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Fs:c.length>1?u=new Et:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Kn(u,r),r.extensions&&us(n,u,r),r.matrix!==void 0){let h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Et;n.name&&(r.name=i.createUniqueName(n.name)),Kn(r,n),n.extensions&&us(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof Ut||d instanceof At)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Li[r.path]===Li.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Li[r.path]){case Li.weights:c=Vn;break;case Li.rotation:c=Gn;break;case Li.translation:case Li.scale:c=Wn;break;default:switch(n.itemSize){case 1:c=Vn;break;case 2:case 3:default:c=Wn;break}break}let u=i.interpolation!==void 0?Ky[i.interpolation]:Wi,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+Li[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Gn?lh:Vc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function iv(s,e,t){let n=e.attributes,i=new gt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let u=hh(ir[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=hh(ir[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Nt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ap(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=uh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Kn(s,e),iv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Jy(s,e.targets,t):s})}var sv=/^[og]\s*(.+)?/,rv=/^mtllib /,ov=/^usemtl /,av=/^usemap /,lp=/\s+/,up=new R,fh=new R,hp=new R,dp=new R,wn=new R,Gc=new Re;function cv(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;up.fromArray(i,e),fh.fromArray(i,t),hp.fromArray(i,n),wn.subVectors(hp,fh),dp.subVectors(up,fh),wn.cross(dp),wn.normalize(),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){let u=this.vertices.length,h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(h,d,f),this.addColor(h,d,f),a!==void 0&&a!==""){let p=this.normals.length;h=this.parseNormalIndex(a,p),d=this.parseNormalIndex(l,p),f=this.parseNormalIndex(c,p),this.addNormal(h,d,f)}else this.addFaceNormal(h,d,f);if(i!==void 0&&i!==""){let p=this.uvs.length;h=this.parseUVIndex(i,p),d=this.parseUVIndex(r,p),f=this.parseUVIndex(o,p),this.addUV(h,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}var Wc=class extends on{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,o=new Xn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new cv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i=[];for(let a=0,l=n.length;a<l;a++){let c=n[a].trimStart();if(c.length===0)continue;let u=c.charAt(0);if(u!=="#")if(u==="v"){let h=c.split(lp);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Gc.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),pt),t.colors.push(Gc.r,Gc.g,Gc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){let d=c.slice(1).trim().split(lp),f=[];for(let _=0,g=d.length;_<g;_++){let m=d[_];if(m.length>0){let T=m.split("/");f.push(T)}}let p=f[0];for(let _=1,g=f.length-1;_<g;_++){let m=f[_],T=f[_+1];t.addFace(p[0],m[0],T[0],p[1],m[1],T[1],p[2],m[2],T[2])}}else if(u==="l"){let h=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=h;else for(let p=0,_=h.length;p<_;p++){let g=h[p].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}t.addLineGeometry(d,f)}else if(u==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=sv.exec(c))!==null){let h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(ov.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(rv.test(c))t.materialLibraries.push(c.substring(7).trim());else if(av.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=c.split(" "),i.length>1){let d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new Et;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){let c=t.objects[a],u=c.geometry,h=c.materials,d=u.type==="Line",f=u.type==="Points",p=!1;if(u.vertices.length===0)continue;let _=new lt;_.setAttribute("position",new Ze(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new Ze(u.normals,3)),u.colors.length>0&&(p=!0,_.setAttribute("color",new Ze(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new Ze(u.uvs,2));let g=[];for(let T=0,S=h.length;T<S;T++){let v=h[T],I=v.name+"_"+v.smooth+"_"+p,A=t.materials[I];if(this.materials!==null){if(A=this.materials.create(v.name),d&&A&&!(A instanceof sn)){let P=new sn;Ut.prototype.copy.call(P,A),P.color.copy(A.color),A=P}else if(f&&A&&!(A instanceof Pn)){let P=new Pn({size:10,sizeAttenuation:!1});Ut.prototype.copy.call(P,A),P.color.copy(A.color),P.map=A.map,A=P}}A===void 0&&(d?A=new sn:f?A=new Pn({size:1,sizeAttenuation:!1}):A=new Kr,A.name=v.name,A.flatShading=!v.smooth,A.vertexColors=p,t.materials[I]=A),g.push(A)}let m;if(g.length>1){for(let T=0,S=h.length;T<S;T++){let v=h[T];_.addGroup(v.groupStart,v.groupCount,T)}d?m=new vn(_,g):f?m=new ci(_,g):m=new nt(_,g)}else d?m=new vn(_,g[0]):f?m=new ci(_,g[0]):m=new nt(_,g[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){let a=new Pn({size:1,sizeAttenuation:!1}),l=new lt;l.setAttribute("position",new Ze(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Ze(t.colors,3)),a.vertexColors=!0);let c=new ci(l,a);r.add(c)}return r}};var Xc=class extends on{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Xn(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){function t(c){let u=new DataView(c),h=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*h===u.byteLength)return!0;let p=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(p,u,_))return!1;return!0}function n(c,u,h){for(let d=0,f=c.length;d<f;d++)if(c[d]!==u.getUint8(h+d))return!1;return!0}function i(c){let u=new DataView(c),h=u.getUint32(80,!0),d,f,p,_=!1,g,m,T,S,v;for(let D=0;D<70;D++)u.getUint32(D,!1)==1129270351&&u.getUint8(D+4)==82&&u.getUint8(D+5)==61&&(_=!0,g=new Float32Array(h*3*3),m=u.getUint8(D+6)/255,T=u.getUint8(D+7)/255,S=u.getUint8(D+8)/255,v=u.getUint8(D+9)/255);let I=84,A=12*4+2,P=new lt,N=new Float32Array(h*3*3),w=new Float32Array(h*3*3),b=new Re;for(let D=0;D<h;D++){let B=I+D*A,X=u.getFloat32(B,!0),G=u.getFloat32(B+4,!0),q=u.getFloat32(B+8,!0);if(_){let W=u.getUint16(B+48,!0);(W&32768)===0?(d=(W&31)/31,f=(W>>5&31)/31,p=(W>>10&31)/31):(d=m,f=T,p=S)}for(let W=1;W<=3;W++){let ae=B+W*12,H=D*3*3+(W-1)*3;N[H]=u.getFloat32(ae,!0),N[H+1]=u.getFloat32(ae+4,!0),N[H+2]=u.getFloat32(ae+8,!0),w[H]=X,w[H+1]=G,w[H+2]=q,_&&(b.setRGB(d,f,p,pt),g[H]=b.r,g[H+1]=b.g,g[H+2]=b.b)}}return P.setAttribute("position",new _t(N,3)),P.setAttribute("normal",new _t(w,3)),_&&(P.setAttribute("color",new _t(g,3)),P.hasColors=!0,P.alpha=v),P}function r(c){let u=new lt,h=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/,p=0,_=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),T=[],S=[],v=[],I=new R,A,P=0,N=0,w=0;for(;(A=h.exec(c))!==null;){N=w;let b=A[0],D=(A=f.exec(b))!==null?A[1]:"";for(v.push(D);(A=d.exec(b))!==null;){let G=0,q=0,W=A[0];for(;(A=m.exec(W))!==null;)I.x=parseFloat(A[1]),I.y=parseFloat(A[2]),I.z=parseFloat(A[3]),q++;for(;(A=g.exec(W))!==null;)T.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),S.push(I.x,I.y,I.z),G++,w++;q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),G!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}let B=N,X=w-N;u.userData.groupNames=v,u.addGroup(B,X,P),P++}return u.setAttribute("position",new Ze(T,3)),u.setAttribute("normal",new Ze(S,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){let u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}let l=a(e);return t(l)?i(l):r(o(e))}};var lv=["stl","obj","glb","gltf"],pp=".stl,.obj,.glb,.gltf,model/stl,model/obj,model/gltf-binary,model/gltf+json",ph=25*1024*1024,uv=1179937895,hv=1313821514,dv=new Set(["KHR_draco_mesh_compression","EXT_meshopt_compression","KHR_texture_basisu"]);function mp(s=""){let e=String(s).split(".").pop()?.toLowerCase();return lv.includes(e)?e:null}function Vt(s,e){let t=new Error(e);return t.code=s,t}function mh(s){if(s instanceof ArrayBuffer)return s;if(ArrayBuffer.isView(s))return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength);throw Vt("INVALID_GLTF","The GLB data is not binary.")}function fv(s){let e=mh(s);if(e.byteLength<20)throw Vt("INVALID_GLTF","The GLB header is incomplete.");let t=new DataView(e);if(t.getUint32(0,!0)!==uv||t.getUint32(4,!0)!==2)throw Vt("INVALID_GLTF","The file is not a glTF 2.0 binary.");let n=12;for(;n+8<=e.byteLength;){let i=t.getUint32(n,!0),r=t.getUint32(n+4,!0),o=n+8;if(o+i>e.byteLength)throw Vt("INVALID_GLTF","The GLB chunk table is truncated.");if(r===hv)try{let a=new Uint8Array(e,o,i),l=new TextDecoder().decode(a).replace(/\0+$/g,"").trim();return JSON.parse(l)}catch{throw Vt("INVALID_GLTF","The GLB JSON chunk could not be parsed.")}n=o+i,n%4!==0&&(n+=4-n%4)}throw Vt("INVALID_GLTF","The GLB has no JSON chunk.")}function pv(s){try{let e=String(s).replace(/^\uFEFF/,"").trim();return JSON.parse(e)}catch{throw Vt("INVALID_GLTF","The glTF JSON could not be parsed.")}}function fp(s){let t=(Array.isArray(s?.extensionsRequired)?s.extensionsRequired:[]).filter(r=>dv.has(r));if(t.length>0)throw Vt("COMPRESSED_ASSET",`The model requires unsupported compression: ${t.join(", ")}.`);if([...Array.isArray(s?.buffers)?s.buffers:[],...Array.isArray(s?.images)?s.images:[]].find(r=>typeof r?.uri=="string"&&r.uri.length>0&&!r.uri.startsWith("data:")))throw Vt("EXTERNAL_RESOURCES","The glTF references external buffers or textures; use a GLB or embed them as data URIs.")}function mv(s){if(!s)throw Vt("INVALID_GLTF","No imported asset was provided.");if(s.format==="glb")fp(fv(s.data));else if(s.format==="gltf")fp(pv(s.data));else if(s.format==="obj"||s.format==="stl"){if(!s.data)throw Vt("INVALID_MESH","The mesh file is empty.")}else throw Vt("INVALID_GLTF","Unsupported imported asset format.")}function gv(s){let e=new Hc,t=s.format==="glb"?mh(s.data):String(s.data);return new Promise((n,i)=>{e.parse(t,"",r=>{let o=r?.scene||r?.scenes?.[0];if(!o){i(Vt("NO_MESHES","The glTF contains no renderable scene."));return}try{n(zc(o,{preserveMaterials:!0}))}catch(a){i(a)}},r=>{let o=r instanceof Error?r.message:String(r);if(/draco|meshopt|ktx2|basisu/i.test(o)){i(Vt("COMPRESSED_ASSET",o));return}i(Vt("INVALID_GLTF",o||"The glTF could not be parsed."))})})}async function gp(s){if(mv(s),s.format==="stl")try{let e=new Xc().parse(mh(s.data));e.computeVertexNormals();let t=new nt(e);return zc(t)}catch(e){throw e?.code?e:Vt("INVALID_STL",e instanceof Error?e.message:"The STL could not be parsed.")}if(s.format==="obj")try{let e=new Wc().parse(String(s.data));return zc(e)}catch(e){throw e?.code?e:Vt("INVALID_OBJ",e instanceof Error?e.message:"The OBJ could not be parsed.")}return gv(s)}var _p=null,x=null,xv=null;function yp(s){_p=s,x=s.createElement,xv=s.Fragment}var bh="aerolab-cfd",jc={open:!1},Mh=new Set;function qc(s){if(jc.open!==s){jc.open=s;for(let e of Mh)e()}}function _v(s){return Mh.add(s),()=>Mh.delete(s)}var gh=[{id:"streamlines",label:"\u6D41\u7EBF",sub:"STREAMLINES",icon:"stream"},{id:"velocity",label:"\u901F\u5EA6\u4E91\u56FE",sub:"VELOCITY",icon:"velocity"},{id:"pressure",label:"\u538B\u529B\u4E91\u56FE",sub:"PRESSURE",icon:"pressure"},{id:"vorticity",label:"\u6DA1\u91CF\u56FE",sub:"VORTICITY",icon:"vorticity"}],yv=[20,40,60];function Kc(s,e,t){return Math.min(t,Math.max(e,s))}function sr(s){return Number.isFinite(s)?Math.abs(s)>=1e3?`${(s/1e3).toFixed(2)} kN`:`${s.toFixed(0)} N`:"\u2014"}function xp(s,e,t="text/plain;charset=utf-8"){let n=new Blob([e],{type:t}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=s,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(i),1500)}function xh({size:s=34}){return x("svg",{width:s,height:s,viewBox:"0 0 44 44",fill:"none","aria-hidden":"true"},x("defs",null,x("linearGradient",{id:"ac-logo-g",x1:"4",y1:"4",x2:"40",y2:"40",gradientUnits:"userSpaceOnUse"},x("stop",{stopColor:"#83e8ff"}),x("stop",{offset:".55",stopColor:"#2f8cff"}),x("stop",{offset:"1",stopColor:"#1749d8"}))),x("rect",{x:"1",y:"1",width:"42",height:"42",rx:"12",fill:"#07111c",stroke:"#1d5d8f"}),x("path",{d:"M7 29.5c6.2-1.3 10.1-4.4 13.5-11l3.6-8.7 5.2 9.2c4.1 7.3 7.9 10.2 11.7 11",stroke:"url(#ac-logo-g)",strokeWidth:"2.6",strokeLinecap:"round"}),x("path",{d:"M11 35c5-1 8.1-3.4 10.6-8.2M20 35c3.7-.7 6.1-2.5 8-6.1M30 35c3-.6 5.2-2 6.9-4.6",stroke:"#8de9ff",strokeOpacity:".55",strokeWidth:"1.4",strokeLinecap:"round"}),x("circle",{cx:"24",cy:"9.7",r:"2",fill:"#c6f7ff"}))}function Ft({name:s,size:e=16}){let t={width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.65,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,focusable:!1};switch(s){case"new":return x("svg",{...t},x("path",{d:"M6 3.5h7l5 5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"}),x("path",{d:"M13 3.5V9h5M9 14h6M12 11v6"}));case"open":return x("svg",{...t},x("path",{d:"M3.5 7.5h6l2 2h9v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Z"}),x("path",{d:"M3.5 10h17"}));case"save":return x("svg",{...t},x("path",{d:"M4 4h13l3 3v13H4z"}),x("path",{d:"M8 4v6h8V4M8 20v-6h8v6"}));case"import":return x("svg",{...t},x("path",{d:"M12 3v11m0 0 4-4m-4 4-4-4"}),x("path",{d:"M4 15.5V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.5"}));case"mesh":return x("svg",{...t},x("path",{d:"m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"}),x("path",{d:"m4 7.5 8 4.5 8-4.5M12 12v9M8 5.2v8.8m8-8.8v8.8"}));case"play":return x("svg",{...t},x("path",{d:"M8 5.5v13L19 12 8 5.5Z",fill:"currentColor",stroke:"none"}));case"pause":return x("svg",{...t},x("rect",{x:"7",y:"5",width:"3.4",height:"14",rx:".6",fill:"currentColor",stroke:"none"}),x("rect",{x:"13.6",y:"5",width:"3.4",height:"14",rx:".6",fill:"currentColor",stroke:"none"}));case"stop":return x("svg",{...t},x("rect",{x:"6.5",y:"6.5",width:"11",height:"11",rx:".8",fill:"currentColor",stroke:"none"}));case"analysis":return x("svg",{...t},x("path",{d:"M4 20V4M4 20h16M8 16v-4m4 4V8m4 8v-6m4 6V6"}));case"report":return x("svg",{...t},x("path",{d:"M6 3.5h8l4 4V21H6z"}),x("path",{d:"M14 3.5V8h4M9 12h6M9 16h6"}));case"settings":return x("svg",{...t},x("circle",{cx:"12",cy:"12",r:"3"}),x("path",{d:"M19 13.5a7.5 7.5 0 0 0 0-3l2-1.4-2-3.4-2.2 1a7 7 0 0 0-2.6-1.5L14 3h-4l-.3 2.2a7 7 0 0 0-2.6 1.5l-2.2-1-2 3.4 2 1.4a7.5 7.5 0 0 0 0 3l-2 1.4 2 3.4 2.2-1a7 7 0 0 0 2.6 1.5L10 21h4l.3-2.2a7 7 0 0 0 2.6-1.5l2.2 1 2-3.4-2.1-1.4Z"}));case"close":return x("svg",{...t},x("path",{d:"M6 6l12 12M18 6 6 18"}));case"help":return x("svg",{...t},x("circle",{cx:"12",cy:"12",r:"9"}),x("path",{d:"M9.5 9a2.7 2.7 0 0 1 5.3.6c0 1.6-2.3 1.7-2.3 3.4M12.5 17h.01"}));case"chevron":return x("svg",{...t},x("path",{d:"m8 10 4 4 4-4"}));case"check":return x("svg",{...t},x("path",{d:"m5 12 4.2 4.2L19 6.8"}));case"car":return x("svg",{...t},x("path",{d:"M3.5 15.5 5 10l3-2h8l3 2 1.5 5.5v3h-17z"}),x("path",{d:"M7 15.5h10M7.5 12h9"}),x("circle",{cx:"7.5",cy:"18.5",r:"1.5"}),x("circle",{cx:"16.5",cy:"18.5",r:"1.5"}));case"tunnel":return x("svg",{...t},x("path",{d:"M3 7h18v10H3zM6 10h3v4H6zM12 10h3v4h-3z"}),x("path",{d:"M3 4v3m18-3v3M3 17v3m18-3v3"}));case"ground":return x("svg",{...t},x("path",{d:"M3 17h18M5 17l2-4h10l2 4M8 13V9h8v4"}));case"inlet":return x("svg",{...t},x("path",{d:"M3 12h12M11 8l4 4-4 4M18 5v14"}));case"outlet":return x("svg",{...t},x("path",{d:"M9 12h12m-4-4 4 4-4 4M6 5v14"}));case"wall":return x("svg",{...t},x("path",{d:"M4 5h16v14H4zM4 9h16M4 13h16M8 5v4m8-4v4m-4 4v6"}));case"solver":return x("svg",{...t},x("path",{d:"M5 19V5M5 19h14M8 15c2.4 0 2.1-8 4.5-8s2.1 5 4.5 5 1.8-2 3-2"}));case"grid":return x("svg",{...t},x("path",{d:"M4 4h16v16H4zM4 9h16M4 15h16M9 4v16M15 4v16"}));case"layers":return x("svg",{...t},x("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),x("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"}));case"log":return x("svg",{...t},x("path",{d:"M4 5h16v14H4z"}),x("path",{d:"m7 9 2 2-2 2M12 13h5"}));case"download":return x("svg",{...t},x("path",{d:"M12 3v12m0 0 4-4m-4 4-4-4M4 20h16"}));case"upload":return x("svg",{...t},x("path",{d:"M12 16V4m0 0 4 4m-4-4L8 8M4 20h16"}));case"refresh":return x("svg",{...t},x("path",{d:"M20 11a8 8 0 1 0-2.3 6.7M20 5v6h-6"}));case"info":return x("svg",{...t},x("circle",{cx:"12",cy:"12",r:"9"}),x("path",{d:"M12 11v5M12 8h.01"}));case"eye":return x("svg",{...t},x("path",{d:"M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6S2.5 12 2.5 12Z"}),x("circle",{cx:"12",cy:"12",r:"2.5"}));case"eyeOff":return x("svg",{...t},x("path",{d:"m4 4 16 16M9.9 6.3A11.3 11.3 0 0 1 12 6c6.1 0 9.5 6 9.5 6a16 16 0 0 1-3.1 3.5M6.2 7.9A16.5 16.5 0 0 0 2.5 12s3.4 6 9.5 6a10 10 0 0 0 3.1-.5"}));case"stream":return x("svg",{...t},x("path",{d:"M3 8c4 0 4-3 8-3s4 3 10 3M3 13c4 0 4 3 8 3s4-3 10-3M3 18h18"}));case"velocity":return x("svg",{...t},x("path",{d:"M3 17h11a4 4 0 1 0-4-4H3M3 7h8a3 3 0 1 1-3 3"}),x("path",{d:"m18 14 3 3-3 3"}));case"pressure":return x("svg",{...t},x("path",{d:"M4 17a8 8 0 1 1 16 0"}),x("path",{d:"m12 17 4-5M6 17h12"}),x("circle",{cx:"12",cy:"17",r:"1.4",fill:"currentColor"}));case"vorticity":return x("svg",{...t},x("path",{d:"M19 9c-1-3-4-4-6.5-2.5C9 8.5 10 13 14 13c3 0 4.5-2.5 3.5-4.5"}),x("path",{d:"M5 18c3 1 6-1 6-4 0-2-2-3-3.5-2"}),x("path",{d:"M3 6c2-1 4-.5 5 1"}));default:return x("svg",{...t},x("circle",{cx:"12",cy:"12",r:"8"}))}}function Di({children:s,aside:e}){return x("div",{className:"ac-section-title"},x("span",null,s),e)}function _o({label:s,value:e,unit:t,min:n,max:i,step:r=1,onChange:o}){return x("label",{className:"ac-field"},x("span",null,s),x("div",{className:"ac-number"},x("input",{type:"number",value:e,min:n,max:i,step:r,onChange:a=>o(Kc(Number(a.target.value),n,i))}),t?x("em",null,t):null))}function Yc({label:s,value:e,options:t,onChange:n}){return x("label",{className:"ac-field"},x("span",null,s),x("select",{value:e,onChange:i=>n(i.target.value)},t.map(i=>x("option",{key:i.id,value:i.id},i.name))))}function _h({label:s,value:e,min:t,max:n,step:i,display:r,onChange:o}){let a=(e-t)/(n-t)*100;return x("label",{className:"ac-slider-field"},x("span",{className:"ac-slider-head"},x("span",null,s),x("strong",null,r)),x("input",{type:"range",min:t,max:n,step:i,value:e,style:{"--ac-range":`${a}%`},onChange:l=>o(Number(l.target.value))}))}function yo({checked:s,onChange:e,label:t}){return x("button",{type:"button",role:"switch","aria-checked":s,className:`ac-toggle${s?" is-on":""}`,onClick:()=>e(!s)},x("span",null,t),x("i",null,x("b",null)))}function vv(){return x("svg",{className:"ac-axis",viewBox:"0 0 86 74","aria-hidden":"true"},x("path",{d:"M42 40V13",stroke:"#62e0ff",strokeWidth:"1.5"}),x("path",{d:"m42 13-4 6h8l-4-6Z",fill:"#62e0ff"}),x("text",{x:"48",y:"14",fill:"#8feaff",fontSize:"9"},"Z"),x("path",{d:"M42 40 68 55",stroke:"#8cff74",strokeWidth:"1.5"}),x("path",{d:"m68 55-7-1 3-6 4 7Z",fill:"#8cff74"}),x("text",{x:"70",y:"59",fill:"#9cff85",fontSize:"9"},"Y"),x("path",{d:"M42 40 18 52",stroke:"#ff6b72",strokeWidth:"1.5"}),x("path",{d:"m18 52 7-1-2-6-5 7Z",fill:"#ff6b72"}),x("text",{x:"8",y:"57",fill:"#ff8a8f",fontSize:"9"},"X"),x("circle",{cx:"42",cy:"40",r:"2.2",fill:"#b9edff"}))}function bv({metrics:s}){let e=Kc((s.q||0)/1200,.25,1);return x("div",{className:"ac-pressure-map"},x("svg",{viewBox:"0 0 300 150",role:"img","aria-label":"\u538B\u529B\u5206\u5E03\u9884\u89C8"},x("defs",null,x("radialGradient",{id:"ac-p-front",cx:"42%",cy:"50%",r:"48%"},x("stop",{offset:"0",stopColor:"#ff335c",stopOpacity:.95*e}),x("stop",{offset:".35",stopColor:"#ffb12d",stopOpacity:.8*e}),x("stop",{offset:".7",stopColor:"#2dffcb",stopOpacity:.35*e}),x("stop",{offset:"1",stopColor:"#146dff",stopOpacity:"0"})),x("linearGradient",{id:"ac-p-side",x1:"0",y1:"0",x2:"1",y2:"0"},x("stop",{offset:"0",stopColor:"#1a42ff",stopOpacity:".25"}),x("stop",{offset:".45",stopColor:"#00e7ff",stopOpacity:".55"}),x("stop",{offset:"1",stopColor:"#ff3866",stopOpacity:".04"})),x("filter",{id:"ac-p-blur"},x("feGaussianBlur",{stdDeviation:"14"}))),x("rect",{width:"300",height:"150",fill:"#07111a"}),x("ellipse",{cx:"150",cy:"76",rx:"130",ry:"58",fill:"url(#ac-p-front)",filter:"url(#ac-p-blur)"}),x("path",{d:"M58 83c8-18 28-30 54-32l22-12c12-7 25-6 38 0l26 18c16 3 27 10 34 22-12 15-33 23-62 24h-58c-26 0-43-6-54-20Z",fill:"url(#ac-p-side)",stroke:"#78eaff",strokeOpacity:".2"}),x("path",{d:"M95 57h24v6H95zM183 50h20v8h-20zM104 96h84",stroke:"#aff4ff",strokeOpacity:".35",strokeWidth:"1.2"}),x("rect",{x:"14",y:"14",width:"8",height:"122",rx:"3",fill:"url(#ac-p-legend)"}),x("defs",null,x("linearGradient",{id:"ac-p-legend",x1:"0",y1:"0",x2:"0",y2:"1"},x("stop",{offset:"0",stopColor:"#ff335c"}),x("stop",{offset:".3",stopColor:"#ffb12d"}),x("stop",{offset:".55",stopColor:"#35ffd0"}),x("stop",{offset:"1",stopColor:"#155cff"}))),x("text",{x:"29",y:"21",fill:"#ffb4c0",fontSize:"8"},"\u9AD8"),x("text",{x:"29",y:"143",fill:"#8eb9ff",fontSize:"8"},"\u4F4E")),x("div",{className:"ac-pressure-axis"},x("span",null,"\u538B\u529B\u5206\u5E03 / \u8F66\u8EAB\u8868\u9762"),x("span",null,"\u9884\u89C8")))}function Mv({points:s,iterations:e,progress:t}){let r={left:34,right:12,top:8,bottom:20},o=760-r.left-r.right,a=126-r.top-r.bottom,l=1,c=-5,u=p=>r.left+p/Math.max(1,e)*o,h=p=>r.top+(l-Math.log10(Math.max(1e-7,p)))/(l-c)*a,d=[{id:0,color:"#4e9dff",label:"Continuity"},{id:1,color:"#ffad4d",label:"Ux"},{id:2,color:"#59e39a",label:"Uy"},{id:3,color:"#a77dff",label:"Uz"},{id:4,color:"#ff77c8",label:"\u03C9"}];return x("svg",{className:"ac-chart-svg",viewBox:"0 0 760 126",role:"img","aria-label":"\u6C42\u89E3\u6B8B\u5DEE\u66F2\u7EBF"},[10,.1,.001,1e-5].map(p=>x("g",{key:p},x("line",{x1:r.left,x2:760-r.right,y1:h(p),y2:h(p),stroke:"#1d3649",strokeWidth:".8",strokeDasharray:"2 4"}),x("text",{x:r.left-7,y:h(p)+3,fill:"#67849a",fontSize:"8",textAnchor:"end"},p===10?"1e+01":`1e${p===.1?"-01":p===.001?"-03":"-05"}`))),[0,1e3,2e3,3e3,4e3].map(p=>x("g",{key:p},x("line",{x1:u(p),x2:u(p),y1:r.top,y2:126-r.bottom,stroke:"#122b3c",strokeWidth:".7"}),x("text",{x:u(p),y:120,fill:"#5f7d91",fontSize:"8",textAnchor:"middle"},p===0?"0":p.toLocaleString("en-US")))),x("text",{x:u(e),y:120,fill:"#5f7d91",fontSize:"8",textAnchor:"middle"},e.toLocaleString("en-US")),d.map(p=>{let _=s.map((g,m)=>`${m===0?"M":"L"}${u(g.iteration).toFixed(2)},${h(g.values[p.id]).toFixed(2)}`).join(" ");return x("path",{key:p.id,d:_,fill:"none",stroke:p.color,strokeWidth:"1.35",opacity:".9"})}),x("line",{x1:u(t*e),x2:u(t*e),y1:r.top,y2:126-r.bottom,stroke:"#75eaff",strokeWidth:"1",strokeDasharray:"3 3",opacity:".7"}),x("rect",{x:r.left,y:r.top,width:o,height:a,fill:"none",stroke:"#1e3a4e",strokeWidth:".8"}))}function vo({title:s,subtitle:e,onClose:t,children:n,wide:i=!1}){return x("div",{className:"ac-modal-wrap",role:"dialog","aria-modal":"true","aria-label":s},x("div",{className:`ac-modal${i?" is-wide":""}`},x("div",{className:"ac-modal-head"},x("div",null,x("h3",null,s),e?x("p",null,e):null),x("button",{type:"button",className:"ac-icon-btn",onClick:t,"aria-label":"\u5173\u95ED"},x(Ft,{name:"close",size:17}))),x("div",{className:"ac-modal-body"},n)))}function Sv(s){let{useEffect:e,useMemo:t,useRef:n,useState:i,useCallback:r}=_p,o=s.locale.bind(bh);function a(){let[d,f]=i(jc.open);return e(()=>{let p=_v(()=>f(jc.open));return()=>{typeof p=="function"&&p()}},[]),d}function l(){let[,d]=i(0);return e(()=>{let f=s.locale.subscribe(()=>d(p=>p+1));return()=>{typeof f=="function"&&f()}},[]),o}function c(){let d=l(),f=a();return x("div",{className:"ac-dock-wrap"},x("style",null,wv),x("div",{className:"ac-dock"},x("span",{className:"ac-dock-mark"},x(xh,{size:29})),x("div",{className:"ac-dock-copy"},x("div",{className:"ac-dock-title"},d("launcher.title")," ",x("em",null,"CFD")),x("div",{className:"ac-dock-desc"},d("launcher.desc"))),x("div",{className:"ac-dock-meta"},x("span",{className:"ac-dock-stat"},x("small",null,d("launcher.wind")),x("strong",null,"40 ",x("em",null,"m/s"))),x("span",{className:"ac-dock-stat"},x("small",null,d("launcher.article")),x("strong",null,"Car_Body.STL"))),x("span",{className:"ac-dock-live"},x("i",null),d("launcher.live")),x("button",{type:"button",className:"ac-dock-open",onClick:()=>qc(!0),"aria-label":d("launcher.open")},f?"\u8FD4\u56DE\u5DE5\u4F5C\u53F0":d("launcher.open")," ",x("span",null,"\u2197"))))}function u(){let[d,f]=i("AeroLab_Demo"),[p,_]=i({...xi}),[g,m]=i({...Un}),[T,S]=i({...To}),[v,I]=i({status:"complete",progress:1,ready:!0,cells:ar(xi,Un),quality:Eo(xi)}),[A,P]=i(()=>cr(xi,Un)),[N,w]=i(null),[b,D]=i(Un.name),[B,X]=i(!1),[G,q]=i("car"),[W,ae]=i({geometry:!0,boundaries:!0,mesh:!0,solver:!0}),[H,le]=i(null),[ge,me]=i(null),[Fe,qe]=i(null),[Qe,Ke]=i("iso"),[J,ne]=i(!1),[Se,Le]=i(!1),Ee=n(null),Ge=n(null),Ye=n(null),L=n(null),oe=n(null),K=t(()=>Ih(p,g),[p,g]),ee=A.history||[],Q=gh.find(U=>U.id===T.mode)||gh[0],z=r((U,C="info")=>{qe({message:U,tone:C,id:Date.now()})},[]);e(()=>{if(!Fe)return;let U=setTimeout(()=>qe(null),3200);return()=>clearTimeout(U)},[Fe]),e(()=>{if(!Ee.current||!Ge.current)return;let U=ip({canvas:Ee.current,container:Ge.current,initialViz:T,onReady:()=>Le(!0),onError:()=>z("WebGL \u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u663E\u5361\u9A71\u52A8\u3002","error")});return Ye.current=U,U&&(U.setViz(T),U.setView(Qe)),()=>{Ye.current=null,U?.dispose()}},[]),e(()=>{Ye.current?.setViz(T)},[T]),e(()=>{Ye.current?.setView(Qe)},[Qe]),e(()=>{if(A.status!=="running")return;let U=setInterval(()=>{P(C=>{let re=p.iterations,fe=Math.max(12,Math.round(re/330)),_e=Math.min(re,C.iteration+fe),ce=_e/Math.max(1,re),te=Ro(_e,76),Te=C.elapsedSeconds+.34,Be=C.logs.slice(-120);return _e>=re?(Be.push({time:_i(Te),text:"Solver reached the preview iteration target. Results refreshed."}),{...C,status:"complete",iteration:re,progress:1,elapsedSeconds:Te,etaSeconds:0,history:te,logs:Be}):(_e-C.iteration>=Math.max(1,Math.round(re/20))&&Be.push({time:_i(Te),text:`Iteration ${_e.toLocaleString("en-US")} \xB7 continuity ${Ao(_e,0).toExponential(2)} \xB7 Ux ${Ao(_e,1).toExponential(2)}`}),{...C,status:"running",iteration:_e,progress:ce,elapsedSeconds:Te,etaSeconds:Math.max(1,Math.round((1-ce)*128)),history:te,logs:Be})})},120);return()=>clearInterval(U)},[A.status,p.iterations]),e(()=>{if(v.status!=="generating")return;let U=setInterval(()=>{I(C=>{let re=Math.min(1,C.progress+.075+Math.random()*.025);return re>=1?{status:"complete",progress:1,ready:!0,cells:ar(p,g),quality:Eo(p)}:{...C,progress:re}})},100);return()=>clearInterval(U)},[v.status,p,g]),e(()=>{v.status==="complete"&&A.status==="idle"&&z(`\u7F51\u683C\u751F\u6210\u5B8C\u6210 \xB7 ${ar(p,g).toLocaleString("en-US")} cells`,"success")},[v.status]),e(()=>{let U=C=>{C.key==="Escape"&&(ge?me(null):qc(!1))};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[ge]);let $=(U,C)=>_(re=>({...re,[U]:C})),ie=(U,C)=>S(re=>({...re,[U]:C})),Ne=()=>{f("Untitled_Project"),_({...xi}),m({...Un}),S({...To}),w(null),D(Un.name),I({status:"stale",progress:0,ready:!1,cells:0,quality:"\u2014"}),P({...cr(xi,Un),status:"idle",progress:0,iteration:0,elapsedSeconds:0,etaSeconds:0,history:[]}),Ke("iso"),Ye.current?.setDemoVehicle(),z("\u5DF2\u65B0\u5EFA\u7A7A\u767D\u5DE5\u7A0B\uFF0C\u8BF7\u751F\u6210\u7F51\u683C\u3002","info")},De=()=>{let U=Ph({name:d,spec:p,viz:T,geometry:g,importedName:N?b:"",mesh:v,solver:A});xp(`${d||"aerolab-project"}.json`,JSON.stringify(U,null,2),"application/json;charset=utf-8"),z("\u5DE5\u7A0B JSON \u5DF2\u4FDD\u5B58\u3002","success")},E=async U=>{if(U)try{let C=JSON.parse(await U.text());if(C?.schema!=="aerolab-cfd-project")throw new Error("\u4E0D\u662F AeroLab CFD \u5DE5\u7A0B\u6587\u4EF6\u3002");let re={...xi,...C.spec||{}},fe={...To,...C.viz||{}},_e={...Un,...C.geometry||{}};f(C.name||U.name.replace(/\.[^.]+$/,"")),_(re),S(fe),m(_e),w(null),D(_e.name||Un.name),I({status:C.mesh?.ready?"complete":"stale",progress:C.mesh?.ready?1:0,ready:!!C.mesh?.ready,cells:C.mesh?.cells||0,quality:C.mesh?.quality||"\u2014"});let ce=cr(re,_e);P({...ce,status:"paused",progress:C.solver?.progress??0,iteration:C.solver?.iteration??0,elapsedSeconds:C.solver?.elapsedSeconds??0,history:Ro(C.solver?.iteration??0,76)}),Ke("iso"),Ye.current?.setDemoVehicle(),Ye.current?.setViz(fe),Ye.current?.setView("iso"),z(`\u5DE5\u7A0B\u5DF2\u6253\u5F00\uFF1A${C.name||U.name}`,"success")}catch(C){z(C?.message||"\u5DE5\u7A0B\u6587\u4EF6\u89E3\u6790\u5931\u8D25\u3002","error")}},y=()=>{let U=[`# ${d} \xB7 AeroLab CFD \u9884\u89C8\u62A5\u544A`,"",`\u751F\u6210\u65F6\u95F4\uFF1A${new Date().toLocaleString("zh-CN")}`,"","## \u8BA1\u7B97\u6761\u4EF6",`- \u5165\u53E3\u901F\u5EA6\uFF1A${p.inletVelocity} m/s`,`- \u51FA\u53E3\u538B\u529B\uFF1A${p.outletPressure} Pa`,`- \u7A7A\u6C14\u5BC6\u5EA6\uFF1A${p.density} kg/m\xB3`,`- \u6E29\u5EA6\uFF1A${p.temperature} K`,`- \u6E4D\u6D41\u6A21\u578B\uFF1A${wo.find(C=>C.id===p.turbulence)?.name||p.turbulence}`,`- \u7F51\u683C\uFF1A${v.cells.toLocaleString("en-US")} cells \xB7 ${v.quality} \xB7 ${Qc.find(C=>C.id===p.meshType)?.name}`,"","## \u7ED3\u679C",`- \u963B\u529B\uFF1A${sr(K.drag)}`,`- \u4E0B\u538B\u529B\uFF1A${sr(K.downforce)}`,`- Cd\uFF1A${K.cd.toFixed(3)}`,`- Cl\uFF1A${K.cl.toFixed(3)}`,`- \u96F7\u8BFA\u6570\uFF1A${K.reynolds.toExponential(3)}`,"","## \u91CD\u8981\u8BF4\u660E","\u672C\u62A5\u544A\u7531 AeroLab CFD \u7684 reduced-order \u4EA4\u4E92\u9884\u89C8\u6A21\u578B\u751F\u6210\uFF0C\u4E0D\u662F OpenFOAM \u6C42\u89E3\u7ED3\u679C\uFF0C\u4E5F\u4E0D\u6784\u6210\u5DE5\u7A0B\u8BA4\u8BC1\u3002","\u771F\u5B9E CFD \u9700\u8981\u4E13\u7528\u7F51\u683C\u3001\u8FB9\u754C\u6761\u4EF6\u3001\u6C42\u89E3\u5668\u8BBE\u7F6E\u4E0E\u7F51\u683C\u65E0\u5173\u6027\u9A8C\u8BC1\u3002"];xp(`${d||"aerolab"}-report.md`,U.join(`
`),"text/markdown;charset=utf-8"),z("Markdown \u62A5\u544A\u5DF2\u5BFC\u51FA\u3002","success")},F=()=>{v.status!=="generating"&&(I({status:"generating",progress:0,ready:!1,cells:0,quality:"\u2014"}),P(U=>({...U,status:"idle",progress:0,iteration:0,history:[]})),z("\u6B63\u5728\u751F\u6210\u98CE\u6D1E\u57DF\u4E0E\u8868\u9762\u7F51\u683C\u2026","info"))},V=()=>{if(!v.ready){z("\u8BF7\u5148\u751F\u6210\u7F51\u683C\uFF0C\u518D\u5F00\u59CB\u8BA1\u7B97\u3002","warning");return}P(U=>U.status==="complete"?{...U,status:"running",progress:0,iteration:0,elapsedSeconds:0,etaSeconds:128,history:[],logs:[{time:"00:00:00",text:"New preview solve started."}]}:{...U,status:"running",logs:[...U.logs,{time:_i(U.elapsedSeconds),text:"Solve resumed by user."}].slice(-120)})},se=()=>{P(U=>U.status==="running"?{...U,status:"paused",logs:[...U.logs,{time:_i(U.elapsedSeconds),text:"Solve paused."}].slice(-120)}:U)},j=()=>{P(U=>({...U,status:U.status==="idle"?"idle":"stopped",logs:[...U.logs,{time:_i(U.elapsedSeconds),text:"Solve stopped by user."}].slice(-120)}))},Me=async U=>{if(!U)return;if(U.size>ph){z(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(ph/1024/1024)} MB \u9650\u5236\u3002`,"error");return}let C=mp(U.name);if(!C){z("\u4EC5\u652F\u6301 STL\u3001OBJ\u3001GLB \u6216\u5185\u5D4C glTF\u3002","error");return}X(!0);try{let re=C==="stl"||C==="glb"?await U.arrayBuffer():await U.text(),fe=await gp({format:C,data:re}),_e=fe.stats?.size||[4.25,1.2,1.8],ce=4.56,te=Kc(_e[2]/Math.max(.001,_e[0])*ce,.5,8),Te=Kc(_e[1]/Math.max(.001,_e[0])*ce,.2,5),Be={...g,name:U.name,length:ce,width:te,height:Te};m(Be),D(U.name),w(fe),I({status:"stale",progress:0,ready:!1,cells:0,quality:"\u2014"}),P({...cr(p,Be),status:"idle",progress:0,iteration:0,elapsedSeconds:0,etaSeconds:0,history:[]}),Ye.current?.setVehicle(fe.group),z(`\u6A21\u578B\u5DF2\u5BFC\u5165\uFF1A${U.name} \xB7 ${Math.round(fe.stats?.triangles||0).toLocaleString("en-US")} tris`,"success")}catch(re){z({INVALID_STL:"STL \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B8C\u6574\u3002",INVALID_OBJ:"OBJ \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u5185\u5BB9\u3002",INVALID_GLTF:"glTF/GLB \u89E3\u6790\u5931\u8D25\uFF0C\u6216\u8D44\u6E90\u4E0D\u662F\u5185\u5D4C\u7684\u3002",COMPRESSED_ASSET:"\u8BE5 glTF \u4F7F\u7528\u4E86 Draco/Meshopt/KTX2 \u538B\u7F29\uFF0C\u5F53\u524D\u9884\u89C8\u4E0D\u652F\u6301\u3002",EXTERNAL_RESOURCES:"glTF \u5F15\u7528\u4E86\u5916\u90E8 .bin/\u8D34\u56FE\uFF0C\u8BF7\u6539\u7528 GLB \u6216\u5185\u5D4C\u8D44\u6E90\u3002",NO_MESHES:"\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u6E32\u67D3\u7684\u4E09\u89D2\u7F51\u683C\u3002"}[re?.code]||re?.message||"\u6A21\u578B\u5BFC\u5165\u5931\u8D25\u3002","error")}finally{X(!1)}},de=U=>{U.preventDefault(),ne(!1);let C=U.dataTransfer?.files?.[0];C&&Me(C)},we={idle:"\u7B49\u5F85\u8BA1\u7B97",running:"\u6C42\u89E3\u4E2D",paused:"\u5DF2\u6682\u505C",complete:"\u8BA1\u7B97\u5B8C\u6210",stopped:"\u5DF2\u505C\u6B62"}[A.status]||"\u5C31\u7EEA",Ae=A.status==="complete"?"is-success":A.status==="running"?"is-running":A.status==="paused"?"is-paused":"is-idle",he=Q.label,xe=T.mode==="pressure"?{min:"-500 Pa",mid:"0",max:"+300 Pa",gradient:"linear-gradient(90deg,#1544ff,#00c8ff,#39ffbf,#ffe84a,#ff3b58)"}:T.mode==="vorticity"?{min:"\u4F4E",mid:"\u4E2D",max:"\u9AD8",gradient:"linear-gradient(90deg,#2b4dff,#00e5ff,#b8ff35,#ff7a28,#ff334f)"}:{min:"0",mid:"20",max:"40 m/s",gradient:"linear-gradient(90deg,#163dff,#00c8ff,#00f2c8,#d9ff3d,#ff8a26,#ff3158)"},Oe=[{id:"project",label:"\u9879\u76EE",items:[{label:"\u65B0\u5EFA\u5DE5\u7A0B",icon:"new",action:Ne},{label:"\u6253\u5F00\u5DE5\u7A0B\u2026",icon:"open",action:()=>oe.current?.click()},{label:"\u4FDD\u5B58\u5DE5\u7A0B",icon:"save",action:De}]},{id:"geometry",label:"\u51E0\u4F55",items:[{label:"\u5BFC\u5165\u6A21\u578B\u2026",icon:"import",action:()=>L.current?.click()},{label:"\u91CD\u5EFA\u98CE\u6D1E\u57DF",icon:"tunnel",action:()=>z("\u98CE\u6D1E\u57DF\u5DF2\u6309\u5F53\u524D\u5305\u56F4\u76D2\u91CD\u65B0\u8BA1\u7B97\u3002","success")},{label:"\u68C0\u67E5\u7F51\u683C\u8D28\u91CF",icon:"mesh",action:()=>z(`\u7F51\u683C\u8D28\u91CF\uFF1A${v.quality} \xB7 ${v.cells.toLocaleString("en-US")} cells`,"info")}]},{id:"mesh",label:"\u7F51\u683C",items:[{label:"\u751F\u6210\u7F51\u683C",icon:"mesh",action:F},{label:"\u7F51\u683C\u8BBE\u7F6E",icon:"settings",action:()=>z("\u7F51\u683C\u8BBE\u7F6E\u4F4D\u4E8E\u5DE6\u4FA7\u4EFF\u771F\u53C2\u6570\u4E0E\u9879\u76EE\u6811\u3002","info")}]},{id:"solve",label:"\u6C42\u89E3",items:[{label:"\u5F00\u59CB\u8BA1\u7B97",icon:"play",action:V},{label:"\u6682\u505C",icon:"pause",action:se},{label:"\u505C\u6B62",icon:"stop",action:j},{label:"\u6C42\u89E3\u65E5\u5FD7",icon:"log",action:()=>me({type:"logs"})}]},{id:"post",label:"\u540E\u5904\u7406",items:[{label:"\u7ED3\u679C\u5206\u6790",icon:"analysis",action:()=>me({type:"analysis"})},{label:"\u5BFC\u51FA\u62A5\u544A",icon:"report",action:y}]},{id:"help",label:"\u5E2E\u52A9",items:[{label:"\u5FEB\u901F\u5F00\u59CB",icon:"help",action:()=>me({type:"help"})},{label:"\u5173\u4E8E\u9884\u89C8\u6A21\u578B",icon:"info",action:()=>me({type:"about"})}]}],Ie=({entry:U})=>x("div",{className:"ac-menu-pop",onMouseLeave:()=>le(null)},U.items.map(C=>x("button",{key:C.label,type:"button",onClick:()=>{le(null),C.action()}},x(Ft,{name:C.icon,size:14}),C.label))),ve=ge?ge.type==="analysis"?x(vo,{title:"\u7ED3\u679C\u5206\u6790",subtitle:"Preview results \xB7 \u4E0D\u662F OpenFOAM \u6C42\u89E3\u7ED3\u679C",onClose:()=>me(null),wide:!0},x("div",{className:"ac-analysis-grid"},x("div",{className:"ac-analysis-card"},x("span",null,"\u963B\u529B Fd"),x("strong",null,sr(K.drag)),x("small",null,"Cd ",K.cd.toFixed(3)," \xB7 A ",K.area.toFixed(3)," m\xB2")),x("div",{className:"ac-analysis-card"},x("span",null,"\u4E0B\u538B\u529B"),x("strong",null,sr(K.downforce)),x("small",null,"Cl ",K.cl.toFixed(3)," \xB7 q ",K.q.toFixed(0)," Pa")),x("div",{className:"ac-analysis-card"},x("span",null,"\u963B\u529B\u529F\u7387"),x("strong",null,(K.power/1e3).toFixed(1)," kW"),x("small",null,p.inletVelocity," m/s")),x("div",{className:"ac-analysis-card"},x("span",null,"\u96F7\u8BFA\u6570"),x("strong",null,K.reynolds.toExponential(2)),x("small",null,"Lref ",g.length.toFixed(2)," m"))),x("div",{className:"ac-analysis-table"},x("div",null,x("span",null,"\u7F51\u683C\u5355\u5143"),x("b",null,v.cells.toLocaleString("en-US"))),x("div",null,x("span",null,"\u7F51\u683C\u8D28\u91CF"),x("b",null,v.quality)),x("div",null,x("span",null,"\u6E4D\u6D41\u6A21\u578B"),x("b",null,wo.find(U=>U.id===p.turbulence)?.name)),x("div",null,x("span",null,"\u6C42\u89E3\u72B6\u6001"),x("b",null,we)),x("div",null,x("span",null,"\u5F53\u524D\u8FED\u4EE3"),x("b",null,A.iteration.toLocaleString("en-US")," / ",p.iterations.toLocaleString("en-US")))),x("p",{className:"ac-caveat"},"\u9884\u89C8\u6A21\u578B\u4F7F\u7528\u5DE5\u7A0B\u7EA7\u963B\u529B\u5173\u7CFB\u5F0F\u4E0E\u7B80\u5316\u6D41\u573A\uFF0C\u4EC5\u7528\u4E8E\u4EA4\u4E92\u5C55\u793A\u3002\u771F\u5B9E CFD \u5FC5\u987B\u8BBE\u7F6E\u53C2\u8003\u9762\u79EF\u3001\u5750\u6807\u7CFB\u3001\u5730\u9762\u4E0E\u8F66\u8F6E\u8FB9\u754C\uFF0C\u5E76\u505A\u7F51\u683C\u65E0\u5173\u6027\u9A8C\u8BC1\u3002"),x("div",{className:"ac-modal-actions"},x("button",{type:"button",className:"ac-btn is-primary",onClick:y},x(Ft,{name:"download",size:14}),"\u5BFC\u51FA\u62A5\u544A"),x("button",{type:"button",className:"ac-btn",onClick:()=>me(null)},"\u5173\u95ED"))):ge.type==="view"?x(vo,{title:"\u89C6\u56FE\u8BBE\u7F6E",subtitle:"\u76F8\u673A\u4E0E\u573A\u666F\u663E\u793A",onClose:()=>me(null)},x(Di,null,"\u76F8\u673A"),x("div",{className:"ac-view-buttons"},[["iso","ISO"],["front","\u524D\u89C6"],["side","\u4FA7\u89C6"],["top","\u4FEF\u89C6"]].map(([U,C])=>x("button",{key:U,type:"button",className:`ac-btn${Qe===U?" is-primary":""}`,onClick:()=>Ke(U)},C))),x(Di,null,"\u663E\u793A"),x("div",{className:"ac-toggle-grid"},x(yo,{label:"\u98CE\u6D1E",checked:T.showTunnel,onChange:U=>ie("showTunnel",U)}),x(yo,{label:"\u5730\u9762",checked:T.showGround,onChange:U=>ie("showGround",U)}),x(yo,{label:"\u7F51\u683C\u7EBF",checked:T.showGrid,onChange:U=>ie("showGrid",U)}),x(yo,{label:"\u8F66\u8EAB",checked:T.showCar,onChange:U=>ie("showCar",U)})),x("p",{className:"ac-caveat"},"\u9F20\u6807\u62D6\u62FD\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\u3002\u6240\u6709\u89C6\u56FE\u5747\u4E3A\u5B9E\u65F6\u9884\u89C8\u3002")):ge.type==="logs"?x(vo,{title:"\u6C42\u89E3\u65E5\u5FD7",subtitle:"\u6700\u65B0 120 \u884C \xB7 \u9884\u89C8\u6C42\u89E3\u5668",onClose:()=>me(null),wide:!0},x("div",{className:"ac-log-list"},(A.logs||[]).slice(-120).map((U,C)=>x("div",{key:`${U.time}-${C}`},x("time",null,U.time),x("span",null,U.text))))):ge.type==="about"?x(vo,{title:"AeroLab CFD",subtitle:"Version 1.0.0 \xB7 DSH Web UI plugin",onClose:()=>me(null)},x("div",{className:"ac-about-hero"},x(xh,{size:58}),x("div",null,x("h2",null,"AeroLab CFD"),x("p",null,"\u4EA4\u4E92\u5F0F\u865A\u62DF\u98CE\u6D1E / CFD \u5DE5\u4F5C\u53F0"))),x("p",{className:"ac-about-copy"},"\u672C\u9879\u76EE\u628A MD \u65B9\u6848\u4E2D\u7684\u9879\u76EE\u6811\u3001\u8FB9\u754C\u6761\u4EF6\u3001\u7F51\u683C\u3001\u6C42\u89E3\u3001\u540E\u5904\u7406\u4E0E\u6B8B\u5DEE\u8BCA\u65AD\uFF0C\u505A\u6210 DSH Web UI \u91CC\u7684\u53EF\u89C6\u5316\u63D2\u4EF6\u3002\u5B83\u4E0D\u542F\u52A8\u672C\u5730 OpenFOAM \u8FDB\u7A0B\uFF0C\u4E5F\u4E0D\u5BA3\u79F0\u7ED3\u679C\u662F\u7ECF\u9A8C\u8BC1\u7684 CFD\u3002"),x("div",{className:"ac-about-tags"},x("span",null,"STL / OBJ / GLB"),x("span",null,"Streamlines"),x("span",null,"Velocity / Pressure"),x("span",null,"Vorticity"),x("span",null,"CSV / Markdown report"))):x(vo,{title:"\u5FEB\u901F\u5F00\u59CB",subtitle:"\u4ECE\u6A21\u578B\u5230\u9884\u89C8\u7ED3\u679C",onClose:()=>me(null),wide:!0},x("div",{className:"ac-steps"},x("div",null,x("b",null,"01"),x("span",null,"\u5BFC\u5165\u6A21\u578B"),x("p",null,"\u4F7F\u7528 STL/OBJ/GLB\u3002\u63D2\u4EF6\u4F1A\u68C0\u67E5\u4E09\u89D2\u7F51\u683C\u5E76\u5F52\u4E00\u5316\u663E\u793A\u3002")),x("div",null,x("b",null,"02"),x("span",null,"\u751F\u6210\u7F51\u683C"),x("p",null,"\u8BBE\u7F6E\u5165\u53E3\u98CE\u901F\u3001\u7A7A\u6C14\u53C2\u6570\u548C\u7F51\u683C\u7CBE\u5EA6\uFF0C\u7136\u540E\u751F\u6210\u98CE\u6D1E\u57DF\u4E0E\u8868\u9762\u7F51\u683C\u3002")),x("div",null,x("b",null,"03"),x("span",null,"\u5F00\u59CB\u8BA1\u7B97"),x("p",null,"\u9884\u89C8\u6C42\u89E3\u5668\u63A8\u8FDB\u8FED\u4EE3\uFF0C\u6B8B\u5DEE\u66F2\u7EBF\u548C\u72B6\u6001\u680F\u5B9E\u65F6\u66F4\u65B0\u3002")),x("div",null,x("b",null,"04"),x("span",null,"\u67E5\u770B\u7ED3\u679C"),x("p",null,"\u5207\u6362\u6D41\u7EBF\u3001\u901F\u5EA6\u4E91\u56FE\u3001\u538B\u529B\u4E91\u56FE\u3001\u6DA1\u91CF\u56FE\uFF1B\u67E5\u770B\u963B\u529B/\u4E0B\u538B\u529B\u5E76\u5BFC\u51FA\u62A5\u544A\u3002"))),x("p",{className:"ac-caveat"},"\u771F\u5B9E CFD \u4F7F\u7528 OpenFOAM \u7B49\u6C42\u89E3\u5668\u9700\u8981\u5916\u90E8\u8FDB\u7A0B\u4E0E\u7F51\u683C\u6587\u4EF6\u3002\u672C\u63D2\u4EF6\u5B9A\u4F4D\u4E3A\u4EA4\u4E92\u5F0F\u53EF\u89C6\u5316/\u6D41\u7A0B\u6F14\u793A\uFF0C\u4E0D\u66FF\u4EE3\u5DE5\u7A0B\u6C42\u89E3\u3002")):null;return x("div",{className:"ac-root",onMouseDown:U=>{U.target===U.currentTarget&&qc(!1)}},x("style",null,Tv),x("div",{className:"ac-shell"},x("header",{className:"ac-titlebar"},x("div",{className:"ac-brand"},x(xh,{size:30}),x("div",{className:"ac-brand-copy"},x("strong",null,"AeroLab CFD"),x("span",null,"PREVIEW WORKSPACE"))),x("nav",{className:"ac-menu"},Oe.map(U=>x("div",{className:"ac-menu-item",key:U.id,onMouseLeave:()=>le(null)},x("button",{type:"button",className:H===U.id?"is-open":"",onClick:()=>le(H===U.id?null:U.id),onMouseEnter:()=>le(U.id)},U.label,x(Ft,{name:"chevron",size:12})),H===U.id?x(Ie,{entry:U}):null))),x("div",{className:"ac-title-right"},x("span",{className:"ac-project-name"},d),x("span",{className:"ac-version"},"v1.0.0"),x("div",{className:"ac-window-buttons"},x("button",{type:"button",className:"ac-icon-btn","aria-label":"\u6700\u5C0F\u5316"},x("span",null,"\u2014")),x("button",{type:"button",className:"ac-icon-btn","aria-label":"\u6700\u5927\u5316"},x("span",null,"\u25A2")),x("button",{type:"button",className:"ac-icon-btn is-close",onClick:()=>qc(!1),"aria-label":"\u5173\u95ED"},x(Ft,{name:"close",size:16}))))),x("div",{className:"ac-toolbar"},x("div",{className:"ac-tool-group"},x($n,{icon:"new",label:"\u65B0\u5EFA",onClick:Ne}),x($n,{icon:"open",label:"\u6253\u5F00",onClick:()=>oe.current?.click()}),x($n,{icon:"save",label:"\u4FDD\u5B58",onClick:De})),x("div",{className:"ac-tool-sep"}),x("div",{className:"ac-tool-group"},x($n,{icon:"import",label:"\u5BFC\u5165\u6A21\u578B",onClick:()=>L.current?.click()}),x($n,{icon:"mesh",label:"\u751F\u6210\u7F51\u683C",onClick:F,disabled:v.status==="generating"})),x("div",{className:"ac-tool-sep"}),x("div",{className:"ac-tool-group"},x("button",{type:"button",className:"ac-run-btn",onClick:V},x(Ft,{name:"play",size:14}),"\u5F00\u59CB\u8BA1\u7B97"),x($n,{icon:"pause",label:"\u6682\u505C",onClick:se,disabled:A.status!=="running"}),x($n,{icon:"stop",label:"\u505C\u6B62",onClick:j,disabled:A.status==="idle"})),x("div",{className:"ac-tool-sep"}),x("div",{className:"ac-tool-group"},x($n,{icon:"analysis",label:"\u7ED3\u679C\u5206\u6790",onClick:()=>me({type:"analysis"})}),x($n,{icon:"report",label:"\u5BFC\u51FA\u62A5\u544A",onClick:y}),x($n,{icon:"settings",label:"\u89C6\u56FE\u8BBE\u7F6E",onClick:()=>me({type:"view"})})),x("div",{className:"ac-toolbar-right"},x("span",{className:`ac-status-pill ${Ae}`},x("i",null),we),x("button",{type:"button",className:"ac-icon-btn",onClick:()=>me({type:"logs"}),title:"\u6C42\u89E3\u65E5\u5FD7"},x(Ft,{name:"log",size:16})))),x("div",{className:"ac-main"},x("aside",{className:"ac-left"},x("section",{className:"ac-panel ac-tree-panel"},x(Di,{aside:x("span",{className:"ac-panel-count"},"PROJECT")},"\u9879\u76EE\u6811"),x("div",{className:"ac-tree"},x(yh,{active:G,id:"car",icon:"car",label:b,checked:T.showCar,onCheck:()=>ie("showCar",!T.showCar),onSelect:q,badge:"STL"}),x(yh,{active:G,id:"tunnel",icon:"tunnel",label:"WindTunnel",checked:T.showTunnel,onCheck:()=>ie("showTunnel",!T.showTunnel),onSelect:q}),x(yh,{active:G,id:"ground",icon:"ground",label:"Ground_Plane",checked:T.showGround,onCheck:()=>ie("showGround",!T.showGround),onSelect:q}),x(vh,{title:"\u8FB9\u754C\u6761\u4EF6",icon:"wind",open:W.boundaries,onToggle:()=>ae(U=>({...U,boundaries:!U.boundaries}))},x(rr,{active:G,id:"inlet",icon:"inlet",label:"\u5165\u53E3 (Inlet)",onSelect:q,value:`${p.inletVelocity} m/s`}),x(rr,{active:G,id:"outlet",icon:"outlet",label:"\u51FA\u53E3 (Outlet)",onSelect:q,value:`${p.outletPressure} Pa`}),x(rr,{active:G,id:"wall",icon:"wall",label:"\u58C1\u9762 (Wall)",onSelect:q,value:"no-slip"}),x(rr,{active:G,id:"wheel",icon:"car",label:"\u8F66\u8F6E (Wheels)",onSelect:q,value:p.wheels==="fixed"?"fixed":"rotating"})),x(vh,{title:"\u7F51\u683C",icon:"mesh",open:W.mesh,onToggle:()=>ae(U=>({...U,mesh:!U.mesh}))},x(rr,{active:G,id:"mesh",icon:"mesh",label:"Surface_Mesh",onSelect:q,value:v.ready?`${(v.cells/1e6).toFixed(2)}M`:"\u2014"})),x(vh,{title:"\u6C42\u89E3\u4EFB\u52A1",icon:"solver",open:W.solver,onToggle:()=>ae(U=>({...U,solver:!U.solver}))},x(rr,{active:G,id:"task",icon:"solver",label:"Steady RANS",onSelect:q,value:we})))),x("section",{className:"ac-panel ac-settings-panel"},x(Di,{aside:x("span",{className:"ac-panel-count"},"BOUNDARY")},"\u4EFF\u771F\u8BBE\u7F6E"),x("div",{className:"ac-fields"},x(_o,{label:"\u5165\u53E3\u98CE\u901F",value:p.inletVelocity,unit:"m/s",min:0,max:80,step:1,onChange:U=>$("inletVelocity",U)}),x("div",{className:"ac-preset-chips"},yv.map(U=>x("button",{key:U,type:"button",className:p.inletVelocity===U?"is-active":"",onClick:()=>$("inletVelocity",U)},U)),x("span",null,"m/s")),x(_o,{label:"\u51FA\u53E3\u538B\u529B",value:p.outletPressure,unit:"Pa",min:-500,max:500,step:10,onChange:U=>$("outletPressure",U)}),x("div",{className:"ac-two-fields"},x(_o,{label:"\u7A7A\u6C14\u5BC6\u5EA6",value:p.density,unit:"kg/m\xB3",min:.8,max:1.6,step:.005,onChange:U=>$("density",U)}),x(_o,{label:"\u6E29\u5EA6",value:p.temperature,unit:"K",min:220,max:340,step:.1,onChange:U=>$("temperature",U)})),x(Yc,{label:"\u6E4D\u6D41\u6A21\u578B",value:p.turbulence,options:wo,onChange:U=>$("turbulence",U)}),x("div",{className:"ac-two-fields"},x(Yc,{label:"\u7F51\u683C\u7C7B\u578B",value:p.meshType,options:Qc,onChange:U=>$("meshType",U)}),x(Yc,{label:"\u7F51\u683C\u7CBE\u5EA6",value:p.meshLevel,options:So,onChange:U=>$("meshLevel",U)})),x("div",{className:"ac-two-fields"},x(_o,{label:"\u8FED\u4EE3\u6B65\u6570",value:p.iterations,unit:"steps",min:500,max:1e4,step:100,onChange:U=>$("iterations",U)}),x(Yc,{label:"\u5730\u9762",value:p.groundMode,options:[{id:"fixed",name:"\u56FA\u5B9A"},{id:"moving",name:"\u79FB\u52A8\u5730\u9762"}],onChange:U=>$("groundMode",U)}))),x("div",{className:"ac-progress-card"},x("div",{className:"ac-progress-head"},x("span",null,"\u8BA1\u7B97\u8FDB\u5EA6"),x("b",null,(A.progress*100).toFixed(1),"%")),x("div",{className:"ac-progress-track"},x("i",{style:{width:`${A.progress*100}%`}})),x("div",{className:"ac-progress-meta"},x("span",null,"\u5F53\u524D\u8FED\u4EE3 ",x("strong",null,A.iteration.toLocaleString("en-US"))," / ",p.iterations.toLocaleString("en-US")),x("span",null,"\u9884\u8BA1\u5269\u4F59 ",x("strong",null,_i(A.etaSeconds)))),x("div",{className:"ac-progress-actions"},x("button",{type:"button",className:"ac-btn is-primary is-wide",onClick:V},x(Ft,{name:"play",size:14}),"\u5F00\u59CB\u8BA1\u7B97"),x("button",{type:"button",className:"ac-icon-btn",onClick:se,title:"\u6682\u505C"},x(Ft,{name:"pause",size:14})),x("button",{type:"button",className:"ac-icon-btn",onClick:j,title:"\u505C\u6B62"},x(Ft,{name:"stop",size:14})))))),x("main",{className:"ac-center"},x("div",{className:`ac-viewport${J?" is-dragging":""}`,ref:Ge,onDragOver:U=>{U.preventDefault(),ne(!0)},onDragLeave:()=>ne(!1),onDrop:de},x("canvas",{ref:Ee,className:"ac-canvas"}),x("div",{className:"ac-viewport-top"},x("div",{className:"ac-legend"},x("div",{className:"ac-legend-head"},x("span",null,T.mode==="pressure"?"\u538B\u529B (Pa)":T.mode==="vorticity"?"\u6DA1\u91CF\u5F3A\u5EA6":"\u901F\u5EA6 (m/s)"),x("b",null,he)),x("div",{className:"ac-legend-bar",style:{background:xe.gradient}}),x("div",{className:"ac-legend-labels"},x("span",null,xe.min),x("span",null,xe.min==="0"?"10":xe.mid),x("span",null,xe.min==="0"?"20":xe.max),x("span",null,xe.max))),x("div",{className:"ac-viewport-axis"},x(vv,null))),x("div",{className:"ac-viewport-tag"},"STEADY RANS \xB7 PREVIEW FIELD"),x("div",{className:"ac-viewport-controls"},x("span",null,x("i",{className:"ac-dot is-blue"})," \u5165\u53E3"),x("span",null,x("i",{className:"ac-dot is-cyan"})," \u6D41\u7EBF"),x("span",null,x("i",{className:"ac-dot is-green"})," \u5C3E\u6D41"),x("span",{className:"ac-view-hint"},"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E")),B?x("div",{className:"ac-import-overlay"},x("span",{className:"ac-spinner"}),"\u6B63\u5728\u89E3\u6790\u6A21\u578B\u2026"):null,!Se&&!B?x("div",{className:"ac-viewport-loading"},"\u6B63\u5728\u6821\u51C6\u98CE\u6D1E\u89C6\u7A97\u2026"):null),x("section",{className:"ac-chart-panel"},x("div",{className:"ac-chart-head"},x("div",null,x("strong",null,"\u6C42\u89E3\u6B8B\u5DEE\u66F2\u7EBF"),x("span",null,"\u6B8B\u5DEE / \u8FED\u4EE3\u6B21\u6570")),x("div",{className:"ac-chart-legend"},x("span",null,x("i",{style:{background:"#4e9dff"}}),"Continuity"),x("span",null,x("i",{style:{background:"#ffad4d"}}),"Ux"),x("span",null,x("i",{style:{background:"#59e39a"}}),"Uy"),x("span",null,x("i",{style:{background:"#a77dff"}}),"Uz"),x("span",null,x("i",{style:{background:"#ff77c8"}}),"\u03C9"))),x(Mv,{points:ee,iterations:p.iterations,progress:A.progress}))),x("aside",{className:"ac-right"},x("section",{className:"ac-panel"},x(Di,{aside:x("span",{className:"ac-panel-count"},"VIEW")},"\u53EF\u89C6\u5316\u9009\u9879"),x("div",{className:"ac-mode-grid"},gh.map(U=>x("button",{key:U.id,type:"button",className:`ac-mode${T.mode===U.id?" is-active":""}`,onClick:()=>{ie("mode",U.id),U.id!=="streamlines"&&ie("showSlice",!0)}},x("span",{className:"ac-mode-icon"},x(Ft,{name:U.icon,size:25})),x("strong",null,U.label),x("small",null,U.sub))))),x("section",{className:"ac-panel"},x(Di,null,"\u663E\u793A\u8BBE\u7F6E"),x(_h,{label:"\u6D41\u7EBF\u5BC6\u5EA6",value:T.density,min:.2,max:2,step:.1,display:T.density.toFixed(1),onChange:U=>ie("density",U)}),x(_h,{label:"\u900F\u660E\u5EA6",value:T.opacity,min:.15,max:1,step:.05,display:T.opacity.toFixed(2),onChange:U=>ie("opacity",U)}),x("div",{className:"ac-inline-toggle"},x(yo,{label:"\u663E\u793A\u5207\u9762",checked:T.showSlice,onChange:U=>ie("showSlice",U)}),x("span",{className:"ac-slice-readout"},"z = ",(T.slicePosition*2.2).toFixed(2)," m")),x(_h,{label:"\u5207\u9762\u4F4D\u7F6E",value:T.slicePosition,min:-1,max:1,step:.05,display:`${(T.slicePosition*2.2).toFixed(2)} m`,onChange:U=>ie("slicePosition",U)})),x("section",{className:"ac-panel"},x(Di,{aside:x("span",{className:"ac-panel-count"},"FORCE")},"\u7ED3\u679C\u4FE1\u606F"),x("div",{className:"ac-result-grid"},x(Zc,{label:"\u7A7A\u6C14\u963B\u529B",value:sr(K.drag),sub:"Drag"}),x(Zc,{label:"\u4E0B\u538B\u529B",value:sr(K.downforce),sub:"Downforce",accent:!0}),x(Zc,{label:"\u963B\u529B\u7CFB\u6570",value:K.cd.toFixed(2),sub:"Cd"}),x(Zc,{label:"\u5347\u529B\u7CFB\u6570",value:K.cl.toFixed(2),sub:"Cl"}))),x("section",{className:"ac-panel ac-pressure-panel"},x(Di,{aside:x("span",{className:"ac-panel-count"},"WALL")},"\u538B\u529B\u5206\u5E03"),x(bv,{metrics:K})))),x("footer",{className:"ac-statusbar"},x("div",{className:`ac-status-main ${Ae}`},x("i",null),we,x("span",null,"\xB7"),x("span",null,"\u9884\u89C8\u6A21\u5F0F")),x("div",{className:"ac-status-item"},"\u8017\u65F6 ",x("strong",null,_i(A.elapsedSeconds))),x("div",{className:"ac-status-item"},"\u7F51\u683C\u5355\u5143 ",x("strong",null,v.cells?v.cells.toLocaleString("en-US"):"\u2014")),x("div",{className:"ac-status-item"},"\u7F51\u683C\u8D28\u91CF ",x("strong",null,v.quality)),x("div",{className:"ac-status-right"},x("button",{type:"button",onClick:()=>me({type:"logs"})},x(Ft,{name:"log",size:12}),"\u6C42\u89E3\u65E5\u5FD7"),x("span",null,"AeroLab CFD v1.0.0 \xB7 Preview")))),ve,Fe?x("div",{className:`ac-toast is-${Fe.tone}`},Fe.message):null,x("input",{ref:L,type:"file",accept:pp,className:"ac-hidden-input",onChange:U=>{let C=U.target.files?.[0];U.target.value="",C&&Me(C)}}),x("input",{ref:oe,type:"file",accept:".json,application/json",className:"ac-hidden-input",onChange:U=>{let C=U.target.files?.[0];U.target.value="",C&&E(C)}}))}function h(){return a()?x(u,null):null}return{Launcher:c,OverlayHost:h}}function $n({icon:s,label:e,onClick:t,disabled:n=!1}){return x("button",{type:"button",className:"ac-tool-btn",onClick:t,disabled:n},x(Ft,{name:s,size:15}),x("span",null,e))}function yh({active:s,id:e,icon:t,label:n,checked:i,onCheck:r,onSelect:o,badge:a}){return x("div",{className:`ac-tree-row${s===e?" is-active":""}`,onClick:()=>o(e)},x("button",{type:"button",className:`ac-check${i?" is-checked":""}`,onClick:l=>{l.stopPropagation(),r()},"aria-label":`\u663E\u793A ${n}`},i?x(Ft,{name:"check",size:10}):null),x("span",{className:"ac-tree-icon"},x(Ft,{name:t,size:14})),x("span",{className:"ac-tree-label"},n),a?x("span",{className:"ac-tree-badge"},a):null)}function rr({active:s,id:e,icon:t,label:n,onSelect:i,value:r}){return x("div",{className:`ac-tree-row is-leaf${s===e?" is-active":""}`,onClick:()=>i(e)},x("span",{className:"ac-tree-check-space"}),x("span",{className:"ac-tree-icon"},x(Ft,{name:t,size:13})),x("span",{className:"ac-tree-label"},n),r?x("span",{className:"ac-tree-value"},r):null)}function vh({title:s,icon:e,open:t,onToggle:n,children:i}){return x("div",{className:"ac-tree-group"},x("button",{type:"button",className:"ac-tree-group-row",onClick:n},x(Ft,{name:"chevron",size:12,className:t?"":"is-collapsed"}),x(Ft,{name:e,size:14}),x("span",null,s)),t?x("div",{className:"ac-tree-children"},i):null)}function Zc({label:s,value:e,sub:t,accent:n}){return x("div",{className:`ac-result${n?" is-accent":""}`},x("span",null,s),x("strong",null,e),x("small",null,t))}var wv=`
.ac-dock-wrap { width: 100%; }
.ac-dock { display: flex; align-items: center; gap: 11px; min-height: 58px; padding: 8px 12px 8px 9px; border-radius: 9px; border: 1px solid rgba(73,147,196,.34); background: linear-gradient(110deg, rgba(7,17,28,.96), rgba(12,30,46,.9)); box-shadow: 0 8px 24px rgba(0,0,0,.18); color: #d6e8f5; }
.ac-dock-mark { display: flex; width: 36px; height: 36px; align-items: center; justify-content: center; border: 1px solid rgba(66,162,220,.35); border-radius: 9px; background: rgba(7,20,31,.8); flex: none; }
.ac-dock-copy { min-width: 142px; }
.ac-dock-title { font: 650 14px/1.2 "Bahnschrift","Segoe UI",sans-serif; letter-spacing: .05em; color: #edf9ff; }
.ac-dock-title em { margin-left: 4px; color: #6ce1ff; font: 500 8px/1 ui-monospace,monospace; letter-spacing: .12em; font-style: normal; }
.ac-dock-desc { margin-top: 4px; color: #6f8ba0; font: 500 9px/1.2 "Segoe UI",sans-serif; }
.ac-dock-meta { display: flex; gap: 16px; margin-left: auto; }
.ac-dock-stat { display: flex; flex-direction: column; gap: 4px; }
.ac-dock-stat small { color: #638096; font: 600 7px/1 ui-monospace,monospace; letter-spacing: .11em; text-transform: uppercase; }
.ac-dock-stat strong { color: #d8f2ff; font: 500 11px/1 ui-monospace,monospace; white-space: nowrap; }
.ac-dock-stat strong em { color: #6b8ba1; font-style: normal; font-size: 8px; }
.ac-dock-live { display: inline-flex; align-items: center; gap: 5px; color: #42e0b0; font: 600 8px/1 ui-monospace,monospace; letter-spacing: .08em; }
.ac-dock-live i { width: 5px; height: 5px; border-radius: 50%; background: #3ce2a8; box-shadow: 0 0 9px rgba(60,226,168,.8); }
.ac-dock-open { display: inline-flex; align-items: center; gap: 7px; min-height: 30px; padding: 0 10px; border-radius: 6px; border: 1px solid rgba(57,160,234,.5); background: rgba(26,91,145,.32); color: #c7f2ff; font: 600 9px/1 "Segoe UI",sans-serif; cursor: pointer; white-space: nowrap; }
.ac-dock-open:hover { background: rgba(38,128,190,.5); border-color: #55b9ef; }
.ac-dock-open span { font-size: 13px; color: #70e4ff; }
@media (max-width: 720px) { .ac-dock-meta { display: none; } .ac-dock-live { display: none; } .ac-dock-open { margin-left: auto; } }
`,Tv=`
.ac-root { --ac-bg:#070c12; --ac-panel:#0b131c; --ac-panel2:#0f1924; --ac-panel3:#111f2c; --ac-line:#1a3041; --ac-line2:#28475e; --ac-text:#d8e9f4; --ac-muted:#7894a8; --ac-dim:#506b7e; --ac-blue:#2e8cff; --ac-cyan:#43d8ff; --ac-green:#3ce2ac; --ac-orange:#ffb54d; --ac-red:#ff526f;
  position: fixed; inset: 0; z-index: 80; display: flex; overflow: hidden; background: #05090d; color: var(--ac-text); font-family: "Microsoft YaHei","Segoe UI",sans-serif; font-size: 11px; pointer-events: auto; }
.ac-root * { box-sizing: border-box; }
.ac-shell { width: 100%; height: 100%; display: grid; grid-template-rows: 44px 52px minmax(0,1fr) 27px; background: linear-gradient(135deg,#071019,#050a10 70%); overflow: hidden; }
.ac-titlebar { display: flex; align-items: center; gap: 20px; padding: 0 11px; border-bottom: 1px solid var(--ac-line); background: linear-gradient(180deg,#0c1722,#08111a); }
.ac-brand { display: flex; align-items: center; gap: 8px; width: 218px; flex: none; }
.ac-brand-copy { display: flex; flex-direction: column; gap: 3px; }
.ac-brand-copy strong { color: #ebf9ff; font: 650 14px/1 "Bahnschrift","Segoe UI",sans-serif; letter-spacing: .045em; }
.ac-brand-copy span { color: #527c96; font: 600 6px/1 ui-monospace,monospace; letter-spacing: .16em; }
.ac-menu { display: flex; align-items: stretch; height: 100%; }
.ac-menu-item { position: relative; height: 100%; }
.ac-menu-item > button { display: flex; align-items: center; gap: 4px; height: 100%; padding: 0 10px; border: 0; background: transparent; color: #9db4c4; font: 500 11px/1 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-menu-item > button:hover, .ac-menu-item > button.is-open { color: #e6f8ff; background: rgba(45,131,193,.15); }
.ac-menu-pop { position: absolute; z-index: 20; top: 42px; left: 0; min-width: 152px; padding: 5px; border: 1px solid #26506a; border-radius: 5px; background: #0c1923; box-shadow: 0 12px 30px rgba(0,0,0,.4); }
.ac-menu-pop button { display: flex; width: 100%; align-items: center; gap: 8px; padding: 7px 8px; border: 0; border-radius: 3px; background: transparent; color: #b9d0df; text-align: left; font: 400 11px/1.2 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-menu-pop button:hover { background: #15334a; color: #ecfbff; }
.ac-title-right { display: flex; align-items: center; gap: 10px; margin-left: auto; min-width: 0; }
.ac-project-name { max-width: 190px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #8eacbf; font: 500 9px/1 ui-monospace,monospace; }
.ac-version { color: #4f758b; font: 500 8px/1 ui-monospace,monospace; }
.ac-window-buttons { display: flex; align-items: center; gap: 1px; }
.ac-icon-btn { display: inline-flex; align-items: center; justify-content: center; width: 27px; height: 27px; border: 0; border-radius: 3px; background: transparent; color: #7796a9; cursor: pointer; }
.ac-icon-btn:hover { background: #173145; color: #d9f5ff; }
.ac-icon-btn.is-close:hover { background: #5a2030; color: #ffd9df; }
.ac-window-buttons span { font: 500 12px/1 "Segoe UI",sans-serif; }
.ac-toolbar { display: flex; align-items: center; gap: 8px; padding: 0 12px; border-bottom: 1px solid var(--ac-line); background: #0a141e; overflow-x: auto; }
.ac-tool-group { display: flex; align-items: center; gap: 2px; flex: none; }
.ac-tool-sep { width: 1px; height: 24px; background: var(--ac-line); flex: none; margin: 0 4px; }
.ac-tool-btn { display: inline-flex; align-items: center; gap: 5px; height: 30px; padding: 0 7px; border: 1px solid transparent; border-radius: 3px; background: transparent; color: #9db8c9; font: 400 10px/1 "Microsoft YaHei",sans-serif; cursor: pointer; white-space: nowrap; }
.ac-tool-btn:hover { background: #132b3d; color: #e2f8ff; border-color: #21465d; }
.ac-tool-btn:disabled { opacity: .33; cursor: default; }
.ac-tool-btn svg { color: #79b6d7; }
.ac-run-btn { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 13px; border: 1px solid #2b86db; border-radius: 3px; background: linear-gradient(180deg,#257bd3,#1458a8); color: #f0fbff; font: 600 10px/1 "Microsoft YaHei",sans-serif; cursor: pointer; box-shadow: 0 0 14px rgba(35,128,220,.18); }
.ac-run-btn:hover { background: linear-gradient(180deg,#318ee8,#1762b9); }
.ac-toolbar-right { display: flex; align-items: center; gap: 8px; margin-left: auto; flex: none; }
.ac-status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 5px 8px; border: 1px solid #24445a; border-radius: 9px; color: #8caec0; font: 500 8px/1 ui-monospace,monospace; letter-spacing: .04em; }
.ac-status-pill i { width: 5px; height: 5px; border-radius: 50%; background: #5e7b8b; }
.ac-status-pill.is-running { color: #73e6ff; border-color: #20516a; } .ac-status-pill.is-running i { background: #3be2ff; box-shadow: 0 0 8px #3be2ff; }
.ac-status-pill.is-success { color: #6df2c0; border-color: #1c5c4a; } .ac-status-pill.is-success i { background: #39eab0; }
.ac-status-pill.is-paused { color: #ffd27b; border-color: #604925; } .ac-status-pill.is-paused i { background: #ffc34f; }
.ac-main { display: grid; grid-template-columns: 258px minmax(0,1fr) 294px; gap: 6px; min-height: 0; padding: 6px; }
.ac-left, .ac-right { min-height: 0; overflow-y: auto; overflow-x: hidden; display: flex; flex-direction: column; gap: 6px; }
.ac-left::-webkit-scrollbar, .ac-right::-webkit-scrollbar, .ac-log-list::-webkit-scrollbar { width: 3px; }
.ac-left::-webkit-scrollbar-thumb, .ac-right::-webkit-scrollbar-thumb, .ac-log-list::-webkit-scrollbar-thumb { background: #24475e; }
.ac-panel { border: 1px solid var(--ac-line); border-radius: 4px; background: linear-gradient(160deg,#0c1721,#09121a); padding: 10px; }
.ac-section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 9px; color: #c2dae8; font: 600 10px/1.2 "Microsoft YaHei",sans-serif; letter-spacing: .03em; }
.ac-panel-count { color: #47697e; font: 500 7px/1 ui-monospace,monospace; letter-spacing: .08em; }
.ac-tree { display: flex; flex-direction: column; gap: 1px; }
.ac-tree-row { display: flex; align-items: center; gap: 5px; min-height: 23px; padding: 2px 4px; border: 1px solid transparent; border-radius: 2px; cursor: pointer; color: #9cb2c1; }
.ac-tree-row:hover { background: rgba(39,104,145,.12); color: #d4edf8; }
.ac-tree-row.is-active { background: rgba(28,103,155,.24); border-color: rgba(42,121,174,.36); color: #dff8ff; }
.ac-tree-row.is-leaf { padding-left: 18px; min-height: 21px; }
.ac-check { display: inline-flex; width: 11px; height: 11px; align-items: center; justify-content: center; flex: none; border: 1px solid #3a6177; border-radius: 2px; background: #0b151d; color: #051019; padding: 0; cursor: pointer; }
.ac-check.is-checked { border-color: #479fd0; background: #3c9bd2; }
.ac-tree-check-space { width: 11px; flex: none; }
.ac-tree-icon { display: inline-flex; width: 16px; color: #5d9fc1; flex: none; }
.ac-tree-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: 400 10px/1.2 "Microsoft YaHei",sans-serif; }
.ac-tree-badge { margin-left: auto; color: #517f99; font: 500 7px/1 ui-monospace,monospace; }
.ac-tree-value { margin-left: auto; color: #557f96; font: 500 8px/1 ui-monospace,monospace; white-space: nowrap; }
.ac-tree-group { margin-top: 4px; }
.ac-tree-group-row { display: flex; width: 100%; align-items: center; gap: 4px; min-height: 23px; padding: 2px 4px; border: 0; border-radius: 2px; background: transparent; color: #84a8bb; font: 500 9px/1 "Microsoft YaHei",sans-serif; cursor: pointer; text-align: left; }
.ac-tree-group-row:hover { background: rgba(39,104,145,.1); color: #c8eafa; }
.ac-tree-group-row svg:first-child { transition: transform .15s; } .ac-tree-group-row svg.is-collapsed { transform: rotate(-90deg); }
.ac-tree-children { margin-left: 8px; padding-left: 3px; border-left: 1px solid #1b3343; }
.ac-settings-panel { padding-bottom: 8px; }
.ac-fields { display: flex; flex-direction: column; gap: 6px; }
.ac-field { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 24px; color: #7d9aab; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-number, .ac-field select { display: inline-flex; align-items: center; min-width: 104px; height: 25px; border: 1px solid #28465a; border-radius: 2px; background: #07111a; }
.ac-number input { width: 70px; height: 23px; border: 0; outline: 0; background: transparent; color: #d4f1ff; text-align: right; padding: 0 4px 0 7px; font: 500 10px/1 ui-monospace,monospace; }
.ac-number em { color: #5d8196; font: 500 8px/1 ui-monospace,monospace; font-style: normal; padding-right: 5px; white-space: nowrap; }
.ac-field select { width: 104px; padding: 0 5px; color: #c6e5f3; font: 400 9px/1 "Microsoft YaHei",sans-serif; outline: 0; }
.ac-field select option { background: #0b1821; }
.ac-two-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.ac-two-fields .ac-field { display: block; }
.ac-two-fields .ac-field > span { display: block; margin-bottom: 3px; }
.ac-two-fields .ac-number, .ac-two-fields .ac-field select { width: 100%; min-width: 0; }
.ac-two-fields .ac-number input { width: 72%; }
.ac-preset-chips { display: flex; gap: 3px; align-items: center; margin: -2px 0 1px 66px; }
.ac-preset-chips button { height: 17px; min-width: 28px; padding: 0 4px; border: 1px solid #26475b; border-radius: 2px; background: #0a161f; color: #65879b; font: 500 8px/1 ui-monospace,monospace; cursor: pointer; }
.ac-preset-chips button.is-active { border-color: #368ec1; color: #9febff; background: #113148; }
.ac-preset-chips span { margin-left: 2px; color: #4f7288; font: 500 7px/1 ui-monospace,monospace; }
.ac-progress-card { margin-top: 9px; padding: 8px; border: 1px solid #1c384a; border-radius: 3px; background: #08131b; }
.ac-progress-head { display: flex; justify-content: space-between; color: #86a8ba; font: 500 9px/1 "Microsoft YaHei",sans-serif; }
.ac-progress-head b { color: #72e6ff; font: 500 10px/1 ui-monospace,monospace; }
.ac-progress-track { height: 5px; margin: 7px 0 6px; border-radius: 4px; background: #152a38; overflow: hidden; }
.ac-progress-track i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg,#1b5cff,#2ecfff); box-shadow: 0 0 8px rgba(41,182,255,.5); transition: width .2s linear; }
.ac-progress-meta { display: flex; justify-content: space-between; gap: 4px; color: #5e8094; font: 500 7px/1.2 ui-monospace,monospace; }
.ac-progress-meta strong { color: #bcdce9; font-weight: 500; }
.ac-progress-actions { display: flex; gap: 5px; margin-top: 8px; }
.ac-btn { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 27px; padding: 0 9px; border: 1px solid #2a4d62; border-radius: 3px; background: #0d1c27; color: #a8c7d7; font: 500 9px/1 "Microsoft YaHei",sans-serif; cursor: pointer; white-space: nowrap; }
.ac-btn:hover { border-color: #3f7b9d; color: #e4faff; }
.ac-btn.is-primary { border-color: #267ac4; background: linear-gradient(180deg,#1f72c8,#13539b); color: #effbff; }
.ac-btn.is-primary:hover { background: linear-gradient(180deg,#2b87e5,#1760b0); }
.ac-btn.is-wide { flex: 1; }
.ac-center { min-width: 0; min-height: 0; display: grid; grid-template-rows: minmax(0,1fr) 154px; gap: 6px; }
.ac-viewport { position: relative; min-height: 0; overflow: hidden; border: 1px solid #1c3a4e; border-radius: 4px; background: #050a10; }
.ac-canvas { display: block; width: 100%; height: 100%; }
.ac-viewport-top { position: absolute; inset: 11px 12px auto 12px; display: flex; justify-content: space-between; align-items: flex-start; pointer-events: none; }
.ac-legend { width: 240px; padding: 7px 8px 6px; border: 1px solid rgba(42,105,139,.42); border-radius: 3px; background: rgba(5,14,22,.76); backdrop-filter: blur(5px); }
.ac-legend-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
.ac-legend-head span { color: #c4e9f5; font: 500 9px/1 "Microsoft YaHei",sans-serif; }
.ac-legend-head b { color: #6d9ab0; font: 500 7px/1 ui-monospace,monospace; letter-spacing: .05em; }
.ac-legend-bar { height: 7px; border-radius: 1px; background-size: 100% 100%; box-shadow: 0 0 10px rgba(45,188,255,.16); }
.ac-legend-labels { display: flex; justify-content: space-between; margin-top: 4px; color: #6d899c; font: 500 7px/1 ui-monospace,monospace; }
.ac-viewport-axis { width: 86px; height: 74px; opacity: .9; pointer-events: none; }
.ac-viewport-tag { position: absolute; top: 15px; left: 50%; transform: translateX(-50%); color: rgba(120,183,211,.5); font: 500 7px/1 ui-monospace,monospace; letter-spacing: .2em; pointer-events: none; }
.ac-viewport-controls { position: absolute; left: 12px; right: 12px; bottom: 10px; display: flex; align-items: center; gap: 12px; color: #6d8fa3; font: 500 8px/1 "Microsoft YaHei",sans-serif; pointer-events: none; }
.ac-viewport-controls > span { display: inline-flex; align-items: center; gap: 4px; }
.ac-dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
.ac-dot.is-blue { background: #337dff; } .ac-dot.is-cyan { background: #31e7ff; } .ac-dot.is-green { background: #3ce7a9; }
.ac-view-hint { margin-left: auto; color: #496c82; }
.ac-import-overlay, .ac-viewport-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 9px; background: rgba(4,11,17,.72); color: #9cd8ef; font: 500 11px/1 "Microsoft YaHei",sans-serif; z-index: 4; }
.ac-spinner { width: 17px; height: 17px; border: 2px solid #204b63; border-top-color: #52d9ff; border-radius: 50%; animation: ac-spin .8s linear infinite; }
@keyframes ac-spin { to { transform: rotate(360deg); } }
.ac-chart-panel { min-height: 0; padding: 7px 9px 3px; border: 1px solid #1c3a4e; border-radius: 4px; background: linear-gradient(180deg,#09151e,#071019); overflow: hidden; }
.ac-chart-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.ac-chart-head strong { display: block; color: #bcd9e8; font: 600 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-chart-head span { color: #55788e; font: 500 7px/1.2 "Microsoft YaHei",sans-serif; }
.ac-chart-legend { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; color: #6d899d; font: 500 7px/1 ui-monospace,monospace; }
.ac-chart-legend span { display: inline-flex; align-items: center; gap: 4px; }
.ac-chart-legend i { width: 10px; height: 2px; display: inline-block; }
.ac-chart-svg { width: 100%; height: 125px; display: block; }
.ac-right .ac-panel { padding: 10px; }
.ac-mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.ac-mode { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; min-height: 61px; padding: 6px 3px; border: 1px solid #1d3a4c; border-radius: 3px; background: #09141d; color: #6d91a6; cursor: pointer; }
.ac-mode:hover { border-color: #2c6989; color: #c1efff; background: #0d2130; }
.ac-mode.is-active { border-color: #2a8fd1; color: #bdf4ff; background: linear-gradient(180deg,#12344b,#0c1d2a); box-shadow: inset 0 0 18px rgba(35,142,211,.12); }
.ac-mode-icon { display: inline-flex; color: #4f9cbe; } .ac-mode.is-active .ac-mode-icon { color: #51dbff; }
.ac-mode strong { font: 500 9px/1 "Microsoft YaHei",sans-serif; }
.ac-mode small { color: #4f7288; font: 500 6px/1 ui-monospace,monospace; letter-spacing: .05em; }
.ac-slider-field { display: block; margin-bottom: 8px; }
.ac-slider-head { display: flex; justify-content: space-between; margin-bottom: 5px; color: #7c9bad; font: 400 9px/1 "Microsoft YaHei",sans-serif; }
.ac-slider-head strong { color: #bfe4f3; font: 500 9px/1 ui-monospace,monospace; }
.ac-slider-field input[type="range"] { width: 100%; height: 3px; margin: 0; appearance: none; border-radius: 3px; background: linear-gradient(90deg,#2d8cd0 var(--ac-range),#193343 var(--ac-range)); outline: 0; }
.ac-slider-field input[type="range"]::-webkit-slider-thumb { appearance: none; width: 9px; height: 9px; border-radius: 50%; background: #a8efff; border: 1px solid #3ca9dd; box-shadow: 0 0 6px rgba(58,200,255,.5); cursor: pointer; }
.ac-inline-toggle { display: flex; align-items: center; justify-content: space-between; margin: 4px 0 8px; }
.ac-slice-readout { color: #547d91; font: 500 8px/1 ui-monospace,monospace; }
.ac-toggle { display: flex; align-items: center; gap: 10px; padding: 0; border: 0; background: transparent; color: #7f9eae; font: 400 9px/1 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-toggle > i { display: flex; width: 25px; height: 13px; align-items: center; padding: 2px; border: 1px solid #2c4b5d; border-radius: 9px; background: #09151e; transition: background .15s; }
.ac-toggle > i b { display: block; width: 7px; height: 7px; border-radius: 50%; background: #547185; transition: transform .15s,background .15s; }
.ac-toggle.is-on > i { background: #1e79b2; border-color: #3a9ed3; }
.ac-toggle.is-on > i b { transform: translateX(11px); background: #d8faff; }
.ac-toggle-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
.ac-result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.ac-result { display: flex; flex-direction: column; gap: 3px; min-height: 55px; padding: 7px; border: 1px solid #1b3547; border-radius: 3px; background: #08131c; }
.ac-result span { color: #6e8d9f; font: 400 8px/1.2 "Microsoft YaHei",sans-serif; }
.ac-result strong { color: #e1f6ff; font: 500 15px/1.1 ui-monospace,monospace; }
.ac-result small { color: #4e7187; font: 500 6px/1 ui-monospace,monospace; letter-spacing: .06em; }
.ac-result.is-accent { border-color: #234f67; background: linear-gradient(135deg,#0b1b26,#102c3d); }
.ac-result.is-accent strong { color: #7ceaff; }
.ac-pressure-panel { padding-bottom: 6px; }
.ac-pressure-map { overflow: hidden; border: 1px solid #1a3648; border-radius: 3px; background: #061019; }
.ac-pressure-map svg { display: block; width: 100%; height: auto; }
.ac-pressure-axis { display: flex; justify-content: space-between; padding: 4px 5px; color: #52768a; font: 500 7px/1 ui-monospace,monospace; }
.ac-statusbar { display: flex; align-items: center; gap: 16px; padding: 0 11px; border-top: 1px solid var(--ac-line); background: #08121a; color: #587b8f; font: 500 8px/1 ui-monospace,monospace; }
.ac-status-main { display: inline-flex; align-items: center; gap: 5px; color: #82a8b9; }
.ac-status-main i { width: 5px; height: 5px; border-radius: 50%; background: #5b7a8b; }
.ac-status-main.is-success { color: #63edbd; } .ac-status-main.is-success i { background: #42e2ae; box-shadow: 0 0 7px rgba(66,226,174,.7); }
.ac-status-main.is-running { color: #65ddff; } .ac-status-main.is-running i { background: #46dcff; }
.ac-status-main.is-paused { color: #ffc963; } .ac-status-main.is-paused i { background: #ffbf4b; }
.ac-status-item { color: #55778b; } .ac-status-item strong { color: #9fc3d3; font-weight: 500; }
.ac-status-right { display: flex; align-items: center; gap: 13px; margin-left: auto; }
.ac-status-right button { display: inline-flex; align-items: center; gap: 4px; border: 0; background: transparent; color: #658ba0; font: 500 8px/1 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-status-right button:hover { color: #c9f4ff; }
.ac-status-right span { color: #496a7e; }
.ac-hidden-input { display: none; }
.ac-toast { position: fixed; z-index: 100; left: 50%; bottom: 54px; transform: translateX(-50%); max-width: 560px; padding: 9px 15px; border: 1px solid #2a6689; border-radius: 4px; background: rgba(8,25,36,.96); color: #c8f0ff; font: 500 10px/1.3 "Microsoft YaHei",sans-serif; box-shadow: 0 10px 26px rgba(0,0,0,.4); }
.ac-toast.is-success { border-color: #1d6f58; color: #8dffdd; } .ac-toast.is-warning { border-color: #7f5a1c; color: #ffe09b; } .ac-toast.is-error { border-color: #7e2b3a; color: #ffb3c0; }
.ac-modal-wrap { position: fixed; inset: 0; z-index: 90; display: flex; align-items: center; justify-content: center; padding: 22px; background: rgba(1,6,10,.64); backdrop-filter: blur(4px); }
.ac-modal { width: min(540px,94vw); max-height: 86vh; overflow: auto; border: 1px solid #2b5b77; border-radius: 5px; background: linear-gradient(160deg,#0f202d,#08121a); box-shadow: 0 22px 70px rgba(0,0,0,.55); }
.ac-modal.is-wide { width: min(700px,94vw); }
.ac-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 13px 15px 10px; border-bottom: 1px solid #1e3a4d; }
.ac-modal-head h3 { margin: 0; color: #e5f9ff; font: 600 14px/1.2 "Microsoft YaHei",sans-serif; }
.ac-modal-head p { margin: 4px 0 0; color: #6d91a5; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-modal-body { padding: 13px 15px 15px; }
.ac-analysis-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.ac-analysis-card { display: flex; flex-direction: column; gap: 4px; padding: 9px; border: 1px solid #1c3a4d; border-radius: 3px; background: #08141e; }
.ac-analysis-card span { color: #7294a5; font: 400 9px/1 "Microsoft YaHei",sans-serif; } .ac-analysis-card strong { color: #dff8ff; font: 500 18px/1 ui-monospace,monospace; } .ac-analysis-card small { color: #4e7287; font: 500 8px/1 ui-monospace,monospace; }
.ac-analysis-table { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 12px; border: 1px solid #193448; background: #193448; }
.ac-analysis-table div { display: flex; justify-content: space-between; gap: 8px; padding: 7px 8px; background: #091620; color: #6b8da1; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; } .ac-analysis-table b { color: #b7dce9; font-weight: 500; }
.ac-caveat { margin: 11px 0 0; padding: 8px 9px; border-left: 2px solid #2c6c8e; background: #08141d; color: #62879b; font: 400 9px/1.55 "Microsoft YaHei",sans-serif; }
.ac-modal-actions { display: flex; gap: 6px; justify-content: flex-end; margin-top: 12px; }
.ac-view-buttons { display: flex; gap: 5px; margin-bottom: 13px; }
.ac-view-buttons .ac-btn { flex: 1; }
.ac-log-list { max-height: 420px; overflow: auto; padding: 4px 0; background: #061019; border: 1px solid #193347; }
.ac-log-list div { display: flex; gap: 9px; padding: 3px 7px; color: #84a5b5; font: 400 9px/1.4 ui-monospace,monospace; border-bottom: 1px solid rgba(30,60,78,.4); } .ac-log-list time { color: #477187; flex: none; } .ac-log-list span { white-space: pre-wrap; }
.ac-about-hero { display: flex; align-items: center; gap: 13px; margin-bottom: 11px; } .ac-about-hero h2 { margin: 0; color: #ecfbff; font: 600 18px/1.1 "Bahnschrift","Segoe UI",sans-serif; } .ac-about-hero p { margin: 4px 0 0; color: #6b91a6; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-about-copy { color: #84a5b6; font: 400 10px/1.7 "Microsoft YaHei",sans-serif; }
.ac-about-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 11px; } .ac-about-tags span { padding: 4px 6px; border: 1px solid #23475b; border-radius: 2px; color: #70a8bd; font: 500 8px/1 ui-monospace,monospace; }
.ac-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.ac-steps > div { padding: 9px; border: 1px solid #1b384a; border-radius: 3px; background: #08141d; }
.ac-steps b { display: block; color: #3daee4; font: 500 10px/1 ui-monospace,monospace; } .ac-steps span { display: block; margin-top: 5px; color: #c6e7f4; font: 500 10px/1.2 "Microsoft YaHei",sans-serif; } .ac-steps p { margin: 5px 0 0; color: #688da1; font: 400 9px/1.55 "Microsoft YaHei",sans-serif; }
@media (max-width: 1260px) { .ac-main { grid-template-columns: 232px minmax(0,1fr) 270px; } .ac-dock-meta { display: none; } }
@media (max-width: 1020px) { .ac-main { grid-template-columns: 214px minmax(0,1fr) 250px; } .ac-menu-item > button { padding: 0 6px; } .ac-brand { width: 170px; } .ac-project-name { display: none; } .ac-tool-btn span { display: none; } .ac-run-btn { padding: 0 9px; } }
@media (max-width: 820px) { .ac-main { grid-template-columns: 1fr; grid-template-rows: minmax(340px,1fr) auto auto; overflow-y: auto; } .ac-left,.ac-right { display: none; } .ac-center { grid-template-rows: minmax(340px,1fr) 150px; } .ac-dock-copy { min-width: 100px; } }
`,Ev={inject:["slots","locale"],apply(s){s.effect(()=>{let n=s.locale.register(bh,"en",en),i=s.locale.register(bh,"zh",zh);return()=>{n(),i()}});let{Launcher:e,OverlayHost:t}=Sv(s);s.slots.inject("conversation.input.dock",()=>s.slots.register({name:"conversation.input.dock",id:"aerolab-cfd-launcher",order:29},e)),s.slots.inject("shell.overlay",()=>s.slots.register({name:"shell.overlay",id:"aerolab-cfd-app",order:29},t))}},vp=Ev;window.__ModuleLoader__.load({id:"aerolab-cfd",factory(s){return yp(s("react")),vp}});})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
