function validateAll() {
    validate = true;
    v1 = validateAccidentDateTime('txtAccidentDateTime', 'lblAccidentDateTime');
    v2 = validateAccidentExplanation('txtAccidentExplanation', 'lblAccidentExplanation');
    v3 = validateExtimatedTime('txtEstimatedTime', 'lblEstimatedTime');

    if (!v1) {
        validate= false;
    }
    if (!v2) {
        validate= false;
    }
    if (!v3) {
        validate= false;
    }
    return validate;

}

function validateAccidentDateTime(pTxtAccidentDateTime, pLblAccidentDateTime) {
    var txtAccidentDateTime = document.getElementById(pTxtAccidentDateTime).value;

    if (txtAccidentDateTime == "") {
        valid = 0;
        updateCSS(pTxtAccidentDateTime, pLblAccidentDateTime, valid);

    }
    else {
        valid = 1;
        updateCSS(pTxtAccidentDateTime, pLblAccidentDateTime, valid);
    }
    return valid;
}

function validateAccidentExplanation(pTxtAccidentExplanation, pLblAccidentExplanation) {
    var txtAccidentExplanation = document.getElementById(pTxtAccidentExplanation).value;

    if (txtAccidentExplanation == "") {
       
        valid = 0;
        updateCSS(pTxtAccidentExplanation, pLblAccidentExplanation,valid);
    }
    else {
        valid = 1;
        updateCSS(pTxtAccidentExplanation, pLblAccidentExplanation,valid);
    }
    return valid;
}

function validateExtimatedTime(pTxtEstimatedTime, pLblEstimatedTime) {
    var txtEstimatedTime = document.getElementById(pTxtEstimatedTime).value;

    if (txtEstimatedTime == "") {
        valid = 0;
        updateCSS(pTxtEstimatedTime, pLblEstimatedTime,valid);
    } else {
        valid = 1;
        updateCSS(pTxtEstimatedTime, pLblEstimatedTime,valid);
    }
    return valid;
}


function updateCSS(pInputId, pLblId, pValid) {
    if (!pValid) {
        document.getElementById(pLblId).style.color = "red";
        document.getElementById(pInputId).style.border.color = "red";
    }
    else {
        document.getElementById(pLblId).style.color = "black";
        document.getElementById(pInputId).style.border.color = "black";
    }

}
function clearAll(){
    document.getElementById('lblAccidentDateTime').style.color = "black";
    document.getElementById('txtAccidentDateTime').style.border.color = "black";

    document.getElementById('lblAccidentExplanation').style.color = "black";
    document.getElementById('txtAccidentExplanation').style.border.color = "black";

    document.getElementById('lblEstimatedTime').style.color = "black";
    document.getElementById('txtEstimatedTime').style.border.color = "black";
}