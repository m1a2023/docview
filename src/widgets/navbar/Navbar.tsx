const Navbar = (): React.ReactElement => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-expand-sm">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Docshell
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								View
							</a>
							<a className="nav-link" href="#">
								Upload
							</a>
							<a className="nav-link disabled" href="#" aria-disabled="true">
								Disabled
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
