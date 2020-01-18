$("#portal-drivers").dataTable( {
    "sScrollX": "100%",
    "sScrollXInner": "110%",
	"sScrollY": "100%",
    "sScrollYInner": "110%",
} );



        function checkAll(){
            var parent = document.getElementById("01.01.2020");
            var label = document.getElementById("label");
            var input = document.getElementsByTagName("input");
			
			

            if(parent.checked === true ) {
                for(var i=0; i<input.length; i++){
                    if (input[i].type == "checkbox" && input[i].id == "01.01.2020" && input[i].checked == false) {
 
                        input[i].checked = true;
                        label.innerHTML = "Select All";
                    }
                }
            }
            else if(parent.checked === false ) {
                for(var i=0; i<input.length; i++){
                    if (input[i].type == "checkbox" && input[i].id == "01.01.2020" && input[i].checked ==true) {

                        input[i].checked = false;
                        label.innerHTML="Select All";
                    }
                }
            }
        
		
		var parent1 = document.getElementById("02.01.2020");
		if(parent1.checked === true) {
                for(var i=0; i<input.length; i++){
                    if (input[i].type == "checkbox" && input[i].id == "02.01.2020" && input[i].checked == false) {
 
                        input[i].checked = true;
                        label.innerHTML = "Select All";
                    }
                }
            }
		else if(parent1.checked === false) {
                for(var i=0; i<input.length; i++){
                    if (input[i].type == "checkbox" && input[i].id == "02.01.2020" && input[i].checked ==true) {

                        input[i].checked = false;
                        label.innerHTML="Select All";
                    }
                }
            }
			
       }
    
	function addRow(tableID) {

			var table = document.getElementById(tableID);

			var rowCount = table.rows.length ;
			var row = table.insertRow(rowCount);
			
			var cell1 = row.insertCell(0);
			var element1 = document.createElement("input");
			element1.type = "text";
			element1.name = "txtbox[]";
			element1.placeholder = "Student ID";
			cell1.appendChild(element1);
			
			
			var cell2 = row.insertCell(1);
			var element2 = document.createElement("input");
			element2.type = "checkbox";
			element2.name="chkbox[]";
			element2.id = "01.01.2020";
			cell2.appendChild(element2);

			var cell3 = row.insertCell(2);
			var element3 = document.createElement("input");
			element3.type = "text";
			element3.name = "txtbox[]";
			element3.placeholder = "Student ID";
			cell3.appendChild(element3);


		}
	
	function myFunction() {
var i=0;
var rowCount = document.getElementById('dataTable').rows.length;
var firstRow = document.getElementById("dataTable").rows[i];
  
  var colCount = document.getElementById('dataTable').rows[i].cells.length;
  var x = firstRow.insertCell(colCount-1);
  var element2 = document.createElement("input");
			element2.type = "textbox";
			element2.name = "textbox[]";
			element2.placeholder = "01/01/2020";
			x.appendChild(element2);
			var br = document.createElement("br");
			x.appendChild(br);
			var el =  document.createElement("input");
	el.type = "checkbox";
	el.name = "checkbox[]";
	el.id = "label";
	x.appendChild(el);
	
	var textNode = document.createTextNode(" Select All");
	x.appendChild(textNode);
			
			
for( i = 1 ; i < rowCount ; i++){
  var firstRow = document.getElementById("dataTable").rows[i];
  
  var colCount =document.getElementById('dataTable').rows[i].cells.length;
  var x = firstRow.insertCell(colCount-1);
  var element2 = document.createElement("input");
			element2.type = "checkbox";
			element2.name = "checkbox[]";
			element2.id = "02.01.2020";
			x.appendChild(element2);
			}
}
	
	