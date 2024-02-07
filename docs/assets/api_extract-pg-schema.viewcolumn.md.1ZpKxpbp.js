import{_ as t,c as e,o as a,V as r}from"./chunks/framework.OAYYdmD4.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/extract-pg-schema.viewcolumn.md","filePath":"api/extract-pg-schema.viewcolumn.md"}'),d={name:"api/extract-pg-schema.viewcolumn.md"},n=r('<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.viewcolumn.html">ViewColumn</a></p><h2 id="viewcolumn-interface" tabindex="-1">ViewColumn interface <a class="header-anchor" href="#viewcolumn-interface" aria-label="Permalink to &quot;ViewColumn interface&quot;">​</a></h2><p>Column in a view.</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ViewColumn</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./extract-pg-schema.viewcolumn.comment.html">comment</a></td><td></td><td>string | null</td><td>Comment on the column.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.defaultvalue.html">defaultValue</a></td><td></td><td>any</td><td>Default value of the column.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.expandedtype.html">expandedType</a></td><td></td><td>string</td><td>Expanded type name. If the type is an array, brackets will be appended to the type name.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.generated.html">generated</a></td><td></td><td>&quot;ALWAYS&quot; | &quot;NEVER&quot; | &quot;BY DEFAULT&quot;</td><td>Behavior of the generated column. &quot;ALWAYS&quot; if always generated, &quot;NEVER&quot; if never generated, &quot;BY DEFAULT&quot; if generated when a value is not provided.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.indices.html">indices?</a></td><td></td><td><a href="./extract-pg-schema.index.html">Index</a>[]</td><td><em>(Optional)</em></td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.informationschemavalue.html">informationSchemaValue</a></td><td></td><td><a href="./extract-pg-schema.informationschemacolumn.html">InformationSchemaColumn</a></td><td>Information schema value for the column.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.isarray.html">isArray</a></td><td></td><td>boolean</td><td>Whether the column is an array.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.isidentity.html">isIdentity</a></td><td></td><td>boolean</td><td>Whether the column is an identity column.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.isnullable.html">isNullable?</a></td><td></td><td>boolean</td><td><em>(Optional)</em> Whether the column is nullable. This is only present if the view is resolved.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.isprimarykey.html">isPrimaryKey?</a></td><td></td><td>boolean</td><td><em>(Optional)</em> Whether the column is a primary key. This is only present if the view is resolved.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.isupdatable.html">isUpdatable</a></td><td></td><td>boolean</td><td>Whether the column is updatable.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.maxlength.html">maxLength</a></td><td></td><td>number | null</td><td>Maximum length of the column.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.name.html">name</a></td><td></td><td>string</td><td>Column name.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.ordinalposition.html">ordinalPosition</a></td><td></td><td>number</td><td>Ordinal position of the column in the view. Starts from 1.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.reference.html">reference?</a></td><td></td><td><a href="./extract-pg-schema.columnreference.html">ColumnReference</a> | null</td><td><em>(Optional)</em></td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.references.html">references?</a></td><td></td><td><a href="./extract-pg-schema.columnreference.html">ColumnReference</a>[]</td><td><em>(Optional)</em> If views are resolved, this will contain the references from the source column in the table that this view references. Note that if the source is another view, that view in turn will be resolved if possible, leading us to a table in the end.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.source.html">source</a></td><td></td><td>{ schema: string; table: string; column: string; } | null</td><td>This will contain a &quot;link&quot; to the source table or view and column, if it can be determined.</td></tr><tr><td><a href="./extract-pg-schema.viewcolumn.type.html">type</a></td><td></td><td><a href="./extract-pg-schema.viewcolumntype.html">ViewColumnType</a></td><td>Type information.</td></tr></tbody></table>',7),i=[n];function o(l,h,c,m,s,u){return a(),e("div",null,i)}const g=t(d,[["render",o]]);export{f as __pageData,g as default};