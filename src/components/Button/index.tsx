import { ButtonI } from '@/interface/Button'
import styles from './button.module.css'

export const Button: React.FC<ButtonI> = ({ children }) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}