const translations = {
    en: {
      name: "Avalin",
      tagline: "Creative Technologist · Interactive Developer · Logic Tinkerer",
      about_title: "About Me",
      about_text: "Hi! My name is Astrid Avalin, a software engineer and creative technologist with a love for quirky interfaces, logical problem-solving, and interactive experiences. I've built everything from backend schedulers to WebVR worlds and contributed to projects like LEGO Super Mario and a guided tour at AquaGlobe. When I'm not coding, I'm probably admiring my cats or designing something no one asked for (but that ends up being pretty cool anyway).",
      projects_title: "Featured Projects",
      project_nbfc_title: "Nightmare Before Christmas VR",
      project_nbfc_desc: "Gaze-based interaction in WebVR using A-Frame, themed around NBC. Partially animated using the Mixamo library, and partially from A-frame scripting.",
      project_pokemon_title: "Pokémon VR",
      project_pokemon_desc: "Catch Pokémon by throwing Pokéballs, and use gaze-based interaction with the Pokémon themselves. WebVR + A-Frame + JS.",
      project_lego_title: "LEGO Super Mario App",
      project_lego_desc: "Worked with a small team in Unity C# for the interactive logic in LEGO's Super Mario App.",
      project_smartplan_title: "Smartplan Backend",
      project_smartplan_desc: "Designed rostering logic with Drools Rule Engine & Java to solve NP-hard planning problems.",
      project_rytterpark_title: "Homeowners Association Website",
      project_rytterpark_desc: "Custom-built admin/editable site using JS, Bootstrap & Google App Script to get JSON from Google Sheets.",
      project_aquaglobe_title: "AquaGlobe VR",
      project_aquaglobe_desc: "Built VR content for AquaGlobe with MRTK + Microsoft HoloLens. A guided tour of the water’s journey from borehole to consumer. Unity + C# + VR APIs.",
      tech_title: "Tech Stack",
      tech_list: "C# · Unity · JavaScript · WebVR · A-Frame · Three.js · HTML/CSS · Drools · Git · VR APIs · Google Apps Script · Bootstrap",
      connect_title: "Let's Connect",
      github: "GitHub @Avalin",
      email: "Email Me",
      resume: "Download Resume",
      footer: "© 2025 Avalin. Built with code, creativity, and probably some crying."
    },
    da: {
      name: "Avalin",
      tagline: "Kreativ teknolog · Interaktiv udvikler · Logiknørd",
      about_title: "Om mig",
      about_text: "Hej! Mit navn er Astrid Avalin, en software ingeniør og en kreativ teknolog med kærlighed til skæve interfaces, logisk problemløsning og interaktive oplevelser. Jeg har bygget alt fra backend-planlæggere til WebVR-verdener og bidraget til projekter som LEGO Super Mario og en guided tour ved AquaGlobe. Når jeg ikke koder, beundrer jeg nok mine katte eller designer noget, ingen har bedt om (men som er ret sejt alligevel).",
      projects_title: "Udvalgte projekter",
      project_nbfc_title: "Nightmare Before Christmas VR",
      project_nbfc_desc: "Blik-baseret interaktion i WebVR med A-Frame, lavet omkring NBC karakterer. Disse er bl.a. animeret igennem Mixamo's bibliotek.",
      project_pokemon_title: "Pokémon VR",
      project_pokemon_desc: "Fang Pokémon ved at kaste Pokéballs og brug blikbaseret interaktion med selve Pokémonerne. WebVR + A-Frame + JS.",
      project_lego_title: "LEGO Super Mario App",
      project_lego_desc: "Arbejdet i et lille team med Unity C# for at skabe interaktiv logik til LEGO's Super Mario-app.",
      project_smartplan_title: "Smartplan Backend",
      project_smartplan_desc: "Designede vagtplan-logik med Drools Rule Engine & Java for at løse NP-planlægningsproblemer.",
      project_rytterpark_title: "Grundejerforenings Hjemmeside",
      project_rytterpark_desc: "Hjemmeside med admin-funktionalitet fra Google Sheets, bygget med JS, Bootstrap og JSON og Google Apps Script.",
      project_aquaglobe_title: "AquaGlobe VR",
      project_aquaglobe_desc: "Byggede XR-indhold til AquaGlobe med MRTK + Microsoft HoloLens. En guidet tur gennem vandets rejse fra boring til forbruger. Unity + C# + VR APIs.",
      tech_title: "Teknologier",
      tech_list: "C# · Unity · JavaScript · WebVR · A-Frame · Three.js · HTML/CSS · Drools · Git · VR APIs · Google Apps Script · Bootstrap",
      connect_title: "Forbind med mig",
      github: "GitHub @Avalin",
      email: "Skriv en email",
      resume: "Download CV",
      footer: "© 2025 Avalin. Bygget med kode, kreativitet og sikkert også nogle tårer."
    }
  };
  
  let currentLang = 'en';
  
  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
  
    // Update resume button link based on language
    const resumeBtn = document.querySelector('a[data-i18n="resume"]');
    if (currentLang === 'da') {
      resumeBtn.setAttribute('href', 'documents/CV-2025-DK.pdf');
    } else {
      resumeBtn.setAttribute('href', 'documents/CV-2025-EN.pdf');
    }
  
    // Update button styles
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
      }
    });
  }
  
  function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    translatePage();
  }
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    translatePage();
  });
  