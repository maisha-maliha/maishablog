// code = 10 java=11 html = 12 css = 13 js = 14
// tech = 20 web =21 desktop = 22 app=23
// lifestyle = 30 
// travel = 40 bd = 41
// {
//     title: "Beginners guide to learning CSS",
//     link: "../posts/Beginners-guide-to-learning-css.html",
//     date:"07/10/2020",
//     author: "Maisha Maliha",
//     tag:{
//         name:"code",
//         loc: "../code.html"
//     },
//     img:"../images/css.png"
// },

var posts = [
    {
        title: "Beginners guide to learning CSS",
        link: "https://www.maishamaliha.com/posts/Beginners-guide-to-learning-css.html",
        date:"07/10/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "code.html"
        },
        img:"https://www.maishamaliha.com/images/css.png"
    },
    {
        title: "3 ways to build a website",
        link: "https://www.maishamaliha.com/posts/3-ways-to-build-a-website.html",
        date:"05/10/2020",
        author: "Maisha Maliha",
        tag:{
            name:"Technology",
            loc: "tech.html"
        },
        img:"https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "My first year on studying Computer Science and Engineering",
        link: "https://www.maishamaliha.com/posts/my-first-year-on-studying-computer-science-and-engineering.html",
        date:"01/10/2020",
        author: "Maisha Maliha",
        tag:{
            name:"lifestyle",
            loc: "lifestyle.html"
        },
        img:"images/pic2.jpg"
    }

]



// var posts = [
//     {
//         title: "p3",
//         link: "../posts/Beginners-guide-to-learning-css.html",
//         date:"07/10/2020",
//         author: "Maisha Maliha",
//         tag:{
//             name:"code",
//             loc: "../code.html"
//         },
//         img:"../images/css.png"
//     },
//     {
//         title: "p2",
//         link: "../posts/Beginners-guide-to-learning-css.html",
//         date:"07/10/2020",
//         author: "Maisha Maliha",
//         tag:{
//             name:"code",
//             loc: "../code.html"
//         },
//         img:"../images/css.png"
//     },
//     {
//         title: "p1",
//         link: "../posts/Beginners-guide-to-learning-css.html",
//         date:"07/10/2020",
//         author: "Maisha Maliha",
//         tag:{
//             name:"code",
//             loc: "../code.html"
//         },
//         img:"../images/css.png"
//     },

// ]


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


if(window.location.href==home || window.location.href ==home+"#article"){
    for(var i = 0; i<post_length ; i++){
        j = i
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

if(window.location.href==travel|| window.location.href ==travel+"#article"){
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

if(window.location.href==tech|| window.location.href ==tech+"#article"){
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

if(window.location.href==lifestyle|| window.location.href ==lifestyle+"#article"){
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

if(window.location.href==design|| window.location.href ==design+"#article"){
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


const post_link = document.querySelector(".post_links ul")

for(let i = 0,j = posts_length; i < 5 , j > 0; i++,j--){
    var z = document.createElement('li') // is a node
    z.innerHTML = "<a href=" + posts[j].link + ">" + posts[j].title + "</a>"
    post_link.appendChild(z)
}
const fea_link = document.querySelector(".featured-post ul")
fea_link.innerHTML = "<li> <a href=" + posts[1].link + ">" + posts[1].title + "</a></li>"

// "<li> <a href=" + posts[j].link + ">" + posts[j].title + "</a></li>"