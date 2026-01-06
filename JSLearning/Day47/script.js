const users = [
  {
    username: "Alex Carter",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description:
      "Builds clean and interactive user interfaces using modern web technologies.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    username: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profession: "UI/UX Designer",
    description:
      "Designs intuitive user experiences with a focus on accessibility and aesthetics.",
    tags: ["Figma", "UX Research", "Wireframing", "Prototyping"],
  },
  {
    username: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    profession: "Full Stack Developer",
    description:
      "Works across frontend and backend to build scalable web applications.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    username: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    profession: "Product Manager",
    description:
      "Bridges the gap between business goals and technical execution.",
    tags: ["Agile", "Scrum", "Roadmapping", "Stakeholder Management"],
  },
  {
    username: "Daniel Kim",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    profession: "Data Analyst",
    description:
      "Analyzes data to extract insights and support data-driven decisions.",
    tags: ["SQL", "Python", "Data Visualization", "Statistics"],
  },
];

let sum = '';

users.forEach((e) => {
    sum =
      sum +
      `<div class="card">
            <img src="${e.image}" alt="">
            <h3>
                ${e.username}
            </h3>

            <h4>
                ${e.profession}
            </h4>

            <p>
                ${e.description}
            </p>

        </div>`;
})

let main = document.querySelector('main');

main.innerHTML = sum;