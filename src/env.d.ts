/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly WEB_VERSION: string;
  readonly API_URL: string;
  readonly API_KEY: string;
  readonly API_SECRET: string;
  readonly API_WEB_VERSION: string;
  readonly NODE_ENV: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
