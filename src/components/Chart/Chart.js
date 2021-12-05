import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.data.map((data) => data.value);
  const maxValue = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
