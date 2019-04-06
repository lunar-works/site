import React from 'react'
import Link from 'next/link'
import Mast from '../generics/mast'
import PrimaryNav from '../generics/navigation/primary'

const items = [
    {name: 'Home', component: <Link href="/">Home</Link>},
    {name: 'About', component: <Link href="/about">About</Link>},
    {name: 'Services', component: <Link href="/services">Services</Link>},
    {name: 'Contact', component: <Link href="/contact">Contact</Link>},
]

//todos: main footer component
const Layout = props => 
    <>
        <Mast >
            <>Lunarworks</>
            <PrimaryNav items={items}/>
        </Mast>
        {props.children}
        <footer>
        </footer>
    </>

export default Layout