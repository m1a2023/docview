import type React from "react";
import { Outlet } from "react-router";

const DocumentLayout = (): React.ReactElement => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default DocumentLayout;
