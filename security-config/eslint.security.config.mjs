import security from "eslint-plugin-security";
import tsParser from "@typescript-eslint/parser";
export default [
  { ignores: [] },
  {
    files: ["lib/**/*.ts", "routes/**/*.ts"],
    languageOptions: { parser: tsParser },
    plugins: { security },
    rules: {
      "security/detect-object-injection": "warn",
      "security/detect-eval-with-expression": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-child-process": "warn",
      "security/detect-possible-timing-attacks": "warn"
    }
  }
];
