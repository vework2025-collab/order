// highlight current page / submenu in sidebar based on filename + hash
(function(){
  const file = (location.pathname.split("/").pop() || "index.html");
  const hash = location.hash || "";

  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href") || "";
    const [hrefFile, hrefHash=""] = href.split("#");
    const isSameFile = (hrefFile === file) || (file==="" && hrefFile==="index.html");
    const isSameHash = (!hrefHash && !hash) || (hrefHash && hash.slice(1) === hrefHash);

    if (isSameFile && isSameHash) a.classList.add("active");
  });
})();
