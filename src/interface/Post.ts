export interface PostI {
    id: number;
    cover: string;
    title: string;
    slug: string,
    body: string;
    markdown: string;
    author: {
        id: number;
        name: string;
        username: string;
        avatar: string;
    }
}

export interface PostArrayI {
    posts: PostI[]
}

export interface OnePostI {
    post: PostI;
    hightlight: boolean;
}