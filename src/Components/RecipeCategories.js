// Recipe Categories: Displays a list of recipe categories using Redux
//  CSS Styling using: styled components and flexbox
// API calling:using axios

import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  getRecipeCategoriesSuccess,
  getRecipeCategoriesFailure,
  getRecipeCategories,
  categories_api_req,
} from "../ActionCreator/postsAC";
import styledComponents from "styled-components";

import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const Container = styledComponents.div`

background:grey;
margin:4px;
padding:4px;


`;
const CategoryContainer = styledComponents.div`
background:white;
margin:12px 0 12px 0;
padding:3px;
display:flex;
flex-wrap:wrap ;


`;

const CategoryList = styledComponents.li`

list-style-type: none;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
font-weight:bold;
flex-basis:100%;

`;
const StylingDiv = styledComponents.div`
display:flex;
flex-direction:row;
flex-basis:100%;
@media (min-width: 320px){
  display:block
}
`;

const CategoryDesc = styledComponents.div`

display:flex;
font-style:italic;
flex-grow:3;
flex-basis:0;
@media (min-width: 320px){
  display:block
}

`;

const CategoryPic = styledComponents.div`
display:flex;
flex-grow:1;
flex-basis:0;
@media (min-width: 320px){
  display:block
  width: 50%;
}

`;

const RecipeCategories = ({ categories, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    categories_api_req(dispatch);
  }, []);

  return (
    <>
      <h1>Recipe Categories</h1>
      {loading && (
        <h1>
          <Loader />
        </h1>
      )}

      <Container>
        {!loading &&
          categories &&
          categories.map((category) => (
            <CategoryContainer key={category.idCategory}>
              <CategoryList>
                <NavLink to={`/categories/${category.strCategory}`}>
                  {category.strCategory}
                </NavLink>
              </CategoryList>
              <StylingDiv>
                <CategoryPic>
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  ></img>
                </CategoryPic>
                <CategoryDesc>{category.strCategoryDescription}</CategoryDesc>
              </StylingDiv>
            </CategoryContainer>
          ))}
      </Container>
    </>
  );
};
const mapStatetoProps = (state) => ({
  categories: state.postsReducer.categories,
  loading: state.postsReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeCategories: () => dispatch(getRecipeCategories()),
    getRecipeCategoriesSuccess: (categories) =>
      dispatch(getRecipeCategoriesSuccess(categories)),
    getRecipeCategoriesFailure: (errormsg) =>
      dispatch(getRecipeCategoriesFailure(errormsg)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(RecipeCategories);
