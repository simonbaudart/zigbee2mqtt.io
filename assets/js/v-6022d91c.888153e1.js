"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[33202],{96601:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-6022d91c",path:"/devices/IM6001-MTP01.html",title:"SmartThings IM6001-MTP01 control via MQTT",lang:"en-US",frontmatter:{title:"SmartThings IM6001-MTP01 control via MQTT",description:"Integrate your SmartThings IM6001-MTP01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/IM6001-MTP01.md",git:{updatedTime:1637604407e3}}},1520:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var i=a(66252);const r=(0,i.uE)('<h1 id="smartthings-im6001-mtp01" tabindex="-1"><a class="header-anchor" href="#smartthings-im6001-mtp01" aria-hidden="true">#</a> SmartThings IM6001-MTP01</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>IM6001-MTP01</td></tr><tr><td>Vendor</td><td>SmartThings</td></tr><tr><td>Description</td><td>Motion sensor (2018 model)</td></tr><tr><td>Exposes</td><td>temperature, occupancy, battery_low, tamper, battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/IM6001-MTP01.jpg" alt="SmartThings IM6001-MTP01"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3>',4),o=(0,i.Uk)("Hold down reset button (behind the device) about 5 seconds, release once light front of device will starts to blink ("),d={href:"https://www.youtube.com/watch?v=4useLYFLJiw",target:"_blank",rel:"noopener noreferrer"},n=(0,i.Uk)("youtube"),c=(0,i.Uk)(")."),s=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),l=(0,i.Uk)("How to use device type specific configuration"),u=(0,i.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),h={},p=(0,a(83744).Z)(h,[["render",function(e,t){const a=(0,i.up)("OutboundLink"),h=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[o,(0,i._)("a",d,[n,(0,i.Wm)(a)]),c]),s,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(h,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[l])),_:1})])]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);