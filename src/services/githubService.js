const GITHUB_USERNAME = '2024Nandu';

const FALLBACK_PROFILE = {
  login: '2024Nandu',
  name: 'Nandkumar Shinde',
  avatar_url: 'https://github.com/2024Nandu.png',
  html_url: 'https://github.com/2024Nandu',
  bio: 'Java Backend & Full-Stack Developer | Building scalable web applications with Spring Boot, Hibernate, SQL & React.',
  public_repos: 12,
  followers: 18,
  following: 25,
  location: 'Bangalore, India'
};

const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'AI-Mock-Interview-web-application',
    description: 'An AI-powered voice mock interview platform built with Java 21, Spring Boot, MySQL, Spring Security, PDFBox resume parsing, and React 19.',
    html_url: 'https://github.com/2024Nandu/AI-Mock-Interview-web-application',
    language: 'Java',
    stargazers_count: 5,
    forks_count: 2,
    updated_at: '2026-03-01T10:00:00Z',
    topics: ['java', 'spring-boot', 'react', 'mysql', 'ai-interview', 'pdfbox']
  },
  {
    id: 2,
    name: 'Student-Management-System',
    description: 'RESTful API for managing student records using Java, Spring Boot, Spring Data JPA, Hibernate, and MySQL.',
    html_url: 'https://github.com/2024Nandu',
    language: 'Java',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: '2026-02-15T14:30:00Z',
    topics: ['java', 'spring-boot', 'rest-api', 'jpa', 'mysql']
  },
  {
    id: 3,
    name: 'Banking-Management-System',
    description: 'Backend banking application designed to handle customer accounts, transactional balance updates, and Spring Data JPA persistence.',
    html_url: 'https://github.com/2024Nandu',
    language: 'Java',
    stargazers_count: 4,
    forks_count: 1,
    updated_at: '2026-01-20T09:15:00Z',
    topics: ['java', 'spring-boot', 'banking-system', 'hibernate']
  },
  {
    id: 4,
    name: 'Employee-Management-System',
    description: 'Spring MVC CRUD web application implementing Controller-Service-Repository architecture.',
    html_url: 'https://github.com/2024Nandu',
    language: 'Java',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: '2026-01-10T16:00:00Z',
    topics: ['java', 'spring-mvc', 'crud', 'mysql']
  },
  {
    id: 5,
    name: 'Amazon-Clone-Website',
    description: 'Responsive Amazon e-commerce website clone using semantic HTML5, CSS3, Flexbox, and JavaScript.',
    html_url: 'https://github.com/2024Nandu',
    language: 'HTML',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: '2025-12-28T11:45:00Z',
    topics: ['html5', 'css3', 'flexbox', 'javascript']
  }
];

export async function fetchGithubProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) throw new Error('GitHub API rate limited or unavailable');
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn('Using fallback GitHub profile:', error.message);
    return FALLBACK_PROFILE;
  }
}

export async function fetchGithubRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
    if (!res.ok) throw new Error('GitHub API rate limited or unavailable');
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return FALLBACK_REPOS;
    return data;
  } catch (error) {
    console.warn('Using fallback GitHub repositories:', error.message);
    return FALLBACK_REPOS;
  }
}
