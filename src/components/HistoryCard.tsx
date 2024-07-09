import { Card, CardContent, Typography } from "@mui/material";
import { IHistory } from "../services/interfaces";

export default function HistoryCard({ history }: { history: IHistory }) {
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
          {history.year}
        </Typography>
        <Typography variant="body1">{history.description}</Typography>
      </CardContent>
    </Card>
  );
}
