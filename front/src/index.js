import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'; // Assurez-vous d'importer createRoot depuis 'react-dom'
import axios from "axios";
import Chat from "../components/chat/Chat";

import "./index.css";
import Home from "../components/Home";

const App = () => {
  return (
    <div className="main">
      <Home />
    </div>
  );
  
};

// Utilise createRoot pour rendre l'application
createRoot(document.getElementById('root')).render(<App />);
