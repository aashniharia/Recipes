import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RecipeCategories from "./Components/RecipeCategories";
import { Route, Routes } from "react-router-dom";
import CategoryDetails from "./Components/CategoryDetails";
import DeatailedRecipe from "./Components/DetailedRecipe";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<RecipeCategories to="/" replace />} />
        <Route path="/categories" exact element={<RecipeCategories />} />
        <Route path="/categories/:id" exact element={<CategoryDetails />} />
        <Route path="/categories/:id/:id" exact element={<DeatailedRecipe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
