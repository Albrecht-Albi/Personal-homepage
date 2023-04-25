import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GobalStyle"
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";
import { selectIsDarkTheme } from "../../features/themeSlice";
import { Normalize } from "styled-normalize"
import PersonalHomepage from "../../features/PersonalHomepage/PersonalHomepage";

const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <GlobalStyle />
            <Normalize />
            <PersonalHomepage />
        </ThemeProvider>
    );
};

export default App;