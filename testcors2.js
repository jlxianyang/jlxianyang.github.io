<html><script>fetch('https://my.58.com/persondata',{mode: 'no-cors',credentials:'include'})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });</script></html>
