Meteor.methods({
  updateTask: function(doc) {
    check(doc, Schemas.Tasks);
    this.unblock();
    return Tasks.update({
      id: this._id
    }, {
      $set: doc
    }, function(error) {
      if (error) {
        console.log('Error: ' + error);
      }
      console.log('update successful');
      return true;
    });
  },
  deleteTask: function(doc) {
    this.unblock();
    return Tasks.remove({
      _id: doc._id
    });
  }
});