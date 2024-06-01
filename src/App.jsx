import { Icon } from "@iconify/react/dist/iconify.js";

function App() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white items-center pt-12 px-6">
      <div className="flex flex-col gap-1 bg-white w-full lg:w-1/2 justify-center items-center p-2 h-[180px] rounded-md">
        <div className="absolute top-4 bg-gray-300 rounded-full w-20 h-20">
          <img
            className="absolute bg-gray-300 rounded-full w-18 h-18"
            src="/profil.jpeg"
          />
        </div>
        <h1 className="text-black pt-12">Fenny Oktaviani</h1>
        <p className="text-gray-400 text-sm">QA Analys IT</p>
        <p className="text-gray-400 text-xs">GrobMedia</p>
        <a href="/resume.pdf">
          <button className="rounded-md w-[250px] lg:w-60 h-10 text-center text-white bg-purple-500">
            Lihat CV
          </button>
        </a>
      </div>
      <div className="flex bg-white w-full lg:w-1/2 h-[100px] rounded-md items-center text-black p-8 justify-between">
        <a href="https://www.linkedin.com/in/fenny-oktaviani-874614241">
          <Icon width={100} icon="devicon:linkedin-wordmark" />
        </a>
        <a href="https://www.instagram.com/foktvn">
          <Icon width={60} icon="skill-icons:instagram" />
        </a>
        <a href="https://github.com/foktvn">
          <Icon width={60} icon="devicon:github-wordmark" />
        </a>
      </div>
      <div className="flex flex-col gap-4 bg-white w-full lg:w-1/2  p-2 h-[180px] rounded-md">
        <h1 className="text black">My Project Update</h1>
      </div>
    </div>
  );
}

export default App;
