import redCircle from "./red-circle.png";
import greenCircle from "./green-circle.png";
import "./App.css";
import { withLDProvider, useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const { trafficLight } = useFlags();
  return (
    <div className="App">
      <header className="App-header">
        <p>Just wanted to test out some LaunchDarkly Feature Flags! </p>
        <p>The flag is {trafficLight ? "on" : "off"}!</p>
        <img src={trafficLight ? greenCircle : redCircle} alt="circle" />
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: "627914d155909914cfbf981b",
  options: {
    bootstrap: "localStorage",
  },
})(App);
