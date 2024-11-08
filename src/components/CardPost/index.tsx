import Image from "next/image"
import styles from "./cardpost.module.css"
import { Avatar } from "../Avatar"
import { OnePostI } from "@/interface/Post"
import Link from "next/link"

export const CardPost: React.FC<OnePostI> = ({ post, hightlight }) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
            <article className={styles.card} style={{ width: hightlight ? 993 : 486 }}>
                <header className={styles.header}>
                    <figure style={{ height: hightlight ? 300 : 133 }}>
                        <Image
                            src={post.cover}
                            fill
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
        </Link>
    )
}   