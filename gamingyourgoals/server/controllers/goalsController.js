const bcrypt = require('bcrypt');

module.exports = {
    setNewGoal: async (req, res) => {
        const db = req.app.get('db');
        const { goal_type, beg_date, end_date, target_number, time_zone, time_to_text, no_prog_days_of_wk, no_prog_cal_days } = req.body;

    },

    updateGoal: async (req, res) => {
        const db = req.app.get('db');
        const 
    }
}