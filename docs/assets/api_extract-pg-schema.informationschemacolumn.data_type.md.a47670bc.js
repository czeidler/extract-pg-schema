import{_ as a,c as t,o as e,N as n}from"./chunks/framework.2bebdaf8.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/extract-pg-schema.informationschemacolumn.data_type.md"}'),o={name:"api/extract-pg-schema.informationschemacolumn.data_type.md"},s=n(`<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.informationschemacolumn.html">InformationSchemaColumn</a> &gt; <a href="./extract-pg-schema.informationschemacolumn.data_type.html">data_type</a></p><h2 id="informationschemacolumn-data-type-property" tabindex="-1">InformationSchemaColumn.data_type property <a class="header-anchor" href="#informationschemacolumn-data-type-property" aria-label="Permalink to &quot;InformationSchemaColumn.data\\_type property&quot;">​</a></h2><p>Data type of the column, if it is a built-in type, or ARRAY if it is some array (in that case, see the view element_types), else USER-DEFINED (in that case, the type is identified in udt_name and associated columns). If the column is based on a domain, this column refers to the type underlying the domain (and the domain is identified in domain_name and associated columns).</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,5),i=[s];function c(r,p,m,l,h,d){return e(),t("div",null,i)}const u=a(o,[["render",c]]);export{f as __pageData,u as default};