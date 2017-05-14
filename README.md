create-wp-site
==============

[![npm version](https://img.shields.io/npm/v/create-wp-site.svg?style=flat)](https://www.npmjs.com/package/create-wp-site)

`create-wp-site` is a is a site creation wizard for your local WordPress development 
using 10up/wp-local-docker.  
This tools is inspired by site creation wizard for [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) by (brad/vv)[https://github.com/bradp/vv]

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

## Credits

* [wp-tools](https://github.com/gedex/wp-tools)

## License

MIT
