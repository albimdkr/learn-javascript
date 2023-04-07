//CONSOLE OBJECT METHODS
//console.log()
console.log('30 Days Of JavaScript');

//subtitution
console.log('%d %s of JavaScript', 30, 'Days');

//CSS
console.log('%c30 Days Of JavaScript', 'color:green');
console.log('%c30 Days%c %cOf%c %cJavaScript%c', 'color:green', '', 'color:red', '', 'color:yellow');

//console.warn()
//to give warning
console.warn('This is a warning');
console.warn('Warning is different from error!');

//console.error()
console.error('This is an error message!');
console.error('we all make mistakes!');

//console.table()
const OS = ['Windows', 'Linux', 'MacOS', 'Android'];
console.table(OS);

const user = {
    name : 'Albi',
    title : 'Programmer',
    country : 'Indonesia',
    city : 'Bandung',
    status : 'Student'
};
console.table(user)

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users);

  //console.time()
  var countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ];
  console.time('Regular for loop')
  for (var i = 0; i < countries.length; i++){
    console.log(countries[i][0], countries[i][1]);
  };
  console.timeEnd('Regular for loop');

  console.time('for of loop');
  for(const [name, city] of countries){
    console.log(name, city);
  };
  console.timeEnd('for of loop');

  console.time('forEach loop');
  countries.forEach(([name, city]) => {
    console.log(name, city);
  });
  console.timeEnd('forEach loop');

  //console.info()
  console.info('30 Days Of JavaScript challenges in trending on github');
  console.info('30 Days JavaScript, can frontEnd or BackEnd');
  console.info('With learn JavaScript, you have knowlodge about web tech');

  //console.assert()
  console.assert(4 > 3, 'Is Greater than 3');//no result cause true
  console.assert(3 > 4, 'Is not grater than 4');//Assertion failed
  for (let i = 0; i <= 10; i += 1){
    let errorMesssage = `${i} is not even`
    console.log('the # is ' + i);
    console.assert(i % 2 === 0, {number : i, errorMesssage: errorMesssage});
  };

  //console.group()
var names = ['Asabeneh', 'Brook', 'David', 'John'];
var countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
var user1 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
var users1 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
];

//by names
console.group('Names');
console.log(names);
console.groupEnd();
//by countries
console.group('Countries');
console.log(countries1);
console.groupEnd();
//by users
console.group('Users');
console.log(users1);
console.groupEnd();

//console.count()
const funct = () => {
    console.count('Function Has Been Called');
};
funct();
funct();
funct();
