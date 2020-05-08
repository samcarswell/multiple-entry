import * as vscode from 'vscode';
const ordinal = require('ordinal');

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('multiple-entry.enterValues', async () => {

		const textEditor = vscode.window.activeTextEditor;

		if (typeof (textEditor) === 'undefined') {
			return false;
		}

		for (let i = 0; i < textEditor.selections.length; i++) {
			const value = await vscode.window.showInputBox(
				{
					prompt: `Enter value for ${ordinal(i + 1)} cursor`
				}
			);

			if (value === undefined) {
				break;
			}

			if (value) {
				textEditor.edit((editBuilder) => {
					editBuilder.replace(textEditor.selections[i], value);
				});
			}
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
