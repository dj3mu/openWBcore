import{_ as p,q as n,k as l,l as c,B as a,M as m,x as _,u as f,y as b}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const g={name:"DeviceStuder",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-studer"},w={class:"small"};function x(t,e,i,h,q,s){const u=n("openwb-base-heading"),r=n("openwb-base-text-input"),d=n("openwb-base-number-input");return l(),c("div",v,[a(u,null,{default:m(()=>[_(" Einstellungen für Studer "),f("span",w,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),a(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>s.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),a(d,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>s.updateConfiguration(o,"configuration.port"))},null,8,["model-value"])])}const V=p(g,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/studer/device.vue"]]);export{V as default};
