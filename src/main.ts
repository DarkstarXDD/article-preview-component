const shareButton = document.getElementById("share-button")
const shareDetails = document.getElementById("share-details")

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

// If somewhere outside the popover is clicked, close popover.
document.addEventListener("click", (event) => {
  if (
    !shareDetails?.contains(event.target) &&
    !shareButton?.contains(event.target)
  ) {
    closePopover()
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopover()
  }
})
