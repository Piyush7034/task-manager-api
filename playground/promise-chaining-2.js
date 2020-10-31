require('../src/db/mongoose');
const Task = require('../src/models/task');

// 5f9585b577c99a0f44d4e1ba

// Task.findByIdAndDelete('5f95a5b1b5f1d43ca05b5c4b').then((task) => {
//     console.log(task);

//     return Task.countDocuments({ completed: true });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5f9585b577c99a0f44d4e1ba').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});

