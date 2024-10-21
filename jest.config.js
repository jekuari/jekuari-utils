export const preset = "ts-jest";
export const testEnvironment = "node";
export const transform = {
  "^.+\\.tsx?$": "ts-jest",
};
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx"];
export const testPathIgnorePatterns = ["/node_modules/"];
