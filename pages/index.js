import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";

export default function Home() {
  return (
    <div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      ></div>
      <Menu />
      <h1>Diego</h1>
      <Footer />
    </div>
  );
}
