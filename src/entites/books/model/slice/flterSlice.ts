import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInititalStateFilter = {
  filterTags: string[];
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterTags: [],
  } as TInititalStateFilter,
  reducers: {
    changeFilter: (state, { payload }: PayloadAction<string>) => {
      if (!state.filterTags.includes(payload)) {
        state.filterTags = [...state.filterTags, payload];
        return;
      }
      state.filterTags = state.filterTags.filter((el) => el !== payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
