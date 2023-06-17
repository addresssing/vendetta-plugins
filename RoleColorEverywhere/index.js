(function(T,m,I,d,_,S,s,g,L,v){"use strict";const{Text:G}=_.General,U=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:V}}=d.findByProps("colors","meta"),k=d.findByStoreName("UserStore"),$=d.findByStoreName("RelationshipStore"),F=d.findByStoreName("GuildMemberStore"),x=d.findByProps("TYPING_WRAPPER_HEIGHT");function j(){return I.after("default",x,function(e,r){let[{channel:a}]=e;if(!r||s.storage.hideTyping)return;const t=r.props?.children,l=V(U.theme,S.semanticColors.HEADER_SECONDARY),u=I.after("type",t,function(h,p){m.React.useEffect(function(){return function(){u()}},[]);const i=p?.props?.children?.[0]?.props?.children?.[1]?.props;if(!i||!i.children||i.children==="Several people are typing...")return;const n=x.useTypingUserIds(a.id).map(function(o){const c=F.getMember(a.guild_id,o),b=k.getUser(o),y=c?.nick||$.getNickname(o)||b.globalName||b.username,R=c?.colorString||l;return{displayName:y,displayColor:R}});function f(o){return m.React.createElement(G,{style:{color:o.displayColor,fontFamily:m.constants.Fonts.DISPLAY_BOLD}},o.displayName)}!n||n.length<1||(i.children=n.length===1?[f(n[0])," is typing..."]:[...n.slice(0,n.length-1).flatMap(function(o,c){return[f(o),c<n.length-2?", ":" and "]}),f(n[n.length-1])," are typing..."])})})}const H=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:Y}}=d.findByProps("colors","meta"),W=d.findByName("RowManager"),O=d.findByStoreName("GuildMemberStore");d.findByStoreName("SelectedChannelStore");const K=d.findByStoreName("ChannelStore");function C(e,r,a,t){if(e)return t?t.push(e):t=[e],Array.isArray(e.content)?e.content.forEach(function(l,u){return e.content[u]=C(l,r,a,t)}):e.items?e.items.forEach(function(l,u){return e.items[u]=C(l,r,a,t)}):Array.isArray(e)&&e.forEach(function(l,u){return e[u]=C(l,r,a,t)}),e.type&&r.forEach(function(l){e=l(e,a,t)||e}),e}function X(e,r,a){const t=function(i){return i.match(/\w\w/g).map(function(n){return parseInt(n,16)})},l=function(i){return"#"+i.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},u=t(e),h=t(r),p=u.map(function(i,n){return Math.round(i+(h[n]-i)*a)});return l(p)}function q(){return I.after("generate",W.prototype,function(e,r){let[a]=e,{message:t}=r;if((!s.storage.chatInterpolation||s.storage.chatInterpolation<=0)&&s.storage.noMention||a.rowType!=1||!t?.content)return;const l=t.channelId,u=K.getChannel(l);if(!u?.guild_id)return;const h=function(f){if(f.type!="mention"||!f.userId)return;const o=O.getMember(u.guild_id,f.userId)?.colorString;if(!o)return;const c=parseInt(o.slice(1),16);return{...f,roleColor:c,color:c,colorString:o}},p=Y(H.theme,S.semanticColors.TEXT_NORMAL),i=function(f,o,c){let[b]=o,y=c?.map(function(M){return M.type});if(y?.includes("mention")||y?.includes("channelMention")||y?.includes("link")||f.type!="text")return;const R=O.getMember(t.guildId,b);if(!(!R||!R.colorString))return{content:[f],target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:m.ReactNative.processColor(X(p,R.colorString,s.storage.chatInterpolation/100)),messageChannelId:"0"},medium:!0},type:"link"}};let n=[];s.storage.chatInterpolation>0&&n.push(i),s.storage.noMention||n.push(h),C({content:t.content},n,[t.authorId]),t.referencedMessage?.message?.content&&C({content:t.referencedMessage.message.content},n,[t.referencedMessage.message.authorId])})}function z(){return I.after("default",d.findByName("VoiceUserConnected",!1),function(e,r){let[a]=e;if(s.storage.noVoice||!a?.member?.colorString)return;const t=I.after("render",r.type.prototype,function(l,u){t();let h=u.props?.children?.[1]?.props;h&&(h.style.color=a.member.colorString)})})}function B(){return B=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},B.apply(this,arguments)}function Q(){return B.apply(this,arguments)}const{StyleSheet:J,PanResponder:Z}=m.ReactNative,w=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:P}}=d.findByProps("colors","meta"),{View:D}=_.General,{useState:ee,useRef:te}=m.React,A={sliderOff:P(w.theme,S.semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),sliderOn:P(w.theme,S.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),thumb:P(w.theme,S.semanticColors.MENTION_FOREGROUND)},ne=function(e){let{onSlide:r,value:a}=e;const t=a||0,[l,u]=ee(0),h=te(null);function p(o){h.current&&h.current.measure(function(c,b,y,R,M,fe){let ue=(o-M)/(y-M)*100;const de=Math.min(Math.max(0,ue),100);r&&r(de)})}const i=m.React.useRef(Z.create({onStartShouldSetPanResponder:function(o,c){return!0},onStartShouldSetPanResponderCapture:function(o,c){return!0},onMoveShouldSetPanResponder:function(o,c){return!0},onMoveShouldSetPanResponderCapture:function(o,c){return!0},onPanResponderGrant:function(o,c){p(c.x0)},onPanResponderMove:function(o,c){p(c.moveX)},onPanResponderTerminationRequest:function(o,c){return!0},onPanResponderRelease:function(o,c){},onPanResponderTerminate:function(o,c){},onShouldBlockNativeResponder:function(o,c){return!0}})).current;function n(o){u(o.nativeEvent.layout.width)}const f=J.create({container:{marginLeft:"5%",width:"90%",height:20,borderRadius:25,backgroundColor:A.sliderOff,marginBottom:25},slid:{width:t+"%",height:"100%",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderRadius:t===100?25:0,backgroundColor:A.sliderOn,justifyContent:"center"},thumb:{height:"150%",aspectRatio:1,alignSelf:"flex-end",right:-(l/2),borderRadius:100,backgroundColor:A.thumb}});return m.React.createElement(D,Q({style:f.container},i.panHandlers,{ref:h}),m.React.createElement(D,{style:f.slid},m.React.createElement(D,{style:f.thumb,onLayout:n})))},{Text:oe}=_.General,re=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:ae}}=d.findByProps("colors","meta"),E={Typing:v.getAssetIDByName("ic_messages"),Mention:v.getAssetIDByName("ic_mention_user"),Text:v.getAssetIDByName("ic_add_text"),Voice:v.getAssetIDByName("ic_voice_channel_24px")},ie={text:ae(re.theme,S.semanticColors.TEXT_NORMAL)};function ce(e,r,a){const t=function(i){return i.match(/\w\w/g).map(function(n){return parseInt(n,16)})},l=function(i){return"#"+i.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},u=t(e),h=t(r),p=u.map(function(i,n){return Math.round(i+(h[n]-i)*a)});return l(p)}function se(){return L.useProxy(s.storage),s.storage.chatInterpolation??=0,React.createElement(m.ReactNative.ScrollView,{style:{flex:1}},React.createElement(g.FormSection,{title:"Where to show the top role color?",titleStyleType:"no_border"},React.createElement(g.FormSwitchRow,{label:"Show in typing",subLabel:"Display the top role color in the typing bar.",leading:React.createElement(g.FormIcon,{source:E.Typing}),value:!s.storage.hideTyping,onValueChange:function(e){return s.storage.hideTyping=!e}}),React.createElement(g.FormSwitchRow,{label:"Show in mentions",subLabel:"Display the top role color in mentions in the chat.",leading:React.createElement(g.FormIcon,{source:E.Mention}),value:!s.storage.noMention,onValueChange:function(e){return s.storage.noMention=!e}}),React.createElement(g.FormSwitchRow,{label:"Show in chat text",subLabel:"Display the top role color in the chat text... Why would you want this?",leading:React.createElement(g.FormIcon,{source:E.Text}),value:s.storage.chatInterpolation>0,onValueChange:function(e){s.storage.chatInterpolation=e?100:0}}),React.createElement(oe,{style:{marginLeft:"5%",color:ce(ie.text,"#ff0000",s.storage.chatInterpolation/100),fontFamily:m.constants.Fonts.DISPLAY_MEDIUM,fontSize:16,marginBottom:5,marginTop:-5}},"Color interpolation (for chat text):"),React.createElement(ne,{onSlide:function(e){s.storage.chatInterpolation=e},value:s.storage.chatInterpolation,style:{marginBottom:0}}),React.createElement(g.FormSwitchRow,{label:"Show in voice channel member list",subLabel:"Display the top role color in the voice channel member list.",leading:React.createElement(g.FormIcon,{source:E.Voice}),value:!s.storage.noVoice,onValueChange:function(e){s.storage.noVoice=!e}})))}let N=[];var le={onLoad:function(){N.push(j()),N.push(q()),N.push(z())},onUnload:function(){for(const e of N)e()},settings:se};return T.default=le,Object.defineProperty(T,"__esModule",{value:!0}),T})({},vendetta.metro.common,vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.ui,vendetta.plugin,vendetta.ui.components.Forms,vendetta.storage,vendetta.ui.assets);
