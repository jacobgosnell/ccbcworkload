//Manual Adjust Hiders  
//Reading Columns
$(function () {
    $("#setreadingrate").click(function () {
        wholeOutcome();
        if ($(this).is(":checked")) {
            $("#manualAdjuster").show();
        } else {
            $("#manualAdjuster").hide();
        }
    });
});

$(function () {
    $("#setreadingrate2").click(function () {
        wholeOutcome();
        if ($(this).is(":checked")) {
            $("#manualAdjuster2").show();
        } else {
            $("#manualAdjuster2").hide();
        }
    });
});

// Papers Column
$(function () {
    $("#setwritingrate3").click(function () {
        wholeOutcome();
        if ($("#setwritingrate3").is(":checked")) {
            $("#manualAdjuster3").show();
            //$("#AddPassport").hide();
        } else {
            $("#manualAdjuster3").hide();
            //$("#AddPassport").show();
        }
    });
});

var weeklypagesreading = document.getElementById('weeklypagesreading'),
readingdensity = document.getElementById('readingdensity'),
readingdifficulty = document.getElementById('readingdifficulty'),
readingpurpose = document.getElementById('readingpurpose'),

weeklypagesreading2 = document.getElementById('weeklypagesreading2'),
readingdensity2 = document.getElementById('readingdensity2'),
readingdifficulty2 = document.getElementById('readingdifficulty2'),
readingpurpose2= document.getElementById('readingpurpose2'),

writingdensity = document.getElementById('writtendensity'),
writingpurpose = document.getElementById('writingpurpose'),
semesterPages = document.getElementById('semesterpages'),
draftrevise = document.getElementById('draftrevise'),
classweeks = document.getElementById('classweeks'),
exams = document.getElementById('exams'),
examhours = document.getElementById('examhours'),
otherassign = document.getElementById('otherassign'),
otherhours = document.getElementById('otherhours'),
estimatedworkload = document.getElementById('estimatedworkload'),
lecturetime = document.getElementById('lecturetime');
textinputs = document.querySelectorAll('input'),
selectinputs = document.querySelectorAll('select'),

pagesperhour2 = [ 111, 121, 131, 112, 122, 132, 113, 123, 133, 211, 221, 231, 212, 222, 232, 213, 223, 233, 311, 321, 331, 312, 322, 332, 313, 321, 333 ],
pagesperhour = [ 67,47, 33, 33, 24, 17, 17, 12, 9, 50, 35, 25, 25, 18, 13, 13, 9, 7, 40, 28, 20, 20, 14, 10, 10, 7, 5 ],
pagesPerHourResult = 0,

pagesperhour8 = [ 111, 121, 131, 112, 122, 132, 113, 123, 133, 211, 221, 231, 212, 222, 232, 213, 223, 233, 311, 321, 331, 312, 322, 332, 313, 321, 333 ],
pagesperhour7 = [ 67,47, 33, 33, 24, 17, 17, 12, 9, 50, 35, 25, 25, 18, 13, 13, 9, 7, 40, 28, 20, 20, 14, 10, 10, 7, 5 ],
pagesPerHourResult2 = 0,

hoursperwriting2 = [ 111, 121, 131, 112, 122, 132, 113, 123, 133, 211, 221, 231, 212, 222, 232, 213, 223, 233],
hoursperwriting = [ 0.75, 1.5, 1, 2, 1.25, 2.5, 1.5, 3, 2, 4, 2.5, 5, 3, 6, 4, 8, 5, 10 ],
hoursPerWritingResult = ''
hoursPerWritingResultSpot = document.getElementById('hoursperwriting.out'),
pagesPerHourResultSpot = document.getElementById('pagesperhour.out'),  
readinginputs = [readingdensity, readingdifficulty, readingpurpose],
pagesPerHourResultSpot2 = document.getElementById('pagesperhour7.out'),  
readinginputs2 = [readingdensity2, readingdifficulty2, readingpurpose2],
writinginputs = [writingdensity, writingpurpose, draftrevise];

readinginputs.forEach(function(readingInput){
    readingInput.addEventListener('change', function(){
        readingPagesPerHour();
    });
});

readinginputs2.forEach(function(readingInput2){
    readingInput2.addEventListener('change', function(){
        readingPagesPerHour2();
    });
});

writinginputs.forEach(function(writingInput){
    writingInput.addEventListener('change', function(){
        writingHours();
    });
});

function readingPagesPerHour() {
    if (document.getElementById('setreadingrate').checked) {
        pagesPerHourResult = document.getElementById('overridepagesperhour').value;     
    } else {
        pagesPerHourResult = pagesperhour[pagesperhour2.indexOf(Number(readingdensity.value + readingdifficulty.value + readingpurpose.value))];
        pagesPerHourResultSpot.innerHTML = pagesPerHourResult + ' pages per hour';
    }
}

function readingPagesPerHour2() {
    if (document.getElementById('setreadingrate2').checked) {
        pagesPerHourResult2 = document.getElementById('overridepagesperhour2').value;     
    } else {
        pagesPerHourResult2 = pagesperhour7[pagesperhour8.indexOf(Number(readingdensity2.value + readingdifficulty2.value + readingpurpose2.value))];
        pagesPerHourResultSpot2.innerHTML = pagesPerHourResult2 + ' pages per hour';
    }
}

function writingHours() {
    if (document.getElementById('setwritingrate3').checked) {
        hoursPerWritingResult = document.getElementById('overridehoursperwriting').value;
    } else {
        hoursPerWritingResult = hoursperwriting[hoursperwriting2.indexOf(Number(writingdensity.value + writingpurpose.value + draftrevise.value))];
        hoursPerWritingResultSpot.innerHTML = hoursPerWritingResult + ' hours per page';
    }
}

function wholeOutcome() {
    readingPagesPerHour();
    readingPagesPerHour2();
    writingHours();

    // Reading Assignments
    let weekpages = weeklypagesreading.value;
    let pagesperhour = pagesPerHourResult;

    // Other Reading Assignments
    let weekpages2 = weeklypagesreading2.value;
    let pagesperhour4 = pagesPerHourResult2;

    //  Papers (Writing)
    let semesterpages = semesterPages.value;
    let hoursperwriting = hoursPerWritingResult;

    // Exams
    let theExams = exams.value;
    let theExamhours = examhours.value;

    // Other Assignments
    let theOtherassign = otherassign.value;
    let theOtherhours = otherhours.value;

    // Course Info
    let classWeeks = classweeks.value;
    
    // Sum of all assignments
    let sum_of_assignments = ( parseFloat(weekpages) / parseFloat(pagesperhour) ) + 
                            ( parseFloat(weekpages2) / parseFloat(pagesperhour4) ) + 
                            ( (parseFloat(hoursperwriting) * parseFloat(semesterpages)) / parseFloat(classWeeks)) +
                            ( (parseFloat(theExams) * parseFloat(theExamhours)) / parseFloat(classWeeks)) +
                            ( (parseFloat(theOtherassign) * parseFloat(theOtherhours)) / parseFloat(classWeeks));

    // Adddin total class hours                        
    let mega_total = sum_of_assignments + parseFloat(lecturetime.value);

    // Dividing by total credit
    return parseFloat(mega_total / classWeeks).toFixed(2);
}

textinputs.forEach(function(textInput){
    textInput.addEventListener('change', function(){
        var out = wholeOutcome();
        
        if(!isNaN(out) && (out !== Infinity)) {
            estimatedworkload.innerHTML = out + ' hours per credit';
        } else {
            estimatedworkload.innerHTML = 'Make sure you fill out all the inputs';
        }

    })
});

selectinputs.forEach(function(textInput){
    textInput.addEventListener('change', function(){
        var out = wholeOutcome();
        
        if(!isNaN(out) && (out !== Infinity)) {
            estimatedworkload.innerHTML = out + ' hours per credit';
        } else {
            estimatedworkload.innerHTML = 'Make sure you fill out all the inputs';
        }

        });
});

$(document).ready(function(){
    readingPagesPerHour();
    readingPagesPerHour2();
    writingHours();
    pagesPerHourResultSpot.innerHTML = pagesPerHourResult + ' pages per hour';
    pagesPerHourResultSpot2.innerHTML = pagesPerHourResult2 + ' pages per hour';
    hoursPerWritingResultSpot.innerHTML = hoursPerWritingResult + ' hours per page';
});