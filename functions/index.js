// eslint-disable-next-line no-unused-vars
var functions = require("firebase-functions")
var admin = require("firebase-admin")
var serviceAccount = require("./kalgory-admin-key.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const fdb = admin.firestore()

exports.createUser = functions.auth.user().onCreate( (user) => {
    const u = {
        uid: user.uid,
        user_id: "",
        created_at: new Date(user.metadata.creationTime).valueOf(),
        rank: 0
    }
    return fdb.collection("USER").doc(user.uid).set(u)
})

exports.deleteUser = functions.auth.user().onDelete((user) => {
    const { uid } = user
    return fdb.collection("USER").doc(uid).delete()
})