var thisEditor;
class CodeEditor {

    constructor(elementId){
        this.editor = ace.edit(elementId);
        this.editor.setShowPrintMargin(false);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.getSession().setMode("ace/mode/javascript");

        this.editor.autoIndent = true;
        this.editor.autocomplete = false;
        this.editor.autoIndent = false;
        this.editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false
        });
        this.editor.resize();
    }

    getValue (){
        return this.editor.getValue();
    }

    setValue (code) {
        this.editor.setValue(code);
    }
    setMode(mode){
        this.editor.session.setMode("ace/mode/" + mode);
    }
}