import{_ as u,p as o,k as c,l as p,A as n,L as l,u as _,q as f,x as m}from"./vendor-8521f8a3.js";import"./vendor-sortablejs-5d1612dc.js";const v={name:"DeviceRCT",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-rct"},g={class:"small"};function h(t,e,s,x,w,a){const i=o("openwb-base-heading"),d=o("openwb-base-text-input");return c(),p("div",b,[n(i,null,{default:l(()=>[_(" Einstellungen für RCT "),f("span",g,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>a.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const V=u(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/rct/device.vue"]]);export{V as default};
