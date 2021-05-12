
var requiredFields = [
 "firstName", "frequency", "Lastname", "gender", "wayToPractice", "birthDate", "duration", "startDate", "education", "items", "genre"
]


var MyFormData={
  "owner": "Syuzanna",
  "project": "Dance",
  "firstName": "",
  "Lastname": "",
  "gender": "",
  "birthDate": "",
  "address": "",
  "email": "",
  "phone": "",
  "facebook": "", 
  "certificate1": "",
  "certificate2": "",
  "competitionInfo": "",
  "experienceAndSkills": "",
  "storyBehind": "",
  "benefits": "", 
  "genre": "",
  "education": "", 
  "items": "",
  "startDate": "", 
  "frequency": "",
  "duration": "",
  "wayToPractice": "",
}

function CheckData(){
  var keys = Object.keys(MyFormData);
  var some= 1;
  keys.forEach(key => {
  if (requiredFields.indexOf(key) > -1 && MyFormData[key] == "") {
   console.log(key, " is a required field, please add a value");
   if (key=="wayToPractice"){
    document.getElementById(key).style.color = "red";
   } 
   else if(key=="items"){
     document.getElementById(key).style.color="red";
   } 
   
   else if(key=="genre"){
     document.getElementById(key).style.color="red";
   }
   else if(key=="gender"){
     document.getElementById("genderlabel").style.color= "red";
   }
     else{
     if (document.getElementById(key)) {
      document.getElementById(key).style.backgroundColor = "red";
     }
   }
  some=0;

  
   }
 })

 console.log(MyFormData);
  return some;
}

function handleFirstNameChange(){
  MyFormData.firstName=document.getElementById("firstName").value;
  if(MyFormData.firstName!=""){
    document.getElementById("firstName").style.backgroundColor="white";
  }
}

function handleLastNameChange(){
  MyFormData.Lastname=document.getElementById("Lastname").value;
  if(MyFormData.Lastname!=""){
    document.getElementById("Lastname").style.backgroundColor="white";
  }
}

function handleGenderChange(event){
  MyFormData.gender= event.target.value;
  if (MyFormData.gender!=""){
    document.getElementById("genderlabel").style.color= "black";
  }
}

function handleBirthDateChange(){
  MyFormData.birthDate=document.getElementById("birthDate").value;
  if(MyFormData.birthDate!=""){
    document.getElementById("birthDate").style.backgroundColor="white";
  }
}

function handleAddressChange(){
  MyFormData.address=document.getElementById("address").value;
}

function handleEmailChange(){
  MyFormData.email=document.getElementById("email").value;
}

function handlePhoneChange(){
  MyFormData.phone=document.getElementById("phone").value;
}

function handleFacebookChange(){
  MyFormData.facebook=document.getElementById("facebook").value;
}

function handleCertificate1Change(){
  MyFormData.certificate1=document.getElementById("cert1").value;
}

function handleCertificate2Change(){
  MyFormData.certificate2=document.getElementById("cert2").value;
}

function handleDanceGenreChange(event){
  var st="";
  if (document.getElementById("type1").checked) {
      st= st.concat( document.getElementById("type1").value, "; ");
  }
  if (document.getElementById("type2").checked) {
   st= st.concat( document.getElementById("type2").value, "; ");
  }
  if (document.getElementById("type3").checked) {
      st= st.concat( document.getElementById("type3").value, "; ");
  }
  if (document.getElementById("type4").checked) {
      st= st.concat( document.getElementById("type4").value, "; ");
  }
  if (document.getElementById("type5").checked) {
      st= st.concat( document.getElementById("type5").value, "; ");
  }
  if (document.getElementById("type6").checked) {
      st= st.concat( document.getElementById("type6").value, "; ");
  }
  if (document.getElementById("typeother").checked) {
      st= st.concat( document.getElementById("othertext1").value, "; ");
  }
  if (st.length !=0){
    st=st.substr(0, st.length-2);
  }
  MyFormData.genre=st;
  if(MyFormData.genre!= ""){
    document.getElementById("genre").style.color="black";
  }
  
  if (document.getElementById("typeother").checked){
   document.getElementById("othertext1").style.display="block";
 } else{
   document.getElementById("othertext1").style.display="none";
 }
}

function handleCompetitionChange(){
  MyFormData.competitionInfo=document.getElementById("competitions").value;
}

function handleEducationChange(event){
  MyFormData.education=document.getElementById("education").value;
  if(MyFormData.education!=""){
    document.getElementById("education").style.backgroundColor="white";
  }
}

function handleExperienceChange(){
  MyFormData.experienceAndSkills= document.getElementById("skills").value;
}

function handleItemsChange(event){
 var st2="";
  if (document.getElementById("access1").checked) {
      st2= st2.concat( document.getElementById("access1").value, "; ");
  }
  if (document.getElementById("access2").checked) {
     st2= st2.concat( document.getElementById("access2").value, "; ");
  }
  if (document.getElementById("access3").checked) {
      st2= st2.concat( document.getElementById("access3").value, "; ");
  }
  if (document.getElementById("access4").checked) {
      st2= st2.concat( document.getElementById("access4").value, "; ");
  }
  if (document.getElementById("access5").checked) {
      st2= st2.concat( document.getElementById("access5").value, "; ");
  }
  if (document.getElementById("access6").checked) {
      st2= st2.concat( document.getElementById("access6").value, "; ");
  }
  if (document.getElementById("accessother").checked) {
      //st2= st2.concat( document.getElementById("itemother").value, "; ");
      st2= st2.concat( document.getElementById("itemother").value, "; ");
  }
  if (st2.length !=0){
    st2=st2.substr(0, st2.length-2);
  }
  MyFormData.items=st2;
   if (MyFormData.items!=""){
    document.getElementById("items").style.color="black";
  }
  
  if (document.getElementById("accessother").checked){
   document.getElementById("itemother").style.display="block";
 } else{
   document.getElementById("itemother").style.display="none";
 }
}


function handleStartDateChange(){
  MyFormData.startDate=document.getElementById("startDate").value;
  if(MyFormData.startDate!=""){
    document.getElementById("startDate").style.backgroundColor="white";
  }
}

function handleStoryChange(){
  MyFormData.storyBehind=document.getElementById("TextArea2").value;
}

function handleFrequencyChange(){
  MyFormData.frequency=document.getElementById("frequency").value;
  if(MyFormData.frequency!=""){
    document.getElementById("frequency").style.backgroundColor="white";
  }
}

function handleDurationChange(){
  MyFormData.duration=document.getElementById("duration").value;
  if(MyFormData.duration!=""){
    document.getElementById("duration").style.backgroundColor="white";
  }
}

function handleBenefitsChange(){
  MyFormData.benefits=document.getElementById("TextArea1").value;
}

function handlePracticeWayChange(e){
 var st3="";
  if (document.getElementById("approach1").checked) {
      st3= st3.concat( document.getElementById("approach1").value, "; ");
  }
  if (document.getElementById("approach2").checked) {
     st3= st3.concat( document.getElementById("approach2").value, "; ");
  }
  if (document.getElementById("approach3").checked) {
      st3= st3.concat( document.getElementById("approach3").value, "; ");
  }
  if (document.getElementById("approach4").checked) {
      //st3= st3.concat( document.getElementById("otherapproach").value, "; ");
      st3= st3.concat( document.getElementById("otherapproach").value, "; ");
  }
  if (st3.length !=0){
    st3=st3.substr(0, st3.length-2);
  }
  MyFormData.wayToPractice=st3;
  if (MyFormData.wayToPractice!=""){
    document.getElementById("wayToPractice").style.color="black";
  }
  
  if (document.getElementById("approach4").checked){
   document.getElementById("otherapproach").style.display="block";
 } else{
   document.getElementById("otherapproach").style.display="none";
 }
}

function SaveDanceData(event){
  var check=CheckData();
  if (check==1){
console.log(MyFormData);

  event.preventDefault();
   $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-syuzi.herokuapp.com/data",
    data: MyFormData,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });  
 
  }
  else{
    console.log("Data not saved");
  };
  
}