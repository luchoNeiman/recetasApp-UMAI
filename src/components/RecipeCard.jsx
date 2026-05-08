import Image from "next/image";
import Link from "next/link";
import RecipeActions from "@/components/RecipeActions";

const IMAGE_HEIGHT = {
  hero: "min-h-[12rem] md:min-h-[16rem]",
  tall: "min-h-[11rem] md:min-h-[15rem]",
  wide: "min-h-[10rem] md:min-h-[12rem]",
  default: "min-h-[10rem] md:min-h-[11rem]",
};

const RecipeCard = ({ recipe, accentColor, shadowColor, tileType }) => {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/5 bg-white"
      style={{ boxShadow: `0 14px 40px -24px ${shadowColor}` }}
    >
      <div className={`relative w-full ${IMAGE_HEIGHT[tileType] || IMAGE_HEIGHT.default}`}>
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: accentColor }}
        >
          {recipe.cuisine || "Global"}
        </span>
      </div>

      <div className="flex grow flex-col gap-4 p-5">
        <div>
          <h3 className="line-clamp-2 text-xl font-black leading-tight text-[#7c2d12]">{recipe.name}</h3>
          <p className="mt-1 text-sm text-[#575757]">
            {recipe.difficulty} · {recipe.prepTimeMinutes} min · {recipe.servings} porciones
          </p>
        </div>

        <RecipeActions initialRating={recipe.rating} accentColor={accentColor} />

        <Link
          href={`/recipe/${recipe.id}`}
          className="mt-auto rounded-xl px-4 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#9a3412" }}
        >
          Ver receta
        </Link>
      </div>
    </article>
  );
};

export default RecipeCard;