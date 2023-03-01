const Work1 = 'https://res.cloudinary.com/dlghcisov/image/upload/v1677284037/projects/myportfolio/work1.webp';
const Work2 = 'https://res.cloudinary.com/dlghcisov/image/upload/v1677284037/projects/myportfolio/work2.webp';
const Work3 = 'https://res.cloudinary.com/dlghcisov/image/upload/v1677284037/projects/myportfolio/work3.webp';

const url1 = 'https://pomodorotaskmanager.nicolasdelrosario.com';
const url2 = 'https://user.nicolasdelrosario.com';
const url3 = 'https://groovy-clone.nicolasdelrosario.com';

const github1 = 'https://github.com/nicolasdelrosario/Pomodoro-Task-Manager';
const github2 = 'https://github.com/nicolasdelrosario/User-CRUD';
const github3 = 'https://github.com/nicolasdelrosario/Groovy-Clone';


const projectsData = [
  {
    id: 1,
    image: Work1,
    title: 'Pomodoro Task Master',
    description: 'It is a time management tool designed to help users be more productive.',
    url: url1,
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'Boostrap Icons', 'Vercel'],
    github: github1
  },
  {
    id: 2,
    image: Work2,
    title: 'User CRUD',
    description: 'It allows users to create, read, update and delete (CRUD) user data. It communicates with a serverless function to store the data in a serverless database.',
    url: url2,
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'Bootstrap Icons', 'Serveless Function', 'Serveless MySQL', 'Vercel'],
    github: github2
  },
  {
    id: 3,
    image: Work3,
    title: 'Groovy Clone',
    description: 'This project is a replica of the Groovy website.',
    url: url3,
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'Bootstrap Icons'],
    github: github3
  }
]

export default projectsData