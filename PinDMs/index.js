(function(A,a,r,e,S,l,W,_,X,q,b){"use strict";const{Pressable:J}=l.General,{getPrivateChannelRowHeight:Q}=r.findByProps("getPrivateChannelRowHeightWithoutPadding"),k=r.findByName("CategoryChannel"),V=r.findByStoreName("UserGuildSettingsStore"),j=r.findByStoreName("ReadStateStore"),Z=r.findByName("FastList"),{getPrivateChannelIds:ee}=r.findByProps("getPrivateChannelIds"),{getChannelId:te}=r.findByStoreName("SelectedChannelStore");function H(t){if(!(t.addChangeListener||t.addChangeListener))throw new Error("Invalid store provided.");const[,i]=e.React.useReducer(function(n){return~n},0);return e.React.useEffect(function(){const n=function(){return i()};return t.addChangeListener(n),function(){return void t.removeChangeListener(n)}},[]),null}function ne(){let t=[],i=!1;return t.push(S.after("default",r.findByName("ConnectedPrivateChannels",!1),function(n,u){if(i)return;i=!0;function h(f){let{id:s,selected:c}=f;const y=j.hasUnread(s),g=V.isChannelMuted(null,s);return!(c||y&&!g)}t.push(S.after("render",u.type.prototype,function(f,s){if(!s.props?.children?.props?.children)return;const c=s.props.children.props.children;function y(P){let{comp:Be}=P;W.useProxy(a.storage),H(j),H(V);const E=Be,D=a.storage.pinnedDMs;function Me(){const d={categories:1+D.length,channels:0,collapsedChannels:0},p=Object.fromEntries(Object.values(D).map(function(o){return[o.id,{channels:[],collapsed:a.storage.collapsedPinnedDMs.includes(o.id)}]}));return ee().forEach(function(o,v){let I=D.find(function(C){return C.ids.includes(o)});if(!I)return;d.channels+=1;let R=p[I.id];const w=h({id:o,selected:te()===o});R.collapsed&&w&&(d.collapsedChannels+=1),R.channels.push({id:o,shouldHideIfCategoryIsCollapsed:w,index:v})}),{counts:d,categories:p}}const{counts:O,categories:U}=Me();function De(d,p){p?a.storage.collapsedPinnedDMs.includes(d)||(a.storage.collapsedPinnedDMs=[...a.storage.collapsedPinnedDMs,d]):a.storage.collapsedPinnedDMs=a.storage.collapsedPinnedDMs.filter(function(o){return o!=d})}function ve(d,p){return d===0?e.React.createElement(l.ErrorBoundary,null,e.React.createElement(e.React.Fragment,null,Object.entries(U).map(function(o){let[v,{channels:I,collapsed:R}]=o;const w=D.find(function(C){return C.id===v});return e.React.createElement(e.React.Fragment,null,e.React.createElement(J,{onPress:function(){return De(v,!R)}},e.React.createElement(k,{name:w.name,collapsed:R})),I.map(function(C){const F=E.props.renderItem(0,C.index);if(!R)return F;const{selected:we}=F.props;return h({id:C.id,selected:we})?null:F}))}),e.React.createElement(k,{name:"Direct Messages",renderChevron:!1}))):Object.values(U).map(function(o){return o.channels}).flat().some(function(o){return o.index===p})?null:E.props.renderItem(d,p)}function Ie(d,p){return d===0?32*O.categories+Q(1)*(O.channels-O.collapsedChannels):Object.values(U).map(function(o){return o.channels}).flat().some(function(o){return o.index===p})?0:E.props.itemSize(d,p)}return e.React.createElement(Z,{...E.props,sections:[1,E.props.sections[0]-0],renderItem:ve,itemSize:Ie,onScroll:function(){}})}const g=e.React.memo(y);c[2]=e.React.createElement(g,{comp:c[2]})}))})),function(){return t.forEach(function(n){return n()})}}const{fromTimestamp:re}=r.findByProps("extractTimestamp"),B={pin:function(t,i){const n=a.storage.pinnedDMs.findIndex(function(u){return u.id===i});a.storage.pinnedDMs[n].ids=[...a.storage.pinnedDMs[n].ids,t]},unpin:function(t){const i=a.storage.pinnedDMs.findIndex(function(n){return n.ids.includes(t)});a.storage.pinnedDMs[i]={...a.storage.pinnedDMs[i],ids:a.storage.pinnedDMs[i].ids.filter(function(n){return n!=t})}},isPinned:function(t){return a.storage.pinnedDMs.some(function(i){return i.ids.includes(t)})},getPinnedDMs:function(){return a.storage.pinnedDMs},createCategory:function(t){a.storage.pinnedDMs.push({ids:[],id:re(+Date.now()),name:t})},deleteCategory:function(t){a.storage.pinnedDMs=a.storage.pinnedDMs.filter(function(i){return i.id!=t})}},{ClearButtonVisibility:ie,default:ae}=r.findByProps("ClearButtonVisibility"),{TextStyleSheet:Ae,Text:se}=r.findByProps("TextStyleSheet"),N=r.findByProps("openLazy","hideActionSheet"),z=r.findByProps("ActionSheet")?.ActionSheet??r.find(function(t){return t.render?.name==="ActionSheet"}),{BottomSheetScrollView:be,BottomSheetFlatList:oe}=r.findByProps("BottomSheetScrollView"),{ActionSheetTitleHeader:ce,ActionSheetCloseButton:de,ActionSheetRow:le}=r.findByProps("ActionSheetTitleHeader"),M=le??l.Forms.FormRow;function G(t,i){z?N?.openLazy(new Promise(function(n){return n({default:t})}),"ActionSheet",i):q.showToast("You cannot open ActionSheets on this version! Upgrade to 163+")}const{View:m}=l.General,L=r.findByStoreName("ThemeStore"),ue=r.findByName("ConnectedKeyboardAwareView"),{meta:{resolveSemanticColor:T}}=r.findByProps("colors","meta"),{useOrientationSettling:fe}=r.findByProps("useOrientation"),K=r.findByProps("pushModal");function pe(t){let{onExit:i}=t;K.pushModal({key:"pin-dms-new",modal:{key:"pin-dms-new",modal:he,animation:"slide-up",props:{onExit:i},shouldPersistUnderModals:!1,closable:!0}})}function he(t){let{onExit:i}=t;fe();const n=e.ReactNative.Dimensions?.get("window").width,[u,h]=e.React.useState(""),[f,s]=e.React.useState("");function c(){K.popModal("pin-dms-new"),i()}function y(){if(!u.length||B.getPinnedDMs().find(function(P){return P.name===u}))return s("Invalid category name.");B.createCategory(u),c()}function g(P){h(P),f.length&&s("")}return e.React.createElement(m,{style:{flex:1,backgroundColor:"#000000b3",justifyContent:"center",alignItems:"center"}},e.React.createElement(ue,null,e.React.createElement(m,{style:{borderRadius:8,padding:16,backgroundColor:T(L.theme,b.semanticColors.BACKGROUND_PRIMARY),width:n*.9}},e.React.createElement(se,{variant:"heading-lg/extrabold",style:{textAlign:"center"}},"New Category"),e.React.createElement(ae,{value:"",error:f,onChangeText:g,placeholder:e.i18n.Messages.CATEGORY_NAME,inputTextColor:T(L.theme,b.semanticColors.TEXT_NORMAL),placeholderTextColor:T(L.theme,b.semanticColors.INPUT_PLACEHOLDER_TEXT),clearButtonVisibility:ie.NEVER,showBorder:!0,showTopContainer:!0,disabled:!1,autoFocus:!0,numberOfLines:1,returnKeyType:"done",style:{paddingHorizontal:8,paddingVertical:0}}),e.React.createElement(m,{style:{marginTop:24}},e.React.createElement(l.Button,{text:"Save",color:"brand",look:l.Button.Looks.FILLED,onPress:y}),e.React.createElement(l.Button,{text:"Cancel",look:l.Button.Looks.OUTLINED,style:{marginTop:8},onPress:c})))))}const ge=r.findByStoreName("ChannelStore"),{getUserAvatarURL:ye,getChannelIconURL:Re}=r.findByProps("getUserAvatarURL","getChannelIconURL"),Ce=r.findByStoreName("RelationshipStore"),{computeChannelName:Pe}=r.findByProps("computeChannelName");function Y(t){let{channelId:i}=t;const n=ge.getChannel(i),u=n.type==3?Pe(n):Ce.getNickname(n.recipients[0])??n.rawRecipients[0].global_name??n.rawRecipients[0].globalName;if(n.type!=1&&n.type!=3)return;function h(){if(n.type==1){const s=n.rawRecipients[0],c=ye(s,!1,50);return s.avatar?{uri:c}:c}else{const{id:s,icon:c,applicationId:y}=n,g=Re({id:s,icon:c,applicationId:y,size:32});return c?{uri:g}:g}}const f=[...B.getPinnedDMs().map(function(s){return{id:s.id,label:s.name,icon:null,onPress:function(){return null}}}),{id:"add",label:e.i18n.Messages.CATEGORY_NAME_PLACEHOLDER,icon:_.getAssetIDByName("ic_add_24px"),onPress:function(){return N.hideActionSheet(),pe({onExit:function(){return G(Y,{channelId:i})}})}}];return e.React.createElement(z,null,e.React.createElement(ce,{title:`Pinning ${u}`,leading:e.React.createElement(e.ReactNative.Image,{source:h(),style:{width:24,height:24,borderRadius:12,marginRight:12}}),trailing:e.React.createElement(de,{onPress:function(){return N.hideActionSheet()}})}),e.React.createElement(l.Forms.FormTitle,{title:"Add to category"}),e.React.createElement(oe,{style:{flex:1},contentContainerStyle:{paddingBottom:48,marginBottom:8},data:f,renderItem:function(s){let{item:c}=s;return e.React.createElement(M,{label:c.label,onPress:c.onPress,icon:e.React.createElement(M.Icon,{source:c.icon,IconComponent:function(){return e.React.createElement(l.Forms.FormIcon,{source:c.icon})}})})},ItemSeparatorComponent:null,keyExtractor:function(s){return s.id}}))}const $=_.getAssetIDByName("icon-pins");function Ee(){return S.after("default",r.findByName("ChannelLongPressActionSheet",!1),function(t,i){let[n]=t;S.after("type",i,function(u,h){const f=X.findInReactTree(h,function(s){return s.key==="dm"})?.props?.children;f&&f.push(e.React.createElement(M,{label:"Pin DM",icon:e.React.createElement(M.Icon,{source:$,IconComponent:function(){return e.React.createElement(l.Forms.FormIcon,{source:$})}}),onPress:function(){return G(Y,{channelId:n.channelId})}}))})})}let x=[];var Se={onLoad:function(){a.storage.pinnedDMs??=[{id:"default",name:"Pinned DMs",ids:[]}],a.storage.collapsedPinnedDMs??=[],x.push(ne()),x.push(Ee()),Object.defineProperty(window,"PinDMsDevApi",{configurable:!0,value:B})},onUnload:function(){for(const t of x)t(),delete window.PinDMsDevApi}};return A.default=Se,Object.defineProperty(A,"__esModule",{value:!0}),A})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui.components,vendetta.storage,vendetta.ui.assets,vendetta.utils,vendetta.ui.toasts,vendetta.ui);
