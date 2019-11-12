//根据所选地区获取数据
		function getData(){
			var newRegion = getSelectData(regoinWrapper);
			var newProduct = getSelectData(productWrapper);
			var newData = new Array();
			for (var i in sourceData) {
				if(newRegion.indexOf(sourceData[i].region) != -1 && newProduct.indexOf( sourceData[i].product)!=-1){
					newData.push(sourceData[i]);
				}

			}
			return newData;
		}
		//渲染表格
		function renderTable(){
			var data = getData();
			var th = document.getElementById("th");
			var newRegion = getSelectData(regoinWrapper);
			var newProduct = getSelectData(productWrapper);
			//清除所有tr
			var trs = tableWrapper.querySelectorAll("tr");
			if(trs.length > 0){
				for (var i = 1; i < trs.length; i++) {
					tableWrapper.removeChild(trs[i]);
				}
			}
			
			if(newRegion.length == 1){
				// 只有一个地区，地区放在前面
				var thList = th.querySelectorAll("th");
				thList[0].innerHTML = "地区";
				thList[1].innerHTML = "商品";
				for (var i = 0 ; i < newProduct.length; i++) {
					var tr = document.createElement("tr");
					if (i == 0) {
						var regionTd =  document.createElement("td");
						regionTd.innerHTML = newRegion[0];
						regionTd.rowSpan = newProduct.length;
						tr.appendChild(regionTd);
					}
					var productTd =  document.createElement("td");
					productTd.innerHTML = data[i].product;
					tr.appendChild(productTd);
					for (var j = 0; j < 12; j++) {
						var td = document.createElement("td");
						td.innerHTML = data[i].sale[j];
						tr.appendChild(td);
					}
					tableWrapper.appendChild(tr);
				}

			}else{
				
				for (var i in data) {
				var tr = document.createElement("tr");
				if (i % newRegion.length == 0) {
					var tdProduct = document.createElement("td");
			    	tdProduct.innerHTML = data[i].product;
			    	tdProduct.rowSpan = newRegion.length;
			    	tr.appendChild(tdProduct);
				}
				var tdRegion = document.createElement("td");
				tdRegion.innerHTML = data[i].region;
				tr.appendChild(tdRegion);
				for (var j = 0; j < 12; j++) {
					var td = document.createElement("td");
					td.innerHTML = data[i].sale[j];
					tr.appendChild(td);
				}
				tableWrapper.appendChild(tr);
		}
	}
}
		function getSelectData(wrapper){
			var selectData = new Array();
			var checkBoxs = wrapper.querySelectorAll("input");
			
			for (var i = 1 ; i < checkBoxs.length;i++) {
				if(checkBoxs[i].checked == true){
					selectData.push(checkBoxs[i].value);
				}
			}
			return selectData;
			

		}