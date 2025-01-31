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
