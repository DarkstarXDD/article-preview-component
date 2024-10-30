const bottomWrapper = document.getElementById("bottom-wrapper")
const authorDetails = document.getElementById("author-details")
const shareDetails = document.getElementById("share-details")
const shareButton = document.getElementById("share-button")
let isExpanded = false

shareButton?.addEventListener("click", () => {
  let prevIsExpanded = shareButton.getAttribute("aria-expanded")

  if (prevIsExpanded === "true") {
    shareButton.setAttribute("aria-expanded", "false")
    isExpanded = !isExpanded
  } else {
    shareButton.setAttribute("aria-expanded", "true")
    isExpanded = !isExpanded
  }
  bottomWrapper?.classList.toggle("bottom-expanded")
  authorDetails?.classList.toggle("details-hidden")
  shareDetails?.classList.toggle("details-hidden")
})
