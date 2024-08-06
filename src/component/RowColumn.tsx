type RowColumnProps = {
  item: string;
  value: string;
};

const RowColumn = ({ item, value }: RowColumnProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", fontSize: "20", color: "white" }}>
        {item}
      </div>
      <div
        style={{
          display: "flex",
          width: "75%",
          fontSize: "20",
          color: "#B6B6BD",
        }}
      >
        {value}
      </div>
    </div>
  );
};
export default RowColumn;
