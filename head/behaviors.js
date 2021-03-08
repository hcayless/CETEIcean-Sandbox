{"tei":
  {
    "head": function(e) {
      let level = Number.parseInt(e.getAttribute("data-level"));
      let result = document.createElement("h" + (level < 6 ? level : 6));
      for (let n of Array.from(e.childNodes)) {
        result.appendChild(n.cloneNode());
      }
      return result;
    },
    "lb": ["<br>"]
  }
}