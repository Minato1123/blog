import{_ as t,o as e,c as a,a as l}from"./app.f0eb6f67.js";const g=JSON.parse('{"title":"LAUNCH Docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"launch \u6587\u4EF6\u4ECB\u7D39","slug":"launch-\u6587\u4EF6\u4ECB\u7D39","link":"#launch-\u6587\u4EF6\u4ECB\u7D39","children":[{"level":3,"title":"launch \u6587\u4EF6\u7684\u683C\u5F0F","slug":"launch-\u6587\u4EF6\u7684\u683C\u5F0F","link":"#launch-\u6587\u4EF6\u7684\u683C\u5F0F","children":[]},{"level":3,"title":"Launch\u6587\u4EF6\u7684\u5E38\u7528\u6A19\u7C64","slug":"launch\u6587\u4EF6\u7684\u5E38\u7528\u6A19\u7C64","link":"#launch\u6587\u4EF6\u7684\u5E38\u7528\u6A19\u7C64","children":[]}]},{"level":2,"title":"\u65B0\u589E Launch \u6587\u4EF6","slug":"\u65B0\u589E-launch-\u6587\u4EF6","link":"#\u65B0\u589E-launch-\u6587\u4EF6","children":[]},{"level":2,"title":"launch \u6587\u4EF6\u7684\u61C9\u7528","slug":"launch-\u6587\u4EF6\u7684\u61C9\u7528","link":"#launch-\u6587\u4EF6\u7684\u61C9\u7528","children":[{"level":3,"title":"\u4F7F\u7528 launch \u6587\u4EF6\u4E00\u6B21\u64CD\u63A7\u5169\u500B Turtlesim","slug":"\u4F7F\u7528-launch-\u6587\u4EF6\u4E00\u6B21\u64CD\u63A7\u5169\u500B-turtlesim","link":"#\u4F7F\u7528-launch-\u6587\u4EF6\u4E00\u6B21\u64CD\u63A7\u5169\u500B-turtlesim","children":[]}]},{"level":2,"title":"ROS parameter \u4ECB\u7D39","slug":"ros-parameter-\u4ECB\u7D39","link":"#ros-parameter-\u4ECB\u7D39","children":[{"level":3,"title":"Parameter \u8207 yaml \u6A94\u6848","slug":"parameter-\u8207-yaml-\u6A94\u6848","link":"#parameter-\u8207-yaml-\u6A94\u6848","children":[]}]},{"level":2,"title":"launch \u6587\u4EF6\u64B0\u5BEB parameter","slug":"launch-\u6587\u4EF6\u64B0\u5BEB-parameter","link":"#launch-\u6587\u4EF6\u64B0\u5BEB-parameter","children":[{"level":3,"title":"\u4F7F\u7528 launch \u6587\u4EF6 \u6539\u8B8A Turtlesim \u7684\u80CC\u666F\u984F\u8272","slug":"\u4F7F\u7528-launch-\u6587\u4EF6-\u6539\u8B8A-turtlesim-\u7684\u80CC\u666F\u984F\u8272","link":"#\u4F7F\u7528-launch-\u6587\u4EF6-\u6539\u8B8A-turtlesim-\u7684\u80CC\u666F\u984F\u8272","children":[]}]},{"level":2,"title":"launch \u6587\u4EF6\u8F09\u5165 yaml \u683C\u5F0F\u6A94\u6848\u53C3\u6578","slug":"launch-\u6587\u4EF6\u8F09\u5165-yaml-\u683C\u5F0F\u6A94\u6848\u53C3\u6578","link":"#launch-\u6587\u4EF6\u8F09\u5165-yaml-\u683C\u5F0F\u6A94\u6848\u53C3\u6578","children":[{"level":3,"title":"\u65B0\u589E yaml \u683C\u5F0F\u6A94\u6848","slug":"\u65B0\u589E-yaml-\u683C\u5F0F\u6A94\u6848","link":"#\u65B0\u589E-yaml-\u683C\u5F0F\u6A94\u6848","children":[]}]}],"relativePath":"notes/misc/launch-notes.md"}'),r={name:"notes/misc/launch-notes.md"},n=l(`<h1 id="launch-docs" tabindex="-1">LAUNCH Docs <a class="header-anchor" href="#launch-docs" aria-hidden="true">#</a></h1><h2 id="launch-\u6587\u4EF6\u4ECB\u7D39" tabindex="-1">launch \u6587\u4EF6\u4ECB\u7D39 <a class="header-anchor" href="#launch-\u6587\u4EF6\u4ECB\u7D39" aria-hidden="true">#</a></h2><p><img src="https://i.imgur.com/ab1QGrR.png" alt=""></p><h3 id="launch-\u6587\u4EF6\u7684\u683C\u5F0F" tabindex="-1">launch \u6587\u4EF6\u7684\u683C\u5F0F <a class="header-anchor" href="#launch-\u6587\u4EF6\u7684\u683C\u5F0F" aria-hidden="true">#</a></h3><ul><li>\u9075\u5FAA xml \u683C\u5F0F\u898F\u7BC4\uFF0C\u662F\u4E00\u7A2E\u6A19\u7C64\u6587\u4EF6\u3002</li><li>\u8B93\u4F7F\u7528\u8005\u80FD\u5920\u4E00\u6B21\u6027\u57F7\u884C\u591A\u500B\u7BC0\u9EDE\u7684\u6587\u4EF6\uFF0C\u8B93\u6A5F\u5668\u4EBA\u7684\u958B\u767C\u8207\u61C9\u7528\u6548\u7387\u8B8A\u70BA\u66F4\u52A0\u65B9\u4FBF\u3002</li><li>\u81EA\u884C\u641C\u5C0B\u6709\u7121\u4E3B\u7BC0\u9EDE\u7684\u5B58\u5728\uFF0C\u82E5\u7121\u5247\u6703\u4EE5\u6A5F\u5668\u4EBA\u672C\u8EAB\u7684 IP \u4F4D\u5740\u958B\u555F\u4E3B\u7BC0\u9EDE\u3002</li></ul><h3 id="launch\u6587\u4EF6\u7684\u5E38\u7528\u6A19\u7C64" tabindex="-1">Launch\u6587\u4EF6\u7684\u5E38\u7528\u6A19\u7C64 <a class="header-anchor" href="#launch\u6587\u4EF6\u7684\u5E38\u7528\u6A19\u7C64" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u6A19\u7C64</th><th style="text-align:left;">\u610F\u7FA9</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&lt;launch&gt;</code></td><td style="text-align:left;">\u6839\u6A19\u7C64 ( root element )</td></tr><tr><td style="text-align:left;"><code>&lt;node&gt;</code></td><td style="text-align:left;">\u9700\u8981\u555F\u52D5\u7684 node \u8207\u76F8\u95DC\u53C3\u6578</td></tr><tr><td style="text-align:left;"><code>&lt;include&gt;</code></td><td style="text-align:left;">\u5305\u542B\u5176\u4ED6\u7684 launch \u6A94\u6848</td></tr><tr><td style="text-align:left;"><code>&lt;param&gt;</code></td><td style="text-align:left;">\u5B9A\u7FA9\u53C3\u6578\u5230 ROS \u7CFB\u7D71\u7684\u53C3\u6578\u670D\u52D9\u5668</td></tr><tr><td style="text-align:left;"><code>&lt;arg&gt;</code></td><td style="text-align:left;">\u5B9A\u7FA9 xml \u6587\u4EF6\u7684\u8B8A\u6578</td></tr><tr><td style="text-align:left;"><code>&lt;remap&gt;</code></td><td style="text-align:left;">\u5B9A\u7FA9 Topic \u7684\u53C3\u6578\u6620\u5C04</td></tr><tr><td style="text-align:left;"><code>&lt;group&gt;</code></td><td style="text-align:left;">\u5B9A\u7FA9\u547D\u540D\u7A7A\u9593</td></tr></tbody></table><h2 id="\u65B0\u589E-launch-\u6587\u4EF6" tabindex="-1">\u65B0\u589E Launch \u6587\u4EF6 <a class="header-anchor" href="#\u65B0\u589E-launch-\u6587\u4EF6" aria-hidden="true">#</a></h2><ol><li><p>\u958B\u555F\u865B\u64EC\u6A5F\u5668\u7684 Ubuntu \u7CFB\u7D71</p></li><li><p>\u958B\u555F Terminal \u8996\u7A97</p></li><li><p><code>roscd &lt;package_name&gt;</code>\uFF1A\u5207\u63DB\u76EE\u9304\u5230\u6307\u5B9A\u7684\u8CC7\u6599\u593E\u8DEF\u5F91</p></li><li><p><code>mkdir launch</code>\uFF1A\u5EFA\u7ACB\u8CC7\u6599\u593E launch</p></li><li><p><code>touch &lt;folder_name&gt;/&lt;file_name&gt;</code>\uFF1A\u5728\u6307\u5B9A\u7684\u8CC7\u6599\u593E\u4E0B\u65B0\u589E\u6307\u5B9A\u540D\u7A31\u7684\u6587\u4EF6\u6A94\u6848</p></li><li><p>\u53EF\u5728\u8DEF\u5F91 <code>&lt;package_name&gt;/launch</code> \u7684\u8CC7\u6599\u593E\u5E95\u4E0B\u627E\u5230\u525B\u525B\u5EFA\u7ACB\u597D\u7684 launch \u6587\u4EF6\u6A94\u6848</p></li><li><p><code>&lt;\u6587\u5B57\u7DE8\u8F2F\u5668&gt; &lt;folder_name&gt;/&lt;file_name&gt;</code>\uFF1A\u7DE8\u8F2F launch \u6587\u4EF6</p></li><li><h4 id="launch-\u6587\u4EF6\u89E3\u6790-arg-tag" tabindex="-1">launch \u6587\u4EF6\u89E3\u6790 - <code>&lt;arg&gt;</code> tag <a class="header-anchor" href="#launch-\u6587\u4EF6\u89E3\u6790-arg-tag" aria-hidden="true">#</a></h4><blockquote><p>\u7BC4\u4F8B\uFF1A<code>&lt;arg name=&quot;ns_1&quot; default=&quot;turtlesim1&quot;/&gt;</code></p><table><thead><tr><th>\u5C6C\u6027</th><th>\u610F\u7FA9</th><th>\u5FC5\u8981\u6027</th></tr></thead><tbody><tr><td>name</td><td>\u53C3\u6578\u7684\u540D\u7A31</td><td>\u5FC5\u8981</td></tr><tr><td>default</td><td>\u53C3\u6578\u7684\u9810\u8A2D\u503C ( \u4E0D\u80FD\u8207\u5C6C\u6027 value \u4E00\u8D77\u4F7F\u7528 )</td><td>\u9078\u9805</td></tr><tr><td>value</td><td>\u53C3\u6578\u7684\u6578\u503C ( \u4E0D\u80FD\u8207\u5C6C\u6027 default \u4E00\u8D77\u4F7F\u7528 )</td><td>\u9078\u9805</td></tr><tr><td>doc</td><td>\u53C3\u6578\u7684\u8A3B\u89E3\uFF0C\u767C\u751F\u932F\u8AA4\u6642\u63D0\u4F9B\u4E4B\u8A0A\u606F</td><td>\u9078\u9805</td></tr></tbody></table><ul><li>\u5F15\u7528\u65B9\u6CD5 \u5728 launch \u6587\u4EF6\u4E2D\u76F4\u63A5\u4EE5 <code>$(arg name)</code> \u65B9\u5F0F\u5F15\u7528\u5373\u53EF\u3002<br> \u7BC4\u4F8B\uFF1A<code>&lt;group ns=&quot;$(arg ns_1)&quot;&gt; .... &lt;/group&gt;</code></li></ul></blockquote></li><li><h4 id="launch-\u6587\u4EF6\u89E3\u6790-group-tag" tabindex="-1">launch \u6587\u4EF6\u89E3\u6790 - <code>&lt;group&gt;</code> tag <a class="header-anchor" href="#launch-\u6587\u4EF6\u89E3\u6790-group-tag" aria-hidden="true">#</a></h4><blockquote><p>\u7BC4\u4F8B\uFF1A<code>&lt;group ns=&quot;turtlesim1&quot;&gt;....&lt;/group&gt;</code></p><table><thead><tr><th>\u5C6C\u6027</th><th>\u610F\u7FA9</th><th>\u5FC5\u8981\u6027</th></tr></thead><tbody><tr><td>ns</td><td>\u6307\u6D3E\u7BC0\u9EDE\u81F3\u7279\u5B9A\u7684\u547D\u540D\u7A7A\u9593</td><td>\u5FC5\u8981</td></tr><tr><td>clear_params</td><td>\u6E05\u9664\u547D\u540D\u7A7A\u9593\u4E2D\u7684\u6240\u6709\u53C3\u6578 ( \u4F7F\u7528\u6642\u8ACB\u5C0F\u5FC3 )</td><td>\u9078\u9805</td></tr></tbody></table><p>\u7BC0\u9EDE\u52D5\u614B\u6D41\u7A0B\u5716\u7684\u5448\u73FE <img src="https://i.imgur.com/ff8f7qK.png" alt=""></p></blockquote></li><li><h4 id="launch-\u6587\u4EF6\u89E3\u6790-node-tag" tabindex="-1">launch \u6587\u4EF6\u89E3\u6790 - <code>&lt;node&gt;</code> tag <a class="header-anchor" href="#launch-\u6587\u4EF6\u89E3\u6790-node-tag" aria-hidden="true">#</a></h4><blockquote><p>\u7BC4\u4F8B\uFF1A<code>&lt;node pkg=&quot;$(arg pkg_name)&quot; name=&quot;sim&quot; type=&quot;turtlesim_node&quot;/&gt;</code></p><table><thead><tr><th>\u5C6C\u6027</th><th>\u610F\u7FA9</th><th>\u5FC5\u8981\u6027</th></tr></thead><tbody><tr><td>pkg</td><td>\u7BC0\u9EDE\u6240\u5728\u7684 package</td><td>\u5FC5\u8981</td></tr><tr><td>type</td><td>\u57F7\u884C\u7684\u7A0B\u5F0F\u78BC\u540D\u7A31</td><td>\u5FC5\u8981</td></tr><tr><td>name</td><td>\u7BC0\u9EDE\u7684\u540D\u7A31</td><td>\u5FC5\u8981</td></tr><tr><td>args</td><td>\u57F7\u884C\u7684\u7A0B\u5F0F\u78BC\u9700\u8981\u7684\u53C3\u6578</td><td>\u9078\u9805</td></tr><tr><td>required</td><td>\u7BC0\u9EDE\u7684\u5FC5\u8981\u6027</td><td>\u9078\u9805</td></tr><tr><td>ns</td><td>\u7BC0\u9EDE\u7684\u547D\u540D\u7A7A\u9593</td><td>\u9078\u9805</td></tr><tr><td>output</td><td>\u7BC0\u9EDE\u7684\u8F38\u51FA ( \u9810\u8A2D* log / screen )</td><td>\u9078\u9805</td></tr></tbody></table><ul><li>log\uFF1A\u986F\u793A\u5728\u5176\u4ED6 log \u6587\u4EF6\u4E2D</li><li>screen\uFF1A\u986F\u793A\u5728 Terminal \u4E0A</li></ul><p><strong>type \u8207 name \u7684\u5DEE\u7570\u6027</strong><img src="https://i.imgur.com/FzvXRHX.png" alt=""></p></blockquote></li><li><h4 id="launch-\u6587\u4EF6\u89E3\u6790-remap-tag" tabindex="-1">launch \u6587\u4EF6\u89E3\u6790 - <code>&lt;remap&gt;</code> tag <a class="header-anchor" href="#launch-\u6587\u4EF6\u89E3\u6790-remap-tag" aria-hidden="true">#</a></h4><blockquote><p>\u7BC4\u4F8B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;group ns=&quot;turtlesim2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;remap from=&quot;turtle1/cmd_vel&quot; to=&quot;/$(arg ns_1)/turtle1/cmd_vel&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;node pkg=&quot;$(arg pkg_name)&quot; name=&quot;sim&quot; type=&quot;turtlesim_node&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/group&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>\u5C6C\u6027</th><th>\u610F\u7FA9</th><th>\u5FC5\u8981\u6027</th></tr></thead><tbody><tr><td>from</td><td>\u88AB\u6620\u5C04\u7684\u4E3B\u984C\u4F86\u6E90</td><td>\u5FC5\u8981</td></tr><tr><td>to</td><td>\u6620\u5C04\u7684\u4E3B\u984C\u540D\u7A31</td><td>\u5FC5\u8981</td></tr></tbody></table><ul><li>from \u8207 to \u7684\u8A73\u7D30\u89E3\u91CB \u76F8\u5C0D\u8DEF\u5F91\u8207\u7D55\u5C0D\u8DEF\u5F91\u7684\u5BEB\u6CD5\u9700\u8981\u7279\u5225\u6CE8\u610F\u3002<br><code>/</code> \u5728\u6700\u524D\u65B9\uFF0C\u8868\u793A\u7D55\u5C0D\u8DEF\u5F91\uFF1B\u82E5\u672A\u52A0\u4E0A <code>/</code> \u5247\u8868\u793A\u76F8\u5C0D\u8DEF\u5F91\u3002</li></ul></blockquote></li><li><p>\u5132\u5B58 launch \u6587\u4EF6</p></li></ol><h2 id="launch-\u6587\u4EF6\u7684\u61C9\u7528" tabindex="-1">launch \u6587\u4EF6\u7684\u61C9\u7528 <a class="header-anchor" href="#launch-\u6587\u4EF6\u7684\u61C9\u7528" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528-launch-\u6587\u4EF6\u4E00\u6B21\u64CD\u63A7\u5169\u500B-turtlesim" tabindex="-1">\u4F7F\u7528 launch \u6587\u4EF6\u4E00\u6B21\u64CD\u63A7\u5169\u500B Turtlesim <a class="header-anchor" href="#\u4F7F\u7528-launch-\u6587\u4EF6\u4E00\u6B21\u64CD\u63A7\u5169\u500B-turtlesim" aria-hidden="true">#</a></h3><ol><li><code>sudo gedit ~/.bashrc</code> \u57F7\u884C launch \u6587\u4EF6 <blockquote><p>\u958B\u59CB\u7DE8\u8F2F Terminal \u7684\u74B0\u5883\u8A2D\u5B9A\u6A94<br> \u78BA\u8A8D\u4E3B\u7BC0\u9EDE\u7684\u4F4D\u5740\u8A2D\u5B9A\u70BA\u672C\u5730\u6A5F\u5668<br> \u5728 <code>script set_ros_master.sh</code> \u5F8C\u65B9<strong>\u4E0D</strong>\u52A0\u4E0A <code>&lt;hostname&gt;</code>\u8868\u793A\u5C07\u4E3B\u7BC0\u9EDE\u8A2D\u5B9A\u70BA\u672C\u5730\u6A5F\u5668</p></blockquote></li><li><code>roslaunch &lt;package_name&gt; teleop_turtlesim.launch</code>\uFF1A\u5169\u500B Turtlesim \u8996\u7A97\u958B\u555F <blockquote><p>launch \u6587\u4EF6\u6703\u81EA\u52D5\u5728\u672C\u5730\u6A5F\u5668\u4E2D\u641C\u5C0B\u662F\u5426\u6709\u4E3B\u7BC0\u9EDE\u7684\u5B58\u5728\uFF0C\u82E5\u662F\u6C92\u6709\u5247\u6703\u81EA\u52D5\u555F\u52D5\u4E3B\u7BC0\u9EDE<br> \u5728 Terminal \u8996\u7A97\u4E2D\u6309\u4E0B\u9375\u76E4\u7684\u65B9\u5411\u9375\u5373\u53EF\u8B93\u5169\u500B Turtlesim \u8996\u7A97\u4E2D\u7684\u5C0F\u70CF\u9F9C\u540C\u6642\u79FB\u52D5</p></blockquote></li><li>\u53D6\u6D88\u57F7\u884C launch \u6587\u4EF6 <blockquote><p>\u6309\u4E0B\u6309\u9375 <code>\u300Cctrl\u300D+\u300Cc\u300D</code> \u53D6\u6D88\u6B63\u5728\u57F7\u884C\u4E2D\u7684\u7A0B\u5F0F</p></blockquote></li></ol><h2 id="ros-parameter-\u4ECB\u7D39" tabindex="-1">ROS parameter \u4ECB\u7D39 <a class="header-anchor" href="#ros-parameter-\u4ECB\u7D39" aria-hidden="true">#</a></h2><ul><li><h4 id="parameter-server-\u7531-master-node-\u4E3B\u7BC0\u9EDE-\u7BA1\u7406\uFF0C\u4F9B\u7BC0\u9EDE\u4F7F\u7528\u8207\u5132\u5B58" tabindex="-1">Parameter Server \u7531 Master node ( \u4E3B\u7BC0\u9EDE ) \u7BA1\u7406\uFF0C\u4F9B\u7BC0\u9EDE\u4F7F\u7528\u8207\u5132\u5B58 <a class="header-anchor" href="#parameter-server-\u7531-master-node-\u4E3B\u7BC0\u9EDE-\u7BA1\u7406\uFF0C\u4F9B\u7BC0\u9EDE\u4F7F\u7528\u8207\u5132\u5B58" aria-hidden="true">#</a></h4><blockquote><p><strong>\u52D5\u614B \u7684 Parameter Server</strong><br> Parameter Server \u5728 Master Node \u57F7\u884C\u6642\uFF0C\u4FBF\u6703\u4E00\u8D77\u57F7\u884C\u3002<br> \u800C\u5728 Master Node \u95DC\u9589\u7684\u6642\u5019\u4E5F\u6703\u4E00\u8D77\u88AB\u95DC\u9589\u3002<br> \u7BC0\u9EDE\u5728\u904B\u884C\u6642\uFF0C\u53EF\u4EE5\u5373\u6642\u6293\u53D6\u5B58\u5728\u65BC Parameter Server \u7684\u53C3\u6578\u4F7F\u7528\uFF0C\u9019\u5C07\u8B93\u6211\u5011\u80FD\u5920\u52D5\u614B\u8ABF\u6574\u6A5F\u5668\u4EBA\u7684\u53C3\u6578\uFF0C\u4E26\u5373\u6642\u5F97\u5230\u6A5F\u5668\u4EBA\u7684\u56DE\u994B\u3002<br> \u4F8B\u5982\u900F\u904E PID \u53C3\u6578\u7684\u8ABF\u6574\uFF0C\u6211\u5011\u80FD\u5920\u5373\u6642\u770B\u51FA PID \u53C3\u6578\u5C0D\u65BC\u6A5F\u5668\u4EBA\u7684\u5F71\u97FF\u3002</p></blockquote></li><li><h4 id="master-node-\u505C\u6B62\u904B\u884C\uFF0Cparameter-server-\u4E5F\u505C\u6B62\u904B\u884C" tabindex="-1">Master node \u505C\u6B62\u904B\u884C\uFF0CParameter Server \u4E5F\u505C\u6B62\u904B\u884C <a class="header-anchor" href="#master-node-\u505C\u6B62\u904B\u884C\uFF0Cparameter-server-\u4E5F\u505C\u6B62\u904B\u884C" aria-hidden="true">#</a></h4><blockquote><p><strong>Parameter Server \u4E26\u4E0D\u6703\u6C38\u4E45\u5B58\u5728</strong><br> \u9019\u6A23\u7684\u60C5\u6CC1\u5C07\u6703\u8B93\u6211\u5011\u8A2D\u5B9A\u597D\u7684 Parameter \u4E5F\u4E00\u8D77\u6D88\u5931\uFF0C\u4F7F\u5F97\u4E0B\u6B21\u518D\u57F7\u884C ROS \u7CFB\u7D71\u6642\u9700\u8981\u518D\u91CD\u65B0\u8ABF\u6574\u53C3\u6578\u3002</p></blockquote></li></ul><h3 id="parameter-\u8207-yaml-\u6A94\u6848" tabindex="-1">Parameter \u8207 yaml \u6A94\u6848 <a class="header-anchor" href="#parameter-\u8207-yaml-\u6A94\u6848" aria-hidden="true">#</a></h3><ul><li>\u900F\u904E yaml \u6A94\u6848\uFF0C\u5C07\u8ABF\u6574\u904E\u5F8C\u7684\u53C3\u6578\u900F\u904E\u7BC0\u9EDE\u5132\u5B58\u3002</li><li>\u5F8C\u7E8C\u4FBF\u53EF\u4EE5\u518D\u4F7F\u7528\u76F8\u540C\u53C3\u6578\uFF0C\u8B93 launch \u6587\u4EF6\u6216\u662F\u7BC0\u9EDE\u76F4\u63A5\u8ABF\u7528\u8ABF\u6574\u904E\u597D\u7684\u53C3\u6578\u7E7C\u7E8C\u4F7F\u7528\u3002</li><li>\u80FD\u5728 launch \u6587\u4EF6\u6A94\u6848\u76F4\u63A5\u8A2D\u5B9A parameter\u3002</li><li>\u4E0D\u540C\u7A0B\u5F0F\u78BC\u64B0\u5BEB\u7684\u7BC0\u9EDE\uFF0C\u8B80\u53D6 yaml \u6A94\u6848\u7684\u53C3\u6578\u5BE6\u4F5C\u65B9\u6CD5\u4E5F\u6709\u4E0D\u540C\u3002</li></ul><h2 id="launch-\u6587\u4EF6\u64B0\u5BEB-parameter" tabindex="-1">launch \u6587\u4EF6\u64B0\u5BEB parameter <a class="header-anchor" href="#launch-\u6587\u4EF6\u64B0\u5BEB-parameter" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528-launch-\u6587\u4EF6-\u6539\u8B8A-turtlesim-\u7684\u80CC\u666F\u984F\u8272" tabindex="-1">\u4F7F\u7528 launch \u6587\u4EF6 \u6539\u8B8A Turtlesim \u7684\u80CC\u666F\u984F\u8272 <a class="header-anchor" href="#\u4F7F\u7528-launch-\u6587\u4EF6-\u6539\u8B8A-turtlesim-\u7684\u80CC\u666F\u984F\u8272" aria-hidden="true">#</a></h3><p><img src="https://i.imgur.com/TYhBMDB.png" alt=""></p><ul><li><strong>private parameter</strong><br> \u5728\u53C3\u6578\u524D\u9762\u52A0\u4E0A<code>~</code> \u4EE3\u8868\u9019\u500B\u53C3\u6578\u662F private parameter\u3002<br> \u8868\u793A\u662F\u7531\u8A72\u7BC0\u9EDE\u767C\u8D77\u4E26\u57F7\u884C\u7684\u53C3\u6578\u3002<br> \u9019\u6A23\u5C31\u4E0D\u9700\u8981\u6BCF\u6B21\u90FD\u5BEB\u51FA\u5B8C\u6574\u7684\u7D55\u5C0D\u8DEF\u5F91\u3002</li></ul><ol><li>\u958B\u555F Ubuntu \u7CFB\u7D71</li><li>\u958B\u555F Terminal \u8996\u7A97</li><li><code>roscd &lt;package_name&gt;/launch</code></li><li><code>sudo &lt;\u6587\u5B57\u7DE8\u8F2F\u5668&gt; teleop_turtlesim.launch</code></li><li>\u7DE8\u8F2F launch \u6587\u4EF6\u6A94\u6848</li><li><h4 id="launch-\u6587\u4EF6\u6A94\u6848-param-tag" tabindex="-1">launch \u6587\u4EF6\u6A94\u6848 - <code>&lt;param&gt;</code> tag <a class="header-anchor" href="#launch-\u6587\u4EF6\u6A94\u6848-param-tag" aria-hidden="true">#</a></h4><blockquote><p>\u7BC4\u4F8B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;node pkg=&quot;$(arg pkg_name)&quot; name=&quot;sim&quot; type=&quot;turtlesim_node&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;param name=&quot;background_b&quot; type=&quot;int&quot; value=&quot;0&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/node&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>\u5C6C\u6027</th><th>\u610F\u7FA9</th><th>\u5FC5\u8981\u6027</th></tr></thead><tbody><tr><td>name</td><td>ROS \u7CFB\u7D71\u53C3\u6578\u7684\u540D\u7A31</td><td>\u5FC5\u8981</td></tr><tr><td>type</td><td>ROS \u7CFB\u7D71\u53C3\u6578\u7684\u8CC7\u6599\u578B\u614B ( str/int/double/bool/yaml )</td><td>\u9078\u9805</td></tr><tr><td>value</td><td>\u53C3\u6578\u7684\u6578\u503C</td><td>\u9078\u9805</td></tr></tbody></table><ul><li>Private parameter \u82E5\u662F\u5C07 Parameter \u5305\u542B\u5728 <code>&lt;node&gt;</code> \u6A19\u7C64\uFF0C\u5247\u6703\u8B8A\u6210 private parameter\u3002 \u8868\u793A\u9019\u500B\u53C3\u6578\u7684\u547D\u540D\u898F\u5247\uFF0C\u5C07\u6703\u7531 Node \u7684\u540D\u7A31\u6C7A\u5B9A\u3002</li></ul><p><strong>Parameter VS Private parameter</strong><img src="https://i.imgur.com/UE7tQmx.png" alt=""></p></blockquote></li><li>\u5132\u5B58 launch \u6587\u4EF6\u6A94\u6848</li><li>\u57F7\u884C launch \u6587\u4EF6\u6A94\u6848</li><li><code>roslaunch &lt;package_name&gt; teleop_turtlesim.launch</code><blockquote><p>\u5169\u500B Turtlesim \u8996\u7A97\u958B\u555F\uFF0C\u4E14\u80CC\u666F\u984F\u8272\u767C\u751F\u8B8A\u5316\u3002</p></blockquote></li><li>\u958B\u555F\u65B0\u7684 Terminal \u8996\u7A97\u5206\u9801</li><li><code>rosparam list</code> \u67E5\u8A62\u53EF\u4F7F\u7528\u7684\u53C3\u6578</li><li><code>rosparam set /turtlesim1/background_b -- 255</code><blockquote><p>\u4F7F\u7528 rosparam \u8ABF\u6574\u53C3\u6578 \u8A2D\u5B9A\u53C3\u6578 background_b</p><ul><li>\u80CC\u666F\u984F\u8272\u5C1A\u672A\u767C\u751F\u8B8A\u5316 \u56E0\u70BA\u7BC0\u9EDE Turtlesim \u4E26\u6C92\u6709\u53C3\u6578\u5373\u6642\u66F4\u65B0\u529F\u80FD</li></ul></blockquote></li><li><code>rosservice list</code> \u67E5\u8A62\u53EF\u4F7F\u7528\u7684\u670D\u52D9</li><li><code>rosservice call /turtlesim1_reset</code>\uFF1A\u4F7F\u7528 rosservice \u91CD\u65B0\u8F09\u5165\u7BC0\u9EDE Turtlesim \u7684\u76F8\u95DC\u53C3\u6578 <blockquote><p>\u7BC0\u9EDE Turtlesim1 \u7684\u80CC\u666F\u984F\u8272\u767C\u751F\u8B8A\u5316</p></blockquote></li><li>\u95DC\u9589\u6240\u6709\u57F7\u884C\u4E2D\u7684\u7BC0\u9EDE</li></ol><h2 id="launch-\u6587\u4EF6\u8F09\u5165-yaml-\u683C\u5F0F\u6A94\u6848\u53C3\u6578" tabindex="-1">launch \u6587\u4EF6\u8F09\u5165 yaml \u683C\u5F0F\u6A94\u6848\u53C3\u6578 <a class="header-anchor" href="#launch-\u6587\u4EF6\u8F09\u5165-yaml-\u683C\u5F0F\u6A94\u6848\u53C3\u6578" aria-hidden="true">#</a></h2><h3 id="\u65B0\u589E-yaml-\u683C\u5F0F\u6A94\u6848" tabindex="-1">\u65B0\u589E yaml \u683C\u5F0F\u6A94\u6848 <a class="header-anchor" href="#\u65B0\u589E-yaml-\u683C\u5F0F\u6A94\u6848" aria-hidden="true">#</a></h3><ol><li><code>roscd &lt;package_name&gt;</code>\uFF1A\u5207\u63DB\u76EE\u9304</li><li><code>mkdir param</code>\uFF1A\u65B0\u589E\u8CC7\u6599\u593E</li><li><code>touch param/turtlesim_param.yaml</code>\uFF1A\u65B0\u589E\u6A94\u6848 turtlesim_param.yaml</li><li><code>&lt;\u6587\u5B57\u7DE8\u8F2F\u5668&gt; param/turtlesim_param.yaml</code>\uFF1A\u7DE8\u8F2F yaml \u683C\u5F0F\u6A94\u6848 <blockquote><p><strong>\u7B2C\u4E00\u7A2E</strong>\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">turtlesim1:</span></span>
<span class="line"><span style="color:#A6ACCD;">    sim:</span></span>
<span class="line"><span style="color:#A6ACCD;">        background_b: 255</span></span>
<span class="line"><span style="color:#A6ACCD;">        background_g: 255</span></span>
<span class="line"><span style="color:#A6ACCD;">        background_r: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4EE5\u76F8\u5C0D\u8DEF\u5F91\u65B9\u5F0F\u64B0\u5BEB\uFF0C\u9069\u5408\u540C\u4E00\u500B\u7BC0\u9EDE\u4E0B\u7684\u6240\u6709\u53C3\u6578\u64B0\u5BEB\uFF0C\u958B\u982D\u7684\u7A7A\u683C\u4EE54\u500B\u7A7A\u767D\u6309\u9375\u64B0\u5BEB\u3002</p><p><strong>\u7B2C\u4E8C\u7A2E</strong>\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/turtlesim/sim/background_b: 255</span></span>
<span class="line"><span style="color:#A6ACCD;">/turtlesim/sim/background_g: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">/turtlesim/sim/background_r: 255</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4EE5\u7D55\u5C0D\u8DEF\u5F91\u65B9\u5F0F\u64B0\u5BEB\uFF0C\u9069\u5408\u4E0D\u540C\u7BC0\u9EDE\u4E0B\u7684\u53C3\u6578\u64B0\u5BEB\u3002</p></blockquote></li><li><code>roscd &lt;package_name&gt;/launch</code></li><li><code>sudo &lt;\u6587\u5B57\u7DE8\u8F2F\u5668&gt; teleop_turtlesim.launch</code>\uFF1A\u7DE8\u8F2F launch \u683C\u5F0F\u6A94\u6848 <blockquote><p><img src="https://i.imgur.com/4CBuZsB.png" alt=""> launch \u6587\u4EF6\u4E2D\u53EF\u4EE5\u4F7F\u7528\u66FF\u63DB\u53C3\u6578 <code>$(find package)</code> \u5354\u52A9\u6211\u5011\u641C\u5C0B package \u7684\u8DEF\u5F91\u3002</p></blockquote></li><li><h4 id="launch-\u6587\u4EF6\u6A94\u6848-rosparam-tag" tabindex="-1">launch \u6587\u4EF6\u6A94\u6848 - <code>&lt;rosparam&gt;</code> tag <a class="header-anchor" href="#launch-\u6587\u4EF6\u6A94\u6848-rosparam-tag" aria-hidden="true">#</a></h4><blockquote><p>\u7BC4\u4F8B\uFF1A<code>&lt;rosparam command=&quot;load&quot; file=&quot;$(find practice)/param/turtlesim_param.yaml&quot;/&gt;</code></p><table><thead><tr><th>\u5C6C\u6027</th><th>\u610F\u7FA9</th><th>\u5FC5\u8981\u6027</th></tr></thead><tbody><tr><td>command</td><td>\u7B49\u540C\u65BC rosparam \u6307\u4EE4 ( \u9810\u8A2D* load/dump/delete )</td><td>\u9078\u9805</td></tr><tr><td>file</td><td>ROS \u7CFB\u7D71\u53C3\u6578\u7684\u6A94\u6848\u8DEF\u5F91</td><td>\u9078\u9805</td></tr></tbody></table></blockquote></li><li>\u5132\u5B58 launch \u6587\u4EF6\u6A94\u6848</li><li><code>roslaunch &lt;package_name&gt; teleop_turtlesim.launch</code> \u555F\u52D5 launch \u6587\u4EF6 <blockquote><p>\u5169\u500B Turtlesim \u8996\u7A97\u958B\u555F\u4E14\u80CC\u666F\u984F\u8272\u767C\u751F\u8B8A\u5316</p></blockquote></li><li>\u95DC\u9589\u6240\u6709\u57F7\u884C\u4E2D\u7684\u7BC0\u9EDE</li></ol>`,24),d=[n];function s(o,c,i,u,p,h){return e(),a("div",null,d)}const b=t(r,[["render",s]]);export{g as __pageData,b as default};