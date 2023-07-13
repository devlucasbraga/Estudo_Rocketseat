import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
