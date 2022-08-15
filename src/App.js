import React, { useEffect } from 'react';
import './App.css';
// import { Routes , Route, resolvePath } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
// import NotFound from './pages/NotFound';
import Homepages from './pages/Navbar pages/Homepages';
import Catalog from './pages/Navbar pages/DesignIdeas';
import Blog from './pages/Navbar pages/Blog';
import BeforeAfter from './pages/Navbar pages/BeforeAfter';
import Packets from './pages/Navbar pages/Packets';
import Login from './pages/Navbar pages/Login';
import Bedroom from './pages/Category pages/Bedroom';
import Livingroom from './pages/Category pages/Livingroom';
import Diningroom from './pages/Category pages/Diningroom';
import Kitchen from './pages/Category pages/Kitchen';
import Officeroom from './pages/Category pages/Officeroom';
import Childroom from './pages/Category pages/Childroom';
import Entryway from './pages/Category pages/Entryway'
import Packet1 from './pages/Packets pages/Packet1';
import Packet2 from './pages/Packets pages/Packet2';
import Packet3 from './pages/Packets pages/Packet3';
import AdminPanel from './Admin/AdminPanel';
// import AdminLogin from './Admin/AdminLogin';
import AddStyle from './Admin/components/AddStyle';
import AddProduct from './Admin/components/AddProduct';
import AddType from './Admin/components/AddType';
import Stylequiz from './pages/Stylequiz';
import QuizRoom from './pages/QuizRoom';
import AddItem from './Admin/components/AddItem';
import Search from './Admin/components/Search';
import Datatable from './Admin/components/Datatable'
import Details from './components/Details';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Test1 from './test'
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/test' element={<Test1 />} />
        <Route path='/interior-designs' element={<Homepages />} />
        <Route path='/design_ideas' element={<Catalog />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/before_after' element={<BeforeAfter />} />
        <Route path='/packets' element={<Packets />} />
        {/* <Route path='*' element={<NotFound />} />  nfound*/}
        <Route path='/login' element={<Login />} />
        <Route path='/design_ideas/bedroom' element={<Bedroom />} />
        <Route path='/design_ideas/livingroom' element={<Livingroom />} />
        <Route path='/design_ideas/diningroom' element={<Diningroom />} />
        <Route path='/design_ideas/kitchen' element={<Kitchen/>}/>
        <Route path='/design_ideas/officeroom' element={<Officeroom />} />
        <Route path='/design_ideas/childroom' element={<Childroom />} />
        <Route path='/design_ideas/entryway' element={<Entryway />} />
        <Route path='/design_ideas/details/:id' element={<Details />} />
        <Route path='/packets/packet1' element={<Packet1 />} />
        <Route path='/packets/packet2' element={<Packet2 />} />
        <Route path='/packets/packet3' element={<Packet3 />} />
        <Route path='/admin_panel1' element={<AdminPanel />} />
        {/* <Route path='/admin_login' element={<AdminLogin/>}/> */}
        <Route path='/admin_panel/addstyle' element={<AddStyle />} />
        <Route path='/admin_panel/addproduct' element={<AddProduct />} />
        <Route path='/admin_panel/addtype' element={<AddType />} />
        <Route path='/stylequiz' element={<Stylequiz />} />
        <Route path='/stylequiz/room' element={<QuizRoom />} />
        <Route path='/admin_panel/additem' element={<AddItem />} />
        <Route path='/search' element={<Search />} />
        <Route path='/datatable' element={<Datatable />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
