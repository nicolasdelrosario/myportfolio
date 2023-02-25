const Work1 = 'https://res.cloudinary.com/dlghcisov/image/upload/v1677284037/projects/myportfolio/work1.webp';
const Work2 = 'https://res.cloudinary.com/dlghcisov/image/upload/v1677284037/projects/myportfolio/work2.webp';
const Work3 = 'https://res.cloudinary.com/dlghcisov/image/upload/v1677284037/projects/myportfolio/work3.webp';

const url1 = 'https://pomodorotaskmanager.nicolasdelrosario.com';
const url2 = 'https://user.nicolasdelrosario.com';
const url3 = 'https://groovy-clone.nicolasdelrosario.com';


const projectsData = [
  {
    id: 1,
    image:  Work1,
    title: 'Pomodoro Task Master',
    description: 'It is a simple and easy-to-use task management application that helps users to improve their productivity by using the Pomodoro Technique.',
    url: url1,
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'Boostrap Icons', 'Vercel']
  },
  {
    id: 2,
    image: Work2,
    title: 'User CRUD',
    description: 'It allows users to create, read, update and delete (CRUD) user data. It includes a simple web interface that communicates with a serverless function to store the data in a serverless database.',
    url: url2,
    technologies: ['HTML', 'CSS', 'JavaScript','PHP', 'Bootstrap', 'Bootstrap Icons', 'Serveless Function', 'Serveless MySQL', 'Vercel' ]
  },
  {
    id: 3,
    image: Work3,
    title: 'Groovy Clone',
    description: 'It is a replica of the Groovy website. The goal is to showcase skills in web development and user interface design. ',
    url: url3,
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'Bootstrap Icons']
  }
]

export default projectsData