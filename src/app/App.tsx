import { createContext } from "react";
import { ApplicationTheme } from "../features/theme/Theme";
import type { GlobalContext } from "../shared/types/context/GlobalContext";
import { Outlet } from "react-router";
import useTheme from "../features/theme/UseTheme";

// App context creation
const AppContext = createContext<GlobalContext | null>(null);

const App = (): React.ReactElement => {
	// Get and set application theme
	const [theme, setTheme] = useTheme(new ApplicationTheme());

	// Fill app context
	const context: GlobalContext = {
		SetColorTheme: setTheme,
	};

	return (
		<AppContext.Provider value={context}>
			<div data-bs-theme={theme}>
				<Outlet />
			</div>
		</AppContext.Provider>
	);
};

export default App;
