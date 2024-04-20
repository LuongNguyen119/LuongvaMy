function updateCountdown(targetDate) {
    let now = new Date();
    let diff = targetDate - now;
  
    if (diff <= 0) {
      document.querySelector("#countdown-took-place").innerHTML = "Đang Diễn Ra";
      return;
    }
  
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(diff / 1000 / 60) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
  
    document.querySelector("#countdown-took-place").innerHTML = `${days}d ${hours}h`;
  }
  
  let targetDate = new Date(2024, 4, 30, 0, 0, 0);
  updateCountdown(targetDate);
  setInterval(() => {
    updateCountdown(targetDate);
  }, 1000);

function updateCountdown(targetDate2) {
    let now = new Date();
    let diff = targetDate2 - now;
  
    if (diff <= 0) {
      document.querySelector("#countdown-happenning").innerHTML = "Đang Diễn Ra";
      return;
    }
  
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(diff / 1000 / 60) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
  
    document.querySelector("#countdown-happenning").innerHTML = `${days}d ${hours}h`;
  }
  
  let targetDate2 = new Date(9999, 10, 30, 0, 0, 0);
  updateCountdown(targetDate2);
  setInterval(() => {
    updateCountdown(targetDate2);
  }, 1000);

  function updateCountdown(targetDate3) {
    let now = new Date();
    let diff = targetDate3 - now;
  
    if (diff <= 0) {
      document.querySelector("#countdown-upcoming").innerHTML = "Đang Diễn Ra";
      return;
    }
  
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(diff / 1000 / 60) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
  
    document.querySelector("#countdown-upcoming").innerHTML = `${days}d ${hours}h`;
  }
  
  let targetDate3 = new Date(9999, 10, 30, 0, 0, 0);
  updateCountdown(targetDate3);
  setInterval(() => {
    updateCountdown(targetDate3);
  }, 1000);