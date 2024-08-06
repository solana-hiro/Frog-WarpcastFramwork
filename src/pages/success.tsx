import { Frog, Button } from "frog";
import { createSystem } from "frog/ui";

import Row from "./../component/Row";

export const { Box, Columns, Column, Image, Text } = createSystem();
export const app = new Frog({ title: "Detail" });

app.frame("/", (c) => {
  return c.res({
    image: (
      <div
        style={{
          background: "#252539",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "5%",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            fontSize: "60",
            color: "white",
            textAlign: "center",
            alignItems: "center",
            padding: "30px 100px",
          }}
        >
          Transaction Success
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Row
            item={"Transaction ID"}
            value={"0xxxxxxx..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
          ></Row>
          <Row item={"Trader"} value={"[Warpcast name]"}></Row>
          <Row item={"Chain"} value={"Ethereum"}></Row>
          <Row
            item={"Seller Wallet"}
            value={"0xxx…xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
          ></Row>
          <Row
            item={" Trader Asset"}
            value={"Bored Ape Yacht Club 1514 - Bored Ape Yacht Club 6960"}
          ></Row>
          <Row item={"Acceptor Asset"} value={"Ethereum"}></Row>
          <Row item={"Acceptor Cost"} value={"28.31 Eth + Gas"}></Row>
        </div>
      </div>
    ),
    intents: [<Button.Reset>First Page</Button.Reset>],
  });
});
