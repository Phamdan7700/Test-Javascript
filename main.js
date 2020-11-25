var minutes = 1;
var seconds = 00;
var t;
var numOfCorrect = 0;
var numOfIncorrect = 0;
var numOfNotCheck = 10;
var questionsCollection = [
    {
        question: 'Đội bóng đã từng đoạt nhiều chức vô địch Copa America nhất?',
        answer: [
            'Uruguay',
            'Brazil',
            'Achentina',
            'Parguay'
        ],
        correct: 'Uruguay'
    },
    {
        question: ' Phi hành gia Phạm Tuân đã mang loại thực vật nào để nghiên cứu trên con tàu vũ trụ Phương Đông?',
        answer: [
            'Bèo tấm',
            'Bèo tổ ong',
            'Bèo hoa dâu',
            'Bèo cái'
        ],
        correct: 'Bèo hoa dâu'
    },
    {
        question: 'Sa mạc nào được công nhận là một trong 7 kỳ quan thiên nhiên của châu Phi?',
        answer: [
            'Sa mạc Sahara',
            'Sa mạc Namib',
            'Sa mạc Kalahari',
            'Sa mạc Gobi'
        ],
        correct: 'Sa mạc Sahara'
    },
    {
        question: 'Tác phẩm "Bản án chế độ thực dân" của Hồ Chí Minh xuất bản lần đầu tiên ở đâu?',
        answer: [
            'Việt Nam',
            'Trung Quốc ',
            'Pháp',
            'Anh',
        ],
        correct: 'Pháp'
    },
    {
        question: 'Vị vua nào đã đặt quốc hiệu nước ta là Việt Nam như hiện nay? ',
        answer: [
            'Vua Gia Long',
            'Vua Tự Đức',
            'Vua Minh Mạng',
            'Vua Nguyễn Huệ'
        ],
        correct: 'Vua Gia Long'
    },
    {
        question: 'Cầu thủ nào đã đạt danh hiệu quả bóng vàng thế giới 2006? ',
        answer: [
            'Cafu',
            'Roberto Carlos',
            'Ronaldinho',
            'Fabio Canavaro'
        ],
        correct: 'Fabio Canavaro'
    },
    {
        question: 'Ai là người đưa ra ba định luật di truyền? ',
        answer: [
            'Albert Einstein ',
            'Newton ',
            'Men – Đen ',
            'Galilei '
        ],
        correct: 'Men – Đen '
    },
    {
        question: 'Theo đơn vi đo thông tin trong máy tính thì 1 byte bằng bao nhiêu bit ? ',
        answer: [
            '4',
            '6',
            '8',
            '10'
        ],
        correct: '8'
    },
    {
        question: 'Phần mềm nào sau đây là phần mềm diệt virus ?',
        answer: [
            'BKAV',
            'Kaspersky',
            'Avast',
            'Tất cả'
        ],
        correct: 'Tất cả'
    },
    {
        question: 'Thiết bị nào sau đây dùng để kết nối mạng?',
        answer: [
            'RAM',
            'ROM',
            'CPU',
            'Router'
        ],
        correct: 'Router'
    },
    {
        question: 'Con vật nào sau đây có khả năng thay đổi màu sắc cơ thể mình cho giống với môi trường xung quanh?',
        answer: [
            'Kiến Lửa',
            'Tắc Kè Hoa',
            'Chim Cút',
            'Cá Vàng'
        ],
        correct: 'Tắc Kè Hoa'
    },
    {
        question: 'Trái nghĩa với "nhút nhát" là gì?',
        answer: [
            'E Dè',
            'Dịu Dàng',
            'Dè Chừng',
            'Mạnh Bạo'
        ],
        correct: 'Mạnh Bạo'
    },
    {
        question: 'Ngôi vị đỗ đầu trong các kỳ thi thời phong kiến là gì?',
        answer: [
            'Thủ Khoa',
            'Bảng Nhân',
            'Trạng Nguyên',
            'Thám Hoa'
        ],
        correct: 'Trạng Nguyên'
    },
    {
        question: 'AFC Asian Cup 2011 được tổ chức tại quốc gia nào?',
        answer: [
            'Qatar',
            'Hàn Quốc',
            'Nhật Bản',
            'Iraq'
        ],
        correct: 'Qatar'
    },
    {
        question: 'Từ nào còn thiếu trong câu sau: "Thằng Bờm có cái quạt mo, phú ông xin đổi ..." gì?',
        answer: [
            'Ao sâu cá mè',
            'Ba bò chín trâu',
            'Ba bè gỗ lim',
            'Đôi chim đồi mồi'
        ],
        correct: 'Ba bò chín trâu'
    },
    {
        question: 'Thành phố nào sau đây nằm ở Tây Nguyên?',
        answer: [
            'Pleiku',
            'Biên Hoà',
            'Long Xuyên',
            'Cao Lãnh'
        ],
        correct: 'Pleiku'
    },
    {
        question: 'Loài chim nào sau đây sống chủ yếu ở New Zealand?',
        answer: [
            'Chim Hải Âu',
            'Chim Hoạ Mi',
            'Sếu Đầu Đỏ',
            'Chim Kiwi'
        ],
        correct: 'Chim Kiwi'
    },
    {
        question: 'Ai là tác giả cuốn truyện "Đảo mộng mơ"?',
        answer: [
            'Tô Hoài',
            'Võ Quảng',
            'Đoàn Giỏi',
            'Nguyễn Nhật Ánh'
        ],
        correct: 'Nguyễn Nhật Ánh'
    },
    {
        question: 'Từ nào còn thiếu trong câu ca Huế sau: "Hồ ... nhiều sen Bách Hợp/ Đất Hương Cần ngọt quýt thơm cam"?',
        answer: [
            'Nhân Hậu',
            'Học Hải',
            'Mộ Đức',
            'Tịnh Tâm'
        ],
        correct: 'Tịnh Tâm'
    },
    {
        question: 'Đâu là tên một bãi biển ở Quảng Bình?',
        answer: [
            'Đá Lăn',
            'Đá Nhảy',
            'Đá Chạy',
            'Đá Bò'
        ],
        correct: 'Đá Nhảy'
    },
    {
        question: 'Đâu là tên một loại bánh Huế?',
        answer: [
            'Khoái',
            'Thích',
            'Vui',
            'Sướng'
        ],
        correct: 'Khoái'
    },
    {
        question: 'Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?',
        answer: [
            'Truyện trinh thám',
            'Tiểu thuyết kiếm hiệp',
            'Sử thi',
            'Thơ lãng mạn'
        ],
        correct: 'Tiểu thuyết kiếm hiệp'
    },
    {
        question: 'Bộ phim "Chị Dậu" được chuyển thể từ tác phẩm nào?',
        answer: [
            'Người mẹ cầm súng	• ',
            'Vợ chồng A Phủ',
            'Tắt đèn',
            'Tuổi thơ dữ dội'
        ],
        correct: 'Tắt đèn'
    },
    {
        question: 'Ai là Hoa hậu Việt Nam 2020?',
        answer: [
            'Phạm Ngọc Phương Anh',
            'Trần Tiểu Vy',
            'Đỗ Thị Hà',
            'Nguyễn Lê Ngọc Thảo'
        ],
        correct: 'Đỗ Thị Hà'
    },
    {
        question: 'Đâu là tên một loại bệnh trên cây lúa?',
        answer: [
            'Đạo Tráng',
            'Đạo Nhạc',
            'Đạo Hạnh',
            'Đạo Ôn'
        ],
        correct: 'Đạo Ôn'
    },
    {
        question: 'Đâu là tên một ngôi chùa nổi tiếng ở Thái Bình?',
        answer: [
            'Chùa Keo',
            'Chùa Dâu',
            'Chùa Một Cột',
            'Chùa Hương'
        ],
        correct: 'Chùa Keo'
    },
    {
        question: 'Sóng âm không thể truyền được trong môi trường nào?',
        answer: [
            'Gỗ',
            'Không Khí',
            'Sắt',
            'Chân Không'
        ],
        correct: 'Chân Không'
    },
    {
        question: 'Ngà voi là do bộ phận nào biến đổi thành',
        answer: [
            'Mũi',
            'Răng Cửa',
            'Cằm',
            'Xương Trán'
        ],
        correct: 'Răng Cửa'
    },
    {
        question: 'Trong “Bình Ngô đại cáo”, Nguyễn Trãi viết: “Dơ bẩn thay, nước ... khôn rửa sạch mùi”. Điền từ còn thiếu vào chỗ trống?',
        answer: [
            'Đông Hải',
            'Trường Giang',
            'Hoàng Hà',
            'Cửu Long'
        ],
        correct: 'Đông Hải'
    },
    {
        question: 'Sông Mê Kông chảy qua mấy quốc gia?',
        answer: [
            '5',
            '6',
            '7',
            '8'
        ],
        correct: '6'
    },



];
var questionArr = [];
var question_index;
var numOfQuestion = 10;




class Test {
    constructor() {
        this.btnWelcome = document.getElementById('btn-welcome');
        this.timeCountdown = document.getElementById('time-coutdown');
        this.timeCountdown.innerHTML = this.formatNumber(minutes) + ' Phút :' + this.formatNumber(seconds) + ' Giây ';
        this.startTestBtn = document.getElementById('start-btn-question');
        this.resultBtn = document.getElementById('result-btn-click');
        this.popupBox = document.getElementById('popup');
        this.btnWelcome.addEventListener('click', this.showQuestionScreen);
        this.resetBtn = document.getElementById('reset-btn-question');

        this.randomQuestion();
        this.resetBtn.addEventListener('click', () => {
            this.refresh();
        });
        this.startTestBtn.addEventListener('click', () => {
            this.time_countdown();
            this.showQuestion();
            this.startTestBtn.disabled = true;
            this.resetBtn.disabled = false;
            this.resultBtn.style.display = 'inline-block';
        })

        this.resultBtn.addEventListener('click', () => {
            this.confirmBox("Bạn muốn hoàn thành bài kiểm tra ?", () => {
                clearTimeout(t);
                this.showResult(this.isCorrectAnswer);
                this.hightlightCorrectAnswer();
            });
        })
    }

    randomQuestion() {

        for (let index = 0; index < numOfQuestion; index++) {
            question_index = Math.floor(Math.random() * questionsCollection.length);
            questionArr.push(questionsCollection[question_index]);

        }
    }

    showQuestionScreen() {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
        document.getElementById('reset-btn-question').disabled = true;
    }

    formatNumber(number) {
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
            this.alertBox("Hết thời gian - Xem điểm nào !!!", () => { this.showResult() })
            minutes = seconds = 0;
        }
        this.timeCountdown.innerHTML = this.formatNumber(minutes) + ' Phút :' + this.formatNumber(seconds) + ' Giây ';
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
        questionArr.forEach((question, index) => {
            document.getElementById('question-contanier').innerHTML +=
                `
            <div class="sub-question">
                <div class="question-title" >
                    <span class="question-number"><b>Câu hỏi ${index + 1}</b>: </span>
                    <span class="question-title-content"> ${question.question} </span>
                </div>

                <div class="answer"  >
                    <span > 
                        <input type="radio" name="answer_${index}" value="${question.answer[0]}">
                        <span class="" > ${question.answer[0]} </span>
                    </span>
                    <span > 
                        <input type="radio" name="answer_${index}" value="${question.answer[1]}" >
                        <span class=""> ${question.answer[1]} </span>
                    </span>
                    <span > 
                        <input type="radio" name="answer_${index}" value="${question.answer[2]}" >
                        <span class=""> ${question.answer[2]} </span>
                    </span>
                    <span > 
                        <input type="radio" name="answer_${index}" value="${question.answer[3]}" >
                        <span class=""> ${question.answer[3]} </span>
                    </span>
                </div>
             </div>
            `


        });
    }

    showResult(callbackCheck) {
        let myAnswersElemt = document.querySelectorAll('input:checked');
        myAnswersElemt.forEach((answerElemt) => {
            let hightlight = answerElemt.nextElementSibling;
            console.log(hightlight);
            let answer = answerElemt.value;
            // console.log(answer);
            let indexQuestion = answerElemt.name.slice(-1);
            // console.log("q " + indexQuestion);
            let check = callbackCheck(questionArr[indexQuestion], answer);
            if (check) {
                numOfCorrect++;
                hightlight.className = 'correct';

            } else {
                numOfIncorrect++;
                hightlight.className = 'incorrect';
            }
            numOfNotCheck = numOfQuestion - numOfCorrect - numOfIncorrect;
        });
        this.resultBtn.disabled = true;
        window.scroll(0, 0);
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerHTML =
            "Số câu đúng: " + numOfCorrect +
            "<br>Số câu Sai: " + numOfIncorrect +
            "<br>Số câu chưa làm: " + numOfNotCheck;
    }

    isCorrectAnswer(question, myAnswer) {
        // let myAnswerElement = document.querySelector(`input[value="${myAnswer}"] + span`);
        if (myAnswer == question.correct) {
            // myAnswerElement.className="correct";
            return true;
        } else {
            // myAnswerElement.className="incorrect";
            return false;
        }
    }

    hightlightCorrectAnswer() {
        let answersArr = document.querySelectorAll('.answer');
        answersArr.forEach((answerElemt, indexQuestion) => {
            let correctAnswer = questionArr[indexQuestion].correct;
            let hightlightAnswer = answerElemt.querySelector(`input[value="${correctAnswer}"] + span`);
            hightlightAnswer.classList.add('correct');
        })
    }

    confirmBox(mess, callback) {
        this.popupBox.style.display = 'flex';
        this.popupBox.querySelector('#confirm-text').innerHTML = mess;
        this.popupBox.querySelector('#confirm-btn-Ok').addEventListener("click", () => {
            this.popupBox.style.display = 'none';
            callback();
        })
        this.popupBox.querySelector('#confirm-btn-cancel').onclick = () => {
            this.popupBox.style.display = 'none';
        };
    }

    alertBox(mess, callback) {
        this.popupBox.style.display = 'flex';
        this.popupBox.querySelector('#confirm-text').innerHTML = mess;
        this.popupBox.querySelector('#confirm-btn-Ok').innerHTML = "Kết Quả"
        this.popupBox.querySelector('#confirm-btn-Ok').addEventListener("click", () => {
            this.popupBox.style.display = 'none';
            callback();
        })
        this.popupBox.querySelector('#confirm-btn-cancel').style.display = 'none';
    }
}
var test = new Test();
