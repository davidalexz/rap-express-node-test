/* eslint-disable no-console */
// eslint-disable-next-line no-use-before-define

document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector('input').value;
  try {
    const response = await fetch(`https://test-rap-api-v1.herokuapp.com/api/${rapperName}`);
    const data = await response.json;

    console.log(data);
    document.querySelector('h2').innerText = data.birthName;
  } catch (error) {
    console.error(error);
  }
}
