import CanvasComponent from "./Components/CanvasComponent";

const App = () => {
  return (
    <>
      <div className="p-10 space-y-4">
        <h1 className="text-white text-4xl font-bold text-center ">
          Welcome to the 3D World!
        </h1>
        <h2 className="text-white text-2xl text-center">
          This is a simple 3D world created with React Three Fiber and
          TailwindCSS.
        </h2>
        <p className="text-white text-center">
          Made with <span className="font-bold text-red-500">love</span> by
          <span className="font-bold text-blue-500">
            {" "}
            <a href="https://github.com/mohsinnawaz04" target="_blank">
              @Mohsin Nawaz
            </a>
          </span>
        </p>
      </div>
      <CanvasComponent />
    </>
  );
};

export default App;
