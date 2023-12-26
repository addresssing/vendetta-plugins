(function(E,p,g,d,v,R,c,L,m,G,I){"use strict";const{Text:V}=v.General,$=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:U}}=d.findByProps("colors","meta"),k=d.findByStoreName("UserStore"),F=d.findByStoreName("RelationshipStore"),H=d.findByStoreName("GuildMemberStore"),D=d.findByProps("TYPING_WRAPPER_HEIGHT");function j(){return g.after("default",D,function(e,t){let[{channel:o}]=e;if(!t||c.storage.hideTyping)return;const r=t.props?.children,s=U($.theme,R.semanticColors.HEADER_SECONDARY),f=g.after("type",r,function(h,l){p.React.useEffect(function(){return function(){f()}},[]);const a=l?.props?.children?.[0]?.props?.children?.[1]?.props;if(!a||!a.children||a.children==="Several people are typing...")return;const n=D.useTypingUserIds(o.id).map(function(i){const u=H.getMember(o.guild_id,i),C=k.getUser(i),_=u?.nick||F.getNickname(i)||C.globalName||C.username,A=u?.colorString||s;return{displayName:_,displayColor:A}});function y(i){return p.React.createElement(V,{style:{color:i.displayColor,fontFamily:p.constants.Fonts.DISPLAY_BOLD}},i.displayName)}!n||n.length<1||(a.children=n.length===1?[y(n[0])," is typing..."]:[...n.slice(0,n.length-1).flatMap(function(i,u){return[y(i),u<n.length-2?", ":" and "]}),y(n[n.length-1])," are typing..."])})})}const Y=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:W}}=d.findByProps("colors","meta"),K=d.findByName("RowManager"),P=d.findByStoreName("GuildMemberStore"),X=d.findByStoreName("ChannelStore");function S(e,t,o,r){if(e)return r=Object.assign([],r),r?r.push(e):r=[e],Array.isArray(e.content)?e.content.forEach(function(s,f){return e.content[f]=S(s,t,o,r)}):e.items?e.items.forEach(function(s,f){return e.items[f]=S(s,t,o,r)}):Array.isArray(e)&&e.forEach(function(s,f){return e[f]=S(s,t,o,r)}),e.type&&t.forEach(function(s){e=s(e,o,r)||e}),e}function z(e,t,o){const r=function(a){return a.match(/\w\w/g).map(function(n){return parseInt(n,16)})},s=function(a){return"#"+a.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},f=r(e),h=r(t),l=f.map(function(a,n){return Math.round(a+(h[n]-a)*o)});return s(l)}function O(e){const{message:t}=e;if(!t||(!c.storage.chatInterpolation||c.storage.chatInterpolation<=0)&&c.storage.noMention)return;const o=X.getChannel(t.channelId);if(!o?.guild_id)return;const r=function(l){if(l.type!="mention"||!l.userId)return;const a=P.getMember(o.guild_id,l.userId)?.colorString;if(!a)return;const n=parseInt(a.slice(1),16);return{...l,roleColor:n,color:n,colorString:a}},s=W(Y.theme,R.semanticColors.TEXT_NORMAL),f=function(l,a,n){let[y]=a,i=n?.map(function(C){return C.type});if(i?.includes("mention")||i?.includes("channelMention")||i?.includes("roleMention")||i?.includes("commandMention")||i?.includes("link")||l.type!="text")return;const u=P.getMember(t.guildId,y);if(!(!u||!u.colorString))return{content:[l],target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:p.ReactNative.processColor(z(s,u.colorString,c.storage.chatInterpolation/100)),messageChannelId:"0"},medium:!0},type:"link"}};let h=[];c.storage.chatInterpolation>0&&h.push(f),c.storage.noMention||(h.push(r),t.shouldShowRoleOnName=!0,t.referencedMessage?.message&&(t.referencedMessage.message.shouldShowRoleOnName=!0)),t.content&&S({content:t.content},h,[t.authorId]),t.embeds&&t.embeds.forEach(function(l){return S({content:l.description},h,[t.authorId])}),t.referencedMessage?.message?.content&&S({content:t.referencedMessage.message.content},h,[t.referencedMessage.message.authorId])}const{NativeModules:J}=p.ReactNative,{DCDChatManager:q,InfoDictionaryManager:Q,RTNClientInfoManager:Z}=J,ee=Q??Z;function te(){return parseInt(ee.Build)>200013?g.before("updateRows",q,function(e){var t=JSON.parse(e[1]);for(const o of t)O(o);e[1]=JSON.stringify(t)}):g.after("generate",K.prototype,function(e,t){O(t)})}const ne=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:oe}}=d.findByProps("colors","meta");function re(){return g.after("default",d.findByName("VoiceUserConnected",!1),function(e,t){let[o]=e;if(!c.storage.noVoice)try{let r=t.type.prototype?["render",t.type.prototype]:["type",t.type];const s=g.after(r[0],r[1],function(f,h){s();let l=h.props?.children?.[1]?.props;l&&(l.style.color=o?.member?.colorString||oe(ne.theme,R.semanticColors.CHANNELS_DEFAULT))})}catch{}})}const{View:ae}=p.ReactNative,ie=d.findByStoreName("GuildStore");function ce(){return g.after("render",ae,function(e,t){if(c.storage.noRole)return;const o=L.findInReactTree(t,function(s){return s?.props?.roleId});if(!o||isNaN(o.props.roleId)||o.props.excludedApplications||o.props.hasOwnProperty("displayRoleIcon")||o.props.hasOwnProperty("searchable"))return;let r={type:Object.assign({},o.type)};g.after("type",r.type,function(s,f){let h={type:Object.assign({},f.props.children[1].type)};g.after("render",h.type,function(l,a){let n=ie.getGuild(o.props.guildId)?.roles?.[o.props.roleId];n?.colorString&&a.props.style.push({color:n.colorString})}),f.props.children[1].type=h.type}),o.type=r.type})}const{StyleSheet:se,PanResponder:le}=p.ReactNative,M=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:w}}=d.findByProps("colors","meta"),{View:T}=v.General,{useState:ue,useRef:de}=p.React,B={sliderOff:w(M.theme,R.semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),sliderOn:w(M.theme,R.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),thumb:w(M.theme,R.semanticColors.MENTION_FOREGROUND)},fe=function(e){let{onSlide:t,value:o}=e;const r=o||0,[s,f]=ue(0),h=de(null);function l(i){h.current&&h.current.measure(function(u,C,_,A,x,Ce){let Ne=(i-x)/(_-x)*100;const be=Math.min(Math.max(0,Ne),100);t&&t(be)})}const a=p.React.useRef(le.create({onStartShouldSetPanResponder:function(i,u){return!0},onStartShouldSetPanResponderCapture:function(i,u){return!0},onMoveShouldSetPanResponder:function(i,u){return!0},onMoveShouldSetPanResponderCapture:function(i,u){return!0},onPanResponderGrant:function(i,u){l(u.x0)},onPanResponderMove:function(i,u){l(u.moveX)},onPanResponderTerminationRequest:function(i,u){return!0},onPanResponderRelease:function(i,u){},onPanResponderTerminate:function(i,u){},onShouldBlockNativeResponder:function(i,u){return!0}})).current;function n(i){f(i.nativeEvent.layout.width)}const y=se.create({container:{marginLeft:"5%",width:"90%",height:20,borderRadius:25,backgroundColor:B.sliderOff,marginBottom:25},slid:{width:r+"%",height:"100%",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderRadius:r===100?25:0,backgroundColor:B.sliderOn,justifyContent:"center"},thumb:{height:"150%",aspectRatio:1,alignSelf:"flex-end",right:-(s/2),borderRadius:100,backgroundColor:B.thumb}});return p.React.createElement(T,{style:y.container,...a.panHandlers,ref:h},p.React.createElement(T,{style:y.slid},p.React.createElement(T,{style:y.thumb,onLayout:n})))},{Text:he,View:pe}=v.General,me=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:ge}}=d.findByProps("colors","meta"),N={Typing:I.getAssetIDByName("ic_messages"),Mention:I.getAssetIDByName("ic_mention_user"),Text:I.getAssetIDByName("ic_add_text"),Voice:I.getAssetIDByName("ic_voice_channel_24px"),Role:I.getAssetIDByName("ic_person_shield")},ye={text:ge(me.theme,R.semanticColors.TEXT_NORMAL)};function Re(e,t,o){const r=function(a){return a.match(/\w\w/g).map(function(n){return parseInt(n,16)})},s=function(a){return"#"+a.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},f=r(e),h=r(t),l=f.map(function(a,n){return Math.round(a+(h[n]-a)*o)});return s(l)}function Se(){return G.useProxy(c.storage),c.storage.chatInterpolation??=0,React.createElement(p.ReactNative.ScrollView,{style:{flex:1}},React.createElement(m.FormSection,{title:"Where to show the top role color?",titleStyleType:"no_border"},React.createElement(m.FormSwitchRow,{label:"Show in typing",subLabel:"Display the top role color in the typing bar.",leading:React.createElement(m.FormIcon,{source:N.Typing}),value:!c.storage.hideTyping,onValueChange:function(e){return c.storage.hideTyping=!e}}),React.createElement(m.FormSwitchRow,{label:"Show in mentions",subLabel:"Display the top role color in mentions in the chat.",leading:React.createElement(m.FormIcon,{source:N.Mention}),value:!c.storage.noMention,onValueChange:function(e){return c.storage.noMention=!e}}),React.createElement(m.FormSwitchRow,{label:"Show in member list",subLabel:"Display the top role color in the member list role section headers.",leading:React.createElement(m.FormIcon,{source:N.Role}),value:!c.storage.noRole,onValueChange:function(e){return c.storage.noRole=!e}}),React.createElement(pe,{style:{marginHorizontal:10,marginBottom:2}},React.createElement(v.HelpMessage,{messageType:0},"(Regarding option below) - Limitations cause text coloring to prevent interaction with the text. Instead, you'll have to press anywhere else in the message to open the context menu or use gestures.")),React.createElement(m.FormSwitchRow,{label:"Show in chat text",subLabel:"Display the top role color in the chat text... Why would you want this?",leading:React.createElement(m.FormIcon,{source:N.Text}),value:c.storage.chatInterpolation>0,onValueChange:function(e){c.storage.chatInterpolation=e?100:0}}),React.createElement(he,{style:{marginLeft:"5%",color:Re(ye.text,"#ff0000",c.storage.chatInterpolation/100),fontFamily:p.constants.Fonts.DISPLAY_MEDIUM,fontSize:16,marginBottom:5,marginTop:-5}},"Color interpolation (for chat text):"),React.createElement(fe,{onSlide:function(e){c.storage.chatInterpolation=e},value:c.storage.chatInterpolation,style:{marginBottom:0}}),React.createElement(m.FormSwitchRow,{label:"Show in voice channel member list",subLabel:"Display the top role color in the voice channel member list.",leading:React.createElement(m.FormIcon,{source:N.Voice}),value:!c.storage.noVoice,onValueChange:function(e){c.storage.noVoice=!e}})))}let b=[];var Ie={onLoad:function(){b.push(j()),b.push(te()),b.push(re()),b.push(ce())},onUnload:function(){for(const e of b)e()},settings:Se};return E.default=Ie,Object.defineProperty(E,"__esModule",{value:!0}),E})({},vendetta.metro.common,vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.ui,vendetta.plugin,vendetta.utils,vendetta.ui.components.Forms,vendetta.storage,vendetta.ui.assets);
