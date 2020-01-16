const server = require('./api/server.js');

// if process does not exist then grab 4000 
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
