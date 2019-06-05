function getToken() {
  const token = "336691c5252c1e07e07d8cd38ac2ca24f6fd83ad";
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(response => response.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  document.getElementById('results')
    .innerHTML = `<a href=${json.html_url}>link</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  let repo = 'kjgmez/js-ajax-fetch-lab';
  let title = document.getElementById('title').value;
  let text = document.getElementById('body').value;
  const postData = {
    title: title,
    body: text
  };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => getIssues(user))
  //use this function to create an issue based on the values input in index.html
}

function getIssues(username) {
  let repo = `${username}/js-ajax-fetch-lab`;
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => displayIssues(json))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function displayIssues(issuesArray) {
  let div = document.getElementById('issues');
    for (i = 0; i <issuesArray.length; i++) {
      $(div).append("<p>" + issuesArray[i].title + "</p>")
    }
}

