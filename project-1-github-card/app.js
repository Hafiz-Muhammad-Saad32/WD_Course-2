async function getGitHubUserInfo(userName) {
    const userInfo = await fetch(`https://api.github.com/users/${userName}`);

    if (userInfo.ok) {
        const data = await userInfo.json()
        console.log("userInfo", data)
        document.querySelector('.profile').style.display = 'flex';
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || data.login;
        document.getElementById('bio').textContent = data.bio || "No bio available.";
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('visit-profile').href = data.html_url;
    } else {
        alert("User Name Not Found");
    }

}
function handleClick() {
    const inputElement = document.getElementById('username');
    const userName = inputElement.value.trim();

    if (userName) {
        getGitHubUserInfo(userName);
    } else {
        alert("Please enter a username");
    }
}


