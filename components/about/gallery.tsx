"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    alt: "Surfing moment",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    alt: "Beach lifestyle",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Adventure",
  },
];

export default function Gallery() {
  return (
    <motion.div
      className="py-20 px-8 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative h-96 rounded-lg overflow-hidden group "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
