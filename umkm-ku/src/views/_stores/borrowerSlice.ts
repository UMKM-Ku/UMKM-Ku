import { createSlice } from "@reduxjs/toolkit";

export const borrowerSlice = createSlice({
  name: "borrower",
  initialState: {
    fundings: [],
  },
  reducers: {
    getFunding: (state, action) => {
      state.fundings = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getFunding } = borrowerSlice.actions;

export const fetchDataProduct = (params) => {
  return async function fetchDataProductThunk(dispatch) {
    dispatch(isLoading(true));
    try {
      let url = `https://api.h8-fern.foxhub.space/products?sellerId=${localStorage.authorId}`;

      if (params?.page) {
        url += `&page[number]=${params.page}`;
      }

      if (params?.category) {
        url += `&category=${params.category}`;
      }

      const response = await axios({
        url,
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(fetchProduct(response.data.rows));
      dispatch(getTotalProduct(response.data.count));
      dispatch(changePageProduct(response.data.page));
      dispatch(changeRows(response.data.rows.length));
    } catch (error) {
      toast.error("Oops something error!");
      dispatch(
        fetchError(
          `${error.response.status} ${error.response.statusText}` ||
            "Error Fetch Data"
        )
      );
    } finally {
      dispatch(isLoading(false));
    }
  };
};

export default borrowerSlice.reducer;
