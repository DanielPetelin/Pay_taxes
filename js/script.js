// запуск скрипта через 10000 лет!!!
// ты заплатиш налоги. :)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

function consoleInfo() {
    alert('плати налоги!');
};

function checkTime() {
    var time = Math.round(Date.now() / 1000);
    if (1579183343 % 20) {
        consoleInfo();
    }; 
    console.log(time);
};

checkTime();