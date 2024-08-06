import NftCard from "./NftCard";

import { initNfts, nftsType } from "./../libs/nfts";

type NftGroupsProps = {
  nftNum: number;
};

const NftGroups = ({ nftNum }: NftGroupsProps) => {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "20",
        gap: "53",
        width: "100%",
        height: "55%",
        alignItems: "center",
        padding: "2% 3% 0 2%",
      }}
    >
      {initNfts &&
        initNfts?.map((nft: nftsType, index) => {
          let hover =
            index === nftNum
              ? "0px 0 40 rgba(235, 232, 232, 0.8)"
              : "0 0 0 rgba(235, 232, 232, 0.8)";
          return (
            <NftCard
              key={index}
              imgUrl={nft["imageUrl"]}
              nftId={nft["id"]}
              nftTitle={nft["title"]}
              hover={hover}
            />
          );
        })}
      <div
        style={{
          display: "flex",
          fontSize: "30",
          color: "white",
          position: "absolute",
          left: 0,
        }}
      >
        {"<"}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "30",
          color: "white",
          position: "absolute",
          right: "-3%",
        }}
      >
        {">"}
      </div>
    </div>
  );
};

export default NftGroups;
