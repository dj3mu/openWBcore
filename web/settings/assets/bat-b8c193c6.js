import{_ as p,q as o,k as m,l as _,B as a,M as u,x as d,u as b,y as f}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const g={name:"DeviceMTecBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-mtec-bat"},w={class:"small"};function x(t,e,i,B,h,s){const r=o("openwb-base-heading"),l=o("openwb-base-select-input"),c=o("openwb-base-number-input");return m(),_("div",v,[a(r,null,{default:u(()=>[d(" Einstellungen für M-Tec Batteriespeicher "),b("span",w,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),a(l,{title:"Generation",notSelected:"Bitte auswählen",options:[{value:2,text:"Gen 2"},{value:3,text:"Gen 3"}],"model-value":i.configuration.generation,"onUpdate:modelValue":e[0]||(e[0]=n=>s.updateConfiguration(n,"configuration.generation"))},null,8,["model-value"]),a(c,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=n=>s.updateConfiguration(n,"configuration.modbus_id"))},{help:u(()=>[d(" Die Standard-Modbus-ID von M-Tec ist 247 ")]),_:1},8,["model-value"])])}const D=p(g,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mtec/bat.vue"]]);export{D as default};
