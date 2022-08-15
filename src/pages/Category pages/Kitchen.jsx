import React from "react";
import { useEffect } from "react";
// import Footer from '../../components/Footer'
import Header from "../../components/Header";
// import "../../../public/imgs/"
function Kitchen() {
//   useEffect(() => {
//     const getdata = async ()=>{
//         const data = await fetch("")
//     }
//   }, []);
  return (
    <div id="kitchen">
      <Header />
      <section className="sec1">
        <div className="di-head" style={{backgroundImage:`url(/imgs/kitchenFoto.jpg)`}}></div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default Kitchen;
