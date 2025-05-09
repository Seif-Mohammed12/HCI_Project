const movies = [
    { title: "El Bakheel W Ana", category: "comedy", image: "Assets/el bakheel w ana.jpeg" },
    { title: "Wanees Diaries", category: "drama", image: "Assets/Wanees Diaries.jpeg" },
    { title: "3alm Smsm", category: "animation", image: "Assets/3alm smsm.jpeg" },
    { title: "Abdelghafour", category: "drama", image: "Assets/abdelghafour.jpg" },
    { title: "Korombo", category: "animation", image: "Assets/korombo.jpeg" },
    { title: "Ragel W 6 staat", category: "comedy", image: "Assets/Ragel W 6 staat.jpeg" },
    { title: "Laialy El 7elmia", category: "drama", image: "Assets/laialy El 7elmia.png" },
    { title: "Super Hekaya", category: "action", image: "Assets/super.jpg" },
    { title: "Bassant & Diasty", category: "animation", image: "Assets/bassant & daiasty.jpeg" },
    { title: "Bogy & Tamtam", category: "animation", image: "Assets/bogy.jpeg" },
    { title: "Bakeeza & Zaghloul", category: "comedy", image: "Assets/Bakeeza&zaghloul.jpeg" },
    { title: "3ssam W El Mwsba7", category: "animation", image: "Assets/3ssam w el mwsba7.jpeg" },
    { title: "Bakaar", category: "animation", image: "Assets/bakaar.jpeg" },
    { title: "Welad Rizk", category: "action", image: "Assets/welad rezk.jpg" },
    { title: "Welad Rizk 2", category: "action", image: "Assets/welad rezk 2.jpg" },
    { title: "El Basha Telmeez", category: "comedy", image: "Assets/el basha telmeez.jpg" },
    { title: "Nems Bond", category: "comedy", image: "Assets/nems bond.jpg" },
    { title: "Teer Enta", category: "comedy", image: "Assets/teer enta.jpg" },
    { title: "Samir W Shahir W Bahir", category: "comedy", image: "Assets/samir w shahir w bahir.jpg" },
    { title: "La tarago3 wala estslam", category: "action", image: "Assets/La tarago3 wala estslam.jpg" },
    { title: "El Nazer", category: "comedy", image: "Assets/el nazer.jpg" },
    { title: "X Large", category: "comedy", image: "Assets/x large.jpg" },
    { title: "Zaky Chan", category: "comedy", image: "Assets/zaky chan.jpg" },
    { title: "Fool el Sen el 3azeem", category: "comedy", image: "Assets/Fool el Sen el 3azeem.jpg" },
    { title: "Teta Raheeba", category: "family", image: "Assets/Teta Raheeba.jpg" },
    { title: "Yana ya 5alty", category: "comedy", image: "Assets/yana ya 5alty.jpg" },
    { title: "Omar W Salma", category: "comedy", image: "Assets/omar w salma.jpg" },
    { title: "Omar W Salma 2", category: "comedy", image: "Assets/omar w salma 2.jpg" },
    { title: "Wa2fet Regala", category: "comedy", image: "Assets/wa2fet regala.jpg" },
    { title: "El Badla", category: "action", image: "Assets/el badla.jpg" },
    { title: "Amir el behar", category: "comedy", image: "Assets/Amir el behar.jpg" },
    { title: "Morgan Ahmed Morgan", category: "comedy", image: "Assets/morgan ahmed ahmed.jpg" },
    { title: "El Tagreba el Denemarkeya", category: "comedy", image: "Assets/tagreba el denemarkeya.jpg" },
    { title: "3arees Mn Geha Amneya", category: "comedy", image: "Assets/3arees mn geha amneya.jpg" },
    { title: "Harameya fy Thailand", category: "comedy", image: "Assets/harameya fy thailand.jpg" },
    { title: "Abood 3al Hodood", category: "comedy", image: "Assets/Abood 3al Hodood.jpg" },
    { title: "3askar fel Mo3askar", category: "comedy", image: "Assets/3askar fel Mo3askar.jpg" },
    { title: "Hassan we Morkos", category: "drama", image: "Assets/Hassan we Morkos.jpg" },
    { title: "El Lemby", category: "comedy", image: "Assets/El Lemby.jpg" },
    { title: "El Dada el Dody", category: "family", image: "Assets/El Dada el Dody.jpg" },
    { title: "Samir Abo el Nil", category: "comedy", image: "Assets/Samir Abo el Nil.jpg" },
    { title: "8aby mno Feeh", category: "comedy", image: "Assets/8aby mno Feeh.jpg" },
    { title: "Abo el Araby", category: "comedy", image: "Assets/Abo el Araby.jpg" },
    { title: "Elly Baly Balak", category: "comedy", image: "Assets/eli baly balak.jpg" },
    { title: "Al Noom Fi Asal", category: "drama", image: "Assets/el nom fel asal.jpg" },
    { title: "3nab", category: "comedy", image: "Assets/3nab.jpeg" }
  ];
  
  
  const carousel = document.getElementById("movieCarousel");
  const searchInput = document.getElementById("movieSearch");
  const tabs = document.querySelectorAll(".tab");
  
  function displayMovies(filterCategory = "all", searchTerm = "") {
    carousel.innerHTML = "";
    const filtered = movies.filter(movie => {
      const matchesCategory = filterCategory === "all" || movie.category === filterCategory;
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  
    filtered.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
  
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
  
      const image = document.createElement("img");
      image.src = movie.image;
      image.alt = movie.title;
  
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
  
      const title = document.createElement("span");
      title.classList.add("movie-title");
      title.textContent = movie.title;
  
      overlay.appendChild(title);
      imageContainer.appendChild(image);
      imageContainer.appendChild(overlay);
      card.appendChild(imageContainer);
      carousel.appendChild(card);
    });
  }
  
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      displayMovies(tab.dataset.category, searchInput.value);
    });
  });
  
  searchInput.addEventListener("input", () => {
    const activeTab = document.querySelector(".tab.active");
    displayMovies(activeTab.dataset.category, searchInput.value);
  });
  
  // Carousel scroll buttons
  document.getElementById("scrollLeft").addEventListener("click", () => {
    carousel.scrollBy({ left: -400, behavior: "smooth" });
  });
  
  document.getElementById("scrollRight").addEventListener("click", () => {
    carousel.scrollBy({ left: 400, behavior: "smooth" });
  });
  
  // Initial load
  displayMovies();

    // Create animated stars in the background
    document.addEventListener('DOMContentLoaded', function() {
        const starsContainer = document.getElementById('stars');
        const starCount = 200;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random pos
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 3 + 2; // Random size between 2 and 5
            const delay = Math.random() * 3;
            const duration = 2 + Math.random() * 3;
            
            star.style.left = `${posX}%`;
            star.style.top = `${posY}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
            
            starsContainer.appendChild(star);
        }
    });
  