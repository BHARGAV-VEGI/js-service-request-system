function submitRequest() {
    var name = document.getElementById("name").value;
    var issue = document.getElementById("issue").value;
    var status = document.getElementById("status").value;
    var result = document.getElementById("result");

    if (name === "" || issue === "" || status === "") {
        result.innerHTML = "Please fill all fields";
        return;
    }

    var requestData = {
        userName: name,
        issueDetails: issue,
        requestStatus: status
    };

    console.log(JSON.stringify(requestData));
    result.innerHTML = "Service request submitted successfully";
}
