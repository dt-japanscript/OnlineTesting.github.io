class MultipleChoice extends Question {
    constructor(type, id, content, answer) {
        super(type, id, content, answer);
    }
    render() {
        let answerHTML = '';
        for (let item of this.answer) {
            answerHTML += `<div>
                <input value="${item.id}" class="answer-${this.id}" type="radio" name="answer-${this.id}"  />
                <label class="lead">${item.content}</label>
            </div>`;
        }

        return `
        <div>
            <p class="lead font-italic" style="font-size: 30px;">
            Câu ${index}: ${this.content}
            </p>
            ${answerHTML}
        </div>
        `
    }
}