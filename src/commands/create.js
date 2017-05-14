/**
 * Internal dependencies
 */

import fs from 'fs-extra';
import git from '../utils/git';
import prompts from '../utils/prompts';
import log from '../utils/logger';
import docker from '../utils/docker';

const ghURL = 'https://github.com/10up/wp-local-docker.git';

export default (args, config) => {
	let params;
	try {
		params = getParams(args, config);

		var promptOpt = prompts.getCreatePrompts();
		prompts.ask(promptOpt)
			.then(handlePrompt);

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
		log.info('Checking if directory exist');
		is_directory_exist(data.directory);

		log.info('Cloning 10up/wp-local-docker to ' + data.directory);
		cloneDocker(data);

		log.info('Change directory to ' + data.directory);
		process.chdir(data.directory);

		/*log.info('Fire up Docker');
		docker.start();*/

		log.info('Create docker-compose.override.yml');
		docker.createCustomYaml(data);

		createHost(data);

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

function cloneDocker(data){
	log.info( 'Cloning ' + ghURL + ' to ' + data.directory );

	git.clone( ghURL, data.directory );
}

function createHost(data){
	const spawn = require('child_process').spawn;
	const command = spawn('sudo', ['create-wp-site', 'addhost', '--host', data.domain]);

	command.stdout.on('data', (data) => {
		console.log(`stdout: ${data}`);
	});

}
