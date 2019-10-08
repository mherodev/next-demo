/* eslint-disable */

var exec = require('child_process').exec;
var required = require('../package.json').engines;
var requiredNode = parseFloat(required.node);
var requiredNpm = parseFloat(required.npm);
var color = { green: '\x1b[32m', red: '\x1b[31m', end: '\x1b[0m' };

exec('node -v && npm -v', function(err, stdout, stderr) {
  if (err) {
    throw err;
  }

  var lines = stdout.split('\n');
  var currentNode = parseFloat(lines[0].slice(1));
  var currentNpm = parseFloat(lines[1]);
  var valid = (currentNode >= requiredNode) && (currentNpm >= requiredNpm);

  if (!valid) {
    var bang = Array(20).join('!') + ' ';
    var msgFail = 'Node or NPM version requirement is not met.'
    var msgNode = 'Requires Node {0} but found {1}'
      .replace('{0}', requiredNode)
      .replace('{1}', currentNode);
    var msgNpm = 'Requires NPM {0} but found {1}'
      .replace('{0}', requiredNpm)
      .replace('{1}', currentNpm);

    console.log([
      color.red,
      bang,
      bang + msgFail,
      bang + msgNode,
      bang + msgNpm,
      bang,
      color.green,
      'Node version manager: https://github.com/creationix/nvm',
      color.end,
    ].join('\n'));

    process.exit(1);
  }
});
