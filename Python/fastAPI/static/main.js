// set up event listener for submit click
console.log("start JS!");
let form = document.getElementById("fileForm");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e){
    e.preventDefault();//prevent normal POST request from submit button

    console.log("submit button pushed!");

    // extract the info from the form
    const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    const values = Array.from(checkedRadios, radio => radio.value);

    let filter = values[0];
    // console.log(filter);

    let fileInput = document.getElementById("file");
    var filename = fileInput.files[0].name;
    // console.log(filename);

    var input = document.querySelector('input[type="file"]')

    // This attaches fields to the body. You can send data like filter_param in the URL as a query or 
    // in the body of the request. Both are fine. 
    var data = new FormData()
    data.append('file', input.files[0])
    data.append('filter_param', filter)

    fetch(`/uploadfile/?filename=${filename}&filter_param=${filter}`, {
        method: 'POST',
        body: data
    })
}