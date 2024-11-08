import { CardPost } from "@/components/CardPost";
import { PostI } from "@/interface/Post";
import styles from './page.module.css'
import Link from "next/link";
import { PaginacaoI } from "@/interface/Paginacao";
import db from "../../prisma/db";


async function getAllPosts(page: number, searchTerm: string | undefined) {
  try {

    interface WhereClause {
      title?: {
        contains: string;
        mode: "insensitive";
      };
    };

    const where: WhereClause = {};

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where })
    const totalPages = Math.ceil(totalItems / perPage)
    const prev = page > 1 ? page - 1 : null
    const next = page < totalPages ? page + 1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        author: true
      }
    })

    return { data: posts, prev, next }

  } catch (error) {
    console.log('Falha ao obter os posts', { error });
    return { data: [], prev: null, next: null }
  }
}

type SearchParams = Promise<{ [key: string]: string | undefined }>

export default async function Home({ searchParams }: { searchParams: SearchParams }) {

  const { page, q } = await searchParams;
  const searchTerm = q
  const currentPage = page || 1

  const { data: posts, prev, next }: PaginacaoI = await getAllPosts(Number(currentPage), searchTerm)
  return (
    <main className={styles.grid}>
      {posts.map((post: PostI) => <CardPost key={post.id} post={post} hightlight />
      )}
      <div className={styles.links}>
        {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchTerm } }} >Pagina Anterior</Link>}
        {next && <Link href={{ pathname: '/', query: { page: next, q: searchTerm } }} >Próxima Pagina</Link>}
      </div>
    </main>
  );
}
