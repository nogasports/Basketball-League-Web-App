import React from "react";
export const GalleryPage = () => {
  const images = [{
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    caption: "Championship Game 2023"
  }, {
    url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80",
    caption: "All-Stars Game Highlights"
  }, {
    url: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=800&q=80",
    caption: "Regular Season Action"
  }, {
    url: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=800&q=80",
    caption: "Tournament Finals"
  }, {
    url: "https://images.unsplash.com/photo-1518650810337-6e5581fd8b25?auto=format&fit=crop&w=800&q=80",
    caption: "Women's Division Finals"
  }, {
    url: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=800&q=80",
    caption: "Youth Development Program"
  }];
  return <div className="bg-white">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Capturing the intensity and spirit of Streetleague basketball.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => <div key={index} className="group relative">
              <img src={image.url} alt={image.caption} className="w-full h-64 object-cover rounded-[2px]" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[2px]">
                <p className="text-white text-center p-4">{image.caption}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};