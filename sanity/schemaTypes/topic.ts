import { defineType, defineField } from "sanity";

export default defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    defineField({
      name: "tech",
      title: "Tech",
      type: "string",
    }),
  ],
});
