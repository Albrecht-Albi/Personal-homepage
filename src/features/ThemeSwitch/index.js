import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Icon, IconWrapper, Status, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Status>dark mode {isDarkTheme ? "on" : "off"} </Status>
                <Box>
                    <IconWrapper moveToRight={isDarkTheme} >
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>

    );
};

export default ThemeSwitch;