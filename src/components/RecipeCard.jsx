import Image from "next/image";
import Link from "next/link";
import RecipeActions from "@/components/RecipeActions";

const RecipeCard = ({
  recipe,
  accentColor = "#9a3412",
  hoverShadow = "hover:shadow-[0_24px_48px_rgba(17,24,39,0.14)]",
}) => {
  return (
    <article
      className={[
        "bg-white border border-[#22222214] rounded-[1.5rem]",
        "shadow-[0_20px_40px_rgba(17,24,39,0.08)] overflow-hidden",
        "transition-all duration-[180ms] hover:-translate-y-1 h-full",
        hoverShadow,
        "flex flex-col",
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
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

      {/* Contenido */}
      <div className="flex grow flex-col gap-3 p-5">
        <p className="text-gray-500 text-[0.82rem] font-semibold tracking-wider uppercase">
          {recipe.cuisine} · {recipe.difficulty} · {recipe.prepTimeMinutes} min
        </p>

        <h3
          className="font-black leading-[1.1] text-balance text-[#7c2d12] m-0 line-clamp-2"
          style={{ fontSize: "clamp(1.1rem,2vw,1.5rem)" }}
        >
          {recipe.name}
        </h3>

        {recipe.tags?.length > 0 && (
          <p className="text-sm text-[#575757] line-clamp-2">
            {recipe.tags.slice(0, 3).join(" · ")}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-3">
          <RecipeActions
            initialRating={recipe.rating}
            accentColor={accentColor}
          />
          <Link
            href={`/recipe/${recipe.id}`}
            className="rounded-xl px-4 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#9a3412" }}
          >
            Ver receta
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
