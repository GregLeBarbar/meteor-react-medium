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
    getUserId(tequila) {
      // If a user belongs to a certain group then he is given a certain role.
      // medium-editors group: https://groups.epfl.ch/viewgroup?groupid=S22286
      // medium-admins group: https://groups.epfl.ch/viewgroup?groupid=S22283
      if (tequila.group.includes('medium-admins')) {
        Roles.setUserRoles(tequila.uniqueid, ['admin'], 'medium');
        console.log("Admin");
        //console.log(tequila.uniqueid);
        //console.log(Roles.userIsInRole(tequila.uniqueid, 'admin', 'medium'));
      } else if (tequila.group.includes('medium-editors')) {
        Roles.setUserRoles(tequila.uniqueid, ['editor'], 'medium'); 
      } else {
        Roles.setUserRoles(tequila.uniqueid, ['epfl-member'], 'medium'); 
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
