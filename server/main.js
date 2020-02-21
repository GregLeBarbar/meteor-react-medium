import { Meteor } from 'meteor/meteor';
import '../imports/api/methods';
import '../imports/api/publications';
import Tequila from 'meteor/epfl:accounts-tequila';
import { loadFixtures } from './fixtures';

Meteor.startup(() => {

  loadFixtures();

  Tequila.start({
    service: 'Medium',
    request: ['uniqueid', 'email', 'group'],
    control: ['/posts', '/add-post', '/edit-post'],
    getUserId(tequila) {
      // If a user belongs to a certain group then he is given a certain role.
      // medium-editors group: https://groups.epfl.ch/viewgroup?groupid=S22286
      // medium-admins group: https://groups.epfl.ch/viewgroup?groupid=S22283
      if (tequila.group.includes('medium-admins')) {
        Roles.setUserRoles(tequila.uniqueid, ['admin'], Roles.GLOBAL_GROUP);
        console.log("Admin");
      } else if (tequila.group.includes('medium-editors')) {
        Roles.setUserRoles(tequila.uniqueid, ['editor'], Roles.GLOBAL_GROUP); 
      } else {
        Roles.setUserRoles(tequila.uniqueid, ['epfl-member'], Roles.GLOBAL_GROUP); 
      }
      return tequila.uniqueid;
    },
    upsert: (tequila) => ({ $set: {
      profile: {
        sciper: tequila.uniqueid
      },
      username: tequila.user,
      emails: [ tequila.email ],
    }}),
  });
  
});
