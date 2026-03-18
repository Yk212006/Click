import React, { useState, useEffect } from 'react';
import { Box, Text, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductGallery = ({ productPath }) => {
  console.log('ProductGallery rendering for:', productPath);

  // State to track image loading errors
  const [imageErrors, setImageErrors] = useState({});
  
  // State for full image view
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle image errors
  const handleImageError = (imageIndex, galleryTitle) => {
    setImageErrors(prev => ({
      ...prev,
      [imageIndex]: true
    }));
  };

  // Function to handle image load
  const handleImageLoad = (imageIndex, imageSrc) => {
    console.log(`✅ Image ${imageIndex + 1} loaded successfully:`, imageSrc);
  };

  // Function to handle image click for full screen view
  const handleImageClick = (imageIndex, images) => {
    setCurrentImageIndex(imageIndex);
    setIsFullScreen(true);
  };

  // Function to close full screen view
  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  // Add custom styles for navigation arrows
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .product-gallery-swiper .swiper-button-next,
      .product-gallery-swiper .swiper-button-prev {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        color: #000000 !important;
        width: 44px !important;
        height: 44px !important;
        margin-top: -22px !important;
      }
      
      .product-gallery-swiper .swiper-button-next::after,
      .product-gallery-swiper .swiper-button-prev::after {
        font-size: 24px !important;
        color: #000000 !important;
        font-weight: bold !important;
      }
      
      .product-gallery-swiper .swiper-button-next:hover,
      .product-gallery-swiper .swiper-button-prev:hover {
        background: rgba(0, 0, 0, 0.1) !important;
        border-radius: 50% !important;
      }
      
      .product-gallery-swiper .swiper-pagination-bullet {
        background: #000000 !important;
        opacity: 0.5 !important;
      }
      
      .product-gallery-swiper .swiper-pagination-bullet-active {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Dynamic image mapping based on product path
  const getImageList = (path) => {
    const imageMap = {
      'sports-flooring': [
        '/products/sports flooring/sf1.jpg',
        '/products/sports flooring/sf2.jpg',
        '/products/sports flooring/sf3.jpg',
        '/products/sports flooring/sf4.jpg',
        '/products/sports flooring/sf5.jpg'
      ],
      '/sports-flooring': [
        '/products/sports flooring/sf1.jpg',
        '/products/sports flooring/sf2.jpg',
        '/products/sports flooring/sf3.jpg',
        '/products/sports flooring/sf4.jpg',
        '/products/sports flooring/sf5.jpg'
      ],
      'gym-flooring': [
        '/products/gym flooring/gf1.jpg',
        '/products/gym flooring/gf2.jpg',
        '/products/gym flooring/gf3.jpg',
        '/products/gym flooring/gf4.jpg',
        '/products/gym flooring/gf5.jpg'
      ],
      '/gym-flooring': [
        '/products/gym flooring/gf1.jpg',
        '/products/gym flooring/gf2.jpg',
        '/products/gym flooring/gf3.jpg',
        '/products/gym flooring/gf4.jpg',
        '/products/gym flooring/gf5.jpg'
      ],
      '/sports-flooring/gym-flooring': [
        '/products/gym flooring/gf1.jpg',
        '/products/gym flooring/gf2.jpg',
        '/products/gym flooring/gf3.jpg',
        '/products/gym flooring/gf4.jpg',
        '/products/gym flooring/gf5.jpg'
      ],
      'artificial-grass': [
        '/products/artificial grass/af1.jpg',
        '/products/artificial grass/af3.jpg',
        '/products/artificial grass/af4.jpg',
        '/products/artificial grass/af5.jpg',
        '/products/artificial grass/af6.jpg'
      ],
      '/artificial-grass': [
        '/products/artificial grass/af1.jpg',
        '/products/artificial grass/af3.jpg',
        '/products/artificial grass/af4.jpg',
        '/products/artificial grass/af5.jpg',
        '/products/artificial grass/af6.jpg'
      ],
      '/sports-flooring/artificial-grass': [
        '/products/artificial grass/af1.jpg',
        '/products/artificial grass/af3.jpg',
        '/products/artificial grass/af4.jpg',
        '/products/artificial grass/af5.jpg',
        '/products/artificial grass/af6.jpg'
      ],
      'rubber-flooring': [
        '/products/rubber flooring/rf1.jpg',
        '/products/rubber flooring/rf2.jpg',
        '/products/rubber flooring/rf3.webp',
        '/products/rubber flooring/rf4.jpg',
        '/products/rubber flooring/rf5.jpg'
      ],
      '/rubber-flooring': [
        '/products/rubber flooring/rf1.jpg',
        '/products/rubber flooring/rf2.jpg',
        '/products/rubber flooring/rf3.webp',
        '/products/rubber flooring/rf4.jpg',
        '/products/rubber flooring/rf5.jpg'
      ],
      '/sports-flooring/rubber-flooring': [
        '/products/rubber flooring/rf1.jpg',
        '/products/rubber flooring/rf2.jpg',
        '/products/rubber flooring/rf3.webp',
        '/products/rubber flooring/rf4.jpg',
        '/products/rubber flooring/rf5.jpg'
      ],
      'quartz': [
        '/products/quartz/q1.jpg',
        '/products/quartz/q2.jpg',
        '/products/quartz/q3.jpg',
        '/products/quartz/q4.jpg',
        '/products/quartz/q5.jpg'
      ],
      '/quartz': [
        '/products/quartz/q1.jpg',
        '/products/quartz/q2.jpg',
        '/products/quartz/q3.jpg',
        '/products/quartz/q4.jpg',
        '/products/quartz/q5.jpg'
      ],
      '/products/quartz': [
        '/products/quartz/q1.jpg',
        '/products/quartz/q2.jpg',
        '/products/quartz/q3.jpg',
        '/products/quartz/q4.jpg',
        '/products/quartz/q5.jpg'
      ],
      'wall-paper': [
        '/products/wallpaper/wall.jpg',
        '/products/wallpaper/wall2.jpg',
        '/products/wallpaper/wall3.jpg',
        '/products/wallpaper/wall4.jpg',
        '/products/wallpaper/wall5.jpg'
      ],
      '/wall-paper': [
        '/products/wallpaper/wall.jpg',
        '/products/wallpaper/wall2.jpg',
        '/products/wallpaper/wall3.jpg',
        '/products/wallpaper/wall4.jpg',
        '/products/wallpaper/wall5.jpg'
      ],
      '/products/wallpaper': [
        '/products/wallpaper/wall.jpg',
        '/products/wallpaper/wall2.jpg',
        '/products/wallpaper/wall3.jpg',
        '/products/wallpaper/wall4.jpg',
        '/products/wallpaper/wall5.jpg'
      ],
      '/products/alabaster-sheet': [
        '/products/alabaster/alabaster.jpg',
        '/products/alabaster/alabaster2.avif',
        '/products/alabaster/alabaster3.avif',
        '/products/alabaster/alabaster4.avif',
        '/products/alabaster/alabaster5.avif'
      ],
      '/alabaster-sheet': [
        '/products/alabaster/alabaster.jpg',
        '/products/alabaster/alabaster2.avif',
        '/products/alabaster/alabaster3.avif',
        '/products/alabaster/alabaster4.avif',
        '/products/alabaster/alabaster5.avif'
      ],
      '/products/alabaster': [
        '/products/alabaster/alabaster.jpg',
        '/products/alabaster/alabaster2.avif',
        '/products/alabaster/alabaster3.avif',
        '/products/alabaster/alabaster4.avif',
        '/products/alabaster/alabaster5.avif'
      ],
      'carpet-flooring': [
        '/products/Flooring/carpet flooring/c1.jpeg',
        '/products/Flooring/carpet flooring/c2.jpeg',
        '/products/Flooring/carpet flooring/c3.jpeg',
        '/products/Flooring/carpet flooring/c4.jpeg',
        '/products/Flooring/carpet flooring/c5.jpeg'
      ],
      '/carpet-flooring': [
        '/products/Flooring/carpet flooring/c1.jpeg',
        '/products/Flooring/carpet flooring/c2.jpeg',
        '/products/Flooring/carpet flooring/c3.jpeg',
        '/products/Flooring/carpet flooring/c4.jpeg',
        '/products/Flooring/carpet flooring/c5.jpeg'
      ],
      'deck-flooring': [
        '/products/Flooring/deck flooring/df1.jpg',
        '/products/Flooring/deck flooring/df2.jpg',
        '/products/Flooring/deck flooring/df3.jpg',
        '/products/Flooring/deck flooring/df4.jpg',
        '/products/Flooring/deck flooring/df5.jpg'
      ],
      '/deck-flooring': [
        '/products/Flooring/deck flooring/df1.jpg',
        '/products/Flooring/deck flooring/df2.jpg',
        '/products/Flooring/deck flooring/df3.jpg',
        '/products/Flooring/deck flooring/df4.jpg',
        '/products/Flooring/deck flooring/df5.jpg'
      ],
      'engineered-flooring': [
        '/products/Flooring/engineered flooring/ef1.jpg',
        '/products/Flooring/engineered flooring/ef2.jpg',
        '/products/Flooring/engineered flooring/ef3.jpg',
        '/products/Flooring/engineered flooring/ef4.jpg',
        '/products/Flooring/engineered flooring/ef5.jpg'
      ],
      '/engineered-flooring': [
        '/products/Flooring/engineered flooring/ef1.jpg',
        '/products/Flooring/engineered flooring/ef2.jpg',
        '/products/Flooring/engineered flooring/ef3.jpg',
        '/products/Flooring/engineered flooring/ef4.jpg',
        '/products/Flooring/engineered flooring/ef5.jpg'
      ],
      'engineered-wooden-flooring': [
        '/products/Flooring/engineered flooring/ef1.jpg',
        '/products/Flooring/engineered flooring/ef2.jpg',
        '/products/Flooring/engineered flooring/ef3.jpg',
        '/products/Flooring/engineered flooring/ef4.jpg',
        '/products/Flooring/engineered flooring/ef5.jpg'
      ],
      '/engineered-wooden-flooring': [
        '/products/Flooring/engineered flooring/ef1.jpg',
        '/products/Flooring/engineered flooring/ef2.jpg',
        '/products/Flooring/engineered flooring/ef3.jpg',
        '/products/Flooring/engineered flooring/ef4.jpg',
        '/products/Flooring/engineered flooring/ef5.jpg'
      ],
      'homogenous-flooring': [
        '/products/Flooring/homogenous/h1.avif',
        '/products/Flooring/homogenous/h2.jpg',
        '/products/Flooring/homogenous/h3.jpg',
        '/products/Flooring/homogenous/h4.jpg',
        '/products/Flooring/homogenous/h5.jpg'
      ],
      '/homogenous-flooring': [
        '/products/Flooring/homogenous/h1.avif',
        '/products/Flooring/homogenous/h2.jpg',
        '/products/Flooring/homogenous/h3.jpg',
        '/products/Flooring/homogenous/h4.jpg',
        '/products/Flooring/homogenous/h5.jpg'
      ],
      'laminated-flooring': [
        '/products/Flooring/laminated flooring/l1.png',
        '/products/Flooring/laminated flooring/l2.avif',
        '/products/Flooring/laminated flooring/l3.jpg',
        '/products/Flooring/laminated flooring/l4.jpg',
        '/products/Flooring/laminated flooring/l5.jpg'
      ],
      '/laminated-flooring': [
        '/products/Flooring/laminated flooring/l1.png',
        '/products/Flooring/laminated flooring/l2.avif',
        '/products/Flooring/laminated flooring/l3.jpg',
        '/products/Flooring/laminated flooring/l4.jpg',
        '/products/Flooring/laminated flooring/l5.jpg'
      ],
      'lvt-flooring': [
        '/products/Flooring/lvt flooring/lvt1.jpg',
        '/products/Flooring/lvt flooring/lvt2.jpg',
        '/products/Flooring/lvt flooring/lvt3.jpg',
        '/products/Flooring/lvt flooring/lvt4.jpg',
        '/products/Flooring/lvt flooring/lvt5.jpeg'
      ],
      '/lvt-flooring': [
        '/products/Flooring/lvt flooring/lvt1.jpg',
        '/products/Flooring/lvt flooring/lvt2.jpg',
        '/products/Flooring/lvt flooring/lvt3.jpg',
        '/products/Flooring/lvt flooring/lvt4.jpg',
        '/products/Flooring/lvt flooring/lvt5.jpeg'
      ],
      'non-woven-flooring': [
        '/products/Flooring/non woven/nw1.jpg',
        '/products/Flooring/non woven/nw2.jpg',
        '/products/Flooring/non woven/nw3.jpg',
        '/products/Flooring/non woven/nw4.jpg',
        '/products/Flooring/non woven/nw5.jpg'
      ],
      '/non-woven-flooring': [
        '/products/Flooring/non woven/nw1.jpg',
        '/products/Flooring/non woven/nw2.jpg',
        '/products/Flooring/non woven/nw3.jpg',
        '/products/Flooring/non woven/nw4.jpg',
        '/products/Flooring/non woven/nw5.jpg'
      ],
      'solid-wooden-flooring': [
        '/products/Flooring/solid wooden flooring/sw1.jpg',
        '/products/Flooring/solid wooden flooring/sw2.jpg',
        '/products/Flooring/solid wooden flooring/sw3.jpg',
        '/products/Flooring/solid wooden flooring/sw4.jpg',
        '/products/Flooring/solid wooden flooring/sw5.jpg'
      ],
      '/solid-wooden-flooring': [
        '/products/Flooring/solid wooden flooring/sw1.jpg',
        '/products/Flooring/solid wooden flooring/sw2.jpg',
        '/products/Flooring/solid wooden flooring/sw3.jpg',
        '/products/Flooring/solid wooden flooring/sw4.jpg',
        '/products/Flooring/solid wooden flooring/sw5.jpg'
      ],
      'spc-flooring': [
        '/products/Flooring/spc flooring/spc1.jpg',
        '/products/Flooring/spc flooring/spc2.jpg',
        '/products/Flooring/spc flooring/spc3.jpg',
        '/products/Flooring/spc flooring/spc4.jpg',
        '/products/Flooring/spc flooring/spc5.jpg'
      ],
      '/spc-flooring': [
        '/products/Flooring/spc flooring/spc1.jpg',
        '/products/Flooring/spc flooring/spc2.jpg',
        '/products/Flooring/spc flooring/spc3.jpg',
        '/products/Flooring/spc flooring/spc4.jpg',
        '/products/Flooring/spc flooring/spc5.jpg'
      ],
      'vinyl-flooring': [
        '/products/Flooring/vinyl flooring/v1.avif',
        '/products/Flooring/vinyl flooring/v2.jpg',
        '/products/Flooring/vinyl flooring/v3.jpg',
        '/products/Flooring/vinyl flooring/v4.jpg',
        '/products/Flooring/vinyl flooring/v5.jpg'
      ],
      '/vinyl-flooring': [
        '/products/Flooring/vinyl flooring/v1.avif',
        '/products/Flooring/vinyl flooring/v2.jpg',
        '/products/Flooring/vinyl flooring/v3.jpg',
        '/products/Flooring/vinyl flooring/v4.jpg',
        '/products/Flooring/vinyl flooring/v5.jpg'
      ],
      'acoustic-panels': [
        '/products/panels/acoustic panel/ap1.jpg',
        '/products/panels/acoustic panel/ap2.jpg',
        '/products/panels/acoustic panel/ap3.jpg',
        '/products/panels/acoustic panel/ap4.jpg',
        '/products/panels/acoustic panel/ap5.jpg'
      ],
      '/acoustic-panels': [
        '/products/panels/acoustic panel/ap1.jpg',
        '/products/panels/acoustic panel/ap2.jpg',
        '/products/panels/acoustic panel/ap3.jpg',
        '/products/panels/acoustic panel/ap4.jpg',
        '/products/panels/acoustic panel/ap5.jpg'
      ],
      'charcoal-panels': [
        '/products/panels/charcoal/cp1.jpg',
        '/products/panels/charcoal/cp2.jpg',
        '/products/panels/charcoal/cp3.jpg',
        '/products/panels/charcoal/cp4.jpg',
        '/products/panels/charcoal/cp5.jpg'
      ],
      '/charcoal-panels': [
        '/products/panels/charcoal/cp1.jpg',
        '/products/panels/charcoal/cp2.jpg',
        '/products/panels/charcoal/cp3.jpg',
        '/products/panels/charcoal/cp4.jpg',
        '/products/panels/charcoal/cp5.jpg'
      ],
      'louver-fluted-panels': [
        '/products/panels/fluted and louver panels/fl1.jpg',
        '/products/panels/fluted and louver panels/fl2.jpg',
        '/products/panels/fluted and louver panels/fl3.jpg',
        '/products/panels/fluted and louver panels/fl4.jpg',
        '/products/panels/fluted and louver panels/fl5.jpg'
      ],
      '/louver-fluted-panels': [
        '/products/panels/fluted and louver panels/fl1.jpg',
        '/products/panels/fluted and louver panels/fl2.jpg',
        '/products/panels/fluted and louver panels/fl3.jpg',
        '/products/panels/fluted and louver panels/fl4.jpg',
        '/products/panels/fluted and louver panels/fl5.jpg'
      ],
      'hpl-cladding': [
        '/products/panels/hpl/hpl1.jpg',
        '/products/panels/hpl/hpl2.jpg',
        '/products/panels/hpl/hpl3.jpg',
        '/products/panels/hpl/hpl4.jpg',
        '/products/panels/hpl/hpl5.jpg'
      ],
      '/hpl-cladding': [
        '/products/panels/hpl/hpl1.jpg',
        '/products/panels/hpl/hpl2.jpg',
        '/products/panels/hpl/hpl3.jpg',
        '/products/panels/hpl/hpl4.jpg',
        '/products/panels/hpl/hpl5.jpg'
      ],
      'mlv-sound-barrier': [
        '/products/panels/mlv/mlv1.avif',
        '/products/panels/mlv/mlv2.jpg',
        '/products/panels/mlv/mlv3.jpg',
        '/products/panels/mlv/mlv4.jpg',
        '/products/panels/mlv/mlv5.jpg'
      ],
      '/mlv-sound-barrier': [
        '/products/panels/mlv/mlv1.avif',
        '/products/panels/mlv/mlv2.jpg',
        '/products/panels/mlv/mlv3.jpg',
        '/products/panels/mlv/mlv4.jpg',
        '/products/panels/mlv/mlv5.jpg'
      ],
      'pvc-panels': [
        '/products/panels/pvc/pvc1.jpg',
        '/products/panels/pvc/pvc2.jpg',
        '/products/panels/pvc/pvc3.jpg',
        '/products/panels/pvc/pvc4.jpg',
        '/products/panels/pvc/pvc5.jpg'
      ],
      '/pvc-panels': [
        '/products/panels/pvc/pvc1.jpg',
        '/products/panels/pvc/pvc2.jpg',
        '/products/panels/pvc/pvc3.jpg',
        '/products/panels/pvc/pvc4.jpg',
        '/products/panels/pvc/pvc5.jpg'
      ],
      'dunes-solid-surface': [
        '/products/Solid Surface/bendable/dunes/d1.jpg',
        '/products/Solid Surface/bendable/dunes/d2.jpg',
        '/products/Solid Surface/bendable/dunes/d3.jpg',
        '/products/Solid Surface/bendable/dunes/d4.jpg',
        '/products/Solid Surface/bendable/dunes/d5.jpg'
      ],
      '/dunes-solid-surface': [
        '/products/Solid Surface/bendable/dunes/d1.jpg',
        '/products/Solid Surface/bendable/dunes/d2.jpg',
        '/products/Solid Surface/bendable/dunes/d3.jpg',
        '/products/Solid Surface/bendable/dunes/d4.jpg',
        '/products/Solid Surface/bendable/dunes/d5.jpg'
      ],
      'dupont-solid-surface': [
        '/products/Solid Surface/bendable/dupont/dupont1.jpg',
        '/products/Solid Surface/bendable/dupont/dupont2.jpg',
        '/products/Solid Surface/bendable/dupont/dupont3.jpg',
        '/products/Solid Surface/bendable/dupont/dupont4.jpg',
        '/products/Solid Surface/bendable/dupont/dupont5.jpg'
      ],
      '/dupont-solid-surface': [
        '/products/Solid Surface/bendable/dupont/dupont1.jpg',
        '/products/Solid Surface/bendable/dupont/dupont2.jpg',
        '/products/Solid Surface/bendable/dupont/dupont3.jpg',
        '/products/Solid Surface/bendable/dupont/dupont4.jpg',
        '/products/Solid Surface/bendable/dupont/dupont5.jpg'
      ],
      'lx-hausys-solid-surface': [
        '/products/Solid Surface/bendable/LX/lx1.jpg',
        '/products/Solid Surface/bendable/LX/lx2.jpg',
        '/products/Solid Surface/bendable/LX/lx3.jpg',
        '/products/Solid Surface/bendable/LX/lx4.jpg',
        '/products/Solid Surface/bendable/LX/lx5.jpg'
      ],
      '/lx-hausys-solid-surface': [
        '/products/Solid Surface/bendable/LX/lx1.jpg',
        '/products/Solid Surface/bendable/LX/lx2.jpg',
        '/products/Solid Surface/bendable/LX/lx3.jpg',
        '/products/Solid Surface/bendable/LX/lx4.jpg',
        '/products/Solid Surface/bendable/LX/lx5.jpg'
      ],
      'rehau-solid-surface': [
        '/products/Solid Surface/bendable/rehau/r1.jpg',
        '/products/Solid Surface/bendable/rehau/r2.jpg',
        '/products/Solid Surface/bendable/rehau/r3.jpg',
        '/products/Solid Surface/bendable/rehau/r4.avif',
        '/products/Solid Surface/bendable/rehau/r5.jpg'
      ],
      '/rehau-solid-surface': [
        '/products/Solid Surface/bendable/rehau/r1.jpg',
        '/products/Solid Surface/bendable/rehau/r2.jpg',
        '/products/Solid Surface/bendable/rehau/r3.jpg',
        '/products/Solid Surface/bendable/rehau/r4.avif',
        '/products/Solid Surface/bendable/rehau/r5.jpg'
      ],
      'riya-solid-surface': [
        '/products/Solid Surface/bendable/riya/ry1.jpg',
        '/products/Solid Surface/bendable/riya/ry2.jpg',
        '/products/Solid Surface/bendable/riya/ry3.jpg',
        '/products/Solid Surface/bendable/riya/ry4.jpg',
        '/products/Solid Surface/bendable/riya/ry5.jpg'
      ],
      '/riya-solid-surface': [
        '/products/Solid Surface/bendable/riya/ry1.jpg',
        '/products/Solid Surface/bendable/riya/ry2.jpg',
        '/products/Solid Surface/bendable/riya/ry3.jpg',
        '/products/Solid Surface/bendable/riya/ry4.jpg',
        '/products/Solid Surface/bendable/riya/ry5.jpg'
      ],
      'staron-solid-surface': [
        '/products/Solid Surface/bendable/staron/st1.jpg',
        '/products/Solid Surface/bendable/staron/st2.jpg',
        '/products/Solid Surface/bendable/staron/st3.jpg',
        '/products/Solid Surface/bendable/staron/st4.jpg',
        '/products/Solid Surface/bendable/staron/st5.jpg'
      ],
      '/staron-solid-surface': [
        '/products/Solid Surface/bendable/staron/st1.jpg',
        '/products/Solid Surface/bendable/staron/st2.jpg',
        '/products/Solid Surface/bendable/staron/st3.jpg',
        '/products/Solid Surface/bendable/staron/st4.jpg',
        '/products/Solid Surface/bendable/staron/st5.jpg'
      ],
      'tristone-solid-surface': [
        '/products/Solid Surface/bendable/tristone/tr1.jpg',
        '/products/Solid Surface/bendable/tristone/tr2.jpg',
        '/products/Solid Surface/bendable/tristone/tr3.jpg',
        '/products/Solid Surface/bendable/tristone/tr4.jpg',
        '/products/Solid Surface/bendable/tristone/tr5.jpg'
      ],
      '/tristone-solid-surface': [
        '/products/Solid Surface/bendable/tristone/tr1.jpg',
        '/products/Solid Surface/bendable/tristone/tr2.jpg',
        '/products/Solid Surface/bendable/tristone/tr3.jpg',
        '/products/Solid Surface/bendable/tristone/tr4.jpg',
        '/products/Solid Surface/bendable/tristone/tr5.jpg'
      ],
      'vivanta-solid-surface': [
        '/products/Solid Surface/bendable/vivanta/vv1.jpg',
        '/products/Solid Surface/bendable/vivanta/vv2.jpg',
        '/products/Solid Surface/bendable/vivanta/vv3.jpg',
        '/products/Solid Surface/bendable/vivanta/vv4.jpg',
        '/products/Solid Surface/bendable/vivanta/vv5.jpg'
      ],
      '/vivanta-solid-surface': [
        '/products/Solid Surface/bendable/vivanta/vv1.jpg',
        '/products/Solid Surface/bendable/vivanta/vv2.jpg',
        '/products/Solid Surface/bendable/vivanta/vv3.jpg',
        '/products/Solid Surface/bendable/vivanta/vv4.jpg',
        '/products/Solid Surface/bendable/vivanta/vv5.jpg'
      ],
      'vivantha-solid-surface': [
        '/products/Solid Surface/bendable/vivanta/vv1.jpg',
        '/products/Solid Surface/bendable/vivanta/vv2.jpg',
        '/products/Solid Surface/bendable/vivanta/vv3.jpg',
        '/products/Solid Surface/bendable/vivanta/vv4.jpg',
        '/products/Solid Surface/bendable/vivanta/vv5.jpg'
      ],
      'alticore-solid-surface': [
        '/products/Solid Surface/non bendable/alticore/ac1.jpg',
        '/products/Solid Surface/non bendable/alticore/ac2.jpg',
        '/products/Solid Surface/non bendable/alticore/ac3.jpg',
        '/products/Solid Surface/non bendable/alticore/ac4.jpg',
        '/products/Solid Surface/non bendable/alticore/ac5.jpg'
      ],
      '/alticore-solid-surface': [
        '/products/Solid Surface/non bendable/alticore/ac1.jpg',
        '/products/Solid Surface/non bendable/alticore/ac2.jpg',
        '/products/Solid Surface/non bendable/alticore/ac3.jpg',
        '/products/Solid Surface/non bendable/alticore/ac4.jpg',
        '/products/Solid Surface/non bendable/alticore/ac5.jpg'
      ],
      'inlife-solid-surface': [
        '/products/Solid Surface/non bendable/inlife/il1.jpg',
        '/products/Solid Surface/non bendable/inlife/il2.webp',
        '/products/Solid Surface/non bendable/inlife/il3.jpg',
        '/products/Solid Surface/non bendable/inlife/il4.jpg',
        '/products/Solid Surface/non bendable/inlife/il5.jpg'
      ],
      '/inlife-solid-surface': [
        '/products/Solid Surface/non bendable/inlife/il1.jpg',
        '/products/Solid Surface/non bendable/inlife/il2.webp',
        '/products/Solid Surface/non bendable/inlife/il3.jpg',
        '/products/Solid Surface/non bendable/inlife/il4.jpg',
        '/products/Solid Surface/non bendable/inlife/il5.jpg'
      ],
      'omex-solid-surface': [
        '/products/Solid Surface/non bendable/omex/om1.jpg',
        '/products/Solid Surface/non bendable/omex/om2.jpg',
        '/products/Solid Surface/non bendable/omex/om3.jpg',
        '/products/Solid Surface/non bendable/omex/om4.jpg',
        '/products/Solid Surface/non bendable/omex/om5.jpg'
      ],
      '/omex-solid-surface': [
        '/products/Solid Surface/non bendable/omex/om1.jpg',
        '/products/Solid Surface/non bendable/omex/om2.jpg',
        '/products/Solid Surface/non bendable/omex/om3.jpg',
        '/products/Solid Surface/non bendable/omex/om4.jpg',
        '/products/Solid Surface/non bendable/omex/om5.jpg'
      ],
      'rehau-non-solid-surface': [
        '/products/Solid Surface/non bendable/rehau/rh1.png',
        '/products/Solid Surface/non bendable/rehau/rh2.jpg',
        '/products/Solid Surface/non bendable/rehau/rh3.jpg',
        '/products/Solid Surface/non bendable/rehau/rh4.jpg',
        '/products/Solid Surface/non bendable/rehau/rh5.jpg'
      ],
      '/rehau-non-solid-surface': [
        '/products/Solid Surface/non bendable/rehau/rh1.png',
        '/products/Solid Surface/non bendable/rehau/rh2.jpg',
        '/products/Solid Surface/non bendable/rehau/rh3.jpg',
        '/products/Solid Surface/non bendable/rehau/rh4.jpg',
        '/products/Solid Surface/non bendable/rehau/rh5.jpg'
      ],
    };

    console.log('Looking for images for path:', path);
    console.log('Found images:', imageMap[path] || []);
    
    return imageMap[path] || [];
  };

  // Check for sports-flooring (with or without leading slash)
  if (productPath === 'sports-flooring' || productPath === '/sports-flooring') {
    console.log('🧪 Creating sports flooring gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Sports Flooring Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
                cursor="pointer"
                onClick={() => handleImageClick(index, images)}
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Sports Flooring Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Sports Flooring Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Sports Flooring')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Screen Modal */}
        <Modal 
          isOpen={isFullScreen} 
          onClose={closeFullScreen} 
          size="full"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
          <ModalContent bg="transparent" maxW="95vw" maxH="95vh">
            <ModalCloseButton 
              color="white" 
              size="lg"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <ModalBody display="flex" alignItems="center" justifyContent="center" p={0}>
              <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Full size image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  // Check for gym-flooring (with or without leading slash, and full path)
  if (productPath === 'gym-flooring' || productPath === '/gym-flooring' || productPath === '/sports-flooring/gym-flooring') {
    console.log('🧪 Creating gym flooring gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Gym Flooring Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
                cursor="pointer"
                onClick={() => handleImageClick(index, images)}
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Gym Flooring Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Gym Flooring Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Gym Flooring')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Screen Modal */}
        <Modal 
          isOpen={isFullScreen} 
          onClose={closeFullScreen} 
          size="full"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
          <ModalContent bg="transparent" maxW="95vw" maxH="95vh">
            <ModalCloseButton 
              color="white" 
              size="lg"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <ModalBody display="flex" alignItems="center" justifyContent="center" p={0}>
              <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Full size image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  // Check for artificial-grass (with or without leading slash, and full path)
  if (productPath === 'artificial-grass' || productPath === '/artificial-grass' || productPath === '/sports-flooring/artificial-grass') {
    console.log('🧪 Creating artificial grass gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Artificial Grass Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Artificial Grass Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Artificial Grass Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Artificial Grass')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // Check for rubber-flooring (with or without leading slash, and full path)
  if (productPath === 'rubber-flooring' || productPath === '/rubber-flooring' || productPath === '/sports-flooring/rubber-flooring') {
    console.log('🧪 Creating rubber flooring gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Rubber Flooring Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Rubber Flooring Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Rubber Flooring Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Rubber Flooring')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // Check for quartz (with or without leading slash, and full path)
  if (productPath === 'quartz' || productPath === '/quartz' || productPath === '/products/quartz') {
    console.log('🧪 Creating quartz gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Quartz Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Quartz Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Quartz Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Quartz')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // Check for alabaster-sheet (with or without leading slash, and full path)
  if (productPath === 'alabaster-sheet' || productPath === '/alabaster-sheet' || productPath === '/products/alabaster') {
    console.log('🧪 Creating alabaster gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Alabaster Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Alabaster Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Alabaster Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Alabaster')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // Check for all flooring types (with or without leading slash)
  const flooringTypes = [
    'carpet-flooring', 'deck-flooring', 'engineered-flooring', 'engineered-wooden-flooring', 'homogenous-flooring',
    'laminated-flooring', 'lvt-flooring', 'non-woven-flooring', 'solid-wooden-flooring',
    'spc-flooring', 'vinyl-flooring'
  ];
  
  // Check for all panel types (with or without leading slash)
  const panelTypes = [
    'acoustic-panels', 'charcoal-panels', 'louver-fluted-panels', 'hpl-cladding',
    'mlv-sound-barrier', 'pvc-panels'
  ];
  
  // Check for all solid surface bendable types (with or without leading slash)
  const solidSurfaceTypes = [
    'dunes-solid-surface', 'dupont-solid-surface', 'lx-hausys-solid-surface', 'rehau-solid-surface',
    'riya-solid-surface', 'staron-solid-surface', 'tristone-solid-surface', 'vivanta-solid-surface', 'vivantha-solid-surface'
  ];
  
  // Check for all solid surface non-bendable types (with or without leading slash)
  const solidSurfaceNonBendableTypes = [
    'alticore-solid-surface', 'inlife-solid-surface', 'omex-solid-surface', 'rehau-non-solid-surface'
  ];
  
  const normalizedPath = productPath.replace(/^\//, '');
  
  if (flooringTypes.includes(normalizedPath)) {
    const galleryTitle = normalizedPath.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Gallery';
    console.log(`🧪 Creating ${galleryTitle}...`);
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>{galleryTitle}</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    {galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image'} {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={galleryTitle ? `${galleryTitle.replace(' Gallery', '')} Image ${index + 1}` : `Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  if (panelTypes.includes(normalizedPath)) {
    const galleryTitle = normalizedPath.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Gallery';
    console.log(`🧪 Creating ${galleryTitle}...`);
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>{galleryTitle}</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
                cursor="pointer"
                onClick={() => handleImageClick(index, images)}
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    {galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image'} {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={galleryTitle ? `${galleryTitle.replace(' Gallery', '')} Image ${index + 1}` : `Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Screen Modal */}
        <Modal 
          isOpen={isFullScreen} 
          onClose={closeFullScreen} 
          size="full"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
          <ModalContent bg="transparent" maxW="95vw" maxH="95vh">
            <ModalCloseButton 
              color="white" 
              size="lg"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <ModalBody display="flex" alignItems="center" justifyContent="center" p={0}>
              <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Full size image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  if (solidSurfaceTypes.includes(normalizedPath)) {
    const galleryTitle = normalizedPath.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Gallery';
    console.log(`🧪 Creating ${galleryTitle}...`);
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>{galleryTitle}</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
                cursor="pointer"
                onClick={() => handleImageClick(index, images)}
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    {galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image'} {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={galleryTitle ? `${galleryTitle.replace(' Gallery', '')} Image ${index + 1}` : `Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Screen Modal */}
        <Modal 
          isOpen={isFullScreen} 
          onClose={closeFullScreen} 
          size="full"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
          <ModalContent bg="transparent" maxW="95vw" maxH="95vh">
            <ModalCloseButton 
              color="white" 
              size="lg"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <ModalBody display="flex" alignItems="center" justifyContent="center" p={0}>
              <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Full size image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  if (solidSurfaceNonBendableTypes.includes(normalizedPath)) {
    const galleryTitle = normalizedPath.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Gallery';
    console.log(`🧪 Creating ${galleryTitle}...`);
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>{galleryTitle}</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
                cursor="pointer"
                onClick={() => handleImageClick(index, images)}
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    {galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image'} {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={galleryTitle ? `${galleryTitle.replace(' Gallery', '')} Image ${index + 1}` : `Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, galleryTitle ? galleryTitle.replace(' Gallery', '') : 'Image')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Screen Modal */}
        <Modal 
          isOpen={isFullScreen} 
          onClose={closeFullScreen} 
          size="full"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
          <ModalContent bg="transparent" maxW="95vw" maxH="95vh">
            <ModalCloseButton 
              color="white" 
              size="lg"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <ModalBody display="flex" alignItems="center" justifyContent="center" p={0}>
              <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Full size image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  // Check for wallpaper (with or without leading slash, and full path)
  if (productPath === 'wall-paper' || productPath === '/wall-paper' || productPath === '/products/wallpaper') {
    console.log('🧪 Creating wallpaper gallery...');
    
    const images = getImageList(productPath);

    return (
      <Box w="full" maxW="full">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Wallpaper Gallery</Text>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          speed={700}
          effect="slide"
          className="product-gallery-swiper"
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                overflow="hidden"
                rounded="2xl"
                h="420px"
                w="full"
                shadow="lg"
                bg="gray.200"
                cursor="pointer"
                onClick={() => handleImageClick(index, images)}
              >
                {imageErrors[index] ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    color="gray"
                    fontSize="18px"
                    fontWeight="bold"
                    bg="linear-gradient(135deg, #E8E8E4 0%, #D3D3CC 100%)"
                  >
                    Wallpaper Image {index + 1}
                  </Box>
                ) : (
                  <img
                    src={image}
                    alt={`Wallpaper Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={() => handleImageError(index, 'Wallpaper')}
                    onLoad={() => handleImageLoad(index, image)}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Screen Modal */}
        <Modal 
          isOpen={isFullScreen} 
          onClose={closeFullScreen} 
          size="full"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
          <ModalContent bg="transparent" maxW="95vw" maxH="95vh">
            <ModalCloseButton 
              color="white" 
              size="lg"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <ModalBody display="flex" alignItems="center" justifyContent="center" p={0}>
              <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Full size image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  // Fallback for other products
  return (
    <Box 
      bg="gray.50" 
      p={8} 
      rounded="2xl" 
      textAlign="center"
      border="2px dashed"
      borderColor="gray.200"
      h="420px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="lg"
    >
      <Box color="gray.400" fontSize="lg">
        No gallery configured for {productPath}
      </Box>
    </Box>
  );
};

export default ProductGallery;
