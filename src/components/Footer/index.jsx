import React from 'react'
import './Footer.css'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { RxAccessibility } from 'react-icons/rx'
import { AiFillGithub } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-more-info'>
                <div className='footer-more-info-container'>
                    <p>Mais informações</p>
                    <MdKeyboardArrowUp />
                </div>
            </div>
            <div className='footer-main-info'>
                <div className='footer-main-info-container'>
                    <nav>
                        <ul className='footer-links'>
                            <li className='footer-link'>Trabelhe conosco</li>
                            <li className='footer-link'>Termos e condições</li>
                            <li className='footer-link'>Como cuidamos de sua privacidade</li>
                            <li className='footer-link'><RxAccessibility /> Acessibilidade</li>
                            <li className='footer-link'>Contato</li>
                            <li className='footer-link'>Contato</li>
                            <li className='footer-link'>Informações sobre seguro</li>
                        </ul>
                    </nav>
                    <a href='https://github.com/jfilgueira' target='_blank' className='footer-copyright'><p>Copyright &copy; 2023 <AiFillGithub /> JFilgueira.</p></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer