import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'

export const Aside: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <Image src={logo} alt={'logo alura'} />
        </aside>
    )
}