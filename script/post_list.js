// code = 10 java=11 html = 12 css = 13 js = 14
// tech = 20 web =21 desktop = 22 app=23
// lifestyle = 30 
// travel = 40 bd = 41



var posts = {
    11:{
        title: "hi 10",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "travel.html"
        },
        img:"images/me.jpg"
    },
    10:{
        title: "hi 10",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "travel.html"
        },
        img:"images/me.jpg"
    },
    9:{
        title: "hi 9",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "travel.html"
        },
        img:"images/me.jpg"
    },
    8:{
        title: "hi 8",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "code.html"
        },
        img:"images/me.jpg"
    },
    7:{
        title: "hi 7",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "code.html"
        },
        img:"images/me.jpg"
    },
    6:{
        title: "hi 6",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"travel",
            loc: "code.html"
        },
        img:"images/me.jpg"
    },
    5:{
        title: "hi 5",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "travel.html"
        },
        img:"images/me.jpg"
    },
    4:{
        title: "h 4",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "code.html"
        },
        img:"images/me.jpg"
    },
    3:{
        title: "hi 3",
        link: "code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"travel",
            loc: "code.html"
        },
        img:"images/me.jpg"
    },
    2:{
        title: "hi2",
        link: "code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "travel.html"
        },
        img:"images/me.jpg"
    },
    1:{
        title: "hi1",
        link: "code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "code.html"
        },
        img:"images/me2.jpg"
    }

}


const post = document.querySelectorAll(".post")
const post_img = document.querySelectorAll(".post_img img")
const postimg = document.querySelectorAll(".post_img")
const post_number = document.querySelectorAll(".post .number")
const post_title = document.querySelectorAll(".post_des h2")
const post_date = document.querySelectorAll(".post_des .date")
const post_tags = document.querySelectorAll(".post_des .tags")

const posts_length = Object.keys(posts).length
const post_length = post.length

let j , k , l
console.log(window.location.href)

const home = "https://www.maishamaliha.com/"
const code = "https://www.maishamaliha.com/code.html"
const lifestyle = "https://www.maishamaliha.com/lifestyle.html"
const travel = "https://www.maishamaliha.com/travel.html"
const tech = "https://www.maishamaliha.com/tech.html"
const design = "https://www.maishamaliha.com/design.html"

// const home = "file:///F:/MY%20SPACE/maisha/index.html"
// const code = "file:///F:/MY%20SPACE/maisha/code.html"
// const lifestyle = "file:///F:/MY%20SPACE/maisha//lifestyle.html"
// const travel = "file:///F:/MY%20SPACE/maisha/travel.html"
// const tech = "file:///F:/MY%20SPACE/maisha/tech.html"
// const design = "file:///F:/MY%20SPACE/maisha/design.html"


if(window.location.href==home){
    for(var i = 0; i<post_length ; i++){
        j = i+1
        if(posts_length>=i+1){
            post_img[i].setAttribute("src",posts[j].img)
            post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
            post_number[i].innerHTML = (j) + "| "
            post_title[i].setAttribute("href",posts[j].link)
            post_date[i].innerHTML = posts[j].date
            post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
            } else {
            post[i].style ="display:none"
        }
    }
    const pre = document.querySelector(".preview")
    const next = document.querySelector(".next")
    
    if(posts_length>8){
        next.style = "display:inline"
    }
    
    pre.addEventListener("click", previous)
    next.addEventListener("click", nextpage)
    
    function previous(){
        j = j - (8 + (j%8)) + 1
        for(var i = 0; i<post_length ; i++){
            if(posts_length>=j){
                post[i].style =""
                post_img[i].setAttribute("src",posts[j].img)
                post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                post_number[i].innerHTML = (j) + "| "
                post_title[i].setAttribute("href",posts[j].link)
                post_date[i].innerHTML = posts[j].date
                post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                j++
            } else {
                post[i].style ="display:none"
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        if(j==i+1){
            pre.style="display:none"
        }
        j--
    }
    
    function nextpage(){
        j++
        for(var i = 0; i<post_length ; i++){
            if(posts_length>=j){
                post_img[i].setAttribute("src",posts[j].img)
                post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                post_number[i].innerHTML = (j) + "| "
                post_title[i].setAttribute("href",posts[j].link)
                post_date[i].innerHTML = posts[j].date
                post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                j++
            } else {
                post[i].style ="display:none"
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        j--
    }
}


if(window.location.href==code|| window.location.href ==code+"#article"){
    const tag = "code"
    j = 1
    k = 0
    let p = true
    for(var i = 0; i<=post_length ; i++){
        if(i==post_length){
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        break
                    }
                } 
            }
        }
        else{
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        if(i == post_length-1){
                            p = false
                        }
                        break
                    }
                } 
            }
        }
        if(j > posts_length && p) {
            if(i<post_length){
                post[i].style ="display:none"
            }
        }
    }
    console.log(i,j,k)
    const pre = document.querySelector(".preview")
    const next = document.querySelector(".next")
    
    if(k>8){
        next.style = "display:inline"
    }
    
    pre.addEventListener("click", previous)
    next.addEventListener("click", nextpage)
    
    function previous(){
        k--
        j = l - 1
        if(k%8==0){
            k = k - 8 + 1
        } else {
            k = k - (k%8) + 1
        }

        for(var i  = post_length - 1; i >= 0 ; i--){
            post[i].style =""
            for(; j > 0  ; j--){
                if(posts[j].tag.name==tag){
                    k--
                    post_img[i].setAttribute("src",posts[j].img)
                    post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                    post_number[i].innerHTML = (k) + "| "
                    post_title[i].setAttribute("href",posts[j].link)
                    post_date[i].innerHTML = posts[j].date
                    post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                    j--
                    break
                }
            }
        }
        j++
        l = j
        if(j==1){
            pre.style="display:none"
            next.style = "display:inline"
        }  
        console.log("before prev: "+ l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        }
        console.log("after prev: "+l +" " +j+ " "+k)
    }
    function nextpage(){
        l = j
        k--
        // console.log("before next: "+l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(j > posts_length ) {
                post[i].style ="display:none"
            }
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        k++
        console.log("after next: "+l +" " +j+ " "+k)
        // j--
    }
}

if(window.location.href==travel|| window.location.href ==travel+"l#article"){
    const tag = "travel"
    j = 1
    k = 0
    let p = true
    for(var i = 0; i<=post_length ; i++){
        if(i==post_length){
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        break
                    }
                } 
            }
        }
        else{
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        if(i == post_length-1){
                            p = false
                        }
                        break
                    }
                } 
            }
        }
        if(j > posts_length && p) {
            if(i<post_length){
                post[i].style ="display:none"
            }
        }
    }
    console.log(i,j,k)
    const pre = document.querySelector(".preview")
    const next = document.querySelector(".next")
    
    if(k>8){
        next.style = "display:inline"
    }
    
    pre.addEventListener("click", previous)
    next.addEventListener("click", nextpage)
    
    function previous(){
        k--
        j = l - 1
        if(k%8==0){
            k = k - 8 + 1
        } else {
            k = k - (k%8) + 1
        }

        for(var i  = post_length - 1; i >= 0 ; i--){
            post[i].style =""
            for(; j > 0  ; j--){
                if(posts[j].tag.name==tag){
                    k--
                    post_img[i].setAttribute("src",posts[j].img)
                    post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                    post_number[i].innerHTML = (k) + "| "
                    post_title[i].setAttribute("href",posts[j].link)
                    post_date[i].innerHTML = posts[j].date
                    post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                    j--
                    break
                }
            }
        }
        j++
        l = j
        if(j==1){
            pre.style="display:none"
            next.style = "display:inline"
        }  
        console.log("before prev: "+ l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        }
        console.log("after prev: "+l +" " +j+ " "+k)
    }
    function nextpage(){
        l = j
        k--
        // console.log("before next: "+l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(j > posts_length ) {
                post[i].style ="display:none"
            }
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        k++
        console.log("after next: "+l +" " +j+ " "+k)
        // j--
    }
}

if(window.location.href==tech|| window.location.href ==travel+"l#article"){
    const tag = "technology"
    j = 1
    k = 0
    let p = true
    for(var i = 0; i<=post_length ; i++){
        if(i==post_length){
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        break
                    }
                } 
            }
        }
        else{
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        if(i == post_length-1){
                            p = false
                        }
                        break
                    }
                } 
            }
        }
        if(j > posts_length && p) {
            if(i<post_length){
                post[i].style ="display:none"
            }
        }
    }
    console.log(i,j,k)
    const pre = document.querySelector(".preview")
    const next = document.querySelector(".next")
    
    if(k>8){
        next.style = "display:inline"
    }
    
    pre.addEventListener("click", previous)
    next.addEventListener("click", nextpage)
    
    function previous(){
        k--
        j = l - 1
        if(k%8==0){
            k = k - 8 + 1
        } else {
            k = k - (k%8) + 1
        }

        for(var i  = post_length - 1; i >= 0 ; i--){
            post[i].style =""
            for(; j > 0  ; j--){
                if(posts[j].tag.name==tag){
                    k--
                    post_img[i].setAttribute("src",posts[j].img)
                    post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                    post_number[i].innerHTML = (k) + "| "
                    post_title[i].setAttribute("href",posts[j].link)
                    post_date[i].innerHTML = posts[j].date
                    post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                    j--
                    break
                }
            }
        }
        j++
        l = j
        if(j==1){
            pre.style="display:none"
            next.style = "display:inline"
        }  
        console.log("before prev: "+ l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        }
        console.log("after prev: "+l +" " +j+ " "+k)
    }
    function nextpage(){
        l = j
        k--
        // console.log("before next: "+l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(j > posts_length ) {
                post[i].style ="display:none"
            }
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        k++
        console.log("after next: "+l +" " +j+ " "+k)
        // j--
    }
}

if(window.location.href==lifestyle|| window.location.href ==travel+"l#article"){
    const tag = "lifestyle"
    j = 1
    k = 0
    let p = true
    for(var i = 0; i<=post_length ; i++){
        if(i==post_length){
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        break
                    }
                } 
            }
        }
        else{
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        if(i == post_length-1){
                            p = false
                        }
                        break
                    }
                } 
            }
        }
        if(j > posts_length && p) {
            if(i<post_length){
                post[i].style ="display:none"
            }
        }
    }
    console.log(i,j,k)
    const pre = document.querySelector(".preview")
    const next = document.querySelector(".next")
    
    if(k>8){
        next.style = "display:inline"
    }
    
    pre.addEventListener("click", previous)
    next.addEventListener("click", nextpage)
    
    function previous(){
        k--
        j = l - 1
        if(k%8==0){
            k = k - 8 + 1
        } else {
            k = k - (k%8) + 1
        }

        for(var i  = post_length - 1; i >= 0 ; i--){
            post[i].style =""
            for(; j > 0  ; j--){
                if(posts[j].tag.name==tag){
                    k--
                    post_img[i].setAttribute("src",posts[j].img)
                    post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                    post_number[i].innerHTML = (k) + "| "
                    post_title[i].setAttribute("href",posts[j].link)
                    post_date[i].innerHTML = posts[j].date
                    post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                    j--
                    break
                }
            }
        }
        j++
        l = j
        if(j==1){
            pre.style="display:none"
            next.style = "display:inline"
        }  
        console.log("before prev: "+ l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        }
        console.log("after prev: "+l +" " +j+ " "+k)
    }
    function nextpage(){
        l = j
        k--
        // console.log("before next: "+l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(j > posts_length ) {
                post[i].style ="display:none"
            }
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        k++
        console.log("after next: "+l +" " +j+ " "+k)
        // j--
    }
}

if(window.location.href==design|| window.location.href ==travel+"l#article"){
    const tag = "design"
    j = 1
    k = 0
    let p = true
    for(var i = 0; i<=post_length ; i++){
        if(i==post_length){
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        break
                    }
                } 
            }
        }
        else{
            for(; j <= posts_length ; j++){
                if(posts_length>=i+1){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        if(i == post_length-1){
                            p = false
                        }
                        break
                    }
                } 
            }
        }
        if(j > posts_length && p) {
            if(i<post_length){
                post[i].style ="display:none"
            }
        }
    }
    console.log(i,j,k)
    const pre = document.querySelector(".preview")
    const next = document.querySelector(".next")
    
    if(k>8){
        next.style = "display:inline"
    }
    
    pre.addEventListener("click", previous)
    next.addEventListener("click", nextpage)
    
    function previous(){
        k--
        j = l - 1
        if(k%8==0){
            k = k - 8 + 1
        } else {
            k = k - (k%8) + 1
        }

        for(var i  = post_length - 1; i >= 0 ; i--){
            post[i].style =""
            for(; j > 0  ; j--){
                if(posts[j].tag.name==tag){
                    k--
                    post_img[i].setAttribute("src",posts[j].img)
                    post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                    post_number[i].innerHTML = (k) + "| "
                    post_title[i].setAttribute("href",posts[j].link)
                    post_date[i].innerHTML = posts[j].date
                    post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                    j--
                    break
                }
            }
        }
        j++
        l = j
        if(j==1){
            pre.style="display:none"
            next.style = "display:inline"
        }  
        console.log("before prev: "+ l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        }
        console.log("after prev: "+l +" " +j+ " "+k)
    }
    function nextpage(){
        l = j
        k--
        // console.log("before next: "+l +" " +j+ " "+k)
        for(var i = 0; i<post_length ; i++){
            if(j > posts_length ) {
                post[i].style ="display:none"
            }
            if(posts_length >=i+1){
                for(; j <= posts_length ; j++){
                    if(posts[j].tag.name==tag){
                        k++
                        post_img[i].setAttribute("src",posts[j].img)
                        post_title[i].innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
                        post_number[i].innerHTML = (k) + "| "
                        post_title[i].setAttribute("href",posts[j].link)
                        post_date[i].innerHTML = posts[j].date
                        post_tags[i].innerHTML = "<a href=" + posts[j].tag.loc+">" + posts[j].tag.name + "</a>"
                        j++
                        break
                    }
                }
            }
        }
        if(j>posts_length){
            next.style = "display:none"
            pre.style = "display:inline"
        } else{
            next.style = "display:inline"
            pre.style = "display:inline"
        }
        k++
        console.log("after next: "+l +" " +j+ " "+k)
        // j--
    }
}
