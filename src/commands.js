/**
 * Internal dependencies
 */
import info from './commands/info';

export default {
	info: {
		description: 'Just info.',
		action: ( args, config ) => {
			info( args, config );
		}
	}
};
