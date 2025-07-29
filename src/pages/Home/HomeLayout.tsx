import type React from "react";
import { Outlet } from "react-router";

const HomeLayout = (): React.ReactElement => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default HomeLayout;
