function verify(editor) {
    const canvas = document.getElementById("canvas");
    const c = canvas.getContext("2d");

    // c.clearRect(0, 0, canvas.width, canvas.height);

    userInput = editor.innerText.split("\n");
    // console.log(userInput);

    let functionName, functionRegEx, parameters, parametersRegex;

    userInput.forEach(function (line) {
        console.log(line);
        // console.log(line, line.charAt(line.length - 1));

        if (line.charAt(line.length - 1) != ";") {
            console.log("Missing ;");
            return;
        }

        parameters = []
        // Regex matching
        functionRegEx = /\w{1,}\(/gm;
        functionName = line.match(functionRegEx)[0].slice(0, -1);
        console.log(line.match(functionRegEx).slice(0, -1));

        if (functionName == "wire") {
            parametersRegex = /\((...){1,}/gm;
            parameters = line.toString().match(parametersRegex);
            parameters = parameters[0].replace("(", "").replace(")", "").replace(";", "").split(",");
            console.log("Parameters:", parameters);
            drawWire("canvas", Number(parameters[0]), Number(parameters[1]), Number(parameters[2]), Number(parameters[3]));
        }

        else if (functionName == "ic") {
            parametersRegex = /\((...){1,}/gm;
            parameters = line.toString().match(parametersRegex);
            parameters = parameters[0].replace("(", "").replace(")", "").replace(";", "").split(",");

            drawIC(parameters[0], "canvas", parameters[1]);
        } else if(functionName == "res"){
            parametersRegex = /\((...){1,}/gm;
            parameters = line.toString().match(parametersRegex);
            parameters = parameters[0].replace("(", "").replace(")", "").replace(";", "").split(",");

            drawResistor("canvas", parameters[0]);
        } else if(functionName == "npn"){
            drawNPN("canvas");
        } else if(functionName == "pnp"){
            drawNPN("canvas");
        } else if(functionName == "supply"){
            parametersRegex = /\((...){1,}/gm;
            parameters = line.toString().match(parametersRegex);
            parameters = parameters[0].replace("(", "").replace(")", "").replace(";", "").split(",");
            console.log("Parameters:", parameters);
            supplyWire("canvas", Number(parameters[0]), Number(parameters[1]), Number(parameters[2]));
        } else if(functionName == "led"){
            parametersRegex = /\((...){1,}/gm;
            parameters = line.toString().match(parametersRegex);
            parameters = parameters[0].replace("(", "").replace(")", "").replace(";", "").split(",");
            console.log("Parameters:", parameters);
            drawLED("canvas", Number(parameters[0]));
        } else if(functionName == "cap"){  
            drawCap("canvas")
        } else if(functionName == "inductor"){
            drawInductor("canvas");
        } else if(functionName == "diode"){
            drawDiode("canvas");
        }
 

    })
}

function codeHighlight(){
    // let editor = document.getElementById("editor")
    // let editorContent = editor.innerText.split("\n");
    // let keywords = ["wire", "supply", "ic"];
    // let modifiedEditorContent = "";

    // console.log(editorContent);

    // editorContent.forEach((line) =>{
    //     keywords.forEach((word) => {
    //         if(line.indexOf(word) != -1){
    //             modifiedEditorContent += line.replace(word, "<key>" + word + "</key>") + "<br>";
    //             console.log(modifiedEditorContent);
    //         }else{
    //             modifiedEditorContent += line + "<br>";
    //         }

    //     });
    // });

    // editor.innerHTML = "";
    // editor.innerText = "";
    // editor.innerHTML = modifiedEditorContent;

}
