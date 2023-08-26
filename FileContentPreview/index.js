(function(v,t,T,g,f,B,e,N){"use strict";var y={PREVIEW:{"en-US":"Preview","en-GB":"Preview","zh-CN":"\u9884\u89C8","zh-TW":"\u9810\u89BD",ch:"N\xE1hled",da:"L\xE6s fil",nl:"Voorbeeld",fr:"Aper\xE7u",de:"Vorschau",el:"\u03B4\u03B9\u03B1\u03B2\u03AC\u03C3\u03B5\u03C4\u03B5","es-ES":"Leer",uk:"\u0447\u0438\u0442\u0430\u0442\u0438"},FILE_SAVED:{"en-US":"File saved","en-GB":"File saved","es-ES":"Archivo guardado",uk:"\u0424\u0430\u0439\u043B \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E"},FILE_SAVE_ERROR:{"en-US":"Error saving file","en-GB":"Error saving file","es-ES":"Error guardando archivo",uk:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0443"},TOGGLE_WORD_WRAP:{"en-US":"Toggle Word Wrap","en-GB":"Toggle Word Wrap","es-ES":"Salto de l\xEDnea",uk:"\u041F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u0447 \u0430\u0432\u0442\u043E\u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0443 \u0441\u043B\u043E\u0432"}};const L=t.findByProps("Messages"),{getLocale:m}=t.findByProps("getLocale"),E=t.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:h}}=t.findByProps("colors","meta"),{View:_,Text:p,TouchableOpacity:C}=N.General,{FormIcon:M}=N.Forms,{ActivityIndicator:x,ScrollView:w}=e.ReactNative,O=e.ReactNative.NativeModules.MediaManager.downloadMediaAsset,{default:k,getRenderCloseButton:W}=t.findByProps("getRenderCloseButton"),D=t.findByProps("pushModal"),I=t.findByProps("intword"),F=t.findByName("Svg",!1).default,A=t.findByName("Svg",!1).Path,G=t.findByProps("useSafeAreaInsets");function V(s){return function(){return e.React.createElement(C,{onPress:s},e.React.createElement(M,{source:f.getAssetIDByName("ic_download_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function H(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"https://cdn.discordapp.com/attachments/1068304660269641738/1144843403151020122/file.txt",c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return function(){let a=1e4;const[n,l]=e.React.useState({content:"",loadedBytes:a,firstTime:!0});n.firstTime&&fetch(o,{headers:{Range:"bytes=0-"+String(a)}}).then(function(i){i.ok?i.text().then(function(P){l({content:P,loadedBytes:n.loadedBytes,firstTime:!1})}):l({content:"",loadedBytes:0,firstTime:!1})});let u=e.React.createElement(_,{style:{margin:32}},e.React.createElement(x,{size:"large"}));const[d,b]=e.React.useState(!1),r={header:h(E.theme,g.semanticColors.HEADER_PRIMARY),test:h(E.theme,g.semanticColors.TEXT_MUTED),bgDark:h(E.theme,g.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:h(E.theme,g.semanticColors.BACKGROUND_SECONDARY),bgBrighter:h(E.theme,g.semanticColors.BACKGROUND_ACCENT)},R=e.React.createElement(F,{height:"24",width:"24",viewBox:"0 0 24 24",fill:d?r.header:r.test},e.React.createElement(A,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(A,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(A,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"}));let J=e.React.createElement(e.React.Fragment,null,e.React.createElement(p,{style:{color:r.test,marginTop:7}},"+ ",I.intword(c-n.loadedBytes,["bytes","KB","MB","GB","TB","PB"],1024,void 0,void 0,void 0," ")," not loaded."),e.React.createElement(C,{style:{backgroundColor:r.bgBright,borderRadius:5,padding:10,marginBottom:20,marginTop:5},onPress:function(){fetch(o,{headers:{Range:"bytes="+String(n.loadedBytes+1)+"-"+String(n.loadedBytes+a)}}).then(function(i){i.ok?i.text().then(function(P){l({content:n.content+P,loadedBytes:n.loadedBytes+a,firstTime:!1})}):B.showToast("Error: Network response was not ok",f.getAssetIDByName("ic_close_circle"))})}},e.React.createElement(p,{style:{color:r.header,textTransform:"uppercase",fontWeight:"bold",textAlign:"center",fontSize:20}},L.Messages.VOICE_PANEL_LOAD_MORE)));const Q=G.useSafeAreaInsets();let ee=e.React.createElement(_,{style:{marginTop:0}},e.React.createElement(_,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(C,{onPress:function(){b(!d)},onLongPress:function(){B.showToast(y.TOGGLE_WORD_WRAP[m()]??"Toggle Word Wrap",f.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:d?r.bgBrighter:r.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:d?r.bgBright:r.bgDark}},R)),e.React.createElement(w,{style:{margin:15,marginBottom:50+Q.bottom}},e.React.createElement(w,{horizontal:!d},e.React.createElement(p,{selectable:!0,style:{color:r.header}},n.content)),n.loadedBytes<c&&J));return e.React.createElement(k,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerLeft:W(function(){return D.popModal("file-content-preview")}),headerRight:V(function(){O(o,0).then(function(i){i?B.showToast(y.FILE_SAVED[m()]??"File saved",f.getAssetIDByName("ic_selection_checked_24px")):B.showToast(y.FILE_SAVE_ERROR[m()]??"Error saving file",f.getAssetIDByName("ic_close_circle"))})}),render:function(){return n.content?ee:u},headerTitle:function(){let i=h(E.theme,g.semanticColors.HEADER_PRIMARY);return e.React.createElement(C,{onPress:function(){e.clipboard.setString(s),B.showToast(L.Messages.COPIED_TEXT,f.getAssetIDByName("toast_copy_message"))}},e.React.createElement(p,{numberOfLines:1,style:{color:i}},s),e.React.createElement(p,{numberOfLines:1,style:{color:i,fontSize:12}},I.intword(c,["bytes","KB","MB","GB","TB","PB"],1024,void 0,void 0,void 0," ")))}}}})}}const U=t.findByStoreName("MessageStore"),z=t.findByStoreName("SelectedChannelStore");function K(){return T.after("render",t.findByName("Chat").prototype,function(s,o){o.props.hasOwnProperty("onTapInviteEmbed")&&T.before("onTapInviteEmbed",o.props,function(c){let[{nativeEvent:{index:a,messageId:n}}]=c,l=z.getChannelId(),u=U.getMessage(l,n),d=u.codedLinks,b=u.attachments;if(a>=d.length){let r=a-d.length,R=b[r];D.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:H(R.filename,R.url,R.size),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}})}})})}const Y=t.findByName("RowManager"),Z=t.findByProps("Messages"),{getLocale:j}=t.findByProps("getLocale");function X(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"? bytes";return{borderColor:-251658241,backgroundColor:-13947599,thumbnailCornerRadius:15,headerColor:-4867391,headerText:"",acceptLabelBackgroundColor:-14441126,titleText:Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT.toUpperCase()+" \u2014 "+o,type:null,extendedType:4,participantAvatarUris:[],acceptLabelText:y.PREVIEW[j()]??"Preview",noParticipantsText:`
`+s,ctaEnabled:!0}}function $(){return T.after("generate",Y.prototype,function(s,o){let[c]=s,{message:a}=o;if(c.rowType!=1||!a.attachments)return;let n=[],l=[];a.attachments.forEach(function(u){u.filename.toLowerCase().endsWith(".txt")?n.push(X(u.filename,u.size)):l.push(u)}),n.length&&(a.codedLinks.push(...n),a.attachments=l)})}let S=[];var q={onLoad:function(){S.push(K()),S.push($())},onUnload:function(){for(const s of S)s()}};return v.default=q,Object.defineProperty(v,"__esModule",{value:!0}),v})({},vendetta.metro,vendetta.patcher,vendetta.ui,vendetta.ui.assets,vendetta.ui.toasts,vendetta.metro.common,vendetta.ui.components);
