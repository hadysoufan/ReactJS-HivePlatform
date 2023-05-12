import {
  FEED_LIST_REQUEST,
  FEED_LIST_SUCCESS,
  FEED_LIST_FAIL,
} from '../constants/feedConstants';

export const feedListReducer = (
  state = { feeds: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case FEED_LIST_REQUEST:
      return { loading: true, feeds: [], error: null };

    case FEED_LIST_SUCCESS:
      return { loading: false, feeds: action.payload };

    case FEED_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
