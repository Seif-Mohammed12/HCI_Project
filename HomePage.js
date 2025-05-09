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

        // Scroll detection to toggle navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const topPicks = [
    { title: "Laialy El 7elmia", image: "Assets/laialy El 7elmia.png" },
    { title: "Ragel W 6 staat", image: "Assets/Ragel W 6 staat.jpeg" },
    { title: "El Bakheel W Ana", image: "Assets/el bakheel w ana.jpeg" },
    { title: "Wanees Diaries", image: "Assets/Wanees Diaries.jpeg" },
    { title: "Abdelghafour", image: "Assets/abdelghafour.jpg" },
    { title: "Bakeeza & Zaghloul", image: "Assets/Bakeeza&zaghloul.jpeg" },
    { title: "3ssam W El Mwsba7", image: "Assets/3ssam w el mwsba7.jpeg" },
    { title: "Bogy & Tamtam", image: "Assets/bogy.jpeg" },
    { title: "Bassant & Diasty", image: "Assets/bassant & daiasty.jpeg" },
    { title: "Bakaar", image: "Assets/bakaar.jpeg" },
    { title: "3alm Sism Simsim", image: "Assets/3alm smsm.jpeg" },
    { title: "Super Henedy", image: "Assets/super.jpg" },
    { title: "Korombo", image: "Assets/korombo.jpeg" },
    { title: "3nab", image: "Assets/3nab.jpeg" },
    { title: "Al Noom Fi Asal", image: "Assets/el nom fel asal.jpg" },
    { title: "Elly Baly Balak", image: "Assets/eli baly balak.jpg" },
    { title: "3sal Eswed", image: "Assets/Asal eswed.jpg" }
  ];
  
  
  const topRated = [
    { title: "Welad Rizk", image: "Assets/welad rezk.jpg", quote: "انتوا فاكرين اني راقد على 2 مليون ولا فاكرين ان انا هاخدكوا من ايديكو و ننزل نعملنا كام مصلحة" },
    { title: "Welad Rizk 2", image: "Assets/welad rezk 2.jpg", quote: "احنا ولاد رزق ... نلفك في سجارة من غير تبه"},
    { title: "El Basha Telmeez", image: "Assets/el basha telmeez.jpg", quote: "حازم حازم .. بسيوني بسيوني" },
    { title: "Nems Bond", image: "Assets/nems bond.jpg", quote: "الرائد شريف النمس" },
    { title: "Teer Enta", image: "Assets/teer enta.jpg", quote: "بهيييج ... طير انت" },
    { title: "Samir W Shahir W Bahir", image: "Assets/samir w shahir w bahir.jpg", quote: "المرة الجاية يبقى فيها بيبسي يا سمير!" },
    { title: "La tarago3 wala estslam", image: "Assets/La tarago3 wala estslam.jpg", quote: "و اسمه حزمبول؟ و انت اسمك ايه؟ جيرمين .. اسم صايص ولا انت محصله جيهان ولا محصله نرمين"},
    { title: "El Nazer", image: "Assets/el nazer.jpg", quote: "و طرابيظات بلياردو و بينج"},
    { title: "X Large", image: "Assets/x large.jpg", quote: "والله م هسيبك .. اموت معاك"},
    { title: "Zaky Chan", image: "Assets/zaky chan.jpg", quote: "تفف و قال له؟ ايه الكلمة الغريبة دي"},
    { title: "Fool el Sen el 3azeem", image: "Assets/Fool el Sen el 3azeem.jpg", quote: "افتكر اني قولتلك بلاااش" },
    { title: "Teta Raheeba", image: "Assets/Teta Raheeba.jpg", quote: "انت لسة مركبتش سنترلوك؟ وحت للواجل و قالي خطو على الموتوو"},
    { title: "Yana ya 5alty", image: "Assets/yana ya 5alty.jpg", quote: "كلها بتاكل بروتينات و عارفة بعضها" },
    { title: "Omar W Salma", image: "Assets/omar w salma.jpg", quote: "اتت ترا بت تت ترا بت تت ادي"},
    { title: "Omar W Salma 2", image: "Assets/omar w salma 2.jpg", quote: "ماااشي .. مااشي يا سلمى يا بنت نوفل"},
    { title: "Wa2fet Regala", image: "Assets/wa2fet regala.jpg", quote: "يا شوهدييي"},
    { title: "El Badla", image: "Assets/el badla.jpg", quote: "انا في الحالات الزي دي بحب اسمع ساموزين جدا"},
    { title: "Amir el behar", image: "Assets/Amir el behar.jpg", quote: "انت بتعمل ايه عندك يا حيوان؟ .. باكل بليلة"},
    { title: "Morgan Ahmed Morgan", image: "Assets/morgan ahmed ahmed.jpg", quote: "ايتها الجماهير العريقة .. ايتها الجماهير العريقة .. لماذا جئتم ايتها الجماهير العريقة" },
    { title: "El Tagreba el Denemarkeya", image: "Assets/tagreba el denemarkeya.jpg", quote: "انيتا هنري جوتنبيرج"},
    { title: "3arees Mn Geha Amneya", image: "Assets/3arees mn geha amneya.jpg", quote: "انا بشتري حاجة تعيش العمر كله"},
    { title: "Harameya fy Thailand", image: "Assets/harameya fy thailand.jpg", quote: "باباك مسبليش حاجة خالص"},
    { title: "Abood 3al Hodood", image: "Assets/Abood 3al Hodood.jpg", quote: "هو كله ضرب ضرب مفيش شتيمة" },
    { title: "3askar fel Mo3askar", image: "Assets/3askar fel Mo3askar.jpg", quote: "و النعمة م انا دي اختي منى" },
    { title: "Hassan we Morkos", image: "Assets/Hassan we Morkos.jpg", quote: "ازيك يا شيخ حسن"},
    { title: "Katkoot", image: "Assets/katkoot.jpg", quote: "انا عايز بلاك تابول مع سودا مع كابتات حديدوز زائد ثاني اكسيد الكرتون زائد خل"},
    { title: "El Dada el Dody", image: "Assets/El Dada el Dody.jpg", quote: "م كفاية بقا يا لوجي" },
    { title: "Samir Abo el Nil", image: "Assets/Samir Abo el Nil.jpg", quote: "الفرختين دول انا عاينهم لرمضان الجي" },
    { title: "8aby mno Feeh", image: "Assets/8aby mno Feeh.jpg", quote: "يا سلطاااااااااان" },
    { title: "Abo el Araby", image: "Assets/Abo el Araby.jpg", quote: "خد اشرااااب .. بضاعة ببلاش و صاحبها راجل مغفل .. اشرب كتير؟ خد راحتك" }
  ];
  
  
  
  
  function renderCarousel(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    movies.forEach(movie => {
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

        // Show quote if available, otherwise show title
        title.textContent = movie.quote || movie.title;

        imageContainer.appendChild(image);
        imageContainer.appendChild(overlay);
        overlay.appendChild(title);
        card.appendChild(imageContainer);
        container.appendChild(card);
    });
}


  
  renderCarousel(topPicks, "topCarousel");
  renderCarousel(topRated, "Carousel");
  
  // Scroll functionality
  function setupScroll(btnLeftId, btnRightId, carouselId) {
    const leftBtn = document.getElementById(btnLeftId);
    const rightBtn = document.getElementById(btnRightId);
    const container = document.getElementById(carouselId);
  
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -400, behavior: "smooth" });
    });
  
    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: 400, behavior: "smooth" });
    });
  }
  
  setupScroll("topScrollLeft", "topScrollRight", "topCarousel");
  setupScroll("classicScrollLeft", "classicScrollRight", "Carousel");
  