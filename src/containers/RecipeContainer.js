"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const RecipeContainer = ({ id }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handleGetRecipe = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipe/${id}`);
      const data = response.data;
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      {notFound && (
        <div>
          <h2>NOT FOUND</h2>
        </div>
      )}
      {loading && "Loading..."}
      {!loading && <section>CONTENIDO</section>}
    </div>
  );
};

export default RecipeContainer;
