'use client'

import CardsGrids from "@/components/CardsGrids";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleGetItems = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes?limit=0");
      const data = response.data.recipes;
      console.log(data);
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log("Hubo un error", error);
      setLoading(false);
      setError(true);
      setErrorMsg("hubo un error al cargar los items");
    }
  };


  useEffect(() => {
    handleGetItems();
  }, []); //el array de dependencias vacío hace que el useEffect se ejecute solo una vez, cuando el componente se monta por primera vez. Esto es útil para cargar datos o realizar acciones que solo necesitan ocurrir una vez durante el ciclo de vida del componente.

  return (
    <div>
      <section className="bg-slate-900">
        {!loading && <CardsGrids items={items} title={"Recetas App"}/>}
        {loading && <div>LOADING....</div>}
        {error !== '' && <div>{errorMsg}</div>}
      </section>
    </div>
  )
}

export default HomeContainer