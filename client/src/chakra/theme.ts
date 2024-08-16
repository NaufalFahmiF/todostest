import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};
const fonts ={
	body: 'sans-serif'
  }
// 3. extend the theme
const theme = extendTheme({
	config,
	fonts,
	styles: {
		global: (props: any) => ({
			body: {
				backgroundColor: mode("gray.500", "")(props),
			},
		}),
	},
});

export default theme;