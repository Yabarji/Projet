export const cv: any[] = [
  {
    id: 1,
    nom: 'DEVELOPPEUR JAVA EE',
    user: {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@gmail.com',
      password: 'password',
      admin: false,
      adresse: '256 avenue de la marne 59800 Lille',
      telephone: '06 118 218 00',
      date_naissance: '1980-01-01'
    },
    picture: null,
    formations: [
      {
        'id': 1,
        'nom': 'BAC S',
        'start_date': '2005-09-01',
        'end_date': '2006-06-30',
        'ville': 'Lille',
        'description': 'Lycée Arthur Rimbault'
      },
      {
        'id': 2,
        'nom': 'BTS Informatique',
        'start_date': '2006-09-01',
        'end_date': '2008-06-30',
        'ville': 'Lille',
        'description': 'Lycée Arthur Rimbault'
      },
      {
        'id': 3,
        'nom': 'Licence Informatique',
        'start_date': '2008-09-01',
        'end_date': '2009-06-30',
        'ville': 'Lille',
        'description': 'Université Lille 3'
      },
      {'id': 4, 'nom': 'Formation Java JEE', 'start_date': '2011-03-01', 'end_date': '2011-03-05', 'ville': 'Lille', 'description': 'Dawan'}
    ],
    experiences: [
      {
        'id': 1,
        'nom': 'Développeur Java JEE',
        'start_date': '2010-06-10',
        'end_date': null,
        'entreprise': 'Web Development Univers',
        'description': 'Développement d\'application JEE'
      },
      {
        'id': 2,
        'nom': 'Developpeur Php',
        'start_date': '2009-10-05',
        'end_date': '2010-04-05',
        'entreprise': 'Management Corporation',
        'description': 'Développement d\'un outil de gestion du personnel'
      }
    ],
    competences: [
      {'id': 1, 'nom': 'Language Programmation', 'tags': ['HTML5', 'CSS3', 'Php', 'MySQL', 'JAVA', 'JAVA EE']},
      {'id': 2, 'nom': 'Bureautique', 'tags': ['Word', 'Excel', 'Power Point']},
      {'id': 3, 'nom': 'Framework', 'tags': ['Angular', 'Bootstrap']}
    ],
    interets: [
      {id: 1, nom: 'Sport'},
      {id: 2, nom: 'Jeux Vidéo'},
      {id: 3, nom: 'Musique'}
    ]
  }
];
