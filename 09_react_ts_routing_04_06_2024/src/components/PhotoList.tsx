import { FC, useEffect, useState } from "react";
import Photo from './Photo';

export interface IPhotoJson {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const PhotoList: FC = () => {
    const [photos, setPhotos] = useState<{ id: number, title: string, thumbnailUrl: string }[]>([]);
    const [isLoading] = useState<boolean>(false);

    useEffect(() => {

        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await response.json();
                setPhotos(data.slice(0, 10).map((e: IPhotoJson) => ({ id: e.id, title: e.title, thumbnailUrl: e.thumbnailUrl })))

            } catch (error) {
                console.log(error);
            }
        }

        fetchPhotos();
        return () => console.log('Component is unmounted')
    }, []);  // Empty dependency array to ensure it runs once on mount

    return isLoading ? (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : (
        <div className='d-flex flex-column align-items-center text-center' >
            {photos.map((photo) => (
                <Photo
                    key={photo.id}
                    photo={photo}
                />
            ))}
        </div>
    )
}

export default PhotoList