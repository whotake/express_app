export default callback => {
    const dbName = 'test';
    const nano = require('nano')('http://localhost:5984');

    nano.db.get(dbName, (error) => {
        if (error) {
            nano.db.create(dbName)
        }
    });

    const DATABASE = nano.db.use(dbName);
	// connect to a database if needed, then pass it to `callback`:
	callback(DATABASE);
}
