export const parseQuestion = (question) => {
   const formatMappings = [
      { search: /<p>/g, replace: '' },
      { search: /<\/p>/g, replace: '\n' },
      { search: /<br\s*\/?>/g, replace: '\n' },
      { search: /&nbsp;/g, replace: ' ' },
      { search: /&rsquo;/g, replace: "'" },
      { search: /&lsquo;/g, replace: "'" },
      { search: /&quot;/g, replace: '"' },
      { search: /&deg;/g, replace: '°' },
      { search: /&amp;/g, replace: '&' },
      { search: /<strong>(.*?)<\/strong>/g, replace: '**$1**' }, // Bold text
      { search: /<b>(.*?)<\/b>/g, replace: '**$1**' }, // Bold text
      { search: /<em>(.*?)<\/em>/g, replace: '*$1*' }, // Italic text
      { search: /<i>(.*?)<\/i>/g, replace: '*$1*' }, // Italic text
      { search: /<u>(.*?)<\/u>/g, replace: '__$1__' }, // Underlined text
      { search: /<sup>(.*?)<\/sup>/g, replace: '^($1)' }, // Superscript text
      { search: /<sub>(.*?)<\/sub>/g, replace: '_($1)' }, // Subscript text
      { search: /<h1>(.*?)<\/h1>/g, replace: '# $1' }, // Header 1
      { search: /<h2>(.*?)<\/h2>/g, replace: '## $1' }, // Header 2
      { search: /<h3>(.*?)<\/h3>/g, replace: '### $1' }, // Header 3
      { search: /<h4>(.*?)<\/h4>/g, replace: '#### $1' }, // Header 4
      { search: /<h5>(.*?)<\/h5>/g, replace: '##### $1' }, // Header 5
      { search: /<h6>(.*?)<\/h6>/g, replace: '###### $1' }, // Header 6
      { search: /<ul>(.*?)<\/ul>/gs, replace: (match, p1) => p1.replace(/<li>(.*?)<\/li>/g, '* $1\n') }, // Unordered list
      { search: /<ol>(.*?)<\/ol>/gs, replace: (match, p1) => p1.replace(/<li>(.*?)<\/li>/g, (m, p1, index) => `${index + 1}. ${p1}\n`) }, // Ordered list
      { search: /<table>(.*?)<\/table>/gs, replace: (match, p1) => p1.replace(/<tr>(.*?)<\/tr>/g, (m, row) => row.replace(/<td>(.*?)<\/td>/g, '$1\t').trim() + '\n') }, // Table
      { search: /<img(.*?)\/?>/g, replace: '<img style="display: inline-block;"$1>' }
   ];

   let processed = question;
   formatMappings.forEach((mapping) => {
      processed = processed.replace(mapping.search, mapping.replace);
   });

   return processed.trim();
};
