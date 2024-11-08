import styles from './page.module.css'
import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";
import { remark } from 'remark';
import html from 'remark-html';

async function getPostBySlug(slug: string) {

    try {
        const post = await db.post.findFirst({
            where: {
                slug
            },
            include: {
                author: true
            }
        })

        if (!post) {
            throw new Error(`Post com o slug ${slug} não foi encontrado`)
        }

        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const contentHtml = processedContent.toString();

        post.markdown = contentHtml

        return post
    } catch (error) {
        console.log(error);
    }
    redirect('/not-found')
}

interface Params {
    params: {
        slug: string;
    };
}

const PagePost: React.FC<Params> = async ({ params }) => {
    const post = await getPostBySlug(params.slug)
    console.log(post);

    return (<div>
        <CardPost post={post} hightlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>)
};

export default PagePost;

