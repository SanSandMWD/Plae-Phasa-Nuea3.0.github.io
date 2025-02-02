var dictionary = {
    "ตา": "ต๋า",
    "ทวด": "หม่อน",
    "น้องเขย": "น้องจาย",
    "น้องชาย": "น้องบ่าว",
    "น้องเมีย": "น้องเมีย",
    "น้องผัว": "น้องผัว",
    "น้องสะใภ้": "น้องไป๊",
    "น้องสาว": "น้องสาว",
    "น้า": "น้า",
    "น้าเขย": "น้าจาย",
    "น้าสะใภ้": "น้าไป๊",
    "ป้า": "ป้า",
    "ป้าสะใภ้": "ป้าไป๊",
    "ปู่": "ป้ออุ๊ย",
    "พ่อ": "ป้อ",
    "พ่อตา": "ป้อเมีย",
    "พ่อผัว": "ป้อผัว",
    "พ่อเลี้ยง": "ป้อน้า",
    "พี่ชาย": "อ้าย",
    "พี่สาว": "ปี้",
    "พี่เขย": "อ้ายเขย",
    "พี่สามี": "ปี้ผัว",
    "พี่เมีย": "ปี้เมีย",
    "พี่สะใภ้": "ปี้ไป๊",
    "ภรรยา": "เมีย",
    "แม่": "แม่",
    "แม่ผัว": "แม่ผัว",
    "แม่ยาย": "แม่เมีย",
    "แม่เลี้ยง": "แม่น้า",
    "ย่า": "แม่อุ๊ย",
    "ยาย": "แม่อุ๊ย",
    "ลุง": "ลุง",
    "ลุงเขย": "ลุงเขย",
    "ลูกเขย": "ลูกจาย",
    "ลูกคนกลาง": "ลูกคนก๋าง",
    "ลูกคนโต": "ลูกคนเก๊า",
    "ลูกคนสุดท้อง": "ลูกหล้า",
    "ลูกชาย": "ลูกบ่าว",
    "ลูกคนเดียว": "ลูกโตน",
    "ลูกบุญธรรม": "ลูกเก๋บ",
    "ลูกเลี้ยง": "ลูกเลี้ยง",
    "ลูกสะใภ้": "ลูกไป๊",
    "ลูกสาว": "ลูกสาว",
    "สามี": "ผัว",
    "หลาน": "หลาน",
    "หลานเขย": "หลานเขย",
    "หลานสะใภ้": "หลานไป๊",
    "เหลน": "เหลน",
    "อา": "อา",
    "อาเขย": "อาเขย",
    "อาสะใภ้": "อาไป๊"
}


function satar() {
    var h3Element = document.getElementById('languageText'); // ใช้ id ของ h3 ที่ต้องการเช็ค
    var inputElement = document.getElementById('searchInput'); // ใช้ id ของ input ที่ต้องการเช็ค

    if (h3Element.classList.contains('swapped-h3')) {
        console.log('1'); // ถ้ามีคลาส swapped-h3 (หาคำแปลจาก dictionary)
        var searchData = document.getElementById("searchInput").value;
        var result = searchData;
    
        // ตรวจสอบว่า searchData เป็นคำที่มีใน dictionary และมีการแปลแล้ว
        if (Object.values(dictionary).includes(searchData)) {
            // ถ้าคำแปลตรงกับ searchData จะหาคำแทนจาก dictionary
            result = Object.keys(dictionary).find(key => dictionary[key] === searchData);
        }
    
        // แสดงผลลัพธ์ใน div ที่มี id="result"
        document.getElementById("result").innerText = result;
    
        // แสดงผลใน console
        console.log("Translated Text (log1):", result);

    } else {
        console.log('2'); // ถ้าไม่มีคลาส swapped-h3
        var searchData = document.getElementById("searchInput").value;

        // Replace text based on the dictionary
        var result = searchData.replace(new RegExp(Object.keys(dictionary).join("|"), "g"), function (matched) {
            return dictionary[matched];
        });
    
        // Update the result div with the translated text (no line breaks)
        document.getElementById("result").innerText = result;
    
        // Log the translated result to the console
        console.log("Translated Text:", result);
        
        image.classList.add('rainbow-border');
        image.classList.add('expand-circle');


        
}

}
// Function to switch between languages (Thai and Kham Mueang)
function changeText() {
    let h3 = document.getElementById("languageText");
    let h2 = document.getElementById("languageText2");

    // Toggle classes to swap languages
    h3.classList.toggle("swapped-h3");
    h2.classList.toggle("swapped-h2");

    // Swap positions of h3 and h2
    let h3Top = h3.style.top;
    let h2Top = h2.style.top;

    h3.style.top = h2Top;
    h2.style.top = h3Top;

    let h3Left = h3.style.left;
    let h2Right = h2.style.right;

    h3.style.left = h2Right;
    h2.style.right = h3Left;
 } 


 const crosshair = document.querySelector('.crosshair');
 const crosshairInner = document.querySelector('.crosshair-inner');

 let angle = 0;

 function updateRotation() {
     angle += 2; // ปรับค่าการหมุน (2 องศาต่อเฟรม)
     crosshairInner.style.transform = `rotate(${angle}deg)`;
     requestAnimationFrame(updateRotation);
 }

 document.addEventListener('mousemove', (e) => {
     crosshair.style.left = `${e.clientX}px`;
     crosshair.style.top = `${e.clientY}px`;
 });

 document.addEventListener('touchmove', (e) => {
     const touch = e.touches[0];
     crosshair.style.left = `${touch.clientX}px`;
     crosshair.style.top = `${touch.clientY}px`;
 });

 updateRotation(); // เรียกฟังก์ชันหมุนเมื่อโหลดหน้าเว็บ

 function randomWord() {
    const keys = Object.keys(dictionary);
    let randomWords = [];

    while (randomWords.length < 5) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        if (!randomWords.some(item => item.key === randomKey)) {
            randomWords.push({ key: randomKey, value: dictionary[randomKey] });
        }
    }

    let resultText = "ช่วง!!!!แนะนำคำศัพท์<br><br>"; // เว้นบรรทัดหลังหัวข้อ
    randomWords.forEach(item => {
       
    resultText += `${item.value} &nbsp; แปลว่า &nbsp; ${item.key}<br>`; // เพิ่มช่องว่างเล็กน้อยระหว่างคำ
});

    document.getElementById("result").innerHTML = resultText;
}

 


function createStars() {
    for (let i = 0; i < 3; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // สุ่มตำแหน่ง x และ y
        let x = Math.random() * (200 - 100) + 100; // ระหว่าง 100px ถึง 200px
        let y = Math.random() * (350 - 250) + 250; // ระหว่าง 250px ถึง 350px

        // กำหนดตำแหน่งของดาว
        star.style.left = x + "px";
        star.style.top = y + "px";

        // สร้างตัวแปร custom --start-x สำหรับตำแหน่งเริ่มต้น
        star.style.setProperty('--start-x', x + 'px');

        // สุ่มความเร็วการเคลื่อนไหวของดาว
        let speed = Math.random() * (6 - 4) + 4; // ความเร็วอยู่ระหว่าง 4 ถึง 6 วินาที
        speed = speed / 3; // เร่งความเร็วให้เร็วขึ้น 3 เท่า
        star.style.animationDuration = speed + "s";

        // เพิ่มดาวลงในเอกสาร
        document.body.appendChild(star);

        // ลบดาวออกเมื่อการเคลื่อนไหวเสร็จสิ้น
        star.addEventListener('animationend', () => {
            star.remove(); // ลบดาวออกจาก DOM
        });
    }
}

// เรียกใช้ฟังก์ชัน
createStars();

function sdata() {
    let text = document.getElementById("result").textContent; // ดึงข้อความจาก <output>
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "th-TH"; // ตั้งค่าให้พูดภาษาไทย
    msg.rate = 1; // ความเร็วในการอ่าน (1 = ปกติ)
    msg.pitch = 1; // ระดับเสียง
    speechSynthesis.speak(msg);
}

 // เมื่อโหลดหน้าเว็บ ให้แสดงหน้าจอดำ 5 วินาทีแล้วค่อย ๆ จางออกใน 2 วินาที
 document.addEventListener("DOMContentLoaded", function () {
    // รายการสุภาษิต
    const quotes = [
        "เงินอยู่ใต้น้ำ คำอยู่ใต้ดิน",
        "เยียะหยังหื้อเยียะแต้ดีหลี จะได้เป็นเศรษฐีวันนึ่ง",
        "เจ๊าก็ว่ายังงาย ขวายก็ว่าแดดออก",
        "ควายบ่ตาย ไปฟั่งปาดจิ้น",
        "วัดบ่เข้า พระเจ้าบ่ไหว้ คือ คนหนา",
        "จะจูงก็ไปก่อน จะส่อนก็ตวยหลัง",
        "มีเงินว่าเป็นเจ้า มีข้าวว่าเป็นนาย",
        "จิกปิกไหนก็ป้อ จ้อหว้อไหนก็ขวัก",
        "กามตัณหาพาหื้อล่วงล้ำ บังเกิดไหม้สันดาน",
        "จะไปหล็วกก่อนหมอ จะไปซอก่อนปี่",
        "หนุ่มเอาเก๊า เถ้าเอาปล๋าย",
        "ควายบ่กินหญ้า จะไปก้มเขามันลง",
        "คนหล็วกว่าใกล้ คนใบ้ว่าไกล",
        "หลับเดิ้กลุกเจ๊า หนึ้งข้าวเป่าไฟ",
        "น้ำขุ่นไว้ใน น้ำใสแวดนอก",
        "ไฟในจะไปเอาออก ไฝนอกจะไปเข้า",
        "ตุ้มผ้าลายหมาจั่งเห่า ค้นคำเก่าจั่งผิดกัน",
        "จับใจหมี ปดีใจเผึ้ง จับใจมองเซิง บ่เพิ่งใจเงี้ยว",
        "นั่งหื้ออดูตี้ หนีหื้อดูกัน",
        "หัวใจคนใผหยั่งบ่ตึ้ก น้ำแม่สมุทรใหญ่กล้างพิลึก ยังหยั่งได้เถิงทราย",
        "ไม้โค่นค้างก็เพื่อคมเสียม ขุดเลาะเลียมเก๊างุนรากแก้ว",
        "ใคร่รู้หื้อถาม ใคร่งามหื้อแต้ม",
        "จะไปกินน้ำย้อยศอกคนอื่น",
        "หมาเห่า อย่าเห่าตวยหมา",
        "เปิ่นบ่ฮู้ผู้โทษมาถู กำคองูผู้พิษใส่ข้า",
        "ขดออกแพ้เจ้า ขดเข้าแพ้ของ",
        "ยามเมื่อฮัก น้ำผักว่าหวาน ยามเมื่อจัง น้ำตาลว่าส้ม",
        "พี่น้องผิ่ดกั่น เหมือนพร้าฟันน้ำ จะไปผูกมั้นกรรมเวร",
        "เมื่อทุกข์ก็ทาข์ เมื่อผ่านก็ผาน เมื่อสุขสำราญก็ไว้เป็นห้อง",
        "น้ำไหลตวยหนทาง ผีสางเพื่อคำปาก",
        "อดเผ็ดกินหวาน อดสานได้จ้า",
        "คนใบ้ใช้หลายเพื่อ",
        "ฮักจั้น ๆ มันจั่งพันเหย เมิน ๆ เคย มันจั่งคุ้มเถ้า",
        "จะไปเป็นคน “ปากหวานกันส้ม”"
    ];

    // เลือกสุภาษิตแบบสุ่ม
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteText = document.getElementById("quoteText");

    // แสดงสุภาษิตหลังจาก 1 วิ และค่อย ๆ ปรากฏ
    setTimeout(() => {
        quoteText.textContent = randomQuote;
        quoteText.style.opacity = "1"; // ค่อย ๆ ปรากฏ
        setTimeout(() => {
            quoteText.style.opacity = "0"; // ค่อย ๆ หายไป
        }, 3000); // แสดง 3 วินาที
    }, 1000);

    // หน้าจอดำจางออกใน 2 วิ หลังจาก 5 วิ
    setTimeout(() => {
        document.getElementById("blackScreen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("blackScreen").style.display = "none";
        }, 2000);
    }, 5000);
});

 // รายการสุภาษิต
 const quotes = [
    "เงินอยู่ใต้น้ำ คำอยู่ใต้ดิน",
    "เยียะหยังหื้อเยียะแต้ดีหลี จะได้เป็นเศรษฐีวันนึ่ง",
    "เจ๊าก็ว่ายังงาย ขวายก็ว่าแดดออก",
    "ควายบ่ตาย ไปฟั่งปาดจิ้น",
    "วัดบ่เข้า พระเจ้าบ่ไหว้ คือ คนหนา",
    "จะจูงก็ไปก่อน จะส่อนก็ตวยหลัง",
    "มีเงินว่าเป็นเจ้า มีข้าวว่าเป็นนาย",
    "จิกปิกไหนก็ป้อ จ้อหว้อไหนก็ขวัก",
    "กามตัณหาพาหื้อล่วงล้ำ บังเกิดไหม้สันดาน",
    "จะไปหล็วกก่อนหมอ จะไปซอก่อนปี่",
    "หนุ่มเอาเก๊า เถ้าเอาปล๋าย",
    "ควายบ่กินหญ้า จะไปก้มเขามันลง",
    "คนหล็วก ว่าใกล้ คนใบ้ว่าไกล",
    "หลับเดิ้กลุกเจ๊า หนึ้งข้าวเป่าไฟ",
    "น้ำขุ่นไว้ใน น้ำใสแวดนอก",
    "ไฟในจะไปเอาออก ไฝนอกจะไปเข้า",
    "ตุ้มผ้าลายหมาจั่งเห่า ค้นคำเก่าจั่งผิดกัน",
    "จับใจหมี ปดีใจเผึ้ง จับใจมองเซิง บ่เพิ่งใจเงี้ยว",
    "นั่งหื้ออดูตี้ หนีหื้อดูกัน",
    "หัวใจคนใผหยั่งบ่ตึ้ก น้ำแม่สมุทรใหญ่กล้างพิลึก ยังหยั่งได้เถิงทราย",
    "ไม้โค่นค้างก็เพื่อคมเสียม ขุดเลาะเลียมเก๊างุนรากแก้ว",
    "ใคร่รู้หื้อถาม ใคร่งามหื้อแต้ม",
    "จะไปกินน้ำย้อยศอกคนอื่น",
    "หมาเห่า อย่าเห่าตวยหมา",
    "เปิ่นบ่ฮู้ผู้โทษมาถู กำคองูผู้พิษใส่ข้า",
    "ขดออกแพ้เจ้า ขดเข้าแพ้ของ",
    "ยามเมื่อฮัก น้ำผักว่าหวาน ยามเมื่อจัง น้ำตาลว่าส้ม",
    "พี่น้องผิ่ดกั่น เหมือนพร้าฟันน้ำ จะไปผูกมั้นกรรมเวร",
    "เมื่อทุกข์ก็ทาข์ เมื่อผ่านก็ผาน เมื่อสุขสำราญก็ไว้เป็นห้อง",
    "น้ำไหลตวยหนทาง ผีสางเพื่อคำปาก",
    "อดเผ็ดกินหวาน อดสานได้จ้า",
    "คนใบ้ใช้หลายเพื่อ",
    "ฮักจั้น ๆ มันจั่งพันเหย เมิน ๆ เคย มันจั่งคุ้มเถ้า",
    "จะไปเป็นคน “ปากหวานกันส้ม”"
];

// เลือกสุภาษิตแบบสุ่ม
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];
const quoteText = document.getElementById("quoteText");

// แสดงสุภาษิตหลังจาก 1 วิ และค่อย ๆ ปรากฏ
setTimeout(function() {
    quoteText.textContent = randomQuote;
    quoteText.style.opacity = "1"; // ค่อย ๆ ปรากฏ
    setTimeout(function() {
        quoteText.style.opacity = "0"; // ค่อย ๆ หายไป
    }, 3000); // แสดง 3 วินาที
}, 1000);

// หน้าจอดำจางออกใน 2 วิ หลังจาก 5 วิ
setTimeout(function() {
    document.getElementById("blackScreen").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("blackScreen").style.display = "none";
    }, 2000);
}, 5000);

setTimeout(function() {
    quoteText.classList.add("show");
}, 1000); // ปรากฏหลังจาก 1 วินาที