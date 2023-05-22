function doPost(e) {
  let contents = e.postData.contents.replace(/[\n\r\t]/g, " ");
  let data = JSON.parse(contents);
  console.log(data);

  let appname = data.appname;
  let title = data.title;
  let message = data.message;
  let time = data.time;

  let reply = "";
  reply += `${appname}\n`;
  reply += "\n";
  reply += `${title}\n`;
  reply += `${message}`;

  postToSlack(reply);
}

function postToSlack(message) {
  let url = 'https://hooks.slack.com/services/XXXX/xxxx';
  let options = {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    payload: JSON.stringify({
      'text': message,
      'username': 'Android', 
      'icon_url': 'iconurl'
      })
  };
  
  UrlFetchApp.fetch(url, options);
}
