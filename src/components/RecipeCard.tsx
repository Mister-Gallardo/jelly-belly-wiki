import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IRecipe } from "../services/interfaces";

export default function RecipeCard({ recipe }: { recipe: IRecipe }) {
  return (
    <Card sx={{ width: "450px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={recipe.imageUrl}
        title={recipe.name}
      />
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold", fontFamily: "Open Sans, sans-serif" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {recipe.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
