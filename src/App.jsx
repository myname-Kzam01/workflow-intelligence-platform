export default function App() {
  const [industry, setIndustry] = useState("Real Estate");
  const [country, setCountry] = useState("Australia");
  const [systems, setSystems] = useState("realestate.com.au, domain.com.au, Rex CRM, Twilio, WhatsApp");
  const [requestText, setRequestText] = useState("A real estate business in Australia wants to trigger when listings are finishing their exclusive contract that has been listed on realestate.com.au or domain.com.au, call the homeowner on behalf of a new real estate agent using conversational AI voice, and send the new realestate agent a WhatsApp message to book an appraisal or receive feedback from the call.");
            {/* Target Systems Used */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center">
                <Database className="w-3.5 h-3.5 mr-1 text-slate-400" /> Target Systems & Tools Used
              </label>
              <input
                type="text"
                value={systems}
                onChange={(e) => setSystems(e.target.value)}
                placeholder="e.g. realestate.com.au, Rex CRM, WhatsApp, Twilio"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* BACKEND AFFILIATE CONFIGURATION */}
            <details className="group bg-slate-950/60 border border-slate-800 rounded-xl p-3">
              <summary className="text-xs font-semibold text-slate-400 cursor-pointer flex items-center justify-between select-none">
                <span className="flex items-center text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Backend Affiliate Configuration (Admin Only)
                </span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2">
                <label className="block text-[11px] text-slate-400 font-mono">
                  Master Partner / Affiliate Tracking Link:
                </label>
                <input
                  type="text"
                  value={affiliateLink}
                  onChange={(e) => setAffiliateLink(e.target.value)}
                  placeholder="https://partner-tool.com/signup?aff=YOUR_ID"
                  className="w-full bg-slate-950 border border-cyan-500/40 rounded-lg px-3 py-2 text-xs text-cyan-200 font-mono focus:outline-none focus:border-cyan-400"
                />
              </div>
            </details>

            {/* Requested Automation Workflow */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center">
                <Terminal className="w-3.5 h-3.5 mr-1 text-slate-400" /> Requested Automation Workflow
              </label>
              <textarea
                rows={5}
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                placeholder="Describe your desired workflow step by step..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Analyze Button */}
            <button
              onClick={() => {
                if (remainingFreeRuns > 0) setRemainingFreeRuns(prev => prev - 1);
                runAnalysis();
              }}
              disabled={isAnalyzing}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all duration-200 text-sm disabled:opacity-50 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Building Implementation Architecture...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Generate Workflow & Implementation Plan ({remainingFreeRuns} Free Left)</span>
                </>
              )}
            </button>

          </div>
        </section>

        {/* RIGHT COLUMN: Output Tabs & Architecture (7 cols) */}
        <section className="lg:col-span-7 flex flex-col space-y-6">

          {/* Navigation Bar for Output */}
          <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex items-center justify-between shadow-xl">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("visualizer")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center transition-all ${
                  activeTab === "visualizer"
                    ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className="w-3.5 h-3.5 mr-1.5" /> Architecture Map
              </button>

              <button
                onClick={() => setActiveTab("guide")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center transition-all ${
                  activeTab === "guide"
                    ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Implementation Guide
              </button>

              <button
                onClick={() => setActiveTab("blueprint")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center transition-all ${
                  activeTab === "blueprint"
                    ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <FileText className="w-3.5 h-3.5 mr-1.5" /> Technical Spec
              </button>
            </div>

            <div className="flex items-center space-x-2 pr-2">
              <button
                onClick={copyBlueprint}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 transition-colors"
                title="Copy Analysis JSON"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={downloadBlueprint}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 transition-colors"
                title="Download Blueprint JSON"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TAB 1: Visual Workflow Architecture */}
          {activeTab === "visualizer" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex-1 flex flex-col space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-cyan-400" /> Workflow Architecture Flow
                  </h3>
                  <span className="text-[11px] bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2.5 py-0.5 rounded-full font-medium">
                    Verified Blueprint
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  High-performance blueprint connecting listing triggers, AI voice agents, speech processing, and CRM notification routing.
                </p>
              </div>

              {/* Node Flow Map */}
              <div className="space-y-4">
                {analysis?.architectureSteps?.map((step, idx) => (
                  <div key={idx} className="relative flex items-start group">
                    {/* Node Index Icon */}
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-xs shadow-md shadow-cyan-500/10">
                        {step.step}
                      </div>
                      {idx !== analysis.architectureSteps.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-slate-800 my-1"></div>
                      )}
                    </div>

                    {/* Node Card Content */}
                    <div className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 transition-colors shadow-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-cyan-300">{step.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          {step.type}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-slate-300 mb-1 flex items-center space-x-1.5">
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>{step.tech}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Banner */}
              <div className="mt-auto bg-slate-950 border border-slate-800/90 rounded-xl p-4 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-slate-100">Workflow Summary:</strong> {analysis.summary}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Step-by-step Implementation & Business Onboarding Guide */}
          {activeTab === "guide" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div>
                <h3 className="text-base font-bold text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-cyan-400" /> Step-by-Step Business Implementation Guide
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Actionable onboarding roadmap to integrate this automated workflow into your daily business operations.
                </p>
              </div>

              {/* Implementation Phases */}
              <div className="space-y-6">
                {analysis?.implementationGuide?.map((phase, pIdx) => (
                  <div key={pIdx} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center space-x-2 border-b border-slate-800/80 pb-2.5">
                      <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                        {pIdx === 0 && <ShieldCheck className="w-4 h-4" />}
                        {pIdx === 1 && <Bot className="w-4 h-4" />}
                        {pIdx === 2 && <Users className="w-4 h-4" />}
                        {pIdx === 3 && <Rocket className="w-4 h-4" />}
                      </div>
                      <h4 className="text-sm font-bold text-slate-200">
                        {phase.phase}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 pt-1">
                      {phase.steps.map((stepText, sIdx) => (
                        <li key={sIdx} className="flex items-start text-xs text-slate-300 space-x-2.5">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 flex items-center justify-center text-[10px] font-bold mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span className="leading-relaxed text-slate-300">{stepText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Technical Blueprint Spec */}
          {activeTab === "blueprint" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-cyan-400" /> Exportable Implementation Spec
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Machine-readable configuration schema for automated system deployment and workflow orchestration.
                  </p>
                </div>
                <button
                  onClick={downloadBlueprint}
                  className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg flex items-center transition-colors"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" /> Export JSON
                </button>
              </div>

              {/* JSON Editor Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto max-h-[450px]">
                <pre>{JSON.stringify({
                  metadata: {
                    platform: "Workflow Intelligence Business Implementation Engine",
                    industry,
                    country,
                    generated_at: new Date().toISOString()
                  },
                  systems_used: systems.split(',').map(s => s.trim()),
                  architecture: analysis.architectureSteps,
                  implementation_guide: analysis.implementationGuide
                }, null, 2)}</pre>
              </div>
            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Workflow Intelligence Platform &bull; End-to-End Automation Architecture & Business Implementation Guides
      </footer>
    </div>
    </>
  );
}
