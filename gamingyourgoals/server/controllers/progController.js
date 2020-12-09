const bcrypt = require('bcrypt');

module.exports = {
    addCurrProg: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {userID} = req.session.user
            const [currAdd] = await db.get_progress(userID)
            const [newTotal] = await db.update_total({...req.body, userID})
            res.status(200).send(newTotal)
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
}