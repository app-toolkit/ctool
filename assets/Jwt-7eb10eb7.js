import{u as C,i as O}from"./action-cd384d03.js";import{d as k,y as x,z as A,r as s,c as I,w as d,f as U,v as p,j as l,X as E,S as m}from"./tool-4bde39df.js";import"./modulepreload-polyfill-3cfb730f.js";function f(o){this.message=o}f.prototype=new Error,f.prototype.name="InvalidCharacterError";var w=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(o){var t=String(o).replace(/=+$/,"");if(t.length%4==1)throw new f("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,e,u=0,r=0,n="";e=t.charAt(r++);~e&&(a=u%4?64*a+e:e,u++%4)?n+=String.fromCharCode(255&a>>(-2*u&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);return n};function j(o){var t=o.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(a){return decodeURIComponent(w(a).replace(/(.)/g,function(e,u){var r=u.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}(t)}catch{return w(t)}}function c(o){this.message=o}function y(o,t){if(typeof o!="string")throw new c("Invalid token specified");var a=(t=t||{}).header===!0?0:1;try{return JSON.parse(j(o.split(".")[a]))}catch(e){throw new c("Invalid token specified: "+e.message)}}c.prototype=new Error,c.prototype.name="InvalidTokenError";const $=k({__name:"Jwt",async setup(o){let t,a;const e=C(([t,a]=x(()=>O({input:"",header:!1,payload:!0,outputOption:E("json")},{paste:!1})),t=await t,a(),t)),u=A(()=>{if(!e.current.input.trim())return m.empty();try{let r={};return e.current.header&&(r.header=y(e.current.input,{header:!0})),e.current.payload&&(r.payload=y(e.current.input)),m.formObject(r)}catch(r){return m.fromError($error(r))}});return(r,n)=>{const _=s("Textarea"),h=s("Bool"),g=s("Align"),v=s("Display"),b=s("SerializeOutput"),V=s("HeightResize");return U(),I(V,{reduce:5},{default:d(({small:z,large:S})=>[p(g,{direction:"vertical"},{default:d(()=>[p(v,null,{extra:d(()=>[p(g,null,{default:d(()=>[p(h,{border:"",size:"small",modelValue:l(e).current.header,"onUpdate:modelValue":n[1]||(n[1]=i=>l(e).current.header=i),label:"header"},null,8,["modelValue"]),p(h,{border:"",size:"small",modelValue:l(e).current.payload,"onUpdate:modelValue":n[2]||(n[2]=i=>l(e).current.payload=i),label:"payload"},null,8,["modelValue"])]),_:1})]),default:d(()=>[p(_,{modelValue:l(e).current.input,"onUpdate:modelValue":n[0]||(n[0]=i=>l(e).current.input=i),height:z,placeholder:r.$t("main_ui_input")},null,8,["modelValue","height","placeholder"])]),_:2},1024),p(b,{"switch-position":"bottom-right",allow:["json","xml","yaml","toml","php_array","properties","http_query_string"],content:u.value,height:S,modelValue:l(e).current.outputOption,"onUpdate:modelValue":n[3]||(n[3]=i=>l(e).current.outputOption=i),onSuccess:n[4]||(n[4]=i=>l(e).save())},null,8,["content","height","modelValue"])]),_:2},1024)]),_:1})}}});export{$ as default};
