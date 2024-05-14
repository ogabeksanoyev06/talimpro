export const parseQuestion = (question) => {
   const formatMappings = [
      { search: /<p>/g, replace: '' },
      { search: /<\/p>/g, replace: '\n' },
      { search: /<br>/g, replace: '\n' },
      { search: /&nbsp;/g, replace: ' ' },
      { search: /&rsquo;/g, replace: "'" },
      { search: /&lsquo;/g, replace: "'" },
      { search: /&quot;/g, replace: '"' },
      { search: /&deg;/g, replace: '°' }
   ];
   let processed = question;
   formatMappings.forEach((mapping) => {
      processed = processed.replace(mapping.search, mapping.replace);
   });
   return processed.trim();
};
