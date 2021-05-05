//Ejemplo de un manejador de peticion usando callbacks
function requestHnalder(req, res) {
  User.findById(req.userId, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      Task.findById(user.tasksId, function (err, task) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          task.save(function (err) {
            if (err) {
              return res.send(err);
            } else {
              res.send("Task completed");
            }
          });
        }
      });
    }
  });
}

//Ejemplo de un manejador de peticion usando promesas
function requestHandlerPromise(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Task.findById(user.tasksId);
    })
    .then(function (tasks) {
      tasks.completed = true;
      return task.save(tasks);
    })
    .then(function () {
      res.send("Task completed");
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Ejemplo de un manejador de peticion usando promesas
async function requestHandlerAsyncAwait(req, res) {
  try {
    const user = await User.findById(res.userId);
    const tasks = await Task.findById(user.tasksId);
    tasks.completed = true;
    await task.save(tasks);
    res.send("Task completed");
  } catch (e) {
    res.send(e);
  }
}
