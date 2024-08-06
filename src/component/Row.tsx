type RowProps = {
  item: string;
  value: string;
};

const Row = ({ item, value }: RowProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          width: "25%",
          fontSize: "25",
          color: "white",
        }}
      >
        {item}
      </div>
      <div
        style={{
          display: "flex",
          width: "75%",
          fontSize: "25",
          color: "#B6B6BD",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Row;
