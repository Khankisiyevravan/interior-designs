import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
function Living() {
  const [products, setProducts] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filter2, setFilter2] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7732/furniture")
        .then(a => a.json())
      setProducts(data)
    }
    getData();
    
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
      setFilter2([...filter2, e.target.getAttribute('data-type')]);
    }
    else {
      setFilter2(filter2.filter((f) => f !== e.target.getAttribute('data-type')))
    }
  }
  useEffect(() => {
    if (filter.length > 0 && filter2.length > 0) {
      setCheckData(products.filter((f) => filter.includes(f.style) && filter2.includes(f.type)))
    } else if (filter.length > 0 && filter2.length < 1) {
      console.log(filter.lenght);
      console.log(filter2.length);
      setCheckData(products.filter((f) => filter.includes(f.style)))
    } else if (filter.length < 1 && filter2.length > 0) {
      setCheckData(products.filter((f) => filter2.includes(f.style)))
    } else if(filter.length <1 && filter2.length<1){
      setCheckData([...products])
    }
    // filter2.length > 0 ? setCheckData(products.filter((f) => filter2.includes(f.style))) : setCheckData([...products])

    // filter.length > 0 ? setCheckData(products.filter((f) => filter.includes(f.style))) : setCheckData([...products])
    console.log(filter);
    console.log(filter2);
  }, [filter, filter2])
  return (
    <>
      <Header />
      <section className='sec1'>
        <div className="filter">
          <p>filter</p>
          <ul>
            <li>
              <label htmlFor="checkbox-lr">
                <input type="checkbox" data-style='1' name="name" id="checkbox-lr"
                  onClick={check} />
                Modern
              </label>
            </li>
            <li>
              <label htmlFor="checkboxx-lr">
                <input type="checkbox" data-style='3' name="name" id="checkboxx-lr" onClick={check} />
                Orta əsr
              </label>
            </li>
          </ul>
        </div>
        <div className="filter2">
          <p>Room</p>
          <ul>
            <li>
              <label htmlFor="">
                <input type="checkbox" name="" id="" data-type='1' onClick={(e) => check2(e)} />
                Qonaq otagi
              </label>
              <label htmlFor="">
                <input type="checkbox" data-type='3' name="" id="" onClick={(e) => check2(e)} />
                Yatag otagi
              </label>
            </li>
            <li>

            </li>
          </ul>
        </div>
        <div className="row-lr">
          <div className="container-di">
            {
              checkData?.map((f, index) => (
                <Link 
                // to={f.type==1?`/design_ideas/livingroom/details/${f.id}`:""}
                to={`/design_ideas/details/${f.id}`} key={index}
                className="item-lr">
                  <div className="item-f-image">
                    <img src={f.image} alt="" />
                  </div>
                  <p>
                    {f.name}
                  </p>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Living