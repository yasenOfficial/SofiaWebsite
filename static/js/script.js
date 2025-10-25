document.addEventListener('DOMContentLoaded', async () => {
    // ==========================
    // 1️⃣ Declare global variables
    // ==========================
    let currentIndex = -1;
    let visited = new Set();
    let streetViewOpen = false;
    let landmarks = [];

    // ==========================
    // 2️⃣ DOM Elements
    // ==========================
    const infoTitle = document.getElementById("infoTitle");
    const infoDesc = document.getElementById("infoDesc");
    const progressFill = document.getElementById("progressFill");
    const landmarkCounter = document.getElementById("landmarkCounter");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const toggleListBtn = document.getElementById("toggleListBtn");
    const closeListBtn = document.getElementById("closeListBtn");
    const list = document.getElementById("landmarkList");
    const listItems = document.getElementById("landmarkItems");
    const carouselContainer = document.getElementById("carouselContainer");
    const carouselInner = document.getElementById("carouselInner");
    const sv = document.getElementById("streetview");
    const toggleStreetViewBtn = document.getElementById("toggleStreetViewBtn");
    const heroBtn = document.getElementById('startTourBtnHero');

    // ==========================
    // 3️⃣ Initialize map
    // ==========================
    const map = L.map("map").setView([42.6977, 23.3219], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    // ==========================
    // 4️⃣ Fetch landmarks JSON
    // ==========================
    try {
        const response = await fetch('/landmarks.json');
        landmarks = await response.json();
    } catch (err) {
        console.error("Error loading landmarks JSON:", err);
        return;
    }

    // ==========================
    // 5️⃣ Initialize markers and list
    // ==========================
    landmarks.forEach((lm, i) => {
        // Marker
        const icon = L.divIcon({ className: `marker ${lm.icon}`, html: `<div class="icon-marker">${lm.icon}</div>` });
        const marker = L.marker([lm.lat, lm.lng], { icon }).addTo(map);
        marker.on("click", () => startTour(i));

        // List item
        const item = document.createElement('div');
        item.className = 'landmark-item';
        item.textContent = lm.name;
        item.onclick = () => startTour(i);
        listItems.appendChild(item);
    });

    // ==========================
    // 6️⃣ Functions
    // ==========================
    function updateProgress() {
        if (currentIndex < 0) return;
        const pct = ((currentIndex + 1) / landmarks.length) * 100;
        progressFill.style.width = `${pct}%`;
        landmarkCounter.textContent = `${currentIndex + 1} / ${landmarks.length}`;
    }

    function highlightList() {
        document.querySelectorAll('.landmark-item').forEach((el, idx) => {
            el.classList.toggle('bg-primary', idx === currentIndex);
            el.classList.toggle('text-white', idx === currentIndex);
        });
    }

    function populateCarousel(lm) {
        carouselInner.innerHTML = "";
        lm.images.forEach((src, idx) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "carousel-item" + (idx === 0 ? " active" : "");
            const img = document.createElement("img");
            img.src = src;
            img.className = "d-block w-100 h-100";
            img.style.objectFit = "cover";
            itemDiv.appendChild(img);
            carouselInner.appendChild(itemDiv);
        });
    }

    function showLandmark() {
        if (currentIndex < 0) return;
        const lm = landmarks[currentIndex];
        infoTitle.textContent = lm.name;
        infoDesc.textContent = lm.description;

        populateCarousel(lm);

        if (streetViewOpen) {
            sv.src = lm.embed;
            sv.classList.remove("d-none");
            sv.style.pointerEvents = "auto";
            carouselContainer.classList.add("d-none");
            toggleStreetViewBtn.innerHTML = `<i class="fas fa-street-view me-1"></i>Close Street`;
        } else {
            sv.classList.add("d-none");
            carouselContainer.classList.remove("d-none");
            toggleStreetViewBtn.innerHTML = `<i class="fas fa-street-view me-1"></i>View Street`;
        }

        map.getContainer().classList.add("d-none");
        toggleStreetViewBtn.classList.remove("d-none");
        highlightList();
        nextBtn.classList.remove('d-none');
        prevBtn.classList.remove('d-none');
    }

    function startTour(i) {
        currentIndex = i;
        visited.add(i);
        showLandmark();
        updateProgress();
    }

    function backToMap() {
        streetViewOpen = false;
        carouselContainer.classList.add("d-none");
        sv.classList.add("d-none");
        sv.style.pointerEvents = "none";
        map.getContainer().classList.remove("d-none");
        toggleStreetViewBtn.classList.add("d-none");

        infoTitle.textContent = "Welcome to Sofia's Heritage Walk";
        infoDesc.textContent = "Discover Sofia's landmarks by clicking any marker.";

        nextBtn.classList.add('d-none');
        prevBtn.classList.add('d-none');
    }

    function nextLandmark() {
        if (currentIndex < landmarks.length - 1) {
            currentIndex++;
            visited.add(currentIndex);
            showLandmark();
            updateProgress();
        }
    }

    function prevLandmark() {
        if (currentIndex > 0) {
            currentIndex--;
            visited.add(currentIndex);
            showLandmark();
            updateProgress();
        }
    }

    // ==========================
    // 7️⃣ Event listeners
    // ==========================
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            const welcomeSlide = document.getElementById('welcomeSlide');
            if (welcomeSlide) welcomeSlide.remove();
            startTour(0);
        });
    }

    toggleStreetViewBtn.onclick = () => {
        if (currentIndex < 0) return;
        streetViewOpen = !streetViewOpen;
        showLandmark();
    };

    nextBtn.onclick = nextLandmark;
    prevBtn.onclick = prevLandmark;
    toggleListBtn.onclick = () => list.classList.toggle('d-none');
    if (closeListBtn) closeListBtn.onclick = () => list.classList.add('d-none');

    // ==========================
    // 8️⃣ Start initial state
    // ==========================
    backToMap();
});
