---
name: GitHub publishing
description: Durable access behavior observed when publishing the ZARQ website repository from this workspace.
---

The attached GitHub connector can read repository metadata, but write requests through the Replit proxy are blocked before reaching GitHub. Publishing requires a valid Git HTTPS credential supplied through Replit Secrets or a direct Replit Git-pane connection.

**Why:** Multiple authenticated GitHub write paths returned a Replit Cloudflare block, while repository reads succeeded.

**How to apply:** Prefer the Git pane OAuth connection. If using a PAT, keep the repository URL and token in Replit Secrets and verify the token against GitHub before attempting a push; never request or print credentials in chat.