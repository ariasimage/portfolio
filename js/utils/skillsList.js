import skillsData from '../data/skills.js';

const skillsList = () => {
  const skillsContainer = document.getElementById('skills-list');
  if (!skillsContainer) return;

  // Filtrar solo las skills dominadas
  const masteredSkills = skillsData.filter(
    (skill) => skill.state === 'dominada',
  );
  // Pintar toda la info de skills dentro del bloque html de skills-list
  const skillsHTML = masteredSkills
    .map(
      (skill) => `
        <article class="skill__card">
        <div class="skill__icon">
            <img src="${skill.icon}" alt="${skill.name} icon" />
        </div>
        <div class="skill__info">
            <h3 class="skill__name">${skill.name}</h3>
            <p class="skill__level">${skill.level}</p>
            <p class="skill__description">${skill.description}</p>
            <ul class="skill__tags">
                ${skill.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
        </div>
    </article>
    `,
    )
    .join('');

  skillsContainer.innerHTML = skillsHTML;
};

export default skillsList;
