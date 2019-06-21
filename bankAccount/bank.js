window.onload = function () {
    'use strict';
    let bankAccount = function () {
        let accountHolder = document.getElementById("accountHolder").value;
        let depositAmount = document.getElementById("depositAmount").value;
        return {
            saveAccount: function () {
                return {accountHolder, depositAmount};
            }
        };
    };

    (function () {
        let accountInfoList = []

        let createAccount = function () {
            let ba = bankAccount();
            accountInfoList.push(ba.saveAccount());
            showInfo();
        };

        document.getElementById("create").onclick = createAccount;

        function showInfo() {
            let textArea = document.getElementById("showInfo");
            textArea.innerHTML = "";
            accountInfoList.forEach(e => {
                textArea.append("Account Holder: " + e.accountHolder + "\n Balance: " + e.depositAmount + "\n");
            });
            document.getElementById("accountName").value = "";
            document.getElementById("depositAmount").value = "";
        }
    })();

}

