(function(l,a,d,o,S,v,n,u,g,w){"use strict";const{Text:P}=S.General,R=o.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:N}}=o.findByProps("colors","meta"),T=o.findByStoreName("UserStore"),C=o.findByStoreName("RelationshipStore"),E=o.findByStoreName("GuildMemberStore"),f=o.findByProps("TYPING_WRAPPER_HEIGHT");function _(){return d.after("default",f,function(r,p){let[{channel:y}]=r;if(!p||!n.storage.show.showTyping)return;const A=p.props?.children,I=N(R.theme,v.semanticColors.HEADER_SECONDARY),O=d.after("type",A,function(M,F){a.React.useEffect(function(){return function(){O()}},[]);const s=F?.props?.children?.[0]?.props?.children?.[1]?.props;if(!s||!s.children||s.children==="Several people are typing...")return;const e=f.useTypingUserIds(y.id).map(function(t){const i=E.getMember(y.guild_id,t),m=T.getUser(t),G=i?.nick||C.getNickname(t)||m.globalName||m.username,L=i?.colorString||I;return{displayName:G,displayColor:L}});function c(t){return a.React.createElement(P,{style:{color:t.displayColor,fontFamily:a.constants.Fonts.DISPLAY_BOLD}},t.displayName)}!e||e.length<1||(s.children=e.length===1?[c(e[0])," is typing..."]:[...e.slice(0,e.length-1).flatMap(function(t,i){return[c(t),i<e.length-2?", ":" and "]}),c(e[e.length-1])," are typing..."])})})}const b={Typing:w.getAssetIDByName("ic_messages")};function B(){return g.useProxy(n.storage),React.createElement(a.ReactNative.ScrollView,{style:{flex:1}},React.createElement(FormSection,{title:"Where to show the top role color?",titleStyleType:"no_border"},React.createElement(u.FormSwitchRow,{label:"Show in typing",subLabel:"Display the top role color in the typing bar.",leading:React.createElement(u.FormIcon,{source:b.Typing}),value:n.storage.show?.showTyping,onValueChange:function(r){return n.storage.show.showTyping=r}})))}let h=[];var D={onLoad:function(){console.log("ON LOAD WORKS"),n.storage.show||(console.log("CP inside 1"),g.useProxy(n.storage),n.storage.show={showTyping:!0},console.log("CP inside 2")),console.log("CP 1"),h.push(_()),console.log("CP 2")},onUnload:function(){for(const r of h)r()},settings:B};return l.default=D,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.metro.common,vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.ui,vendetta.plugin,vendetta.ui.components.Forms,vendetta.storage,vendetta.ui.assets);
