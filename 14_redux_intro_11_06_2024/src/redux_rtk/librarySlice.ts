import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

interface Book {
    isbn?: string;
    title: string;
    author: string;
    year: number;
}

interface ILibraryState {
    books: Book[];
}

const initialState: ILibraryState = {
    books: [
        {
            isbn: '1',
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            year: 1997
        }
    ]
}
export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addBook(state, action: PayloadAction<Omit<Book, 'isbn'>>) {
            const newBook = { isbn: uid(), ...action.payload };
            state.books.push(newBook);
        },
        editBook(state, action: PayloadAction<Book>) {
            state.books = state.books.map(book =>
                book.isbn === action.payload.isbn ? action.payload : book
            );
        },
        deleteBook(state, action: PayloadAction<string | undefined>) {
            state.books = state.books.filter(book => book.isbn !== action.payload);
        }
    }
})
