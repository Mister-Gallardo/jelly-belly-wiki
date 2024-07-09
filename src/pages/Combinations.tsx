import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCombinations } from "../services/api";
import { ICombination } from "../services/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import CombinationCard from "../components/CombinationCard";

export default function Combinations() {
  const [combinationList, setCombinationList] = useState<ICombination[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setCombinations();
    }, 0);

    return () => clearTimeout(timeOutId);
  }, []);

  async function setCombinations() {
    try {
      const combination = await getCombinations(
        combinationList.length / 10 + 1
      );
      setCombinationList([...combinationList, ...combination]);
    } catch (e) {
      setHasMore(false);
      console.log("Ошибка", e);
    }
  }

  return (
    <InfiniteScroll
      dataLength={combinationList.length}
      style={{ width: "100%" }}
      next={setCombinations}
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
        {combinationList.map((combination: ICombination) => (
          <CombinationCard
            combination={combination}
            key={combination.combinationId}
          />
        ))}
      </Box>
    </InfiniteScroll>
  );
}
