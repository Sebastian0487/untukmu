function openModal(img, desc) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = img;
  document.getElementById("modal-desc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

