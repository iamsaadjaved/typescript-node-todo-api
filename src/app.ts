import express , { Application , Request , Response , NextFunction } from 'express'
require('../src/database/mongoose')
const Todo = require('./model/todo.model.ts')



const app: Application = express()

app.use(express.json())

app.post('/todo/api/v1.0/tasks', async (req: Request, res: Response) => {
    try{
        const todo = await new Todo(req.body).save()
        res.status(201).send(todo)

    }catch(e){
        console.error(e)
    }
});

app.get('/todos/api/v1.0/tasks', async (req: Request, res: Response ) => {
    try{
        const todos = await Todo.find({})
        res.status(200).send(todos)
    }catch(e){
        console.error(e)
    }

});

app.get('/todo/api/v1.0/tasks/:id', async (req: Request, res: Response ) => {
    try{
        const _id = req.params.id
        const todo = await Todo.findOne({_id})
        res.status(200).send(todo)

    }catch(e){
        console.error(e)
    }
  

});


app.put('/todo/api/v1.0/tasks/:id', async (req: Request, res: Response) => {
    const changedTodo = req.body
    const fieldsToUpdate = Object.keys(changedTodo)  ;
    const fieldsInModel = ["Todo", "description"];
    const isUpdateAllowed = fieldsToUpdate.every(filed => fieldsInModel.includes(filed));
  
    if (!isUpdateAllowed) {
      return res.status(400).send({ error: "invalid fields" });
    }
  
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

      Object.assign(todo , changedTodo)

      await todo.save()
  
      res.send(todo);
    } 
    
    catch (e) {
      res.status(400).send(e);
    } 

});

app.delete('/todo/api/v1.0/tasks/:id', async (req: Request, res: Response) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).send(todo)

    }catch(e){
        console.error(e)
    }

});

app.listen(5000 , () => console.log("Server running"))