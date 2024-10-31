function Youtube() {
    const userConfirmed = confirm("Redirecting to YouTube...");
    if (userConfirmed) {
        window.location.href = "https://www.youtube.com";
    } else {
        alert("You pressed Cancel!");
    }
}
export default Youtube;
