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
        return false;
      }
      console.log('task update successful');
      return true;
    });
  },
  deleteTask: function(doc) {
    check(doc, Schemas.Tasks);
    this.unblock();
    return Tasks.remove({
      _id: doc._id,
        doc: doc.doc,
        docType: doc.docType
    });
  }
});