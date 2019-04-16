let getId = id => document.getElementById(id);


let myString = prompt('Write your text', 'Жили були дід і баба :)))');
function countSpaces (){
	let i=0;
	let count=0;
	let symbol;
	while(true){
		symbol=myString.indexOf(' ',i);
		if(symbol==-1) break;
		count++;
		i=symbol+1;		
	} 
	return count;
}
getId('space').innerHTML=`Count of 'spaces' ${countSpaces()}`