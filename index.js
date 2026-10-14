// NxDom PHP - landing page: i18n ID/EN + interaksi ringan

const I18N = {
  id: {
    "meta.title": "NxDom PHP - Write JavaScript. Run on PHP.",
    "meta.desc": "NxDom adalah PHP native extension global: satu instalasi di server, semua aplikasi langsung punya router, database, dan auth - tanpa vendor/, tanpa Node.js di produksi. Developer cukup menulis JavaScript.",
    "nav.features": "Fitur",
    "nav.arch": "Arsitektur",
    "nav.cli": "CLI",
    "nav.install": "Pasang",
    "hero.badge": "nxdom-php v0.0.2 · PHP native extension · MIT",
    "hero.title": "Tulis <span class=\"accent\">JavaScript</span>, jalan di <span class=\"accent\">PHP</span>",
    "hero.desc": "NxDom adalah <strong>PHP native extension global</strong>: dipasang sekali di server, semua aplikasi langsung punya router, database, dan auth. Aplikasi tidak membawa <code>vendor/</code>, tidak menyalin runtime, dan <strong>production tidak butuh Node.js</strong>.",
    "hero.cta1": "Mulai Pasang",
    "hero.cta2": "Lihat Arsitektur",
    "feat.title": "Fitur",
    "feat.sub": "Runtime backend sebagai extension native - bukan library yang disalin ke setiap aplikasi.",
    "feat.1t": "Satu NxDom, Banyak Aplikasi",
    "feat.1d": "Extension dimuat di level PHP, bukan di dalam www/. Website A, B, dan C di server yang sama langsung memakai runtime yang sama - satu kali pasang, tanpa duplikasi.",
    "feat.2t": "Router di Extension",
    "feat.2d": "Path seperti /api/users ditangani NxDom lewat front controller generik + rewrite generik (sekali per server). Aplikasi tidak punya Router.php - routing ada di runtime.",
    "feat.3t": "Database Aman",
    "feat.3d": "Query builder + PDO/MySQL dengan prepared statement. SQL mentah dari client ditolak; parameter hanya boleh jadi nilai, bukan nama tabel/kolom - penjagaan eksplisit terhadap SQL injection.",
    "feat.4t": "Auth & Policy Terpusat",
    "feat.4d": "Register, login, session, role, dan API token dijalankan extension. nxdom.policy.json menegakkan fillable, whitelist kolom, dan batas limit - di server, bukan di client.",
    "feat.5t": "Manifest & Policy JSON",
    "feat.5d": "Aplikasi mendeklarasikan route dan izin lewat nxdom.config.json, nxdom.manifest.json, dan nxdom.policy.json - ada JSON Schema publik dan validator untuk ketiganya.",
    "feat.6t": "Build Dua Platform",
    "feat.6d": "config.w32 (MSVC/nmake) dan config.m4 (phpize/autotools) - extension dibangun dan diuji di Windows (PHP 8.1 ZTS) maupun Linux (PHP 8.3, aaPanel). CI merilis CLI + SDK otomatis saat tag.",
    "arch.title": "Arsitektur",
    "arch.sub": "PHP tetap engine-nya, Apache/Nginx tetap web server-nya - NxDom menyediakan application API di atasnya.",
    "arch.1t": "Di Level PHP Engine",
    "arch.1d": "Ekstensi native C (Zend Engine API) dimuat lewat extension=nxdom. Hook RINIT/RSHUTDOWN dipakai untuk mengenali aplikasi lewat nxdom.config.json di document root.",
    "arch.2t": "Front Controller Generik",
    "arch.2d": "Native extension tidak bisa dipanggil web server tanpa file fisik, jadi ada satu nxdom/index.php generik + aturan rewrite yang di-Include identik di tiap vhost - tetap satu berkas untuk semua aplikasi.",
    "arch.3t": "Isolasi per Aplikasi",
    "arch.3d": "Konfigurasi, policy, dan data tetap terpisah tiap app. File .json konfigurasi diblokir dari akses statis; path traversal dan route halaman divalidasi ketat.",
    "arch.note": "<strong>Bukan framework, bukan library:</strong> NxDom tidak hadir sebagai <code>vendor/nxdom/</code> maupun <code>nxdom/</code> di aplikasi Anda. Tidak ada <code>Runtime.php</code>, <code>Router.php</code>, atau <code>Database.php</code> yang perlu ditulis developer - semuanya ada di extension.",
    "cli.title": "CLI & SDK",
    "cli.sub": "nxdom-php untuk membuat & mengelola aplikasi; @nxdom/client untuk memanggil API dari browser.",
    "cli.note": "<strong>Kontrak endpoint:</strong> SDK memanggil <code>/api/{resource}</code> untuk CRUD dan <code>/api/auth/*</code> untuk auth; endpoint model khusus lewat <code>/api/outside</code> dengan resep query yang dideklarasikan di policy - tidak ada eksekusi kode arbitrer dari client.",
    "ins.title": "Cara Pasang",
    "ins.sub": "Unduh artefak siap pakai dari Release v0.0.2, atau build extension dari source.",
    "dl.1t": "CLI Windows",
    "dl.2t": "Extension Windows",
    "dl.3t": "Extension Linux",
    "dl.4t": "SDK JavaScript",
    "ins.dlNote": "Semua artefak tersedia di <a href=\"https://github.com/iyanrsaleh/nxdom-php/releases/tag/v0.0.2\" target=\"_blank\" rel=\"noopener\">Releases v0.0.2</a>. Versi PHP lain (atau LSPHP) perlu build dari <code>nxdom/src/</code> - lihat <code>install.md</code>.",
    "ins.buildTitle": "Build Extension dari Source",
    "ins.note": "Setelah extension terpasang, ikuti runbook Apache (nxdom-rewrite.conf + Include di tiap vhost) atau panduan nginx pada Apache.md. Aplikasi yang tidak punya nxdom.config.json sama sekali tidak terpengaruh oleh extension ini.",
    "foot.tag": "Write JavaScript. Run on PHP. - bagian dari ekosistem NXDOM.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "MIT License · © 2026 NXDOM"
  },
  en: {
    "meta.title": "NxDom PHP - Write JavaScript. Run on PHP.",
    "meta.desc": "NxDom is a global PHP native extension: install once per server and every app gets router, database, and auth - no vendor/, no Node.js in production. Developers just write JavaScript.",
    "nav.features": "Features",
    "nav.arch": "Architecture",
    "nav.cli": "CLI",
    "nav.install": "Install",
    "hero.badge": "nxdom-php v0.0.2 · PHP native extension · MIT",
    "hero.title": "Write <span class=\"accent\">JavaScript</span>, run on <span class=\"accent\">PHP</span>",
    "hero.desc": "NxDom is a <strong>global PHP native extension</strong>: installed once per server, every application immediately gets router, database, and auth. Apps carry no <code>vendor/</code>, copy no runtime, and <strong>production needs no Node.js</strong>.",
    "hero.cta1": "Get Started",
    "hero.cta2": "See Architecture",
    "feat.title": "Features",
    "feat.sub": "Backend runtime as a native extension - not a library copied into every app.",
    "feat.1t": "One NxDom, Many Apps",
    "feat.1d": "The extension loads at the PHP level, not inside www/. Sites A, B, and C on the same server all use the same runtime - install once, no duplication.",
    "feat.2t": "Router Inside the Extension",
    "feat.2d": "Paths like /api/users are handled by NxDom through a generic front controller + generic rewrite (once per server). Apps have no Router.php - routing lives in the runtime.",
    "feat.3t": "Safe Database",
    "feat.3d": "Query builder + PDO/MySQL with prepared statements. Raw SQL from clients is rejected; parameters can only be values, never table/column names - explicit protection against SQL injection.",
    "feat.4t": "Centralized Auth & Policy",
    "feat.4d": "Register, login, session, roles, and API tokens are handled by the extension. nxdom.policy.json enforces fillable, column whitelists, and limit caps - on the server, not the client.",
    "feat.5t": "Manifest & Policy JSON",
    "feat.5d": "Apps declare routes and permissions via nxdom.config.json, nxdom.manifest.json, and nxdom.policy.json - public JSON Schemas and a validator exist for all three.",
    "feat.6t": "Two-Platform Builds",
    "feat.6d": "config.w32 (MSVC/nmake) and config.m4 (phpize/autotools) - the extension is built and tested on Windows (PHP 8.1 ZTS) and Linux (PHP 8.3, aaPanel). CI releases CLI + SDK automatically on tags.",
    "arch.title": "Architecture",
    "arch.sub": "PHP remains the engine, Apache/Nginx remain the web server - NxDom provides the application API on top.",
    "arch.1t": "At the PHP Engine Level",
    "arch.1d": "A native C extension (Zend Engine API) loaded via extension=nxdom. RINIT/RSHUTDOWN hooks detect apps through nxdom.config.json in the document root.",
    "arch.2t": "Generic Front Controller",
    "arch.2d": "A native extension cannot be invoked by the web server without a physical file, so there is one generic nxdom/index.php + rewrite rules Included identically in every vhost - still one file for all apps.",
    "arch.3t": "Per-App Isolation",
    "arch.3d": "Config, policy, and data stay separated per app. Config .json files are blocked from static access; path traversal and page routes are strictly validated.",
    "arch.note": "<strong>Not a framework, not a library:</strong> NxDom never appears as <code>vendor/nxdom/</code> or <code>nxdom/</code> inside your app. No <code>Runtime.php</code>, <code>Router.php</code>, or <code>Database.php</code> for developers to write - all of it lives in the extension.",
    "cli.title": "CLI & SDK",
    "cli.sub": "nxdom-php creates and manages apps; @nxdom/client calls the API from the browser.",
    "cli.note": "<strong>Endpoint contract:</strong> the SDK calls <code>/api/{resource}</code> for CRUD and <code>/api/auth/*</code> for auth; dedicated model endpoints go through <code>/api/outside</code> with query recipes declared in the policy - no arbitrary code execution from clients.",
    "ins.title": "Installation",
    "ins.sub": "Download ready-to-use artifacts from Release v0.0.2, or build the extension from source.",
    "dl.1t": "Windows CLI",
    "dl.2t": "Windows Extension",
    "dl.3t": "Linux Extension",
    "dl.4t": "JavaScript SDK",
    "ins.dlNote": "All artifacts are available on <a href=\"https://github.com/iyanrsaleh/nxdom-php/releases/tag/v0.0.2\" target=\"_blank\" rel=\"noopener\">Releases v0.0.2</a>. Other PHP versions (or LSPHP) need a build from <code>nxdom/src/</code> - see <code>install.md</code>.",
    "ins.buildTitle": "Build the Extension from Source",
    "ins.note": "After the extension is installed, follow the Apache runbook (nxdom-rewrite.conf + Include in each vhost) or the nginx guide in Apache.md. Apps without nxdom.config.json are completely unaffected by this extension.",
    "foot.tag": "Write JavaScript. Run on PHP. - part of the NXDOM ecosystem.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "MIT License · © 2026 NXDOM"
  }
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  try { localStorage.setItem("nxdomphp-lang", lang); } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((rule) => {
      const [attr, key] = rule.split("|");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let saved = null;
  try { saved = localStorage.getItem("nxdomphp-lang"); } catch {}
  if (saved) {
    setLang(saved);
  } else {
    const browserLang = (navigator.language || "id").slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
