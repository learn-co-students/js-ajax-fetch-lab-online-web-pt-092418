const baseURL = 'https://api.github.com';
const repo = 'js-ajax-fetch-lab'

function getToken() {
  const token = '5aeb1213a3cfc963cdec131a0027cce9d2fdc0ca';

  return token;
}

function forkRepo() {
  const user = 'learn-co-curriculum';

  fetch(`${baseURL}/repos/${user}/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())

    .then(json => showResults(json.html_url));
}

function showResults(url) {
  document.getElementById('results').innerHTML = `<a href=${url}>
    repoLink</a>`;
}

function createIssue() {
  const user = 'VirginiaDooley'
  const inputTitle = document.getElementById('title').value;
  const inputBody = document.getElementById('body').value;

  const postData = {
    title: inputTitle,
    body: inputBody
  }

  fetch(`${baseURL}/repos/${user}/${repo}/issues`,{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })

    .then(res => res.json())
    .then(json => getIssues(user))
}

function getIssues(username) {
  const issuesDiv = document.getElementById('issues')

  fetch(`${baseURL}/repos/${username}/${repo}/issues`,{
    headers: {
      Authorization: `token ${getToken()}`
    }
  })

  .then(res => res.json())
  .then(json => displayIssues(json));
}

function displayIssues(issuesArray){
  const issuesDiv = document.getElementById('issues')
  for (i = 0; i < issuesArray.length; i++) {

  $(issuesDiv).append("<p>" + issuesArray[i].title + "</p>")
  }
}
