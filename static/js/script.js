document.addEventListener('DOMContentLoaded', () => {
    const landmarks = [
        {
            name: "National Palace of Culture (NDK)",
            lat: 42.6872,
            lng: 23.3195,
            icon: "ndk",
            description: "The largest congress center in Southeastern Europe.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031576111!6m8!1m7!1sCAoSLEFGMVFpcE1rZHRLRFl1d0J6Tkp5WlpoRkRpaXg4U0xFZ3RlY1RLZ1JRTlFf!2m2!1d42.6872!2d23.3195!3f0!4f0!5f0.7820865974627469", // replace with correct embed
            images: [
                "https://placehold.co/800x400?text=NDK+1",
                "https://placehold.co/800x400?text=NDK+2",
                "https://placehold.co/800x400?text=NDK+3"
            ]
        },
        {
            name: "Vitosha Boulevard",
            lat: 42.6977,
            lng: 23.3229,
            icon: "vitoshka",
            description: "Popular pedestrian street for shopping and cafes.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031600000!6m8!1m7!1sCAoSLEFGMVFpcE1OQ0x4T2h3c2VqYmR0VkJXN2FNb0R6TVJnd2xPb0JGT1NY!2m2!1d42.6977!2d23.3229!3f0!4f0!5f0.7820865974627469", // replace with correct embed
            images: [
                "https://placehold.co/800x400?text=Vitosha+1",
                "https://placehold.co/800x400?text=Vitosha+2"
            ]
        },
        {
            name: "Serdica",
            lat: 42.69745,
            lng: 23.32133,
            icon: "serdica",
            description: "Remains of the Roman city with ruins and archaeological sites.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031650000!6m8!1m7!1sCAoSLEFGMVFpcE0xQ1lQd0xwYkJkMEFYeHplWlBxSVZ3NVNKRmI4ZFBPTVh5TUx5!2m2!1d42.69745!2d23.32133!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Serdica+1",
                "https://placehold.co/800x400?text=Serdica+2"
            ]
        },
        {
            name: "Rotunda St. George",
            lat: 42.6963,
            lng: 23.3241,
            icon: "rotondata",
            description: "Oldest preserved building in Sofia dating back to the 4th century.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031700000!6m8!1m7!1sCAoSLEFGMVFpcE9jRjZocjI0c1p4a2JHV3NZc3cwT2l6eGhTRGVvT0I3ZXZwb1Jx!2m2!1d42.6963!2d23.3241!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Rotunda+1",
                "https://placehold.co/800x400?text=Rotunda+2"
            ]
        },
        {
            name: "The Baths",
            lat: 42.6972,
            lng: 23.3219,
            icon: "banite",
            description: "Historic public baths built during Ottoman period.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031750000!6m8!1m7!1sCAoSLEFGMVFpcE9yWnVjQ0ZqTlVqQ3BNRUZnVnh6R3ZITlpoU1pOZ3RzZjR5NWtq!2m2!1d42.6972!2d23.3219!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Baths+1",
                "https://placehold.co/800x400?text=Baths+2"
            ]
        },
        {
            name: "St. Alexander Nevsky Cathedral",
            lat: 42.6958,
            lng: 23.3320,
            icon: "nevski",
            description: "Iconic Orthodox cathedral with golden domes.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031800000!6m8!1m7!1sCAoSLEFGMVFpcE5zOGs4VnhvVlF0MGFjZk1qRkNadXc4RjBlQzY0aWJpS3RpNlFZ!2m2!1d42.6958!2d23.3320!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Nevski+1",
                "https://placehold.co/800x400?text=Nevski+2"
            ]
        },
        {
            name: "Library",
            lat: 42.6967,
            lng: 23.3269,
            icon: "biblioteka",
            description: "Largest library in Bulgaria.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031850000!6m8!1m7!1sCAoSLEFGMVFpcE5rRG9wUDFWbVZqZjhBcjZQV0RTZVZScXJrRGxka1dEN09U!2m2!1d42.6967!2d23.3269!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Library+1",
                "https://placehold.co/800x400?text=Library+2"
            ]
        },
        {
            name: "University",
            lat: 42.6975,
            lng: 23.3234,
            icon: "universitet",
            description: "Bulgaria’s oldest university.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031900000!6m8!1m7!1sCAoSLEFGMVFpcE1Ud2dKX0pKZkpYZ3JHaDFiV0l0bXNRNGpIY1RVTU1hY1R6!2m2!1d42.6975!2d23.3234!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=University+1",
                "https://placehold.co/800x400?text=University+2"
            ]
        },
        {
            name: "Tech Park",
            lat: 42.6833,
            lng: 23.3100,
            icon: "techpark",
            description: "Modern tech hub and innovation center.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698031900000!6m8!1m7!1sCAoSLEFGMVFpcE1Ud2dKX0pKZkpYZ3JHaDFiV0l0bXNRNGpIY1RVTU1hY1R6!2m2!1d42.6975!2d23.3234!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Tech+Park+1",
                "https://placehold.co/800x400?text=Tech+Park+2"
            ]
        },
        {
            name: "Bell Towers",
            lat: 42.6830,
            lng: 23.3150,
            icon: "kambani",
            description: "Famous bell towers with panoramic views.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698032000000!6m8!1m7!1sCAoSLEFGMVFpcE1aQVhOblRuQ1l2RjU2d3BQT1hpYXp6ak1LaEdhU2tZT1ps!2m2!1d42.6830!2d23.3150!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Bell+Towers+1",
                "https://placehold.co/800x400?text=Bell+Towers+2"
            ]
        },
        {
            name: "Boyana Church",
            lat: 42.6414,
            lng: 23.3141,
            icon: "boyana",
            description: "UNESCO site with medieval frescoes.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698032050000!6m8!1m7!1sCAoSLEFGMVFpcE0zV2Rma2FqdHdjRnE1d2Z5WlR1bXZ1aEdJVGJZZlRiaFNZ!2m2!1d42.6414!2d23.3141!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Boyana+1",
                "https://placehold.co/800x400?text=Boyana+2"
            ]
        },
        {
            name: "Kopito Viewpoint",
            lat: 42.6628,
            lng: 23.2717,
            icon: "kopito",
            description: "Scenic viewpoint on Vitosha Mountain.",
            embed: "https://www.google.com/maps/embed?pb=!4v1698032100000!6m8!1m7!1sCAoSLEFGMVFpcE1oTk1rN0t3M1pFZ0diM2ZUaUJSZk0xX2VnTkhsN1dHTjZV!2m2!1d42.6628!2d23.2717!3f0!4f0!5f0.7820865974627469",
            images: [
                "https://placehold.co/800x400?text=Kopito+1",
                "https://placehold.co/800x400?text=Kopito+2"
            ]
        }
    ];





    const map = L.map("map").setView([42.6977, 23.3219], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    let currentIndex = -1;
    let visited = new Set();
    let streetViewOpen = false; // new flag to track Street View state

    // DOM Elements
    const infoTitle = document.getElementById("infoTitle");
    const infoDesc = document.getElementById("infoDesc");
    const progressFill = document.getElementById("progressFill");
    const landmarkCounter = document.getElementById("landmarkCounter");
    const startBtn = document.getElementById("startTourBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const backBtn = document.getElementById("backToMapBtn");
    const toggleListBtn = document.getElementById("toggleListBtn");
    const closeListBtn = document.getElementById("closeListBtn");
    const list = document.getElementById("landmarkList");
    const listItems = document.getElementById("landmarkItems");
    const carouselContainer = document.getElementById("carouselContainer");
    const carouselInner = document.getElementById("carouselInner");
    const sv = document.getElementById("streetview");
    const toggleStreetViewBtn = document.getElementById("toggleStreetViewBtn");

    // Initialize markers and list
    landmarks.forEach((lm, i) => {
        const icon = L.divIcon({ className: `marker ${lm.icon}`, html: `<div class="icon-marker">${lm.icon}</div>` });
        const marker = L.marker([lm.lat, lm.lng], { icon }).addTo(map);
        marker.on("click", () => startTour(i));

        const item = document.createElement('div');
        item.className = 'landmark-item';
        item.textContent = lm.name;
        item.onclick = () => startTour(i);
        listItems.appendChild(item);
    });

function updateProgress() {
    // currentIndex can be negative or exceed landmarks.length - 1
    const pct = ((currentIndex + 1) / landmarks.length) * 100;
    progressFill.style.width = `${pct}%`;
    
    // Show index with 1-based count, allowing 0 and 12
    const displayIndex = currentIndex + 1;
    landmarkCounter.textContent = `${displayIndex} / ${landmarks.length}`;
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
        const lm = landmarks[currentIndex];
        infoTitle.textContent = lm.name;
        infoDesc.textContent = lm.description;

        populateCarousel(lm);

        if (streetViewOpen) {
            sv.src = lm.embed;
            sv.classList.remove("d-none");
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

        startBtn.classList.add('d-none');
        nextBtn.classList.remove('d-none');
        prevBtn.classList.remove('d-none');
        backBtn.classList.remove('d-none');
    }

    function startTour(i) {
        currentIndex = i;
        visited.add(i);
        showLandmark();
        updateProgress();
    }

    function backToMap() {
        streetViewOpen = false; // reset Street View state
        carouselContainer.classList.add("d-none");
        sv.classList.add("d-none");
        map.getContainer().classList.remove("d-none");
        toggleStreetViewBtn.classList.add("d-none");

        infoTitle.textContent = "Welcome to Sofia's Heritage Walk";
        infoDesc.textContent = "Discover Sofia's landmarks by clicking any marker.";

        startBtn.classList.remove('d-none');
        nextBtn.classList.add('d-none');
        prevBtn.classList.add('d-none');
        backBtn.classList.add('d-none');
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

    toggleStreetViewBtn.onclick = () => {
        if (currentIndex < 0) return;
        streetViewOpen = !streetViewOpen;
        showLandmark(); // update UI based on new state
    };

    startBtn.onclick = () => startTour(0);
    nextBtn.onclick = nextLandmark;
    prevBtn.onclick = prevLandmark;
    backBtn.onclick = backToMap;
    toggleListBtn.onclick = () => list.classList.toggle('d-none');
    if (closeListBtn) closeListBtn.onclick = () => list.classList.add('d-none');

    updateProgress();
});