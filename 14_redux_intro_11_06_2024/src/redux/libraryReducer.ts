import { uid } from "uid";
import { Book, libraryAction } from "./libraryAction";

interface ILibrarySate {
    books: Book[]
}

const initialState = {
    books: [
        {
            isbn: '1',
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            year: 1997
        }
    ]
}

export default function libraryReducer(state: ILibrarySate = initialState, action: libraryAction): ILibrarySate {
    switch (action.type) {
        case "library/add":
            return {...state, books: [...state.books, {isbn: uid(), ...action.payload }]};
            case "library/edit":
                return {
                    ...state,
                    books: state.books.map(book =>
                        book.isbn === action.payload.isbn ? { ...book, ...action.payload } : book
                    )
                };
            case "library/delete":
                return {
                    ...state,
                    books: state.books.filter(book => book.isbn !== action.payload)
                };
        default:
            return state;
    }
}
