import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { useClimate } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState();

  useEffect(() => {
    const myDesiredHumidity = setTimeout(() => {
      setDesiredHumidity(humidity);
    }, 1000);
    return () => clearTimeout(myDesiredHumidity);
  }, [desiredHumidity, humidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {desiredHumidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => setHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
