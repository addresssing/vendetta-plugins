import { React, ReactNative } from "@vendetta/metro/common";
import { findByProps, findByStoreName } from "@vendetta/metro";
import { semanticColors } from "@vendetta/ui";
import { General } from "@vendetta/ui/components";
console.log("S1");
const { StyleSheet, PanResponder } = ReactNative;
const ThemeStore = findByStoreName("ThemeStore");
const { meta: { resolveSemanticColor } } = findByProps("colors", "meta");
const { View } = General;
const { useState, useCallback } = React;
console.log("S2");
const Colors = {
    sliderOff: resolveSemanticColor(ThemeStore.theme, semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),
    sliderOn: resolveSemanticColor(ThemeStore.theme, semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),
    thumb: resolveSemanticColor(ThemeStore.theme, semanticColors.MENTION_FOREGROUND)
};
console.log("S3");

const Swidew = useCallback(({ onSlide, value }) => {
    console.log("S4");
    const slideValue = value || 0;
    const [thumbSize, setThumbSize] = useState(0);
  
    function setPos(AbsX) {
      this.container.measure( (fx, fy, width, height, px, py) => {
        let xPercentage = ((AbsX - px) / (width - px)) * 100
        const valid = Math.min(Math.max(0, xPercentage), 100); // snapping: Math.round(xPercentage / 15)*15 | no snapping: xPercentage
        if (onSlide) onSlide(valid);
      });
    };
  
    const panResponder = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  
        onPanResponderGrant: (evt, gestureState) => {
          setPos(gestureState.x0);
        },
        onPanResponderMove: (evt, gestureState) => {
          setPos(gestureState.moveX);
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
          //if (onRelease) onRelease(); not yet lol
        },
        onPanResponderTerminate: (evt, gestureState) => {},
        onShouldBlockNativeResponder: (evt, gestureState) => true
      }),
    ).current;
  
    function thumbLayout(event) {
      setThumbSize(event.nativeEvent.layout.width);
    };
  
    const style = StyleSheet.create({
      container: {
        marginLeft: '5%',
        width: '90%',
        height: 20,
        borderRadius: 25,
        backgroundColor: Colors.sliderOff,
        marginBottom: 25
      }, slid: {
        width: slideValue+'%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderRadius: slideValue === 100 ? 25 : 0,
        backgroundColor: Colors.sliderOn,
        justifyContent: 'center'
      }, thumb: {
        height: '150%',
        aspectRatio: 1,
        alignSelf: 'flex-end',
        right: -(thumbSize/2),
        borderRadius: 100,
        backgroundColor: Colors.thumb
      }
    })
  
    return (
      <View style={style.container} {...panResponder.panHandlers} ref={c => { this.container = c; }}>
        <View style={style.slid}><View style={style.thumb} onLayout={thumbLayout} /></View>
      </View>
    )
}, []);
console.log("S5");

export default Swidew;
console.log("is it this..?");