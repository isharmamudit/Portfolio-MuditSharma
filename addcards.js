const oM = [
    {
      id: 0,
      name: "Teen UPI Fintech App",
      description:
        "A MERN stack UPI app designed to give teens financial independence — budgeting, peer payments, and savings goals in one platform.",
      image: "images/projects/projecthub.png",
      tags: ["javascript", "react", "mongodb", "express"],
      liveview: null,
      alt: "Teen-Centric Fintech UPI App",
    },
    {
      id: 1,
      name: "AI Prompt Toolkit",
      description:
        "100+ high-efficiency prompts engineered for productivity across coding, writing, and research. Simplilearn Prompt Engineering certified.",
      image: "images/projects/krushigram.png",
      tags: ["javascript", "html", "css"],
      liveview: null,
      alt: "AI Prompt Toolkit",
    },
    {
      id: 2,
      name: "Carbon Emission Controller",
      description:
        "SDG-focused tech solution that won 2nd Place at MU20 — Asia's biggest impact summit. Tracks and helps reduce personal carbon footprints.",
      image: "images/projects/studybuddy.jpeg",
      tags: ["javascript", "html", "css"],
      liveview: null,
      alt: "Carbon Emission Controller",
    },
    {
      id: 3,
      name: "Topography Interpreter",
      description:
        "Python + OpenCV tool that analyzes topographic maps — detecting elevation contours, water bodies, and terrain features automatically.",
      image: "images/projects/opentalk.jpeg",
      tags: ["javascript", "html", "css"],
      liveview: null,
      alt: "Topography Interpreter",
    },
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  