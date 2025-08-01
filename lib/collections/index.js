import feed from "./feed.js";

const collections = {
  feed,
};

export default function (config) {
  Object.entries(collections).forEach(([name, collection]) => {
    config.addCollection(name, collection);
  });
}
