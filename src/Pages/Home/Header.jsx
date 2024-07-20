import React from 'react'
import { Link } from 'react-router-dom'
// import profile from '../../assets/profile-1.png'
import logo from '../../assets/Header/logo.png'
import UpperHeader from './UpperHeader'
import NavHeader from './NavHeader'
import HeaderContainer from './HeaderContainer'
export default function Header() {

    function openNav() {
        document.getElementById('navgition').classList.add('reset-left')
    }
    function closeNav() {

        document.getElementById('navgition').classList.remove('reset-left')
    }
    return (
        <header>
            <UpperHeader></UpperHeader>
            <NavHeader></NavHeader>
            <HeaderContainer></HeaderContainer>
        </header>
    )
}
