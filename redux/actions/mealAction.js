import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/types";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

export const setFilter = (filterSittings) => {
  return {
    type: SET_FILTERS,
    filters: filterSittings,
  };
};

// export const addFav = (item) => (dispatch, getState) => {
//     axios
//       .post("/api/items", item, tokenConfig(getState))
//       .then((res) =>
//         dispatch({
//           type: ADD_ITEMS,
//           payload: res.data,
//         })
//       )
//       .catch((err) =>
//         dispatch(returnErrors(err.response.data, err.response.status))
//       );
// };
