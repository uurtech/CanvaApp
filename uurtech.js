function get_elements_by_inner(word) {
    res = []
    elems = [...document.getElementsByTagName('span')];
    elems.forEach((elem) => {
        if (elem.outerHTML.includes(word)) {
            res.push(elem)
        }
    })
    return (res)
}


(function () {
    console.log('uurtech.js executed');
    let title = get_elements_by_inner("#1#")[0]
    // title.textContent = 
    let answerA = get_elements_by_inner("#2#")[0]
    let correctAnswer = get_elements_by_inner("#3#")[0]
    let answerB = get_elements_by_inner("#4#")[0]

})();


