import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";

const Keirekiyouyaku = () => {
  return (
    <Box>
      <Heading
        as="h2"
        display="block"
        borderBottom="2px solid"
        borderColor="gray"
        fontSize="2xl"
        mb="2"
      >
        経歴要約
      </Heading>
      <Text>
        2002年　6月~2008年　12月 日本マクドナルド株式会社　アルバイト勤務
        <br />
        採用から1年でアルバイトマネージャーに昇格、アルバイト育成、レジ金締め業務、店舗オープン作業などを担当
      </Text>
      <br />
      <Text>
        日本マクドナルド株式会社　正社員勤務
        <br />
        2008年　12月~2010年　5月　なんばパークス前店勤務
        <br />
        採用業務、在庫管理など担当
      </Text>
      <br />
      <Text>
        2010年　6月~2011年　1月　天満橋パナンテ店勤務
        <br />
        在庫管理、 搬入システム構築
        <br />
        人材育成
      </Text>
      <br />
      <Text>
        2011年　1月~2016年　3月　天神橋筋六丁目店勤務
        <br />
        アルバイトマネージャー育成、採用業務担当
      </Text>
      <br />
      <Text>
        2016年　4月~2020年　7月　ホテル近鉄ユニバーサルシティ店勤務
        <br />
        日本でも有数の店舗であるUSJの店舗において、歴代最高セールスを獲得。
        <br />
        特殊なイベントを除き1日の売上日本１を獲得。
      </Text>
      <br />
      <Text>
        2020年　8月~2021年　9月　JR野田駅前店勤務
        <br />
        退職し現在転職活動中
      </Text>
    </Box>
  );
};

export default Keirekiyouyaku;
