docksal-manager
===============

Manage your Docksal projects.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/docksal-manager.svg)](https://npmjs.org/package/docksal-manager)
[![Downloads/week](https://img.shields.io/npm/dw/docksal-manager.svg)](https://npmjs.org/package/docksal-manager)
[![License](https://img.shields.io/npm/l/docksal-manager.svg)](https://github.com/twfahey1/docksal-manager/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g docksal-manager
$ dm COMMAND
running command...
$ dm (-v|--version|version)
docksal-manager/0.0.1 darwin-x64 node-v10.12.0
$ dm --help [COMMAND]
USAGE
  $ dm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dm hello [FILE]`](#dm-hello-file)
* [`dm help [COMMAND]`](#dm-help-command)

## `dm hello [FILE]`

describe the command here

```
USAGE
  $ dm hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dm hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/twfahey1/docksal-manager/blob/v0.0.1/src/commands/hello.ts)_

## `dm help [COMMAND]`

display help for dm

```
USAGE
  $ dm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
