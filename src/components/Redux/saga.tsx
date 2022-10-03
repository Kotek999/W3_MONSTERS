import { takeEvery, call, put, all, fork, select } from "redux-saga/effects";
import { actionCreators, GET_DATA } from "./action";
import content from "../CardContentData/content.json";

export const data: any = {
  content_DATA: content,
};

function* onGetDataContentSaga(): any {
  try {
    const cardData = yield select((state) => state.data);

    yield put(actionCreators.putData(data[cardData]));
  } catch (error) {
    yield put(actionCreators.putData(0));
  }
}

function* getDataContentSaga() {
  yield takeEvery(GET_DATA, onGetDataContentSaga);
}

export function* dataContentSaga() {
  yield all([fork(getDataContentSaga)]);
}
