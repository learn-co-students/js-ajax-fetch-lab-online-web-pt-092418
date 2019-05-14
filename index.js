
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';
  return token;
}

function forkRepo() {
  const repo = "learn-co-curriculum/js-ajax-fetch-lab";
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
 JSON.stringify(json)
}

function createIssue() {
  const repo = "mcdonaldcarolyn/js-ajax-fetch-lab";
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    })
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

function getIssues() {
  const repo = "mcdonaldcarolyn/js-ajax-fetch-lab";
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
