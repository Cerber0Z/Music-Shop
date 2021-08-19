window.onload = function() {
    sheargif();
};


async function sheargif() {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=kowW5L88hWBZovRDzbDJpjHZmsjDwGnj&q=geometry`)
    console.log(response)
    let gifs = await response.json()
    console.log(gifs)
    useappiData(gifs)
}


function useappiData(gifs) {
    var gif = document.querySelector("#wrapper").innerHTML = `<img style="position: absolute;width: 130px;margin-left: 92px;border-radius: 100px;margin-top: 33px;margin-left: 87px;" src="${gifs.data[3].images.original.url}">`
    console.log(gif)
}