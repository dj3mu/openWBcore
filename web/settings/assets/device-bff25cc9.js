import{_ as d,p as u,k as l,l as p,A as n,L as c,u as f,q as m,x as _}from"./vendor-94c7fa64.js";import"./vendor-sortablejs-122866cd.js";const g={name:"DevicePowerfox",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-powerfox"},w={class:"small"};function b(o,e,a,x,B,s){const r=u("openwb-base-heading"),i=u("openwb-base-text-input");return l(),p("div",v,[n(r,null,{default:c(()=>[f(" Einstellungen für Powerfox "),m("span",w,"(Modul: "+_(o.$options.name)+")",1)]),_:1}),n(i,{title:"Benutzername",subtype:"user",required:"","model-value":a.configuration.user,"onUpdate:modelValue":e[0]||(e[0]=t=>s.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),n(i,{title:"Passwort",subtype:"password",required:"","model-value":a.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>s.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const h=d(g,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerfox/device.vue"]]);export{h as default};
