/*
1. Add book;
2. Delete book;
3. Edit book;
*/
export type Book =
    {
        isbn?: string, // (unique) (? => optional)
        title: string,
        year: number,
        author: string
    }

export type libraryAction =
    | { type: 'library/add', payload: Book } // { type: 'library/add', payload: Omit<Book, 'isbn'> } - bei add soll nur title, year, author weitergegeben werden, aber nicht isbn!
    | { type: 'library/edit', payload: Book }
    | { type: 'library/delete', payload: string } // hier wird nur isbn weitergegeben
