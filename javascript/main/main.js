/*part of on click show or hide*/

function menuShowHide(obj,menu){
		obj.onclick = function(){
			if(menu.style.display == 'block'){
			menu.style.display = 'none';
		}
		else{
			menu.style.display = 'block';
		}    	
	}
}