import { Card, CardContent, Typography } from "@mui/material";
import { IFact } from "../services/interfaces";

export default function FactCard({ fact }: { fact: IFact }) {
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
          {fact.title}
        </Typography>
        <Typography variant="body1">{fact.description}</Typography>
      </CardContent>
    </Card>
  );
}
