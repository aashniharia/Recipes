import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RecipeCategories from "./Components/RecipeCategories";
import { Routes, Route, Navigate } from "react-router-dom";
import CategoryDetails from "./Components/CategoryDetails";
import DeatailedRecipe from "./Components/DetailedRecipe";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/categories" element={<RecipeCategories />} />
        <Route path="/categories/:id" element={<CategoryDetails />} />
        <Route path="/categories/:id/:id" element={<DeatailedRecipe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
