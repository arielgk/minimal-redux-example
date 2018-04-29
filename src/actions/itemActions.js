import * as types from "./actionTypes";

export const getItems = () => {
  const items = [
    {
      id: 1,
      name: "item 1",
      slug: "item-1"
    },
    {
      id: 2,
      name: "item 2",
      slug: "item-2"
    }
  ];
  return dispatch => {
    dispatch({ type: types.GET_ITEMS_SUCCESS, items: items });
  };
};
export const deleteAllItems = () => {
  return dispatch => {
    dispatch({ type: types.DELETE_ITEMS, items: [] });
  };
};
