const bcrypt = require('bcrypt');

module.exports = {
    setNewGoal: async (req, res) => {
        const db = req.app.get('db')
    
        const [oneGoalAtATime] = await db.check_date(req.session.user.userId)
        if (oneGoalAtATime) { return res.status(400).send('You are already working on a goal')}
    
        const [newGoal] = await db.add_goal(req.body)
        res.status(200).send(newGoal)
    },
  

    updateGoal: async (req, res) => {
        const db = req.app.get('db');
        const { goal_prog } = req.body
    }
}