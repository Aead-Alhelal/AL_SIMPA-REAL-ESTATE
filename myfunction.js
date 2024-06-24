//تعليمات اخفاء و اظهار التفاصيل في الصفوف
function toggleDetails(checkbox) {
    const detailsRow = checkbox.parentNode.querySelector('.hidden');
    detailsRow.style.display = checkbox.checked ? 'table-row' : 'none';
}

//تعليمات تعطي قيمة لاختيار الشقق
function toggleSelection(radio) {
    const radios = document.querySelectorAll('table input[type="radio"]');
  
    radios.forEach(r => r.dataset.selected = 'false');
    radio.dataset.selected = 'true';
  }

  //تعليمات للتحقق من قيمة الاختيار في الجدول لعمل زر المتابعة و اظهار الفورم
  function toggleDiv() {
    const selectedRadio = document.querySelector('table input[type="radio"][data-selected="true"]');
    if (selectedRadio) 
    {
      document.getElementById('div-prop1').style.display = 'block';
    } 
    else 
    {
      alert('Please select a property first.');
    }
  }

  // للحصول على جميع حقول الادخال
const inputFields = document.querySelectorAll('.prop');

// الحصول على كافة عناصر رسالة الخطأ
const errorMessages = document.querySelectorAll('.error-message');


inputFields.forEach((input, index) => {
    input.addEventListener('input', () => {
        // ايصال رسائل الخطأ
        errorMessages.forEach(message => {
            message.style.display = 'none';
        });

        // التحقق من صحة الادخالات بناء على نوع الحقل
        switch (index) {
            case 0: // الاسم الكامل
                if (!input.value.match(/^[\u0600-\u06FF\s]+$/)) {
                    document.querySelector('.input1-error').style.display = 'block';
                }
                break;
            case 1: // الرقم الوطني
                if (input.value.length !== 11 || !input.value.match(/^\d+$/)) {
                    document.querySelector('.input2-error').style.display = 'block';
                }
                break;
            case 3: // رقم الموبايل
                if (!input.value.match(/^09\d{8}$/)) {
                    document.querySelector('.input4-error').style.display = 'block';
                }
                break;
                case 4: // Email
                if (!input.value.match(/^[\w-\.]+@(gmail|hotmail)\.com$/)) {
                    document.querySelector('.input5-error').style.display = 'block';
                }
                break;
        }
    });
});

    Captcha();

  function Captcha() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }
    $("#captcha").text(captchaCode);
  }
  
//تعليمات التحقق من الادخال قبل الإرسال لإظهار الرسالة الاخيرة
document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.querySelector(".button2");


  submitButton.addEventListener("click", function() {

      var nationalNumberInput = document.querySelector(".input2");
      var nationalNumberValue = nationalNumberInput.value;


      if (nationalNumberValue.trim() !== "") 
        {

          alert("تمت عملية حجز العقار المطلوب بنجاح.");
      } 
      else 
      {

          alert("الرجاء إدخال الرقم الوطني على الاقل.");
      }
  });
});

