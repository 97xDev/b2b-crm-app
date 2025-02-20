import internalLinks from "@/lib/internalLinks.json";

export function addInternalLinks(content: string) {
  Object.entries(internalLinks).forEach(([keyword, url]) => {
    // Use a case-insensitive regex to find standalone words
    const regex = new RegExp(`\\b(${keyword})\\b(?![^<]*>)`, "gi");

    content = content.replace(regex, (match) => {
      return `<a href="${url}" class="text-lime-400 hover:underline">${match}</a>`;
    });
  });

  return content;
}
