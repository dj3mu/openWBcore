import{_ as d,q as l,k as c,l as s,B as i}from"./vendor-493c2bec.js";import"./vendor-sortablejs-0b339223.js";const p={name:"VehicleSocEvnotify",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(u,e=void 0){this.$emit("update:configuration",{value:u,object:e})}}},m={class:"vehicle-soc-evnotify"};function f(u,e,n,v,_,o){const r=l("openwb-base-number-input"),a=l("openwb-base-text-input");return c(),s("div",m,[i(r,{title:"ID",required:"",min:0,"model-value":n.vehicle.configuration.id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.id"))},null,8,["model-value"]),i(a,{title:"AKey",required:"","model-value":n.vehicle.configuration.akey,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.akey"))},null,8,["model-value"]),i(a,{title:"Token",required:"","model-value":n.vehicle.configuration.token,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.token"))},null,8,["model-value"])])}const h=d(p,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/evnotify/vehicle.vue"]]);export{h as default};