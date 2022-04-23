var req = new XMLHttpRequest()

req.open('GET', chrome.extension.getURL('icons/filters.svg'))
req.addEventListener('load', function(e){
    var filter = req.responseXML.documentElement
    filter.style.display = 'none'
    filter.width = 0
    filter.height = 0
    document.body.appendChild(filter)
})

req.send()