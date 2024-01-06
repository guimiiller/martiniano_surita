"use client"

import Image from 'next/image'
import styles from './page.module.css'
import iconFacebook from './assets/icons/icon_face.png'
import iconX from './assets/icons/icon_x.png'
import iconLinkedin from './assets/icons/icon_linkedin.png'
import { register } from 'swiper/element'
import {Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AboutImages } from '../data/AboutImg'
import Link from 'next/link'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { useState } from 'react'
import iconActing1 from './assets/icons/icon_bank.png'
import iconActing2 from './assets/icons/icon_business.png'
import iconActing3 from './assets/icons/icon_civil.png'
import iconActing4 from './assets/icons/icon_contract.png'
import adv1 from '../app/assets/members/adv1.jpg'
import adv2 from '../app/assets/members/adv2.jpg'
import adv3 from '../app/assets/members/adv3.jpeg'
import iconFacebookB from '../app/assets/icons/icon_face_b.png'
import iconLinkedinB from '../app/assets/icons/icon_linkedin_b.png'
import iconXB from '../app/assets/icons/icon_x_b.png'
import { motion } from 'framer-motion'


export default function Home() {
  const [aboutImage, setAboutImage] = useState(AboutImages)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  

  return (
    <>
      <main className={styles.banner_container}>
        <motion.div className={styles.banner_text} 
          variants={container}
          initial="hidden"
          animate="show">
          <motion.h1 
            variants={item}
          >
            Martiniano, Surita & Advogados
          </motion.h1>
          <motion.a 
            href="#about"
            variants={item}
          >
          <button>Leia Mais</button>
          </motion.a>
          <motion.div className={styles.icons_banner}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.a href="https://www.facebook.com/profile.php?id=100019267594392" variants={item} target='_blank'><Image src={iconFacebook} alt='' width={23} height={23} /></motion.a>
            <motion.a href="" variants={item} target='_blank'><Image src={iconX} alt='' width={23} height={23}/></motion.a>
            <motion.a href="https://www.linkedin.com/company/martiniano-surita-&-advogados/about/" variants={item} target='_blank'><Image src={iconLinkedin} alt='' width={23} height={23}/></motion.a>
          </motion.div>
        </motion.div>
      </main>
      <div className={styles.about_container} id='about'>
        <div className={styles.about_content}>
          <div className={styles.about_text}>
            <h4>Sobre Nós</h4>
            <h2>Bem vindo ao <br/>nosso escritório</h2>
            <h3>Assessoria Jurídica Empresarial com excelência e honestidade</h3>
            <p>É oriundo da somatória de conhecimentos e experiências vivenciadas por seus sócios, os quais se juntaram com o objetivo de formar um corpo jurídico qualificado.</p>
            <a href="#acting"><button>Leia Mais</button></a>
          </div>
          <div className={styles.about_image}>
            <div className={styles.about_image_content}>
              <Swiper
                modules={[Pagination, EffectFade]}
                slidesPerView={1}
                effect='fade'
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {aboutImage.map(item=>(
                  <SwiperSlide key={item.id}>
                    <Image src={item.url} alt=''/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className={styles.details_container}>
          <details className={styles.details}>
            <summary>Missão</summary>
                <p>Prestar Assessoria Jurídica com eficácia, qualidade, 
                segurança e determinação almejando sempre superar as expectativas
                de nossos clientes.</p>
          </details>
          <details className={styles.details}>
            <summary>Visão</summary>
              <p>
                Crescer com solidez e responsabilidade, prestando serviços
                jurídicos em harmonia com os interesses dos nossos clientes,
                sempre trilhando todos os caminhos jurídicos cabíveis.
              </p>
          </details>
          <details  className={styles.details}>
            <summary>Princípios</summary>
              <p>
                Seguimos os princípios da honestidade, ética e lealdade,
                pois acreditamos que a advocacia, hodiernamente, precisa
                e deve ser exercida com fiel observância destes princípios.
              </p>
          </details>
        </div>
      </div>
      <div id='acting' className={styles.acting_container}>
        <div className={styles.acting_text}>
         <div className={styles.acting_content}>
            <h4>Nossos Serviços</h4>
            <h2>Áreas de <br/>Atuação</h2>

            <h3>Proteção profissional em todas as áreas da vida</h3>
            <p>Contamos com profissionais capacitados para atuar de forma Preventiva, Contenciosa, 
              Consultiva e Negocial, todos agindo com estratégia e coerência na defesa dos interesses
              de nossos clientes, nas seguintes áreas e ramificações do Direito.
            </p>
            <Link href={'/acting'}> <button>Mais Atuações</button> </Link>     
         </div>
        </div>
        <div className={styles.acting_image}>
          <div className={styles.acting_grid}>
            <div>
              <Image src={iconActing1} alt=''/>
              <p>Direito Bancário</p>
            </div>
            <div>
              <Image src={iconActing2} alt=''/>
              <p>Direito Administrativo</p>
            </div>
            <div>
              <Image src={iconActing3} alt=''/>
              <p>Direito Civil</p>
            </div>
            <div>
              <Image src={iconActing4} alt=''/>
              <p>Direito Contratual</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.members_container} id='members'>
        <div className={styles.members_text}>
          <h4>Nosso Time</h4>
          <h2>Advogados</h2>
          <h3>Conheça nosso Advogados</h3>
          <p>Responsabilidade corporativa começa com muito trabalho, estudo, dedicação, inovação e confiança de todos os envolvidos, desempenhando as atividades jurídicas com lealdade, integridade, serenidade e visão empresarial</p>
        </div>
        <div className={styles.members_image}>
            <div className={styles.icon_profile}>
              <Image src={adv1} alt=''/>
              <h4>Eduardo Surita</h4>
              <div className={styles.icon_members}>
                <a href="https://www.facebook.com/eduardo.surita.1023" target='_blank'><Image src={iconFacebookB} alt=''/></a>
                <a href="https://www.linkedin.com/in/eduardo-surita-17103b117/" target='_blank'><Image src={iconLinkedinB} alt=''/></a>
                <a href="" target='_blank'><Image src={iconXB} alt=''/></a>
              </div>
            </div>
            <div className={styles.icon_profile}>
              <Image src={adv2} alt=''/>
              <h4>Juliana Martiniano</h4>
              <div className={styles.icon_members}>
                <a href="https://www.facebook.com/juliana.martiniano.7" target='_blank'><Image src={iconFacebookB} alt=''/></a>
                <a href="https://www.linkedin.com/in/juliana-martiniano-490aa813a/" target='_blank'><Image src={iconLinkedinB} alt=''/></a>
                <a href="" target='_blank'><Image src={iconXB} alt=''/></a>
              </div>
            </div>
            <div className={styles.icon_profile}>
              <Image src={adv3} alt=''/>
              <h4>Edgar Martiniano</h4>
              <div className={styles.icon_members}>
                <a href="https://www.facebook.com/edgar.martiniano" target='_blank'><Image src={iconFacebookB} alt=''/></a>
                <a href="" target='_blank'><Image src={iconLinkedinB} alt=''/></a>
                <a href="" target='_blank'><Image src={iconXB} alt=''/></a>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.contact_container} id='contact'>
        <div className={styles.contact_text}>
          <h4>Fale conosco</h4>
          <h2>Contato</h2>
          <h3>Entre em contato com nossos Advogados</h3>
          <p>Acompanhamos, diuturnamente, as inovações e acontecimentos jurídicos, legislativo e jurisprudencial. Desta forma, adotamos estratégias diferenciadas e avançadas para solução jurídica e negocial inovadoras em favor dos interesses de nossos clientes.</p>
        </div>
        <div className={styles.contact_form}>
          <form className='form'>
            <input
              className='input'
              type="text"
              placeholder='Digite seu nome'
              onChange={(e) => setName(e.target.value)}
              value={name} 
            />
            <input
              className='input'  
              type="email"
              placeholder='Digite seu E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
            />
            <textarea
              className='textarea' 
              placeholder='Digite sua mensagem...'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <input type="submit" value="Enviar"  className='submit'/>
          </form>
        </div>
      </div>
    </>
  )
}

