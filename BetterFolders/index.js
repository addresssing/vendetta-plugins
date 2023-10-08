(function(u,o,n,e,a,h,D,G,I){"use strict";const{View:p,Image:E}=D.General,{getGuildFolders:C}=n.findByStoreName("UserSettingsProtoStore"),{isFolderExpanded:F}=n.findByStoreName("ExpandedGuildFolderStore");function _(){C().filter(function(t){return t.folderId&&!F(t.folderId)}).forEach(function(t){let{folderId:d}=t;e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:d}),e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:d})})}function L(){let t=h.after("GuildContainer",n.findByPropsAll("GuildContainer").at(-1),function(d,f){let[r]=d,i=r?.children?.type;if(!i?.type){if(r.expanded)return;let l=r?.children?.props;if(!l?.children?.[1])return;let s=l?.children?.[0]?.props?.style?.[1]?.backgroundColor;if(!s)return;l.children[1]=e.React.createElement(p,{style:{overflow:"hidden",borderRadius:16,justifyContent:"center",alignItems:"center",height:48,width:48}},e.React.createElement(E,{source:a.getAssetIDByName("img_guild_folder"),style:{tintColor:s}}));return}let A=h.after("type",i,function(l,s){let[g]=l;A(),!r.expanded&&(s.props.children[1]=e.React.createElement(p,{style:{overflow:"hidden",borderRadius:16,justifyContent:"center",alignItems:"center",height:48,width:48}},e.React.createElement(E,{source:a.getAssetIDByName("img_guild_folder"),style:g.folderColor?{tintColor:`#${g.folderColor.toString(16)}`}:{}})))})});return _(),function(){_(),t()}}const{getGuildFolders:N}=n.findByStoreName("UserSettingsProtoStore"),{isFolderExpanded:y}=n.findByStoreName("ExpandedGuildFolderStore");function S(){let t=function(d){let{folderId:f}=d;y(f)&&N().filter(function(r){return r.folderId&&y(r.folderId)}).forEach(function(r){let{folderId:i}=r;i!==f&&e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:i})})};return e.FluxDispatcher.subscribe("TOGGLE_GUILD_FOLDER_EXPAND",t),function(){return e.FluxDispatcher.unsubscribe("TOGGLE_GUILD_FOLDER_EXPAND",t)}}const B=n.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:R}}=n.findByProps("colors","meta");R(B.theme,I.semanticColors.BACKGROUND_ACCENT),e.React.useState(o.storage.autoCollapse);function v(){G.useProxy(o.storage),e.React.useState(o.storage.hideIcons),a.getAssetIDByName("ic_minus_circle_24px"),a.getAssetIDByName("ic_hide_media")}let c=[];var x={onLoad:function(){o.storage.hideIcons??=!1,o.storage.autoCollapse??=!1,c.push(L()),c.push(S())},onUnload:function(){for(const t of c)t()},settings:v};return u.default=x,Object.defineProperty(u,"__esModule",{value:!0}),u})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.patcher,vendetta.ui.components,vendetta.storage,vendetta.ui);
