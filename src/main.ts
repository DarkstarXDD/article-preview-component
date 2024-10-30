// Get elements
const bottomWrapper = document.getElementById("bottom-wrapper")
const authorDetails = document.getElementById("author-details")
const shareDetails = document.getElementById("share-details")
const shareButton = document.getElementById("share-button")

function openPopover() {
  shareButton?.setAttribute("aria-expanded", "true")
}

function closePopover() {
  shareButton?.setAttribute("aria-expanded", "false")
}

shareButton?.addEventListener("click", () => {
  let isPopoverOpen = shareButton.getAttribute("aria-expanded")

  // If the Popover is currently open, close it. If not open it.
  if (isPopoverOpen === "true") {
    closePopover()
  } else {
    openPopover()
  }
  bottomWrapper?.classList.toggle("bottom-expanded")
  authorDetails?.classList.toggle("details-hidden")
  shareDetails?.classList.toggle("details-hidden")
})
