import { useState } from "react";
import { motion } from "framer-motion";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("3U");

  const tabs = [
    { id: "3U", label: "LES 3U" },
    { id: "4C", label: "LES 4C" },
    { id: "SINGES", label: "LES 3 SINGES" },
    { id: "IQ", label: "IQ ENGAGEMENT QUALITY" },
  ];

  const tabContent = {
    "3U": (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">LES 3U</h2>
        <div className="mb-2 text-gray-700">c'est quoi en vrai?</div>
        <div className="text-gray-800">
          UNE AGENCE INNOVANTE COMME VOUS POUVEZ LE VOIR C'EST IMPECABLE CHEZ NOUS JE VOUS LE GARENT!
        </div>
      </div>
    ),
    "4C": (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">LES 4C</h2>
        <div className="text-gray-800">Content for LES 4C goes here...</div>
      </div>
    ),
    "SINGES": (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">LES 3 SINGES</h2>
        <div className="text-gray-800">Content for LES 3 SINGES goes here...</div>
      </div>
    ),
    "IQ": (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">IQ ENGAGEMENT QUALITY</h2>
        <div className="text-gray-800">Content for IQ ENGAGEMENT QUALITY goes here...</div>
      </div>
    ),
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden py-[]">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium relative z-10 ${
              activeTab === tab.id 
                ? "bg-white text-gray-900 rounded-t-lg border-t border-l border-r border-gray-200" 
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-b-lg rounded-tr-lg border border-gray-200 shadow-sm"
      >
        {tabContent[activeTab]}
      </motion.div>
    </div>
  );
};

export default TabsComponent;