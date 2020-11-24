var minutes = 2;
var seconds = 00;
var t;
var numOfCorrect = 0;
var numOfIncorrect = 0;
var numOfNotCheck = 10;
var question_arr = [
    {
        question: 'Đội bóng đã từng đoạt nhiều chức vô địch Copa America nhất?',
        answer: [
            'Uruguay',
            'Brazil',
            'Achentina',
            'Parguay'
        ],
        correct: 0
    },
    {
        question: ' Phi hành gia Phạm Tuân đã mang loại thực vật nào để nghiên cứu trên con tàu vũ trụ Phương Đông?',
        answer: [
            'Bèo tấm',
            'Bèo tổ ong',
            'Bèo hoa dâu',
            'Bèo cái'
        ],
        correct: 2
    },
    {
        question: 'Sa mạc nào được công nhận là một trong 7 kỳ quan thiên nhiên của châu Phi?',
        answer: [
            'Sa mạc Sahara',
            'Sa mạc Namib',
            'Sa mạc Kalahari',
            'Sa mạc Gobi'
        ],
        correct: 0
    },
    {
        question: 'Tác phẩm "Bản án chế độ thực dân" của Hồ Chí Minh xuất bản lần đầu tiên ở đâu?',
        answer: [
            'Việt Nam ',
            'Trung Quốc ',
            'Pháp ',
            'Anh '
        ],
        correct: 2
    },
    {
        question: 'Vị vua nào đã đặt quốc hiệu nước ta là Việt Nam như hiện nay? ',
        answer: [
            'Vua Gia Long',
            'Vua Tự Đức',
            'Vua Minh Mạng',
            'Vua Nguyễn Huệ'
        ],
        correct: 0
    },
    {
        question: 'Cầu thủ nào đã đạt danh hiệu quả bóng vàng thế giới 2006? ',
        answer: [
            'Cafu',
            'Roberto Carlos',
            'Ronaldinho',
            'Fabio Canavaro'
        ],
        correct: 3
    },
    {
        question: 'Ai là người đưa ra ba định luật di truyền? ',
        answer: [
            'Albert Einstein ',
            'Newton ',
            'Men – Đen ',
            'Galilei '
        ],
        correct: 2
    },
    {
        question: 'Theo đơn vi đo thông tin trong máy tính thì 1 byte bằng bao nhiêu bit ? ',
        answer: [
            '4',
            '6',
            '8',
            '10'
        ],
        correct: 2
    },
    {
        question: 'Phần mềm nào sau đây là phần mềm diệt virus ?',
        answer: [
            'BKAV',
            'Kaspersky',
            'Avast',
            'Tất cả'
        ],
        correct: 3
    },
    {
        question: 'Thiết bị nào sau đây dùng để kết nối mạng?',
        answer: [
            'RAM',
            'ROM',
            'CPU',
            'Router'
        ],
        correct: 3
    },

];
var question_arr_length = question_arr.length;



class test {
    constructor() {
        this.btnWelcome = document.getElementById('btn-welcome');
        this.timeCountdown = document.getElementById('time-coutdown');
        this.timeCountdown.innerHTML = this.twonum(minutes) + ' Phút :' + this.twonum(seconds) + ' Giây ';
        this.showQuestions = document.getElementById('start-btn-question');
        this.resultBtn = document.querySelector('.result');
        this.btnWelcome.addEventListener('click', this.showQuestionScreen);
        this.showQuestions.addEventListener('click', () => {
            this.showQuestionsForm();
        });
        this.resetBtn = document.getElementById('reset-btn-question');
        this.resetBtn.addEventListener('click', () => {
            this.refresh();
        });
        this.resultBtn.addEventListener('click', () => {
            let stopTest = confirm('Bạn muốn hoàn thành bài kiểm tra ?');
            this.showResult(stopTest);
        })
    }
    showQuestionScreen() {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
        document.getElementById('reset-btn-question').disabled = true;
    }
    showQuestionsForm() {
        this.time_countdown();
        this.disabled_Btn();
        this.showQuestion();
        this.resultBtn.style.display = 'block';

    }
    twonum(number) {
        return number < 10 ? '0' + number : number;
    }
    time_countdown() {
        t = setTimeout(() => {
            this.time_countdown();
        }, 1000);
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            clearTimeout(t);
            alert('Hết thời gian !!!');
            this.showResult(true);
            minutes = seconds = 0;
        }
        this.timeCountdown.innerHTML = minutes + ' Phút :' + seconds + ' Giây ';


    }
    disabled_Btn() {
        setTimeout(() => {
            document.getElementById('start-btn-question').disabled = true;
            document.getElementById('reset-btn-question').disabled = false;
        }, 1);
    }


    refresh() {
        let alert_reset = confirm("Bạn muốn làm lại từ đầu !!!");
        if (alert_reset) {
            window.location.reload();
        }
    }



    //Hien thi cau hoi
    showQuestion() {
        document.getElementById('question-contanier').style.display = 'block';
        question_arr.forEach((question, index) => {
            document.getElementById('question-contanier').innerHTML +=
                `
        <div class="sub-question">
                <div class="question-title" >
                    <span class="question-number"><b>Câu hỏi ${index + 1}</b>: </span>
                    <span class="question-title-content"> ${question.question} </span>
                </div>

                <div class="answer"  >
                    <span > 
                        <input type="radio" name="answer_${index}" id="answer_${index}-0">
                        <span id="q_${index}_anwser_0" > ${question.answer[0]} </span>
                    </span>
                    <span > 
                        <input type="radio" name="answer_${index}" id="answer_${index}-1" >
                        <span id="q_${index}_anwser_1"> ${question.answer[1]} </span>
                    </span>
                    <span > 
                        <input type="radio" name="answer_${index}" id="answer_${index}-2" >
                        <span id="q_${index}_anwser_2"> ${question.answer[2]} </span>
                    </span>
                    <span > 
                        <input type="radio" name="answer_${index}" id="answer_${index}-3" >
                        <span id="q_${index}_anwser_3"> ${question.answer[3]} </span>
                    </span>
                </div>
            </div>    
        `

        });
    }



    showResult(stopTest) {
        // let stopTest = confirm('Bạn muốn hoàn thành bài kiểm tra ?');
        if (stopTest) {
            // Dung thoi gian
            clearTimeout(t);
            this.showCorrectAnswer();
            // Lay dap an duoc chon => tra ve mot array
            let answers_Arr = document.querySelectorAll('input:checked');
            answers_Arr.forEach((answer) => {
                let answerName = answer.name;
                let indexQuestion = answerName[answerName.length - 1];
                let myAnswer = answer.id[answer.id.length - 1];
                let check = this.isCorrectAnswer(question_arr[indexQuestion], myAnswer, indexQuestion);
                if (check) {
                    numOfCorrect++;
                } else {
                    numOfIncorrect++;
                }
                numOfNotCheck = question_arr_length - numOfCorrect - numOfIncorrect;
            });
            document.getElementById('result-btn').disabled = true;
            window.scrollTo(0, 0);
            document.getElementById('result').style.display = 'block';
            document.getElementById('result').innerHTML =
                "Số câu đúng: " + numOfCorrect +
                "<br>Số câu Sai: " + numOfIncorrect +
                "<br>Số câu chưa làm: " + numOfNotCheck;
        }

    }
    isCorrectAnswer(question, myAnswer, indexQuestion) {
        let myAnswerElement = document.getElementById(`q_${indexQuestion}_anwser_${myAnswer}`);

        if (myAnswer == question.correct) {
            myAnswerElement.classList.add("correct");
            return true;
        } else {
            myAnswerElement.classList.add("incorrect");
            return false;
        }
    }
    showCorrectAnswer() {
        let answersArr = document.querySelectorAll('.answer');
        answersArr.forEach((answer, currentQuestion) => {
            let correctAnswer = question_arr[currentQuestion].correct;
            let checkAnswer = answer.querySelector(`#q_${currentQuestion}_anwser_${correctAnswer}`);
            checkAnswer.classList.add('correct');
        })
    }

}
var test1 = new test();
