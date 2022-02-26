ace.require("ace/ext/language_tools");

const executeCodeBtn = document.querySelector(".editor_run");
const resetCodeBtn = document.querySelector(".editor_reset");

let codeEditor = ace.edit("editorCode");

let editorLib = {
  init() {
    codeEditor.setValue(
      "#include <stdio.h>\n\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n"
    );
    codeEditor.clearSelection();

    // Theme
    codeEditor.setTheme("ace/theme/solarized_dark");

    // set lang
    codeEditor.getSession().setMode("ace/mode/c_cpp");
    // set options
    codeEditor.setOptions({
      // fontFamily:'Inconsolata',
      // fontSize:'12pt',
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });
  },
};

editorLib.init();
function changeMode() {
  var x = document.getElementById("mode");
  var modeValue = x.options[x.selectedIndex].value;
  if (modeValue == "c") {
    codeEditor.session.setMode("ace/mode/c_cpp");
    codeEditor.setValue(
      "#include <stdio.h>\n\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n"
    );
    //  codeEditor.clearSelection();
    //  document.getElementById('langExt').innerHTML = "c";
  }
  if (modeValue == "c++") {
    codeEditor.session.setMode("ace/mode/c_cpp");
    codeEditor.setValue(
      "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n"
    );
    codeEditor.clearSelection();
    //  document.getElementById('langExt').innerHTML = "cpp";
  }
  if (modeValue == "python2") {
    codeEditor.session.setMode("ace/mode/python");
    codeEditor.setValue(
      "# Enter your code here. Read input from STDIN. Print output to STDOUT"
    );
    codeEditor.clearSelection();
    //  document.getElementById('langExt').innerHTML = "py";
  }
  if (modeValue == "python3") {
    codeEditor.session.setMode("ace/mode/python");
    codeEditor.setValue(
      "# Enter your code here. Read input from STDIN. Print output to STDOUT"
    );
    codeEditor.clearSelection();
    //  document.getElementById('langExt').innerHTML = "py";
  }
  if (modeValue == "java") {
    codeEditor.session.setMode("ace/mode/java");
    codeEditor.setValue(
      "import java.io.*;\n\nclass Main {\n\n    public static void main(String[] args) {\n        // Your code goes here\n   }\n}\n"
    );
    codeEditor.clearSelection();
    //  document.getElementById('langExt').innerHTML = "java";
  }
}

function darkmode() {
  codeEditor.setTheme("ace/theme/solarized_dark");
  document.getElementById("lightmodebtn").style.display = "inline-block";
  document.getElementById("darkmodebtn").style.display = "none";
}

function lightmode() {
  codeEditor.setTheme("ace/theme/solarized_light");
  document.getElementById("darkmodebtn").style.display = "inline-block";
  document.getElementById("lightmodebtn").style.display = "none";
}

document.getElementById("inputFile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    codeEditor.setValue(fr.result);
  };

  fr.readAsText(this.files[0]);
});
