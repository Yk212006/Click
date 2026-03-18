import Link from "next/link";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

export default function CategoryCard({ name, image = "/logo-placeholder.png", href = "#", description = "" }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 flex">
        <div className="w-1/3 h-32 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-green-700 font-semibold text-base mb-2">
            {name}
          </h3>
          <p className="text-red-800 text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
