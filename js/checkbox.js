function createCheckBox( parentNode,textList) {
    		// 生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    		var labelAll = document.createElement("label");
    		var checkBoxAll = document.createElement("input");
    		var textNode = document.createTextNode("全选");
    		checkBoxAll.type = "checkBox";
    		checkBoxAll.setAttribute("checkbox_type","all");
    		labelAll.appendChild(checkBoxAll);
    		labelAll.appendChild(textNode);
    		parentNode.appendChild(labelAll);
    		var checkBoxList = new Array();
		    // 遍历参数对象 {
		    //     生成各个子选项checkbox的html，给一个自定义属性表示为子选项
		    // }
		    for (var i in textList) {
		    	var labelSingle = document.createElement("label");
	    		var checkBoxSingle = document.createElement("input");
	    		var textNode = document.createTextNode(textList[i]);
	    		checkBoxSingle.type = "checkBox";
	    		checkBoxSingle.value = textList[i];
	    		checkBoxSingle.setAttribute("checkbox_type","single");
	    		checkBoxList.push(checkBoxSingle);
	    		labelSingle.appendChild(checkBoxSingle);
	    		labelSingle.appendChild(textNode);
	    		parentNode.appendChild(labelSingle);
		    }
    

		    parentNode.onchange = function(e) {
		    	var target = e.target;

		        if (target.nodeName.toLowerCase() == "input"){
		            
		            if (target.attributes["checkbox_type"].nodeValue == "all"){
		                // 做全选对应的逻辑
		        
		                	for (var i in checkBoxList) {
		                		checkBoxList[i].checked = target.checked;                	
		            		}               
		            }
		            else{
		            	var hasSelectAll = true;
		                // 做子选项对应的逻辑
		                for (var i in checkBoxList) {
		                	if(checkBoxList[i].checked == false){
		                		hasSelectAll = false;
		                	}
		                }
		                checkBoxAll.checked = hasSelectAll;
		            }
		            renderTable();
		        }
		    }
		}
		createCheckBox(regoinWrapper,["华南","华东","华北"]);
		createCheckBox(productWrapper,["手机","笔记本","智能音箱"]);