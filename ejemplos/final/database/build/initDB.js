// Create DB and collection
db = new Mongo().getDB("sample_db");
db.createCollection("random_collection");

// Random Spanish names and surnames
const names = ["Alejandro", "Beatriz", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel", "Hilda", "Ignacio", "Juana", "Karla", "Luis", "Marta", "Nicolas", "Olga", "Pablo", "Quirina", "Ricardo", "Sofia", "Tomas"];
const surnames = ["Garcia", "Martinez", "Lopez", "Hernandez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Flores", "Rivera", "Gomez", "Diaz", "Cruz", "Morales", "Ortiz", "Gutierrez", "Chavez", "Vasquez", "Ramos"];

// Function to generate a random integer between min and max (inclusive)
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate a random float between min and max
const getRandomFloat = (min, max) => {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
};

// Generate sample data
const generateSampleData = () => {
  const numEntries = getRandomInt(10, 20);
  const sampleData = [];
  
  for (let i = 1; i <= numEntries; i++) {
    const name = `${names[getRandomInt(0, names.length - 1)]} ${surnames[getRandomInt(0, surnames.length - 1)]} ${surnames[getRandomInt(0, surnames.length - 1)]}`;
    const value = getRandomFloat(0, 10);
    sampleData.push({ id: i, name, value });
  }
  
  return sampleData;
};

// Insert sample data into the collection
const sampleData = generateSampleData();
db.random_collection.insertMany(sampleData);

console.log("Sample data inserted successfully");