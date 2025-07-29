import type { EColors } from "../../../features/theme/Theme";

export interface GlobalContext {
	SetColorTheme: EColors | ((color: EColors) => void);
}
