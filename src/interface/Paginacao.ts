import { PostI } from "./Post";

export interface PaginacaoI {
    first: number;
    prev: number;
    next: number;
    last: number;
    pages: number;
    items: number;
    data: PostI[];
}