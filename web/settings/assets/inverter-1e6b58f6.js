import{C as u}from"./HardwareInstallation-70f156e6.js";import{_ as a,u as t,k as p,l,D as n,N as m,y as c}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceYoulessInverter",mixins:[u]},d={class:"device-youless-inverter"};function f(o,e,b,v,g,x){const s=t("openwb-base-heading"),i=t("openwb-base-button-group-input");return p(),l("div",d,[n(s,null,{default:m(()=>e[1]||(e[1]=[c(" Einstellungen für Youless LS120 Wechselrichter ")])),_:1}),n(i,{title:"S0-Eingang auslesen",buttons:[{buttonValue:!1,text:"nein"},{buttonValue:!0,text:"ja"}],"model-value":o.component.configuration.source_s0,"onUpdate:modelValue":e[0]||(e[0]=r=>o.updateConfiguration(r,"configuration.source_s0"))},null,8,["model-value"])])}const N=a(_,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/youless/youless/inverter.vue"]]);export{N as default};