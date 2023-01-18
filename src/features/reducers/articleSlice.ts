import { Article } from "@/types/article";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticlesState {
  articles: Article[],
  article: Article | null,
  isLoading: boolean,
  isError: boolean,
}

const initialState: ArticlesState = {
  articles: [],
  article: null,
  isLoading: false,
  isError: false,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articlesFetching(state) {
      state.isLoading = true;
      state.article = null;
    },
    articlesFetchingSuccess(state, action: PayloadAction<Article[]>) {
      state.isLoading = false;
      state.articles = action.payload;
    },
    articleFetchingSuccess(state, action: PayloadAction<Article>) {
      state.isLoading = false;
      state.article = action.payload;
    },
    articlesFetchingError(state) {
      state.isLoading = false;
      state.isError = true;
    }
  }
})

export default articlesSlice.reducer;

export const {
  articlesFetching,
  articlesFetchingSuccess,
  articlesFetchingError
} = articlesSlice.actions;
