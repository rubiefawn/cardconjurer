//defines available frames
availableFrames = [
	{name:'Post-M15', src:'/img/frames/m15/theList/regular.svg'},
	{name:'Pre-M15', src:'/img/frames/m15/theList/old.svg'},
	{name:'Proxy Post-M15', src:'/img/frames/m15/theList/proxy-m15.svg'},
	{name:'Proxy Pre-M15', src:'/img/frames/m15/theList/proxy-7ed.svg'},
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();
