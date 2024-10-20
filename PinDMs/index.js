(function(N,s,i,e,D,l,W,H,X,J,T){"use strict";const{Pressable:Q}=l.General,{getPrivateChannelRowHeight:Z}=i.findByProps("getPrivateChannelRowHeightWithoutPadding"),V=i.findByName("CategoryChannel"),j=i.findByStoreName("UserGuildSettingsStore"),z=i.findByStoreName("ReadStateStore"),{getChannelId:ee}=i.findByStoreName("SelectedChannelStore"),ne=i.findByName("FastList"),{getPrivateChannelIds:te}=i.findByProps("getPrivateChannelIds"),{shouldShowMessageRequests:M}=i.findByProps("shouldShowMessageRequests");function G(n){if(!(n.addChangeListener||n.addChangeListener))throw new Error("Invalid store provided.");const[,r]=e.React.useReducer(function(t){return~t},0);return e.React.useEffect(function(){const t=function(){return r()};return n.addChangeListener(t),function(){return void n.removeChangeListener(t)}},[]),null}function re(){let n=[],r=!1;return n.push(D.after("default",i.findByName("ConnectedPrivateChannels",!1),function(t,p){if(r)return;r=!0;function g(f){let{id:a,selected:c}=f;const R=z.hasUnread(a),y=j.isChannelMuted(null,a);return!(c||R&&!y)}n.push(D.after("render",p.type.prototype,function(f,a){if(!a.props?.children?.props?.children)return;const c=a.props.children.props.children;function R(y){let{comp:I}=y;W.useProxy(s.storage),G(z),G(j);const C=I,A=s.storage.pinnedDMs;function Be(){const d={categories:1+A.length,channels:0,collapsedChannels:0},u=Object.fromEntries(Object.values(A).map(function(o){return[o.id,{channels:[],collapsed:s.storage.collapsedPinnedDMs.includes(o.id)}]}));return te().forEach(function(o,w){let b=A.find(function(S){return S.ids.includes(o)});if(!b)return;d.channels+=1;let E=u[b.id];const L=g({id:o,selected:ee()===o});E.collapsed&&L&&(d.collapsedChannels+=1),E.channels.push({id:o,shouldHideIfCategoryIsCollapsed:L,index:w+ +M()})}),{counts:d,categories:u}}const{counts:F,categories:_}=Be();function Ie(d,u){u?s.storage.collapsedPinnedDMs.includes(d)||(s.storage.collapsedPinnedDMs=[...s.storage.collapsedPinnedDMs,d]):s.storage.collapsedPinnedDMs=s.storage.collapsedPinnedDMs.filter(function(o){return o!=d})}function De(d,u){return d===0?e.React.createElement(l.ErrorBoundary,null,e.React.createElement(e.React.Fragment,null,M()&&C.props.renderItem(0,0),Object.entries(_).map(function(o){let[w,{channels:b,collapsed:E}]=o;const L=A.find(function(S){return S.id===w});return e.React.createElement(e.React.Fragment,null,e.React.createElement(Q,{onPress:function(){return Ie(w,!E)}},e.React.createElement(V,{name:L.name,collapsed:E})),b.map(function(S){const k=C.props.renderItem(0,S.index);if(!E)return k;const{selected:Ae}=k.props;return g({id:S.id,selected:Ae})?null:k}))}),e.React.createElement(V,{name:"Direct Messages",renderChevron:!1}))):Object.values(_).map(function(o){return o.channels}).flat().some(function(o){return o.index===u})||M()&&!u?null:C.props.renderItem(d,u)}function ve(d,u){return d===0?32*F.categories+Z(1)*(F.channels-F.collapsedChannels+ +M()):Object.values(_).map(function(o){return o.channels}).flat().some(function(o){return o.index===u})||M()&&!u?0:C.props.itemSize(d,u)}return e.React.createElement(ne,{...C.props,sections:[1,C.props.sections[0]],renderItem:De,itemSize:ve,onScroll:function(){}})}c[2]=e.React.createElement(R,{comp:c[2]})}))})),function(){return n.forEach(function(t){return t()})}}const{fromTimestamp:ie}=i.findByProps("extractTimestamp"),h={pin:function(n,r){if(h.isPinned(n))return;const t=s.storage.pinnedDMs.findIndex(function(p){return p.id===r});s.storage.pinnedDMs[t].ids=[...s.storage.pinnedDMs[t].ids,n]},unpin:function(n){const r=s.storage.pinnedDMs.findIndex(function(t){return t.ids.includes(n)});s.storage.pinnedDMs[r]={...s.storage.pinnedDMs[r],ids:s.storage.pinnedDMs[r].ids.filter(function(t){return t!=n})}},isPinned:function(n){return s.storage.pinnedDMs.some(function(r){return r.ids.includes(n)})},getPinnedDMs:function(){return s.storage.pinnedDMs},createCategory:function(n){s.storage.pinnedDMs.push({ids:[],id:ie(+Date.now()),name:n})},deleteCategory:function(n){s.storage.pinnedDMs=s.storage.pinnedDMs.filter(function(r){return r.id!=n})}},{ClearButtonVisibility:ae,default:se}=i.findByProps("ClearButtonVisibility"),{TextStyleSheet:we,Text:oe}=i.findByProps("TextStyleSheet"),B=i.findByProps("openLazy","hideActionSheet"),$=i.findByProps("ActionSheet")?.ActionSheet??i.find(function(n){return n.render?.name==="ActionSheet"}),{BottomSheetScrollView:be,BottomSheetFlatList:ce}=i.findByProps("BottomSheetScrollView"),{ActionSheetTitleHeader:de,ActionSheetCloseButton:le,ActionSheetRow:ue}=i.findByProps("ActionSheetTitleHeader"),P=ue??l.Forms.FormRow;function Y(n,r){$?B?.openLazy(new Promise(function(t){return t({default:n})}),"ActionSheet",r):J.showToast("You cannot open ActionSheets on this version! Upgrade to 163+")}const{View:x}=l.General,m=i.findByStoreName("ThemeStore"),fe=i.findByName("ConnectedKeyboardAwareView"),{meta:{resolveSemanticColor:O}}=i.findByProps("colors","meta"),{useOrientationSettling:pe}=i.findByProps("useOrientation"),K=i.findByProps("pushModal");function he(n){let{onExit:r}=n;K.pushModal({key:"pin-dms-new",modal:{key:"pin-dms-new",modal:ge,animation:"slide-up",props:{onExit:r},shouldPersistUnderModals:!1,closable:!0}})}function ge(n){let{onExit:r}=n;pe();const t=e.ReactNative.Dimensions?.get("window").width,[p,g]=e.React.useState(""),[f,a]=e.React.useState("");function c(){K.popModal("pin-dms-new"),r()}function R(){if(!p.length||h.getPinnedDMs().find(function(I){return I.name===p}))return a("Invalid category name.");h.createCategory(p),c()}function y(I){g(I),f.length&&a("")}return e.React.createElement(x,{style:{flex:1,backgroundColor:"#000000b3",justifyContent:"center",alignItems:"center"}},e.React.createElement(fe,null,e.React.createElement(x,{style:{borderRadius:8,padding:16,backgroundColor:O(m.theme,T.semanticColors.BACKGROUND_PRIMARY),width:t*.9}},e.React.createElement(oe,{variant:"heading-lg/extrabold",style:{textAlign:"center"}},e.i18n.Messages.CATEGORY_NAME_PLACEHOLDER),e.React.createElement(se,{value:"",error:f,onChangeText:y,placeholder:e.i18n.Messages.CATEGORY_NAME,inputTextColor:O(m.theme,T.semanticColors.TEXT_NORMAL),placeholderTextColor:O(m.theme,T.semanticColors.INPUT_PLACEHOLDER_TEXT),clearButtonVisibility:ae.NEVER,showBorder:!0,showTopContainer:!0,disabled:!1,autoFocus:!0,numberOfLines:1,returnKeyType:"done",style:{paddingHorizontal:8,paddingVertical:0}}),e.React.createElement(x,{style:{marginTop:24}},e.React.createElement(l.Button,{text:"Save",color:"brand",look:l.Button.Looks.FILLED,onPress:R}),e.React.createElement(l.Button,{text:"Cancel",look:l.Button.Looks.OUTLINED,style:{marginTop:8},onPress:c})))))}const ye=i.findByStoreName("ChannelStore"),{getUserAvatarURL:Re,getChannelIconURL:Pe}=i.findByProps("getUserAvatarURL","getChannelIconURL"),Ce=i.findByStoreName("RelationshipStore"),{computeChannelName:Ee}=i.findByProps("computeChannelName");function q(n){let{channelId:r}=n;const t=ye.getChannel(r),p=t.type==3?Ee(t):Ce.getNickname(t.recipients[0])??t.rawRecipients[0].global_name??t.rawRecipients[0].globalName;if(t.type!=1&&t.type!=3)return;function g(){if(t.type==1){const a=t.rawRecipients[0],c=Re(a,!1,50);return a.avatar?{uri:c}:c}else{const{id:a,icon:c,applicationId:R}=t,y=Pe({id:a,icon:c,applicationId:R,size:32});return c?{uri:y}:y}}const f=[...h.getPinnedDMs().map(function(a){return{id:a.id,label:a.name,icon:null,onPress:function(){return B.hideActionSheet(),h.pin(r,a.id)}}}),{id:"add",label:e.i18n.Messages.CATEGORY_NAME_PLACEHOLDER,icon:H.getAssetIDByName("ic_add_24px"),onPress:function(){return B.hideActionSheet(),he({onExit:function(){return Y(q,{channelId:r})}})}}];return e.React.createElement($,null,e.React.createElement(de,{title:`Pinning ${p}`,leading:e.React.createElement(e.ReactNative.Image,{source:g(),style:{width:24,height:24,borderRadius:12,marginRight:12}}),trailing:e.React.createElement(le,{onPress:function(){return B.hideActionSheet()}})}),e.React.createElement(l.Forms.FormTitle,{title:"Add to category"}),e.React.createElement(ce,{style:{flex:1},contentContainerStyle:{paddingBottom:48,marginBottom:8},data:f,renderItem:function(a){let{item:c}=a;return e.React.createElement(P,{label:c.label,onPress:c.onPress,icon:e.React.createElement(P.Icon,{source:c.icon,IconComponent:function(){return e.React.createElement(l.Forms.FormIcon,{source:c.icon})}})})},ItemSeparatorComponent:null,keyExtractor:function(a){return a.id}}))}const v=H.getAssetIDByName("icon-pins");function Se(){return D.after("default",i.findByName("ChannelLongPressActionSheet",!1),function(n,r){let[t]=n;D.after("type",r,function(p,g){const f=X.findInReactTree(g,function(a){return a.key==="dm"})?.props?.children;f&&(h.isPinned(t.channelId)?f.push(e.React.createElement(P,{label:"Unpin DM",icon:e.React.createElement(P.Icon,{source:v,IconComponent:function(){return e.React.createElement(l.Forms.FormIcon,{source:v})}}),onPress:function(){return B.hideActionSheet(),h.unpin(t.channelId)}})):f.push(e.React.createElement(P,{label:"Pin DM",icon:e.React.createElement(P.Icon,{source:v,IconComponent:function(){return e.React.createElement(l.Forms.FormIcon,{source:v})}}),onPress:function(){return Y(q,{channelId:t.channelId})}})))})})}let U=[];var Me={onLoad:function(){var n,r;(n=s.storage).pinnedDMs??(n.pinnedDMs=[{id:"default",name:"Pinned DMs",ids:[]}]),(r=s.storage).collapsedPinnedDMs??(r.collapsedPinnedDMs=[]),U.push(re()),U.push(Se()),Object.defineProperty(window,"PinDMsDevApi",{configurable:!0,value:h})},onUnload:function(){for(const n of U)n(),delete window.PinDMsDevApi}};return N.default=Me,Object.defineProperty(N,"__esModule",{value:!0}),N})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui.components,vendetta.storage,vendetta.ui.assets,vendetta.utils,vendetta.ui.toasts,vendetta.ui);
