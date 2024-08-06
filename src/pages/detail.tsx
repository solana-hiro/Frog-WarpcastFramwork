import { Frog, Button } from "frog";
import { createSystem } from "frog/ui";

export const { Box, Columns, Column, Image, Rows, Row, Text } = createSystem();
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
        }}
      >
        <Columns gap="20">
          <Column width="1/4">
            <div
              style={{
                display: "flex",
                width: "100%",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <Image
                width="64"
                src="https://warpcast-nft-frame.vercel.app/asset/image/NFT1.png"
              />
            </div>
          </Column>
          <Column width="3/4">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    fontSize: "30px",
                    color: "white",
                    borderBottom: "2px white solid",
                    width: "40%",
                  }}
                >
                  Details
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Rows gap="8" grow>
                  <Row>
                    <div
                      style={{
                        display: "flex",
                        width: "25%",
                        fontSize: "25px",
                        color: "white",
                      }}
                    >
                      Trader
                    </div>
                  </Row>
                </Rows>
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    ),
    intents: [
      <Button value={"back"} action="/">
        ←
      </Button>,
      <Button.Reset>Etherscan</Button.Reset>,
    ],
  });
});
