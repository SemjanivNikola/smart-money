declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      SMART_MONEY_BE_URL: string;
    }
  }
}

export {};
