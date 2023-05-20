const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const { firstName, lastName, age } = profile;
   
  console.log(firstName, lastName, age);
   
  /* output:
  John Doe 18
  */

 // Assigning to Different Local Variable Names
 const profile1 = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile1;
   
  console.log(localFirstName);
  console.log(localLastName);
  console.log(localAge);
   
   
  /* output:
  John
  Doe
  18
  */