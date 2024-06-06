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
    const [photos, setPhotos] = useState<IPhotoJson[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data: IPhotoJson[] = await response.json();
                setPhotos(data.slice(0, 10))
                setIsLoading(false); // Laden der Daten ist beendet

            } catch (error) {
                console.log(error);
                setIsLoading(false); // Laden der Daten ist beendet
            }
        }

        fetchPhotos();
    }, []);  // Пустой массив зависимостей, чтобы обеспечить однократный запуск при монтировании / das leere Abhängigkeitsarray, um einen einzigen Lauf beim Einhängen zu gewährleisten

    // return isLoading ? ( <></> ) : ( <></> );
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
