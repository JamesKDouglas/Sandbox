function greetDevelopers(list) {
    for (i in list){
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
    }
    return list;
};

const list1 = [
    {
      firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    },
    {
      firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    },
    {
      firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    },
  ];

  const answer = [
    {
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
      greeting: 'Hi Sofia, what do you like the most about Java?',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
      greeting: 'Hi Lukas, what do you like the most about Python?',
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
      greeting: 'Hi Madison, what do you like the most about Ruby?',
    },
  ];


console.log(greetDevelopers(list1)); 