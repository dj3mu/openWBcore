import{C as p}from"./index-f5fdbecd.js";import{_ as f,q as n,k as m,l as g,B as r,M as u,x as i,u as h}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-d651dd92.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"ElectricityTariffEnergyCharts",mixins:[p],emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(a,e=void 0){this.$emit("update:configuration",{value:a,object:e})}}},b={class:"electricity-tariff-energycharts"},y=h("br",null,null,-1);function w(a,e,o,v,x,s){const l=n("openwb-base-alert"),c=n("openwb-base-select-input"),d=n("openwb-base-number-input");return m(),g("div",b,[r(l,{subtype:"info"},{default:u(()=>[i(" Börsenstrompreise von Energy Charts (energy-charts.info)"),y,i(" Die Rohdaten werden von Wissenschaftlern des Fraunhofer-Institut für Solare Energiesysteme ISE aus zahlreichen Quellen stündlich oder täglich abgerufen und für die Darstellung aufbereitet. ")]),_:1}),r(c,{title:"Land",notSelected:"Bitte auswählen",options:[{value:"DE-LU",text:"Deutschland"},{value:"AT",text:"Österreich"},{value:"CH",text:"Schweiz"}],"model-value":o.electricityTariff.configuration.country,"onUpdate:modelValue":e[0]||(e[0]=t=>s.updateConfiguration(t,"configuration.country"))},null,8,["model-value"]),r(d,{title:"Aufschlag zum Börsenstrompreis",min:0,step:.001,precision:3,unit:"ct/kWh","model-value":o.electricityTariff.configuration.surcharge,"onUpdate:modelValue":e[1]||(e[1]=t=>s.updateConfiguration(parseFloat(t.toFixed(3)),"configuration.surcharge"))},{help:u(()=>[i(" Die Auswahl (Energy-Charts) kann für alle Stromanbieter ausgewählt werden, die die Börsenstrompreise in einem variablen/dynamischen Tarif an die Kunden weitergeben. Das Modul soll es ermöglichen, dass zu tagesaktuellen Strompreisen unter Berücksichtigung eines Aufschlags zu günstigen Zeiten automatisch geladen werden kann und somit die Preisschwankungen an der Börse optimal ausgenutzt werden. ")]),_:1},8,["model-value"])])}const D=f(_,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/energycharts/electricity_tariff.vue"]]);export{D as default};
