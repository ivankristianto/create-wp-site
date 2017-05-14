/**
 * Internal dependencies
 */
import exec from './exec';
import log from './logger';

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

export default {
	start,
	stop,
	composeVersion,
};

