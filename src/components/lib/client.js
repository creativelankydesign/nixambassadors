import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "t9i72iv0",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
