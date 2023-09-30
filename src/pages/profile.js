const editProfileBtn = document.getElementById("editProfileBtn");
const editProfileModal = document.getElementById("editProfileModal");
const backBtn = document.getElementById("backBtn");
const saveProfileBtn = document.getElementById("saveProfileBtn");

editProfileBtn.addEventListener("click", () => {
  editProfileModal.showModal();
});

backBtn.addEventListener("click", () => {
  editProfileModal.close();
});

saveProfileBtn.addEventListener("click", () => {
  editProfileModal.close();
});
