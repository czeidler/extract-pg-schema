import{_ as t,c as e,o as a,V as s}from"./chunks/framework.8nmKTlMA.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/extract-pg-schema.tabledetails.md","filePath":"api/extract-pg-schema.tabledetails.md"}'),i={name:"api/extract-pg-schema.tabledetails.md"},r=s('<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.tabledetails.html">TableDetails</a></p><h2 id="tabledetails-interface" tabindex="-1">TableDetails interface <a class="header-anchor" href="#tabledetails-interface" aria-label="Permalink to &quot;TableDetails interface&quot;">​</a></h2><p>Table in a schema.</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TableDetails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PgType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;table&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> <a href="./extract-pg-schema.pgtype.html">PgType</a>&lt;&quot;table&quot;&gt;</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./extract-pg-schema.tabledetails.checks.html">checks</a></td><td></td><td><a href="./extract-pg-schema.tablecheck.html">TableCheck</a>[]</td><td>Array of check constraints in the table.</td></tr><tr><td><a href="./extract-pg-schema.tabledetails.columns.html">columns</a></td><td></td><td><a href="./extract-pg-schema.tablecolumn.html">TableColumn</a>[]</td><td>Array of columns in the table.</td></tr><tr><td><a href="./extract-pg-schema.tabledetails.indices.html">indices</a></td><td></td><td><a href="./extract-pg-schema.tableindex.html">TableIndex</a>[]</td><td>Array of indices in the table.</td></tr><tr><td><a href="./extract-pg-schema.tabledetails.informationschemavalue.html">informationSchemaValue</a></td><td></td><td><a href="./extract-pg-schema.informationschematable.html">InformationSchemaTable</a></td><td>Information schema value for the table.</td></tr><tr><td><a href="./extract-pg-schema.tabledetails.isrowlevelsecurityenabled.html">isRowLevelSecurityEnabled</a></td><td></td><td>boolean</td><td>Whether row level security is enabled on the table.</td></tr><tr><td><a href="./extract-pg-schema.tabledetails.isrowlevelsecurityenforced.html">isRowLevelSecurityEnforced</a></td><td></td><td>boolean</td><td>Whether row level security is enforced on the table.</td></tr><tr><td><a href="./extract-pg-schema.tabledetails.securitypolicies.html">securityPolicies</a></td><td></td><td><a href="./extract-pg-schema.tablesecuritypolicy.html">TableSecurityPolicy</a>[]</td><td>Array of security policies on the table.</td></tr></tbody></table>',8),l=[r];function h(d,c,n,o,p,m){return a(),e("div",null,l)}const f=t(i,[["render",h]]);export{g as __pageData,f as default};
