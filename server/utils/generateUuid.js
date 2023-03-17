const {v4: uuidv4} = require('uuid');

module.exports = getRandomUuid = () => {
    const randomUuid = uuidv4();
    return randomUuid;
}