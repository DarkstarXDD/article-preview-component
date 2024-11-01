const shareButton = document.getElementById("share-button")
const shareDetails = document.getElementById("share-details")

function openPopover() {
  if (!shareButton) return
  shareButton.dataset.isPopoverOpen = "true"
}

function closePopover() {
  if (!shareButton) return
  shareButton.dataset.isPopoverOpen = "false"
}

shareButton?.addEventListener("click", () => {
  let isPopoverOpen = shareButton.dataset.isPopoverOpen

  // If the Popover is currently open, close it. If not open it.
  if (isPopoverOpen === "true") {
    closePopover()
  } else {
    openPopover()
  }
})

// If somewhere outside the popover is clicked, close popover.
document.addEventListener("click", (event) => {
  const isTargetNode = event.target instanceof Node
  if (!isTargetNode) return
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
