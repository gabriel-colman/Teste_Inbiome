import React from 'react'
import logo from '../imagens/Module 1 - Header 970x60025@2x.png'
import lupa from '../imagens/ic.search.png'
import Cabecalho from './Cabecalho'
import { AiOutlineMenu } from 'react-icons/ai'

function Module() {
    return (
        <>
            <header>
                <ul className='md:invisible'>
                    <li>
                        <a href="">
                            <AiOutlineMenu />
                        </a>
                    </li>
                </ul>
                <div className='flex justify-evenly items-center h-[80px] w-full'>
                    <div></div>
                    <img src={logo} className="h-[79px] w-[195px]" alt="" />
                    <div>
                        <img src={lupa} alt="" />
                    </div>
                </div>
                <div className='h-[49px] w-full bg-blue items-center'>
                    <nav className='flex justify-center h-full items-center'>
                        <Cabecalho text="about us" icone='true' />
                        <Cabecalho text="our products" icone='true' />
                        <Cabecalho text="intimate health" icone='true' />
                        <Cabecalho text="contact us" />
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Module