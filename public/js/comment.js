var commentApp = new Vue({
  el: '#commentMain',
  data: {
commentForm: { comment:'' },
  comment : [],
},
methods: {
  handleCommentForm(e) {
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
      .then( json => {this.comment.push(json);
      console.log(json);})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      });
      this.commentForm = this.getEmptyCommentForm();
},
getEmptyCommentForm() {
     return {
       comment: ''
     }
   },
   fetchInfo () {
     fetch('api/comment.php')
     .then( response => response.json())
     .then( json => {commentApp.comment = json} );
   }},
     created () {
   // Populate workForm with default values
this.fetchInfo();
   this.commentForm = this.getEmptyCommentForm();
    })}
