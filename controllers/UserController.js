const globalUsers = [
    {id: 3, name: 'hamza', age: 25},
    {id: 2, name: 'don neto', age: 25},
    {id: 3, name: 'hassan', age: 25},
    {id: 4, name: 'sadaf malik', age: 25},
    {id: 5, name: 'mehunisa', age: 25},
];

var userProfile = {};

exports.getAllUsers = (req, res) => {
    return res.status(200).json({message: 'success', users}).end()
}

// URL parameters
// http://localhost:3000/user/12

exports.getUserById = (req, res) => {

    // req.params === URL parameters === http://localhost:3000/user/12/age/25
    // req.headers === Request headers
    // req.body === Request body (used for post request)
    // req.query === Query parameters === http://localhost:3000/user/12?name=hamza&age=25

    const userId = req.params.userId;

    console.log('URL params :', req.params);

    const user = globalUsers.filter((user) => {
        return user.id === parseInt(userId);
    });

    if (user && user.length) {
        return res.status(200).json({message: 'Success', user: user}).end()
    }

    return res.status(404).json({message: 'user not found'}).end()
}

exports.getUserByName = (req, res) => {
    const name = req.query.name || ''; 
    console.log("Name :", name)

    if (!name || name == '') {
        return res.status(400).send('Some required parameters are missing');
    }

    const user = globalUsers.filter((user) => {
        return user.name == name;
    });

    if (user && user.length) {
        return res.status(200).json({message: 'Success', user: user}).end()
    }

    return res.status(404).json({message: 'user not found'}).end()
}

exports.updateUserProfile = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Some required parameters are missing');
    }

    userProfile.name = name;
    userProfile.email = email;

    // What is Object().freeze() ?

    return res.status(200).json({message: 'Success', user: userProfile}).end()
}