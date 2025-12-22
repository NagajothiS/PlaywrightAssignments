
const browserVersion = 'Chrome'
console.log('Browser Version:', browserVersion)
function getBrowserVersion()
{
    if(browserVersion == 'Chrome')
    {    
           // console.log('Inside Function Browser Version:', browserVersion)
            var browserVersion = 'edge'
            console.log('Inside if block Browser Version:', browserVersion)

            }
            console.log('outside if block Browser Version:', browserVersion)

}
//getBrowserVersion(Firefox)
getBrowserVersion()
//console.log('Outside Function Browser Version:', browserVersion)

