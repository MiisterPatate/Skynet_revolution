var inputs = readline().split(' ');
var N = parseInt(inputs[0]);
var L = parseInt(inputs[1]); 
var E = parseInt(inputs[2]);
var liens = [];
var sorties =  Array();

for (var i = 0; i < L; i++){
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]);
    var N2 = parseInt(inputs[1]);
    liens.push(N1+" "+N2)
    liens.push(N2+" "+N1)
}


for (var i = 0; i < E; i++){
    var EI = parseInt(readline());
    sorties.push(EI)
}

printErr('liens '+liens.join(";"));

while (true){
    var SI = parseInt(readline()); 
    var link=""; 
    var linkProche=""; 
    var n1=0;
    var n2=0;
    for(j = 0; j < sorties.length; j++){
        EI = sorties[j]; 
        printErr('Getway exit  = ...'+EI);
        for(i = 0; i < liens.length; i++){
            if(liens.indexOf(EI+" "+SI)!=-1){
                link = EI+" "+SI;
                linkProche=link;
                break;
            } else{
                n1=liens[i].split(" ")[0];
                n2=liens[i].split(" ")[1];
                if(liens.indexOf(n2+" "+SI)!=-1 && liens.indexOf(EI+" "+n2)!=-1){
                    printErr('pour n1='+n1+" ; n2="+n2 );
                    link = n2+" "+SI;
                    break;
                }
            }
 
        }
    }
    if(linkProche !==""){
        link=linkProche;
    }
    print(link)                          
}
