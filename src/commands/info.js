import log from '../utils/logger';
import cli from 'commander';

export default () => {
	log.info( '=== Create WP Site v' + cli.version() + ' ===' );
	log.info( 'Create WP Site is a site creation wizard for WordPress using 10up/wp-local-docker' );
	log.info( 'Run create-wp-site --help for more info' );
};
