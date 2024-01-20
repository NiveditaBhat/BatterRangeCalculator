import { TextEncoder, TextDecoder } from "util";

Object.assign(global, { TextDecoder, TextEncoder });

const { JSDOM } = require("jsdom");

const fs = require("fs");
const path = require("path");

const htmlPath = path.resolve(__dirname, "./dist/index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

beforeEach(async () => {
  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  global.window = dom.window;
  global.document = dom.window.document;

  document.documentElement.innerHTML = htmlContent;
});
