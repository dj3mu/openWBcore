import{_ as c,u as n,k as d,l as p,D as o,N as s,y as a,x as u,z as l}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceGoodWeInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-goodwe-inverter"},m={class:"small"};function b(e,t,g,v,h,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für GoodWe Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const k=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/good_we/inverter.vue"]]);export{k as default};
