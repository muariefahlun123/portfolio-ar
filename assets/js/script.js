// 1.=========================================================================== DATA PROYEK ANDA =======================================================================//

const allProjects = {

// Proyek (Tipe: Gambar)
"project1": {
    mediaType: "image",
    client: "Nirwana Hills Serpong",
    services: "Photogrammetry",
    videoUrl: null,
    webUrl: "https://monitoring-project-rho.vercel.app",
    overview: "The Orthophoto Nirwana Hill Serpong project involved aerial data acquisition over an 18-hectare area using a DJI Phantom 4 Pro V2. The flight mission was planned with a structured mapping strategy to ensure optimal overlap and high-quality photogrammetry results. The project produced a 2.1 cm/pixel orthomosaic, along with a Digital Surface Model (DSM) and Digital Elevation Model (DEM) to support topographic analysis, construction planning, and site monitoring.",
    date: "Nov-Des 2025",
    extraLargeImg: "assets/img/projects/project_nh.png",
    img1: "assets/img/projects/NirwanaHill1.png", 
    img2: "assets/img/projects/NirwanaHill2.png", 
    mainImageUrl: "assets/img/projects/NirwanaHill.png",
    

    detailsHtml: `
	<h3 class="more-info-title">Challenges</h3>
    <p>The challenges in Project were significantly more complex. We had to integrate drone data from multiple flight missions, ensure consistent elevation accuracy across all datasets, and manage the large high-resolution orthomosaic files to keep them efficient and fully optimized for WebGIS visualization.</p>
    <h5 class="more-info-subtitle">Data Integration :</h5>
    <ul class="list-unstyled">
        <li>The primary challenge in this project was that drone imagery captured across multiple flight missions was not fully synchronized due to variations in flight paths, 
        lighting conditions, and on-site constraints. To address this, Ground Control Points (GCPs) were applied alongside an automated Python-based alignment workflow,
        ensuring consistent georeferencing and reliable elevation accuracy across all datasets</li>
    </ul>
    <h5 class="more-info-subtitle">Visualization :</h5>
    <ul class="list-unstyled">
        <li> A key challenge in this project was the exceptionally large file sizes of the orthomosaic, DSM, and DEM outputs, 
        which made them difficult to load and visualize smoothly on a WebGIS platform. To overcome this, raster tiling, compression, and layer optimization techniques were applied,
        effectively reducing file size while preserving visual quality and enabling fast, responsive WebGIS performance.</li>
    </ul>
    <h3 class="more-info-title">Results</h3>
    <p>The project successfully delivered a high-resolution orthomosaic (2.1 cm/pixel), DSM, and DEM with reliable accuracy for topographic and construction-related analyses. 
    After optimization, all spatial layers were integrated into a responsive WebGIS platform, 
    enabling the client to monitor site conditions in real time and streamline decision-making throughout the development process.</p>
    `
},

// Proyek (Tipe: Video)
"project2": {
    mediaType: "video",
    client: "PT Moya Indonesia",
    services: "Videography",
    videoUrl: "https://www.youtube.com/embed/ScQllP5L6HE",
    webUrl: "https://www.google.com/maps/d/u/0/viewer?mid=1U17hBxpj1fRdctK1vZIwymRZa-h4c-k&ll=-7.1674715247373255%2C111.87734117480468&z=10", 
    overview: "This project involved conducting an aerial and ground-based site visit along several segments of the Bengawan Solo River, where a series of Micro Hydropower Plant (PLTM) developments, water gates, and agricultural irrigation channels were being constructed. The objective was to document site conditions, monitor construction progress, and provide visual insights for engineering evaluation and project planning. High-quality aerial footage and structured documentation were produced to support decision-making across the development phases.",
    date: "Jul 2025",
    extraLargeImg: "assets/img/projects/project-1.png",
    img1: "assets/img/projects/project-details-2.png",
    img2: "assets/img/projects/project-details-3.png",
    mainImageUrl: null,
    
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
    <p>During the site assessment, the team encountered several challenges related to geographical accessibility and environmental variability. 
    Some construction points were located in narrow or hard-to-reach areas along the riverbank, requiring careful flight planning and precise 
    maneuvering to capture stable and comprehensive footage. Weather fluctuations and inconsistent lighting also posed challenges for maintaining visual quality. 
    Despite these conditions, the data collection process was optimized through controlled flight paths and systematic recording strategies.</p>
    <h3 class="more-info-title">Results</h3>
    <p>The site visit successfully delivered clear and detailed visual documentation of the ongoing PLTM construction, 
    river structures, water gates, and irrigation channels. The collected footage provided stakeholders with valuable insights into current progress, 
    potential risks, and areas requiring further engineering attention. The outputs significantly improved situational awareness and supported faster, 
    more informed decision-making for project continuation.</p>
    `
},

"project3": {
    mediaType: "image", 
    client: "PT Ajis Putra Hasana ",
    services: "Data Acquisition, Processing Data",
    videoUrl: null,
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "This project involved drone-based data acquisition for the preliminary planning phase of a coal hauling road, which serves as the main transportation route for coal delivery from the mining site to the port. The total planned length of the hauling road is approximately 25 km, with Phase 1 acquisition successfully covering about 15 km. The data acquisition corridor was designed with a total width of 150 meters, consisting of the actual road width of 100 meters and an additional 25-meter buffer on both the left and right sides. The final outputs of this project include high-resolution orthophotos, Digital Surface Models (DSM), Digital Terrain Models (DTM), and contour data, which serve as the primary basis for topographic analysis, route alignment, and earthwork estimation.",
    date: "Jul 2025",
    extraLargeImg: "assets/img/projects/project-1.png",
    img1: "assets/img/projects/project-details-2.png",
    img2: "assets/img/projects/project-details-3.png",
    mainImageUrl: "assets/img/projects/project-1.png", 
    

    detailsHtml: `
	<h3 class="more-info-title">Challenges</h3>
        <p>The main challenges of this project included the extensive hauling road corridor length of 25 km (with 15 km successfully 
            acquired in Phase 1), which required highly efficient and segmented flight mission planning; the dense oil palm plantation terrain, 
            which limited available take-off and landing zones at several locations; the wide 150-meter mapping corridor, which significantly 
            increased data volume and processing complexity; and the need to maintain consistent elevation accuracy in the DSM and DTM across a 
            long and topographically variable corridor.
        </p>
    <h5 class="more-info-subtitle">Location</h5>
        <ul class="list-unstyled">
            <li>The project was conducted in Kuala Pesisir, Nagan Raya Regency, Aceh Province, Indonesia, centered around the 
            coordinate point 4.101715, 96.197260. The hauling road corridor mainly traverses oil palm plantation areas, 
            owned by both local communities and private companies, requiring precise mapping of land boundaries, existing access routes, 
            and local terrain conditions along the entire corridor.
            </li>
        </ul>
    <h3 class="more-info-title">Results</h3>
        <p>
            The project successfully delivered a detailed topographic dataset covering approximately 15 km of the hauling road corridor, 
            including orthophotos, DSM, DTM, and contour maps, which now serve as a reliable foundation for technical road design. 
            These results support terrain condition analysis, optimal route alignment selection, earthwork (cut & fill) volume estimation, 
            and infrastructure planning toward the port, providing a strong technical basis for the next Detailed Engineering Design (DED) phase 
            and ensuring that the full 25 km hauling road can be developed in an efficient, safe, and spatially precise manner.
        </p>
    `
},

"project4": {
    mediaType: "image", 
    client : "PT Buckingham Holding Indonesia",
    services: "Data Acquisition, Processing Data",
    videoUrl: null,
    webUrl: "https://project-lebak-banten.vercel.app/",
    overview: "This project involved a preliminary site analysis and topographic mapping for a large-scale land development covering approximately 2,600 hectares in Lebak, Banten, commissioned by PT Buckingham Holding Indonesia. The main objective was to provide accurate and detailed physical land information including terrain, vegetation, water bodies, and natural features as the foundation for developing a comprehensive masterplan. Data acquisition was carried out using high-resolution drone technology, producing orthomosaic imagery, Digital Elevation Models (DEM), and 3D terrain models to support sustainable planning for residential, commercial, and recreational zones.",
    date: "Agu 2024",
    img1: "assets/img/projects/project-details-2.png",
    img2: "assets/img/projects/project-details-3.png",
    mainImageUrl: "assets/img/projects/project-1.png",
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
        <p>The primary challenge of this project was the vast survey area (2,600 hectares) combined with highly diverse topographic conditions,
            including hills, forests, and water bodies. These variations required precise flight planning and advanced data processing to ensure consistent
            elevation accuracy and reliable spatial representation. In addition, land suitability analysis had to carefully incorporate environmental 
            sustainability considerations, such as protected areas, river systems, and natural vegetation, to ensure that the proposed development would not 
            disrupt the surrounding ecosystem.
        </p>
    <h5 class="more-info-subtitle">Location</h5>
        <ul class="list-unstyled">
            <li>The project was conducted in Lebak Regency, Banten Province, Indonesia, a region characterized by highly diverse terrain consisting of hills, 
            dense forest areas, river networks, and natural water bodies. The total project area spans approximately 2,600 hectares, 
            making it one of the largest site analysis and masterplan development projects in the region. The complex topographic conditions and 
            environmental sensitivity of the area required a high level of accuracy in spatial data acquisition and analysis to ensure that the development 
            plan could be implemented efficiently while maintaining environmental sustainability.</li>
        </ul>
    <h3 class="more-info-title">Results</h3>
        <p>The project successfully delivered highly detailed topographic maps, orthomosaic imagery, DEM, and 3D site models, 
            which served as the foundation for developing a comprehensive masterplan for the entire 2,600-hectare area. 
            The masterplan defined optimal zoning for residential, commercial, and recreational areas, as well as infrastructure networks including roads, 
            utilities, and public transportation systems designed in harmony with the site’s natural landform. 
            The final deliverables were presented through technical reports, interactive maps, and 3D visualizations, 
            providing the client with accurate decision-making tools and supporting a development concept that is efficient, sustainable, 
            and environmentally responsible.
        </p>
    `
},

"project5": {
    mediaType: "image",
    client: "Sekretariat Otorita IKN",
    services: "Data Acquisition, Processing Data",
    videoUrl: null,
    webUrl: "https://project-ikn.vercel.app/",
    overview: "This project involved providing mapping and monitoring services for the development of Ibu Kota Nusantara (IKN), Indonesia’s new capital city – Phase 1, using drone technology and AI-based data analysis. The project was commissioned by the Sekretariat Otorita Ibu Kota Nusantara (OIKN) as the government authority responsible for overseeing the development of the new capital. Periodic drone flights were conducted to capture high-resolution orthophotos, topographic data, Digital Elevation Models (DEM), and 3D site models. The collected data was utilized to monitor construction progress, regulatory compliance, and site safety in a comprehensive and continuous manner.",
    date: "May 2024",
    img1: "assets/img/projects/project-details-2.png", 
    img2: "assets/img/projects/project-details-3.png", 
    mainImageUrl: "assets/img/projects/project-1.png",
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
        <p>The main challenges of this project included the large spatial coverage of the IKN development area, 
            highly dynamic construction activities, and the massive volume of drone data generated from periodic monitoring flights. 
            In addition, the project required high accuracy in detecting construction progress, regulatory deviations, and potential safety hazards. 
            These complexities demanded the implementation of AI-based automation to ensure that progress tracking, compliance verification, 
            and safety detection could be performed efficiently, consistently, and with high precision.
        </p>
    <h5 class="more-info-subtitle">Location</h5>
    <ul class="list-unstyled">
        <li>This project was conducted within the Ibu Kota Nusantara (IKN) development area, located in East Kalimantan Province, Indonesia. 
            The site covers a vast area with highly diverse terrain, including forest regions, river networks, 
            and open flatlands designated for large-scale infrastructure development. 
            The extensive land coverage and dynamic construction activities made drone-based monitoring the most effective solution for acquiring fast, 
            accurate, and up-to-date geospatial data.
        </li>
    </ul>
    <h3 class="more-info-title">Results</h3>
        <p>The project successfully delivered an integrated drone-based and AI-driven monitoring system capable of providing real-time insights into 
        construction progress, regulatory compliance, and site safety conditions within the IKN development area. 
        The results were presented in the form of technical reports, interactive maps, and 3D visualizations, 
        enabling the Otorita IKN to make fast and accurate strategic decisions. This project demonstrates that the integration of drone technology, 
        geospatial analysis, and artificial intelligence is highly effective in supporting the efficient, compliant, and 
        safe development of large-scale national infrastructure projects.
        </p>
    `
},

"project6": {
    mediaType: "image",
    client: " CDJO Consortium The Construction",
    services: "Data Acquisition, Photogrammetry",
    videoUrl: null, 
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "This project involved construction monitoring of the Jakarta–Bandung High-Speed Railway at the Jakarta initial segment, focused on the Halim High-Speed Railway Station area. Monitoring activities were conducted using an integration of drone technology, satellite imagery, computer vision, and machine learning to ensure construction progress remained on schedule, complied with design specifications, and met safety standards. Spatial data were periodically combined to generate time-series 3D models for continuous progress visualization.",
    date: "Jul 2025",
    img1: "assets/img/projects/project-details-2.png", 
    img2: "assets/img/projects/project-details-3.png",
    mainImageUrl: "assets/img/projects/project-1.png",
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
        <p>
            The main challenges in this segment included the high density of the urban environment, 
            limited drone maneuvering space due to active buildings and infrastructure, and simultaneous 
            construction activities at multiple locations. In addition, high-accuracy object detection was 
            required to identify construction elements such as pillars, rail tracks, and heavy equipment 
            under highly dynamic field conditions
        </p>
    <h5 class="more-info-subtitle">Location</h5>
    <ul class="list-unstyled">
        <li> 
            The project is located at Halim High-Speed Railway Station, East Jakarta, DKI Jakarta, Indonesia, 
            which serves as the main starting point of the Jakarta–Bandung High-Speed Railway corridor. 
            This area is characterized by high urban density, active infrastructure networks, and intense 
            construction activity, requiring highly precise and continuous monitoring.
        </li>
    
    </ul>
    <h3 class="more-info-title">Results</h3>
        <p>
            This project successfully delivered a drone-based construction monitoring system capable of 
            detecting structural progress in near real time, identifying potential delays, and visualizing construction 
            development through interactive dashboards and time-series 3D models. The monitoring results significantly supported 
            CDJO in maintaining project timelines, construction quality, and safety compliance at the initial 
            segment of the High-Speed Railway development.
        </p>
    `
	},
"project7": {
    mediaType: "image",
    client: "CDJO Consortium The Construction",
    services: "Data Acquisition, Photogrammetry",
    videoUrl: null, 
    webUrl: "https://link-ke-web-proyek-2.com",
    overview: "This project focused on construction monitoring of the Jakarta–Bandung High-Speed Railway at the Bandung segment towards Tegalluar Station. Monitoring was conducted through the integration of periodic drone surveys, satellite imagery, computer vision, and machine learning to track the development of rail lines, pillars, station structures, and supporting facilities. The spatial datasets were integrated to generate periodic 3D construction progress models.",
    date: "Jul 2025",
    img1: "assets/img/projects/project-details-2.png", 
    img2: "assets/img/projects/project-details-3.png",
    mainImageUrl: "assets/img/projects/project-1.png",
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
        <p>
            The main challenges in the Bandung–Tegalluar segment included the large and open construction area, 
            rapidly changing construction progress, and the need for large-scale synchronization between 
            drone and satellite datasets. In addition, monitoring activities also had to address social and environmental 
            aspects, including community impact, workforce activities, and land-cover changes.
        </p>
    <h5 class="more-info-subtitle">Location</h5>
    <ul class="list-unstyled">
        <li>
            The project is located in Bandung City and Tegalluar Area, Bandung Regency, West Java Province, Indonesia. 
            This region is characterized by open development land, expanding residential areas, and newly built infrastructure, 
            making it a strategic location as the terminal station of the Jakarta–Bandung High-Speed Railway.
        </li>
    </ul>
    <h3 class="more-info-title">Results</h3>
        <p>
            This project successfully delivered a comprehensive construction monitoring system through the integration of interactive maps, 
            technical reports, analytical dashboards, and time-based 3D models, enabling CDJO to accurately monitor rail and structural development, 
            detect deviations from approved designs, anticipate technical and social constraints, and support fast, 
            data-driven decision-making. The results demonstrate that the integration of drone technology and satellite imagery is 
            highly effective in supporting the efficient, safe, and sustainable development of national-scale infrastructure projects.
        </p>
    `
	},

"project8": {
    mediaType: "image",
    client: "",
    services: "Analysis Spatial",
    videoUrl: null, 
    webUrl: "https://webgis-sukajaya.vercel.app/",
    overview: "This research develops a spatial analysis model to detect landslide areas using the Relative Different Normalized Difference Vegetation Index (rdNDVI) method, processed through the Google Earth Engine (GEE) platform. The study utilizes Sentinel-2A satellite imagery to identify significant vegetation density changes between pre-event and post-event periods as the primary indicator of landslide occurrences. By integrating remote sensing technology with field survey validation, this research aims to provide an effective and accurate detection method to assist the Regional Disaster Management Agency (BPBD) in mapping vulnerability and supporting improved disaster mitigation efforts in the future.",
    date: "Mar 2023",
    extraLargeImg: "assets/img/projects/rdNDVI-analyst.png",
    img1: "assets/img/projects/post-pre-gee.png", 
    img2: "assets/img/projects/post-pre-gee1.png",
    mainImageUrl: "assets/img/projects/rdNDVI.png",
    detailsHtml: `
    <h3 class="more-info-title">Challenges</h3>
        <p>
            The fundamental challenge addressed is the high level of disaster vulnerability in Bogor Regency, 
            which recorded a landslide risk index score of 15.48 according to the 2021 IRBI data, attributed to 
            geological conditions and extreme rainfall. Technically, the research faces the challenge of determining 
            the most optimal slope threshold to accurately differentiate active landslide areas from other vegetation changes. 
            Furthermore, this method was developed to overcome the limitations of conventional observations, which are often 
            time-consuming and difficult to conduct in large, inaccessible disaster areas.
        </p>
    <h3 class="more-info-title">Location</h3>
        <p>
            The study area focuses specifically on Sukajaya District, Bogor Regency, West Java, selected due to its relevance to 
            the major landslide event that occurred on January 1, 2020. Geographically, this area is situated in highlands surrounded 
            by mountains and hills, making it a zone highly susceptible to soil movement. The scope of the spatial analysis encompasses 
            11 villages within the district to compare the extent of damage and land cover changes across the entire disaster-affected region.
        </p>
    <h3 class="more-info-title">Results</h3>
        <p>
            The results indicate that Cileuksa Village and Pasir Madang Village were the most severely impacted areas, with the detected 
            landslide coverage expanding significantly following the application of slope thresholds. Based on an accuracy assessment using 
            30 field survey points, it was found that utilizing slope thresholds of 10 percent and 15 percent yielded the highest accuracy rate 
            of 90%, with 27 points correctly detected. These findings demonstrate that the rdNDVI method with appropriate slope threshold settings 
            is significantly more effective compared to analysis without a threshold, which only produced an accuracy of 66.7%.
        </p>
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
    const projectId = urlParams.get('id');

// 2. Temukan data proyek yang sesuai dari 'allProjects'
    const projectData = allProjects[projectId];

// 3. Masukkan data ke dalam elemen HTML
    if (projectData) {
        
// --- LOGIKA UNTUK VIDEO / GAMBAR ---
    if (projectData.mediaType === 'video') {
          // Jika ini proyek VIDEO:
        $('#project-video').attr('src', projectData.videoUrl);
        $('#project-main-image').remove();
    } 
    else if (projectData.mediaType === 'image') {
// Jika ini proyek GAMBAR:
        $('#project-main-image').attr('src', projectData.mainImageUrl);
        $('#project-video').remove(); 
        
// Hapus juga styling CSS 16:9 agar gambar tidak terpotong
        $('.main-image').css({
            'position': 'static',
            'padding-top': '0',
            'height': 'auto'
        });
    }

        $('#project-client').text(projectData.client);
        $('#project-services').text(projectData.services);
        $('#project-web-url').attr('href', projectData.webUrl);
        $('#project-overview').text(projectData.overview);
        $('#project-img1').attr('src', projectData.img1);
        $('#project-img2').attr('src', projectData.img2);

        if (projectData.extraLargeImg) {
        $('#project-large-img').attr('src', projectData.extraLargeImg).show();
        } else {
            $('#project-large-img').hide();
        }
        if (projectData.date) {
        $("#project-date-text").text(projectData.date).show();
        } else {
            $(".project-date").hide();
        }   
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

// ================================================================= PERBAIKAN: Inisialisasi Magnific Popup (Galeri Gambar) ===============================================================//

$(".parent-container").magnificPopup({
    delegate: "a.gallery-popup",
    type: "image", 
    gallery: {
    enabled: true,
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

// =================================================================================== PORTFOLIO MAP ===================================================================================//

window.addEventListener("load", function () {
    const mapContainer = document.getElementById("projectsMap");
    if (!mapContainer) return;

const projectLocations = [
    { id: "project1", title: "Data Acquisition For Monitoring Project", lat: -6.448984023913493, lng: 106.71137074319215 },
    { id: "project2", title: "Videography Bengawan Solo Dam", lat: -7.5613071988612335, lng: 110.76902383830956 },
    { id: "project3", title: "Drone Survey for Coal Hauling Road Assessment", lat: 4.10197564601826,  lng: 96.19775929749161 },
    { id: "project4", title: "Preliminary Site Analysis and Topographic Mapping", lat: -6.461306398269455, lng: 106.10899637341888 },
    { id: "project5", title: "Aerial Mapping for Indonesia’s New Capital", lat: -0.9686449664052911, lng: 116.70212156224436 },
    { id: "project6", title: "UAV Survey for High-Speed Railway Progress I", lat: -6.245560436622241, lng: 106.88441557781445 },
    { id: "project7", title: "UAV Survey for High-Speed Railway Progress II", lat: -6.9609381459180035, lng: 107.608829373577 },
    { id: "project8", title: "Landslide Detection Using rdNDVI and GEE", lat: -6.622041366560657, lng:106.47209995744603 },

];

const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 4,
    maxZoom: 19,
    attribution: "",
});

const googleSatellite = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
    minZoom: 4,
    maxZoom: 19,
    attribution: "",
    }
);

const googleStreet = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    {
    minZoom: 4,
    maxZoom: 19,
    attribution: "",
    }
);

const esriSatellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { 
    maxZoom: 19, 
    attribution: "" 
    }
);

const map = L.map("projectsMap", {
    zoomControl: true,
    scrollWheelZoom: true,
    minZoom: 3,
    maxZoom: 22,
    layers: [esriSatellite], 
});

const markers = projectLocations.map((p) =>
    L.marker([p.lat, p.lng]).bindPopup(`
        <b>${p.title}</b><br/>
        <a href="portfolio-details.html?id=${p.id}">View detail</a>
    `)
    );
const markerGroup = L.layerGroup(markers).addTo(map);

if (projectLocations.length > 0) {
    const bounds = L.latLngBounds(projectLocations.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [30, 30] });
} else {
    map.setView([-2.6921268559794704, 116.13950114647558], 1);
}

const baseMaps = {
    "Esri Satellite":esriSatellite,
    "OpenStreetMap": osm,
    "Google Satellite": googleSatellite,
    "Google Street": googleStreet,
};

const overlays = {
    "All Project": markerGroup,
};

L.control.layers(baseMaps, overlays, {
    collapsed: true,
    position: "topright",
}).addTo(map);


function fixMapSize() {
    map.invalidateSize(true);
}
    fixMapSize();
    setTimeout(fixMapSize, 200);
    setTimeout(fixMapSize, 600);
    window.addEventListener("resize", fixMapSize);
});