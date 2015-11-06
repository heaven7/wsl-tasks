Meteor.methods({
  updateTask: function(doc) {
    check(doc, Schemas.Tasks);
    this.unblock();
    if(doc.owners.indexOf(Meteor.userId()) > -1) {
        console.log('task update error');
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
    } else {
        return false;
    }
  },
  deleteTask: function(doc) {
    check(doc, Schemas.Tasks);
    this.unblock();

    if(doc.owners.indexOf(Meteor.userId()) > -1) {
        console.log('task remove successful');
        return Tasks.remove({
            _id: doc._id
        });
    } else {
        console.log('task remove error');
        return false;
    }
  }
});