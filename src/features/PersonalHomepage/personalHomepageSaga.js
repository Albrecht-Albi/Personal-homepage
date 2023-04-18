import { takeLatest, delay, call, put } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./personalHomepageSlice";

const loadingDelay = 2000;

function* fetchRepositoriesHandler() {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories);
    yield put(fetchRepositoriesSuccess(repositories))
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
};

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};