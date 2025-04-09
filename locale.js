const translations = {
    en: {
      name: "Avalin",
      tagline: "Creative Technologist · Interactive Developer · Logic Tinkerer",
      about_title: "About Me",
      about_text: "I'm Avalin — a creative technologist with a love for weird interfaces, logical problem-solving, and immersive experiences. I’ve built everything from backend schedulers to WebVR worlds and contributed to projects like LEGO Super Mario and AquaGlobe. When I’m not coding, I’m probably admiring cats or designing something nobody asked for (but everyone will secretly love).",
      projects_title: "Featured Projects",
      project_nbfc_title: "Nightmare Before Christmas VR",
      project_nbfc_desc: "Gaze-based interaction in WebVR using A-Frame, themed around NBC. Built characters & logic.",
      project_pokemon_title: "Pokémon VR",
      project_pokemon_desc: "Catch Pokémon by throwing Pokéballs with gaze-based interaction. WebVR + A-Frame + JS.",
      project_lego_title: "LEGO Super Mario App",
      project_lego_desc: "Worked on C# backend and interactive logic for LEGO's Super Mario App.",
      project_smartplan_title: "Smartplan Backend",
      project_smartplan_desc: "Designed rostering logic with Drools Rule Engine & Java to solve NP-hard planning problems.",
      project_rytterpark_title: "Homeowners Association Website",
      project_rytterpark_desc: "Custom-built admin/editable site using JS, Bootstrap, JSON from Google Sheets.",
      project_aquaglobe_title: "AquaGlobe VR",
      project_aquaglobe_desc: "Built VR content for AquaGlobe. A guided tour of the water’s journey from borehole to consumer. Unity + C# + VR APIs.",
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
      about_title: "Om Mig",
      about_text: "Jeg er Avalin — en kreativ teknolog med kærlighed til skæve interfaces, logisk problemløsning og medrivende oplevelser. Jeg har bygget alt fra backend-planlæggere til WebVR-verdener og bidraget til projekter som LEGO Super Mario og AquaGlobe. Når jeg ikke koder, beundrer jeg nok katte eller designer noget, ingen har bedt om (men alle i hemmelighed vil elske).",
      projects_title: "Udvalgte Projekter",
      project_nbfc_title: "Nightmare Before Christmas VR",
      project_nbfc_desc: "Blikbaseret interaktion i WebVR med A-Frame, tema fra NBC. Byggede karakterer og logik.",
      project_pokemon_title: "Pokémon VR",
      project_pokemon_desc: "Fang Pokémon ved at kaste Pokéballs med blikbaseret interaktion. WebVR + A-Frame + JS.",
      project_lego_title: "LEGO Super Mario App",
      project_lego_desc: "Arbejdet på C# backend og interaktiv logik til LEGO's Super Mario-app.",
      project_smartplan_title: "Smartplan Backend",
      project_smartplan_desc: "Designede vagtplanlogik med Drools Rule Engine & Java for at løse NP-svære planlægningsproblemer.",
      project_rytterpark_title: "Grundejerforenings Hjemmeside",
      project_rytterpark_desc: "Hjemmeside med admin/rediger funktionalitet bygget med JS, Bootstrap og JSON fra Google Sheets.",
      project_aquaglobe_title: "AquaGlobe VR",
      project_aquaglobe_desc: "Byggede VR-indhold til AquaGlobe. En guidet tur gennem vandets rejse fra boring til forbruger. Unity + C# + VR APIs.",
      tech_title: "Teknologier",
      tech_list: "C# · Unity · JavaScript · WebVR · A-Frame · Three.js · HTML/CSS · Drools · Git · VR APIs · Google Apps Script · Bootstrap",
      connect_title: "Forbind med mig",
      github: "GitHub @Avalin",
      email: "Skriv en mail",
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
  
    // Update the button emoji
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? '🇬🇧' : '🇩🇰';
  }
  
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'da' : 'en';
    translatePage();
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    translatePage();
  });
  