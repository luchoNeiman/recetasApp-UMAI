import RecipeContainer from "@/containers/RecipeContainer"

const page = async ({params}) => {
  const { id } = await params;
  return (
    <RecipeContainer id={id} />
  )
}

export default page