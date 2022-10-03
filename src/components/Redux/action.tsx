export const GET_DATA = "@@APP/GET_DATA";
export const PUT_DATA = "@@APP/PUT_DATA";

export const actionCreators = {
  getData: () => ({
    type: GET_DATA,
  }),
  putData: (payload: number) => ({
    type: PUT_DATA,
    payload,
  }),
};
