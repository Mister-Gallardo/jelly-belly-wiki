import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBeans } from "../services/api";
import { IBean } from "../services/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import BeanCard from "../components/BeanCard";

export default function Beans() {
  const [beanList, setBeanList] = useState<IBean[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setBeans();
    }, 0);

    return () => clearTimeout(timeOutId);
  }, []);

  async function setBeans() {
    try {
      const beans = await getBeans(beanList.length / 10 + 1);
      setBeanList([...beanList, ...beans]);
    } catch (e) {
      setHasMore(false);
      console.log("Ошибка", e);
    }
  }

  return (
    <InfiniteScroll
      dataLength={beanList.length}
      style={{ width: "100%" }}
      next={setBeans}
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
        {beanList.map((bean: IBean) => (
          <BeanCard bean={bean} key={bean.beanId} />
        ))}
      </Box>
    </InfiniteScroll>
  );
}
