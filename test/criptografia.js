const bcrypt = require('bcryptjs');

const numSalt = 10;
/*
bcrypt.genSalt(numSalt, (err, salt) => {
    if (!!err) {
        console.error(err);
    } else {
        console.log(salt);
        bcrypt.hash("123123123123", salt, (err, hash) => {
            if (!!err) {
                console.error(err);
            } else {
                console.log(hash);
            }
        });
    }
});
*/

bcrypt.hash('123123', 10, (err, hash) => {
    if (!!err) {
        console.error(err);
    } else {
        
        console.log(hash.length);
        console.log(hash);
    }
});

