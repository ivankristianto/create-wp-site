/**
 * Internal dependencies
 */
import exec from './exec';
import log from './logger';

function coredownload() {
	const args = [ 'core', 'download' ];

	try {
		return exec.wp( ...args );
	} catch ( e ) {
		return e.message;
	}
}

function coreconfig() {
	const args = [
		'core',
		'config',
		'--dbhost=mysql',
		'--dbname=wordpress',
		'--dbuser=root',
		'--dbpass=password',
	];

	try {
		return exec.wp( ...args );
	} catch ( e ) {
		return e.message;
	}
}

function install( data ) {
	const args = [
		'core',
		'install',
		'--url=' + data.domain,
		'--title=Example',
		'--admin_user=admin',
		'--admin_password=password',
		'--admin_email=admin@' + data.domain,
		'--skip-email',
	];

	try {
		return exec.wp( ...args );
	} catch ( e ) {
		return e.message;
	}
}

export default {
	coredownload,
	coreconfig,
	install,
};
