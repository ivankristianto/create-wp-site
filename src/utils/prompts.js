import inquirer from 'inquirer';

function getCreatePrompts() {
	var prompts = [
		{
			type: 'input',
			name: 'directory',
			message: 'Name of new site directory:',
		},
		{
			type: 'input',
			name: 'domain',
			message: 'Domain to use:',
		},
		{
			type: 'input',
			name: 'gitrepo',
			message: 'Git repo to clone as wp-content (leave blank to skip):',
		},
		{
			type: 'input',
			name: 'sqlfile',
			message: 'Local SQL file to import for database (leave blank to skip):',
		},
		{
			type: 'confirm',
			name: 'removedefault',
			message: 'Remove default themes and plugins? (y/N)',
		},
		{
			type: 'confirm',
			name: 'enablewpdebug',
			message: 'Enable WP_DEBUG and WP_DEBUG_LOG (y/N):',
		},
	];

	return prompts;
}

function ask(prompts) {
	var prompt = inquirer.createPromptModule();
	return prompt(prompts);
}

export default {
	getCreatePrompts,
	ask,
};
