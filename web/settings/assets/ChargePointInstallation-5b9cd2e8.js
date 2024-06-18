import{l as H,d as G,a0 as Q,A as X,a1 as Y,a2 as K,K as ee,a3 as te,F as ne,I as ae}from"./vendor-fortawesome-d651dd92.js";import{_ as T,C as oe}from"./index-f5fdbecd.js";import{_ as E}from"./dynamic-import-helper-be004503.js";import{_ as x,q as g,k as l,l as m,z as v,M as o,x as i,y as k,B as n,u as d,a1 as D,a2 as F,I as S,J as A,A as b,p as M,a3 as O,O as ie,R as le,S as se}from"./vendor-b3afda6d.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const re={name:"ChargePointConfigFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String},methods:{updateConfiguration(e,a=void 0){this.$emit("update:configuration",{value:e,object:a})}}},ue={class:"device-fallback"},de={key:1};function pe(e,a,u,P,c,p){const C=g("openwb-base-alert"),f=g("openwb-base-textarea");return l(),m("div",ue,[Object.keys(u.configuration).length==0?(l(),v(C,{key:0,subtype:"info"},{default:o(()=>[i(' Der Ladepunkt-Typ "'+k(u.chargePointType)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),m("div",de,[n(C,{subtype:"warning"},{default:o(()=>[i(' Es wurde keine Konfigurationsseite für den Ladepunkt-Typ "'+k(u.chargePointType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(f,{title:"Konfiguration",subtype:"json","model-value":u.configuration,"onUpdate:modelValue":a[0]||(a[0]=L=>p.updateConfiguration(L,"configuration"))},{help:o(()=>[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(C,{subtype:"info"},{default:o(()=>[d("pre",null,k(JSON.stringify(u.configuration,void 0,2)),1)]),_:1})]))])}const me=x(re,[["render",pe],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointConfigFallback.vue"]]),ce={name:"ChargePointCommandsFallback",props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String}},ge={class:"charge-point-commands-fallback"};function he(e,a,u,P,c,p){const C=g("openwb-base-alert");return l(),m("div",ge,[n(C,{subtype:"secondary"},{default:o(()=>[i(' Der Ladepunkt-Typ "'+k(u.chargePointType)+'" bietet keine Befehle an. ',1)]),_:1})])}const fe=x(ce,[["render",he],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointCommandsFallback.vue"]]),be={name:"OpenwbChargePointProxy",emits:["update:configuration"],props:{chargePointId:{required:!0},chargePointType:{type:String,required:!0},configuration:{type:Object,required:!0},moduleName:{type:String,required:!1,default:void 0}},computed:{myChargePointSettingsComponent(){return console.debug(`loading charge point settings: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./external_openwb/chargePoint.vue":()=>T(()=>import("./chargePoint-c9d77c2a.js"),["assets/chargePoint-c9d77c2a.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./internal_openwb/chargePoint.vue":()=>T(()=>import("./chargePoint-4ec3642e.js"),["assets/chargePoint-4ec3642e.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./mqtt/chargePoint.vue":()=>T(()=>import("./chargePoint-5d9108db.js"),["assets/chargePoint-5d9108db.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./openwb_pro/chargePoint.vue":()=>T(()=>import("./chargePoint-8e001c83.js"),["assets/chargePoint-8e001c83.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./openwb_series2_satellit/chargePoint.vue":()=>T(()=>import("./chargePoint-1b2b6046.js"),["assets/chargePoint-1b2b6046.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./smartwb/chargePoint.vue":()=>T(()=>import("./chargePoint-40d383a8.js"),["assets/chargePoint-40d383a8.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"])}),`./${this.chargePointType}/chargePoint.vue`),errorComponent:me})},myChargePointCommandsComponent(){return console.debug(`loading charge point commands: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./openwb_pro/commands.vue":()=>T(()=>import("./commands-653dec4f.js"),["assets/commands-653dec4f.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"])}),`./${this.chargePointType}/commands.vue`),errorComponent:fe})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}},_e=d("hr",null,null,-1);function we(e,a,u,P,c,p){const C=g("openwb-base-heading");return l(),m(S,null,[n(C,null,{default:o(()=>[i(" Einstellungen für Ladepunkt "+k(u.moduleName),1)]),_:1}),(l(),v(F(p.myChargePointSettingsComponent),{configuration:u.configuration,chargePointId:u.chargePointId,chargePointType:u.chargePointType,"onUpdate:configuration":a[0]||(a[0]=f=>p.updateConfiguration(f))},null,40,["configuration","chargePointId","chargePointType"])),_e,n(C,null,{default:o(()=>[i(" Befehle für Ladepunkt "+k(u.moduleName),1)]),_:1}),(l(),v(F(p.myChargePointCommandsComponent),{configuration:u.configuration,chargePointId:u.chargePointId,chargePointType:u.chargePointType},null,8,["configuration","chargePointId","chargePointType"]))],64)}const ke=x(be,[["render",we],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointProxy.vue"]]);H.add(G,Q,X,Y,K,ee,te);const ve={name:"OpenwbChargePointInstallation",mixins:[oe],emits:["sendCommand"],components:{FontAwesomeIcon:ne,FontAwesomeLayers:ae,OpenwbChargePointProxy:ke},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/optional/rfid/active","openWB/chargepoint/+/config","openWB/chargepoint/template/+","openWB/chargepoint/template/+/autolock/+","openWB/system/configurable/chargepoints","openWB/system/configurable/chargepoints_internal"],chargePointToAdd:void 0,showChargePointModal:!1,modalChargePointIndex:void 0,showChargePointTemplateModal:!1,modalChargePointTemplateIndex:void 0,showChargePointTemplateAutolockPlanModal:!1,modalChargePointTemplateAutolockPlanIndex:void 0}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),a={};for(const[u,P]of Object.entries(e))(P.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(a[u]=P);return a}},chargePointTemplates:{get(){return this.getWildcardTopics("openWB/chargepoint/template/+")}},chargePointTemplateList:{get(){let e=[];return Object.keys(this.chargePointTemplates).forEach(a=>{let u=parseInt(a.match(/([0-9]+)/g)[0]),P=this.$store.state.mqtt["openWB/chargepoint/template/"+u].name;e.push({value:u,text:P})}),e}}},methods:{addChargePoint(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepoint",data:{type:this.chargePointToAdd}})},removeChargePointModal(e,a){a.stopPropagation(),this.modalChargePointIndex=parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1]),this.showChargePointModal=!0},removeChargePoint(e,a){this.showChargePointModal=!1,a=="confirm"&&(console.debug("request removal of charge point '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepoint",data:{id:e}}))},getChargePointList(){return this.$store.state.mqtt["openWB/general/extern"]===!1?this.$store.state.mqtt["openWB/system/configurable/chargepoints"]:this.$store.state.mqtt["openWB/system/configurable/chargepoints_internal"]},getChargePointName(e){return this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"].name:"Ladepunkt "+e},getChargePointTemplateName(e){return this.$store.state.mqtt["openWB/chargepoint/template/"+e]?this.$store.state.mqtt["openWB/chargepoint/template/"+e].name:"Profil "+e},addChargePointTemplate(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepointTemplate",data:{}})},getChargePointTemplateIndex(e){return parseInt(e.match(/([^/]+)$/)[0])},removeChargePointTemplateModal(e,a){a.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.showChargePointTemplateModal=!0},removeChargePointTemplate(e,a){this.showChargePointTemplateModal=!1,a=="confirm"&&(console.debug("request removal of chargePoint template '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepointTemplate",data:{id:e}}))},addChargePointTemplateAutolockPlan(e,a){a.stopPropagation(),console.info("requesting new charge point template autolock plan...");let u=this.getChargePointTemplateIndex(e);this.$emit("sendCommand",{command:"addAutolockPlan",data:{template:u}})},removeChargePointTemplateAutolockPlanModal(e,a,u){u.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.modalChargePointTemplateAutolockPlanIndex=parseInt(a.match(/([^/]+)$/)[0]),this.showChargePointTemplateAutolockPlanModal=!0},removeChargePointTemplateAutolockPlan(e,a,u){this.showChargePointTemplateAutolockPlanModal=!1,u=="confirm"&&(console.debug("request removal of chargePoint template '"+e+"' autolock plan '"+a+"'"),this.$emit("sendCommand",{command:"removeAutolockPlan",data:{template:e,plan:a}}))},getChargePointTemplateAutolockPlanName(e,a){return this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a]?this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a].name:"Autolock Zeitplan "+e+"/"+a},getChargePointTemplateAutolockPlans(e){let a=this.getChargePointTemplateIndex(e);return this.getWildcardTopics("openWB/chargepoint/template/"+a+"/autolock/+")},updateConfiguration(e,a){console.debug("updateConfiguration",e,a),this.updateState(e,a.value,a.object)}}},_=e=>(le("data-v-75fe5743"),e=e(),se(),e),Ce={class:"chargePointInstallation"},ye={name:"chargePointInstallationForm"},Pe={key:0},Ve=_(()=>d("hr",null,null,-1)),Le={key:1},Te=_(()=>d("hr",null,null,-1)),We=_(()=>d("br",null,null,-1)),Be=_(()=>d("br",null,null,-1)),Se=_(()=>d("br",null,null,-1)),Ie=_(()=>d("br",null,null,-1)),Ae={key:0},xe={class:"col-1"},Ue=_(()=>d("br",null,null,-1)),ze=_(()=>d("ul",null,[d("li",null," Interne openWB - wenn diese openWB über einen verbauten Ladepunkt mit Regelcontroller verfügt (z.B. Standard(+), Custom, Duo, Buchse, NICHT Standalone); ansonsten immer anlegen, egal ob diese openWB steuert = primary oder ferngesteuert wird = secondary "),d("li",null," Externe openWB - wenn diese openWB (primary) die Fernsteuerung von externen openWB (secondary) übernimmt "),d("li",null," MQTT-Ladepunkt - nur zur Nutzung des openWB-Simulators zugelassen "),d("li",null," openWB Pro - wenn diese openWB (primary) die Fernsteuerung einer openWB Pro (secondary) übernimmt "),d("li",null," openWB series2 Satellit/Satellit Duo - wenn diese openWB (primary) die Fernsteuerung einer openWB series2 Satellit/Satellit Duo (secondary) übernimmt "),d("li",null," smartWB/EVSE-Wifi - wenn diese openWB (primary) die Fernsteuerung einer smartWB/EVSE-Wifi übernimmt ")],-1)),qe=_(()=>d("hr",{class:"border-secondary"},null,-1)),Ee={key:0},De={key:1},Fe=_(()=>d("hr",null,null,-1)),Me={key:0},Oe={key:0},Ne=_(()=>d("br",null,null,-1)),Ze=["innerHTML"],Re=_(()=>d("hr",null,null,-1)),je=_(()=>d("br",null,null,-1)),$e=_(()=>d("br",null,null,-1)),Je=_(()=>d("a",{href:"https://github.com/openWB/core/wiki/Lastmanagement-und-kaskadierte-Z%C3%A4hler",target:"_blank",rel:"noopener noreferrer"},"Wiki zum Lastmanagement",-1)),He=_(()=>d("hr",null,null,-1)),Ge=["onClick"],Qe={key:0},Xe={key:1},Ye={key:2},Ke={key:2};function et(e,a,u,P,c,p){const C=g("openwb-base-modal-dialog"),f=g("font-awesome-icon"),L=g("openwb-base-avatar"),V=g("openwb-base-text-input"),U=g("openwb-base-select-input"),N=g("openwb-charge-point-proxy"),W=g("openwb-base-heading"),y=g("openwb-base-button-group-input"),I=g("openwb-base-card"),Z=g("openwb-base-click-button"),R=g("font-awesome-layers"),z=g("openwb-base-alert"),j=g("openwb-base-array-input"),q=g("openwb-base-range-input"),$=g("openwb-base-submit-buttons");return l(),m(S,null,[n(C,{show:c.showChargePointModal,title:"Ladepunkt löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[0]||(a[0]=s=>p.removeChargePoint(c.modalChargePointIndex,s))},{default:o(()=>[i(' Wollen Sie den Ladepunkt "'+k(p.getChargePointName(c.modalChargePointIndex))+'" (ID: '+k(c.modalChargePointIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:c.showChargePointTemplateModal,title:"Ladepunkt-Profil löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[1]||(a[1]=s=>p.removeChargePointTemplate(c.modalChargePointTemplateIndex,s))},{default:o(()=>[i(' Wollen Sie das Ladepunkt-Profil "'+k(p.getChargePointTemplateName(c.modalChargePointTemplateIndex))+'" (ID: '+k(c.modalChargePointTemplateIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:c.showChargePointTemplateAutolockPlanModal,title:"Autolock Zeitplan löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[2]||(a[2]=s=>p.removeChargePointTemplateAutolockPlan(c.modalChargePointTemplateIndex,c.modalChargePointTemplateAutolockPlanIndex,s))},{default:o(()=>[i(' Wollen Sie den Autolock Zeitplan "'+k(p.getChargePointTemplateAutolockPlanName(c.modalChargePointTemplateIndex,c.modalChargePointTemplateAutolockPlanIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),d("div",Ce,[d("form",ye,[n(I,{title:"Ladepunkte",subtype:"primary",collapsible:!0,collapsed:!0},{header:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),i(" Ladepunkte ")]),default:o(()=>[(l(!0),m(S,null,A(p.installedChargePoints,(s,r)=>(l(),v(I,{key:r,title:s.name+" (ID: "+s.id+")",collapsible:!0,collapsed:!0,subtype:"primary"},{actions:o(t=>[t.collapsed?b("",!0):(l(),v(L,{key:0,class:"bg-danger clickable",onClick:w=>p.removeChargePointModal(r,w)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":s.name,"onUpdate:modelValue":t=>e.updateState(r,t,"name")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Modul",subtype:"text",disabled:"",readonly:"","model-value":e.$store.state.mqtt[r].type},null,8,["model-value"]),s.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),m("span",Pe,[n(U,{title:"Ladepunkt-Profil",options:p.chargePointTemplateList,"model-value":e.$store.state.mqtt[r].template,"onUpdate:modelValue":t=>e.updateState(r,t,"template")},null,8,["options","model-value","onUpdate:modelValue"])])):b("",!0),Ve,n(N,{chargePointId:s.id,chargePointType:e.$store.state.mqtt[r].type,moduleName:e.$store.state.mqtt[r].name,configuration:s.configuration,"onUpdate:configuration":t=>p.updateConfiguration(r,t)},null,8,["chargePointId","chargePointType","moduleName","configuration","onUpdate:configuration"]),s.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),m("div",Le,[Te,n(W,null,{default:o(()=>[i("Hardware-Optionen")]),_:1}),n(y,{title:"automatische Phasenumschaltung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.auto_phase_switch_hw,"onUpdate:modelValue":t=>e.updateState(r,t,"auto_phase_switch_hw")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Control-Pilot-Unterbrechung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.control_pilot_interruption_hw,"onUpdate:modelValue":t=>e.updateState(r,t,"control_pilot_interruption_hw")},{help:o(()=>[i(' Die Control-Pilot-Leitung ist im Ladekabel integriert und dient der Steuerung der Fahrzeugladung (An/Aus/Stromvorgaben). Bei einigen Fahrzeugen können durch die Regelung erzwungene, längere Ladestopps (z.B. beim PV-Laden) zu unerwünschten "Einschlaf"-Effekten des Fahrzeuges führen. Mit diesem feature, welches hardwareseitig verbaut sein muss, kann ein Abstecken des Ladesteckers simuliert werden, um ein Aufwecken des Fahrzeuges zu ermöglichen. Die Funktion hängt immer auch vom Fahrzeugtyp ab. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(W,null,{default:o(()=>[i(" Elektrischer Anschluss ")]),_:1}),n(y,{title:"Anzahl angeschlossener Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:2,text:"2"},{buttonValue:3,text:"3"}],"model-value":s.connected_phases,"onUpdate:modelValue":t=>e.updateState(r,t,"connected_phases")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Phase 1 des Ladekabels",buttons:[{buttonValue:0,text:"unbekannt",class:"btn-outline-danger"},{buttonValue:1,text:"EVU L1",class:"btn-outline-success"},{buttonValue:2,text:"EVU L2",class:"btn-outline-success"},{buttonValue:3,text:"EVU L3",class:"btn-outline-success"}],"model-value":s.phase_1,"onUpdate:modelValue":t=>e.updateState(r,t,"phase_1")},{help:o(()=>[i(" Hier ist anzugeben, an welcher Phase des Hausanschlusses (EVU-Punkt) die Phase 1 dieses Ladepunktes angeschlossen ist. Diese Information wird für das Lastmanagement benötigt, um bei einer Schieflast gezielt einzelne Ladepunkte zu drosseln."),We,i(' Bei mehreren Ladepunkten macht es Sinn, die Phasen der LP rotierend anzuschließen, damit mehrere "nicht-dreiphasig" ladende Fahrzeuge mit optimaler Leistung laden können, bevor das Lastmanagement eingreift.'),Be,i(" Es wird vorausgesetzt, dass das Drehfeld innerhalb der Installation gleich bleibt. Wenn z.B. L1 des Ladepunktes auf EVU-L2 liegt, muss L2 des Ladepunktes auf EVU-L3 aufgelegt sein (und L3 des Ladepunktes auf EVU-L1)."),Se,i(" Eine Möglichkeit, die zur Ladepunktphase L1 zugehörige EVU-Phase zu ermitteln, ist eine einphasige Ladung zu starten und die Phasenströme am EVU-Zähler zu beobachten. Mit einem zweiphasig ladenden Fahrzeug kann danach auch der Anschluss von L2 ermittelt und so das Drehfeld kontrolliert werden."),Ie,i(" Im Zweifel bitte das Drehfeld von einer Fachkraft prüfen und korrigieren lassen. ")]),_:2},1032,["model-value","onUpdate:modelValue"])])):b("",!0)]),_:2},1032,["title"]))),128)),Object.keys(p.installedChargePoints).length>0?(l(),m("hr",Ae)):b("",!0),n(U,{class:"mb-2",title:"Verfügbare Ladepunkte",notSelected:"Bitte auswählen",options:p.getChargePointList(),"model-value":c.chargePointToAdd,"onUpdate:modelValue":a[3]||(a[3]=s=>c.chargePointToAdd=s)},{append:o(()=>[d("span",xe,[n(Z,{class:M(c.chargePointToAdd===void 0?"btn-outline-success":"btn-success"),disabled:c.chargePointToAdd===void 0,onButtonClicked:p.addChargePoint},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["class","disabled","onButtonClicked"])])]),help:o(()=>[i(" Bitte einen Ladepunkt auswählen, der der openWB-Regelung hinzugefügt werden soll."),Ue,ze]),_:1},8,["options","model-value"])]),_:1}),qe,n(I,{title:"Ladepunkt-Profile",collapsible:!0,collapsed:!0},{header:o(()=>[n(R,{"fixed-width":"",class:"fa-lg"},{default:o(()=>[n(f,{"fixed-width":"",icon:["far","file"]}),n(f,{"fixed-width":"",icon:["fas","charging-station"],transform:"shrink-8"})]),_:1}),i(" Ladepunkt-Profile ")]),actions:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),v(L,{key:0,class:"bg-success clickable",onClick:p.addChargePointTemplate},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):b("",!0)]),default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),m("div",Ee,[n(z,{subtype:"info"},{default:o(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),m("div",De,[(l(!0),m(S,null,A(p.chargePointTemplates,(s,r)=>(l(),v(I,{key:r,title:s.name+" (ID: "+p.getChargePointTemplateIndex(r)+")",collapsible:!0,collapsed:!0},O({default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":s.name,"onUpdate:modelValue":t=>e.updateState(r,t,"name"),disabled:r.endsWith("/0")},O({_:2},[r.endsWith("/0")?{name:"help",fn:o(()=>[i(" Das Standard-Profil kann nicht umbenannt werden. ")]),key:"0"}:void 0]),1032,["model-value","onUpdate:modelValue","disabled"]),Fe,e.$store.state.mqtt["openWB/optional/rfid/active"]===!0?(l(),m("div",Me,[n(W,null,{default:o(()=>[i(" Zugangskontrolle ")]),_:1}),n(y,{title:"Freigabe durch ID-Tags",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.rfid_enabling,"onUpdate:modelValue":t=>e.updateState(r,t,"rfid_enabling")},null,8,["model-value","onUpdate:modelValue"]),s.rfid_enabling?(l(),m("div",Oe,[n(j,{title:"Zugeordnete ID-Tags",noElementsMessage:"Keine ID-Tags zugeordnet.","model-value":s.valid_tags,"onUpdate:modelValue":t=>e.updateState(r,t,"valid_tags")},{help:o(()=>[i(" Wenn hier Tags eingetragen werden, können nur die eingetragenen Tags zur Fahrzeug-Zuordnung genutzt werden. Sind keine Tags eingetragen, wird nur die Zuordnung zum Fahrzeug geprüft. In diesem Fall können alle Fahrzeuge diesen Ladepunkt nutzen. "),Ne,d("span",{innerHTML:e.$store.state.text.rfidWiki},null,8,Ze)]),_:2},1032,["model-value","onUpdate:modelValue"]),Re])):b("",!0)])):b("",!0),n(W,null,{default:o(()=>[i(" Angaben zum konfigurierten Ladestrom der openWB ")]),_:1}),n(z,{subtype:"info"},{default:o(()=>[i(" Hier werden die maximalen Ladeströme entsprechend der in dem zugeordneten Ladepunkt genutzten Phasen eingestellt."),je,i(" Generell gilt, dass diese Werte in Übereinstimmung mit der Ausführung des Ladepunktes und des elektrischen Anschlusses bzw. der Absicherung zu wählen sind. Bei einer openWB mit 22kW Maximalleistung sind hier jeweils 32A einzustellen. Ist die openWB beispielsweise auf 11kW begrenzt (KfW-Förderung oder die Zuleitung ist mit 16A abgesichert), dann sind hier jeweils 16A einzustellen."),$e,i(" Komplexere Installationen mit mehreren Ladepunkten werden im "),Je,i(" beschrieben. ")]),_:1}),n(q,{title:"Maximalstrom bei einer Phase",min:6,max:32,step:1,unit:"A","model-value":s.max_current_single_phase,"onUpdate:modelValue":t=>e.updateState(r,t,"max_current_single_phase")},null,8,["model-value","onUpdate:modelValue"]),n(q,{title:"Maximalstrom mehrere Phasen",min:6,max:32,step:1,unit:"A","model-value":s.max_current_multi_phases,"onUpdate:modelValue":t=>e.updateState(r,t,"max_current_multi_phases")},null,8,["model-value","onUpdate:modelValue"]),He,n(W,null,{default:o(()=>[i("Automatische Sperre")]),_:1}),n(y,{title:"Automatische Sperre aktiv",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.autolock.active,"onUpdate:modelValue":t=>e.updateState(r,t,"autolock.active")},{help:o(()=>[i(" Wird die automatische Sperre aktiviert, können Fahrzeugladungen mittels Zeitplan auf gewünschte Zeitbereiche eingeschränkt werden. Dies kann z.B. bei Zugänglichkeiten zu Ladepunkten in öffentlichen oder halb-öffentlichen Bereichen sinnvoll sein. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(y,{title:"Erst nach Ladeende sperren",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.autolock.wait_for_charging_end,"onUpdate:modelValue":t=>e.updateState(r,t,"autolock.wait_for_charging_end")},{help:o(()=>[i(' Wenn ein Zeitplan die automatische Sperre aktiviert, werden alle Ladepunkte direkt gesperrt und laufende Ladevorgänge beendet. Wird hier "Ja" ausgewählt, dann werden laufende Ladevorgänge NICHT beendet und diese Ladepunkte erst nach abgeschlossener Ladung gesperrt. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(W,null,{actions:o(()=>[n(L,{class:"bg-success clickable",onClick:t=>p.addChargePointTemplateAutolockPlan(r,t)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","plus"]})]),_:2},1032,["onClick"])]),default:o(()=>[i(" Zeitpläne für die automatische Sperre ")]),_:2},1024),(l(!0),m(S,null,A(p.getChargePointTemplateAutolockPlans(r),(t,w)=>(l(),v(I,{key:w,title:t.name,collapsible:!0,collapsed:!0},{actions:o(h=>[h.collapsed==!0?(l(),m("span",{key:0,onClick:ie(B=>e.updateState(w,!t.active,"active"),["stop"]),class:M(["subheader pill clickable",t.active?"bg-success":"bg-danger"])},[n(f,{"fixed-width":"",icon:["fas","clock"]}),i(" "+k(t.time[0])+" - "+k(t.time[1])+" ",1),t.frequency.selected=="once"?(l(),m("span",Qe,[n(f,{"fixed-width":"",icon:["fas","calendar-day"]}),i(" "+k(e.formatDate(t.frequency.once[0])==e.formatDate(t.frequency.once[1])?e.formatDate(t.frequency.once[0]):e.formatDate(t.frequency.once[0])+" - "+e.formatDate(t.frequency.once[1])),1)])):b("",!0),t.frequency.selected=="daily"?(l(),m("span",Xe,[n(f,{"fixed-width":"",icon:["fas","calendar-week"]})])):b("",!0),t.frequency.selected=="weekly"?(l(),m("span",Ye,[n(f,{"fixed-width":"",icon:["fas","calendar-alt"]})])):b("",!0)],10,Ge)):b("",!0),h.collapsed==!1?(l(),v(L,{key:1,class:"bg-danger clickable",onClick:B=>p.removeChargePointTemplateAutolockPlanModal(r,w,B)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])):b("",!0)]),default:o(()=>[n(V,{title:"Bezeichnung","model-value":t.name,"onUpdate:modelValue":h=>e.updateState(w,h,"name")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Zeitplan aktiv",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.active,"onUpdate:modelValue":h=>e.updateState(w,h,"active")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Sperren um",subtype:"time","model-value":t.time[0],"onUpdate:modelValue":h=>e.updateState(w,h,"time.0")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Freigeben um",subtype:"time","model-value":t.time[1],"onUpdate:modelValue":h=>e.updateState(w,h,"time.1")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Wiederholungen",buttons:[{buttonValue:"once",text:"Einmalig",class:"btn-outline-info"},{buttonValue:"daily",text:"Täglich",class:"btn-outline-info"},{buttonValue:"weekly",text:"Wöchentlich",class:"btn-outline-info"}],"model-value":t.frequency.selected,"onUpdate:modelValue":h=>e.updateState(w,h,"frequency.selected")},null,8,["model-value","onUpdate:modelValue"]),t.frequency.selected=="once"?(l(),v(V,{key:0,title:"Sperren ab ...",subtype:"date","model-value":t.frequency.once[0],"onUpdate:modelValue":h=>e.updateState(w,h,"frequency.once.0")},null,8,["model-value","onUpdate:modelValue"])):b("",!0),t.frequency.selected=="once"?(l(),v(V,{key:1,title:"... bis",subtype:"date",min:t.frequency.once[0],"model-value":t.frequency.once[1],"onUpdate:modelValue":h=>e.updateState(w,h,"frequency.once.1")},null,8,["min","model-value","onUpdate:modelValue"])):b("",!0),t.frequency.selected=="weekly"?(l(),m("div",Ke,[(l(!0),m(S,null,A(e.weekdays,(h,B)=>(l(),v(y,{key:B,title:h,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.frequency.weekly[B],"onUpdate:modelValue":J=>e.updateState(w,J,"frequency.weekly."+B)},null,8,["title","model-value","onUpdate:modelValue"]))),128))])):b("",!0)]),_:2},1032,["title"]))),128))]),_:2},[r.endsWith("/0")?void 0:{name:"actions",fn:o(t=>[t.collapsed?b("",!0):(l(),v(L,{key:0,class:"bg-danger clickable",onClick:w=>p.removeChargePointTemplateModal(r,w)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),key:"0"}]),1032,["title"]))),128))]))]),_:1}),n($,{formName:"chargePointInstallationForm",onSave:a[4]||(a[4]=s=>e.$emit("save")),onReset:a[5]||(a[5]=s=>e.$emit("reset")),onDefaults:a[6]||(a[6]=s=>e.$emit("defaults"))})])])],64)}const ut=x(ve,[["render",et],["__scopeId","data-v-75fe5743"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ChargePointInstallation.vue"]]);export{ut as default};
