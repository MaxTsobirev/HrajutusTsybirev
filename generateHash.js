const bcrypt = require('bcrypt');
const myPassword = '';

console.time('Time to generate salt');
const salt = bcrypt.genSaltSync(10);
console.log('This is your salt: ');
console.timeEnd('Time to generate salt');

console.time('Time to generate hash');
const hashedPassword = bcrypt.hashSync(myPassword,salt);
console.log(myPassword + 'is your password and this is you password after hashing it:'+hashedPassword);
console.timeEnd('Time to generate hash');