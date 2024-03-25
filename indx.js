document.addEventListener("DOMContentLoaded", function () {
  const counterButtons = document.querySelectorAll(".img");
  const counterDisplay = document.getElementById("counterDisplay");
  let totalCount = 0;

  // Function to update counter display
  function updateCounterDisplay() {
    counterDisplay.textContent = `Products in the basket: ${totalCount}`;
  }

  // Function to handle button click
  function handleButtonClick() {
    totalCount++;
    updateCounterDisplay();
  }

  // Add event listener to each counter button
  counterButtons.forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
  });
});
