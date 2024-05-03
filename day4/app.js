const ctx = document.getElementById('myChart');

const data = {
  labels: ['Direct or unknow', 'Search', 'Channel pages', 'External'],
  datasets: [{
    // label: 'none',
    data: [33.6, 11, 37.5, 6],
    hoverOffset: 5,
    backgroundColor: [
      '#6792FF',
      '#4473EA',
      '#1A52E1',
      '#96B3FF'
    ],
    borderWidth: 5,
    borderRadius: 5,


  }]
}

new Chart(ctx, {
  type: 'doughnut',
  data,
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        usePointStyle:true
      }
    },
    cutout: 75,
    
  }
});

const bars = document.querySelectorAll('.bar')
bars.forEach((bar, index) => {
  const barNum = index + 1
  setTimeout(() => {
    bar.setAttribute('class', `bar${barNum}`)
  }, index * 100)
})

const nums = document.querySelectorAll('.num')
nums.forEach((num, index) => {
  setTimeout(() => {

    const per = num.getAttribute('wi')
    num.innerHTML = per + '%'
  }, index * 100)
})