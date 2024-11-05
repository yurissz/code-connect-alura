import Image from "next/image"
import styles from "./cardpost.module.css"
import { Avatar } from "../Avatar"
import { OnePostI } from "@/interface/Post"

export const CardPost: React.FC<OnePostI> = ({ post }) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <figure>
                    <Image src={post.cover} alt={""} width={438} height={133} />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <Avatar name={post.author.name} imageSrc={post.author.avatar} />
            </footer>
        </article>
    )
}   