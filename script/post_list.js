// code = 10 java=11 html = 12 css = 13 js = 14
// tech = 20 web =21 desktop = 22 app=23
// lifestyle = 30 
// travel = 40 bd = 41



var posts = {
    1:{
        title: "My sunset photgraphy using my redmi note 8 in this quarantine",
        link: "Code.html",
        date:"1/2/2020",
        author: "Maisha Maliha",
        tag:{
            name:"code",
            loc: "code.html"
        },
        img:"images/me.jpg"
    }

}


const post = document.querySelectorAll(".post")
const post_img = document.querySelectorAll(".post_img img")
const postimg = document.querySelectorAll(".post_img")
const post_number = document.querySelectorAll(".post .number")
const post_title = document.querySelectorAll(".post_des h2 a")
const post_date = document.querySelectorAll(".post_des .date")
const post_tags = document.querySelectorAll(".post_des .tags")

const posts_length = Object.keys(posts).length
const post_length = post.length

let j


for(var i = 0; i<post_length ; i++){
    j = i+1
    if(posts_length>=i+1){
        post_img[i].setAttribute("src",posts[j].img)
        post_title[i].innerHTML = posts[j].title
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
            post_title[i].innerHTML = posts[j].title
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
            post_title[i].innerHTML = posts[j].title
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
