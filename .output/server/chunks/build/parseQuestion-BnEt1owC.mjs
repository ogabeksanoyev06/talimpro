const parseQuestion = (question) => {
  const formatMappings = [
    { search: /<p>/g, replace: "" },
    { search: /<\/p>/g, replace: "\n" },
    { search: /<br\s*\/?>/g, replace: "\n" },
    { search: /&nbsp;/g, replace: " " },
    { search: /&rsquo;/g, replace: "'" },
    { search: /&lsquo;/g, replace: "'" },
    { search: /&quot;/g, replace: '"' },
    { search: /&deg;/g, replace: "\xB0" },
    { search: /&amp;/g, replace: "&" },
    { search: /<strong>(.*?)<\/strong>/g, replace: "**$1**" },
    // Bold text
    { search: /<b>(.*?)<\/b>/g, replace: "**$1**" },
    // Bold text
    { search: /<em>(.*?)<\/em>/g, replace: "*$1*" },
    // Italic text
    { search: /<i>(.*?)<\/i>/g, replace: "*$1*" },
    // Italic text
    { search: /<u>(.*?)<\/u>/g, replace: "__$1__" },
    // Underlined text
    { search: /\^(\(.*?\))\{([^\{\}]+?)\}/g, replace: "<sup>$1</sup>$2" },
    // Superscript text
    { search: /\_(\(.*?\))\{([^\{\}]+?)\}/g, replace: "<sub>$1</sub>$2" },
    // Subscript text
    { search: /<ul>(.*?)<\/ul>/gs, replace: (match, p1) => p1.replace(/<li>(.*?)<\/li>/g, "* $1\n") },
    // Unordered list
    { search: /<ol>(.*?)<\/ol>/gs, replace: (match, p1) => p1.replace(/<li>(.*?)<\/li>/g, (m, p12, index) => `${index + 1}. ${p12}
`) },
    // Ordered list
    { search: /<table>(.*?)<\/table>/gs, replace: (match, p1) => p1.replace(/<tr>(.*?)<\/tr>/g, (m, row) => row.replace(/<td>(.*?)<\/td>/g, "$1	").trim() + "\n") },
    // Table
    { search: /<img(.*?)\/?>/g, replace: '<img style="display: inline-block;"$1>' }
  ];
  let processed = question;
  formatMappings.forEach((mapping) => {
    processed = processed.replace(mapping.search, mapping.replace);
  });
  return processed.trim();
};

export { parseQuestion as p };
//# sourceMappingURL=parseQuestion-BnEt1owC.mjs.map
