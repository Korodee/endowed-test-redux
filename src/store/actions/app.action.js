import instance from "../../data/axios-setup";
import { actions } from "../reducers/app.reducer";

export const getAllPrices = (currency) => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true));
      const res = await instance.get(`/exchange-rates?currency=${currency}`);
      dispatch(actions.setData(res.data.data));
      dispatch(actions.setLoading(false));
    } catch (err) {
      dispatch(actions.setLoading(false));
      dispatch(actions.error());
    }
  };
};
