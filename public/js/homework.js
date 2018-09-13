var userProfile = new Vue({
  el: '#homeworkOne',
  data: {

    user:{

      name: '',
      nat: '',
      dob: '',
      age: '',
      email: ''
    }
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



},



created: function () {
this.fetchPerson();
}
})
