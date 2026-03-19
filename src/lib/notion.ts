export function getNotionHeaders() {
  const apiKey = process.env.NOTION_API_KEY;

  if (!apiKey) {
    throw new Error("NOTION_API_KEY is missing in .env.local");
  }

  return {
    Authorization: `Bearer ${apiKey}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  };
}
