const localStorageKey = "theme"

export const saveThemeInLocalStorage = (selectIsDarkTheme) =>
    localStorage.setItem(localStorageKey, JSON.stringify(selectIsDarkTheme))

export const getThemeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey));