
	
			
				//点击鼠标div跟随，松手不跟随
			
				
				var drag=function(ev,obj,parent){
				var oEvent=ev||event;
				
				var disX=oEvent.clientX-obj.offsetLeft;
				var disY=oEvent.clientY-obj.offsetTop;
				
				document.onmousemove=function(ev){
				   var oEvent=ev||event;
				   var l=oEvent.clientX-disX;
				   var t=oEvent.clientY-disY;
				   obj.style.left=l+'px';
				   obj.style.top=t+'px';
				   
				   //防止脱出可视区
				   if(l<0){
				      obj.style.left=0;
			       }
				   else if(l>parent.offsetWidth-obj.offsetWidth){
					   obj.style.left=parent.offsetWidth-obj.offsetWidth+'px';
				   }
				   if(t<0){
					   obj.style.top=0;
				   }
				   else if(t>parent.offsetHeight-obj.offsetHeight){
					   obj.style.top=parent.offsetHeight-obj.offsetHeight+'px';
				   }
			    }
				
				document.onmouseup=function(){
				   document.onmousemove=null;
				   document.onmouseup=null;
			    }
				return false;  //火狐默认事件阻止
				
				
				
			}
			
			
			
			
			
		