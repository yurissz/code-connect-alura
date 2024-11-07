import { PostI } from "./Post";

export interface PaginacaoI {
    first?: number;
    prev?: number | null;
    next?: number | null;
    last?: number;
    pages?: number;
    items?: number;
    data: PostI[];
}