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