import { Outlet } from "react-router";
import Navbar from "../widgets/navbar/Navbar";
import { ColorTheme } from "../features/theme/ColorTheme";

const AppLayout = (): React.ReactElement => {
	return (
		<div
			data-bs-theme={ColorTheme(true)}
			className="container-fluid my-3 d-flex flex-column gap-3"
		>
			<Navbar />
			<main className="container" data-bs-theme={ColorTheme(true)}>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
