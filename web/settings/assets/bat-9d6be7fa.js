import{C as a}from"./HardwareInstallation-70f156e6.js";import{_ as p,u as n,k as m,l as u,D as t,N as d,y as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceFroniusBat",mixins:[a]},_={class:"device-fronius-bat"};function f(o,e,b,v,g,w){const i=n("openwb-base-heading"),r=n("openwb-base-number-input");return m(),u("div",_,[t(i,null,{default:d(()=>e[1]||(e[1]=[l(" Einstellungen für Fronius Batteriespeicher ")])),_:1}),t(r,{title:"Meter ID",required:"",min:"0",max:"65535","model-value":o.component.configuration.meter_id,"onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.meter_id"))},null,8,["model-value"])])}const E=p(c,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fronius/fronius/bat.vue"]]);export{E as default};