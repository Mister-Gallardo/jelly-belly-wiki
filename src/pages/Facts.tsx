import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getFacts } from "../services/api";
import { IFact } from "../services/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import FactCard from "../components/FactCard";

export default function Facts() {
  const [factList, setFactList] = useState<IFact[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setFacts();
    }, 0);

    return () => clearTimeout(timeOutId);
  }, []);

  async function setFacts() {
    try {
      const facts = await getFacts(factList.length / 10 + 1);
      setFactList([...factList, ...facts]);
    } catch (e) {
      setHasMore(false);
      console.log("Ошибка", e);
    }
  }

  return (
    <InfiniteScroll
      style={{ width: "100%" }}
      dataLength={factList.length}
      next={setFacts}
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
        {factList.map((fact: IFact) => (
          <FactCard fact={fact} key={fact.factId} />
        ))}
      </Box>
    </InfiniteScroll>
  );
}
