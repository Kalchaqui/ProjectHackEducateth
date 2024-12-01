export default function Home() {
  return (
    <div className="bg-black text-green-500 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-900 p-4 flex justify-between items-center shadow-md">
        <button className="text-green-300 text-lg hover:text-green-100">Nombre de la empresa</button>
        <button className="bg-green-700 px-4 py-2 rounded hover:bg-green-600">
          Conectar Wallet
        </button>
      </header>

      {/* Body */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Ecosistema Universal Sharding</h1>
        <p className="text-lg max-w-2xl mb-8">
          Con el fin de generar un "ecosistema" que le dé valor y utilidad a un token de "renta básica universal";
          en un contexto gamificado con proyección a constituir "Grupos" y posteriormente "Dao", estructurada en base a 4 arquetipos o tendencias sociales como "AA", "EE", "AE", "EA" que componen una *teoría de juegos.*
        </p>
        <button className="bg-green-700 px-6 py-3 text-lg rounded hover:bg-green-600">
          Conectar Wallet
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 p-4 text-center">
        <p className="text-green-300">Juego X</p>
      </footer>
    </div>
  );
}
