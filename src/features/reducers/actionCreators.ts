import { Article } from "@/types/article";
import axios from "axios";
import { AppDispatch } from "../store/store";
import { articlesSlice } from "./articleSlice";

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const fetchArticles = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(articlesSlice.actions.articlesFetching())
    const response = await axios.get<Article[]>(BASE_URL)
    dispatch(articlesSlice.actions.articlesFetchingSuccess(response.data))
  } catch (e) {
    dispatch(articlesSlice.actions.articlesFetchingError())
  }
}

export const fetchOneArticle = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(articlesSlice.actions.articlesFetching())
    const response = await axios.get<Article>(BASE_URL + `${id}`)
    dispatch(articlesSlice.actions.articleFetchingSuccess(response.data))
  } catch (e) {
    dispatch(articlesSlice.actions.articlesFetchingError())
  }
}