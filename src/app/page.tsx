"use client";

import React, { useState } from "react";

const Home: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(true);
    // Aquí iría la lógica para conectar la wallet (usando Wagmi o cualquier librería)
  };
  const handleButtonClick = (buttonLabel: string) => {
    alert(`Has presionado el botón ${buttonLabel}`);
    console.log(`Botón presionado: ${buttonLabel}`);
  };
  return (
    <div className="bg-black text-green-500 min-h-screen flex flex-col">

      {/* Header */}
      <header className="bg-green-900 p-4 flex justify-between items-center shadow-md">
  <button className="text-green-300 text-lg hover:text-green-100">Nombre de la empresa</button>
        {!walletConnected && (
          <button      
            onClick={handleConnectWallet}
            className="bg-green-700 px-4 py-2 rounded hover:bg-green-600">
            Conectar Wallet
          </button>
        )}
      </header>

      {/* Body */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
  <h1 className="text-3xl font-bold mb-4">Bienvenido a Juego Nombre</h1>
  <p className="text-lg max-w-2xl mb-8"></p>
      
        {!walletConnected ? (
          <>
            <br />
            <br />
            <p>
              Con el fin de generar un "ecosistema" que le dé valor y utilidad a un token de "renta básica universal";
              en un contexto gamificado con proyección a constituir "Grupos" y posteriormente "DAO", estructurada en
              base a 4 arquetipos o tendencias sociales como "AA", "EE", "AE", "EA", que componen una *teoría de
              juegos*.
            </p>
            <button
              onClick={handleConnectWallet}
              style={{
                backgroundColor: "#00FF00",
                color: "#000000",
                padding: "10px 15px",
                borderRadius: "5px",
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Conectar Wallet
            </button>
          </>
        ) : (
          <div>
            <h1>Dashboard Principal</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
            {["Mintear Llave", "Reclamar RBU", "Reclamar RV", "Mintear premio", "E", "F"].map((letter) => (
              <button
                  key={letter}
                  onClick={() => handleButtonClick(letter)} // Acción al presionar el botón
                  style={{
                    backgroundColor: "#00FF00",
                    color: "#000000",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        )}
          
        
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#000000",
          color: "#00FF00",
          textAlign: "center",
          padding: "10px",
          borderTop: "2px solid #00FF00",
        }}
      >
        Proyecto para Hackathon EducatETH
      </footer>
    </div>
  );
};

export default Home;
