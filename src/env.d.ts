/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_APP_VERSION: string;
  readonly BASE_API_URL: string;
  readonly BASE_API_KEY: string;
  readonly BASE_API_SECRET: string;
  readonly BASE_NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
