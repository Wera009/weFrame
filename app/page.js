import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section2 from "./components/Section/section2";
import Section1 from "./components/Section/section1";
import ProductItems from "./components/Container/ProductItems";
export default function Home() {
  return (
    <>
    <div className="page">
    <Header/>
    <ProductItems/>
    <Section1/>
    <Section2/>
    <Footer/>
    </div>
    </>
  );
}
