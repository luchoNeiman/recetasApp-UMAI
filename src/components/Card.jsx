"use client"; //sirve para indicar que este componente se renderiza en el cliente, no en el servidor
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, rating, image }) => {
  const [like, setLike] = useState(0);
  const [cardColor, setCardColor] = useState("light");
  const [showRanking, setShowRanking] = useState(false);

  const handleLikes = () => {
    if (like < 5 && cardColor === "dark") {
      setLike(like + 1);
    }
  };

  const handleColor = () => {
    setCardColor(cardColor === "light" ? "dark" : "light");
  };

  const handleShowRanking = () => {
    setShowRanking(!showRanking);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        cardColor === "dark"
          ? "border-slate-800 bg-slate-950 text-white shadow-slate-950/30"
          : "border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 shadow-slate-200/80"
      }`}
    >
      <Image src={image} width={200} height={500} alt={name} />

      <h3
        className={`mb-3 text-2xl font-black tracking-tight ${
          cardColor === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {name}
      </h3>

      {showRanking && (
        <p className="mb-4 text-sm leading-6 text-black">
          El Rating es de {rating}
        </p>
      )}

      {!showRanking && (
        <p className="mb-4 text-sm leading-6 text-black">Ver ranking</p>
      )}

      <button
        className={`mr-2 mb-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
          cardColor === "dark"
            ? "bg-white text-slate-950 hover:bg-slate-200"
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
        onClick={handleLikes}
      >
        Like {like}
      </button>

      <button
        className={`mr-2 mb-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
          cardColor === "dark"
            ? "bg-slate-800 text-white hover:bg-slate-700"
            : "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100"
        }`}
        onClick={handleColor}
      >
        Switch color
      </button>

      <button
        className={`mb-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
          cardColor === "dark"
            ? "bg-slate-800 text-white hover:bg-slate-700"
            : "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100"
        }`}
        onClick={handleShowRanking}
      >
        Show Ranking
      </button>

      <div className="flex justify-center items-center mt-10">
        <Link
          className={`mr-2 mb-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
            cardColor === "dark"
              ? "bg-slate-800 text-white hover:bg-slate-700"
              : "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100"
          }`}
          href={`/recipe/${id}`}
        >
          Ver receta
        </Link>
      </div>
    </div>
  );
};

export default Card;
