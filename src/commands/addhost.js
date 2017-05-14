/**
 * Internal dependencies
 */
import hostile from 'hostile';
import log from '../utils/logger';

export default ( args, config ) => {
	let params;
	try {
		params = getParams( args, config );

		hostile.set( params.ip, params.host );

		log.info( 'Host ' + params.host + ' added to the host file' );
	} catch ( e ) {
		log.error( e.toString() );
	}
};

function getParams( args, config ) {
	const ip = args.ip || '127.0.0.1';
	const host = args.host || '';
	return {
		ip,
		host
	};
}
