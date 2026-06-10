import { useEffect, useState } from "react";
import api from "../services/api";

function Services() {
  const [vehicles, setVehicles] = useState([]);
  const [vehicle, setVehicle] = useState("");
  const [amount, setAmount] = useState("");
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    api.get("/api/vehicles/").then((res) => setVehicles(res.data));
  }, []);

  const addService = async () => {
    try {
      await api.post("/api/services/", {
        vehicle,
        total_amount: amount,
        payment_status: paid,
      });

      alert("Service Record Added");
      setVehicle("");
      setAmount("");
      setPaid(false);
    } catch (err) {
      console.error(err);
      alert("Failed to add service");
    }
  };

  return (
    <div>
      <h2>Service Management</h2>

      <select
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.id}>
            {v.vehicle_number}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Total Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <label style={{ marginLeft: "10px" }}>
        Paid
        <input
          type="checkbox"
          checked={paid}
          onChange={(e) => setPaid(e.target.checked)}
        />
      </label>

      <button
        onClick={addService}
        style={{ marginLeft: "10px" }}
      >
        Save Service
      </button>
    </div>
  );
}

export default Services;