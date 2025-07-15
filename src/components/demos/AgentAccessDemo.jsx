export default function AgentAccessDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#6B4F4E] to-[#8B6794] text-white p-6">
          <h3 className="text-2xl font-bold">Agent Access Layer (MCP)</h3>
          <p className="text-white/80">Future-proof your content for AI agents and autonomous systems</p>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#6B4F4E] mb-4">🔗 MCP Integration Status</h4>
              <div className="space-y-4">
                {[
                  { feature: "Content Indexing", status: "complete", progress: 100 },
                  { feature: "API Endpoints", status: "complete", progress: 100 },
                  { feature: "Agent Permissions", status: "active", progress: 85 },
                  { feature: "Schema Validation", status: "active", progress: 72 },
                  { feature: "Rate Limiting", status: "pending", progress: 45 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{item.feature}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'complete' ? 'bg-green-100 text-green-800' :
                        item.status === 'active' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status === 'complete' ? '✓ Complete' :
                         item.status === 'active' ? '◐ Active' : '⏳ Pending'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          item.status === 'complete' ? 'bg-green-500' :
                          item.status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                        style={{width: `${item.progress}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h5 className="font-semibold text-[#6B4F4E] mb-3">🤖 Connected AI Agents</h5>
                <div className="space-y-2">
                  {[
                    { name: "Research Assistant Agents", count: "12 active", color: "green" },
                    { name: "Content Discovery Bots", count: "8 active", color: "blue" },
                    { name: "Citation & Reference Tools", count: "5 active", color: "purple" },
                    { name: "Analytics Scrapers", count: "3 active", color: "orange" }
                  ].map((agent, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{agent.name}</span>
                      <span className={`text-${agent.color}-600 font-medium`}>{agent.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#6B4F4E] mb-4">📊 API Usage Analytics</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1,247</div>
                    <div className="text-sm text-blue-800">Requests Today</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">99.2%</div>
                    <div className="text-sm text-green-800">Uptime</div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-3">Recent API Calls</h5>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {[
                      { endpoint: "/api/content/search", agent: "ResearchBot", time: "2s ago" },
                      { endpoint: "/api/articles/latest", agent: "ContentCrawler", time: "15s ago" },
                      { endpoint: "/api/metadata/extract", agent: "CitationTool", time: "32s ago" },
                      { endpoint: "/api/content/recommend", agent: "DiscoveryBot", time: "1m ago" },
                      { endpoint: "/api/analytics/engagement", agent: "MetricsAgent", time: "2m ago" }
                    ].map((call, index) => (
                      <div key={index} className="flex items-center justify-between text-xs bg-gray-50 p-2 rounded">
                        <div>
                          <span className="font-mono text-[#6B4F4E]">{call.endpoint}</span>
                          <span className="text-gray-500 ml-2">({call.agent})</span>
                        </div>
                        <span className="text-gray-400">{call.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-[#6B4F4E] to-[#8B6794] rounded-xl text-white">
                  <h5 className="font-semibold mb-2">🚀 Future Ready</h5>
                  <p className="text-sm text-white/90">Your content is now discoverable by next-generation AI agents. You're positioned to benefit from the emerging AI ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
