<template>
  <div class="container-fluid">
  <div class="row">
    <div class="col-md-3 align-content-left d-inline-flex">
      <button type="button" id="btn_ca"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16" style="margin-left:6px; margin-top:6px">
  <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
</svg></button>
      <button type="button" id="btn_ca"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-house-door" viewBox="0 0 16 16" style="margin-left:6px; margin-top:6px">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg></button>
      <button type="button" id="btn_re"><i class="fab fa-trello"></i>Boards</button>
          <div class="input-group rounded" style="width:250px">
            <input type="search" class="form-control rounded" placeholder="Passer à..." aria-label="Search"
              aria-describedby="search-addon" id="searchSaisie" style="color:white" /> 
            <span class="input-group-text border-0"  id="search-addon">
              <i class="fas fa-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></i>
            </span> 
          </div>
    </div>

    <div class="col-md" align="center">
      <p id="trello"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16" style="margin-right: 5px">
  <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" /></svg>Trello </p>
    </div>

    <div class="col-md-2 d-flex flex-row-reverse" >
      <button type="button" id="btn_car">AT</button>
      <button type="button" id="btn_calerte"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-bell" viewBox="0 0 16 16" style="margin-left:6px; margin-top:6px">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg></button>
      <button type="button" id="btn_ca"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-info-circle" viewBox="0 0 16 16" style="margin-left:6px; margin-top:6px">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></button>
      <button type="button" id="btn_ca"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-plus" viewBox="0 0 16 16" style="margin-left:4px; margin-top:4px">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button>
    </div>
  </div>



    <div class="row" id="row2">
    <div class="col-md align-content-left d-inline-flex">
      <!-- <button type="button" id="btn_redown">
        
      </button> -->
      <div class="dropdown">
        <button class="dropbtn"><i class="fab fa-trello"></i>
        Boards <i class="fas fa-chevron-down"></i></button>
        <div class="dropdown-content">
        <a href="#">FRONT-END</a>
        <a href="#">BACK-END</a>
        <a href="#">PROJECT LEAD</a>
        </div>
      </div>

      
      <!-- <button type="button" id="btn_re" style="padding-left:15px">C-DEV-120</button> -->
      <select id="monselect">
        <option value="valeur1">TRELLOCIRAPTOR</option>
        <option value="valeur2">THE GOOD CORNER</option>
        <option value="valeur3">IKEOUF</option>
      </select>

      <button type="button" id="btn_ca"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style="margin-left:6px; margin-top:6px">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg></button>
      <button type="button" id="btn_gre"> Triple T  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-keyboard" viewBox="0 0 16 16" style="margin-left:75px; margin-top:5px">
  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
  <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>
</svg></button>
      <button type="button" id="btn_gregre"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16" style="margin-left:6px; margin-top:3px; margin-right:6px">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
</svg>Visible by team members</button>
      <button type="button" id="btn_car">AT</button>
      <button type="button" id="btn_cak">TB</button>
      <button type="button" id="btn_cor">TL</button>
      <button type="button" id="btn_re" style="padding-left:30px">Add member</button>


    </div>

    <div class="col-md-2 d-flex flex-row-reverse" >
      <button type="button" id="btn_re" style="width:145px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16" style="margin:4px">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg> Show navigation</button>
      <button type="button" id="btn_re"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-alt-low-fill" viewBox="0 0 16 16" style="margin:4px; margin-right:12px">
  <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"/>
</svg>Butler</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
#searchSaisie{
  margin:2px; 
  height:32px; 
  background-color:hsla(0,0%,100%,.3); 
  border:none; 
  color:white; 
  margin-top:3px;
  font-family: 'Ubuntu', sans-serif;

}

.container-fluid{
background-color: rgb(0, 121, 191);
}

#row2 {
  margin-top: -15px;
}

#btn_ca {
border-radius: 3px;
border: 0;
text-decoration: none;
background-color: hsla(0,0%,100%,.3);
box-shadow: none;
color: #fff;
display: flex;
font-weight: 400;
height: 32px;
line-height: 32px;
width: 32px;
padding: 0;
margin: 3px;
}

#btn_calerte {
border-radius: 3px;
border: 0;
text-decoration: none;
background-color: #cf513d;
box-shadow: none;
color: #fff;
display: flex;
font-weight: 400;
height: 32px;
line-height: 32px;
width: 32px;
padding: 0;
margin: 3px;
}

#btn_car {
border-radius: 15px;
border: 0;
text-decoration: none;
background-color: rgba(224, 9, 9, 0.829);
box-shadow: none;
color: #fff;
display: flex;
font-weight: 400;
height: 32px;
line-height: 32px;
font-size: 14px;
width: 32px;
padding: 0;
padding-left:7px;
margin: 3px;
}

#btn_cak {
border-radius: 15px;
border: 0;
text-decoration: none;
background-color: rgba(3, 117, 12, 0.829);
box-shadow: none;
color: #fff;
display: flex;
font-weight: 400;
height: 32px;
line-height: 32px;
width: 32px;
font-size: 14px;
padding: 0;
padding-left:7px;
margin: 3px;
}

#btn_cor {
border-radius: 15px;
border: 0;
text-decoration: none;
background-color: cornflowerblue;
box-shadow: none;
color: #fff;
display: flex;
font-weight: 400;
height: 32px;
line-height: 32px;
width: 32px;
font-size: 14px;
padding: 0;
padding-left:7px;
margin: 3px;
}


#btn_re {
border-radius: 3px;
border: 0;
text-decoration: none;
background-color: hsla(0,0%,100%,.3);
box-shadow: none;
color: #fff;
display: flex;
/* font-weight: 400; */
height: 32px;
line-height: 32px;
font-weight: 400;
font-size: 14px;
width: 100px;
padding: 0;
margin: 3px;
font-size: 85%;
}

.dropbtn {
  background-color: hsla(0,0%,100%,.3);
  color: white;
  font-family: 'Ubuntu', sans-serif;
  padding-top:12px;
  padding: 4px;
  font-size: 90%;
  border: none;
  cursor: pointer;
  margin-top:3px;
  border-radius: 3px;
  height: 32px;
  margin-right:2px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #ebebeb;
}



#btn_gre {
border-radius: 3px;
border: 0;
text-decoration: none;
background-color: hsla(0,0%,100%,.3);
box-shadow: none;
color: #fff;
display: flex;
font-size: 14px;
font-weight: 400;
height: 32px;
line-height: 32px;
width: 240px;
padding: 0;
margin: 3px;
padding-left:5px;
}

#btn_gregre {
border-radius: 3px;
border: 0;
text-decoration: none;
background-color: hsla(0,0%,100%,.3);
box-shadow: none;
color: #fff;
display: flex;
font-weight: 400;
height: 32px;
font-size: 14px;

line-height: 32px;
width: 350px;
padding: 0;
margin: 3px;
}

#trello {
  margin-right: 250px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 25px;
  font-weight: 400;
  color: white;
}

#search-addon {
  margin:2px; 
  height:32px; 
  background-color:hsla(0,0%,100%,.3); 
  border:none; 
  color:white; 
  margin-top:3px;
  margin-left:-1px;
}

#monselect{
  background-color: hsla(0,0%,100%,.3);
  border:none;
  height:32px;
  width:120px;
  margin-top:3px;
  margin-left:2px;
  margin-right:2px;
  font-family: 'Ubuntu', sans-serif;
  color:white;
  cursor: pointer;
  font-weight: bold;
  padding:7px;
  -webkit-appearance: none;
}
::placeholder {
  font-size: 14px;
  color: white;
}

</style>