import { isProduction } from "~/app-env";

export const BASE_URL = isProduction
  ? "https://saihtun.xyz"
  : "http://localhost:3000";
