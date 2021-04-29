import { TOGGLE_FAVORITE } from "../actions/types";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
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
