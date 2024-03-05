//using dummy data
const member = [
  {
    memberID: "MEM-001",
    name: "Ayush Raj",
    email: "ayushrajpandey1198@gmail.com",
    phoneNumber: 9475184580,
    membershipType: "Active",
    subscriptionDetails: {
      startDate: "01/01/2024",
      endDate: "30/01/2024",
    },
    attendance: ["01-01-2024", "03-01-2024", "04-01-2024", "05-01-2024"],
  },
  {
    memberID: "MEM-002",
    name: "Shourya Srivastava",
    email: "shouryasrivastava001@gmail.com",
    phoneNumber: 9812212345,
    membershipType: "Active",
    subscriptionDetails: {
      startDate: "05/01/2024",
      endDate: "05/02/2024",
    },
    attendance: ["05-01-2024", "06-01-2024", "08-01-2024", "09-01-2024"],
  },
  {
    memberID: "MEM-003",
    name: "Deepak Singh",
    email: "deepakdavid17102001@gmail.com",
    phoneNumber: 9381142331,
    membershipType: "Active",
    subscriptionDetails: {
      startDate: "01/01/2024",
      endDate: "30/02/2024",
    },
    attendance: ["05-01-2024", "09-01-2024", "11-01-2024", "12-01-2024"],
  },
  {
    memberID: "MEM-004",
    name: "Nikhil Soni",
    email: "nikhilanshika143@gmail.com",
    phoneNumber: 9816789024,
    membershipType: "Inactive",
    subscriptionDetails: {
      startDate: "01/01/2024",
      endDate: "30/01/2024",
    },
    attendance: ["02-01-2024", "06-01-2024", "15-01-2024", "16-01-2024"],
  },
  {
    memberID: "MEM-005",
    name: "Joel Gangadharan",
    email: "jgbhai1111@gmail.com",
    phoneNumber: 1918111251,
    membershipType: "Active",
    subscriptionDetails: {
      startDate: "01/12/2023",
      endDate: "30/01/2024",
    },
    attendance: ["06-01-2024"],
  },
];

const workout = [
  {
    workoutID: "WK-001",
    memberID: "MEM-001",
    date: "01/01/2024",
    exerciseList: ["Running", "PushUps", "BenchPress"],
    duration: "45 minutes",
    caloriesBurned: 500,
  },
  {
    workoutID: "WK-002",
    memberID: "MEM-001",
    date: "03/01/2024",
    exerciseList: ["PullUps", "Cardio", "LegPress"],
    duration: "125 minutes",
    caloriesBurned: 750,
  },
  {
    workoutID: "WK-003",
    memberID: "MEM-003",
    date: "09/01/2024",
    exerciseList: ["Running", "Arm Curls"],
    duration: "30 minutes",
    caloriesBurned: 100,
  },
  {
    workoutID: "WK-004",
    memberID: "MEM-004",
    date: "16/01/2024",
    exerciseList: ["Running", "PushUps", "BenchPress"],
    duration: "45 minutes",
    caloriesBurned: 500,
  },
  {
    workoutID: "WK-005",
    memberID: "MEM-005",
    date: "06/01/2024",
    exerciseList: ["Running", "PushUps", "BenchPress"],
    duration: "45 minutes",
    caloriesBurned: 500,
  },
];

const formatDate = (dateString) => {
  let parts = dateString.split("-");
  let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
  return formattedDate;
};

// Browse Workouts
const bwButton = document.querySelector("#bw-btn");
const bwResult = document.querySelector("#bw-result");

const browseWorkouts = (bwMemberID) => {
  let memberWorkouts = workout.filter(
    (workout) => workout.memberID == bwMemberID
  );

  let table;
  if (memberWorkouts.length > 0) {
    console.log(`Workout History of member ${bwMemberID}`);
    table = `
          <table border="1">
              <tr>
                  <td>Workout ID</td>
                  <td>Date</td>
                  <td>Exercises</td>
                  <td>Duration</td>
                  <td>Calories Burned</td>
              </tr>
          `;

    memberWorkouts.forEach((workout) => {
      table += `<tr>`;
      table += `<td>${workout.workoutID}</td>`;
      table += `<td>${workout.date}</td>`;
      table += `<td>${workout.exerciseList.join(", ")}</td>`;
      table += `<td>${workout.duration}</td>`;
      table += `<td>${workout.caloriesBurned}</td>`;
      table += `</tr>`;
    });
    table += `</table>`;
  } else {
    table = `<p> No Workout History found for this member: ${bwMemberID} </p>`;
  }

  bwResult.innerHTML = "Getting User data, Please Wait...";
  setTimeout(() => {
    bwResult.innerHTML = table;
  }, 2000);
};

bwButton.addEventListener("click", () => {
  const bwMemberID = document.querySelector("#bw-memberID").value;
  if (/^[a-zA-Z]{3}-[0-9]{3,20}$/.test(bwMemberID)) {
    browseWorkouts(bwMemberID);
  } else {
    alert("Invalid Member ID");
  }
});

// Track Progress
const tpButton = document.querySelector("#tp-btn");
const tpResult = document.querySelector("#tp-result");

let progressData;
const trackProgress = (tpMemberID) => {
  let memberWorkouts = workout.filter(
    (workout) => workout.memberID == tpMemberID
  );

  if (memberWorkouts.length > 0) {
    let totalDuration = 0;
    let totalCaloriesBurned = 0;

    memberWorkouts.forEach((workout) => {
      totalDuration += parseInt(workout.duration);
      totalCaloriesBurned += workout.caloriesBurned;
    });

    progressData = `
        <p>Total Workout Duration: ${totalDuration} Minutes</p>
        <p>Total Calories Burned: ${totalCaloriesBurned}</p>
    `;
  } else {
    progressData =
      "No Workout History found for this member, even though its a member";
  }

  tpResult.innerHTML = "Getting User data, Please Wait...";
  setTimeout(() => {
    tpResult.innerHTML = progressData;
  }, 2000);
};

function ismember(memberID) {
  return member.some((member) => member.memberID === memberID);
}

tpButton.addEventListener("click", () => {
  const tpMemberID = document.querySelector("#tp-memberID").value;
  if (/^[a-zA-Z]{3}-[0-9]{3,20}$/.test(tpMemberID) && ismember(tpMemberID)) {
    trackProgress(tpMemberID);
  } else if (!ismember(tpMemberID)) {
    alert("Member ID doesnt exist");
  } else {
    alert("Invalid credentials!!");
  }
});

// Manage Membership
const mmButton = document.querySelector("#mm-btn");
const mmResult = document.querySelector("#mm-result");

const manageMembership = (mmMemberID, mmAction) => {
  let desiredMember = member.find((member) => member.memberID == mmMemberID);
  if (desiredMember) {
    if (mmAction == "Activate") {
      desiredMember.membershipType = "Active";
      mmResult.innerHTML = `<p>Membership of ${mmMemberID} Changed to: Active</p>`;
    } else if (mmAction == "Deactivate") {
      desiredMember.membershipType = "Inactive";
      mmResult.innerHTML = `<p>Membership of ${mmMemberID} Changed to: Inactive</p>`;
    }
  } else {
    mmResult.innerHTML = `<p>Member: ${mmMemberID} Not Found!</p>`;
  }
};

mmButton.addEventListener("click", () => {
  const mmMemberID = document.querySelector("#mm-memberID").value;
  const mmAction = document.querySelector("#mm-action").value;
  if (/^[a-zA-Z]{3}-[0-9]{3,20}$/.test(mmMemberID))
    manageMembership(mmMemberID, mmAction);
  else alert("Invalid Credentials!!");
});

// View Members
const vmButton = document.querySelector("#vm-btn");
const vmResult = document.querySelector("#vm-result");

const viewMembers = (vmStartDate, vmEndDate) => {
  let attendingMembers = member.filter((member) => {
    for (let date of member.attendance) {
      if (date >= vmStartDate && date <= vmEndDate) {
        return true;
      } else {
        return false;
      }
    }
  });

  let attendingMemberDetails = `<h3>Members who Attended Gym Between ${vmStartDate} and ${vmEndDate}: </h3>`;

  let table;
  if (attendingMembers.length > 0) {
    table = `
      <table border="1">
          <tr>
              <td>Name</td>
              <td>memberID</td>
          </tr>
      `;

    attendingMembers.forEach((member) => {
      table += `<tr>`;
      table += `<td>${member.name}</td>`;
      table += `<td>${member.memberID}</td>`;
      table += `</tr>`;
    });
    table += `</table>`;
  } else {
    table = `<p>No Members Attended the gym between ${vmStartDate} and ${vmEndDate}!</p>`;
  }

  vmResult.innerHTML = "Getting User data, Please Wait...";
  setTimeout(() => {
    vmResult.innerHTML = attendingMemberDetails;
    vmResult.innerHTML += table;
  }, 2000);
};

vmButton.addEventListener("click", () => {
  const vmStartDate = formatDate(document.querySelector("#startDate").value);
  const vmEndDate = formatDate(document.querySelector("#endDate").value);
  viewMembers(vmStartDate, vmEndDate);
});

/*
function validatePhone(phoneNumber) {
  return /^\d{10}$/.test(phoneNumber);
}

function validateEmail(email) {
  return /^a-z0-9{5,}@g(oogle)?mail\.com$/.test(email);
}
*/
