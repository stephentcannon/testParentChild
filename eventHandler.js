if (Meteor.isClient) {
  Template.eventHandler.events({
    'click .btnDoSomething': function(event, template){
      console.log('Hey I did something from anywhere!');
    }
  });
}