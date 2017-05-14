/**
 * Internal dependencies
 */
import info from './commands/info';
import create from './commands/create';
import addhost from './commands/addhost';

export default {
	info: {
		description: 'Show information about this tool',
		action: ( args, config ) => {
			info( args, config );
		},
	},
	create: {
		description: 'Create new WordPress Site',
		action: ( args, config ) => {
			create( args, config );
		},
	},
	addhost: {
		description: 'Add hosts to /etc/hosts or C:/Windows/System32/drivers/etc/hosts, need sudo privileges',
		options: [
			[ '--ip <ipaddress>', 'IP address' ],
			[ '--host <host>', 'Domain host' ],
		],
		action: ( args, config ) => {
			addhost( args, config );
		},
	},
};
