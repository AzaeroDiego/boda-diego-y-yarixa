import photoOne from '../assets/wedding-photos/_DSC2733.jpg';
import photoTwo from '../assets/wedding-photos/_DSC2753.jpg';
import photoThree from '../assets/wedding-photos/_DSC2765.jpg';

const photos = [photoOne, photoTwo, photoThree];

export default function PhotoWatermarks({ variant = 0 }) {
  const first = photos[variant % photos.length];
  const second = photos[(variant + 1) % photos.length];

  return (
    <div
      className="photo-watermarks"
      aria-hidden="true"
      style={{
        '--photo-a': `url(${first})`,
        '--photo-b': `url(${second})`,
      }}
    />
  );
}
