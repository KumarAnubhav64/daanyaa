import { useState } from 'react';

export default function TabSwitcher({
  tabs,
  defaultTab = 0,
  className = "",
  tabClassName = "",
  contentClassName = "",
  variant = "default"
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const variants = {
    default: {
      container: "bg-white rounded-2xl p-8 shadow-sm",
      tabsContainer: "flex flex-wrap gap-2 mb-6 p-1 bg-gray-100 rounded-lg",
      activeTab: "bg-[#6B4F4E] text-white",
      inactiveTab: "bg-transparent text-[#6B4F4E] hover:bg-white",
      tab: "px-4 py-2 rounded-md font-medium transition-all duration-200",
      content: "text-[#6B4F4E]"
    },
    pills: {
      container: "bg-transparent",
      tabsContainer: "flex flex-wrap justify-center gap-3 mb-8",
      activeTab: "bg-[#6B4F4E] text-white shadow-lg",
      inactiveTab: "bg-white text-[#6B4F4E] border border-[#6B4F4E] hover:bg-[#6B4F4E] hover:text-white",
      tab: "px-6 py-3 rounded-full font-medium transition-all duration-300",
      content: "bg-white rounded-2xl p-8 shadow-sm text-[#6B4F4E]"
    },
    underline: {
      container: "bg-transparent",
      tabsContainer: "flex gap-6 mb-6 border-b border-gray-200",
      activeTab: "text-[#6B4F4E] border-b-2 border-[#6B4F4E]",
      inactiveTab: "text-gray-600 hover:text-[#6B4F4E]",
      tab: "pb-3 font-medium transition-all duration-200",
      content: "pt-6 text-[#6B4F4E]"
    }
  };

  const styles = variants[variant] || variants.default;

  if (!tabs || tabs.length === 0) {
    return <div className="text-red-500">No tabs provided</div>;
  }

  return (
    <div className={`${styles.container} ${className}`}>
      {/* Tab Buttons */}
      <div className={`${styles.tabsContainer} ${tabClassName}`}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id || index}
            onClick={() => setActiveTab(index)}
            className={`${styles.tab} ${
              activeTab === index ? styles.activeTab : styles.inactiveTab
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`${styles.content} ${contentClassName}`}>
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}
