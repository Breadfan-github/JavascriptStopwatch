function StopWatch() {

  let duration, running, startTime, endTime = 0

  this.start = () => {
    if (running) 
      throw new Error ('stopWatch already running')
    
    running = true

    startTime = new Date()

  }

  this.stop = () => {
    if (!running) 
      throw new Error ('stopWatch is not started')
    
    running = false

    endTime = new Date()

    duration = (endTime.getTime() - startTime.getTime()) / 1000
   
  }


  this.reset = () => {
    duration = 0
    running = false 
    startTime = null 
    endTime = null 

  }

  Object.defineProperty(this, 'duration', {
    get: () => {
      return duration
    }
  })

}

const sw = new StopWatch()
window.sw = sw