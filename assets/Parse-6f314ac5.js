import{u as k,i as I}from"./action-cd384d03.js";import{d as A,y as E,I as T,D as z,r,A as B,B as D,c as m,w as l,f as u,v as n,j as i,k as V,C as $}from"./tool-4bde39df.js";import{p as H}from"./util-1c5566eb.js";import"./modulepreload-polyfill-3cfb730f.js";const R=["src"],P=A({__name:"Parse",async setup(U){let s,c;const t=k(([s,c]=E(()=>I({input:$("upload")},{paste:!1})),s=await s,c(),s));let o=T("");return z(()=>t.current.input.text,e=>{if(e.isEmpty()||e.isError())return o.value=e.toString();if(!e.isImage())return o.value=$t("qrCode_reader_parsing_failure");H(e).then(a=>{o.value=a,t.save()}).catch(a=>{o.value=$error(a)})},{immediate:!0,deep:!0}),(e,a)=>{const _=r("TextInput"),d=r("Textarea"),p=r("Align"),h=r("Exception"),g=r("Card"),f=r("HeightResize"),v=B("row");return D((u(),m(f,{reduce:5,ignore:""},{default:l(({height:x,small:w,large:C})=>[n(p,{direction:"vertical"},{default:l(()=>[n(_,{allow:["base64","hex","upload","url"],modelValue:i(t).current.input,"onUpdate:modelValue":a[0]||(a[0]=y=>i(t).current.input=y),height:w,upload:"image"},null,8,["modelValue","height"]),n(d,{"model-value":i(o),placeholder:e.$t("main_ui_output"),height:C},null,8,["model-value","placeholder","height"])]),_:2},1024),n(g,{height:x+5},{default:l(()=>[n(p,{horizontal:"center",vertical:"center"},{default:l(()=>[i(t).current.input.text.isImage()?(u(),V("img",{key:0,style:{"max-width":"90%","max-height":"90%"},src:i(t).current.input.text.toDataUrl()},null,8,R)):(u(),m(h,{key:1}))]),_:1})]),_:2},1032,["height"])]),_:1})),[[v,"1-300px"]])}}});export{P as default};
