$(document).ready(function() {
  var string = "the quick brown fox jumps over the lazy dog";
  var vowels = ["a", "e", "i", "o", "u"];
  var replace = "regex";
  var re = new RegExp(replace, vowels);

  vowels.forEach(function(vowels) {
    string.replace(re, "-")
    // string = string.replace(/vowels/g, "-");
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

