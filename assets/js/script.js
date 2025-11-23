// 1.=========================================================================== DATA PROYEK ANDA =======================================================================//

const allProjects = {
  // Proyek 1 (Tipe: Video)
"proyek1": {
    mediaType: "video", // "video" atau "image"
    client: "PT Moya Indonesia",
    services: "Product Design, and Development",
    videoUrl: "https://www.youtube.com/embed/ScQllP5L6HE", // URL Embed YouTube
    webUrl: "https://www.youtube.com/watch?v=ScQllP5L6HE", // Link tombol "WebGIS"
    overview: "Web design encompasses the process of creating and designing websites It involves a combination of different skills and disciplines to produce a visually appealing and user-friendly website. Here's an overview of key aspects of web design.",
    img1: "assets/img/projects/project-details-2.png", // Gambar kecil 1
    img2: "assets/img/projects/project-details-3.png", // Gambar kecil 2
    mainImageUrl: null, // Kosongkan jika "video"
    
// Konten HTML untuk "Challenges" & "Results"
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
    <p>Web design comes with its own set of challenges, ranging from technical issues to user
        experience considerations. Here are some common challenges faced by web designers. Web design
        encompasses the process of creating and designing websites It involves a combination of
        different skills and disciplines to produce a visually appealing and user-friendly website.
        Here's an overview of key aspects of web design.</p>
    <h5 class="more-info-subtitle">Responsive Design:</h5>
    <ul class="list-unstyled">
        <li>
        <b>Challenge:</b> Ensuring that a website looks and functions well on various devices and
        screen
        sizes.
        </li>
        <li>
        <b>Solution:</b> Use responsive design techniques, such as flexible grids and media queries.
        </li>
    </ul>
    <h5 class="more-info-subtitle">Browser Compatibility:
    </h5>
    <ul class="list-unstyled">
        <li>
        <b>Challenge:</b> Different browsers may interpret code differently, leading to
        inconsistencies
        in the website's appearance.
        </li>
        <li>
        <b>Solution:</b> Test the website on multiple browsers and use compatibility libraries or
        polyfills when necessary.
        </li>
    </ul>
    <h3 class="more-info-title">Results/Conclusion</h3>
    <p>The website design and development for FlexiFlow successfully achieved its objectives, leading
        to increased user engagement, improved conversion rates, and positive feedback from the target
        audience.</p>
    `
},

  // Proyek 2 (Tipe: Gambar)
"proyek2": {
    mediaType: "image", // "video" atau "image"
    client: "Nama Klien Proyek 2",
    services: "WebGIS, Photogrammetry",
    videoUrl: null, // Kosongkan jika "image"
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "Ini adalah deskripsi singkat untuk proyek kedua. Ganti dengan overview Anda.",
    img1: "assets/img/projects/project-details-2.png", // Gambar kecil 1
    img2: "assets/img/projects/project-details-3.png", // Gambar kecil 2
    mainImageUrl: "assets/img/projects/project-1.png", // <-- GANTI DENGAN GAMBAR UTAMA ANDA
    
    // Konten HTML untuk "Challenges" & "Results"
    detailsHtml: `
	<h3 class="more-info-title">Challenges</h3>
    <p>Tantangan untuk Proyek 2 SANGAT BERBEDA. Kami harus mengintegrasikan data drone...</p>
    <h5 class="more-info-subtitle">Integrasi Data:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Data drone dari berbagai penerbangan tidak sinkron.</li>
        <li><b>Solution:</b> Menggunakan script Python untuk otomatisasi dan GCP terukur.</li>
    </ul>
    <h5 class="more-info-subtitle">Visualisasi:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Ukuran file WebGIS terlalu besar.</li>
        <li><b>Solution:</b> Melakukan tiling dan kompresi data.</li>
    </ul>
    <h3 class="more-info-title">Results/Conclusion</h3>
    <p>Hasilnya, klien dapat memonitor aset mereka secara real-time melalui platform WebGIS yang responsif, mengurangi biaya survei lapangan hingga 40%.</p>
    `
},

  // Proyek 3
"proyek3": {
    mediaType: "image", // "video" atau "image"
    client: "Nama Klien Proyek 3",
    services: "WebGIS, Photogrammetry",
    videoUrl: null, // Kosongkan jika "image"
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "Ini adalah deskripsi singkat untuk proyek kedua. Ganti dengan overview Anda.",
    img1: "assets/img/projects/project-details-2.png", // Gambar kecil 1
    img2: "assets/img/projects/project-details-3.png", // Gambar kecil 2
    mainImageUrl: "assets/img/projects/project-1.png", // <-- GANTI DENGAN GAMBAR UTAMA ANDA
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
    <p>Tantangan untuk Proyek 3 SANGAT BERBEDA. Kami harus mengintegrasikan data drone...</p>
    <h5 class="more-info-subtitle">Integrasi Data:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Data drone dari berbagai penerbangan tidak sinkron.</li>
        <li><b>Solution:</b> Menggunakan script Python untuk otomatisasi dan GCP terukur.</li>
    </ul>
    <h5 class="more-info-subtitle">Visualisasi:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Ukuran file WebGIS terlalu besar.</li>
        <li><b>Solution:</b> Melakukan tiling dan kompresi data.</li>
    </ul>
    <h3 class="more-info-title">Results/Conclusion</h3>
    <p>Hasilnya, klien dapat memonitor aset mereka secara real-time melalui platform WebGIS yang responsif, mengurangi biaya survei lapangan hingga 40%.</p>
    `
},

  // Proyek 4
"proyek4": {
    mediaType: "image", // "video" atau "image"
    client: "Nama Klien Proyek 4",
    services: "WebGIS, Photogrammetry",
    videoUrl: null, // Kosongkan jika "image"
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "Ini adalah deskripsi singkat untuk proyek kedua. Ganti dengan overview Anda.",
    img1: "assets/img/projects/project-details-2.png", // Gambar kecil 1
    img2: "assets/img/projects/project-details-3.png", // Gambar kecil 2
    mainImageUrl: "assets/img/projects/project-1.png", // <-- GANTI DENGAN GAMBAR UTAMA ANDA
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
    <p>Tantangan untuk Proyek 4 SANGAT BERBEDA. Kami harus mengintegrasikan data drone...</p>
    <h5 class="more-info-subtitle">Integrasi Data:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Data drone dari berbagai penerbangan tidak sinkron.</li>
        <li><b>Solution:</b> Menggunakan script Python untuk otomatisasi dan GCP terukur.</li>
    </ul>
    <h5 class="more-info-subtitle">Visualisasi:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Ukuran file WebGIS terlalu besar.</li>
        <li><b>Solution:</b> Melakukan tiling dan kompresi data.</li>
    </ul>
    <h3 class="more-info-title">Results/Conclusion</h3>
    <p>Hasilnya, klien dapat memonitor aset mereka secara real-time melalui platform WebGIS yang responsif, mengurangi biaya survei lapangan hingga 40%.</p>
    `
},

  // Proyek 5
"proyek5": {
    mediaType: "image", // "video" atau "image"
    client: "Nama Klien Proyek 5",
    services: "WebGIS, Photogrammetry",
    videoUrl: null, // Kosongkan jika "image"
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "Ini adalah deskripsi singkat untuk proyek kedua. Ganti dengan overview Anda.",
    img1: "assets/img/projects/project-details-2.png", // Gambar kecil 1
    img2: "assets/img/projects/project-details-3.png", // Gambar kecil 2
    mainImageUrl: "assets/img/projects/project-1.png", // <-- GANTI DENGAN GAMBAR UTAMA
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
    <p>Tantangan untuk Proyek 2 SANGAT BERBEDA. Kami harus mengintegrasikan data drone...</p>
    <h5 class="more-info-subtitle">Integrasi Data:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Data drone dari berbagai penerbangan tidak sinkron.</li>
        <li><b>Solution:</b> Menggunakan script Python untuk otomatisasi dan GCP terukur.</li>
    </ul>
    <h5 class="more-info-subtitle">Visualisasi:</h5>
    <ul class="list-unstyled">
        <li><b>Challenge:</b> Ukuran file WebGIS terlalu besar.</li>
        <li><b>Solution:</b> Melakukan tiling dan kompresi data.</li>
    </ul>
    <h3 class="more-info-title">Results/Conclusion</h3>
    <p>Hasilnya, klien dapat memonitor aset mereka secara real-time melalui platform WebGIS yang responsif, mengurangi biaya survei lapangan hingga 40%.</p>
    `
	},
};

// ================================================================================== KODE FUNGSI UTAMA  =================================================================================//

(function ($) {
"use strict";

// Theme color control js
$(document).ready(function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    $('body').toggleClass('dark-theme', isDarkMode);

    $('#page-content').fadeIn(0);

    $('.theme-control-btn').on("click", function () {
    $('body').toggleClass('dark-theme');

    const isDark = $('body').hasClass('dark-theme');
    localStorage.setItem('darkMode', isDark);
    });

    // Email copy button tooltip js (Digabungkan ke sini)
    $(".btn-copy").on("click", function () {
    $(this).addClass("active");

    setTimeout(() => {
        $(this).removeClass("active");
    }, 1000);
});


// 2. ========================================================================== KODE MEMUAT DATA PROYEK SECARA DINAMIS  ===============================================================//

    if ($('#project-client').length) { 

// 1. Dapatkan URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id'); // Ini akan mengambil 'proyek1', 'proyek2', dll.

// 2. Temukan data proyek yang sesuai dari 'allProjects'
    const projectData = allProjects[projectId];

// 3. Masukkan data ke dalam elemen HTML
    if (projectData) {
        
// --- LOGIKA UNTUK VIDEO / GAMBAR ---
    if (projectData.mediaType === 'video') {
          // Jika ini proyek VIDEO:
        $('#project-video').attr('src', projectData.videoUrl);
        $('#project-main-image').remove(); // Hapus elemen gambar
    } 
    else if (projectData.mediaType === 'image') {
// Jika ini proyek GAMBAR:
        $('#project-main-image').attr('src', projectData.mainImageUrl);
        $('#project-video').remove(); // Hapus elemen video
        
// Hapus juga styling CSS 16:9 agar gambar tidak terpotong
        $('.main-image').css({
            'position': 'static',
            'padding-top': '0',
            'height': 'auto'
        });
    }
// --- AKHIR LOGIKA MEDIA ---
// --- ISI SISA DATA ---
        $('#project-client').text(projectData.client);
        $('#project-services').text(projectData.services);
        $('#project-web-url').attr('href', projectData.webUrl);
        $('#project-overview').text(projectData.overview);
        $('#project-img1').attr('src', projectData.img1);
        $('#project-img2').attr('src', projectData.img2);
        
// --- ISI KONTEN HTML (CHALLENGES/RESULTS) ---
        $('#project-details-content').html(projectData.detailsHtml);
		

// ========================================================================= LOGIKA BARU UNTUK TOMBOL PREV/NEXT ======================================================================//

    const prevButton = $('#prev-project-btn');
    const nextButton = $('#next-project-btn');
        
// Ambil semua ID proyek dalam urutan dari object allProjects
    const projectIds = Object.keys(allProjects);
// Cari index (posisi) proyek saat ini
    const currentIndex = projectIds.indexOf(projectId); // Gunakan projectId yang sudah ada

// Atur tombol Previous
    if (currentIndex > 0) { // Jika bukan proyek pertama
    const prevProjectId = projectIds[currentIndex - 1];
// Tambahkan event listener untuk klik
        prevButton.on('click', function() {
// Arahkan ke halaman detail proyek sebelumnya
            window.location.href = `portfolio-details.html?id=${prevProjectId}`;
        });
          prevButton.prop('disabled', false); // Aktifkan tombol
    } else {
// Jika ini proyek pertama, nonaktifkan tombol Previous
        prevButton.prop('disabled', true); 
          prevButton.off('click'); // Hapus event listener sebelumnya (jika ada)
    }

// Atur tombol Next
    if (currentIndex < projectIds.length - 1) { // Jika bukan proyek terakhir
        const nextProjectId = projectIds[currentIndex + 1];
        // Tambahkan event listener untuk klik
        nextButton.on('click', function() {
            // Arahkan ke halaman detail proyek berikutnya
            window.location.href = `portfolio-details.html?id=${nextProjectId}`;
        });
          nextButton.prop('disabled', false); // Aktifkan tombol
        } else {
        nextButton.prop('disabled', true);
        nextButton.off('click'); // Hapus event listener sebelumnya (jika ada)
        }

// =========================================================================== AKHIR LOGIKA PREV/NEXT ============================================================================//

    } else {
        // Opsional: Tampilkan pesan jika ID proyek tidak ditemukan atau salah ketik
        $('.portfolio-details-area').html("<h1 style='color: red; text-align: center;'>Error: Proyek tidak ditemukan.</h1><p style='text-align: center;'>Pastikan ID di `portfolio.html` sudah benar.</p>");
    }
}

// ========================================================================= AKHIR DARI KODE DINAMIS=======================================================================================//

  }); // <-- Akhir dari $(document).ready()

  // Mobile menu control js
	$(".mobile-menu-control-bar").on("click", function () {
    $(".mobile-menu-overlay").addClass("show");
    $(".navbar-main").addClass("show");
})
	$(".mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay").removeClass("show");
    $(".navbar-main").removeClass("show");
})

// Parallax scroll effect js
	document.querySelectorAll(".move-with-cursor").forEach(a => {
    document.addEventListener("mousemove", function (e) {
    	var t = e.clientX,
        e = e.clientY;
      a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", a.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`
    })
}),

// Email copy button js
    new ClipboardJS('.btn-copy');

  // Client feedback slider js
$(".client-feedback-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
    nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
    responsive: [{
    breakpoint: 768,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    	}
	},]
});

// Article publications slider js
$(".article-publications-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
    nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
    responsive: [{
    breakpoint: 768,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
    },]
});

// ========================================================== PERBAIKAN: Inisialisasi Magnific Popup (Galeri Gambar) ============================================================//

$(".parent-container").magnificPopup({
    delegate: "a.gallery-popup", // cari link dengan class 'gallery-popup'
    type: "image", // tipe konten adalah gambar
    gallery: {
      enabled: true, // aktifkan mode galeri (agar bisa slide)
    },
});

})(jQuery);

function updateClockWidget() {
	const now = new Date();
let h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	const ampm = h >= 12 ? 'PM' : 'AM';
	h = h % 12 || 12;


if (document.getElementById('hours')) {
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
	}
}

if (document.getElementById('hours')) {
	setInterval(updateClockWidget, 1000);
	updateClockWidget();
}

// ===================================================================== PORTFOLIO MAP ===============================================================================================//

window.addEventListener("load", function () {
const mapContainer = document.getElementById("projectsMap");
if (!mapContainer) return;

const projectLocations = [
    { id: "proyek1", title: "FlowArch - Architecture Service Website", lat: -6.175392,          lng: 106.827153 },
    { id: "proyek2", title: "FlowSaaS - SaaS Application Tools",       lat: -7.250445,          lng: 112.768845 },
    { id: "proyek3", title: "AIMug - AI Writing Application Tools",    lat: -7.797068,          lng: 110.370529 },
    { id: "proyek4", title: "AIMug - Aceh Project",                    lat: 4.271756723904168,  lng: 97.2123131856845 },
];

const map = L.map("projectsMap", {
    zoomControl: true,
    scrollWheelZoom: true,
}).setView([-4.902855966527533, 109.73672719899567], 1);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 5,
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap",
}).addTo(map);


projectLocations.forEach((p) => {
    L.marker([p.lat, p.lng])
            .addTo(map)
            .bindPopup(`
            <b>${p.title}</b><br/>
            <a href="portfolio-details.html?id=${p.id}">View detail</a>
        `);
});

function fixMapSize(){ map.invalidateSize(true); }
fixMapSize();
setTimeout(fixMapSize, 200);
setTimeout(fixMapSize, 600);
window.addEventListener("resize", fixMapSize);

// Auto zoom ke semua marker
if (projectLocations.length > 1) {
        const bounds = L.latLngBounds(projectLocations.map(p => [p.lat, p.lng]));
        map.fitBounds(bounds, { padding: [30, 30] });
    }
});