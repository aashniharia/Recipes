// This component displays the detailed recipe
// CSS styling done using : inline styling and bootstrap

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, connect } from "react-redux";
import {
  getDetailedRecipeSuccess,
  getDetailedRecipeFailure,
  getEachRecipe,
  recipe_details_api_request,
} from "../ActionCreator/postsAC";
import Loader from "./Loader";

const DeatailedRecipe = ({
  recipe,
  loading,
}) => {
  const dispatch = useDispatch();
  let params = useParams();
  const API_INGREDIENT_COUNT=20

  useEffect(() => {
    recipe_details_api_request(dispatch,params)
  }, []);
// Function to display the ingredients
  const getIngredients = (eachRecipe) => {
    let content = [];
    if (eachRecipe) {
      for (var i = 1; i <= API_INGREDIENT_COUNT; i++) {
        var ingredient = "strIngredient" + i;
        var measure = "strMeasure" + i;
        eachRecipe[ingredient] &&
          eachRecipe[measure] &&
          content.push(
            <Row
              style={{
                background: "#F0EDEA",
                margin: "3px",
              }}
              key={i}
            >
              <h6>{eachRecipe[ingredient] + "-" + eachRecipe[measure]}</h6>
            </Row>
          );
      }

      return content;
    }
  };
  return (
    <>
      {loading && <Loader />}
      <Container>
        {recipe &&
          recipe.map((eachRecipe) => (
            <Row key={eachRecipe.idMeal}>
              <Row mt="10px">
                <Col>
                  <Col sm="7">
                    <h2
                      style={{
                        fontFamily: "Lucida Handwriting, Times,cursive",
                        color: "#F3871A",
                      }}
                    >
                      {eachRecipe.strMeal}
                    </h2>
                  </Col>
                  {eachRecipe.strArea && (
                    <Col className="font-weight-bolder">
                      <h3
                        style={{
                          fontFamily: "Lucida Handwriting, Times,cursive",
                          color: "#B1D6CE",
                        }}
                      >
                        Region of Origin : {eachRecipe.strArea}
                      </h3>
                    </Col>
                  )}
                  <h4>Ingredients and Measures</h4>
                  {getIngredients(eachRecipe)}
                </Col>
                <Col sm="4">
                  <img
                    style={{
                      width: "425px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                    src={eachRecipe.strMealThumb}
                    alt={eachRecipe.strMeal}
                  ></img>
                </Col>
              </Row>
              <Row m="5">
                <h4>Instructions</h4>
                <Col
                  style={{
                    background: "#F0EDEA",
                    margin: "3px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "22px",
                      fontFamily: "Times New Roman, Times,serif",
                    }}
                  >
                    {eachRecipe.strInstructions}
                  </p>
                </Col>
              </Row>
              <Row>
                <a href={eachRecipe.strYoutube}>
                  <h4>
                    Check out the Recipe Here{" "}
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="2x"
                      style={{ color: "#FF0000" }}
                    />
                  </h4>
                </a>
              </Row>
            </Row>
          ))}
      </Container>
    </>
  );
};

const mapStatetoProps = (state) => ({
  recipe: state.postsReducer.recipe,
  loading: state.postsReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getEachRecipe: () => dispatch(getEachRecipe()),
    getDetailedRecipeSuccess: (recipe) =>
      dispatch(getDetailedRecipeSuccess(recipe)),
    getDetailedRecipeFailure: (errormsg) =>
      dispatch(getDetailedRecipeFailure(errormsg)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(DeatailedRecipe);
