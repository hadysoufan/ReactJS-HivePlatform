import {
  FEED_LIST_REQUEST,
  FEED_LIST_SUCCESS,
  FEED_LIST_FAIL,
} from '../constants/feedConstants';

import axios from 'axios';

export const listFeeds = () => async (dispatch) => {
  try {
    dispatch({ type: FEED_LIST_REQUEST });
    const { data } = await axios.get('/feeds/');
    dispatch({ type: FEED_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEED_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
