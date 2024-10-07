import { useEffect, useRef } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

// Create SDK instance once, outside of the component
const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-01_dev_orderstack-eydimbo",
  showAttribution: false,
});

export default function ChartPage({ chartId, height }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = sdk.createChart({ chartId });

      chart
        .render(chartRef.current)
        .catch(() => console.error("Chart failed to initialize"));
    }
  }, [chartId]);

  return (
    <div className="App">
      <div ref={chartRef} style={{ width: "100%", height: height }}></div>
    </div>
  );
}
