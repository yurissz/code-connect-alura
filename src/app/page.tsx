import { CardPost } from "@/components/CardPost";
import { PostI } from "@/interface/Post";
import styles from './page.module.css'
import Link from "next/link";
import { PaginacaoI } from "@/interface/Paginacao";
import { log } from "console";


async function getAllPosts(page: string) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    console.log('Alguma coisa ocorreu mal!');
  }
  return response.json()
}

type SearchParams = Promise<{ [key: string]: string | undefined }>

export default async function Home(searchParams: SearchParams) {

  const { page } = await searchParams;
  const currentPage = page || "1"

  const { data: posts, prev, next }: PaginacaoI = await getAllPosts(currentPage)
  return (
    <main className={styles.grid}>
      {posts.map((post: PostI) => <CardPost key={post.id} post={post} />
      )}
      {prev && <Link href={`/?page=${prev}`} >Pagina Anterior</Link>}
      {next && <Link href={`/?page=${next}`} >Próxima Pagina</Link>}
    </main>
  );
}
