const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};

// normal

const clone = JSON.parse(JSON.stringify(person))

// Polyfill for deepCopy

function deepCopy (obj) {
  if(obj === null || typeof obj != "object") return obj;
  
  let clone = Array.isArray(obj) ? [] : {};
  
  for(const key in obj) {
      clone[key] = deepCopy(obj[key]);
  }
  return clone;
}

deepCopy(person)
