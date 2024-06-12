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
        const newBook: Omit<BookType, 'isbn'> = {
            title,
            author,
            year: Number(year)
        };
        dispatch({ type: 'library/add', payload: newBook });
        setTitle(''); // Reset input fields after adding a book
        setAuthor('');
        setYear('');
    }

    return (
        <div>

            <div> <input
                type="text" placeholder='Titel...' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div> <input
                type="text" placeholder='Author...' value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div> <input
                type="text" placeholder='Year...' value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <button onClick= {handleAddBook }>Add book</button>
            <div><h3>Library:</h3></div>
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


