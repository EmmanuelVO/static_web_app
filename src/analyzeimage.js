
function analyzeimage(url){
    fetch('https://compubot.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags,read,caption,denseCaptions,smartCrops,objects,people', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "12ccd13265da4f308abc0ada474ba367",
    },
    body: JSON.stringify({"url":url})
})
.then(response => response.json())
.then(data => console.log(data));
}

