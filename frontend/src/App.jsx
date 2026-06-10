import { useState } from "react";
import Components from "./pages/Components";
import Vehicles from "./pages/Vehicles";
import Services from "./pages/Services";
import Revenue from "./pages/Revenue";

function App() {
  const [page, setPage] = useState("components");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vehicle Service Management System</h1>

      <button onClick={() => setPage("components")}>Components</button>
      <button onClick={() => setPage("vehicles")}>Vehicles</button>
      <button onClick={() => setPage("services")}>Services</button>
      <button onClick={() => setPage("revenue")}>Revenue</button>

      <hr />

      {page === "components" && <Components />}
      {page === "vehicles" && <Vehicles />}
      {page === "services" && <Services />}
      {page === "revenue" && <Revenue />}
    </div>
  );
}

export default App;
