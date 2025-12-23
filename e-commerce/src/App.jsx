import Sidebar from "./components/Sidebar";
import Content from "./components/Content";


export default function App() {
  return (
    <>
      <div className="flex h-screen w-screen ">
        <Sidebar/>
        <Content/>
      </div>
        

    </>
  );
}
