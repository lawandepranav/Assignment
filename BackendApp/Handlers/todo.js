const Todo = require('../Database/todos')



async function crateTodo ( req,res ) {
    const { body } = req.body
  console.log(body)
    let tododatas = await Todo.create(body)
    console.log(tododatas)

    return res.send({
        tododatas
    })
}

async function updateTodo ( req,res ) {
    const{ id } = req.params;
    const{ todobody:todoData } = req.body;
 
   let todo = await Todo.find({_id:id})

   await todo.save(todo);
 
   return res.send("Updated Successfully")
 }

 async function deleteTodo ( req,res ){
    const { id }=req.params;

    await Todo.remove({_id:id})

    return res.send({
        message:"Todo Delete Successfully"
    })
}

async function getAllTodo ( req,res ){
  
    const todos = await Todo.find().populate('user');

    return res.send({
        data : todos
    })
}
module.exports = {
    crateTodo,
    updateTodo,
    deleteTodo,
    getAllTodo
}