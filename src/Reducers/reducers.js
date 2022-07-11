import {
  GET_CATEGORY_DISHES_FAILURE,
  GET_CATEGORY_DISHES_SUCCESS,
  GET_DETAILED_RECIPE_FAILURE,
  GET_DETAILED_RECIPE_SUCCESS,
  GET_EACH_RECIPE,
  GET_RECIPE_CATEGORIES,
  GET_RECIPE_DISHES,
  GET_RECIPE_FAILURE,
  GET_RECIPE_SUCCESS,
} from "../ActionTypes/posts";

const initialState = {
  loading: false,
  categories: [],
  dishes: [],
  error: "",
  recipe: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_CATEGORIES:
      return { ...state, loading: true };
    case GET_RECIPE_SUCCESS:
      return { ...state, categories: action.categories, loading: false };
    case GET_RECIPE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case GET_RECIPE_DISHES:
      return { ...state, loading: true };
    case GET_CATEGORY_DISHES_SUCCESS:
      return { ...state, dishes: action.dishes, loading: false };
    case GET_CATEGORY_DISHES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case GET_EACH_RECIPE:
      return { ...state, loading:true };
    case GET_DETAILED_RECIPE_SUCCESS:
      return { ...state, recipe: action.recipe, loading: false };
    case GET_DETAILED_RECIPE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
