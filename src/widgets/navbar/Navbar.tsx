import { useContext } from "react";
import { IconSvgDocumentStack } from "../../components/icons/IconSvgDocumentStack";
import { NavbarButtonLink } from "./NavbarButtonLink";
import { AppContext } from "../../app/AppContext";

const Navbar = (): React.ReactElement => {
	// Get auth info
	const auth = useContext(AppContext)?.Logged;
	// Handle log out if logged in
	const handleLogOut = () => {
		auth?.setLoggedIn(false);
	};
	// Get theme
	const theme = useContext(AppContext)?.Theme;
	// Inverse theme for 'Log in' or 'Log out' button
	const buttonColor = (): string | undefined => {
		return theme?.theme;
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-expand-sm">
				<div className="container-fluid gap-2">
					<NavbarButtonLink
						text="Docshell"
						className="navbar-brand"
						href="/documents"
					>
						<IconSvgDocumentStack size={36} />
					</NavbarButtonLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="true"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav gap-2">
							<NavbarButtonLink text="View" href="/documents/view" />
							<NavbarButtonLink text="Upload" href="/documents/upload" />
						</div>
					</div>

					<NavbarButtonLink
						text={auth?.loggedIn ? "Log out" : "Log in"}
						href="/login"
						onClick={handleLogOut}
						className={`btn btn-${buttonColor()} py-2 px-3`}
					/>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
