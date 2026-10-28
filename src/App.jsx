import React, { useState, useEffect } from 'react';
import { 
  Building2, Globe, Wrench, Sparkles, Play, Cpu, CheckCircle2, 
  ArrowRight, Layers, FileText, Download, RefreshCw, Zap,
  Bot, PhoneCall, Database, MessageSquare, Terminal, ChevronRight, Copy, Check,
  BookOpen, Rocket, ShieldCheck, Users, Workflow, ExternalLink
} from 'lucide-react';

// Affiliate Link Mapping Dictionary for Tools (Add your referral/affiliate links here)
const TOOL_AFFILIATE_MAP = {
  "Vapi.ai": "https://vapi.ai/?via=your_affiliate_id",
  "Bland.ai": "https://bland.ai/?ref=your_affiliate_id",
  "Retell AI": "https://retellai.com/?ref=your_affiliate_id",
  "ElevenLabs AI Voice": "https://elevenlabs.io/?from=your_affiliate_id",
  "Deepgram": "https://deepgram.com/?ref=your_affiliate_id",
  "Rex CRM": "https://www.rexsoftware.com/?ref=your_affiliate_id",
  "HubSpot CRM": "https://hubspot.com/?ref=your_affiliate_id",
  "Make.com": "https://www.make.com/?pc=your_affiliate_id",
  "Zapier": "https://zapier.com/sign-up?ref=your_affiliate_id",
  "WhatsApp Business API": "https://business.whatsapp.com/",
  "Twilio": "https://www.twilio.com/referral/your_affiliate_id",
  "Default": "https://your-default-affiliate-link.com"
};

// Preset Scenarios
const PRESETS = [
  {
    title: "Aus Real Estate - Expiring Listing AI Caller",
    industry: "Real Estate",
    country: "Australia",
    systems: "realestate.com.au, domain.com.au, Rex CRM, Twilio, WhatsApp, Vapi AI",
    request: "A real estate business in Australia wants to trigger when listings are finishing their exclusive contract that has been listed on realestate.com.au or domain.com.au, call the homeowner on behalf of a new real estate agent using conversational AI voice, and send the new realestate agent a WhatsApp message to book an appraisal or receive feedback from the call."
  },
  {
    title: "US Healthcare - Patient Intake & Screening",
    industry: "Healthcare",
    country: "USA",
    systems: "Epic EMR, Patient Portal, Bland AI, Secure Webhook, Salesforce Health Cloud",
    request: "When a new patient registers on an external web portal, automatically trigger an outbound AI voice call for pre-screening confirmation, verify insurance via API bridge, and update Epic EMR securely."
  },
  {
    title: "E-Commerce - VIP Cart Recovery & Voice Concierge",
    industry: "E-Commerce",
    country: "Global",
    systems: "Shopify Plus, ElevenLabs AI Voice, WhatsApp Business API, Klaviyo, Gorgias",
    request: "When a customer with cart value > $1,000 abandons cart, trigger a dynamic personalized voice call from an AI brand concierge within 15 minutes, offering an exclusive discount and pushing notes to Gorgias CRM."
  }
];

// Comprehensive Master Library of Tools available for EVERY case / workflow
const MASTER_RECOMMENDED_TOOLS = [
  {
    name: "Vapi.ai",
    category: "Voice AI",
    description: "Ultra-low latency conversational voice agent dispatch for automated outbound client calls.",
    badge: "Voice AI",
    macLink: "https://vapi.ai/",
    winLink: "https://vapi.ai/"
  },
  {
    name: "Retell AI",
    category: "Voice AI",
    description: "Lightning-fast conversational voice AI infrastructure for custom telephony and voice agents.",
    badge: "Voice AI",
    macLink: "https://retellai.com/",
    winLink: "https://retellai.com/"
  },
  {
    name: "Bland.ai",
    category: "Voice AI",
    description: "Enterprise phone calling AI platform with high-volume concurrency support.",
    badge: "Voice AI",
    macLink: "https://bland.ai/",
    winLink: "https://bland.ai/"
  },
  {
    name: "ElevenLabs AI Voice",
    category: "Voice AI",
    description: "Ultra-realistic AI voice generation and emotional speech synthesis for natural dialogues.",
    badge: "Voice AI",
    macLink: "https://elevenlabs.io/",
    winLink: "https://elevenlabs.io/"
  },
  {
    name: "Rex CRM",
    category: "CRM",
    description: "Stores listing contract dates and logs automated outreach history inside client timelines.",
    badge: "CRM",
    macLink: "https://www.rexsoftware.com/",
    winLink: "https://www.rexsoftware.com/"
  },
  {
    name: "HubSpot CRM",
    category: "CRM",
    description: "Global CRM platform for pipeline tracking and customer relationship management.",
    badge: "CRM",
    macLink: "https://hubspot.com/",
    winLink: "https://hubspot.com/"
  },
  {
    name: "Make.com",
    category: "Automation",
    description: "Visual automation builder connecting webhooks, APIs, and data triggers effortlessly.",
    badge: "Automation",
    macLink: "https://www.make.com/",
    winLink: "https://www.make.com/"
  },
  {
    name: "Zapier",
    category: "Automation",
    description: "Industry standard integration glue connecting thousands of cloud web apps.",
    badge: "Automation",
    macLink: "https://zapier.com/",
    winLink: "https://zapier.com/"
  },
  {
    name: "WhatsApp Business API",
    category: "Messaging",
    description: "Dispatches instant alerts and 1-click booking links to assigned sales agents.",
    badge: "Messaging",
    macLink: "https://business.whatsapp.com/",
    winLink: "https://business.whatsapp.com/"
  }
];

// Pre-calculated Architecture & Step-by-step implementation for Demo Preset 1
const DEMO_ANALYSIS = {
  summary: "This custom automation architecture connects listing data sources with conversational AI voice calling and dynamic mobile agent notifications for seamless lead conversion.",
  architectureSteps: [
    {
      step: 1,
      name: "Listing Expiration Event Capture",
      type: "Trigger Source",
      tech: "Property CRM Webhook / Portal Scraper Service",
      details: "Monitors exclusive listing contract end-dates (M - 7 days) across agency CRM or property portal records."
    },
    {
      step: 2,
      name: "Conversational AI Voice Dispatch",
      type: "AI Processing",
      tech: "Vapi.ai / Bland.ai + Custom Voice Persona",
      details: "Triggers an automated outbound phone call to the homeowner. The AI agent speaks on behalf of the agency, checks re-listing intent, and captures seller sentiment."
    },
    {
      step: 3,
      name: "Real-Time Call Transcript Analysis",
      type: "LLM Intelligence",
      tech: "Gemini 3 Flash Structured Data Extraction",
      details: "Processes call audio in real-time to extract seller availability, appraisal interest rating (High/Med/Low), and key notes."
    },
    {
      step: 4,
      name: "Agent Notification & Calendar Sync",
      type: "Action Dispatcher",
      tech: "WhatsApp Business Cloud API / Slack / Rex CRM",
      details: "Pushes immediate notification to the assigned real estate agent with call summary and 1-click booking links for property appraisal."
    }
  ],
  recommendedTools: MASTER_RECOMMENDED_TOOLS,
  implementationGuide: [
    {
      phase: "Phase 1: Setup & API Credentials",
      icon: "ShieldCheck",
      steps: [
        "Connect your agency CRM (e.g. Rex CRM or VaultRE) API key to authorize read access for expiring contracts.",
        "Configure your Vapi.ai / Bland.ai voice account and claim dedicated local Australian phone numbers (04xx or 02/03 prefix).",
        "Set up WhatsApp Business API / Slack webhooks to receive real-time notifications for your sales team."
      ]
    },
    {
      phase: "Phase 2: Voice AI Persona & Scripting Setup",
      icon: "Bot",
      steps: [
        "Prompt the AI caller with specific agency context: 'You are calling on behalf of [Agency Name] regarding the upcoming expiration of exclusive agreement for [Property Address]...'",
        "Enable objection-handling routines for common homeowner questions (e.g., commission rates, market timing).",
        "Test call flows with internal team members before deploying live outbound calling."
      ]
    },
    {
      phase: "Phase 3: Team Onboarding & Workflow Routing",
      icon: "Users",
      steps: [
        "Assign sales agents to specific listing territories or listing categories in the workflow platform dashboard.",
        "Ensure agents have WhatsApp or mobile app notifications enabled for instant feedback alerts after every call.",
        "Provide quick-action templates so agents can accept leads and schedule property appraisal visits with 1 click."
      ]
    },
    {
      phase: "Phase 4: Operational Verification & Testing",
      icon: "Rocket",
      steps: [
        "Run a batch test on 5 past or test listings to verify end-to-end data flow.",
        "Check that call transcript summaries populate correctly inside the agency CRM timeline.",
        "Monitor call sentiment metrics and optimize voice script prompts weekly based on response performance."
      ]
    }
  ]
};

export default function App() {
  const [industry, setIndustry] = useState("Real Estate");
  const [country, setCountry] = useState("Australia");
  const [systems, setSystems] = useState("realestate.com.au, domain.com.au, Rex CRM, Twilio, WhatsApp");
  const [requestText, setRequestText] = useState("A real estate business in Australia wants to trigger when listings are finishing their exclusive contract that has been listed on realestate.com.au or domain.com.au, call the homeowner on behalf of a new real estate agent using conversational AI voice, and send the new realestate agent a WhatsApp message to book an appraisal or receive feedback from the call.");
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(DEMO_ANALYSIS);
  const [activeTab, setActiveTab] = useState("visualizer");
  const [copied, setCopied] = useState(false);
  const [affiliateLink, setAffiliateLink] = useState("");

  const applyPreset = (preset) => {
    setIndustry(preset.industry);
    setCountry(preset.country);
    setSystems(preset.systems);
    setRequestText(preset.request);
    runAnalysis(preset);
  };

  const runAnalysis = async (customInput = null) => {
    setIsAnalyzing(true);
    const textToAnalyze = customInput?.request || requestText;
    const isDefaultPreset = textToAnalyze.includes("realestate.com.au");

    setTimeout(async () => {
      if (isDefaultPreset) {
        setAnalysis({ ...DEMO_ANALYSIS, recommendedTools: MASTER_RECOMMENDED_TOOLS });
        setIsAnalyzing(false);
      } else {
        try {
          const systemPrompt = `You are an Enterprise Automation Architect & Business Systems Specialist. Create an end-to-end technical blueprint and actionable step-by-step business implementation guide based on the user's request. Return JSON matching:
          {
            "summary": "Short executive breakdown of the complete workflow execution plan",
            "architectureSteps": [
              { "step": 1, "name": "...", "type": "Trigger Source|AI Processing|LLM Intelligence|Action Dispatcher", "tech": "...", "details": "..." }
            ],
            "implementationGuide": [
              {
                "phase": "Phase 1: Setup & API Credentials",
                "icon": "ShieldCheck",
                "steps": ["Step 1...", "Step 2...", "Step 3..."]
              }
            ]
          }`;

          const payload = {
            contents: [{ parts: [{ text: `Industry: ${industry}\nCountry: ${country}\nSystems: ${systems}\nRequest: ${textToAnalyze}` }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            generationConfig: { responseMimeType: "application/json" }
          };

          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          
          const result = await res.json();
          const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
          if (jsonText) {
            const parsed = JSON.parse(jsonText);
            setAnalysis({
              ...parsed,
              recommendedTools: MASTER_RECOMMENDED_TOOLS
            });
          } else {
            fallbackGen();
          }
        } catch (e) {
          fallbackGen();
        } finally {
          setIsAnalyzing(false);
        }
      }
    }, 1200);
  };

  const fallbackGen = () => {
    setAnalysis({
      summary: `Automated integration solution for ${industry} in ${country} connecting existing tools to AI agents.`,
      architectureSteps: [
        { step: 1, name: "Event Extraction", type: "Trigger Source", tech: "Webhooks / System API", details: "Captures trigger events from primary database or portal." },
        { step: 2, name: "AI Orchestration", type: "AI Processing", tech: "Gemini 3 Flash + Voice Engine", details: "Executes automated communication or reasoning logic." },
        { step: 3, name: "Multi-channel Notification", type: "Action Dispatcher", tech: "REST API / Messaging API", details: "Dispatches alerts & syncs results back into internal CRM." }
      ],
      recommendedTools: MASTER_RECOMMENDED_TOOLS,
      implementationGuide: [
        {
          phase: "Phase 1: Environment & Credential Configuration",
          icon: "ShieldCheck",
          steps: [
            `Gather API keys for target systems (${systems.split(',')[0] || 'Primary System'}).`,
            "Configure authentication tokens and set up security webhooks.",
            "Test access endpoints to confirm system connectivity."
          ]
        },
        {
          phase: "Phase 2: Workflow & Logic Deployment",
          icon: "Bot",
          steps: [
            "Deploy integration triggers and dynamic payload mappers.",
            "Establish automated AI communication scripts and context templates.",
            "Route responses into designated notification channels."
          ]
        },
        {
          phase: "Phase 3: Team Onboarding & Training",
          icon: "Users",
          steps: [
            "Configure user permissions and team assignment rules.",
            "Train team members on reviewing automated task outputs.",
            "Establish alert escalation policies for urgent leads."
          ]
        },
        {
          phase: "Phase 4: Testing & Launch",
          icon: "Rocket",
          steps: [
            "Execute simulated end-to-end workflow runs.",
            "Verify data consistency across all connected databases.",
            "Activate live production schedule."
          ]
        }
      ]
    });
  };

  const copyBlueprint = () => {
    navigator.clipboard.writeText(JSON.stringify(analysis, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadBlueprint = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      intake: { industry, country, systems, requestText },
      analysis
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `automation-implementation-guide-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col antialiased m-0 p-0">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 m-0 pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-xl text-white shadow-lg shadow-cyan-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Workflow Intelligence Platform
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Single-Column Vertical Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Presets Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-300 flex items-center">
              <Play className="w-4 h-4 mr-2 text-cyan-400" /> Demo Scenarios
            </h2>
            <span className="text-xs text-slate-500">Click to instantly populate</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => applyPreset(p)}
                className="w-full text-left p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/50 transition-all text-xs group cursor-pointer"
              >
                <div className="font-semibold text-slate-200 group-hover:text-cyan-300 flex items-center justify-between">
                  <span>{p.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-slate-400 text-[11px] mt-1 line-clamp-2">{p.request}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Workflow Intake Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-cyan-400" /> Automation Request Intake
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Enter your industry, current software stack, and workflow goal to generate a full technical architecture and step-by-step onboarding plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center">
                <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400" /> Industry
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Real Estate, Healthcare"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center">
                <Globe className="w-3.5 h-3.5 mr-1 text-slate-400" /> Country / Region
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Australia, USA"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

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

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center">
              <Terminal className="w-3.5 h-3.5 mr-1 text-slate-400" /> Requested Automation Workflow
            </label>
            <textarea
              rows={4}
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              placeholder="Describe your desired workflow step by step..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none leading-relaxed"
            />
          </div>

          <button
            onClick={() => {
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
                <span>Generate Workflow & Implementation Plan</span>
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex items-center justify-between shadow-xl">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab("visualizer")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center transition-all cursor-pointer ${
                activeTab === "visualizer"
                  ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5 mr-1.5" /> Architecture Map
            </button>

            <button
              onClick={() => setActiveTab("guide")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center transition-all cursor-pointer ${
                activeTab === "guide"
                  ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Implementation Guide
            </button>

            <button
              onClick={() => setActiveTab("blueprint")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center transition-all cursor-pointer ${
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
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 transition-colors cursor-pointer"
              title="Copy Analysis JSON"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={downloadBlueprint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 transition-colors cursor-pointer"
              title="Download Blueprint JSON"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {activeTab === "visualizer" && (
          <div className="space-y-6">
            {/* RECOMMENDED AI TOOLS GRID WITH MAC/WIN AFFILIATE BUTTONS */}
            {analysis?.recommendedTools && analysis.recommendedTools.length > 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cyan-400" /> Recommended AI & System Tools
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.recommendedTools.map((tool, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-200">{tool.name}</span>
                          <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800/50 px-2 py-0.5 rounded font-medium">
                            {tool.badge || tool.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{tool.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 pt-2 border-t border-slate-800/80">
                        <a
                          href={TOOL_AFFILIATE_MAP[tool.name] || tool.macLink || TOOL_AFFILIATE_MAP["Default"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] font-semibold py-1.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>Mac</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                        <a
                          href={TOOL_AFFILIATE_MAP[tool.name] || tool.winLink || TOOL_AFFILIATE_MAP["Default"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] font-semibold py-1.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          <span>Win</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Map Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
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

              <div className="space-y-4">
                {analysis?.architectureSteps?.map((step, idx) => (
                  <div key={idx} className="relative flex items-start group">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-xs shadow-md shadow-cyan-500/10">
                        {step.step}
                      </div>
                      {idx !== analysis.architectureSteps.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-slate-800 my-1"></div>
                      )}
                    </div>

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

              <div className="bg-slate-950 border border-slate-800/90 rounded-xl p-4 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-slate-100">Workflow Summary:</strong> {analysis.summary}
                </div>
              </div>
            </div>
          </div>
        )}

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
                className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg flex items-center transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" /> Export JSON
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto max-h-[450px]">
              <pre>{JSON.stringify({
                metadata: {
                  platform: "Workflow Intelligence Business Implementation Engine",
                  industry,
                  country,
                  generated_at: new Date().toISOString()
                },
                systems_used: systems.split(',').map(s => s.trim()),
                recommended_tools: analysis.recommendedTools,
                architecture: analysis.architectureSteps,
                implementation_guide: analysis.implementationGuide
              }, null, 2)}</pre>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500 mt-12">
        Workflow Intelligence Platform &bull; End-to-End Automation Architecture & Business Implementation Guides
      </footer>
    </div>
  );
}
