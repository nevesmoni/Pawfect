document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const post = { name, email, message };

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
