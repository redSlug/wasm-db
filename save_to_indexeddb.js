const request = indexedDB.open('myDatabase', 1);

request.onupgradeneeded = (event) => {
    console.log('upgrade needed')
    const db = event.target.result;
    const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });

    // Define your object store schema based on your data model
    // For example, you might create indexes for different fields
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('address', 'address', { unique: false });
};

request.onsuccess = (event) => {
    console.log('upgrade success')

    const db = event.target.result;

    // Now that the database is created, you can start inserting data
    // from your exported SQLite data into the IndexedDB database.
};
