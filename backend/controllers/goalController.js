const asyncHandler = require('express-async-handler');

// Description: Get goals
// @route GET api/goals
// @access private

const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// Description: Set goal
// @route POST api/goals
// @access private

const setGoal = (req, res) => {
    // If The user doesnt send text, we got an 400 (bad request / response status)

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goals'})
}

// Description: Update goal
// @route PUT api/goals/:id
// @access private

const updateGoal = asyncHandler ( async (req, res) => {
    res.status(200).json( {message: `Update goal ${req.params.id}`} )
})

// Description: DELETE goals
// @route DELETE api/goals/:id
// @access private

const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json( {message: `Delete goal ${req.params.id}`} )
})


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}