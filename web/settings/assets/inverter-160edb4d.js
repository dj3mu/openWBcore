import{_ as u,u as o,k as l,l as c,D as t,N as p,y as m,x as _,z as f}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const b={name:"DeviceSolarmaxInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-solarmax-inverter"},g={class:"small"};function x(n,e,a,h,w,i){const s=o("openwb-base-heading"),r=o("openwb-base-number-input");return l(),c("div",v,[t(s,null,{default:p(()=>[m(" Einstellungen für Solarmax Wechselrichter "),_("span",g,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),t(r,{title:"Modbus ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>i.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const D=u(b,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/solarmax/inverter.vue"]]);export{D as default};
