const fs = require("fs");
const path = require("path");
const { minify } = require("html-minifier-terser");

const src = path.join(__dirname, "src", "index.html");
const out = path.join(__dirname, "index.html");

(async () => {
  const html = fs.readFileSync(src, "utf8");

  // Abordagem leve: minificar + ofuscar nomes (mangling), sem codificar dados
  // nem usar proteções anti-debug que estragam a experiência.
  const result = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: {
      compress: true,
      mangle: { toplevel: true }
    }
  });

  fs.writeFileSync(out, result, "utf8");
  const before = Buffer.byteLength(html);
  const after = Buffer.byteLength(result);
  console.log(
    `Minificado: ${path.relative(process.cwd(), src)} -> ${path.relative(process.cwd(), out)}` +
      ` (${before} -> ${after} bytes, -${Math.round((1 - after / before) * 100)}%)`
  );
})();
