const h=s=>{const l=[{search:/<p>/g,replace:""},{search:/<\/p>/g,replace:`
`},{search:/<br\s*\/?>/g,replace:`
`},{search:/&nbsp;/g,replace:" "},{search:/&rsquo;/g,replace:"'"},{search:/&lsquo;/g,replace:"'"},{search:/&quot;/g,replace:'"'},{search:/&deg;/g,replace:"°"},{search:/&amp;/g,replace:"&"},{search:/<strong>(.*?)<\/strong>/g,replace:"**$1**"},{search:/<b>(.*?)<\/b>/g,replace:"**$1**"},{search:/<em>(.*?)<\/em>/g,replace:"*$1*"},{search:/<i>(.*?)<\/i>/g,replace:"*$1*"},{search:/<u>(.*?)<\/u>/g,replace:"__$1__"},{search:/\^(\(.*?\))\{([^\{\}]+?)\}/g,replace:"<sup>$1</sup>$2"},{search:/\_(\(.*?\))\{([^\{\}]+?)\}/g,replace:"<sub>$1</sub>$2"},{search:/<ul>(.*?)<\/ul>/gs,replace:(e,r)=>r.replace(/<li>(.*?)<\/li>/g,`* $1
`)},{search:/<ol>(.*?)<\/ol>/gs,replace:(e,r)=>r.replace(/<li>(.*?)<\/li>/g,(p,c,g)=>`${g+1}. ${c}
`)},{search:/<table>(.*?)<\/table>/gs,replace:(e,r)=>r.replace(/<tr>(.*?)<\/tr>/g,(p,c)=>c.replace(/<td>(.*?)<\/td>/g,"$1	").trim()+`
`)},{search:/<img(.*?)\/?>/g,replace:'<img style="display: inline-block;"$1>'}];let a=s;return l.forEach(e=>{a=a.replace(e.search,e.replace)}),a.trim()};export{h as p};
