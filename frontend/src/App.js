import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>VaultNotes 📝</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
