import{_ as $,C}from"./index-5fe069a6.js";import{_ as S}from"./dynamic-import-helper-be004503.js";import{l as O,X as V,Y as z,F as I}from"./vendor-fortawesome-b013cb5c.js";import{_ as y,q as p,k as s,l as d,z as g,M as o,x as a,y as c,B as n,u as r,a1 as L,a2 as q,I as E,A as f}from"./vendor-b3afda6d.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const F={name:"DisplayThemeFallback",emits:["update:configuration"],props:{displayTheme:{type:Object,required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},x={class:"display-theme-fallback"},N={key:1};function A(e,t,l,v,w,m){const u=p("openwb-base-alert"),b=p("openwb-base-textarea");return s(),d("div",x,[Object.keys(l.displayTheme.configuration).length==0?(s(),g(u,{key:0,subtype:"info"},{default:o(()=>[a(' Das Display-Theme "'+c(l.displayTheme.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(s(),d("div",N,[n(u,{subtype:"warning"},{default:o(()=>[a(' Es wurde keine Konfigurationsseite für das Display-Theme "'+c(l.displayTheme.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(b,{title:"Konfiguration",subtype:"json","model-value":l.displayTheme.configuration,"onUpdate:modelValue":t[0]||(t[0]=_=>m.updateConfiguration(_,"configuration"))},{help:o(()=>[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(u,{subtype:"info"},{default:o(()=>[r("pre",null,c(JSON.stringify(l.displayTheme.configuration,void 0,2)),1)]),_:1})]))])}const M=y(F,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeFallback.vue"]]);O.add(V,z);const j={name:"OpenwbDisplayThemeProxy",emits:["update:configuration"],props:{displayTheme:{type:Object,required:!0}},components:{FontAwesomeIcon:I},computed:{myComponent(){return console.debug(`loading display theme: ${this.displayTheme.type}`),L({loader:()=>S(Object.assign({"./cards/displayTheme.vue":()=>$(()=>import("./displayTheme-1a437844.js"),["assets/displayTheme-1a437844.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"])}),`./${this.displayTheme.type}/displayTheme.vue`),errorComponent:M})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function P(e,t,l,v,w,m){const u=p("font-awesome-icon"),b=p("openwb-base-alert"),_=p("openwb-base-heading");return s(),d(E,null,[l.displayTheme.official?(s(),g(b,{key:0,subtype:"success"},{default:o(()=>[n(u,{"fixed-width":"",icon:["fas","certificate"]}),a(' Das ausgewählte Display Theme "'+c(l.displayTheme.name)+'" wird von openWB gepflegt. ',1)]),_:1})):(s(),g(b,{key:1,subtype:"info"},{default:o(()=>[n(u,{"fixed-width":"",icon:["fas","people-group"]}),a(' Das ausgewählte Display Theme "'+c(l.displayTheme.name)+'" wird in unserer Community gepflegt. Rückfragen oder Probleme bitte im Forum diskutieren. ',1)]),_:1})),n(_,null,{default:o(()=>[a(' Einstellungen für Display Theme "'+c(l.displayTheme.name)+'" ',1)]),_:1}),(s(),g(q(m.myComponent),{displayTheme:l.displayTheme,"onUpdate:configuration":t[0]||(t[0]=h=>m.updateConfiguration(h))},null,40,["displayTheme"]))],64)}const U=y(j,[["render",P],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeProxy.vue"]]),H={name:"OpenwbOptionalComponentsView",mixins:[C],components:{OpenwbDisplayThemeProxy:U},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/+/config","openWB/chargepoint/+/get/rfid","openWB/chargepoint/+/get/rfid_timestamp","openWB/chargepoint/+/set/rfid","openWB/optional/rfid/active","openWB/optional/led/active","ToDo/optional/led/instant_blocked","ToDo/optional/led/pv_blocked","ToDo/optional/led/scheduled_blocked","ToDo/optional/led/standby_blocked","ToDo/optional/led/stop_blocked","ToDo/optional/led/instant","ToDo/optional/led/pv","ToDo/optional/led/scheduled","ToDo/optional/led/standby","ToDo/optional/led/stop","openWB/optional/int_display/active","openWB/optional/int_display/standby","openWB/optional/int_display/rotation","openWB/optional/int_display/on_if_plugged_in","openWB/optional/int_display/pin_active","openWB/optional/int_display/pin_code","openWB/optional/int_display/theme","openWB/optional/int_display/only_local_charge_points","openWB/system/configurable/display_themes","openWB/optional/et/active","openWB/optional/et/config/provider","openWB/optional/et/config/max_price"],tempIdTagList:{}}},computed:{idTagList(){return Object.values(this.updateIdTagList())},displayThemeList(){return this.$store.state.mqtt["openWB/system/configurable/display_themes"]},displayThemeGroupList(){let e=[{label:"openWB",options:[]},{label:"Community",options:[]}];return this.displayThemeList.forEach(t=>{t.official===!0?e[0].options.push(t):e[1].options.push(t)}),e}},methods:{getIdFromTopic(e){return e.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,"")},updateIdTagList(){return Object.entries(this.getWildcardTopics("^openWB/chargepoint/[^+/]+/[gs]et/rfid$",!0)).forEach(e=>{e[1]!==null&&(this.tempIdTagList[e[1]]=`${e[1]} (${e[0].includes("/set/")?"zugewiesen":"erfasst"} an ${this.getChargePointName(this.getIdFromTopic(e[0]))})`)}),this.tempIdTagList},getChargePointName(e){return this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"].name:"Ladepunkt "+e},getDisplayThemeDefaults(e){const t=this.displayThemeList.find(l=>l.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...JSON.parse(JSON.stringify(t.defaults))}:(console.warn("no default configuration found for display theme type!",e),{})},updateSelectedDisplayTheme(e){this.updateState("openWB/optional/int_display/theme",this.getDisplayThemeDefaults(e))},updateConfiguration(e,t){console.debug("updateConfiguration",e,t),this.updateState(e,t.value,t.object)}}},R={class:"optionalComponents"},J={name:"optionalComponentsForm"},G={key:0},K={key:1},X=r("ul",null,[r("li",null," Über einen in der openWB verbauten RFID-Reader (optional, z.B. anhand des Lieferscheins prüfen). "),r("li",null," Durch die automatische Erkennung an einer openWB Pro (muss in den Einstellungen aktiviert werden). "),r("li",null," Durch manuelle Eingabe einer ID am Display einer openWB. ")],-1),Y={key:0},Z=r("br",null,null,-1),Q=r("br",null,null,-1),ee=["innerHTML"],te={key:0},ne=r("br",null,null,-1),oe=r("hr",null,null,-1),ae={key:1},ie=r("hr",null,null,-1),se={key:2},le=r("hr",null,null,-1),pe=r("hr",null,null,-1),re={key:0};function de(e,t,l,v,w,m){const u=p("openwb-base-alert"),b=p("openwb-base-button-group-input"),_=p("openwb-base-textarea"),h=p("openwb-base-card"),T=p("openwb-base-heading"),B=p("openwb-base-range-input"),D=p("openwb-base-select-input"),W=p("openwb-display-theme-proxy"),k=p("openwb-base-submit-buttons");return s(),d("div",R,[r("form",J,[n(h,{title:"Identifikation von Fahrzeugen"},{default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),d("div",G,[n(u,{subtype:"info"},{default:o(()=>[a(' Weitere Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),d("div",K,[n(b,{title:"Identifikation aktivieren","model-value":e.$store.state.mqtt["openWB/optional/rfid/active"],"onUpdate:modelValue":t[0]||(t[0]=i=>e.updateState("openWB/optional/rfid/active",i)),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},{help:o(()=>[a(" Die Identifikation von Fahrzeugen kann auf mehreren Wegen erfolgen: "),X]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/optional/rfid/active"]===!0?(s(),d("div",Y,[n(u,{subtype:"info",class:"mb-1"},{default:o(()=>[a(" Die ID-Tags müssen in den Einstellungen der Fahrzeuge diesen zugeordnet werden."),Z,a(" Es kann zuerst das Fahrzeug angesteckt und dann der ID-Tag erfasst werden oder anders herum. Im letzten Fall muss innerhalb von 5 Minuten ein Fahrzeug angesteckt werden, sonst wird der ID-Tag verworfen. Das Fahrzeug wird erst nach dem Anstecken zugeordnet."),Q,r("span",{innerHTML:e.$store.state.text.rfidWiki},null,8,ee)]),_:1}),n(_,{title:"Erkannte ID-Tags",readonly:"",disabled:"","model-value":m.idTagList.join(`
`)},{help:o(()=>[a(" Solange diese Seite geöffnet ist, werden alle erfassten ID-Tags in dieser Liste aufgeführt. ")]),_:1},8,["model-value"])])):f("",!0)]))]),_:1}),n(h,{title:"Display (intern oder extern)"},{default:o(()=>[n(b,{title:"Integriertes Display","model-value":e.$store.state.mqtt["openWB/optional/int_display/active"],"onUpdate:modelValue":t[1]||(t[1]=i=>e.updateState("openWB/optional/int_display/active",i)),buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}]},{help:o(()=>[a(' Je nach Bestellung kann die openWB mit oder ohne Display geliefert worden sein. Auch die Variante "Standalone" bietet beide Optionen. Bitte prüfe zuerst die Hardwareausstattung deiner openWB (z.B. Lieferschein). ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/optional/int_display/active"]==!0?(s(),d("div",te,[n(b,{title:"Orientierung","model-value":e.$store.state.mqtt["openWB/optional/int_display/rotation"],"onUpdate:modelValue":t[2]||(t[2]=i=>e.updateState("openWB/optional/int_display/rotation",i)),buttons:[{buttonValue:0,text:"0°"},{buttonValue:90,text:"90°"},{buttonValue:180,text:"180°"},{buttonValue:270,text:"270°"}]},{help:o(()=>[a(" Mit dieser Einstellung kann das Display im Uhrzeigersinn gedreht werden, falls erforderlich. Nach einer Änderung ist ein Neustart erforderlich!"),ne,a(" Diese Einstellung erfordert ein Raspberry Pi Display. Für eine openWB series2 mit integriertem Display muss 0° ausgewählt werden, für eine Standalone mit Display 180°. Anzeigen, welche über HDMI angeschlossen sind, werden nicht unterstützt. ")]),_:1},8,["model-value"]),oe,n(T,null,{default:o(()=>[a(" Display Standby ")]),_:1}),n(B,{title:"Ausschaltzeit",min:0,max:12,step:1,"model-value":e.$store.state.mqtt["openWB/optional/int_display/standby"],"onUpdate:modelValue":t[3]||(t[3]=i=>e.updateState("openWB/optional/int_display/standby",i)),unit:"Sek",labels:[{label:"Immer an",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:30,value:30},{label:45,value:45},{label:"1 Min",value:60},{label:"1,5 Min",value:90},{label:"2 Min",value:120},{label:"3 Min",value:180},{label:"4 Min",value:240},{label:"5 Min",value:300},{label:"10 Min",value:600}]},{help:o(()=>[a(" Hier kann eine Zeitspanne angegeben werden, nach der das Display ausgeschaltet wird. ")]),_:1},8,["model-value"])])):f("",!0),e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),d("div",ae,[ie,n(u,{subtype:"info"},{default:o(()=>[a(' Weitere Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),d("div",se,[le,n(b,{title:"Ladepunkte auf externen openWB","model-value":e.$store.state.mqtt["openWB/optional/int_display/only_local_charge_points"],"onUpdate:modelValue":t[4]||(t[4]=i=>e.updateState("openWB/optional/int_display/only_local_charge_points",i)),buttons:[{buttonValue:!1,text:"Alle",class:"btn-outline-danger"},{buttonValue:!0,text:"Nur Lokale",class:"btn-outline-success"}]},{help:o(()=>[a(" Hiermit kann festgelegt werden, ob an angebundenen externen openWB alle oder nur die jeweils lokalen Ladepunkte angezeigt werden sollen. ")]),_:1},8,["model-value"]),pe,e.$store.state.mqtt["openWB/optional/int_display/theme"]!==void 0?(s(),d("div",re,[n(D,{class:"mb-2",title:"Theme des Displays",groups:m.displayThemeGroupList,"model-value":e.$store.state.mqtt["openWB/optional/int_display/theme"].type,"onUpdate:modelValue":t[5]||(t[5]=i=>m.updateSelectedDisplayTheme(i))},{help:o(()=>[a(" Hier können unterschiedliche Display-Anzeigen, s.g. Themes, ausgewählt werden. Die Anzahl der Themes wird sich mit zukünftigen Releases erhöhen. ")]),_:1},8,["groups","model-value"]),e.$store.state.mqtt["openWB/optional/int_display/theme"].type?(s(),g(W,{key:0,displayTheme:e.$store.state.mqtt["openWB/optional/int_display/theme"],"onUpdate:configuration":t[6]||(t[6]=i=>m.updateConfiguration("openWB/optional/int_display/theme",i))},null,8,["displayTheme"])):f("",!0)])):f("",!0)]))]),_:1}),n(k,{formName:"optionalComponentsForm",onSave:t[7]||(t[7]=i=>e.$emit("save")),onReset:t[8]||(t[8]=i=>e.$emit("reset")),onDefaults:t[9]||(t[9]=i=>e.$emit("defaults"))})])])}const ye=y(H,[["render",de],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/OptionalComponents.vue"]]);export{ye as default};