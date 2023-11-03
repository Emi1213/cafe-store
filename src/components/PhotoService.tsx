import Photo1 from '../assets/cafe1.jpg';
import Photo2 from '../assets/cafe2.jpg';
import Photo3 from '../assets/cafe3.jpg';
interface ImageData {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    data: string;
  }
  
  export const PhotoService = {
    getImages: (): Promise<ImageData[]> => {
      return new Promise((resolve) => {
        const images: ImageData[]= [
          {
            itemImageSrc:Photo1.src,
            thumbnailImageSrc: Photo1.src,
            data: 'Descripción de la imagen 1',
          },
          {
            itemImageSrc: Photo2.src,
            thumbnailImageSrc: Photo2.src,
            data: 'Descripción de la imagen 1',
          },
          {
            itemImageSrc: Photo3.src,
            thumbnailImageSrc: Photo3.src,
            data: 'Descripción de la imagen 1',
          },
          
        ];
  
        setTimeout(() => {
          resolve(images);
        }, 1000);
      });
    },
  };