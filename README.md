create-wp-site
==============

[![npm version](https://img.shields.io/npm/v/create-wp-site.svg?style=flat)](https://www.npmjs.com/package/create-wp-site)

`create-wp-site` is a is a site creation wizard for your local WordPress development 
using [10up/wp-local-docker](https://github.com/10up/wp-local-docker).  
This tools is inspired by site creation wizard for [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) by (brad/vv)[https://github.com/bradp/vv].  

## Requirements

* [NodeJs](https://nodejs.org/en/) >= v.6.10.1
* [Npm](https://www.npmjs.com/) >= v.3.10.10
* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)


## Install

```
$ npm install -g create-wp-site
```

## Usage

Once installed globally, `create-wp-site` should be available from shell.

```
$ create-wp-site

  Usage: create-wp-site [options] [command]
  
  
    Commands:
  
      info                Show information about this tool
      create              Create new WordPress Site
      addhost [options]   Add hosts to /etc/hosts or C:/Windows/System32/drivers/etc/hosts, need sudo privileges
  
    Options:
  
      -h, --help     output usage information
      -V, --version  output the version number
  
    Examples:
  
      $ create-wp-site create
```

For more help on specific command, supply `-h` or `--help`.

## Compile from source

If you want to contribute or want to compile from the source

```
$ git clone https://github.com/ivankristianto/create-wp-site.git
$ cd create-wp-site
$ npm install && npm run build
```

## Todo(s)

- [ ] Clone a repository to `wp-content` 
- [ ] Import SQL File
- [ ] Option to remove default themes & plugins
- [ ] Option to add `WP_DEBUG` and `WP_DEBUG_LOG`
- [ ] Option to enable multisite subdirectory / subdomain
- [ ] Command to compress everything 

*Note: Pull requests and any feedbacks are always welcome!*

## Known Issue(s)

- This is not tested on Windows platform yet.

## Credits

* [wp-local-docker](https://github.com/10up/wp-local-docker)
* [wp-tools](https://github.com/gedex/wp-tools)

## Thanks to contributors

- [viankakrisna](https://github.com/viankakrisna)

## License

MIT
