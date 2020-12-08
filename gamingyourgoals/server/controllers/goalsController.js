const bcrypt = require('bcrypt');

module.exports = {
    setNewGoal: async (req, res) => {
        const db = req.app.get('db');
        const { goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_days_of_wk, no_prog_cal_days } = req.body;
        const oneGoalAtATime = await db.check_date(end_date);
        if(oneGoalAtATime[0]){
            return res.status(400).send("You are already working on a goal")
        }
        const [newGoal] = await db.add_goal([goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_days_of_wk, no_prog_cal_days]);
        req.session.user = {
            goal_type: newGoal.goal_type, 
            beg_date: newGoal.beg_date, 
            end_date: newGoal.end_date, 
            target_number: newGoal.target_number, 
            time_zone: newGoal.time_zone, 
            time_to_text: newGoal.time_to_text, 
            no_prog_days_of_wk: newGoal.no_prog_days_of_wk, 
            no_prog_cal_days: newGoal.no_prog_cal_days
        }
        res.status(200).send(req.session.user);
    },

    updateGoal: async (req, res) => {
        const db = req.app.get('db');
        const { goal_prog } = req.body
    }
}