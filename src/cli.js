/**
 * External dependencies
 */
import cli from 'commander';
import create from './commands/create';

/**
 * Internal dependencies
 */
import * as pkg from '../package.json';
import commands from './commands';
import log from './utils/logger';

function main() {
	try {
		cli.version( pkg.version )
			.on( '--help', function() {
				console.log( '  Examples:' );
				console.log( '' );
				console.log( '    $ create-wp-site <foldername>' );
				console.log( '' );
			} );

		setupCommands( );
		runCommand();
	} catch ( e ) {
		log.error( e.toString() );
	}
}

function setupCommands( ) {
	for ( const k of Object.keys( commands ) ) {
		const v = commands[ k ];
		const cmd = cli.command( k );
		const options = v.options || [];

		cmd.description( v.description );

		options.forEach( ( opt ) => {
			cmd.option( ...opt );
		} );

		if ( v.arguments ) {
			cmd.arguments( v.arguments );
		}

		cmd.action( ( ...args ) => {
			v.action( ...args );
		} );

		cmd.longDesc = longDescFn( k );
		cmd.helpInformation = helpInformation;
	}
}

function runCommand() {
	const passedCmd = process.argv.slice( 2 );

	// No command specified or invalid command.
	if ( ! passedCmd.length || ! ( passedCmd in commands ) ) {
		create({ directory: passedCmd[0] });
	}

	cli.parse( process.argv );
}

function longDescFn( k ) {
	const longDesc = commands[ k ].longDescription || '';

	return () => {
		return longDesc
				? [
					'  ' + longDesc,
					''
				]
				: [];
	};
}

function helpInformation() {
	const desc = this._description
			? [
				'  ' + this._description,
				''
			]
			: [];

	const name = this._alias
			? this._name + '|' + this._alias
			: this._name;

	const usage = [
		'',
		'  Usage: ' + name + ' ' + this.usage(),
		''
	];

	const cmdHelp = this.commandHelp();
	const cmds = cmdHelp ? [ cmdHelp ] : [];

	const options = [
		'  Options:',
		'',
		'' + this.optionHelp().replace( /^/gm, '    ' ),
		'',
		''
	];

	return usage
	.concat( cmds )
	.concat( desc )
	.concat( this.longDesc() )
	.concat( options )
	.join( '\n' );
}

main();
