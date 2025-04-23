const carData = {
  tesla: {
    name: "Tesla Model 3 Performance",
    tagline: "Speed. Simplicity. Sustainability.",
    image: "https://assets.onecompiler.app/42zqpfvps/43fcafswm/Screenshot%20(79).png",
    description: "The 2025 Tesla Model 3 Performance delivers lightning-fast acceleration, refined interior, and long range with Autopilot features.",
    features: [
      "0-60 mph in 3.1 seconds",
      "Estimated 320+ mile range",
      "Dual-motor all-wheel drive",
      "Autopilot and FSD option",
      "Redesigned dashboard with ambient lighting",
    ],
  },
  lucid: {
    name: "Lucid Gravity",
    tagline: "Luxury. Space. Range.",
    image: "https://assets.onecompiler.app/42zqpfvps/43fc8gj6q/Screenshot%20(75).png",
    description: "A luxury 3-row SUV with cutting-edge design and over 440 miles of range. Perfect for families and long drives.",
    features: [
      "Over 440 miles of range",
      "3-row luxury seating",
      "Glass canopy roof",
      "21-speaker sound system",
      "Autonomous-ready tech",
    ],
  },
  rivian: {
    name: "Rivian R2",
    tagline: "Adventure-ready Compact EV.",
    image: "https://assets.onecompiler.app/42zqpfvps/43fc8gj6q/Screenshot%20(76).png",
    description: "The Rivian R2 is a smaller, more affordable version of the R1S with off-road capability and innovative storage.",
    features: [
      "Dual or tri-motor option",
      "Range: ~300+ miles",
      "Front trunk + gear tunnel",
      "Built-in camp kitchen (option)",
      "Off-road driving modes",
    ],
  },
    bmw: {
    name: "BMW i5",
    tagline: "Luxury meets electrification.",
    image: "https://assets.onecompiler.app/42zqpfvps/43fc8gj6q/Screenshot%20(77).png",
    description: "The BMW i5 blends classic BMW driving dynamics with modern EV performance, offering an executive sedan feel in an all-electric platform.",
    features: [
      "Estimated range: 295 miles",
      "RWD or AWD variants",
      "iDrive 8.5 infotainment",
      "Panoramic sunroof",
      "5G connectivity & OTA updates",
    ],
  },
  ioniq: {
    name: "Hyundai Ioniq 7",
    tagline: "Futuristic family EV SUV.",
    image: "https://assets.onecompiler.app/42zqpfvps/43fc8gj6q/Screenshot%20(78).png",
    description: "Hyundai's flagship electric SUV brings bold design, spacious 3-row seating, and advanced tech to the EV world.",
    features: [
      "3-row seating configuration",
      "Estimated range: 300+ miles",
      "Dual-motor AWD",
      "SmartSense safety suite",
      "Sliding lounge-style seats",
    ],
  },

};


const params = new URLSearchParams(window.location.search);
const carId = params.get("id");
const car = carData[carId];

if (car) {
  document.getElementById("car-name").textContent = car.name;
  document.getElementById("car-tagline").textContent = car.tagline;
  document.getElementById("car-image").src = car.image;
  document.getElementById("car-description").textContent = car.description;

  const featuresEl = document.getElementById("car-features");
  car.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresEl.appendChild(li);
  });
} else {
  document.body.innerHTML = "<h2 style='text-align:center;'>Car not found.</h2>";
}
