import styles from './moreacting.module.css'
import Image from 'next/image'
import icon1 from '../assets/icons/icon_comercial.png'
import icon2 from '../assets/icons/icon_penal_empre.png'
import icon3 from '../assets/icons/icon_trabalho.png'
import icon4 from '../assets/icons/icon_tributario.png'
import icon5 from '../assets/icons/icon_imobiliario.png'
import icon6 from '../assets/icons/icon_consumo.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Atuação'
}

const Page = () =>{
  
    return(
        <div className={styles.more_acting}>
             <div className={styles.more_acting_text}>
                <h1>Mais Atuações</h1>
            </div>
           <div className={styles.more_grid}>
                <div>
                    <Image src={icon1} alt=''/>
                    <p>Direito Comercial</p>
                </div>
                <div>
                    <Image src={icon5} alt=''/>
                    <p>Direito Imobiliário</p>
                </div>
                <div>
                    <Image src={icon2} alt=''/>
                    <p>Direito Penal Empresarial</p>
                </div>
                <div>
                    <Image src={icon3} alt=''/>
                    <p>Direito do Trabalho e Previdenciário</p>
                </div>
                <div>
                    <Image src={icon4} alt=''/>
                    <p>Direito Tributário</p>
                </div>
                <div>
                    <Image src={icon6} alt=''/>
                    <p>Direito das Relações de Consumo</p>
                </div>
            </div>
        </div>
    )
}

export default Page