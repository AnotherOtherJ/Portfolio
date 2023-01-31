import { Theme } from "@emotion/react";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, beforeEach } from "vitest";

expect.extend(matchers);

// beforeEach(context => {
// });

afterEach(() => {
  cleanup();
});
