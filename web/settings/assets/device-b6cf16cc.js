import{_,u as t,k as m,l as b,D as n,N as d,y as f,x as r,z as g}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const v={name:"DeviceDeye",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},w={class:"device-deye"},y={class:"small"},h=r("span",{class:"text-danger"}," Deye Wechselrichter verfügen über keine Modbus-TCP Schnittstelle. Für die Auslesung wird ein RS485/LAN-Adapter benötigt. ",-1);function x(o,e,i,C,D,s){const u=t("openwb-base-heading"),l=t("openwb-base-alert"),p=t("openwb-base-text-input"),c=t("openwb-base-number-input");return m(),b("div",w,[n(u,null,{default:d(()=>[f(" Einstellungen für Deye "),r("span",y,"(Modul: "+g(o.$options.name)+")",1)]),_:1}),n(l,{subtype:"info"},{default:d(()=>[h]),_:1}),n(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=a=>s.updateConfiguration(a,"configuration.ip_address"))},null,8,["model-value"]),n(c,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=a=>s.updateConfiguration(a,"configuration.port"))},null,8,["model-value"])])}const k=_(v,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/deye/deye/device.vue"]]);export{k as default};