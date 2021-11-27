const vscode = require("vscode");
const os = require("os");
const path = require("path");
const fs = require('fs');


module.exports = {
  activate: (context) => {
    this.extensionName = "drkryz.drkryz-theme";
    let helloCommand = vscode.commands.registerCommand("drkryz.hello", () => {
      vscode.window.showInformationMessage(`Hello ! ${os.userInfo().username}`);

      const app = path.dirname(require.main.filename);
      const platform = /^win/.test(process.platform);
      const vscodeBase = app + (platform ? "\\vs\\code" : "/vs/code");

      const vsHtml =
        vscodeBase +
        (platform
          ? "\\electron-browser\\workbench\\workbench.html"
          : "/electron-browser/workbench/workbench.html");

      const backupFile = path.join(__dirname, '/backups/workbench.html');
      fs.copyFileSync(vsHtml, backupFile);

      

    });

    let byeCommand = vscode.commands.registerCommand("drkryz.unhello", () => {
      vscode.window.showInformationMessage(`Bye ! ${os.userInfo().username}`);
    });

    context.subscriptions.push(helloCommand);
    context.subscriptions.push(byeCommand);
  },

  deactivate: () => {},
};
