let questionList = [];

const domID = (id) => {
    return document.getElementById(id);
}

const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const renderQuestion = () => {
    let htmlContent = '';
    for (let i in questionList) {
        htmlContent += questionList[i].render(+i + 1);
    }

    domID("questionsContainer").innerHTML = htmlContent;
};

const mapData = (data = []) => {
    questionList = data.map((item) => {
        const { questionType, id, content, answer } = item; // destructuring in ES6
        if (item.questionType === 1) {
            return new MultipleChoice(questionType, id, content, answer);
        } else {
            return new FillInBlank(questionType, id, content, answer);
        }
    });
}

fetchQuestion().then((res) => {
    // code khi question list da co
    mapData(res);
    renderQuestion();
});