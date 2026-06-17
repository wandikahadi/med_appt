import { Link } from "react-router-dom";

function App() {
  return (
    <main className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-5 text-center">
      <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
        Your Health
        <br />
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Our Responsibility
        </span>
      </h2>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae
        ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
      </p>

      <Link
        to="/home"
        className="mt-6 rounded-full bg-blue-500 px-10 py-3 text-sm font-medium text-white hover:bg-blue-600 sm:px-12"
      >
        Get Started
      </Link>
    </main>
  );
}

export default App;