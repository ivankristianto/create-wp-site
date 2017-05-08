const inquirer = require( 'inquirer' );

inquirer.prompt({
  type: 'confirm',
  'name': 'shouldEject',
  'message': 'test',
  'default': false,
})
.then(answer => {
 console.log( answer );
});