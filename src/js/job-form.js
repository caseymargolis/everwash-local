const inputTextAreas = document.querySelectorAll(
  '[data-label="toggle-visibility"]'
);

inputTextAreas.forEach((element) => {
  element.addEventListener("click", function () {
    toggleTextArea(element);
  });
});

// Toggles Text Area for applicants to paste their resume or cover letter
function toggleTextArea(btn) {
  let inputTextArea = document.getElementById(btn.getAttribute("data-target"));

  if (inputTextArea.style.display === "inline-block") {
    inputTextArea.style.display = "none";
  } else {
    inputTextArea.style.display = "inline-block";
  }
}

document.querySelector("#uploadResumeInput").onchange = function () {
  document.querySelector("#resumeFileName").textContent = this.files[0].name;
  document.querySelector("#resumeFileContainer").style.display = "inline-block";
  document.querySelector("#uploadResumeContainer").classList.add("d-none");
};

document.querySelector("#uploadCoverLetterInput").onchange = function () {
  document.querySelector("#coverLetterFileName").textContent =
    this.files[0].name;
  document.querySelector("#coverLetterFileContainer").style.display =
    "inline-block";
  document.querySelector("#uploadCoverLetterContainer").classList.add("d-none");
};

const deleteFileBtns = document.querySelectorAll('[data-label="delete-file"]');
deleteFileBtns.forEach((element) => {
  element.addEventListener("click", function () {
    deleteFile(element);
  });
});

//Deletes resume or cover letter files
function deleteFile(btn) {
  btn.parentElement.style.display = "none";
  const input = document.getElementById(btn.getAttribute("data-target"));
  console.log("current file: " + input.files[0].name);
  input.value = "";
  if (input.getAttribute("document-type") === "resume") {
    document.querySelector("#uploadResumeContainer").classList.remove("d-none");
    console.log("c");
  } else {
    document
      .querySelector("#uploadCoverLetterContainer")
      .classList.remove("d-none");
    console.log("d");
  }
}

const addJobBtn = document.querySelector("#addJobEntry");
addJobBtn.addEventListener("click", addJobEntry);

//Adds section to form for additional job entry
function addJobEntry() {
  console.log("adding job...");
  const container = document.createElement("div");
  container.appendChild(document.createElement("hr"));
  container.classList.add("job-experience-container");

  //Company Name
  const companyNameLabel = document.createElement("label");
  const companyNameInput = document.createElement("input");
  companyNameInput.type = "text";
  companyNameLabel.textContent = "Company Name";
  companyNameLabel.appendChild(companyNameInput);
  container.appendChild(companyNameLabel);

  //Job Title
  const jobTitleLabel = document.createElement("label");
  const jobTitleInput = document.createElement("input");
  jobTitleInput.type = "text";
  jobTitleLabel.textContent = "Job Title";
  jobTitleLabel.appendChild(jobTitleInput);
  container.appendChild(jobTitleLabel);

  //Start Date
  const startDateLabel = document.createElement("label");
  startDateLabel.textContent = "Start Date (MM/YYYY)";
  container.appendChild(startDateLabel);

  const startDateContainer = document.createElement("div");
  startDateContainer.classList.add("dateInputContainer");
  const startDateMonth = document.createElement("input");
  startDateMonth.type = "Number";
  const startDateYear = document.createElement("input");
  startDateYear.type = "Number";
  startDateContainer.append(startDateMonth, startDateYear);
  container.appendChild(startDateContainer);

  //End Date
  const endDateLabel = document.createElement("label");
  endDateLabel.textContent = "End Date (MM/YYYY)";
  container.appendChild(endDateLabel);

  const endDateContainer = document.createElement("div");
  endDateContainer.classList.add("dateInputContainer");
  const endDateMonth = document.createElement("input");
  endDateMonth.type = "Number";
  const endDateYear = document.createElement("input");
  endDateYear.type = "Number";
  endDateContainer.append(endDateMonth, endDateYear);

  //Current Job Checkbox
  const currentJobLabel = document.createElement("label");
  currentJobLabel.classList.add("current-job-label");
  const currentJobInput = document.createElement("input");
  currentJobInput.type = "checkbox";
  currentJobLabel.append(currentJobInput);
  currentJobLabel.append(document.createTextNode("Current Job"));
  endDateContainer.append(currentJobLabel);
  container.appendChild(endDateContainer);

  const jobList = document.getElementById("jobFormExperience");
  jobList.append(container);
}

const addEducationBtn = document.querySelector("#addEducationEntry");
addEducationBtn.addEventListener("click", addEducationEntry);

function addEducationEntry() {
  console.log("adding education...");
  const container = document.createElement("div");
  container.appendChild(document.createElement("hr"));
  container.classList.add("job-experience-container");

  //School Name
  const schoolNameLabel = document.createElement("label");
  const schoolNameInput = document.createElement("input");
  schoolNameInput.type = "text";
  schoolNameLabel.textContent = "School";
  schoolNameLabel.appendChild(schoolNameInput);
  container.appendChild(schoolNameLabel);

  //Degree Type
  const degreeLabel = document.createElement("label");
  degreeLabel.textContent = "Degree";
  const selectDegree = document.createElement("select");
  const degreePlaceholder = document.createElement("option");
  degreePlaceholder.disabled = "true";
  degreePlaceholder.selected = "true";
  degreePlaceholder.textContent = "Select your degree";
  const opt1 = document.createElement("option");
  opt1.value = "highschool-degree";
  opt1.textContent = "High School";

  const opt2 = document.createElement("option");
  opt2.value = "associates-degree";
  opt2.textContent = "Associate's Degree";

  const opt3 = document.createElement("option");
  opt3.value = "bachelors-degree";
  opt3.textContent = "Bachelor's Degree";

  const opt4 = document.createElement("option");
  opt4.value = "masters-degree";
  opt4.textContent = "Master's Degree";

  const opt5 = document.createElement("option");
  opt5.value = "phd";
  opt5.textContent = "Doctor of Philosophy (Ph.D.)";

  const opt6 = document.createElement("option");
  opt6.value = "other";
  opt6.textContent = "Other";

  selectDegree.append(degreePlaceholder, opt1, opt2, opt3, opt4, opt5, opt6);
  degreeLabel.append(selectDegree);
  container.appendChild(degreeLabel);

  //Discipline Type
  const disciplineLabel = document.createElement("label");
  const disciplineInput = document.createElement("input");
  disciplineInput.type = "text";
  disciplineLabel.textContent = "Discipline";
  disciplineLabel.appendChild(disciplineInput);
  container.appendChild(disciplineLabel);

  const educationList = document.getElementById("jobFormEducation");
  educationList.append(container);
}
