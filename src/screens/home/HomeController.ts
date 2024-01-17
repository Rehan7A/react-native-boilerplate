import { useEffect } from "react";
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	withRepeat,
	withDelay,
	withSequence,
	Easing,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

export const useHomeController = () => {
	const translateX = useSharedValue(0);
	const ranimatedStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: translateX.value,
			},
		],
	}));

	useEffect(() => {
		translateX.value = withRepeat(
			withDelay(
				2000,
				withRepeat(
					withSequence(
						// split duration of 500ms to 250ms
						withTiming(Dimensions.get("window").width, {
							duration: 500,
							easing: Easing.inOut(Easing.ease),
						}),
						withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) }),
					),
					6,
				),
			),
			-1,
		);
	}, []);
	return {
		ranimatedStyle,
	};
};
