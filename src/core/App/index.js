import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GobalStyle"
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";
import { selectIsDarkTheme } from "../../features/ThemeSwitch/themeSlice";
import { Normalize } from "styled-normalize"
import PersonalHomepage from "../../features/PersonalHomepage/PersonalHomepage";
import { AppWrapper } from "../../features/PersonalHomepage/AppContainer/styled";

const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <GlobalStyle />
            <AppWrapper>
                <Normalize />
                <PersonalHomepage />
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;