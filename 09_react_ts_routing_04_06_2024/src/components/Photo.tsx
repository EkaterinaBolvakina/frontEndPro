import { FC, useState } from "react";

interface IPhotoProps {
    photo: { title: string; thumbnailUrl: string };
}

const Photo: FC<IPhotoProps> = ({ photo }) => {
    const [newPhoto] = useState<{ title: string; thumbnailUrl: string }>({ title: photo.title, thumbnailUrl: photo.thumbnailUrl });

    return (
        <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
            <div className="card-body">
                <img src={newPhoto.thumbnailUrl} alt={newPhoto.title} />
                <h5 style={{ margin: '20px 1px 8px 1px' }} className='card-title'>{newPhoto.title}</h5>
            </div>
        </div>
    );

}

export default Photo