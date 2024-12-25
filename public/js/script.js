// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo){
      if (info.style.display != "inline"){
        info.style.display = "inline";
       }else { 
        info.style.display = "none";
       } 
    };
  });

  // Get all filter elements
const filterElements = document.querySelectorAll(".filter");
const listingCards = document.querySelectorAll(".listing-card");

filterElements.forEach((filter) => {
    filter.addEventListener("click", () => {
        // Get the property to filter by from the data-filter-property attribute
        const filterProperty = filter.getAttribute("data-filter-property");

        // Hide all listing cards
        listingCards.forEach((card) => {
            card.style.display = "none";
        });

        if (filterProperty) {
            // Show only the listing cards that match the selected property
            const matchingCards = document.querySelectorAll(`[data-property="${filterProperty}"]`);
            matchingCards.forEach((card) => {
                card.style.display = "block";
            });
        } else {
            // If no filter is selected, show all listing cards
            listingCards.forEach((card) => {
                card.style.display = "block";
            });
        }
    });

    
});

 searchFun = () => {
  const categorySearchInput = document.getElementById("search-inp");
  const searchValue = categorySearchInput.value.toLowerCase();
  const listingCards = document.querySelectorAll(".listing-card");

  listingCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-property").toLowerCase();
      const cardVisible = cardCategory.includes(searchValue);

      // Toggle visibility of the listing card based on the search result
      card.style.display = cardVisible ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const categorySearchInput = document.getElementById("search-inp");
  categorySearchInput.addEventListener("input", searchFun());
});


// slider

const tabbox = document.querySelector(".tab-box");
 arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleicons = () => {
    let scrollValue = Math.round(tabbox.scrollLeft);
    let maxscrollwidth = Math.round(tabbox.scrollWidth - tabbox.clientWidth - 1);
    console.log(scrollValue,maxscrollwidth);
    arrowIcons[0].parentElement.style.display = scrollValue > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display =  maxscrollwidth > scrollValue ? "flex" : "none";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click" , () => {
       tabbox.scrollLeft += icon.id === "left" ? -350 : 350;
       setTimeout( () => handleicons(), 50);
    });
});

const dragging = (e) => {
   if(!isDragging){
    tabbox.classList.add("dragging");
    tabbox.scrollLeft -= e.movementX;
   }
};
const dragstop = () => {
    isDragging = false
    tabbox.classList.remove("dragging");
};
tabbox.addEventListener("mousedoen",() => isDragging = true);
tabbox.addEventListener("mousemove", dragging );
tabbox.addEventListener("mouseup", dragstop );
