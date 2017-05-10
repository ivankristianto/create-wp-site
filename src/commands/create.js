/**
 * Internal dependencies
 */

import git from '../utils/git';
import log from '../utils/logger';
import fs from 'fs-extra';
import inquirer from 'inquirer';

const ghURL = 'https://github.com/10up/wp-docker.git';

export default ( args, config ) => {
	let params;
	try {
		params = getParams( args, config );

		var prompts = [
			{
				type: 'input',
				name: 'directory',
				message: 'Name of new site directory:',
			},
			{
				type: 'input',
				name: 'domain',
				message: 'Domain to use:',
			},
			{
				type: 'input',
				name: 'gitrepo',
				message: 'Git repo to clone as wp-content (leave blank to skip):',
			},
			{
				type: 'input',
				name: 'sqlfile',
				message: 'Local SQL file to import for database (leave blank to skip):',
			},
			{
				type: 'confirm',
				name: 'removedefault',
				message: 'Remove default themes and plugins? (y/N)',
			},
			{
				type: 'confirm',
				name: 'enablewpdebug',
				message: 'Enable WP_DEBUG and WP_DEBUG_LOG (y/N):',
			},
		];


		result = inquirer.prompt(prompts, function(result) {
			return result;
		});



		/*if( ! params.dir ){
			throw new Error( 'We need directory name.' );
		}

		if( ! fs.emptyDirSync( params.dir ) ){
			throw new Error( 'Directory exist, exit now.' );
		}

		log.info( 'Cloning ' + ghURL + ' to ' + params.dir );

		var message = git.clone( ghURL, params.dir );*/

	} catch ( e ) {
		log.error( e.toString() );
	}
};

function getParams( args, config ) {
	const dir = args.dir || '';
	return {
		dir
	};
}
