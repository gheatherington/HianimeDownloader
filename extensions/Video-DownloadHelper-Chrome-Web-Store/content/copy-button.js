"use strict";(()=>{var c=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var d=(s,t)=>()=>(s&&(t=s(s=0)),t);var k=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),h=(s,t)=>{for(var e in t)c(s,e,{get:t[e],enumerable:!0})},C=(s,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of m(t))!f.call(s,a)&&a!==e&&c(s,a,{get:()=>t[a],enumerable:!(i=_(t,a))||i.enumerable});return s};var u=s=>C(c({},"__esModule",{value:!0}),s);var p={};h(p,{info:()=>x});var x,b=d(()=>{"use strict";x={lastVersion:"2.0.19"}});var g=k((S,L)=>{L.exports={prod:!0,channel:"stable",buildDate:"2025-03-31",buildOptions:{linuxlic:!1,noyt:!0,target:"google",browser:"chrome"}}});var v={};h(v,{LicInfoPanelComponent:()=>r});var r,y=d(()=>{"use strict";r=class extends React.Component{constructor(t){super(t),this.state={status:"verifying",email:null,key:null,editing:!1,editKey:""}}componentWillMount(){this.check()}check(){var t=this;t.setState({status:"verifying",email:null,key:null}),weh.rpc.call("checkLicense").then(e=>{t.setState(e)}).catch(e=>{console.error("Error checking license",e)})}onLicKeyChanged(){var t=this;return e=>{t.setState({editKey:e.target.value})}}onLicKeyPressed(){var t=this;return e=>{e.key=="Enter"?t.register():e.key=="Escape"&&t.setState({editing:!1})}}registerEdit(){var t=this;return()=>{t.setState({editing:!0,editKey:""})}}getLicense(){return()=>{let t=g().buildOptions.browser,i="https://www.downloadhelper.net/convert"+(t?"?browser="+encodeURIComponent(t):"");weh.rpc.call("goto",i)}}cancelRegister(){var t=this;return()=>{t.setState({editing:!1})}}register(){var t=this;this.setState({editing:!1,status:"verifying"}),this.validate(this.state.editKey.trim()).catch(e=>{t.setState({status:"error",error:e.message})})}validate(t){var e=this;return weh.rpc.call("validateLicense",t).then(i=>{i&&i.status=="nocoapp"?e.setState({status:"nocoapp",key:i.key}):e.check()})}render(){let t={unverified:1,locked:1,accepted:1,blocked:1,nocoapp:1,error:1,mismatch:1};var e=weh._("lic_status_"+this.state.status),i=React.createElement("div",{className:"lic-info-panel"},this.state.editing&&React.createElement("div",{className:"input-license"},React.createElement("label",null,weh._("license_key")),React.createElement("input",{value:this.state.editKey,onChange:this.onLicKeyChanged(),onKeyDown:this.onLicKeyPressed()})),!this.state.editing&&t[this.state.status]&&this.state.key&&React.createElement("div",{className:"license-details"},React.createElement("table",null,React.createElement("tbody",null,this.state.email&&React.createElement("tr",null,React.createElement("td",null,weh._("registered_email")),React.createElement("td",null,this.state.email)),this.state.key&&React.createElement("tr",null,React.createElement("td",null,weh._("registered_key")),React.createElement("td",null,this.state.key))))),this.state.status=="unneeded"&&React.createElement("div",null,weh._("lic_not_needed_linux")),!this.state.editing&&this.state.status=="unset"&&React.createElement("div",null,weh._("no_license_registered")),!this.state.editing&&this.state.status=="nocoapp"&&React.createElement("div",null,weh._("no_coapp_license_unverified")),!this.state.editing&&this.state.status=="mismatch"&&this.state.brExt&&React.createElement("div",null,weh._("lic_mismatch2",[this.state.brLicense,this.state.brExt])),!this.state.editing&&this.state.status=="mismatch"&&!this.state.brExt&&React.createElement("div",null,weh._("lic_mismatch1",[this.state.brLicense])),!this.state.editing&&this.state.status=="error"&&React.createElement("div",null,this.state.error),React.createElement("br",null),React.createElement("div",{className:"btn-toolbar float-right"},React.createElement("div",{className:"btn-group"},!this.state.editing&&this.state.status!="unneeded"&&this.state.key&&React.createElement("div",null,React.createElement("button",{className:"btn btn-outline-secondary",onClick:this.validate.bind(this,this.state.key)},weh._("recheck_license"))),!this.state.editing&&this.state.status=="nocoapp"&&this.state.key&&React.createElement("button",{className:"btn btn-outline-secondary",onClick:()=>weh.rpc.call("installCoApp")},weh._("coapp_install")),!this.state.editing&&this.state.status!="unneeded"&&this.state.status!="nocoapp"&&React.createElement("div",null,React.createElement("button",{className:"btn btn-outline-secondary",onClick:this.registerEdit()},weh._("register_existing_license")),React.createElement("button",{className:"btn btn-outline-secondary",onClick:this.getLicense()},weh._("get_conversion_license"))),this.state.editing&&React.createElement("div",null,React.createElement("button",{className:"btn btn-outline-secondary",onClick:this.cancelRegister()},weh._("cancel")),React.createElement("button",{className:"btn btn-outline-primary",disabled:this.state.editKey.trim().length===0,onClick:this.register.bind(this)},weh._("validate_license"))))));return React.createElement("div",null,React.createElement(CollapsibleSection,{title:e,content:i,open:this.props.open}))}};window.LicInfoPanel=r});var{info:$}=(b(),u(p));y();window.CopyButton=class extends React.Component{constructor(s){super(s),this.state={}}copyInfoToClipboard(){return async()=>{let s=browser.runtime.getManifest(),t=s.version_name??s.version,e=await weh.rpc.call("getBuild"),i=e.buildOptions,a=await browser.runtime.getPlatformInfo(),w=browser.i18n.getUILanguage(),o=await weh.rpc.call("checkCoApp"),l=await weh.rpc.call("checkLicense"),n="";n+=`version: ${t}
`,n+=`channel: ${e.channel}
`,n+=`build date: ${e.buildDate}
`,n+=`build options: linuxlic: ${i.linuxlic}, noyt: ${i.noyt}, browser: ${i.browser}
`,n+=`lang: ${w}
`,n+=`license: ${l.status}
`,l.key&&(n+=`key (only 16 first characters): ${l.key.substring(0,16)}
`),n+=`platform: ${a.arch} ${a.os}
`,n+=`UA: ${navigator.userAgent}
`,o&&o.status?(n+=`coapp: yes. Info:
`,n+=JSON.stringify(o.info,null,2)+`
`):n+=`coapp: no.
`,await navigator.clipboard.writeText(n),window.alert(weh._("copy_settings_info_to_clipboard_success"))}}render(){return React.createElement("button",{onClick:this.copyInfoToClipboard(),className:"btn btn-outline-secondary float-right"},weh._("copy_settings_info_to_clipboard"))}};})();
