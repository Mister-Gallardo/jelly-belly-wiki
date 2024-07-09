import { Card, CardContent, Typography } from "@mui/material";
import { ICombination } from "../services/interfaces";

export default function CombinationCard({
  combination,
}: {
  combination: ICombination;
}) {
  return (
    <Card sx={{ width: "450px" }}>
      <CardContent>
        <Typography
          sx={{
            marginBottom: "10px",
            fontWeight: "bold",
            fontFamily: "Open Sans, sans-serif",
          }}
          variant="h5"
          component="div"
        >
          {combination.name}
        </Typography>
        <Typography variant="h6">
          Recipe: {combination.tag.join(" ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
