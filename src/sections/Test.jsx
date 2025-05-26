import { useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Test = () => {
  const [isFlowing, setIsFlowing] = useState(false);
  const [activeContent, setActiveContent] = useState(null);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const images = [
    { id: 1, src: 'https://picsum.photos/200/300?random=1', alt: 'Image 1', 
      content: 'Detailed description for Image 1 with additional information' },
    { id: 2, src: 'https://picsum.photos/200/300?random=2', alt: 'Image 2', 
      content: 'Detailed description for Image 2 with additional information' },
    { id: 3, src: 'https://picsum.photos/200/300?random=3', alt: 'Image 3', 
      content: 'Detailed description for Image 3 with additional information' },
    { id: 4, src: 'https://picsum.photos/200/300?random=4', alt: 'Image 4', 
      content: 'Detailed description for Image 4 with additional information' },
    { id: 5, src: 'https://picsum.photos/200/300?random=5', alt: 'Image 5', 
      content: 'Detailed description for Image 5 with additional information' },
  ];

  const startFlow = async () => {
    setIsFlowing(true);
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const imageWidth = 200;
    const totalImagesWidth = images.length * (imageWidth + 16); // 16px gap
    
    // Calculate position to center the images
    const targetX = (containerWidth - totalImagesWidth) / 2;
    
    await controls.start({
      x: targetX,
      transition: {
        duration: 3,
        ease: [0.42, 0, 0.58, 1], // Bezier curve for fast start/slow end
      }
    });
    
    setIsFlowing(false);
  };

  const resetFlow = () => {
    controls.start({ x: -2000 }); // Move back off-screen left
    setActiveContent(null);
    setIsFlowing(false);
  };

  const handleImageClick = (id) => {
    setActiveContent(activeContent === id ? null : id);
  };

  return (
    <div className="w-[60vw] mx-auto p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={startFlow}
          disabled={isFlowing}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Start Flow00
        </button>
        <button
          onClick={resetFlow}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Reset
        </button>
      </div>

      <div className="flex">
        <div 
          ref={containerRef}
          className="relative overflow-hidden h-96 w-full border border-gray-200 rounded-lg"
        >
          <motion.div
            className="flex gap-4 absolute left-0 top-1/2 -translate-y-1/2"
            animate={controls}
            initial={{ x: -2000 }} // Start completely off-screen left
          >
            {images.map((image) => (
              <motion.div 
                key={image.id} 
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-48 h-64 object-cover rounded-lg cursor-pointer shadow-md"
                  onClick={() => handleImageClick(image.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Content panel to the right */}
        <div className="w-96 ml-8">
          <AnimatePresence>
            {activeContent && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full"
              >
                {images.find(img => img.id === activeContent)?.content && (
                  <>
                    <h3 className="text-xl font-bold mb-4">
                      {images.find(img => img.id === activeContent).alt}
                    </h3>
                    <p className="text-gray-700">
                      {images.find(img => img.id === activeContent).content}
                    </p>
                    <button 
                      onClick={() => setActiveContent(null)}
                      className="mt-4 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                    >
                      Close
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Test;