exports.getAllUsers = (req,res) =>{

    let users = [
        {name: 'Hamza1', age: 25},
        {name: 'Hamza2', age: 25},
        {name: 'Hamza3', age: 25},
        {name: 'Hamza4', age: 25}
    ]






    return res.status(200).json({message: 'Sucess', users}).end();
}