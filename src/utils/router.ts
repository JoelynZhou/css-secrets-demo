import { RouteProps } from "react-router-dom";
import BoxModel from "../views/CSSDemo/BoxModel";
import FlexBox from "../views/CSSDemo/FlexBox";
import Home from "../views/Home";

export interface RProps extends RouteProps {
	menuName?: string;
	hidden?: boolean;
}

export const routes: RProps[] = [
	{
		path: "/",
		component: Home,
		hidden: true,
	},
	{
		menuName: "CSS",
		path: "/css-demo",
		children: [
			{
				menuName: "盒模型",
				path: "/box-model",
				component: BoxModel,
			},
			{
				menuName: "弹性盒子",
				path: "/flex-box",
				component: FlexBox,
			},
		],
	},
	{
		menuName: "工具集",
		path: "/utils-box",
		children: [
			{
				menuName: "trim的实现",
				path: "/trim",
				component: null,
			},
		],
	},
];
