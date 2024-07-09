import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IBean } from "../services/interfaces";

export default function BeanCard({ bean }: { bean: IBean }) {
  return (
    <Card sx={{ width: "450px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={bean.imageUrl}
        title={bean.flavorName}
      />
      <CardContent>
        <Typography
          sx={{
            color: bean.backgroundColor,
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {bean.flavorName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {bean.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
