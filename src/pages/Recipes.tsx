import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import { IRecipe } from "../services/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setRecipes();
    }, 0);

    return () => clearTimeout(timeOutId);
  }, []);

  async function setRecipes() {
    try {
      const recipe = await getRecipes(recipeList.length / 10 + 1);
      setRecipeList([...recipeList, ...recipe]);
    } catch (e) {
      setHasMore(false);
      console.log("Ошибка", e);
    }
  }

  return (
    <InfiniteScroll
      dataLength={recipeList.length}
      style={{ width: "100%" }}
      next={setRecipes}
      hasMore={hasMore}
      loader={<CircularProgress sx={{ margin: "10px 47.5vw" }} size={60} />}
      endMessage={
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "50px" }}
        >
          Поздравляю! Вы дошли до конца ;D
        </Typography>
      }
    >
      <Box
        sx={{
          margin: "100px auto 50px",
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {recipeList.map((recipe: IRecipe) => (
          <RecipeCard recipe={recipe} key={recipe.recipeId} />
        ))}
      </Box>
    </InfiniteScroll>
  );
}
