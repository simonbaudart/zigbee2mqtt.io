"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78750],{68075:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-7911b510",path:"/advanced/support-new-devices/01_support_new_devices.html",title:"Support new devices",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Instructions",slug:"instructions",children:[{level:3,title:"1. Pairing the device with Zigbee2MQTT",slug:"_1-pairing-the-device-with-zigbee2mqtt",children:[]},{level:3,title:"2. Adding your device",slug:"_2-adding-your-device",children:[]},{level:3,title:"3. Adding converter(s) for your device",slug:"_3-adding-converter-s-for-your-device",children:[]},{level:3,title:"4. Add device picture to zigbee2mqtt.io documentation",slug:"_4-add-device-picture-to-zigbee2mqtt-io-documentation",children:[]},{level:3,title:"Done!",slug:"done",children:[]}]}],filePathRelative:"advanced/support-new-devices/01_support_new_devices.md",git:{updatedTime:1637604407e3}}},59377:(n,e,s)=>{s.r(e),s.d(e,{default:()=>Dn});var a=s(66252);const t=(0,a._)("h1",{id:"support-new-devices",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#support-new-devices","aria-hidden":"true"},"#"),(0,a.Uk)(" Support new devices")],-1),o=(0,a.Uk)("Zigbee2MQTT uses "),p={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("zigbee-herdsman-converters"),i=(0,a.Uk)(" to parse messages to and from devices."),c=(0,a.Uk)("This page will guide you through the process of adding support for new devices to "),l={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("zigbee-herdsman-converters"),d=(0,a.Uk)("."),k=(0,a.Uk)("In case you require any help feel free to create an "),b={href:"https://github.com/Koenkk/zigbee2mqtt/issues",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("issue"),g=(0,a.Uk)("."),h=(0,a._)("strong",null,"Before",-1),v=(0,a.Uk)(" starting, first check if you devices is not already supported in the Zigbee2MQTT dev branch! This can be done by searching on your Zigbee model (see step 1 below) in any of the files "),f={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("here"),y=(0,a.Uk)("."),x=(0,a.uE)('<h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><h3 id="_1-pairing-the-device-with-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#_1-pairing-the-device-with-zigbee2mqtt" aria-hidden="true">#</a> 1. Pairing the device with Zigbee2MQTT</h3><p>The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.</p><p>Once you successfully paired the device you will see something like:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired\nZigbee2MQTT:warn  2019-11-09T12:19:56: Device &#39;0x00158d0001dc126a&#39; with Zigbee model &#39;lumi.sens&#39; and manufacturer name &#39;some_name&#39; is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Make sure that joining is enabled, otherwise new devices cannot join the network.</p></div><h3 id="_2-adding-your-device" tabindex="-1"><a class="header-anchor" href="#_2-adding-your-device" aria-hidden="true">#</a> 2. Adding your device</h3><p>The next step is to create an external converter file. This file has to be created next to the <code>configuration.yaml</code>, in this example we will call it <code>WSDCGQ01LM.js</code> (make sure it ends with <code>.js</code>). In order to provide support for e.g. the <code>lumi.sens</code> from step 1 we would add the following to this file:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/extend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    zigbeeModel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// The model ID from: Device with modelID &#39;lumi.sens&#39; is not supported.</span>\n    model<span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Vendor model number, look on the device for a model number</span>\n    vendor<span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Vendor of the device (only used for documentation and startup logging)</span>\n    description<span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Description of the device, copy from vendor site. (only used for documentation and startup logging)</span>\n    fromZigbee<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// We will add this later</span>\n    toZigbee<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Should be empty, unless device can be controlled (e.g. lights, switches).</span>\n    exposes<span class="token operator">:</span> <span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Now set the Zigbee2MQTT <code>log_level</code> to <code>debug</code> and enable the external converter by adding the following to your Zigbee2MQTT <code>configuration.yaml</code>.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">log_level</span><span class="token punctuation">:</span> debug\n<span class="token key atrule">external_converters</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> WSDCGQ01LM.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Once finished, restart Zigbee2MQTT and trigger some actions on the device. You will see messages like:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',13),w=(0,a.Uk)("In case your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a "),T=(0,a._)("code",null,"configure:",-1),U=(0,a.Uk)(" section. It may help to look at similar "),q={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},z=(0,a.Uk)("devices"),M=(0,a.Uk)("."),Z={class:"custom-container tip"},W=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),Q=(0,a.Uk)("If your device is advertised as TuYa compatible or reports anything with "),j=(0,a._)("code",null,"manuSpecificTuya",-1),C=(0,a.Uk)(" additional instructions for adding your device can be found "),I=(0,a.Uk)("here"),D=(0,a.Uk)("."),K=(0,a._)("p",null,"Some basic external converter examples:",-1),S={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.js",target:"_blank",rel:"noopener noreferrer"},R=(0,a.Uk)("Bulb (light)"),A={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.js",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("Plug (switch)"),P={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},L=(0,a.Uk)("Advanced example"),N=(0,a.Uk)("Definitions of already supported devices can be found "),G={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},O=(0,a.Uk)("here"),V=(0,a.Uk)(". It may help to look at devices from the same vendor or type."),Y=(0,a._)("h3",{id:"_3-adding-converter-s-for-your-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-adding-converter-s-for-your-device","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. Adding converter(s) for your device")],-1),B=(0,a.Uk)("In order to parse the messages of your Zigbee device we need to add converter(s). Probably existing converters can be reused, those can be found "),F={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/converters/fromZigbee.js",target:"_blank",rel:"noopener noreferrer"},H=(0,a.Uk)("here"),J=(0,a.Uk)("."),X=(0,a.Uk)("For e.g. the following message we could use the already existing "),$={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/5c069a34beecc9250d642d02e84f2808af1b4fae/converters/fromZigbee.js#L304",target:"_blank",rel:"noopener noreferrer"},nn=(0,a._)("code",null,"fz.temperature",-1),en=(0,a.Uk)(" converter"),sn=(0,a.Uk)(":"),an=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now update your external converter.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/extend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    zigbeeModel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    model<span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span>\n    vendor<span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span>\n    description<span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span>\n    fromZigbee<span class="token operator">:</span> <span class="token punctuation">[</span>fz<span class="token punctuation">.</span>temperature<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- added here</span>\n    toZigbee<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    exposes<span class="token operator">:</span> <span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Repeat until your device does not produce any more log messages like: <code>2018-5-1 18:19:41 WARN No converter available for &#39;WSDCGQ01LM&#39; with....</code></p>',4),tn=(0,a.Uk)("In case you need to add custom converters you can find an external converter example "),on={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},pn=(0,a.Uk)("here"),rn=(0,a.Uk)("."),cn=(0,a.uE)('<h4 id="_3-1-retrieving-color-temperature-range-only-required-for-lights-which-support-color-temperature" tabindex="-1"><a class="header-anchor" href="#_3-1-retrieving-color-temperature-range-only-required-for-lights-which-support-color-temperature" aria-hidden="true">#</a> 3.1 Retrieving color temperature range (only required for lights which support color temperature)</h4><p>If your device is a light and supports color temperature you need to define the color temperature range. This range indicates the minimum and maximum color temperature value the light supports. This can be retrieved from the light by sending to <code>zigbee2mqtt/DEVICE_FRIENDLY_NAME/set</code> with payload <code>{&quot;read&quot;: {&quot;cluster&quot;: &quot;lightingColorCtrl&quot;, &quot;attributes&quot;: [&quot;colorTempPhysicalMin&quot;, &quot;colorTempPhysicalMax&quot;]}}</code></p><p>The result will be logged to the Zigbee2MQTT log, e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Zigbee2MQTT:info  2021-03-21 21:10:40: Read result of &#39;lightingColorCtrl&#39;: {&quot;colorTempPhysicalMin&quot;:153,&quot;colorTempPhysicalMax&quot;:500}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>In the above example set <code>colorTempRange</code> to <code>{colorTempRange: [153, 500]}</code>, e.g.:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    zigbeeModel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;myZigbeeModel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    model<span class="token operator">:</span> <span class="token string">&#39;myModel&#39;</span><span class="token punctuation">,</span>\n    vendor<span class="token operator">:</span> <span class="token string">&#39;myVendor&#39;</span><span class="token punctuation">,</span>\n    description<span class="token operator">:</span> <span class="token string">&#39;Super bulb&#39;</span><span class="token punctuation">,</span>\n    extend<span class="token operator">:</span> extend<span class="token punctuation">.</span><span class="token function">light_onoff_brightness_colortemp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>colorTempRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// &lt;---</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',6),ln=(0,a.Uk)("In case none of the existing converters fit you can add custom ones, external converter example for this can be found "),un={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},dn=(0,a.Uk)("here"),kn=(0,a.Uk)("."),bn=(0,a._)("h3",{id:"_4-add-device-picture-to-zigbee2mqtt-io-documentation",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_4-add-device-picture-to-zigbee2mqtt-io-documentation","aria-hidden":"true"},"#"),(0,a.Uk)(" 4. Add device picture to zigbee2mqtt.io documentation")],-1),mn=(0,a._)("p",null,"To make sure a picture is available for this device on the supported devices page and in the frontend:",-1),gn=(0,a.Uk)("Clone "),hn={href:"https://github.com/Koenkk/zigbee2mqtt.io",target:"_blank",rel:"noopener noreferrer"},vn=(0,a.Uk)("zigbee2mqtt.io"),fn=(0,a._)("li",null,[(0,a.Uk)("Optional: Add a markdown file for your device to "),(0,a._)("code",null,"docs/devices"),(0,a.Uk)(", use the "),(0,a._)("code",null,"model"),(0,a.Uk)(" property of your definition as the filename.")],-1),_n=(0,a._)("li",null,[(0,a.Uk)("Add a picture ("),(0,a._)("code",null,".jpg"),(0,a.Uk)(", 150x150) to "),(0,a._)("code",null,"public/images/devices"),(0,a.Uk)(" and link it in file of the previous step.")],-1),yn=(0,a.Uk)("Create a Pull Request to "),xn={href:"https://github.com/Koenkk/zigbee2mqtt.io",target:"_blank",rel:"noopener noreferrer"},wn=(0,a.Uk)("zigbee2mqtt.io"),Tn=(0,a.Uk)("."),Un=(0,a._)("p",null,[(0,a.Uk)("On the next release of Zigbee2MQTT, the documentation will be updated and your device file will be linked in "),(0,a._)("code",null,"../../supported-devices.md"),(0,a.Uk)(" automatically.")],-1),qn=(0,a._)("h3",{id:"done",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#done","aria-hidden":"true"},"#"),(0,a.Uk)(" Done!")],-1),zn=(0,a.Uk)("Now it's time to submit a pull request to "),Mn={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},Zn=(0,a.Uk)("zigbee-herdsman-converters"),Wn=(0,a.Uk)(" so this device is supported out of the box by Zigbee2MQTT. This can be done by adding the definition to the "),Qn={href:"https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/devices",target:"_blank",rel:"noopener noreferrer"},jn=(0,a.Uk)("vendor file"),Cn=(0,a.Uk)(" of your device. 😃"),In={},Dn=(0,s(83744).Z)(In,[["render",function(n,e){const s=(0,a.up)("OutboundLink"),In=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[o,(0,a._)("a",p,[r,(0,a.Wm)(s)]),i]),(0,a._)("p",null,[c,(0,a._)("a",l,[u,(0,a.Wm)(s)]),d]),(0,a._)("p",null,[k,(0,a._)("a",b,[m,(0,a.Wm)(s)]),g]),(0,a._)("p",null,[h,v,(0,a._)("a",f,[_,(0,a.Wm)(s)]),y]),x,(0,a._)("p",null,[w,T,U,(0,a._)("a",q,[z,(0,a.Wm)(s)]),M]),(0,a._)("div",Z,[W,(0,a._)("p",null,[Q,j,C,(0,a.Wm)(In,{to:"/advanced/support-new-devices/02_support_new_tuya_devices.html"},{default:(0,a.w5)((()=>[I])),_:1}),D])]),K,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",S,[R,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",A,[E,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",P,[L,(0,a.Wm)(s)])]),(0,a._)("li",null,[N,(0,a._)("a",G,[O,(0,a.Wm)(s)]),V])]),Y,(0,a._)("p",null,[B,(0,a._)("a",F,[H,(0,a.Wm)(s)]),J]),(0,a._)("p",null,[X,(0,a._)("a",$,[nn,en,(0,a.Wm)(s)]),sn]),an,(0,a._)("p",null,[tn,(0,a._)("a",on,[pn,(0,a.Wm)(s)]),rn]),cn,(0,a._)("p",null,[ln,(0,a._)("a",un,[dn,(0,a.Wm)(s)]),kn]),bn,mn,(0,a._)("ol",null,[(0,a._)("li",null,[gn,(0,a._)("a",hn,[vn,(0,a.Wm)(s)])]),fn,_n,(0,a._)("li",null,[yn,(0,a._)("a",xn,[wn,(0,a.Wm)(s)]),Tn])]),Un,qn,(0,a._)("p",null,[zn,(0,a._)("a",Mn,[Zn,(0,a.Wm)(s)]),Wn,(0,a._)("a",Qn,[jn,(0,a.Wm)(s)]),Cn])],64)}]])},83744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}}}]);