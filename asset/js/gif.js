window.onload = function() {
    sheargif();
    sheargifdos();
};

//gif 1
async function sheargif() {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=kowW5L88hWBZovRDzbDJpjHZmsjDwGnj&q=geometry`)
    console.log(response)
    let gifs = await response.json()
    console.log(gifs)
    useappiData(gifs)
}


function useappiData(gifs) {
    var gif = document.querySelector("#wrapper").innerHTML = `<img style="position: absolute;width: 130px;margin-left: 92px;border-radius: 100px;margin-top: 33px;margin-left: 87px; cursor: pointer;" src="${gifs.data[3].images.original.url}">`
    console.log(gif)
}

//gif 2


async function sheargifdos() {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=kowW5L88hWBZovRDzbDJpjHZmsjDwGnj&q=preorder`)
    console.log(response)
    let gifs = await response.json()
    console.log(gifs)
    useappiDatas(gifs)
}


function useappiDatas(gifs2) {
    var gif2 = document.querySelector("#gif2").innerHTML = `<img style="position: absolute;" src="${gifs2.data[8].images.original.url}">`
    console.log(gif2)
}