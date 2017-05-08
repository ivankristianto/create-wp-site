/**
 * Internal dependencies
 */
import info from './commands/info';
import generate from './commands/generate';

export default {
	info: {
		description: 'Show information about this tool',
		action: ( args, config ) => {
			info( args, config );
		}
	},
	generate: {
		description: 'Generate new WordPress Site',
		action: ( args, config ) => {
			generate( args, config );
		}
	}
};
