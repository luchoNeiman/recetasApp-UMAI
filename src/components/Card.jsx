"use client";

import Image from "next/image";
import Link from "next/link";
import RecipeActions from "./RecipeActions";

const Card = ({ id, name, rating, image, cuisine, difficulty }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border bg-white transition duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ borderColor: "#e5e7eb" }}
    >
      {/* Imagen */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Badge de categoría */}
        {cuisine && (
          <div
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: "#9a3412" }}
          >
            {cuisine}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3
          className="mb-2 text-xl font-black tracking-tight line-clamp-2"
          style={{ color: "#7c2d12" }}
        >
          {name}
        </h3>

        {/* Meta Info */}
        <div className="mb-4 flex gap-4 text-sm" style={{ color: "#575757" }}>
          {difficulty && <span>🔪 {difficulty}</span>}
        </div>

        {/* Acciones interactivas */}
        <RecipeActions id={id} initialRating={rating} />

        {/* Link a detalles */}
        <Link
          href={`/recipe/${id}`}
          className="mt-4 block w-full text-center py-2 rounded-lg font-semibold transition-colors duration-200 text-white"
          style={{ backgroundColor: "#9a3412" }}
        >
          Ver Receta
        </Link>
      </div>
    </div>
  );
};

export default Card;
