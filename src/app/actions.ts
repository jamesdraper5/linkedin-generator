"use server";

import parsePost from "@/app/lib/parser";
import fetchGeneratedPostFromAI from "@/app/lib/open-ai";

interface PostState {
  status: string;
  data: string;
}

export async function createPostFromUrl(
  prevState: PostState | null,
  formData: FormData
): Promise<PostState> {
  const url = formData.get("url");
  if (typeof url !== "string") {
    return {
      status: "error",
      data: "Invalid URL",
    };
  }
  const postData = await parsePost(url);

  if (!postData) {
    return {
      status: "error",
      data: "could not generate post summary",
    };
  }

  try {
    if (postData.content) {
      const postSummary = await fetchGeneratedPostFromAI(postData.content);
      if (!postSummary.choices?.length) {
        return {
          status: "error",
          data: "could not generate post summary",
        };
      }
      console.log("postSummary", postSummary.choices[0]);
      const result = postSummary.choices[0];
      return {
        status: "success",
        data: result.message.content,
      };
    } else {
      console.log("Error - post content is null");
      return {
        status: "error",
        data: "post content is null",
      };
    }
  } catch (error) {
    console.log("Error - could not generate post summary: ", error);
    return {
      status: "error",
      data: "could not generate post summary",
    };
  }
}
