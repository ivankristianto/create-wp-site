/**
 * Internal dependencies
 */

import git from '../utils/git';
import prompts from '../utils/prompts';
import log from '../utils/logger';
import fs from 'fs-extra';

const ghURL = 'https://github.com/10up/wp-docker.git';

export default (args, config) => {
	let params;
	try {
		params = getParams(args, config);

		var promptOpt = prompts.getCreatePrompts();
		prompts.ask(promptOpt)
			.then(handlePrompt);

		/*if( ! params.dir ){
		 throw new Error( 'We need directory name.' );
		 }

		 if( ! fs.emptyDirSync( params.dir ) ){
		 throw new Error( 'Directory exist, exit now.' );
		 }

		 log.info( 'Cloning ' + ghURL + ' to ' + params.dir );

		 var message = git.clone( ghURL, params.dir );*/

	} catch (e) {
		log.error(e.toString());
	}
};

function getParams(args, config) {
	const dir = args.dir || '';
	return {
		dir,
	};
}

function handlePrompt(data) {
	try{
		is_directory_exist(data.directory);

		log.info( 'Cloning ' + ghURL + ' to ' + data.directory );

		git.clone( ghURL, data.directory );
	} catch (e) {
		log.error(e.toString());
	}

	return data;
}

function is_directory_exist(dir){
	if( ! dir ){
		throw new Error( 'We need directory name.' );
	}

	if( ! fs.emptyDirSync( dir ) ){
		throw new Error( 'Directory exist, exit now.' );
	}

	return true;
}
