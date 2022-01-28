class FillBlank extends Question {
    constructor(type, id, content, answer) {
        super(type, id, content, answer);
    }
    render(index) {
        return `
          <div>
            <p class="lead font-italic" style="font-size: 30px;">
              Câu ${index}: ${this.content}
            </p>
           <input id="answer-${this.id}" type="text" class="form-control w-50" />
          </div>
          `;
    }
}