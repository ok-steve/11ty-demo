import pkg from "../../package.json" with { type: "json" };

export default {
  name: pkg.name
    .split(/[\W+]/)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" "),
}
