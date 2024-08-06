import { createSystem } from "frog/ui";

const { Image } = createSystem();

type NftCardProps = {
  key: number;
  imgUrl: string;
  nftTitle: string;
  nftId: string;
  hover: string;
};

const NftCard = ({ key, imgUrl, nftTitle, nftId, hover }: NftCardProps) => {
  return (
    <div
      key={key}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "25",
        gap: "0",
        width: "22%",
        height: "100%",
        alignItems: "center",
        boxShadow: `${hover}`,
      }}
    >
      <div style={{ display: "flex", width: "100%", height: "75%" }}>
        <Image width="100%" src={imgUrl} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#373760",
          width: "100%",
          aspectRatio: "5/1",
          padding: "10",
          borderBottomLeftRadius: "20",
          borderBottomRightRadius: "20",
        }}
      >
        <div style={{ fontSize: "20", color: "white" }}>{nftTitle}</div>
        <div style={{ fontSize: "20", color: "#8e8e93" }}>{nftId}</div>
      </div>
    </div>
  );
};

export default NftCard;
