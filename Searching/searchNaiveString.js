function naiveSearch(long, short) {
    var count = 0;
  console.log(short.length);
    for ( let i = 0; i< long.length; i++) {
            
            for( let j = 0; j < short.length; j++) {

//                console.log(short[j], long[i+j])
               if(short[j] !== long[i+j]) {
//                 console.log('BREAK');
                   break;
               }
               else if(j === short.length -1){
//                console.log('FOUND ONE!!')
                   count++; 
               }
            }
   }
return count;
}

//l o r i e   l o l e d   l o l
//0 1 2 3 4 5 6 7 8 9 10  0 1 2
naiveSearch("lorie loledlolmalolnlomlol","pop");
