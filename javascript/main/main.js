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


   function getByClass(oParent,sClass){
   	var aELe = oParent.getElementsByTagName('*');
   	var aResult =[];
   	for(var i=0;i<aELe.length;i++){
   		if(aELe[i].className ==sClass){
   			 aResult.push(aELe[i]);
   		}
   	}
   	return aResult;
 }  


 window.onscroll = function(){
	var oAsteroids = document.getElementById('asteriods');
	var oA_L =  getByClass(oAsteroids,'a-l');
	var oA_R =  getByClass(oAsteroids,'a-r');
	var oB_L =  getByClass(oAsteroids,'b-l');
	var oB_R =  getByClass(oAsteroids,'b-r');
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var l = document.documentElement.scrollLeft || document.body.scrollLeft;
	
	
             for(var i=0;i<oA_L.length;i++){
             	oA_L[i].style.top = -200+ t + 'px';  
            		 oA_L[i].style.left = -640 +t + 'px'; 
            		 console.log(t);	
             };
            	for(var j=0; j<oA_R.length; j++){
             	oA_R[j].style.top = -200+  t +  'px';  
            		oA_R[j].style.left =  3000 + -t+ 'px'; 
           	 };
         
	for(var k=0;k<oB_L.length;k++){
		oB_L[k].style.top = -200 + t  +  'px';  
            		oB_L[k].style.left =  -4000+t+ 'px'; 
	};

	for(var m=0; m<oB_R.length;m++){
		oB_R[m].style.top =  t  +  'px';  
            		oB_R[m].style.left =  6000+ -t+ 'px'; 
	}              		
}