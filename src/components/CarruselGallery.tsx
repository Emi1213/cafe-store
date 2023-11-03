import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './PhotoService';

const AutoPlayDemo: React.FC = () => {
  const [images, setImages] = useState<Array<any>>([]); // Asegúrate de ajustar el tipo de datos según tu definición de ImageData
  

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item: any) => {
    return <img src={item.itemImageSrc} alt={item.alt} className='w-full object-cover h-96' />;
  };


  return (
    <div className="card w-full h-64">
      <Galleria
       value={images}
       numVisible={5}
       circular
       style={{ width: '100%' }} 
       item={itemTemplate}
       showThumbnails={false}
       autoPlay
       transitionInterval={2000}
       className='w-full h-64 justify-center '
      />
    </div>
  );
};

export default AutoPlayDemo;