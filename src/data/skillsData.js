export const skillsData = [
  {
    category: 'Backend Development',
    id: 'backend',
    description: 'Core focus area building robust server-side applications, REST APIs, and database persistence layers.',
    skills: [
      { name: 'Java', level: 'Core Language', desc: 'Object-Oriented Programming, Collections, Streams, Multithreading', icon: 'Coffee' },
      { name: 'Spring Boot', level: 'Primary Framework', desc: 'Auto-configuration, Starter Modules, Actuator, REST APIs', icon: 'Zap' },
      { name: 'Spring MVC', level: 'Web Architecture', desc: 'DispatcherServlet, Controller mappings, Model Binding', icon: 'Layers' },
      { name: 'Spring Data JPA', level: 'Data Access', desc: 'Repository abstractions, Query methods, Pagination', icon: 'Database' },
      { name: 'Hibernate', level: 'ORM Engine', desc: 'Entity mappings, HQL, Lazy/Eager loading, Cascading', icon: 'GitMerge' },
      { name: 'REST API', level: 'API Design', desc: 'HTTP verbes, Status codes, JSON serialization, Endpoint design', icon: 'Globe' },
      { name: 'JDBC', level: 'Database Connectivity', desc: 'PreparedStatement, Connection pooling, ResultSets', icon: 'Server' }
    ]
  },
  {
    category: 'Databases & Storage',
    id: 'database',
    description: 'Relational database modeling, query writing, indexing basics, and ORM persistence.',
    skills: [
      { name: 'MySQL', level: 'Primary RDBMS', desc: 'Relational schema design, Joins, Indexes, Foreign Keys', icon: 'Database' },
      { name: 'SQL', level: 'Query Language', desc: 'DML, DDL, Complex Joins, Aggregation, Subqueries', icon: 'Code' },
      { name: 'H2 Database', level: 'In-Memory DB', desc: 'Rapid prototyping, Integration testing, Console debugging', icon: 'Cpu' }
    ]
  },
  {
    category: 'Frontend Development',
    id: 'frontend',
    description: 'Building clean, responsive client interfaces to interface seamlessly with backend services.',
    skills: [
      { name: 'HTML5', level: 'Markup', desc: 'Semantic markup, Accessibility structure, Forms', icon: 'FileCode' },
      { name: 'CSS3', level: 'Styling', desc: 'Flexbox, CSS Grid, Transitions, Media Queries, Custom variables', icon: 'Palette' },
      { name: 'JavaScript', level: 'Scripting', desc: 'ES6+ syntax, Promises, Async/Await, DOM manipulation, Fetch API', icon: 'Terminal' },
      { name: 'React', level: 'Frontend Library', desc: 'Functional components, Hooks, Context API, Tailwind CSS', icon: 'Atom' }
    ]
  },
  {
    category: 'Developer Tools',
    id: 'tools',
    description: 'Modern development workflow, build automation, version control, and API testing.',
    skills: [
      { name: 'Git', level: 'Version Control', desc: 'Branching, Merging, Stashing, Commit conventions', icon: 'GitBranch' },
      { name: 'GitHub', level: 'Collaboration', desc: 'Repositories, Pull Requests, Code Reviews, Actions', icon: 'Github' },
      { name: 'Maven', level: 'Build Tool', desc: 'POM configuration, Dependency management, Lifecycles', icon: 'Box' },
      { name: 'Postman', level: 'API Testing', desc: 'Endpoint validation, Environment variables, JSON collections', icon: 'Send' },
      { name: 'IntelliJ IDEA', level: 'Primary IDE', desc: 'Debugging, Refactoring, Spring Boot integration tools', icon: 'Monitor' }
    ]
  },
  {
    category: 'Core Computer Science',
    id: 'concepts',
    description: 'Foundational principles ensuring scalable, maintainable, and well-structured code.',
    skills: [
      { name: 'OOP Principles', level: 'Core Design', desc: 'Encapsulation, Inheritance, Polymorphism, Abstraction', icon: 'Shield' },
      { name: 'Collections Framework', level: 'Data Structures', desc: 'List, Set, Map, Queue, ArrayList, HashMap implementations', icon: 'List' },
      { name: 'Exception Handling', level: 'Robustness', desc: 'Try-catch, Checked/Unchecked exceptions, Custom exceptions', icon: 'AlertTriangle' },
      { name: 'MVC Architecture', level: 'Design Pattern', desc: 'Separation of Model, View, and Controller layers', icon: 'Layout' },
      { name: 'Dependency Injection', level: 'Spring Core', desc: 'Inversion of Control (IoC), @Autowired, Component scanning', icon: 'CheckCircle' },
      { name: 'CRUD Operations', level: 'Data Lifecycle', desc: 'Create, Read, Update, Delete operational logic', icon: 'RefreshCw' }
    ]
  }
];
