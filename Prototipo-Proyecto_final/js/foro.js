//hamburguer menu
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems);
});

//collapsables
// document.addEventListener('DOMContentLoaded', function() {
//     let elems = document.querySelectorAll('.collapsible');
//     let instances = M.Collapsible.init(elems);
//   });

// accordion

let accordionElems = document.querySelectorAll(".collapsible");
M.Collapsible.init(accordionElems, {
  inDuration: 0,
  onCloseEnd: (element) => {
    let header = element.querySelector(".collapsible-header");
    let content = element.querySelector(".collapsible-body");
    header.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
  },
  onOpenEnd: (element) => {
    let header = element.querySelector(".collapsible-header");
    let content = element.querySelector(".collapsible-body");
    header.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "false");
  },
});

accordionElems.forEach((accordionElem) => {
  let accordionHeaders = accordionElem.querySelectorAll(".collapsible-header");
  let accordionContents = accordionElem.querySelectorAll(".collapsible-body");

  accordionHeaders.forEach((element) => {
    element.setAttribute("aria-expanded", "false");
  });

  accordionContents.forEach((element) => {
    element.setAttribute("aria-hidden", "true");
  });
});

document.querySelector("#texts").onclick = () => {
  alert("Incidencia enviada. Le responderemos lo antes posible, gracias por su colaboración.");
}
