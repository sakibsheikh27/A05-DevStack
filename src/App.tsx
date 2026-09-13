import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./components/type/technologyType";
import Footer from "./components/Footer";

const technologiesPromise = async(): Promise<Itechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback = {<li>This site is Loading...</li>}>
        <Technologies technologiesPromise = {technologiesPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
