import{_ as c,p as n,k as d,l as p,A as o,L as s,u as a,q as u,x as l}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const _={name:"DeviceSmaWebboxInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},b={class:"device-sma-webbox-inverter"},m={class:"small"};function f(e,t,v,g,h,x){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),p("div",b,[o(r,null,{default:s(()=>[a(" Einstellungen für SMA Webbox Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const k=c(_,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_webbox/inverter.vue"]]);export{k as default};
