function App() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white p-12">
      <div className="flex flex-col gap-1 bg-white w-full justify-center items-center p-2 h-[180px] rounded-md">
        <div className="absolute top-4 bg-gray-300 rounded-full w-20 h-20"></div>
        <h1 className="text-black pt-12">Fenny Oktaviani</h1>
        <p className="text-gray-400 text-sm">QA Analys IT</p>
        <p className="text-gray-400 text-xs">GrobMedia</p>
        <button className="rounded-md w-full h-10 text-center text-white bg-purple-500">
          Lihat CV
        </button>
      </div>
      <div className="flex bg-white w-full h-[100px] rounded-md items-center text-black p-8 justify-between">
        <div>Linkedin</div>
        <div>Github</div>
      </div>
    </div>
  );
}

export default App;
