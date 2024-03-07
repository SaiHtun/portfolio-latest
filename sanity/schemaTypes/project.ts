import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),
    defineField({
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "reference", to: { type: "topic" } }],
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
