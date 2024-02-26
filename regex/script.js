
/**
//types of match
    /something/m =>only compares the first match named something
    /something/g =>compares all the match named something
    /something/i =>compares the match named something ,its case insensitive

 //special characters
    '+' =>the one or more quantifier;
    '\' => the escape character';
    '[]' => the character set;
    '[^]' => the negate symbol in a character
    '?' =>the zero-or0one quantifier ()\makes preceding character optional;
    '.' =>any character whatsoever(except new line character);eg .+
    '*' => the 0-or-more quantifier (a bit like +);
    '$' =>ends the input of string
    '|' =>match either

//shows what to match
    /[so]mething/g=> matches a single character in the list so (case sensitive);
    it should at least have one character in the bracket in the front;
    eg something,omething,smething;
    /[^so]mething/g=> excludes the words after '^' in the bracket;

//range
    /[a-zA-z1-9]/g=>ranges from first to last character or number;
    //repetation of range for given times;
    /[0-9]+9/g=> '+' denotes how many times the expression must me followed 
    instead of writing [0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9];
    /[0-9]{10}/g =>{10} matches the previous token exactly 10 times,can be done with character too used for length
    /[0-9]{10,11}/g =>{10,11} matches the previous token between 10 and 11 times, as many times as possible, giving back as needed (greedy);
    /[0-9]{10,}/g =>{10,} matches the previous token between 10 and unlimited times, as many times as possible, giving back as needed (greedy);

//shortcuts
    /\d/g =>\d matches a digit (equivalent to [0-9]);
    /\w/g=> \w matches any word character (equivalent to [a-zA-Z0-9_]);
    /\s/g =>\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]);
    /\t/g =>\t matches a tab character (ASCII 9);

    /--d/g =>--d matches the characters --d literally (case sensitive);

//length
    ^[a-z]$ =>starts and ends with 5 letters exact;
//either or
/(p|t)yre/g => p or t and yre


 **/


const patterns={
    phone:/^98[\d]{8}$/ig,
    username:/^[a-z]{5,12}$/gi,
    password:/^[\w@-]{8,20}$/g,
    slug:/^[a-z\d-]{8,20}$/g,
    email:/^([a-z\d\.-]{5,12})@([a-z\d-]{4,8})\.([a-z]{2,4})(\.[a-z]{2,4})?$/gi

};
//. means any character so use \to escape
let username='dontt';
let email='chadhad123@gmail.com';
let phone=9876543513;
let password='test1234@-';
let slug='jack123-';
let inputs={
    username,email,phone,password,slug
};


  //const{phone,username,password,slug,email}=patterns;
validation(email,patterns.email);
function validation(field,regex){
if(field==phone  && !regex.test(field)){
    console.log('please enter valid number');
}
else if(field==username && !regex.test(field)){
    console.log('please enter valid username');
}
else if(field==email && !regex.test(field)){
    console.log('please enter valid email');
}
else if(field==password && !regex.test(field)){
    console.log('please enter valid password');
}
else if(field==slug && !regex.test(field)){
    console.log('please enter valid slug');
}
else{
    console.log('all set');
}


    
};



