var StopWatch = {
    hour : 0,
    minute : 0,
    second : 0,
    interval : null,
    tick : function(){
        if (this.second < 59){
            this.second ++;
        }    
        else{
            this.second = 0;
            this._minuteInc();
        }  
        this.updateDisplay();     
    },
    _minuteInc : function(){
        if (this.minute < 59){
            this.minute ++;
        }
        else{
            this.minute = 0;
            this._hourInc();
        }
    },
    _hourInc : function(){
        if (this.hour < 23){
            this.hour ++;
        }
        else{
            this.hour = 0;
        }
    },
    updateDisplay: function(){
        document.getElementById('second').innerText = this._addZeros(this.second);
        document.getElementById('minute').innerText = this._addZeros(this.minute);
        document.getElementById('hour').innerText =this._addZeros(this.hour);
    },
    _addZeros: function(n) {
        var s = n + "";
        if (s.length < 2) {
          s = "0" + s;
        }
        
        return s;
      },
    start : function(){
        var _this = this;
        this.interval = setInterval(function(){
            _this.tick();
        },1000);
        this.updatebtn('start');

    },
    stop : function(){
        clearInterval(this.interval);
        this.interval = null
        this.updatebtn('stop');
    },
    reset : function(){
        this.stop();
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.updateDisplay();
        this.updatebtn('reset');
    },
    updatebtn : function(state){
        switch(state){
            case 'start':
                document.getElementById('btn_start').disabled = true;
                document.getElementById('btn_stop').disabled = false;
                document.getElementById('btn_reset').disabled = false;
                break;
            case 'stop':
                document.getElementById('btn_start').disabled = false;
                document.getElementById('btn_stop').disabled = true;
                document.getElementById('btn_reset').disabled = false;
                break;
            case 'reset':
                document.getElementById('btn_start').disabled = false;
                document.getElementById('btn_stop').disabled = false;
                document.getElementById('btn_reset').disabled = true;
                break;
        }

        }
    
                
};



