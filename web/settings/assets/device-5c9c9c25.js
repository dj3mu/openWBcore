import{_ as c,p as o,k as u,l as p,A as n,L as l,u as _,q as m,x as f}from"./vendor-94c7fa64.js";import"./vendor-sortablejs-122866cd.js";const b={name:"DeviceE3dc",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"device-e3dc"},v={class:"small"};function h(t,e,s,x,w,a){const i=o("openwb-base-heading"),d=o("openwb-base-text-input");return u(),p("div",g,[n(i,null,{default:l(()=>[_(" Einstellungen für E3DC "),m("span",v,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.address,"onUpdate:modelValue":e[0]||(e[0]=r=>a.updateConfiguration(r,"configuration.address"))},null,8,["model-value"])])}const B=c(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/e3dc/device.vue"]]);export{B as default};
