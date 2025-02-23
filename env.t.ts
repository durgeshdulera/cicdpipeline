export interface ImportMetaEnv {
  VITE_BASE_PATH: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
