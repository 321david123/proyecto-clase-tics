let processSroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody ['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody ['scrollTop']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

        // console.log(scrollPercent);

        document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processSroll);