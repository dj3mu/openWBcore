import{_ as u,u as r,k as c,l as d,D as s,N as a,y as e,x as t,z as p}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceSolarLogCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(o,n=void 0){this.$emit("update:configuration",{value:o,object:n})}}},h={class:"device-solar_log-counter"},m={class:"small"},g=t("span",{class:"text-danger"},[e(" Solar-Log Zähler geben keine Ströme aus, sodass nur ein Lastmanagement anhand der Gesamtleistung, aber nicht phasenbasiert möglich ist."),t("br")],-1),f=t("a",{href:"https://github.com/openWB/core/wiki/Hausverbrauchs-Z%C3%A4hler",target:"_blank",rel:"noopener noreferrer"}," Wiki für Hausverbrauchs-Zähler ",-1);function b(o,n,v,k,w,Z){const i=r("openwb-base-heading"),l=r("openwb-base-alert");return c(),d("div",h,[s(i,null,{default:a(()=>[e(" Einstellungen für Solar-Log Zähler "),t("span",m,"(Modul: "+p(o.$options.name)+")",1)]),_:1}),s(l,{subtype:"info"},{default:a(()=>[g,e(" Solar-Log Zähler sind Hausverbrauchs-Zähler. Um die Werte am EVU-Punkt zu ermitteln, muss ein virtueller Zähler konfiguriert werden. Eine Beispiel-Konfiguration mit Solar-Log Zähler findest Du im "),f,e(". ")]),_:1})])}const B=u(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_log/solar_log/counter.vue"]]);export{B as default};