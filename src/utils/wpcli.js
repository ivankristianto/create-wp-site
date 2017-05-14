/**
 * Internal dependencies
 */
import exec from './exec';
import log from './logger';

function coredownload(){
	const args = [ 'core download' ];

	try {
		exec.wp( ...args );
	} catch ( e ) {
	}
}
