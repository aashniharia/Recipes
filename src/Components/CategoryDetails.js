// This Component Displays the dishes of a particular category
// CSS Styling Used:Bootstrap

import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Button, Row } from "react-bootstrap";
import {
  getCategoryDishesSuccess,
  getCategoryDishesFailure,
  getRecipeDishes,
  dishes_api_request,
} from "../ActionCreator/postsAC";
import Loader from "./Loader";

const CategoryDetails = ({ dishes, loading }) => {
  const dispatch = useDispatch();
  const DETAILED_BUTTON = "Detailed Recipe";
  let params = useParams();

  useEffect(() => {
    dishes_api_request(dispatch, params);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Container>
        <Row style={{ padding: "10px" }}>
          {!loading &&
            dishes &&
            dishes.map((dish) => (
              <Col sm="4" key={dish.idMeal}>
                <Card key={dish.idMeal} style={{ margin: "3px" }}>
                  <Card.Img
                    variant="top"
                    src={dish.strMealThumb}
                    style={{ height: "20%" }}
                  />
                  <Card.Body>
                    <Card.Title>{dish.strMeal}</Card.Title>
                    <Button
                      href={"/categories/" + dish.strMeal + "/" + dish.idMeal}
                      variant="primary"
                    >
                      {DETAILED_BUTTON}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
const mapStatetoProps = (state) => ({
  dishes: state.postsReducer.dishes,
  loading: state.postsReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeDishes: () => dispatch(getRecipeDishes()),
    getCategoryDishesSuccess: (dishes) =>
      dispatch(getCategoryDishesSuccess(dishes)),
    getCategoryDishesFailure: (errormsg) =>
      dispatch(getCategoryDishesFailure(errormsg)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(CategoryDetails);
