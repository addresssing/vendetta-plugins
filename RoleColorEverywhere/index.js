(function(R,d,C,l,I,y,u,p,G,N){"use strict";const{Text:L}=I.General,U=l.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:$}}=l.findByProps("colors","meta"),k=l.findByStoreName("UserStore"),F=l.findByStoreName("RelationshipStore"),j=l.findByStoreName("GuildMemberStore"),D=l.findByProps("TYPING_WRAPPER_HEIGHT");function H(){return C.after("default",D,function(e,i){let[{channel:t}]=e;if(!i||u.storage.hideTyping)return;const a=i.props?.children,c=$(U.theme,y.semanticColors.HEADER_SECONDARY),m=C.after("type",a,function(g,h){d.React.useEffect(function(){return function(){m()}},[]);const r=h?.props?.children?.[0]?.props?.children?.[1]?.props;if(!r||!r.children||r.children==="Several people are typing...")return;const n=D.useTypingUserIds(t.id).map(function(o){const s=j.getMember(t.guild_id,o),P=k.getUser(o),w=s?.nick||F.getNickname(o)||P.globalName||P.username,A=s?.colorString||c;return{displayName:w,displayColor:A}});function f(o){return d.React.createElement(L,{style:{color:o.displayColor,fontFamily:d.constants.Fonts.DISPLAY_BOLD}},o.displayName)}!n||n.length<1||(r.children=n.length===1?[f(n[0])," is typing..."]:[...n.slice(0,n.length-1).flatMap(function(o,s){return[f(o),s<n.length-2?", ":" and "]}),f(n[n.length-1])," are typing..."])})})}const V=l.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:Y}}=l.findByProps("colors","meta"),{DCDChatManager:W}=d.ReactNative.NativeModules,O=l.findByStoreName("GuildMemberStore"),K=l.findByStoreName("SelectedChannelStore"),X=l.findByStoreName("ChannelStore");function S(e,i,t){if(e)return Array.isArray(e.content)?e.content.forEach(function(a,c){return e.content[c]=S(a,i,t)}):e.items?e.items.forEach(function(a,c){return e.items[c]=S(a,i,t)}):Array.isArray(e)&&e.forEach(function(a,c){return e[c]=S(a,i,t)}),e.type&&(e=i(e,t)||e),e}function J(e,i,t){const a=function(r){return r.match(/\w\w/g).map(function(n){return parseInt(n,16)})},c=function(r){return"#"+r.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},m=a(e),g=a(i),h=m.map(function(r,n){return Math.round(r+(g[n]-r)*t)});return c(h)}function q(){return C.before("updateRows",W,function(e){let i=JSON.parse(e[1]);i.forEach(function(t){if(t.type!=1||!t.message?.content)return;const a=K.getChannelId();if(!a)return;const c=X.getChannel(a);if(!c.guild_id)return;const m=function(r){if(r.type!="mention"||!r.userId)return;const n=O.getMember(c.guild_id,r.userId)?.colorString;if(!n)return;const f=parseInt(n.slice(1),16);return{...r,roleColor:f,color:f,colorString:n}},g=Y(V.theme,y.semanticColors.TEXT_NORMAL),h=function(r,n){let[f]=n;if(r.type!="text")return;const o=O.getMember(t.message.guildId,f);if(!(!o||!o.colorString))return{content:[r],target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:d.ReactNative.processColor(J(o.colorString,g,u.storage.chatInterpolation/100)),messageChannelId:"0"},medium:!0},type:"link"}};u.storage.chatInterpolation>0&&(S({content:t.message.content},h,[t.message.authorId]),t.message.referencedMessage?.message?.content&&S({content:t.message.referencedMessage.message.content},h,[t.message.referencedMessage.message.authorId])),u.storage.noMention||(S({content:t.message.content},m,[]),t.message.referencedMessage?.message?.content&&S({content:t.message.referencedMessage.message.content},m,[]))}),e[1]=JSON.stringify(i)})}function v(){return v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function z(){return v.apply(this,arguments)}const{StyleSheet:Q,PanResponder:Z}=d.ReactNative,E=l.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:b}}=l.findByProps("colors","meta"),{View:M}=I.General,{useState:ee,useRef:te}=d.React,T={sliderOff:b(E.theme,y.semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),sliderOn:b(E.theme,y.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),thumb:b(E.theme,y.semanticColors.MENTION_FOREGROUND)},ne=function(e){let{onSlide:i,value:t}=e;const a=t||0,[c,m]=ee(0),g=te(null);function h(o){g.current&&g.current.measure(function(s,P,w,A,x,fe){let ue=(o-x)/(w-x)*100;const de=Math.min(Math.max(0,ue),100);i&&i(de)})}const r=d.React.useRef(Z.create({onStartShouldSetPanResponder:function(o,s){return!0},onStartShouldSetPanResponderCapture:function(o,s){return!0},onMoveShouldSetPanResponder:function(o,s){return!0},onMoveShouldSetPanResponderCapture:function(o,s){return!0},onPanResponderGrant:function(o,s){h(s.x0)},onPanResponderMove:function(o,s){h(s.moveX)},onPanResponderTerminationRequest:function(o,s){return!0},onPanResponderRelease:function(o,s){},onPanResponderTerminate:function(o,s){},onShouldBlockNativeResponder:function(o,s){return!0}})).current;function n(o){m(o.nativeEvent.layout.width)}const f=Q.create({container:{marginLeft:"5%",width:"90%",height:20,borderRadius:25,backgroundColor:T.sliderOff,marginBottom:25},slid:{width:a+"%",height:"100%",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderRadius:a===100?25:0,backgroundColor:T.sliderOn,justifyContent:"center"},thumb:{height:"150%",aspectRatio:1,alignSelf:"flex-end",right:-(c/2),borderRadius:100,backgroundColor:T.thumb}});return d.React.createElement(M,z({style:f.container},r.panHandlers,{ref:g}),d.React.createElement(M,{style:f.slid},d.React.createElement(M,{style:f.thumb,onLayout:n})))},{Text:re}=I.General,oe=l.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:ae}}=l.findByProps("colors","meta"),_={Typing:N.getAssetIDByName("ic_messages"),Mention:N.getAssetIDByName("ic_mention_user"),Text:N.getAssetIDByName("ic_add_text")},ie={text:ae(oe.theme,y.semanticColors.TEXT_NORMAL)};function se(e,i,t){const a=function(r){return r.match(/\w\w/g).map(function(n){return parseInt(n,16)})},c=function(r){return"#"+r.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},m=a(e),g=a(i),h=m.map(function(r,n){return Math.round(r+(g[n]-r)*t)});return c(h)}function ce(){return G.useProxy(u.storage),u.storage.chatInterpolation??=0,React.createElement(d.ReactNative.ScrollView,{style:{flex:1}},React.createElement(p.FormSection,{title:"Where to show the top role color?",titleStyleType:"no_border"},React.createElement(p.FormSwitchRow,{label:"Show in typing",subLabel:"Display the top role color in the typing bar.",leading:React.createElement(p.FormIcon,{source:_.Typing}),value:!u.storage.hideTyping,onValueChange:function(e){return u.storage.hideTyping=!e}}),React.createElement(p.FormSwitchRow,{label:"Show in mentions",subLabel:"Display the top role color in mentions in the chat.",leading:React.createElement(p.FormIcon,{source:_.Mention}),value:!u.storage.noMention,onValueChange:function(e){return u.storage.noMention=!e}}),React.createElement(p.FormSwitchRow,{label:"Show in chat text",subLabel:"Display the top role color in the chat text... Why would you want this?",leading:React.createElement(p.FormIcon,{source:_.Typing}),value:u.storage.chatInterpolation>0,onValueChange:function(e){u.storage.chatInterpolation=e?100:0}}),React.createElement(re,{style:{marginLeft:"5%",color:se(ie.text,"#ff0000",u.storage.chatInterpolation/100),fontFamily:d.constants.Fonts.DISPLAY_MEDIUM,fontSize:16,marginBottom:5,marginTop:-5}},"Color interpolation (for chat text):"),React.createElement(ne,{onSlide:function(e){u.storage.chatInterpolation=e},value:u.storage.chatInterpolation})))}let B=[];var le={onLoad:function(){B.push(H()),B.push(q())},onUnload:function(){for(const e of B)e()},settings:ce};return R.default=le,Object.defineProperty(R,"__esModule",{value:!0}),R})({},vendetta.metro.common,vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.ui,vendetta.plugin,vendetta.ui.components.Forms,vendetta.storage,vendetta.ui.assets);
