import{_ as e,c as a,o as r,a as t}from"./app.fae77951.js";const _=JSON.parse('{"title":"MaterializedViewColumn.reference property","description":"","frontmatter":{},"headers":[{"level":2,"title":"MaterializedViewColumn.reference property","slug":"materializedviewcolumn-reference-property"}],"relativePath":"api/extract-pg-schema.materializedviewcolumn.reference.md"}'),n={name:"api/extract-pg-schema.materializedviewcolumn.reference.md"},i=t(`<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.materializedviewcolumn.html">MaterializedViewColumn</a> &gt; <a href="./extract-pg-schema.materializedviewcolumn.reference.html">reference</a></p><h2 id="materializedviewcolumn-reference-property" tabindex="-1">MaterializedViewColumn.reference property <a class="header-anchor" href="#materializedviewcolumn-reference-property" aria-hidden="true">#</a></h2><p>If views are resolved, this will contain the reference from the source column in the table that this view references. Note that if the source is another view, that view in turn will be resolved if possible, leading us to a table in the end.</p><p><b>Signature:</b></p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">reference</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> ColumnReference </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre></div>`,5),c=[i];function s(l,o,p,m,d,h){return r(),a("div",null,c)}var u=e(n,[["render",s]]);export{_ as __pageData,u as default};