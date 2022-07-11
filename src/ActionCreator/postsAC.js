import {
  GET_CATEGORY_DISHES_FAILURE,
  GET_CATEGORY_DISHES_SUCCESS,
  GET_DETAILED_RECIPE_FAILURE,
  GET_DETAILED_RECIPE_SUCCESS,
  GET_EACH_RECIPE,
  GET_RECIPE_CATEGORIES,
  GET_RECIPE_FAILURE,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_DISHES,
} from "../ActionTypes/posts";
import axios from "axios";

export function getRecipeCategories() {
  return { type: GET_RECIPE_CATEGORIES };
}
export function getRecipeCategoriesSuccess(categories) {
  return { type: GET_RECIPE_SUCCESS, categories };
}

export function getRecipeCategoriesFailure(error) {
  return { type: GET_RECIPE_FAILURE, error };
}

export function getRecipeDishes() {
  return { type: GET_RECIPE_DISHES };
}

export function getCategoryDishesSuccess(dishes) {
  return { type: GET_CATEGORY_DISHES_SUCCESS, dishes };
}

export function getCategoryDishesFailure(error) {
  return { type: GET_CATEGORY_DISHES_FAILURE, error };
}

export function getEachRecipe() {
  return { type: GET_EACH_RECIPE };
}

export function getDetailedRecipeSuccess(recipe) {
  return { type: GET_DETAILED_RECIPE_SUCCESS, recipe };
}

export function getDetailedRecipeFailure(error) {
  return { type: GET_DETAILED_RECIPE_FAILURE, error };
}

export const categories_api_req = (dispatch) => {
  dispatch(getRecipeCategories());
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    .then((response) => {
      const categoriesData = response.data.categories;
      dispatch(getRecipeCategoriesSuccess(categoriesData));
    })
    .catch((err) => {
      const errormsg = err.message;
      console.log(errormsg);
      dispatch(getRecipeCategoriesFailure(errormsg));
    });
};

export const dishes_api_request = (dispatch, params) => {
  dispatch(getRecipeDishes());
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
    .then((response) => {
      const dishesData = response.data.meals;
      dispatch(getCategoryDishesSuccess(dishesData));
    })
    .catch((err) => {
      const errormsg = err.message;
      dispatch(getCategoryDishesFailure(errormsg));
    });
};

export const recipe_details_api_request = (dispatch, params) => {
  dispatch(getEachRecipe());
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    .then((response) => {
      const recipeData = response.data.meals;
      dispatch(getDetailedRecipeSuccess(recipeData));
    })
    .catch((err) => {
      const errormsg = err.message;
      dispatch(getDetailedRecipeFailure(errormsg));
    });
};
