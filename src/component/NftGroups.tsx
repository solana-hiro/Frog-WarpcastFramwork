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
      {initNfts && initNfts.length > 0 &&
        (() => {
          // Determine the start and end indices
          const start = Math.min(Math.max(0, nftNum - 1), Math.max(0, initNfts.length - 4));
          const end = Math.min(initNfts.length, start + 4);

          return initNfts.slice(start, end).map((nft: nftsType, index) => {
            const actualIndex = start + index; // Calculate the actual index in the original array
            let hover =
              actualIndex === nftNum
                ? "0px 0 40px rgba(235, 232, 232, 0.8)"
                : "0 0 0 rgba(235, 232, 232, 0.8)";

            return (
              <NftCard
                key={actualIndex}
                imgUrl={nft.imageUrl}
                nftId={nft.id}
                nftTitle={nft.title}
                hover={hover}
              />
            );
          });
        })()}
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
