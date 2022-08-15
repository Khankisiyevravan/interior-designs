import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
function Details() {
  const { id } = useParams()
  const [typeData, setTypeData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:7732/furniture/${id}`)
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
  console.log(products);
  return (
    <>
      <Header />
      <section className='sec1'>
        <div className="container-details">
          <div
            style={{ backgroundImage: `url(${products.image})` }}
            className="image-details">
            {/* <img src={products.image} alt="" /> */}
            <div className='text-details'>
              Salam
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Details