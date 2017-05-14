/**
 * Internal dependencies
 */

import fs from 'fs-extra';
import git from '../utils/git';
import prompts from '../utils/prompts';
import log from '../utils/logger';
import docker from '../utils/docker';
import wp from '../utils/wpcli';

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

		log.info('Create docker-compose.override.yml');
		docker.createCustomYaml(data);

		log.info('Create vhost for nginx');
		createVhost(data);

		//We need to wait for some process to finish
		setTimeout(()=>setupDocker(data), 5000);

		log.info('Update our /etc/hosts file');
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
		console.log(`${data}`);
	});

}

function createVhost(data) {
	const vHost = './config/nginx/' + data.domain + '.conf';
	const domain = data.domain;
	fs.createReadStream('./config/nginx/default.conf').
			pipe(fs.createWriteStream(vHost));
	fs.readFile(vHost, 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/localhost/g, domain);

		fs.writeFile(vHost, result, 'utf8', function(err) {
			if (err) return console.log(err);
		});
	});
}

function setupDocker(data){
	startDocker(data);
	downloadWp(data);
	setupWpConfig(data);
	installWp(data);
}

function startDocker(data) {
	log.info('Fire up Docker');
	log.info(docker.start());
}

function downloadWp(data) {
	log.info('Downloading WordPress');
	log.info(wp.coredownload());

}

function setupWpConfig(data) {
	log.info('Setup WordPress Config');
	log.info(wp.coreconfig());
}

function installWp(data) {
	log.info('Install WordPress');
	log.info(wp.install(data));
}

