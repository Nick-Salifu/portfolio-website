const projects = [
    {
      id: 1,
      name: 'The Wild Oasis',
      technologies: ['CSS', 'react.js'],
      description: 'An application solely for a cabin, where employees get to record the day to day activities of the cabin like number of guest per day, the cabins that were rented, number of people per cabin etc.',
      liveLink: 'github',
      githubLink: '#',
    },
    {
      id: 2,
      name: 'WorldWise',
      technologies: ['CSS', 'react.js'],
      description: 'A travel app for documenting and sharing your unique travel experiences. You get to document all the countries you have visited, the cities you have been to and places that are worth talking about out.',
      liveLink: '#',
      githubLink: '#', 
    },
    {
      id: 3,
      name: 'Fast Pizza',
      technologies: ['tailwindCss', 'react.js', 'redux'],
      description: 'This is an application that allows you order Pizza of different variety from the comfort of you home and get it delivered to you in your preferred location. All you have to do is login and select a pizza/pizzas of your choice, give us your phone number and address and get it delivered to you. You can also prioritize your order and get in delivered as fast as possible',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      name: 'Atomic Blog',
      technologies: ['CSS', 'react.js'],
      description: 'A blog that talks about everything, from entertainment to fashion to sport and lifestyle. All you have to do is search for the niche you are interested in and digest our super content',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      name: 'Bankist',
      technologies: ['html', 'CSS', 'javascript'],
      description: 'A virtual bank for carrying out your financial transactions. From saving, to withdrawal to taking loan. This is a simulation of an actual bank',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      name: 'Forkify',
      technologies: ['html', 'CSS', 'javascript'],
      description: 'This application gives you all the recipe required for making any meal of your choice. Search for the meal and you get all the recipes for preparing the meal. Happy cooking',
      liveLink: '#',
      githubLink: '#',
    },
];

function getTechColor(tech) {
    switch (tech.toLowerCase()) {
      case 'css':
        return 'bg-yellow-500 text-yellow-100';
      case 'react.js':
        return 'bg-green-700 text-green-300';
      case 'tailwindcss':
        return 'bg-blue-500 text-blue-100';
      case 'redux':
        return 'bg-purple-500 text-purple-200';
      case 'html':
        return 'bg-orange-500 text-orange-200';
      case 'javascript':
        return 'bg-pink-500 text-pink-200';
      default:
        return 'bg-gray-500 text-gray-300';
    }
}

// export default projects;
export { projects, getTechColor }