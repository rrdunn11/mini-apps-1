
class Page {
    constructor() {
    }

    sendAjaxPost(text) {
        var url = 'http://localhost:3000/';
        $.ajax({
            type: "POST",
            url: url,
            data: {input: text},
            success: (data) => {
                document.getElementById('output').value = "";
                document.getElementById('output').value = data;
                let csvContent = "data:text/csv;charset=utf-8," + data;
                csvContent = encodeURI(csvContent);
                var link = document.createElement('a');
                link.setAttribute('href', csvContent);
                link.setAttribute('download', 'flattenedData.csv');
                document.body.appendChild(link);
                link.click();
            }
        });
    }

    addTextInputListener() {
        document.getElementById("form1").addEventListener('submit', this.handleTextSubmit);
    }

    addFileSelectListener() {
        document.getElementById("file").addEventListener('change', this.handleFileSelect);
    }

    handleTextSubmit(event) {
        event.preventDefault();
        var text = document.getElementsByName('input')[0].value;
        page.sendAjaxPost(text);
        document.getElementsByName('input')[0].value = '';
    }


    handleFileSelect(event) {
        event.preventDefault();
        var f = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            page.sendAjaxPost(e.target.result);
        }
        reader.readAsText(f);
        document.getElementById("file").value = null;
        
    }

}

var page;

window.onload = function(){
 page = new Page();
 page.addFileSelectListener();
 page.addTextInputListener();
}