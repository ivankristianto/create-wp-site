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
			.then(handlePrompt)
			.then(end);

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

function handlePrompt(result) {
	console.log(result);
	return result;
}

function end(data){
	console.log(data);
	return data
}
