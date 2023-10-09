(function(p,r,i,e,u,R,I,N,S){"use strict";const{getGuildFolders:B}=i.findByStoreName("UserSettingsProtoStore"),{isFolderExpanded:L}=i.findByStoreName("ExpandedGuildFolderStore");function E(){B().filter(function(t){return t.folderId&&!L(t.folderId)}).forEach(function(t){let{folderId:n}=t;e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:n}),e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:n})})}const{View:D,Image:C}=I.General;function P(){let t=R.after("GuildContainer",i.findByPropsAll("GuildContainer").at(-1),function(n,s){let[a]=n;if(!r.storage.hideIcons)return;let o=a?.children?.type;if(!o?.type){if(a.expanded)return;let d=a?.children?.props;if(!d?.children?.[1])return;let c=d?.children?.[0]?.props?.style?.[1]?.backgroundColor;if(!c)return;d.children[1]=e.React.createElement(D,{style:{overflow:"hidden",borderRadius:16,justifyContent:"center",alignItems:"center",height:48,width:48}},e.React.createElement(C,{source:u.getAssetIDByName("img_guild_folder"),style:{tintColor:c}}));return}let l=R.after("type",o,function(d,c){let[h]=d;l(),!a.expanded&&(c.props.children[1]=e.React.createElement(D,{style:{overflow:"hidden",borderRadius:16,justifyContent:"center",alignItems:"center",height:48,width:48}},e.React.createElement(C,{source:u.getAssetIDByName("img_guild_folder"),style:h.folderColor?{tintColor:`#${h.folderColor.toString(16)}`}:{}})))})});return E(),function(){E(),t()}}const{getGuildFolders:A}=i.findByStoreName("UserSettingsProtoStore"),{isFolderExpanded:_}=i.findByStoreName("ExpandedGuildFolderStore");function x(){let t=function(n){let{folderId:s}=n;r.storage.autoCollapse&&_(s)&&A().filter(function(a){return a.folderId&&_(a.folderId)}).forEach(function(a){let{folderId:o}=a;o!==s&&e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:o})})};return e.FluxDispatcher.subscribe("TOGGLE_GUILD_FOLDER_EXPAND",t),function(){return e.FluxDispatcher.unsubscribe("TOGGLE_GUILD_FOLDER_EXPAND",t)}}const{useState:O}=e.React,{Pressable:w,Animated:f}=e.ReactNative;function F(t){let{onPress:n,children:s,color:a,pressedColor:o}=t;const[l]=O(new f.Value(0)),d=l.interpolate({inputRange:[0,1],outputRange:[a,o]}),c=function(){f.timing(l,{toValue:1,duration:200,useNativeDriver:!1}).start()},h=function(){f.timing(l,{toValue:0,duration:200,useNativeDriver:!1}).start()};return e.React.createElement(w,{onPress:n,onPressIn:c,onPressOut:h},e.React.createElement(f.View,{style:{backgroundColor:d}},s))}const{FormSwitch:G,FormRow:v,FormIcon:b}=I.Forms,{ScrollView:U}=e.ReactNative,T=i.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:V}}=i.findByProps("colors","meta"),g={bgBrighter:V(T.theme,S.semanticColors.BACKGROUND_ACCENT)};function $(){N.useProxy(r.storage);const[t,n]=e.React.useState(r.storage.autoCollapse),[s,a]=e.React.useState(r.storage.hideIcons);function o(){r.storage.autoCollapse=!r.storage.autoCollapse,n(r.storage.autoCollapse)}function l(){r.storage.hideIcons=!r.storage.hideIcons,E(),a(r.storage.hideIcons)}return e.React.createElement(U,{style:{flex:1,marginTop:10}},e.React.createElement(F,{onPress:o,color:g.bgBrighter+"00",pressedColor:g.bgBrighter+"FF"},e.React.createElement(v,{label:"Auto collapse",subLabel:"Automatically collapse folders as you expand different ones.",leading:e.React.createElement(b,{source:u.getAssetIDByName("ic_minus_circle_24px")}),trailing:e.React.createElement(G,{value:t,onValueChange:o})})),e.React.createElement(F,{onPress:l,color:g.bgBrighter+"00",pressedColor:g.bgBrighter+"FF"},e.React.createElement(v,{label:"Hide icons",subLabel:"Don't display server icons for collapsed folders.",leading:e.React.createElement(b,{source:u.getAssetIDByName("ic_hide")}),trailing:e.React.createElement(G,{value:s,onValueChange:l})})))}let y=[];var X={onLoad:function(){r.storage.hideIcons??=!1,r.storage.autoCollapse??=!1,y.push(P()),y.push(x())},onUnload:function(){for(const t of y)t()},settings:$};return p.default=X,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.patcher,vendetta.ui.components,vendetta.storage,vendetta.ui);
