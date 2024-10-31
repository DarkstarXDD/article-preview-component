// Get elements
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
})
