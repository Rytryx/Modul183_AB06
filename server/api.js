const pino = require("pino"); 
const logger = pino(); 

const initializeAPI = async (app) => {
  app.post("/api/login", login);
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const answer = `
    <h1>Answer</h1>
    <p>Username: ${username}</p>
    <p>Password: ${password}</p>
  `;

  logger.info(`Login request received for username: ${username}`);

  res.send(answer);
};

module.exports = { initializeAPI };
