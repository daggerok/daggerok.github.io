<template><div><h1 id="vuepress-2-x-getting-started" tabindex="-1"><a class="header-anchor" href="#vuepress-2-x-getting-started" aria-hidden="true">#</a> VuePress 2.x Getting Started</h1>
<p>In this guide we will be looking into VuePress 2.x which currently is in beta but very promising.
We will build simple customized blog with home page only. Using this skeleton can be just enough for many people who would like to quickly
get something easy to use, working, fast and very nice looking...</p>
<nav class="table-of-contents"><ul><li><router-link to="#install-nodejs">Install NodeJS</router-link></li><li><router-link to="#initialize-project">Initialize project</router-link></li><li><router-link to="#install-minimal-require-software">Install minimal require software</router-link></li><li><router-link to="#git-ignore-configuration">Git ignore configuration</router-link></li><li><router-link to="#add-npm-scripts">Add NPM scripts</router-link></li><li><router-link to="#static-resources">Static resources</router-link></li><li><router-link to="#site-content">Site content</router-link></li><li><router-link to="#run-dev-server-to-test">Run dev server to test</router-link></li><li><router-link to="#custom-styling">Custom styling</router-link></li><li><router-link to="#customize-navbar">Customize navbar</router-link><ul><li><router-link to="#navbar-title">Navbar title</router-link></li><li><router-link to="#navbar-links">Navbar links</router-link></li><li><router-link to="#navbar-search">Navbar search</router-link></li></ul></li><li><router-link to="#deployment">Deployment</router-link></li><li><router-link to="#create-custom-components">Create custom components</router-link></li><li><router-link to="#add-custom-local-theme">Add custom local theme</router-link></li><li><router-link to="#useful-links">Useful links</router-link></li></ul></nav>
<h2 id="install-nodejs" tabindex="-1"><a class="header-anchor" href="#install-nodejs" aria-hidden="true">#</a> Install NodeJS</h2>
<p>VuePress required NodeJS to be installed. Please check <a href="https://nodejs.org/uk/download/" target="_blank" rel="noopener noreferrer">download page<ExternalLinkIcon/></a> to see how to install it on your
operating system.</p>
<p>I personally always prefer use command line:</p>
<CodeGroup>
  <CodeGroupItem title="macOS Homebrew" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code>brew reinstall <span class="token function">node</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="Windows scoop">
<div class="language-batch" data-ext="batch"><pre v-pre class="language-batch"><code><span class="token command"><span class="token keyword">scoop</span> install nodejs</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<!-- See: https://v2.vuepress.vuejs.org/reference/default-theme/components.html#codegroupitem -->
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>See more options <a href="https://nodejs.org/uk/download/package-manager/" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a></p>
</div>
<h2 id="initialize-project" tabindex="-1"><a class="header-anchor" href="#initialize-project" aria-hidden="true">#</a> Initialize project</h2>
<p>Create (for example: <code v-pre>customized-vuepress-2-blog</code>) project folder and initialize NodeJS project in it:</p>
<CodeGroup>
  <CodeGroupItem title="Unix bash" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> ~/customized-vuepress-2-blog <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$_</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="Windows batch">
<div class="language-batch" data-ext="batch"><pre v-pre class="language-batch"><code><span class="token command"><span class="token keyword">mkdir</span> <span class="token variable">%USERPROFILE%</span>\customized-vuepress<span class="token number">-2</span>-blog</span>
<span class="token command"><span class="token keyword">cd</span> <span class="token variable">%USERPROFILE%</span>\customized-vuepress<span class="token number">-2</span>-blog</span>
<span class="token command"><span class="token keyword">npm</span> init <span class="token parameter attr-name">-y</span></span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="install-minimal-require-software" tabindex="-1"><a class="header-anchor" href="#install-minimal-require-software" aria-hidden="true">#</a> Install minimal require software</h2>
<p>Let's install vuepress 2.x as our main blog engine, rimraf to clean files and folders, cross-env and NodeJS types (see <code v-pre>package.json</code> file):</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-ED</span> vuepress@next
<span class="token function">npm</span> i <span class="token parameter variable">-ED</span> cross-env rimraf @types/npm
</code></pre></div><!--

```bash
npm i -ED vuepress@next vuepress-plugin-use-pages @vuepress/plugin-register-components @vuepress/plugin-search @vuepress/theme-default
npm i -ED cross-env glob @types/npm rimraf
```

-->
<h2 id="git-ignore-configuration" tabindex="-1"><a class="header-anchor" href="#git-ignore-configuration" aria-hidden="true">#</a> Git ignore configuration</h2>
<p>Let's ignore IntelliJ IDEA NodeJS modules and VuePress temporal, cache and output folders and files in <code v-pre>.gitginore</code> file:</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"/.idea/"</span>            <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">"/.vuepress/.cache/"</span> <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">"/.vuepress/.temp/"</span>  <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">"/.vuepress/dist/"</span>   <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">"/node_modules/"</span>     <span class="token operator">>></span> .gitignore
</code></pre></div><h2 id="add-npm-scripts" tabindex="-1"><a class="header-anchor" href="#add-npm-scripts" aria-hidden="true">#</a> Add NPM scripts</h2>
<p>Update <code v-pre>package.json</code> file with next npm-scripts:</p>
<div class="language-json" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev ."</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build ."</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="static-resources" tabindex="-1"><a class="header-anchor" href="#static-resources" aria-hidden="true">#</a> Static resources</h2>
<p>Our site should looks unique, so we will require to add our photos, pictures or favicon logos...
If you want to refer on some picture or any other resource by static path you should place that resource in <code v-pre>.vuepress/public</code> folder.
For example I have 2 files I'm referring on: <code v-pre>favicon.ico</code> and <code v-pre>me-2020-11.jpeg</code> in that folder:</p>
<div class="language-text" data-ext="text"><pre v-pre class="language-text"><code>.vuepress/public
├── favicon.ico
└── me-2020-11.jpeg
</code></pre></div><h2 id="site-content" tabindex="-1"><a class="header-anchor" href="#site-content" aria-hidden="true">#</a> Site content</h2>
<p>Last missing peace we left to do is write our blog home page in user friendly <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">markdown<ExternalLinkIcon/></a>
format (file with <code v-pre>.md</code> extensions). This will help us focus on a writing only and VuePress will take care of everything else: styles,
positioning, fonts, highlighting, etc...</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> me<span class="token punctuation">-</span>2020<span class="token punctuation">-</span>11.jpeg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Maksim Kostromin
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> My VuePress 2.x blog
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> easy to start
  <span class="token key atrule">details</span><span class="token punctuation">:</span> Minimal setup with markdown<span class="token punctuation">-</span>centered project structure helps you focus on writing.
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> extensible and flexible
  <span class="token key atrule">details</span><span class="token punctuation">:</span> Use Vue components in markdown<span class="token punctuation">,</span> and develop custom themes with well known Vue. Enjoy the developer experience of Vue + webpack
           or vite builders capabilities.
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> extremely fast<span class="token tag">!</span>
  <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress generates pre<span class="token punctuation">-</span>rendered static HTML for each page<span class="token punctuation">,</span> and runs as an SPA once a page is loaded.</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Hello, World! [![GitHub Pages](https://github.com/daggerok/customized-vuepress-2-blog/actions/workflows/ci.yaml/badge.svg)](https://github.com/daggerok/customized-vuepress-2-blog/actions/workflows/ci.yaml)</span>

I'm Maksim! I do software engineering, music, love and peace...

<span class="token url">[<span class="token content">This</span>](<span class="token url">https://github.com/daggerok</span>)</span> is my GitHub

To be continue...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I won't be explaining in details what this configuration is doing, in most cases it should be obvious... But anyway, you can <a href="https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html#home-page" target="_blank" rel="noopener noreferrer">go and read
official documentation here<ExternalLinkIcon/></a> if needed</p>
<h2 id="run-dev-server-to-test" tabindex="-1"><a class="header-anchor" href="#run-dev-server-to-test" aria-hidden="true">#</a> Run dev server to test</h2>
<p>Start developer server:</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre></div><p>Open <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/<ExternalLinkIcon/></a> page to see results:</p>
<CodeGroup>
  <CodeGroupItem title="light theme" active>
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-light-theme.png" alt="home page light theme"></p>
  </CodeGroupItem>
  <CodeGroupItem title="dark theme">
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-dark-theme.png" alt="home page dark theme"></p>
  </CodeGroupItem>
</CodeGroup>
<h2 id="custom-styling" tabindex="-1"><a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a> Custom styling</h2>
<p>Currently, home page picture looking nice, but we would like to style it a bit. Let's change that picture from square to circle.
To do so, we should add <code v-pre>.vuepress/styles/index.scss</code> with next context:</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">main > header > img </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let's check our browser on <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/<ExternalLinkIcon/></a>:</p>
<CodeGroup>
  <CodeGroupItem title="light theme" active>
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-light-theme-with-circle-logo.png" alt="home page light theme with circle logo"></p>
  </CodeGroupItem>
  <CodeGroupItem title="dark theme">
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-dark-theme-with-circle-logo.png" alt="home page dark theme with circle logo"></p>
  </CodeGroupItem>
</CodeGroup>
<p>Now it looks better 😎</p>
<h2 id="customize-navbar" tabindex="-1"><a class="header-anchor" href="#customize-navbar" aria-hidden="true">#</a> Customize navbar</h2>
<p>One more think I wanted to mention is navbar configuration in VuePress. At the moment we don't have anything in our navbar except
light / dark theme toggle, so let's configure it according to our needs...</p>
<h3 id="navbar-title" tabindex="-1"><a class="header-anchor" href="#navbar-title" aria-hidden="true">#</a> Navbar title</h3>
<p>Let's start from title... In my <code v-pre>package.json</code> file I have description:</p>
<div class="language-json" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Customized blog using VuePress 2.x"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>So I would like to use it as my blog title. To implement this I should create <code v-pre>.vuepress/config.ts</code> file and add necessary configuration:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span><span class="token punctuation">;</span>

<span class="token comment">// @ts-ignore // const { name, description } = require(`${process.cwd()}/package.json`)</span>
<span class="token keyword">const</span> getPackageJsonFile <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../package.json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> assert<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'json'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> description <span class="token punctuation">}</span> <span class="token operator">=</span> getPackageJsonFile<span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> description<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let's back to browser:</p>
<CodeGroup>
  <CodeGroupItem title="light theme" active>
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-light-theme-with-title.png" alt="home page light theme with title"></p>
  </CodeGroupItem>
  <CodeGroupItem title="dark theme">
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-dark-theme-with-title.png" alt="home page dark theme with title"></p>
  </CodeGroupItem>
</CodeGroup>
<h3 id="navbar-links" tabindex="-1"><a class="header-anchor" href="#navbar-links" aria-hidden="true">#</a> Navbar links</h3>
<p>With time, we will have many other pages, maybe we will add <em>About</em> page together with <em>Contacts</em> and so on...</p>
<h4 id="home-page-link" tabindex="-1"><a class="header-anchor" href="#home-page-link" aria-hidden="true">#</a> Home page link</h4>
<p>At this point of time I think it would be nice to start from link to main <em>Home</em> page, so any other links could be added latest similarly.
Navbar bar links configuration also should be done in <code v-pre>.vuepress/config.ts</code> file:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getPackageJsonFile <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../package.json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> assert<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'json'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> description<span class="token operator">:</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> getPackageJsonFile<span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let's check our browser:</p>
<CodeGroup>
  <CodeGroupItem title="light theme" active>
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-light-theme-with-home-page-navbar-link.png" alt="home page light theme with home page navbar link"></p>
  </CodeGroupItem>
  <CodeGroupItem title="dark theme">
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-dark-theme-with-home-page-navbar-link.png" alt="home page dark theme with home page navbar link"></p>
  </CodeGroupItem>
</CodeGroup>
<h4 id="github-repository-link" tabindex="-1"><a class="header-anchor" href="#github-repository-link" aria-hidden="true">#</a> GitHub repository link</h4>
<p>Additionally, we may want to share GitHub or GitLab repository where our blog source codes live. Even for ourselves it would be easier
simply just click to GitHub link and quickly edit post if we would like to change something or fix some misspell... In  <code v-pre>config.ts</code> file
we should tell VuePress our GitHub username and repository name. My repository FQDN URL in this case is
<a href="https://github.com/daggerok/customized-vuepress-2-blog" target="_blank" rel="noopener noreferrer">https://github.com/daggerok/customized-vuepress-2-blog<ExternalLinkIcon/></a>, so I should use
<code v-pre>daggerok/customized-vuepress-2-blog</code> part of it as <code v-pre>repo</code> value. It is enough to have GitHub navbar link, but I would like also specify
<code v-pre>docsBranch</code> and <code v-pre>docsDir</code> values:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getPackageJsonFile <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../package.json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> assert<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'json'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> description<span class="token operator">:</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> getPackageJsonFile<span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        repo<span class="token operator">:</span> <span class="token string">'daggerok/customized-vuepress-2-blog'</span><span class="token punctuation">,</span>
        docsBranch<span class="token operator">:</span> <span class="token string">'master'</span><span class="token punctuation">,</span>
        docsDir<span class="token operator">:</span> <span class="token string">'.'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let's check our browser:</p>
<CodeGroup>
  <CodeGroupItem title="light theme" active>
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-light-theme-with-github-navbar-link.png" alt="home page light theme with github navbar link"></p>
  </CodeGroupItem>
  <CodeGroupItem title="dark theme">
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-dark-theme-with-github-navbar-link.png" alt="home page dark theme with github navbar link"></p>
  </CodeGroupItem>
</CodeGroup>
<h3 id="navbar-search" tabindex="-1"><a class="header-anchor" href="#navbar-search" aria-hidden="true">#</a> Navbar search</h3>
<p>VuePress has awesome plugin: <code v-pre>@vuepress/plugin-search</code>, with that plugin we can quickly add basic search capabilities to our blog.
Lets install it:</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-ED</span> @vuepress/plugin-search@next
</code></pre></div><p>And configure, as usual in <code v-pre>config.ts</code> file:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-search'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getPackageJsonFile <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../package.json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> assert<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'json'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> description<span class="token operator">:</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> getPackageJsonFile<span class="token punctuation">.</span>default<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        repo<span class="token operator">:</span> <span class="token string">'daggerok/customized-vuepress-2-blog'</span><span class="token punctuation">,</span>
        docsBranch<span class="token operator">:</span> <span class="token string">'master'</span><span class="token punctuation">,</span>
        docsDir<span class="token operator">:</span> <span class="token string">'.'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cool! Now we can check our complete navbar with search functionality in action:</p>
<CodeGroup>
  <CodeGroupItem title="light theme" active>
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-light-theme-with-navbar-search.png" alt="home page light theme with navbar search"></p>
  </CodeGroupItem>
  <CodeGroupItem title="dark theme">
<p><img src="@source/blog/2022-08-08-vuepress-2-getting-started/home-page-dark-theme-with-navbar-search.png" alt="home page dark theme with navbar search"></p>
  </CodeGroupItem>
</CodeGroup>
<h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2>
<p>We've done a lot so far 🤪
It's time to let internet know about it 😁</p>
<p>To do so:</p>
<ol>
<li>First of all, let's install required software:<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-ED</span> cross-env
</code></pre></div>We will be using it to run our NPM-scripts with specific environment variable in cases when its needed</li>
<li>Then let's add two npm-scripts into <code v-pre>pacjage.json</code> file:<div class="language-json" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build ."</span><span class="token punctuation">,</span>
    <span class="token property">"build-github-pages"</span><span class="token operator">:</span> <span class="token string">"cross-env BASE_HREF=/customized-vuepress-2-blog/ npm run build"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>Script <code v-pre>build</code> will optimize our build for production,
script <code v-pre>build-github-pages</code> will do same, but with <code v-pre>BASE_HREF</code> environment variable will be used in next point:</li>
<li>Update our <code v-pre>.vuepress/config.ts</code> file like so:<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> description<span class="token operator">:</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/package.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    base<span class="token operator">:</span> <span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_HREF</span> <span class="token operator">?</span> <span class="token string">'/'</span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    title<span class="token punctuation">,</span>
    <span class="token comment">// other part is skipped...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>Here we check if <code v-pre>BASE_HREF</code> env. variable wasn't passed, then we know that base must be <code v-pre>/</code>.
otherwise it should depends on our repository name, for example: <code v-pre>/customized-vuepress-2-blog/</code></li>
<li>Create GitHub repository if its not yet created, commit what we did so far and push all your blog source codes in here. For example into
<a href="https://github.com/daggerok/customized-vuepress-2-blog" target="_blank" rel="noopener noreferrer">https://github.com/daggerok/customized-vuepress-2-blog<ExternalLinkIcon/></a> repository</li>
<li>Next go to repository <code v-pre>Setting</code> tab, then click <code v-pre>Pages</code> manu on sidebar, then under <code v-pre>Build and deployment</code> section choose
<code v-pre>GitHub Actions</code> option:
<img src="@source/blog/2022-08-08-vuepress-2-getting-started/pages-build-and-deployment-using-github-actions.png" alt="pages build and deployment configuration using github-actions"></li>
<li>Last, but not least, create <code v-pre>.github/workflows/pages.yml</code> file with next content:<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># Sample workflow for building and deploying a VuePress site to GitHub Pages</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy custom VuePress blog with GitHub Pages artifacts
<span class="token comment"># Runs on pushes targeting the default branch</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"master"</span><span class="token punctuation">]</span>
  <span class="token comment"># Allows you to run this workflow manually from the Actions tab</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token comment"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span>
<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read
  <span class="token key atrule">pages</span><span class="token punctuation">:</span> write
  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write
<span class="token comment"># Allow one concurrent deployment</span>
<span class="token key atrule">concurrency</span><span class="token punctuation">:</span>
  <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">"pages"</span>
  <span class="token key atrule">cancel-in-progress</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># Use concrete NodeJS version:</span>
<span class="token key atrule">env</span><span class="token punctuation">:</span>
  <span class="token key atrule">NODE_VERSION</span><span class="token punctuation">:</span> 18.4.0
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># Build job:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/configure<span class="token punctuation">-</span>pages@v1
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">id</span><span class="token punctuation">:</span> ci
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            ~/.npm
            ~/.node</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles('<span class="token important">**/workflows/*.yml'</span><span class="token punctuation">,</span> <span class="token string">'**/package.json'</span><span class="token punctuation">,</span> '<span class="token important">**/package-lock.json')</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> env.NODE_VERSION <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm i <span class="token punctuation">-</span>E
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload artifact
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>artifact@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">'.vuepress/dist'</span>
  <span class="token comment"># Deployment job:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> github<span class="token punctuation">-</span>pages
      <span class="token key atrule">url</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.deployment.outputs.page_url <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">id</span><span class="token punctuation">:</span> deployment
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/deploy<span class="token punctuation">-</span>pages@v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>This GitHub action contains two jobs: one for project artifact build + upload and another for its deployment on any master branch push</li>
<li>Commit and push changes from previous step and wait for CI completion. Afterall, you should see your awesome customized VuePress blog
gets published, for example here:
<a href="https://daggerok.github.io/customized-vuepress-2-blog/" target="_blank" rel="noopener noreferrer">https://daggerok.github.io/customized-vuepress-2-blog/<ExternalLinkIcon/></a></li>
</ol>
<h2 id="create-custom-components" tabindex="-1"><a class="header-anchor" href="#create-custom-components" aria-hidden="true">#</a> Create custom components</h2>
<p>Let's say we wanna custom <code v-pre>Footer</code> which can be easily used in our pages or components, just like so:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> My post</span>

My content....

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create component folder: <code v-pre>.vuepress/components/layers</code></p>
<CodeGroup>
  <CodeGroupItem title="Unix bash" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> .vuepress/components
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="Windows batch">
<div class="language-batch" data-ext="batch"><pre v-pre class="language-batch"><code><span class="token command"><span class="token keyword">mkdir</span> .vuepress\components</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<p>Create <code v-pre>.vuepress/components/Footer.vue</code> component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> Maksim Kostromin © 2022-present 🙃<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Footer'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">div.footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -3rem<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now we should help VuePress to register our components.</p>
<p>Install <code v-pre>@vuepress/plugin-register-components</code> package:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-ED</span> @vuepress/plugin-register-components@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And finally update our <code v-pre>.vuepress/index.ts</code> file:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-register-components'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      componentsDir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./components'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  
  <span class="token comment">// ...skipped after...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now we can used our <code v-pre>Footer</code> directly in markdown files or import it in our vue components just like so:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">'@/components/Footer.vue'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="add-custom-local-theme" tabindex="-1"><a class="header-anchor" href="#add-custom-local-theme" aria-hidden="true">#</a> Add custom local theme</h2>
<p>Let'e imagine we want to have our blog unique, so we've decide to add our custom <code v-pre>Footer</code> component for every page
in our blog... To do so we must create our own custom local theme.</p>
<p>Let's create folders <code v-pre>.vuepress/theme</code> and <code v-pre>.vuepress/theme/layers</code> which will contains custom theme files:</p>
<CodeGroup>
  <CodeGroupItem title="Unix bash" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> .vuepress/theme
<span class="token function">mkdir</span> .vuepress/theme/layers
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="Windows batch">
<div class="language-batch" data-ext="batch"><pre v-pre class="language-batch"><code><span class="token command"><span class="token keyword">mkdir</span> .vuepress\theme</span>
<span class="token command"><span class="token keyword">mkdir</span> .vuepress\theme\layers</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<p>Create <code v-pre>.vuepress/theme/layers/Layout.vue</code> layout:</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ParentLayout <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default/lib/client/layouts/Layout.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">'@/components/Footer.vue'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-wrapping-section<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ParentLayout</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create <code v-pre>.vuepress/theme/client.ts</code> file:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'./layouts/Layout.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
        Layout<span class="token punctuation">,</span>
        NotFound<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create <code v-pre>.vuepress/theme/index.ts</code> file:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">DefaultThemeOptions</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> myBlogLocalTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> DefaultThemeOptions<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'vuepress-theme-local'</span><span class="token punctuation">,</span>
      <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// override layouts in child theme's client config file:</span>
      clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./client.ts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">// add component alias. Usage:</span>
      <span class="token comment">// import { MyComponent } from '@/components/MyComponent';</span>
      <span class="token comment">// it will import component from .vuepress/components/MyComponent.vue file</span>
      alias<span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'..'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now update <code v-pre>.vuepress/config.ts</code> file accordingly to use it in your VuePress blog:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// ...skipped before...</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> myBlogLocalTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./theme'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">myBlogLocalTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    repo<span class="token operator">:</span> <span class="token string">'daggerok/customized-vuepress-2-blog'</span><span class="token punctuation">,</span>
    docsBranch<span class="token operator">:</span> <span class="token string">'master'</span><span class="token punctuation">,</span>
    docsDir<span class="token operator">:</span> <span class="token string">'.'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// ...skipped after...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See: <a href="https://v2.vuepress.vuejs.org/reference/default-theme/extending.html#layout-slots" target="_blank" rel="noopener noreferrer">Official extending section<ExternalLinkIcon/></a> for more details</p>
<p>Congrats! 🎉💪👏</p>
<!--

## TODO

* Next post: Add more blog posts, use globs to autoconfigure blog sidebar and page plugin
* Next post: Use page plugin to create custom reusable blog posts component to be used on home and blog pages
* Next post: [Add multi-language support](https://v2.vuepress.vuejs.org/guide/i18n.html)

-->
<h2 id="useful-links" tabindex="-1"><a class="header-anchor" href="#useful-links" aria-hidden="true">#</a> Useful links</h2>
<ul>
<li><a href="https://github.com/daggerok/customized-vuepress-2-blog" target="_blank" rel="noopener noreferrer">GitHub repository<ExternalLinkIcon/></a></li>
<li><a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 2.x site<ExternalLinkIcon/></a></li>
</ul>
</div></template>

<script>
  export default {
    mounted: async function mounted() {
      const html = await document.querySelector('html');
      const classList = html.classList;
      const isDark = classList.contains('dark');
      console.log('isDark', isDark);
      if (!isDark) {
        document.querySelectorAll('.code-group__nav').forEach(el => {
          el.style.backgroundColor = '#6a8bad';
        });
        return;
      }
      const tabs = await Promise.all(document.querySelectorAll('button.code-group__nav-tab'));
      tabs.filter(el => el.textContent === 'dark theme')
          .filter(el => el.getAttribute('aria-pressed') !== true)
          .filter(el => el.getAttribute('aria-expanded') !== true)
          .forEach(el => el.click());
      console.log('clicked.');
    },
  }
</script>
