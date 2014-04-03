if (Meteor.isClient) {
  Template.parentTemplate.helpers({
    didItWork: function(arg){
      console.log('it worked from where? ' + arg);
    }
  });

  Template.parentTemplate.events({
  });
}


