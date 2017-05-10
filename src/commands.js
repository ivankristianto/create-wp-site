/**
 * Internal dependencies
 */
import info from './commands/info';
import create from './commands/create';

export default {
	'--version': {},
	'-V': {},
	info: {
		description: 'Show information about this tool',
		action: ( args, config ) => {
			info( args, config );
		}
	},
	create: {
		description: 'Create new WordPress Site',
		action: ( args, config ) => {
			create( args, config );
		}
	}
};
