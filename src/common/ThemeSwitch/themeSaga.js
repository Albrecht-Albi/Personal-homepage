import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectIsDarkTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandle() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveThemeInLocalStorage, isDarkTheme);
};

export function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandle);
};