import { useRef, useState } from "react";

const ImageMagnifier = ({ src, zoom = 2, className = "" }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const magnifierSize = 200;

  const handleMouseMove = (e) => {
    const { top, left } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setCoords({ x, y });
  };

  return (
    <div
      className={`relative w-full h-full`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt="Product"
        className={`w-full h-full object-cover ${className}`}
      />

      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-green-500 rounded-full shadow-lg z-50"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            top: `${coords.y - magnifierSize / 2}px`,
            left: `${coords.x - magnifierSize / 2}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgRef.current?.width * zoom}px ${
              imgRef.current?.height * zoom
            }px`,
            backgroundPosition: `-${coords.x * zoom - magnifierSize / 2}px -${
              coords.y * zoom - magnifierSize / 2
            }px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
