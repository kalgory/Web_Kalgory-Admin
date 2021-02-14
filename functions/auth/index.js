const Functions = require("firebase-functions")
const Admin = require("firebase-admin")
Admin.initializeApp();

exports.onUserCreate = Functions.region("asia-northeast3").auth.user().onCreate( (user) => {
    return Admin.firestore().collection("USER").add({
        uid: user.uid,
        created_at: new Date(),
        rank: 0
    })
})

exports.onUserDelete = Functions.region("asia-northeast3").auth.user().onDelete((user) => {
    const { uid } = user
    const userQuery = Admin.firestore().collection("USER").where("uid", "==", uid)
    userQuery.get().then(function (querySnapshot) {
        querySnapshot.forEach(function(doc) {
            return doc.ref.delete()
        })
    })
})