import { all } from "redux-saga/effects";
import { themeSaga } from "./common/ThemeSwitch/themeSaga";
import { personalHomepageSaga } from "./features/PersonalHomepage/personalHomepageSaga";

export default function* rootSaga() {
  yield all([
    personalHomepageSaga(),
    themeSaga(),
  ])
};