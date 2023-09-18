import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: ["graphql/**/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./graphql.schema.json": {
      plugins: [
        "introspection",
        "urql-introspection",
        "typescript-operations",
        "typescript",
      ],
    },
  },
  ignoreNoDocuments: true,
  debug: true,
  verbose: true,
};

export default config;
