/**
 * Internal dependencies
 */

import git from '../utils/git';
import log from '../utils/logger';

const ghURL = 'https://github.com/10up/wp-docker.git';

export default ( args, config ) => {
	let params;
	try {
		params = getParams( args, config );

		log.info( 'Cloning ' + ghURL + ' to ' + params.dir );

		git.clone( ghURL, params.dir );
	} catch ( e ) {
		log.error( e.toString() );
	}
};

function getParams( args, config ) {
	const dir = args.dir || 'test';
	return {
		dir
	};
}
