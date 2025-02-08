// perse path argument
import { path, fs } from "@vuepress/utils";

if (process.argv.length <= 2) {
  console.log('Script requires argument for path post to be created');
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  console.log(`
    Usage: bun new ${year}/${year}-${month}-${day}-Hello-World
       or: bun new ${year} ${year}-${month}-${day}-Hello-World
  `);
  process.exit(1);
}

const [_exec, _script, ...rest] = process.argv;
const input = rest.join(' ');

const blogDir = path.join(__dirname, 'blog', ...rest);
fs.mkdirpSync(blogDir);

const blobPost = path.join(blogDir, 'README.md');
fs.writeSync(fs.openSync(blobPost, 'w'), `# TODO ${input}
${input}

[[toc]]
`);
console.log(`file ${blobPost} created`);

const ruBlogDir = path.join(__dirname, 'ru', 'blog', ...rest);
fs.mkdirpSync(ruBlogDir);

const ruBlobPost = path.join(ruBlogDir, 'README.md');
fs.writeSync(fs.openSync(ruBlobPost, 'w'), `---
lang: ru-RU
---

# В разработке ${input}
${input}

[[toc]]
`);
console.log(`file ${ruBlobPost} created`);
