import { useEffect, useState } from "react";
import api from "../services/api";

function Components() {
  const [components, setComponents] = useState([]);

  const [name, setName] = useState("");
  const [componentType, setComponentType] = useState("NEW");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [repairPrice, setRepairPrice] = useState("");

  const loadComponents = () => {
    api
      .get("/api/components/")
      .then((response) => {
        setComponents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadComponents();
  }, []);

  const addComponent = async () => {
    try {
      await api.post("/api/components/", {
        name,
        component_type: componentType,
        purchase_price: purchasePrice,
        repair_price: repairPrice,
      });

      setName("");
      setComponentType("NEW");
      setPurchasePrice("");
      setRepairPrice("");

      loadComponents();

      alert("Component Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add component");
    }
  };

  return (
    <div>
      <h2>Components Management</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Component Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={componentType}
          onChange={(e) => setComponentType(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="NEW">NEW</option>
          <option value="REPAIRABLE">REPAIRABLE</option>
        </select>

        <input
          type="number"
          placeholder="Purchase Price"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <input
          type="number"
          placeholder="Repair Price"
          value={repairPrice}
          onChange={(e) => setRepairPrice(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={addComponent}
          style={{ marginLeft: "10px" }}
        >
          Add Component
        </button>
      </div>

      <h3>Component List</h3>

      <ul>
        {components.map((item) => (
          <li key={item.id}>
            {item.name} | {item.component_type} |
            Purchase: ₹{item.purchase_price} |
            Repair: ₹{item.repair_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Components;