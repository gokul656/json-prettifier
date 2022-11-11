window.onload = async () => {
  console.log("FOREGROUND");
  const data = document.getElementsByTagName("pre");
  if (data.length > 0) {
    const bodyData = JSON.parse(data[0].innerHTML);
    const parsedData = JSON.stringify(bodyData, null, 4);
    document.body.innerHTML = `<pre>${parsedData}</pre>`;
  }
};
