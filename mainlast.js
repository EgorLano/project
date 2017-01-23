


function Objectone(number,name,about,dateone){
            this.number=number;
            this.name=name;
            this.opisanie=about;
            this.dateone=dateone;
}

               var Spisok=new Array();
               var i=0;


function Add(){

         var main = document.getElementById('main');
         var addTask = document.getElementById( 'addTask');

	 main.style.display = 'none';
         addTask.style.display = 'block';

      

}
var i=0;
function AddTask(){

         var number=i+1;	 
         var   name=document.getElementById('text').value;
         var   opisanie=document.getElementById('textabout').value;
         var   createDate=new Date();

         Spisok.push(new Objectone(number,name,opisanie,createDate));


	var newrow=document.all.actTask.insertRow();
	newcell=newrow.insertCell(0);
	newcell.innerText=Spisok[i].number;
	newcell=newrow.insertCell(1);
	newcell.innerHTML="<p onclick='openAbout(Spisok[Spisok[i].num)])'>"+Spisok[i].name+"</p>";
	newcell=newrow.insertCell(2);
	newcell.innerText=Spisok[i].dateone;

         var main = document.getElementById('main');
         var addTask = document.getElementById('addTask');

         main.style.display = 'block';
         addTask.style.display = 'none';

        i+=1;

}
 
function openAbout(elem){
         
         var main = document.getElementById('main');
         var about = document.getElementById('about');
         
	 main.style.display = 'none';
         about.style.display = 'block';

        var  elem=new Objectone();

	var newrow=document.all.isAbout.insertRow(1);
	newcell=newrow.insertCell(0);
        newcell.innerText=elem.name;
	newrow=document.all.isAbout.insertRow(3);
	newcell=newrow.insertCell(0);
	newcell.innerText=elem.opisanie;
}        

function closeAbout(){

       

         var main = document.getElementById('main');
         var openabout = document.getElementById('about');

         main.style.display = 'block';
         openabout.style.display = 'none';

         document.all.isAbout.deleteRow(1);
         document.all.isAbout.deleteRow(2);
        
}



