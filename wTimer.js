/******************************************
 * Websanova.com
 *
 * Resources for web entrepreneurs
 *
 * @author          Websanova
 * @copyright       Copyright (c) 2012 Websanova.
 * @license         This websanova jQuery timer is dual licensed under the MIT and GPL licenses.
 * @link            http://www.websanova.com
 * @github          http://github.com/websanova/wTimer
 * @version			1.0.2
 *
 ******************************************/

function wTimer(settings)
{
	this.settings = settings;
	this.timer = null;

	this.fps = settings.fps || 30;
	this.interval = Math.round(1000/this.fps);
	this.timeInit = null;
		
	return this;
}

wTimer.prototype = 
{	
	run: function()
	{
		var $this = this;
		
		this.settings.run.apply($this, []);
		this.timeInit += this.interval;
		
		this.timer = setTimeout(function(){$this.run()}, this.timeInit - (new Date).getTime());
	},
	
	start: function()
	{
		if(this.timer == null)
		{
			this.timeInit = (new Date).getTime();
			this.run();
		}
	},
	
	stop: function()
	{
		clearTimeout(this.timer);
		this.timer = null;
	}
}

