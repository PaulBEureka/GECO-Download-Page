const features = [
  {
    title: "Sustainable Chat",
    description:
      "Chat with GECO about sustainability topics. Input via message box, initial prompts, or speech-to-text. All conversations are saved in Chat History.",
  },
  {
    title: "Chat History & Add Chat",
    description:
      "View past conversations and start new chats for different topics.",
  },
  {
    title: "Sustainable Search",
    description:
      "Search using Gemini’s AI and Brave Search API for sustainability-focused results. Input via search box, initial prompts, or speech-to-text.",
  },
  {
    title: "Weekly Report",
    description:
      "Get weekly summaries of your mobile habits. Use reports to converse with GECO and improve sustainability.",
  },
  {
    title: "Monitor",
    description:
      "Get notifications for unsustainable habits (charging, browsing, data usage, location services). Suggestions for more mindful and sustainable device use.",
  },
  {
    title: "Settings",
    description:
      "Delete conversation history and weekly reports. Switch between color schemes (including Dark Mode). Enable notifications and habit monitoring.",
  },
  {
    title: "Dark Mode",
    description:
      "Switch to a dark color scheme for reduced eye strain.",
  },
  {
    title: "Notifications",
    description:
      "Receive reminders and updates about your habits.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Features</h2>
        <p className="text-lg mt-2">Discover what makes GECO special</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-left"
          >
            <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-400">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
