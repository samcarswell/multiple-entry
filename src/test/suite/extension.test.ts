import * as assert from 'assert';
import * as path from 'path';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});

	test('Test Multiple entry', () => {
		const newFile = vscode.Uri.parse('untitled:' + 'test.txt');
		vscode.workspace.openTextDocument(newFile).then(document => {
			const edit = new vscode.WorkspaceEdit();
			edit.insert(newFile, new vscode.Position(0, 0), "one\n");
			edit.insert(newFile, new vscode.Position(1, 0), "two\n");
			edit.insert(newFile, new vscode.Position(2, 0), "three\n");

			return vscode.workspace.applyEdit(edit).then(success => {
				if (success) {
					// vscode.window.showTextDocument(document);
					console.log(document.getText());

					const positionOne = new vscode.Position(0, 3);
					const positionTwo = new vscode.Position(1, 3);
					const positionThree = new vscode.Position(2, 5);
					// vscode.execute;
				} else {
					vscode.window.showInformationMessage('Error!');
				}
			});
		});
	});

	test('Test with empty response', () => {

	});

	test('Test with cancel', () => {

	});
});
