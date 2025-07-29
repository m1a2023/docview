import { useEffect, useState } from "react";
import { ApplicationTheme, type EColors } from "./Theme";

const useTheme = (appTheme: ApplicationTheme) => {
	const [theme, setTheme] = useState<EColors>(appTheme.getColor());

	useEffect(() => {
		appTheme.onChange(setTheme);
	}, [appTheme]);

	const setColor = (color: EColors) => {
		appTheme.setColor(color);
	};

	return [theme, setColor];
};

export default useTheme;
