import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "gemini-3-online-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for Gemini 3 Online (https://gemini-3.online). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "models",
    "site://gemini-3-online/models",
    {
      title: "Models",
      description: "Supported chat models and capability notes.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Gemini 3 Online — Models\n\nGemini 3 Online is an online chat interface that lets users interact with the Gemini 3 model for research, writing, and analysis.\n\n## Site basics\n- Site ID: gemini-3-online\n- Website: https://gemini-3.online\n- Default locale: en\n- Locales: en\n\n## Public feature scope\n- chat\n\n## Official website\nhttps://gemini-3.online",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://gemini-3-online/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Gemini 3 Online Pricing\n\nCanonical pricing page: https://gemini-3.online/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://gemini-3-online/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nGemini 3 Online is an online chat interface that lets users interact with the Gemini 3 model for research, writing, and analysis.\n\n## Where can I get help?\nsupport@gemini-3.online\n\n## Which site is this?\ngemini-3-online (Gemini 3 Online)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://gemini-3-online/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://gemini-3.online\n- Pricing: https://gemini-3.online/pricing\n- Support: support@gemini-3.online",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_models",
    {
      description: "Return the canonical list of chat models exposed on the site, with capability notes. (Gemini 3 Online)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Gemini 3 Online — Models\n\nGemini 3 Online is an online chat interface that lets users interact with the Gemini 3 model for research, writing, and analysis.\n\nCanonical website: https://gemini-3.online" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for Gemini 3 Online.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Gemini 3 Online Pricing\n\nOfficial pricing: https://gemini-3.online/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for Gemini 3 Online (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://gemini-3.online\n- Pricing: https://gemini-3.online/pricing\n- Support: support@gemini-3.online" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_gemini_3_online",
    {
      description: "Summarize what the site is, who it's for, and how it works. — Gemini 3 Online",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what Gemini 3 Online (https://gemini-3.online) is, who it's for, and how it works. Reference the canonical resources at site://gemini-3-online/models and site://gemini-3-online/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "start_chat_session_gemini_3_online",
    {
      description: "Open a chat-evaluation session against the site's models, with sensible defaults. — Gemini 3 Online",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to evaluate Gemini 3 Online (https://gemini-3.online) for chat workloads. Walk me through the available models, suggest one task per model that highlights its strengths, and show the canonical entry point. Use site://gemini-3-online/models as ground truth." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
