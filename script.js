const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

const accessKey = "skX26GxK7c5bOeBbRVHqztZu9N2tjtblBQHB6D8ySok";
let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results=data.results;

    if(page==1){
        searchResult.innerHTML="";
    }

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMore.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchImages();

});

showMore.addEventListener("click", ()=>{
    page++; 
    searchImages();
})