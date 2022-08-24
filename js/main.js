//We are writing ?_limit=20 after photos to get only 20 url

const centerDiv = document.getElementById('center_div');
fetch('https://jsonplaceholder.typicode.com/photos?_limit=20').then((apidata) => {
    return apidata.json();
}).then((jsonData) => {
    jsonData.map((val) => {
        key = val.id;
        let img = document.createElement('img');
        img.src = `https://picsum.photos/200/350?random=${val.id}`;
        centerDiv.appendChild(img);
        console.log(val.id);
    })
});