/**
 * Internal dependencies
 */
import exec from './exec';
import yaml from 'yamljs';
import log from './logger';
import fs from 'fs';

function start(dir) {
	const args = ['up', '-d'];

	try {
		return exec.dccompose(...args);
	} catch (e) {
		return e.message;
	}
}

function stop(dir) {
	const args = ['down'];

	try {
		return exec.dccompose(...args);
	} catch (e) {
		return e.message;
	}
}

function composeVersion() {
	const args = ['version'];

	try {
		return exec.dccompose(...args);
	} catch (e) {
		return e.message;
	}
}

function createCustomYaml(data){
	try {
		var dockerComposeJson = {
			version: 3,
			services: {
				phpfpm: {
					extra_hosts: [
							data.domain + ":172.18.0.1"
					]
				}
			}
		};

		var dockerComposeYaml = yaml.stringify(dockerComposeJson, 4);
		fs.writeFile('docker-compose.override.yml', dockerComposeYaml, function(err) {
			if(err) {
				throw new Error( 'Cannot create docker-compose.override.yml' );
			}
		});

	} catch (e) {
		return e.message;
	}
}

export default {
	start,
	stop,
	composeVersion,
	createCustomYaml
};

