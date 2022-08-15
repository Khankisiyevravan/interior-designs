import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
function DesignIdeas() {
  const [typeData, setTypeData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [products, setProducts] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filter2, setFilter2] = useState([]);
  const [show, setShow] = useState(false);
  const filterRef1 = useRef();
  const filterRef2 = useRef();
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7732/furniture")
        .then(a => a.json())
      setProducts(data)
    }
    getData()
    const getStyle = async () => {
      let data = await fetch("http://localhost:7732/style")
        .then(b => b.json())
      setStyleData(data);
    }
    getStyle();
    const getTypeData = async () => {
      let data = await fetch("http://localhost:7732/type")
        .then(c => c.json())
      setTypeData(data)
    }
    getTypeData();

  }, [])
  useEffect(() => {
    setCheckData([...products])
  }, [products])
  const check = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.getAttribute('data-style')]);
      // setCheckData([...filter,products.filter((f)=>f.style==e.target.getAttribute('data'))]);
      console.log(e.target.getAttribute('data-style'));
    } else {
      setFilter(filter.filter((f) => f !== e.target.getAttribute('data-style')))
      // setFilter(products.filter((f)=>f.style!==e.target.getAttribute('data')))
    }
  }
  const check2 = (e) => {
    if (e.target.checked) {
      // e.preventDefault();
      setFilter2([...filter2, e.target.getAttribute('data-type')]);
    }
    else {
      setFilter2(filter2.filter((f) => f !== e.target.getAttribute('data-type')))
    }
  }
  const filterFunc = () => {
    filterRef1.current.style.display === 'block' ?
      filterRef1.current.style.display = 'none' :
      filterRef1.current.style.display = 'block'
  }
  const filterFunc2 = () => {
    filterRef2.current.style.display === 'block' ?
      filterRef2.current.style.display = 'none' :
      filterRef2.current.style.display = 'block'
  }
  const mouseOut = ()=>{
    console.log('salam');
    filterRef2.current.style.display='none';
    filterRef1.current.style.display='none'
  }
  useEffect(() => {
    if (filter.length > 0 && filter2.length > 0) {
      setCheckData(products.filter((f) => filter.includes(f.style) && filter2.includes(f.type)))
    } else if (filter.length > 0 && filter2.length < 1) {
      console.log(filter.lenght);
      console.log(filter2.length);
      setCheckData(products.filter((f) => filter.includes(f.style)))
    } else if (filter.length < 1 && filter2.length > 0) {
      setCheckData(products.filter((f) => filter2.includes(f.type)))
      console.log(filter2);
    } else if (filter.length < 1 && filter2.length < 1) {
      setCheckData([...products])
    }
    // filter2.length > 0 ? setCheckData(products.filter((f) => filter2.includes(f.style))) : setCheckData([...products])

    // filter.length > 0 ? setCheckData(products.filter((f) => filter.includes(f.style))) : setCheckData([...products])
    console.log(filter);
    console.log(filter2);
  }, [filter , filter2])
  console.log(typeData);
  return (
    <>
      <Header />
      <section className='sec1'>
        <div className="row-di">
          <div className="container-di">
            <h4
              data-aos='fade-left'
              data-aos-delay='500'
            >
              Ev Dekoru
            </h4>
            <h2
              data-aos='fade-left'
              data-aos-delay='700'
            >
              Dizayn Ideaları
            </h2>
            <p
              data-aos='fade-left'
              data-aos-delay='900'
            >
              Modsy's Design Ideas qalereyası qonaq otağı, yemək otağı, yataq otağı, ofis və ya evdəki hər hansı bir otaq üçün daxili dizayndan ilham almağın ən asan yoludur! Hər üslubda məkan dizaynları, rəng birləşmələri və estetika ilə, təsəvvürünüzü oyatmaq üçün gözəl təsvirlərin heç bir çatışmazlığı yoxdur.
            </p>
          </div>
        </div>
        <div className='row-di2'>
          <div className='container-di'>
            {
              typeData.map((t) => (
                <Link
                  className='item-di'
                  data-aos='fade-up'
                  data-aod-delay='1000'
                  key={t.id}
                  to={t.navLink}
                >
                  <div className='item-image-di'>
                    <img src={t.image} alt="" />
                    <div className='item-text'>
                      <div className="i">
                        <i className={t.iconName}></i>
                      </div>
                      <h3>
                        {t.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className='row-btn'>
          <button onClick={() => setShow(true)}>
            Butun mebelleri gosterin --
          </button>
        </div>
        {
          show ?
          <div
            data-aos="fade-right"
            className="row-di3"
            key={1}
          >
            <div className="filters">
              <div className="filter"
              onMouseLeave={()=>mouseOut()}>
                <p onClick={() => filterFunc()} >
                  Style
                  <i className="fa-solid fa-angle-down"></i>
                </p>
                <ul ref={filterRef1}>
                  {
                    styleData.map((s, index) => (
                      <li key={index}>
                        <label htmlFor="">
                          <input
                            type="checkbox"
                            data-style={`${s.id}`}
                            onClick={check}
                          />
                          {s.name}
                        </label>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="filter2"
              onMouseLeave={()=>mouseOut()}
              >
                <p onClick={() => filterFunc2()}>
                  Room
                  <i className="fa-solid fa-angle-down"></i>
                </p>
                <ul ref={filterRef2}>
                  {
                    typeData.map((t, index) => (
                      <li key={index}>
                        <label htmlFor="" key={index}>
                          <input
                            type="checkbox"
                            data-type={`${t.id}`}

                            onClick={(e) => check2(e)}
                          />
                          {t.name}
                        </label>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="container-di">
              {
                checkData?.map((f, index) => (
                  <Link
                    // to={f.type==1?`/design_ideas/livingroom/details/${f.id}`:""}
                    to={`/design_ideas/details/${f.id}`} key={index}
                    className="item-di-all">
                    {/* {/* style={{ color: 'white' }}  */}
                    <div className="item-f-image-all"
                      style={{ backgroundImage: `url(${f.image})` }}
                    >
                    </div>
                    <div className='di-pos'>
                      <h4>
                        {f.name }
                      </h4>
                      <p>
                        Ətraflı
                      </p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          : ""
        }

      </section>
      <Footer />
    </>
  )
}

export default DesignIdeas;