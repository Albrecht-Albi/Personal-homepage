const colorName = {
    scienceBlue: "#0366D6",
    scienceBlueLighter: "rgba(3, 102, 214, 0.2)",
    blumine: "#35669E",
    dodgerBlue: "#2188FF",
    shipCove: "#6D93BE",
    anakiwa: "#8CC2FF",
    tropicalBlue: "#CDE0F7",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    porcelian: "rgba(209, 213, 218, 0.3)",
    mercury: "#E5E5E5",
    salteGray: "#6E7E91",
    doveGray: "#6D6D6D",
    mineShaft: "#252525",
    mineShaftLighter: "#313131",
};

const common = {
    breakpoint: {
        mobileMax: 767,
        tabletVerticalMax: 911,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorName.scienceBlue,
        textPrimary: colorName.mineShaft,
        site: {
            background: colorName.whiteLilac,
            text: colorName.salteGray,
        },
        buttonLink: {
            text: colorName.white,
            shadow: colorName.anakiwa,
        },
        box: {
            background: colorName.white,
            border: colorName.ironTransparent,
            borderHover: colorName.scienceBlueLighter,
        },
        headerLine: colorName.mercury,
        title: {
            border: colorName.porcelian,
            borderHover: colorName.tropicalBlue,
            header: colorName.scienceBlue,
        },
        portfolio: {
            title: colorName.scienceBlue,
        },
        themeSwitch: {
            background: colorName.mercury,
            icon: colorName.white
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorName.dodgerBlue,
        textPrimary: colorName.white,
        site: {
            background: colorName.mineShaft,
            text: colorName.white,
        },
        buttonLink: {
            text: colorName.white,
            shadow: colorName.shipCove,
        },
        box: {
            background: colorName.mineShaftLighter,
            border: colorName.ironTransparent,
            borderHover: colorName.scienceBlueLighter,
        },
        headerLine: colorName.tundra,
        title: {
            border: colorName.porcelian,
            borderHover: colorName.blumine,
            header: colorName.white,
        },
        portfolio: {
            title: colorName.white,
        },
        themeSwitch: {
            background: colorName.doveGray,
            icon: colorName.mineShaft,
        },
    },
};