import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigatorList = {
	Home: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackNavigatorList> =
	NativeStackNavigationProp<RootStackNavigatorList, T>;
export type DefaultRouteProps<T extends keyof RootStackNavigatorList> =
	RouteProp<RootStackNavigatorList, T>;
