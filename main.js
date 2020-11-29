var minutes = 0;
var seconds = 05;
var t;
var numOfCorrect = 0;
var numOfIncorrect = 0;
var numOfNotCheck = 10;
const questionsCollection = [
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
    {
        question: 'Con vật nào dưới đây không thể bơi?',
        answer: [
            'Cá',
            'Chim Cánh Cụt',
            'Vịt',
            'Voi'
        ],
        correct: 'Voi'
    },
    {
        question: 'Tổ hợp phím nào  trên bàn phím máy tính dùng để copy?',
        answer: [
            'Ctr + S',
            'Ctr + C',
            'Ctr + V',
            'Ctr + X'
        ],
        correct: 'Ctr + C'
    },



];
const questionArr = [];
var question_index;
var numOfQuestion = 10;


class Test {
    constructor() {
        this.result = "";
        this.welcomeText = document.getElementById('welcomeText');
        this.btnWelcome = document.getElementById('btn-welcome');
        this.timeCountdown = document.getElementById('time-coutdown');
        this.timeCountdown.innerHTML = this.formatNumber(minutes) + ' Phút :' + this.formatNumber(seconds) + ' Giây ';
        this.startTestBtn = document.getElementById('start-btn-question');
        this.resultBtn = document.getElementById('result-btn-click');
        this.popupBox = document.getElementById('popup');
        this.resetBtn = document.getElementById('reset-btn-question');
        // Bat dau vao giao dien 
        this.btnWelcome.onclick = this.showQuestionScreen;
        // Random cau hoi
        this.randomQuestion();
        this.resetBtn.onclick = () => {
            this.popupConfirm("Bạn muốn làm lại từ đầu !!!", this.refresh);

        };
        this.startTestBtn.onclick = () => {
            this.popupConfirm("Bắt đầu làm bài?", () => {
                this.start();
            });
        }
        // Hien thi ket qua
        this.resultBtn.onclick = () => {
            this.popupConfirm("Bạn muốn hoàn thành bài kiểm tra ?", () => {
                this.stop();
            });
        }

    }
    // Hien cau hoi vaf bat dau lam bai
    start() {
        this.showQuestion();
        this.time_countdown();
        this.startTestBtn.disabled = true;
        this.resetBtn.disabled = false;
        this.resultBtn.style.display = 'inline-block';
    }
    // Dung bai lam
    stop() {
        clearTimeout(t);
        this.hightlightCorrectAnswer();
        this.showResult(this.isCorrectAnswer);
        this.popupConfirm(this.result, () => {
        this.showResultBox();
        });
        this.popupBox.querySelector('.confirm-icon img').src = "img/notice.png"
        this.popupBox.querySelector('#confirm-btn-cancel').style.display = 'none';
        document.querySelectorAll("input").forEach((input) => {
            input.disabled = true;
        });
    }
    // Chon cau hoi ngau nhien
    randomQuestion() {
        let arr = [];
        for (let index = 0; index < numOfQuestion; index++) {
            question_index = Math.floor(Math.random() * questionsCollection.length);
            questionArr.push(questionsCollection[question_index]);
            questionsCollection.splice(question_index, 1);
            console.log(questionsCollection.length);
        }
        console.log(questionArr);
    }
    // Hien cau hoi khi start
    showQuestionScreen() {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
        // document.getElementById('reset-btn-question').disabled = true;
    }
    // Dinh dang hien thi thoi gian
    formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }
    // Dem nguoc thoi gian
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
            this.popupConfirm("Hết thời gian - Xem kết quả nào !!! 🤩🤩🤩", () => {
                this.stop();
            });
            this.popupBox.querySelector('.confirm-icon img').src = "img/notice.png";
            this.popupBox.querySelector('#confirm-btn-cancel').style.display = 'none';
            minutes = seconds = 0;
        }
        this.timeCountdown.innerHTML = this.formatNumber(minutes) + ' Phút :' + this.formatNumber(seconds) + ' Giây ';
    }

    refresh() {
        window.location.reload();

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
    // Kiem tra dap an  va hien thi ket qua
    showResult(callbackCheck) {
        let myAnswersElemt = document.querySelectorAll('input:checked');
        myAnswersElemt.forEach((answerElemt) => {
            let hightlight = answerElemt.nextElementSibling;
            let myAnswer = answerElemt.value;
            let indexQuestion = answerElemt.name.slice(-1);
            let check = callbackCheck(questionArr[indexQuestion], myAnswer);
            if (check) {
                numOfCorrect++;
                hightlight.className = '_correct';

            } else {
                numOfIncorrect++;
                hightlight.className = 'incorrect';
            }
            numOfNotCheck = numOfQuestion - numOfCorrect - numOfIncorrect;
        });
        this.resultBtn.disabled = true;
        window.scroll(0, 0);
        this.result =
            "Số câu đúng: " + numOfCorrect +
            "<br>Số câu sai: " + numOfIncorrect +
            "<br>Số câu chưa làm: " + numOfNotCheck +
            "<br> Tổng Điểm: " + numOfCorrect * 10;
        
    }
    showResultBox() {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerHTML = this.result;
    }
    // Kiem tra tung dap an
    isCorrectAnswer(question, myAnswer) {
        if (myAnswer == question.correct) {
            return true;
        } else {
            return false;
        }
    }
    // Danh dau dap an dung sai
    hightlightCorrectAnswer() {
        let answersArr = document.querySelectorAll('.answer');
        answersArr.forEach((answerElemt, indexQuestion) => {
            let correctAnswer = questionArr[indexQuestion].correct;
            let hightlightAnswer = answerElemt.querySelector(`input[value="${correctAnswer}"] + span`);
            hightlightAnswer.classList.add('correct');
        })
    }
    // Popup thong bao
    popupConfirm(mess, callback) {
        this.popupBox.style.display = 'flex';
        this.popupBox.querySelector('#confirm-text').innerHTML = mess;
        this.popupBox.querySelector('.confirm-icon img').src = "img/question_mark.png";
        this.popupBox.querySelector('#confirm-btn-cancel').style.display = 'inline-block';
        this.popupBox.querySelector('#confirm-btn-Ok').onclick = () => {
            this.popupBox.style.display = 'none';
            callback();
        }
        this.popupBox.querySelector('#confirm-btn-cancel').onclick = () => {
            this.popupBox.style.display = 'none';
        }
    }

}
var test = new Test();
