import Parser, { ParseResult } from "@postlight/parser";

export default async function parsePost(
  url: string
): Promise<ParseResult | null> {
  try {
    const result = await Parser.parse(url, { contentType: "text" });
    return result;
  } catch (error) {
    console.log("Error - could not parse post: ", error);
    return null;
  }
}
