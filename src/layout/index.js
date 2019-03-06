import React from 'react'
import {NavLink} from 'react-router-dom'
import Mast from '../components/generics/mast'
import PrimaryNav from '../components/generics/navigation/primary'

const items = [
    {name: 'Home', component: <NavLink to="/">Home</NavLink>},
    {name: 'About', component: <NavLink to="/about">About</NavLink>},
    {name: 'Products', component: <NavLink to="/products">Products</NavLink>},
    {name: 'Blog', component: <NavLink to="/blog">Blog</NavLink>},
    {name: 'Contact', component: <NavLink to="/contact">Contact</NavLink>},
]

//todos: main footer component
const Layout = props => 
    <>
        <Mast >
            <>logo</>
            <PrimaryNav items={items}/>
        </Mast>
        {props.children}
        <footer>
        </footer>
    </>

export default Layout