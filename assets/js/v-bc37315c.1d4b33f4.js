"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[22439],{39902:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-bc37315c",path:"/devices/TV01-ZB.html",title:"Moes TV01-ZB control via MQTT",lang:"en-US",frontmatter:{title:"Moes TV01-ZB control via MQTT",description:"Integrate your Moes TV01-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Frost_detection (binary)",slug:"frost-detection-binary",children:[]},{level:3,title:"Heating_stop (binary)",slug:"heating-stop-binary",children:[]},{level:3,title:"Holiday_temperature (numeric)",slug:"holiday-temperature-numeric",children:[]},{level:3,title:"Comfort_temperature (numeric)",slug:"comfort-temperature-numeric",children:[]},{level:3,title:"Eco_temperature (numeric)",slug:"eco-temperature-numeric",children:[]},{level:3,title:"Open_window_temperature (numeric)",slug:"open-window-temperature-numeric",children:[]},{level:3,title:"Boost_heating_countdown (numeric)",slug:"boost-heating-countdown-numeric",children:[]},{level:3,title:"Error_status (numeric)",slug:"error-status-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TV01-ZB.md",git:{updatedTime:1637604407e3}}},70284:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const d=(0,o(66252).uE)('<h1 id="moes-tv01-zb" tabindex="-1"><a class="header-anchor" href="#moes-tv01-zb" aria-hidden="true">#</a> Moes TV01-ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TV01-ZB</td></tr><tr><td>Vendor</td><td>Moes</td></tr><tr><td>Description</td><td>Thermostat radiator valve</td></tr><tr><td>Exposes</td><td>battery, lock (state), switch (state), frost_detection, heating_stop, holiday_temperature, comfort_temperature, eco_temperature, open_window_temperature, boost_heating_countdown, error_status, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, preset), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TV01-ZB.jpg" alt="Moes TV01-ZB"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="frost-detection-binary" tabindex="-1"><a class="header-anchor" href="#frost-detection-binary" aria-hidden="true">#</a> Frost_detection (binary)</h3><p>Enables/disables frost detection on the device. Value can be found in the published state on the <code>frost_detection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_detection&quot;: NEW_VALUE}</code>. If value equals <code>true</code> frost_detection is ON, if <code>false</code> OFF.</p><h3 id="heating-stop-binary" tabindex="-1"><a class="header-anchor" href="#heating-stop-binary" aria-hidden="true">#</a> Heating_stop (binary)</h3><p>Stop heating. Value can be found in the published state on the <code>heating_stop</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_stop&quot;: NEW_VALUE}</code>. If value equals <code>true</code> heating_stop is ON, if <code>false</code> OFF.</p><h3 id="holiday-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-temperature-numeric" aria-hidden="true">#</a> Holiday_temperature (numeric)</h3><p>Holiday mode temperature. Value can be found in the published state on the <code>holiday_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temperature&quot;: NEW_VALUE}</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric" aria-hidden="true">#</a> Comfort_temperature (numeric)</h3><p>Comfort mode temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric" aria-hidden="true">#</a> Eco_temperature (numeric)</h3><p>Eco mode temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>.</p><h3 id="open-window-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-temperature-numeric" aria-hidden="true">#</a> Open_window_temperature (numeric)</h3><p>Open window mode temperature. Value can be found in the published state on the <code>open_window_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_temperature&quot;: NEW_VALUE}</code>.</p><h3 id="boost-heating-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-heating-countdown-numeric" aria-hidden="true">#</a> Boost_heating_countdown (numeric)</h3><p>Boost heating countdown. Value can be found in the published state on the <code>boost_heating_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="error-status-numeric" tabindex="-1"><a class="header-anchor" href="#error-status-numeric" aria-hidden="true">#</a> Error_status (numeric)</h3><p>Error status. Value can be found in the published state on the <code>error_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>29.5</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>, <code>holiday</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),a={},i=(0,o(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);