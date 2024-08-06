import { Frog, Button } from "frog";

import { app as successApp } from "./success";

import Row from "./../component/Row";

export const app = new Frog({ title: "Frog Frame" });

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
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: "40",
              color: "white",
              borderBottom: "1px white solid",
              width: "35%",
            }}
          >
            Trade Summary
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px 35px",
            position: "relative",
            flexDirection: "column",
            gap: "5",
          }}
        >
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

          <div
            style={{ display: "flex", padding: "20", flexDirection: "column" }}
          >
            <Row item={"- Seller Ask"} value={"28 Eth"}></Row>
            <Row item={"- Project Royalties"} value={"28 Eth"}></Row>
            <Row item={"- Plateform Fee"} value={"0.03 Eth"}></Row>
            <Row item={"- Current Gas"} value={"10 gwei"}></Row>
          </div>
        </div>
      </div>
    ),
    intents: [
      <Button value="Accept" action="/success">
        Accept
      </Button>,
      <Button value="Counter">Counter</Button>,
      <Button.Reset>Member</Button.Reset>,
    ],
  });
});

app.route("/success", successApp);
