document.addEventListener("DOMContentLoaded", function () {

    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
    
        filterBtns.forEach((b) => b.classList.remove("active"));
  
        btn.classList.add("active");
  
        const filterValue = btn.getAttribute("data-filter");
  
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.classList.contains(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  

  
   
  