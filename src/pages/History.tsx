import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getHistory } from "../services/api";
import { IHistory } from "../services/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import HistoryCard from "../components/HistoryCard";

export default function History() {
  const [historyList, setHistoryList] = useState<IHistory[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setHistory();
    }, 0);

    return () => clearTimeout(timeOutId);
  }, []);

  async function setHistory() {
    try {
      const history = await getHistory(historyList.length / 10 + 1);
      setHistoryList([...historyList, ...history]);
    } catch (e) {
      setHasMore(false);
      console.log("Ошибка", e);
    }
  }

  return (
    <InfiniteScroll
      dataLength={historyList.length}
      style={{ width: "100%" }}
      next={setHistory}
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
        {historyList.map((history: IHistory) => (
          <HistoryCard history={history} key={history.mileStoneId} />
        ))}
      </Box>
    </InfiniteScroll>
  );
}
