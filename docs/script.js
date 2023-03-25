const $ = function (e) {
  return document.querySelector(e);
};
const $$ = function (e) {
  return document.querySelectorAll(e);
};

window.NProgress.start();

$$(".sidebar a").forEach((e) => {
  e.addEventListener("click", function () {
    $$(".sidebar a").forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
    location.hash = this.getAttribute("href");
  });
});

window.addEventListener("hashchange", async function (event) {
  update();
});

async function update() {
  try {
    window.NProgress.start();
    const page = location.hash.replace("#!/", "");
    var res = await fetch("/assets/docs/" + page + ".md");
    res = await res.text();
    if (res.trim().toLowerCase().replace(" ", "") === "notfound") {
      $(".page").innerHTML =
        "<h1>404 Not found</h1><p>That page doesn't exist.</p><p>Maybe <a href='#'>go home</a>?</p>";
      window.NProgress.done(true);
      return;
    }

    res = window.marked.parse(res);
    $(".page").innerHTML = res;
    window.NProgress.done(true);
  } catch {
    $(".page").innerHTML =
      "<h1>An error occured</h1><p>An error occured while loading the files.</p><p>Maybe <a href='#'>go home</a>?</p>";
    window.NProgress.done(true);
  }
  window.Prism?.highlightAll();
  $(".main").scrollTo(0, 0);

  $$("pre").forEach((e) => {
    e.innerHTML =
      `<div class="flex items-center relative text-gray-200 bg-gray-800 px-3 py-1 text-xs font-sans copy-row"><button class="flex ml-auto gap-2" data-copy=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span>Copy</span></button></div>` +
      e.innerHTML;
    e.style.padding = "0px";
    e.querySelector("code").outerHTML = `<div style="margin: 10px;">${
      e.querySelector("code").outerHTML
    }</div>`;
    e.querySelector(
      "code"
    ).style = `white-space: pre-wrap;word-spacing: normal;word-break: normal;word-wrap: normal;`;
  });
  $$("button[data-copy]").forEach((e) => {
    e.addEventListener("click", function () {
      var pe = document.createElement("textarea");

      pe.innerText =
        e.parentElement.parentElement.querySelector("code").innerText;
      pe.style.position = "fixed";
      pe.style.top = "-500px";
      pe.style.left = "-500px";
      pe.style.opacity = "0";
      document.body.appendChild(pe);
      pe.focus();
      pe.select();
      pe.setSelectionRange(0, 99999);
      try {
        document.execCommand("copy");
      } catch (err) {
        navigator.clipboard.writeText(pe.innerText);
      }

      pe.remove();

      var ei = e.innerHTML;
      console.log("copy", e, ei);
      e.style.pointerEvents = "none";

      e.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Copied!</span>`;
      setTimeout(function () {
        e.innerHTML = ei;
        e.style.pointerEvents = "all";
      }, 1500);
    });
  });
}

window.addEventListener(
  "message",
  (event) => {
    console.log(event);
    if (event.data.startsWith("size:")) {
      $("#load").remove();
      $("iframe").style.height = "290px";
      $("iframe").style.opacity = "1";
    } else if (event.data == "done") {
      $("iframe").style.display = "none";

      $(".done").style.display = "block";
      $("#report-em").remove();
    }
  },
  false
);

if (location.hash.trim().length < 3) {
  location.hash = "#!/home";
} else {
  update();
  $$(".sidebar a").forEach((e) => {
    e.classList.remove("active");
    if (e.getAttribute("href") == location.hash) {
      e.classList.add("active");
    }
  });
}
