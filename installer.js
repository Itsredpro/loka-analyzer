const deps = ['axios','express', 'socket.io-client']

require('child_process').execSync('npm install ' + deps.join(' '))