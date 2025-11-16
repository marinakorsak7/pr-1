// Logger

const os = require('os');

class Logger {
  #isVerboseModeEnabled = false;
  #isQuietModeEnabled = false;

  constructor(verbose = false, quiet = false) {
    this.#isVerboseModeEnabled = verbose;
    this.#isQuietModeEnabled = quiet;
  }

  log(...data) {
    if (this.#isQuietModeEnabled) {
      return; // suppress all output
    }

    if (!this.#isVerboseModeEnabled) {
      console.log(...data);
      return;
    }

    const timestamp = new Date().toISOString();
    const platform = os.platform();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const cpuModel = os.cpus()[0].model;

    console.log(
      `[${timestamp}]`,
      `Platform: ${platform};`,
      `TotalMem: ${totalMem};`,
      `FreeMem: ${freeMem};`,
      `CPU: ${cpuModel};`,
      'Message:',
      ...data
    );
  }
}

module.exports = Logger;