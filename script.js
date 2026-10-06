/*
    SCHOLARFIND

    The student information is entered by the user.
    Priya is only the default example from the
    problem statement.

    The user can change:
    - Name
    - Age
    - Class
    - First-generation status
    - State
    - Income
    - Category
    - Marks
*/


const scholarships = [

    {
        id: 1,

        name:
            "National Means Cum Merit Scholarship",

        icon:
            "🏆",

        owner:
            "Department of School Education & Literacy",

        reason:
            "This is a school-level scholarship opportunity for eligible students continuing their education.",

        eligibility:
            "Eligibility depends on the applicable academic performance, income and other scheme conditions.",

        documents: [
            "Income certificate",
            "Academic records",
            "Identity proof",
            "Bank account details"
        ],

        link:
            "https://scholarships.gov.in/All-Scholarships"
    },


    {
        id: 2,

        name:
            "PM YASASVI Central Sector Scheme",

        icon:
            "🌟",

        owner:
            "Department of Social Justice & Empowerment",

        reason:
            "This opportunity is listed on the National Scholarship Portal for eligible OBC, EBC and DNT students.",

        eligibility:
            "Eligibility depends on category, family income, school or institution and other scheme-specific conditions.",

        documents: [
            "Community certificate",
            "Income certificate",
            "Academic records",
            "Identity proof"
        ],

        link:
            "https://scholarships.gov.in/All-Scholarships"
    },


    {
        id: 3,

        name:
            "National Scholarship Portal Eligibility Checker",

        icon:
            "🔎",

        owner:
            "National Scholarship Portal",

        reason:
            "The official eligibility checker can help students identify scholarship schemes based on their complete profile.",

        eligibility:
            "The official checker uses additional student information to identify potentially applicable schemes.",

        documents: [
            "Student details",
            "Academic information",
            "Income information",
            "Community information"
        ],

        link:
            "https://scholarships.gov.in/scholarshipEligibility/"
    }

];



function findScholarships() {

    const name =
        document.getElementById("studentName").value.trim();

    const age =
        document.getElementById("age").value;

    const classLevel =
        document.getElementById("classLevel").value;

    const firstGeneration =
        document.getElementById("firstGeneration").value;

    const state =
        document.getElementById("state").value;

    const income =
        document.getElementById("income").value;

    const category =
        document.getElementById("category").value;

    const marks =
        document.getElementById("marks").value;


    /*
        CHECK REQUIRED DETAILS
    */

    if (
        !name ||
        !age ||
        !classLevel ||
        !firstGeneration ||
        !state ||
        !income ||
        !category ||
        !marks
    ) {

        alert(
            "Please complete all the profile details."
        );

        return;
    }


    /*
        VALIDATE AGE
    */

    if (age < 5 || age > 100) {

        alert(
            "Please enter a valid age."
        );

        return;
    }


    /*
        VALIDATE MARKS
    */

    if (marks < 0 || marks > 100) {

        alert(
            "Please enter marks between 0 and 100."
        );

        return;
    }


    /*
        SAVE STUDENT INFORMATION
        FOR THIS SESSION ONLY
    */

    const student = {

        name: name,

        age: age,

        classLevel: classLevel,

        firstGeneration: firstGeneration,

        state: state,

        income: income,

        category: category,

        marks: marks

    };


    displayResults(student);

    showScreen(2);
}



function displayResults(student) {

    /*
        PERSONALIZE RESULT SCREEN
    */

    document.getElementById(
        "resultTitle"
    ).textContent =
        `${student.name}'s Scholarship Matches`;


    document.getElementById(
        "resultDescription"
    ).textContent =
        `Potential opportunities based on ${student.name}'s profile.`;


    /*
        DISPLAY SCHOLARSHIPS
    */

    const list =
        document.getElementById(
            "scholarshipList"
        );


    document.getElementById(
        "matchCount"
    ).textContent =
        scholarships.length;


    list.innerHTML =
        scholarships.map(
            scholarship => `

            <article class="scholarship-card">

                <div class="card-top">

                    <div class="scholarship-icon">

                        ${scholarship.icon}

                    </div>


                    <div>

                        <h3>
                            ${scholarship.name}
                        </h3>

                        <p class="scheme-owner">
                            ${scholarship.owner}
                        </p>

                    </div>

                </div>


                <span class="potential-match">
                    ✓ POTENTIAL MATCH
                </span>


                <div class="reason">

                    <strong>
                        Why it appeared:
                    </strong>

                    <br>

                    ${scholarship.reason}

                </div>


                <button
                    class="details-btn"
                    onclick="showDetails(${scholarship.id})">

                    View Details →

                </button>

            </article>

        `
        ).join("");
}



function showDetails(id) {

    const scholarship =
        scholarships.find(
            item => item.id === id
        );


    if (!scholarship) {
        return;
    }


    const details =
        document.getElementById(
            "scholarshipDetails"
        );


    details.innerHTML = `

        <div class="big-icon">
            ${scholarship.icon}
        </div>


        <h1>
            ${scholarship.name}
        </h1>


        <p class="owner">
            ${scholarship.owner}
        </p>


        <span class="details-label">
            POTENTIAL MATCH
        </span>


        <div class="detail-section">

            <h3>
                Why this scholarship?
            </h3>

            <p>
                ${scholarship.reason}
            </p>

        </div>


        <div class="detail-section">

            <h3>
                Eligibility
            </h3>

            <p>
                ${scholarship.eligibility}
            </p>

        </div>


        <div class="detail-section">

            <h3>
                Documents you may need
            </h3>

            <ul>

                ${scholarship.documents
                    .map(
                        item =>
                        `<li>${item}</li>`
                    )
                    .join("")}

            </ul>

        </div>


        <div class="detail-section">

            <h3>
                ⚠️ Verify before applying
            </h3>

            <p>
                ScholarFind identifies potential opportunities.
                Always check the latest official eligibility
                rules before applying.
            </p>

        </div>


        <a
            class="apply-btn"
            href="${scholarship.link}"
            target="_blank"
            rel="noopener noreferrer">

            Check Official NSP Details →

        </a>

    `;


    showScreen(3);
}



function showScreen(number) {

    document
        .querySelectorAll(".screen")
        .forEach(
            screen =>
            screen.classList.remove("active")
        );


    document
        .getElementById(`screen${number}`)
        .classList.add("active");


    window.scrollTo(0, 0);
}