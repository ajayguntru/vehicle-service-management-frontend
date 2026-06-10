import { useEffect, useState } from "react";
import api from "../services/api";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [modelName, setModelName] = useState("");

  const loadVehicles = () => {
    api
      .get("/api/vehicles/")
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const addVehicle = async () => {
    try {
      await api.post("/api/vehicles/", {
        vehicle_number: vehicleNumber,
        owner_name: ownerName,
        model_name: modelName,
      });

      setVehicleNumber("");
      setOwnerName("");
      setModelName("");

      loadVehicles();

      alert("Vehicle Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add vehicle");
    }
  };

  return (
    <div>
      <h2>Vehicle Management</h2>

      <input
        type="text"
        placeholder="Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />

      <input
        type="text"
        placeholder="Owner Name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <input
        type="text"
        placeholder="Model Name"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button
        onClick={addVehicle}
        style={{ marginLeft: "10px" }}
      >
        Add Vehicle
      </button>

      <h3>Vehicle List</h3>

      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.vehicle_number} |
            {vehicle.owner_name} |
            {vehicle.model_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;