var commentApp = new Vue({
  el: '#commentMain',
  data: {
    id: 0,
    comment: '',
  }
  comment : [ ],
  commentForm: { },
  commentList: [ ]
},
methods: {
  handleCommentForm(e) {}
  this.commentForm.id = this.id;
  this.commentForm.comment = this.comment;
  const s = JSON.stringify(this.commentForm);
  console.log(s);


      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      this.commentForm = this.getEmptyCommentForm();
}
getEmptyCommentForm() {
     return {
       id: this.id,
       comment: this.comment,
     }
     created () {
   // Populate workForm with default values
   this.commentForm = this.getEmptyCommentForm();

   // Do data fetch
   const url = new URL(window.location.href);
   const commentId = url.searchParams.get('commentId');
   this.commentId = commentId;
   console.log('Comment: '+ commentId);

   fetch('api/comment.php?commentId='+commentId)
    .then( response => response.json() )
    .then( json => {commentApp.work = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })

   })
