import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Book as BookType } from '../redux/libraryAction'

interface BookProps {
    book: BookType;
}

const Book: FC<BookProps> = ({ book }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [year, setYear] = useState<number>(book.year);

    const handleSaveBook = () => {
        const updatedBook = { ...book, title, author, year };
        dispatch({ type: 'library/edit', payload: updatedBook });
        setIsEdit(false);
    }

    const handleDeleteBook = () => {
        dispatch({ type: 'library/delete', payload: book.isbn });
    };

    return (
        <div>
            {isEdit ? (
                <>
                    <div> <input
                        type="text" placeholder='Titel...' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div> <input
                        type="text" placeholder='Author...' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div> <input
                        type="text" placeholder='Year...' value={year} onChange={(e) => setYear(Number(e.target.value))} />
                    </div>
                    <button onClick={handleSaveBook}> Save </button>
                </>
            ) : (
                <>
                    <div className='book'>
                        <div  className='bookData'>
                        <div><h4>{book.title}</h4></div>
                        <div><p>{book.author}</p></div>
                        <div><p>{book.year}</p></div>
                        </div>
                        <div><button onClick={() => setIsEdit(true)}>Edit</button></div>
                        <div><button onClick={handleDeleteBook}>Delete</button></div>
                    </div>
                </>)}
        </div>
    )
}

export default Book
