// create a function which returns an RNA sequence from the given DNA sequence

//Example: "GCAT"  =>  "GCAU"

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
  