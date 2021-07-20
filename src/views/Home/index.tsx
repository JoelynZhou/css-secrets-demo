import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routes, RProps } from "../../utils/router";
const SubMenu = Menu.SubMenu;

export default function MenuData() {
	const renderMenu = (menu: RProps[]) => {
		return (menu || []).map((r) =>
			(r.children as any[])?.length > 0 ? (
				<SubMenu key={r.path as string} title={r.menuName}>
					{renderMenu(r.children as RProps[])}
				</SubMenu>
			) : (
				<Menu.Item key={r.path as string}>
					<Link to={r.path}>{r.menuName}</Link>
				</Menu.Item>
			)
		);
	};

	return <Menu mode="horizontal">{renderMenu(routes)}</Menu>;
}
