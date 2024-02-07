import{_ as s,c as a,o as i,V as e}from"./chunks/framework.OAYYdmD4.js";const E=JSON.parse('{"title":"Extract Schema from Postgres Database","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),n={name:"index.md"},t=e(`<h1 id="extract-schema-from-postgres-database" tabindex="-1">Extract Schema from Postgres Database <a class="header-anchor" href="#extract-schema-from-postgres-database" aria-label="Permalink to &quot;Extract Schema from Postgres Database&quot;">​</a></h1><p>Reads various metadata from your postgres database and returns a js object. This package is used by <a href="https://github.com/kristiandupont/kanel" target="_blank" rel="noreferrer">Kanel</a> to generate Typescript types and <a href="https://github.com/kristiandupont/schemalint" target="_blank" rel="noreferrer">Schemalint</a> to provide linting of database schemas.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i extract-pg-schema</span></span></code></pre></div><h2 id="library-usage" tabindex="-1">Library Usage <a class="header-anchor" href="#library-usage" aria-label="Permalink to &quot;Library Usage&quot;">​</a></h2><p>You give it a <a href="https://node-postgres.com/apis/client" target="_blank" rel="noreferrer">postgres connection config object</a> and some options and it will connect to your database and generate</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">extractSchemas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;extract-pg-schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> connection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    database: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postgres&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postgres&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postgres&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> extractSchemas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(connection);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>The generated output is a record of schemas, described with the <a href="/extract-pg-schema/api/extract-pg-schema.schema.html">Schema</a> type.</p><h2 id="cli-usage" tabindex="-1">CLI Usage <a class="header-anchor" href="#cli-usage" aria-label="Permalink to &quot;CLI Usage&quot;">​</a></h2><p>You can also use the CLI to extract the schemas from a database and write it to the console or a file in JSON format.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract-pg-schema -h localhost -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5432</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -U postgres -d postgres</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schemas.json</span></span></code></pre></div><p>The CLI takes a small subset of the options that <a href="https://www.postgresql.org/docs/current/app-pgdump.html" target="_blank" rel="noreferrer">pg_dump</a> takes. You can also use the <a href="https://node-postgres.com/features/connecting#environment-variables" target="_blank" rel="noreferrer">environment variables</a> starting with <code>PG</code> to set the connection parameters.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Usage: extract-pg-schema [options] [DBNAME]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Extract all schemas from a PostgreSQL database and print them as JSON.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>    --help                      show this help</span></span>
<span class="line"><span>    -h, --host=HOSTNAME         database server host or socket directory</span></span>
<span class="line"><span>    -p, --port=PORT             database server port</span></span>
<span class="line"><span>    -U, --username=USERNAME     database user name</span></span>
<span class="line"><span>    -d, --dbname=DBNAME         database name to connect to</span></span>
<span class="line"><span>    -n, --schema=SCHEMA         include schema regular expression (may be given multiple times)</span></span>
<span class="line"><span>    -N, --exclude-schema=SCHEMA exclude schema regular expression (may be given multiple times)</span></span></code></pre></div>`,13),p=[t];function l(h,r,o,c,k,d){return i(),a("div",null,p)}const u=s(n,[["render",l]]);export{E as __pageData,u as default};
