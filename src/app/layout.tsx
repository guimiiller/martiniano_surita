import { ReactNode } from "react";
import './globals.css'
import iconHome from './assets/icons/icon_home.png'
import iconAbout from './assets/icons/icon_about.png'
import iconActing from './assets/icons/icon_acting.png'
import iconMembers from './assets/icons/icon_members.png'
import iconContact from './assets/icons/icon_contact.png'
import Image from "next/image";
import { Metadata } from "next";

type Props ={
  children: ReactNode
}

export const metadata: Metadata ={
  title: {
    template: '%s - M.S Advogados',
    default: 'M.S Advogados'
  }
}

const Layout = ({children}: Props) =>{
  return(
    <html>
      <body>
        <header className="header" id="header">
          <nav className="nav container">

            <div className="nav_menu" id="nav-menu">
              <ul className="nav_list">
                <li className="nav_item">
                  <a href="/" className="nav_link">
                    <Image src={iconHome} alt="" width={24} height={24} className="icon_nav"/>
                    <span className="nav_name">Home</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#about" className="nav_link">
                    <Image src={iconAbout} alt="" width={24} height={24} className="icon_nav"/>
                    <span className="nav_name">Sobre</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#acting" className="nav_link">
                    <Image src={iconActing} alt="" width={24} height={24} className="icon_nav"/>
                    <span className="nav_name">Atuação</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#members" className="nav_link">
                    <Image src={iconMembers} alt="" width={24} height={24} className="icon_nav"/>
                    <span className="nav_name">Advogados</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#contact" className="nav_link">
                    <Image src={iconContact} alt="" width={24} height={24} className="icon_nav"/>
                    <span className="nav_name">Contato</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout