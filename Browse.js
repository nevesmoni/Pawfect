const container = document.getElementById("postsContainer");
let allPosts = [];

fetch(SHEET_URL)
  .then((res) => res.json())
  .then((data) => {
    if (data.length === 0) {
      container.innerHTML = "<p>No posts yet.</p>";
    } else {
      allPosts = data.reverse();
      renderPosts(allPosts);
    }
  })
  .catch(() => {
    container.innerHTML = "<p>⚠️ Could not load data.</p>";
  });

function renderPosts(posts) {
  container.innerHTML = "";
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <strong> 🐾 ${post.Item}</strong><br/>
      📍 ${post.Location}<br/>
      ${post.Pet_type ? ` ${post.Pet_type}<br/>` : ""}
      ${post.Contact ? `📞 ${post.Contact}` : ""}
    `;
    container.appendChild(div);
  });
}

document.getElementById("typeFilter").addEventListener("change", function () {
  const selected = this.value.toLowerCase();
  const filteredPosts =
    selected === "all"
      ? allPosts
      : allPosts.filter((post) => post.Pet_type.toLowerCase() === selected);
  renderPosts(filteredPosts);
});
