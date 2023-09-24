// api url
const api_url ="https://employeedetails.free.beeceptor.com/my/api/path";
const submitBtn = document.querySelector("#btnSubmit");

// // Defining async function
// async function getapi(url) {
   
//     // Storing response
//     const response = await fetch(url);
   
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }

downloadBtn.addEventListener("click", async () => {
    try {
      const response = await fetch(api_url,{
        method: "POST",
      });
      console.log("Download complete", response);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  });
