import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import themepic from "../themepic";
const Collage = () => {
  const images=themepic;
  return (
    <>
      <div class="justify-content-center mt-3">
        <div
          className="m-2 flex justify-content-center"
          style={{
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: "3rem",
            
          }}
        >
          Designer and Themed Cakes
        </div>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.img}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      </div>
    </>
  );
};
export default Collage;
