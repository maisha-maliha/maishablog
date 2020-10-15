var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       const ob = JSON.parse(xhttp.responseText);
       const link = document.querySelector('.link ul');
       const a = document.querySelectorAll('.problem aside ul li')[0]; 
       const b = document.querySelectorAll('.problem aside ul li')[1]; 
       const c = document.querySelectorAll('.problem aside ul li')[2]; 
       const d = document.querySelectorAll('.problem aside ul li')[3]; 
       const e = document.querySelectorAll('.problem aside ul li')[4];
       const f = document.querySelectorAll('.problem aside ul li')[3]; 
       const g = document.querySelectorAll('.problem aside ul li')[4]; 
       const h = document.querySelectorAll('.problem aside ul li')[3]; 
       const i = document.querySelectorAll('.problem aside ul li')[4];
       const h3 = document.querySelector('h3');



       a.addEventListener('click', A) ;
       a.innerHTML = "<button>A level</button>";

       b.addEventListener('click', B) ;
       b.innerHTML = "<button>B level</button>";

       c.addEventListener('click', C) ;
       c.innerHTML = "<button>C level</button>";

       d.addEventListener('click', D) ;
       d.innerHTML = "<button>D level</button>";

       e.addEventListener('click', E) ;
       e.innerHTML = "<button>E level</button>";

    //    f.addEventListener('click', C) ;
    //    f.innerHTML = "<button>C level</button>";

    //    g.addEventListener('click', D) ;
    //    g.innerHTML = "<button>D level</button>";

    //    h.addEventListener('click', E) ;
    //    h.innerHTML = "<button>E level</button>";

    //    i.addEventListener('click', C) ;
    //    i.innerHTML = "<button>C level</button>";

    //    d.addEventListener('click', D) ;
    //    d.innerHTML = "<button>D level</button>";

    //    e.addEventListener('click', E) ;
    //    e.innerHTML = "<button>E level</button>";

       h3.innerHTML = 'A Level Problems'



       let prog = "";
       let level = "A"
       for(let i = 1; i <= 1891 ; i++){
            prog = "";
            for(let  j = 1890; j >= 0; j--){
                let contestId = ob.result.problems[j].contestId
                let index = ob.result.problems[j].index
                if(i == contestId && index == level){
                    prog  = " ( " + ob.result.problems[j].name + " ) ";
                }
            } 
            link.innerHTML += '<li><a href="https://codeforces.com/problemset/problem/'+ i +"/"+ level+ '"'+' target = "_blank">' + level +" - "+ i + prog +"</a></li>"
       }
       function A(){
        h3.innerHTML = 'A Level Problems'
        link.innerHTML = "";
        let prog = "";
        let level = "A"
        for(let i = 1; i <= 1891 ; i++){
             prog = "";
             for(let  j = 1890; j >= 0; j--){
                 let contestId = ob.result.problems[j].contestId
                 let index = ob.result.problems[j].index
                 if(i == contestId && index == level){
                     prog  = " ( " + ob.result.problems[j].name + " ) ";
                 }
             } 
             link.innerHTML += '<li><a href="https://codeforces.com/problemset/problem/'+ i +"/"+ level+ '"'+' target = "_blank">' + level +" - "+ i + prog +"</a></li>"
        }
       }
       function B(){
        h3.innerHTML = 'B Level Problems'
        link.innerHTML = "";
        let prog = "";
        let level = "B"
        for(let i = 1; i <= 1891 ; i++){
             prog = "";
             for(let  j = 1890; j >= 0; j--){
                 let contestId = ob.result.problems[j].contestId
                 let index = ob.result.problems[j].index
                 if(i == contestId && index == level){
                     prog  = " ( " + ob.result.problems[j].name + " ) ";
                 }
             } 
             link.innerHTML += '<li><a href="https://codeforces.com/problemset/problem/'+ i +"/"+ level+ '"'+' target = "_blank">' + level +" - "+ i + prog +"</a></li>"
        }
       }
       function C(){
        h3.innerHTML = 'C Level Problems'
        link.innerHTML = "";
        let prog = "";
        let level = "C"
        for(let i = 1; i <= 1891 ; i++){
             prog = "";
             for(let  j = 1890; j >= 0; j--){
                 let contestId = ob.result.problems[j].contestId
                 let index = ob.result.problems[j].index
                 if(i == contestId && index == level){
                     prog  = " ( " + ob.result.problems[j].name + " ) ";
                 }
             } 
             link.innerHTML += '<li><a href="https://codeforces.com/problemset/problem/'+ i +"/"+ level+ '"'+' target = "_blank">' + level +" - "+ i + prog +"</a></li>"
        }
       }
       function D(){
        h3.innerHTML = 'D Level Problems'
        link.innerHTML = "";
        let prog = "";
        let level = "D"
        for(let i = 1; i <= 1891 ; i++){
             prog = "";
             for(let  j = 1890; j >= 0; j--){
                 let contestId = ob.result.problems[j].contestId
                 let index = ob.result.problems[j].index
                 if(i == contestId && index == level){
                     prog  = " ( " + ob.result.problems[j].name + " ) ";
                 }
             } 
             link.innerHTML += '<li><a href="https://codeforces.com/problemset/problem/'+ i +"/"+ level+ '"'+' target = "_blank">' + level +" - "+ i + prog +"</a></li>"
        }
       }
       function E(){
        h3.innerHTML = 'E Level Problems'
        link.innerHTML = "";
        let prog = "";
        let level = "E"
        for(let i = 1; i <= 1891 ; i++){
             prog = "";
             for(let  j = 1890; j >= 0; j--){
                 let contestId = ob.result.problems[j].contestId
                 let index = ob.result.problems[j].index
                 if(i == contestId && index == level){
                     prog  = " ( " + ob.result.problems[j].name + " ) ";
                 }
             } 
             link.innerHTML += '<li><a href="https://codeforces.com/problemset/problem/'+ i +"/"+ level+ '"'+' target = "_blank">' + level +" - "+ i + prog +"</a></li>"
        }
       }
    }
};
xhttp.open("GET", "https://codeforces.com/api/problemset.problems?tags=implementation", true);
xhttp.send();
