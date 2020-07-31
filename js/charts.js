// -----------------------------------------------------------
//   Chart Widgets
// -----------------------------------------------------------

// Chart.default.global.animation.duration = 2000;

// Traffic Line Graph

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
   labels: ["16-22", "23-29", "30-6", "14-9", "20-26", "27-3", "4-10", "12-20", "17-31"],
   datasets: [{
    data: [750, 1250, 1000, 1500, 1750, 1850, 2250, 1500,2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Traffic Bar Graph

const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
        label: '# of Hits',
        data: [45, 225, 125, 200, 225, 175, 75],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
              beginAtZero:true
            }
        }]
    },
    legend : {
      display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Dountnut Chart

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 400],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions  = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

