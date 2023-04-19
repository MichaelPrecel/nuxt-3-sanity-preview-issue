export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(datetime) {
  const date = new Date(datetime);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

export const getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  const siblings = [];
  let sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

export const slugify = (text) =>
  text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
