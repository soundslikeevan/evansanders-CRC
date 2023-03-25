function updateCount() {
  // API endpoint, returns website visitor count
  fetch('https://jvhcrf2lx5.execute-api.us-east-1.amazonaws.com/dev')
      .then(response => response.text())
      .then((body) => {
          // "counter" is used to show the visitor count in the HTML 
          document.getElementById("counter").innerHTML = body
      })
      .catch(function (error) {
          console.log(error);
      });
}  