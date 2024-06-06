import { FC, useState } from "react";
import { IPhotoJson } from "./PhotoList";


const Photo: FC<{ photo: IPhotoJson }> = ({ photo }) => {
    //  const [newPhoto] = useState<{ title: string; thumbnailUrl: string }>({ title: photo.title, thumbnailUrl: photo.thumbnailUrl }); muss man nicht nochmal definieren, da es bereits in PhotoList vorhanden

    const [isImageLoaded] = useState<boolean>(true);
    const [isTitleLoaded] = useState<boolean>(true);

    const placeholderDivImgStyle = {
        width: '150px',
        height: '150px',
        margin: '0 auto',
        backgroundColor: '#e0e0e0'
    };
    const placeholderTitleStyle = {
        width: '450px',
        height: '1.5em', 
        backgroundColor: '#e0e0e0', 
        margin: '20px 1px 8px 1px'
    }

    return (
        <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
            <div className="card-body d-flex flex-column align-items-center text-center">

                {!isImageLoaded ? (
                    <div style={placeholderDivImgStyle}>
                        <img style={{ width: '100%', height: '100%' }} />
                    </div>
                ) : (
                    <img
                        src={photo.thumbnailUrl}
                        alt={photo.title}
                    />)}

                {!isTitleLoaded ? (
                    <div style={placeholderTitleStyle} />
                ) : (
                    <h5 style={{ margin: '20px 1px 8px 1px' }} className='card-title'>{photo.title}</h5>
                )}
            </div>
        </div>
    );
}

export default Photo

