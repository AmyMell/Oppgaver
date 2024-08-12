function head1() {
    document.getElementById("allheads").innerHTML = /*html*/ `
    
    <button onclick="head4()">◀</button>
       
          <img src="img/head1.png" class="image" />
       
     <button onclick="head2()">▶</button>
    
    `;
}

function head2() {
    document.getElementById("allheads").innerHTML = /*html*/ `
    
       <button onclick="head1()">◀</button>
        
        <img src="img/head2.png" class="image" />
    
       <button onclick="head3()">▶</button>
      
    `;
}

function head3() {
    document.getElementById("allheads").innerHTML = /*html*/ `
    
      <button onclick="head2()">◀</button>
      
      <img src="img/head3.png" class="image" />
     
       <button onclick="head4()">▶</button>
    
    `;
}

function head4() {
    document.getElementById("allheads").innerHTML = /*html*/ `
    
    <button onclick="head3()">◀</button>
       
       <img src="img/head4.png" class="image" />
       
    <button onclick="head1()">▶</button>
    
    `;
}

//------------------------------------------Body---------------------------------------//


function body1() {
    document.getElementById("allbody").innerHTML = /*html*/ `
    
    <button onclick="body4()">◀</button>
       
       <img src="img/body1.png" class="image" />
       
    <button onclick="body2()">▶</button>
    
    `;
}

function body2() {
    document.getElementById("allbody").innerHTML = /*html*/ `
    
    <button onclick="body1()">◀</button>
       
       <img src="img/body2.png" class="image" />
       
    <button onclick="body3()">▶</button>
    
    `;
}


function body3() {
    document.getElementById("allbody").innerHTML = /*html*/ `
    
    <button onclick="body2()">◀</button>
       
       <img src="img/body3.png" class="image" />
       
    <button onclick="body4()">▶</button>
    
    `;
}


function body4() {
    document.getElementById("allbody").innerHTML = /*html*/ `
    
    <button onclick="body3()">◀</button>
       
       <img src="img/body4.png" class="image" />
       
    <button onclick="body1()">▶</button>
    
    `;
}


//------------------------------------------Legs-----------------------------//


function legs1() {
    document.getElementById("alllegs").innerHTML = /*html*/ `
    
    <button onclick="legs4()">◀</button>
       
       <img src="img/legs1.png" class="image" />
       
    <button onclick="legs2()">▶</button>
    
    `;
}

function legs2() {
    document.getElementById("alllegs").innerHTML = /*html*/ `
    
    <button onclick="legs1()">◀</button>
       
       <img src="img/legs2.png" class="image" />
       
    <button onclick="legs3()">▶</button>
    
    `;
}

function legs3() {
    document.getElementById("alllegs").innerHTML = /*html*/ `
    
    <button onclick="legs2()">◀</button>
       
       <img src="img/legs3.png" class="image" />
       
    <button onclick="legs4()">▶</button>
    
    `;
}

function legs4() {
    document.getElementById("alllegs").innerHTML = /*html*/ `
    
    <button onclick="legs3()">◀</button>
       
       <img src="img/legs4.png" class="image" />
       
    <button onclick="legs1()">▶</button>
    
    `;
}