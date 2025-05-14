(function () {
  const repoBaseUrl = 'https://github.com/supportpineaplehub/pnexcel/edit/main';

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(function (hook, vm) {
    hook.afterEach(function (html, next) {
      // Ambil path file markdown saat ini
      const currentFile = vm.route.file || 'README.md';
      const editUrl = repoBaseUrl + currentFile;

      const editButton = `
        <div style="text-align:right; margin: 1em 0;">
          <a href="${editUrl}" target="_blank" style="text-decoration:none;font-weight:bold;">
            ✏️ Edit this document
          </a>
        </div>
      `;

      next(editButton + html);
    });
  }, window.$docsify.plugins);
})();
