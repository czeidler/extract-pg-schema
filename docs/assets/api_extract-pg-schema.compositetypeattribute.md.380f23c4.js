import{_ as t,c as e,o as a,a as r}from"./app.4cb370b5.js";const y=JSON.parse('{"title":"CompositeTypeAttribute interface","description":"","frontmatter":{},"headers":[{"level":2,"title":"CompositeTypeAttribute interface","slug":"compositetypeattribute-interface"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"api/extract-pg-schema.compositetypeattribute.md"}'),d={name:"api/extract-pg-schema.compositetypeattribute.md"},i=r(`<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.compositetypeattribute.html">CompositeTypeAttribute</a></p><h2 id="compositetypeattribute-interface" tabindex="-1">CompositeTypeAttribute interface <a class="header-anchor" href="#compositetypeattribute-interface" aria-hidden="true">#</a></h2><p><b>Signature:</b></p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CompositeTypeAttribute</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./extract-pg-schema.compositetypeattribute.comment.html">comment</a></td><td></td><td>string | null</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.defaultvalue.html">defaultValue</a></td><td></td><td>any</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.expandedtype.html">expandedType</a></td><td></td><td>string</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.fakeinformationschemavalue.html">fakeInformationSchemaValue</a></td><td></td><td>InformationSchemaColumn</td><td>The Postgres information_schema views do not contain info about materialized views. This value is the result of a query that matches the one for regular views. Use with caution, not all fields are guaranteed to be meaningful and/or accurate.</td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.generated.html">generated</a></td><td></td><td>&#39;ALWAYS&#39; | &#39;NEVER&#39; | &#39;BY DEFAULT&#39;</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.isarray.html">isArray</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.isidentity.html">isIdentity</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.isnullable.html">isNullable</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.isupdatable.html">isUpdatable</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.maxlength.html">maxLength</a></td><td></td><td>number | null</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.name.html">name</a></td><td></td><td>string</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.ordinalposition.html">ordinalPosition</a></td><td></td><td>number</td><td></td></tr><tr><td><a href="./extract-pg-schema.compositetypeattribute.type.html">type</a></td><td></td><td><a href="./extract-pg-schema.attributetype.html">AttributeType</a></td><td></td></tr></tbody></table>`,6),o=[i];function s(p,c,n,h,m,l){return a(),e("div",null,o)}var f=t(d,[["render",s]]);export{y as __pageData,f as default};