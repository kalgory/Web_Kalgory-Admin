const Functions = require("firebase-functions")
const Admin = require("firebase-admin")
Admin.initializeApp();

exports.onUserCreate = Functions.auth.user().onCreate( (user) => {
    return Admin.firestore().collection("USER").add({
        uid: user.uid,
        created_at: new Date(user.metadata.creationTime),
        rank: 0
    })
})

exports.onUserDelete = Functions.auth.user().onDelete((user) => {
    const { uid } = user
    const userQuery = Admin.firestore().collection("USER").doc().where("uid", "==", uid)
    userQuery.get().then(function (querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete()
        })
    })
})