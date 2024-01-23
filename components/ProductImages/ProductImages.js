import {useState} from "react";
import {Image, BigImage, ImageButtons, ImageButton, ImageWrapper} from './ProductImages.styled';

export default function ProductImages({images}) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <ImageWrapper>
      <BigImage src={activeImage} />

      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
            <Image src={image} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
    </ImageWrapper>
  );
}