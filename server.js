const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('mydatabase.sqlite');

// Create the "grocery" table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS grocery (
    id INTEGER PRIMARY KEY,
    item_name TEXT
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table created successfully.');

    // Insert 5 initial items into the "grocery" table
    const initialItems = ['Apples', 'Bananas', 'Milk', 'Bread', 'Eggs'];

    const insertItem = db.prepare('INSERT INTO grocery (item_name) VALUES (?)');

    for (const item of initialItems) {
      insertItem.run(item, (err) => {
        if (err) {
          console.error('Error inserting item:', err.message);
        } else {
          console.log(`Inserted item: ${item}`);
        }
      });
    }

    insertItem.finalize();

    // Close the database connection
    db.close((err) => {
      if (err) {
        console.error('Error closing database connection:', err.message);
      } else {
        console.log('Database connection closed.');
      }
    });
  }
});
