export default function AIEngagementDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#6B4F4E] to-[#8B6794] text-white p-6">
          <h3 className="text-2xl font-bold">AI Engagement Dashboard</h3>
          <p className="text-white/80">Real-time insights and personalized user experiences</p>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-sm text-blue-800 font-medium">Engagement Rate</div>
              <div className="text-xs text-blue-600 mt-1">↑ 23% this month</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">4.2x</div>
              <div className="text-sm text-green-800 font-medium">Time on Site</div>
              <div className="text-xs text-green-600 mt-1">↑ 45% this month</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">312</div>
              <div className="text-sm text-purple-800 font-medium">Active Readers</div>
              <div className="text-xs text-purple-600 mt-1">↑ 12% this hour</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#6B4F4E] mb-4">🎯 Personalized Recommendations</h4>
              <div className="space-y-3">
                {[
                  { title: "AI Content Strategy Guide", match: "95%", reason: "Based on your recent reading history" },
                  { title: "Monetization Best Practices", match: "92%", reason: "Popular with similar users" },
                  { title: "Future of Publishing", match: "88%", reason: "Trending in your interests" }
                ].map((rec, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border-l-4 border-[#6B4F4E]">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium text-gray-800 text-sm">{rec.title}</h5>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{rec.match}</span>
                    </div>
                    <p className="text-xs text-gray-600">{rec.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#6B4F4E] mb-4">⚡ Live Activity Feed</h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {[
                  { action: "New subscriber joined", time: "2m ago", type: "success" },
                  { action: "Article shared on LinkedIn", time: "3m ago", type: "info" },
                  { action: "Comment posted", time: "5m ago", type: "info" },
                  { action: "Newsletter signup", time: "7m ago", type: "success" },
                  { action: "AI chat interaction", time: "8m ago", type: "primary" },
                  { action: "Content recommendation clicked", time: "12m ago", type: "info" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'primary' ? 'bg-[#6B4F4E]' : 'bg-blue-500'
                      }`}></div>
                      <span className="text-sm text-gray-800">{activity.action}</span>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-[#6B4F4E] to-[#8B6794] rounded-xl text-white">
            <h5 className="font-semibold mb-2">🤖 AI Insight</h5>
            <p className="text-sm text-white/90">Your audience is most engaged with AI and technology content between 2-4 PM. Consider scheduling your next AI-related article during this time window for maximum impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
