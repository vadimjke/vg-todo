const errors = require('restify-errors');
const Task = require('../models/Task');

module.exports = server => {





    // Get All Tasks
    server.get('/tasks', async (req, res, next) => {
        try {
            const tasks = await Task.find({});
            res.send(tasks);
            next();
        } catch {
            return next(new errors.InvalidContentError(err));
        }
    });




    // Add a Task
    server.post('/tasks', async (req, res, next) => {
        // Check for JSON
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }
        const {
            text
        } = req.body;
        const task = new Task({
            text
        });
        try {
            const newTask = await task.save();
            res.send(201);
            next();
        } catch (err) {
            return next(new errors.InternalError(err.message));
        }
    });




    // Update a Task
    server.put('/tasks/:id', async (req, res, next) => {
        // Check for JSON
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }
        try {
            const task = await Task.findOneAndUpdate({
                _id: req.params.id
            }, req.body);
            res.send(200);
            next();
        } catch (err) {
            return next(new errors.ResourceNotFoundError(`There is no task with the id of ${req.params.id}`));
        }
    });



    // Delete a Task
    server.del('/tasks:id', async (req, res, next) => {
        try {
            const task = await Task.findOneAndRemove({
                _id: req.params.id
            });
            res.send(204);
            next();
        } catch (err) {
            return next(new errors.ResourceNotFoundError(`There is no task with the id of ${req.params.id}`));
        }
    })




};