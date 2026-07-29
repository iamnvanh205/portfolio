import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { profile } from "../js/data/profile.js";
import { projects } from "../js/data/projects.js";

const manifest = JSON.parse(
  await readFile(new URL("../manifest.json", import.meta.url), "utf8")
);

const localAssets = [
  profile.avatar,
  profile.cta.cv,
  ...manifest.icons.map(({ src }) => src),
  ...projects.flatMap(({ thumbnail, screenshots }) => [thumbnail, ...screenshots])
];

assert.equal(manifest.start_url, "./");
assert.equal(manifest.scope, "./");

await Promise.all(localAssets.map(async (path) => {
  assert.match(path, /^\.\//, `${path} must be a local relative asset`);
  await access(new URL(`../${path.slice(2)}`, import.meta.url));
}));
