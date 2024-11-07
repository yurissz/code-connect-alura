import { Button } from "../Button";
import styles from './searchform.module.css'

export const SearchForm = () => {
    return (
        <form
            action=""
            className={styles.form}>
            <input
                name="q"
                className={styles.input}
                placeholder={"Digite o que você procura"} />
            <Button>Buscar</Button>
        </form>
    )
}