import React , { useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function Header() {
    const [ types , setTypes] = useState([]);
    useEffect (()=>{
        const getTypes = async () =>{
            const dataTypes = await fetch("http://localhost:7732/type").then(a => a.json())
            setTypes(dataTypes);
        }
        getTypes();
    },[])
    return (
        <div className="header">
            <header>
                <div>
                    <NavLink to='/interior-designs'>
                        <img src="https://image.freepik.com/free-vector/minimalist-furniture-logo-background_23-2148460878.jpg" alt="" />
                    </NavLink>
                </div>
                <ul className='ul'>
                    <li>
                        <NavLink to='/'>
                            Baş səhifə
                        </NavLink>
                    </li>
                    <li className='dropdownh'>
                        <NavLink to='/design_ideas'>
                            Dizayn ideaları <i className="fa-solid fa-angle-down"></i>
                        </NavLink>
                        <ul className='open'>
                            {
                                types.length>0?types.map((type)=>( 
                                    <li key={type.id}>
                                        <NavLink to={`${type.navLink}`}>
                                            {type.name} dizaynı
                                        </NavLink>
                                    </li>
                                )):""
                            }
                            {/* <li>
                                <NavLink to='/design_ideas/livingroom'>
                                    Qonaq otağı mebeli
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/design_ideas/diningroom'>
                                    Yemek otağı mebeli
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/design_ideas/bedroom'>
                                    Yataq otağı mebeli
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/design_ideas/officeroom'>
                                    Ofis mebelleri
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/design_ideas/entryway'>
                                    Kolidor mebeli 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/design_ideas/childroom'>
                                    Uşaq otağı 
                                </NavLink>
                            </li> */}
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/before_after'>
                            Before&After
                        </NavLink>
                    </li>
                    <li className='dropdownh'>
                        <NavLink to='/packets'>
                            Paketlər 
                        </NavLink>
                        <ul className='open'>
                            <li >
                                <NavLink to='/packets/packet1'>
                                    Packet1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/packets/packet2'>
                                    Packet2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/packets/packet3'>
                                    Packet3
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/blog'>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div>
                    {/* <input
                        type='text'
                        placeholder='Search...'
                        className='search'
                    /> */}
                </div>
                <div className='account'>
                    <NavLink to='/login'>
                        <i className='fa-solid fa-user'></i>  Daxil ol
                    </NavLink>
                </div>
            </header>
        </div>

    )
}

export default Header