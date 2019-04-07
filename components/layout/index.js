import React,{Children} from 'react'
import Mast from '../generics/mast'
import PrimaryNav from '../generics/navigation/primary'
import styled, {css} from 'styled-components'
import Link from "next/link";
import {withRouter} from "next/router";

const NavLink = withRouter(({router, children, as, href, ...rest}) => {
   const active = (router.asPath === href || router.asPath === as) ? `active` : null
   return (
    <Link {...rest} href={href} as={as}>
        <a className={active}>{children}</a>
    </Link>
   )
})

const items = [
    {name: 'Home', component: <NavLink href="/">Home</NavLink>},
    {name: 'About', component: <NavLink href="/about">About</NavLink>},
    {name: 'Services', component: <NavLink href="/services">Services</NavLink>},
    {name: 'Contact', component: <NavLink href="/contact">Contact</NavLink>},
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