import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import project from "./schemaTypes/project";
import topic from "./schemaTypes/topic";
import projectDetail from "./schemaTypes/projectDetail";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, projectDetail, topic],
};
