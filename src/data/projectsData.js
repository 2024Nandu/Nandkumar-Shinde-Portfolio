export const projectsData = [
  {
    id: 'ai-mock-interview',
    title: 'AI Mock Interview Web Application',
    tagline: 'AI-Powered Technical Interview Preparation & Evaluation Platform',
    category: ['Featured Project', 'Java', 'Spring Boot', 'Backend', 'Full Stack', 'REST API'],
    featured: true,
    badge: 'Featured Project',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    description: 'An AI-powered voice mock interview platform designed to help candidates prepare for technical interviews. Features resume parsing (PDF/DOCX), dynamic LLM question generation, real-time voice speech recognition, Deepgram TTS, and automated scoring roadmap.',
    fullDescription: 'Built using Java 21, Spring Boot, MySQL, and Spring Security on the backend, alongside a React 19 single-page frontend. The system ingests resumes in PDF/DOCX format using Apache PDFBox/POI, parses key candidate metrics via LLM integration, generates customized interview questions dynamically, processes spoken responses in real-time using Web Speech API & Deepgram TTS, and generates automated candidate evaluation roadmaps.',
    technologies: ['Java 21', 'Spring Boot', 'REST API', 'Spring Security', 'JPA / Hibernate', 'MySQL', 'React 19', 'Tailwind CSS', 'Web Speech API', 'Deepgram TTS'],
    highlights: [
      'Built with Java 21, Spring Boot, MySQL, and Spring Security architecture',
      'Resume parsing for PDF & DOCX using Apache PDFBox & Apache POI',
      'Dynamic LLM integration to generate tailored role-specific interview questions',
      'Real-time voice speech recognition and Deepgram text-to-speech audio feedback',
      'Automated candidate response evaluation scoring engine with roadmap generation',
      'Full RESTful API endpoints for user sessions, candidate profiles, and interview histories'
    ],
    architecture: 'Client (React 19 + Speech API) → Spring Boot REST Controller → Candidate Profile & Resume Service (PDFBox / LLM) → Security Filter Chain → Spring Data JPA Repository → MySQL Database',
    challengesSolved: [
      'Optimized resume parsing latency by chunking text extractions before submitting to LLM.',
      'Handled asynchronous audio stream events gracefully between Web Speech API and backend evaluation engines.',
      'Secured candidate session state using Spring Security JWT authentication.'
    ],
    github: 'https://github.com/2024Nandu/AI-Mock-Interview-web-application',
    demo: 'https://github.com/2024Nandu/AI-Mock-Interview-web-application'
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    tagline: 'Enterprise CRUD REST API Service for Educational Data',
    category: ['Java', 'Spring Boot', 'Backend', 'REST API'],
    featured: false,
    badge: 'Backend REST API',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    description: 'A REST-based application for managing student information including creating, retrieving, updating, and deleting student records.',
    fullDescription: 'Designed using Spring Boot, Spring Data JPA, and Hibernate with a MySQL database. Implements structured Controller-Service-Repository layers to manage complete student lifecycle data, course enrollments, and academic grades with robust validation and exception handling.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'REST API', 'Postman'],
    highlights: [
      'Layered Controller-Service-Repository architecture',
      'Full CRUD REST API endpoints for student records',
      'Custom exception handlers with standardized error JSON responses',
      'Automated schema generation and relational mappings with JPA/Hibernate'
    ],
    architecture: 'REST Client → StudentController → StudentService → StudentRepository → MySQL',
    challengesSolved: [
      'Implemented custom global exception handler (`@ControllerAdvice`) for handling ResourceNotFoundException.',
      'Optimized database queries with Spring Data JPA derived method names.'
    ],
    github: 'https://github.com/2024Nandu',
    demo: 'https://github.com/2024Nandu'
  },
  {
    id: 'banking-management-system',
    title: 'Banking Management System',
    tagline: 'Secure Backend Banking Operations & Transaction Engine',
    category: ['Java', 'Spring Boot', 'Backend', 'REST API'],
    featured: false,
    badge: 'Backend System',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop',
    description: 'A backend banking application designed to manage customer records and basic banking operations using Spring Boot and JPA.',
    fullDescription: 'Implements core banking functionalities including account creation, balance inquiry, deposit/withdrawal transactions, and account status management with transactional integrity (`@Transactional`).',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'SQL', 'REST API'],
    highlights: [
      'Transactional safety for balance updates and fund transfers',
      'Structured DTO (Data Transfer Object) patterns for clean payload contracts',
      'Customer account verification and relational database mapping'
    ],
    architecture: 'REST Client → AccountController → AccountService (@Transactional) → AccountRepository → SQL DB',
    challengesSolved: [
      'Ensured atomic transactions during balance updates to prevent race conditions.',
      'Validated input request payloads before persisting to database.'
    ],
    github: 'https://github.com/2024Nandu',
    demo: 'https://github.com/2024Nandu'
  },
  {
    id: 'employee-management-system',
    title: 'Employee Management System',
    tagline: 'Spring MVC & Spring Boot Web Application',
    category: ['Java', 'Spring Boot', 'Backend', 'Full Stack'],
    featured: false,
    badge: 'Spring MVC',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    description: 'A CRUD web application for managing employee information using a structured Controller-Service-Repository architecture.',
    fullDescription: 'Built to streamline organizational employee directories, department assignments, and salary tracking. Demonstrates clean separation of concerns using Spring MVC controllers and Spring Data JPA persistence.',
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'JPA', 'MySQL', 'HTML/CSS'],
    highlights: [
      'Controller-Service-Repository design pattern',
      'Employee record creation, modification, searching, and deletion',
      'MySQL relational database integration'
    ],
    architecture: 'Browser / Client → EmployeeController → EmployeeService → EmployeeRepository → MySQL',
    challengesSolved: [
      'Designed clean request mapping paths for seamless CRUD navigation.',
      'Configured HikariCP connection pooling for fast database response times.'
    ],
    github: 'https://github.com/2024Nandu',
    demo: 'https://github.com/2024Nandu'
  },
  {
    id: 'rest-api-project',
    title: 'Spring Boot REST API Showcase',
    tagline: 'Standardized Backend HTTP Endpoint Service',
    category: ['Java', 'Spring Boot', 'Backend', 'REST API'],
    featured: false,
    badge: 'API Specialist',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    description: 'A RESTful backend application demonstrating clean CRUD API development, request validation, and status code management using Spring Boot.',
    fullDescription: 'Demonstrates best practices in RESTful Web Services design including GET, POST, PUT, DELETE mappings, HTTP status codes (200 OK, 201 Created, 404 Not Found, 400 Bad Request), and Swagger/OpenAPI documentation.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Jackson JSON', 'Maven', 'Postman'],
    highlights: [
      'Strict adherence to REST architecture principles and HTTP verbs',
      'JSON payload serialization and deserialization using Jackson',
      'Tested with Postman and unit test assertions'
    ],
    architecture: 'HTTP Client (Postman) → DispatcherServlet → RestController → Service Layer → Response Entity',
    challengesSolved: [
      'Standardized API error responses across all endpoint paths.',
      'Utilized ResponseEntity wrapper for explicit status code returning.'
    ],
    github: 'https://github.com/2024Nandu',
    demo: 'https://github.com/2024Nandu'
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone Website',
    tagline: 'Responsive E-Commerce User Interface Replication',
    category: ['Frontend', 'Full Stack'],
    featured: false,
    badge: 'Frontend UI',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop',
    description: 'A responsive e-commerce web application replicating the layout, navigation, hero banner slider, and product card structures of Amazon.',
    fullDescription: 'Developed during internship training to master advanced CSS layout techniques, Flexbox, CSS Grid, media queries, and modular frontend components.',
    technologies: ['HTML5', 'CSS3', 'Flexbox', 'JavaScript', 'Responsive Web Design'],
    highlights: [
      'Replicated Amazon navigation bar, sub-header, and search UI',
      'Horizontally aligned responsive product cards with hover effects',
      'Fully responsive cross-device layout optimization'
    ],
    architecture: 'HTML5 Semantic Layout → Modular CSS Stylesheets → Vanilla JavaScript Interactivity',
    challengesSolved: [
      'Achieved precise multi-column layout grid consistency across mobile and desktop viewpoints.',
      'Optimized image assets for fast rendering.'
    ],
    github: 'https://github.com/2024Nandu',
    demo: 'https://github.com/2024Nandu'
  }
];
