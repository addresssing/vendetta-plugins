(function(u,m,o,B,v,S){"use strict";const{View:P,TouchableOpacity:C}=v.General,{Image:N}=m.ReactNative,f=o.findByProps("addReaction","getReactors"),p=o.findByProps("canUseEmojisEverywhere","canUseAnimatedEmojis"),{getCustomEmojiById:y}=o.findByProps("getCustomEmojiById"),{convertNameToSurrogate:A}=o.findByProps("convertNameToSurrogate"),h=o.findByProps("can","_dispatcher"),R=o.findByProps("getGuilds"),I=o.findByStoreName("UserSettingsProtoStore"),b=o.findByStoreName("MessageStore"),T=o.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:U}}=o.findByProps("colors","meta"),E=function(e){const i={background:"BACKGROUND_SECONDARY",separator:"BACKGROUND_TERTIARY"};return i[e]?U(T.theme,S.semanticColors[i[e]]):"#FFFFFF"};function _(e){return Object.entries(e).sort(function(i,n){return n[1].score-i[1].score})}let F=_(I.frecencyWithoutFetchingLatest.emojiFrecency.emojis).map(function(e){let[i,n]=e;return i});const O=function(e){return h.can(m.constants.Permissions.ADD_REACTIONS,R.getGuild(e))};var c=[];function M(e){return c.push(e),c.splice(0,c.length-4),c}function w(e,i,n){let r=b.getMessage(e,i);r&&(r.reactions.filter(function(d){return d.me}).find(function(d){return d.emoji.name===n.name&&d.emoji.id===n.id})?(f.removeReactionWithConfirmation||f.removeReaction)({channelId:e,messageId:i,emoji:{id:n.id,name:n.name},location:"Message",reactionType:0,isMe:!0}):f.addReaction(e,i,n,"Message",{burst:!1}))}function D(){return B.after("default",o.findByName("ChatInputContextBar",!1),function(e,i){let[n]=e;if(!n.pendingReply)return;const r=n.pendingReply.channel.guild_id,d=n.pendingReply.channel.id,k=n.pendingReply.message.id;if(r&&!O(r))return;const l=c.find(function(t){return t.id===r}),g=l?l.emojis:F.filter(function(t){const a=y(t);return a?!(!p.canUseAnimatedEmojis()&&a.animated||a.guildId!=r&&(!h.can(m.constants.Permissions.USE_EXTERNAL_EMOJIS,R.getGuild(r))||!p.canUseEmojisEverywhere())):!0}).map(function(t){let a=A(t);if(a)return{uri:"asset:/emoji-"+Array.from(a).map(function(L){return L.codePointAt(0).toString(16)}).join("-")+".png",name:a,id:null,animated:!1};let s=y(t);if(s)return{uri:s.url||`https://cdn.discordapp.com/emojis/${s.id}.${s.animated?"gif":"png"}?size=48`,name:s.name,id:s.id,animated:s.animated}}).filter(function(t){return t!==void 0});l||M({id:r,emojis:g}),g.length&&i.props.children.unshift(React.createElement(P,{style:{backgroundColor:E("background"),width:"100%",padding:5,borderBottomColor:E("separator"),borderBottomWidth:1,display:"flex",flexDirection:"row"}},g.map(function(t){return React.createElement(C,{onPress:function(){return w(d,k,{id:t.id,name:t.name,animated:t.animated})}},React.createElement(N,{source:{uri:t.uri},style:{width:24,height:24,marginLeft:5,marginRight:5}}))})))})}let j=[];var G={onLoad:function(){j.push(D())},onUnload:function(){for(const e of j)e()}};return u.default=G,Object.defineProperty(u,"__esModule",{value:!0}),u})({},vendetta.metro.common,vendetta.metro,vendetta.patcher,vendetta.ui.components,vendetta.ui);
