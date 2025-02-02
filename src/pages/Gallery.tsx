import React from "react";
export function Gallery() {
  const images = [{
    url: "/IMG_8909.jpg",
    caption: "Game Highlights"
  }, {
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    caption: "Team Practice"
  }, {
    url: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889",
    caption: "Championship Game"
  }];
  return <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          Gallery
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => <div key={index} className="relative group">
              <img src={image.url} alt={image.caption} className="w-full h-64 object-cover rounded-[2px]" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-bold">{image.caption}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}