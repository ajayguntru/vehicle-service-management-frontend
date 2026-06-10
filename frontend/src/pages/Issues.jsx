return (
  <div>
    <h2>Issue Management</h2>

    <p>Vehicles Count: {vehicles.length}</p>
    <p>Components Count: {components.length}</p>

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

    <select
      value={component}
      onChange={(e) => setComponent(e.target.value)}
      style={{ marginLeft: "10px" }}
    >
      <option value="">Select Component</option>
      {components.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>

    <br /><br />

    <input
      type="text"
      placeholder="Issue Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <select
      value={issueType}
      onChange={(e) => setIssueType(e.target.value)}
      style={{ marginLeft: "10px" }}
    >
      <option value="NEW">NEW</option>
      <option value="REPAIR">REPAIR</option>
    </select>

    <input
      type="number"
      placeholder="Labor Cost"
      value={laborCost}
      onChange={(e) => setLaborCost(e.target.value)}
      style={{ marginLeft: "10px" }}
    />

    <button
      onClick={addIssue}
      style={{ marginLeft: "10px" }}
    >
      Add Issue
    </button>
  </div>
);