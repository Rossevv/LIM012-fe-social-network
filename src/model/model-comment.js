/* eslint-disable no-console */
// CREAR LA COLECCIÒN DE COMMENT
const comment = () => firebase.firestore().collection('comment');

const createComment = (comments, user, username, photo, idPost) => comment().add({
  comments,
  date: new Date().toLocaleString(),
  idUser: user.uid,
  username,
  photo,
  idPost,
});

const readComment = (postUid, callback) => comment().where('idPost', '==', postUid).orderBy('date', 'desc')
  .onSnapshot((query) => {
    const getComment = [];
    // eslint-disable-next-line no-shadow
    query.forEach((comment) => {
      getComment.push({
        id: comment.id,
        ...comment.data(),
      });
    });
    callback(getComment);
  });

// console.log(id, newComment, comment().doc);
const updateUserNameComment = (id, username) => comment().doc(id).update({
  username,
});
const editComment = (id, newComment) => comment().doc(id).update({ comments: newComment });

const updateAllCommentsUsername = (userId, username) => comment().get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().idUser === userId) {
        // console.log('él user es', userId, doc.data().idUser);
        updateUserNameComment(doc.id, username);
      }
    });
  });
const deleteComment = (id) => comment().doc(id).delete();

const deleteCommentsPost = (postId) => comment().get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().idPost === postId) {
        deleteComment(doc.id);
      }
    });
  });

export default {
  createComment,
  readComment,
  editComment,
  deleteComment,
  updateAllCommentsUsername,
  deleteCommentsPost,
};
