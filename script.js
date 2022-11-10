var cors_anywhere = "https://cors-anywhere.herokuapp.com/";
var target = "https://new-ella-demo.myshopify.com/products/hentum-tosmois-de-laptop-hamo-dincidunts";
var url = cors_anywhere+target;

fetch(url)
    .then(response => response.text())
    .then(result => scraping(result, "text/html"))
    .catch(error => console.error("Deu pau: " + error));

function scraping(string_html, contet_type){
    let parser = new DOMParser();
    let doc = parser.parseFromString(string_html,contet_type);
    const valor = doc.querySelector(".price__last .price-item--regular .money")
    console.log(valor)
}
