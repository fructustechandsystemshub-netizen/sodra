/* Shared responsive navigation */
document.querySelectorAll(".site-header").forEach((header) => {
  const toggle = header.querySelector(".nav-toggle");
  const navigation = header.querySelector(".main-nav");

  if (!toggle || !navigation) {
    return;
  }

  function setNavigationOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    navigation.classList.toggle("is-open", isOpen);
  }

  toggle.addEventListener("click", () => {
    setNavigationOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setNavigationOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      setNavigationOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setNavigationOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", () => {
    setNavigationOpen(false);
  });
});

/* Homepage hero image rotation */
const homeHeroImage = document.querySelector(".home-page .hero-visual .photo-frame img");

if (homeHeroImage) {
  const homeHeroSlides = [
    { src: "images/cleaner.jpeg", alt: "Smiling cleaning professional holding her supplies" },
    { src: "images/so1.jpeg", alt: "Security professional at work" },
    { src: "images/so2.jpeg", alt: "Cleaning professional ready for work" },
    { src: "images/so3.jpeg", alt: "SODRA professional at work" },
    { src: "images/so4.jpeg", alt: "SODRA professional at work" },
    { src: "images/so5.jpeg", alt: "SODRA professional at work" },
    { src: "images/so6.jpeg", alt: "SODRA professional at work" },
    { src: "images/so7.jpeg", alt: "SODRA professional at work" },
    { src: "images/so8.jpeg", alt: "SODRA professional at work" },
    { src: "images/so9.jpeg", alt: "SODRA professional at work" },
    { src: "images/so10.jpeg", alt: "SODRA professional at work" },
    { src: "images/so11.jpeg", alt: "SODRA professional at work" },
    { src: "images/so12.jpeg", alt: "SODRA professional at work" },
    { src: "images/so13.jpeg", alt: "SODRA professional at work" }
  ];
  let activeHomeHeroSlide = 0;

  window.setInterval(() => {
    homeHeroImage.classList.add("is-fading");

    window.setTimeout(() => {
      activeHomeHeroSlide = (activeHomeHeroSlide + 1) % homeHeroSlides.length;
      const nextSlide = homeHeroSlides[activeHomeHeroSlide];
      homeHeroImage.src = nextSlide.src;
      homeHeroImage.alt = nextSlide.alt;
      homeHeroImage.classList.remove("is-fading");
    }, 450);
  }, 3000);
}

/* Featured jobs carousel */
const jobs = [
  {
    title: "Male Gardner",
    company: "SODRA Investments",
    location: "Dubai",
    type: "Full Time",
    salary: "UGX 1,000,000–1,200,000 / month",
    image: "images/job1.jpeg",
    imageAlt: "Gardener job opportunity in Dubai",
    requirements: [
      "Male candidates only.",
      "Age between 20 to 40 years.",
      "Physically fit and healthy.",
      "Minimum education standard: Primary level.",
      "Previous gardening or landscaping experience is an added advantage.",
      "Hardworking, honest, and disciplined.",
      "Capable of working effectively in all outdoor weather conditions.",
      "Valid travel passport with a minimum of 6 months remaining before expiration."
    ]
  },
  {
    title: "Male Food Delivery Bikers",
    company: "SODRA Investments",
    location: "Qatar",
    type: "Full Time",
    salary: "UGX 1,500,000–1,800,000 / month",
    image: "images/job2.jpeg",
    imageAlt: "Food delivery biker job opportunity in Qatar",
    requirements: [
      "Male candidates only.",
      "Age between 22 and 35 years.",
      "Minimum education standard: Primary level.",
      "Must hold a valid motorcycle driving license.",
      "Minimum 1 year of experience in food delivery (preferred).",
      "Physically fit and in good health condition.",
      "Good knowledge of Qatar roads and routing locations.",
      "Valid passport with at least 6 months before expiry.",
      "Clean record with no criminal history."
    ]
  },
  {
    title: "Waiters",
    company: "SODRA Investments",
    location: "OMAN",
    type: "Full Time",
    salary: "UGX 1,000,000–1,500,000 / month",
    image: "images/job3.jpeg",
    imageAlt: "Waiter job opportunity in Oman",
    requirements: [
      "Practical experience or relevant background in food and beverage service.",
      "Valid international passport ready or actively in processing.",
      "Medically fit for overseas placement and travel clearance.",
      "Strong work ethic and commitment to contract terms."
    ]
  },
  {
    title: "Welders",
    company: "SODRA Investments",
    location: "OMAN",
    type: "Full Time",
    salary: "UGX 1,500,000–1,800,000 / month",
    image: "images/job4.jpeg",
    imageAlt: "Welder job opportunity in Oman",
    requirements: [
      "Practical welding, fabrication, or workshop experience.",
      "Valid international passport ready or actively in processing.",
      "Medically fit for overseas placement and travel clearance.",
      "Strong work ethic and commitment to contract terms."
    ]
  },
  {
    title: "Security Guards",
    company: "SODRA Investments",
    location: "Dubai",
    type: "Full Time",
    salary: "UGX 1,800,000–2,500,000 / month",
    image: "images/job5.jpeg",
    imageAlt: "Security guard job opportunity in Dubai",
    requirements: [
      "Male only for Security Guard positions.",
      "Valid travel passport ready or in process.",
      "Physically fit and ready to work in UAE facilities, logistics, or security sectors.",
      "Ability to work under contract regulations as per UAE Labour Law."
    ]
  },
  {
    title: "Warehouse Workers",
    company: "SODRA Investments",
    location: "Dubai",
    type: "Full Time",
    salary: "UGX 2,800,000–3,000,000 / month",
    image: "images/job6.jpeg",
    imageAlt: "Warehouse worker job opportunity in Dubai",
    requirements: [
      "Open to male and female applicants for Warehouse roles.",
      "Valid travel passport ready or in process.",
      "Physically fit and ready to work in UAE facilities, logistics, or security sectors.",
      "Ability to work under contract regulations as per UAE Labour Law."
    ]
  },
  {
    title: "Cleaners",
    company: "SODRA Investments",
    location: "Dubai",
    type: "Full Time",
    salary: "UGX 800,000–1,200,000 / month",
    image: "images/job7.jpeg",
    imageAlt: "Cleaner job opportunity in Dubai",
    requirements: [
      "Open to male and female applicants for Cleaners.",
      "Valid travel passport ready or in process.",
      "Physically fit and ready to work in UAE facilities, logistics, or security sectors.",
      "Ability to work under contract regulations as per UAE Labour Law."
    ]
  },
  {
    title: "House Maids",
    company: "SODRA Investments",
    location: "Dubai",
    type: "Full Time",
    salary: "UGX 900,000–1,200,000 / month",
    image: "images/jobs9.jpeg",
    imageAlt: "House maid job opportunity in Dubai",
    requirements: [
      "Female candidates aged 21–38.",
      "Good physical health and medical clearance certification.",
      "Valid passport ready for immediate visa processing.",
      "Basic communication skills; knowledge of English or Arabic is a plus.",
      "Ready to relocate for a 2-year employment contract."
    ]
  }
];

const carousel = document.querySelector(".featured-job");

if (carousel) {
  const title = carousel.querySelector(".job-title");
  const company = carousel.querySelector(".job-company");
  const location = carousel.querySelector(".job-location");
  const type = carousel.querySelector(".job-type");
  const salary = carousel.querySelector(".job-salary");
  const image = carousel.querySelector(".job-photo");
  const requirements = carousel.querySelector(".requirement-list");
  const status = document.querySelector("#carousel-status");
  const dotContainers = document.querySelectorAll(".carousel-dots");
  let activeJob = 0;
  let autoAdvance;

  function renderJob() {
    const job = jobs[activeJob];
    title.textContent = job.title;
    const companyMark = document.createElement("span");
    companyMark.className = "mini-mark";
    companyMark.setAttribute("aria-hidden", "true");
    companyMark.textContent = "✦";
    company.replaceChildren(companyMark, document.createTextNode(job.company));
    location.textContent = job.location;
    type.textContent = job.type;
    salary.textContent = job.salary;
    image.src = job.image;
    image.alt = job.imageAlt;
    requirements.replaceChildren(...job.requirements.map((requirement) => {
      const item = document.createElement("li");
      item.textContent = requirement;
      return item;
    }));

    dotContainers.forEach((container) => {
      container.querySelectorAll("button").forEach((button, index) => {
        button.setAttribute("aria-current", String(index === activeJob));
      });
    });
    status.textContent = `Featured job ${activeJob + 1} of ${jobs.length}: ${job.title}`;
  }

  function renderDots() {
    dotContainers.forEach((container) => {
      container.replaceChildren(...jobs.map((job, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `Show ${job.title}`);
        button.setAttribute("aria-current", String(index === activeJob));
        button.addEventListener("click", () => showJob(index));
        return button;
      }));
    });
  }

  function showJob(index) {
    activeJob = (index + jobs.length) % jobs.length;
    renderJob();
  }

  document.querySelectorAll("[data-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      showJob(activeJob + Number(button.dataset.direction));
    });
  });

  function startAutoAdvance() {
    window.clearInterval(autoAdvance);
    autoAdvance = window.setInterval(() => showJob(activeJob + 1), 4000);
  }

  carousel.addEventListener("mouseenter", () => window.clearInterval(autoAdvance));
  carousel.addEventListener("mouseleave", startAutoAdvance);
  carousel.addEventListener("focusin", () => window.clearInterval(autoAdvance));
  carousel.addEventListener("focusout", startAutoAdvance);

  renderDots();
  renderJob();
  startAutoAdvance();
}

/* Free, on-device website help; no questions are sent to a third party. */
const chatWidget = document.createElement("aside");
chatWidget.className = "sodra-chat";
chatWidget.setAttribute("aria-label", "SODRA website assistant");

const chatToggle = document.createElement("button");
chatToggle.className = "sodra-chat-toggle";
chatToggle.type = "button";
chatToggle.setAttribute("aria-expanded", "false");
chatToggle.setAttribute("aria-controls", "sodra-chat-panel");
chatToggle.setAttribute("aria-label", "Open SODRA assistant");
chatToggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-5 4v-4.2a2.5 2.5 0 0 1-2-2.3z"></path><path d="M8 8h8m-8 4h5"></path></svg><span>Chat with us</span>';

const chatPanel = document.createElement("section");
chatPanel.className = "sodra-chat-panel";
chatPanel.id = "sodra-chat-panel";
chatPanel.setAttribute("aria-label", "Chat with the SODRA website assistant");
chatPanel.hidden = true;

const chatHeader = document.createElement("div");
chatHeader.className = "sodra-chat-header";
const chatHeading = document.createElement("div");
chatHeading.innerHTML = "<strong>SODRA Assistant</strong><span>Here to help</span>";
const chatClose = document.createElement("button");
chatClose.className = "sodra-chat-close";
chatClose.type = "button";
chatClose.setAttribute("aria-label", "Close chat");
chatClose.textContent = "×";
chatHeader.append(chatHeading, chatClose);

const chatMessages = document.createElement("div");
chatMessages.className = "sodra-chat-messages";
chatMessages.setAttribute("role", "log");
chatMessages.setAttribute("aria-live", "polite");
chatMessages.setAttribute("aria-relevant", "additions");

const chatForm = document.createElement("form");
chatForm.className = "sodra-chat-form";
const chatInput = document.createElement("input");
chatInput.type = "text";
chatInput.name = "question";
chatInput.maxLength = 500;
chatInput.placeholder = "Type your question...";
chatInput.setAttribute("aria-label", "Your question");
chatInput.required = true;
const chatSend = document.createElement("button");
chatSend.type = "submit";
chatSend.setAttribute("aria-label", "Send question");
chatSend.textContent = "Send";
chatForm.append(chatInput, chatSend);

chatPanel.append(chatHeader, chatMessages, chatForm);
chatWidget.append(chatPanel, chatToggle);
document.body.append(chatWidget);

function addChatMessage(text, sender, withContacts = false) {
  const message = document.createElement("div");
  message.className = `sodra-chat-message is-${sender}`;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  message.append(paragraph);

  if (withContacts) {
    const contacts = document.createElement("div");
    contacts.className = "sodra-chat-contacts";
    message.append(contacts);
    [
      { href: "tel:+256731371850", text: "+256 731 371 850" },
      { href: "tel:+256787647007", text: "+256 787 647 007" },
      { href: "mailto:info@sodrainvestments.com", text: "info@sodrainvestments.com" }
    ].forEach(({ href, text: label }) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      contacts.append(link);
    });
  }

  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function respondToChat(question) {
  const normalized = question.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  const contactQuestion = /\b(contact|phone|telephone|email|e mail|number|address|office|location|where|hours|open|whatsapp)\b/.test(normalized);
  const matchingJob = jobs.find((job) => {
    const title = job.title.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ");
    const aliases = {
      "Male Gardner": ["gardener", "gardner", "gardening"],
      "Male Food Delivery Bikers": ["food delivery", "delivery biker", "biker", "motorcycle"],
      Waiters: ["waiter", "waitress"],
      Welders: ["welder", "welding"],
      "Security Guards": ["security", "guard"],
      "Warehouse Workers": ["warehouse", "worker"],
      Cleaners: ["cleaner", "cleaning"],
      "House Maids": ["house maid", "housemaid", "maid"]
    }[job.title] || [];
    return normalized.includes(title.trim()) || aliases.some((alias) => normalized.includes(alias));
  });

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(normalized)) {
    return { text: "Hello! I’m happy to help. Ask me about SODRA’s services, applying for a job, a featured vacancy, or how to contact our team." };
  }
  if (/\b(thank you|thanks|thx)\b/.test(normalized)) {
    return { text: "You’re very welcome! Let me know if there’s anything else I can help with." };
  }
  if (matchingJob) {
    const requirements = matchingJob.requirements.length
      ? `\nCandidate requirements:\n• ${matchingJob.requirements.join("\n• ")}`
      : "";
    return {
      text: `${matchingJob.title}\nLocation: ${matchingJob.location}\nType: ${matchingJob.type}\nSalary: ${matchingJob.salary}${requirements}\n\nTo apply, use the Apply now button on this page.`,
      withContacts: false
    };
  }
  if (/\b(list|show|available|current|open|featured)\b/.test(normalized) && /\b(job|jobs|vacanc|opportunit|position|work)\w*/.test(normalized)) {
    return { text: `Current featured opportunities:\n• ${jobs.map((job) => job.title).join("\n• ")}\n\nOpen the Jobs page to view details and apply.` };
  }
  if (/\b(service|services|recruit|recruitment|employer|hire|talent|candidate|what does sodra do)\b/.test(normalized)) {
    return {
      text: "SODRA connects verified international employers with Ugandan skilled professionals. We build talent pools, match candidates to opportunities, help verify opportunities and prepare documentation, and support candidates through the recruitment journey."
    };
  }
  if (/\b(apply|application|applying|how to apply|portal|register)\b/.test(normalized)) {
    return {
      text: "To apply, visit the Jobs page, choose a featured opportunity, and select Apply now. That opens the SODRA application portal.",
      withApplyLink: true
    };
  }
  if (/\b(who is sodra|about sodra|about the company|company|who are you)\b/.test(normalized)) {
    return {
      text: "SODRA Investments connects Ugandan professionals with verified international employment opportunities, with a focus on transparent recruitment, preparation, and candidate support. Visit About us to learn more."
    };
  }
  if (/\b(fee|fees|charge|charges|cost|payment|pay to apply)\b/.test(normalized)) {
    return {
      text: "I don’t have verified fee information to share. Please contact the SODRA team directly so they can confirm the current details.",
      withContacts: true
    };
  }
  if (/\b(business hours|opening hours|when.*open|what time|working hours|office hours)\b/.test(normalized)) {
    return {
      text: "SODRA office hours are Monday to Friday, 8:00 AM–5:00 PM, and Saturday, 9:00 AM–1:00 PM. The office is in Masanafu, opposite Holy Camp Guest House."
    };
  }
  if (contactQuestion) {
    return {
      text: "You can reach SODRA by phone or email. The office is in Masanafu, opposite Holy Camp Guest House. Office hours are Monday–Friday, 8:00 AM–5:00 PM, and Saturday, 9:00 AM–1:00 PM.",
      withContacts: true
    };
  }
  if (/\b(capital of uganda|uganda.s capital)\b/.test(normalized)) {
    return { text: "The capital of Uganda is Kampala." };
  }
  if (/\b(what is recruitment|define recruitment|meaning of recruitment)\b/.test(normalized)) {
    return { text: "Recruitment is the process of finding, assessing, and selecting people for job opportunities." };
  }
  if (/\b(what is a cv|what is cv|what is a resume|what is resume)\b/.test(normalized)) {
    return { text: "A CV (curriculum vitae), also called a resume in some regions, summarizes your skills, education, and work experience for employers." };
  }
  if (/\b(passport|visa|work permit|interview|cv|resume|job search|career advice)\b/.test(normalized)) {
    return {
      text: "For overseas work, keep your passport and application documents ready, check that the vacancy requirements match your experience, and confirm visa and contract details with the employer or SODRA team before making decisions."
    };
  }
  return {
    text: "Thanks for asking! I’m a free website assistant and can help with SODRA services, applications, featured jobs, and contact information. For a question I can’t answer confidently, please contact our team for better assistance.",
    withContacts: true
  };
}

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  chatToggle.setAttribute("aria-label", isOpen ? "Close SODRA assistant" : "Open SODRA assistant");
  if (isOpen) {
    chatInput.focus();
  }
}

chatToggle.addEventListener("click", () => {
  setChatOpen(chatPanel.hidden);
});
chatClose.addEventListener("click", () => {
  setChatOpen(false);
  chatToggle.focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    setChatOpen(false);
    chatToggle.focus();
  }
});
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) {
    return;
  }
  addChatMessage(question, "user");
  const response = respondToChat(question);
  addChatMessage(response.text, "assistant", response.withContacts);
  if (response.withApplyLink) {
    const answer = chatMessages.lastElementChild;
    const link = document.createElement("a");
    link.className = "sodra-chat-apply";
    link.href = "https://ais-pre-h7ndttgksavn5xycpeiz3e-182392936181.europe-west1.run.app/?portal=apply#apply";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open application portal";
    answer.append(link);
  }
  chatForm.reset();
  chatInput.focus();
});
addChatMessage("Hi! I’m the SODRA website assistant. Ask me about our services, applications, featured jobs, or contact details.", "assistant");
