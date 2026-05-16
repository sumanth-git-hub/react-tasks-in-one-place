export const codeExamples =  {
  "script.js": `const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function highlightActiveSection() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === {currentSection}) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightActiveSection);

function smoothScroll(targetId) {
  const target = document.querySelector(targetId);
  target.scrollIntoView({ behavior: "smooth" });
}`,
  "web.jsx": `import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.clientHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex gap-6">
      {["home", "about", "services", "contact"].map((item) => (
        <a
          key={item}
          href={{item}}
          className={active === item ? "text-blue-500 font-bold" : ""}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}`,
  "native.jsx": `import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const services = [
  { id: "1", name: "Web Design" },
  { id: "2", name: "App Development" },
  { id: "3", name: "UI/UX Design" },
  { id: "4", name: "SEO Optimization" }
];

export default function ServicesScreen() {
  const [selected, setSelected] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelected(item.id)}>
      <Text style={{ padding: 12, fontSize: 16,
        backgroundColor: selected === item.id ? "#4f46e5" : "#e5e7eb",
        color: selected === item.id ? "#fff" : "#000" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}`,
};

export const floatingCards = {
    "script.js" : {
        bgColor: "bg-blue-500/20",
        iconColor : "text-yellow-300",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "JS",
        title: "Javascript",
        content: "Create dynamic and interactive content on websites."
    },
  "web.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-sky-300",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "RJ",
    title: "React.js",
    content: "JavaScript library used to build scalable web applications",
  },
  "native.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-sky-300",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "RJ",
    title: "React Native",
    content: "Framework used to build cross-platform mobile applications",
  },
}