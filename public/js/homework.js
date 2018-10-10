var userProfile = new Vue({
  el: '#homeworkOne',
  data: {

    user:{

      name: '',
      nat: '',
      dob: '',
      age: '',
      email: ''
      id: 0,
      comment: '',
    }
    comment : [ ],
    commentForm: { },
    commentList: [ ]
  },
    computed:{
      age: function() {
        return moment().diff(this.user.dob, 'years')
      }
    },
methods: {

fetchPerson() {
     fetch('https://randomuser.me/api')
     .then( response => response.json() )
     // ^ is the same as .then( function(response) {return response.json()} )
     .then( json => {

     userProfile.user.name = json.results[0].name.first;
     userProfile.user.name += " ";
     userProfile.user.name += json.results[0].name.last;
     userProfile.user.dob = json.results[0].dob.date;
     userProfile.user.age = json.results[0].dob.age;
     userProfile.user.email = json.results[0].email;
     userProfile.user.nat = json.results[0].nat;
   } )
   .catch(err => {
     console.log('user fetch error');
     console.log(err);
   });
 },
 gotoPerson(pid) {
   window.location = 'person.html?personId=' + pid;
 }
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


},



created: function () {
this.fetchPerson();
}
})
