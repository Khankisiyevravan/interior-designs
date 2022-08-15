// import React from 'react';
import Carousel from "../../components/Carousel";
import step1 from "../../images/how-it-works-11.jpg";
import step2 from "../../images/how-it-works-22.jpg";
import step3 from "../../images/how-it-works-33.jpg";
import step4 from "../../images/how-it-works-44.jpg";
// import interiorDesign from '';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState, useEffect, useRef } from "react";
// import { useRef } from "react";
function Homepages() {
  // const [seconds, setSeconds] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const inputsendmail = useRef();
  useEffect(() => {
    const int = setInterval(() => {
      if (activeStep > 3) {
        setActiveStep(1);
      } else {
        setActiveStep(activeStep + 1);
      }
    }, 4000);
    return () => clearInterval(int);
  });
  // console.log(activeStep);
  const [steps, setSteps] = useState([
    {
      id: 1,
      name: "Bizə Məkanınızı Göstərin",
      overview:
        "Bir neçə şəkil çəkin və ya iOS tətbiqimizlə otağınızı skan edin (dağınıqlıq və hamısı) və layihəniz haqqında bizə detallı məlumat verin. Öz istəkləriniz qeyd edin.",
      image: step1,
    },
    {
      id: 2,
      name: "Ekspert Dizaynerlə Əlaqə qurun",
      overview:
        "Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.",
      image: step2,
    },
    {
      id: 3,
      name: "3D Dizaynlarınızı əldə edin",
      overview:
        "Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.",
      image: step3,
    },
    {
      id: 4,
      name: "Görünüşünüzü satın alın",
      overview:
        " Eksklüziv endirimlərlə asanlıqla dizaynlarınızdan birbaşa alış-veriş edin",
      image: step4,
    },
  ]);
  const showStep = steps.find((s) => s.id === activeStep);
  // console.log(showStep);
  const [user,setUser]=useState({
    username:"",
  })
  const handleInput = (e)=>{
    setUser({...user, username:e.target.value})
  }
  const sendMail = async () => {
    const sendData = inputsendmail.current.value;
    console.log(sendData);
    await fetch("http://localhost:7732/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return (
    <>
      <Header />
      <section className="sec1">
        <div className="row1-bg">
          <Carousel />
        </div>
        {/* <div className="interval">
          <div className="container-di">
            <div
              className='steps'
            >
              <div
                className='step-5'
              >
                <div
                  style={{ backgroundImage: `url(${showStep.image})` }}
                  className="step-img5"
                >
                   //  <img src={showStep.image} alt="" />  
                </div>
                <div
                // className="text-5"
                >
                  <p>
                    {
                      showStep.overview
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className='buttons-s'>
              {
                steps.map((s, index) => (
                  <div key={index}
                    onClick={() => setActiveStep(s.id)}
                  >
                    <div>
                      <div>
                        {
                          index + 1
                        }
                      </div>
                    </div>
                    <h5>
                      {
                        s.name
                      }
                    </h5>
                  </div>
                ))
              }
            </div> 
          </div>
        </div> */}
        {/* <div className="row2-bg">
          <div data-aos='fade-right' className="step">
            <div className="step-img">
              <img src={step1} alt="" />
            </div>
            <div className="text">
              <h3>
                Bizə Məkanınızı Göstərin
              </h3>
              <p>Bir neçə şəkil çəkin və ya iOS tətbiqimizlə otağınızı skan edin (dağınıqlıq və hamısı) və layihəniz haqqında bizə detallı məlumat verin. Öz istəkləriniz qeyd edin.
              </p>
            </div>
          </div>
          <div data-aos='fade-left' className="step">

            <div className="text">
              <h3>
                Ekspert Dizaynerlə Əlaqə qurun
              </h3>
              <p>Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.
              </p>
            </div>
            <div className="step-img">
              <img src={step2} alt="" />
            </div>
          </div>
          <div data-aos='fade-right' className="step">
            <div className="step-img">
              <img src={step3} alt="" />
            </div>
            <div className="text">
              <h3>
                3D Dizaynlarınızı əldə edin
              </h3>
              <p>Dizayneriniz sizin məkanınız üçün üslubunuza, büdcənizə və ehtiyaclarınıza uyğunlaşdırılmış sizə unikal 3D dizaynlar yaradacaq.
              </p>
            </div>
          </div>
          <div data-aos='fade-left' className="step">

            <div className="text">
              <h3>
                Görünüşünüzü satın alın
              </h3>
              <p>
                Eksklüziv endirimlərlə asanlıqla dizaynlarınızdan birbaşa alış-veriş edin.
              </p>
            </div>
            <div className="step-img">
              <img src={step4} alt="" />
            </div>
          </div>
          <button className='btn-header'>
            <Link to='/admin_panel1'>
              Proyektə başla
            </Link>
          </button>
        </div> */}
      </section>
      <section id="subscribe">
        <div className="container-di">
          <div id="subscribe-text">
            <h3>Əlaqədə qal!</h3>
            <p>
              Bütün yeni interyer xüsusiyyətləri haqqında ilk xəbərdar olun!
            </p>
            <div>
              <input onChange={(e)=>handleInput(e)} ref={inputsendmail} type="text" />
              <button onClick={() => sendMail()}>Daxil et</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          // data-aos='fade-up'
          data-aos-delay="500"
          className="row3-bg"
        >
          <div className="text">
            <h3>Interiyer dizayn stili nədir ?</h3>
            <p>
              İnteryer dizaynı, məkandan istifadə edən insanlar üçün daha sağlam
              və estetik cəhətdən xoş bir mühitə nail olmaq üçün binanın daxili
              hissəsini yaxşılaşdırmaq sənəti və elmidir. İnteryer dizayneri bu
              cür təkmilləşdirmə layihələrini planlaşdıran, araşdıran,
              əlaqələndirən və idarə edən şəxsdir.İnteryer dizaynı konseptual
              inkişaf, məkanın planlaşdırılması, sahənin yoxlanılması,
              proqramlaşdırma, tədqiqat, layihənin maraqlı tərəfləri ilə
              ünsiyyət, tikintinin idarə edilməsi və dizaynın icrasını əhatə
              edən çoxşaxəli bir peşədir.
            </p>
            <button className="btn-header">
              <Link to="/stylequiz">Ətraflı...</Link>
            </button>
          </div>
          <div className="image">
            <img src="./imgs/interior.jpg" alt="" />
          </div>
          <div className="image2"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Homepages;
