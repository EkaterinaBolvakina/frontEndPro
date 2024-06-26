import { useState } from 'react'
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Book as BookType } from '../redux/libraryAction';
import Book from './Book';

const Library = () => {
    const books = useSelector((state: RootState) => state.library.books)
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const handleAddBook = () => {
        const newBook: Omit<BookType, 'isbn'> = { // omit: bedeutet: newBook wird so typisiert wie BookType ausser isbn!
            title,
            author,
            year: Number(year)
        };
        dispatch({ type: 'library/add', payload: newBook }); // bei redux

        setTitle(''); // Reset input fields after adding a book
        setAuthor('');
        setYear('');
    }

    /* wenn man es in Form integriert anstatt button:
        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            dispatch({type: 'library/add', payload: {title, author, year} })
            setTitle(''); // Reset input fields after adding a book
            setAuthor('');
            setYear('');
        }
    */
    return (
        <div>
            <h2>Add book</h2>
            {/* <form action="/books" onSubmit={handleSubmit} >*/}
            <label> Title: <input
                type="text" placeholder='Titel...' value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label> Author: <input
                type="text" placeholder='Author...' value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label> Year: <input
                type="text" placeholder='Year...' value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <button onClick={handleAddBook}>Add book</button>
            {/* <button>Add book</button>*/}
            {/* </form>*/}

            <div><h3>Book List</h3></div>
            <div>
                {books.map((book) => (
                    <div className='bookCard' key={book.isbn}>
                        <Book book={book} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Library


