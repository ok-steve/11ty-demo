export default async function (collectionsApi) {
  return collectionsApi
    .getFilteredByTag("post")
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
