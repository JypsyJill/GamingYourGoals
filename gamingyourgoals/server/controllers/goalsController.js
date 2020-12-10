const bcrypt = require('bcrypt');

module.exports = {
    setNewGoal: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {userId} = req.session.user
            const [oneGoalAtATime] = await db.check_date(userId)
            if (oneGoalAtATime) { return res.status(400).send('You are already working on a goal')}
            const [newGoal] = await db.add_goal({...req.body, userId})
            res.status(200).send(newGoal)
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    },
    getGoalData: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {userId} = req.session.user
            const [progressChecker] = await db.get_progress(userId)
            res.status(200).send(progressChecker)
         } catch (err) {
             console.log(err)
             res.status(400).send(err)
         }
    }, 

    updateGoal: async (req, res) => {
        try {
            const db = req.app.get('db');
            const {userId} = req.session.user
            const [updateProgress] = await db.get_progress(userId)
            const [todaysProgress] = await db.update_total({...req.body, userId})
            res.status(200).send(updateProgress)
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}