import { all } from "redux-saga/effects";
import { themeSaga } from "./features/ThemeSwitch/themeSaga";
import { personalHomepageSaga } from "./features/PersonalHomepage/personalHomepageSaga";

export default function* rootSaga() {
    yield all([
        personalHomepageSaga(),
        themeSaga(),
    ])
};