// -----------------------------------------------------------
//   Chart Widgets
// -----------------------------------------------------------

// Traffic Line Graph

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = 
{ labels: ["16-22", "23-29", "30-6", "14-9", "20-26", "27-3", "4-10", "12-20", "17-31"],
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
    legend: {
        display: false
    }
}

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