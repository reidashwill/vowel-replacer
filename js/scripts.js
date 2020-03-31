$(document).ready(function() {
  var string = "the quick brown fox jumps over the lazy dog";
  var vowels = ["a", "e", "i", "o", "u"];


  vowels.forEach(function(vowels) {
    
    string = string.replace(/([vowels])/g, "-");
    console.log (string)
    
  })
})
// array[i] = array[i].replace(/vowels[i]/g, "-");

  // var array = ["aeiou"];
  // var updatedArray = array.map(function(item){
  //  for(var x = 0; x <= array.length; x++){
  //    if(x === "e"){
  //      x.replace("e", "-");
  //    }
  //  }
  // })

