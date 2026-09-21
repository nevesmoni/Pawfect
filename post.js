document.getElementById("PetForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const Pet_type = document.getElementById("Pet_type").value;
  const Item = document.getElementById("Item").value.trim();
  const Location = document.getElementById("Location").value.trim();
  const Contact = document.getElementById("Contact").value.trim();

  const post = { Item, Location, Contact, Pet_type };

  fetch(SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then(() => {
      alert("✅ Posted successfully!");
      document.getElementById("foodForm").reset();
    });
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  script.onload = () => confetti();
  document.body.appendChild(script);
});
