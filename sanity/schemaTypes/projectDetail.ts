import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectDetail",
  title: "Project Detail",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "project",
      title: "Project",
      type: "reference",
      to: { type: "project" },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "date",
    }),
    defineField({
      name: "githubUrl",
      title: "Github Url",
      type: "url",
    }),
    defineField({
      name: "websiteUrl",
      title: "Website Url",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "Video Url",
      type: "string",
    }),
    defineField({
      name: "info",
      title: "Info",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
      ],
    }),
  ],
  initialValue: () => ({
    releaseDate: new Date(),
  }),
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
