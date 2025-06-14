const lazy__loading = () => {
  const lazy__imgs = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("loading");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  lazy__imgs.forEach((img) => {
    observer.observe(img);
  });
  console.log("In Lazy loading");
};

export default lazy__loading;
