// // SQL keywords
// var keywords = ["SELECT", "FROM", "WHERE", "LIKE", "BETWEEN", "NOT LIKE", "FALSE", "NULL", "FROM", "TRUE", "NOT IN"];


// // Keyup event
// $("editor").on("keyup", function (e) {
//     // Space key pressed
//     if (e.keyCode == 32) {
//         var newHTML = "";
//         // Loop through words
//         $(this).text().replace(/[\s]+/g, " ").trim().split(" ").forEach(function (val) {
//             // If word is statement
//             if (keywords.indexOf(val.trim().toUpperCase()) > -1)
//                 newHTML += "<span class='statement'>" + val + "&nbsp;</span>";
//             else
//                 newHTML += "<span class='other'>" + val + "&nbsp;</span>";
//         });
//         $(this).html(newHTML);

//         // Set cursor postion to end of text
//         var child = $(this).children();
//         var range = document.createRange();
//         var sel = window.getSelection();
//         range.setStart(child[child.length - 1], 1);
//         range.collapse(true);
//         sel.removeAllRanges();
//         sel.addRange(range);
//         this.focus();
//     }
// });

let keywords1 = ['wire', 'ic'];

function highlight() {
    let keywords = document.getElementById('keyword-input').value.split('\n');
    // console.log(keywords == keywords1);
    // console.log(keywords);
    // console.log(keywords1);
    let content = document.getElementById("editor").value;
    // let content = "";
    if (content) {
        document.getElementById('editor').innerHTML = transformContent(content, keywords)
    }
}

function transformContent(content, keywords) {
    let temp = content

    keywords.forEach(keyword => {
        temp = temp.replace(new RegExp(keyword, 'ig'), wrapKeywordWithHTML(keyword, `https://www.google.com/search?q=${keyword}`))
    })

    return temp
}

function wrapKeywordWithHTML(keyword, url) {
    console.log("Changing:" + `<a href="${url}" target="_blank"> <span style="font-weight: bold; color: red; font-size: 30px">  ${keyword}  </span> </a>`);
    return `<a href="${url}" target="_blank"> <span style="font-weight: bold; color: red; font-size: 30px">  ${keyword}  </span> </a>`
}

