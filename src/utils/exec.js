/**
 * External dependencies
 */
import { spawn } from 'cross-spawn';
import { which } from 'shelljs';

function php( ...args ) {
	return _run( 'php', ...args );
}

function git( ...args ) {
	return _run( 'git', ...args );
}

function wp( ...args ) {
	//tunneling through docker-compose
	return _run( 'docker-compose', 'exec', '-T', '--user', 'www-data', 'phpfpm', 'wp', ...args );
}

function dccompose( ...args ) {
	return _run( 'docker-compose', ...args );
}

function docker( ...args ) {
	return _run( 'docker', ...args );
}

function _run( command, ...args ) {
	if ( which( command ) === null ) {
		throw new Error( `${ command } is not available` );
	}

	const child = spawn.sync( command, args );
	const error = child.stderr.toString();
	const ecode = child.status;

	if ( 0 !== ecode ) {
		const msg = error || `${ command } exited with exit code ${ ecode }`;
		throw new Error( msg );
	}

	return child.stdout.toString();
}

export default {
	php,
	git,
	wp,
	dccompose,
	docker
};
