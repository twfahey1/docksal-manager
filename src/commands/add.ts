import {Command, flags} from '@oclif/command'
const {Projects} = require('../db')

export default class Add extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name of project'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    location: flags.string({char: 'l', description: 'location of project'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Add)

    const name = flags.name || 'unnamed'
    if (flags.location && flags.name) {
      const location = flags.location
      const res = await Projects.push({
        name,
        location,
        id: Projects.value().length,
        done: false
        
      }).write()
      this.log(res)
    }
    else {
      this.log('Provide at least a name with -n and a location of the project with -l')
    }
  }
}
