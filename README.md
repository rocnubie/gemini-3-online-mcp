# Gemini 3 Online MCP Server

> Gemini 3 Online - Chat with Gemini 3

[![MCP Badge](https://lobehub.com/badge/mcp/rocnubie-gemini-3-online-mcp)](https://lobehub.com/mcp/rocnubie-gemini-3-online-mcp)
[![smithery](https://smithery.ai/badge/gemini-3-online)](https://smithery.ai)
[![Stdio Transport](https://img.shields.io/badge/transport-stdio-6e6e6e)](https://modelcontextprotocol.io/specification)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A Model Context Protocol server that exposes the canonical Gemini 3 Online knowledge surface — models, prompts, and chat workflows, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://gemini-3.online

## 💬 About Gemini 3 Online

Gemini 3 Online is a web-based AI creative platform built around Google's Gemini Pro models and Veo 3 video generation technology. It gives users access to a suite of image and video creation tools directly in the browser, without requiring local setup or specialized hardware. From generating images via text prompts to converting photos into short videos, the platform covers a broad range of generative media tasks under one interface. It supports over 100 languages for prompt input and outputs files in common formats including PNG, JPG, WebP, and 4K MP4, making it practical for both personal and professional workflows.

## Key Features

- **Text-to-image generation** with multiple model options including Nano Banana, Flux, Qwen, and Seedream, selectable per generation
- **Image editing tools** spanning 13 specialized editors: photo enhancement, background modification, hairstyle changes, text removal, AI 3D figure creation, and more
- **Veo 3 video generation** for creating short AI-generated videos, with an image-to-video conversion path
- **Trend Prompts** — a curated prompt inspiration system covering styles such as Polaroid, anime-to-real, room design, and product photography
- **Aspect ratio and quality controls** with credit-based generation quotas, batch processing available on premium tiers
- **API access** for enterprise users who want to integrate generative capabilities into their own applications

## Use Cases

- A designer needs a set of product mockup images in consistent style — they use the image generation tool with a shared prompt template across aspect ratios
- A content creator wants to turn a static photo into a short animated clip for social media — they use the image-to-video conversion with Veo 3
- A small marketing team produces localized campaign visuals in multiple languages by submitting prompts in their native language directly
- A developer building a media app evaluates the API tier to automate image generation within their pipeline
- An educator preparing visual course materials uses the photo editing and enhancement tools to produce clean, professional-looking illustrations without design software

## Who Is It For

Gemini 3 Online fits people who need generative image or video output regularly but do not want to manage local AI model installations or complex API configurations. Digital artists, content creators, and marketing professionals will find the breadth of editing tools and model choices useful for iterating on visual ideas quickly. Developers and small studios evaluating AI media generation for integration purposes can explore the platform through its free tier before committing to API access. The multilingual prompt support makes it accessible to non-English-speaking users working in regional markets, and the credit-based pricing lets occasional users pay only for what they need rather than committing to a subscription.

## Tools

### `list_models`
Return the canonical list of chat models exposed on the site, with capability notes. (Gemini 3 Online)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for Gemini 3 Online.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for Gemini 3 Online (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://gemini-3-online/models` — Supported chat models and capability notes.
- `site://gemini-3-online/pricing` — Canonical pricing entry point.
- `site://gemini-3-online/faq` — Short FAQ generated from public site metadata.
- `site://gemini-3-online/links` — Canonical URLs to share with users.

## Prompts

### `tell_me_about_gemini_3_online`
Summarize what the site is, who it's for, and how it works. — Gemini 3 Online

### `start_chat_session_gemini_3_online`
Open a chat-evaluation session against the site's models, with sensible defaults. — Gemini 3 Online

## Installation

### Install via Smithery

```bash
npx -y @smithery/cli install gemini-3-online-mcp --client claude
```

(Replace `claude` with `cursor`, `windsurf`, or `continue` for those clients.)

### Install from source

```bash
git clone https://github.com/rocnubie/gemini-3-online-mcp.git
cd gemini-3-online-mcp
pnpm install
```

Then add to your MCP client config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor / Windsurf / Continue):

```json
{
  "mcpServers": {
    "gemini-3-online-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/gemini-3-online-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://gemini-3.online
- Pricing: https://gemini-3.online/pricing
- Support: support@gemini-3.online

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
```

## License

MIT
