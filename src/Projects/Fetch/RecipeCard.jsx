const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="rounded-xl overflow-clip">
      <div className="bg-rose-700 p-2 flex justify-center">{recipe.name}</div>
      <img src={recipe.image_Url} alt="" />
    </div>
  );
};

export default RecipeCard;
