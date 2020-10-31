require('../src/db/mongoose');
const User = require('../src/models/user');

// 5f954b074ad8a61e4c9db2d4

// User.findByIdAndUpdate('5f9583268142d636acbfaa43', {
//     age: 1
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('5f9583268142d636acbfaa43', 3).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});