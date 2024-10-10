function changeImage(imageSrc) {
  document.getElementById("zoom-image").src = imageSrc;
}
function changeQuantity(amount) {
  const quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.innerText);
  currentQuantity += amount;
  if (currentQuantity < 1) {
    currentQuantity = 1; 
  }
  quantityElement.innerText = currentQuantity;
  updateAddButton(currentQuantity);
}



function updateAddButton(quantity) {
  const pricePerUnit = 20;
  const totalPrice = quantity * pricePerUnit;
  document.getElementById(
    "add-button"
  ).innerText = `AÑADIR - S/. ${totalPrice}`;
}



document.querySelectorAll(".collapsible").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".icon");

    if (content.classList.contains("show")) {
      content.classList.remove("show");
      icon.classList.remove("rotate");
    } else {
      content.classList.add("show");
      icon.classList.add("rotate");
    }
  });
});
