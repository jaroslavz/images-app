export interface Photo {
    id: number;
    cropped_picture: string;
    author?: string;
    camera?: string;
    full_picture?: string;
    tags?: string;
}

export interface Photos {
    hasMore: boolean;
    page: number;
    pageCount: number;
    pictures: Photo[];
}
